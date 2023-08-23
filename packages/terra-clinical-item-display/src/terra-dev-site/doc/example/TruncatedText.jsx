import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import ItemDisplay from 'terra-clinical-item-display';
import ShowHide from 'terra-show-hide';
import styles from './Example.module.scss';

const cx = classNamesBind.bind(styles);

const previewText = 'Mr. James is currently receiving outpatient treatment.';
const sampleText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.';

const TruncatedTextExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ShowHide
      className={cx('item-display')}
      preview={<ItemDisplay text={previewText} isTruncated />}
      isOpen={isOpen}
      onChange={handleChange}
    >
      {sampleText}
    </ShowHide>
  );
};

export default TruncatedTextExample;
