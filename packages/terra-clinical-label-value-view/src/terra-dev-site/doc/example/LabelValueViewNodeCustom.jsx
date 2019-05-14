import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import LabelValueView from 'terra-clinical-label-value-view/lib/LabelValueView';
import classNames from 'classnames/bind';
import styles from './LabelValueViewNodeCustom.scss';

const cx = classNames.bind(styles);

const LabelValueViewNodeCustom = () => (
  <div>
    <LabelValueView label="Label">
      <div className={cx('label-value-view-content')}>
        <h3>Custom H3 for the Value</h3>
        <p>Custom paragraph of text for the Value. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </LabelValueView>
  </div>
);

export default LabelValueViewNodeCustom;
