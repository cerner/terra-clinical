import './breakpoints.scss';

let breakpoint;

/**
 * Translates SASS defined breakpoints into a javascript accessible object
 * @returns {Object} - Returns SASS defined breakpoints in pixels units as key value pairs
 */
const getBreakpoints = (desiredBreakpoint) => {
  if (breakpoint) {
    return breakpoint;
  }

  let data;
  const datasource = document.createElement('div');
  datasource.className = 'terraClinical-Breakpoints';

  document.body.appendChild(datasource);

  data = window.getComputedStyle(datasource, ':before').getPropertyValue('content');
  data = data.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');

  const breakpoints = JSON.parse(data);
  breakpoint = breakpoints[desiredBreakpoint];

  document.body.removeChild(datasource);

  return breakpoint;
};

export default getBreakpoints;
