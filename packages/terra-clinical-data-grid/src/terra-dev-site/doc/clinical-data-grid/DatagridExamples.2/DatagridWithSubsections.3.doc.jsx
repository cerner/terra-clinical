import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';
import DatagridWithSubsections from './DatagridWithSubsections';
import DatagridWithSubsectionsSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/DatagridWithSubsections';

const DatagridWithSubsectionsExample = () => (
  <ExampleTemplate
    description="This example features multiple subsections. Section 0 is collapsible. The header for Section 1 contains keyboard-accessible content in its endAccessory region."
    example={<DatagridWithSubsections />}
    exampleSrc={DatagridWithSubsectionsSrc}
  />
);

export default DatagridWithSubsectionsExample;
