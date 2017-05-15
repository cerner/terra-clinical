import React, { PropTypes } from 'react';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import AppDelegate from 'terra-clinical-app-delegate';

import NavigationHeader from '../navigation-header/NavigationHeader';
import ActivityOverlay from '../activity-overlay/ActivityOverlay';

class PatientUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit() {
    const changeData = {
      name: this.nameTextAreaElement.value,
      status: this.statusTextAreaElement.value,
      comment: this.commentTextAreaElement.value,
    };

    if (this.props.onSubmit) {
      this.props.onSubmit(this.props.patient, changeData);
    }
  }

  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel(this.props.patient);
    }
  }

  render() {
    const patient = this.props.patient;

    let loadingIndicator;
    if (this.props.isLoading) {
      loadingIndicator = <ActivityOverlay />;
    }

    return (
      <ContentContainer
        id="orion-PatientUpdate"
        header={<NavigationHeader title="Patient Update" app={this.props.app} />}
        fill
      >
        {loadingIndicator}
        <div style={{ margin: '10px' }}>
          <h4>Update</h4>
          <p>Name</p>
          <textarea ref={(element) => { this.nameTextAreaElement = element; }} defaultValue={patient.name} />
          <p>Status</p>
          <textarea ref={(element) => { this.statusTextAreaElement = element; }} defaultValue={patient.status} />
          <p>Comment</p>
          <textarea ref={(element) => { this.commentTextAreaElement = element; }} defaultValue={patient.comment} />
          <div>
            <Button onClick={this.handleCancel} variant="secondary" text="Cancel" />
            <Button onClick={this.handleSubmit} variant="primary" text="Submit" />
          </div>
        </div>
      </ContentContainer>
    );
  }
}

PatientUpdate.propTypes = {
  app: AppDelegate.propType,
  patient: PropTypes.object,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default PatientUpdate;
