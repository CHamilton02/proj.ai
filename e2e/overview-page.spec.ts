import { test, expect } from '@playwright/test';

test('adds selected default topic', async ({ page }) => {
  await page.goto('/');

  const firstDefaultTopic = await page
    .locator('.project-topic-button--suggested')
    .first()
    .innerText();
  await page.locator('.project-topic-button--suggested').first().click();
  const selectedTopicsElements = page.locator('.project-topic-button');
  expect(selectedTopicsElements).toHaveCount(1);
  expect(await selectedTopicsElements.first().innerText()).toBe(
    firstDefaultTopic
  );
});
