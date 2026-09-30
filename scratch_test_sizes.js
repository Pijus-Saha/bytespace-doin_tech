const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1485 });
  await page.goto('http://localhost:3000/error-404', { waitUntil: 'networkidle0' });
  
  // Test sizes 490px, 492px, 495px, 500px
  for (const s of ['485px', '490px', '492px', '495px', '500px']) {
    await page.evaluate((size) => {
      const el = document.querySelector('div[aria-hidden="true"]');
      el.style.fontSize = size;
    }, s);
    
    // Take screenshot of just the 404
    await page.screenshot({ path: `scratch_test_${s}.png` });
  }
  await browser.close();
  console.log('Screenshots taken!');
})();
