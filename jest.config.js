const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
  ...jestConfig,
  setupFiles: [
    './jest.enzymeSetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
