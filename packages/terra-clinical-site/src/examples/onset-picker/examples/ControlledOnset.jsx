/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import OnsetPicker from 'terra-clinical-onset-picker/src/OnsetPicker';

class ControlledOnsetExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        granularity: 'YEAR',
        precision: 'BEFORE',
        onsetDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),
      },
    };

    this.handleGranularity = this.handleGranularity.bind(this);
    this.handlePrecision = this.handlePrecision.bind(this);
    this.handleOnset = this.handleOnset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGranularity(e, granularity) {
    const formData = Object.assign({}, this.state.formData);
    formData.granularity = granularity;
    this.setState({ formData });
  }

  handlePrecision(e, precision) {
    const formData = Object.assign({}, this.state.formData);
    formData.precision = precision;
    this.setState({ formData });
  }

  handleOnset(e, onsetDate) {
    const formData = Object.assign({}, this.state.formData);
    formData.onsetDate = onsetDate;
    this.setState({ formData });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submittedData: Object.assign({}, this.state.formData),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <OnsetPicker
          birthdate={moment().subtract(6, 'years').format()}
          granularity="YEAR"
          granularitySelectName="doogs-supplied-granularity"
          granularitySelectOnChange={this.handleGranularity}
          precision="BEFORE"
          precisionSelectName="doogs-supplied-precision"
          precisionSelectOnChange={this.handlePrecision}
          onsetDate={moment().subtract(2, 'years').format()}
          onsetDateInputName="doogs-supplied-onsetDate"
          onsetDateInputOnChange={this.handleOnset}
        />
        <button type="submit">Submit</button>
        {this.state.submittedData && <div><hr /><p>Form was submitted with {JSON.stringify(this.state.submittedData)}</p></div>}
      </form>
    );
  }
}

export default ControlledOnsetExample;
