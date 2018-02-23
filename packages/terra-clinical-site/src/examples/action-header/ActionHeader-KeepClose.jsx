/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-clinical-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Action Header"
      onClose={() => alert('You clicked close!')}
      keepCloseButton
    />
    <br />
  </div>
);

export default ActionHeaderExample;
