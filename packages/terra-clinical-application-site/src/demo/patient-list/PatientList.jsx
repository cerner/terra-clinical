import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import List from 'terra-list';
import ContentContainer from 'terra-content-container';
import ItemView from 'terra-clinical-item-view';
import ItemDisplay from 'terra-clinical-item-display';
import ItemComment from 'terra-clinical-item-display/lib/ItemComment';

import IconRefresh from 'terra-icon/lib/icon/IconRefresh';
import IconInformation from 'terra-icon/lib/icon/IconInformationInverse';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import AppDelegate from 'terra-app-delegate';

import NavigationHeader from '../navigation-header/NavigationHeader';
import ActivityOverlay from '../activity-overlay/ActivityOverlay';

let patientListId = 0;

const propTypes = {
  app: AppDelegate.propType,
  patients: PropTypes.array,
  isLoading: PropTypes.bool,
  onRefresh: PropTypes.func,
  onSelectPatientDetail: PropTypes.func,
};

class PatientList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.showPatientDetail = this.showPatientDetail.bind(this);

    this.state = {
      id: patientListId += 1,
    };
  }

  showPatientDetail(patient, type) {
    return () => {
      this.props.onSelectPatientDetail(patient, type);
    };
  }

  render() {
    let loadingIndicator;
    if (this.props.isLoading) {
      loadingIndicator = <ActivityOverlay />;
    }

    const patientList = this.props.patients;

    const patientListItems = [];
    if (patientList && patientList.length) {
      patientList.forEach((patient) => {
        patientListItems.push((
          <List.Item
            key={patient.id}
            content={
              <ItemView
                className="orion-ClinicalItemView"
                displays={[
                  <ItemDisplay text={patient.name} />,
                  <ItemDisplay text={patient.status} />,
                ]}
                comment={
                  <ItemComment text={patient.comment} />
                }
                endAccessory={
                  <ButtonGroup>
                    <ButtonGroup.Button onClick={this.showPatientDetail(patient, 'modal')} icon={<IconInformation />} key="MODAL" />
                    <ButtonGroup.Button onClick={this.showPatientDetail(patient, 'panel')} icon={<IconPanelRight />} key="PANEL" />
                  </ButtonGroup>
                }
              />
            }
          />
        ));
      });
    }

    return (
      <ContentContainer
        className="orion-PatientList"
        header={(
          <NavigationHeader title="Patient List" app={this.props.app}>
            {this.props.onRefresh && <Button key="Refresh" onClick={this.props.onRefresh} icon={<IconRefresh isSpin={this.props.isLoading} />} />}
          </NavigationHeader>
        )}
        fill
      >
        {loadingIndicator}
        <List isDivided>
          {patientListItems}
        </List>
      </ContentContainer>
    );
  }
}

PatientList.propTypes = propTypes;

export default PatientList;
