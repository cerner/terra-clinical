import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <h2>Alerts of each of the standard types with default titles</h2>
    <br />
    <Alert id="outsideRecordsAlert" type={Alert.Opts.Types.OUTSIDE_RECORDS} >Alert of type Outside Records</Alert>
  </Base>;
