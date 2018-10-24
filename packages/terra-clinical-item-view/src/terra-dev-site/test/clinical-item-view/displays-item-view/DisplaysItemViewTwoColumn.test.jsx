import React from 'react';
import displaysItemContent from './displaysItemViewContent';
import ItemView from '../../../../ItemView';

const views = () => (
  <ItemView displays={displaysItemContent} layout="twoColumns" id="test-displays-two" />
);

export default views;
