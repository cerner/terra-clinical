import React from 'react';
import Base from 'terra-base';
import ActionHeader from '../../src/ActionHeader';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () => <Base locale={locale}><ActionHeader id="ActionHeader" /></Base>;
