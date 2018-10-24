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
    <ItemView displays={displays} isTruncated comment={comment(3)} startAccessory={accessoryStart(7)} endAccessory={accessoryEnd(11)} textEmphasis="start" id="ItemView-one-truncate" />
  </div>
);

export default views;
