import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const childStyle = { backgroundColor: 'black', height: '2em', width: '4em' };
const child = <div style={childStyle} id="CustomContent" />;
const locale = document.getElementsByTagName('html')[0].getAttribute('lang');


const PreviousNextHeader = () => (
  <Base locale={locale}>
    <ActionHeader title="Action Header">
      {child}
    </ActionHeader>
  </Base>
);

export default PreviousNextHeader;
