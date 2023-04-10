import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const Subheader = () => (
  <div>
    <Header
      startContent={<Button text="Consult" />}
      title="Dr. Carl"
      endContent={<Button text="Information" />}
      isSubheader
    />
  </div>
);

export default Subheader;
