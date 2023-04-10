import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import classNames from 'classnames/bind';
import styles from './LabelValueView.module.scss';

const cx = classNames.bind(styles);

const LabelValueViewNodeCustom = () => (
  <div>
    <LabelValueView label="Daily Feeds">
      <div className={cx('label-value-view-content')}>
        <h3>Critical Alert: Covid-19 Outbreak</h3>
        <p>Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff.</p>
      </div>
    </LabelValueView>
  </div>
);

export default LabelValueViewNodeCustom;
