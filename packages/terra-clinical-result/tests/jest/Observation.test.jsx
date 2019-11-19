import React from 'react';
import Observation from '../../src/common/_Observation';
import DefaultResult from '../../src/terra-dev-site/test/clinical-result/TestResults';

// Snapshot Tests
describe('Observation', () => {
  it('should render a default Observation', () => {
    const nameHeaderCell = shallow(<Observation />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with eventId', () => {
    const nameHeaderCell = shallow(<Observation eventId={DefaultResult.eventId} />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with result', () => {
    const nameHeaderCell = shallow(<Observation result={DefaultResult.result} />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with hideUnit', () => {
    const nameHeaderCell = shallow(<Observation hideUnit />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  describe('- Interpretaion', () => {
    it('should render an Observation with interpretation CRITICAL', () => {
      const nameHeaderCell = shallow(<Observation interpretation="CRITICAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation EXTREMEHIGH', () => {
      const nameHeaderCell = shallow(<Observation interpretation="EXTREMEHIGH" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation EXTREMELOW', () => {
      const nameHeaderCell = shallow(<Observation interpretation="EXTREMELOW" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation PANICHIGH', () => {
      const nameHeaderCell = shallow(<Observation interpretation="PANICHIGH" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation PANICLOW', () => {
      const nameHeaderCell = shallow(<Observation interpretation="PANICLOW" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation VABNORMAL', () => {
      const nameHeaderCell = shallow(<Observation interpretation="VABNORMAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation POSITIVE', () => {
      const nameHeaderCell = shallow(<Observation interpretation="POSITIVE" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation ABNORMAL', () => {
      const nameHeaderCell = shallow(<Observation interpretation="ABNORMAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation HIGH', () => {
      const nameHeaderCell = shallow(<Observation interpretation="HIGH" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation LOW', () => {
      const nameHeaderCell = shallow(<Observation interpretation="LOW" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation NORMAL', () => {
      const nameHeaderCell = shallow(<Observation interpretation="NORMAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation NEUTRAL', () => {
      const nameHeaderCell = shallow(<Observation interpretation="NEUTRAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });
  });
});
