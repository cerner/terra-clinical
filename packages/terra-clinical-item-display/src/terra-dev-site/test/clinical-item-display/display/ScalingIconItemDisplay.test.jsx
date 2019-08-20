import React from 'react';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';

import ItemDisplay from '../../../../ItemDisplay';
import styles from './styles.module.scss';

const views = () => (
  <div>
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Default" />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Larger" className={styles.large} />
    <ItemDisplay text="Test Text" icon={<IconSuccess />} id="Smaller" className={styles.smaller} />
  </div>
);

export default views;
