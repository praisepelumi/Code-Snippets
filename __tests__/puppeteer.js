const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:8081/login');

  await page.type('#username', 'kfan1');
  await page.type('#password', '123456');

  await page.click('#root > form > button');
})();
