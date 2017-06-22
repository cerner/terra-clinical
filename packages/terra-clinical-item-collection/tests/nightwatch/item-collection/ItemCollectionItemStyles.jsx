import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

const itemOneColumn = { ...item, itemStyles: { layout: 'oneColumn' } };
const itemTwoColumn = { ...item, itemStyles: { layout: 'twoColumns' } };

const OneColumnDisplay = () => (
  <ItemCollection
    rows={[itemOneColumn, itemOneColumn, itemOneColumn, itemOneColumn]}
  />
);

const TwoColumnDisplay = () => (
  <ItemCollection
    rows={[itemTwoColumn, itemTwoColumn, itemTwoColumn, itemTwoColumn]}
  />
);

const TableStyles = () => (
  <div>
    <h3>List Item Style - One Column </h3>
    <OneColumnDisplay />
    <br />
    <h3>List Item Style - Two Columns </h3>
    <TwoColumnDisplay />
    <br />
  </div>
);

export default TableStyles;
