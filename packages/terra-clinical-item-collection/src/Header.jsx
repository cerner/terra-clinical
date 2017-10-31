import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
import ItemView from 'terra-clinical-item-view';
import List from 'terra-list';
import Table from 'terra-table';
import 'terra-base/lib/baseStyles';

import Header from '../../terra-clinical-header/lib/Header';

function createTableHeader(content, colSpan, itemIndex) {
  const headerContent = (
    <Header
      style={{ backgroundColor: 'transparent' }}
      title={content.title}
      startContent={content.startContent}
      endContent={content.endContent}
      isSubheader={content.isSubheader}
    />
  );

  if (content.isSubheader) {
    return (
      <Table.Subheader style={{ padding: 0 }} content={headerContent} colSpan={colSpan} key={itemIndex} />
    );
  }

  return (
    <Table.Header>
      <th colSpan={colSpan} style={{ padding: 0 }}>
        {headerContent}
      </th>
    </Table.Header>
  );
}

function createListHeader(content, itemIndex) {
  const headerContent = (
    <Header
      title={content.title}
      startContent={content.startContent}
      endContent={content.endContent}
      isSubheader={content.isSubheader}
    />
  );

  return (
    <List.Item key={itemIndex} content={headerContent} onChange={undefined} isSelected={false} isSelectable={false} />
  );
}

const Item = (props) => {
  const { ...otherItemProps } = props;
  // The view, index and colSpan values are set by the ListView & TableView components.
  const { view, index, colSpan, ...content } = otherItemProps;

  if (view === 'table') {
    return createTableHeader(content, colSpan, index);
  }

  return createListHeader(content, index);
};

// Item.propTypes = propTypes;
Item.Display = ItemView.Display;
Item.Comment = ItemView.Comment;

export default Item;
