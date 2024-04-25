"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4544],{55713:function(e,t,a){var i=a(24994);t.A=void 0;var n=i(a(96540)),l=i(a(5556)),r=i(a(67967)),o=i(a(25642)),s=r.default.bind(o.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,a=e.name,i=e.url,l=e.version,r=n.default.createElement("a",{className:s("badge"),href:i||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},n.default.createElement("span",{className:s("badge-name")},i?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(l))),o=t?n.default.createElement("a",{className:s("badge"),href:t},n.default.createElement("span",{className:s("badge-name")},"github"),n.default.createElement("span",{className:s("badge-version")},"source")):void 0;return n.default.createElement("div",{className:s("badge-container")},r,o)};c.propTypes=d;t.A=c},86159:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(a(96540)),n=d(a(5556)),l=d(a(67967)),r=d(a(52103)),o=d(a(36605)),s=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.default.bind(o.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:n.default.string},g=function(e){var t=e.children,a=u(e,s),n=i.default.useContext(r.default),o=(0,l.default)(m(["button",n.className]),a.className);return i.default.createElement("button",c({},a,{type:"button",className:o,onBlur:p,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};g.propTypes=f;t.default=g},20999:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(96540)),n=s(a(5556)),l=s(a(67967)),r=s(a(52103)),o=s(a(17269));function s(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),c={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,a=e.variant,n=e.children,l=i.default.useContext(r.default);return i.default.createElement("div",{className:d("notice",a,l.className)},i.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),i.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},i.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),i.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?i.default.createElement(i.default.Fragment,null,i.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),i.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",i.default.createElement("ul",{className:d("list")},i.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),i.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),i.default.createElement("li",null,i.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),i.default.Children.map(n,(function(e){return"string"==typeof e?i.default.createElement("p",null,e):e}))))};u.propTypes=c,u.defaultProps={ariaLevel:"2",variant:"important"};t.default=u},18778:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(96540)),n=c(a(5556)),l=c(a(46942)),r=c(a(67967)),o=c(a(52103)),s=c(a(16576)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.default.bind(s.default),h={title:n.default.string},f=function(e){var t=e.title,a=m(e,d),n=i.default.useContext(o.default),r=(0,l.default)(p(["placeholder",n.className]),a.className),s=p(["inner"]);return i.default.createElement("div",u({},a,{className:r}),i.default.createElement("div",{className:s},i.default.createElement("p",{className:p("title")},t)))};f.propTypes=h,f.defaultProps={title:""};t.default=f},74647:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var i=r(a(20999)),n=r(a(18778)),l=r(a(86159));function r(e){return e&&e.__esModule?e:{default:e}}},84544:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(96540);var i=a(36665),n=a(74647),l=a(5721),r=a(98632),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c={},u="wrapper";function m(e){var t=e.components,a=d(e,o);return(0,i.mdx)(u,s({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(l.E,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"accessibility-guide-for-terra-clinical-detail-view"},"Accessibility Guide for Terra Clinical Detail View"),(0,i.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,i.mdx)("p",null,"Terra Clinical Detail View allows you to create a view with text at different levels of importance. Improper usage of this component may prevent end users from understanding content and necessary context to interact with the page. "),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Pages with well-structured content are essential for many web users, for example:"),(0,i.mdx)("ul",{parentName:"blockquote"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"People with cognitive and learning disabilities")," can more easily find and prioritize content on the page."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"People using screen readers")," can skip to the main content directly and navigate to sections that are important to them."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Keyboard users")," can browse pages and their sections more efficiently. Otherwise, users have to press the tab key multiple times to navigate through all links in each section."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"People using software that only shows the main content")," of a web page, such as people with cognitive disabilities, will receive better results if the page structure is correctly marked up."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"People with visual impairments"),", including people with low vision, have cues that provide orientation on the page and in the content."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Mobile web users")," often have access to a so-called “reader” or “reading” mode that will only show the main content of the page if it is correctly marked up."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"People using certain browser plugins")," can use landmark roles to jump to specific sections on a page.")),(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,i.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/tutorials/page-structure/"},"Page Structure Concepts (W3C: Web Accessibility Tutorials)")),(0,i.mdx)("a",{parentName:"p",href:"/terra-clinical/components/terra-clinical-detail-view/clinical-detail-view/accessibility-guide"},(0,i.mdx)("sup",null,"[1]")))),(0,i.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,i.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,i.mdx)("h4",{id:"maintaining-a-hierarchical-content-structure-on-the-page"},"Maintaining a hierarchical content structure on the page:"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Sighted users perceive structure and relationships through various visual cues — headings are often in a larger, bold font separated from the content they represent."),(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,i.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"W3C: Info and Relationships (Level A)")))),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},'Visual readers can identify headings by scanning pages for text of a larger size or a different color/font face. Blind users/users with low vision on a screen reader are not able to see these visual distinctions, so increasing the font size is not a sufficient cue. Instead, the headings must be semantically "tagged" so that a screen reader can identify headings, navigate the page and provide structure as a page or document table of contents'),(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,i.mdx)("a",{parentName:"em",href:"https://accessibility.psu.edu/headingshtml/"},"Accessibility and Usability at Penn State: Heading tags")))),(0,i.mdx)("p",null,"The Clinical Detail View component creates a view with text at different levels of importance. The HTML heading tag is used to create the structure of the page. It is critical to screen reader users that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"level")," ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," be appropriately set to a value that best represents the placement of the main Clinical Detail View heading in the existing structure of the page. Think about headings as creating the outline of a page. Each heading level should be set to represent that outline structure. Screen reader users rely on the heading levels to understand the structure of information on the page."),(0,i.mdx)(n.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,i.mdx)("p",null,"It is highly recommended to utilize the ",(0,i.mdx)("inlineCode",{parentName:"p"},"level")," ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," to set the appropriate heading level of the Title to match the hierarchical structure of the page. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"level")," ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," will also set the SecondaryTitles and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," of the Detail List structures to the appropriate heading level to ensure a hierarchical content structure."),(0,i.mdx)("p",null,"Code Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />);\n\n<DetailView\n  title="Multiple Ingredients"\n  level={4}\n  secondaryTitles={[\'M. V. I. Adult 10 mL = 10 mL\', \'Sodium bicarbonate 8.4% 50 mL\', \'Dextrose 5% in Water 1000 mL\']}\n  details={[\n    (\n      <DetailView.DetailList title={detail1title} key="Indicators" isLabelValuePairList>\n        <DetailView.DetailListItem item={item1} />\n      </DetailView.DetailList>\n    ),\n  ]}\n/>\n'))),(0,i.mdx)("h4",{id:"named-section-behavior"},"Named Section Behavior:"),(0,i.mdx)("p",null,"All of the content related to the Clinical Detail View should be understood as a section and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," prop is used to programmatically create a label for the region.  It is critical to screen reader users that the title ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," be set to a value that best represents the region that groups the details in the section within the page. Screen reader users rely on the title to know the beginning and end of a region, and to navigate to the specific region on the page. Leaving the title off of the section hurts the accessibility of the component by removing the programmatic indication of the region on the page. The region/section won't be announced by Assistive Technology (AT) if there is no programmatically associated label. "),(0,i.mdx)("h4",{id:"caption-for-graphs"},"Caption for graphs:"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"graph")," ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," is used to set visualization content such as graphs, or images based on the data. This graph ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," is wrapped in an ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"},(0,i.mdx)("inlineCode",{parentName:"a"},"<figure>"))," element.\nFigure captions help the users understand and correctly interpret the visualization.\nIt is critical to screen reader users that the caption be set with ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"},(0,i.mdx)("inlineCode",{parentName:"a"},"<figcaption>"))," element as the first, or the last element to provide the caption for the figure."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"Note: figcaption content is not a replacement for the alt text that needs to be supplied for images in the figure element.\n")),(0,i.mdx)("p",null,"When using figcaption element, which requires a parent element, it is necessary to wrap the elements within a ",(0,i.mdx)("inlineCode",{parentName:"p"},"<React.Fragment>")," block."),(0,i.mdx)("div",{"aria-label":"Example demo"},(0,i.mdx)(r.A,{mdxType:"DetailViewDivided"})),(0,i.mdx)("h4",{id:"associate-label-value-pairs"},"Associate label-value pairs:"),(0,i.mdx)("p",null,"The DetailList sub-component is often used to create a list of items associated together. An HTML unordered list or a description list is used to create the visual and programmatic association of the list. Content that is supplied for description lists includes ",(0,i.mdx)("inlineCode",{parentName:"p"},"<dt>")," list item content and ",(0,i.mdx)("inlineCode",{parentName:"p"},"<dd>")," list item content. ",(0,i.mdx)("inlineCode",{parentName:"p"},"<dt>")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"<dd>")," content must be logically connected. With label-value pairs in description lists, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<dt>")," holds the “label” and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<dd>")," holds the “value” associated with the label.  The two are always together.  "),(0,i.mdx)(n.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,i.mdx)("p",null,"It is highly recommended that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isLabelValuePairList")," ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/terra-clinical-detail-view/clinical-detail-view/clinical-detail-view#detail-view-props-table"},"prop")," is set to true when the list contains label-value pairs. By setting this prop to true, we use the HTML description list to create the programmatic structure of the label (a term) to a value (a definition). This semantic structure is critical to support users of assistive technology so that they can properly relate information in the list together. The DetailList should be understood as a description list when it contains label-value pairs and the DetailList should be understood as an unordered list when it contains other HTML elements passed in by the consumer."),(0,i.mdx)("p",null,"Code Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" isChildOfDescriptionList />);\nconst detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" isChildOfDescriptionList />);\n\nconst detail2item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />);\nconst detail2item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" isChildOfDescriptionList />);\n\nconst detail3item1 = (\n  <div className={cx(\'indicator-container\')}>\n    <div className={cx(\'icon\')}>\n      <IconCritical a11yLabel="Critical Icon" />\n    </div>\n    <div className={cx(\'text\')}>\n      Immediate Priority\n    </div>\n  </div>\n);\nconst detail3item2 = (\n  <div className={cx(\'indicator-container\')}>\n    <div className={cx(\'icon\')}>\n      <IconPharmacyReview a11yLabel="Pharmacy Review" />\n    </div>\n    <div className={cx(\'text\')}>\n      Pharmacy Review\n    </div>\n  </div>\n);\n\n<DetailView\n    title="Mother"\n    level={3}\n    subtitles={[\'Martha (58 years)\', \'[second line for subtitles]\']}\n    details={[\n      (\n        <DetailView.DetailList title={detail1title} key="order-info-1" isLabelValuePairList>\n          <DetailView.DetailListItem item={detail1item1} />\n          <DetailView.DetailListItem item={detail1item2} />\n        </DetailView.DetailList>\n      ),\n      (\n        <DetailView.DetailList title={detail2title} key="order-info-2" isLabelValuePairList>\n          <DetailView.DetailListItem item={detail2item1} />\n          <DetailView.DetailListItem item={detail2item2} />\n        </DetailView.DetailList>\n      ),\n      (\n        <DetailView.DetailList title={detail3title} key="order-info-3" >\n          <DetailView.DetailListItem item={detail3item1} />\n          <DetailView.DetailListItem item={detail3item2} />\n        </DetailView.DetailList>\n      ),\n    ]}\n  />\n'))),(0,i.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,i.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, simply using Terra components will not automatically make a product accessible."),(0,i.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,i.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},(0,i.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},(0,i.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," - Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification"},(0,i.mdx)("strong",{parentName:"a"},"3.2.4 Consistent Identification"))," - Components that have the same functionality within a set of Web pages are identified consistently."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},(0,i.mdx)("strong",{parentName:"a"},"4.1.2 Name, Role, Value"))," - For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.")),(0,i.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"None identified"),(0,i.mdx)("li",{parentName:"ul"},"Report a problem with this component on ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-clinical/issues/new/choose"},(0,i.mdx)("strong",{parentName:"a"},"GitHub")))),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,i.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")),(0,i.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/page-structure/"},"W3C Page Structure"))))}m.isMDXComponent=!0},98632:function(e,t,a){a.d(t,{A:function(){return p}});var i=a(96540),n=a(38989),l=a(36665),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d={};function c(e){var t=e.components,a=s(e,r);return(0,l.mdx)("wrapper",o({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport DetailView from 'terra-clinical-detail-view';\nimport classNames from 'classnames/bind';\nimport Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nimport styles from './DetailViewDivided.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst detail1title = 'Diabetes';\nconst detail1item1 = (<LabelValueView label=\"Age of onset\" textValue=\"38 years\" isChildOfDescriptionList />);\nconst detail1item2 = (<LabelValueView label=\"Reviewed\" textValue=\"07/10/2012 10:00AM\" isChildOfDescriptionList />);\nconst detail1item3 = (<LabelValueView label=\"Comments\" textValue=\"Based on the patient's blood glucose levels and medical history, I recommend that they continue to monitor their glucose levels regularly and adhere to a healthy diet and exercise regimen. It's important for the patient to attend regular follow-up appointments and communicate any concerns in symptoms.\" isChildOfDescriptionList />);\n\nconst detail2title = 'Hypertension';\nconst detail2item1 = (<LabelValueView label=\"Age of onset\" textValue=\"38 years\" isChildOfDescriptionList />);\nconst detail2item2 = (<LabelValueView label=\"Reviewed\" textValue=\"07/10/2012 10:00AM\" isChildOfDescriptionList />);\nconst detail2item3 = (<LabelValueView label=\"Comments\" textValue=\"Based on the patient's blood pressure readings and medical history, I recommend that they make lifestyle modifications such as reducing their salt intake, increasing physical activity, and losing weight if necessary. It's important for the patient to continue monitoring their blood pressure at home and attending regular follow-up appointment to assess the effectiveness of their treatment plan.\" isChildOfDescriptionList />);\n\nconst graphConfiguration = {\n  bindTo: '#graph-id',\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 9, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n    },\n    y: {\n      label: 'Temperature (degF)',\n      lowerLimit: 90,\n      upperLimit: 106,\n    },\n  },\n};\n\nconst dataset = {\n  key: 'uid_1',\n  label: {\n    display: 'Oral Temperature',\n  },\n  shape: Carbon.helpers.SHAPES.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 10, 5).toISOString(),\n      y: 96.5,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 98.7,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 97.4,\n    },\n  ],\n};\n\nconst DetailViewDivided = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfiguration);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <div className={cx('detail-view-divided')}>\n      <DetailView\n        title=\"Mother\"\n        level={3}\n        subtitles={['Martha (58 years)', '[second line for subtitles]']}\n        details={[\n          (\n            <DetailView.DetailList title={detail1title} key=\"order-info-1\" isLabelValuePairList>\n              <DetailView.DetailListItem item={detail1item1} />\n              <DetailView.DetailListItem item={detail1item2} />\n              <DetailView.DetailListItem item={detail1item3} />\n            </DetailView.DetailList>\n          ),\n          (\n            <DetailView.DetailList title={detail2title} key=\"order-info-2\" isLabelValuePairList>\n              <DetailView.DetailListItem item={detail2item1} />\n              <DetailView.DetailListItem item={detail2item2} />\n              <DetailView.DetailListItem item={detail2item3} />\n            </DetailView.DetailList>\n          ),\n        ]}\n        graph={(\n          <>\n            {/* Sets the caption for the graph. The `<figcaption>` tag has to be the first element or the last element of `<figure>` element.\n              Inside `DetailView` component, the `<figure>` tag wraps the graph prop like this `<figure>{graph}</figure>`.\n            */}\n            <figcaption className={cx('caption-text')}>Oral Temperature Graph - Degrees Fahrenheit (Y axis) vs Time (X axis)</figcaption>\n\n            {/* This div with the ID attribute is used by the graph config in `graphConfiguration` as well as\n              the APIs in `React.useEffect` above to insert in the graph content at run time. */}\n            <div id=\"graph-id\" />\n          </>\n        )}\n        footer=\"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM\"\n      />\n    </div>\n  );\n};\n\nexport default DetailViewDivided;\n\n")))}c.isMDXComponent=!0;var u=a(201),m=a(32913),p=function(e){var t=e.title,a=e.description,l=e.isExpanded;return i.createElement(u.A,{title:t||"Detail View Divided",description:a,example:i.createElement(n.A,null),exampleCssSrc:i.createElement(m.A,null),exampleSrc:i.createElement(c,null),isExpanded:l})}},5721:function(e,t,a){a.d(t,{E:function(){return l}});var i=a(96540),n=a(55713),l=function(e){var t=e.url;return i.createElement(n.A,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-detail-view",name:"terra-clinical-detail-view",version:"3.37.0",url:t})}},38989:function(e,t,a){t.A=void 0;var i=d(a(96540)),n=d(a(59724)),l=d(a(47713)),r=d(a(67967)),o=d(a(83302));a(54783);var s=d(a(70366));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(s.default),u=i.default.createElement(n.default,{label:"Age of onset",textValue:"38 years",isChildOfDescriptionList:!0}),m=i.default.createElement(n.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM",isChildOfDescriptionList:!0}),p=i.default.createElement(n.default,{label:"Comments",textValue:"Based on the patient's blood glucose levels and medical history, I recommend that they continue to monitor their glucose levels regularly and adhere to a healthy diet and exercise regimen. It's important for the patient to attend regular follow-up appointments and communicate any concerns in symptoms.",isChildOfDescriptionList:!0}),h=i.default.createElement(n.default,{label:"Age of onset",textValue:"38 years",isChildOfDescriptionList:!0}),f=i.default.createElement(n.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM",isChildOfDescriptionList:!0}),g=i.default.createElement(n.default,{label:"Comments",textValue:"Based on the patient's blood pressure readings and medical history, I recommend that they make lifestyle modifications such as reducing their salt intake, increasing physical activity, and losing weight if necessary. It's important for the patient to continue monitoring their blood pressure at home and attending regular follow-up appointment to assess the effectiveness of their treatment plan.",isChildOfDescriptionList:!0}),b={bindTo:"#graph-id",axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()},y:{label:"Temperature (degF)",lowerLimit:90,upperLimit:106}}},v={key:"uid_1",label:{display:"Oral Temperature"},shape:o.default.helpers.SHAPES.RHOMBUS,color:o.default.helpers.COLORS.BLUE,values:[{x:new Date(2016,0,1,10,5).toISOString(),y:96.5},{x:new Date(2016,0,1,12,15).toISOString(),y:98.7},{x:new Date(2016,0,1,14,15).toISOString(),y:97.4}]};t.A=function(){return i.default.useEffect((function(){o.default.api.graph(b).loadContent(o.default.api.line(v))}),[]),i.default.createElement("div",{className:c("detail-view-divided")},i.default.createElement(l.default,{title:"Mother",level:3,subtitles:["Martha (58 years)","[second line for subtitles]"],details:[i.default.createElement(l.default.DetailList,{title:"Diabetes",key:"order-info-1",isLabelValuePairList:!0},i.default.createElement(l.default.DetailListItem,{item:u}),i.default.createElement(l.default.DetailListItem,{item:m}),i.default.createElement(l.default.DetailListItem,{item:p})),i.default.createElement(l.default.DetailList,{title:"Hypertension",key:"order-info-2",isLabelValuePairList:!0},i.default.createElement(l.default.DetailListItem,{item:h}),i.default.createElement(l.default.DetailListItem,{item:f}),i.default.createElement(l.default.DetailListItem,{item:g}))],graph:i.default.createElement(i.default.Fragment,null,i.default.createElement("figcaption",{className:c("caption-text")},"Oral Temperature Graph - Degrees Fahrenheit (Y axis) vs Time (X axis)"),i.default.createElement("div",{id:"graph-id"})),footer:"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"}))}},59724:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(96540)),n=c(a(5556)),l=c(a(46942)),r=c(a(67967)),o=c(a(52103)),s=c(a(49325)),d=["label","textValue","isChildOfDescriptionList","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.default.bind(s.default),h={label:n.default.string.isRequired,textValue:n.default.string,isChildOfDescriptionList:n.default.bool,ariaLabelledBy:n.default.string,children:n.default.node},f={textValue:"",children:void 0,isChildOfDescriptionList:!1,ariaLabelledBy:void 0},g=function(e){var t,a=e.label,n=e.textValue,r=e.isChildOfDescriptionList,s=e.ariaLabelledBy,c=e.children,h=m(e,d),f=i.default.useContext(o.default),g=(0,l.default)(p("label-value-view",f.className),h.className);n||c?n&&(t=i.default.createElement("div",{className:p("value")},n)):t=i.default.createElement("div",{className:p("value")},"--");var b=i.default.createElement(i.default.Fragment,null,i.default.createElement("dt",{className:p("label")},a),i.default.createElement("dd",{className:p("value-wrapper")},t,c));return r?i.default.createElement(i.default.Fragment,null,b):i.default.createElement("dl",u({},h,{className:g,"aria-labelledby":s}),b)};g.propTypes=h,g.defaultProps=f;t.default=g},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},36605:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},70366:function(e,t,a){a.r(t),t.default={"detail-view-divided":"DetailViewDivided-module__detail-view-divided___IAZXK","indicator-container":"DetailViewDivided-module__indicator-container___jPobP",icon:"DetailViewDivided-module__icon___pKX2e",text:"DetailViewDivided-module__text___ZzS5H","caption-text":"DetailViewDivided-module__caption-text___eiqFO"}},49325:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}}}]);