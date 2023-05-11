import React, { useState } from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import Button from 'terra-button';

const sampleText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.';

const TruncatedTextExample = () => {
  const [truncated, setTruncated] = useState(true);

  const handleClick = () => {
    setTruncated(!truncated);
  };

  return (
    <>
      <ItemDisplay text={sampleText} isTruncated={truncated} />
      <br />
      <Button text="Show/Hide" onClick={handleClick} />
    </>
  );
};

export default TruncatedTextExample;
