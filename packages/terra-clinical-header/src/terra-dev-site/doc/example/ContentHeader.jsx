import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-clinical-header/lib/Header';
import classNames from 'classnames/bind';
import styles from './ContentHeader.scss';

const cx = classNames.bind(styles);

const TitleHeader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" className={cx('header-button')} /></div>}
      title="Default Header"
      endContent={<div><Button text="Button" className={cx('header-button')} /></div>}
    />
  </div>
);

export default TitleHeader;
