import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';

import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';
import baseMessages from 'terra-alert/translations/en-US.json';
import Alert from '../../src/Alert';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

describe('Alert with no props', () => {
  const defaultRender = (
    <IntlProvider locale={locale} messages={baseMessages}>
      <Alert />
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = mount(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('throws error on missing locale prop in Base', () => {
    try {
      shallow(<Alert />);
    } catch (e) {
      expect(e.message).toContain('add locale prop to Base component');
    }
  });
});

describe('Dismissible Alert that includes actions section', () => {
  const alertText = 'This is a test';
  const dismissibleRender = (
    <IntlProvider locale={locale} messages={baseMessages}>
      <Alert onDismiss={() => {}} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an alert component with a dismiss button', () => {
    const wrapper = mount(dismissibleRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type gap-checking with text content', () => {
  const alertText = 'This is a gap-checking alert.';
  const basicGapCheckingRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.GAP_CHECKING} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type gap-checking', () => {
    const wrapper = mount(basicGapCheckingRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type outside records with text content', () => {
  const alertText = 'This is an outside records alert.';
  const basicOutsideRecordsRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.OUTSIDE_RECORDS} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type outside records', () => {
    const wrapper = mount(basicOutsideRecordsRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type custom with custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const basicCustomRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.CUSTOM} title={alertCustomTitle} customIcon={<IconHelp />} customStatusColor="orange" >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type custom', () => {
    const wrapper = mount(basicCustomRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with custom title and HTML content', () => {
  const alertText = 'Four score and seven years ago . . .';
  const alertHTML = <span>{alertText}</span>;
  const alertCustomTitle = 'Gettysburg Address';
  const basicHTMLContentRender = (
    <IntlProvider locale={locale} messages={baseMessages}>
      <Alert type={Alert.Opts.Types.INFO} title={alertCustomTitle} >{alertHTML}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type info with custom title and HTML content', () => {
    const wrapper = mount(basicHTMLContentRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with an action button text content', () => {
  const alertText = 'This is a success alert.';
  const actionButtonRender = (
    <IntlProvider locale={locale} messages={baseMessages}>
      <Alert type={Alert.Opts.Types.SUCCESS} action={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type success with an action button', () => {
    const wrapper = mount(actionButtonRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissable Alert of type custom with action button, custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const customActionDismissRender = (
    <IntlProvider locale={locale} messages={baseMessages}>
      <Alert type={Alert.Opts.Types.CUSTOM} onDismiss={() => {}} title={alertCustomTitle} customIcon={<IconHelp />} customStatusColor="orange" action={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type custom with an action button', () => {
    const wrapper = mount(customActionDismissRender);
    expect(wrapper).toMatchSnapshot();
  });
});

