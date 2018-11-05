// eslint-disable-next-line import/no-extraneous-dependencies
const wdioTestDevSiteSnapshots = require('terra-dev-site/lib/dev-site-snapshots/wdio/wdioTestDevSiteSnapshots').default;

const testSetup = {
  examples: {
    'Default Header': {
      parentName: 'Header with no content',
    },
    'Title Header': {
      parentName: 'Header with a title only',
    },
    'Long Title Header': {
      parentName: 'Header with a long title that truncates',
    },
    'Left Content Header': {
      parentName: 'Header with content on the left',
    },
    'Right Content Header': {
      parentName: 'Header with content on the right',
    },
    'Left And Right Content Header': {
      parentName: 'Header with content on both sides',
    },
    'Long Title And Content Header': {
      parentName: 'Header with a long title that truncates with content',
    },
    'Left And Right Content Subheader': {
      parentName: 'Subsection header with content on both sides',
    },
    'No Title Right Content Header': {
      parentName: 'Header with no title and content on the right',
    },
  },
};

wdioTestDevSiteSnapshots({
  package: 'terra-clinical-header',
  testSetup,
});
