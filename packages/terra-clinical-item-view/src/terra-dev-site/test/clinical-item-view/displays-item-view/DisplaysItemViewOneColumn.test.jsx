import React from 'react';
import displaysItemContent from './displaysItemViewContent';
import ItemView from '../../../../ItemView';

const views = () => (
  <ItemView displays={displaysItemContent} id="test-displays" />
);

export default views;
