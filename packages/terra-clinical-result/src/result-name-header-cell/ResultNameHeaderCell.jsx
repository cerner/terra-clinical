import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import VisuallyHiddenText from 'terra-visually-hidden-text';
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
   * Full name of the Result Name for accessibility toolings.
   */
  fullResultName: PropTypes.string,
  /**
   * Full name of the unit for accessibility toolings.
   */
  fullUnit: PropTypes.string,
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
    fullResultName,
    fullUnit,
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

  let resultNameDisplay;
  if (fullResultName) {
    resultNameDisplay = (
      <>
        <div className={cx('name')} aria-hidden="true">
          {resultRowIndicators[typeIndicator.toLowerCase()]}
          {resultName}
        </div>
        <VisuallyHiddenText text={fullResultName} />
      </>
    );
  } else {
    resultNameDisplay = (
      <div className={cx('name')}>
        {resultRowIndicators[typeIndicator.toLowerCase()]}
        {resultName}
      </div>
    );
  }

  let unitDisplay;
  if (unit) {
    if (fullUnit) {
      unitDisplay = (
        <>
          <div className={cx('unit')} aria-hidden="true">
            {unit}
          </div>
          <VisuallyHiddenText text={fullUnit} />
        </>
      );
    } else {
      unitDisplay = <div className={cx('unit')}>{unit}</div>;
    }
  } else {
    return null;
  }

  return (
    <div
      {...customProps}
      className={nameHeaderCellClassnames}
    >
      {resultNameDisplay}
      {unitDisplay}
    </div>
  );
};

ResultNameHeaderCell.propTypes = propTypes;
ResultNameHeaderCell.defaultProps = defaultProps;

export default ResultNameHeaderCell;
