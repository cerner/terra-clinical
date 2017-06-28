# Terra Clinical Action Header

An action header is a header bar with a grey background containing actionable navigation buttons, a left aligned title, and a space for an additional element to be added on the right side.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-action-header`
  - `yarn add terra-clinical-action-header`

## Usage

```jsx
import React from 'react';
import ActionHeader from 'terra-clinical-action-header';

<ActionHeader
  title="Header Text"
  onClose={ () => alert('Close') }
  onMaximize={ () => alert('Maximize') }
  onBack={ () => alert('Back') }
  onNext={ () => alert('Next') }
  onPrevious={ () => alert('Previous') }
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
