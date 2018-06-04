module.exports = {
  collectCoverageFrom: [
    'packages/**/src/*.js',
    'packages/**/src/*.jsx',
  ],
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    `${process.cwd()}/**/jest/**/(*.)(spec|test).js?(x)`,
  ],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '/packages/terra-clinical-error-view/tests/jest/',
    '/packages/terra-clinical-no-data-view/tests/jest/',
  ],
};
