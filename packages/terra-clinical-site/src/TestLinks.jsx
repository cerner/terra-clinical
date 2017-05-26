/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-header-tests">ActionHeader Tests</Link></li>
      <li><Link to="/tests/application-tests">Application Tests</Link></li>
      <li><Link to="/tests/detail-view-tests">DetailView Tests</Link></li>
      <li><Link to="/tests/detail-list-tests">DetailList Tests</Link></li>
      <li><Link to="/tests/detail-list-item-tests">DetailListItem Tests</Link></li>
      <li><Link to="/tests/error-view-tests">Error View Tests</Link></li>
      <li><Link to="/tests/item-display-tests">ItemDisplay Tests</Link></li>
      <li><Link to="/tests/item-comment-tests">ItemDisplay-Comment Tests</Link></li>
      <li><Link to="/tests/item-view-tests">ItemView Tests</Link></li>
      <li><Link to="/tests/header-tests">Header Tests</Link></li>
      <li><Link to="/tests/label-value-view-tests">Label Value View Tests</Link></li>
      <li><Link to="/tests/no-data-view-tests">NoDataView Tests</Link></li>
      <li><Link to="/tests/slide-group-tests">SlideGroup Tests</Link></li>
      <li><Link to="/tests/modal-manager-tests">ModalManager Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
