# Playwright E2E Test Project

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run all tests (headed mode by default)**
   ```sh
   npx playwright test
   ```
   The browser UI will be visible during test execution.

3. **Run a specific test file**
   ```sh
   npx playwright test tests/searchOasis.test.ts
   ```

4. **View test results in the Playwright UI**
   ```sh
   npx playwright test --ui
   ```

## Project Structure

- `tests/` — Contains all Playwright test files (e.g., `searchOasis.test.ts`)
- `playwright.config.ts` — Playwright configuration (headed mode enabled)

## Configuration

- Tests run in headed mode by default (see `playwright.config.ts`).
- You can change this by setting `headless: true` in the config file.

## Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)

---

Feel free to add more tests in the `tests/` directory!
