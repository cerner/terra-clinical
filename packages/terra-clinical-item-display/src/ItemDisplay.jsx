import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ItemDisplay.scss';

const textStyles = [
  'secondary',
  'attention',
  'strikeThrough',
];

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * The visual styles to be applied to the display element.
   */
  textStyle: PropTypes.oneOf(textStyles),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: PropTypes.element,
};

const defaultProps = {
  text: '',
  textStyle: undefined,
  isTruncated: false,
  icon: undefined,
};

const ItemDisplay = ({
    text,
    textStyle,
    isTruncated,
    icon,
    ...customProps
  }) => {
  const displayClassNames = classNames([
    'terraClinical-ItemDisplay',
    customProps.className,
  ]);

  const textClassNames = classNames([
    'terraClinical-ItemDisplay-text',
    { 'terraClinical-ItemDisplay-text--isTruncated': isTruncated },
    { [`terraClinical-ItemDisplay-text--${textStyle}`]: textStyle },
  ]);

  let displayIcon;
  if (icon) {
    displayIcon = <div className="terraClinical-ItemDisplay-text--inlineIcon">{icon}</div>;
  }

  return (
    <div {...customProps} className={displayClassNames}>
      {displayIcon}
      <div className={textClassNames}>{text}</div>
    </div>
  );
};

ItemDisplay.propTypes = propTypes;
ItemDisplay.defaultProps = defaultProps;

export default ItemDisplay;
