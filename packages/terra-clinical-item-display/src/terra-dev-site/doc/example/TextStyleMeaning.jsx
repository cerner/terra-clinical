import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';

const component = () => (
  <React.Fragment>
    <ItemDisplay text="Attention" textStyle="attention" textStyleMeaning="Important" />
    <p>Screen reader reads: &ldquo;Important&rdquo;, &ldquo;Attention&rdquo;, &ldquo;Important End&rdquo;</p>
    <br />
    <ItemDisplay text="Strike-through (Default)" textStyle="strikeThrough" />
    <p>Screen reader reads: &ldquo;Deletion&rdquo;, &ldquo;Strike-through (Default)&rdquo;, &ldquo;Deletion End&rdquo;</p>
    <br />
    <ItemDisplay text="Strike-through" textStyle="strikeThrough" textStyleMeaning="Update" />
    <p>Screen reader reads: &ldquo;Update&rdquo;, &ldquo;Strike-through&rdquo;, &ldquo;Update End&rdquo;</p>
  </React.Fragment>
);

export default component;
