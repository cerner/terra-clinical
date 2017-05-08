import React from 'react';
import ActionHeader from '../../src/ActionHeader';

const BackCloseHeader = () => (
  <ActionHeader
    title="Action Header"
    onClose={() => 1}
    onBack={() => 1}
  />
);

export default BackCloseHeader;
