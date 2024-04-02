import React from 'react';
import classNames from 'classnames/bind';

import Header from 'terra-clinical-header';
import Button from 'terra-button';
import styles from './ClinicalHeaderCommontest.module.scss';

const cx = classNames.bind(styles);

const endContent = (
  <div
    id="headerTest--endContent"
  >
    <Button text="Update" className={cx('button')} />
    <Button text="Renew" className={cx('button')} />
    <Button text="Cancel" className={cx('button')} />
    <Button text="Complete" className={cx('button')} />
  </div>
);

export default () => (
  <Header
    id="Header"
    text="Lorem ipsum dolor sit amet "
    endContent={endContent}
    wrapContent
  />
);
