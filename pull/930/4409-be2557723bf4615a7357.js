"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4409],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),d=a(n(19845)),m=n(21538),p=a(n(33864)),s=a(n(23399)),u=n(51051),c=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(c.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,o=e.description,d=e.isExpanded,c=(0,i.useState)(d),f=(0,l.default)(c,2),y=f[0],g=f[1],O=(0,i.useState)(!1),v=(0,l.default)(O,2),T=v[0],N=v[1],C=i.default.useContext(m.ThemeContext),D=void 0!==a,_=function(){N(!T),y&&g(!y)},E=function(){g(!y),T&&N(!T)},w=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:x("template",C.className)},i.default.createElement("div",{className:x("header")},r&&i.default.createElement("h2",{className:x("title")},r)),i.default.createElement("div",{className:x("content")},o&&i.default.createElement("div",{className:x("description")},o),t),i.default.createElement("div",{className:x("footer")},n?i.default.createElement("div",{className:x("button-container")},D&&i.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:_,onKeyDown:function(e){return w(e,_)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(p.default,{className:x("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(s.default,{className:x("chevron")})),i.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return w(e,E)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(p.default,{className:x("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(s.default,{className:x("chevron")}))):null,i.default.createElement("div",null,T&&i.default.createElement("div",{className:x("css")},a),y&&i.default.createElement("div",{className:x("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var O=g;t.Z=O},22526:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var a=n(67294),r=n(81254),l=n(61812),i=n(15748),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function s(e){var t=e.components,n=m(e,o);return(0,r.mdx)("wrapper",d({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport moment from 'moment';\nimport OnsetPicker from 'terra-clinical-onset-picker';\n\nconst birthdate = moment().subtract(6, 'years');\nconst picker = () => (\n  <div>\n    <p>{`Birthdate: ${birthdate.format('MM-DD-YYYY')}`}</p>\n    <OnsetPicker\n      required\n      legend=\"Onset of symptoms\"\n      birthdate={birthdate.format('YYYY-MM-DD')}\n      id=\"doogs\"\n    />\n  </div>\n);\n\nexport default picker;\n\n")))}s.isMDXComponent=!0;var u=n(49271),c=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Default Onset",description:n,example:a.createElement(i.Z,null),exampleSrc:a.createElement(s,null),isExpanded:r})},f=n(25311),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={};function g(e){var t=e.components,n=h(e,x);return(0,r.mdx)("wrapper",y({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport moment from 'moment';\nimport OnsetPicker from 'terra-clinical-onset-picker';\n\nclass HandledOnsetExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      precision: 'before',\n      granularity: 'year',\n      onsetDate: moment().subtract(2, 'years').format('YYYY-MM-DD'),\n    };\n\n    this.handleOnset = this.handleOnset.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleOnset(onsetObject) {\n    this.setState({\n      precision: onsetObject.precision,\n      granularity: onsetObject.granularity,\n      onsetDate: onsetObject.onsetDate,\n      ageUnit: onsetObject.ageUnit,\n    });\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n\n    this.setState(prevState => ({\n      submittedData: {\n        precision: prevState.precision,\n        granularity: prevState.granularity,\n        onsetDate: prevState.onsetDate,\n        ageUnit: prevState.ageUnit,\n      },\n    }));\n  }\n\n  render() {\n    const birthdate = moment().subtract(6, 'years');\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <p>{`Birthdate: ${birthdate.format('MM-DD-YYYY')}`}</p>\n        <OnsetPicker\n          birthdate={birthdate.format('YYYY-MM-DD')}\n          granularity={this.state.granularity}\n          id=\"doogs-supplied\"\n          precision={this.state.precision}\n          precisionSet={[\n            'unknown',\n            'after',\n            'before',\n            'on/at',\n          ]}\n          onsetDate={this.state.onsetDate}\n          legend=\"Date of Onset\"\n          onsetOnChange={this.handleOnset}\n        />\n        <button type=\"submit\">Submit</button>\n        {this.state.submittedData && (\n          <div>\n            <hr />\n            <p>Form was submitted with</p>\n            <p>{JSON.stringify(this.state.submittedData, null, 2)}</p>\n          </div>\n        )}\n      </form>\n    );\n  }\n}\n\nexport default HandledOnsetExample;\n\n")))}g.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Handled Onset",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(g,null),isExpanded:r})},v=n(19253),T=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D={};function _(e){var t=e.components,n=C(e,T);return(0,r.mdx)("wrapper",N({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport moment from 'moment';\nimport OnsetPicker from 'terra-clinical-onset-picker';\n\nconst OnsetWithHiddenLegend = () => (\n  <OnsetPicker\n    birthdate={moment().subtract(6, 'years').format('YYYY-MM-DD')}\n    id=\"onsetlegend\"\n    legend=\"Date of Onset\"\n    isLegendHidden\n  />\n);\n\nexport default OnsetWithHiddenLegend;\n\n")))}_.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Onset With Hidden Legend",description:n,example:a.createElement(v.Z,null),exampleSrc:a.createElement(_,null),isExpanded:r})},w=n(78530),j=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P={},R="wrapper";function Y(e){var t=e.components,n=k(e,j);return(0,r.mdx)(R,S({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(w.ZP,{mdxType:"PropsTable"},(0,r.mdx)(w.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"ageUnit"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'weeks'\n  'months'\n  'years'\n],\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The date unit of the age value. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"weeks"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"months"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"years"),"."))),(0,r.mdx)(w.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"birthdate"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The ISO 8601 ",(0,r.mdx)("strong",{parentName:"p"},"DATE ONLY")," string representation of the birth date to calculate an onset date for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"age")," precision.\nAlso limits the earliest possible date that can be selected for an onset date for ",(0,r.mdx)("inlineCode",{parentName:"p"},"year"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"month"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"date")," precision."))),(0,r.mdx)(w.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"granularity"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'age'\n  'year'\n  'month'\n  'date'\n],\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The granularity of the onset date. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"age"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"year"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"month"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"date")," is accepted."))),(0,r.mdx)(w.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"id"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The id of the onset picker. Used as the base for other required id/name in sub-components."))),(0,r.mdx)(w.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"precision"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'on/at'\n  'about'\n  'before'\n  'after'\n  'unknown'\n],\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The precision of the onset date. This should be one of precisions passed to the precisionSet prop.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"on/at"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"about"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"before"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"after"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"unknown"),"."))),(0,r.mdx)(w.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"precisionSet"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  enum: [\n    'on/at'\n    'about'\n    'before'\n    'after'\n    'unknown'\n  ],\n}],\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"['on/at', 'about', 'before', 'after', 'unknown']\n"))),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The set of precisions that can be used with the onset picker.\nCombination of ",(0,r.mdx)("inlineCode",{parentName:"p"},"on/at"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"about"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"before"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"after"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"unknown"),".\nOrder of precisions determines order in precision select."))),(0,r.mdx)(w.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"onsetDate"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The ISO 8601 ",(0,r.mdx)("strong",{parentName:"p"},"DATE ONLY")," string representation of the onset date to view/modify."))),(0,r.mdx)(w.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"onsetOnChange"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when any value of the onsetDate is changed.\nThe first parameter is a Object that contains ",(0,r.mdx)("inlineCode",{parentName:"p"},"precision"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"granularity"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"onsetDate"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"onsetDateMetadata"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ageUnit"),".\n",(0,r.mdx)("inlineCode",{parentName:"p"},"ageUnit")," is only present if the granularity is 'age'.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"onsetDateMetadata")," contains additional properties about the state of the onset date."))),(0,r.mdx)(w.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"legend"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Legend for the Onset Picker field group."))),(0,r.mdx)(w.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"isLegendHidden"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility."))),(0,r.mdx)(w.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is required.")))))}Y.isMDXComponent=!0;var M=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X={},L="wrapper";function U(e){var t=e.components,n=q(e,M);return(0,r.mdx)(L,W({},X,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-clinical-onset-picker"},"Terra Clinical Onset Picker"),(0,r.mdx)("p",null,"The terra-clinical-onset-picker component provides users a way to enter or select an approximate date for use in onset scenarios. The onset date is limited to occurring after the birth date supplied. For ",(0,r.mdx)("inlineCode",{parentName:"p"},"AGE")," granularity, the age input has a maximum of ",(0,r.mdx)("inlineCode",{parentName:"p"},"8")," for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Week(s)")," unit, and ",(0,r.mdx)("inlineCode",{parentName:"p"},"24")," for ",(0,r.mdx)("inlineCode",{parentName:"p"},"Month(s)")," unit. The user is expected to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"Month(s)")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Year(s)")," respectively for larger values."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"})," All inputs must have a visible label that communicates the purpose of the field face up. Ensuring this label is always visible will ensure all users, especially those using assistive technologies, can understand the purpose of the input and interact with the field."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-onset-picker"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import OnsetPicker from 'terra-clinical-onset-picker';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support"),"**"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("p",null,"** This component does not support Arabic translations"),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(c,{title:"Default with initialization",mdxType:"DefaultOnset"}),(0,r.mdx)(O,{title:"Onset picker with supplied data and handlers",mdxType:"HandledOnset"}),(0,r.mdx)(E,{title:"Onset picker with Hidden legend",mdxType:"OnsetWithHiddenLegend"}),(0,r.mdx)("h2",{id:"onset-picker-props"},"Onset Picker Props"),(0,r.mdx)(Y,{mdxType:"OnsetPickerPropsTable"}))}U.isMDXComponent=!0},61812:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-onset-picker",name:"terra-clinical-onset-picker",version:"4.37.0",url:t})}},15748:function(e,t,n){t.Z=void 0;var a=i(n(67294)),r=i(n(30381)),l=i(n(67333));function i(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.default)().subtract(6,"years");t.Z=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"Birthdate: ".concat(o.format("MM-DD-YYYY"))),a.default.createElement(l.default,{required:!0,legend:"Onset of symptoms",birthdate:o.format("YYYY-MM-DD"),id:"doogs"}))}},25311:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=o(n(67294)),l=o(n(30381)),i=o(n(67333));function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,m(a.key),a)}}function m(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}function p(e,t,n){return t=u(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}(e,s()?Reflect.construct(t,n||[],u(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,t,[e])).state={precision:"before",granularity:"year",onsetDate:(0,l.default)().subtract(2,"years").format("YYYY-MM-DD")},n.handleOnset=n.handleOnset.bind(c(n)),n.handleSubmit=n.handleSubmit.bind(c(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),n=t,(a=[{key:"handleOnset",value:function(e){this.setState({precision:e.precision,granularity:e.granularity,onsetDate:e.onsetDate,ageUnit:e.ageUnit})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState((function(e){return{submittedData:{precision:e.precision,granularity:e.granularity,onsetDate:e.onsetDate,ageUnit:e.ageUnit}}}))}},{key:"render",value:function(){var e=(0,l.default)().subtract(6,"years");return r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement("p",null,"Birthdate: ".concat(e.format("MM-DD-YYYY"))),r.default.createElement(i.default,{birthdate:e.format("YYYY-MM-DD"),granularity:this.state.granularity,id:"doogs-supplied",precision:this.state.precision,precisionSet:["unknown","after","before","on/at"],onsetDate:this.state.onsetDate,legend:"Date of Onset",onsetOnChange:this.handleOnset}),r.default.createElement("button",{type:"submit"},"Submit"),this.state.submittedData&&r.default.createElement("div",null,r.default.createElement("hr",null),r.default.createElement("p",null,"Form was submitted with"),r.default.createElement("p",null,JSON.stringify(this.state.submittedData,null,2))))}}])&&d(n.prototype,a),o&&d(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.default.Component);t.Z=x},19253:function(e,t,n){t.Z=void 0;var a=i(n(67294)),r=i(n(30381)),l=i(n(67333));function i(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(l.default,{birthdate:(0,r.default)().subtract(6,"years").format("YYYY-MM-DD"),id:"onsetlegend",legend:"Date of Onset",isLegendHidden:!0})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);