# Proj.ai

## Table of Contents

- [Why Angular?](#why-angular)
- [Running Locally](#running-locally)
- [Testing](#testing)
- [Prerequisites](#prerequisites)

## Why Angular?

- I will be frank about the main reason I wanted to use Angular: I simply wanted to gain some practical experience with it!
- There are some additional reasons that I love Angular and am using it for this app:
  - It provides everything I need to build a full scale app!
  - I love its HTML-based templates and separated files for DOM, styling, and TypeScript code.
  - Dependency. Injection.

## Running Locally

- Be sure to first install dependencies: `npm install`.
- To run this app locally: `ng serve --open`.
  - I included the open flag so the app opens automatically for your convenience.

## Testing

### e2e

- This frontend runs e2e tests using **Playwright**.
- I chose to use **Playwright** for the following reasons:
  - It has a similar syntax/feel to **Vitest**.
  - I use it at my current internship.
  - It's quick (through parallel test) and modern (supports all modern rendering engines).
- To run my e2e tests, type the following command in the terminal: `npm run test:e2e:ui`.
  - I prefer conducting my Playwright tests with the UI mode, if you prefer without: `npm run test:e2e`.

## Resources

- [Angular Documentation](https://angular.io/docs)
- [Playwright Documentation](https://playwright.dev/docs/intro)
