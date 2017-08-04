/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Grid from 'terra-grid';
import List from 'terra-list';
import styles from './site.scss';

const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locale };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  render() {
    return (
      <Base locale={this.state.locale}>
        <Grid>
          <Grid.Row>
            <Grid.Column small={2}>
              <div data-terra-clinical-site-directionality dir="ltr">
                <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
                <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
              </div>
              <div>
                <label htmlFor="locale"> Current locale: {this.state.locale} </label>
                <select value={this.state.locale} onChange={this.handleLocaleChange}>
                  <option value="en">en</option>
                  <option value="en-GB">en-GB</option>
                  <option value="en-US">en-US</option>
                  <option value="de">de</option>
                  <option value="es">es</option>
                  <option value="fr">fr</option>
                  <option value="pt">pt</option>
                  <option value="fi-FI">fi-FI</option>
                </select>
              </div>
              <List className={styles.navigation}>
                <List.Item content={<Link to="/">Home</Link>} />
                <List.Item content={<Link to="/site/action-header">Action Header</Link>} />
                <List.Item content={<Link to="/site/application">Application</Link>} />
                <List.Item content={<Link to="/site/detail-view">Detail View</Link>} />
                <List.Item content={<Link to="/site/error-view">Error View</Link>} />
                <List.Item content={<Link to="/site/header">Header</Link>} />
                <List.Item content={<Link to="/site/item-collection">Item Collection</Link>} />
                <List.Item content={<Link to="/site/item-display">Item Display</Link>} />
                <List.Item content={<Link to="/site/item-view">Item View</Link>} />
                <List.Item content={<Link to="/site/label-value-view">Label Value View</Link>} />
                <List.Item content={<Link to="/site/no-data-view">No Data View</Link>} />
                <List.Item content={<Link to="/tests">Tests</Link>} />
                <List.Item content={<Link to="/demo">Demo</Link>} />
              </List>
            </Grid.Column>
            <Grid.Column small={10}>
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Base>
    );
  }
}

App.propTypes = propTypes;

export default App;
