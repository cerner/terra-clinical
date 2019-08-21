import React from 'react';
import IconGlasses from 'terra-icon/lib/icon/IconGlasses';
import ItemDisplay from 'terra-clinical-item-display';

const sampleText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg. ';

const component = () => (
  <React.Fragment>
    <ItemDisplay text={`Center Icon Alignment (default) -- ${sampleText}`} icon={<IconGlasses />} />
    <br />
    <ItemDisplay text={`Top Icon Alignment -- ${sampleText}`} icon={<IconGlasses />} iconAlignment="top" />
    <br />
    <ItemDisplay text={`Inline Icon Alignment -- ${sampleText}`} icon={<IconGlasses />} iconAlignment="inline" />
    <br />
  </React.Fragment>
);

export default component;
