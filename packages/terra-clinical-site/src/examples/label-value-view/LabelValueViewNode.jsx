import React from 'react';
import LabelValueView from 'terra-clinical-label-value-view';
import ItemDisplay from 'terra-clinical-item-display';
import IconCritical from 'terra-icon/lib/icon/IconCritical';

const LabelValueViewNode = () => (
  <div>
    <LabelValueView label="Label">
      <ItemDisplay text="Clinical-Item-Display as Value" textStyle="attention" icon={<IconCritical />} />
    </LabelValueView>
  </div>
);

export default LabelValueViewNode;
