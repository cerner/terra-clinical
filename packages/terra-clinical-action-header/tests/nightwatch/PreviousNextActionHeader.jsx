import React from 'react';
import ActionHeader from '../../src/ActionHeader';

class PreviousNextHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en-US',
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  render() {
    return (
      <div>
        <ActionHeader
          title="Action Header"
          onPrevious={() => 1}
          onNext={() => 1}
          locale={this.state.locale}
        />
        <br />
        <select value={this.state.locale} onChange={this.handleLocaleChange}>
          <option value="en-GB">en-GB</option>
          <option value="en-US">en-US</option>
          <option value="de">de</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
          <option value="pt">pt</option>
        </select>
      </div>
    );
  }
}

export default PreviousNextHeader;
