import React from 'react';
import Observation from '../../../../src/common/observation/_Observation';
import DefaultResult from '../../../../src/terra-dev-site/test/clinical-result/TestResults';

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
    it('should render an Observation with interpretation critical', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="critical" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation critical-high', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="critical-high" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation critical-low', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="critical-low" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation positive', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="positive" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation abnormal', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="abnormal" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation high', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="high" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation low', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="low" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });

    it('should render an Observation with interpretation normal', () => {
      const nameHeaderCell = shallow(<Observation result={DefaultResult.result} interpretation="normal" />);
      expect(nameHeaderCell).toMatchSnapshot();
    });
  });
});
