To customize `ItemCollection` for yourself, your going to need to make most of the components yourself. We start by making a `ResponsiveElement` that will contain the information for when we want to switch between our two sub-components, which is a `Table` version of the children when above a certain size and a `List` version of the same children as the default display. In this `ResponsiveElement` we need to specify the breakpoint we want to switch at to one of the following: `tiny`, `small`, `medium`, `large`, or `huge`. And the last thing we need for our `ResponsiveElement` is declaring the `responsiveTo` attribute, which determines what the component compares itself to in order to resizes itself, its parent or the window. Terra's `ItemCollection` surrounds its `ResponsiveElement` in a `<div>` tag, and sets `responsiveTo` to `parent`.

The following is a simplified example of what the code should look like.

```javascript
  <ResponsiveElement
    responsiveTo="parent"
    defaultElement={listDisplay}
    medium={tableDisplay}
  />
```

With our base `ResponsiveElement` set up now, we can move to actually making the individual displays according to the content we need displayed. We'll start with the `List` version since it is the default appearance.

We start with Terra `List` and defining two of its attributes. `dividerStyle` is used to determine what you want the border-color to be applied to all the `List`'s children and can have values 'none', 'standard', 'bottom-only'. `role` is used if the children you have in `List` are selectable, and if they are is defined as 'listbox'.

```javascript
  const listDisplay = (
  <List role='listbox'>
    {children}
  </List>);
```

Next we build the children that are going into this `<List>`. Each child should be wrapped in two components, `<List.Item>` and `<ItemView>` from `terra-clinical-item-view`.

```javascript
  var listChild = (
    <List.Item
      content={
        <ItemView
          displays={React.Children.toArray(children)}
        />
      }
      // tabIndex={0}
    />
  );
```

The props listed in the code examples are the ones set in `terra-clinical-item-collection`, however there are plenty more to be set as needed listed in the `terra-list` documentation. The quick one of note is if `isSelectable` is used, `tabIndex` should be added and set to `0`.
-----
For `tableDisplay`, we start with this.
```javascript
  const tableDisplay = (
    <Table
      data-terra-clinical-item-collection-table-view
      className={styles.table}
      isPadded={isTablePadded}
      isStriped={isTableStriped}
    >
      {tableLayout}
      <Table.Rows>
        {tableRows}
      </Table.Rows>
    </Table>
```

Most of these props are explained on the `terra-table` documentation. The things that will be explained here are the `className`, `tableLayout`, and `tableRows`.

`className` of `style.table` is just a simple class that contains the property of `table-layout: fixed`.

`tableLayout` is just a `colgroup` used to determine the columns you are using in the table. It is made like the following.

```javascript
  const tableLayout = (
    <colgroup>
      {hasStartAccessory && <col className={styles['start-accessory-column']} />}
      {displays}
      {hasComment && <col data-terra-clinical-item-collection-comment-column />}
      {hasEndAccessory && <col data-terra-clinical-item-collection-end-accessory-column />}
    </colgroup>
  );
```

With `displays` being any number of content items you want in the table in the form of `<col key={i} data-terra-clinical-item-collection-display-column />` with `i` being it's index.

Finally `tableRows` contain the actual making of each row of content that looks like this.

```javascript
  const tableRow = (
    <Table.Row isSelected={isSelected} {...selectableProps} {...customProps}>
      {startAccessory && createTableCell(startAccessory, 'start_accessory', 'accessory', accessoryAlignment)}
      {createTableCell(display, 'display_i', 'display')}
      {comment && createTableCell(comment, 'comment', 'comment')}
      {endAccessory && createTableCell(endAccessory, 'end_accessory', 'accessory', accessoryAlignment)}
    </Table.Row>
  );

  function createTableCell(content, keyValue, contentType, accessoryAlignment) {
    const cellClassNames = cx(
      `content-${contentType}`,
      { 'content-end-accessory': keyValue === 'end_accessory' },
      { 'content-accessory-align-center': (contentType.includes('accessory') && accessoryAlignment === 'alignCenter') },
      { 'content-accessory-align-top': (contentType.includes('accessory') && accessoryAlignment === 'alignTop') },
    );

    return (<Table.Cell content={content} key={keyValue} className={cellClassNames} />);
  }
```

With the needed CSS.

```CSS
.content-accessory.content-accessory-align-top {
  vertical-align: top;
}

.content-accessory.content-accessory-align-center {
  vertical-align: middle;
}

.content-accessory.content-end-accessory {
  text-align: right;
}
```

?A list looking table example.?
