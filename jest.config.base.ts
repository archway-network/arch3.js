/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { JestConfigWithTsJest } from 'ts-jest';

import { lstatSync, readdirSync } from 'fs';
import path from 'path';

// get listing of packages in the mono repo
const basePath = path.resolve(__dirname, 'packages');
export const packages = readdirSync(basePath).filter(name => {
  return lstatSync(path.join(basePath, name)).isDirectory();
});

export const baseConfig: JestConfigWithTsJest = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'lcov',
    'html-spa',
  ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   'node_modules',
  //   '<rootDir>/src'
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@archwayhq/${name}/(.*)$`]: `<rootDir>/../${name}/src/$1`,
      }),
      {},
    ),
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '.history',
    '__mocks__',
    'node_modules',
  ],

  // Default timeout of a test in milliseconds.
  testTimeout: 3000,

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.spec.json'
    }]
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true
};
