import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';

import ContentCellLayout from './ContentCellLayout';
import styles from './ClinicalDataGridCommon.test.module.scss';

const cx = classNames.bind(styles);

const pinnedColumns = [
  {
    id: 'Column-0',
    text: 'Patient',
  },
];

const overflowColumns = [
  {
    id: 'Column-1',
    text: 'Height',
  },
  {
    id: 'Column-2',
    text: 'Weight',
  },
  {
    id: 'Column-3',
    text: 'Diagnoses',
  },
];

const patientList = [
  ['Bob', '72 in', '79 kg', 'Chest pain'],
  ['Jim', '75 in', '87 kg', 'Back pain'],
  ['Sue', '67 in', '58 kg', 'Headache'],
];

class LabelExternalDataGrid extends React.Component {
  static getCellText(rowIndex, colIndex) {
    return patientList[rowIndex][colIndex];
  }

  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-${rowIndex}`,
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
      cells: ((new Array(5).fill(0)).map((cellVal, cellIndex) => ({ columnKey: `Column-${cellIndex}`, colIndex: cellIndex }))).map(columnInfo => ({
        columnId: columnInfo.columnKey,
        component: <ContentCellLayout text={LabelExternalDataGrid.getCellText(rowIndex, columnInfo.colIndex)} label={`${sectionId}-${rowIndex}-${columnInfo.columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: LabelExternalDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  setLabelRef = (node) => {
    this.labelNode = node;
  }

  getLabelRef = () => this.labelNode;

  setDescriptionRef = (node) => {
    this.descriptionNode = node;
  }

  getDescriptionRef = () => this.descriptionNode;

  render() {
    return (
      <div id="label-external-data-grid" className={cx('content-wrapper')}>
        <h3 ref={this.setLabelRef}>Example Label</h3>
        <p ref={this.setDescriptionRef}>Example Description</p>
        <DataGrid
          id="label-external"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            LabelExternalDataGrid.buildSection('section_0', 3),
          ]}
          fill
          labelRef={this.getLabelRef}
          descriptionRef={this.getDescriptionRef}
        />
      </div>
    );
  }
}

export default LabelExternalDataGrid;
