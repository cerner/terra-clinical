import React, { useState } from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import ShowHide from 'terra-show-hide';

const sampleText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.';

const TruncatedTextExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ShowHide preview={<ItemDisplay text={sampleText} isTruncated />} isOpen={isOpen} onChange={handleChange}>
        {sampleText}
      </ShowHide>
    </>
  );
};

export default TruncatedTextExample;
