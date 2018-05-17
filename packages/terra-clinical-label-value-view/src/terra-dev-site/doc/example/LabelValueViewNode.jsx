import React from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import LabelValueView from '../../../LabelValueView';

const LabelValueViewNode = () => (
  <div>
    <LabelValueView label="Label">
      <ItemDisplay text="Clinical-Item-Display as Value" textStyle="attention" icon={<IconCritical />} />
    </LabelValueView>
  </div>
);

export default LabelValueViewNode;
