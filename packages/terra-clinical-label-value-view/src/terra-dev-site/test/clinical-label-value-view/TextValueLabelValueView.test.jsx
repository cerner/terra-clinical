import React from 'react';
import classNames from 'classnames/bind';

import LabelValueView from '../../../LabelValueView';
import styles from './TextValueLabelValueView.test.module.scss';

const cx = classNames.bind(styles);

const examples = () => (
  <div>
    <h3>LabelValueView returned as a term and a definition (isChildOfDescriptionList=&apos;true&apos;):</h3>
    <style>
      {`
        #dl-wrapper > dd {
          margin-bottom: 14px;
        }
      `}
    </style>
    <h3>LabelValueView returned as a term and a definition (isChildOfDescriptionList=&apos;true&apos;):</h3>
    <dl id="dl-wrapper">
      <LabelValueView label="Collected By" textValue="Noah Brown" isChildOfDescriptionList />
      <LabelValueView label="Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />
      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" isChildOfDescriptionList />
      <LabelValueView label="Temperature" textValue="97 F" isChildOfDescriptionList />
      <LabelValueView label="Heart Rate" textValue="80 BPM" isChildOfDescriptionList />
    </dl>
    <h3>LabelValueView returned as a description list with a topic text linked to the list (isChildOfDescriptionList=&apos;false&apos; and topicTextId is defined):</h3>
    <h4 id='topicText'>Information on patient`s vitals</h4>
    <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" isChildOfDescriptionList={false} topicTextId="topicText" />
    <LabelValueView label="Temperature" textValue="97 F" isChildOfDescriptionList={false} />
    <LabelValueView label="Heart Rate" textValue="80 BPM" isChildOfDescriptionList={false} />
    <h3>LabelValueView returned as a description list (isChildOfDescriptionList=&apos;false&apos;):</h3>
    <LabelValueView label="Collected By" textValue="Noah Brown" isChildOfDescriptionList={false} />
    <LabelValueView label="Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList={false} />
    <h3>LabelValueView returned as a description list (isChildOfDescriptionList is not given - will take the default value false):</h3>
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
