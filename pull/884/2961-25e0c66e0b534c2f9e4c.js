"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[2961],{22863:function(e,t,i){var a=i(64836);t.Z=void 0;var n=a(i(67294)),l=a(i(45697)),r=a(i(47166)),s=a(i(17422)),o=r.default.bind(s.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,i=e.name,a=e.url,l=e.version,r=n.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(i,"/v/").concat(l)},n.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:o("badge-version")},"v".concat(l))),s=t?n.default.createElement("a",{className:o("badge"),href:t},n.default.createElement("span",{className:o("badge-name")},"github"),n.default.createElement("span",{className:o("badge-version")},"source")):void 0;return n.default.createElement("div",{className:o("badge-container")},r,s)};c.propTypes=d;var m=c;t.Z=m},63755:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});i(67294);var a=i(81254),n=i(34261),l=i(83620),r=i(25970),s=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c={},m="wrapper";function p(e){var t=e.components,i=d(e,s);return(0,a.mdx)(m,o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra-clinical-detail-view"},"Accessibility Guide for Terra Clinical Detail View"),(0,a.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,a.mdx)("p",null,"Terra Clinical Detail View allows you to create a view with text at different levels of importance. Improper usage of this component may prevent end users from understanding content and necessary context to interact with the page. "),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Pages with well-structured content are essential for many web users, for example:"),(0,a.mdx)("ul",{parentName:"blockquote"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People with cognitive and learning disabilities")," can more easily find and prioritize content on the page."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using screen readers")," can skip to the main content directly and navigate to sections that are important to them."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Keyboard users")," can browse pages and their sections more efficiently. Otherwise, users have to press the tab key multiple times to navigate through all links in each section."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using software that only shows the main content")," of a web page, such as people with cognitive disabilities, will receive better results if the page structure is correctly marked up."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People with visual impairments"),", including people with low vision, have cues that provide orientation on the page and in the content."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Mobile web users")," often have access to a so-called “reader” or “reading” mode that will only show the main content of the page if it is correctly marked up."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using certain browser plugins")," can use landmark roles to jump to specific sections on a page.")),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/tutorials/page-structure/"},"Page Structure Concepts (W3C: Web Accessibility Tutorials)")),(0,a.mdx)("a",{parentName:"p",href:"/terra-clinical/pull/884/components/terra-clinical-detail-view/clinical-detail-view/accessibility-guide"},(0,a.mdx)("sup",null,"[1]")))),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,a.mdx)("h4",{id:"maintaining-a-hierarchical-content-structure-on-the-page"},"Maintaining a hierarchical content structure on the page:"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Sighted users perceive structure and relationships through various visual cues — headings are often in a larger, bold font separated from the content they represent."),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"W3C: Info and Relationships (Level A)")))),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},'Visual readers can identify headings by scanning pages for text of a larger size or a different color/font face. Blind users/users with low vision on a screen reader are not able to see these visual distinctions, so increasing the font size is not a sufficient cue. Instead, the headings must be semantically "tagged" so that a screen reader can identify headings, navigate the page and provide structure as a page or document table of contents'),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://accessibility.psu.edu/headingshtml/"},"Accessibility and Usability at Penn State: Heading tags")))),(0,a.mdx)("p",null,"The Clinical Detail View component creates a view with text at different levels of importance. The HTML heading tag is used to create the structure of the page. It is critical to screen reader users that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"level")," ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," be appropriately set to a value that best represents the placement of the main Clinical Detail View heading in the existing structure of the page. Think about headings as creating the outline of a page. Each heading level should be set to represent that outline structure. Screen reader users rely on the heading levels to understand the structure of information on the page."),(0,a.mdx)(n.qX,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("p",null,"It is highly recommended to utilize the ",(0,a.mdx)("inlineCode",{parentName:"p"},"level")," ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," to set the appropriate heading level of the Title to match the hierarchical structure of the page. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"level")," ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," will also set the SecondaryTitles and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"title")," of the Detail List structures to the appropriate heading level to ensure a hierarchical content structure."),(0,a.mdx)("p",null,"Code Example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'const item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />);\n\n<DetailView\n  title="Multiple Ingredients"\n  level={4}\n  secondaryTitles={[\'M. V. I. Adult 10 mL = 10 mL\', \'Sodium bicarbonate 8.4% 50 mL\', \'Dextrose 5% in Water 1000 mL\']}\n  details={[\n    (\n      <DetailView.DetailList title={detail1title} key="Indicators" isLabelValuePairList>\n        <DetailView.DetailListItem item={item1} />\n      </DetailView.DetailList>\n    ),\n  ]}\n/>\n'))),(0,a.mdx)("h4",{id:"named-section-behavior"},"Named Section Behavior:"),(0,a.mdx)("p",null,"All of the content related to the Clinical Detail View should be understood as a section and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"title")," prop is used to programmatically create a label for the region.  It is critical to screen reader users that the title ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," be set to a value that best represents the region that groups the details in the section within the page. Screen reader users rely on the title to know the beginning and end of a region, and to navigate to the specific region on the page. Leaving the title off of the section hurts the accessibility of the component by removing the programmatic indication of the region on the page. The region/section won't be announced by Assistive Technology (AT) if there is no programmatically associated label. "),(0,a.mdx)("h4",{id:"caption-for-graphs"},"Caption for graphs:"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"graph")," ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," is used to set visualization content such as graphs, or images based on the data. This graph ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," is wrapped in an ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"},(0,a.mdx)("inlineCode",{parentName:"a"},"<figure>"))," element.\nFigure captions help the users understand and correctly interpret the visualization.\nIt is critical to screen reader users that the caption be set with ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"},(0,a.mdx)("inlineCode",{parentName:"a"},"<figcaption>"))," element as the first, or the last element to provide the caption for the figure."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"Note: figcaption content is not a replacement for the alt text that needs to be supplied for images in the figure element.\n")),(0,a.mdx)("p",null,"When using figcaption element, which requires a parent element, it is necessary to wrap the elements within a ",(0,a.mdx)("inlineCode",{parentName:"p"},"<React.Fragment>")," block."),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(r.Z,{mdxType:"DetailViewDivided"})),(0,a.mdx)("h4",{id:"associate-label-value-pairs"},"Associate label-value pairs:"),(0,a.mdx)("p",null,"The DetailList sub-component is often used to create a list of items associated together. An HTML unordered list or a description list is used to create the visual and programmatic association of the list. Content that is supplied for description lists includes ",(0,a.mdx)("inlineCode",{parentName:"p"},"<dt>")," list item content and ",(0,a.mdx)("inlineCode",{parentName:"p"},"<dd>")," list item content. ",(0,a.mdx)("inlineCode",{parentName:"p"},"<dt>")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"<dd>")," content must be logically connected. With label-value pairs in description lists, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<dt>")," holds the “label” and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<dd>")," holds the “value” associated with the label.  The two are always together.  "),(0,a.mdx)(n.qX,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("p",null,"It is highly recommended that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"isLabelValuePairList")," ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," is set to true when the list contains label-value pairs. By setting this prop to true, we use the HTML description list to create the programmatic structure of the label (a term) to a value (a definition). This semantic structure is critical to support users of assistive technology so that they can properly relate information in the list together. The DetailList should be understood as a description list when it contains label-value pairs and the DetailList should be understood as an unordered list when it contains other HTML elements passed in by the consumer."),(0,a.mdx)("p",null,"Code Example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'const detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" isChildOfDescriptionList />);\nconst detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" isChildOfDescriptionList />);\n\nconst detail2item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />);\nconst detail2item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" isChildOfDescriptionList />);\n\nconst detail3item1 = (\n  <div className={cx(\'indicator-container\')}>\n    <div className={cx(\'icon\')}>\n      <IconCritical a11yLabel="Critical Icon" />\n    </div>\n    <div className={cx(\'text\')}>\n      Immediate Priority\n    </div>\n  </div>\n);\nconst detail3item2 = (\n  <div className={cx(\'indicator-container\')}>\n    <div className={cx(\'icon\')}>\n      <IconPharmacyReview a11yLabel="Pharmacy Review" />\n    </div>\n    <div className={cx(\'text\')}>\n      Pharmacy Review\n    </div>\n  </div>\n);\n\n<DetailView\n    title="Mother"\n    level={3}\n    subtitles={[\'Martha (58 years)\', \'[second line for subtitles]\']}\n    details={[\n      (\n        <DetailView.DetailList title={detail1title} key="order-info-1" isLabelValuePairList>\n          <DetailView.DetailListItem item={detail1item1} />\n          <DetailView.DetailListItem item={detail1item2} />\n        </DetailView.DetailList>\n      ),\n      (\n        <DetailView.DetailList title={detail2title} key="order-info-2" isLabelValuePairList>\n          <DetailView.DetailListItem item={detail2item1} />\n          <DetailView.DetailListItem item={detail2item2} />\n        </DetailView.DetailList>\n      ),\n      (\n        <DetailView.DetailList title={detail3title} key="order-info-3" >\n          <DetailView.DetailListItem item={detail3item1} />\n          <DetailView.DetailListItem item={detail3item2} />\n        </DetailView.DetailList>\n      ),\n    ]}\n  />\n'))),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, simply using Terra components will not automatically make a product accessible."),(0,a.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,a.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},(0,a.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},(0,a.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," - Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification"},(0,a.mdx)("strong",{parentName:"a"},"3.2.4 Consistent Identification"))," - Components that have the same functionality within a set of Web pages are identified consistently."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},(0,a.mdx)("strong",{parentName:"a"},"4.1.2 Name, Role, Value"))," - For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.")),(0,a.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"None identified"),(0,a.mdx)("li",{parentName:"ul"},"Report a problem with this component on ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-clinical/issues/new/choose"},(0,a.mdx)("strong",{parentName:"a"},"GitHub")))),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,a.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/page-structure/"},"W3C Page Structure"))))}p.isMDXComponent=!0},25970:function(e,t,i){i.d(t,{Z:function(){return u}});var a=i(67294),n=i(48844),l=i(81254),r=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d={};function c(e){var t=e.components,i=o(e,r);return(0,l.mdx)("wrapper",s({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport DetailView from 'terra-clinical-detail-view';\nimport classNames from 'classnames/bind';\nimport Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nimport styles from './DetailViewDivided.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst detail1title = 'Diabetes';\nconst detail1item1 = (<LabelValueView label=\"Age of onset\" textValue=\"38 years\" isChildOfDescriptionList />);\nconst detail1item2 = (<LabelValueView label=\"Reviewed\" textValue=\"07/10/2012 10:00AM\" isChildOfDescriptionList />);\nconst detail1item3 = (<LabelValueView label=\"Comments\" textValue=\"Based on the patient's blood glucose levels and medical history, I recommend that they continue to monitor their glucose levels regularly and adhere to a healthy diet and exercise regimen. It's important for the patient to attend regular follow-up appointments and communicate any concerns in symptoms.\" isChildOfDescriptionList />);\n\nconst detail2title = 'Hypertension';\nconst detail2item1 = (<LabelValueView label=\"Age of onset\" textValue=\"38 years\" isChildOfDescriptionList />);\nconst detail2item2 = (<LabelValueView label=\"Reviewed\" textValue=\"07/10/2012 10:00AM\" isChildOfDescriptionList />);\nconst detail2item3 = (<LabelValueView label=\"Comments\" textValue=\"Based on the patient's blood pressure readings and medical history, I recommend that they make lifestyle modifications such as reducing their salt intake, increasing physical activity, and losing weight if necessary. It's important for the patient to continue monitoring their blood pressure at home and attending regular follow-up appointment to assess the effectiveness of their treatment plan.\" isChildOfDescriptionList />);\n\nconst graphConfiguration = {\n  bindTo: '#graph-id',\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n    },\n    y: {\n      label: 'Temperature (degF)',\n      lowerLimit: 90,\n      upperLimit: 106,\n    },\n  },\n};\n\nconst dataset = {\n  key: 'uid_1',\n  label: {\n    display: 'Oral Temperature',\n  },\n  shape: Carbon.helpers.SHAPES.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 10, 5).toISOString(),\n      y: 96.5,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 98.7,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 97.4,\n    },\n  ],\n};\n\nconst DetailViewDivided = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfiguration);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <div className={cx('detail-view-divided')}>\n      <DetailView\n        title=\"Mother\"\n        level={3}\n        subtitles={['Martha (58 years)', '[second line for subtitles]']}\n        details={[\n          (\n            <DetailView.DetailList title={detail1title} key=\"order-info-1\" isLabelValuePairList>\n              <DetailView.DetailListItem item={detail1item1} />\n              <DetailView.DetailListItem item={detail1item2} />\n              <DetailView.DetailListItem item={detail1item3} />\n            </DetailView.DetailList>\n          ),\n          (\n            <DetailView.DetailList title={detail2title} key=\"order-info-2\" isLabelValuePairList>\n              <DetailView.DetailListItem item={detail2item1} />\n              <DetailView.DetailListItem item={detail2item2} />\n              <DetailView.DetailListItem item={detail2item3} />\n            </DetailView.DetailList>\n          ),\n        ]}\n        graph={(\n          <>\n            {/* Sets the caption for the graph. The `<figcaption>` tag has to be the first element or the last element of `<figure>` element.\n              Inside `DetailView` component, the `<figure>` tag wraps the graph prop like this `<figure>{graph}</figure>`.\n            */}\n            <figcaption className={cx('caption-text')}>Oral Temperature Graph - Degrees Fahrenheit (Y axis) vs Time (X axis)</figcaption>\n\n            {/* This div with the ID attribute is used by the graph config in `graphConfiguration` as well as\n              the APIs in `React.useEffect` above to insert in the graph content at run time. */}\n            <div id=\"graph-id\" />\n          </>\n        )}\n        footer=\"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM\"\n      />\n    </div>\n  );\n};\n\nexport default DetailViewDivided;\n\n")))}c.isMDXComponent=!0;var m=i(49271),p=i(13907),u=function(e){var t=e.title,i=e.description,l=e.isExpanded;return a.createElement(m.Z,{title:t||"Detail View Divided",description:i,example:a.createElement(n.Z,null),exampleCssSrc:a.createElement(p.Z,null),exampleSrc:a.createElement(c,null),isExpanded:l})}},83620:function(e,t,i){i.d(t,{C:function(){return l}});var a=i(67294),n=i(22863),l=function(e){var t=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-detail-view",name:"terra-clinical-detail-view",version:"3.32.0",url:t})}},48844:function(e,t,i){t.Z=void 0;var a=d(i(67294)),n=d(i(96735)),l=d(i(341)),r=d(i(47166)),s=d(i(59711));i(41492);var o=d(i(25610));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(o.default),m=a.default.createElement(n.default,{label:"Age of onset",textValue:"38 years",isChildOfDescriptionList:!0}),p=a.default.createElement(n.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM",isChildOfDescriptionList:!0}),u=a.default.createElement(n.default,{label:"Comments",textValue:"Based on the patient's blood glucose levels and medical history, I recommend that they continue to monitor their glucose levels regularly and adhere to a healthy diet and exercise regimen. It's important for the patient to attend regular follow-up appointments and communicate any concerns in symptoms.",isChildOfDescriptionList:!0}),h=a.default.createElement(n.default,{label:"Age of onset",textValue:"38 years",isChildOfDescriptionList:!0}),f=a.default.createElement(n.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM",isChildOfDescriptionList:!0}),g=a.default.createElement(n.default,{label:"Comments",textValue:"Based on the patient's blood pressure readings and medical history, I recommend that they make lifestyle modifications such as reducing their salt intake, increasing physical activity, and losing weight if necessary. It's important for the patient to continue monitoring their blood pressure at home and attending regular follow-up appointment to assess the effectiveness of their treatment plan.",isChildOfDescriptionList:!0}),b={bindTo:"#graph-id",axis:{x:{type:s.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()},y:{label:"Temperature (degF)",lowerLimit:90,upperLimit:106}}},v={key:"uid_1",label:{display:"Oral Temperature"},shape:s.default.helpers.SHAPES.RHOMBUS,color:s.default.helpers.COLORS.BLUE,values:[{x:new Date(2016,0,1,10,5).toISOString(),y:96.5},{x:new Date(2016,0,1,12,15).toISOString(),y:98.7},{x:new Date(2016,0,1,14,15).toISOString(),y:97.4}]},w=function(){return a.default.useEffect((function(){s.default.api.graph(b).loadContent(s.default.api.line(v))}),[]),a.default.createElement("div",{className:c("detail-view-divided")},a.default.createElement(l.default,{title:"Mother",level:3,subtitles:["Martha (58 years)","[second line for subtitles]"],details:[a.default.createElement(l.default.DetailList,{title:"Diabetes",key:"order-info-1",isLabelValuePairList:!0},a.default.createElement(l.default.DetailListItem,{item:m}),a.default.createElement(l.default.DetailListItem,{item:p}),a.default.createElement(l.default.DetailListItem,{item:u})),a.default.createElement(l.default.DetailList,{title:"Hypertension",key:"order-info-2",isLabelValuePairList:!0},a.default.createElement(l.default.DetailListItem,{item:h}),a.default.createElement(l.default.DetailListItem,{item:f}),a.default.createElement(l.default.DetailListItem,{item:g}))],graph:a.default.createElement(a.default.Fragment,null,a.default.createElement("figcaption",{className:c("caption-text")},"Oral Temperature Graph - Degrees Fahrenheit (Y axis) vs Time (X axis)"),a.default.createElement("div",{id:"graph-id"})),footer:"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"}))};t.Z=w},96735:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(i(67294)),n=c(i(45697)),l=c(i(94184)),r=c(i(47166)),s=c(i(50026)),o=c(i(60778)),d=["label","textValue","isChildOfDescriptionList","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.default.bind(o.default),h={label:n.default.string.isRequired,textValue:n.default.string,isChildOfDescriptionList:n.default.bool,ariaLabelledBy:n.default.string,children:n.default.node},f={textValue:"",children:void 0,isChildOfDescriptionList:!1,ariaLabelledBy:void 0},g=function(e){var t,i=e.label,n=e.textValue,r=e.isChildOfDescriptionList,o=e.ariaLabelledBy,c=e.children,h=p(e,d),f=a.default.useContext(s.default),g=(0,l.default)(u("label-value-view",f.className),h.className);n||c?n&&(t=a.default.createElement("div",{className:u("value")},n)):t=a.default.createElement("div",{className:u("value")},"--");var b=a.default.createElement(a.default.Fragment,null,a.default.createElement("dt",{className:u("label")},i),a.default.createElement("dd",{className:u("value-wrapper")},t,c));return r?a.default.createElement(a.default.Fragment,null,b):a.default.createElement("dl",m({},h,{className:g,"aria-labelledby":o}),b)};g.propTypes=h,g.defaultProps=f;var b=g;t.default=b},17422:function(e,t,i){i.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},25610:function(e,t,i){i.r(t),t.default={"detail-view-divided":"DetailViewDivided-module__detail-view-divided___IAZXK","indicator-container":"DetailViewDivided-module__indicator-container___jPobP",icon:"DetailViewDivided-module__icon___pKX2e",text:"DetailViewDivided-module__text___ZzS5H","caption-text":"DetailViewDivided-module__caption-text___eiqFO"}},60778:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}}}]);