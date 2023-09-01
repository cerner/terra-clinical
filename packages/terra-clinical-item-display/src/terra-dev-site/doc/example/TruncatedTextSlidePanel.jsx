import React, { useContext } from 'react';
import classNamesBind from 'classnames/bind';
import ActionHeader from 'terra-action-header/lib/ActionHeader';
import ContentContainer from 'terra-content-container/lib/ContentContainer';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import List, { Item } from 'terra-list/lib/index';
import SlidePanelManager from 'terra-application/lib/slide-panel-manager';
import ItemDisplay from 'terra-clinical-item-display';
import PropTypes from 'prop-types';
import styles from './Example.module.scss';

const cx = classNamesBind.bind(styles);

const patientDetails = [
  {
    key: 'mr-james-1',
    previewText: 'Mr. James is currently receiving outpatient treatment.',
    text: 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.',
  },
  {
    key: 'mr-smith-2',
    previewText: 'Mr. Smith is currently receiving outpatient treatment.',
    text: 'Mr. Smith is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.',
  },
  {
    key: 'mr-jones-3',
    previewText: 'Mr. Jones is currently receiving outpatient treatment.',
    text: 'Mr. Jones is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg.',
  },
];

const mainHeader = (
  <ActionHeader text="Patient Details" />
);

function DisclosureComponent({ text }) {
  return (
    <ContentContainer fill>
      <DisclosureManagerHeaderAdapter title="Patient Details" />
      <div>
        <p>{text}</p>
      </div>
    </ContentContainer>
  );
}

DisclosureComponent.propTypes = {
  text: PropTypes.string,
};

const ContentComponent = () => {
  const disclosureManager = useContext(DisclosureManagerContext);
  return (
    <ContentContainer header={mainHeader}>
      <p id="list-title">Select an item from the list to view its full contents:</p>
      <List
        ariaDescription="Select an item from the list to view its full contents."
        role="listbox"
      >
        {patientDetails.map((details) => (
          <Item
            key={details.key}
            isSelectable
            hasChevron
            onSelect={() => {
              disclosureManager.disclose({
                preferredType: 'panel',
                size: 'small',
                content: {
                  key: details.key,
                  component: (
                    <DisclosureComponent text={details.text} />
                  ),
                },
              });
            }}
          >
            <p><ItemDisplay className={cx('item-display')} text={details.previewText} isTruncated /></p>
          </Item>
        ))}
      </List>
    </ContentContainer>
  );
};

export default function TruncatedTextSlidePanelExample() {
  return (
    <SlidePanelManager mainAriaLabel="Patient details">
      <ContentComponent />
    </SlidePanelManager>
  );
}
