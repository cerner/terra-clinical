import React from 'react';
import Table from 'terra-table';
import TableHeaderCell from '../../../lib/TableHeaderCell';

const HeaderExample = () => (
  <Table>
    <Table.Header style={{ display: 'none' }}>
      <TableHeaderCell columnType="accessory" key="accessory" id="accessory" />
      <TableHeaderCell columnType="comment" key="comment" id="comment" />
      <TableHeaderCell columnType="display" key="display" id="display" />
    </Table.Header>
    <Table.Rows>
      <Table.Row key="TextVisual">
        <Table.Cell content="accessory" key="accessory" style={{ backgroundColor: 'grey' }} />
        <Table.Cell content="comment" key="comment" />
        <Table.Cell content="display" key="display" style={{ backgroundColor: 'grey' }} />
      </Table.Row>
      <Table.Row key="TextVisual2">
        <Table.Cell content="accessory" key="accessory" />
        <Table.Cell content="comment" key="comment" />
        <Table.Cell content="display" key="display" />
      </Table.Row>
    </Table.Rows>
  </Table>
);

export default HeaderExample;
