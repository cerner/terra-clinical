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

class LabeledDataGrid extends React.Component {
  static getCellText(rowIndex, colIndex) {
    return patientList[rowIndex][colIndex];
  }

  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-${rowIndex}`,
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
      cells: ((new Array(5).fill(0)).map((cellVal, cellIndex) => ({ columnKey: `Column-${cellIndex}`, colIndex: cellIndex }))).map(columnInfo => ({
        columnId: columnInfo.columnKey,
        component: <ContentCellLayout text={LabeledDataGrid.getCellText(rowIndex, columnInfo.colIndex)} label={`${sectionId}-${rowIndex}-${columnInfo.columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: LabeledDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div id="label-hidden-data-grid" className={cx('content-wrapper')}>
        <DataGrid
          id="label-hidden"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            LabeledDataGrid.buildSection('section_0', 3),
          ]}
          fill
          labelRef="Example Label"
          descriptionRef="Example Description"
        />
      </div>
    );
  }
}

export default LabeledDataGrid;
