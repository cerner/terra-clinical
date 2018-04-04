import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconDocuments from 'terra-icon/lib/icon/IconDocuments';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconUnexpected from 'terra-icon/lib/icon/IconUnexpected';

import IconAbnormal from 'terra-icon/lib/icon/IconAbnormal';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconHigh from 'terra-icon/lib/icon/IconHigh';
import IconLow from 'terra-icon/lib/icon/IconLow';
import styles from './ResultView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  An array of one or more results.
   */
  results: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    units: PropTypes.string,
    normalcy: PropTypes.string,
  })),
  /**
   *  The age display of the result. Does not handle formatting.
   */
  timeDisplay: PropTypes.string,
  /**
   *  Does the result have related documents. Adds an indicator.
   */
  hasDocument: PropTypes.bool,
  /**
   *  Has the result been modified. Adds an indicator.
   */
  isModified: PropTypes.bool,
  /**
   *  Are there comments related to the result. Adds an indicator.
   */
  hasComment: PropTypes.bool,
  /**
   *  Is the view aligned to the right. Defaults to false.
   */
  alignEnd: PropTypes.bool,
  /**
   *  Can the result text be truncated. Defaults to true.
   */
  isTruncated: PropTypes.bool,
  /**
   *  Should the view have padding. Defaults to false.
   */
  isPadded: PropTypes.bool,
};

const defaultProps = {
  results: [],
  timeDisplay: null,
  hasDocument: false,
  hasComment: false,
  isModified: false,
  alignEnd: false,
  isTruncated: true,
  isPadded: false,
};

const normalcyIndicators = {
  ABNORMAL: <IconAbnormal />,
  CRITICAL: <IconAlert />,
  LOW: <IconLow />,
  HIGH: <IconHigh />,
};

const resultIndicator = (result) => {
  let icon = null;

  if (!result.normalcy || !result.normalcy.length) {
    return null;
  } else if (Object.keys(normalcyIndicators).includes(result.normalcy)) {
    icon = normalcyIndicators[result.normalcy];
  }

  return <span className={cx('result-view-indicator', result.normalcy.toLowerCase())} >{icon}</span>;
};

const resultsDiv = (results, isTruncated) => {
  if (!results || !results.length) {
    const noValueDisplay = '--';
    return <div className={cx('result-view-result-value-text')} >{noValueDisplay}</div>;
  }

  const resultsDivs = [];

  for (let i = 0; i < results.length; i += 1) {
    if (resultsDivs.length >= 1) {
      const separator = <span className={cx('result-view-result-separator')} >{'/'}</span>;
      resultsDivs.push(separator);
    }

    const resultValue = results[i];
    const resultIndicatorDiv = resultIndicator(resultValue);

    if (resultIndicatorDiv) {
      resultsDivs.push(resultIndicatorDiv);
    }

    if (resultValue.unexpected) {
      resultsDivs.push(<IconUnexpected />);
    }

    let unitDiv = null;
    if (resultValue.unit && resultValue.unit.length > 0) {
      unitDiv = <small className={cx('result-view-result-unit')} >{resultValue.unit}</small>;
    }

    let resultValueDisplay = '--';
    if (resultValue.value && resultValue.value.length > 0) {
      resultValueDisplay = resultValue.value;
    }

    let resultValueTextClassName = 'result-view-result-value-text';
    if (isTruncated) {
      resultValueTextClassName = 'result-view-is-truncated';
    }

    let normalcyLevel = results[i].normalcy;
    if (normalcyLevel !== undefined) {
      normalcyLevel = normalcyLevel.toLowerCase();
    }

    const resultValueDiv = (<span className={cx(resultValueTextClassName, normalcyLevel)} >
      {resultValueDisplay}
      {unitDiv}
    </span>);

    resultsDivs.push(resultValueDiv);
  }

  return resultsDivs;
};

const timeDisplayDiv = (timeDisplay) => {
  const resultAgeClassName = 'result-view-result-age';
  return <div className={cx(resultAgeClassName)} >{timeDisplay}</div>;
};

const ResultView = (props) => {
  const { results, timeDisplay, hasDocument, isModified, hasComment, alignEnd, isTruncated, isPadded } = props;
  const attributesName = 'result-view';
  let align = 'align-start';

  if (alignEnd) {
    align = 'align-end';
  }

  let bodyClassName = 'result-view-body';

  if (isPadded) {
    bodyClassName = 'result-view-body--padded';
  }

  return (
    <div className={cx(attributesName, align)} >
      <div className={cx(bodyClassName)}>
        <div className={cx('result-view-result-block')}>
          {hasDocument &&
            <IconDocuments />
          }
          { resultsDiv(results, isTruncated) }
          {isModified &&
            <IconModified />
          }
          {hasComment &&
            <IconComment />
          }
        </div>
        {timeDisplay &&
          timeDisplayDiv(timeDisplay)
        }
      </div>
    </div>
  );
};

ResultView.defaultProps = defaultProps;
ResultView.propTypes = propTypes;

export default ResultView;
export { normalcyIndicators };
