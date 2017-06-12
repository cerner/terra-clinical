import React from 'react';
import Table from 'terra-table';
import TableHeaderCell from '../../../lib/_TableHeaderCell';

const HeaderExample = () => (
  <div>
    <p> Accessory columns have a width of 40 px. Comment and Display columns use the remaining available width. </p>
    <Table>
      <Table.Header style={{ visibility: 'hidden' }}>
        <TableHeaderCell columnType="accessory" key="accessory" id="accessory" />
        <TableHeaderCell columnType="comment" key="comment" id="comment" />
        <TableHeaderCell columnType="display" key="display" id="display" />
      </Table.Header>
      <Table.Rows>
        <Table.Row key="TextVisual">
          <Table.Cell content="accessory" key="accessory" style={{ backgroundColor: 'lightgrey' }} />
          <Table.Cell content="comment" key="comment" />
          <Table.Cell content="display" key="display" style={{ backgroundColor: 'lightgrey' }} />
        </Table.Row>
      </Table.Rows>
    </Table>
  </div>
);

export default HeaderExample;
