import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const Subheader = () => (
  <div>
    <Header
      startContent={<Button text="Button" />}
      title="Default Subheader"
      endContent={<Button text="Button" />}
      isSubheader
    />
  </div>
);

export default Subheader;
