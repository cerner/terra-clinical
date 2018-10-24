import React from 'react';
import displaysItemContent from './displaysItemViewContent';
import ItemView from '../../../../ItemView';

const views = () => (
  <ItemView displays={displaysItemContent} layout="twoColumns" textEmphasis="start" id="test-displays-two-start" />
);

export default views;
