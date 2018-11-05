// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  viewports: ['tiny', 'medium'],
  examples: {
    'Default Item Display': {
      viewports: ['tiny', 'medium', 'large'],
      parentName: 'default',
    },
    'Text Style Item Display': {
      parentName: 'text style',
      themedTestName: 'themed',
      themeableProperties: {
        '--terra-item-display-attention-color': 'pink',
        '--terra-item-display-secondary-color': 'green',
      },
    },
    'Disabled Item Display': {
      parentName: 'disabled',
      themedTestName: 'themed',
      themeableProperties: {
        '--terra-item-display-disabled-inline-icon-color': 'rgba(255, 0, 0, 1)',
      },
    },
    'Icon Item Display': {
      parentName: 'icon',
    },
    'Scaling Icon Item Display': {
      parentName: 'scaling',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-item-display',
  testSetup,
});
