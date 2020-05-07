const VerboseReporter = require('@jest/reporters/build/verbose_reporter').default;
const stripAnsi = require('strip-ansi');
const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;

class TerraVerboseReporter extends VerboseReporter {
  constructor(globalConfig) {
    super(globalConfig);
    if (!globalConfig.rootDir) {
      this.resultDir = path.join(process.cwd(), '/tests/jest/reports/results');
    } else {
      this.resultDir = path.join(globalConfig.rootDir, 'tests/jest/reports/results');
    }
    this.filePathLocation = `${this.resultDir}/terra-verbose-results.json`;
    this.results = {
      startDate: '',
      output: [],
      endDate: '',
    };
    this.unformattedResult = [];
    this.log = this.log.bind(this);
    this.hasReportDir = this.hasReportDir.bind(this);
    this.hasReportDir();
    this.setTestModule = this.setTestModule.bind(this);
    this.moduleName = '';
  }

  hasReportDir() {
    const reportDir = path.join(this.resultDir, '..');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(this.resultDir, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }
  }

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
          output: output[key],
          endDate,
        };
        fs.writeFileSync(`${this.resultDir}/${key}.json`, `${JSON.stringify(fileData, null, 2)}`, { flag: 'w+' }, (err) => {
          if (err) {
            throw err;
          }
        });
      });
    }
  }
}
module.exports = TerraVerboseReporter;
