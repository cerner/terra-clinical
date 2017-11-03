import React from 'react';
import Base from 'terra-base';
import moment from 'moment';
import OnsetPicker from '../../../lib/OnsetPicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default class LessYear extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = () => new Date(2016, 8, 20);

    this.state = {
      precision: 'on/at',
      granularity: 'month',
      onsetDate: moment(),
    };

    this.handleGranularity = this.handleGranularity.bind(this);
    this.handlePrecision = this.handlePrecision.bind(this);
    this.handleOnset = this.handleOnset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submittedData: {
        precision: this.state.precision,
        granularity: this.state.granularity,
        onsetDate: this.state.onsetDate,
      },
    });
  }

  render() {
    return (
      <Base locale={locale}>
        <p>Controlled Onset picker with minimum required fields, supplied with a birthdate of 11 months old.</p>
        <p>Current date locked to September 20, 2016</p>
        <p>Testing age granularity selection restrictions.</p>

        <form onSubmit={this.handleSubmit}>
          <OnsetPicker
            birthdate={moment().subtract(11, 'months').format()}
            granularitySelectName="test-granularity"
            granularitySelectOnChange={this.handleGranularity}
            precisionSelectName="test-precision"
            precisionSelectOnChange={this.handlePrecision}
            onsetDateInputName="test-onsetDate"
            onsetDateInputOnChange={this.handleOnset}
          />
          <button type="submit">Submit</button>
        </form>
        <p data-test-json>{JSON.stringify(this.state.submittedData)}</p>
      </Base>
    );
  }
}
