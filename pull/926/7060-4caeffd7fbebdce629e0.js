"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7060],{33792:function(e,t,n){var a=n(22411),r=n(59848);t.c=void 0;var l=a(n(97936)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(11504)),i=a(n(3268)),d=a(n(74824)),m=n(93048),p=a(n(72672)),s=a(n(3308)),u=n(97196),c=a(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(c.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,d=e.isExpanded,c=(0,o.useState)(d),f=(0,l.default)(c,2),y=f[0],g=f[1],v=(0,o.useState)(!1),O=(0,l.default)(v,2),T=O[0],C=O[1],_=o.default.useContext(m.ThemeContext),N=void 0!==a,w=function(){C(!T),y&&g(!y)},D=function(){g(!y),T&&C(!T)},E=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",_.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},N&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:w,onKeyDown:function(e){return E(e,w)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:D,onKeyDown:function(e){return E(e,D)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:x("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:x("css")},a),y&&o.default.createElement("div",{className:x("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};t.c=g},57916:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(11504),r=n(69788),l=n(47656),o=n(73781),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function s(e){var t=e.components,n=m(e,i);return(0,r.mdx)("wrapper",d({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport moment from 'moment';\nimport OnsetPicker from 'terra-clinical-onset-picker';\n\nconst birthdate = moment().subtract(6, 'years');\nconst picker = () => (\n  <div>\n    <p>{`Birthdate: ${birthdate.format('MM-DD-YYYY')}`}</p>\n    <OnsetPicker\n      legend=\"Onset of symptoms\"\n      birthdate={birthdate.format('YYYY-MM-DD')}\n      id=\"doogs\"\n    />\n  </div>\n);\n\nexport default picker;\n\n")))}s.isMDXComponent=!0;var u=n(33792),c=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.c,{title:t||"Default Onset",description:n,example:a.createElement(o.c,null),exampleSrc:a.createElement(s,null),isExpanded:r})},f=n(10103),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={};function g(e){var t=e.components,n=h(e,x);return(0,r.mdx)("wrapper",y({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport moment from 'moment';\nimport OnsetPicker from 'terra-clinical-onset-picker';\n\nclass HandledOnsetExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      precision: 'before',\n      granularity: 'year',\n      onsetDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),\n    };\n\n    this.handleOnset = this.handleOnset.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleOnset(onsetObject) {\n    this.setState({\n      precision: onsetObject.precision,\n      granularity: onsetObject.granularity,\n      onsetDate: onsetObject.onsetDate,\n      ageUnit: onsetObject.ageUnit,\n    });\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n\n    this.setState(prevState => ({\n      submittedData: {\n        precision: prevState.precision,\n        granularity: prevState.granularity,\n        onsetDate: prevState.onsetDate,\n        ageUnit: prevState.ageUnit,\n      },\n    }));\n  }\n\n  render() {\n    const birthdate = moment().subtract(6, 'years');\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <p>{`Birthdate: ${birthdate.format('MM-DD-YYYY')}`}</p>\n        <OnsetPicker\n          birthdate={birthdate.format('YYYY-MM-DD')}\n          granularity={this.state.granularity}\n          id=\"doogs-supplied\"\n          precision={this.state.precision}\n          precisionSet={[\n            'unknown',\n            'after',\n            'before',\n            'on/at',\n          ]}\n          onsetDate={this.state.onsetDate}\n          legend=\"Date of Onset\"\n          onsetOnChange={this.handleOnset}\n        />\n        <button type=\"submit\">Submit</button>\n        {this.state.submittedData && (\n          <div>\n            <hr />\n            <p>Form was submitted with</p>\n            <p>{JSON.stringify(this.state.submittedData, null, 2)}</p>\n          </div>\n        )}\n      </form>\n    );\n  }\n}\n\nexport default HandledOnsetExample;\n\n")))}g.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.c,{title:t||"Handled Onset",description:n,example:a.createElement(f.c,null),exampleSrc:a.createElement(g,null),isExpanded:r})},O=n(55176),T=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},C.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={};function w(e){var t=e.components,n=_(e,T);return(0,r.mdx)("wrapper",C({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport moment from 'moment';\nimport OnsetPicker from 'terra-clinical-onset-picker';\n\nconst OnsetWithHiddenLegend = () => (\n  <OnsetPicker\n    birthdate={moment().subtract(6, 'years').format('YYYY-MM-DD')}\n    id=\"onsetlegend\"\n    legend=\"Date of Onset\"\n    isLegendHidden\n  />\n);\n\nexport default OnsetWithHiddenLegend;\n\n")))}w.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.c,{title:t||"Onset With Hidden Legend",description:n,example:a.createElement(O.c,null),exampleSrc:a.createElement(w,null),isExpanded:r})},E=n(28744),j=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P={},Y="wrapper";function M(e){var t=e.components,n=S(e,j);return(0,r.mdx)(Y,k({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(E.cp,{mdxType:"PropsTable"},(0,r.mdx)(E.WA,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"ageUnit"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'weeks'\n  'months'\n  'years'\n],\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The date unit of the age value. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"weeks"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"months"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"years"),"."))),(0,r.mdx)(E.WA,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"birthdate"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The ISO 8601 ",(0,r.mdx)("strong",{parentName:"p"},"DATE ONLY")," string representation of the birth date to calculate an onset date for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"age")," precision.\nAlso limits the earliest possible date that can be selected for an onset date for ",(0,r.mdx)("inlineCode",{parentName:"p"},"year"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"month"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"date")," precision."))),(0,r.mdx)(E.WA,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"granularity"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'age'\n  'year'\n  'month'\n  'date'\n],\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The granularity of the onset date. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"age"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"year"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"month"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"date")," is accepted."))),(0,r.mdx)(E.WA,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"id"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The id of the onset picker. Used as the base for other required id/name in sub-components."))),(0,r.mdx)(E.WA,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"precision"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'on/at'\n  'about'\n  'before'\n  'after'\n  'unknown'\n],\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The precision of the onset date. This should be one of precisions passed to the precisionSet prop.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"on/at"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"about"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"before"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"after"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"unknown"),"."))),(0,r.mdx)(E.WA,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"precisionSet"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  enum: [\n    'on/at'\n    'about'\n    'before'\n    'after'\n    'unknown'\n  ],\n}],\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"['on/at', 'about', 'before', 'after', 'unknown']\n"))),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The set of precisions that can be used with the onset picker.\nCombination of ",(0,r.mdx)("inlineCode",{parentName:"p"},"on/at"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"about"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"before"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"after"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"unknown"),".\nOrder of precisions determines order in precision select."))),(0,r.mdx)(E.WA,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"onsetDate"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The ISO 8601 ",(0,r.mdx)("strong",{parentName:"p"},"DATE ONLY")," string representation of the onset date to view/modify."))),(0,r.mdx)(E.WA,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"onsetOnChange"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when any value of the onsetDate is changed.\nThe first parameter is a Object that contains ",(0,r.mdx)("inlineCode",{parentName:"p"},"precision"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"granularity"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"onsetDate"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"onsetDateMetadata"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ageUnit"),".\n",(0,r.mdx)("inlineCode",{parentName:"p"},"ageUnit")," is only present if the granularity is 'age'.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"onsetDateMetadata")," contains additional properties about the state of the onset date."))),(0,r.mdx)(E.WA,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"legend"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Legend for the Onset Picker field group."))),(0,r.mdx)(E.WA,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(E.qe,{mdxType:"PropNameCell"},"isLegendHidden"),(0,r.mdx)(E.aI,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(E.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E._w,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(E.uC,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.")))))}M.isMDXComponent=!0;var R=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},I="wrapper";function L(e){var t=e.components,n=W(e,R);return(0,r.mdx)(I,q({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.k,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-clinical-onset-picker"},"Terra Clinical Onset Picker"),(0,r.mdx)("p",null,"The terra-clinical-onset-picker component provides users a way to enter or select an approximate date for use in onset scenarios. The onset date is limited to occurring after the birth date supplied. For ",(0,r.mdx)("inlineCode",{parentName:"p"},"AGE")," granularity, the age input has a maximum of ",(0,r.mdx)("inlineCode",{parentName:"p"},"8")," for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Week(s)")," unit, and ",(0,r.mdx)("inlineCode",{parentName:"p"},"24")," for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Month(s)")," unit. The user is expected to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"Month(s)")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Year(s)")," respectively for larger values."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"})," All inputs must have a visible label that communicates the purpose of the field face up. Ensuring this label is always visible will ensure all users, especially those using assistive technologies, can understand the purpose of the input and interact with the field."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-onset-picker"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import OnsetPicker from 'terra-clinical-onset-picker';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support"),"**"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("p",null,"** This component does not support Arabic translations"),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(c,{title:"Default with initialization",mdxType:"DefaultOnset"}),(0,r.mdx)(v,{title:"Onset picker with supplied data and handlers",mdxType:"HandledOnset"}),(0,r.mdx)(D,{title:"Onset picker with Hidden legend",mdxType:"OnsetWithHiddenLegend"}),(0,r.mdx)("h2",{id:"onset-picker-props"},"Onset Picker Props"),(0,r.mdx)(M,{mdxType:"OnsetPickerPropsTable"}))}L.isMDXComponent=!0},47656:function(e,t,n){n.d(t,{k:function(){return l}});var a=n(11504),r=n(11416),l=function(e){var t=e.url;return a.createElement(r.c,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-onset-picker",name:"terra-clinical-onset-picker",version:"4.36.0",url:t})}},73781:function(e,t,n){t.c=void 0;var a=o(n(11504)),r=o(n(17412)),l=o(n(67824));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)().subtract(6,"years");t.c=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"Birthdate: ".concat(i.format("MM-DD-YYYY"))),a.default.createElement(l.default,{legend:"Onset of symptoms",birthdate:i.format("YYYY-MM-DD"),id:"doogs"}))}},10103:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.c=void 0;var r=i(n(11504)),l=i(n(17412)),o=i(n(67824));function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,m(a.key),a)}}function m(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}function p(e,t,n){return t=u(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}(e,s()?Reflect.construct(t,n||[],u(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,t,[e])).state={precision:"before",granularity:"year",onsetDate:(0,l.default)().subtract(2,"years").format("YYYY-MM-DD")},n.handleOnset=n.handleOnset.bind(c(n)),n.handleSubmit=n.handleSubmit.bind(c(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),n=t,(a=[{key:"handleOnset",value:function(e){this.setState({precision:e.precision,granularity:e.granularity,onsetDate:e.onsetDate,ageUnit:e.ageUnit})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState((function(e){return{submittedData:{precision:e.precision,granularity:e.granularity,onsetDate:e.onsetDate,ageUnit:e.ageUnit}}}))}},{key:"render",value:function(){var e=(0,l.default)().subtract(6,"years");return r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement("p",null,"Birthdate: ".concat(e.format("MM-DD-YYYY"))),r.default.createElement(o.default,{birthdate:e.format("YYYY-MM-DD"),granularity:this.state.granularity,id:"doogs-supplied",precision:this.state.precision,precisionSet:["unknown","after","before","on/at"],onsetDate:this.state.onsetDate,legend:"Date of Onset",onsetOnChange:this.handleOnset}),r.default.createElement("button",{type:"submit"},"Submit"),this.state.submittedData&&r.default.createElement("div",null,r.default.createElement("hr",null),r.default.createElement("p",null,"Form was submitted with"),r.default.createElement("p",null,JSON.stringify(this.state.submittedData,null,2))))}}])&&d(n.prototype,a),i&&d(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.default.Component);t.c=x},55176:function(e,t,n){t.c=void 0;var a=o(n(11504)),r=o(n(17412)),l=o(n(67824));function o(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return a.default.createElement(l.default,{birthdate:(0,r.default)().subtract(6,"years").format("YYYY-MM-DD"),id:"onsetlegend",legend:"Date of Onset",isLegendHidden:!0})}},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},72672:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(11504)),r=l(n(22728));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);