"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1551],{3201:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),a=u(r(47166)),i=u(r(341)),o=u(r(84769));function u(e){return e&&e.__esModule?e:{default:e}}var l=a.default.bind(o.default),c=n.default.createElement("p",null,"A Detail List Item"),s=n.default.createElement("p",null,"A Detail List Item to prove float concept when screen readjusts smaller."),f=n.default.createElement("p",null," A sample accessory container "),d=function(){return n.default.createElement(i.default,{title:"Header",secondaryTitles:["secondaryTitle1","secondaryTitle2"],subtitles:["subtitle1","subTitle2"],graph:n.default.createElement("div",{className:l("graph-content")},"This is where any visualizations would go"),accessory:f,details:[n.default.createElement(i.default.DetailList,{title:"Detail List Title",key:"detailInfo-1"},n.default.createElement(i.default.DetailListItem,{item:c}),n.default.createElement(i.default.DetailListItem,{item:c}),n.default.createElement(i.default.DetailListItem,{item:s}),n.default.createElement(i.default.DetailListItem,{item:c}),n.default.createElement(i.default.DetailListItem,{item:c}))],footer:"Footer Text",id:"DetailView",isSmallerTitles:!1})};t.default=d},84769:function(e,t,r){r.r(t),t.default={"graph-content":"DetailViewCommon-test-module__graph-content___sz7I3"}},21614:function(e,t,r){var n;r.r(t),r.d(t,{NIL:function(){return M},parse:function(){return h},stringify:function(){return d},v1:function(){return m},v3:function(){return C},v4:function(){return L},v5:function(){return R},validate:function(){return u},version:function(){return V}});var a=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"==typeof e&&o.test(e)},l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));var s,f,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!u(r))throw TypeError("Stringified UUID is invalid");return r},v=0,p=0;var m=function(e,t,r){var n=t&&r||0,a=t||new Array(16),o=(e=e||{}).node||s,u=void 0!==e.clockseq?e.clockseq:f;if(null==o||null==u){var l=e.random||(e.rng||i)();null==o&&(o=s=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==u&&(u=f=16383&(l[6]<<8|l[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:p+1,h=c-v+(m-p)/1e4;if(h<0&&void 0===e.clockseq&&(u=u+1&16383),(h<0||c>v)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=c,p=m,f=u;var y=(1e4*(268435455&(c+=122192928e5))+m)%4294967296;a[n++]=y>>>24&255,a[n++]=y>>>16&255,a[n++]=y>>>8&255,a[n++]=255&y;var g=c/4294967296*1e4&268435455;a[n++]=g>>>8&255,a[n++]=255&g,a[n++]=g>>>24&15|16,a[n++]=g>>>16&255,a[n++]=u>>>8|128,a[n++]=255&u;for(var w=0;w<6;++w)a[n+w]=o[w];return t||d(a)};var h=function(e){if(!u(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function y(e,t,r){function n(e,n,a,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=h(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+e.length);if(o.set(n),o.set(e,n.length),(o=r(o))[6]=15&o[6]|t,o[8]=63&o[8]|128,a){i=i||0;for(var u=0;u<16;++u)a[i+u]=o[u];return a}return d(o)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function g(e){return 14+(e+64>>>9<<4)+1}function w(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function I(e,t,r,n,a,i){return w((o=w(w(t,e),w(n,i)))<<(u=a)|o>>>32-u,r);var o,u}function b(e,t,r,n,a,i,o){return I(t&r|~t&n,e,t,a,i,o)}function A(e,t,r,n,a,i,o){return I(t&n|r&~n,e,t,a,i,o)}function E(e,t,r,n,a,i,o){return I(t^r^n,e,t,a,i,o)}function U(e,t,r,n,a,i,o){return I(r^(t|~n),e,t,a,i,o)}var D=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){for(var t=[],r=32*e.length,n="0123456789abcdef",a=0;a<r;a+=8){var i=e[a>>5]>>>a%32&255,o=parseInt(n.charAt(i>>>4&15)+n.charAt(15&i),16);t.push(o)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[g(t)-1]=t;for(var r=1732584193,n=-271733879,a=-1732584194,i=271733878,o=0;o<e.length;o+=16){var u=r,l=n,c=a,s=i;r=b(r,n,a,i,e[o],7,-680876936),i=b(i,r,n,a,e[o+1],12,-389564586),a=b(a,i,r,n,e[o+2],17,606105819),n=b(n,a,i,r,e[o+3],22,-1044525330),r=b(r,n,a,i,e[o+4],7,-176418897),i=b(i,r,n,a,e[o+5],12,1200080426),a=b(a,i,r,n,e[o+6],17,-1473231341),n=b(n,a,i,r,e[o+7],22,-45705983),r=b(r,n,a,i,e[o+8],7,1770035416),i=b(i,r,n,a,e[o+9],12,-1958414417),a=b(a,i,r,n,e[o+10],17,-42063),n=b(n,a,i,r,e[o+11],22,-1990404162),r=b(r,n,a,i,e[o+12],7,1804603682),i=b(i,r,n,a,e[o+13],12,-40341101),a=b(a,i,r,n,e[o+14],17,-1502002290),r=A(r,n=b(n,a,i,r,e[o+15],22,1236535329),a,i,e[o+1],5,-165796510),i=A(i,r,n,a,e[o+6],9,-1069501632),a=A(a,i,r,n,e[o+11],14,643717713),n=A(n,a,i,r,e[o],20,-373897302),r=A(r,n,a,i,e[o+5],5,-701558691),i=A(i,r,n,a,e[o+10],9,38016083),a=A(a,i,r,n,e[o+15],14,-660478335),n=A(n,a,i,r,e[o+4],20,-405537848),r=A(r,n,a,i,e[o+9],5,568446438),i=A(i,r,n,a,e[o+14],9,-1019803690),a=A(a,i,r,n,e[o+3],14,-187363961),n=A(n,a,i,r,e[o+8],20,1163531501),r=A(r,n,a,i,e[o+13],5,-1444681467),i=A(i,r,n,a,e[o+2],9,-51403784),a=A(a,i,r,n,e[o+7],14,1735328473),r=E(r,n=A(n,a,i,r,e[o+12],20,-1926607734),a,i,e[o+5],4,-378558),i=E(i,r,n,a,e[o+8],11,-2022574463),a=E(a,i,r,n,e[o+11],16,1839030562),n=E(n,a,i,r,e[o+14],23,-35309556),r=E(r,n,a,i,e[o+1],4,-1530992060),i=E(i,r,n,a,e[o+4],11,1272893353),a=E(a,i,r,n,e[o+7],16,-155497632),n=E(n,a,i,r,e[o+10],23,-1094730640),r=E(r,n,a,i,e[o+13],4,681279174),i=E(i,r,n,a,e[o],11,-358537222),a=E(a,i,r,n,e[o+3],16,-722521979),n=E(n,a,i,r,e[o+6],23,76029189),r=E(r,n,a,i,e[o+9],4,-640364487),i=E(i,r,n,a,e[o+12],11,-421815835),a=E(a,i,r,n,e[o+15],16,530742520),r=U(r,n=E(n,a,i,r,e[o+2],23,-995338651),a,i,e[o],6,-198630844),i=U(i,r,n,a,e[o+7],10,1126891415),a=U(a,i,r,n,e[o+14],15,-1416354905),n=U(n,a,i,r,e[o+5],21,-57434055),r=U(r,n,a,i,e[o+12],6,1700485571),i=U(i,r,n,a,e[o+3],10,-1894986606),a=U(a,i,r,n,e[o+10],15,-1051523),n=U(n,a,i,r,e[o+1],21,-2054922799),r=U(r,n,a,i,e[o+8],6,1873313359),i=U(i,r,n,a,e[o+15],10,-30611744),a=U(a,i,r,n,e[o+6],15,-1560198380),n=U(n,a,i,r,e[o+13],21,1309151649),r=U(r,n,a,i,e[o+4],6,-145523070),i=U(i,r,n,a,e[o+11],10,-1120210379),a=U(a,i,r,n,e[o+2],15,718787259),n=U(n,a,i,r,e[o+9],21,-343485551),r=w(r,u),n=w(n,l),a=w(a,c),i=w(i,s)}return[r,n,a,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(g(t)),n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))},C=y("v3",48,D);var L=function(e,t,r){var n=(e=e||{}).random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return d(n)};function T(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function _(e,t){return e<<t|e>>>32-t}var k=function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var a=0;a<n.length;++a)e.push(n.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,o=Math.ceil(i/16),u=new Array(o),l=0;l<o;++l){for(var c=new Uint32Array(16),s=0;s<16;++s)c[s]=e[64*l+4*s]<<24|e[64*l+4*s+1]<<16|e[64*l+4*s+2]<<8|e[64*l+4*s+3];u[l]=c}u[o-1][14]=8*(e.length-1)/Math.pow(2,32),u[o-1][14]=Math.floor(u[o-1][14]),u[o-1][15]=8*(e.length-1)&4294967295;for(var f=0;f<o;++f){for(var d=new Uint32Array(80),v=0;v<16;++v)d[v]=u[f][v];for(var p=16;p<80;++p)d[p]=_(d[p-3]^d[p-8]^d[p-14]^d[p-16],1);for(var m=r[0],h=r[1],y=r[2],g=r[3],w=r[4],I=0;I<80;++I){var b=Math.floor(I/20),A=_(m,5)+T(b,h,y,g)+w+t[b]+d[I]>>>0;w=g,g=y,y=_(h,30)>>>0,h=m,m=A}r[0]=r[0]+m>>>0,r[1]=r[1]+h>>>0,r[2]=r[2]+y>>>0,r[3]=r[3]+g>>>0,r[4]=r[4]+w>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]},R=y("v5",80,k),M="00000000-0000-0000-0000-000000000000";var V=function(e){if(!u(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}}]);