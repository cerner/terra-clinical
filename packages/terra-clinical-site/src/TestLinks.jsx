/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';
import styles from './site.scss';

const TestLinks = () => (
  <div>
    <ul className={styles.navigation}>
      <li><Link to="/tests/action-header-tests">ActionHeader Tests</Link></li>
      <li><Link to="/tests/detail-list-tests">DetailList Tests</Link></li>
      <li><Link to="/tests/detail-list-item-tests">DetailListItem Tests</Link></li>
      <li><Link to="/tests/detail-view-tests">DetailView Tests</Link></li>
      <li><Link to="/tests/error-view-tests">ErrorView Tests</Link></li>
      <li><Link to="/tests/item-collection-tests">ItemCollection Tests</Link></li>
      <li><Link to="/tests/item-comment-tests">ItemDisplay.Comment Tests</Link></li>
      <li><Link to="/tests/item-display-tests">ItemDisplay Tests</Link></li>
      <li><Link to="/tests/item-view-tests">ItemView Tests</Link></li>
      <li><Link to="/tests/label-value-view-tests">Label Value View Tests</Link></li>
      <li><Link to="/tests/no-data-view-tests">NoDataView Tests</Link></li>
      <li><Link to="/tests/onset-picker">Onset Picker Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
