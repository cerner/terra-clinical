import React from 'react';
import ActionHeader from 'terra-clinical-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Action Header"
      onClose={() => alert('You clicked close!')}
      onExpand={() => alert('You clicked expand!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
