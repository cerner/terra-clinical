import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

export default class LessMonth extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = () => new Date(2016, 8, 20);

    this.state = {
      precision: 'on/at',
      granularity: 'month',
    };

    this.handleOnset = this.handleOnset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnset(onsetObject) {
    this.setState({
      precision: onsetObject.precision,
      granularity: onsetObject.granularity,
      onsetDate: onsetObject.onsetDate,
      ageUnit: onsetObject.ageUnit,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      submittedData: {
        precision: prevState.precision,
        granularity: prevState.granularity,
        onsetDate: prevState.onsetDate,
        ageUnit: prevState.ageUnit,
      },
    }));
  }

  render() {
    return (
      <div>
        <p>Onset picker with minimum required fields and onChange handlers, supplied with a birthdate of 3 weeks old.</p>
        <p>Current date locked to September 20, 2016</p>
        <p>Testing age granularity selection restrictions.</p>

        <form onSubmit={this.handleSubmit}>
          <OnsetPicker
            birthdate={moment().subtract(3, 'weeks').format('YYYY-MM-DD')}
            id="test"
            legend="Date of Birth"
            onsetOnChange={this.handleOnset}
          />
          <button type="submit">Submit</button>
        </form>
        <p data-test-json>{JSON.stringify(this.state.submittedData, null, 2)}</p>
      </div>
    );
  }
}
