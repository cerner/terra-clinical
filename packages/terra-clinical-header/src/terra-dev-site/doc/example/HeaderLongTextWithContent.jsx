import React from 'react';
import classNamesBind from 'classnames/bind';
import { Placeholder } from '@cerner/terra-docs';
import Button from 'terra-button';
import Header from 'terra-clinical-header';
import styles from './ClinicalHeaderDocCommon.scss';

const cx = classNamesBind.bind(styles);

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<Button text="Button" />}
      text="Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et."
      endContent={<Button text="Button" />}
      level={3}
    >
      <Placeholder className={cx('placeholder-wrapper')} title="Collapsible Menu View" />
    </Header>
  </div>
);

export default LongTextWithContent;
