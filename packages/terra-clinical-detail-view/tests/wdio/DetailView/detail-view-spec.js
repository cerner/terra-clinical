// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  viewports: ['tiny', 'small', 'medium', 'large', 'huge'],
  selector: '#root',
  examples: {
    'Detail View Divided': {
      parentName: 'Displays a divided Detail View with provided components',
      themedTestName: 'themed',
      themeableProperties: {
        '--terra-detail-view-subtitle-color': 'purple',
        '--terra-detail-view-accessory-color': 'red',
        '--terra-detail-view-divider-border-color': 'yellow',
        '--terra-detail-view-footer-text-color': 'green',
      },
    },
    'Detail View No Divider': {
      parentName: 'Displays a Detail View that is not divided with provided components',
    },
    'Detail View Divided Smaller Titles': {
      parentName: 'Displays a Detail View with provided components and when title size is smaller',
    },
    'Detail View Overflow Text': {
      parentName: 'Displays a Detail View with overflowed title text',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-detail-view',
  testSetup,
});
