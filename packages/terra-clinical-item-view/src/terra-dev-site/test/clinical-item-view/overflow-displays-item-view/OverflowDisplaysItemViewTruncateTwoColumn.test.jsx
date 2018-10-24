import React from 'react';
import {
  comment,
  accessoryStart,
  accessoryEnd,
  displays,
} from './overflowDisplaysItemViewContent';
import ItemView from '../../../../ItemView';

const views = () => (
  <div style={{ maxWidth: '900px' }}>
    <ItemView displays={displays} isTruncated comment={comment(4)} startAccessory={accessoryStart(8)} endAccessory={accessoryEnd(12)} layout="twoColumns" textEmphasis="start" id="ItemView-two-truncate" />
  </div>
);

export default views;
