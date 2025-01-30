module.exports = {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testMatch: [],
    transformIgnorePatterns: [
      '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|ts)$'
    ],
    transform: {},
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
    testMatch: [
        '**/*.test.{js,ts}'
      ],
      collectCoverageFrom: [
        '**/modules/**/*.js',
        '**/*.js'
      ],
      coverageDirectory: 'coverage/unit'
  };