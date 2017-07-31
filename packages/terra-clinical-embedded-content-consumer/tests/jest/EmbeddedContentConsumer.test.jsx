import React from 'react';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

// Snapshot Tests
it('should render the terraClinical-EmbeddedContentConsumer wrapper', () => {
  const embeddedContentConsumer = <EmbeddedContentConsumer src="https://www.google.com/" />;

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should validate the inputs', () => {
  const src = 'https://www.google.com/';
  const eventHandlers = {};

  const embeddedContentConsumer = <EmbeddedContentConsumer src={src} eventHandlers={eventHandlers} />;
  const wrapper = mount(embeddedContentConsumer);

  expect(wrapper.props().src).toBe(src);
  expect(wrapper.props().eventHandlers).toBe(eventHandlers);
});
