import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const BackCloseHeader = () => (
  <Base locale={locale}>
    <ActionHeader
      title="Action Header"
      onClose={() => 1}
      onBack={() => 1}
      id="ActionHeader"
    />
  </Base>
);

export default BackCloseHeader;
