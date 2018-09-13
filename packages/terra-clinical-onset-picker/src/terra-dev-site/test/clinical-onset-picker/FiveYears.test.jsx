import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

class FiveYears extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = () => new Date(2016, 8, 20);

    this.state = {
      precision: OnsetPicker.Opts.Precisions.BEFORE,
      granularity: OnsetPicker.Opts.Granularities.YEAR,
      onsetDate: moment('2013-02-14'),
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
    this.setState(prevState => ({
      submittedData: {
        precision: prevState.precision,
        granularity: prevState.granularity,
        onsetDate: prevState.onsetDate,
      },
    }));
  }

  render() {
    return (
      <div>
        <p>Onset picker with onChange handlers, birthdate of 2011-09-20 (5 years).</p>
        <p>Current date is locked to September 20, 2016</p>
        <p>Testing returns from handlers are correct, if they are the json object should get updated on changes.</p>
        <p>Also tests age caps for months and years.</p>
        <form onSubmit={this.handleSubmit}>
          <OnsetPicker
            birthdate={moment('2011-09-20').format()}
            granularity={this.state.granularity}
            granularitySelectName="test-granularity"
            granularitySelectOnChange={this.handleGranularity}
            precision={this.state.precision}
            precisionSelectName="test-precision"
            precisionSelectOnChange={this.handlePrecision}
            onsetDateInputName="test-onsetDate"
            onsetDateInputOnChange={this.handleOnset}
            onsetDate={moment(this.state.onsetDate).format()}
          />
          <button type="submit">Submit</button>
        </form>
        <p data-test-json>{JSON.stringify(this.state.submittedData)}</p>
      </div>
    );
  }
}

export default FiveYears;
