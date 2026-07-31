import { test, expect } from '@playwright/test';

test('hacer una compra', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const itemsContainer = await page.locator('#inventory_container .inventory_item').all();
  const randomIndex = Math.floor(Math.random() * itemsContainer.length);
  const randomItem = itemsContainer[randomIndex];

  const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
  const expectedName = await randomItem.locator('.inventory_item_name').innerText();
  const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();
  await randomItem.getByRole('button', { name: 'Add to car' }).click();
  await page.locator('.shopping_cart_link').click();

  expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  const actualName = await page.locator('.inventory_item_name').innerText();
  const actualPrice = await page.locator('.inventory_item_price').innerText();
  const actualDescription = await page.locator('.inventory_item_desc').innerText();
  expect(actualName).toBe(expectedName);
  expect(actualPrice).toBe(expectedPrice);
  expect(actualDescription).toBe(expectedDescription);

 expect(expectedName).toBeTruthy();
 expect(expectedPrice).toMatch(/^\$\d+\.\d{2}$/); // valida que tenga formato de precio, ej: $9.99
 expect(expectedDescription.length).toBeGreaterThan(10);

 await page.pause()
 
  console.log(`price: ${expectedPrice}, name: ${expectedName}, description: ${expectedDescription}`);
});





     