(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[9085],{3201:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l(67294)),i=s(l(47166)),n=s(l(341)),r=s(l(84769));function s(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(r.default),c=a.default.createElement("p",null,"A Detail List Item"),o=a.default.createElement("p",null,"A Detail List Item to prove float concept when screen readjusts smaller."),d=a.default.createElement("p",null," A sample accessory container "),f=function(){return a.default.createElement(n.default,{title:"Header",secondaryTitles:["secondaryTitle1","secondaryTitle2"],subtitles:["subtitle1","subTitle2"],graph:a.default.createElement("div",{className:u("graph-content")},"This is where any visualizations would go"),accessory:d,details:[a.default.createElement(n.default.DetailList,{title:"Detail List Title",key:"detailInfo-1"},a.default.createElement(n.default.DetailListItem,{item:c}),a.default.createElement(n.default.DetailListItem,{item:c}),a.default.createElement(n.default.DetailListItem,{item:o}),a.default.createElement(n.default.DetailListItem,{item:c}),a.default.createElement(n.default.DetailListItem,{item:c}))],footer:"Footer Text",id:"DetailView",isSmallerTitles:!1})};t.default=f},84769:function(e,t,l){"use strict";l.r(t),t.default={"graph-content":"DetailViewCommon-test-module__graph-content___sz7I3"}},55877:function(e,t,l){var a=l(23570),i=l(71171),n=i;n.v1=a,n.v4=i,e.exports=n},23570:function(e,t,l){var a,i,n=l(85217),r=l(45327),s=0,u=0;e.exports=function(e,t,l){var c=t&&l||0,o=t||[],d=(e=e||{}).node||a,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var m=n();null==d&&(d=a=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=i=16383&(m[6]<<8|m[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:u+1,h=v-s+(p-u)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||v>s)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=v,u=p,i=f;var D=(1e4*(268435455&(v+=122192928e5))+p)%4294967296;o[c++]=D>>>24&255,o[c++]=D>>>16&255,o[c++]=D>>>8&255,o[c++]=255&D;var E=v/4294967296*1e4&268435455;o[c++]=E>>>8&255,o[c++]=255&E,o[c++]=E>>>24&15|16,o[c++]=E>>>16&255,o[c++]=f>>>8|128,o[c++]=255&f;for(var _=0;_<6;++_)o[c+_]=d[_];return t||r(o)}}}]);