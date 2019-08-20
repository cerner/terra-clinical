import React from 'react';

import Header from '../../../Header';
import styles from './styles.module.scss';

const content = (
  <div
    id="headerTest--content"
    className={styles.startcontent}
  />
);

export default () => (
  <Header
    startContent={content}
    title="Header with content on the left"
  />
);
