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

export default { matches, KEYCODES };
export { matches, KEYCODES };
