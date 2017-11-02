import React from 'react';
import Item from '../../src/Item';

const itemStyles = {
  layout: 'twoColumns',
  textEmphasis: 'start',
  isTruncated: true,
  accessoryAlignment: 'alignTop',
};

it('should render a default Item', () => {
  const item = (<Item />);
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});

describe('List View Tests', () => {
  it('should render a default Item', () => {
    const item = (
      <Item view="list" />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with a start accessory', () => {
    const item = (
      <Item
        view="list"
        startAccessory={<p>start</p>}
      />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with children', () => {
    const item = (
      <Item view="list">
        <Item.Display text="Display 1" />
        <Item.Display text="Display 2" />
        <Item.Display text="Display 3" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with a single children', () => {
    const item = (
      <Item view="list">
        <Item.Display text="Display 1" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with a comment', () => {
    const item = (
      <Item
        view="list"
        comment={<Item.Comment text="comment" />}
      />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with an end accessory', () => {
    const item = (
      <Item
        view="list"
        endAccessory={<p>end</p>}
      />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with all elements', () => {
    const item = (
      <Item
        view="list"
        startAccessory={<p>start</p>}
        comment={<Item.Comment text="comment" />}
        endAccessory={<p>end</p>}
      >
        <Item.Display text="Display 1" />
        <Item.Display text="Display 2" />
        <Item.Display text="Display 3" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with list item styles', () => {
    const item = (
      <Item
        view="list"
        startAccessory={<p>start</p>}
        comment={<Item.Comment text="comment" />}
        endAccessory={<p>end</p>}
        itemStyles={itemStyles}
      >
        <Item.Display text="Display 1" />
        <Item.Display text="Display 2" />
        <Item.Display text="Display 3" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should pass customProps to the Item', () => {
    const item = (
      <Item
        view="list"
        isSelected
        isSelectable
        className="ListItem"
      >
        <Item.Display text="Display 1" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });
});

describe('Table View Tests', () => {
  it('should render a default Item', () => {
    const item = (
      <Item view="table" />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with a start accessory', () => {
    const item = (
      <Item
        view="table"
        startAccessory={<p>start</p>}
      />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with children', () => {
    const item = (
      <Item view="table">
        <Item.Display text="Display 1" />
        <Item.Display text="Display 2" />
        <Item.Display text="Display 3" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with a single children', () => {
    const item = (
      <Item view="list">
        <Item.Display text="Display 1" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with a comment', () => {
    const item = (
      <Item
        view="table"
        comment={<Item.Comment text="comment" />}
      />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with an end accessory', () => {
    const item = (
      <Item
        view="table"
        endAccessory={<p>end</p>}
      />
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item with all elements', () => {
    const item = (
      <Item
        view="table"
        startAccessory={<p>start</p>}
        comment={<Item.Comment text="comment" />}
        endAccessory={<p>end</p>}
      >
        <Item.Display text="Display 1" />
        <Item.Display text="Display 2" />
        <Item.Display text="Display 3" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should render a Item that ignores list item styles', () => {
    const item = (
      <Item
        view="table"
        startAccessory={<p>start</p>}
        comment={<Item.Comment text="comment" />}
        endAccessory={<p>end</p>}
        itemStyles={itemStyles}
      >
        <Item.Display text="Display 1" />
        <Item.Display text="Display 2" />
        <Item.Display text="Display 3" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });

  it('should pass customProps to the Item', () => {
    const item = (
      <Item
        view="table"
        isSelected
        isSelectable
        className="TableRow"
      >
        <Item.Display text="Display 1" />
      </Item>
    );
    const component = shallow(item);
    expect(component).toMatchSnapshot();
  });
});
