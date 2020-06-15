import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const TitleHeader = () => (
  <div>
    <Header
      startContent={<Button text="Button" />}
      title="Default Header"
      endContent={<Button text="Button" />}
    />
  </div>
);

export default TitleHeader;
