import React from 'react';
import Observation from '../../../../src/common/observation/_Observation';
import DefaultResult from '../../../../src/terra-dev-site/test/TestResults';

// Snapshot Tests
describe('Observation', () => {
  it('should render a default Observation', () => {
    const nameHeaderCell = shallow(<Observation />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with eventId', () => {
    const nameHeaderCell = shallow(<Observation result={DefaultResult.result} eventId={DefaultResult.eventId} />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with result', () => {
    const nameHeaderCell = shallow(<Observation result={DefaultResult.result} />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  it('should render an Observation with hideUnit', () => {
    const nameHeaderCell = shallow(<Observation result={DefaultResult.result} hideUnit />);
    expect(nameHeaderCell).toMatchSnapshot();
  });

  describe('- Interpretaion', () => {
    it('should render an Observation with interpretation CRITICAL', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="CRITICAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation EXTREMEHIGH', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="EXTREMEHIGH" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation EXTREMELOW', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="EXTREMELOW" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation PANICHIGH', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="PANICHIGH" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation PANICLOW', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="PANICLOW" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation VABNORMAL', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="VABNORMAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation POSITIVE', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="POSITIVE" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation ABNORMAL', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="ABNORMAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation HIGH', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="HIGH" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation LOW', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="LOW" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation NORMAL', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="NORMAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation NEUTRAL', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="NEUTRAL" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });
  });
});
