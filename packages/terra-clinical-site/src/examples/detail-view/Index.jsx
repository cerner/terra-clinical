import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-detail-view/docs/README.md';
import { version } from 'terra-clinical-detail-view/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import DetailViewSrc from '!raw-loader!terra-clinical-detail-view/src/DetailView.jsx';
import DetailListSrc from '!raw-loader!terra-clinical-detail-view/src/DetailList.jsx';
import DetailListItemSrc from '!raw-loader!terra-clinical-detail-view/src/DetailListItem.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example files
import DetailViewDivided from './DetailViewDivided';
import DetailViewNoDivider from './DetailViewNoDivider';

const DetailViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Detail View</h2>
    <PropsTable id="detail_view_props" src={DetailViewSrc} />
    <PropsTable id="detail_list_props" src={DetailListSrc} />
    <PropsTable id="detail_list_item_props" src={DetailListItemSrc} />
    <br />
    <h2 id="Divided">Divided Detail View</h2>
    <DetailViewDivided />
    <h2 id="NoDivider">Non-Divided Detail View</h2>
    <DetailViewNoDivider />
  </div>
);

export default DetailViewExamples;
