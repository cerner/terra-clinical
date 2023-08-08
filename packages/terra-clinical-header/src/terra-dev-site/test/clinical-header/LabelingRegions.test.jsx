import React from 'react';

import Header from '../../../Header';

export default () => (
  <>
    <section aria-labelledby="headinglabel">
      <Header text="Table of Contents" id="headinglabel" level={1} />
      <ul id="terra-clinical-header-test-toc-list">
        <li><a href="/">Chapter 1</a></li>
        <li><a href="/">Chapter 2</a></li>
        <li><a href="/">Chapter 3</a></li>
      </ul>
    </section>
    <aside aria-labelledby="linksheadinglabel">
      <Header text="Quick Links" id="linksheadinglabel" level={2} isSubheader />
      <ul id="terra-clinical-header-test-quick-links-list">
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
      </ul>
    </aside>
  </>
);
