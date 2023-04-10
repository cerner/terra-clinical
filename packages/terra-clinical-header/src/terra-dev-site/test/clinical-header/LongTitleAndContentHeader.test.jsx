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
    title="This is a header with long text .This is an element provides a customizable header layout with a prominent title options for the elements.This component saves time and effort in designing a header from scratch and ensures consistency across a website's pages."
    endContent={endContent}
  />
);
