"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[3458],{49271:function(e,t,n){var a=n(64836),i=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),r=a(n(45697)),u=a(n(47166)),s=n(21538),d=a(n(33864)),c=a(n(23399)),f=n(51051),p=a(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var h=u.default.bind(p.default),_={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,i=e.title,r=e.description,u=e.isExpanded,p=(0,o.useState)(u),m=(0,l.default)(p,2),_=m[0],b=m[1],g=(0,o.useState)(!1),O=(0,l.default)(g,2),w=O[0],E=O[1],P=o.default.useContext(s.ThemeContext),S=void 0!==a,C=function(){E(!w),_&&b(!_)},N=function(){b(!_),w&&E(!w)},j=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",P.className)},o.default.createElement("div",{className:h("header")},i&&o.default.createElement("h2",{className:h("title")},i)),o.default.createElement("div",{className:h("content")},r&&o.default.createElement("div",{className:h("description")},r),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},S&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":w}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:h("chevron")}))):null,o.default.createElement("div",null,w&&o.default.createElement("div",{className:h("css")},a),_&&o.default.createElement("div",{className:h("code")},n))))};b.propTypes=_,b.defaultProps={isExpanded:!1};var g=b;t.Z=g},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),i=s(n(45697)),l=s(n(47166)),o=s(n(50026)),r=s(n(66983)),u=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=l.default.bind(r.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:i.default.string},_=function(e){var t=e.children,n=c(e,u),i=a.default.useContext(o.default),r=(0,l.default)(f(["button",i.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:r,onBlur:p,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;var v=_;t.default=v},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),i=u(n(45697)),l=u(n(47166)),o=u(n(50026)),r=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(r.default),d={ariaLevel:i.default.oneOf(["2","3","4","5","6"]),children:i.default.node,variant:i.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,i=e.children,l=a.default.useContext(o.default);return a.default.createElement("div",{className:s("notice",n,l.className)},a.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:s("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(i,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};c.propTypes=d,c.defaultProps={ariaLevel:"2",variant:"important"};var f=c;t.default=f},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),i=d(n(45697)),l=d(n(94184)),o=d(n(47166)),r=d(n(50026)),u=d(n(42620)),s=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.default.bind(u.default),m={title:i.default.string},h=function(e){var t=e.title,n=f(e,s),i=a.default.useContext(r.default),o=(0,l.default)(p(["placeholder",i.className]),n.className),u=p(["inner"]);return a.default.createElement("div",c({},n,{className:o}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:p("title")},t)))};h.propTypes=m,h.defaultProps={title:""};var _=h;t.default=_},34261:function(e,t,n){Object.defineProperty(t,"qX",{enumerable:!0,get:function(){return a.default}});var a=o(n(59278)),i=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},324:function(e,t,n){n.r(t),t.default={"show-hide":"ShowHide-module__show-hide___9NHsr",start:"ShowHide-module__start___Ruf0l",center:"ShowHide-module__center___wSid6",end:"ShowHide-module__end___18wGP"}},40926:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_ShowHideButton-module__clinical-lowlight-theme___plKtw","orion-fusion-theme":"_ShowHideButton-module__orion-fusion-theme___EJgbn",button:"_ShowHideButton-module__button___WFAuu",icon:"_ShowHideButton-module__icon___WReqJ","is-focused":"_ShowHideButton-module__is-focused___YlKDI","is-hovered":"_ShowHideButton-module__is-hovered___FJXAe",inner:"_ShowHideButton-module__inner___riPkg",text:"_ShowHideButton-module__text___7HE7P","icon-holder":"_ShowHideButton-module__icon-holder___XItSy"}},34597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___z5Dzy","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___hejSR","slide-panel":"SlidePanel-module__slide-panel___tbu3J",main:"SlidePanel-module__main___CjYDC",panel:"SlidePanel-module__panel___G1bnA","is-open":"SlidePanel-module__is-open___pYOkq","is-fullscreen":"SlidePanel-module__is-fullscreen___vCbZa",fill:"SlidePanel-module__fill___9PGCQ"}},27144:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7F95e"}},68133:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n(67294)),r=s(n(45697)),u=s(n(94184));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;for(var i={},l=Object.keys(e),o=0;o<l.length;o++){var r=l[o];-1===n.indexOf(r)&&(i[r]=e[r])}return i}function m(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function h(e){return!isNaN(parseFloat(e))&&isFinite(e)}function _(e){return"string"==typeof e&&e.search("%")===e.length-1&&h(e.substr(0,e.length-1))}function v(e,t){e&&"function"==typeof e&&e(t)}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var a="auto",l="visible";h(e.height)?(a=e.height<0||"0"===e.height?0:e.height,l="hidden"):_(e.height)&&(a="0%"===e.height?0:e.height,l="hidden"),n.animationStateClasses=i({},c,e.animationStateClasses);var o=n.getStaticStateClasses(a);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:o,height:a,overflow:l,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,a,i=this,l=this.props,o=l.height,r=l.onAnimationEnd,s=l.onAnimationStart,c=this.getTimings(),f=c.duration,p=c.delay;if(this.contentElement&&o!==e.height){var y;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var g=f+p,O=null,w={height:null,overflow:"hidden"},E="auto"===t.height;h(o)?(O=o<0||"0"===o?0:o,w.height=O):_(o)?(O="0%"===o?0:o,w.height=O):(O=b,w.height="auto",w.overflow=null),E&&(w.height=O,O=b);var P=(0,u.default)((d(y={},this.animationStateClasses.animating,!0),d(y,this.animationStateClasses.animatingUp,"auto"===e.height||o<e.height),d(y,this.animationStateClasses.animatingDown,"auto"===o||o>e.height),d(y,this.animationStateClasses.animatingToHeightZero,0===w.height),d(y,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),d(y,this.animationStateClasses.animatingToHeightSpecific,w.height>0),y)),S=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:P,height:O,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(w.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){i.setState(w),v(s,{newHeight:w.height})},(a=[])[0]=requestAnimationFrame((function(){a[1]=requestAnimationFrame((function(){n()}))})),a),this.animationClassesTimeoutID=setTimeout((function(){i.setState({animationStateClasses:S,shouldUseTransitions:!1}),i.hideContent(w.height),v(r,{newHeight:w.height})}),g)):(v(s,{newHeight:O}),this.timeoutID=setTimeout((function(){w.animationStateClasses=S,w.shouldUseTransitions=!1,i.setState(w),"auto"!==o&&i.hideContent(O),v(r,{newHeight:O})}),g))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var e=this.props;return{delay:e.delay,duration:e.duration}}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,u.default)((d(t={},this.animationStateClasses.static,!0),d(t,this.animationStateClasses.staticHeightZero,0===e),d(t,this.animationStateClasses.staticHeightSpecific,e>0),d(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,l=n.applyInlineTransitions,r=n.children,s=n.className,c=n.contentClassName,m=n.easing,h=n.id,_=n.style,v=this.state,y=v.height,b=v.overflow,g=v.animationStateClasses,O=v.shouldUseTransitions,w=this.getTimings(),E=w.duration,P=w.delay,S=i({},_,{height:y,overflow:b||_.overflow});O&&l&&(S.transition="height "+E+"ms "+m+" "+P+"ms",_.transition&&(S.transition=_.transition+", "+S.transition),S.WebkitTransition=S.transition);var C={};a&&(C.transition="opacity "+E+"ms "+m+" "+P+"ms",C.WebkitTransition=C.transition,0===y&&(C.opacity=0));var N=(0,u.default)((d(e={},g,!0),d(e,s,s),e)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===y;return o.default.createElement("div",i({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":j,className:N,id:h,style:S}),o.default.createElement("div",{className:c,style:C,ref:function(e){return t.contentElement=e}},r))}}]),t}(o.default.Component);y.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(e,t,n){var i=e[t];return"number"==typeof i&&i>=0||_(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"==typeof i?"undefined":a(i))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},y.defaultProps={animateOpacity:!1,animationStateClasses:c,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=y},5986:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),l=a(n(70215)),o=a(n(67294)),r=a(n(45697)),u=a(n(49265)),s=n(58624),d=a(n(12175)),c=["navigationPromptResolutionOptions"],f={children:r.default.node,panelBehavior:r.default.oneOf(["overlay","squish"]),disclosureAccessory:r.default.element,navigationPromptResolutionOptions:s.navigationPromptResolutionOptionsShape},p=function(e){var t=e.navigationPromptResolutionOptions,n=(0,l.default)(e,c);return o.default.createElement(u.default,(0,i.default)({},n,{withDisclosureContainer:function(e){return o.default.createElement(d.default,{navigationPromptResolutionOptions:t},e)}}))};p.propTypes=f,p.defaultProps=u.default.defaultProps;var m=p;t.default=m},7781:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(5986)).default;t.default=i},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var r=function(e){var t=o({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};r.displayName="IconChevronLeft",r.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=r;t.default=u},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var r=function(e){var t=o({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};r.displayName="IconComment",r.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=r;t.default=u},38602:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var r=function(e){var t=o({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M48 22.7L37.4 12.1c-1.3-1.3-3.6-1.3-4.9 0l-3.8 3.8 2.1 2.1 3.8-3.8c.1-.1.3-.1.4-.1s.2 0 .4.1L43 22c-1.2-.6-2.8-1-4.8-1-6.7 0-9.7 1.4-10.9 3.8-1-.4-2.2-.7-3.3-.7s-2.3.2-3.3.7C19.5 22.4 16.5 21 9.8 21c-2 0-3.6.3-4.8 1l7.7-7.7c.2-.2.5-.2.7 0l3.8 3.8 2.1-2.1-3.8-3.8c-1.4-1.4-3.6-1.4-4.9 0L0 22.7V26l1.7 1.7v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8c.8-.4 1.7-.6 2.7-.6s1.9.2 2.7.6v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8L48 26v-3.3zM11.5 34.2c-3.4 0-7.1-2.3-7.1-5.6 0-3.2.9-4.9 5.4-4.9 8.8 0 8.8 2.3 8.8 4.9 0 3.3-3.7 5.6-7.1 5.6zm25 0c-3.4 0-7.1-2.3-7.1-5.6 0-2.6 0-4.9 8.8-4.9 3.5 0 5.4.8 5.4 4.9 0 3.3-3.8 5.6-7.1 5.6z"}))};r.displayName="IconGlasses",r.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=r;t.default=u},33823:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),i=c(n(45697)),l=c(n(30659)),o=n(25387),r=c(n(47166)),u=c(n(324)),s=c(n(64405)),d=["buttonAlign","buttonText","children","onChange","preview","intl","isOpen"];function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.default.bind(u.default),m={children:i.default.node.isRequired,intl:i.default.shape({formatMessage:i.default.func}).isRequired,onChange:i.default.func.isRequired,buttonAlign:i.default.string,buttonText:i.default.string,isOpen:i.default.bool,preview:i.default.node},h={buttonAlign:"start",isOpen:!1,preview:void 0},_=function(e){var t=e.buttonAlign,n=e.buttonText,i=e.children,o=e.onChange,r=e.preview,u=e.intl,c=e.isOpen,m=f(e,d),h=p(["show-hide","button",t,m.className]),_="";return n||(_=c?u.formatMessage({id:"Terra.showhide.hide"}):u.formatMessage({id:"Terra.showhide.showmore"})),a.default.createElement("div",m,!c&&r,a.default.createElement(l.default,{isOpen:c},i),a.default.createElement("div",{className:p("show-hide")},a.default.createElement(s.default,{"aria-expanded":c,text:n||_,onClick:o,className:h})))};_.propTypes=m,_.defaultProps=h;var v=(0,o.injectIntl)(_);t.default=v},64405:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=p(n(67294)),l=p(n(45697)),o=p(n(94184)),r=p(n(47166)),u=p(n(50026)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(i,o,r):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(51051)),d=p(n(40926)),c=["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(l=i.key,o=void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===a(o)?o:String(o)),i)}var l,o}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g(e);if(t){var l=g(this).constructor;n=Reflect.construct(i,arguments,l)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,n)}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var O=r.default.bind(d.default),w={onClick:l.default.func,onBlur:l.default.func,onFocus:l.default.func,onKeyDown:l.default.func,onKeyUp:l.default.func,refCallback:l.default.func,text:l.default.string.isRequired},E={refCallback:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(r,e);var t,n,a,l=y(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=l.call(this,e)).state={active:!1,focused:!1},t.handleKeyDown=t.handleKeyDown.bind(b(t)),t.handleKeyUp=t.handleKeyUp.bind(b(t)),t.handleOnBlur=t.handleOnBlur.bind(b(t)),t}return t=r,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===s.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):e.nativeEvent.keyCode===s.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===s.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===s.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,a=(e.onBlur,e.onFocus),l=(e.onKeyDown,e.onKeyUp,e.refCallback),r=h(e,c),u=this.context,s=(0,o.default)(O(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},u.className]),r.className);return i.default.createElement("button",m({},r,{className:s,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:a,ref:l}),i.default.createElement("span",{className:O("inner")},i.default.createElement("span",{className:O("text")},t),i.default.createElement("span",{className:O("icon-holder")},i.default.createElement("span",{className:O("icon")}))))}}])&&_(t.prototype,n),a&&_(t,a),Object.defineProperty(t,"prototype",{writable:!1}),r}(i.default.Component);P.propTypes=w,P.defaultProps=E,P.contextType=u.default;var S=P;t.default=S},49265:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.disclosureType=t.default=void 0;var l,o=a(n(10434)),r=a(n(70215)),u=a(n(56690)),s=a(n(89728)),d=a(n(66115)),c=a(n(61655)),f=a(n(94993)),p=a(n(73808)),m=a(n(38416)),h=a(n(67294)),_=a(n(45697)),v=a(n(17092)),y=a(n(10027)),b=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(15560)),g=a(n(8714)),O=a(n(74141)),w=["children","level","disclosureAccessory","withDisclosureContainer","mainAriaLabel","panelAriaLabel"];function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,p.default)(e);if(t){var i=(0,p.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,f.default)(this,n)}}var S="panel";t.disclosureType=S;var C={children:_.default.node,level:_.default.oneOf([1,2,3,4,5,6]),panelBehavior:_.default.oneOf(["overlay","squish"]),disclosureAccessory:_.default.element,withDisclosureContainer:_.default.func,panelAriaLabel:_.default.string,mainAriaLabel:_.default.string},N=(l={},(0,m.default)(l,b.availableDisclosureSizes.TINY,"small"),(0,m.default)(l,b.availableDisclosureSizes.SMALL,"small"),(0,m.default)(l,b.availableDisclosureSizes.MEDIUM,"large"),(0,m.default)(l,b.availableDisclosureSizes.LARGE,"large"),(0,m.default)(l,b.availableDisclosureSizes.HUGE,"large"),l),j=function(e){(0,c.default)(n,e);var t=P(n);function n(e){var a;return(0,u.default)(this,n),(a=t.call(this,e)).renderSlidePanel=a.renderSlidePanel.bind((0,d.default)(a)),a.setSlidePanel=a.setSlidePanel.bind((0,d.default)(a)),a}return(0,s.default)(n,[{key:"setSlidePanel",value:function(e){this.slidePanel=e}},{key:"renderSlidePanel",value:function(e){var t,n,a,i,l,u=this.props,s=(u.children,u.level),d=u.disclosureAccessory,c=(u.withDisclosureContainer,u.mainAriaLabel),f=u.panelAriaLabel,p=(0,r.default)(u,w);(e.disclosure.size===b.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(a=!0),i=e.disclosure.dimensions?(l=e.disclosure.dimensions).width>480||l.height>600?"large":"small":N[e.disclosure.size];var m=null!=e&&null!==(t=e.disclosure)&&void 0!==t&&null!==(n=t.typeConfig)&&void 0!==n&&n.panelBehavior?e.disclosure.typeConfig.panelBehavior:p.panelBehavior,_=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],E=(e.disclosureComponentData[_]||{}).headerAdapterData;return h.default.createElement(O.default,(0,o.default)({},p,{fill:!0,panelBehavior:m,isFullscreen:a,panelSize:i,isOpen:e.disclosure.isOpen,setSlidePanelRef:this.setSlidePanel,panelContent:h.default.createElement(y.default,{fill:!0,header:h.default.createElement(h.default.Fragment,null,E?h.default.createElement(v.default,{text:E.title,onClose:e.closeDisclosure,level:s,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0},E.collapsibleMenuView):void 0,d)},h.default.createElement(g.default,{items:e.disclosure.components,isAnimated:!0,focusRef:this.slidePanel,slideAriaLabel:(null==E?void 0:E.title)||f})),panelAriaLabel:(null==E?void 0:E.title)||f,mainAriaLabel:c,mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,t=e.withDisclosureContainer,n=e.children;return h.default.createElement(b.default,{withDisclosureContainer:t,supportedDisclosureTypes:[S],render:this.renderSlidePanel},n)}}]),n}(h.default.Component);j.propTypes=C,j.defaultProps={level:2,panelBehavior:"overlay"};var T=j;t.default=T},74141:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var i=a(n(10434)),l=a(n(70215)),o=a(n(56690)),r=a(n(89728)),u=a(n(66115)),s=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),m=a(n(94184)),h=a(n(47166)),_=a(n(50026)),v=a(n(29270)),y=n(25387),b=a(n(34597)),g=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var w=h.default.bind(b.default),E={START:"start",END:"end"};t.SlidePanelPositions=E;var P={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},S={panelBehavior:"overlay",panelPosition:E.END,panelSize:"small"},C=function(e){(0,s.default)(n,e);var t=O(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.mainNode=f.default.createRef(),a.setLastClicked=a.setLastClicked.bind((0,u.default)(a)),a.setDisclosingNode=a.setDisclosingNode.bind((0,u.default)(a)),a.mainAriaDescribedByID="detail-panel-warning",a}return(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,a=e.isOpen,o=e.fill,r=e.mainAriaLabel,u=e.mainContent,s=e.panelAriaLabel,d=e.panelContent,c=e.panelBehavior,p=e.panelPosition,h=e.panelSize,_=(e.setSlidePanelRef,(0,l.default)(e,g)),y=this.context,b=(0,m.default)(w("slide-panel",{"is-open":a},{"is-fullscreen":n},{fill:o},y.className),_.className),O=f.default.createElement("div",{className:w(["panel"]),key:"panel",tabIndex:"-1","aria-label":s||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(v.default,{text:s||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),d),P=f.default.createElement("div",{className:w("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&n?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),u),S=p===E.START?f.default.createElement(f.default.Fragment,null,O,P):f.default.createElement(f.default.Fragment,null,P,O);return f.default.createElement("div",(0,i.default)({},_,{className:b,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":h}),S)}}]),n}(f.default.Component);C.propTypes=P,C.defaultProps=S,C.contextType=_.default;var N=(0,y.injectIntl)(C);t.default=N},30659:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),i=s(n(45697)),l=s(n(47166)),o=s(n(68133)),r=s(n(27144)),u=["isAnimated","isOpen","children"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=l.default.bind(r.default),p={children:i.default.node.isRequired,isAnimated:i.default.bool,isOpen:i.default.bool},m=function(e){var t,n=e.isAnimated,i=e.isOpen,l=e.children,r=c(e,u),s=i?"auto":0;return t=n?a.default.createElement(o.default,{duration:250,height:s,easing:"ease-out"},l):i&&l,a.default.createElement("div",d({},r,{className:f("toggle",r.className),"aria-hidden":!i}),t)};m.propTypes=p,m.defaultProps={isAnimated:!1,isOpen:!1};var h=m;t.default=h}}]);