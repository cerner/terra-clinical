import React from 'react';
import classNames from 'classnames/bind';

import Header from '../../../Header';
import styles from './ClinicalHeaderCommon.test.module.scss';

const cx = classNames.bind(styles);

const content = (
  <div
    id="headerTest--content"
    className={cx('content')}
  />
);

export default () => (
  <Header
    title="Header with content on the right"
    endContent={content}
  />
);
