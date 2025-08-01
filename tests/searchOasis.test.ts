import { test, expect } from '@playwright/test';

test('Search for Oasis and verify entity title', async ({ page }) => {
  // Navigate to Spotify
  await page.goto('https://open.spotify.com/');

  // Perform search
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('Oasis');
  await page.goto('https://open.spotify.com/search/Oasis');
  await page.getByRole('checkbox', { name: 'Artists' }).click();
  await page.getByTestId('search-category-card-0').getByRole('link', { name: 'Oasis' }).click();

  // Verify entity title
  const entityTitle = await page.getByTestId('entityTitle').textContent();
  expect(entityTitle).toContain('Oasis'); // Adjust assertion to match expected result
});
