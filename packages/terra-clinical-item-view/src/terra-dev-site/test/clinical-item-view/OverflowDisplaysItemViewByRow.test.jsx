import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import classNames from 'classnames/bind';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const cx = classNames.bind(styles);

const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;
const display2 = <ItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="124" />;
const display3 = <ItemView.Display text="display 3" key="125" />;
const display4 = <ItemView.Display text="display 4" key="126" />;
const display5 = <ItemView.Display text="display 5" key="127" />;
const display6 = <ItemView.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];
const isTruncatedDisplay1 = <ItemView.Display isTruncated text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="1234" />;
const isTruncatedDisplay2 = <ItemView.Display isTruncated text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="1245" />;
const partialTruncatedDisplays = [isTruncatedDisplay1, isTruncatedDisplay2, display3, display4, display5, display6];
const leftPartialTruncatedDisplays = [isTruncatedDisplay1, display2, display3, display4, display5, display6];
const rightPartialTruncatedDisplays = [display1, isTruncatedDisplay2, display3, display4, display5, display6];

const accessoryStart = id => <IconAlert id={id} />;
const accessoryEnd = id => <IconInformation id={id} />;
const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" />;

const views = () => (
  <div className={cx('overflow-displays-itemview')}>
    <p>Applied width of 900px to show the default vs truncated styling.</p>
    <br />
    <h2>Default ItemView</h2>
    <ItemView comment={comment(2)} startAccessory={accessoryStart(10)} endAccessory={accessoryEnd(18)} displays={displays} layout="twoColumns" id="ItemView-by-row-two-wrap" />
    <br />
    <h2>Truncated ItemView</h2>
    <ItemView displays={displays} isTruncated comment={comment(4)} startAccessory={accessoryStart(12)} endAccessory={accessoryEnd(20)} layout="twoColumns" textEmphasis="start" id="ItemView-by-row-two-truncate" />
    <br />
    <h2>Left and Right Displays Truncated</h2>
    <ItemView displays={partialTruncatedDisplays} comment={comment(6)} startAccessory={accessoryStart(14)} endAccessory={accessoryEnd(22)} layout="twoColumns" textEmphasis="start" id="ItemView-by-row-two-partial-truncate" />
    <br />
    <h2>Left Display Truncated</h2>
    <ItemView displays={leftPartialTruncatedDisplays} comment={comment(7)} startAccessory={accessoryStart(15)} endAccessory={accessoryEnd(23)} layout="twoColumns" textEmphasis="start" id="ItemView-by-row-two-partial-left-truncate" />
    <br />
    <h2>Right Display Truncated</h2>
    <ItemView displays={rightPartialTruncatedDisplays} comment={comment(8)} startAccessory={accessoryStart(16)} endAccessory={accessoryEnd(24)} layout="twoColumns" textEmphasis="start" id="ItemView-by-row-two-partial-right-truncate" />
  </div>
);

export default views;
