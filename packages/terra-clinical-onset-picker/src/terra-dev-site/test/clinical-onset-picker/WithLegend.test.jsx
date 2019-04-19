import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

export default class WithLegend extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = () => new Date(2016, 8, 20);

    this.state = {
      isLegendHidden: false,
      buttonText: 'hide legend',
    };

    this.toggleLegend = this.toggleLegend.bind(this);
  }

  toggleLegend() {
    if (this.state.isLegendHidden) {
      this.setState({ isLegendHidden: false, buttonText: 'hide legend' });
    } else {
      this.setState({ isLegendHidden: true, buttonText: 'show legend' });
    }
  }

  render() {
    return (
      <div>
        <p>Onset picker with minimum required fields and onChange handlers, supplied with a birthdate of 3 weeks old.</p>
        <p>Current date locked to September 20, 2016</p>
        <p>Testing age granularity selection restrictions.</p>
        <OnsetPicker
          birthdate={moment().subtract(3, 'weeks').format('YYYY-MM-DD')}
          id="test"
          legend="Date of Birth"
          isLegendHidden={this.state.isLegendHidden}
        />
        <div>
          <button type="button" onClick={this.toggleLegend}>{this.state.buttonText}</button>
        </div>
      </div>
    );
  }
}
