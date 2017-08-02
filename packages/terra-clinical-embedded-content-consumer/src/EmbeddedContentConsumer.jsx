import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'xfc';
import './EmbeddedContentConsumer.scss';

const propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: PropTypes.string.isRequired,
  /**
  * A list of event handlers keyed by the event name.
  */
  eventHandlers: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    handler: PropTypes.func,
  })),
};

class EmbeddedContentConsumer extends React.Component {

  componentDidMount() {
    Consumer.init();
    this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src);

    if (this.props.eventHandlers) {
      this.props.eventHandlers.forEach((event) => {
        this.xfcFrame.on(event.key, event.handler);
      });
    }
  }

  render() {
    return (
      <div
        className="terraClinical-EmbeddedContentConsumer"
        ref={(element) => { this.embeddedContentWrapper = element; }}
      />
    );
  }
}

EmbeddedContentConsumer.propTypes = propTypes;

export default EmbeddedContentConsumer;
