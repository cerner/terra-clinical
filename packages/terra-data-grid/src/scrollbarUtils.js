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

export default { calculateScrollbarPosition };
export { calculateScrollbarPosition };
