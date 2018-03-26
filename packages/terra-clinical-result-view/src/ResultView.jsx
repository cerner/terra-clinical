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
   *  An array of one or more results
   */
  results: PropTypes.array,
  /**
   *  The age display of the result. Does not handle formatting
   */
  timeDisplay: PropTypes.string,
  /**
   *  Does the result have related documents. Adds an indicator
   */
  hasDocument: PropTypes.bool,
  /**
   *  Has the result been modified. Adds an indicator
   */
  isModified: PropTypes.bool,
  /**
   *  Are there comments related to the result. Adds an indicator
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
   *  Should the view have padding. Default to false.
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

function documentsDiv() {
  return <IconDocuments />;
      // classes = "#{INDICATOR_CLASS} result-view-indicator--document"
      // documents_graphic = Graphic.new(image_inline: {path: 'orion/clinical_results/documents.svg'},
      //                                 attributes: {class: classes})
      // documents_graphic.render_with_template(template)
}

function resultIndicator(result) {
  if (!result.normalcy || !result.normalcy.length) {
    return null;
  }

  if (result.normalcy === 'ABNORMAL') {
    return <IconAbnormal />;
  }

  if (result.normalcy === 'CRITICAL') {
    return <IconAlert />;
  }

  if (result.normalcy === 'LOW') {
    return <IconLow />;
  }

  if (result.normalcy === 'HIGH') {
    return <IconHigh />;
  }

  return null;
}

function resultsDiv(results) {
  if (!results || !results.length) {
    let noValueDisplay = '--';
    return <div className={cx('result-View-resultValueText')} >{noValueDisplay}</div>;
  }

  const resultsDivs = [];

  for (let i = 0; i < results.length; i += 1) {
    if (resultsDivs.length >= 1) {
      const seperator = <span className={cx('result-View-resultSeparator')} >{'/'}</span>;
      resultsDivs.push(seperator);
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
      unitDiv = <small className={cx('result-view-resultUnit')} >{resultValue.unit}</small>;
    }

    let resultValueDisplay = '--';
    if (resultValue.value && resultValue.value.length > 0) {
      resultValueDisplay = resultValue.value;
    }


    const resultValueDiv = (<span className={cx('result-view-resultValueText')} >
      {resultValueDisplay}
      {unitDiv}
    </span>);

    resultsDivs.push(resultValueDiv);
  }

  return resultsDivs;
}

function modifiedDiv() {
  return <IconModified />;
}

function commentsDiv() {
  return <IconComment />;
}

function timeDisplayDiv(timeDisplay) {
  return <div className={cx('result-view-conceptDisplay')} >{timeDisplay}</div>;
}

const ResultView = (props) => {
  const { results, timeDisplay, hasDocument, isModified, hasComment, alignEnd, isTruncated, isPadded } = props;

  const attributesName = 'result-view';

  if (alignEnd) {
    // result-view--alignEnd
  }

  if (isTruncated) {
    //  result-view--noTruncate
  }

  let bodyClassName = 'result-view-body';

  if (isPadded) {
    bodyClassName = 'result-view-body--padded';
  }

  let noValueDisplay = '--';
  return (
    <div className={cx(attributesName)}>
      <div className={cx(bodyClassName)}>
        <div className={cx('result-view-resultBlock')}>
          {hasDocument &&
            documentsDiv()
          }
          { resultsDiv(results) }
          {isModified &&
            modifiedDiv()
          }
          {hasComment &&
            commentsDiv()
          }
        </div>
        {timeDisplay &&
          timeDisplayDiv(timeDisplay)
        }
      </div>
    </div>
  );
};

ResultView.propTypes = propTypes;
ResultView.defaultProps = defaultProps;

export default ResultView;
