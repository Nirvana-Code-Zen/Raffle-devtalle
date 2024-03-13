import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  moduleFileExtensions: ['js', 'ts'],
  verbose: true,
  moduleNameMapper: {
    '~app/(.*)': '<rootDir>/src/$1',
    '~context/(.*)': '<rootDir>/src/contexts/$1',
    '~tests/(.*)': '<rootDir>/tests/$1'
  }
}

/* eslint-disable-next-line import/no-default-export */
export default config
