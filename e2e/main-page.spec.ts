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

test('adds user inputted topic', async ({ page }) => {
  await page.goto('/');

  const projectTopics = ['Angular', 'Express', 'Full-stack', 'AI'];

  for (let i = 0; i < projectTopics.length; i++) {
    await page.locator('#project-topic-input').fill(projectTopics[i]);
    await page.locator('#project-topic-input-button').click();
  }

  const projectTopicButtons = page.locator('.project-topic-button');

  await expect(projectTopicButtons).toHaveCount(projectTopics.length);

  projectTopics.forEach(async (projectTopic, index) => {
    await expect(projectTopicButtons.nth(index)).toContainText(projectTopic);
  });
});
