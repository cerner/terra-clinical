import React from 'react';
import classNames from 'classnames/bind';

import Header from '../../../Header';
import styles from './ClinicalHeaderCommontest.module.scss';

const cx = classNames.bind(styles);

const content = (
  <div
    id="headerTest--content"
    className={cx('content')}
  />
);

export default () => (
  <Header
    startContent={content}
    text="Header with content on the left"
    level={1}
  />
);
