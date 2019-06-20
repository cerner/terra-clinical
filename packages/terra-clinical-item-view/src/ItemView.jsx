import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ItemDisplay from 'terra-clinical-item-display';
import styles from './ItemView.scss';

const cx = classNames.bind(styles);

const Layouts = {
  ONE_COLUMN: 'oneColumn',
  TWO_COLUMNS: 'twoColumns',
};

const TextEmphasisTypes = {
  DEFAULT: 'default',
  START: 'start',
};

const AccessoryAlignments = {
  ALIGN_TOP: 'alignTop',
  ALIGN_CENTER: 'alignCenter',
};

const propTypes = {
  /**
   * The column layout in which to present the displays. One of `oneColumn`, `twoColumn`.
   */
  layout: PropTypes.oneOf([Layouts.ONE_COLUMN, Layouts.TWO_COLUMNS]),
  /**
   * The text color emphasis when using two columns. One of `default`, `start`.
   */
  textEmphasis: PropTypes.oneOf([TextEmphasisTypes.DEFAULT, TextEmphasisTypes.START]),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the start and end accesories. One of `alignTop`, `alignCenter`.
   */
  accessoryAlignment: PropTypes.oneOf([AccessoryAlignments.ALIGN_TOP, AccessoryAlignments.ALIGN_CENTER]),
  /**
   * The react element to be placed in the start aligned accessory position.
   */
  startAccessory: PropTypes.node,
  /**
   * Indicates whether or not space is allocated for the start accessory if none is given.
   */
  reserveStartAccessorySpace: PropTypes.bool,
  /**
   * The react element to be placed in the end aligned accessory position.
   */
  endAccessory: PropTypes.node,
  /**
   * An array of terra-clinical-item-display's to be presented.
   */
  displays: PropTypes.arrayOf(PropTypes.element),
  /**
   * The react element for the comment element.
   */
  comment: PropTypes.node,
  /**
   * Function callback for the ref of the outer most div.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  layout: Layouts.ONE_COLUMN,
  textEmphasis: TextEmphasisTypes.DEFAULT,
  isTruncated: false,
  accessoryAlignment: AccessoryAlignments.ALIGN_CENTER,
  startAccessory: undefined,
  reserveStartAccessorySpace: false,
  endAccessory: undefined,
  displays: [],
  comment: undefined,
};

const renderAccessory = (accessory, reserveSpace, accessoryAlignment, type) => {
  let accessorySection;
  if (accessory || reserveSpace) {
    const accessoryClassNames = cx(
      'accessory',
      `${type}-accessory`,
      { 'accessory-align-center': accessoryAlignment === AccessoryAlignments.ALIGN_CENTER },
      { 'accessory-align-top': accessoryAlignment === AccessoryAlignments.ALIGN_TOP },
    );

    accessorySection = (
      <div className={accessoryClassNames}>
        {accessory}
      </div>
    );
  }
  return accessorySection;
};

const defaultEmphasisContentClassesFromIndexes = (rowIndex, rowCount) => {
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
};

const startEmphasisContentClassesFromIndexes = (rowIndex, rowCount, contentIndex) => {
  if (contentIndex === 1) {
    return ['content-secondary-size', 'content-secondary-color'];
  }

  return defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
};

const classesForContent = (rowIndex, rowCount, contentIndex, emphasis) => {
  let classes;
  if (emphasis === TextEmphasisTypes.START) {
    classes = startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
  } else {
    classes = defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }
  return ['content'].concat(classes);
};

const renderRow = (row, rowIndex, rowCount, emphasis) => {
  const rowKey = rowIndex;
  return (
    <div className={cx('row')} key={rowKey}>
      {row.map((display, contentIndex) => {
        const contentKey = contentIndex;
        const contentClasses = classesForContent(rowIndex, rowCount, contentIndex, emphasis);
        return (
          <div className={cx(contentClasses)} key={contentKey}>
            {display}
          </div>
        );
      })}
    </div>
  );
};

const renderRows = (displays, layout, emphasis) => {
  if (displays === null || displays === undefined || !displays.length) {
    return undefined;
  }

  const displayGroups = [];
  const displaysSlice = displays.slice(0, 8);
  const spliceValue = layout === Layouts.TWO_COLUMNS ? 2 : 1;

  while (displaysSlice.length) {
    displayGroups.push(displaysSlice.splice(0, spliceValue));
  }

  return (
    <div className={cx('row-container')}>
      {displayGroups.map((group, index) => {
        const row = renderRow(group, index, displayGroups.length, emphasis);
        return row;
      })}
    </div>
  );
};

const ItemView = ({
  layout,
  textEmphasis,
  isTruncated,
  accessoryAlignment,
  startAccessory,
  reserveStartAccessorySpace,
  endAccessory,
  displays,
  comment,
  refCallback,
  ...customProps
}) => {
  const viewClassNames = cx([
    'item-view',
    { 'is-truncated': isTruncated },
    { 'one-column': layout === Layouts.ONE_COLUMN },
    { 'two-columns': layout === Layouts.TWO_COLUMNS },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={viewClassNames} ref={refCallback}>
      {renderAccessory(startAccessory, reserveStartAccessorySpace, accessoryAlignment, 'start')}
      <div className={cx('body')}>
        {renderRows(displays, layout, textEmphasis)}
        {comment}
      </div>
      {renderAccessory(endAccessory, false, accessoryAlignment, 'end')}
    </div>
  );
};

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;

ItemView.Display = ItemDisplay;
ItemView.Comment = ItemDisplay.Comment;

export default ItemView;
export {
  Layouts,
  TextEmphasisTypes,
  AccessoryAlignments,
};
