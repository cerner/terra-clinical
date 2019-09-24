import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ClinicalResult.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const defaultProps = {};

const ClincalResult = (props) => {
  const {
    ...customProps
  } = props;

  const clinicalresultClassnames = cx([
    'clinical-result',
    customProps.className,
  ]);

  return (
    <div classNames={clinicalresultClassnames} />
  );
};

ClincalResult.propTypes = propTypes;
ClincalResult.defaultProps = defaultProps;

export default ClincalResult;
