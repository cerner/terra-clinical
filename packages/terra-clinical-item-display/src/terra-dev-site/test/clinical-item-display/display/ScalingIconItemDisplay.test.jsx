import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames/bind';

import ItemDisplay from '../../../../ItemDisplay';
import styles from './ItemDisplayCommon.test.module.scss';

const cx = classNames.bind(styles);

const views = () => (
  <div>
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Default" />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Larger" className={cx('text-larger')} />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Smaller" className={cx('text-smaller')} />
  </div>
);

export default views;
