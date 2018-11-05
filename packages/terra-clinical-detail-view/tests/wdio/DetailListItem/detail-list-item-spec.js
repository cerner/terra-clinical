// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  viewports: ['tiny', 'small', 'medium', 'large', 'huge'],
  examples: {
    'Default List Item': {
      parentName: 'Displays a Detail List Item as expected',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-detail-view',
  testSetup,
});
