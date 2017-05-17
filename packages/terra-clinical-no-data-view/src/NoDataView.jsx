import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import IconNoData from './NoDataIcon';
import './NoDataView.scss';

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
  const noDataClassNames = classNames([
    'terraClinical-NoDataView',
    customProps.className,
  ]);

  let glyphSection;
  if (!isGlyphHidden) {
    const noDataIcon = <IconNoData />;
    glyphSection = <div className="terraClinical-NoDataView-glyph">{noDataIcon}</div>;
  }

  let headingSection;
  if (heading) {
    headingSection = <p className="terraClinical-NoDataView-heading">{heading}</p>;
  }

  let subtextSection;
  if (subtext) {
    subtextSection = <p className="terraClinical-NoDataView-subtext">{subtext}</p>;
  }

  let subtextContentSection;
  if (subtextContent) {
    subtextContentSection = <div className="terraClinical-NoDataView-subtextContent">{subtextContent}</div>;
  }

  return (
    <div {...customProps} className={noDataClassNames}>
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
