module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es)'
  ],
  setupTestFrameworkScriptFile: require.resolve('./test/jest.setup.js'),
  moduleDirectories: [
    'node_modules',
    'test',
    __dirname // the root directory
  ]
};
