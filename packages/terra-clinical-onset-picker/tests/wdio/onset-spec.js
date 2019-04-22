const viewports = Terra.viewports('tiny', 'medium', 'enormous');
// Color contrast rule disabled due to https://github.com/cerner/terra-core/issues/1917
const axeRules = { 'color-contrast': { enabled: false } };

viewports.forEach((viewport) => {
  describe(`Onset Picker [${viewport}]`, () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('When unknown precision selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-precision-select');
        browser.click('#terra-select-option-unknown');
      });

      Terra.should.validateElement({ axeRules });
    });

    // Year granularity
    describe('Displays year selection only when Year granularity selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Can select a year between the birthdate and current year', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2015');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Cannot select a year before the birthdate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      it('does not show a year before birthdate', () => {
        browser.click('#test-year-select');
        browser.isExisting('#terra-select-option-2010').should.equal(false);
        // move the mouse to prevent mis-match with hover styling
        browser.moveToObject('#terra-select-option-2011');
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select a year in the future', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      it('does not show a year in the future', () => {
        browser.click('#test-year-select');
        browser.isExisting('#terra-select-option-2017').should.equal(false);
        // move the mouse to prevent mis-match with hover styling
        browser.moveToObject('#terra-select-option-2016');
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    // Monthly granularity
    describe('Displays month and year selection only when Month-Year granularity selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Can select a month between the birthdate and current date', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2015');

        browser.click('#test-month-select');
        browser.click('#terra-select-option-3');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Cannot select a month before the birthdate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2011');
      });

      it('does not show a month before the birthdate', () => {
        browser.click('#test-month-select');
        browser.isExisting('#terra-select-option-1').should.equal(false);
        // move the mouse to prevent mis-match with hover styling
        browser.moveToObject('#terra-select-option-8');
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select a month in the future', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2016');
      });

      it('does not show a month in the future', () => {
        browser.click('#test-month-select');
        browser.isExisting('#terra-select-option-9').should.equal(false);
        // move the mouse to prevent mis-match with hover styling
        browser.moveToObject('#terra-select-option-8');
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    // Date granularity
    describe('Displays date input when Date granularity is selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-date');
      });

      Terra.should.validateElement({ axeRules });
    });

    // Age granularity
    describe('Displays age inputs when Age granularity is selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Cannot select number of years greater than age', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-years');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 10);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select more than 24 months', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-months');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 30);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select number of months that exceede age', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-months');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 20);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select more than 8 weeks', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-weeks');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 15);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select number of weeks that exceede age', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-weeks');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 6);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select years duration if age is less than a year old', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      it('does not show years if less than a year old', () => {
        browser.click('#test-age-unit-select');
        browser.isExisting('#terra-select-option-years').should.equal(false);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    describe('Cannot select months duration if age is less than a month old', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      it('does not show months if less than a month old', () => {
        browser.click('#test-age-unit-select');
        browser.isExisting('#terra-select-option-months').should.equal(false);
      });

      Terra.should.validateElement({ selector: '#root', axeRules });
    });

    // onChange Handler
    describe('When precision is changed an event is fired to the onsetOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-precision-select');
        browser.click('#terra-select-option-unknown');
        browser.click('button[type="submit"]');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('When granularity is changed an event is fired to the onsetOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
        browser.click('button[type="submit"]');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('When onsetDate is changed by the month select an event is fired to the onsetOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-month-select');
        browser.click('#terra-select-option-9');
        browser.click('button[type="submit"]');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('When onsetDate is changed by the year select an event is fired to the onsetOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2016');
        browser.click('button[type="submit"]');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('When onsetDate is changed by the age input an event is fired to the onsetOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-years');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 4);
        browser.click('button[type="submit"]');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('When onsetDate is changed by the ageUnit select an event is fired to the onsetOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 4);

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-years');
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Displays legend for onset picker field group when specified', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/with-legend');
      });

      Terra.should.validateElement({ axeRules });
    });

    describe('Hides legend when isLegendHidden is true', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/with-hidden-legend');
      });

      Terra.should.validateElement({ axeRules });
    });
  });
});
