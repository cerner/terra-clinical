import React from 'react';

import Header from '../../../Header';
import styles from './styles.module.scss';

const content = (
  <div
    id="headerTest--content"
    className={styles.endwidecontent}
  />
);

export default () => (
  <Header
    endContent={content}
  />
);
