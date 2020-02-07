import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

class Birthday31st extends React.Component {
  constructor(props) {
    super(props);

    moment.now = () => new Date();

    this.state = {
      precision: 'before',
      granularity: 'age',
      onsetDate: moment('2001-05-01').format('YYYY-MM-DD'),
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
        <p>Birth Date: 2001-03-31 (March 31, 2001)</p>
        <p>Default Onset Date: 2001-05-01 (May 01, 2001)</p>
        <p>Default Onset Date MATCHES with calculated onset date using defualt parameters</p>
        <form onSubmit={this.handleSubmit}>
          <OnsetPicker
            birthdate={moment('2001-03-31').format('YYYY-MM-DD')}
            granularity={this.state.granularity}
            id="test"
            legend="Date of Onset"
            precision={this.state.precision}
            onsetDate={this.state.onsetDate}
            onsetOnChange={this.handleOnset}
          />
          <button type="submit">Submit</button>
        </form>
        <p data-test-json>{JSON.stringify(this.state.submittedData, null, 2)}</p>
      </div>
    );
  }
}

export default Birthday31st;
