/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      title="Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et."
      endContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
    />
  </div>
);

export default LongTextWithContent;
