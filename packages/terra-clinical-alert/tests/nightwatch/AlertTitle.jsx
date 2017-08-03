import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <h2>Alerts of the standard types with custom titles</h2>
    <br />
    <Alert id="gapCheckingAlert" type={Alert.Opts.Types.GAP_CHECKING} title="Gap_Checking_Alert:" >Alert of type Gap Checking with custom title</Alert>
    <br />
    <Alert id="outsideRecordsAlert" type={Alert.Opts.Types.OUTSIDE_RECORDS} title="Outside_Records_Alert:" >Alert of type Outside Records with custom title</Alert>
  </Base>;
