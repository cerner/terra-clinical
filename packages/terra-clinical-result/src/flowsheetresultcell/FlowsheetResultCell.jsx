import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ClinicalResult from '../ClinicalResult';
import ClinicalResultBloodPressure from '../ClinicalResultBloodPressure';
import observationPropShape from '../proptypes/observationPropTypes';
import styles from './FlowsheetResultCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  A set of clinical results.                                                          .
   */
  resultDataSet: PropTypes.arrayOf(PropTypes.shape({
    /**
     *  A single clinical result or blood pressure result.
     */
    resultData: observationPropShape,
  })),
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * The padding styling to apply to the Time Column Header Cell.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
};

const defaultProps = {
  resultDataSet: [],
  hideUnit: false,
  paddingStyle: 'compact',
};

const isEmpty = (str) => (!str || str.length === 0);

const FlowsheetResultCell = (props) => {
  const {
    resultDataSet,
    hideUnit,
    paddingStyle,
    ...customProps
  } = props;


  const createResultsDisplay = (resultSet) => {
    let resultsDisplay = [];
    let resultsInnerDisplay;
    let additionalResultCount = 0;
    let additionalResultInnerDisplay;
    const additionalResultInterpretations = [];

    if (!resultSet || !resultSet.length) {
      const errorDisplay = (
        <span className={cx('error-display')}>
          <ClinicalResult resultData={{ error: 'empty' }} isTruncated />
        </span>
      );
      resultsDisplay.push(errorDisplay);
    } else {
      resultsDisplay = [];
      additionalResultCount = resultSet.length - 1;
      for (let i = 0; i < resultSet.length; i += 1) {
        if (Object.prototype.hasOwnProperty.call(resultSet[i], 'result')) {
          if (i === 0) {
            resultsInnerDisplay = !isEmpty(resultSet[i].result.value) ? <ClinicalResult resultData={resultSet[i]} hideUnit={hideUnit} isTruncated className={cx({ 'has-additional-results': additionalResultCount > 0 })} /> : null;
          } else if (i > 0) {
            const hasInterpretation = !isEmpty(resultSet[i].interpretation) ? resultSet[i].interpretation : null;
            additionalResultInterpretations.push(hasInterpretation);
          }
        } else if (Object.prototype.hasOwnProperty.call(resultSet[i], 'systolic') || Object.prototype.hasOwnProperty.call(resultSet[i], 'diastolic')) {
          if (i === 0) {
            resultsInnerDisplay = !isEmpty(resultSet[i].systolic.result.value) && !isEmpty(resultSet[i].diastolic.result.value) ? <ClinicalResultBloodPressure resultData={resultSet[i]} hideUnit={hideUnit} isTruncated className={cx({ 'has-additional-results': additionalResultCount > 0 })} /> : null;
          } else if (i > 0) {
            const sysInterpretation = !isEmpty(resultSet[i].systolic.interpretation) ? resultSet[i].systolic.interpretation : null;
            const diaInterpretation = !isEmpty(resultSet[i].diastolic.interpretation) ? resultSet[i].diastolic.interpretation : null;
            additionalResultInterpretations.push(sysInterpretation);
            additionalResultInterpretations.push(diaInterpretation);
          }
        }
      }
      const additionalResultClassNames = cx([
        'additional-results-display',
      ]);

      if (additionalResultCount > 0) {
        const additionalCountDisplayValue = (additionalResultCount > 9) ? '[9+]' : `[ ${additionalResultCount} ]`;
        additionalResultInnerDisplay = (
          <div className={additionalResultClassNames}>
            {additionalCountDisplayValue}
          </div>
        );
      }
    }
    resultsDisplay.push(resultsInnerDisplay);
    resultsDisplay.push(additionalResultInnerDisplay);
    return resultsDisplay;
  };


  const flowsheetCellClassNames = cx([
    'flowsheet-result-cell',
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
    customProps.className,
  ]);


  return (
    <div {...customProps} className={flowsheetCellClassNames}>
      {createResultsDisplay(resultDataSet)}
    </div>
  );
};

FlowsheetResultCell.propTypes = propTypes;
FlowsheetResultCell.defaultProps = defaultProps;

export default FlowsheetResultCell;
