# Proj.ai

## Testing

### e2e

- This frontend runs e2e tests using **Playwright**.
- I chose to use **Playwright** for the following reasons:
  - It has a similar syntax/feel to **Vitest**.
  - I use it at my current internship.
  - It's quick (through parallel test) and modern (supports all modern rendering engines).
- To run my e2e tests, type the following command in the terminal: `npm run test:e2e:ui`.
  - I prefer conducting my Playwright tests with the UI mode, if you prefer without: `npm run test:e2e`.
