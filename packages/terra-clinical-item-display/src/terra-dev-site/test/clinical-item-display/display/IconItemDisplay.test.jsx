import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames/bind';

import ItemDisplay from '../../../../ItemDisplay';
import styles from './ItemDisplayCommon.test.module.scss';

const cx = classNames.bind(styles);

const testText = 'Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text';

export default () => (
  <div className={cx('content-wrapper')}>
    <ItemDisplay text={`Center / default - ${testText}`} icon={<IconSuccess />} id="test-icon-center" />
    <br />
    <ItemDisplay text={`Top - ${testText}`} icon={<IconSuccess />} id="test-icon-top" iconAlignment="top" />
    <br />
    <ItemDisplay text={`Inline - ${testText}`} icon={<IconSuccess />} id="test-icon-inline" iconAlignment="inline" />
  </div>
);
