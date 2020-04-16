/**
 * Returns a boolean after checking supplied value is not undefined, null, or empty string.
 * @param {string} value to test
 * @returns {boolean} empty|true || not-empty|false
 */
const isEmpty = (str) => (!str || str.length === 0);

/**
 * Returns a boolean after check to see if a clinical result has included a resultData.status value that is equal to 'entered-in-error'
 * @param {object} Observation.propTypes.result
 * @returns {boolean} status is in-error|true || not in-error|false
 */
const checkIsStatusInError = (status) => {
  const resultStatus = (!isEmpty(status)) ? status.trim().toLowerCase() : undefined;
  return (resultStatus === 'entered-in-error');
};

/**
 * Returns a boolean after check to see if a clinical result is type numeric
 * @param {object} Observation.propTypes.result
 * @return {boolean} is numeric|true || not numeric|false
 */
const checkTypeNumeric = (resultData) => {
  const isNumeric = (!isEmpty(resultData.isNumeric)) ? (resultData.isNumeric === true) : false;
  return isNumeric;
};

/**
 * Private component to generate a new react.node with wrapper element around children content, dependant on a supplied condition.
 * Credit to Steufken, Olivier. “Conditionally Wrap an Element in React.” Medium, Hackages Blog, 30 Apr. 2019, blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2.
 * @param {boolean} result of condition to test --> wraps|true || does not wrap|false
 * @param {function} wrapper function with html to insert children inside of
 * @param {object} React.Node of children content
 * @returns {object} React.Node with either children-only or wrapped-children content
 */
const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

export {
  isEmpty,
  checkIsStatusInError,
  checkTypeNumeric,
  ConditionalWrapper,
};
