/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-clinical-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Action Header"
      onClose={() => alert('You clicked close!')}
      onMinimize={() => alert('You clicked minimize!')}
    >
      <Button text="Custom" />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
