import React from 'react';
import Base from 'terra-base';
import ResultView from '../../src/ResultView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () => <Base locale={locale}><ResultView id="ResultView" /></Base>;
