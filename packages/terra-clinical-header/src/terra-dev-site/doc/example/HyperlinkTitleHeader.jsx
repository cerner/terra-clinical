import React from 'react';
import Header from 'terra-clinical-header';

const HyperlinkTitleHeader = () => (
  // eslint-disable-next-line no-console
  <Header onClick={() => { console.log('Hyperlink title clicked'); }} text="John Smith" level={3} />
);

export default HyperlinkTitleHeader;
