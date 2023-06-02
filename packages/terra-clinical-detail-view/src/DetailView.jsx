import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './DetailView.module.scss';
import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import { HeadingLevelContext } from './HeadingLevelContext';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Sets the text to display for the main heading.
   */
  title: PropTypes.string,

  /**
   * Sets the appropriate heading level of Title on the page.
   * The Level prop will also set the SecondaryTitles and other heading structures to the appropriate heading level to ensure a hierarchical content structure.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is critical to screen reader users that the Level prop be appropriately set to a value that best represents the placement of the main Clinical Detail View heading on the page.
   * Think about headings as creating the outline of a page. Each heading level should be set to represent that outline structure.
   * Screen reader users rely on the heading levels to understand the structure of information on the page
   */
  level: PropTypes.oneOf([2, 3, 4]),

  /**
   * Sets the text for black subheadings underneath the Title.
   */
  secondaryTitles: PropTypes.arrayOf(PropTypes.string),

  /**
   * Sets the text for the gray text underneath the Title and SecondaryTitles.
   */
  subtitles: PropTypes.arrayOf(PropTypes.string),

  /**
   * Display for minor supporting information like Status, Progress, or anything additional.
   */
  accessory: PropTypes.element,

  /**
   * Display for visualization of data.
   */
  graph: PropTypes.element,

  /**
   * Array of elements to display information in the body of the detail view.
   */
  details: PropTypes.arrayOf(PropTypes.element),

  /**
   * Text to be displayed at the footer of the detail view.
   */
  footer: PropTypes.string,

  /**
   * Indicates if sections should be divided. Is applied by default.
   */
  isDivided: PropTypes.bool,

  /**
   * Sets title sizes to be smaller than default sizes, good for longer titles like medication names.
   */
  isSmallerTitles: PropTypes.bool,
};

const defaultProps = {
  title: undefined,
  secondaryTitles: [],
  subtitles: [],
  graph: undefined,
  accessory: undefined,
  details: [],
  footer: undefined,
  isDivided: true,
  isSmallerTitles: false,
  level: 2,
};

const DetailView = (props) => {
  const {
    title,
    secondaryTitles,
    subtitles,
    accessory,
    graph,
    details,
    footer,
    isDivided,
    isSmallerTitles,
    level,
    ...customProps
  } = props;
  const theme = React.useContext(ThemeContext);
  const attributes = { ...customProps };
  attributes.className = classNames(
    cx(
      'detail-view',
      theme.className,
    ),
    attributes.className,
  );

  const createHeaderLevel = (headerLevel) => `h${headerLevel}`;

  let titleElement = null;
  let secondaryTitlesElements = [];
  let nextLevel = level;
  let HeaderLevel = createHeaderLevel(nextLevel);

  if (title) {
    titleElement = <HeaderLevel className={cx('primary-text')}>{title}</HeaderLevel>;
    nextLevel += 1;
  }

  if (secondaryTitles.length !== 0) {
    HeaderLevel = createHeaderLevel(nextLevel);
    secondaryTitlesElements = secondaryTitles.map((secondaryTitle, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <HeaderLevel className={cx('secondary-text')} key={`${i}`}>{secondaryTitle}</HeaderLevel>
    ));
    nextLevel += 1;
  }
  const subtitleElements = subtitles.map((subTitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <p className={cx('subtitle')} key={`${i}`}>{subTitle}</p>
  ));
  const accessoryElement = accessory ? (<div className={cx('accessory')}>{accessory}</div>) : null;
  const footerElement = footer ? (<p role="note" className={cx('footer-text')}>{footer}</p>) : null;
  const graphElement = graph ? (<figure className={cx('graph-figure')}>{graph}</figure>) : null;

  let divider = null;
  let dividedDetails = [];

  if (isDivided) {
    for (let i = 0; i < details.length; i += 1) {
      divider = (<hr key={`${i}`} className={cx('divider')} />);
      dividedDetails.push(details[i]);
      dividedDetails.push(divider);
    }
    divider = (<hr className={cx('divider')} />);
  } else {
    dividedDetails = details;
  }

  return (
    <section {...attributes}>
      <div className={cx('titles-section', { 'titles-smaller': isSmallerTitles })}>
        {titleElement}
        {secondaryTitlesElements}
        {subtitleElements}
        {accessoryElement}
      </div>
      {graphElement && divider}
      {graphElement}
      {divider}
      <HeadingLevelContext.Provider value={nextLevel}>
        {dividedDetails}
      </HeadingLevelContext.Provider>
      {footerElement}
    </section>
  );
};

DetailView.propTypes = propTypes;
DetailView.defaultProps = defaultProps;
DetailView.DetailList = DetailList;
DetailView.DetailListItem = DetailListItem;

export default DetailView;
