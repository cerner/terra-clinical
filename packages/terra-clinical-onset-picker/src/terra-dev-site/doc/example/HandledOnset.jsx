/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import OnsetPicker from 'terra-clinical-onset-picker/lib/OnsetPicker';

class HandledOnsetExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      precision: 'before',
      granularity: 'year',
      onsetDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),
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
      <form onSubmit={this.handleSubmit}>
        <OnsetPicker
          birthdate={moment().subtract(6, 'years').format()}
          granularity={this.state.granularity}
          granularitySelectOnChange={this.handleGranularity}
          id="doogs-supplied"
          precision={this.state.precision}
          precisionSet={[
            'unknown',
            'after',
            'before',
            'on/at',
          ]}
          precisionSelectOnChange={this.handlePrecision}
          onsetDate={this.state.onsetDate}
          onsetDateInputOnChange={this.handleOnset}
        />
        <button type="submit">Submit</button>
        {this.state.submittedData && (
          <div>
            <hr />
            <p>Form was submitted with</p>
            <p>{JSON.stringify(this.state.submittedData)}</p>
          </div>
        )}
      </form>
    );
  }
}

export default HandledOnsetExample;
