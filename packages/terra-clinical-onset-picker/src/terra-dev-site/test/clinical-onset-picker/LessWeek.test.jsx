import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

class LessWeek extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = () => new Date(2016, 8, 20);

    this.state = {
      precision: 'before',
      granularity: 'year',
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
    const birthdate = moment().subtract(6, 'days');
    return (
      <div>
        <p>Onset picker with age to be less than a week.</p>
        <p>{`Current date locked to ${moment().format('MM-DD-YYYY')}`}</p>
        <p>{`Birthdate locked to ${birthdate.format('MM-DD-YYYY')}`}</p>
        <p>Testing age granularity to not be populated for age less than a week.</p>
        <form onSubmit={this.handleSubmit}>
          <OnsetPicker
            birthdate={birthdate.format('YYYY-MM-DD')}
            id="test"
            legend="Date of Birth"
            onsetOnChange={this.handleOnset}
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
      </div>
    );
  }
}

export default LessWeek;
