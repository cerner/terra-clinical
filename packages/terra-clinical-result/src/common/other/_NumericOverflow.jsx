import React from 'react';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const NumericOverflow = (props) => {
  const {
    ...customProps
  } = props;

  const templateClassnames = cx([
    'numeric-overflow',
  ]);

  return (
    // TODO add i18n - in progress
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
    >
      View Results
    </span>
  );
};

export default NumericOverflow;
