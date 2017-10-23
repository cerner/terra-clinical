import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const TitleHeader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" /></div>}
      title="Default Header"
      endContent={<div><Button text="Button" /></div>}
    />
  </div>
);

export default TitleHeader;
