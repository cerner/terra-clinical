import React from 'react';
import classNames from 'classnames/bind';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const display1 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display 1" key="123" />;
const display2 = <ItemView.Display icon={<IconAlert />} iconAlignment="inline" text="display 2" key="124" />;
const display3 = <ItemView.Display text="display 3" key="125" />;
const display4 = <ItemView.Display text="display 4" key="126" />;
const display5 = <ItemView.Display text="display 5" key="127" />;
const display6 = <ItemView.Display text="display 6" key="128" />;
const display7 = <ItemView.Display text="display 7" key="129" />;
const display8 = <ItemView.Display text="display 8" key="130" />;
const blankDisplay = <ItemView.Display text="" key="111" />;
const primaryColumnBlankLine = [display1, display2, blankDisplay, display4, display5, display6, display7, display8];
const secondaryColumnBlankLine = [display1, display2, display3, blankDisplay, display5, display6, display7, display8];
const bothColumnsBlankLine = [display1, blankDisplay, display3, display4, blankDisplay, display6, display7, blankDisplay];

const cx = classNames.bind(styles);

const views = () => (
  <div className={cx('blank-displays-itemview-wrapper')}>
    <h2>One Column Layout</h2>
    <ItemView displays={primaryColumnBlankLine} id="test-blank-displays" />
    <br />
    <h2>Two Column Layout - Left and Right Column with Blank Lines </h2>
    <ItemView displays={bothColumnsBlankLine} layout="twoColumns" id="test-blank-displays-two" trueColumn />
    <br />
    <h2>Two Column Layout - Left Column with Blank Line </h2>
    <ItemView displays={primaryColumnBlankLine} layout="twoColumns" id="test-blank-displays-two-left" trueColumn />
    <br />
    <h2>Two Column Layout - Right Column with Blank Line </h2>
    <ItemView displays={secondaryColumnBlankLine} layout="twoColumns" id="test-blank-displays-two-right" trueColumn />
  </div>
);

export default views;
