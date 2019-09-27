import React from 'react';
import PropTypes from 'prop-types';
import { resultDataasePropType } from './common/propTypes';
import Observation from './common/_Observation';
import classNames from 'classnames/bind';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  Result Object with the clinical result data.
   */
  resultData: Observation.propTypes,
};

const defaultProps = {
  // resultData: {},
};

const ClincalResult = (props) => {
  const {
    resultData,
    ...customProps
  } = props;

  const clinicalresultClassnames = cx([
    'clinical-result',
    customProps.className,
  ]);

  return (
    <Observation 
      eventId={resultData.eventId}
      valueQuantity={resultData.valueQuantity}
      interpretation={resultData.interpretation}
      isModified={resultData.isModified}
      hasComment={resultData.hasComment}
      conceptDisplay={resultData.conceptDisplay}
      datetimeDisplay={resultData.datetimeDisplay}
      isTruncated={resultData.isTruncated}
    />
  );
};

ClincalResult.propTypes = propTypes;
ClincalResult.defaultProps = defaultProps;

export default ClincalResult;
