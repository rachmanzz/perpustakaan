const nextJest = require('next/jest');

const nextJestConfig = nextJest({
    dir: './',
}); 

const jestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom'
}

module.exports = nextJestConfig(jestConfig);