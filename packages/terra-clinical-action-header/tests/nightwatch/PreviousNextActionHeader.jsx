import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const PreviousNextHeader = () => (
  <Base locale={locale}>
    <ActionHeader
      title="Action Header"
      onPrevious={() => 1}
      onNext={() => 1}
    />
  </Base>
);

export default PreviousNextHeader;
