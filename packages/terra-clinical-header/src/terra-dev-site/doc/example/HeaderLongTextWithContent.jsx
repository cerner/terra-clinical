import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<Button text="Button" />}
      title="This is a header with long text and content.This is an element provides a customizable header and content layout with a prominent options for the elements.This component saves time and effort in designing a header and content from scratch and ensures consistency across a website's pages."
      endContent={<Button text="Button" />}
    >
      <Button text="Custom 1" />
    </Header>
  </div>
);

export default LongTextWithContent;
