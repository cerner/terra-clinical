import React from 'react';
import ItemCollection from '../../src/ItemCollection';

it('should render an default ItemCollection with no elements', () => {
  const itemCollection = (
    <ItemCollection>
      <ItemCollection.Item />
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with a start accessory', () => {
  const itemCollection = (
    <ItemCollection
      hasStartAccessory
    >
      <ItemCollection.Item startAccessory={<p>S</p>} />
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with displays', () => {
  const itemCollection = (
    <ItemCollection
      numberOfDisplays={1}
    >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should only allow 8 displays when numberOfDisplays is more than maxDisplays of 8', () => {
  const itemCollection = (
    <ItemCollection
      breakpoint="small"
      numberOfDisplays={9}
    >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);

  // Test required dipslays for list view
  expect(component.props().defaultElement.props.requiredElements.numberOfDisplays).toEqual(8);

  // Test required dipslays for table view
  expect(component.props().small.props.requiredElements.numberOfDisplays).toEqual(8);
});

it('should render an ItemCollection with a comment', () => {
  const itemCollection = (
    <ItemCollection
      hasComment
    >
      <ItemCollection.Item comment={<ItemCollection.Comment text="test comment" />} />
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with an end accessory', () => {
  const itemCollection = (
    <ItemCollection
      hasEndAccessory
    >
      <ItemCollection.Item endAccessory={<p>E</p>} />
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with all elements', () => {
  const itemCollection = (
    <ItemCollection
      hasStartAccessory
      numberOfDisplays={1}
      hasComment
      hasEndAccessory
    >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with list styles', () => {
  const itemCollection = (
    <ItemCollection isListDivided >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
        <ItemCollection.Display text="Display 2" />
        <ItemCollection.Display text="Display 3" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with table styles', () => {
  const itemCollection = (
    <ItemCollection isTablePadded isTableStriped >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
        <ItemCollection.Display text="Display 2" />
        <ItemCollection.Display text="Display 3" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with a breakpoint', () => {
  const itemCollection = (
    <ItemCollection breakpoint="tiny" >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
        <ItemCollection.Display text="Display 2" />
        <ItemCollection.Display text="Display 3" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with onSelect', () => {
  const itemCollection = (
    <ItemCollection onSelect={() => {}} >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display isSelectable text="Display 1" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});

it('should render an ItemCollection with custom props', () => {
  const itemCollection = (
    <ItemCollection onSelect={() => { }} id="foo" className="bar" >
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display isSelectable text="Display 1" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});
