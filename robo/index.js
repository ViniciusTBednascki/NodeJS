const puppeteer = require('puppeteer-core');
  
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
      });
    const page = await browser.newPage();
    await page.goto('https://app.hangdocs.com/login');
    await page.type('#inputemail', 'andre.calvo@ovrvu.com.br')
    await page.waitForTimeout(2000)
    await page.type('#inputpassword', '123mudar')
    await page.waitForTimeout(2000)
    await page.click('button[type="submit"]')
    await page.waitForTimeout(5000)
    await page.screenshot({ path: 'GFG.png' });
    await browser.close();
    //await page.waitForNavigation();
})();