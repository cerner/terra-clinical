import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const MinimizeHeader = () => (
  <Base locale={locale}>
    <ActionHeader
      title="Action Header"
      onMinimize={() => 1}
    />
  </Base>
);

export default MinimizeHeader;
