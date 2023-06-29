import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ResultTimeHeaderCell.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed on the first line, typically abbreviated date, e.g. `Dec 12, 2010`
   */
  date: PropTypes.string.isRequired,
  /**
   * Content to be displayed on the second line, typically 24 hour time in hours and minutes, e.g. `23:59`
   */
  time: PropTypes.string.isRequired,
  /**
   * Visually hides the date when presented in a series of side-by-side columns of the same date.
   */
  hideDate: PropTypes.bool,
  /**
   * The padding styling to apply to the Result Time column header cell.
   * One of `'none'`, `'compact'`, or `'standard'`.
  */
  paddingStyle: PropTypes.oneOf(['none', 'compact', 'standard']),
};

const defaultProps = {
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

  const dateClassnames = cx([
    'date',
    { 'hide-date': hideDate },
  ]);

  const theme = React.useContext(ThemeContext);
  const timeHeaderCellClassnames = classNames(
    cx(
      'clinical-result-time-header-cell',
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <th
      {...customProps}
      className={timeHeaderCellClassnames}
    >
      <div className={dateClassnames}>{date}</div>
      <div className={cx('time')}>{time}</div>
    </th>
  );
};

ResultTimeHeaderCell.propTypes = propTypes;
ResultTimeHeaderCell.defaultProps = defaultProps;

export default ResultTimeHeaderCell;
