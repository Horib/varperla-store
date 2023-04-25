// test('User can submit the signup form', async ({ page }) => {
//     await page.goto('http://localhost:3000');

//     // Mock the API response
//     await page.route('/api/subscribe', (route) => {
//         route.fulfill({
//             status: 200,
//             contentType: 'application/json',
//             body: JSON.stringify({ message: 'Success' }),
//         });
//     });

//     // Fill the form
//     await page.fill('#email', 'test@example.com');

//     // Click the submit button
//     await page.click('button[type="submit"]');

//     // Wait for the "Loading..." status message
//     await page.waitForSelector('text=Loading...');

//     // Wait for the success message
//     await page.waitForSelector('text=Successfully subscribed!');

//     // Check if the success message is displayed
//     const successMessage = await page.$('text=Successfully subscribed!');
//     expect(successMessage).not.toBeNull();
// });
