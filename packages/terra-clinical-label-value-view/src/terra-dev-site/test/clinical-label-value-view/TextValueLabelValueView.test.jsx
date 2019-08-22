import React from 'react';
import classNames from 'classnames/bind';

import LabelValueView from '../../../LabelValueView';
import styles from './TextValueLabelValueView.test.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable react/forbid-dom-props */
const examples = () => (
  <div>
    <h3>Default Example:</h3>
    <LabelValueView id="LabelValueView" label="Label" textValue="Sample Text" />
    <h3>Applied max-width of 200px to show word wrapping:</h3>
    <div className={cx('labelvalueview-wrapper')}>
      <LabelValueView id="LongLabelValueView" label="supercalifragilisticexpialidocious" textValue="supercalifragilisticexpialidocious" />
    </div>
  </div>
);
/* eslint-enable react/forbid-dom-props */

export default examples;
