import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const BackHeader = () => (
  <Base locale={locale}>
    <ActionHeader
      title="Action Header"
      onBack={() => 1}
    />
  </Base>
);

export default BackHeader;
