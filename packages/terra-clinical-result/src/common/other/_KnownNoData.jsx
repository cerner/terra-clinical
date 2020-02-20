import React from 'react';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const KnownNoData = (props) => {
  const {
    ...customProps
  } = props;

  const templateClassnames = cx([
    'no-data',
  ]);

  return (
    <span {...customProps} className={templateClassnames}>--</span>
  );
};

export default KnownNoData;
