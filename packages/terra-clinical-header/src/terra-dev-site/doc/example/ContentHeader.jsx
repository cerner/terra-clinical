import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';
import classNames from 'classnames/bind';
import styles from './ContentHeader.module.scss';

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
