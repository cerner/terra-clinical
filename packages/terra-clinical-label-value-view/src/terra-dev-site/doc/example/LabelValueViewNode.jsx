import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import LabelValueView from 'terra-clinical-label-value-view';

const LabelValueViewNode = () => (
  <div>
    <LabelValueView label="Label">
      <ItemDisplay text="Clinical-Item-Display as Value" textStyle="attention" icon={<IconCritical />} />
    </LabelValueView>
  </div>
);

export default LabelValueViewNode;
