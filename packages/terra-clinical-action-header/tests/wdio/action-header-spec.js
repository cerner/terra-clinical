/* global browser, Terra, before */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Action Header', () => {
  describe('Displays a default action header', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/default-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with title', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/title-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with back button', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/back-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with close button', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/close-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with close button in small viewports', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/keep-close-button-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with maximize button', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/maximize-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with minimize button', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/minimize-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with a back button and a close button', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/back-close-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with a previous-next button-group', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/previous-next-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with custom content', () => {
    before(() => {
      browser.url('/#/raw/tests/clinical-action-header/children-action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
