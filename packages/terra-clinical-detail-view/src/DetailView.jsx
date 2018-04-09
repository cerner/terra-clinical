import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './DetailView.scss';
import DetailList from './DetailList';
import DetailListItem from './DetailListItem';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The title to display
   */
  title: PropTypes.string,

  /**
   * Additional list of title strings to display
   */
  secondaryTitles: PropTypes.arrayOf(PropTypes.string),

  /**
   * List of subtitle strings
   */
  subtitles: PropTypes.arrayOf(PropTypes.string),

  /**
   * Display for minor supporting information like Status, Progress, or other additional detail
   */
  accessory: PropTypes.element,

  /**
   * Display for visualization data
   */
  graph: PropTypes.element,

  /**
   * Array of elements to display detail information
   */
  details: PropTypes.arrayOf(PropTypes.element),

  /**
   * Text to be displayed at the footer of the view
   */
  footer: PropTypes.string,

  /**
   * Indicates if sections should be divided
   */
  isDivided: PropTypes.bool,

  /*
   * Sets title sizes to be smaller than default sizes, good for longer titles like medication names.
   */
  isSmallerTitles: PropTypes.bool,
};

const defaultProps = {
  title: '',
  secondaryTitles: [],
  subtitles: [],
  accessory: null,
  details: [],
  isDivided: true,
  isSmallerTitles: false,
};

const DetailView = ({ title, secondaryTitles, subtitles, accessory, graph, details, footer, isDivided, isSmallerTitles, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  attributes.className = cx(['detail-view',
    attributes.className,
  ]);

  let divider = null;
  let dividedDetails = [];

  const titleElement = title ? (<h1 className={cx('primary-text')}>{title}</h1>) : null;
  const secondaryTitlesElements = secondaryTitles.map((secondarytitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className={cx('secondary-text')} key={i}>{secondarytitle}</div>
  ));
  const subtitleElements = subtitles.map((subtitle, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className={cx('subtitle')} key={i}>{subtitle}</div>
  ));
  const accessoryElement = accessory ? (<div className={cx('accessory')}>{accessory}</div>) : null;
  const footerElement = footer ? (<div className={cx('footer-text')}>{footer}</div>) : null;


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
    <div {...attributes} className={attributes.className}>
      <div className={cx('title', { 'title-smaller': isSmallerTitles })}>
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
