webpackJsonp([0x67ef26645b2a,60335399758886],{88:function(e,t){e.exports={layoutContext:{}}},139:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(145),l=r(u),c=n(88),s=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},60:function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},34:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),a=f.length-1;a>=0;a--)if(f[a]!=p[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(36),l=n(35),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},35:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},36:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},37:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},15:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),p=n(2),d=r(p),E=n(40),h=r(E),m=n(34),T=r(m),y=n(39),b=n(12),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,T.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case b.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case b.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},v=(0,h.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),w=_(v);w.renderStatic=w.rewind,t.Helmet=w,t.default=w},12:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},39:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),l=n(38),c=r(l),s=n(12),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=T(e,s.TAG_NAMES.TITLE),n=T(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=T(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return T(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&w("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:E(s.ATTRIBUTE_NAMES.BODY,e),defer:T(e,s.HELMET_PROPS.DEFER),encode:T(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:E(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),_=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,w=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,O=function(e){S&&v(S),e.defer?S=A(function(){P(e,function(){S=null})}):(P(e),S=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;N(s.TAG_NAMES.BODY,r),N(s.TAG_NAMES.HTML,o),M(p,d);var E={baseTag:R(s.TAG_NAMES.BASE,n),linkTags:R(s.TAG_NAMES.LINK,a),metaTags:R(s.TAG_NAMES.META,i),noscriptTags:R(s.TAG_NAMES.NOSCRIPT,u),scriptTags:R(s.TAG_NAMES.SCRIPT,c),styleTags:R(s.TAG_NAMES.STYLE,f)},h={},m={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=E[e].oldTags)}),t&&t(),l(e,h,m)},g=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=g(e)),N(s.TAG_NAMES.TITLE,t)},N=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},j=function(e,t,n,r){var o=C(n),a=g(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},I=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return j(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return I(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:H(s.TAG_NAMES.BASE,t,r),bodyAttributes:H(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(s.ATTRIBUTE_NAMES.HTML,o,r),link:H(s.TAG_NAMES.LINK,a,r),meta:H(s.TAG_NAMES.META,i,r),noscript:H(s.TAG_NAMES.NOSCRIPT,u,r),script:H(s.TAG_NAMES.SCRIPT,l,r),style:H(s.TAG_NAMES.STYLE,c,r),title:H(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=x,t.handleClientStateChange=O,t.mapStateOnServer=B,t.reducePropsToState=y,t.requestAnimationFrame=A,t.warn=w}).call(t,function(){return this}())},40:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){E=e(d.map(function(e){return e.props})),h.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],E=void 0,h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return c.createElement(u,this.props)},t}(l.Component);return h.displayName="SideEffect("+r(u)+")",h.canUseDOM=s.canUseDOM,h}}var l=n(1),c=r(l),s=r(n(37)),f=r(n(41));e.exports=u},41:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Massively=void 0;var u=n(1),l=r(u),c=n(2),s=(r(c),n(3)),f=(r(s),n(15)),p=(r(f),n(60)),d=r(p),E=n(94),h=(r(E),n(97)),m=(r(h),n(96)),T=(r(m),n(95)),y=(r(T),n(100)),b=(r(y),n(101)),_=(r(b),n(43)),A=(r(_),n(99),n(98),n(151)),v=r(A);n(236),n(237),n(238),n(235);t.Massively=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={isPanelVisible:!1,currentPath:r.props.data.location.pathname,config:v.default},r}return i(t,e),t.prototype.openPanel=function(){this.setState({isPanelVisible:!0})},t.prototype.closePanel=function(){this.setState({isPanelVisible:!1})},t.prototype.getIntroDescription=function(e){return v.default.introText[e]},t.prototype.componentWillReceiveProps=function(e){var t=e.data.location.pathname;this.setState(function(e,n){return{currentPath:t}})},t.prototype.render=function(){var e=this,t=(0,d.default)({"is-navPanel-visible":this.state.isPanelVisible}),n=l.default.Children.map(this.props.children,function(t){return l.default.cloneElement(t,{currentPath:e.state.currentPath,config:e.state.config,closePanel:function(){return e.closePanel()},openPanel:function(){return e.openPanel()}})});return l.default.createElement("div",{id:"pseudoBody",className:t},l.default.createElement("div",{id:"wrapper",className:"fade-in"},n))},t}(l.default.Component)},143:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Background=void 0;var u=n(1),l=r(u),c=n(3);r(c),t.Background=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){return l.default.createElement("div",{className:"bg fixed",style:{transform:"none"}})},t}(l.default.Component)},94:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props.config.copyright;return l.default.createElement("div",{id:"copyright"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{target:"blank",href:"https://justinmclaren.com"},e.owner)),l.default.createElement("li",null,"Photo: ",l.default.createElement("a",{target:"blank",href:"https://unsplash.com/@peterlaster?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadget"},"Peter Laster")),l.default.createElement("li",null,"Powered by: ",l.default.createElement("a",{target:"blank",href:"https://www.gatsbyjs.org/"},"GatsbyJS"))))},t}(l.default.Component);t.default=c,e.exports=t.default},95:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.config.initialLinks,t=e.socialLinks.map(function(e,t){return l.default.createElement("li",{key:t},l.default.createElement("a",{href:e.path,className:"icon "+e.icon+" alt"},l.default.createElement("span",{className:"label"},e.name)))});return l.default.createElement("footer",{id:"footer"},l.default.createElement("section",null,l.default.createElement("form",{method:"post",name:"contact",action:"/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",encType:"application/x-www-form-urlencoded"},l.default.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.default.createElement("p",{hidden:!0},l.default.createElement("label",null,"Don’t fill this out: ",l.default.createElement("input",{name:"bot-field"}))),l.default.createElement("div",{className:"field"},l.default.createElement("label",null,"Name"),l.default.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Your name"})),l.default.createElement("div",{className:"field"},l.default.createElement("label",null,"Email"),l.default.createElement("input",{id:"email",type:"email",name:"email",placeholder:"Your email"})),l.default.createElement("div",{className:"field"},l.default.createElement("label",null,"Message"),l.default.createElement("textarea",{id:"message",name:"message",rows:"3",placeholder:"Your message"})),l.default.createElement("ul",{className:"actions"},l.default.createElement("li",null,l.default.createElement("input",{type:"submit",value:"Send Message"}))))),l.default.createElement("section",{className:"split contact"},l.default.createElement("section",null,l.default.createElement("h3",null,"Social"),l.default.createElement("ul",{className:"icons alt"},t))))},t}(l.default.Component);t.default=c,e.exports=t.default},96:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(3),s=r(c),f=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props.config.name;return l.default.createElement("header",{id:"header"},l.default.createElement(s.default,{to:"/",className:"logo"},e))},t}(l.default.Component);t.default=f,e.exports=t.default},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(2),s=(r(c),function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props.currentPath,t=this.props.config.name,n=this.props.config.introText[e];return l.default.createElement("div",{id:"intro",className:""},l.default.createElement("h1",null,t),l.default.createElement("p",null,n),l.default.createElement("div",{className:"row"},l.default.createElement("form",{id:"email",method:"post",action:"#"},l.default.createElement("input",{className:"fit",type:"email",placeholder:"Enter your email"}),l.default.createElement("input",{id:"submit",type:"submit"}))))},t}(l.default.Component));t.default=s,e.exports=t.default},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.MenuButton=void 0;var u=n(1),l=r(u),c=n(3);r(c),t.MenuButton=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this;return l.default.createElement("span",{id:"navPanelToggle",className:"alt",onClick:function(){return e.props.openPanel()}},"Menu")},t}(l.default.Component)},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.NavPanel=void 0;var u=n(1),l=r(u),c=n(3),s=r(c);t.NavPanel=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.config.initialLinks,n=t.paths.map(function(t,n){return l.default.createElement("li",{key:n},l.default.createElement(s.default,{to:t.path,onClick:function(){return e.props.closePanel()}},t.title))}),r=t.socialLinks.map(function(e,t){return l.default.createElement("li",{key:t},l.default.createElement("a",{href:e.path,className:"icon "+e.icon+" alt"},l.default.createElement("span",{className:"label"},e.name)))});return l.default.createElement("div",{id:"navPanel"},l.default.createElement("nav",null,l.default.createElement("ul",{className:"links"},n),l.default.createElement("ul",{className:"icons alt"},r)),l.default.createElement("span",{id:"navPanelCloseBtn",className:"close",onClick:function(){return e.props.closePanel()}},l.default.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))},t}(l.default.Component)},100:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(3),s=r(c),f=n(15),p=(r(f),n(60)),d=(r(p),function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props.currentPath,t=this.props.config.initialLinks,n=t.paths.map(function(t,n){return l.default.createElement("li",{key:n,className:t.path===e?"active":""},l.default.createElement(s.default,{to:t.path},t.title))}),r=t.socialLinks.map(function(e,t){return l.default.createElement("li",{key:t},l.default.createElement("a",{href:e.path,className:"icon "+e.icon},l.default.createElement("span",{className:"label"},e.name)))});return l.default.createElement("nav",{id:"nav"},l.default.createElement("ul",{className:"links"},n),l.default.createElement("ul",{className:"icons"},r))},t}(l.default.Component));t.default=d,e.exports=t.default},101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.default.createElement("footer",null,l.default.createElement("div",{className:"pagination"},l.default.createElement("a",{href:"#",className:"previous"},"Prev"),l.default.createElement("a",{href:"#",className:"page active"},"1"),l.default.createElement("a",{href:"#",className:"page"},"2"),l.default.createElement("a",{href:"#",className:"page"},"3"),l.default.createElement("span",{className:"extra"},"…"),l.default.createElement("a",{href:"#",className:"page"},"8"),l.default.createElement("a",{href:"#",className:"page"},"9"),l.default.createElement("a",{href:"#",className:"page"},"10"),l.default.createElement("a",{href:"#",className:"next"},"Next")))},t}(l.default.Component);t.default=c,e.exports=t.default},43:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(57),s=r(c),f=n(3),p=r(f),d=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){return l.default.createElement("div",{id:"main"},l.default.createElement("section",{className:"post"},l.default.createElement("header",{className:"major"},l.default.createElement("span",{className:"date"},this.props.post.frontmatter.date),l.default.createElement("h1",null,this.props.post.frontmatter.title),l.default.createElement("p",null,this.props.post.excerpt)),l.default.createElement("p",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:this.props.post.html}}),l.default.createElement(s.default,{list:this.props.post.frontmatter.tags||[]}),l.default.createElement("div",{className:"pagination"},this.props.prev&&l.default.createElement(p.default,{className:"previous",to:this.props.prev.frontmatter.path},this.props.prev.frontmatter.title),this.props.next&&l.default.createElement(p.default,{className:"next",to:this.props.next.frontmatter.path},this.props.next.frontmatter.title))))},t}(l.default.Component);t.default=d,e.exports=t.default},57:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.list,n=void 0===t?[]:t;return i.default.createElement("ul",{className:"actions"},n.map(function(e){return i.default.createElement("li",{key:e},i.default.createElement(l.default,{to:"/tags/"+e,className:"button special"},e))}))}t.__esModule=!0,t.default=o;var a=n(1),i=r(a),u=n(3),l=r(u);e.exports=t.default},235:function(e,t){},236:function(e,t){},237:function(e,t){},238:function(e,t){},145:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(2),s=(r(c),n(3)),f=(r(s),n(15)),p=(r(f),n(60)),d=(r(p),n(94)),E=r(d),h=n(97),m=r(h),T=n(96),y=r(T),b=n(95),_=r(b),A=n(100),v=r(A),w=n(101),S=(r(w),n(43)),O=(r(S),n(99)),P=n(98),g=n(143),M=n(142),N=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props;return l.default.createElement(M.Massively,{data:e},l.default.createElement(m.default,null),l.default.createElement(y.default,null),l.default.createElement(v.default,null),this.props.children(),l.default.createElement(_.default,null),l.default.createElement(E.default,null),l.default.createElement(g.Background,null),l.default.createElement(P.MenuButton,null),l.default.createElement(O.NavPanel,null))},t}(l.default.Component);t.default=N,e.exports=t.default},151:function(e,t){"use strict";e.exports={name:"Siyu Capital",initialLinks:{paths:[{path:"/",title:"Home"},{path:"/about",title:"About"},{path:"/contact",title:"Contact"}],socialLinks:[{path:"https://www.twitter.com/",icon:"fa-twitter",name:"Twitter"},{path:"https://www.linkedin.com/in/",icon:"fa-linkedin",name:"LinkedIn"},{path:"https://www.github.com/",icon:"fa-github",name:"Github"}]},copyright:{owner:"© Justin McLaren"},introText:{"/":"A weekly brief on financial markets curated by daily market watchers","/about":"Proin a eros ut diam aliquam blandit non ut diam. Proin ut vehicula enim.","/speaking":"Praesent in pellentesque dui. Donec ultrices hendrerit sem rhoncus auctor.","/contact":"Proin urna mauris, tristique quis diam non, blandit rhoncus orci."}}}});
//# sourceMappingURL=component---src-layouts-index-js-c9a2d10863919472b8cf.js.map