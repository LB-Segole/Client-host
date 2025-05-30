/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',

  // Setup file for extended assertions, mocks, etc.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Support for absolute imports and CSS modules
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Use ts-jest for TypeScript files, fall back to babel-jest for JS
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Collect coverage only from relevant TS/TSX source files
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/index.tsx',
    '!src/serviceWorker.ts',
  ],

  // Where to output coverage files
  coverageDirectory: '<rootDir>/coverage',

  // Test file patterns
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],

  // Optional: Ignoring build output and config folders
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};
