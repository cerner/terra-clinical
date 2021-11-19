Terra.describeViewports('Onset Picker', ['tiny', 'medium', 'enormous'], () => {
  describe('has [year granularity] select', () => {
    before(() => browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/default'));

    it('displays year select', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-year').click();
      Terra.validates.element('year select');
    });

    it('has year options', () => {
      $('#test-year-select').click();
      // move the mouse to prevent mis-match with hover styling
      $('#terra-select-option-2015').moveTo();
      Terra.validates.element('year options', { selector: '#root' });
    });

    it('does not show a year before birth date', () => {
      expect($('#terra-select-option-2010').isExisting()).toBe(false);
    });

    it('does not show a year in the future', () => {
      expect($('#terra-select-option-2017').isExisting()).toBe(false);
    });

    it('can select a year between the birth date and current year', () => {
      $('#terra-select-option-2015').click();
      Terra.validates.element('year option selected');
    });
  });

  describe('has [month-year granularity] select', () => {
    it('displays month and year selects', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-month').click();
      Terra.validates.element('month and year select');
    });

    it('has month options', () => {
      $('#test-year-select').click();
      $('#terra-select-option-2015').click();
      $('#test-month-select').click();
      // move the mouse to prevent mis-match with hover styling
      $('#terra-select-option-3').moveTo();
      Terra.validates.element('month options', { selector: '#root' });
    });

    it('Can select a month between the birth date and current year', () => {
      $('#terra-select-option-3').click();
      Terra.validates.element('month option selected');
    });
  });

  describe('has [date granularity]', () => {
    it('displays date input', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-date').click();
      Terra.validates.element('date input');
    });
  });

  describe('has [age granularity]', () => {
    it('displays age inputs', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-age').click();
      Terra.validates.element('age input');
    });
  });

  describe('has [unknown precision]', () => {
    it('displays no onset options', () => {
      $('#test-precision-select').click();
      $('#terra-select-option-unknown').click();
      Terra.validates.element('unknown precision');
    });
  });

  describe('age set to [five years]', () => {
    before(() => browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years'));

    it('cannot select number of years greater than age', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-age').click();

      $('#test-age-unit-select').click();
      $('#terra-select-option-years').click();

      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(10);
      $('button[type="submit"]').click();
      browser.pause(2900);
      Terra.validates.element('invalid year input', { selector: '#root' });
    });

    it('cannot select more than 24 months', () => {
      $('#test-age-unit-select').click();
      $('#terra-select-option-months').click();

      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(30);
      $('button[type="submit"]').click();
      browser.pause(2900);
      Terra.validates.element('invalid month input', { selector: '#root' });
    });

    it('cannot select more than 8 weeks', () => {
      $('#test-age-unit-select').click();
      $('#terra-select-option-weeks').click();

      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(15);
      $('button[type="submit"]').click();
      browser.pause(2900);
      Terra.validates.element('invalid week input', { selector: '#root' });
    });
  });

  describe('has age set to [less than one year] ', () => {
    before(() => browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year'));

    it('cannot select years duration if age is less than a year old', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-age').click();

      $('#test-age-unit-select').click();
      expect($('#terra-select-option-years').isExisting()).toBe(false);
    });

    it('cannot select number of months that exceed age', () => {
      $('#terra-select-option-months').click();

      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(20);
      $('button[type="submit"]').click();
      browser.pause(2900);
      Terra.validates.element('less than one year invalid month input', { selector: '#root' });
    });
  });

  describe('has age set to [less than one month] ', () => {
    before(() => browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month'));

    it('cannot select months duration if age is less than a month old', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-age').click();

      $('#test-age-unit-select').click();
      expect($('#terra-select-option-months').isExisting()).toBe(false);
      expect($('#terra-select-option-years').isExisting()).toBe(false);
    });

    it('cannot select number of days that exceed age', () => {
      $('#terra-select-option-weeks').click();

      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(6);
      $('button[type="submit"]').click();
      browser.pause(2900);
      Terra.validates.element('less than one month invalid day input', { selector: '#root' });
    });
  });

  describe('has [onsetOnChange callback]', () => {
    before(() => browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years'));

    it('that fires when granularity is changed', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-month').click();
      $('button[type="submit"]').click();
      Terra.validates.element('granularity changed');
    });

    it('that fires when month select is changed', () => {
      $('#test-month-select').click();
      $('#terra-select-option-9').click();
      $('button[type="submit"]').click();
      Terra.validates.element('month select changed');
    });

    it('that fires when year select is changed', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-year').click();
      $('#test-year-select').click();
      $('#terra-select-option-2016').click();
      $('button[type="submit"]').click();
      Terra.validates.element('year select changed');
    });

    it('that fires when age input is changed', () => {
      $('#test-granularity-select').click();
      $('#terra-select-option-age').click();

      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(4);

      $('button[type="submit"]').click();
      Terra.validates.element('age input changed');
    });

    it('that fires when ageUnit select is changed', () => {
      $('#test-age-unit-select').click();
      $('#terra-select-option-weeks').click();
      $('button[type="submit"]').click();
      Terra.validates.element('ageUnit select changed');
    });

    it('that fires when precision is changed', () => {
      $('#test-precision-select').click();
      $('#terra-select-option-unknown').click();
      $('button[type="submit"]').click();
      Terra.validates.element('precision changed');
    });
  });

  it('Hides legend when isLegendHidden is true', () => {
    browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/with-hidden-legend');
    Terra.validates.element('legend hidden');
  });

  it('Does not display age granularity', () => {
    browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-week');
    $('#test-granularity-select').click();
    expect($('#terra-select-option-age').isExisting()).toBe(false);
    Terra.validates.element('invalid age input', { selector: '#root' });
  });

  it('fires when age is empty', () => {
    browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month');
    $('#test-precision-select').click();
    $('#terra-select-option-before').click();
    $('#test-granularity-select').click();
    $('#terra-select-option-age').click();
    $('#test-age-unit-select').click();
    $('#terra-select-option-weeks').click();
    $('button[type="submit"]').click();
    Terra.validates.element('Age value is empty');
  });

  describe('has Leap day as birthdate', () => {
    it('defaults to date granularity', () => {
      browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/leap-year-birth-date');
      Terra.validates.element('Defaults to date Granularity');
    });

    it('that fires when age is passed as input', () => {
      $('#test-precision-select').click();
      $('#terra-select-option-before').click();
      $('#test-granularity-select').click();
      $('#terra-select-option-age').click();
      $('#test-age-unit-select').click();
      $('#terra-select-option-years').click();
      $('#test-age-input').clearValue();
      $('#test-age-input').setValue(1);
      $('button[type="submit"]').click();
      Terra.validates.element('Onset Date for Leap year birthdate');
    });
  });

  it('has non leap year as birthdate', () => {
    browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/non-leap-year-birth-date');
    Terra.validates.element('Default onset date matches expected onset date');
  });

  it('that fires when age is passed as input', () => {
    browser.url('/raw/tests/terra-clinical-onset-picker/clinical-onset-picker/birthdate-31-st');
    $('#test-precision-select').click();
    $('#terra-select-option-before').click();
    $('#test-granularity-select').click();
    $('#terra-select-option-age').click();
    $('#test-age-unit-select').click();
    $('#terra-select-option-months').click();
    $('#test-age-input').clearValue();
    $('#test-age-input').setValue(3);
    $('button[type="submit"]').click();
    Terra.validates.element('Onset Date for 31st as birthdate');
  });

  it('fires onOnsetChange when invalid date is passed, for higher component validation', () => {
    $('#test-precision-select').click();
    $('#terra-select-option-before').click();
    $('#test-granularity-select').click();
    $('#terra-select-option-date').click();
    $('input[name="terra-date-month-test-date-input"]').setValue('08');
    $('input[name="terra-date-day-test-date-input"]').setValue('01');
    $('input[name="terra-date-year-test-date-input"]').setValue('1899');
    $('button[type="submit"]').click();
    browser.pause(2900);
    Terra.validates.element('onOnsetChange for invalid date', { selector: '#root' });
  });
});
