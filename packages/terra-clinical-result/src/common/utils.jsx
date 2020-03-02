/**
 * Returns a boolean after checking supplied value is not undefined, null, or empty string.
 * -param       string    value to test
 * -return      boolean   empty|true || not-empty|false
 */
const isEmpty = (str) => (!str || str.length === 0);

/**
 * Returns a boolean after check to see if a clinical result has included a resultData.status value that is equal to 'entered-in-error'
 * -param       object    Observation.propTypes.result
 * -return      boolean   status is in-error|true || not in-error|false
 */
const checkIsStatusInError = (resultData) => {
  const resultStatus = (!isEmpty(resultData.status)) ? resultData.status.trim().toLowerCase() : undefined;
  return (resultStatus === 'entered-in-error');
};

/**
 * Returns a boolean after check to see if a clinical result has included a resultData.type value that is equal to the type value provided
 * -param       object    Observation.propTypes.result
 * -param       string    type value to match
 * -return      boolean   type match|true || no match|false
 */
const checkIsOfType = (resultData, matchType) => {
  const resultType = (!isEmpty(resultData.type)) ? resultData.type.trim().toUpperCase() : undefined;
  return (resultType === matchType);
};

/**
 * Private component to generate a new react.node with wrapper element around children content, dependant on a supplied condition.
 * Credit to Steufken, Olivier. “Conditionally Wrap an Element in React.” Medium, Hackages Blog, 30 Apr. 2019, blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2.
 * -param       boolean    result of condition to test --> wraps|true || does not wrap|false
 * -param       function   wrapper function with html to insert children inside of
 * -param       object     React.Node of children content
 * -return      object     React.Node with either children-only or wrapped-children content
 */
const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

const ClinicalResultUtils = {
  isEmpty,
  checkIsStatusInError,
  checkIsOfType,
  ConditionalWrapper,
};

export default ClinicalResultUtils;
export {
  isEmpty,
  checkIsStatusInError,
  checkIsOfType,
  ConditionalWrapper,
};
