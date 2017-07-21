import React from 'react';
import Base from 'terra-base';
import OnsetPicker from '../../../lib/OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <OnsetPicker birthdate={'2011-07-21T13:46:06-05:00'} />
  </Base>;
