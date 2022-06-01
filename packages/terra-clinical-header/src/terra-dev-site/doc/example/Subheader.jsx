import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const Subheader = () => (
  <div>
    <Header
      startContent={<Button text="Button" />}
      text="Default Subheader"
      endContent={<Button text="Button" />}
      isSubheader
      level={3}
    />
  </div>
);

export default Subheader;
