import React from 'react';

import Header from '../../../Header';

const tableOfContentsHeadingLabelID = 'terra-clinical-header-test-table-of-contents-heading-label';
const quickLinksHeadingLabelID = 'terra-clinical-header-test-table-of-contents-heading-label';

export default () => (
  <>
    <section aria-labelledby={tableOfContentsHeadingLabelID}>
      <Header text="Table of Contents" id={tableOfContentsHeadingLabelID} level={1} />
      <ul id="terra-clinical-header-test-toc-list">
        <li><a href="/">Chapter 1</a></li>
        <li><a href="/">Chapter 2</a></li>
        <li><a href="/">Chapter 3</a></li>
      </ul>
    </section>
    <aside aria-labelledby={quickLinksHeadingLabelID}>
      <Header text="Quick Links" id={quickLinksHeadingLabelID} level={2} isSubheader />
      <ul id="terra-clinical-header-test-quick-links-list">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
    </aside>
  </>
);
