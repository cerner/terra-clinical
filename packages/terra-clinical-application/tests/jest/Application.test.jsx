import React from 'react';
import AppDelegate from 'terra-app-delegate';

import Application from '../../src/Application';

it('should render default component', () => {
  const application = (
    <Application>
      <div>TestApp</div>
    </Application>
  );

  const wrapper = shallow(application);
  expect(wrapper).toMatchSnapshot();
});

it('should render custom properties on component', () => {
  const application = (
    <Application className="custom-class" id="my-id">
      <div>TestApp</div>
    </Application>
  );

  const wrapper = shallow(application);
  expect(wrapper).toMatchSnapshot();
});

it('should render children with app prop', () => {
  const appDelegate = AppDelegate.create({});

  const application = (
    <Application app={appDelegate}>
      <div>TestApp</div>
    </Application>
  );

  const wrapper = shallow(application);
  expect(wrapper).toMatchSnapshot();
});

