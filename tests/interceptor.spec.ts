import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';

test('hacer una compra2', async ({ page }) => {
    page.on("request", req => {
        console.log(req.url());
    });
    await page.route("https://www.saucedemo.com/assets/bolt-shirt-1200x1500-mR0ldpVS.jpg", (route) => route.abort());
await page.route("https://www.saucedemo.com/assets/bike-light-1200x1500-DxcZRFOA.jpg", (route) => route.abort());
   // https://www.saucedemo.com/assets/bike-light-1200x1500-DxcZRFOA.jpg
    //https://www.saucedemo.com/assets/bolt-shirt-1200x1500-mR0ldpVS.jpg

    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.screenshot({ path: 'screenshots/login.png', fullPage: true });
});
