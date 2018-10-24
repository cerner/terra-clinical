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
    <ItemView comment={comment(2)} startAccessory={accessoryStart(6)} endAccessory={accessoryEnd(10)} displays={displays} layout="twoColumns" id="ItemView-two-wrap" />
  </div>
);

export default views;
