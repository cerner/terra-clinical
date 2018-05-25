const isStickySupported = () => {
  if (!window.getComputedStyle) {
    return false;
  }
  const testNode = document.createElement('div');

  return ['', '-webkit-', '-moz-', '-ms-'].some((prefix) => {
    try {
      testNode.style.position = `${prefix}sticky`;
    } catch (e) {
        // Exception can be thrown if position value is not supported.
    }

    return testNode.style.position !== '';
  });
};

const matches = (element, selector) => {
  if (Element.prototype.msMatchesSelector) {
    return element.msMatchesSelector(selector);
  }

  return element.matches(selector);
};

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  TAB: 9,
  SHIFT: 16,
};

export default isStickySupported;
export { isStickySupported, matches, KEYCODES };
