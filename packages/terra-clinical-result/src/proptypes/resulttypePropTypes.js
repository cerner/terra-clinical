import PropTypes from 'prop-types';

const resulttypePropOneOf = PropTypes.oneOf([
  'ALPHA',
  'MULTIALPHA',
  'FREETEXT',
  'NUMERIC',
  'BLOODPRESSURE',
  'CALCULATION',
  'DATE',
  'DATETIME',
  'TIME',
  'PROVIDER',
]);

export default resulttypePropOneOf;
export {
  resulttypePropOneOf,
};
