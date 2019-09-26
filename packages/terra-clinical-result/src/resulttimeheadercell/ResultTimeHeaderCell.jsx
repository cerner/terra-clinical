import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ResultTimeHeaderCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed on the first line, typically abbrivated date, e.g. `Dec 12, 2010`
   */
  date: PropTypes.string,
  /**
   * Content to be displayed on the second line, typically 24 hour time in hours and minutes, e.g. `23:59`
   */
  time: PropTypes.string,
  /**
   * Visually hides the date when presented in a series of side-by-side columns of the same date.
   */
  hideDate: PropTypes.bool,
  /**
   * The padding styling to apply to the Time Column Header Cell.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
};

const defaultProps = {
  date: undefined,
  time: undefined,
  hideDate: false,
  paddingStyle: 'compact',
};

const ResultTimeHeaderCell = (props) => {
  const {
    date,
    time,
    hideDate,
    paddingStyle,
    ...customProps
  } = props;

  const timeHeaderCellClassnames = cx([
    'clinical-result-time-header-cell',
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
    customProps.className,
  ]);

  const dateClassnames = cx([
    'date',
    { 'hide-date': hideDate },
  ]);

  return (
    <div {...customProps} className={timeHeaderCellClassnames}>
      {date && <div className={dateClassnames}>{date}</div>}
      {time && <div className={cx('time')}>{time}</div>}
    </div>
  );
};

ResultTimeHeaderCell.propTypes = propTypes;
ResultTimeHeaderCell.defaultProps = defaultProps;

export default ResultTimeHeaderCell;
