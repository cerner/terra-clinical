import React from 'react';
import ItemCollection from '../../src/ItemCollection';

it('should render a default ItemCollection', () => {
  const itemCollection = (
    <ItemCollection>
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

it('should render an ItemCollection with list styles', () => {
  const itemCollection = (
    <ItemCollection listStyles={{ isDivided: true, hasChevrons: true }}>
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
    <ItemCollection tableStyles={{ isPadded: true, isStriped: true }}>
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
    <ItemCollection breapoint="tiny" >
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

it('should render an ItemCollection with requiredElements', () => {
  const requiredElements = { startAccessoryRequired: true, displaysRequired: 5, commentRequired: true, endAccessoryRequired: false };
  const itemCollection = (
    <ItemCollection requiredElements={requiredElements}>
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </ItemCollection>
  );
  const component = shallow(itemCollection);
  expect(component).toMatchSnapshot();
});
