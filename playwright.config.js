
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  
  timeout: 60 * 1000,
  expect: {
    
    timeout: 5000
    
  },
  
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
  
  workers: process.env.CI ? 1 : undefined,
  
  reporter: 'html',
  
  use: {
    headless: false,
    
    actionTimeout: 0,
    
    trace: 'on-first-retry',

    
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        
        launchOptions: {
          args: ["--start-maximized"],
        },
        
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],

};

module.exports = config;
