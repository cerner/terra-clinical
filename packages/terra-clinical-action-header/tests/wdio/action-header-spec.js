/* global browser, Terra, before */

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
const rules = {
  'color-contrast': { enabled: false },
};

describe('Action Header', () => {
  describe('Displays a default action header', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with title', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-title');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with back button', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-back');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with close button', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-close');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with close button in small viewports', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-keep-close-button');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with maximize button', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-maximize');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with minimize button', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-minimize');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with a back button and a close button', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-back-close');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with a previous-next button-group', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-previous-next');
    });

    Terra.should.matchScreenshot({ viewports, rules });
    Terra.should.beAccessible();
  });

  describe('Displays an action header with custom content', () => {
    before(() => {
      browser.url('/#/tests/action-header-tests/action-header-child');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });
});
