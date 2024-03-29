import React, { useState, useRef, useContext } from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import List, { Item } from 'terra-list';
import Popup from 'terra-popup';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import ToggleButton from 'terra-toggle-button';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';

const fullText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg. His treatment may have potential side effects such as dizziness and headaches. His symptoms have been manageable, if any side effects or concerns come up, consult with the doctor immediately.';

const TruncatedText = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const setButtonNode = (node) => {
    popupRef.current = node;
  };

  const handleButtonClick = () => {
    if (!popupOpen) {
      document.querySelector('#root').setAttribute('inert', 'true');
    }
    setPopupOpen(true);
  };

  const handleRequestClose = () => {
    setPopupOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    popupRef.current.focus();
  };

  const FullTextModalContent = () => {
    const disclosureManager = useContext(DisclosureManagerContext);

    const disclose = () => {
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'tiny',
        content: {
          key: 'text-key',
          component: (
            <>
              <DisclosureManagerHeaderAdapter />
              <ItemDisplay text={fullText} />
            </>
          ),
        },
      });
    };

    return (
      <Button onClick={disclose} text="Show full truncated text dialog" variant="de-emphasis" />
    );
  };

  const modalExample = (
    <Item isSelectable hasChevron>
      <ItemDisplay text="Modal Example" textStyle="strong" isTruncated />
      <ItemDisplay text={fullText} textStyle="secondary" isTruncated />
      <ModalManager>
        <FullTextModalContent />
      </ModalManager>
    </Item>
  );

  const popupExample = (
    <Item isSelectable hasChevron>
      <ItemDisplay text="Popup Example" textStyle="strong" isTruncated />
      <ItemDisplay text={fullText} textStyle="secondary" isTruncated />
      <Button
        onClick={handleButtonClick}
        refCallback={setButtonNode}
        text="Show full truncated text popup"
        variant="de-emphasis"
      />
      <Popup
        isOpen={popupOpen}
        targetRef={() => popupRef.current}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
      >
        <ItemDisplay text={fullText} />
      </Popup>
    </Item>
  );

  const buttonToggleExample = (
    <>
      <Item isSelectable hasChevron>
        <ItemDisplay text="Toggle button example" textStyle="strong" isTruncated />
        <ItemDisplay text={fullText} textStyle="secondary" isTruncated />
      </Item>
      {/* ToggleButton moved outside Item so ItemDisplay text is navigable */}
      <ToggleButton closedButtonText="Toggle full truncated text">
        <ItemDisplay text={fullText} textStyle="secondary" />
      </ToggleButton>
    </>
  );

  return (
    <List>
      {buttonToggleExample}
      {modalExample}
      {popupExample}
    </List>
  );
};

export default TruncatedText;
