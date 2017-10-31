import React from 'react';
import ItemCollection from '../../../src/ItemCollection';
// import Header from '../../../../terra-clinical-header/lib/Header';

const requiredElements = { startAccessoryRequired: true, displaysRequired: 3, commentRequired: true, endAccessoryRequired: true };

const startContent = <div id="headerTest--startContent" style={{ backgroundColor: 'black', height: '30px', width: '100px', margin: '0 10px 0 0' }} />;
const endContent = <div id="headerTest--endContent" style={{ backgroundColor: 'black', height: '30px', width: '100px', margin: '0 0 0 10px' }} />;

const DefaultItemCollection = props => (
  <ItemCollection id="ItemCollection" requiredElements={requiredElements} {...props}>
    <ItemCollection.Header title="HELLO" startContent={startContent} endContent={endContent} />
    <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
    <ItemCollection.Header title="World" isSubheader />
    <ItemCollection.Item comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
    <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />}>
      <ItemCollection.Display text="Display 1" />
      <ItemCollection.Display text="Display 2" />
      <ItemCollection.Display text="Display 3" />
    </ItemCollection.Item>
  </ItemCollection>
);

// const DefaultItemCollection = () => (
//   <ItemCollection />
// );
//
// const DefaultItemCollection = () => (
//   <div>
//     <table>
//       <tbody>
//         <Item display="table" startAccessory={<p>S</p>} comment={<Item.Comment text="test comment" />} endAccessory={<p>S</p>}>
//           <Item.Display text="Display 1" />
//           <Item.Display text="Display 2" />
//           <Item.Display text="Display 3" />
//         </Item>
//       </tbody>
//     </table>
//     <Item startAccessory={<p>S</p>} comment={<Item.Comment text="test comment" />} endAccessory={<p>S</p>} />
//     <Item startAccessory={<p>S</p>} comment={<Item.Comment text="test comment" />} endAccessory={<p>S</p>} />
//     <Item startAccessory={<p>S</p>} comment={<Item.Comment text="test comment" />} endAccessory={<p>S</p>} />
//     <Item startAccessory={<p>S</p>} comment={<Item.Comment text="test comment" />} endAccessory={<p>S</p>} />
//   </div>
// );

export default DefaultItemCollection;
