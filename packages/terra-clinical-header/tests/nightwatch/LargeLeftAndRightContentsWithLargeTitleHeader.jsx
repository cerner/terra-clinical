import React from 'react';
import Header from '../../lib/Header';

const startContent = <div id="headerTest--startContent" style={{ backgroundColor: 'black', height: '100px', width: '200px', margin: '0 10px 0 0' }} />;
const endContent = <div id="headerTest--endContent" style={{ backgroundColor: 'black', height: '100px', width: '200px', margin: '0 0 0 10px' }} />;

export default () => (
  <Header
    id="Header"
    startContent={startContent}
    title="LongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitle"
    endContent={endContent}
  />
);
