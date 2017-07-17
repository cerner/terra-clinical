import React from 'react';
import ItemView from '../../lib/ItemView';

// Snapshot Tests
it('should render a default component', () => {
  const itemView = shallow(<ItemView />);
  expect(itemView).toMatchSnapshot();
});

it('should render with 1 display', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render with 2 displays', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render with 3 displays', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const display3 = <ItemView.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render with a display and graphic', () => {
  const testElement = <img alt="Graphic" />;
  const display1 = <ItemView.Display text="display 1" icon={testElement} />;
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render truncated display', () => {
  const display1 = <ItemView.Display text="display1display1display1display1display1display1display1display1" isTruncated />;
  const displays = [display1];
  const itemView = shallow(<ItemView displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render a comment', () => {
  const comment = <ItemView.Comment text="comment" textStyle="attention" isTruncated={false} />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    comment,
  };
  const itemView = shallow(<ItemView {...params} />);
  expect(itemView).toMatchSnapshot();
});

it('should render 1 start theme display', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const displays = [display1];
  const itemView = shallow(<ItemView textEmphasis="start" displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render 2 start theme displays', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const itemView = shallow(<ItemView textEmphasis="start" displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render 3 start theme displays', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const display3 = <ItemView.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView textEmphasis="start" displays={displays} />);
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
  expect(itemView).toMatchSnapshot();
});

it('should render a end accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    endAccessory: testElement,
  };
  const itemView = shallow(<ItemView {...params} />);
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
  expect(itemView).toMatchSnapshot();
});

it('should render one column', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const itemView = shallow(<ItemView layout="oneColumn" displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render two columns with 8 displays', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const display3 = <ItemView.Display text="display 3" />;
  const display4 = <ItemView.Display text="display 4" />;
  const display5 = <ItemView.Display text="display 5" />;
  const display6 = <ItemView.Display text="display 6" />;
  const display7 = <ItemView.Display text="display 7" />;
  const display8 = <ItemView.Display text="display 8" />;
  const display9 = <ItemView.Display text="display 9" />;

  const displays = [display1, display2, display3, display4, display5, display6, display7, display8, display9];
  const itemView = shallow(<ItemView layout="twoColumns" displays={displays} />);
  expect(itemView).toMatchSnapshot();
});

it('should render two columns with odd number of displays', () => {
  const display1 = <ItemView.Display text="display 1" />;
  const display2 = <ItemView.Display text="display 2" />;
  const display3 = <ItemView.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const itemView = shallow(<ItemView layout="twoColumns" displays={displays} />);
  expect(itemView).toMatchSnapshot();
});
