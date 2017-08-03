/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-clinical-action-header';

const LongTextWithButtons = () => (
  <div>
    <br />
    <ActionHeader
      title="Action HeaderAction HeaderAction HeaderAction HeaderAction HeaderAction HeaderAction HeaderAction HeaderAction HeaderAction Header"
      onClose={() => alert('You clicked close!')}
      onBack={() => alert('You clicked back!')}
      onNext={() => alert('You clicked next!')}
      onPrevious={() => alert('You clicked previous!')}
    />
    <br />
  </div>
);

export default LongTextWithButtons;
