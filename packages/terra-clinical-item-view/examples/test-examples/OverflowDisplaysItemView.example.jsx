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

const accessoryStart1 = <IconAlert id="StartAccessory1" />;
const accessoryStart2 = <IconAlert id="StartAccessory2" />;
const accessoryStart3 = <IconAlert id="StartAccessory3" />;
const accessoryStart4 = <IconAlert id="StartAccessory4" />;
const accessoryEnd1 = <IconInformation id="EndAccessory1" />;
const accessoryEnd2 = <IconInformation id="EndAccessory2" />;
const accessoryEnd3 = <IconInformation id="EndAccessory3" />;
const accessoryEnd4 = <IconInformation id="EndAccessory4" />;
const comment1 = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment1" />;
const comment2 = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment2" />;
const comment3 = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment3" />;
const comment4 = <ItemView.Comment text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" id="ItemComment4" />;

const views = () => (
  <div style={{ maxWidth: '900px' }}>
    <p>Applied width of 900px to show the default vs truncated styling.</p>
    <br />
    <h2>Full Examples - Default</h2>
    <ItemView comment={comment1} startAccessory={accessoryStart1} endAccessory={accessoryEnd1} displays={displays} id="ItemView-one-wrap" />
    <br />
    <ItemView comment={comment2} startAccessory={accessoryStart2} endAccessory={accessoryEnd2} displays={displays} layout="twoColumns" id="ItemView-two-wrap" />
    <br />
    <h2>Full Examples - Truncated</h2>
    <ItemView displays={displays} isTruncated comment={comment3} startAccessory={accessoryStart3} endAccessory={accessoryEnd3} textEmphasis="start" id="ItemView-one-truncate" />
    <br />
    <ItemView displays={displays} isTruncated comment={comment4} startAccessory={accessoryStart4} endAccessory={accessoryEnd4} layout="twoColumns" textEmphasis="start" id="ItemView-two-truncate" />
  </div>
);

export default views;
