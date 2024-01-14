const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./src/",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "**/utils/**/*.test.[jt]s?(x)",
  ],
};

module.exports = createJestConfig(config);
