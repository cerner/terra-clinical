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

const accessoryStart = id => <IconAlert id={id} />;
const accessoryEnd = id => <IconInformation id={id} />;
const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1" />;

/* eslint-disable react/forbid-dom-props */
const views = () => (
  <div className={cx('overflow-displays-itemview')}>
    <p>Applied width of 900px to show the default vs truncated styling.</p>
    <br />
    <h2>Full Examples - Default</h2>
    <ItemView comment={comment(1)} startAccessory={accessoryStart(5)} endAccessory={accessoryEnd(9)} displays={displays} id="ItemView-one-wrap" />
    <br />
    <ItemView comment={comment(2)} startAccessory={accessoryStart(6)} endAccessory={accessoryEnd(10)} displays={displays} layout="twoColumns" id="ItemView-two-wrap" />
    <br />
    <h2>Full Examples - Truncated</h2>
    <ItemView displays={displays} isTruncated comment={comment(3)} startAccessory={accessoryStart(7)} endAccessory={accessoryEnd(11)} textEmphasis="start" id="ItemView-one-truncate" />
    <br />
    <ItemView displays={displays} isTruncated comment={comment(4)} startAccessory={accessoryStart(8)} endAccessory={accessoryEnd(12)} layout="twoColumns" textEmphasis="start" id="ItemView-two-truncate" />
  </div>
);
/* eslint-enable react/forbid-dom-props */

export default views;
