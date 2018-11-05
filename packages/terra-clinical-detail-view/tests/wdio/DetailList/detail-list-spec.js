// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  viewports: ['tiny', 'small', 'medium', 'large', 'huge'],
  selector: '#root',
  examples: {
    'Normal Item List': {
      parentName: 'Displays a default Detail List with a title and list',
    },
    'Large Item List': {
      parentName: 'Displays a default Detail List with a title and large list',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-detail-view',
  testSetup,
});
