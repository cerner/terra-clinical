import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

const DividedList = () => (
  <ItemCollection
    listStyles={{ isDivided: true, hasChevrons: false }}
    rows={[item, item, item]}
  />
);

const ChevronList = () => (
  <ItemCollection
    listStyles={{ isDivided: false, hasChevrons: true }}
    rows={[item, item, item]}
  />
);

const AllStylesList = () => (
  <ItemCollection
    listStyles={{ isDivided: true, hasChevrons: true }}
    rows={[item, item, item]}
  />
);

const ListStyles = () => (
  <div>
    <h3>List Style - Divided </h3>
    <DividedList />
    <br />
    <h3>List Style - Chevrons </h3>
    <ChevronList />
    <br />
    <h3>List Style - Divided and Chevrons </h3>
    <AllStylesList />
  </div>
);

export default ListStyles;
