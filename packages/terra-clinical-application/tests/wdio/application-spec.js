// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  examples: {
    'Default Application': {
      parentName: 'Renders the Application with provided AppDelegate',
    },
    'No App Delegate Application': {
      parentName: 'Renders the Application without provided AppDelegate',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-application',
  testSetup,
});
