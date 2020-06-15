module.exports = {
  collectCoverageFrom: [
    'packages/**/src/**/*.js',
    'packages/**/src/**/*.jsx',
    '!packages/**/src/**/terra-dev-site/**/*.js',
    '!packages/**/src/**/terra-dev-site/**/*.jsx',
  ],
  coverageReporters: [
    'html',
    'lcov',
    'cobertura',
    'text-summary',
  ],
  globalSetup: './jestGlobalSetup.js',
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  roots: [process.cwd()],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': './jestBabelTransform',
  },
};
