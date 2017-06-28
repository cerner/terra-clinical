# Terra Clinical DetailView

Detail Views allows you to create a view with text at different levels of importance. A detail view can contain a title, subtitles, a graph, a footer and a list of elements that can display information at a more detailed level.

A Detail List is a structural subcomponent of Detail View indented to be used within the details prop. A Detail List accepts and arranges DetailListItem elements in a flexbox layout that wraps the list of items by row.

Detail List Items are the elements to be placed within a Detail List. A Detail List Item accepts one element item and applies a minimum width of 50% so that the element spans at minimum half of the Detail List. This allows the Detail List to have either one or two items per row depending on the width of the item content in each item.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-detail-view`
  - `yarn add terra-clinical-detail-view`

## Usage

```jsx
import React from 'react';
import DetailView from 'terra-clinical-detail-view';

<DetailView {
  title={<div className="terra-Title terra-Title--large">Header</div>}
  subtitles={[<DetailView.Subtitle text="Subtitle 1" key="Subtitle1" />, <DetailView.Subtitle text="Subtitle 2" key="Subtitle2" />]}
  graph={<div> This is where a graph would go </div>}
  details={[
    <DetailView.DetailList>
      <DetailView.DetailListItem item={<p>Item</p>}
    <DetailView.DetailList/>]}
  footer="Footer text"
  isDivided
} />
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
