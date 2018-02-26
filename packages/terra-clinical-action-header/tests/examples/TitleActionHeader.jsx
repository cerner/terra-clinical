import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const TitleHeader = () => (
  <Base locale={locale}>
    <ActionHeader
      title="Action Header"
      id="ActionHeader"
    />
  </Base>
);

export default TitleHeader;
