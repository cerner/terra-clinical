import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ItemView from '../../lib/ItemView';

// Snapshot Tests
it('should render a default component', () => {
  const itemView = shallow(<ItemView />);
  expect(itemView).toMatchSnapshot();
});

it('should render with 1 display', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render with 2 displays', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const displays = [display1, display2];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(2);
  expect(itemView).toMatchSnapshot();
});

it('should render with 3 displays', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(3);
  expect(itemView).toMatchSnapshot();
});

it('should render with a display and graphic', () => {
  const testElement = <img alt="Graphic" />;
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" icon={testElement} />);
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(1);
  expect(itemView.find('ItemDisplay').first().prop('icon')).toBe(testElement);
  expect(itemView).toMatchSnapshot();
});

it('should render displays with original styling when overrideDefaultStyling prop is true', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" textStyle="strong" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" textStyle="attention" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" textStyle="secondary" />);
  const display4 = shallowWithIntl(<ItemView.Display text="display 4" textStyle="strikeThrough" />);
  const displays = [display1, display2, display3, display4];
  const itemView = shallow(<ItemView displays={displays} overrideDefaultStyling />);
  expect(itemView.find('ItemDisplay')).toHaveLength(4);
  expect(itemView).toMatchSnapshot();
});

it('should render truncated display', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display1display1display1display1display1display1display1display1" />);
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} isTruncated />);
  expect(itemView.find('ItemDisplay')).toHaveLength(1);
  expect(itemView.find('div.is-truncated')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render truncated display when isTruncated is only set on the display', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display1display1display1display1display1display1display1display1" isTruncated />);
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(1);
  expect(itemView.find('ItemDisplay').first().prop('isTruncated')).toBe(true);
  expect(itemView).toMatchSnapshot();
});

it('should render truncated two column displays when isTruncated is only set on the display', () => {
  const display1 = (<ItemView.Display text="display1display1display1display1display1display1display1display1" isTruncated />);
  const display2 = (<ItemView.Display text="display2display2display2display2display2display2display2display2" />);
  const displays = [display1, display2];
  const itemView = shallow(<ItemView displays={displays} layout="twoColumns" trueColumn />);
  expect(itemView.find('div.truncated-two-columns')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render a comment', () => {
  const comment = shallowWithIntl(<ItemView.Comment text="comment" textStyle="attention" isTruncated={false} />);
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    comment,
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView.find('ItemComment')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render 1 start theme display', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const displays = [display1];
  const itemView = shallow(<ItemView textEmphasis="start" displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render 2 start theme displays', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const displays = [display1, display2];
  const itemView = shallow(<ItemView textEmphasis="start" displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(2);
  expect(itemView).toMatchSnapshot();
});

it('should render 3 start theme displays', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView textEmphasis="start" displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(3);
  expect(itemView).toMatchSnapshot();
});

it('should render a start accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    startAccessory: testElement,
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView.find('div.start-accessory')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render start accessory space reserved', () => {
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    reserveStartAccessorySpace: true,
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView.find('div.start-accessory')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render an end accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    endAccessory: testElement,
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView.find('div.end-accessory')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render an accessory top aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    startAccessory: testElement,
    accessoryAlignment: 'alignTop',
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView.find('div.accessory-align-top')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render an accessory center aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    startAccessory: testElement,
    accessoryAlignment: 'alignCenter',
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView.find('div.accessory-align-center')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render one column', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const displays = [display1, display2];
  const itemView = shallow(<ItemView layout="oneColumn" displays={displays} />);
  expect(itemView.find('div.one-column')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render two columns with 8 displays', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const display4 = shallowWithIntl(<ItemView.Display text="display 4" />);
  const display5 = shallowWithIntl(<ItemView.Display text="display 5" />);
  const display6 = shallowWithIntl(<ItemView.Display text="display 6" />);
  const display7 = shallowWithIntl(<ItemView.Display text="display 7" />);
  const display8 = shallowWithIntl(<ItemView.Display text="display 8" />);
  const display9 = shallowWithIntl(<ItemView.Display text="display 9" />);

  const displays = [display1, display2, display3, display4, display5, display6, display7, display8, display9];
  const itemView = shallow(<ItemView layout="twoColumns" trueColumn displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(8);
  expect(itemView.find('div.two-columns')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render two columns with an odd number of displays', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView layout="twoColumns" trueColumn displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(3);
  expect(itemView.find('div.two-columns')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render two columns with 8 displays when trueColumn is false', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const display4 = shallowWithIntl(<ItemView.Display text="display 4" />);
  const display5 = shallowWithIntl(<ItemView.Display text="display 5" />);
  const display6 = shallowWithIntl(<ItemView.Display text="display 6" />);
  const display7 = shallowWithIntl(<ItemView.Display text="display 7" />);
  const display8 = shallowWithIntl(<ItemView.Display text="display 8" />);
  const display9 = shallowWithIntl(<ItemView.Display text="display 9" />);

  const displays = [display1, display2, display3, display4, display5, display6, display7, display8, display9];
  const itemView = shallow(<ItemView layout="twoColumns" displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(8);
  expect(itemView.find('div.two-columns-by-row')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render a singular display not in an unordered list', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(1);
  expect(itemView.find('div.single-result-column-container')).toHaveLength(1);
  expect(itemView.find('ul.column-list-container')).toHaveLength(0);
  expect(itemView).toMatchSnapshot();
});

it('should render several displays in an unordered list for one column layout', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView.find('ItemDisplay')).toHaveLength(3);
  expect(itemView.find('ul.column-list-container')).toHaveLength(1);
  expect(itemView).toMatchSnapshot();
});

it('should render each column as an unordered list within a primary unordered list for two column layout', () => {
  const display1 = shallowWithIntl(<ItemView.Display text="display 1" />);
  const display2 = shallowWithIntl(<ItemView.Display text="display 2" />);
  const display3 = shallowWithIntl(<ItemView.Display text="display 3" />);
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView displays={displays} layout="twoColumns" trueColumn />);
  expect(itemView.find('ItemDisplay')).toHaveLength(3);
  expect(itemView.find('ul.column-list-container')).toHaveLength(1);
  expect(itemView.find('ul.column-list')).toHaveLength(2);
  expect(itemView).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallow(<ItemView />);
  expect(wrapper.find('div.orion-fusion-theme')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});
