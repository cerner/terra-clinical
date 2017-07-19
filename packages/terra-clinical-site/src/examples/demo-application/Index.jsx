/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import DemoApplication from 'terra-clinical-application-site/src/demo/patient-application/PatientApplication';
import styles from '../../site.scss';

const DemoApplicationExample = () => (
  <div className={styles.demoApplication}>
    <DemoApplication />
  </div>
);

export default DemoApplicationExample;
