webpackJsonp([0xd2a57dc1d883],{56:function(n,e,t){"use strict";function o(n,e,t){var o=u.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return u.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var u=[{plugin:t(277),options:{plugins:[]}}]},136:function(n,e,t){"use strict";var o;e.components={"component---src-templates-blog-post-js":t(254),"component---src-pages-404-js":t(250),"component---src-pages-about-js":t(251),"component---src-pages-contact-js":t(252),"component---src-pages-index-js":t(253)},e.json=(o={"layout-index.json":t(4),"edition-14.json":t(264)},o["layout-index.json"]=t(4),o["edition-16.json"]=t(266),o["layout-index.json"]=t(4),o["edition-15.json"]=t(265),o["layout-index.json"]=t(4),o["edition-11.json"]=t(261),o["layout-index.json"]=t(4),o["edition-13.json"]=t(263),o["layout-index.json"]=t(4),o["edition-12.json"]=t(262),o["layout-index.json"]=t(4),o["edition-10.json"]=t(260),o["layout-index.json"]=t(4),o["edition-9.json"]=t(274),o["layout-index.json"]=t(4),o["edition-8.json"]=t(273),o["layout-index.json"]=t(4),o["edition-7.json"]=t(272),o["layout-index.json"]=t(4),o["edition-6.json"]=t(271),o["layout-index.json"]=t(4),o["edition-5.json"]=t(270),o["layout-index.json"]=t(4),o["edition-4.json"]=t(269),o["layout-index.json"]=t(4),o["edition-3.json"]=t(268),o["layout-index.json"]=t(4),o["edition-2.json"]=t(267),o["layout-index.json"]=t(4),o["edition-1.json"]=t(259),o["layout-index.json"]=t(4),o["404.json"]=t(255),o["layout-index.json"]=t(4),o["about.json"]=t(257),o["layout-index.json"]=t(4),o["contact.json"]=t(258),o["layout-index.json"]=t(4),o["index.json"]=t(275),o["layout-index.json"]=t(4),o["404-html.json"]=t(256),o),e.layouts={"layout---index":t(249)}},137:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(1),c=o(s),l=t(3),f=o(l),d=t(94),p=o(d),m=t(42),h=o(m),g=t(56),y=t(333),j=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=u(this,n.call(this)),a=t.location;return p.default.getPage(a.pathname)||(a=i({},a,{pathname:"/404.html"})),o.state={location:a,pageResources:p.default.getResourcesForPathname(a.pathname)},o}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=p.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;p.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),p.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){p.default.getPage(n.state.location.pathname)&&e.page.path===p.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=v,n.exports=e.default},42:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(307),u=o(r),a=(0,u.default)();n.exports=a},138:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(55),u=t(95),a=o(u),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),u=(0,a.default)(o,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),i[u])return i[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return s=n,i[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return s=n,i[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return s=n,i[u]=n,!0}return!1}),s}}},139:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(86),u=o(r),a=t(56),i=(0,a.apiRunner)("replaceHistory"),s=i[0],c=s||(0,u.default)();n.exports=c},256:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(284)})})}},255:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(285)})})}},257:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(286)})})}},258:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(287)})})}},259:function(n,e,t){t(2),n.exports=function(n){return t.e(34704996337196,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(288)})})}},260:function(n,e,t){t(2),n.exports=function(n){return t.e(0x91ab3d1a4af1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(289)})})}},261:function(n,e,t){t(2),n.exports=function(n){return t.e(44246160339990,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(290)})})}},262:function(n,e,t){t(2),n.exports=function(n){return t.e(76195072648460,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(291)})})}},263:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf9bde49d4e84,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(292)})})}},264:function(n,e,t){t(2),n.exports=function(n){return t.e(0xef02e6350c1c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(293)})})}},265:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe4ba966f8965,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(294)})})}},266:function(n,e,t){t(2),n.exports=function(n){return t.e(0xd51a7faa2534,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(295)})})}},267:function(n,e,t){t(2),n.exports=function(n){return t.e(0xcf8fc0e8534d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(296)})})}},268:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa374db831d5a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(297)})})}},269:function(n,e,t){t(2),n.exports=function(n){return t.e(0x82a2391d1b09,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(298)})})}},270:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf8f4a04c043,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(299)})})}},271:function(n,e,t){t(2),n.exports=function(n){return t.e(0x9b2adb221467,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(300)})})}},272:function(n,e,t){t(2),n.exports=function(n){return t.e(46444551858033,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(301)})})}},273:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe10cc91c571,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(302)})})}},274:function(n,e,t){t(2),n.exports=function(n){return t.e(0x65520345e032,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(303)})})}},275:function(n,e,t){t(2),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(304)})})}},4:function(n,e,t){t(2),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(89)})})}},249:function(n,e,t){t(2),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(140)})})}},94:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),u=(o(r),t(138)),a=o(u),i=t(42),s=o(i),c=t(95),l=o(c),f=void 0,d={},p={},m={},h={},g={},y=[],j=[],x={},v="",R=[],b={},C=function(n){return n&&n.default||n},N=void 0,w=!0,_=[],k={},P={},E=5;N=t(141)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){R=R.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var L=function(n,e){return b[n]>b[e]?1:b[n]<b[e]?-1:0},O=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?p.components[e]:"layout---"===e.slice(0,9)?p.layouts[e]:p.json[e],o(function(n,o){h[e]=o,_.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),_=_.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var r=C(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=_.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),k[n]||(k[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},b={},R=[],y=[],v=""},addPagesArray:function(n){y=n,f=(0,a.default)(n,v)},addDevRequires:function(n){d=n},addProdRequires:function(n){p=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(O);var o=f(e);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(L),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:b}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var u=r;u.unregister()}window.location.reload()}})),w=!1;if(k[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,i=function(){if(r&&u&&(!o.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:o};var n={component:r,json:u,layout:a,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),u=e,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),a=e,i()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(308))},305:function(n,e){n.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-14.json",path:"/Edition-14"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-16.json",path:"/Edition-16"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-15.json",path:"/Edition-15"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-11.json",path:"/Edition-11"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-13.json",path:"/Edition-13"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-12.json",path:"/Edition-12"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-10.json",path:"/Edition-10"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-9.json",path:"/Edition-9"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-8.json",path:"/Edition-8"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-7.json",path:"/Edition-7"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-6.json",path:"/Edition-6"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-5.json",path:"/Edition-5"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-4.json",path:"/Edition-4"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-3.json",path:"/Edition-3"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-2.json",path:"/Edition-2"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"edition-1.json",path:"/Edition-1"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},141:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],u=function(){var n=e();n&&(r.push(n),t(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=t(56),a=t(1),i=o(a),s=t(132),c=o(s),l=t(55),f=t(281),d=t(235),p=o(d),m=t(88),h=t(139),g=o(h),y=t(42),j=o(y),x=t(305),v=o(x),R=t(306),b=o(R),C=t(137),N=o(C),w=t(136),_=o(w),k=t(94),P=o(k);t(162),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};L(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(142);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var u=window.location;if(u.pathname!==t.pathname||u.search!==t.search||u.hash!==t.hash){var a=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,d=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(d?d:h,null,(0,a.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,a.createElement)(N.default,r({page:!0},o)):(0,a.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,p.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},306:function(n,e){n.exports=[]},142:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(42),u=o(r),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},95:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},235:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},2:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,u=t.s;t.e=function(o,a){var i=!1,s=!0,c=function(n){a&&(a(t,n),a=null)};return!u&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,u?u[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},276:function(n,e,t){"use strict";var o=t(5);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var u=document.createElement("a");u.href=t.href;var a=document.createElement("a");if(a.href=window.location.href,u.host!==a.host)return!0;var i=new RegExp("^"+a.host+(0,o.withPrefix)("/"));return!i.test(""+u.host+u.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},277:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(5),u=t(276),a=o(u);e.onClientEntry=function(){(0,a.default)(window,function(n){(0,r.navigateTo)(n)})}},307:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},308:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(f===clearTimeout)return clearTimeout(n);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function a(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&i())}function i(){if(!h){var n=r(a);h=!0;for(var e=m.length;e;){for(p=m,m=[];++g<e;)p&&p[g].run();g=-1,e=m.length}p=null,h=!1,u(n)}}function s(n,e){this.fun=n,this.array=e}function c(){}var l,f,d=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(n){f=o}}();var p,m=[],h=!1,g=-1;d.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new s(n,e)),1!==m.length||h||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(n){return[]},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},333:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},250:function(n,e,t){t(2),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(147)})})}},251:function(n,e,t){t(2),n.exports=function(n){return t.e(0xefeaa6d1881d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(148)})})}},252:function(n,e,t){t(2),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(149)})})}},253:function(n,e,t){t(2),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(150)})})}},254:function(n,e,t){t(2),n.exports=function(n){return t.e(0x620f737b6699,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(151)})})}}});
//# sourceMappingURL=app-ce9891d76f7154e4c174.js.map