#!/usr/bin/env node

/**
 * Repository Cleanup & Documentation Automation Script
 * Scans for unreferenced files, redundant assets, and temporary artifacts.
 *
 * Usage:
 *   node .agents/skills/repo-cleanup-docs/scripts/cleanup.js --dry-run
 *   node .agents/skills/repo-cleanup-docs/scripts/cleanup.js --fix
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const isFix = process.argv.includes('--fix');
const isDryRun = process.argv.includes('--dry-run') || !isFix;

console.log(`\n======================================================`);
console.log(`   Repository Cleanup & Audit Tool`);
console.log(`   Mode: ${isFix ? 'FIX (Active Deletion)' : 'DRY RUN (Report Only)'}`);
console.log(`======================================================\n`);

// 1. Gather all source files to scan for references
function getSourceFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (['node_modules', '.git', '.next'].includes(entry.name)) continue;
    if (entry.isDirectory()) {
      files = files.concat(getSourceFiles(fullPath));
    } else if (/\.(tsx?|jsx?|mjs|cjs|json|css|html|md)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const sourceFiles = getSourceFiles(path.join(ROOT_DIR, 'src')).concat(
  getSourceFiles(path.join(ROOT_DIR, 'public', 'assets'))
    .filter(f => f.endsWith('.js') || f.endsWith('.json'))
);

// Read all source file contents into memory
let combinedSourceContent = '';
for (const file of sourceFiles) {
  try {
    combinedSourceContent += fs.readFileSync(file, 'utf8') + '\n';
  } catch {
    // Ignore read errors
  }
}

// 2. Identify candidate assets in public/assets
function getAssetFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Keep designs directory protected (these are reference design mockups)
      if (entry.name === 'designs') continue;
      files = files.concat(getAssetFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const allAssetFiles = getAssetFiles(path.join(ROOT_DIR, 'public', 'assets'));

// Assets that must NEVER be deleted under any circumstances (core student cutouts, heroes, brand assets)
const PROTECTED_PATTERNS = [
  'student-female-cutout.png',
  'student-male-cutout.png',
  'student-male-tablet.png',
  'creator-purepearl-profile.png',
  'creator-purepearl.png',
  'logo-bytespace-header.png',
  'logo-mark-bytespace.svg',
];

// Known redundant or duplicate files to safely clean when verified UNREFERENCED in source
const KNOWN_UNUSED_PATTERNS = [
  '3d-white-torus-duplicate.png',
  'hero-center-illustration-transparent.png',
  'hero-center-illustration.png',
  'hero-stage-composite-transparent.png',
  'hero-student-female-composite.png',
  'hero-student-male-composite.png',
  'student-female-tablet.png',
  'student-male-full.png',
  'avatar-stack-users-2.png',
  'badge-level-beginner.png',
  'badge-rating-stars.png',
  'tag-category-uiux.png',
  'widget-happy-students.png',
  'widget-learning-progress.png',
  '3d-lime-spiral-creator.png',
  '3d-lime-zigzag-creator.png',
  '3d-white-spring-cutout.png',
];

const candidateFiles = [];
let totalBytesSaved = 0;

for (const assetPath of allAssetFiles) {
  const baseName = path.basename(assetPath);
  const relPath = path.relative(path.join(ROOT_DIR, 'public'), assetPath).replace(/\\/g, '/');

  const isProtected = PROTECTED_PATTERNS.includes(baseName);
  const isReferencedInSrc =
    combinedSourceContent.includes(baseName) || combinedSourceContent.includes(relPath);

  // CRITICAL SAFETY RULE: Never delete any asset that is actively referenced in source code or protected
  if (isReferencedInSrc || isProtected) {
    continue;
  }

  // Only truly unreferenced files reach this candidate list
  const isExplicitlyKnown = KNOWN_UNUSED_PATTERNS.includes(baseName);
  const stat = fs.statSync(assetPath);
  candidateFiles.push({
    path: assetPath,
    relPath: path.relative(ROOT_DIR, assetPath),
    size: stat.size,
    reason: isExplicitlyKnown ? 'Known superseded / duplicate asset' : 'Unreferenced in source code',
  });
  totalBytesSaved += stat.size;
}

// Check for temporary build files
const tempBuildFiles = ['tsconfig.tsbuildinfo'];
for (const tempFile of tempBuildFiles) {
  const fullPath = path.join(ROOT_DIR, tempFile);
  if (fs.existsSync(fullPath)) {
    const stat = fs.statSync(fullPath);
    candidateFiles.push({
      path: fullPath,
      relPath: tempFile,
      size: stat.size,
      reason: 'Temporary TypeScript build cache',
    });
    totalBytesSaved += stat.size;
  }
}

// 3. Output results
console.log(`Discovered ${candidateFiles.length} candidate file(s) for cleanup:`);
console.log('------------------------------------------------------');

candidateFiles.forEach((file, index) => {
  const sizeKb = (file.size / 1024).toFixed(1);
  console.log(`${index + 1}. [${sizeKb} KB] ${file.relPath}`);
  console.log(`   Reason: ${file.reason}`);
});

console.log('------------------------------------------------------');
const totalMb = (totalBytesSaved / (1024 * 1024)).toFixed(2);
console.log(`Total space reclaimable: ${totalMb} MB (${totalBytesSaved} bytes)\n`);

// 4. Perform deletion if --fix
if (isFix && candidateFiles.length > 0) {
  console.log('Executing deletions...');
  let deletedCount = 0;
  for (const file of candidateFiles) {
    try {
      fs.unlinkSync(file.path);
      deletedCount++;
      console.log(`✓ Deleted: ${file.relPath}`);
    } catch (err) {
      console.error(`✗ Failed to delete ${file.relPath}:`, err.message);
    }
  }
  console.log(`\nSuccessfully removed ${deletedCount} unused file(s).`);
  console.log(`Next recommended step: run 'npm run lint && npm run build' to verify integrity.`);
} else if (isDryRun) {
  console.log('DRY RUN complete. Run with --fix to permanently delete these files.');
}
