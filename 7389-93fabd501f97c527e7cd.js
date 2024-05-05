"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7389],{201:function(e,t,a){var l=a(24994),n=a(73738);t.A=void 0;var r=l(a(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}return l.default=e,a&&a.set(e,l),l}(a(96540)),o=l(a(5556)),u=l(a(67967)),d=a(92912),s=l(a(49558)),c=l(a(53665)),p=a(25966),m=l(a(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var x=u.default.bind(m.default),b={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,o=e.description,u=e.isExpanded,m=(0,i.useState)(u),f=(0,r.default)(m,2),b=f[0],y=f[1],w=(0,i.useState)(!1),_=(0,r.default)(w,2),g=_[0],V=_[1],O=i.default.useContext(d.ThemeContext),N=void 0!==l,E=function(){V(!g),b&&y(!b)},C=function(){y(!b),g&&V(!g)},T=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:x("template",O.className)},i.default.createElement("div",{className:x("header")},n&&i.default.createElement("h2",{className:x("title")},n)),i.default.createElement("div",{className:x("content")},o&&i.default.createElement("div",{className:x("description")},o),t),i.default.createElement("div",{className:x("footer")},a?i.default.createElement("div",{className:x("button-container")},N&&i.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":g}),onClick:E,onKeyDown:function(e){return T(e,E)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:x("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(c.default,{className:x("chevron")})),i.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":b}),onClick:C,onKeyDown:function(e){return T(e,C)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:x("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(c.default,{className:x("chevron")}))):null,i.default.createElement("div",null,g&&i.default.createElement("div",{className:x("css")},l),b&&i.default.createElement("div",{className:x("code")},a))))};y.propTypes=b,y.defaultProps={isExpanded:!1};t.A=y},41803:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var l=a(96540),n=a(36665),r=a(91642),i=a(31590),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s={};function c(e){var t=e.components,a=d(e,o);return(0,n.mdx)("wrapper",u({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n\nconst LabelValueViewText = () => (\n  <div>\n    <style>\n      {`\n        #dl-wrapper > dd {\n          margin-bottom: 14px;\n        }\n\n        #dl-wrapper {\n          margin-bottom: 0;\n          margin-top: 0;\n        }\n      `}\n    </style>\n    <h4 id="topicText">Vitals</h4>\n    <dl id="dl-wrapper" aria-labelledby="topicText">\n      <LabelValueView label="Collected By" textValue="Noah Brown" isChildOfDescriptionList />\n      <LabelValueView label="Date" textValue="12/12/12 00:00AM" isChildOfDescriptionList />\n      <LabelValueView label="Blood Pressure" textValue="110/60 mmHg" isChildOfDescriptionList />\n      <LabelValueView label="Temperature" textValue="97 F" isChildOfDescriptionList />\n      <LabelValueView label="Heart Rate" textValue="80 BPM" isChildOfDescriptionList />\n    </dl>\n  </div>\n);\n\nexport default LabelValueViewText;\n\n')))}c.isMDXComponent=!0;var p=a(201),m=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(p.A,{title:t||"Label Value View Text Term And Def",description:a,example:l.createElement(i.A,null),exampleSrc:l.createElement(c,null),isExpanded:n})},f=a(64873),x=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h={};function y(e){var t=e.components,a=v(e,x);return(0,n.mdx)("wrapper",b({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n\nconst LabelValueViewText = () => (\n  <div>\n    <h4 id="topic">Topic text for the LabelValueView</h4>\n    <LabelValueView label="Label" textValue="Sample Text as Value" ariaLabelledBy="topic" />\n  </div>\n);\n\nexport default LabelValueViewText;\n\n')))}y.isMDXComponent=!0;var w=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(p.A,{title:t||"Label Value View Text Definition List",description:a,example:l.createElement(f.A,null),exampleSrc:l.createElement(y,null),isExpanded:n})},_=a(62811),g=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},V.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var N={};function E(e){var t=e.components,a=O(e,g);return(0,n.mdx)("wrapper",V({},N,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport IconCritical from 'terra-icon/lib/icon/IconCritical';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNode = () => (\n  <div>\n    <LabelValueView label=\"Alert\">\n      <div className={cx('container')}>\n        <div className={cx('icon')}>\n          <IconCritical />\n        </div>\n        <div className={cx('text')}>\n          Critical Alert: Blood Pressure is high.\n        </div>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNode;\n\n")))}E.isMDXComponent=!0;var C=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},T.apply(this,arguments)}function L(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j={};function D(e){var t=e.components,a=L(e,C);return(0,n.mdx)("wrapper",T({},j,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .label-value-view-content {\n    border: 1px solid #d3d4d5;\n    border-radius: 5px;\n    padding: 0 20px;\n    width: 280px;\n  }\n\n  .container {\n    display: flex;\n    font-size: 1rem;\n    line-height: 1.4285714285714286;\n    max-width: 100%;  // Needed for IE10 truncation\n    overflow: hidden; // VERY IMPORTANT FOR IE10\n  }\n\n  .icon {\n    flex: 0 0 auto;\n    overflow: hidden;\n    padding-right: 0.357142857142857rem;\n  }\n\n  .text {\n    color: #c00;\n    flex: 1 1 auto;\n    font-weight: 700;\n    min-width: 10px; // Need min-width, as IE10 will completely squish display\n  }\n}\n\n")))}D.isMDXComponent=!0;var P=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(p.A,{title:t||"Label Value View Node",description:a,example:l.createElement(_.A,null),exampleCssSrc:l.createElement(D,null),exampleSrc:l.createElement(E,null),isExpanded:n})},I=a(3932),M=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},S.apply(this,arguments)}function A(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var R={};function B(e){var t=e.components,a=A(e,M);return(0,n.mdx)("wrapper",S({},R,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport classNames from 'classnames/bind';\nimport styles from './LabelValueView.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LabelValueViewNodeCustom = () => (\n  <div>\n    <LabelValueView label=\"Daily Feeds\">\n      <div className={cx('label-value-view-content')}>\n        <h3>Critical Alert: Covid-19 Outbreak</h3>\n        <p>Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff.</p>\n      </div>\n    </LabelValueView>\n  </div>\n);\n\nexport default LabelValueViewNodeCustom;\n\n")))}B.isMDXComponent=!0;var k=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(p.A,{title:t||"Label Value View Node Custom",description:a,example:l.createElement(I.A,null),exampleCssSrc:l.createElement(D,null),exampleSrc:l.createElement(B,null),isExpanded:n})},X=a(12883),q=["components"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},F.apply(this,arguments)}function H(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Z={},W="wrapper";function Y(e){var t=e.components,a=H(e,q);return(0,n.mdx)(W,F({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(X.Ay,{mdxType:"PropsTable"},(0,n.mdx)(X.fI,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(X.dt,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(X.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(X.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(X.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The label of the LabelValueView."))),(0,n.mdx)(X.fI,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(X.dt,{mdxType:"PropNameCell"},"textValue"),(0,n.mdx)(X.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,n.mdx)(X.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The text to be displayed underneath the label with the provided styling."))),(0,n.mdx)(X.fI,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(X.dt,{mdxType:"PropNameCell"},"isChildOfDescriptionList"),(0,n.mdx)(X.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(X.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(X.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Indicates if the LabelValueView is created inside a description list or not.\nIf it is not valued, it will take false as a default, meaning that is is not a child of a description list."))),(0,n.mdx)(X.fI,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(X.dt,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,n.mdx)(X.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(X.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(X.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The id of the element to be used as the accessible label for LabelValueView."))),(0,n.mdx)(X.fI,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(X.dt,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(X.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(X.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(X.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(X.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Child component(s) to display underneath the label.")))))}Y.isMDXComponent=!0;var z=["components"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},G.apply(this,arguments)}function K(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var $={},U="wrapper";function J(e){var t=e.components,a=K(e,z);return(0,n.mdx)(U,G({},$,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-clinical-label-value-view"},"Terra Clinical Label Value View"),(0,n.mdx)("p",null,"The LabelValueView component creates a visual and programmatic association of a label-value pair. An HTML description list is used to create the programmatic structure of the label to a value. This semantic structure is critical to support users of assistive technology. "),(0,n.mdx)("p",null,"LabelValueView can be used as a single description list with one label-value pair or as a group of related label-value pairs."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"To use LabelValueView as a description list with a single label-value pair, ensure the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop is ",(0,n.mdx)("inlineCode",{parentName:"li"},"false"),"."),(0,n.mdx)("li",{parentName:"ul"},"If multiple LabelValueViews are used as a group, then the best practice is to encapsulate them within a single description list ",(0,n.mdx)("inlineCode",{parentName:"li"},"<dl>")," element. LabelValueView does not need a dedicated description list and can be added to an existing one. To use LabelValueView as a child of a description list, the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop needs to be set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"true")," .")),(0,n.mdx)("p",null,"It is highly recommended to add an element that describes the topic of the description list, such as a heading."),(0,n.mdx)("p",null,"LabelValueViews and the encapsulating description lists are often visually associated with a topic on the page. It is best practice to programmatically associate the LabelValueView with the ID of the element that labels it on the page by using one of the following methods:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"If the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop is set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"false"),", associate the list by setting the ",(0,n.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," prop to the ID of the topic."),(0,n.mdx)("li",{parentName:"ul"},"If the ",(0,n.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," prop is set to ",(0,n.mdx)("inlineCode",{parentName:"li"},"true")," associate the description list with the label using the ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria-labelledby")," attribute on the description list that points to the ID of the topic.")),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-label-value-view"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import LabelValueView from 'terra-clinical-label-value-view';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(m,{title:"Label Value View with a Text Input (as a term and definition)",mdxType:"LabelValueViewTextTermAndDef"}),(0,n.mdx)(w,{title:"Label Value View with a Text Input (as a description list)",mdxType:"LabelValueViewTextDefinitionList"}),(0,n.mdx)(P,{title:"Label Value View with a Node Input",mdxType:"LabelValueViewNode"}),(0,n.mdx)(k,{title:"Label Value View with a Node Input (Custom)",mdxType:"LabelValueViewNodeCustom"}),(0,n.mdx)("h2",{id:"label-value-view-props"},"Label Value View Props"),(0,n.mdx)(Y,{mdxType:"LabelValueViewPropsTable"}))}J.isMDXComponent=!0},91642:function(e,t,a){a.d(t,{E:function(){return r}});var l=a(96540),n=a(55713),r=function(e){var t=e.url;return l.createElement(n.A,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view",name:"terra-clinical-label-value-view",version:"3.32.0",url:t})}},59724:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(96540)),n=s(a(5556)),r=s(a(46942)),i=s(a(67967)),o=s(a(52103)),u=s(a(49325)),d=["label","textValue","isChildOfDescriptionList","ariaLabelledBy","children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=i.default.bind(u.default),f={label:n.default.string.isRequired,textValue:n.default.string,isChildOfDescriptionList:n.default.bool,ariaLabelledBy:n.default.string,children:n.default.node},x={textValue:"",children:void 0,isChildOfDescriptionList:!1,ariaLabelledBy:void 0},b=function(e){var t,a=e.label,n=e.textValue,i=e.isChildOfDescriptionList,u=e.ariaLabelledBy,s=e.children,f=p(e,d),x=l.default.useContext(o.default),b=(0,r.default)(m("label-value-view",x.className),f.className);n||s?n&&(t=l.default.createElement("div",{className:m("value")},n)):t=l.default.createElement("div",{className:m("value")},"--");var v=l.default.createElement(l.default.Fragment,null,l.default.createElement("dt",{className:m("label")},a),l.default.createElement("dd",{className:m("value-wrapper")},t,s));return i?l.default.createElement(l.default.Fragment,null,v):l.default.createElement("dl",c({},f,{className:b,"aria-labelledby":u}),v)};b.propTypes=f,b.defaultProps=x;t.default=b},62811:function(e,t,a){t.A=void 0;var l=u(a(96540)),n=u(a(67967)),r=u(a(1171)),i=u(a(59724)),o=u(a(96404));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default);t.A=function(){return l.default.createElement("div",null,l.default.createElement(i.default,{label:"Alert"},l.default.createElement("div",{className:d("container")},l.default.createElement("div",{className:d("icon")},l.default.createElement(r.default,null)),l.default.createElement("div",{className:d("text")},"Critical Alert: Blood Pressure is high."))))}},3932:function(e,t,a){t.A=void 0;var l=o(a(96540)),n=o(a(59724)),r=o(a(67967)),i=o(a(96404));function o(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default);t.A=function(){return l.default.createElement("div",null,l.default.createElement(n.default,{label:"Daily Feeds"},l.default.createElement("div",{className:u("label-value-view-content")},l.default.createElement("h3",null,"Critical Alert: Covid-19 Outbreak"),l.default.createElement("p",null,"Due to recent Covid-19 outbreakm out healthcare facility has implemented strict protocals to ensure the safety and well-being of our patients and staff."))))}},64873:function(e,t,a){t.A=void 0;var l=r(a(96540)),n=r(a(59724));function r(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement("div",null,l.default.createElement("h4",{id:"topic"},"Topic text for the LabelValueView"),l.default.createElement(n.default,{label:"Label",textValue:"Sample Text as Value",ariaLabelledBy:"topic"}))}},31590:function(e,t,a){t.A=void 0;var l=r(a(96540)),n=r(a(59724));function r(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement("div",null,l.default.createElement("style",null,"\n        #dl-wrapper > dd {\n          margin-bottom: 14px;\n        }\n\n        #dl-wrapper {\n          margin-bottom: 0;\n          margin-top: 0;\n        }\n      "),l.default.createElement("h4",{id:"topicText"},"Vitals"),l.default.createElement("dl",{id:"dl-wrapper","aria-labelledby":"topicText"},l.default.createElement(n.default,{label:"Collected By",textValue:"Noah Brown",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Date",textValue:"12/12/12 00:00AM",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Blood Pressure",textValue:"110/60 mmHg",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Temperature",textValue:"97 F",isChildOfDescriptionList:!0}),l.default.createElement(n.default,{label:"Heart Rate",textValue:"80 BPM",isChildOfDescriptionList:!0})))}},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},43755:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"IconCritical-module__orion-fusion-theme___DJnrc","clinical-lowlight-theme":"IconCritical-module__clinical-lowlight-theme___RujMT",IconCritical:"IconCritical-module__IconCritical___yXOuU"}},49325:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}},96404:function(e,t,a){a.r(t),t.default={"label-value-view-content":"LabelValueView-module__label-value-view-content___ILNb9",container:"LabelValueView-module__container___foRHq",icon:"LabelValueView-module__icon___uxNrS",text:"LabelValueView-module__text___WujZ-"}},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(96540)),n=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},1171:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),n=d(a(46942)),r=d(a(67967)),i=d(a(52103)),o=d(a(25365)),u=d(a(43755));function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s.apply(this,arguments)}var c=r.default.bind(u.default),p=function(e){var t=s({},e),a=l.default.useContext(i.default),r=(0,n.default)(c("IconCritical",a.className),e.className);return l.default.createElement(o.default,s({},t,{className:r}),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};p.displayName="IconCritical",p.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=p}}]);