import React from 'react';
import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
} from 'terra-html-table';

const SemanticTableWithResultTimeHeaderCell = () => (
  <Table>
    <Header>
      <Row>
        <ResultTimeHeaderCell date="Dec 21, 2010" time="20:59" />
      </Row>
      <Row>
        <ResultTimeHeaderCell date="Dec 21, 2010" time="22:00" />
      </Row>
      <Row>
        <ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" />
      </Row>
    </Header>
  </Table>
);

export default SemanticTableWithResultTimeHeaderCell;
