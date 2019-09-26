import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ResultNameHeaderCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the Result Name row label.
   */
  resultName: PropTypes.string,
  /**
   * Content to be displayed as the supporting Unit of Measure row label.
   */
  unit: PropTypes.string,
  /**
   * The padding styling to apply to the Time Column Header Cell.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
};

const defaultProps = {
  resultName: '',
  unit: undefined,
  paddingStyle: 'compact',
};

const ResultNameHeaderCell = (props) => {
  const {
    resultName,
    unit,
    paddingStyle,
    ...customProps
  } = props;

  const nameHeaderCellClassnames = cx([
    'clinical-result-name-header-cell',
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={nameHeaderCellClassnames}>
      <div className={cx('name')}>{resultName}</div>
      {unit && <div className={cx('unit')}>{unit}</div> }
    </div>
  );
};

ResultNameHeaderCell.propTypes = propTypes;
ResultNameHeaderCell.defaultProps = defaultProps;

export default ResultNameHeaderCell;
