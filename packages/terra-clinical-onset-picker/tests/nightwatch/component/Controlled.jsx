import React from 'react';
import Base from 'terra-base';
import moment from 'moment';
import OnsetPicker from '../../../lib/OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class Controlled extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = function () {
      return new Date(2016, 8, 20);
    };

    this.state = {
      precision: 'BEFORE',
      granularity: 'YEAR',
      onsetDate: '2013-02-14',
    };

    this.handleGranularity = this.handleGranularity.bind(this);
    this.handlePrecision = this.handlePrecision.bind(this);
    this.handleOnset = this.handleOnset.bind(this);
  }

  handleGranularity(granularity) {
    this.setState({ granularity });
  }

  handlePrecision(precision) {
    this.setState({ precision });
  }

  handleOnset(onsetDate) {
    this.setState({ onsetDate });
  }

  render() {
    return (
      <Base locale={locale}>
        <p>Onset picker with onChange handlers, birthdate of 2011-09-20.</p>
        <p>Current date is locked to September 20, 2016</p>
        <p>Testing returns from handlers are correct, if they are the json object should get updated on changes.</p>
        <OnsetPicker
          birthdate="2011-09-20"
          granularitySelectName="test-granularity"
          granularitySelectOnChange={this.handleGranularity}
          precisionSelectName="test-precision"
          precisionSelectOnChange={this.handlePrecision}
          onsetDateInputName="test-onsetDate"
          onsetDateInputOnChange={this.handleOnset}
          onsetDate={this.state.onsetDate}
        />
        <p data-test-json>{JSON.stringify(this.state)}</p>
      </Base>
    );
  }
}

export default Controlled;
