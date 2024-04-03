import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({});

// Add any custom config to be passed to Jest
const config: Config = {
  rootDir: "./",
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // moduleNameMapper: {
  //   // ...
  //   "^@components/(.*)$": "<rootDir>/components/$1",
  // },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
