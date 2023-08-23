"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[5571],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),m=a(n(47166)),d=n(21538),s=a(n(33864)),c=a(n(23399)),p=n(51051),u=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=m.default.bind(u.default),x={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,m=e.isExpanded,u=(0,i.useState)(m),f=(0,r.default)(u,2),x=f[0],w=f[1],E=(0,i.useState)(!1),h=(0,r.default)(E,2),b=h[0],T=h[1],O=i.default.useContext(d.ThemeContext),I=void 0!==a,D=function(){T(!b),x&&w(!x)},C=function(){w(!x),b&&T(!b)},_=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:y("template",O.className)},i.default.createElement("div",{className:y("header")},l&&i.default.createElement("h2",{className:y("title")},l)),i.default.createElement("div",{className:y("content")},o&&i.default.createElement("div",{className:y("description")},o),t),i.default.createElement("div",{className:y("footer")},n?i.default.createElement("div",{className:y("button-container")},I&&i.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":b}),onClick:D,onKeyDown:function(e){return _(e,D)},onBlur:v,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:y("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(c.default,{className:y("chevron")})),i.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":x}),onClick:C,onKeyDown:function(e){return _(e,C)},onBlur:v,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:y("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(c.default,{className:y("chevron")}))):null,i.default.createElement("div",null,b&&i.default.createElement("div",{className:y("css")},a),x&&i.default.createElement("div",{className:y("code")},n))))};w.propTypes=x,w.defaultProps={isExpanded:!1};var E=w;t.Z=E},51609:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var a=n(67294),l=n(81254),r=n(92686),i=n(2402),o=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function c(e){var t=e.components,n=d(e,o);return(0,l.mdx)("wrapper",m({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport ItemView from \'terra-clinical-item-view\';\n\nconst display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;\nconst display2 = <ItemView.Display text="Care Position: Primary" />;\nconst display3 = <ItemView.Display text="Room 100A" />;\nconst display4 = <ItemView.Display text="Acuity: 5" />;\nconst display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;\nconst display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;\nconst displays = [display1, display2, display3, display4, display5, display6];\n\nexport default () => <ItemView displays={displays} />;\n\n')))}c.isMDXComponent=!0;var p=n(49271),u=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(p.Z,{title:t||"Item View Standard",description:n,example:a.createElement(i.Z,null),exampleSrc:a.createElement(c,null),isExpanded:l})},f=n(18396),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={};function w(e){var t=e.components,n=v(e,y);return(0,l.mdx)("wrapper",x({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconBriefcase from \'terra-icon/lib/icon/IconBriefcase\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport ItemView from \'terra-clinical-item-view\';\n\nconst display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;\nconst display2 = <ItemView.Display icon={<IconBriefcase />} iconAlignment="inline" text="Care Position: Primary" />;\nconst display3 = <ItemView.Display text="Room 100A" />;\nconst display4 = <ItemView.Display text="Acuity: 5" />;\nconst display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;\nconst display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;\nconst displays = [display1, display2, display3, display4, display5, display6];\n\nexport default () => <ItemView displays={displays} layout="twoColumns" />;\n\n')))}w.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(p.Z,{title:t||"Item View Two Column",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(w,null),isExpanded:l})},h=n(65595),b=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var I={};function D(e){var t=e.components,n=O(e,b);return(0,l.mdx)("wrapper",T({},I,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport ItemView from \'terra-clinical-item-view\';\n\nconst display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;\nconst display2 = <ItemView.Display text="Care Position: Primary" />;\nconst display3 = <ItemView.Display text="Room 100A" />;\nconst display4 = <ItemView.Display text="Acuity: 5" />;\nconst display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;\nconst display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;\nconst displays = [display1, display2, display3, display4, display5, display6];\n\nexport default () => <ItemView displays={displays} layout="twoColumns" textEmphasis="start" />;\n\n')))}D.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(p.Z,{title:t||"Item View Two Column Start",description:n,example:a.createElement(h.Z,null),exampleSrc:a.createElement(D,null),isExpanded:l})},_=n(18865),j=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var A={};function V(e){var t=e.components,n=P(e,j);return(0,l.mdx)("wrapper",N({},A,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport ItemView from \'terra-clinical-item-view\';\n\nconst display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;\nconst display2 = <ItemView.Display text="Care Position: Primary" />;\nconst display3 = <ItemView.Display text="Room 100A" />;\nconst display4 = <ItemView.Display text="Acuity: 5" />;\nconst display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;\nconst display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;\nconst displays = [display1, display2, display3, display4, display5, display6];\n\nconst comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;\n\nexport default () => <ItemView displays={displays} comment={comment} />;\n\n')))}V.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(p.Z,{title:t||"Item View Comment",description:n,example:a.createElement(_.Z,null),exampleSrc:a.createElement(V,null),isExpanded:l})},S=n(57723),M=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var Z={};function X(e){var t=e.components,n=q(e,M);return(0,l.mdx)("wrapper",k({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport IconAlert from \'terra-icon/lib/icon/IconAlert\';\nimport IconInformation from \'terra-icon/lib/icon/IconInformation\';\nimport IconBedRequested from \'terra-icon/lib/icon/IconBedRequested\';\nimport ItemView from \'terra-clinical-item-view\';\n\nconst display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;\nconst display2 = <ItemView.Display icon={<IconBedRequested />} iconAlignment="inline" text="Pending Admit: Bed Requested" />;\nconst display3 = <ItemView.Display text="Room 100A" />;\nconst display4 = <ItemView.Display text="Acuity: 5" />;\nconst display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;\nconst display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;\nconst displays = [display1, display2, display3, display4, display5, display6];\n\nconst comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;\n\nconst accessoryStart = <IconAlert />;\nconst accessoryEnd = <IconInformation />;\n\nexport default () => (\n  <ItemView\n    displays={displays}\n    layout="twoColumns"\n    isTruncated\n    textEmphasis="start"\n    startAccessory={accessoryStart}\n    endAccessory={accessoryEnd}\n    comment={comment}\n  />\n);\n\n')))}X.isMDXComponent=!0;var B=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(p.Z,{title:t||"Item View All",description:n,example:a.createElement(S.Z,null),exampleSrc:a.createElement(X,null),isExpanded:l})},W=n(2984),K=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var F={};function H(e){var t=e.components,n=z(e,K);return(0,l.mdx)("wrapper",L({},F,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport IconAlert from \'terra-icon/lib/icon/IconAlert\';\nimport IconInformation from \'terra-icon/lib/icon/IconInformation\';\nimport IconBedRequested from \'terra-icon/lib/icon/IconBedRequested\';\nimport ItemView from \'terra-clinical-item-view\';\n\nconst display1 = <ItemView.Display icon={<IconPerson />} iconAlignment="inline" text="Asif Khan" />;\nconst display2 = <ItemView.Display icon={<IconBedRequested />} iconAlignment="inline" text="Pending Admit: Bed Requested" />;\nconst display3 = <ItemView.Display text="Room 100A" />;\nconst display4 = <ItemView.Display text="Acuity: 5" />;\nconst display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;\nconst display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;\nconst displays = [display1, display2, display3, display4, display5, display6];\n\nconst comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;\n\nconst accessoryStart = <IconAlert />;\nconst accessoryEnd = <IconInformation />;\n\nexport default () => (\n  <ItemView\n    displays={displays}\n    layout="twoColumns"\n    isTruncated\n    textEmphasis="start"\n    accessoryAlignment="alignTop"\n    startAccessory={accessoryStart}\n    endAccessory={accessoryEnd}\n    comment={comment}\n  />\n);\n\n')))}H.isMDXComponent=!0;var G=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(p.Z,{title:t||"Item View All Top Aligned",description:n,example:a.createElement(W.Z,null),exampleSrc:a.createElement(H,null),isExpanded:l})},Y=n(78530),J=["components"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var $={},ee="wrapper";function te(e){var t=e.components,n=U(e,J);return(0,l.mdx)(ee,Q({},$,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(Y.ZP,{mdxType:"PropsTable"},(0,l.mdx)(Y.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"layout"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'oneColumn'\n  'twoColumns'\n],\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'oneColumn'\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The column layout in which to present the displays. One of ",(0,l.mdx)("inlineCode",{parentName:"p"},"oneColumn"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"twoColumn"),"."))),(0,l.mdx)(Y.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"textEmphasis"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'start'\n],\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The text color emphasis when using two columns. One of ",(0,l.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"start"),"."))),(0,l.mdx)(Y.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"isTruncated"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not all text on the view should be truncated."))),(0,l.mdx)(Y.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"accessoryAlignment"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'alignTop'\n  'alignCenter'\n],\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'alignCenter'\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The vertical alignment of the start and end accessories. One of ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignTop"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignCenter"),"."))),(0,l.mdx)(Y.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"startAccessory"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The react element to be placed in the start aligned accessory position."))),(0,l.mdx)(Y.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"reserveStartAccessorySpace"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Indicates whether or not space is allocated for the start accessory if none is given."))),(0,l.mdx)(Y.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"endAccessory"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The react element to be placed in the end aligned accessory position."))),(0,l.mdx)(Y.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"displays"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'element',\n}],\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An array of terra-clinical-item-display's to be presented."))),(0,l.mdx)(Y.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"comment"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The react element for the comment element."))),(0,l.mdx)(Y.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(Y.O,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(Y.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(Y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(Y.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(Y.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback for the ref of the outer most div.")))))}te.isMDXComponent=!0;var ne=["components"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ae.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var re={},ie="wrapper";function oe(e){var t=e.components,n=le(e,ne);return(0,l.mdx)(ie,ae({},re,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-clinical-item-view"},"Terra Clinical Item View"),(0,l.mdx)("p",null,"The Item View component allows displays to be organized into rows and column and themed, while providing means to add accessory elements and a comment."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-item-view"))))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ItemView from 'terra-clinical-item-view';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(u,{title:"ItemView - Default",mdxType:"ItemViewStandard"}),(0,l.mdx)(E,{title:"ItemView - Two Column Layout",description:"When including icons as part of an '<ItemView.Display />'', it is recommended to use the iconAlignment='inline' prop for best alignment and wrapping with the text.",mdxType:"ItemViewTwoColumn"}),(0,l.mdx)(C,{title:"ItemView - Start Emphasis",mdxType:"ItemViewTwoColumnStart"}),(0,l.mdx)(R,{title:"ItemView - Comment",mdxType:"ItemViewComment"}),(0,l.mdx)(B,{title:"ItemView - All Elements",mdxType:"ItemViewAll"}),(0,l.mdx)(G,{title:"ItemView - All Elements Top Aligned",mdxType:"ItemViewAllTopAligned"}),(0,l.mdx)("h2",{id:"item-view-props"},"Item View Props"),(0,l.mdx)(te,{mdxType:"ItemViewProps"}))}oe.isMDXComponent=!0},92686:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-view",name:"terra-clinical-item-view",version:"4.10.0",url:t})}},57723:function(e,t,n){t.Z=void 0;var a=d(n(67294)),l=d(n(41086)),r=d(n(3343)),i=d(n(62936)),o=d(n(65559)),m=d(n(37856));function d(e){return e&&e.__esModule?e:{default:e}}var s=[a.default.createElement(m.default.Display,{icon:a.default.createElement(l.default,null),iconAlignment:"inline",text:"Asif Khan"}),a.default.createElement(m.default.Display,{icon:a.default.createElement(o.default,null),iconAlignment:"inline",text:"Pending Admit: Bed Requested"}),a.default.createElement(m.default.Display,{text:"Room 100A"}),a.default.createElement(m.default.Display,{text:"Acuity: 5"}),a.default.createElement(m.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),a.default.createElement(m.default.Display,{text:"End Time: 08-05-2016 16:00:00"})],c=a.default.createElement(m.default.Comment,{text:"Faint red rash appeared at 08-05-2016 13:24:00"}),p=a.default.createElement(r.default,null),u=a.default.createElement(i.default,null);t.Z=function(){return a.default.createElement(m.default,{displays:s,layout:"twoColumns",isTruncated:!0,textEmphasis:"start",startAccessory:p,endAccessory:u,comment:c})}},2984:function(e,t,n){t.Z=void 0;var a=d(n(67294)),l=d(n(41086)),r=d(n(3343)),i=d(n(62936)),o=d(n(65559)),m=d(n(37856));function d(e){return e&&e.__esModule?e:{default:e}}var s=[a.default.createElement(m.default.Display,{icon:a.default.createElement(l.default,null),iconAlignment:"inline",text:"Asif Khan"}),a.default.createElement(m.default.Display,{icon:a.default.createElement(o.default,null),iconAlignment:"inline",text:"Pending Admit: Bed Requested"}),a.default.createElement(m.default.Display,{text:"Room 100A"}),a.default.createElement(m.default.Display,{text:"Acuity: 5"}),a.default.createElement(m.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),a.default.createElement(m.default.Display,{text:"End Time: 08-05-2016 16:00:00"})],c=a.default.createElement(m.default.Comment,{text:"Faint red rash appeared at 08-05-2016 13:24:00"}),p=a.default.createElement(r.default,null),u=a.default.createElement(i.default,null);t.Z=function(){return a.default.createElement(m.default,{displays:s,layout:"twoColumns",isTruncated:!0,textEmphasis:"start",accessoryAlignment:"alignTop",startAccessory:p,endAccessory:u,comment:c})}},18865:function(e,t,n){t.Z=void 0;var a=i(n(67294)),l=i(n(41086)),r=i(n(37856));function i(e){return e&&e.__esModule?e:{default:e}}var o=[a.default.createElement(r.default.Display,{icon:a.default.createElement(l.default,null),iconAlignment:"inline",text:"Asif Khan"}),a.default.createElement(r.default.Display,{text:"Care Position: Primary"}),a.default.createElement(r.default.Display,{text:"Room 100A"}),a.default.createElement(r.default.Display,{text:"Acuity: 5"}),a.default.createElement(r.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),a.default.createElement(r.default.Display,{text:"End Time: 08-05-2016 16:00:00"})],m=a.default.createElement(r.default.Comment,{text:"Faint red rash appeared at 08-05-2016 13:24:00"});t.Z=function(){return a.default.createElement(r.default,{displays:o,comment:m})}},2402:function(e,t,n){t.Z=void 0;var a=i(n(67294)),l=i(n(41086)),r=i(n(37856));function i(e){return e&&e.__esModule?e:{default:e}}var o=[a.default.createElement(r.default.Display,{icon:a.default.createElement(l.default,null),iconAlignment:"inline",text:"Asif Khan"}),a.default.createElement(r.default.Display,{text:"Care Position: Primary"}),a.default.createElement(r.default.Display,{text:"Room 100A"}),a.default.createElement(r.default.Display,{text:"Acuity: 5"}),a.default.createElement(r.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),a.default.createElement(r.default.Display,{text:"End Time: 08-05-2016 16:00:00"})];t.Z=function(){return a.default.createElement(r.default,{displays:o})}},18396:function(e,t,n){t.Z=void 0;var a=o(n(67294)),l=o(n(56468)),r=o(n(41086)),i=o(n(37856));function o(e){return e&&e.__esModule?e:{default:e}}var m=[a.default.createElement(i.default.Display,{icon:a.default.createElement(r.default,null),iconAlignment:"inline",text:"Asif Khan"}),a.default.createElement(i.default.Display,{icon:a.default.createElement(l.default,null),iconAlignment:"inline",text:"Care Position: Primary"}),a.default.createElement(i.default.Display,{text:"Room 100A"}),a.default.createElement(i.default.Display,{text:"Acuity: 5"}),a.default.createElement(i.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),a.default.createElement(i.default.Display,{text:"End Time: 08-05-2016 16:00:00"})];t.Z=function(){return a.default.createElement(i.default,{displays:m,layout:"twoColumns"})}},65595:function(e,t,n){t.Z=void 0;var a=i(n(67294)),l=i(n(41086)),r=i(n(37856));function i(e){return e&&e.__esModule?e:{default:e}}var o=[a.default.createElement(r.default.Display,{icon:a.default.createElement(l.default,null),iconAlignment:"inline",text:"Asif Khan"}),a.default.createElement(r.default.Display,{text:"Care Position: Primary"}),a.default.createElement(r.default.Display,{text:"Room 100A"}),a.default.createElement(r.default.Display,{text:"Acuity: 5"}),a.default.createElement(r.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),a.default.createElement(r.default.Display,{text:"End Time: 08-05-2016 16:00:00"})];t.Z=function(){return a.default.createElement(r.default,{displays:o,layout:"twoColumns",textEmphasis:"start"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},65559:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M42 26H6V11c0-1.7-1.3-3-3-3s-3 1.3-3 3v29h6v-8h36v8h6V26h-6z"}),a.default.createElement("path",{d:"M39 14H21v9h27c0-5-4-9-9-9z"}),a.default.createElement("circle",{cx:"13.5",cy:"18.5",r:"4.5"}))};o.displayName="IconBedRequested",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=o;t.default=m},56468:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};o.displayName="IconBriefcase",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=o;t.default=m},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=o;t.default=m},41086:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0a11.3 11.3 0 1 1-11.3 11.3A11.35 11.35 0 0 1 24 0zm19.5 48v-5.7a16.77 16.77 0 0 0-16.8-16.8h-5.5A16.75 16.75 0 0 0 4.5 42.3V48z"}))};o.displayName="IconPerson",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=o;t.default=m}}]);