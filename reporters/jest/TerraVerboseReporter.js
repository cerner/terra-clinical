const VerboseReporter = require('@jest/reporters/build/verbose_reporter').default;
const stripAnsi = require('strip-ansi');
const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
// const Logger = require('../../scripts/utils/logger');

// const LOG_CONTEXT = '[Terra-Toolkit:theme-aggregator]';

class TerraVerboseReporter extends VerboseReporter {
  constructor(globalConfig) {
    super(globalConfig);
    if (!globalConfig.rootDir) {
      this.resultDir = path.resolve(__dirname, '..', '..', 'tests/jest/reports/results');
    } else {
      this.resultDir = path.resolve(globalConfig.rootDir, 'tests/jest/reports/results');
    }
    this.filePathLocation = `${this.resultDir}/terra-verbose-results.json`;
    this.results = {
      startDate: '',
      output: [],
      endDate: '',
    };
    this.unformattedResult = [];
    this.log = this.log.bind(this);
    this.checkResultDirExist = this.checkResultDirExist.bind(this);
    this.setTestModule = this.setTestModule.bind(this);
    this.checkResultDirExist();
    this.moduleName = '';
  }

  hasReportDir() {
    const reportDir = path.resolve(this.resultDir, '..');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir);
    }
  }

  checkResultDirExist() {
    if (this.resultDir && !fs.existsSync(this.resultDir)) {
      this.hasReportDir();
      fs.mkdirSync(this.resultDir);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  setTestModule(testLog) {
    const index = testLog.lastIndexOf('packages/');
    if (index > -1) {
      const testFilePath = testLog.substring(index).split('/');
      const moduleName = testFilePath && testFilePath[1] ? testFilePath[1] : '';
      if (moduleName && moduleName !== this.moduleName) {
        this.moduleName = moduleName;
      }
    }
  }

  onRunStart(aggregatedResults) {
    this.results.startDate = new Date(aggregatedResults.startTime).toLocaleString();
  }

  log(message) {
    const readableMessage = `${stripAnsi(message)}${endOfLine}`;
    this.setTestModule(readableMessage);
    if (!this.results.output[this.moduleName]) {
      this.results.output[this.moduleName] = [];
    }
    if (!this.unformattedResult[this.moduleName]) {
      this.unformattedResult[this.moduleName] = [];
    }
    if (readableMessage.search('\n') !== -1) {
      this.results.output[this.moduleName].push(readableMessage.split(/\n/g).forEach((piece) => {
        this.unformattedResult[this.moduleName].push(piece);
      }));
    }
    this.results.output[this.moduleName] = this.unformattedResult[this.moduleName].filter((obj) => obj);
  }

  onRunComplete() {
    this.results.endDate = new Date().toLocaleString();
    const { startDate, endDate, output } = this.results;
    const moduleKeys = Object.keys(output) || [];
    if (output && moduleKeys.length) {
      moduleKeys.forEach(key => {
        const fileData = {
          startDate,
          endDate,
          output: output[key],
        };
        fs.writeFileSync(`${this.resultDir}/${key}.json`, `${JSON.stringify(fileData, null, 2)}`, { flag: 'w+' }, (err) => {
          if (err) {
            console.log('err: ', err);
            // Logger.error(err.message, { context: LOG_CONTEXT });
          }
        });
      });
    }
  }
}
module.exports = TerraVerboseReporter;
