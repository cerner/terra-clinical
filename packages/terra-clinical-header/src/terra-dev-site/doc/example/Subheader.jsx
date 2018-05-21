import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-clinical-header/lib/Header';

const Subheader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      title="Default Subheader"
      endContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      isSubheader
    />
  </div>
);

export default Subheader;
