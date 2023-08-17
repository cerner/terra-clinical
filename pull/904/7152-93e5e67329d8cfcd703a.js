"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7152],{96735:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=s(a(67294)),i=s(a(45697)),r=s(a(94184)),u=s(a(47166)),n=s(a(50026)),d=s(a(60778)),c=["label","textValue","isChildOfDescriptionList","ariaLabelledBy","children"];function s(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function f(e,l){if(null==e)return{};var a,t,i=function(e,l){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(i[a]=e[a]);return i}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=u.default.bind(d.default),m={label:i.default.string.isRequired,textValue:i.default.string,isChildOfDescriptionList:i.default.bool,ariaLabelledBy:i.default.string,children:i.default.node},b={textValue:"",children:void 0,isChildOfDescriptionList:!1,ariaLabelledBy:void 0},v=function(e){var l,a=e.label,i=e.textValue,u=e.isChildOfDescriptionList,d=e.ariaLabelledBy,s=e.children,m=f(e,c),b=t.default.useContext(n.default),v=(0,r.default)(p("label-value-view",b.className),m.className);i||s?i&&(l=t.default.createElement("div",{className:p("value")},i)):l=t.default.createElement("div",{className:p("value")},"--");var _=t.default.createElement(t.default.Fragment,null,t.default.createElement("dt",{className:p("label")},a),t.default.createElement("dd",{className:p("value-wrapper")},l,s));return u?t.default.createElement(t.default.Fragment,null,_):t.default.createElement("dl",o({},m,{className:v,"aria-labelledby":d}),_)};v.propTypes=m,v.defaultProps=b;var _=v;l.default=_},7152:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a(67294)),i=n(a(47166)),r=n(a(96735)),u=n(a(74621));function n(e){return e&&e.__esModule?e:{default:e}}var d=i.default.bind(u.default),c=function(){return t.default.createElement("div",null,t.default.createElement("style",null,"\n        #dl-wrapper > dd {\n          margin-bottom: 14px;\n        }\n\n        #dl-wrapper {\n          margin-block-end: 0;\n          margin-block-start: 0;\n        }\n      "),t.default.createElement("h3",null,"LabelValueView returned as a term and a definition (isChildOfDescriptionList='true'):"),t.default.createElement("h4",{id:"vitalsTopic"},"Vitals Topic Text"),t.default.createElement("dl",{id:"dl-wrapper","aria-labelledby":"vitalsTopic"},t.default.createElement(r.default,{label:"Collected By",textValue:"Noah Brown",isChildOfDescriptionList:!0}),t.default.createElement(r.default,{label:"Date",textValue:"12/12/12 00:00AM",isChildOfDescriptionList:!0}),t.default.createElement(r.default,{label:"Blood Pressure",textValue:"110/60 mmHg",isChildOfDescriptionList:!0}),t.default.createElement(r.default,{label:"Temperature",textValue:"97 F",isChildOfDescriptionList:!0}),t.default.createElement(r.default,{label:"Heart Rate",textValue:"80 BPM",isChildOfDescriptionList:!0})),t.default.createElement("h3",null,"LabelValueView returned as a description list (isChildOfDescriptionList='false'):"),t.default.createElement("h4",{id:"collectedByTopic"},"Collected By Topic Text"),t.default.createElement(r.default,{label:"Collected By",textValue:"Noah Brown",isChildOfDescriptionList:!1,ariaLabelledBy:"collectedByTopic"}),t.default.createElement("h3",null,"LabelValueView returned as a description list (isChildOfDescriptionList is not given - will take the default value false):"),t.default.createElement("h4",{id:"temperatureTopic"},"Temperature Topic Text"),t.default.createElement(r.default,{label:"Temperature",textValue:"97 F",ariaLabelledBy:"temperatureTopic"}),t.default.createElement("h3",null,"Applied max-width of 200px to show word wrapping:"),t.default.createElement("div",{className:d("labelvalueview-wrapper")},t.default.createElement(r.default,{id:"LongLabelValueView",label:"supercalifragilisticexpialidocious",textValue:"supercalifragilisticexpialidocious"})))};l.default=c},60778:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}},74621:function(e,l,a){a.r(l),l.default={"labelvalueview-wrapper":"TextValueLabelValueView-test-module__labelvalueview-wrapper___k063E"}}}]);