import React, { useState, useRef, useContext } from 'react';
import ItemDisplay from 'terra-clinical-item-display';
import List, { Item } from 'terra-list';
import Popup from 'terra-popup';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import ToggleButton from 'terra-toggle-button';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';

const fullText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg. His treatment may have potential side effects such as dizziness and headaches. His symptoms have been manageable, if any side effects or concerns come up, consult with the doctor immediately.';

const TruncatedTextExample = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [showFullText, setShowFulText] = useState(false);
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
      <Button onClick={disclose} text="Show full text dialog" variant="de-emphasis" />
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
        text="Show full text popup"
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

  const showFullTextToggleExample = (
    <Item isSelectable hasChevron>
      <ItemDisplay text="Toggle Truncation Example" textStyle="strong" isTruncated />
      {showFullText ? (
        <ItemDisplay text={fullText} textStyle="secondary" />
      ) : (
        <ItemDisplay text={fullText} textStyle="secondary" isTruncated />
      )}
      <Button
        onClick={() => setShowFulText(!showFullText)}
        text="Show full text"
        variant="de-emphasis"
      />
    </Item>
  );

  const buttonToggleExample = (
    <Item isSelectable hasChevron>
      <ItemDisplay text="Toggle button example" textStyle="strong" isTruncated />
      <ItemDisplay text={fullText} textStyle="secondary" isTruncated />
      <ToggleButton closedButtonText="Toggle full text">
        <ItemDisplay text={fullText} textStyle="secondary" />
      </ToggleButton>
    </Item>
  );

  return (
    <>
      <List>
        {popupExample}
        {modalExample}
        {showFullTextToggleExample}
        {buttonToggleExample}
      </List>
    </>
  );
};

export default TruncatedTextExample;
