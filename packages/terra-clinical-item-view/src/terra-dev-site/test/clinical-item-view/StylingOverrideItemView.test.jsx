import React from 'react';
import classNames from 'classnames/bind';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import ItemView from '../../../ItemView';
import styles from './ItemViewCommon.test.module.scss';

const display1 = <ItemView.Display text="display 1 (default display styling)" key="123" />;
const display2 = <ItemView.Display text="display 2 (strong display styling)" textStyle="strong" key="124" />;
const display3 = <ItemView.Display text="display 3 (attention display styling)" textStyle="attention" key="125" />;
const display4 = <ItemView.Display text="display 4 (secondary display styling)" textStyle="secondary" key="126" />;
const display5 = <ItemView.Display text="display 5 (strikethrough display styling)" textStyle="strikeThrough" key="127" />;
const display6 = <ItemView.Display text="display 6 (default display styling with icon)" icon={<IconAlert />} iconAlignment="inline" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];
const comment = id => <ItemView.Comment id={id} text="Some Comment" />;

const cx = classNames.bind(styles);

const views = () => (
  <div className={cx('styling-override-itemview-wrapper')}>
    <h2>Override Default Styling</h2>
    <ItemView displays={displays} overrideDefaultStyling comment={comment(1)} id="test-displays-override" />
    <br />
    <h2>Override Default Styling Two Column Layout </h2>
    <ItemView displays={displays} layout="twoColumns" overrideDefaultStyling comment={comment(2)} id="test-displays-override-two" />
    <br />
    <h2>Override Default Styling with TextEmphasis</h2>
    <p>This test is just showing that even if TextEmphasis has been explicitly set to start, it will be ignored when the override prop is set to true.</p>
    <ItemView displays={displays} textEmphasis="start" overrideDefaultStyling id="test-displays-override-start-emphasis" />
  </div>
);

export default views;
