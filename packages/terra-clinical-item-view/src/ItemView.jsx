import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ItemDisplay from 'terra-clinical-item-display';
import 'terra-base/lib/baseStyles';
import styles from './ItemView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The column layout in which to present the displays.
   */
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  /**
   * The text color emphasis when using two columns.
   */
  textEmphasis: PropTypes.oneOf(['default', 'start']),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the start and end accesories.
   */
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  /**
   * The react element to be placed in the start aligned accessory position.
   */
  startAccessory: PropTypes.element,
  /**
   * The react element to be placed in the end aligned accessory position.
   */
  endAccessory: PropTypes.element,
  /**
   * An array of react display elements to be presented.
   */
  displays: PropTypes.arrayOf(PropTypes.element),
  /**
   * The react element for the comment element.
   */
  comment: PropTypes.element,
};

const defaultProps = {
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  startAccessory: undefined,
  endAccessory: undefined,
  displays: [],
  comment: undefined,
};

class ItemView extends React.Component {

  static renderAccessory(accessory, accessoryAlignment) {
    let accessorySection;
    if (accessory) {
      accessorySection = (
        <div className={cx('accessory', { [`accessory-${accessoryAlignment}`]: accessoryAlignment })}>
          {accessory}
        </div>
      );
    }
    return accessorySection;
  }

  static renderRows(displays, layout, emphasis) {
    if (displays === null || displays === undefined || !displays.length) {
      return undefined;
    }

    const displayGroups = [];
    const displaysSlice = displays.slice(0, 8);
    const spliceValue = layout === 'twoColumns' ? 2 : 1;

    while (displaysSlice.length) {
      displayGroups.push(displaysSlice.splice(0, spliceValue));
    }

    return (
      <div className={cx('row-container')}>
        {displayGroups.map((group, index) => {
          const row = ItemView.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })}
      </div>
    );
  }

  static renderRow(row, rowIndex, rowCount, emphasis) {
    const rowKey = rowIndex;
    return (
      <div className={cx('row')} key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = ItemView.classesForContent(rowIndex, rowCount, contentIndex, emphasis);
          return (
            <div className={cx(contentClasses)} key={contentKey}>
              {display}
            </div>
          );
        })}
      </div>
    );
  }

  static classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
    let classes;
    if (emphasis === 'start') {
      classes = ItemView.startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
    } else {
      classes = ItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
    return ['content'].concat(classes);
  }

  static defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
    let contentSize = 'content-primarySize';
    let contentColor = 'content-primaryColor';

    if (rowIndex > 0) {
      contentSize = 'content-secondarySize';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'content-secondaryColor';
    } else if (rowIndex >= 2) {
      contentColor = 'content-secondaryColor';
    }

    return [contentSize, contentColor];
  }

  static startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['content-secondarySize', 'content-secondaryColor'];
    }

    return ItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  render() {
    const { layout,
            textEmphasis,
            isTruncated,
            accessoryAlignment,
            startAccessory,
            endAccessory,
            displays,
            comment,
            ...customProps } = this.props;

    const viewClassNames = cx([
      'item-view',
      { 'is-truncated': isTruncated },
      { [`${layout}`]: layout },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={viewClassNames}>
        {ItemView.renderAccessory(startAccessory, accessoryAlignment)}
        <div className={cx('body')}>
          {ItemView.renderRows(displays, layout, textEmphasis)}
          {comment}
        </div>
        {ItemView.renderAccessory(endAccessory, accessoryAlignment)}
      </div>
    );
  }
}

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;
ItemView.Display = ItemDisplay;
ItemView.Comment = ItemDisplay.Comment;

export default ItemView;
