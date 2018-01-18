import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import IconNoData from './NoDataIcon';
import styles from './NoDataView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The title of the no data view.
   */
  heading: PropTypes.string,
  /**
   * The subtext description of the no data view.
   */
  subtext: PropTypes.string,
  /**
   * The element to be dispaly in the subtext content container.
   */
  subtextContent: PropTypes.element,
  /**
   * Whether or not the no data glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,
};

const defaultProps = {
  heading: '',
  subtext: '',
  subtextContent: undefined,
  isGlyphHidden: false,
};

const NoDataView = ({
    heading,
    subtext,
    subtextContent,
    isGlyphHidden,
    ...customProps
  }) => {
  let glyphSection;
  if (!isGlyphHidden) {
    const noDataIcon = <IconNoData />;
    glyphSection = <div className={cx('glyph')}>{noDataIcon}</div>;
  }

  let headingSection;
  if (heading) {
    headingSection = <p className={cx('heading')}>{heading}</p>;
  }

  let subtextSection;
  if (subtext) {
    subtextSection = <p className={cx('subtext')}>{subtext}</p>;
  }

  let subtextContentSection;
  if (subtextContent) {
    subtextContentSection = <div className={cx('subtext-content')}>{subtextContent}</div>;
  }

  return (
    <div {...customProps} className={cx('no-data-view', customProps.className)}>
      {glyphSection}
      {headingSection}
      {subtextSection}
      {subtextContentSection}
    </div>
  );
};

NoDataView.propTypes = propTypes;
NoDataView.defaultProps = defaultProps;

export default NoDataView;
