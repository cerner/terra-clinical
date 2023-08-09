import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ItemDisplay from 'terra-clinical-item-display';
import ItemComment from 'terra-clinical-item-display/lib/ItemComment';
import styles from './ItemView.module.scss';

const cx = classNamesBind.bind(styles);

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
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  /**
   * The text color emphasis when using two columns. One of `default`, `start`.
   */
  textEmphasis: PropTypes.oneOf(['default', 'start']),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the start and end accessories. One of `alignTop`, `alignCenter`.
   */
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
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

  if (rowIndex >= 2 || (rowCount === 2 && rowIndex === 1)) {
    contentColor = 'content-secondary-color';
  }

  return [contentSize, contentColor];
};

const startEmphasisContentClassesFromIndexes = (rowIndex, rowCount, columnIndex) => {
  if (columnIndex > 0 || rowIndex >= 2) {
    return ['content-secondary-size', 'content-secondary-color'];
  }

  return defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
};

const classesForContent = (rowIndex, rowCount, columnIndex, emphasis) => {
  let classes;

  if (emphasis === TextEmphasisTypes.START) {
    classes = startEmphasisContentClassesFromIndexes(rowIndex, rowCount, columnIndex);
  } else {
    classes = defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  return ['content'].concat(classes);
};

const renderColumn = (displayGroup, displayGroupIndex, emphasis) => {
  const columnKey = displayGroupIndex;
  const displayCount = displayGroup.length;
  let containerStyling;

  if (displayGroupIndex === 0) {
    containerStyling = 'primary-column';
  } else {
    containerStyling = 'secondary-column';
  }

  return (
    <div className={cx(containerStyling)} key={columnKey}>
      {displayGroup.map((display, contentIndex) => {
        const contentKey = contentIndex;
        const contentClasses = classesForContent(contentIndex, displayCount, displayGroupIndex, emphasis);
        return (
          <div className={cx(contentClasses)} key={contentKey}>
            {display}
          </div>
        );
      })}
    </div>
  );
};

const renderView = (displays, layout, emphasis) => {
  if (displays === null || displays === undefined || !displays.length) {
    return undefined;
  }

  const primaryColumn = [];
  const displayGroups = [];
  const displaysSlice = displays.slice(0, 8);

  if (layout === Layouts.TWO_COLUMNS) {
    let count = 0;
    const secondaryColumn = [];

    while (displaysSlice.length) {
      count += 1;

      if (count % 2 === 0) {
        secondaryColumn.push(displaysSlice.splice(0, 1));
      } else {
        primaryColumn.push(displaysSlice.splice(0, 1));
      }
    }

    displayGroups.push(primaryColumn);
    displayGroups.push(secondaryColumn);
  } else {
    while (displaysSlice.length) {
      primaryColumn.push(displaysSlice.splice(0, 1));
    }

    displayGroups.push(primaryColumn);
  }

  return (
    <div className={cx('column-container')}>
      {displayGroups.map((group, index) => {
        const column = renderColumn(group, index, emphasis);
        return column;
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
  const theme = React.useContext(ThemeContext);
  const viewClassNames = classNames(
    cx(
      'item-view',
      { 'is-truncated': isTruncated },
      { 'one-column': layout === Layouts.ONE_COLUMN },
      { 'two-columns': (layout === Layouts.TWO_COLUMNS && !isTruncated) },
      { 'truncated-two-columns': (layout === Layouts.TWO_COLUMNS && isTruncated) },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <div {...customProps} className={viewClassNames} ref={refCallback}>
      {renderAccessory(startAccessory, reserveStartAccessorySpace, accessoryAlignment, 'start')}
      <div className={cx('body')}>
        {renderView(displays, layout, textEmphasis)}
        {comment}
      </div>
      {renderAccessory(endAccessory, false, accessoryAlignment, 'end')}
    </div>
  );
};

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;

ItemView.Display = ItemDisplay;
ItemView.Comment = ItemComment;

export default ItemView;
export {
  Layouts,
  TextEmphasisTypes,
  AccessoryAlignments,
};
