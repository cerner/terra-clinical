import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';
import classNames from 'classnames/bind';
import styles from './ContentHeader.module.scss';

const cx = classNames.bind(styles);

const Subheader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" className={cx('header-button')} /></div>}
      title="Default Subheader"
      endContent={<div><Button text="Button" className={cx('header-button')} /></div>}
      isSubheader
    />
  </div>
);

export default Subheader;
