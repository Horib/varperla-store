import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.getByRole('link', { name: 'Facebook link' }).click();
    await page.getByRole('link', { name: 'Instagram link' }).click();
    await page.goto('http://localhost:8000/');
    await page.getByRole('button', { name: 'Fá meira kunning' }).click();
    await page.getByPlaceholder('Email Addressa').click();
    await page.getByPlaceholder('Email Addressa').fill('r@smus.dev');
    await page.getByRole('button', { name: 'Tilmelda' }).click();
    await page.getByRole('button', { name: 'close' }).click();
});

// test('has title', async ({ page }) => {
//     await page.goto('http://localhost:8000/');

//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Várperla Blómuhandil/);

    
// });
