/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CommentTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/item-comment-tests/default">ItemDisplay.Comment - Default</Link></li>
      <li><Link to="/tests/item-comment-tests/text">ItemDisplay.Comment - Text</Link></li>
    </ul>
  </div>
);

export default CommentTests;
