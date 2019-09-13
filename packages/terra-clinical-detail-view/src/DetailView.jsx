import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailView.module.scss';
import DetailList from './DetailList';
import DetailListItem from './DetailListItem';

const cx = classNames.bind(styles);

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
    ...customProps
  } = props;
  const attributes = { ...customProps };
  attributes.className = cx(['detail-view',
    attributes.className,
  ]);

  const titleElement = title ? (<h1 className={cx('primary-text')}>{title}</h1>) : null;
  const secondaryTitlesElements = secondaryTitles.map((secondaryTitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className={cx('secondary-text')} key={`${i}`}>{secondaryTitle}</div>
  ));
  const subtitleElements = subtitles.map((subTitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className={cx('subtitle')} key={`${i}`}>{subTitle}</div>
  ));
  const accessoryElement = accessory ? (<div className={cx('accessory')}>{accessory}</div>) : null;
  const footerElement = footer ? (<div className={cx('footer-text')}>{footer}</div>) : null;

  let divider = null;
  let dividedDetails = [];

  if (isDivided) {
    divider = (<hr className={cx('divider')} />);

    for (let i = 0; i < details.length; i += 1) {
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
      {dividedDetails}
      {footerElement}
    </div>
  );
};

DetailView.propTypes = propTypes;
DetailView.defaultProps = defaultProps;
DetailView.DetailList = DetailList;
DetailView.DetailListItem = DetailListItem;

export default DetailView;
