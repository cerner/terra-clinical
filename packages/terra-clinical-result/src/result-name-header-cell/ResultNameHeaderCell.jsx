import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import styles from './ResultNameHeaderCell.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the Result Name row label.
   */
  resultName: PropTypes.string.isRequired,
  /**
   * Content to be displayed as the supporting Unit of Measure row label.
   */
  unit: PropTypes.string,
  /**
   * The padding styling to apply to the Result Name row header cell.
   * One of `'none'`, `'compact'`, or `'standard'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'compact', 'standard']),
  /**
   * Adds additional icon at beginning of row before the ResultName, indicating special information about results or cells.
   * One of `'none'` or `'calculated'`.
   */
  typeIndicator: PropTypes.oneOf(['none', 'calculated']),
};

const defaultProps = {
  paddingStyle: 'compact',
  typeIndicator: 'none',
};

const resultRowIndicators = {
  none: null,
  calculated: <IconCalculator className={cx('icon-rowindicator')} />,
};

const ResultNameHeaderCell = (props) => {
  const {
    resultName,
    unit,
    paddingStyle,
    typeIndicator,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const nameHeaderCellClassnames = classNames(
    cx(
      'clinical-result-name-header-cell',
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <div
      {...customProps}
      className={nameHeaderCellClassnames}
    >
      <div className={cx('name')}>
        {resultRowIndicators[typeIndicator.toLowerCase()]}
        {resultName}
      </div>
      {unit && <div className={cx('unit')}>{unit}</div> }
    </div>
  );
};

ResultNameHeaderCell.propTypes = propTypes;
ResultNameHeaderCell.defaultProps = defaultProps;

export default ResultNameHeaderCell;
