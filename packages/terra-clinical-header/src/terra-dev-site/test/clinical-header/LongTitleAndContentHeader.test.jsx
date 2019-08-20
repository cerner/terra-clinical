import React from 'react';

import Header from '../../../Header';
import styles from './styles.module.scss';

const startContent = (
  <div
    id="headerTest--startContent"
    className={styles.startcontent}
  />
);
const endContent = (
  <div
    id="headerTest--endContent"
    className={styles.endcontent}
  />
);

export default () => (
  <Header
    id="Header"
    startContent={startContent}
    title="LongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitleLongTitle"
    endContent={endContent}
  />
);
