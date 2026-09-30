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
  
  const spanInfo = await page.evaluate(() => {
    const el = document.querySelector('div[aria-hidden="true"]');
    const span = el.querySelector('span');
    const tests = [
      { size: '480px', letterSpacing: '0px' },
      { size: '485px', letterSpacing: '0px' },
      { size: '490px', letterSpacing: '0px' },
      { size: '492px', letterSpacing: '0px' },
      { size: '450px', letterSpacing: '25px' },
      { size: '460px', letterSpacing: '18px' },
      { size: '442px', letterSpacing: '45px' },
      { size: '442px', scaleX: '1.115' },
    ];
    return tests.map(t => {
      el.style.fontSize = t.size || '442px';
      el.style.letterSpacing = t.letterSpacing || '0px';
      el.style.transform = t.scaleX ? `scaleX(${t.scaleX})` : 'none';
      const r = span.getBoundingClientRect();
      return { ...t, x: r.x, width: r.width, right: r.right };
    });
  });
  console.log('Target x=279, width=884, right=1163:');
  console.log(spanInfo);
  await browser.close();
})();
