import React from 'react';
import { Provider } from 'xfc';

function CustomEventProvider() {
  Provider.init({
    acls: ['http://localhost:8080'],
  });

  setTimeout(() => {
    Provider.trigger('EventA');
  }, 1000);

  setTimeout(() => {
    Provider.trigger('EventB');
  }, 2000);

  return (
    <div>
      <title>Custom Event Provider</title>
      <meta charSet="utf-8" />
      <style dangerouslySetInnerHTML={{ __html: '\nbody {\npadding-bottom: 5px;\n}\nhtml[hidden] { display: none; }\n' }} />
      <div>
        <h1>Custom Events</h1>
        <p>A custom event can be registered with the consumer and intiated by the provider.</p>
        <p>After a one second delay the provider sends the message and consumer handles the message by adding a border.</p>
        <p>After another second delay the provider sends the message and consumer handles the message by updating the border.</p>
      </div>
    </div>
  );
}

export default CustomEventProvider;
