import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const Subheader = () => (
  <div>
    <Header
      startContent={<Button aria-label="Consult, Dr. Carl" text="Consult" />}
      text="Dr. Carl"
      endContent={<Button text="Information" />}
      isSubheader
      level={3}
    />
  </div>
);

export default Subheader;
