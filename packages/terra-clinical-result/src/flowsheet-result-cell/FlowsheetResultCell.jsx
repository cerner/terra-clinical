import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import ClinicalResult from '../ClinicalResult';
import ClinicalResultBloodPressure from '../ClinicalResultBloodPressure';
import observationPropShape from '../proptypes/observationPropTypes';
import EnteredInError from '../common/other/_EnteredInError';
import ResultError from '../common/other/_ResultError';
import NoData from '../common/other/_KnownNoData';
import NumericOverflow from '../common/other/_NumericOverflow';
import { isEmpty, checkIsStatusInError, checkTypeNumeric } from '../common/utils';
import styles from './FlowsheetResultCell.module.scss';

const cx = classNamesBind.bind(styles);

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
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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

const createEndIcons = (hasCommentIcon, hasModifiedIcon, hasUnverifiedIcon, resultKeyID, intl) => {
  if (!hasCommentIcon && !hasModifiedIcon && !hasUnverifiedIcon) {
    return null;
  }

  let iconElements;
  if (hasUnverifiedIcon) {
    iconElements = <IconUnverified className={cx('icon-unverified')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultUnverified' })} role="img" focusable="true" />;
  } else {
    iconElements = (
      <React.Fragment>
        {hasCommentIcon ? (<IconComment className={cx('icon-comment')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultComment' })} role="img" focusable="true" />) : null}
        {hasModifiedIcon ? (<IconModified className={cx('icon-modified')} a11yLabel={intl.formatMessage({ id: 'Terra.clinicalResult.resultModified' })} role="img" focusable="true" />) : null}
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

const createEndAdditionalResultsStack = (count, interpretationsArr, hasAccessoryIcons, resultKeyID, intl) => {
  const displayCount = count;
  if (displayCount < 1) {
    return null;
  }

  let additionalResultInterpretationIndicator;
  let criticality;
  if ([
    'critical',
    'critical-high',
    'critical-low',
    'positive',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'critical';
    criticality = 'critical';
  } else if ([
    'abnormal',
    'high',
    'low',
  ].some(r => interpretationsArr.indexOf(r) >= 0)) {
    additionalResultInterpretationIndicator = 'high';
    criticality = 'out of range';
  } else {
    criticality = 'normal';
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
  const text = (criticality === 'normal')
    ? intl.formatMessage({ id: 'Terra.clinicalResult.multipleNormalResults' }, { count })
    : intl.formatMessage({ id: 'Terra.clinicalResult.multipleResults' }, { count, criticality });
  return (
    <div key={(`AdditionalResultsDisplay-${resultKeyID}`)} className={additionalResultClassNames}>
      <div className={cx('additional-results-stack')} aria-hidden="true">
        {additionalCountDisplayValue}
        {additionalCountDisplayValue}
      </div>
      <VisuallyHiddenText text={text} />
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

const createFlowsheetResultCellDisplay = (resultDataSet, hideUnit, numericOverflow, containerDivRef, intl) => {
  const {
    isfirstSingleResult,
    isfirstPairedResult,
    firstResultAttributes,
    firstResultData,
    resultKeyID,
  } = unpackResultDataSet(resultDataSet);
  const hasAccessoryIcons = (firstResultAttributes.comment || firstResultAttributes.modified || firstResultAttributes.unverified);
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
    const additionalResultsStack = createEndAdditionalResultsStack(displayCount, additionalResultInterpretations, hasAccessoryIcons, resultKeyID, intl);

    // This handles the case for when additional results exist and accessory icons exist
    if (hasAccessoryIcons) {
      const endAccessoryIcons = createEndIcons(firstResultAttributes.comment, firstResultAttributes.modified, firstResultAttributes.unverified, resultKeyID, intl);

      // Here the additional results stack and accessory icons are being wrapped in a parent container
      // They need to be grouped together for styling purposes, otherwise the order they appear in will be flipped
      // To keep them in the proper order this parent container gets floated in the css to the right instead of the additional results stack and accessory icons individually
      const endDisplay = (
        <div key="EndDisplay-AdditionalResultsAndIcons" className={cx('end-display')}>
          {additionalResultsStack}
          {endAccessoryIcons}
        </div>
      );
      compositeCell.push(endDisplay);

      return compositeCell;
    }

    const additionalResultsStackDisplay = (
      <div key="EndDisplay-AdditionalResults" className={cx('end-display')}>
        {additionalResultsStack}
      </div>
    );
    compositeCell.push(additionalResultsStackDisplay);

    return compositeCell;
  }

  if (hasAccessoryIcons) {
    const endAccessoryIcons = createEndIcons(firstResultAttributes.comment, firstResultAttributes.modified, firstResultAttributes.unverified, resultKeyID, intl);
    const endAccessoryIconsDisplay = (
      <div key="EndDisplay-Icons" className={cx('end-display')}>
        {endAccessoryIcons}
      </div>
    );
    compositeCell.push(endAccessoryIconsDisplay);
  }

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
    flowsheetResultCellDisplay = createFlowsheetResultCellDisplay(resultDataSet, hideUnit, numericOverflow, containerDiv, intl);
  }

  const theme = React.useContext(ThemeContext);
  const flowsheetCellClassNames = classNames(
    cx(
      'flowsheet-result-cell',
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <td
      {...customProps}
      className={flowsheetCellClassNames}
    >
      {flowsheetResultCellDisplay}
    </td>
  );
};

FlowsheetResultCell.propTypes = propTypes;
FlowsheetResultCell.defaultProps = defaultProps;

export default injectIntl(FlowsheetResultCell);
