import { test, expect } from '@playwright/test';

test('adds selected default topic', async ({ page }) => {
  await page.goto('/');

  const firstDefaultTopic = await page
    .locator('.topic-menu-container__default-topic')
    .first()
    .innerText();
  await page.locator('.topic-menu-container__default-topic').first().click();
  const selectedTopicsElements = page.locator('.topic-menu-container__topic');
  expect(selectedTopicsElements).toHaveCount(1);
  expect(await selectedTopicsElements.first().innerText()).toBe(
    firstDefaultTopic
  );
});
