import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const TitleHeader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      title="Default Header"
      endContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
    />
  </div>
);

export default TitleHeader;
