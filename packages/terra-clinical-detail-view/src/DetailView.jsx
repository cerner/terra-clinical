import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './DetailView.module.scss';
import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import { LevelContext } from './LevelContext';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The primary title to display.
   */
  title: PropTypes.string,

  /**
   * Additional list of title strings to display.
   */
  secondaryTitles: PropTypes.arrayOf(PropTypes.string),

  /**
   * List of subtitle strings.
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

  /**
   * Sets the heading level &lt;h1&gt;-&lt;h6&gt;. One of `1`, `2`, `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing `level` will not visually change the style of the content.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is required to be set in order for the header text to have proper accessibility.
   * _Note: if the prop is not set level 2 by default. this would result in incorrect context of header in application._
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
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

  let titleElement;
  let nextLevel = Number(level);
  let HeaderLevel = `h${nextLevel}`;
  let secondaryTitlesElements = [];

  if (title) {
    titleElement = <HeaderLevel className={cx('primary-text')}>{title}</HeaderLevel>;
    nextLevel += 1;
    HeaderLevel = `h${nextLevel}`;
  } else {
    titleElement = null;
  }

  if (secondaryTitles.length !== 0) {
    secondaryTitlesElements = secondaryTitles.map((secondaryTitle, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <HeaderLevel className={cx('secondary-text')} key={`${i}`}>{secondaryTitle}</HeaderLevel>
    ));
    nextLevel += 1;
  }

  const subtitleElements = subtitles.map((subTitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className={cx('subtitle')} key={`${i}`}>{subTitle}</div>
  ));
  const accessoryElement = accessory ? (<div className={cx('accessory')}>{accessory}</div>) : null;
  const footerElement = footer ? (<div className={cx('footer-text')}>{footer}</div>) : null;

  let divider = null;
  let dividedDetails = [];

  if (isDivided) {
    for (let i = 0; i < details.length; i += 1) {
      divider = (<hr key={`${i}`} className={cx('divider')} />);

      dividedDetails.push(details[i]);
      dividedDetails.push(divider);
    }
  } else {
    dividedDetails = details;
  }

  return (
    <div {...attributes}>
      <div className={cx('titles-section', { 'titles-smaller': isSmallerTitles })}>
        {titleElement}
        {secondaryTitlesElements}
        {subtitleElements}
        {accessoryElement}
      </div>
      {graph && divider}
      {graph}
      {divider}
      <LevelContext.Provider value={nextLevel}>
        {dividedDetails}
      </LevelContext.Provider>
      {footerElement}
    </div>
  );
};

DetailView.propTypes = propTypes;
DetailView.defaultProps = defaultProps;
DetailView.DetailList = DetailList;
DetailView.DetailListItem = DetailListItem;

export default DetailView;
