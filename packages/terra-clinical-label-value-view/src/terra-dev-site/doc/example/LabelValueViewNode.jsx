import React from 'react';
import classNames from 'classnames/bind';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import LabelValueView from 'terra-clinical-label-value-view';
import styles from './LabelValueView.module.scss';

const cx = classNames.bind(styles);

const LabelValueViewNode = () => (
  <div>
    <LabelValueView label="Alert">
      <div className={cx('container')}>
        <div className={cx('icon')}>
          <IconCritical />
        </div>
        <div className={cx('text')}>
          Critical Alert: Blood Pressure is high.
        </div>
      </div>
    </LabelValueView>
  </div>
);

export default LabelValueViewNode;
