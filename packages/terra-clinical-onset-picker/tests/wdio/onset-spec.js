const viewports = Terra.viewports('tiny', 'medium', 'enormous');
// Color contrast rule disabled due to https://github.com/cerner/terra-core/issues/1917
const rules = { 'color-contrast': { enabled: false } };

viewports.forEach((viewport) => {
  describe('Onset Picker', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });
    describe('when unknown precision selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-precision-select');
        browser.click('#terra-select-option-unknown');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Year granularity
    describe('Displays year selection only when Year granularity selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Can select a year between the birthdate and current year', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2015');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a year before the birthdate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      browser.click('#test-year-select');
      browser.click('#terra-select-option-2010');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a year in the future', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      browser.click('#test-year-select');
      browser.click('#terra-select-option-2017');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Monthly granularity
    describe('Displays month and year selection only when Month-Year granularity selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
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

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a month before the birthdate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2011');
      });

      browser.click('#test-month-select');
      browser.click('#terra-select-option-1');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a month in the future', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2016');
      });

      browser.click('#test-month-select');
      browser.click('#terra-select-option-9');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Date granularity
    describe('Displays date input when Date granularity is selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-date');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Age granularity
    describe('Displays age inputs when Age granularity is selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
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

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
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

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
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

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
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

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
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

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select years duration if age is less than a year old', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      browser.click('#test-age-unit-select');
      browser.click('#terra-select-option-years');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select months duration if age is less than a month old', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      browser.click('#test-age-unit-select');
      browser.click('#terra-select-option-months');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // onChange Handlers
    describe('When precision is changed an event is fired to the precisionSelectOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-precision-select');
        browser.click('#terra-select-option-unknown');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When granularity is changed an event is fired to the granularitySelectOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the month select an event is fired to the onsetDateInputOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');

        browser.click('#test-month-select');
        browser.click('#terra-select-option-9');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the year select an event is fired to the onsetDateInputOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');

        browser.click('#test-year-select');
        browser.click('#terra-select-option-2016');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the age input an event is fired to the onsetDateInputOnChange callback', () => {
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

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the ageUnit select an event is fired to the onsetDateInputOnChange callback', () => {
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

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });
  });
});
