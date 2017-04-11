import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';

const LabelValueViewFormatted = () => (
  <div>
    <LabelValueView label="Label">
      <div style={{ color: 'blue', fontSize: '2.0rem' }}>
        Sample Text
      </div>
    </LabelValueView>
  </div>
);

export default LabelValueViewFormatted;
