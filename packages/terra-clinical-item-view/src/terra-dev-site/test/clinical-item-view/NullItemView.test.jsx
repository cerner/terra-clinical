import React from 'react';
import classNames from 'classnames/bind';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const DefaultItemView = () => (
  <div>
    <p>Given null item display prop, the div is created, but there is no content to show. The ItemView is outlined below.</p>
    <div className={cx('itemview-wrapper')}>
      <ItemView id="ItemView" displays={null} />
      <ItemView id="ItemViewInputs" displays={[null]} />
      <ItemView id="ItemViewInputs" displays={[undefined]} />
    </div>
  </div>
);

export default DefaultItemView;
