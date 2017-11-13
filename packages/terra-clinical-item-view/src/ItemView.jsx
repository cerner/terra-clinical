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
   * The height and width value the accessory should receive. Maximun scalar is 60px.
   */
  accessoryScale: PropTypes.string,
  /**
   * The react element to be placed in the start aligned accessory position.
   */
  startAccessory: PropTypes.node,
  /**
   * Indicates weather or not the allow space for the start accessory if none is given.
   */
  alignStartAccessory: PropTypes.bool,
  /**
   * The react element to be placed in the end aligned accessory position.
   */
  endAccessory: PropTypes.node,
  /**
   * Indicates weather or not the allow space for the end accessory if none is given.
   */
  alignEndAccessory: PropTypes.bool,
  /**
   * An array of react display elements to be presented.
   */
  displays: PropTypes.arrayOf(PropTypes.element),
  /**
   * The react element for the comment element.
   */
  comment: PropTypes.node,
};

const defaultProps = {
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  accessoryScale: '1em',
  startAccessory: undefined,
  alignStartAccessory: false,
  endAccessory: undefined,
  alignEndAccessory: false,
  displays: [],
  comment: undefined,
};

class ItemView extends React.Component {

  static renderAccessory(alignAccessory, accessory, accessoryAlignment, accessoryScale) {
    let accessorySection;
    if (accessory || alignAccessory) {
      const accessoryClassNames = cx(
        'accessory',
        { 'accessory-align-center': accessoryAlignment === 'alignCenter' },
        { 'accessory-align-top': accessoryAlignment === 'alignTop' },
      );

      let scaledAccessory = accessory;
      if (accessory && accessoryScale !== null) {
        scaledAccessory = React.cloneElement(accessory, { width: accessoryScale, height: accessoryScale });
      }

      accessorySection = (
        <div className={accessoryClassNames} style={{ width: accessoryScale }} >
          {scaledAccessory}
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
    let contentSize = 'content-primary-size';
    let contentColor = 'content-primary-color';

    if (rowIndex > 0) {
      contentSize = 'content-secondary-size';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'content-secondary-color';
    } else if (rowIndex >= 2) {
      contentColor = 'content-secondary-color';
    }

    return [contentSize, contentColor];
  }

  static startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['content-secondary-size', 'content-secondary-color'];
    }

    return ItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  render() {
    const { layout,
            textEmphasis,
            isTruncated,
            accessoryAlignment,
            accessoryScale,
            startAccessory,
            alignStartAccessory,
            endAccessory,
            alignEndAccessory,
            displays,
            comment,
            ...customProps } = this.props;

    const viewClassNames = cx([
      'item-view',
      { 'is-truncated': isTruncated },
      { 'one-column': layout === 'oneColumn' },
      { 'two-columns': layout === 'twoColumns' },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={viewClassNames}>
        {ItemView.renderAccessory(alignStartAccessory, startAccessory, accessoryAlignment, accessoryScale)}
        <div className={cx('body')}>
          {ItemView.renderRows(displays, layout, textEmphasis)}
          {comment}
        </div>
        {ItemView.renderAccessory(alignEndAccessory, endAccessory, accessoryAlignment, accessoryScale)}
      </div>
    );
  }
}

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;
ItemView.Display = ItemDisplay;
ItemView.Comment = ItemDisplay.Comment;

export default ItemView;
