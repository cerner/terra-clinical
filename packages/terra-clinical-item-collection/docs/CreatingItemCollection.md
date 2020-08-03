# Creating Item Collection

Start by making a `ResponsiveElement` that will switch between its two sub-components, a `Table` version of the content when above a certain size and a `List` version of the same content as the default display. In this `ResponsiveElement`, we set 3 attributes. The first is the defaultElement which is just the `List` version of the content. The second is the `responsiveTo` attribute, which determines what the component compares itself to in order to resizes itself, its parent or the window. Terra's `ItemCollection` surrounds its `ResponsiveElement` in a `<div>` tag, and sets `responsiveTo` to `parent`. Finally the breakpoint you want to switch at is defined by setting one of the following attributes: `tiny`, `small`, `medium`, `large`, or `huge` to the `Table` version of the content.

The following is a simplified example of what the code should look like.

```javascript
  <ResponsiveElement
    responsiveTo="parent"
    defaultElement={listDisplay}
    medium={tableDisplay}
  />
```

With the base `ResponsiveElement` now set up, making the two displays versions of content is next.

## Creating the List version

Start with a Terra `List` component and define two of its attributes. `dividerStyle` is used to determine if and where you want the border-color to be applied each of the children and can have the values 'none', 'standard', 'bottom-only'. `role` is only used if the children you have in `List` are selectable, and if they are is defined as 'listbox'.

```javascript
  const listDisplay = (
  <List dividerStyle='none' role='listbox'>
    {children}
  </List>);
```

Next we build the children that are going into this `<List>`. Each child should be wrapped in `terra-list`'s `<Item>` and as display in an `<ItemView>` from `terra-clinical-item-view`.

```javascript
  var listChild = (
    <Item>
      <ItemView
        displays={React.Children.toArray(children)}
      />
    </Item>
  );
```

The props listed in the code examples are the ones set in `terra-clinical-item-collection`, however there are plenty more to be set as needed listed in the `terra-list` documentation. A quirk to pay attention to is if `isSelectable` is used on `<Item>`, `tabIndex` should be added to the `<Item>` and set to `0`.

## Creating the Table version

For `tableDisplay`, we start with this.

```javascript
  const tableDisplay = (
    <Table
      className={styles.table}
    >
      {tableLayout}
      <Table.Rows>
        {tableRows}
      </Table.Rows>
    </Table>
  );
```

In this example the `className` of `style.table` is just a simple class that contains the property of `table-layout: fixed` for better visual experience.

`tableLayout` is just a `colgroup` used to determine the columns you are using in the table. It would look like the following.

```javascript
  const tableLayout = (
    <colgroup>
      <col key={i} />
      ...
    </colgroup>
  );
```

Finally `tableRows` contain the actual making of each row of content that looks like this.

```javascript
  const tableRow = (
    <Table.Row>
      <Table.Cell content={display} key={'display_i'}/>
      ...
    </Table.Row>
  );
```

Quick mention is that if `isSelectable` is used on `<Table.Row>`, `tabIndex` should be added to and set to `0`.

## Creating a Cell Grid that looks like a Table

Instead of using `<Table>`, you can use `<CellGrid>` to create another version of the default content when over a certain window size. This method requires a little bit of CSS to be put in place to get a closer match to `<Table>`'s default style. The basic content look of it looks like this.

```javascript
  const cellGridDisplay = (
    <div className={cx('cellgrid-wrapper')}>
      <CellGrid className={cx('row')}>
        <Cell className={cx('start-accessory')} key="cell-0" width={{ static: { value: 40, unit: 'px' } }}>{startAccessory}</Cell>
        <Cell className={cx('display')} key="cell-i" width={{ scalar: 1 }}>{display}</Cell>
        ...
      </CellGrid>
      ...
    </div>
  );
```

In this example, the `<CellGrid>` effectively replaces `<Table.Row>` and doesn't require any props other than defining a class for it. The `<Cell>`'s are where the content is placed. In the example provided at the bottom of this page, the content has two accessories on either side of the main information. Setting these accessories `width` prop to `{ static: { value: 40, unit: 'px' } }` allows the accessories to only take up a small amount of space, while the rest of the `Cell`'s use `{ scalar: 1 }` for width to automatically take up an equal percentage of the remaining space.

For the main styles it uses the following CSS.

```css
.cellgrid-wrapper {
  border-bottom: 1px solid #c8cacb;
}

.row {
  border-top: 1px solid #c8cacb;
  display: flex;
  min-height: 60px;
}

.row:nth-child(even) {
  background: #f4f4f4;
}
```
