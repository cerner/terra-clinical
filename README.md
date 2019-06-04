<!-- Logo -->
<p align="center">
  <img alt="Terra Logo" height="128" width="128" src="https://github.com/cerner/terra-clinical/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Clinical
</h1>

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-clinical)](https://github.com/cerner/terra-clinical/blob/master/LICENSE)
[![Build Status](https://badgen.net/travis/cerner/terra-clinical)](https://travis-ci.com/cerner/terra-clinical)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-clinical)](https://david-dm.org/cerner/terra-clinical?type=dev)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lerna.js.org/)

- [Supported Browsers](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Packages](#packages)
  - [Status](#status)
- [Internationalization (I18n)](#internationalization-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [LICENSE](#license)

<h2 id="packages">
  Packages
</h2>

<h3 id="status">
  Status
</h3>

![Stable](https://badgen.net/badge/status/Stable/green)
![Beta](https://badgen.net/badge/status/Beta/orange)
![Deprecated](https://badgen.net/badge/status/Deprecated/grey)

<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) -->
| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| [terra-clinical-application](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-application) | [![NPM version](https://badgen.net/npm/v/terra-clinical-application)](https://www.npmjs.org/package/terra-clinical-application) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-application](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-application)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-application) |
| [terra-clinical-data-grid](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-data-grid) | [![NPM version](https://badgen.net/npm/v/terra-clinical-data-grid)](https://www.npmjs.org/package/terra-clinical-data-grid) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-data-grid](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-data-grid)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-data-grid) |
| [terra-clinical-detail-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-detail-view) | [![NPM version](https://badgen.net/npm/v/terra-clinical-detail-view)](https://www.npmjs.org/package/terra-clinical-detail-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-detail-view](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-detail-view)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-detail-view) |
| [terra-clinical-header](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-header) | [![NPM version](https://badgen.net/npm/v/terra-clinical-header)](https://www.npmjs.org/package/terra-clinical-header) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-header](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-header)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-header) |
| [terra-clinical-item-collection](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-collection) | [![NPM version](https://badgen.net/npm/v/terra-clinical-item-collection)](https://www.npmjs.org/package/terra-clinical-item-collection) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-item-collection](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-collection)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-collection) |
| [terra-clinical-item-display](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-display) | [![NPM version](https://badgen.net/npm/v/terra-clinical-item-display)](https://www.npmjs.org/package/terra-clinical-item-display) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-item-display](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-display)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-display) |
| [terra-clinical-item-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-item-view) | [![NPM version](https://badgen.net/npm/v/terra-clinical-item-view)](https://www.npmjs.org/package/terra-clinical-item-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-item-view](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-view)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-view) |
| [terra-clinical-label-value-view](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-label-value-view) | [![NPM version](https://badgen.net/npm/v/terra-clinical-label-value-view)](https://www.npmjs.org/package/terra-clinical-label-value-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-label-value-view](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-label-value-view)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-label-value-view) |
| [terra-clinical-onset-picker](https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-onset-picker) | [![NPM version](https://badgen.net/npm/v/terra-clinical-onset-picker)](https://www.npmjs.org/package/terra-clinical-onset-picker) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-onset-picker](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-onset-picker)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-onset-picker) |
<!-- AUTO-GENERATED-CONTENT:END *-->

### Deprecated

| Terra Package      | Version | Status |
|--------------------|---------|--------|
| terra-clinical-action-header | [![NPM version](https://badgen.net/npm/v/terra-clinical-action-header)](https://www.npmjs.org/package/terra-clinical-action-header) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|
| terra-clinical-app-delegate |[![NPM version](https://badgen.net/npm/v/terra-clinical-app-delegate)](https://www.npmjs.org/package/terra-clinical-app-delegate) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|
| terra-clinical-error-view | [![NPM version](https://badgen.net/npm/v/terra-clinical-error-view)](https://www.npmjs.org/package/terra-clinical-error-view) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|
| terra-clinical-modal-manager |[![NPM version](https://badgen.net/npm/v/terra-clinical-modal-manager)](https://www.npmjs.org/package/terra-clinical-modal-manager) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|
| terra-clinical-no-data-view | [![NPM version](https://badgen.net/npm/v/terra-clinical-no-data-view)](https://www.npmjs.org/package/terra-clinical-no-data-view) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|
| terra-clinical-site |[![NPM version](https://badgen.net/npm/v/terra-clinical-site)](https://www.npmjs.org/package/terra-clinical-site) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|
| terra-clinical-slide-group |[![NPM version](https://badgen.net/npm/v/terra-clinical-slide-group)](https://www.npmjs.org/package/terra-clinical-slide-group) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey)|

<h2 id="internationalization-i18n">
  Internationalization (I18n)
</h2>

Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

<h2 id="contributing">
  Contributing
</h2>

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

<h2 id="local-development">
  Local Development
</h2>

1. Install docker https://www.docker.com/ to run browser tests.
2. Install dependencies and run tests.
```sh
npm install
npm run test
```

<h2 id="license">
  LICENSE
</h2>

Copyright 2017 - 2018 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
