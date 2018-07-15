const matches = (element, selector) => {
  if (Element.prototype.msMatchesSelector) {
    return element.msMatchesSelector(selector);
  }

  return element.matches(selector);
};

const calculateScrollbarPosition = (scrollbarNode, containerNode, currentScrollbarPosition, delta) => {
  const newPosition = currentScrollbarPosition + delta;
  const scrollbarWidth = scrollbarNode.clientWidth;
  const containerWidth = containerNode.clientWidth;

  let finalPosition;
  if (newPosition < 0) {
    finalPosition = 0;
  } else if (newPosition > containerWidth - scrollbarWidth) {
    finalPosition = containerWidth - scrollbarWidth;
  } else {
    finalPosition = newPosition;
  }

  const scrollerPositionRatio = finalPosition / (containerWidth - scrollbarWidth);

  return {
    position: finalPosition,
    ratio: scrollerPositionRatio,
  };
};

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
  SHIFT: 16,
};

export default { matches, calculateScrollbarPosition, KEYCODES };
export { matches, calculateScrollbarPosition, KEYCODES };
