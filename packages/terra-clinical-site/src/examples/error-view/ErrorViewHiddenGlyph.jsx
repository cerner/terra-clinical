import React from 'react';

import ErrorView from 'terra-clinical-error-view';

const view = () => (
  <ErrorView
    name="test name"
    description="test description"
    buttonText="test button"
    isGlyphHidden
  />);

export default view;
