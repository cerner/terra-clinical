import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<Button text="Back" />}
      title="Patient Information for Individual Diagnosed with a Chronic Disease in the past or currently suffering: Comprehensive Medical History,Treatment Plan,and Prognosis Report"
      endContent={<Button text="Prescription" />}
    >
      <Button text="Medical History" />
    </Header>
  </div>
);

export default LongTextWithContent;
