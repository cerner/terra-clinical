import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-clinical-header/lib/Header';
import classNames from 'classnames/bind';
import styles from './HeaderLongTextWithContent.scss';

const cx = classNames.bind(styles);

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" className={cx('button-margin')} /></div>}
      title="Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et."
      endContent={<div><Button text="Button" className={cx('button-margin')} /></div>}
    >
      <Button text="Custom 1" />
    </Header>
  </div>
);

export default LongTextWithContent;
