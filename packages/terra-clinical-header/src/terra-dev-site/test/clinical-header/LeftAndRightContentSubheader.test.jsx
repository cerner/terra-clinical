import React from 'react';
import classNames from 'classnames/bind';

import Header from '../../../Header';
import styles from './ClinicalHeaderCommontest.module.scss';

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
    startContent={startContent}
    text="Subheader with content on the left and right"
    endContent={endContent}
    isSubheader
  />
);
