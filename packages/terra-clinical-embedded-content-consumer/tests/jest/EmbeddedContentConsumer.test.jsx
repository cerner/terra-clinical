import React from 'react';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

// Snapshot Tests
it('should render the embedded content consumer container', () => {
  const embeddedContentConsumer = <EmbeddedContentConsumer src="https://www.google.com/" />;

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should validate the inputs', () => {
  const src = 'https://www.google.com/';
  const customEvents = [{ key: 'eventKey', handler: () => {} }];

  const embeddedContentConsumer = (<EmbeddedContentConsumer
    src={src}
    eventHandlers={customEvents}
  />);
  const wrapper = mount(embeddedContentConsumer);

  expect(wrapper.props().src).toBe(src);
  expect(wrapper.props().eventHandlers).toBe(customEvents);
});
