const viewports = Terra.viewports('tiny', 'medium', 'enormous');

viewports.forEach((viewport) => {
  describe(`Onset Picker [${viewport.name}]`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('has [year granularity] select', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default'));

      it('displays year select', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
      });

      Terra.it.validatesElement();

      it('has year options', () => {
        browser.click('#test-year-select');
        // move the mouse to prevent mis-match with hover styling
        browser.moveToObject('#terra-select-option-2015');
      });

      it.validatesElement('year options', { selector: '#root' });

      it('does not show a year before birth date', () => {
        browser.isExisting('#terra-select-option-2010').should.equal(false);
      });

      it('does not show a year in the future', () => {
        browser.isExisting('#terra-select-option-2017').should.equal(false);
      });

      it('can select a year between the birth date and current year', () => {
        browser.click('#terra-select-option-2015');
      });

      it.validatesElement('year option selected');
    });

    describe('has [month-year granularity] select', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default'));

      it('displays month and year selects', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');
      });

      Terra.it.validatesElement();

      it('does not show a month before the birth date', () => {
        browser.click('#test-year-select');
        browser.click('#terra-select-option-2011');
        browser.click('#test-month-select');
        browser.isExisting('#terra-select-option-1').should.equal(false);
        // close month select dropdown for tiny viewport
        browser.click('#test-month-select');
      });

      it('does not show a month in the future', () => {
        browser.click('#test-year-select');
        browser.click('#terra-select-option-2016');
        browser.click('#test-month-select');
        browser.isExisting('#terra-select-option-9').should.equal(false);
        // close month select dropdown for tiny viewport
        browser.click('#test-month-select');
      });

      it('has month options', () => {
        browser.click('#test-year-select');
        browser.click('#terra-select-option-2015');
        browser.click('#test-month-select');
        // move the mouse to prevent mis-match with hover styling
        browser.moveToObject('#terra-select-option-3');
      });

      it.validatesElement('month options', { selector: '#root' });

      it('Can select a month between the birth date and current year', () => {
        browser.click('#terra-select-option-3');
      });

      it.validatesElement('month option selected');
    });

    describe('has [date granularity]', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default'));

      it('displays date input', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-date');
      });

      Terra.it.validatesElement();
    });

    describe('has [age granularity]', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default'));

      it('displays age inputs', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');
      });

      Terra.it.validatesElement();
    });

    describe('has [unknown precision]', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default'));

      it('displays no onset options', () => {
        browser.click('#test-precision-select');
        browser.click('#terra-select-option-unknown');
      });

      Terra.it.validatesElement();
    });

    describe('age set to [five years]', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years'));

      it('cannot select number of years greater than age', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-years');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 10);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      it.validatesElement('invalid year input', { selector: '#root' });

      it('cannot select more than 24 months', () => {
        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-months');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 30);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      it.validatesElement('invalid month input', { selector: '#root' });

      it('cannot select more than 8 weeks', () => {
        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-weeks');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 15);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      it.validatesElement('invalid week input', { selector: '#root' });
    });

    describe('has age set to [less than one year] ', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year'));

      it('cannot select years duration if age is less than a year old', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.isExisting('#terra-select-option-years').should.equal(false);
      });

      it('cannot select number of months that exceed age', () => {
        browser.click('#terra-select-option-months');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 20);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      it.validatesElement('invalid month input', { selector: '#root' });
    });

    describe('has age set to [less than one month] ', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month'));

      it('cannot select months duration if age is less than a month old', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.click('#test-age-unit-select');
        browser.isExisting('#terra-select-option-months').should.equal(false);
        browser.isExisting('#terra-select-option-years').should.equal(false);
      });

      it('cannot select number of months that exceed age', () => {
        browser.click('#terra-select-option-weeks');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 6);
        browser.click('button[type="submit"]');
        browser.pause(2900);
      });

      it.validatesElement('invalid month input', { selector: '#root' });
    });

    describe('has [onsetOnChange callback]', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years'));

      it('that fires when granularity is changed', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-month');
        browser.click('button[type="submit"]');
      });

      it.validatesElement('granularity changed');

      it('that fires when month select is changed', () => {
        browser.click('#test-month-select');
        browser.click('#terra-select-option-9');
        browser.click('button[type="submit"]');
      });

      it.validatesElement('month select changed');

      it('that fires when year select is changed', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-year');
        browser.click('#test-year-select');
        browser.click('#terra-select-option-2016');
        browser.click('button[type="submit"]');
      });

      it.validatesElement('year select changed');

      it('that fires when age input is changed', () => {
        browser.click('#test-granularity-select');
        browser.click('#terra-select-option-age');

        browser.clearElement('#test-age-input');
        browser.setValue('#test-age-input', 4);

        browser.click('button[type="submit"]');
      });

      it.validatesElement('age input changed');

      it('that fires when ageUnit select is changed', () => {
        browser.click('#test-age-unit-select');
        browser.click('#terra-select-option-weeks');
        browser.click('button[type="submit"]');
      });

      it.validatesElement('ageUnit select changed');

      it('that fires when precision is changed', () => {
        browser.click('#test-precision-select');
        browser.click('#terra-select-option-unknown');
        browser.click('button[type="submit"]');
      });

      it.validatesElement('precision changed');
    });

    describe('Hides legend when isLegendHidden is true', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/with-hidden-legend');
      });

      Terra.it.validatesElement();
    });
  });
});
