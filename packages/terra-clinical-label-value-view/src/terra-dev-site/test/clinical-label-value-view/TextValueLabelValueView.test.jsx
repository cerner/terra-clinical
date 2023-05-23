import React from 'react';
import classNames from 'classnames/bind';

import LabelValueView from '../../../LabelValueView';
import styles from './TextValueLabelValueView.test.module.scss';

const cx = classNames.bind(styles);

const examples = () => (
  <div>
    <h3>LabelValueView returned as a term and a definition (childOfDescriptionList="true"):</h3>
    <dl>
      <LabelValueView label="Collected By" textValue="Noah Brown" childOfDescriptionList="true" />
    </dl>
    <dl>
      <LabelValueView label="Date" textValue="12/12/12 00:00AM" childOfDescriptionList="true" />
    </dl>
    <dl>
      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" childOfDescriptionList="true" />
    </dl>
    <dl>
      <LabelValueView label="Temperature" textValue="97 F" childOfDescriptionList="true" />
    </dl>
    <dl>
      <LabelValueView label="Heart Rate" textValue="80 BPM" childOfDescriptionList="true" />
    </dl>

    <h3>LabelValueView returned as a description list (childOfDescriptionList="false"):</h3>
    <LabelValueView label="Collected By" textValue="Noah Brown" childOfDescriptionList="false" />
    <LabelValueView label="Date" textValue="12/12/12 00:00AM" childOfDescriptionList="false" />
    
    <h3>LabelValueView returned as a description list (childOfDescriptionList is undefined - not sent):</h3>
    <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" />
    <LabelValueView label="Temperature" textValue="97 F" />
    <LabelValueView label="Heart Rate" textValue="80 BPM" />
    
    <h3>Applied max-width of 200px to show word wrapping:</h3>
    <div className={cx('labelvalueview-wrapper')}>
      <LabelValueView id="LongLabelValueView" label="supercalifragilisticexpialidocious" textValue="supercalifragilisticexpialidocious" />
    </div>
  </div>
);

export default examples;
