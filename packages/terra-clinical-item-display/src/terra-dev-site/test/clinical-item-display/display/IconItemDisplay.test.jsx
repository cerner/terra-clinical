import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';

import ItemDisplay from '../../../../ItemDisplay';
import styles from './styles.module.scss';

const testText = 'Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text Wrapping Test Text';

export default () => (
  <div className={styles.spacer}>
    <ItemDisplay text={`Center / default - ${testText}`} icon={<IconSuccess />} id="test-icon-center" />
    <br />
    <ItemDisplay text={`Top - ${testText}`} icon={<IconSuccess />} id="test-icon-top" iconAlignment="top" />
    <br />
    <ItemDisplay text={`Inline - ${testText}`} icon={<IconSuccess />} id="test-icon-inline" iconAlignment="inline" />
  </div>
);
