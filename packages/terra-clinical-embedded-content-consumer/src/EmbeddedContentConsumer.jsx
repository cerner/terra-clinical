import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'xfc';
import './EmbeddedContentConsumer.scss';

const propTypes = {
  /**
   * The source URL of the content to load.
   **/
  src: PropTypes.string.isRequired,
  /**
   * The authorization secret to be used if the embedded app does not know which domain to trust.
   **/
  secret: PropTypes.string,
  /**
   * An object containing event handlers keyed by the event name.
   * (e.g. {'eventA': function() {}, 'eventB': function() {}})
   **/
  eventHandlers: PropTypes.object,
};

const defaultProps = {
  secret: undefined,
  eventHandlers: {},
};

class EmbeddedContentConsumer extends React.Component {

  componentDidMount() {
    if (this.embeddedContentWrapper) {
      Consumer.init();
      this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src, { secret: this.props.secret });

      Object.keys(this.props.eventHandlers).forEach((event) => {
        this.xfcFrame.on(event, this.props.eventHandlers[event]);
      });
    }
  }

  render() {
    return (
      <div
        className="terraClinical-EmbeddedContentConsumer"
        ref={(element) => { this.embeddedContentWrapper = element; }}
      />);
  }
}

EmbeddedContentConsumer.propTypes = propTypes;
EmbeddedContentConsumer.defaultProps = defaultProps;

export default EmbeddedContentConsumer;
