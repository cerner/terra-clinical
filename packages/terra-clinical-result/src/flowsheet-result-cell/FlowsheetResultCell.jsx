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
import { isEmpty, checkIsStatusInError, checkResultType } from '../common/utils';
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

const createEndIcons = (hasCommentIcon, hasModifiedIcon, hasUnverifiedIcon, resultKeyID) => {
  if (!hasCommentIcon && !hasModifiedIcon && !hasUnverifiedIcon) {
    return null;
  }
  let iconElements;
  if (hasUnverifiedIcon) {
    iconElements = <IconUnverified className={cx('icon-unverified')} />;
  } else {
    iconElements = (
      <React.Fragment>
        {hasCommentIcon ? (<IconComment className={cx('icon-comment')} />) : null}
        {hasModifiedIcon ? (<IconModified className={cx('icon-modified')} />) : null}
      </React.Fragment>
    );
  }
  return (
    <div key={(`EndAccessoryIcons-${resultKeyID}`)} className={cx('end-accessory-icons')}>
      <div className={cx('end-accessory-stack')}>
        {iconElements}
      </div>
    </div>
  );
};

const createEndAdditionalResultsStack = (count, interpretationsArr, hasAccessoryIcons, resultKeyID) => {
  const displayCount = count;
  if (displayCount < 1) {
    return null;
  }
  let additionalResultInterpretationIndicator;
  if ([
    'CRITICAL',
    'EXTREMEHIGH',
    'EXTREMELOW',
    'PANICHIGH',
    'PANICLOW',
    'VABNORMAL',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'CRITICAL';
  } else if ([
    'POSITIVE',
    'ABNORMAL',
    'HIGH',
    'LOW',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'HIGH';
  }
  const additionalResultClassNames = cx([
    'additional-end-display',
    { 'no-accessory-icons': !hasAccessoryIcons },
    { 'interpretation-critical': additionalResultInterpretationIndicator === 'CRITICAL' },
    { 'interpretation-high': additionalResultInterpretationIndicator === 'HIGH' },
  ]);
  const additionalCountDisplayValue = (displayCount > 99)
    ? (<span className={cx(['additional-results-value', 'additional-results-max-value'])}>99+</span>)
    : (<span className={cx('additional-results-value')}>{displayCount}</span>);
  return (
    <div key={(`AdditionalResultsDisplay-${resultKeyID}`)} className={additionalResultClassNames}>
      <div className={cx('additional-results-stack')}>
        {additionalCountDisplayValue}
        {additionalCountDisplayValue}
      </div>
    </div>
  );
};

const createClinicalResultDisplay = (children, hasUnverifiedIcon, hasInterpretationIcon, containerDivRef, resultKeyID) => {
  const primaryResultClassnames = cx([
    'primary-display',
    { unverified: hasUnverifiedIcon },
    { interpretation: hasInterpretationIcon },
  ]);
  return (<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={primaryResultClassnames} ref={containerDivRef}>{children}</div>);
};

const createStandardResultDisplay = (resultDataItem, hasUnverifiedIcon, hasInterpretationIcon, hideUnit, resultKeyID, numericOverflow, containerDivRef) => {
  const {
    status,
  } = resultDataItem;
  let resultsInnerDisplay;
  const isStatusInError = !isEmpty(status) ? checkIsStatusInError(status) : false;
  if (isStatusInError) {
    resultsInnerDisplay = <EnteredInError />;
  } else if (numericOverflow) {
    resultsInnerDisplay = <NumericOverflow />;
  } else {
    resultsInnerDisplay = <ClinicalResult key={(`ClinicalResult-${resultKeyID}`)} resultData={resultDataItem} hideUnit={hideUnit} isTruncated />;
  }
  const clinicalResultDisplay = createClinicalResultDisplay(resultsInnerDisplay, hasUnverifiedIcon, hasInterpretationIcon, containerDivRef, resultKeyID);
  return clinicalResultDisplay;
};

const createBloodPressureResultDisplay = (resultDataItem, hasUnverifiedIcon, hasInterpretationIcon, hideUnit, resultKeyID, numericOverflow, containerDivRef) => {
  const {
    systolic,
    diastolic,
  } = resultDataItem;
  let resultsInnerDisplay;
  const isStatusInError = {
    systolic: !isEmpty(systolic) ? checkIsStatusInError(systolic.status) : false,
    diastolic: !isEmpty(diastolic) ? checkIsStatusInError(diastolic.status) : false,
  };
  if (isStatusInError.systolic || isStatusInError.diastolic) {
    resultsInnerDisplay = <EnteredInError />;
  } else {
    resultsInnerDisplay = (<ClinicalResultBloodPressure key={(`ClinicalResultBloodPressure-${resultKeyID}`)} resultData={resultDataItem} hideUnit={hideUnit} isTruncated />);
  }
  const clinicalResultDisplay = createClinicalResultDisplay(resultsInnerDisplay, hasUnverifiedIcon, hasInterpretationIcon, containerDivRef, resultKeyID);
  return clinicalResultDisplay;
};

const setResultKeyID = (isBloodPressureResult, resultData) => {
  if (isBloodPressureResult) {
    if (resultData.id) {
      return resultData.id;
    }
    if (!isEmpty(resultData.systolic) && resultData.systolic.eventId) {
      return resultData.systolic.eventId;
    }
    if (!isEmpty(resultData.diastolic) && resultData.diastolic.eventId) {
      return resultData.diastolic.eventId;
    }
  } else {
    if (resultData.eventId) {
      return resultData.eventId;
    }
    if (resultData.id) {
      return resultData.id;
    }
  }
  return null;
};

const AttributesTemplate = (interpretationValue = false, commentBool = false, modifiedBool = false, unverifiedBool = false) => ({
  interpretation: !!(interpretationValue),
  comment: commentBool,
  modified: modifiedBool,
  unverified: unverifiedBool,
});

const unpackResultAttributes = (resultDataItem) => {
  const {
    interpretation,
    hasComment,
    isModified,
    isUnverified,
  } = resultDataItem;
  const itemAttributes = new AttributesTemplate();
  itemAttributes.interpretation = interpretation;
  itemAttributes.comment = hasComment;
  itemAttributes.modified = isModified;
  itemAttributes.unverified = isUnverified;
  return itemAttributes;
};

const unpackResultDataSet = (resultDataSet) => {
  const systolicData = resultDataSet[0].systolic;
  const diastolicData = resultDataSet[0].diastolic;
  const isfirstBloodPressureResult = (!isEmpty(diastolicData) || !isEmpty(systolicData)) || false;
  let firstResultAttributes = {};
  let firstResultData = {};
  if (isfirstBloodPressureResult) {
    const bpAttribute = {
      systolic: null,
      diastolic: null,
    };
    bpAttribute.systolic = !isEmpty(systolicData) ? unpackResultAttributes(systolicData) : new AttributesTemplate();
    bpAttribute.diastolic = !isEmpty(diastolicData) ? unpackResultAttributes(diastolicData) : new AttributesTemplate();
    firstResultAttributes = new AttributesTemplate(
      (bpAttribute.systolic.interpretation),
      (bpAttribute.systolic.comment || bpAttribute.diastolic.comment),
      (bpAttribute.systolic.modified || bpAttribute.diastolic.modified),
      (bpAttribute.systolic.unverified || bpAttribute.diastolic.unverified),
    );
    firstResultData = JSON.parse(JSON.stringify(resultDataSet[0]));
    if (!isEmpty(firstResultData.systolic)) {
      firstResultData.systolic.hasComment = false;
      firstResultData.systolic.isModified = false;
      firstResultData.systolic.isUnverified = false;
    }
    if (!isEmpty(firstResultData.diastolic)) {
      firstResultData.diastolic.hasComment = false;
      firstResultData.diastolic.isModified = false;
      firstResultData.diastolic.isUnverified = false;
    }
  } else {
    firstResultAttributes = unpackResultAttributes(resultDataSet[0]);
    firstResultData = JSON.parse(JSON.stringify(resultDataSet[0]));
    firstResultData.hasComment = false;
    firstResultData.isModified = false;
    firstResultData.isUnverified = false;
  }
  const resultKeyID = setResultKeyID(isfirstBloodPressureResult, firstResultData);
  return {
    isfirstBloodPressureResult,
    firstResultAttributes,
    firstResultData,
    resultKeyID,
  };
};

const createFlowsheetResultCellDisplay = (resultDataSet, hideUnit, numericOverflow, containerDivRef) => {
  const {
    isfirstBloodPressureResult,
    firstResultAttributes,
    firstResultData,
    resultKeyID,
  } = unpackResultDataSet(resultDataSet);
  const compositeCell = [];
  if (isfirstBloodPressureResult) {
    const firstResultDisplay = createBloodPressureResultDisplay(firstResultData, firstResultAttributes.unverified, firstResultAttributes.interpretation, hideUnit, resultKeyID, numericOverflow, containerDivRef);
    compositeCell.push(firstResultDisplay);
  } else {
    const firstResultDisplay = createStandardResultDisplay(firstResultData, firstResultAttributes.unverified, firstResultAttributes.interpretation, hideUnit, resultKeyID, numericOverflow, containerDivRef);
    compositeCell.push(firstResultDisplay);
  }
  const additionalResultCount = resultDataSet.length - 1;
  if (additionalResultCount > 0) {
    const additionalResultInterpretations = [];
    const additionalResultList = resultDataSet.slice(1, resultDataSet.length);
    additionalResultList.forEach((result) => {
      if (isfirstBloodPressureResult) {
        const sysInterpretation = !isEmpty(result.systolic.interpretation) ? result.systolic.interpretation : null;
        const diaInterpretation = !isEmpty(result.diastolic.interpretation) ? result.diastolic.interpretation : null;
        additionalResultInterpretations.push(sysInterpretation);
        additionalResultInterpretations.push(diaInterpretation);
      } else {
        const resultInterpretation = !isEmpty(result.interpretation) ? result.interpretation : null;
        additionalResultInterpretations.push(resultInterpretation);
      }
    });
    const displayCount = additionalResultCount + 1;
    const hasAccessoryIcons = (firstResultAttributes.comment || firstResultAttributes.modified || firstResultAttributes.unverified);
    const additionalResultsStackDisplay = createEndAdditionalResultsStack(displayCount, additionalResultInterpretations, hasAccessoryIcons, resultKeyID);
    compositeCell.push(additionalResultsStackDisplay);
  }
  const endAccessoryIcons = createEndIcons(firstResultAttributes.comment, firstResultAttributes.modified, firstResultAttributes.unverified, resultKeyID);
  compositeCell.push(endAccessoryIcons);

  return compositeCell;
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
    if (!containerDiv.current || !resultDataSet[0]) {
      return;
    }
    if (checkResultType(resultDataSet[0], 'NUMERIC')) {
      if (!contentWidth) {
        setContentWidth(containerDiv.current.children[0].getBoundingClientRect().width);
      }
      const containerWidth = containerDiv.current.getBoundingClientRect().width;
      if (containerWidth <= contentWidth && !numericOverflow) {
        setNumericOverflow(true);
      } else if (containerWidth > contentWidth) {
        setNumericOverflow(false);
      }
    }
  }, [resultDataSet, contentWidth, numericOverflow]);

  let flowsheetResultCellDisplay;

  if (hasResultError) {
    flowsheetResultCellDisplay = <div key="ClinicalResultDisplay-Error" className={cx(['primary-display', 'error'])}><ResultError /></div>;
  } else if (hasResultNoData) {
    flowsheetResultCellDisplay = <div key="ClinicalResultDisplay-NoData" className={cx('primary-display')}><NoData /></div>;
  } else if (!resultDataSet || !resultDataSet.length) {
    flowsheetResultCellDisplay = <div key="ClinicalResultDisplay-Error" className={cx(['primary-display', 'error'])}><ResultError /></div>;
  } else {
    flowsheetResultCellDisplay = createFlowsheetResultCellDisplay(resultDataSet, hideUnit, numericOverflow, containerDiv);
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
