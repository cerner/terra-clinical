import React from 'react';
import Button from 'terra-button';
import Header from '../../../Header';

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
