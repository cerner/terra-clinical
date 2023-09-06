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
   * The visual column layout in which to present the displays. One of `oneColumn`, `twoColumn`.
   */
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  /**
  * Determines whether the displays are programmatically separated by row or as true columns when layout is set to `twoColumns`.
  * Screenreaders will read `trueColumn` displays from top to bottom, one column at a time.
  * However, this prop defaults to `false` and therefore the screenreader will read the displays in both columns together, left to right, one row at a time.
  * For accessibility purposes it is recommended to set trueColumn to `true`.
  */
  trueColumn: PropTypes.bool,
  /**
   * The text color emphasis when using two columns. One of `default`, `start`.
   */
  textEmphasis: PropTypes.oneOf(['default', 'start']),
  /**
   * Option to override the item view default styling so the original styling for item display is shown.
   */
  overrideDefaultStyling: PropTypes.bool,
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
  trueColumn: false,
  textEmphasis: TextEmphasisTypes.DEFAULT,
  overrideDefaultStyling: false,
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

const startEmphasisContentClassesFromIndexes = (rowIndex, rowCount, contentIndex) => {
  if (contentIndex > 0 || rowIndex >= 2) {
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

const renderRow = (row, rowIndex, rowCount, emphasis, overrideDefaultStyling) => {
  const rowKey = rowIndex;

  return (
    <li className={cx('row')} key={rowKey}>
      <ul className={cx('row-list')} key={rowKey}>
        {row.map((display, displayIndex) => {
          const displayKey = displayIndex;
          const contentClasses = overrideDefaultStyling ? 'content' : classesForContent(rowIndex, rowCount, displayIndex, emphasis);

          return (
            <li className={cx(contentClasses)} key={displayKey}>
              {display}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const renderTwoColumns = (displayGroup, displayGroupIndex, emphasis, overrideDefaultStyling) => {
  const columnKey = displayGroupIndex;
  const displayCount = displayGroup.length;
  const containerStyling = displayGroupIndex === 0 ? 'primary-column' : 'secondary-column';

  return (
    <li className={cx(containerStyling)} key={columnKey}>
      <ul className={cx('column-list')} key={columnKey}>
        {displayGroup.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = overrideDefaultStyling ? 'content' : classesForContent(contentIndex, displayCount, displayGroupIndex, emphasis);

          return (
            <li className={cx(contentClasses)} key={contentKey}>
              {display}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const renderColumn = (displays, emphasis, overrideDefaultStyling) => {
  const displayCount = displays.length;

  return (
    <div>
      <ul className={cx('column-list-container')}>
        {displays.map((display, displayIndex) => {
          const contentKey = displayIndex;
          /**
           * We are only ever rendering one column so zero is being passed into classesForContent for the contentIndex variable.
           * classesForContent would usually take in an index for that but in this case we don't have one explicitly.
           */
          const contentClasses = overrideDefaultStyling ? 'content' : classesForContent(displayIndex, displayCount, 0, emphasis);

          return (
            <li className={cx(contentClasses)} key={contentKey}>
              {display}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const renderByRowView = (displays, emphasis, overrideDefaultStyling) => {
  const displayGroups = [];

  while (displays.length) {
    displayGroups.push(displays.splice(0, 2));
  }

  return (
    <div>
      <ul className={cx('row-list-container')}>
        {displayGroups.map((displayRow, rowIndex) => {
          const row = renderRow(displayRow, rowIndex, displayGroups.length, emphasis, overrideDefaultStyling);
          return row;
        })}
      </ul>
    </div>
  );
};

const renderSingleDisplayView = (singleDisplay, overrideDefaultStyling) => {
  /**
   * Since this is always a singular display, the content styling will be the primary defaults if they are not overridden.
   * We don't have to call into the classesForContent method and instead can just set the primary size and color here.
   */
  const contentClass = overrideDefaultStyling ? 'content' : ['content', 'content-primary-size', 'content-primary-color'];

  return (
    <div className={cx('single-result-column-container')}>
      <div className={cx(contentClass)}>
        {singleDisplay}
      </div>
    </div>
  );
};

const twoColumnGrouping = (displays) => {
  let count = 0;
  const displayGroups = [];
  const primaryColumn = [];
  const secondaryColumn = [];

  while (displays.length) {
    count += 1;

    if (count % 2 === 0) {
      secondaryColumn.push(displays.splice(0, 1));
    } else {
      primaryColumn.push(displays.splice(0, 1));
    }
  }

  displayGroups.push(primaryColumn);
  displayGroups.push(secondaryColumn);

  return displayGroups;
};

const renderView = (displays, layout, emphasis, overrideDefaultStyling, trueColumn) => {
  if (displays === null || displays === undefined || !displays.length) {
    return undefined;
  }

  const displaysSlice = displays.slice(0, 8);

  /**
   * If there is only one display we don't want to return it as an item in a list.
   * The method renderSingleDisplayView here takes in the single display and returns it within simple divs instead.
   */
  if (displaysSlice.length === 1) { return renderSingleDisplayView(displaysSlice, overrideDefaultStyling); }

  if (layout === Layouts.TWO_COLUMNS) {
    if (!trueColumn) { return renderByRowView(displaysSlice, emphasis, overrideDefaultStyling); }

    const displayGroups = twoColumnGrouping(displaysSlice);

    return (
      <div>
        <ul className={cx('column-list-container')}>
          {displayGroups.map((group, index) => {
            const column = renderTwoColumns(group, index, emphasis, overrideDefaultStyling);
            return column;
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {renderColumn(displaysSlice, emphasis, overrideDefaultStyling)}
    </div>
  );
};

const isDisplaysTruncated = (displays) => {
  const displaysSlice = displays.slice(0, 8);

  for (let i = 0; i < displaysSlice.length; i += 1) {
    if (displaysSlice[i].props.isTruncated === true) {
      return true;
    }
  }

  return false;
};

const ItemView = ({
  layout,
  trueColumn,
  textEmphasis,
  overrideDefaultStyling,
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
  const isTrueTwoColumnView = layout === Layouts.TWO_COLUMNS && trueColumn;
  const isTruncatedDisplay = isTruncated || isDisplaysTruncated(displays);
  const viewClassNames = classNames(
    cx(
      'item-view',
      { 'is-truncated': isTruncated },
      { 'one-column': layout === Layouts.ONE_COLUMN },
      { 'two-columns': isTrueTwoColumnView && !isTruncatedDisplay },
      { 'truncated-two-columns': isTrueTwoColumnView && isTruncatedDisplay },
      { 'two-columns-by-row': layout === Layouts.TWO_COLUMNS && !trueColumn },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <div {...customProps} className={viewClassNames} ref={refCallback}>
      {renderAccessory(startAccessory, reserveStartAccessorySpace, accessoryAlignment, 'start')}
      <div className={cx('body')}>
        {renderView(displays, layout, textEmphasis, overrideDefaultStyling, trueColumn)}
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
