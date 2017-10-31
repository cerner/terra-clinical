# Tech Design for Item Collection Enhancement
## Summary
### Tech Design Considerations:
1. Support Children API
- Proposal: Create ItemCollection Item Component.
2. Support Headers and Subheaders #216 -- This needs more design input & will be implemented later.
3. Options between static, single select and multi select rendering
- Current: Single Select.
- Proposal: add `type` prop
4. Handling column layout #213
- Current: calculates what elements are present on the first has provided in the `rows` props and forces remaining to align
- Proposal: add `requiredElements` prop. Looping through each child to determine the longest row could be cost/unreasonable if many children are present. Instead allow consumer to provide the expected layout, with the default to show every possible element. At most, 1 start accessory, 8 displays, 1 comment and 1 end accessory will be displayed.

### Item Collection API Enhancement
- Maintain `breakpoint`, `listStyles`, `tableStyles`, and `onChange` props
- Deprecate `rows` prop
- Add the following props
| Prop     | Type | Default | Description  | Consideration |
|----------|------|---------|--------------|---------------|
| children | node | null    | The items to flex between an list item or a table row. (Later will also include headers and subheaders)| 1 & 2 |
| type     | string | static | This indicates what type of lists/tables to render. Options include 'static', 'singleSelect', 'multiSelect'. | 3 |
| requiredElements | shape | { startAccessory: true, displays: 8, comment: true, endAccessory: true } | Required elements of the collection. This allows to consistent formatting and visual expectation. | 3 |

This component will export the following components: ItemCollection.Item, ItemCollection.Display and ItemCollection.Comment. Later will also export ItemCollection.Header and ItemCollection.Subheader.


### ItemCollection Item Component
This component would handle the rendering of a list item or table row for the ItemCollection. By default, this would render an ListItem with an ItemView as the content. Else it will render a TableRow with the element layout (startAccessory, displays, comment, endAccessory). This component would not handle missing element logic, but provides a clean way to represent an item within the item collection.

Additionally, this component will export the ItemView.Display and ItemView.Comment components as Item.Display & Item.Comment.

#### React Props:
As a replacement to the `rows` prop, the pieces of the expected row hash will now be their own prop.
| Prop     | Type | Default | Description  |
|----------|------|---------|--------------|
| startAccessory | element | undefined | Element to be placed in the start aligned accessory position. |
| children | array of elements | undefined | Display elements to be presented. |
| comment | element | undefined | Comment element to be presented. |
| endAccessory element | undefined | Element to be placed in the start aligned accessory position. |
| itemViewStyles | element | { layout: 'oneColumn', textEmphasis: 'default', isTruncated: false, accessoryAlignment: 'alignCenter' } | The styles to apply to the ItemView when represented as a list item. Styles options are layout, textEmphasis, isTruncated and accessoryAlignment.|

**QUESTION** Stephen & I talked and we both felt the use of `children` in place of ItemView's `displays` prop would allow for easier implementation. However we could make this `displays` and match the implementation of ItemView. Opinions??
**QUESTION** There will be a customProp `display` which will be passed down by the ItemCollection. Would exposing it be valuable to consumers attempting to construct their own lists/tables. Or should Item strictly be utilized by ItemCollection? My vote would be to only support ItemCollection Item within ItemCollection. Thoughts??

#### Implementation:
```js
<Item
  startAccessory={ <Accessory />}
  comment={ <Item.Comment />}
  endAcessory={ <Accessory />}
  itemViewStyles={{ isTruncated: true }}
>
  <Item.Display />
  <Item.Display />
  <Item.Display />
</Item>
```
### ItemCollection Header/Subheader Component
There are some design/behavior aspects that need to be considered and will land this work in a separate PR/tech design.

### New ItemCollection Implementation
Basic Construction Overview
```js
<ItemCollection {...ItemCollectionProps}>
  <ItemCollection.Item startAccessory={} endAccessory={} comment={}/>
    <ItemCollection.Display />
    <ItemCollection.Display />
    <ItemCollection.Display />
  </ItemCollection.Item>
  <ItemCollection.Item />
  <ItemCollection.Item />
</ItemCollection>

```

Actual Example
```js
# Example
import React form 'terra-item-collection';
import ItemCollection from 'terra-clinical-item-collection';

<ItemCollection
  breakpoint="small"
  type="static"
  tableStyles={{ isPadded: true }}
  listStyles={{ isDivided: true }}
  requiredElements={{ startAccessory: true, endAccessory: true, displays: 3, comment: true }}
>
  <ItemCollection.Item
    startAccessory={<IconAlert />}
    comment={ <ItemCollection.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />}
    endAcessory={<IconInformation />}
    itemViewStyles={{ isTruncated: true }}
  >
    <ItemCollection.Display icon={<IconPerson />} text="Asif Khan" />
    <ItemCollection.Display text="Care Position: Primary" />
    <ItemCollection.Display text="Room 100A" />
  </ItemCollection.Item>
  <ItemCollection.Item
    endAcessory={<IconInformation />}
    itemViewStyles={{ isTruncated: true }}
  >
    <ItemCollection.Display icon={<IconPerson />} text="John Doe" />
    <ItemCollection.Display text="Care Position: Secondary" />
  </ItemCollection.Item>
</ItemCollection>

```
