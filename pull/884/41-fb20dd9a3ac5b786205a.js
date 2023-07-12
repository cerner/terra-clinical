"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[41],{22863:function(e,a,l){var d=l(64836);a.Z=void 0;var n=d(l(67294)),m=d(l(45697)),t=d(l(47166)),r=d(l(17422)),i=t.default.bind(r.default),u={name:m.default.string.isRequired,src:m.default.string,url:m.default.string,version:m.default.string.isRequired},p=function(e){var a=e.src,l=e.name,d=e.url,m=e.version,t=n.default.createElement("a",{className:i("badge"),href:d||"https://www.npmjs.org/package/".concat(l,"/v/").concat(m)},n.default.createElement("span",{className:i("badge-name")},d?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(m))),r=a?n.default.createElement("a",{className:i("badge"),href:a},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},t,r)};p.propTypes=u;var x=p;a.Z=x},41:function(e,a,l){l.r(a),l.d(a,{default:function(){return h}});l(67294);var d=l(81254),n=l(86469),m=["components"];function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d])}return e},t.apply(this,arguments)}function r(e,a){if(null==e)return{};var l,d,n=function(e,a){if(null==e)return{};var l,d,n={},m=Object.keys(e);for(d=0;d<m.length;d++)l=m[d],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(d=0;d<m.length;d++)l=m[d],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i={},u="wrapper";function p(e){var a=e.components,l=r(e,m);return(0,d.mdx)(u,t({},i,l,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"changelog"},"Changelog"),(0,d.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added a new prop ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," on the LabelValueView component.")))),(0,d.mdx)("h2",{id:"3290---june-14-2023"},"3.29.0 - (June 14, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Created a new prop ",(0,d.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList")," on the LabelValueView component."),(0,d.mdx)("li",{parentName:"ul"},"Updated the LabelValueView to be:"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre"},'- a React.Fragment with a term and a definition when the LabelValueView is already inside a description list (when isChildOfDescriptionList is sent with a "true" value)\n'))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre"},'- a description list when isChildOfDescriptionList is not sent (undefined) or sent as "false"\n'))),(0,d.mdx)("li",{parentName:"ul"},"Updated the component examples for new prop ",(0,d.mdx)("inlineCode",{parentName:"li"},"isChildOfDescriptionList"),".")))),(0,d.mdx)("h2",{id:"3280---april-21-2023"},"3.28.0 - (April 21, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated the component examples.")))),(0,d.mdx)("h2",{id:"3270---march-29-2023"},"3.27.0 - (March 29, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated wdio screenshots.")))),(0,d.mdx)("h2",{id:"3260---july-21-2021"},"3.26.0 - (July 21, 2021)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,d.mdx)("h2",{id:"3250---march-25-2021"},"3.25.0 - (March 25, 2021)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Upgrade tests to terra-functional-testing and WebDriverIO v6")))),(0,d.mdx)("h2",{id:"3240---january-5-2021"},"3.24.0 - (January 5, 2021)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")))),(0,d.mdx)("h2",{id:"3230---november-10-2020"},"3.23.0 - (November 10, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,d.mdx)("h2",{id:"3220---august-25-2020"},"3.22.0 - (August 25, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Change label text color to use rgba instead of hex values.")))),(0,d.mdx)("h2",{id:"3210---august-4-2020"},"3.21.0 - (August 4, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),(0,d.mdx)("h2",{id:"3200---june-9-2020"},"3.20.0 - (June 9, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),(0,d.mdx)("h2",{id:"3190---april-28-2020"},"3.19.0 - (April 28, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",(0,d.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Removed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),(0,d.mdx)("h2",{id:"3180---april-14-2020"},"3.18.0 - (April 14, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),(0,d.mdx)("h2",{id:"3170---march-31-2020"},"3.17.0 - (March 31, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added wdio screenshots for clinical-lowlight-theme")))),(0,d.mdx)("h2",{id:"3160---march-17-2020"},"3.16.0 - (March 17, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update mdx syntax for docs")))),(0,d.mdx)("h2",{id:"3150---february-18-2020"},"3.15.0 - (February 18, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),(0,d.mdx)("h2",{id:"3140---january-28-2020"},"3.14.0 - (January 28, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),(0,d.mdx)("h2",{id:"3130---january-22-2020"},"3.13.0 - (January 22, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),(0,d.mdx)("h2",{id:"3120---january-7-2020"},"3.12.0 - (January 7, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax")))),(0,d.mdx)("h2",{id:"3110---october-30-2019"},"3.11.0 - (October 30, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"3100---september-26-2019"},"3.10.0 - (September 26, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"390---september-19-2019"},"3.9.0 - (September 19, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Convert SCSS files to .module.scss")))),(0,d.mdx)("h2",{id:"380---september-6-2019"},"3.8.0 - (September 6, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed inline styles from dev site components."),(0,d.mdx)("li",{parentName:"ul"},"Add comments for ESlint 6"),(0,d.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files"),(0,d.mdx)("li",{parentName:"ul"},"Removed clinical-item-display as a dependency.")))),(0,d.mdx)("h2",{id:"370---august-14-2019"},"3.7.0 - (August 14, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated package.json test scripts")))),(0,d.mdx)("h2",{id:"360---july-16-2019"},"3.6.0 - (July 16, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Replaced inline stylings for terra-dev-site components with .scss files"),(0,d.mdx)("li",{parentName:"ul"},"Update wdio spec to use Terra.describeViewports")))),(0,d.mdx)("h2",{id:"350---june-11-2019"},"3.5.0 - (June 11, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Removed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore")))),(0,d.mdx)("h2",{id:"340---march-26-2019"},"3.4.0 - (March 26, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Removed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),(0,d.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),(0,d.mdx)("h2",{id:"330---february-26-2019"},"3.3.0 - (February 26, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"320---february-5-2019"},"3.2.0 - (February 5, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"310---january-22-2019"},"3.1.0 - (January 22, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Dependency updates")))),(0,d.mdx)("h2",{id:"300---january-17-2019"},"3.0.0 - (January 17, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Breaking Change"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated css theming variable name to fit linter standards"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Changelog dev site doc page")))),(0,d.mdx)("h2",{id:"2170---november-21-2018"},"2.17.0 - (November 21, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"2160---august-30-2018"},"2.16.0 - (August 30, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Enable color contrast accessibility rule")))),(0,d.mdx)("h2",{id:"2150---october-2-2018"},"2.15.0 - (October 2, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"2140---september-5-2018"},"2.14.0 - (September 5, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),(0,d.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),(0,d.mdx)("h2",{id:"2130---august-30-2018"},"2.13.0 - (August 30, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"2120---august-1-2018"},"2.12.0 - (August 1, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"2111---july-25-2018"},"2.11.1 - (July 25, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Patch release")))),(0,d.mdx)("h2",{id:"2110---july-25-2018"},"2.11.0 - (July 25, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"2100---july-17-2018"},"2.10.0 - (July 17, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"290---july-3-2018"},"2.9.0 - (July 3, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Lint in doc page")))),(0,d.mdx)("h2",{id:"280---june-28-2018"},"2.8.0 - (June 28, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"270---june-19-2018"},"2.7.0 - (June 19, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"260---june-12-2018"},"2.6.0 - (June 12, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Conform to eslint updates"),(0,d.mdx)("li",{parentName:"ul"},"Added theming variables in Label Value")))),(0,d.mdx)("h2",{id:"250---may-30-2018"},"2.5.0 - (May 30, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Moved examples to src")))),(0,d.mdx)("h2",{id:"240---may-22-2018"},"2.4.0 - (May 22, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"230---may-1-2018"},"2.3.0 - (May 1, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"220---march-27-2018"},"2.2.0 - (March 27, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated value font-size and the site example page")))),(0,d.mdx)("h2",{id:"210---march-6-2018"},"2.1.0 - (March 6, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"200---february-19-2018"},"2.0.0 - (February 19, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update to React 16")))),(0,d.mdx)("h2",{id:"150---february-19-2018"},"1.5.0 - (February 19, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"140---november-29-2017"},"1.4.0 - (November 29, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Break long words to wrap when needed")))),(0,d.mdx)("h2",{id:"130---september-26-2017"},"1.3.0 - (September 26, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Remove stylelint-disable selector-class-pattern")))),(0,d.mdx)("h2",{id:"120---september-1-2017"},"1.2.0 - (September 1, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Change dependency on terra-base to v2.0.0"),(0,d.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")))),(0,d.mdx)("h2",{id:"110---july-18-2017"},"1.1.0 - (July 18, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Converted component to use CSS modules"),(0,d.mdx)("li",{parentName:"ul"},"Updated nightwatch test scripts"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Removed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed nightwatch.config file")))),(0,d.mdx)("h2",{id:"100---june-28-2017"},"1.0.0 - (June 28, 2017)"),(0,d.mdx)("p",null,"Initial stable release"))}p.isMDXComponent=!0;var x=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d])}return e},o.apply(this,arguments)}function s(e,a){if(null==e)return{};var l,d,n=function(e,a){if(null==e)return{};var l,d,n={},m=Object.keys(e);for(d=0;d<m.length;d++)l=m[d],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(d=0;d<m.length;d++)l=m[d],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var N={},c="wrapper";function h(e){var a=e.components,l=s(e,x);return(0,d.mdx)(c,o({},N,l,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(n.C,{mdxType:"Badge"}),(0,d.mdx)(p,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},86469:function(e,a,l){l.d(a,{C:function(){return m}});var d=l(67294),n=l(22863),m=function(e){var a=e.url;return d.createElement(n.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-label-value-view",name:"terra-clinical-label-value-view",version:"3.29.0",url:a})}},17422:function(e,a,l){l.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);