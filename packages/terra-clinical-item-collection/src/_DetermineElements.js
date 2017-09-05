const determineElements = (row) => {
  const { startAccessory, displays, comment, endAccessory } = row;

  const columns = {};
  columns.startAccessoryElement = startAccessory !== undefined;
  if (displays) {
    columns.displayElements = displays.length < 8 ? displays.length : 8;
  }
  columns.commentElement = comment !== undefined;
  columns.endAccessoryElement = endAccessory !== undefined;

  return columns;
};

export default determineElements;
