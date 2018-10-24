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
    <ItemView comment={comment(1)} startAccessory={accessoryStart(5)} endAccessory={accessoryEnd(9)} displays={displays} id="ItemView-one-wrap" />
  </div>
);

export default views;
