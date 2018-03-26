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
  results: PropTypes.array,
  timeDisplay: PropTypes.string,
  conceptDisplay: PropTypes.string,
  hasDocument: PropTypes.bool,
  isModified: PropTypes.bool,
  hasComment: PropTypes.bool,
  alignEnd: PropTypes.bool,
  isTruncated: PropTypes.bool,
  isPadded: PropTypes.bool,
};

function documentsDiv() {
  return <IconDocuments />;
      //   classes = "#{INDICATOR_CLASS} ion-ResultView-indicator--document"
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
    return <div className={cx('ion-ResultView-resultValueText')} >{noValueDisplay}</div>;
  }

  const resultsDivs = [];

  for (let i = 0; i < results.length; i += 1) {
    if (resultsDivs.length >= 1) {
      const seperator = <span className={cx('ion-ResultView-resultSeparator')} >{'/'}</span>;
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
      unitDiv = <small className={cx('ion-ResultView-resultUnit')} >{resultValue.unit}</small>;
    }

    let resultValueDisplay = '--';
    if (resultValue.value && resultValue.value.length > 0) {
      resultValueDisplay = resultValue.value;
    }


    const resultValueDiv = <span className={cx('ion-ResultView-resultValueText')} >
                           {resultValueDisplay}
                           {unitDiv}
                           </span>;

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
  return <div className={cx('ion-ResultView-conceptDisplay')} >{timeDisplay}</div>;
}

function conceptDisplayDiv(conceptDisplay) {
  return <div className={cx('ion-ResultView-conceptDisplay')} >{conceptDisplay}</div>;
}

const ResultView = (props) => {
  const { results, timeDisplay, conceptDisplay, hasDocument, isModified, hasComment, alignEnd, isTruncated, isPadded } = props;

  const attributesName = 'ion-ResultView';

  if (alignEnd) {
    // ion-ResultView--alignEnd
  }

  if (isTruncated) {
    //  ion-ResultView--noTruncate
  }

  let bodyClassName = 'ion-ResultView-body';

  if (isPadded) {
    bodyClassName = 'ion-ResultView-body--padded';
  }

  let noValueDisplay = '--';
  return (
    <div className={cx(attributesName)}>
      <div className={cx(bodyClassName)}>
        <div className={cx('ion-ResultView-resultBlock')}>
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
        {conceptDisplay &&
          conceptDisplayDiv(conceptDisplay)
        }
      </div>
    </div>
  );
};

ResultView.propTypes = propTypes;

export default ResultView;
