import React from 'react';
import classNames from 'classnames/bind';

import Header from '../../../Header';
import styles from './ClinicalHeaderCommon.test.module.scss';

const cx = classNames.bind(styles);

const startContent = (
  <div
    id="headerTest--startContent"
    className={cx('start-content')}
  />
);
const endContent = (
  <div
    id="headerTest--endContent"
    className={cx('end-content')}
  />
);

export default () => (
  <Header
    id="Header"
    startContent={startContent}
    title="LongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitle"
    endContent={endContent}
  />
);
