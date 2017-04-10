import React from 'react';

import NoDataView from 'terra-no-data-view';

const view = () => (
  <NoDataView
    heading="test heading"
    subtextContent={<p>this content was insert into the content container</p>}
    isGlyphHidden={false}
  />);

export default view;
