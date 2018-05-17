import React from 'react';
import Base from 'terra-base';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () => {
  // Lock date to September 20, 2016
  moment.now = () => new Date(2016, 8, 20);

  return (
    <Base locale={locale}>
      <p>Onset picker with minimum required fields, birthdate of 2011-09-20</p>
      <p>Current date locked to September 20, 2016</p>
      <OnsetPicker
        birthdate={moment('2011-09-20').format()}
        granularitySelectName="test-granularity"
        precisionSelectName="test-precision"
        onsetDateInputName="test-onsetDate"
      />
    </Base>
  );
};
