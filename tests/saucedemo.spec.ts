import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';

test('hacer una compra', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.screenshot({ path: 'screenshots/login_username.png' });
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.screenshot({ path: 'screenshots/login.png', fullPage: true });
  
  const itemsContainer = await page.locator('#inventory_container .inventory_item').all();
  const randomIndex = Math.floor(Math.random() * itemsContainer.length);
  const randomItem = itemsContainer[randomIndex];

  const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
  const expectedName = await randomItem.locator('.inventory_item_name').innerText();
  const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();
  await randomItem.getByRole('button', { name: 'Add to car' }).click();
  await page.locator('.shopping_cart_link').click();

  await page.locator('.shopping_cart_link').click();


const actualName = await page.locator('.inventory_item_name').innerText();
const actualPrice = await page.locator('.inventory_item_price').innerText();
const actualDescription = await page.locator('.inventory_item_desc').innerText();
await expect(actualName).toBe(expectedName);
await expect(actualPrice).toBe(expectedPrice);
await expect(actualDescription).toBe(expectedDescription);


await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
await page.getByRole('button', { name: 'Checkout' }).click();


await page.getByRole('textbox', { name: 'First Name' }).fill('Gohan');
await page.getByRole('textbox', { name: 'Last Name' }).fill('Zapata');
await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('83296');
await page.getByRole('button', { name: 'Continue' }).click();
await page.getByRole('button', { name: 'Finish' }).click();



 expect(expectedName).toBeTruthy();
 expect(expectedPrice).toMatch(/^\$\d+\.\d{2}$/); // valida que tenga formato de precio, ej: $9.99
 expect(expectedDescription.length).toBeGreaterThan(10);

 await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();

  console.log(`price: ${expectedPrice}, name: ${expectedName}, description: ${expectedDescription}`);
});


test('Otra compra', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginpage = new LoginPage(page);
  await loginpage.fillUsername();
  await loginpage.fillPassword();
  await loginpage.clickOnLoginButton();
});

    
    

