/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
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
      dir: 'ltr',
      locale,
    };
    this.handleBidiChange = this.handleBidiChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleResetScroll = this.handleResetScroll.bind(this);
  }

  handleBidiChange(e) {
    document.getElementsByTagName('html')[0].setAttribute('dir', e.currentTarget.id);
    this.setState({ dir: e.currentTarget.id });
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.currentTarget.id });
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
      <CollapsibleMenuView.Item icon={<IconMenu />} isIconOnly key="toggle-content" onClick={this.handleToggleClick} />
    );

    const bidiContent = (
      <CollapsibleMenuView.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium" onChange={this.handleBidiChange}>
        <CollapsibleMenuView.Item id="ltr" text="ltr" key="ltr" isSelected={this.state.dir === 'ltr'} />
        <CollapsibleMenuView.Item id="rtl" text="rtl" key="rtl" isSelected={this.state.dir === 'rtl'} />
      </CollapsibleMenuView.ItemGroup>
   );

    const localeContent = (
      <CollapsibleMenuView.Item
        text={`Locale: ${this.state.locale}`}
        key="locale"
        menuWidth="160"
        shouldCloseOnClick={false}
        subMenuItems={[
          <CollapsibleMenuView.ItemGroup isSelectable key="local-options" onChange={this.handleLocaleChange}>
            <CollapsibleMenuView.Item id="en" text="en" key="en" isSelected={this.state.locale === 'en'} />
            <CollapsibleMenuView.Item id="en-GB" text="en-GB" key="en-GB" isSelected={this.state.locale === 'en-GB'} />
            <CollapsibleMenuView.Item id="en-US" text="en-US" key="en-US" isSelected={this.state.locale === 'en-US'} />
            <CollapsibleMenuView.Item id="de" text="de" key="de" isSelected={this.state.locale === 'de'} />
            <CollapsibleMenuView.Item id="es" text="es" key="es" isSelected={this.state.locale === 'es'} />
            <CollapsibleMenuView.Item id="fr" text="fr" key="fr" isSelected={this.state.locale === 'fr'} />
            <CollapsibleMenuView.Item id="pt" text="pt" key="pt" isSelected={this.state.locale === 'pt'} />
            <CollapsibleMenuView.Item id="fi-FI" text="fi-FI" key="fi-FI" isSelected={this.state.locale === 'fi-FI'} />
          </CollapsibleMenuView.ItemGroup>,
        ]}
      />
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
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/onset-picker">Onset Picker</Link>} />
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

    const applicationHeader = (
      <CollapsibleMenuView className={styles.header}>
        {toggleContent}
        {localeContent}
        <CollapsibleMenuView.Divider />
        {bidiContent}
      </CollapsibleMenuView>
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
