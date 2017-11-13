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

const noRequiredElements = { hasStartAccessory: false, numberOfDisplays: 0, hasComment: false, hasEndAccessory: false };

describe('addAnyMissingListElements Tests', () => {
  it('should use the start accessory when hasStartAccessory', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasStartAccessory: true });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: <p>S</p>, hasStartAccessory: true, children: [], comment: null, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should set hasStartAccessory={true} when hasStartAccessory & startAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasStartAccessory: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { startAccessory: null });

    const listPieces = Utils.addAnyMissingListElements(missingChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: true, children: [], comment: null, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the correct displays when numberOfDisplays is specified', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { numberOfDisplays: 1 });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [<ItemCollection.Display text="Display 1" />], comment: null, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should only allow 8 displays when numberOfDisplays is more than maxDisplays', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { numberOfDisplays: 9 });

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

  it('should use the comment when hasComment', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasComment: true });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [], comment: <ItemCollection.Comment text="comment" />, endAccessory: null, hasEndAccessory: false };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the end accessory when hasEndAccessory', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasEndAccessory: true });

    const listPieces = Utils.addAnyMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [], comment: null, endAccessory: <p>E</p>, hasEndAccessory: true };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should set hasEndAccessory={true} when hasEndAccessory & endAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasEndAccessory: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { endAccessory: null });

    const listPieces = Utils.addAnyMissingListElements(missingChildElements, requiredElements);

    const expectedListPieces = { startAccessory: null, hasStartAccessory: false, children: [], comment: null, endAccessory: null, hasEndAccessory: true };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('does not add elements when all are required & none missing', () => {
    const requiredElements = { hasStartAccessory: true, numberOfDisplays: 8, hasComment: true, hasEndAccessory: true };

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
  it('should use the start accessory when hasStartAccessory', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasStartAccessory: true });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: <p>S</p>, children: [], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a start accessory when hasStartAccessory & startAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasStartAccessory: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { startAccessory: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: ' ', children: [], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the correct displays when numberOfDisplays is specified', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { numberOfDisplays: 1 });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [<ItemCollection.Display text="Display 1" />], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add the correct displays when numberOfDisplays is specified & children are missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { numberOfDisplays: 3 });
    const missingChildElements = Object.assign({}, defaultChildElements, { children: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [' ', ' ', ' '], comment: null, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the comment when hasComment', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasComment: true });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: <ItemCollection.Comment text="comment" />, endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a comment when hasComment & comment is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasComment: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { comment: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: ' ', endAccessory: null };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the end accessory when hasEndAccessory', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasEndAccessory: true });

    const tablePieces = Utils.addAnyMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: null, endAccessory: <p>E</p> };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a end accessory when hasEndAccessory & endAccessory is missing', () => {
    const requiredElements = Object.assign({}, noRequiredElements, { hasEndAccessory: true });
    const missingChildElements = Object.assign({}, defaultChildElements, { endAccessory: null });

    const tablePieces = Utils.addAnyMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = { startAccessory: null, children: [], comment: null, endAccessory: ' ' };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('does not add elements when all are required & none missing', () => {
    const requiredElements = { hasStartAccessory: true, numberOfDisplays: 8, hasComment: true, hasEndAccessory: true };

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
