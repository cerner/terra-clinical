import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './ItemView.scss';

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
    const accessoryClassNames = classNames([
      'terraClinical-ItemView-accessory',
      { [`terraClinical-ItemView-accessory--${accessoryAlignment}`]: accessoryAlignment },
    ]);

    let accessorySection;
    if (accessory) {
      accessorySection = (
        <div className={accessoryClassNames}>
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
      <div className="terraClinical-ItemView-rowContainer">
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
      <div className="terraClinical-ItemView-row" key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = ItemView.classesForContent(rowIndex,
                                                            rowCount,
                                                            contentIndex,
                                                            emphasis);
          return (
            <div className={contentClasses} key={contentKey}>
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
    return ['terraClinical-ItemView-content'].concat(classes).join(' ');
  }

  static defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
    let contentSize = 'terraClinical-ItemView-content--primarySize';
    let contentColor = 'terraClinical-ItemView-content--primaryColor';

    if (rowIndex > 0) {
      contentSize = 'terraClinical-ItemView-content--secondarySize';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'terraClinical-ItemView-content--secondaryColor';
    } else if (rowIndex >= 2) {
      contentColor = 'terraClinical-ItemView-content--secondaryColor';
    }

    return [contentSize, contentColor];
  }

  static startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['terraClinical-ItemView-content--secondarySize', 'terraClinical-ItemView-content--secondaryColor'];
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

    const viewClassNames = classNames([
      'terraClinical-ItemView',
      { 'terraClinical-ItemView--isTruncated': isTruncated },
      { [`terraClinical-ItemView--${layout}`]: layout },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={viewClassNames}>
        {ItemView.renderAccessory(startAccessory, accessoryAlignment)}
        <div className="terraClinical-ItemView-body">
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

export default ItemView;
