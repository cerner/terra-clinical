import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const TitleHeader = () => (
  <div>
    <Header
      startContent={<Button text="Back" />}
      title="Patient Information"
      endContent={<Button text="Prescription" />}
    />
  </div>
);

export default TitleHeader;
