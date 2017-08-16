import React from 'react';
import Base from 'terra-base';
import moment from 'moment';
import OnsetPicker from '../../../lib/OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <OnsetPicker
      birthdate={moment().subtract(11, 'months').format()}
      granularitySelectName="test-granularity"
      precisionSelectName="test-precision"
      onsetDateInputName="test-onsetDate"
    />
  </Base>;
