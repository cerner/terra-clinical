import React from 'react';
import ActionHeader from 'terra-clinical-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Action Header"
      onClose={() => alert('You clicked close!')}
      onBack={() => alert('You clicked back!')}
      onNext={() => alert('You clicked next!')}
      onPrevious={() => alert('You clicked previous!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
