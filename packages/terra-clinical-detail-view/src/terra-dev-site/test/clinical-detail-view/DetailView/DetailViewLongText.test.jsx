import React from 'react';

import DetailView from '../../../../DetailView';

const longText = 'Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat.Duisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariatur.Excepteursintoccaecatcupidatatnonproident,suntinculpaquiofficiadeseruntmollitanimidestlaborum.';
const item = (<p>{longText}</p>);
const item2 = (<p>A Detail List Item to prove float concept when screen readjusts smaller.</p>);
const accessoryElement = (<p>{longText}</p>);

const DetailViewLongText = () => (
  <DetailView
    title={longText}
    secondaryTitles={[longText, longText]}
    subtitles={[longText, longText]}
    graph={
      <div
        style={{
          border: '1px solid black', height: '20em', width: '25em', marginBottom: '0.714rem',
        }}
      >
      This is where any visualizations would go
      </div>
    }
    accessory={accessoryElement}
    details={[
      (
        <DetailView.DetailList title="Detail List Title" key="detailInfo-1">
          <DetailView.DetailListItem item={item} />
          <DetailView.DetailListItem item={item} />
          <DetailView.DetailListItem item={item2} />
          <DetailView.DetailListItem item={item} />
          <DetailView.DetailListItem item={item} />
        </DetailView.DetailList>
      ),
    ]}
    footer={longText}
    isDivided={false}
    id="DetailView"
    isSmallerTitles={false}
  />
);

export default DetailViewLongText;
