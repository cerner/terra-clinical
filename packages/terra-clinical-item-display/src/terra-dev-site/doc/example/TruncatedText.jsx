import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const sampleText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.';

const TruncatedTextExample = () => (
  <ItemDisplay text={sampleText} isTruncated />
);

export default TruncatedTextExample;
