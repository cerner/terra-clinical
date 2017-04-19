/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
import React from 'react';
import { Link } from 'react-router';
import './site.scss';

const propTypes = {
  children: React.PropTypes.node,
};

const App = props => (
  <Base>
    <div className="terraClinical-Site-directionality" dir="ltr">
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
    </div>
    <ul className="terraClinical-Site-links" dir="ltr">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/site/detail-view">Detail View</Link></li>
      <li><Link to="/site/item-view">Item View</Link></li>
      <li><Link to="/site/label-value-view">Label Value View</Link></li>
      <li><Link to="/site/no-data-view">No Data View</Link></li>
      <li><Link to="/tests">Tests</Link></li>
    </ul>
    {props.children}
  </Base>
);

App.propTypes = propTypes;

export default App;
