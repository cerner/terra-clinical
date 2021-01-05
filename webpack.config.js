/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
  DirectorySwitcherPlugin,
  LocalPackageAliasPlugin,
} = require('terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');
/**
* Generates the file representing app name configuration.
*/
const devSiteConfig = (env = {}, argv = { p: false }) => {
  const production = argv.p;
  const processPath = process.cwd();

  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({ env }),
    ],
    resolve: {
      plugins: [
        new DirectorySwitcherPlugin({
          shouldSwitch: !production,
          rootDirectories: [
            processPath,
            path.resolve(processPath, 'packages', '*'),
          ],
        }),
        new LocalPackageAliasPlugin({
          rootDirectories: [
            processPath,
            path.resolve(processPath, 'packages', '*'),
          ],
        }),
      ],
    },
  };
};

const webpackConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), devSiteConfig(env, argv))
);

module.exports = webpackConfig;
