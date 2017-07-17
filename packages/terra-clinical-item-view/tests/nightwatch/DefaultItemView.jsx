import React from 'react';
import ItemView from '../../lib/ItemView';

const DefaultItemView = () => (
  <div>
    <p>Given no props, the div is created, but there is no content to show. The ItemView is outlined below.</p>
    <div style={{ border: '1px solid' }}>
      <ItemView id="ItemView" />
    </div>
  </div>
);

export default DefaultItemView;
