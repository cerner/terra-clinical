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

const noRequiredElements = {
  hasStartAccessory: false, numberOfDisplays: 0, hasComment: false, hasEndAccessory: false,
};

describe('addMissingListElements Tests', () => {
  it('should use the start accessory when hasStartAccessory', () => {
    const requiredElements = { ...noRequiredElements, hasStartAccessory: true };

    const listPieces = Utils.addMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: <p>S</p>, reserveStartAccessorySpace: true, children: [], comment: null, endAccessory: null,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should set hasStartAccessory={true} when hasStartAccessory & startAccessory is missing', () => {
    const requiredElements = { ...noRequiredElements, hasStartAccessory: true };
    const missingChildElements = { ...defaultChildElements, startAccessory: null };

    const listPieces = Utils.addMissingListElements(missingChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: null, reserveStartAccessorySpace: true, children: [], comment: null, endAccessory: null,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the correct displays when numberOfDisplays is specified', () => {
    const requiredElements = { ...noRequiredElements, numberOfDisplays: 1 };

    const listPieces = Utils.addMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: null, reserveStartAccessorySpace: false, children: [<ItemCollection.Display text="Display 1" />], comment: null, endAccessory: null,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should only allow 8 displays when numberOfDisplays is more than maxDisplays', () => {
    const requiredElements = { ...noRequiredElements, numberOfDisplays: 9 };

    const listPieces = Utils.addMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: null,
      reserveStartAccessorySpace: false,
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
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the comment when hasComment', () => {
    const requiredElements = { ...noRequiredElements, hasComment: true };

    const listPieces = Utils.addMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: null, reserveStartAccessorySpace: false, children: [], comment: <ItemCollection.Comment text="comment" />, endAccessory: null,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('should use the end accessory when hasEndAccessory', () => {
    const requiredElements = { ...noRequiredElements, hasEndAccessory: true };

    const listPieces = Utils.addMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: null, reserveStartAccessorySpace: false, children: [], comment: null, endAccessory: <p>E</p>,
    };
    expect(listPieces).toEqual(expectedListPieces);
  });

  it('does not add elements when all are required & none missing', () => {
    const requiredElements = {
      hasStartAccessory: true, numberOfDisplays: 8, hasComment: true, hasEndAccessory: true,
    };

    const listPieces = Utils.addMissingListElements(defaultChildElements, requiredElements);

    const expectedListPieces = {
      startAccessory: <p>S</p>,
      reserveStartAccessorySpace: true,
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
    expect(listPieces).toEqual(expectedListPieces);
  });
});

describe('addMissingTableElements Tests', () => {
  it('should use the start accessory when hasStartAccessory', () => {
    const requiredElements = { ...noRequiredElements, hasStartAccessory: true };

    const tablePieces = Utils.addMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: <p>S</p>, children: [], comment: null, endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a start accessory when hasStartAccessory & startAccessory is missing', () => {
    const requiredElements = { ...noRequiredElements, hasStartAccessory: true };
    const missingChildElements = { ...defaultChildElements, startAccessory: null };

    const tablePieces = Utils.addMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: ' ', children: [], comment: null, endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the correct displays when numberOfDisplays is specified', () => {
    const requiredElements = { ...noRequiredElements, numberOfDisplays: 1 };

    const tablePieces = Utils.addMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null, children: [<ItemCollection.Display text="Display 1" />], comment: null, endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add the correct displays when numberOfDisplays is specified & children are missing', () => {
    const requiredElements = { ...noRequiredElements, numberOfDisplays: 3 };
    const missingChildElements = { ...defaultChildElements, children: null };

    const tablePieces = Utils.addMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null, children: [' ', ' ', ' '], comment: null, endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the comment when hasComment', () => {
    const requiredElements = { ...noRequiredElements, hasComment: true };

    const tablePieces = Utils.addMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null, children: [], comment: <ItemCollection.Comment text="comment" />, endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a comment when hasComment & comment is missing', () => {
    const requiredElements = { ...noRequiredElements, hasComment: true };
    const missingChildElements = { ...defaultChildElements, comment: null };

    const tablePieces = Utils.addMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null, children: [], comment: ' ', endAccessory: null,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should use the end accessory when hasEndAccessory', () => {
    const requiredElements = { ...noRequiredElements, hasEndAccessory: true };

    const tablePieces = Utils.addMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null, children: [], comment: null, endAccessory: <p>E</p>,
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('should add a end accessory when hasEndAccessory & endAccessory is missing', () => {
    const requiredElements = { ...noRequiredElements, hasEndAccessory: true };
    const missingChildElements = { ...defaultChildElements, endAccessory: null };

    const tablePieces = Utils.addMissingTableElements(missingChildElements, requiredElements);

    const expectedTablePieces = {
      startAccessory: null, children: [], comment: null, endAccessory: ' ',
    };
    expect(tablePieces).toEqual(expectedTablePieces);
  });

  it('does not add elements when all are required & none missing', () => {
    const requiredElements = {
      hasStartAccessory: true, numberOfDisplays: 8, hasComment: true, hasEndAccessory: true,
    };

    const tablePieces = Utils.addMissingTableElements(defaultChildElements, requiredElements);

    const expectedTablePieces = {
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
    expect(tablePieces).toEqual(expectedTablePieces);
  });
});
