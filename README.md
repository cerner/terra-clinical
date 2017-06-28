<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-clinical/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Clinical
</h1>

[![Build Status](https://travis-ci.org/cerner/terra-clinical.svg?branch=master)](https://travis-ci.org/cerner/terra-clinical)

- [Supported Browsers](#supported-browsers)
- [Packages](#packages)
- [Contributing](#contributing)
- [LICENSE](#license)

## Packages

### Status
:white_check_mark: Stable
:large_orange_diamond: Beta
:construction: In Progress
:x: Deprecated


| Terra Package      | Version | Status |
|--------------------|---------|--------|
| [terra-clinical-action-header](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-action-header) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-action-header.svg)](https://www.npmjs.org/package/terra-clinical-action-header) | :white_check_mark:|
| terra-clinical-app-delegate |[![NPM version](http://img.shields.io/npm/v/terra-clinical-app-delegate.svg)](https://www.npmjs.org/package/terra-clinical-app-delegate) | :x:|
| [terra-clinical-application](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-application) |[![NPM version](http://img.shields.io/npm/v/terra-clinical-application.svg)](https://www.npmjs.org/package/terra-clinical-application) | :white_check_mark:|
| [terra-clinical-detail-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-detail-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-detail-view.svg)](https://www.npmjs.org/package/terra-clinical-detail-view) | :white_check_mark: |
| [terra-clinical-error-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-error-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-error-view.svg)](https://www.npmjs.org/package/terra-clinical-error-view) | :white_check_mark:|
| [terra-clinical-header](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-header) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-header.svg)](https://www.npmjs.org/package/terra-clinical-header) | :white_check_mark: |
| [terra-clinical-item-collection](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-collection) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-item-collection.svg)](https://www.npmjs.org/package/terra-clinical-item-collection) | :white_check_mark: |
| [terra-clinical-item-display](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-display)  | [![NPM version](http://img.shields.io/npm/v/terra-clinical-item-display.svg)](https://www.npmjs.org/package/terra-clinical-item-display) | :white_check_mark: |
| [terra-clinical-item-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-item-view.svg)](https://www.npmjs.org/package/terra-clinical-item-view) | :white_check_mark: |
| [terra-clinical-label-value-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-label-value-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-label-value-view.svg)](https://www.npmjs.org/package/terra-clinical-label-value-view) | :white_check_mark: |
| terra-clinical-modal-manager |[![NPM version](http://img.shields.io/npm/v/terra-clinical-modal-manager.svg)](https://www.npmjs.org/package/terra-clinical-modal-manager) | :x:|
| [terra-clinical-no-data-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-no-data-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-no-data-view.svg)](https://www.npmjs.org/package/terra-clinical-no-data-view) | :white_check_mark:|
| [terra-clinical-site](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-site) |[![NPM version](http://img.shields.io/npm/v/terra-clinical-site.svg)](https://www.npmjs.org/package/terra-clinical-site) | :white_check_mark:|
| terra-clinical-slide-group |[![NPM version](http://img.shields.io/npm/v/terra-clinical-slide-group.svg)](https://www.npmjs.org/package/terra-clinical-slide-group) | :x:|


## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Internationalization (I18n)

1. Please follow [Base Getting Started](packages/terra-base/README.md#getting-started) to install `Base`, and consume it with `locale` props.
2. Install and config `terra-i18n-plugin`:
    - Follow [terra-i18n-plugin Getting Started](packages/terra-i18n-plugin#getting-started) to install `terra-i18n-plugin` to aggregate translations in `node_modules`.
    - Follow [terra-i18n-plugin Wiki Guide](https://github.com/cerner/terra-core/wiki/Terra-i18n-plugin-Guide) to config i18n plugin.
3. Install and config `react-intl`
    - Install it `npm install --save react-intl`.
    - Add alias webpack config to avoid importing duplicate `react-intl`.
        ```
        resolve: {
          extensions: ['.js', '.jsx'],
          alias: {
            'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
          },
        },
        ```
4. Provide values for `locale` and `customMessages` prop of `Base`.
5. Follow [react-intl wiki](https://github.com/yahoo/react-intl/wiki/API) to use `injectIntl`([pass translations to props](https://github.com/cerner/terra-core/wiki/terra-i18n-Guide#pass-translated-message-as-props)) or `FormattedMessage`([render translations](https://github.com/cerner/terra-core/wiki/terra-i18n-Guide#display-transalated-message-without-default-message-fallback)) to consume translations.

### Packages Requiring I18n

- [terra-clinical-action-header](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-action-header)

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
