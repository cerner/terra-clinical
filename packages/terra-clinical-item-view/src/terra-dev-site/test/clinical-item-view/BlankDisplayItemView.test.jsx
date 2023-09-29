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
const primaryColumnBlankDisplay = [display1, display2, blankDisplay, display4, display5, display6, display7, display8];
const secondaryColumnBlankDisplay = [display1, display2, display3, blankDisplay, display5, display6, display7, display8];
const bothColumnsBlankDisplays = [display1, blankDisplay, display3, display4, blankDisplay, display6, display7, display8];
const bothColumnsBlankDisplaysSameRow = [display1, display2, display3, display4, blankDisplay, blankDisplay, display7, display8];

const cx = classNames.bind(styles);

const views = () => (
  <div className={cx('blank-displays-itemview-wrapper')}>
    <h2>Two Column Layout - Left and Right Column with Blank Display </h2>
    <ItemView displays={bothColumnsBlankDisplays} layout="twoColumns" id="test-blank-displays-two" trueColumn />
    <br />
    <h2>Two Column Layout - Left and Right Column with Blank Displays on Same Line </h2>
    <ItemView displays={bothColumnsBlankDisplaysSameRow} layout="twoColumns" id="test-blank-displays-two-same-line" trueColumn />
    <br />
    <h2>Two Column Layout - Left Column with Blank Display </h2>
    <ItemView displays={primaryColumnBlankDisplay} layout="twoColumns" id="test-blank-displays-two-left" trueColumn />
    <br />
    <h2>Two Column Layout - Right Column with Blank Display </h2>
    <ItemView displays={secondaryColumnBlankDisplay} layout="twoColumns" id="test-blank-displays-two-right" trueColumn />
    <br />
    <br />
    <br />
    <h2>Two Column Layout By Row - Left and Right Column with Blank Displays on Different Lines </h2>
    <p>
      This should have what appears to be a newline when there is a blank display on one side of a `row` - that was the previous behavior for two column layout.
      That is because when one column has a display and the other in the same row has an empty display, the height from the populated display spans the entire row.
      Therefore, the column with the empty display still has the same height as the other.
      This means the side with the empty display appears to be an blank newline.
      No additonal changes to the css is needed for this, just want an example to show the behavior.
    </p>
    <ItemView displays={bothColumnsBlankDisplays} layout="twoColumns" id="test-blank-displays-by-row" />
    <br />
    <h2>Two Column Layout By Row - Left and Right Column with Blank Displays on Same Line </h2>
    <p>
      This should **not** have what appears to be a newline when there are two blank displays in the same row.
      That is because this formatting spans the entire row and therefore if the two blank displays are in the same row,
      they both have no height and therefore no newline is shown where those would usually be.
    </p>
    <ItemView displays={bothColumnsBlankDisplaysSameRow} layout="twoColumns" id="test-blank-displays-by-row-same-line" />
    <br />
    <h2>One Column Layout</h2>
    <p>This should not have a newline where there are blank displays. Adding this test case specifcally to show that.</p>
    <ItemView displays={primaryColumnBlankDisplay} id="test-blank-displays" />
  </div>
);

export default views;
