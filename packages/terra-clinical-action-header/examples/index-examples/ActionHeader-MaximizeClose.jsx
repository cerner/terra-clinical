/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../src/ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Action Header"
      onClose={() => alert('You clicked close!')}
      onMaximize={() => alert('You clicked expand!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
