import React from 'react';
import Base from 'terra-base';
import moment from 'moment';
import OnsetPicker from '../../../lib/OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

// Lock date to September 20, 2016
moment.now = function () {
  return new Date(2016, 8, 20);
};

export default () =>
  <Base locale={locale}>
    <p>Onset picker with minimum required fields, birthdate of 2011-09-20</p>
    <p>Current date locked to September 20, 2016</p>
    <OnsetPicker
      birthdate="2011-09-20"
      granularitySelectName="test-granularity"
      precisionSelectName="test-precision"
      onsetDateInputName="test-onsetDate"
    />
  </Base>;
