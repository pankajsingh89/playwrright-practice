import { defineConfig, devices } from '@playwright/test';
import { log } from 'console';
import dotenv from 'dotenv'
import path from 'path'

const ENV_NAME= process.env.ENV || 'prod'
console.log(ENV_NAME)
dotenv.config({ path:path.resolve(__dirname,'testdata', `${ENV_NAME}.env`)})
console.log(process.env.EMAIL);
console.log(process.env.BASE_URL);





export default defineConfig({
  // Test cases location
  testDir: './tests',

  // Run tests sequentially
  fullyParallel: false,
  workers: 1,

  // Retry failed tests
  retries: 0,

  // Generate HTML report
  reporter: 'html',

  // Common settings for all tests
  use: {
    // Run Chrome in headed mode
    headless: false,

    // Collect trace if a test is retried
    trace: 'on-first-retry',

    // Chrome browser
    ...devices['Desktop Chrome'],
  },

  // Browser configuration
  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: { slowMo: 50, },
        trace: 'on-first-retry',
      },
    },
  ],
});

