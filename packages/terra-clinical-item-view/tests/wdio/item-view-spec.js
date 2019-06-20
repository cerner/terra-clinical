Terra.describeViewports('Clinical Item View', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('with one column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#test-displays' });
  });

  describe('with two column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#test-displays-two' });
  });

  describe('with two column and start displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#test-displays-two-start' });
  });

  describe('with accessories', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view');
    });

    Terra.it.validatesElement();
  });

  describe('with default comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');
    });

    Terra.it.validatesElement({ selector: '#ItemView1' });
  });

  describe('with truncated comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');
    });

    Terra.it.validatesElement({ selector: '#ItemView2' });
  });

  describe('with the full example word wrap - one column', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#ItemView-one-wrap' });
  });

  describe('with the full example word wrap - two column', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#ItemView-two-wrap' });
  });
});

Terra.describeViewports('Clinical Item View', ['enormous'], () => {
  describe('with the full example truncated - one truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#ItemView-one-truncate' });
  });

  describe('with the full example truncated - two truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.it.validatesElement({ selector: '#ItemView-one-truncate' });
  });
});
