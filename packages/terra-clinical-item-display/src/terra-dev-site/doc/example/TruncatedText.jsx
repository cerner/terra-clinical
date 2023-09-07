import React, { useState, useRef } from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import ShowHide, { ShowHideFocuser } from 'terra-show-hide';

const previewText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.';
const sampleText = 'His treatment may have potential side effects such as dizziness and headaches. His symptoms have been manageable, if any side effects or concerns come up, consult with the doctor immediately.';

const TruncatedTextExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const focusRef = useRef(null);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ShowHide
      preview={<ItemDisplay text={previewText} isTruncated />}
      isOpen={isOpen}
      onChange={handleChange}
      focusRef={focusRef}
    >
      <ShowHideFocuser ref={focusRef} prefix={previewText} focusableText={sampleText} />
    </ShowHide>
  );
};

export default TruncatedTextExample;
