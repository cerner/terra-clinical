import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import ItemView from '../../lib/ItemView';

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="124" />;
const display3 = <ItemView.Display text="display 3" key="125" />;
const display4 = <ItemView.Display text="display 4" key="126" />;
const display5 = <ItemView.Display text="display 5" key="127" />;
const display6 = <ItemView.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];

const accessoryStart = <IconAlert id="StartAccessory" />;
const accessoryEnd = <IconInformation id="EndAccessory" />;
const comment = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment" />;

const views = () => (
  <div style={{ maxWidth: '900px' }}>
    <p>Applied width of 900px to show the default vs truncated styling.</p>
    <br />
    <h2>Full Examples - Default</h2>
    <ItemView comment={comment} startAccessory={accessoryStart} endAccessory={accessoryEnd} displays={displays} id="ItemView-one-wrap" />
    <br />
    <ItemView comment={comment} startAccessory={accessoryStart} endAccessory={accessoryEnd} displays={displays} layout="twoColumns" id="ItemView-two-wrap" />
    <br />
    <h2>Full Examples - Truncated</h2>
    <ItemView displays={displays} isTruncated comment={comment} startAccessory={accessoryStart} endAccessory={accessoryEnd} textEmphasis="start" id="ItemView-one-truncate" />
    <br />
    <ItemView displays={displays} isTruncated comment={comment} startAccessory={accessoryStart} endAccessory={accessoryEnd} layout="twoColumns" textEmphasis="start" id="ItemView-two-truncate" />
  </div>
);

export default views;
