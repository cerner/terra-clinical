import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ItemView from 'terra-clinical-item-view';
import List from 'terra-list';
import Table from 'terra-table';
import styles from './ItemCollection.module.scss';

const cx = classNames.bind(styles);

const ListItemLayouts = {
  ONE_COLUMN: 'oneColumn',
  TWO_COLUMNS: 'twoColumns',
};

const ListItemTextEmphasisTypes = {
  DEFAULT: 'default',
  START: 'start',
};

const AccessoryAlignments = {
  ALIGN_TOP: 'alignTop',
  ALIGN_CENTER: 'alignCenter',
};

const Views = {
  LIST: 'list',
  TABLE: 'table',
};

const propTypes = {
  /**
   * The display elements to be presented.
   */
  children: PropTypes.node,
  /**
   * The start accessory element to be presented.
   * This will only be shown if the Item Collection component's `hasStartAccessory` prop is *true*.
   */
  startAccessory: PropTypes.node,
  /**
   * The comment element to be presented.
   * This will only be shown if the Item Collection component's `hasComment` prop is *true*.
   */
  comment: PropTypes.node,
  /**
   * The end accessory element to be presented.
   * This will only be shown if the Item Collection component's `hasEndAccessory` prop is *true*.
   */
  endAccessory: PropTypes.node,
  /**
   * When displayed as a list item, the column layout in which to present the displays.
   * One of `'oneColumn'`, `'twoColumns'`.
   */
  listItemLayout: PropTypes.oneOf(Object.values(ListItemLayouts)),
  /**
   * When displayed as a list item, the text color emphasis when using the two columns layout.
   * One of `'default'`, `'start'`.
   */
  listItemTextEmphasis: PropTypes.oneOf(Object.values(ListItemTextEmphasisTypes)),
  /**
   * When displayed as a list item, whether or not all text should truncate.
   */
  isListItemTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the start and end accessories. One of `'alignTop'`,`'alignCenter'`.
   */
  accessoryAlignment: PropTypes.oneOf(Object.values(AccessoryAlignments)),
  /**
   * When displayed as a list item, indicates whether or not space is allocated for the start accessory.
   * This will be set by the Item Collection component.
   */
  reserveStartAccessorySpace: PropTypes.bool,
  /**
   * When displayed as a list item, whether or not it has a chevron. This should only be used when creating a
   * a single selectable list.
   */
  showListItemChevron: PropTypes.bool,
  /**
   * Whether or not the item is selectable. If true, the item is given list and table hover and focus styles
   * and set tabIndex to 0.
   */
  isSelectable: PropTypes.bool,
  /*
   * Whether or not the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * The view in which the item should be presented. Options are list or table and this will be set by the
   * Item Collection component. One of `list`, `table`.
   */
  view: PropTypes.oneOf(Object.values(Views)),
};

const defaultProps = {
  startAccessory: undefined,
  comment: undefined,
  endAccessory: undefined,
  accessoryAlignment: AccessoryAlignments.ALIGN_CENTER,
  isListItemTruncated: false,
  isSelectable: false,
  isSelected: false,
  listItemLayout: ListItemLayouts.ONE_COLUMN,
  listItemTextEmphasis: ListItemTextEmphasisTypes.DEFAULT,
  reserveStartAccessorySpace: false,
  showListItemChevron: false,
  view: Views.LIST,
};

function createListItem(elements, selectableProps, customProps, isSelected, itemViewStyles, showListItemChevron) {
  const {
    startAccessory, children, comment, endAccessory, reserveStartAccessorySpace,
  } = elements;

  const listItemContent = (
    <ItemView
      startAccessory={startAccessory}
      displays={React.Children.toArray(children)}
      comment={comment}
      endAccessory={endAccessory}
      reserveStartAccessorySpace={reserveStartAccessorySpace}
      {...itemViewStyles}
    />
  );

  return (
    <List.Item
      content={listItemContent}
      isSelected={isSelected}
      hasChevron={showListItemChevron}
      {...selectableProps}
      {...customProps}
    />
  );
}

function createTableCell(content, keyValue, contentType, accessoryAlignment) {
  const cellClassNames = cx(
    `content-${contentType}`,
    { 'content-end-accessory': keyValue === 'end_accessory' },
    { 'content-accessory-align-center': (contentType.includes('accessory') && accessoryAlignment === AccessoryAlignments.ALIGN_CENTER) },
    { 'content-accessory-align-top': (contentType.includes('accessory') && accessoryAlignment === AccessoryAlignments.ALIGN_TOP) },
  );

  return (<Table.Cell content={content} key={keyValue} className={cellClassNames} />);
}

function createTableRow(elements, selectableProps, customProps, isSelected, accessoryAlignment) {
  const {
    startAccessory, children, comment, endAccessory,
  } = elements;

  const displayContent = React.Children.map(children, (display, index) => {
    const displayKey = `display_${index + 1}`;
    return createTableCell(display, displayKey, 'display');
  });

  return (
    <Table.Row isSelected={isSelected} {...selectableProps} {...customProps}>
      {startAccessory && createTableCell(startAccessory, 'start_accessory', 'accessory', accessoryAlignment)}
      {displayContent}
      {comment && createTableCell(comment, 'comment', 'comment')}
      {endAccessory && createTableCell(endAccessory, 'end_accessory', 'accessory', accessoryAlignment)}
    </Table.Row>
  );
}

const Item = (props) => {
  const {
    children,
    startAccessory,
    comment,
    endAccessory,
    accessoryAlignment,
    isListItemTruncated,
    isSelectable,
    isSelected,
    listItemLayout,
    listItemTextEmphasis,
    reserveStartAccessorySpace,
    showListItemChevron,
    view,
    ...customProps
  } = props;

  const elements = {
    children, startAccessory, comment, endAccessory, reserveStartAccessorySpace,
  };
  const selectableProps = isSelectable ? { isSelectable, tabIndex: 0 } : {};

  if (view === Views.TABLE) {
    return createTableRow(elements, selectableProps, customProps, isSelected, accessoryAlignment);
  }

  const itemViewStyles = {
    layout: listItemLayout, textEmphasis: listItemTextEmphasis, isTruncated: isListItemTruncated, accessoryAlignment,
  };
  return createListItem(elements, selectableProps, customProps, isSelected, itemViewStyles, showListItemChevron);
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.Display = ItemView.Display;
Item.Comment = ItemView.Comment;

export default Item;
export {
  ListItemLayouts, ListItemTextEmphasisTypes, AccessoryAlignments, Views,
};
