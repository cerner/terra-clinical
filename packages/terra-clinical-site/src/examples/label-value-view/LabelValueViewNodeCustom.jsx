import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';

const divStyle = {
  border: '1px solid #d3d4d5',
  borderRadius: '5px',
  padding: '0 20px',
  width: '280px',
};

const LabelValueViewNodeCustom = () => (
  <div>
    <LabelValueView label="Label">
      <div style={divStyle}>
        <h3>Custom H3 for the Value</h3>
        <p>Custom paragraph of text for the Value. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </LabelValueView>
  </div>
);

export default LabelValueViewNodeCustom;
