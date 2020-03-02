import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import ClinicalResult from '../ClinicalResult';
import ClinicalResultBloodPressure from '../ClinicalResultBloodPressure';
import observationPropShape from '../proptypes/observationPropTypes';
import EnteredInError from '../common/other/_EnteredInError';
import ResultError from '../common/other/_ResultError';
import NoData from '../common/other/_KnownNoData';
import NumericOverflow from '../common/other/_NumericOverflow';
import { isEmpty, checkIsStatusInError, checkIsOfType } from '../common/utils';
import styles from './FlowsheetResultCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  A set of clinical results.                                                          .
   */
  resultDataSet: PropTypes.arrayOf(PropTypes.shape({
    /**
     *  A single clinical result or blood pressure result id.
     */
    id: PropTypes.string,
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
  /**
   * Override that shows an Error display. Used when there is a known error or problem when retrieving or assembling the clinical result data.
   */
  hasResultError: PropTypes.bool,
  /**
   * Override that shows a known "No Data" display. Used when there is known to be no value for a given clinical result concept at a specific datetime.
   */
  hasResultNoData: PropTypes.bool,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  resultDataSet: [],
  hideUnit: false,
  paddingStyle: 'compact',
  hasResultError: false,
  hasResultNoData: false,
};

const FlowsheetResultCell = (props) => {
  const {
    resultDataSet,
    hideUnit,
    paddingStyle,
    hasResultError,
    hasResultNoData,
    intl,
    ...customProps
  } = props;
  const containerDiv = useRef(null);
  const [contentWidth, setContentWidth] = useState(null);
  const [numericOverflow, setNumericOverflow] = useState(false);

  useEffect(() => {
    if (containerDiv.current && resultDataSet[0]) {
      if (checkIsOfType(resultDataSet[0], 'NUMERIC')) {
        if (!contentWidth) {
          setContentWidth(containerDiv.current.children[0].getBoundingClientRect().width);
        }
        if (containerDiv.current.getBoundingClientRect().width <= contentWidth && !numericOverflow) {
          setNumericOverflow(true);
        } else if (containerDiv.current.getBoundingClientRect().width > contentWidth) {
          setNumericOverflow(false);
        }
      }
    }
  }, [resultDataSet, contentWidth, numericOverflow]);

  let flowsheetResultCellDisplay = null;

  if (hasResultError) {
    flowsheetResultCellDisplay = <div className={cx(['primary-display', 'error'])}><ResultError /></div>;
  } else if (hasResultNoData) {
    flowsheetResultCellDisplay = <div className={cx('primary-display')}><NoData /></div>;
  } else {
    const createResultsDisplay = (resultSet) => {
      let resultKeyID;
      let resultsDisplay = [];
      let resultsInnerDisplay;
      let additionalResultCount = 0;
      let additionalResultInnerDisplay;
      const additionalResultInterpretations = [];
      let additionalResultInterpretationIndicator;
      let endAccessoryIcons;
      let primaryResultHasComment = false;
      let primaryResultIsModified = false;
      let primaryResultIsUnverified = false;
      let primaryDisplayWithInterpretation = false;

      if (!resultSet || !resultSet.length) {
        resultKeyID = 'Error';
        resultsDisplay.push(<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={cx(['primary-display', 'error'])}><ResultError /></div>);
      } else {
        resultsDisplay = [];
        additionalResultCount = resultSet.length - 1;
        for (let i = 0; i < resultSet.length; i += 1) {
          const hasStandardResult = resultSet[i].result;
          const hasSystolic = resultSet[i].systolic;
          const hasDiastolic = resultSet[i].diastolic;
          if (hasStandardResult) {
            if (i === 0) {
              const resultItem = resultSet[i];
              primaryDisplayWithInterpretation = !isEmpty(resultSet[i].interpretation);
              if (resultSet[i].hasComment) { primaryResultHasComment = true; resultItem.hasComment = false; }
              if (resultSet[i].isModified) { primaryResultIsModified = true; resultItem.isModified = false; }
              if (resultSet[i].isUnverified) { primaryResultIsUnverified = true; resultItem.isUnverified = false; }
              if (resultSet[i].eventId) resultKeyID = resultSet[i].eventId;
              else if (resultSet[i].id) resultKeyID = resultSet[i].id;
              if (checkIsStatusInError(resultSet[i])) {
                resultsInnerDisplay = <EnteredInError />;
              } else if (numericOverflow) {
                resultsInnerDisplay = <NumericOverflow />;
              } else {
                resultsInnerDisplay = (<ClinicalResult key={(`ClinicalResult-${resultKeyID}`)} resultData={resultItem} hideUnit={hideUnit} isTruncated />);
              }
            } else if (i > 0) {
              const hasInterpretation = !isEmpty(resultSet[i].interpretation) ? resultSet[i].interpretation : null;
              additionalResultInterpretations.push(hasInterpretation);
            }
          } else if (hasSystolic || hasDiastolic) {
            if (i === 0) {
              const resultItem = resultSet[i];
              const isStatusInError = (s = null, d = null) => ({
                systolic: s,
                diastolic: d,
              });
              if (hasSystolic) {
                primaryDisplayWithInterpretation = !isEmpty(resultSet[i].systolic.interpretation);
                if (resultSet[i].systolic.hasComment) { primaryResultHasComment = true; resultItem.systolic.hasComment = false; }
                if (resultSet[i].systolic.isModified) { primaryResultIsModified = true; resultItem.systolic.isModified = false; }
                if (resultSet[i].systolic.isUnverified) { primaryResultIsUnverified = true; resultItem.systolic.isUnverified = false; }
                isStatusInError.systolic = checkIsStatusInError(resultSet[i].systolic);
              }
              if (hasDiastolic) {
                if (resultSet[i].diastolic.hasComment) { primaryResultHasComment = true; resultItem.diastolic.hasComment = false; }
                if (resultSet[i].diastolic.isModified) { primaryResultIsModified = true; resultItem.diastolic.isModified = false; }
                if (resultSet[i].diastolic.isUnverified) { primaryResultIsUnverified = true; resultItem.diastolic.isUnverified = false; }
                isStatusInError.diastolic = checkIsStatusInError(resultSet[i].diastolic);
              }
              if (resultSet[i].id) resultKeyID = resultSet[i].id;
              else if (hasSystolic && resultSet[i].systolic.eventId) resultKeyID = resultSet[i].systolic.eventId;
              else if (hasDiastolic && resultSet[i].diastolic.eventId) resultKeyID = resultSet[i].diastolic.eventId;
              if (isStatusInError.systolic || isStatusInError.diastolic) {
                resultsInnerDisplay = <EnteredInError />;
              } else {
                resultsInnerDisplay = (<ClinicalResultBloodPressure key={(`ClinicalResultBloodPressure-${resultKeyID}`)} resultData={resultItem} hideUnit={hideUnit} isTruncated />);
              }
            } else if (i > 0) {
              const sysInterpretation = !isEmpty(resultSet[i].systolic.interpretation) ? resultSet[i].systolic.interpretation : null;
              const diaInterpretation = !isEmpty(resultSet[i].diastolic.interpretation) ? resultSet[i].diastolic.interpretation : null;
              additionalResultInterpretations.push(sysInterpretation);
              additionalResultInterpretations.push(diaInterpretation);
            }
          }
        }

        const primaryResultClassnames = cx([
          'primary-display',
          { unverified: primaryResultIsUnverified },
          { interpretation: primaryDisplayWithInterpretation },
        ]);

        resultsDisplay.push(<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={primaryResultClassnames} ref={containerDiv}>{resultsInnerDisplay}</div>);

        if (additionalResultInterpretations.length > 0) {
          if (additionalResultInterpretations.includes('CRITICAL')
            || additionalResultInterpretations.includes('EXTREMEHIGH')
            || additionalResultInterpretations.includes('EXTREMELOW')
            || additionalResultInterpretations.includes('PANICHIGH')
            || additionalResultInterpretations.includes('PANICLOW')
            || additionalResultInterpretations.includes('VABNORMAL')
          ) {
            additionalResultInterpretationIndicator = 'CRITICAL';
          } else if (additionalResultInterpretations.includes('POSITIVE')
            || additionalResultInterpretations.includes('ABNORMAL')
            || additionalResultInterpretations.includes('HIGH')
            || additionalResultInterpretations.includes('LOW')
          ) {
            additionalResultInterpretationIndicator = 'HIGH';
          }
        }

        const additionalResultClassNames = cx([
          'additional-end-display',
          { 'no-accessory-icons': !(primaryResultHasComment || primaryResultIsModified || primaryResultIsUnverified) },
          { 'interpretation-critical': additionalResultInterpretationIndicator === 'CRITICAL' },
          { 'interpretation-high': additionalResultInterpretationIndicator === 'HIGH' },
        ]);

        if (additionalResultCount > 0) {
          const additionalCountDisplayValue = ((additionalResultCount + 1) > 99)
            ? (<span className={cx(['additional-results-value', 'additional-results-max-value'])}>99+</span>)
            : (<span className={cx('additional-results-value')}>{additionalResultCount + 1}</span>);
          additionalResultInnerDisplay = (
            <div key={(`AdditionalResultsDisplay-${resultKeyID}`)} className={additionalResultClassNames}>
              <div
                className={cx('additional-results-stack')}
                ariaLabel={intl.formatMessage({ id: 'Terra.clinicalResult.additionalResults' }, { numberOfAdditionalResults: additionalResultCount })}
              >
                {additionalCountDisplayValue}
                {additionalCountDisplayValue}
              </div>
            </div>
          );
        }
        resultsDisplay.push(additionalResultInnerDisplay);

        const commentIconElement = primaryResultHasComment && !primaryResultIsUnverified ? (<IconComment className={cx('icon-comment')} />) : null;
        const modifiedIconElement = primaryResultIsModified && !primaryResultIsUnverified ? (<IconModified className={cx('icon-modified')} />) : null;
        const unverifiedIconElement = primaryResultIsUnverified ? (<IconUnverified className={cx('icon-unverified')} />) : null;
        if (primaryResultHasComment || primaryResultIsModified || primaryResultIsUnverified) {
          endAccessoryIcons = (
            <div key={(`EndAccessoryIcons-${resultDataSet[0].id}`)} className={cx('end-accessory-icons')}>
              <div className={cx('end-accessory-stack')}>
                {commentIconElement}
                {modifiedIconElement}
                {unverifiedIconElement}
              </div>
            </div>
          );
        } else {
          endAccessoryIcons = null;
        }
        resultsDisplay.push(endAccessoryIcons);
      }
      return resultsDisplay;
    };

    flowsheetResultCellDisplay = createResultsDisplay(resultDataSet);
  }

  const flowsheetCellClassNames = cx([
    'flowsheet-result-cell',
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
  ]);

  return (
    <div
      {...customProps}
      className={customProps.className ? `${flowsheetCellClassNames} ${customProps.className}` : flowsheetCellClassNames}
    >
      {flowsheetResultCellDisplay}
    </div>
  );
};

FlowsheetResultCell.propTypes = propTypes;
FlowsheetResultCell.defaultProps = defaultProps;

export default injectIntl(FlowsheetResultCell);
