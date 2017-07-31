import React from 'react';
import Table from 'terra-table';
import TableHeaderCell from '../../lib/_TableHeaderCell';

// Constants
const headerData1 = <TableHeaderCell columnType="accessory" key="accessory" id="accessory" />;
const headerData2 = <TableHeaderCell columnType="comment" key="comment" id="comment" />;
const headerData3 = <TableHeaderCell columnType="display" key="display" id="display" />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render accessory, comment and display table headers', () => {
  const defaultTableHeader = <Table.Header style={{ visibility: 'hidden' }}>{header}</Table.Header>;
  const tableHeader = render(defaultTableHeader);
  expect(tableHeader).toMatchSnapshot();
});
