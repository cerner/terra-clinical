import React from 'react';
import Table from 'terra-table';
import TableHeaderCell from '../../../lib/TableHeaderCell';

const HeaderExample = () => (
  <Table>
    <Table.Header style={{ display: 'none' }}>
      <TableHeaderCell columnWidth="tiny" key="tiny" id="tiny" />
      <TableHeaderCell columnWidth="small" key="small" id="small" />
      <TableHeaderCell columnWidth="medium" key="medium" id="medium" />
      <TableHeaderCell columnWidth="large" key="large" id="large" />
      <TableHeaderCell columnWidth="huge" key="huge" id="huge" />
    </Table.Header>
    <Table.Rows>
      <Table.Row key="TextVisual">
        <Table.Cell content="tiny" key="tiny" style={{ backgroundColor: 'grey' }} />
        <Table.Cell content="small" key="small" />
        <Table.Cell content="medium" key="medium" style={{ backgroundColor: 'grey' }} />
        <Table.Cell content="large" key="large" />
        <Table.Cell content="huge" key="huge" style={{ backgroundColor: 'grey' }} />
      </Table.Row>
      <Table.Row key="TextVisual2">
        <Table.Cell content="tiny" key="tiny" />
        <Table.Cell content="small" key="small" />
        <Table.Cell content="medium" key="medium" />
        <Table.Cell content="large" key="large" />
        <Table.Cell content="huge" key="huge" />
      </Table.Row>
    </Table.Rows>
  </Table>
);

export default HeaderExample;
