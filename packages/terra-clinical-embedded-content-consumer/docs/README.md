# Terra Clinical Embedded Content Consumer

The Embedded Content Consumer is the application component which is embedding content within it.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-embedded-content-consumer`
  - `yarn add terra-clinical-embedded-content-consumer`

## Usage

```jsx
import React from 'react';
import EmbeddedContentConsumer from 'terra-clinical-embedded-content-consumer';

<EmbeddedContentConsumer
  src="https://google.com"
  onLaunch={() => { console.log('launched'); }}
  onAuthorize={() => { console.log('Authorized'); }}
  onFullscreen={() => { window.open('https://yahoo.com'); }}
  options={{ secret: 'SecretKey' }}
  eventHandlers=[{ key: 'customEvent', handler: () => { console.log('Custom event invoked.'); } }]
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)