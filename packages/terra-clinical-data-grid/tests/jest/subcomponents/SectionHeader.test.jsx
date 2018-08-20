import React from 'react';
import SectionHeader from '../../../src/subcomponents/SectionHeader';

describe('SectionHeader Snapshot Tests', () => {
  it('should render a Scrollbar with minimal props', () => {
    const sectionHeader = shallow((
      <SectionHeader sectionId="test-section" />
    ));

    expect(sectionHeader).toMatchSnapshot();
  });

  it('should render a Scrollbar with default text/accessory props', () => {
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

  it('should render a Scrollbar with child content if provided', () => {
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

  it('should render a Scrollbar as collapsed', () => {
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

  // it('should render a Scrollbar with all provided props', () => {
  //   const scrollbar = shallow((
  //     <Scrollbar
  //       onMoveStart={() => {}}
  //       onMoveEnd={() => {}}
  //       onMove={() => {}}
  //       refCallback={() => {}}
  //       scrollbarRefCallback={() => {}}
  //     />
  //   ));

  //   expect(scrollbar).toMatchSnapshot();
  // });
});

