import React from 'react';
import {
  isEmpty, checkIsStatusInError, checkTypeNumeric, ConditionalWrapper,
} from '../../../src/common/utils';

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
  it('returns true if the result isTypeNumeric is true', () => {
    expect(checkTypeNumeric({ isTypeNumeric: true })).toBe(true);
  });

  it('returns false if the result type does not match', () => {
    expect(checkTypeNumeric({ isTypeNumeric: false })).toBe(false);
    expect(checkTypeNumeric({ isTypeNumeric: 'NUMERIC' })).toBe(false);
    expect(checkTypeNumeric({ isTypeNumeric: '' })).toBe(false);
    expect(checkTypeNumeric({ })).toBe(false);
    expect(checkTypeNumeric({ isTypeNumeric: null })).toBe(false);
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
});
