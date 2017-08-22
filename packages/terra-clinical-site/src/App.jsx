/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import ContentContainer from 'terra-content-container';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import List from 'terra-list';
import SlidePanel from 'terra-slide-panel';
import styles from './site.scss';

const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: window.innerWidth >= 768,
      locale,
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleResetScroll = this.handleResetScroll.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  handleToggleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleResetScroll() {
    const scrollParent = document.getElementById('site-content-section').parentNode;
    if (scrollParent && scrollParent.parentNode) {
      scrollParent.parentNode.scrollTop = 0;
    }
    if (window.innerWidith < 768) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const toggleContent = (
      <Button icon={<IconMenu />} onClick={this.handleToggleClick} />
    );

    const bidiContent = (
      <ButtonGroup
        className={styles.bidirectionality}
        dir="ltr"
        size="medium"
        isSelectable
        buttons={[
          <ButtonGroup.Button isSelected text="ltr" key="ltr" onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} />,
          <ButtonGroup.Button text="rtl" key="rtl" onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} />,
        ]}
      />
   );

    const localeContent = (
      <div className={styles.locale}>
        <label htmlFor="locale">Locale:</label>
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
   );

    const navHeader = (
      <div className={styles['navigation-header']}>
        <Link onClick={this.handleResetScroll} to="/">Home</Link>
      </div>
    );

    const panelContent = (
      <ContentContainer header={navHeader} className={styles.panel} fill>
        <List className={styles.navigation}>
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/action-header">Action Header</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/application">Application</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/detail-view">Detail View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/error-view">Error View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/header">Header</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/item-collection">Item Collection</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/item-display">Item Display</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/item-view">Item View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/label-value-view">Label Value View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/no-data-view">No Data View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/tests">Tests</Link>} />
          <List.Item content={<Link to="/demo">Demo</Link>} />
        </List>
      </ContentContainer>
    );

    const mainContent = (
      <Base id="site-content-section" className={styles.content} locale={this.state.locale}>
        {this.props.children}
      </Base>
    );

    const utilityContent = (
      <div className={styles.utility}>
        {localeContent}
        {bidiContent}
      </div>
    );

    const applicationHeader = (
      <div className={styles.header}>
        {toggleContent}
        {utilityContent}
      </div>
    );

    return (
      <ContentContainer header={applicationHeader} fill>
        <SlidePanel
          mainContent={mainContent}
          panelContent={panelContent}
          panelBehavior="squish"
          panelPosition="start"
          panelSize="small"
          isOpen={this.state.isOpen}
          fill
        />
      </ContentContainer>
    );
  }
}

App.propTypes = propTypes;

export default App;
