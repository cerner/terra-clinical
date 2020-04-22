const DefaultResultWithNoEventId = {
  id: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

const DefaultResult = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

const SingleResultValue = {
  ...DefaultResult,
  conceptDisplay: 'Temperature Oral',
  datetimeDisplay: 'Nov 23, 2019 13:31:31',
};

const DecoratedResult = {
  ...DefaultResult,
  isModified: true,
  hasComment: true,
  isUnverified: false,
};

const UnverifiedResult = {
  ...DefaultResult,
  isModified: false,
  hasComment: false,
  isUnverified: true,
};

const BadData = {
  eventId: '111',
  clinicalresult: {
    value: '354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856',
    unit: 'mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg',
  },
  interpretation: 'critical',
};

const EnteredInErrorResult = {
  ...DefaultResult,
  interpretation: 'critical',
  status: 'entered-in-error',
};

const DefaultSystolicResult = {
  eventId: '111.1',
  result: {
    value: '180',
    unit: 'mmHg',
  },
};
const DefaultDiastolicResult = {
  eventId: '111.2',
  result: {
    value: '80',
    unit: 'mmHg',
  },
};

const DefaultBloodPressureSystolicResultWithNoId = {
  systolic: {
    ...DefaultSystolicResult,
  },
};

const DefaultBloodPressureDiastolicResultWithNoId = {
  diastolic: {
    ...DefaultDiastolicResult,
  },
};

const DefaultBloodPressureResult = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
  },
  diastolic: {
    ...DefaultDiastolicResult,
  },
};

const DecoratedBloodPressureResult1 = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    isModified: true,
    hasComment: true,
    isUnverified: false,
  },
  diastolic: {
    ...DefaultDiastolicResult,
    isModified: false,
    hasComment: false,
    isUnverified: false,
  },
};

const DecoratedBloodPressureResult2 = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    isModified: false,
    hasComment: false,
    isUnverified: false,
  },
  diastolic: {
    ...DefaultDiastolicResult,
    isModified: true,
    hasComment: true,
    isUnverified: false,
  },
};

const UnverifiedBloodPressureResult1 = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    isModified: false,
    hasComment: false,
    isUnverified: true,
  },
  diastolic: {
    ...DefaultDiastolicResult,
    isModified: false,
    hasComment: false,
    isUnverified: false,
  },
};

const UnverifiedBloodPressureResult2 = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    isModified: false,
    hasComment: false,
    isUnverified: false,
  },
  diastolic: {
    ...DefaultDiastolicResult,
    isModified: false,
    hasComment: false,
    isUnverified: true,
  },
};

const ExtraDisplaysBloodPressureResult = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    conceptDisplay: 'Blood Pressure Systolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    conceptDisplay: 'Blood Pressure Diastolic',
    datetimeDisplay: 'Nov 23, 2019 13:31:44',
  },
};

const MixedBPResultValue = {
  id: '111',
  systolic: {
    ...DefaultSystolicResult,
    interpretation: 'critical',
  },
  diastolic: {
    ...DefaultDiastolicResult,
    interpretation: 'low',
  },
};

const NoDataResult = {
  eventId: '',
  result: {
    value: null,
    unit: '',
  },
  interpretation: 'normal',
  isModified: false,
  hasComment: false,
  isUnverified: false,
  resultNoData: true,
};

export default DefaultResult;
export {
  SingleResultValue,
  DecoratedResult,
  UnverifiedResult,
  BadData,
  EnteredInErrorResult,
  DefaultSystolicResult,
  DefaultDiastolicResult,
  DefaultResultWithNoEventId,
  DefaultBloodPressureResult,
  DecoratedBloodPressureResult1,
  DecoratedBloodPressureResult2,
  UnverifiedBloodPressureResult1,
  UnverifiedBloodPressureResult2,
  ExtraDisplaysBloodPressureResult,
  MixedBPResultValue,
  DefaultBloodPressureSystolicResultWithNoId,
  DefaultBloodPressureDiastolicResultWithNoId,
  NoDataResult,
  EnteredInErrorSysBPResult,
  EnteredInErrorDiaBPResult,
};
