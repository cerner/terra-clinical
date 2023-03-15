import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const ContenteHeader = () => (
  <div>
    <Header
      startContent={<Button text="Button" />}
      text="Default Header"
      endContent={<Button text="Button" />}
      level={3}
    />
  </div>
);

export default ContenteHeader;
