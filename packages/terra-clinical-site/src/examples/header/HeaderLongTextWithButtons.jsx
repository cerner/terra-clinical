/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const LongTextWithButtons = () => (
  <div>
    <br />
    <Header
      startContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      title="Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header"
      endContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
    />
    <br />
  </div>
);

export default LongTextWithButtons;
