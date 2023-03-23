<!-- Logo -->
<p align="center">
  <img alt="Terra Logo" height="128" width="128" src="https://github.com/cerner/terra-clinical/raw/main/terra.png" />
</p>

<!-- Name -->
<h1 align="center">
  Terra Clinical
</h1>

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-clinical)](https://github.com/cerner/terra-clinical/blob/main/LICENSE)
[![Build Status](https://github.com/cerner/terra-clinical/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/cerner/terra-clinical/actions/workflows/ci-cd.yml)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-clinical)](https://david-dm.org/cerner/terra-clinical?type=dev)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lerna.js.org/)

- [Supported Browsers](https://github.com/cerner/terra-ui/blob/main/src/terra-dev-site/about/ComponentStandards.e.contributing.md#cross-browser-support)
- [Packages](#packages)
  - [Status](#status)
- [Internationalization (I18n)](#internationalization-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [Local Development using Docker (Dev Containers)](#docker-local-development)
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
| [terra-clinical-data-grid](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-data-grid) | [![NPM version](https://badgen.net/npm/v/terra-clinical-data-grid)](https://www.npmjs.org/package/terra-clinical-data-grid) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-data-grid](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-data-grid)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-data-grid) |
| [terra-clinical-detail-view](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-detail-view) | [![NPM version](https://badgen.net/npm/v/terra-clinical-detail-view)](https://www.npmjs.org/package/terra-clinical-detail-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-detail-view](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-detail-view)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-detail-view) |
| [terra-clinical-header](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-header) | [![NPM version](https://badgen.net/npm/v/terra-clinical-header)](https://www.npmjs.org/package/terra-clinical-header) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-header](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-header)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-header) |
| [terra-clinical-item-collection](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-collection) | [![NPM version](https://badgen.net/npm/v/terra-clinical-item-collection)](https://www.npmjs.org/package/terra-clinical-item-collection) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-item-collection](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-collection)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-collection) |
| [terra-clinical-item-display](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-display) | [![NPM version](https://badgen.net/npm/v/terra-clinical-item-display)](https://www.npmjs.org/package/terra-clinical-item-display) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-item-display](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-display)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-display) |
| [terra-clinical-item-view](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-view) | [![NPM version](https://badgen.net/npm/v/terra-clinical-item-view)](https://www.npmjs.org/package/terra-clinical-item-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-item-view](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-item-view)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-item-view) |
| [terra-clinical-label-value-view](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view) | [![NPM version](https://badgen.net/npm/v/terra-clinical-label-value-view)](https://www.npmjs.org/package/terra-clinical-label-value-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-label-value-view](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-label-value-view)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-label-value-view) |
| [terra-clinical-onset-picker](https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-onset-picker) | [![NPM version](https://badgen.net/npm/v/terra-clinical-onset-picker)](https://www.npmjs.org/package/terra-clinical-onset-picker) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-clinical-onset-picker](https://badgen.net/david/dep/cerner/terra-clinical/packages/terra-clinical-onset-picker)](https://david-dm.org/cerner/terra-clinical?path=packages/terra-clinical-onset-picker) |
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

<h2 id="docker-local-development">
  Local Development using Docker (Dev Containers)
</h2>

1. Install [Rancher](https://rancherdesktop.io/) or [Docker](https://www.docker.com/).
    - [Rancher](https://rancherdesktop.io/) is free and open-source and is highly recommended whereas Docker may require a license for use.
2. Install [Microsoft VS Code](https://code.visualstudio.com/Download).
3. Install the [Dev Container extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
    - Navigate to View -> Extension  -> Search for and install _Dev Containers_ (or "ms-vscode-remote.remote-containers")
    - More information on [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
4. Build the dev container:
    - (Option 1) - Opening local workspace in dev container
      - Clone the repository (or fork) locally and open the project in Visual Studio Code
      - Navigate to View -> Command Palette and run **Dev Containers: Open Workspace in Container**
    - (Option 2) - Recommended for Windows for hot-reloading to work during development and improved performance: Creating the dev container using dev volumes (for more information and guidance, see the [Official Guide](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume))
      - If you have git setup and have global config file _~/.gitconfig_ locally, these settings should automatically be transferred to the dev container
      - Navigate to View -> Command Palette and run **Dev Containers: Clone Repository in Container Volume**
      - Paste the GitHub URL of this repository (or fork)
      - VS Code will now reload the workspace and create/start the dev container and volume
      - Please note: changes made using this option will only update files in the Docker volume. It is recommended to commit changes often in case the volume is deleted or dev container gets removed.
5. You're now running in a dev container.  Use the terminal of the dev container in Visual Studio Code to issue any npm or bash commands.
6. Before running any WDIO tests, make sure to perform the following steps:
    - Open a new terminal (outside the dev container) and navigate to  ".devcontainer/" path in your repository.
    - Execute the command `"docker compose -f docker-compose-wdio.yml up"`. Selenium hub should spin up. Leave this running in the background. If you see errors saying "container name already exists", run `"docker container prune"` command followed by pressing "y" to clear up any unused containers and try running the previous command again.
    - You can now run `npm run test:docker` or `npm run wdio:docker` commands to run WDIO tests from inside the Dev Container.
    - NOTE: Optionally, if you want to run other WDIO commands in the dev container, you can also edit the root package.json file WDIO scripts to include `--disableSeleniumService=true` flag. This will disable the selenium service from spinning up again.
      For example:
       ```sh
       "scripts": {
        "wdio-lowlight": "terra wdio --disableSeleniumService=true --themes clinical-lowlight-theme"
        }
       ```
7. To terminate a dev container:
    - Use command line or Rancher/Docker Desktop OR
    - Using Visual Studio Code
      - Select the Remote Explorer icon in the Activity Bar or View -> Command Palette and run **Remote Explorer: Focus on Containers View**
      - Locate the **terra-clinical_devcontainer** or currently running dev container under "Dev Containers"
      - Right click and select **Stop Container** and close the workspace
        - You can also select **Rebuild Container** to restart the dev container
8. To reopen a dev container:
    - Existing local workspace (for Option 1)
      - Open the project in Visual Studio Code
      - Ensure the workspace contains the .devcontainer folder
      - Navigate to View -> Command Palette and run **Dev Containers: Open Workspace in Container**
    - Isolated dev container volume (for Option 2)
      - Open Visual Studio Code
      - Use the Remote Explorer icon in the Activity Bar or View -> Command Palette and run **Remote Explorer: Focus on Containers View** to view containers
      - Locate the **terra-clinical_devcontainer** under "Dev Containers"
      - Hover over the dev container and click the Folder icon labelled **Open Folder in Container** or by right clicking and selecting **Open Folder in Container**


<h2 id="license">
  LICENSE
</h2>

Copyright 2017 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
