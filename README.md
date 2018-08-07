<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-clinical/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Clinical
</h1>

[![Cerner OSS](https://img.shields.io/badge/Cerner-OSS-blue.svg?style=flat)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![Build Status](https://travis-ci.org/cerner/terra-clinical.svg?branch=master)](https://travis-ci.org/cerner/terra-clinical)
[![lerna](https://img.shields.io/badge/Maintained%20With-Lerna-cc00ff.svg)](https://lernajs.io/)
[![devDependencies status](https://david-dm.org/cerner/terra-clinical/dev-status.svg)](https://david-dm.org/cerner/terra-clinical?type=dev)

- [Supported Browsers](#supported-browsers)
- [Packages](#packages)
- [Contributing](#contributing)
- [LICENSE](#license)

## Packages

### Status
![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg)
![Stable](https://img.shields.io/badge/status-Beta-orange.svg)
![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)


| Terra Package      | Version | Status |
|--------------------|---------|--------|
| terra-clinical-action-header | [![NPM version](http://img.shields.io/npm/v/terra-clinical-action-header.svg)](https://www.npmjs.org/package/terra-clinical-action-header) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| terra-clinical-app-delegate |[![NPM version](http://img.shields.io/npm/v/terra-clinical-app-delegate.svg)](https://www.npmjs.org/package/terra-clinical-app-delegate) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| terra-clinical-application |[![NPM version](http://img.shields.io/npm/v/terra-clinical-application.svg)](https://www.npmjs.org/package/terra-clinical-application) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| [terra-clinical-detail-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-detail-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-detail-view.svg)](https://www.npmjs.org/package/terra-clinical-detail-view) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| terra-clinical-error-view | [![NPM version](http://img.shields.io/npm/v/terra-clinical-error-view.svg)](https://www.npmjs.org/package/terra-clinical-error-view) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| [terra-clinical-header](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-header) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-header.svg)](https://www.npmjs.org/package/terra-clinical-header) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-clinical-item-collection](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-collection) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-item-collection.svg)](https://www.npmjs.org/package/terra-clinical-item-collection) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-clinical-item-display](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-display)  | [![NPM version](http://img.shields.io/npm/v/terra-clinical-item-display.svg)](https://www.npmjs.org/package/terra-clinical-item-display) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-clinical-item-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-item-view.svg)](https://www.npmjs.org/package/terra-clinical-item-view) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-clinical-label-value-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-label-value-view) | [![NPM version](http://img.shields.io/npm/v/terra-clinical-label-value-view.svg)](https://www.npmjs.org/package/terra-clinical-label-value-view) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| terra-clinical-modal-manager |[![NPM version](http://img.shields.io/npm/v/terra-clinical-modal-manager.svg)](https://www.npmjs.org/package/terra-clinical-modal-manager) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| terra-clinical-no-data-view | [![NPM version](http://img.shields.io/npm/v/terra-clinical-no-data-view.svg)](https://www.npmjs.org/package/terra-clinical-no-data-view) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| terra-clinical-site |[![NPM version](http://img.shields.io/npm/v/terra-clinical-site.svg)](https://www.npmjs.org/package/terra-clinical-site) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|
| terra-clinical-slide-group |[![NPM version](http://img.shields.io/npm/v/terra-clinical-slide-group.svg)](https://www.npmjs.org/package/terra-clinical-slide-group) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)|


## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Internationalization (I18n)
Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## Local Development

1. Install docker https://www.docker.com/ to run browser tests.
2. Install dependencies and run tests.
```sh
npm install
npm run test
```

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
