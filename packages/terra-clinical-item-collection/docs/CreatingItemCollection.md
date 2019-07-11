Start by making a `ResponsiveElement` that will contain the content and switch between two sub-components, a `Table` version of the children when above a certain size and a `List` version of the same children as the default display. In this `ResponsiveElement` specify the breakpoint you want to switch at to one of the following: `tiny`, `small`, `medium`, `large`, or `huge`. Lastly for the `ResponsiveElement` is declaring the `responsiveTo` attribute, which determines what the component compares itself to in order to resizes itself, its parent or the window. Terra's `ItemCollection` surrounds its `ResponsiveElement` in a `<div>` tag, and sets `responsiveTo` to `parent`.

The following is a simplified example of what the code should look like.

```javascript
  <ResponsiveElement
    responsiveTo="parent"
    defaultElement={listDisplay}
    medium={tableDisplay}
  />
```

With the base `ResponsiveElement` now set up, making the two displays versions of content is next.

Start with Terra `List` and define two of its attributes, `dividerStyle` is used to determine if and where you want the border-color to be applied each of the children and can have the values 'none', 'standard', 'bottom-only'. `role` is only used if the children you have in `List` are selectable, and if they are is defined as 'listbox'.

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
    />
  );
```

The props listed in the code examples are the ones set in `terra-clinical-item-collection`, however there are plenty more to be set as needed listed in the `terra-list` documentation. The one quirk of note is if `isSelectable` is used on `<List.Item>`, `tabIndex` should be added to the `<List.Item>` and set to `0`.

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

The `className` of `style.table` is just a simple class that contains the property of `table-layout: fixed`.

`tableLayout` is just a `colgroup` used to determine the columns you are using in the table. It is made like the following.

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

?A list looking table example.?
series of div/flexs replacing the table, with a css with columned widths
maybe min-height but flex height,
