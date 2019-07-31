!function(d){"use strict";var e,n,r,t,o,i,u,s,c,a,f=function(e){var n=e,r=function(){return n};return{get:r,set:function(e){n=e},clone:function(){return f(r())}}},l=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=function(e){return{isFullscreen:function(){return null!==e.get()}}},h=function(){},v=function(e){return function(){return e}},g=v(!1),O=v(!0),S=g,p=O,x=function(){return E},E=(t={fold:function(e){return e()},is:S,isSome:S,isNone:p,getOr:r=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:r,orThunk:n,map:x,ap:x,each:function(){},bind:x,flatten:x,exists:S,forall:p,filter:x,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:v("none()")},Object.freeze&&Object.freeze(t),t),w=function(r){var e=function(){return r},n=function(){return o},t=function(e){return e(r)},o={fold:function(e,n){return n(r)},is:function(e){return r===e},isSome:p,isNone:S,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return w(e(r))},ap:function(e){return e.fold(x,function(e){return w(e(r))})},each:function(e){e(r)},bind:t,flatten:e,exists:t,forall:t,filter:function(e){return e(r)?o:E},equals:function(e){return e.is(r)},equals_:function(e,n){return e.fold(S,function(e){return n(r,e)})},toArray:function(){return[r]},toString:function(){return"some("+r+")"}};return o},N={some:w,none:x,from:function(e){return null===e||e===undefined?E:w(e)}},T=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}},y=T("string"),C=T("function"),b=(Array.prototype.slice,C(Array.from)&&Array.from,Object.keys),A=function(e,n){return-1!==e.indexOf(n)},D=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:v(e)}},_={fromHtml:function(e,n){var r=(n||d.document).createElement("div");if(r.innerHTML=e,!r.hasChildNodes()||1<r.childNodes.length)throw d.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return D(r.childNodes[0])},fromTag:function(e,n){var r=(n||d.document).createElement(e);return D(r)},fromText:function(e,n){var r=(n||d.document).createTextNode(e);return D(r)},fromDom:D,fromPoint:function(e,n,r){var t=e.dom();return N.from(t.elementFromPoint(n,r)).map(D)}},F=(d.Node.ATTRIBUTE_NODE,d.Node.CDATA_SECTION_NODE,d.Node.COMMENT_NODE,d.Node.DOCUMENT_NODE,d.Node.DOCUMENT_TYPE_NODE,d.Node.DOCUMENT_FRAGMENT_NODE,d.Node.ELEMENT_NODE,d.Node.TEXT_NODE,d.Node.PROCESSING_INSTRUCTION_NODE,d.Node.ENTITY_REFERENCE_NODE,d.Node.ENTITY_NODE,d.Node.NOTATION_NODE,function(e,n,r){if(!y(r))throw d.console.error("Invalid call to CSS.set. Property ",n,":: Value ",r,":: Element ",e),new Error("CSS value must be a string: "+r);var t;(t=e).style!==undefined&&C(t.style.getPropertyValue)&&e.style.setProperty(n,r)}),R=function(e,n){var r=e.dom();!function(e,n){for(var r=b(e),t=0,o=r.length;t<o;t++){var i=r[t];n(e[i],i,e)}}(n,function(e,n){F(r,n,e)})},M=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),P=function(e,n){e.fire("FullscreenStateChanged",{state:n})},L=function(e,n){var r=function(e,n){for(var r=0;r<e.length;r++){var t=e[r];if(t.test(n))return t}return undefined}(e,n);if(!r)return{major:0,minor:0};var t=function(e){return Number(n.replace(r,"$"+e))};return I(t(1),t(2))},k=function(){return I(0,0)},I=function(e,n){return{major:e,minor:n}},j={nu:I,detect:function(e,n){var r=String(n).toLowerCase();return 0===e.length?k():L(e,r)},unknown:k},H="Firefox",W=function(e,n){return function(){return n===e}},U=function(e){var n=e.current;return{current:n,version:e.version,isEdge:W("Edge",n),isChrome:W("Chrome",n),isIE:W("IE",n),isOpera:W("Opera",n),isFirefox:W(H,n),isSafari:W("Safari",n)}},q={unknown:function(){return U({current:undefined,version:j.unknown()})},nu:U,edge:v("Edge"),chrome:v("Chrome"),ie:v("IE"),opera:v("Opera"),firefox:v(H),safari:v("Safari")},B="Windows",V="Android",X="Solaris",z="FreeBSD",Y=function(e,n){return function(){return n===e}},G=function(e){var n=e.current;return{current:n,version:e.version,isWindows:Y(B,n),isiOS:Y("iOS",n),isAndroid:Y(V,n),isOSX:Y("OSX",n),isLinux:Y("Linux",n),isSolaris:Y(X,n),isFreeBSD:Y(z,n)}},$={unknown:function(){return G({current:undefined,version:j.unknown()})},nu:G,windows:v(B),ios:v("iOS"),android:v(V),linux:v("Linux"),osx:v("OSX"),solaris:v(X),freebsd:v(z)},J=function(e,n){var r=String(n).toLowerCase();return function(e,n){for(var r=0,t=e.length;r<t;r++){var o=e[r];if(n(o,r,e))return N.some(o)}return N.none()}(e,function(e){return e.search(r)})},K=function(e,r){return J(e,r).map(function(e){var n=j.detect(e.versionRegexes,r);return{current:e.name,version:n}})},Q=function(e,r){return J(e,r).map(function(e){var n=j.detect(e.versionRegexes,r);return{current:e.name,version:n}})},Z=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,ee=function(n){return function(e){return A(e,n)}},ne=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return A(e,"edge/")&&A(e,"chrome")&&A(e,"safari")&&A(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Z],search:function(e){return A(e,"chrome")&&!A(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return A(e,"msie")||A(e,"trident")}},{name:"Opera",versionRegexes:[Z,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ee("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ee("firefox")},{name:"Safari",versionRegexes:[Z,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(A(e,"safari")||A(e,"mobile/"))&&A(e,"applewebkit")}}],re=[{name:"Windows",search:ee("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return A(e,"iphone")||A(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ee("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:ee("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ee("linux"),versionRegexes:[]},{name:"Solaris",search:ee("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ee("freebsd"),versionRegexes:[]}],te={browsers:v(ne),oses:v(re)},oe=function(e){var n,r,t,o,i,u,s,c,a,f,d,l=te.browsers(),m=te.oses(),h=K(l,e).fold(q.unknown,q.nu),g=Q(m,e).fold($.unknown,$.nu);return{browser:h,os:g,deviceType:(r=h,t=e,o=(n=g).isiOS()&&!0===/ipad/i.test(t),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,s=n.isAndroid()&&4===n.version.major,c=o||u||s&&!0===/mobile/i.test(t),a=n.isiOS()||n.isAndroid(),f=a&&!c,d=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(t),{isiPad:v(o),isiPhone:v(i),isTablet:v(c),isPhone:v(f),isTouch:v(a),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:v(d)})}},ie={detect:(o=function(){var e=d.navigator.userAgent;return oe(e)},u=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u||(u=!0,i=o.apply(null,e)),i})},ue=M.DOM,se=d.window.visualViewport,ce=ie.detect().browser.isSafari()&&se!==undefined?(s=f(N.none()),c={clear:function(){s.set(N.none())},set:function(e){s.set(N.some(e))},isSet:function(){return s.get().isSome()},on:function(e){s.get().each(e)}},a=function(){d.window.requestAnimationFrame(function(){c.on(function(e){return R(e,{top:se.offsetTop+"px",left:se.offsetLeft+"px",height:se.height+"px",width:se.width+"px"})})})},{bind:function(e){c.set(e),a(),se.addEventListener("resize",a),se.addEventListener("scroll",a)},unbind:function(){c.on(function(){se.removeEventListener("scroll",a),se.removeEventListener("resize",a)}),c.clear()}}):{bind:h,unbind:h},ae=function(e,n){var r,t,o,i,u,s=d.document.body,c=d.document.documentElement,a=n.get();if(r=(t=e.getContainer()).style,o=e.getContentAreaContainer().firstChild.style,a)o.width=a.iframeWidth,o.height=a.iframeHeight,a.containerWidth&&(r.width=a.containerWidth),a.containerHeight&&(r.height=a.containerHeight),ue.removeClass(s,"tox-fullscreen"),ue.removeClass(c,"tox-fullscreen"),ue.removeClass(t,"tox-fullscreen"),i=a.scrollPos,d.window.scrollTo(i.x,i.y),n.set(null),P(e,!1),ce.unbind(),e.off("remove",ce.unbind);else{var f={scrollPos:(u=ue.getViewPort(),{x:u.x,y:u.y}),containerWidth:r.width,containerHeight:r.height,iframeWidth:o.width,iframeHeight:o.height};o.width=o.height="100%",r.width=r.height="",ue.addClass(s,"tox-fullscreen"),ue.addClass(c,"tox-fullscreen"),ue.addClass(t,"tox-fullscreen"),ce.bind(_.fromDom(t)),e.on("remove",ce.unbind),n.set(f),P(e,!0)}},fe=function(e,n){e.addCommand("mceFullScreen",function(){ae(e,n)})},de=function(r,t){return function(n){n.setActive(null!==t.get());var e=function(e){return n.setActive(e.state)};return r.on("FullscreenStateChanged",e),function(){return r.off("FullscreenStateChanged",e)}}},le=function(e,n){e.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return e.execCommand("mceFullScreen")},onSetup:de(e,n)}),e.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return e.execCommand("mceFullScreen")},onSetup:de(e,n)})};!function me(){l.add("fullscreen",function(e){var n=f(null);return e.settings.inline||(fe(e,n),le(e,n),e.addShortcut("Meta+Shift+F","","mceFullScreen")),m(n)})}()}(window);