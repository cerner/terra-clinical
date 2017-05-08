import React from 'react';
import ActionHeader from '../../src/ActionHeader';

const childStyle = { backgroundColor: 'black', height: '2em', width: '4em' };
const child = <div style={childStyle} className="test" />;


const PreviousNextHeader = () => (
  <ActionHeader title="Action Header">
    {child}
  </ActionHeader>
);

export default PreviousNextHeader;
