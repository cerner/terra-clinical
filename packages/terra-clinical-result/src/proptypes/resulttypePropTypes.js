import PropTypes from 'prop-types';

const resultTypePropType = PropTypes.oneOf([
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

export default resultTypePropType;
