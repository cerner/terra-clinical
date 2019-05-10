import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-clinical-header/lib/Header';
import classNames from 'classnames/bind';
import styles from './Subheader.scss';

const cx = classNames.bind(styles);

const Subheader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" className={cx('button-margin')} /></div>}
      title="Default Subheader"
      endContent={<div><Button text="Button" className={cx('button-margin')} /></div>}
      isSubheader
    />
  </div>
);

export default Subheader;
