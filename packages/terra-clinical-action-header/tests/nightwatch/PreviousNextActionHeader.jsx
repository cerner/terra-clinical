import React from 'react';
import ActionHeader from '../../src/ActionHeader';

const PreviousNextHeader = () => (
  <ActionHeader
    title="Action Header"
    onPrevious={() => 1}
    onNext={() => 1}
  />
);

export default PreviousNextHeader;
