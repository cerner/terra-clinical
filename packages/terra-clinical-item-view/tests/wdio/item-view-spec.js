Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous').forEach((viewport) => {
  describe('Clinical Item View', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('with one column displays', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
      });

      Terra.should.validateElement({ selector: '#test-displays' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#test-displays',
        properties: {
          '--terra-clinical-item-view-content-color': 'green',
          '--terra-clinical-item-view-content-primary-color': 'purple',
          '--terra-clinical-item-view-content-secondary-color': 'maroon',
        },
      });
    });

    describe('with two column displays', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
      });

      Terra.should.validateElement({ selector: '#test-displays-two' });
    });

    describe('with two column and start displays', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
      });

      Terra.should.validateElement({ selector: '#test-displays-two-start' });
    });

    describe('with accessories', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view');
      });

      Terra.should.validateElement();
    });

    describe('with default comment set', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');
      });

      Terra.should.validateElement({ selector: '#ItemView1' });
    });

    describe('with truncated comment set', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');
      });

      Terra.should.validateElement({ selector: '#ItemView2' });
    });

    describe('with the full example word wrap - one column', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
      });

      Terra.should.validateElement({ selector: '#ItemView-one-wrap' });
    });

    describe('with the full example word wrap - two column', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
      });

      Terra.should.validateElement({ selector: '#ItemView-two-wrap' });
    });
  });
});

Terra.viewports('enormous').forEach((viewport) => {
  describe('Clinical Item View', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('with the full example truncated - one truncated', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
      });

      Terra.should.validateElement({ selector: '#ItemView-one-truncate' });
    });

    describe('with the full example truncated - two truncated', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
      });

      Terra.should.validateElement({ selector: '#ItemView-one-truncate' });
    });
  });
});
