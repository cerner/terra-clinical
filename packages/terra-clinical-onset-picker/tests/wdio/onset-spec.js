const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
const rules = { label: { enabled: false } };

viewports.forEach((viewport) => {
  describe('Onset Picker', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });
    describe('when unknown precision selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-precision"]', 'value', 'unknown');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Year granularity
    describe('Displays year selection only when Year granularity selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Can select a year between the birthdate and current year', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2015);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a year before the birthdate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
      });

      browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2010);
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a year in the future', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
      });

      browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2017);
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Monthly granularity
    describe('Displays month and year selection only when Month-Year granularity selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Can select a month between the birthdate and current date', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2015);
        browser.selectByVisibleText('[data-terra-clinical-onset-picker="month"] select', 'April');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a month before the birthdate', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2011);
      });

      browser.selectByAttribute('[data-terra-clinical-onset-picker="month"] select', 'value', 'February');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select a month in the future', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2016);
      });

      browser.selectByAttribute('[data-terra-clinical-onset-picker="month"] select', 'value', 'October');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Date granularity
    describe('Displays date input when Date granularity is selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'date');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // Age granularity
    describe('Displays age inputs when Age granularity is selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select number of years greater than age', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 10);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select more than 24 months', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'months');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 30);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select number of months that exceede age', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'months');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 20);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select more than 8 weeks', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'weeks');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 15);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select number of weeks that exceede age', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'weeks');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 6);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.matchScreenshot({ selector: '#root' });
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select years duration if age is less than a year old', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
      });

      browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('Cannot select months duration if age is less than a month old', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
      });

      browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'months');
      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    // onChange Handlers
    describe('When precision is changed an event is fired to the precisionSelectOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-precision"]', 'value', 'unknown');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When granularity is changed an event is fired to the granularitySelectOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the month select an event is fired to the onsetDateInputOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'month');
        browser.selectByVisibleText('[data-terra-clinical-onset-picker="month"] select', 'October');
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the year select an event is fired to the onsetDateInputOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'year');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="year"] select', 'value', 2016);
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the age input an event is fired to the onsetDateInputOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 4);
        browser.click('button[type="submit"]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });

    describe('When onsetDate is changed by the ageUnit select an event is fired to the onsetDateInputOnChange callback', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years');
        browser.selectByAttribute('[name*="test-granularity"]', 'value', 'age');
        browser.clearElement('[data-terra-clinical-onset-picker="age"] input');
        browser.setValue('[data-terra-clinical-onset-picker="age"] input', 4);
        browser.selectByAttribute('[data-terra-clinical-onset-picker="age_unit"] select', 'value', 'years');
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules });
    });
  });
});
