import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Observation from '../../../../src/common/observation/_Observation';
import DefaultResult from '../../../../src/terra-dev-site/test/clinical-result/TestResults';

// Snapshot Tests
describe('Observation', () => {
  it('should render a default Observation', () => {
    const nameHeaderCell = shallowWithIntl(<Observation />).dive();
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with eventId', () => {
    const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} eventId={DefaultResult.eventId} />).dive();
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with result', () => {
    const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} />).dive();
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with hideUnit', () => {
    const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} hideUnit />).dive();
    expect(nameHeaderCell).toMatchSnapshot();
  });

  describe('- Interpretaion', () => {
    it('should render an Observation with interpretation critical', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="critical" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation critical-high', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="critical-high" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation critical-low', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="critical-low" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation positive', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="positive" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation abnormal', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="abnormal" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation high', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="high" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation low', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="low" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation normal', () => {
      const nameHeaderCell = shallowWithIntl(<Observation result={DefaultResult.result} interpretation="normal" />).dive();
      expect(nameHeaderCell).toMatchSnapshot();
    });
  });
});
