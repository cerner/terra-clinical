import React from 'react';
import { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
} from 'terra-html-table';

const SemanticTableWithResultNameHeaderCell = () => (
  <Table>
    <Header>
      <Row>
        <ResultNameHeaderCell resultName="Temp" unit="degC" />
      </Row>
      <Row>
        <ResultNameHeaderCell resultName="BP" unit="mmHg" />
      </Row>
      <Row>
        <ResultNameHeaderCell resultName="HR" unit="mmHg" />
      </Row>
    </Header>
  </Table>
);

export default SemanticTableWithResultNameHeaderCell;
