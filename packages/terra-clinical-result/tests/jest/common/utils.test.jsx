import React from 'react';
import {
  isEmpty, checkIsStatusInError, checkTypeNumeric, ConditionalWrapper, sanitizeResult,
} from '../../../src/common/utils';
import {
  DefaultBloodPressureResult, NoDataResult, EnteredInErrorSysBPResult, ExtraDisplaysBloodPressureResult,
} from '../../../src/terra-dev-site/test/clinical-result/TestResults';

describe('isEmpty', () => {
  it('returns true when string is falsy', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('returns false when string is populated', () => {
    expect(isEmpty('populated string')).toBe(false);
  });
});

describe('checkIsStatusInError', () => {
  it('returns true when status is \'entered-in-error\'', () => {
    expect(checkIsStatusInError('entered-in-error')).toBe(true);
    expect(checkIsStatusInError('Entered-In-Error  ')).toBe(true);
    expect(checkIsStatusInError('  entered-IN-error')).toBe(true);
  });

  it('returns false when status is not \'entered-in-error\'', () => {
    expect(checkIsStatusInError('Fntered-in-error')).toBe(false);
    expect(checkIsStatusInError(undefined)).toBe(false);
    expect(checkIsStatusInError(null)).toBe(false);
    expect(checkIsStatusInError('')).toBe(false);
  });
});

describe('checkTypeNumeric', () => {
  it('returns true if the result isNumeric is true', () => {
    expect(checkTypeNumeric({ isNumeric: true })).toBe(true);
  });

  it('returns false if the result type does not match', () => {
    expect(checkTypeNumeric({ isNumeric: false })).toBe(false);
    expect(checkTypeNumeric({ isNumeric: 'NUMERIC' })).toBe(false);
    expect(checkTypeNumeric({ isNumeric: '' })).toBe(false);
    expect(checkTypeNumeric({ })).toBe(false);
    expect(checkTypeNumeric({ isNumeric: null })).toBe(false);
  });
});

describe('ConditionalWrapper', () => {
  const wrapper = (children) => <del>{children}</del>;

  it('returns the wrapped component if the condition matches', () => {
    const result = shallow(
      <ConditionalWrapper
        condition
        wrapper={wrapper}
      >
        <div>Inner Component</div>
      </ConditionalWrapper>,
    );
    expect(result).toMatchSnapshot();
  });

  it('returns the component by itself if the condition does not match', () => {
    const result = shallow(
      <ConditionalWrapper
        condition={false}
        wrapper={wrapper}
      >
        <div>Inner Component</div>
      </ConditionalWrapper>,
    );
    expect(result).toMatchSnapshot();
  });

  it('returns the component by itself if the condition is not present', () => {
    const result = shallow(
      <ConditionalWrapper
        wrapper={wrapper}
      >
        <div>Inner Component</div>
      </ConditionalWrapper>,
    );
    expect(result).toMatchSnapshot();
  });
});

describe('sanitizeResult', () => {
  it('returns an empty object if given no data', () => {
    expect(sanitizeResult()).toStrictEqual({});
  });

  it('returns noData parameter based on inputted resultNoData parameter', () => {
    expect(sanitizeResult(NoDataResult)).toMatchObject({noData: true});
    expect(sanitizeResult(DefaultBloodPressureResult.systolic)).toMatchObject({noData: false});
  });

  it('returns with a trimmed unit parameter', () => {
    expect(sanitizeResult(DefaultBloodPressureResult.systolic)).toMatchObject({cleanedUnit: 'mmhg'});
  });

  it('returns with a statusInError parameter', () => {
    expect(sanitizeResult(EnteredInErrorSysBPResult.systolic)).toMatchObject({statusInError: true});
  });

  it('returns with a trimmed conceptDisplay parameter', () => {
    expect(sanitizeResult(ExtraDisplaysBloodPressureResult.systolic)).toMatchObject({cleanedConceptDisplay: 'blood pressure systolic'});
  });

  it('returns with a trimmed datetimeDisplay parameter', () => {
    expect(sanitizeResult(ExtraDisplaysBloodPressureResult.systolic)).toMatchObject({cleanedDatetimeDisplay: 'nov 23, 2019 13:31:31'});
  });
});
