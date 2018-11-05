// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  examples: {
    'Displays Item View': [
      {
        selector: '#test-displays',
        parentName: 'with one column displays',
        themedTestName: 'themed',
        themeableProperties: {
          '--terra-item-view-content-color': 'green',
          '--terra-item-view-content-primary-color': 'purple',
          '--terra-item-view-content-secondary-color': 'maroon',
        },
      },
      {
        selector: '#test-displays-two',
        parentName: 'with two column displays',
      },
      {
        selector: '#test-displays-two-start',
        parentName: 'with two column and start displays',
      },
    ],
    'Accessory Item View': {
      parentName: 'with accessories',
    },
    'Comment Item View': [
      {
        parentName: 'with default comment set',
        selector: '#ItemView1',
      },
      {
        parentName: 'with truncated comment set',
        selector: '#ItemView2',
      },
    ],
    'Overflow Displays Item View Truncated': [
      {
        parentName: 'with the full example word wrap - one truncated',
        selector: '#ItemView-one-truncate',
      },
      {
        parentName: 'with the full example word wrap - two truncated',
        selector: '#ItemView-two-truncate',
      },
    ],
    'Overflow Displays Item View Wrap': [
      {
        parentName: 'with the full example word wrap - one column',
        selector: '#ItemView-one-wrap',
      },
      {
        parentName: 'with the full example word wrap - two column',
        selector: '#ItemView-two-wrap',
      },
    ],
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-item-view',
  testSetup,
});
