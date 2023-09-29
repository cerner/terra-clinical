import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ItemView from '../../../ItemView';

const display1 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text display1 Text" key="123" />;

const views = () => (
  <div>
    <h2>One Column - Single Display</h2>
    <p>When there is only one display we return it without putting it into an unordered list and returning it as a list item.</p>
    <ItemView displays={[display1]} id="test-single-display" />
  </div>
);

export default views;
