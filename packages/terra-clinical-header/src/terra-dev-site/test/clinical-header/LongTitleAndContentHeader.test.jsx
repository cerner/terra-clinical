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
    id="Header"
    startContent={startContent}
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien. Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat. Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida. Nulla accumsan non nisl sed elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    endContent={endContent}
  />
);
