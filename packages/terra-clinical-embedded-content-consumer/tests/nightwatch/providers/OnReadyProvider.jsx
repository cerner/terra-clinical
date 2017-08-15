import React from 'react';
import { Provider } from 'xfc';

function OnReadyProvider() {
  Provider.init({
    acls: ['http://localhost:8080'],
    onReady: () => {
      document.getElementById('ready').innerHTML = 'onReady function being executed after the consumer has been authorized.';
    },
  });

  return (
    <div>
      <title>On Ready Provider</title>
      <meta charSet="utf-8" />
      <style dangerouslySetInnerHTML={{ __html: '"\nbody {\npadding-bottom: 5px;\n}\nhtml[hidden] { display: none; }\n' }} />
      <div>
        <h1>On Ready Events</h1>
        <p>An On Ready function triggers after initialization is complete.</p>
        <p id="ready" />
      </div>
    </div>
  );
}

export default OnReadyProvider;
