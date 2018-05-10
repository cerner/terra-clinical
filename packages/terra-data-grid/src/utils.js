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

export default isStickySupported;
export { isStickySupported };
