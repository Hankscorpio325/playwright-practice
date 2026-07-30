import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Test 3', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Buscar "iphone en mercadolibre"', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/')
  await page.locator('input[id=\"cb1-edit"]').fill('iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator('a.poly-component__link').first()).toBeVisible();
  

  const titles = await page.locator('a.poly-component__title').allInnerTexts();
  console.log('the total number of results is:', titles.length);

  for (let title of titles) {
    console.log('the title is: ', title);
  }
  });
  



  
