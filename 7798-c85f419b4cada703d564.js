"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7798],{96735:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=f(a(67294)),u=f(a(45697)),r=f(a(94184)),i=f(a(47166)),n=f(a(50026)),d=f(a(60778)),o=["label","textValue","isChildOfDescriptionList","ariaLabelledBy","children"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},c.apply(this,arguments)}function s(e,l){if(null==e)return{};var a,t,u=function(e,l){if(null==e)return{};var a,t,u={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(u[a]=e[a]);return u}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(u[a]=e[a])}return u}var b=i.default.bind(d.default),_={label:u.default.string.isRequired,textValue:u.default.string,isChildOfDescriptionList:u.default.bool,ariaLabelledBy:u.default.string,children:u.default.node},m={textValue:"",children:void 0,isChildOfDescriptionList:!1,ariaLabelledBy:void 0},p=function(e){var l,a=e.label,u=e.textValue,i=e.isChildOfDescriptionList,d=e.ariaLabelledBy,f=e.children,_=s(e,o),m=t.default.useContext(n.default),p=(0,r.default)(b("label-value-view",m.className),_.className);u||f?u&&(l=t.default.createElement("div",{className:b("value")},u)):l=t.default.createElement("div",{className:b("value")},"--");var v=t.default.createElement(t.default.Fragment,null,t.default.createElement("dt",{className:b("label")},a),t.default.createElement("dd",{className:b("value-wrapper")},l,f));return i?t.default.createElement(t.default.Fragment,null,v):t.default.createElement("dl",c({},_,{className:p,"aria-labelledby":d}),v)};p.propTypes=_,p.defaultProps=m;l.default=p},87798:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=r(a(67294)),u=r(a(96735));function r(e){return e&&e.__esModule?e:{default:e}}l.default=function(){return t.default.createElement(u.default,{label:"Label",textValue:"Some Sample Text"},t.default.createElement("div",{id:"child"},t.default.createElement("h2",null,"Sample Title"),"Sample Text to Follow"))}},60778:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"LabelValueView-module__clinical-lowlight-theme___Ix4+a","orion-fusion-theme":"LabelValueView-module__orion-fusion-theme___SSp3l","label-value-view":"LabelValueView-module__label-value-view___OMawx",label:"LabelValueView-module__label___BusfL",value:"LabelValueView-module__value___uq3WT","value-wrapper":"LabelValueView-module__value-wrapper___cULmG"}}}]);