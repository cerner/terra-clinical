import React from 'react';
import classNames from 'classnames/bind';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable react/forbid-dom-props */
const DefaultItemView = () => (
  <div>
    <p>Given no props, the div is created, but there is no content to show. The ItemView is outlined below.</p>
    <div className={cx('itemview-wrapper')}>
      <ItemView id="ItemView" />
    </div>
  </div>
);
/* eslint-enable react/forbid-dom-props */

export default DefaultItemView;
