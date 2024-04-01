"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[7838,911],{201:function(e,t,n){var a=n(24994),i=n(73738);t.A=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=a(n(5556)),u=a(n(67967)),s=n(92912),c=a(n(49558)),d=a(n(53665)),f=n(25966),m=a(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=u.default.bind(m.default),_={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,i=e.title,l=e.description,u=e.isExpanded,m=(0,r.useState)(u),p=(0,o.default)(m,2),_=p[0],b=p[1],v=(0,r.useState)(!1),O=(0,o.default)(v,2),w=O[0],E=O[1],j=r.default.useContext(s.ThemeContext),T=void 0!==a,C=function(){E(!w),_&&b(!_)},S=function(){b(!_),w&&E(!w)},N=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:h("template",j.className)},r.default.createElement("div",{className:h("header")},i&&r.default.createElement("h2",{className:h("title")},i)),r.default.createElement("div",{className:h("content")},l&&r.default.createElement("div",{className:h("description")},l),t),r.default.createElement("div",{className:h("footer")},n?r.default.createElement("div",{className:h("button-container")},T&&r.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":w}),onClick:C,onKeyDown:function(e){return N(e,C)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:h("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:h("chevron")})),r.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:S,onKeyDown:function(e){return N(e,S)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:h("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:h("chevron")}))):null,r.default.createElement("div",null,w&&r.default.createElement("div",{className:h("css")},a),_&&r.default.createElement("div",{className:h("code")},n))))};b.propTypes=_,b.defaultProps={isExpanded:!1};t.A=b},86159:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(96540)),i=s(n(5556)),o=s(n(67967)),r=s(n(52103)),l=s(n(36605)),u=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=o.default.bind(l.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:i.default.string},_=function(e){var t=e.children,n=d(e,u),i=a.default.useContext(r.default),l=(0,o.default)(f(["button",i.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:l,onBlur:m,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},20999:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(96540)),i=u(n(5556)),o=u(n(67967)),r=u(n(52103)),l=u(n(17269));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),c={ariaLevel:i.default.oneOf(["2","3","4","5","6"]),children:i.default.node,variant:i.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,i=e.children,o=a.default.useContext(r.default);return a.default.createElement("div",{className:s("notice",n,o.className)},a.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:s("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(i,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=c,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},18778:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(96540)),i=c(n(5556)),o=c(n(46942)),r=c(n(67967)),l=c(n(52103)),u=c(n(16576)),s=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.default.bind(u.default),p={title:i.default.string},h=function(e){var t=e.title,n=f(e,s),i=a.default.useContext(l.default),r=(0,o.default)(m(["placeholder",i.className]),n.className),u=m(["inner"]);return a.default.createElement("div",d({},n,{className:r}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:m("title")},t)))};h.propTypes=p,h.defaultProps={title:""};t.default=h},74647:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return i.default}});var a=r(n(20999)),i=r(n(18778)),o=r(n(86159));function r(e){return e&&e.__esModule?e:{default:e}}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},36605:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},58751:function(e,t,n){n.r(t),t.default={"toggle-button":"ToggleButton-module__toggle-button___eo1aB",icon:"ToggleButton-module__icon___mFdVK","is-open":"ToggleButton-module__is-open___W1RlO","is-icon-animated":"ToggleButton-module__is-icon-animated___4e24X","button-text":"ToggleButton-module__button-text___+N0CK"}},21154:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7F95e"}},56650:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(96540)),l=s(n(5556)),u=s(n(46942));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;for(var i={},o=Object.keys(e),r=0;r<o.length;r++){var l=o[r];-1===n.indexOf(l)&&(i[l]=e[l])}return i}function p(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function h(e){return!isNaN(parseFloat(e))&&isFinite(e)}function _(e){return"string"==typeof e&&e.search("%")===e.length-1&&h(e.substr(0,e.length-1))}function y(e,t){e&&"function"==typeof e&&e(t)}var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var a="auto",o="visible";h(e.height)?(a=e.height<0||"0"===e.height?0:e.height,o="hidden"):_(e.height)&&(a="0%"===e.height?0:e.height,o="hidden"),n.animationStateClasses=i({},d,e.animationStateClasses);var r=n.getStaticStateClasses(a);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:a,overflow:o,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,a,i=this,o=this.props,r=o.height,l=o.onAnimationEnd,s=o.onAnimationStart,d=this.getTimings(),f=d.duration,m=d.delay;if(this.contentElement&&r!==e.height){var g;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=f+m,O=null,w={height:null,overflow:"hidden"},E="auto"===t.height;h(r)?(O=r<0||"0"===r?0:r,w.height=O):_(r)?(O="0%"===r?0:r,w.height=O):(O=b,w.height="auto",w.overflow=null),E&&(w.height=O,O=b);var j=(0,u.default)((c(g={},this.animationStateClasses.animating,!0),c(g,this.animationStateClasses.animatingUp,"auto"===e.height||r<e.height),c(g,this.animationStateClasses.animatingDown,"auto"===r||r>e.height),c(g,this.animationStateClasses.animatingToHeightZero,0===w.height),c(g,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(g,this.animationStateClasses.animatingToHeightSpecific,w.height>0),g)),T=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:j,height:O,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(w.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){i.setState(w),y(s,{newHeight:w.height})},(a=[])[0]=requestAnimationFrame((function(){a[1]=requestAnimationFrame((function(){n()}))})),a),this.animationClassesTimeoutID=setTimeout((function(){i.setState({animationStateClasses:T,shouldUseTransitions:!1}),i.hideContent(w.height),y(l,{newHeight:w.height})}),v)):(y(s,{newHeight:O}),this.timeoutID=setTimeout((function(){w.animationStateClasses=T,w.shouldUseTransitions=!1,i.setState(w),"auto"!==r&&i.hideContent(O),y(l,{newHeight:O})}),v))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var e=this.props;return{delay:e.delay,duration:e.duration}}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,u.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,o=n.applyInlineTransitions,l=n.children,s=n.className,d=n.contentClassName,p=n.easing,h=n.id,_=n.style,y=this.state,g=y.height,b=y.overflow,v=y.animationStateClasses,O=y.shouldUseTransitions,w=this.getTimings(),E=w.duration,j=w.delay,T=i({},_,{height:g,overflow:b||_.overflow});O&&o&&(T.transition="height "+E+"ms "+p+" "+j+"ms",_.transition&&(T.transition=_.transition+", "+T.transition),T.WebkitTransition=T.transition);var C={};a&&(C.transition="opacity "+E+"ms "+p+" "+j+"ms",C.WebkitTransition=C.transition,0===g&&(C.opacity=0));var S=(0,u.default)((c(e={},v,!0),c(e,s,s),e)),N="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===g;return r.default.createElement("div",i({},m.apply(void 0,[this.props].concat(f)),{"aria-hidden":N,className:S,id:h,style:T}),r.default.createElement("div",{className:d,style:C,ref:function(e){return t.contentElement=e}},l))}}]),t}(r.default.Component);g.propTypes={"aria-hidden":l.default.bool,animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,delay:l.default.number,duration:l.default.number,easing:l.default.string,height:function(e,t,n){var i=e[t];return"number"==typeof i&&i>=0||_(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"==typeof i?"undefined":a(i))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:l.default.string,onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},g.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=g},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(96540)),i=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=l},92613:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(96540)),i=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};l.displayName="IconComment",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=l},94572:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(96540)),i=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M48 22.7 37.4 12.1c-1.3-1.3-3.6-1.3-4.9 0l-3.8 3.8 2.1 2.1 3.8-3.8c.1-.1.3-.1.4-.1s.2 0 .4.1L43 22c-1.2-.6-2.8-1-4.8-1-6.7 0-9.7 1.4-10.9 3.8-1-.4-2.2-.7-3.3-.7s-2.3.2-3.3.7C19.5 22.4 16.5 21 9.8 21c-2 0-3.6.3-4.8 1l7.7-7.7c.2-.2.5-.2.7 0l3.8 3.8 2.1-2.1-3.8-3.8c-1.4-1.4-3.6-1.4-4.9 0L0 22.7V26l1.7 1.7v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8c.8-.4 1.7-.6 2.7-.6s1.9.2 2.7.6v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8L48 26v-3.3zM11.5 34.2c-3.4 0-7.1-2.3-7.1-5.6 0-3.2.9-4.9 5.4-4.9 8.8 0 8.8 2.3 8.8 4.9 0 3.3-3.7 5.6-7.1 5.6zm25 0c-3.4 0-7.1-2.3-7.1-5.6 0-2.6 0-4.9 8.8-4.9 3.5 0 5.4.8 5.4 4.9 0 3.3-3.8 5.6-7.1 5.6z"}))};l.displayName="IconGlasses",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=l},76491:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(n(96540)),o=f(n(5556)),r=f(n(67967)),l=f(n(23986)),u=f(n(53665)),s=f(n(38790)),c=f(n(58751)),d=["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_(a.key),a)}}function _(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function y(e,t,n){return t=b(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}var O=r.default.bind(c.default),w={children:o.default.node.isRequired,closedButtonText:o.default.string.isRequired,buttonAttrs:o.default.object,icon:o.default.element,isAnimated:o.default.bool,isIconAnimated:o.default.bool,isIconOnly:o.default.bool,isInitiallyOpen:o.default.bool,onClose:o.default.func,onOpen:o.default.func,openedButtonText:o.default.string},E={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:i.default.createElement(u.default,null)},j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,t,[e])).state={isOpen:e.isInitiallyOpen},n.handleOnClick=n.handleOnClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(t,e),n=t,(a=[{key:"handleOnClick",value:function(e){e.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.props,t=e.buttonAttrs,n=(e.children,e.closedButtonText),a=e.icon,o=(e.isAnimated,e.isIconAnimated),r=e.isIconOnly,u=(e.isInitiallyOpen,e.onClose,e.onOpen,e.openedButtonText),c=p(e,d),f=u||n,h=this.state.isOpen?f:n,_=r?n:h,y=O(["button",{"is-open":this.state.isOpen},{"is-icon-animated":o},c.className]),g=i.default.createElement(l.default,m({},t,{isIconOnly:r,icon:i.default.createElement("span",{className:O("icon")},a),"aria-expanded":this.state.isOpen,text:_,onClick:this.handleOnClick}));return i.default.createElement("div",m({},c,{className:y}),g,i.default.createElement(s.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&h(n.prototype,a),o&&h(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a,o}(i.default.Component);j.propTypes=w,j.defaultProps=E;t.default=j},38790:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(96540)),i=s(n(5556)),o=s(n(67967)),r=s(n(56650)),l=s(n(21154)),u=["isAnimated","isOpen","children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=o.default.bind(l.default),m={children:i.default.node.isRequired,isAnimated:i.default.bool,isOpen:i.default.bool},p=function(e){var t,n=e.isAnimated,i=e.isOpen,o=e.children,l=d(e,u),s=i?"auto":0;return t=n?a.default.createElement(r.default,{duration:250,height:s,easing:"ease-out"},o):i&&o,a.default.createElement("div",c({},l,{className:f("toggle",l.className),"aria-hidden":!i}),t)};p.propTypes=m,p.defaultProps={isAnimated:!1,isOpen:!1};t.default=p}}]);