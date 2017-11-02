import React from 'react';
import ItemCollection from '../../src/ItemCollection';
import Utils from '../../src/_ItemCollectionUtils';

const defaultChildElements = {
  startAccessory: <p>S</p>,
  children: [
    <ItemCollection.Display text="Display 1" />,
    <ItemCollection.Display text="Display 2" />,
    <ItemCollection.Display text="Display 3" />,
    <ItemCollection.Display text="Display 4" />,
    <ItemCollection.Display text="Display 5" />,
    <ItemCollection.Display text="Display 6" />,
    <ItemCollection.Display text="Display 7" />,
    <ItemCollection.Display text="Display 8" />,
  ],
  comment: <ItemCollection.Comment text="comment" />,
  endAccessory: <p>E</p>,
};

const noRequiredElements = { startAccessoryRequired: false, displaysRequired: 0, commentRequired: false, endAccessoryRequired: false };

describe('addAnyMissingListElements Tests', () => {
  it('should use the start accessory when startAccessoryRequired', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { startAccessoryRequired: true });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: <p>S</p>, hasStartAccessory: true, children: [], comment: null, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should set hasStartAccessory={true} when startAccessoryRequired & startAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { startAccessoryRequired: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { startAccessory: null });

    const listPieces = Utils.addAnyMissingListElements(missingChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: true, children: [], comment: null, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the correct displays when displaysRequired is specified', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { displaysRequired: 1 });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [<ItemCollection.Display text="Display 1" />], comment: null, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should only allow 8 displays when displaysRequired is more than maxDisplays', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { displaysRequired: 9 });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: null,
      hasStartAccessory: false,
      children: [
        <ItemCollection.Display text="Display 1" />,
        <ItemCollection.Display text="Display 2" />,
        <ItemCollection.Display text="Display 3" />,
        <ItemCollection.Display text="Display 4" />,
        <ItemCollection.Display text="Display 5" />,
        <ItemCollection.Display text="Display 6" />,
        <ItemCollection.Display text="Display 7" />,
        <ItemCollection.Display text="Display 8" />,
      ],
      comment: null,
      endAccessory: null,
      hasEndAccessory: false,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the comment when commentRequired', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { commentRequired: true });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [], comment: <ItemCollection.Comment text="comment" />, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the end accessory when endAccessoryRequired', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { endAccessoryRequired: true });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [], comment: null, endAccessory: <p>E</p>, hasEndAccessory: true };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should set hasEndAccessory={true} when endAccessoryRequired & endAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { endAccessoryRequired: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { endAccessory: null });

    const listPieces = Utils.addAnyMissingListElements(missingChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [], comment: null, endAccessory: null, hasEndAccessory: true };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('does not add elements when all are required & none missing', () => {
    const requiredElements = { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true };

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: <p>S</p>,
      hasStartAccessory: true,
      children: [
        <ItemCollection.Display text="Display 1" />,
        <ItemCollection.Display text="Display 2" />,
        <ItemCollection.Display text="Display 3" />,
        <ItemCollection.Display text="Display 4" />,
        <ItemCollection.Display text="Display 5" />,
        <ItemCollection.Display text="Display 6" />,
        <ItemCollection.Display text="Display 7" />,
        <ItemCollection.Display text="Display 8" />,
      ],
      comment: <ItemCollection.Comment text="comment" />,
      endAccessory: <p>E</p>,
      hasEndAccessory: true,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });
});

describe('addAnyMissingTableElements Tests', () => {
  it('should use the start accessory when startAccessoryRequired', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { startAccessoryRequired: true });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: <p>S</p>, children: [], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a start accessory when startAccessoryRequired & startAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { startAccessoryRequired: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { startAccessory: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: ' ', children: [], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the correct displays when displaysRequired is specified', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { displaysRequired: 1 });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [<ItemCollection.Display text="Display 1" />], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add the correct displays when displaysRequired is specified & children are missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { displaysRequired: 3 });
    const missingChildElements = Object.assign({}, defaultChildElements, { children: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [' ', ' ', ' '], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should only allow 8 displays when displaysRequired is more than maxDisplays', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { displaysRequired: 9 });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null,
      children: [
        <ItemCollection.Display text="Display 1" />,
        <ItemCollection.Display text="Display 2" />,
        <ItemCollection.Display text="Display 3" />,
        <ItemCollection.Display text="Display 4" />,
        <ItemCollection.Display text="Display 5" />,
        <ItemCollection.Display text="Display 6" />,
        <ItemCollection.Display text="Display 7" />,
        <ItemCollection.Display text="Display 8" />,
      ],
      comment: null,
      endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the comment when commentRequired', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { commentRequired: true });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: <ItemCollection.Comment text="comment" />, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a comment when commentRequired & comment is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { commentRequired: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { comment: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: ' ', endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the end accessory when endAccessoryRequired', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { endAccessoryRequired: true });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: null, endAccessory: <p>E</p> };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a end accessory when endAccessoryRequired & endAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { endAccessoryRequired: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { endAccessory: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: null, endAccessory: ' ' };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('does not add elements when all are required & none missing', () => {
    const requiredElements = { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true };

    const tablePieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: <p>S</p>,
      hasStartAccessory: true,
      children: [
        <ItemCollection.Display text="Display 1" />,
        <ItemCollection.Display text="Display 2" />,
        <ItemCollection.Display text="Display 3" />,
        <ItemCollection.Display text="Display 4" />,
        <ItemCollection.Display text="Display 5" />,
        <ItemCollection.Display text="Display 6" />,
        <ItemCollection.Display text="Display 7" />,
        <ItemCollection.Display text="Display 8" />,
      ],
      comment: <ItemCollection.Comment text="comment" />,
      endAccessory: <p>E</p>,
      hasEndAccessory: true,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });
});
