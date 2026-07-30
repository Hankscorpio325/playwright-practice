import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.glacierwater.com.mx/');
  await page.getByRole('img', { name: 'GW-32.jpeg' }).click();
  await page.getByText('¡Actúa ya!').click();
  await page.getByText('Fomenta hábitos más').click();
  await page.locator('.gallery-item-hover-inner > div').first().click();
  await page.goto('https://www.glacierwater.com.mx/politica-de-privacidad');
  await page.getByRole('paragraph').filter({ hasText: 'La solicitud deberá contener' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'La solicitud deberá contener' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Los datos que recabaremos son' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Teléfono móvil:' }).click();
  await page.getByText('Teléfono fijo:').click();
  await page.getByText('Ciudad:').click();
  await page.getByText('Correo electrónico:').click();
  await page.getByText('Teléfono móvil:').click();
  await page.locator('span').filter({ hasText: 'Teléfono fijo:' }).first().click();
  await page.getByText('Las finalidades secundarias').click();
  await page.locator('#comp-l0vicbf8').getByText('Politica de Privacidad').click();
  await page.locator('#comp-l0vicbf8').getByText('Politica de Privacidad').click();
});