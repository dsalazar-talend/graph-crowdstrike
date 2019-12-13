const { defaults } = require("jest-config");

module.exports = {
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  testMatch: ["<rootDir>/src/**/*.test.{js,ts}"],
  setupFiles: ["dotenv/config"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/ProviderGraphObjectCache.ts",
    "!src/getIterationState.ts",
    "!src/**/index.ts",
    "!src/steps/**/*.ts",
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
