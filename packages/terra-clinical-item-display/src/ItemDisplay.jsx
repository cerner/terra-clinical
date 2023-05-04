import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import styles from './ItemDisplay.module.scss';

const cx = classNamesBind.bind(styles);

const TextStyles = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ATTENTION: 'attention',
  STRIKETHROUGH: 'strikeThrough',
  STRONG: 'strong',
};

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * The visual style to be applied to the display element.
   * One of `'primary'`, `'secondary'`, `'strong'`, `'attention'`, or `'strikeThrough'`.
   */
  textStyle: PropTypes.oneOf(Object.values(TextStyles)),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * Whether or not the display is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: PropTypes.element,
  /**
   * The position of the icon to be displayed next to the text,
   * noticeable when the text display wraps multiple line.
   * One of `'center'`, `'top'`, `'inline'`.
   */
  iconAlignment: PropTypes.oneOf(['center', 'top', 'inline']),
  /**
   * The meaning of the text based on styling, used by screen readers.
   * Changing `meaning` will not visually change the style of the content.
   */
  meaning: PropTypes.string,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  text: '',
  textStyle: 'primary',
  isTruncated: false,
  isDisabled: false,
  icon: undefined,
  iconAlignment: 'center',
};

const ItemDisplay = ({
  text,
  textStyle,
  isTruncated,
  isDisabled,
  icon,
  iconAlignment,
  meaning,
  intl,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const componentClassNames = classNames(
    cx(
      'item-display',
      { 'is-disabled': isDisabled },
      { [`icon-${iconAlignment}`]: icon },
      theme.className,
    ),
    customProps.className,
  );
  const textClassNames = cx([
    'text',
    { 'is-truncated': isTruncated },
    { [`${textStyle}`]: textStyle === TextStyles.SECONDARY },
    { [`${textStyle}`]: textStyle === TextStyles.ATTENTION },
    { [`${textStyle}`]: textStyle === TextStyles.STRONG },
    { 'strike-through': textStyle === TextStyles.STRIKETHROUGH },
  ]);

  let displayIcon;
  if (icon) {
    displayIcon = <div className={cx('icon')}>{icon}</div>;
  }

  let ariaLabel;
  if (meaning) {
    ariaLabel = `${meaning}, ${text}, ${intl.formatMessage({ id: 'Terra.item-display.meaningEnd' }, { meaning })}`;
  } else if (textStyle === TextStyles.STRIKETHROUGH) {
    ariaLabel = `${intl.formatMessage({ id: 'Terra.item-display.meaningStrikethrough' })}, ${text}, ${intl.formatMessage({ id: 'Terra.item-display.meaningStrikethroughEnd' })}`;
  }

  return (
    <div {...customProps} className={componentClassNames} aria-disabled={isDisabled}>
      {displayIcon}
      {ariaLabel ? (
        <span aria-label={ariaLabel}>
          <div data-terra-clinical-item-display-text className={textClassNames} aria-hidden="true">{text}</div>
        </span>
      ) : (
        <div data-terra-clinical-item-display-text className={textClassNames}>{text}</div>
      )}
    </div>
  );
};

ItemDisplay.propTypes = propTypes;
ItemDisplay.defaultProps = defaultProps;

export default injectIntl(ItemDisplay);
export { TextStyles };
