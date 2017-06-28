import React from 'react';

import TinyBreakpointItemCollection from './TinyBreakpointItemCollection';
import SmallBreakpointItemCollection from './SmallBreakpointItemCollection';
import MediumBreakpointItemCollection from './MediumBreakpointItemCollection';
import LargeBreakpointItemCollection from './LargeBreakpointItemCollection';
import HugeBreakpointItemCollection from './HugeBreakpointItemCollection';

const BreakpointCompare = () => (
  <div>
    <div>
      <h3> Tiny Breakpoint </h3>
      <TinyBreakpointItemCollection />
    </div>
    <div>
      <h3> Small Breakpoint </h3>
      <SmallBreakpointItemCollection />
    </div>
    <div>
      <h3> Medium Breakpoint </h3>
      <MediumBreakpointItemCollection />
    </div>
    <div>
      <h3> Large Breakpoint </h3>
      <LargeBreakpointItemCollection />
    </div>
    <div>
      <h3> Huge Breakpoint </h3>
      <HugeBreakpointItemCollection />
    </div>
  </div>
);

export default BreakpointCompare;
