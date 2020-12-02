import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import { isEmpty, checkIsStatusInError, checkTypeNumeric } from '../common/utils';
import styles from './FlowsheetResultCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  A set of clinical results. Example object structure listed above.                                              .
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
};

const defaultProps = {
  resultDataSet: [],
  paddingStyle: 'compact',
};

const interpretationsWithIcons = [
  'critical',
  'critical-high',
  'critical-low',
  'positive',
  'abnormal',
  'high',
  'low',
];

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
    'critical',
    'critical-high',
    'critical-low',
    'positive',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'critical';
  } else if ([
    'abnormal',
    'high',
    'low',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'high';
  }
  const additionalResultClassNames = cx([
    'additional-end-display',
    { 'no-accessory-icons': !hasAccessoryIcons },
    { 'interpretation-critical': additionalResultInterpretationIndicator === 'critical' },
    { 'interpretation-high': additionalResultInterpretationIndicator === 'high' },
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
    { interpretation: hasInterpretationIcon && !hasUnverifiedIcon },
  ]);
  return (<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={primaryResultClassnames} ref={containerDivRef}>{children}</div>);
};

const createStandardResultDisplay = (resultDataItem, resultAttributes, hideUnit, resultKeyID, numericOverflow, containerDivRef) => {
  let resultsInnerDisplay;
  if (resultAttributes.statusInError) {
    resultsInnerDisplay = <EnteredInError />;
  } else if (numericOverflow) {
    resultsInnerDisplay = <NumericOverflow />;
  } else {
    resultsInnerDisplay = <ClinicalResult key={(`ClinicalResult-${resultKeyID}`)} {...resultDataItem} hideUnit={hideUnit} isTruncated isUnverified={resultAttributes.unverified} hideAccessoryDisplays />;
  }
  const clinicalResultDisplay = createClinicalResultDisplay(resultsInnerDisplay, resultAttributes.unverified, resultAttributes.interpretationIcon, containerDivRef, resultKeyID);
  return clinicalResultDisplay;
};

const createBloodPressureResultDisplay = (resultDataItem, resultAttributes, hideUnit, resultKeyID, containerDivRef) => {
  const {
    systolic,
    diastolic,
  } = resultDataItem;
  let resultsInnerDisplay;
  if (resultAttributes.statusInError) {
    resultsInnerDisplay = <EnteredInError />;
  } else {
    resultsInnerDisplay = (<ClinicalResultBloodPressure key={(`ClinicalResultBloodPressure-${resultKeyID}`)} systolic={systolic} diastolic={diastolic} hideUnit={hideUnit} isTruncated hideAccessoryDisplays />);
  }
  const clinicalResultDisplay = createClinicalResultDisplay(resultsInnerDisplay, resultAttributes.unverified, resultAttributes.interpretationIcon, containerDivRef, resultKeyID);
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
    if (resultData.id) {
      return resultData.id;
    }
    if (resultData.eventId) {
      return resultData.eventId;
    }
  }
  return null;
};

const checkIfSingleOrPairedResult = (resultDataItem) => {
  const isSingleResult = !!resultDataItem.result || false;
  if (isSingleResult) {
    return { isSingleResult, isPairedResult: false };
  }
  const hasSystolicData = !isEmpty(resultDataItem.systolic) ? resultDataItem.systolic.result : false;
  const hasDiastolicData = !isEmpty(resultDataItem.diastolic) ? resultDataItem.diastolic.result : false;
  const isPairedResult = (hasSystolicData || hasDiastolicData) || false;
  return { isSingleResult, isPairedResult };
};

const AttributesTemplate = (statusInError = false, interpretationValue = false, commentBool = false, modifiedBool = false, unverifiedBool = false) => ({
  statusInError,
  interpretationIcon: !!interpretationValue,
  comment: commentBool,
  modified: modifiedBool,
  unverified: unverifiedBool,
});

const unpackResultAttributes = (resultDataItem) => {
  const {
    status,
    interpretation,
    hasComment,
    isModified,
    isUnverified,
  } = resultDataItem;
  const itemAttributes = new AttributesTemplate();
  itemAttributes.statusInError = !isEmpty(status) ? checkIsStatusInError(status) : false;
  itemAttributes.interpretationIcon = !itemAttributes.statusInError && interpretationsWithIcons.includes(interpretation);
  itemAttributes.comment = hasComment;
  itemAttributes.modified = isModified;
  itemAttributes.unverified = isUnverified;
  return itemAttributes;
};

const unpackResultDataSet = (resultDataSet) => {
  const firstResultData = resultDataSet[0];
  let firstResultAttributes = {};
  const { isSingleResult, isPairedResult } = checkIfSingleOrPairedResult(firstResultData);
  if (isSingleResult) {
    firstResultAttributes = unpackResultAttributes(firstResultData);
  } else if (isPairedResult) {
    const bpAttribute = {
      systolic: null,
      diastolic: null,
    };
    const systolicData = firstResultData.systolic;
    const diastolicData = firstResultData.diastolic;
    bpAttribute.systolic = !isEmpty(systolicData) ? unpackResultAttributes(systolicData) : new AttributesTemplate();
    bpAttribute.diastolic = !isEmpty(diastolicData) ? unpackResultAttributes(diastolicData) : new AttributesTemplate();
    firstResultAttributes = new AttributesTemplate(
      (bpAttribute.systolic.statusInError || bpAttribute.diastolic.statusInError),
      (bpAttribute.systolic.interpretationIcon),
      (bpAttribute.systolic.comment || bpAttribute.diastolic.comment),
      (bpAttribute.systolic.modified || bpAttribute.diastolic.modified),
      (bpAttribute.systolic.unverified || bpAttribute.diastolic.unverified),
    );
  }
  const isfirstSingleResult = isSingleResult;
  const isfirstPairedResult = isPairedResult;
  const resultKeyID = setResultKeyID(isfirstPairedResult, firstResultData);
  return {
    isfirstSingleResult,
    isfirstPairedResult,
    firstResultAttributes,
    firstResultData,
    resultKeyID,
  };
};

const createFlowsheetResultCellDisplay = (resultDataSet, hideUnit, numericOverflow, containerDivRef) => {
  const {
    isfirstSingleResult,
    isfirstPairedResult,
    firstResultAttributes,
    firstResultData,
    resultKeyID,
  } = unpackResultDataSet(resultDataSet);
  const compositeCell = [];
  if (!isfirstSingleResult && !isfirstPairedResult) {
    compositeCell.push(<ResultError />);
  } else if (isfirstSingleResult) {
    const firstResultDisplay = createStandardResultDisplay(firstResultData, firstResultAttributes, hideUnit, resultKeyID, numericOverflow, containerDivRef);
    compositeCell.push(firstResultDisplay);
  } else {
    const firstResultDisplay = createBloodPressureResultDisplay(firstResultData, firstResultAttributes, hideUnit, resultKeyID, containerDivRef);
    compositeCell.push(firstResultDisplay);
  }
  const additionalResultCount = resultDataSet.length - 1;
  if (additionalResultCount > 0) {
    const additionalResultInterpretations = [];
    const additionalResultList = resultDataSet.slice(1, resultDataSet.length);
    additionalResultList.forEach((result) => {
      const { isSingleResult, isPairedResult } = checkIfSingleOrPairedResult(result);
      if (isSingleResult) {
        const isStatusInError = !isEmpty(result.status) ? checkIsStatusInError(result.status) : false;
        if (!isStatusInError) {
          const resultInterpretation = !isEmpty(result.interpretation) && !result.isUnverified ? result.interpretation : null;
          additionalResultInterpretations.push(resultInterpretation);
        }
      } else if (isPairedResult) {
        const isStatusInError = {
          systolic: !isEmpty(result.systolic) ? checkIsStatusInError(result.systolic.status) : false,
          diastolic: !isEmpty(result.diastolic) ? checkIsStatusInError(result.diastolic.status) : false,
        };
        if (!isStatusInError.systolic && !isStatusInError.diastolic) {
          const sysInterpretation = !isEmpty(result.systolic.interpretation) && !result.systolic.isUnverified ? result.systolic.interpretation : null;
          const diaInterpretation = !isEmpty(result.diastolic.interpretation) && !result.diastolic.isUnverified ? result.diastolic.interpretation : null;
          additionalResultInterpretations.push(sysInterpretation);
          additionalResultInterpretations.push(diaInterpretation);
        }
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
    if (checkTypeNumeric(resultDataSet[0])) {
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

export default FlowsheetResultCell;
