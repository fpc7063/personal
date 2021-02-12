module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    projects: [
      "<rootDir>/**/jest.config.js"
    ],
    testEnvironment: "node",
    testMatch: [
      "<rootDir>/tests/**/*.spec.ts"
    ]
  };