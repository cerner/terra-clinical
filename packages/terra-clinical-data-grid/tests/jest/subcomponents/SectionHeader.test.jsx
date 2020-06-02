import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import SectionHeader from '../../../src/subcomponents/SectionHeader';

describe('SectionHeader Snapshot Tests', () => {
  it('should render a SectionHeader with minimal props', () => {
    const sectionHeader = shallow((
      <SectionHeader sectionId="test-section" />
    ));

    expect(sectionHeader).toMatchSnapshot();
  });

  it('should render a SectionHeader with default text/accessory props', () => {
    const sectionHeader = shallow((
      <SectionHeader
        sectionId="test-section"
        text="Default Text"
        startAccessory={<div>Start</div>}
        endAccessory={<div>End</div>}
        isCollapsible
        onRequestSectionCollapse={() => {}}
        selectableRefCallback={() => {}}
      />
    ));

    expect(sectionHeader).toMatchSnapshot();
  });

  it('should render a SectionHeader with child content if provided', () => {
    const sectionHeader = shallow((
      <SectionHeader
        sectionId="test-section"
        text="Default Text"
        startAccessory={<div>Start</div>}
        endAccessory={<div>End</div>}
        isCollapsible
        onRequestSectionCollapse={() => {}}
        selectableRefCallback={() => {}}
      >
        <div>Custom Section Header Layout</div>
      </SectionHeader>
    ));

    expect(sectionHeader).toMatchSnapshot();
  });

  it('should render a SectionHeader as collapsed', () => {
    const sectionHeader = shallow((
      <SectionHeader
        sectionId="test-section"
        text="Default Text"
        startAccessory={<div>Start</div>}
        endAccessory={<div>End</div>}
        isCollapsible
        isCollapsed
        onRequestSectionCollapse={() => {}}
        selectableRefCallback={() => {}}
      />
    ));

    expect(sectionHeader).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const sectionHeader = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SectionHeader sectionId="test-section" />
      </ThemeContextProvider>,
    );
    expect(sectionHeader).toMatchSnapshot();
  });
});
