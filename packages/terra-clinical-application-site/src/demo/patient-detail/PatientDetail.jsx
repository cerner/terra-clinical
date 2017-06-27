import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import DetailView from 'terra-clinical-detail-view';
import IconRefresh from 'terra-icon/lib/icon/IconRefresh';
import IconEdit from 'terra-icon/lib/icon/IconEdit';

import AppDelegate from 'terra-app-delegate';

import NavigationHeader from '../navigation-header/NavigationHeader';
import ActivityIndicator from '../activity-overlay/ActivityOverlay';

const propTypes = {
  app: AppDelegate.propType,
  patient: PropTypes.object,
  isLoading: PropTypes.bool,
  onRefresh: PropTypes.func,
  onSelectPatientUpdate: PropTypes.func,
};

class PatientDetail extends React.Component {
  constructor(props) {
    super(props);

    this.showPatientUpdate = this.showPatientUpdate.bind(this);
  }

  showPatientUpdate(patient, type) {
    return () => {
      if (this.props.onSelectPatientUpdate) {
        this.props.onSelectPatientUpdate(patient, type);
      }
    };
  }

  render() {
    const patient = this.props.patient;

    let loadingIndicator;
    if (this.props.isLoading) {
      loadingIndicator = <ActivityIndicator />;
    }

    let detailContent;
    if (patient) {
      detailContent = (
        <DetailView
          title={patient.name}
          subtitles={[patient.status]}
          graph={<img style={{ width: '280px' }} alt="patient-img" src={patient.photo} />}
          footer={patient.comment}
          isDivided
        />
      );
    }

    return (
      <ContentContainer
        id="orion-PatientDetail"
        header={(
          <NavigationHeader app={this.props.app}>
            <span>
              {this.props.onRefresh && <Button onClick={this.props.onRefresh} icon={<IconRefresh isSpin={this.props.isLoading} />} />}
              <Button style={{ marginLeft: '5px' }} icon={<IconEdit />} onClick={this.showPatientUpdate(patient, 'modal')} />
            </span>
          </NavigationHeader>
        )}
        fill
      >
        {loadingIndicator}
        {detailContent}
      </ContentContainer>
    );
  }
}

PatientDetail.propTypes = propTypes;

export default PatientDetail;
