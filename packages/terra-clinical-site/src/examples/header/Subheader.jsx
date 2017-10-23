import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const Subheader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" /></div>}
      title="Default Subheader"
      endContent={<div><Button text="Button" /></div>}
      isSubheader
    />
  </div>
);

export default Subheader;
