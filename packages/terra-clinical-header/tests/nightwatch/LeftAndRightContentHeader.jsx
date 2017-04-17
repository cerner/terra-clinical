import React from 'react';

import Header from '../../lib/Header';

const startContent = <div className="terraClinical-HeaderTest--startContent" style={{ backgroundColor: 'black', height: '30px', width: '300px', margin: '0 10px 0 0' }} />;
const endContent = <div className="terraClinical-HeaderTest--endContent" style={{ backgroundColor: 'black', height: '30px', width: '300px', margin: '0 10px 0 0' }} />;

export default () => (
  <Header
    startContent={startContent}
    title="Header with content on the left and right"
    endContent={endContent}
  />
);
