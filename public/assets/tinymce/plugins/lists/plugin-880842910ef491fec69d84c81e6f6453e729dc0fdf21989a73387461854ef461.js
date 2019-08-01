/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.12 (2019-07-18)
 */

!function(u){"use strict";var e,n,t,r,o,i,a,s,c=tinymce.util.Tools.resolve("tinymce.PluginManager"),v=function(e){return function(){return e}},f=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return!t.apply(null,e)}},d=v(!1),l=v(!0),m=d,g=l,p=function(){return h},h=(r={fold:function(e,n){return e()},is:m,isSome:m,isNone:g,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:p,ap:p,each:function(){},bind:p,flatten:p,exists:m,forall:g,filter:p,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:v("none()")},Object.freeze&&Object.freeze(r),r),y=function(t){var e=function(){return t},n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:g,isNone:m,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return y(e(t))},ap:function(e){return e.fold(p,function(e){return y(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?o:h},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(m,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},N={some:y,none:p,from:function(e){return null===e||e===undefined?h:y(e)}},S=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}},O=S("string"),C=S("array"),b=S("boolean"),L=S("function"),T=S("number"),D=Array.prototype.slice,E=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o];r[o]=n(i,o,e)}return r},w=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t,e)}},k=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r];n(i,r,e)&&t.push(i)}return t},A=function(e,n,t){return w(e,function(e){t=n(t,e)}),t},x=function(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t,e))return N.some(o)}return N.none()},R=Array.prototype.push,I=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!C(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);R.apply(n,e[t])}return n}(E(e,n))},_=function(e){return 0===e.length?N.none():N.some(e[0])},B=function(e){return 0===e.length?N.none():N.some(e[e.length-1])},P=(L(Array.from)&&Array.from,function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:v(e)}}),M={fromHtml:function(e,n){var t=(n||u.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw u.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return P(t.childNodes[0])},fromTag:function(e,n){var t=(n||u.document).createElement(e);return P(t)},fromText:function(e,n){var t=(n||u.document).createTextNode(e);return P(t)},fromDom:P,fromPoint:function(e,n,t){var r=e.dom();return N.from(r.elementFromPoint(n,t)).map(P)}},U="undefined"!=typeof u.window?u.window:Function("return this;")(),F=function(e,n){return function(e,n){for(var t=n!==undefined&&null!==n?n:U,r=0;r<e.length&&t!==undefined&&null!==t;++r)t=t[e[r]];return t}(e.split("."),n)},j=function(e,n){var t=F(e,n);if(t===undefined||null===t)throw new Error(e+" not available on this browser");return t},H=function(){return j("Node")},$=function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)},q=function(e,n){return $(e,n,H().DOCUMENT_POSITION_CONTAINED_BY)},W=function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return z(r(1),r(2))},V=function(){return z(0,0)},z=function(e,n){return{major:e,minor:n}},K={nu:z,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?V():W(e,t)},unknown:V},X="Firefox",Q=function(e,n){return function(){return n===e}},Y=function(e){var n=e.current;return{current:n,version:e.version,isEdge:Q("Edge",n),isChrome:Q("Chrome",n),isIE:Q("IE",n),isOpera:Q("Opera",n),isFirefox:Q(X,n),isSafari:Q("Safari",n)}},G={unknown:function(){return Y({current:undefined,version:K.unknown()})},nu:Y,edge:v("Edge"),chrome:v("Chrome"),ie:v("IE"),opera:v("Opera"),firefox:v(X),safari:v("Safari")},J="Windows",Z="Android",ee="Solaris",ne="FreeBSD",te=function(e,n){return function(){return n===e}},re=function(e){var n=e.current;return{current:n,version:e.version,isWindows:te(J,n),isiOS:te("iOS",n),isAndroid:te(Z,n),isOSX:te("OSX",n),isLinux:te("Linux",n),isSolaris:te(ee,n),isFreeBSD:te(ne,n)}},oe={unknown:function(){return re({current:undefined,version:K.unknown()})},nu:re,windows:v(J),ios:v("iOS"),android:v(Z),linux:v("Linux"),osx:v("OSX"),solaris:v(ee),freebsd:v(ne)},ie=function(e,n){var t=String(n).toLowerCase();return x(e,function(e){return e.search(t)})},ue=function(e,t){return ie(e,t).map(function(e){var n=K.detect(e.versionRegexes,t);return{current:e.name,version:n}})},ae=function(e,t){return ie(e,t).map(function(e){var n=K.detect(e.versionRegexes,t);return{current:e.name,version:n}})},se=function(e,n){return-1!==e.indexOf(n)},ce=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,fe=function(n){return function(e){return se(e,n)}},de=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return se(e,"edge/")&&se(e,"chrome")&&se(e,"safari")&&se(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,ce],search:function(e){return se(e,"chrome")&&!se(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return se(e,"msie")||se(e,"trident")}},{name:"Opera",versionRegexes:[ce,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:fe("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:fe("firefox")},{name:"Safari",versionRegexes:[ce,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(se(e,"safari")||se(e,"mobile/"))&&se(e,"applewebkit")}}],le=[{name:"Windows",search:fe("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return se(e,"iphone")||se(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:fe("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:fe("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:fe("linux"),versionRegexes:[]},{name:"Solaris",search:fe("sunos"),versionRegexes:[]},{name:"FreeBSD",search:fe("freebsd"),versionRegexes:[]}],me={browsers:v(de),oses:v(le)},ge=function(e){var n,t,r,o,i,u,a,s,c,f,d,l=me.browsers(),m=me.oses(),g=ue(l,e).fold(G.unknown,G.nu),p=ae(m,e).fold(oe.unknown,oe.nu);return{browser:g,os:p,deviceType:(t=g,r=e,o=(n=p).isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,a=n.isAndroid()&&4===n.version.major,s=o||u||a&&!0===/mobile/i.test(r),c=n.isiOS()||n.isAndroid(),f=c&&!s,d=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:v(o),isiPhone:v(i),isTablet:v(s),isPhone:v(f),isTouch:v(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:v(d)})}},pe={detect:(a=!(o=function(){var e=u.navigator.userAgent;return ge(e)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a||(a=!0,i=o.apply(null,e)),i})},ve=(u.Node.ATTRIBUTE_NODE,u.Node.CDATA_SECTION_NODE,u.Node.COMMENT_NODE,u.Node.DOCUMENT_NODE,u.Node.DOCUMENT_TYPE_NODE,u.Node.DOCUMENT_FRAGMENT_NODE,u.Node.ELEMENT_NODE),he=(u.Node.TEXT_NODE,u.Node.PROCESSING_INSTRUCTION_NODE,u.Node.ENTITY_REFERENCE_NODE,u.Node.ENTITY_NODE,u.Node.NOTATION_NODE,ve),ye=function(e,n){return e.dom()===n.dom()},Ne=pe.detect().browser.isIE()?function(e,n){return q(e.dom(),n.dom())}:function(e,n){var t=e.dom(),r=n.dom();return t!==r&&t.contains(r)},Se=function(e,n){var t=e.dom();if(t.nodeType!==he)return!1;if(t.matches!==undefined)return t.matches(n);if(t.msMatchesSelector!==undefined)return t.msMatchesSelector(n);if(t.webkitMatchesSelector!==undefined)return t.webkitMatchesSelector(n);if(t.mozMatchesSelector!==undefined)return t.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")},Oe=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Ce=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),be=tinymce.util.Tools.resolve("tinymce.util.VK"),Le=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Te=tinymce.util.Tools.resolve("tinymce.util.Tools"),De=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Ee=function(e){return e&&"BR"===e.nodeName},we=function(e){return e&&3===e.nodeType},ke=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},Ae=function(e){return e&&/^(OL|UL)$/.test(e.nodeName)},xe=function(e){return e&&/^(DT|DD)$/.test(e.nodeName)},Re=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},Ie=function(e){return e&&/^(TH|TD)$/.test(e.nodeName)},_e=Ee,Be=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},Pe=function(e,n){return e&&e.nodeName in n},Me=function(e,n){return!!Ee(n)&&!(!e.isBlock(n.nextSibling)||Ee(n.previousSibling))},Ue=function(e,n,t){var r=e.isEmpty(n);return!(t&&0<e.select("span[data-mce-type=bookmark]",n).length)&&r},Fe=function(e,n){return e.isChildOf(n,e.getRoot())},je=function(e,n){if(we(e))return{container:e,offset:n};var t=Oe.getNode(e,n);return we(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&we(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&we(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},He=function(e){var n=e.cloneRange(),t=je(e.startContainer,e.startOffset);n.setStart(t.container,t.offset);var r=je(e.endContainer,e.endOffset);return n.setEnd(r.container,r.offset),n},$e=De.DOM,qe=function(o){var i={},e=function(e){var n,t,r;t=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"],1===t.nodeType&&(n=$e.create("span",{"data-mce-type":"bookmark"}),t.hasChildNodes()?(r=Math.min(r,t.childNodes.length-1),e?t.insertBefore(n,t.childNodes[r]):$e.insertAfter(n,t.childNodes[r])):t.appendChild(n),t=n,r=0),i[e?"startContainer":"endContainer"]=t,i[e?"startOffset":"endOffset"]=r};return e(!0),o.collapsed||e(),i},We=function(o){function e(e){var n,t,r;n=r=o[e?"startContainer":"endContainer"],t=o[e?"startOffset":"endOffset"],n&&(1===n.nodeType&&(t=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t;1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(n),n=n.parentNode,$e.remove(r),!n.hasChildNodes()&&$e.isBlock(n)&&n.appendChild($e.create("br"))),o[e?"startContainer":"endContainer"]=n,o[e?"startOffset":"endOffset"]=t)}e(!0),e();var n=$e.createRng();return n.setStart(o.startContainer,o.startOffset),o.endContainer&&n.setEnd(o.endContainer,o.endOffset),He(n)},Ve=function(e){var n,t=F("ownerDocument.defaultView",e);return(n=t,j("HTMLElement",n)).prototype.isPrototypeOf(e)},ze=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),Ke=function(e){var n=e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",Qe(e,n))},Xe=function(e){var t,n,r,o=e.selection.getSelectedBlocks();return Te.grep((t=e,n=o,r=Te.map(n,function(e){var n=t.dom.getParent(e,"li,dd,dt",Qe(t,e));return n||e}),ze.unique(r)),function(e){return Re(e)})},Qe=function(e,n){var t=e.dom.getParents(n,"TD,TH");return 0<t.length?t[0]:e.getBody()},Ye=function(e,n){var t=e.dom.getParents(n,"ol,ul",Qe(e,n));return B(t)},Ge=function(n,e){var t=E(e,function(e){return Ye(n,e).getOr(e)});return ze.unique(t)},Je={isList:function(e){var n=Ke(e);return Ve(n)},getParentList:Ke,getSelectedSubLists:function(e){var n,t,r,o=Ke(e),i=e.selection.getSelectedBlocks();return r=i,(t=o)&&1===r.length&&r[0]===t?(n=o,Te.grep(n.querySelectorAll("ol,ul,dl"),function(e){return ke(e)})):Te.grep(i,function(e){return ke(e)&&o!==e})},getSelectedListItems:Xe,getClosestListRootElm:Qe,getSelectedDlItems:function(e){return k(Xe(e),xe)},getSelectedListRoots:function(e){var n,t,r,o=(t=Ye(n=e,n.selection.getStart()),r=k(n.selection.getSelectedBlocks(),Ae),t.toArray().concat(r));return Ge(e,o)}},Ze=function(e,n){for(var t=[],r=0;r<e.length;r++){var o=e[r];if(!o.isSome())return N.none();t.push(o.getOrDie())}return N.some(n.apply(null,t))},en=Object.keys,nn=function(e){var n=e.dom();return N.from(n.parentNode).map(M.fromDom)},tn=function(e){var n=e.dom();return E(n.childNodes,M.fromDom)},rn=function(e,n){var t=e.dom().childNodes;return N.from(t[n]).map(M.fromDom)},on=function(e){return rn(e,0)},un=function(e){return rn(e,e.dom().childNodes.length-1)},an=(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),function(n,t){nn(n).each(function(e){e.dom().insertBefore(t.dom(),n.dom())})}),sn=function(e,n){e.dom().appendChild(n.dom())},cn=function(n,e){w(e,function(e){sn(n,e)})},fn=function(e){var n=e.dom();null!==n.parentNode&&n.parentNode.removeChild(n)},dn=function(e){return e.dom().nodeName.toLowerCase()},ln=function(e,n){var t=e.dom();!function(e,n){for(var t=en(e),r=0,o=t.length;r<o;r++){var i=t[r];n(e[i],i,e)}}(n,function(e,n){!function(e,n,t){if(!(O(t)||b(t)||T(t)))throw u.console.error("Invalid call to Attr.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,t+"")}(t,n,e)})},mn=function(e){return A(e.dom().attributes,function(e,n){return e[n.name]=n.value,e},{})},gn=function(e,n,t){if(!O(t))throw u.console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);var r;(r=e).style!==undefined&&L(r.style.getPropertyValue)&&e.style.setProperty(n,t)},pn=function(e){return n=e,t=!0,M.fromDom(n.dom().cloneNode(t));var n,t},vn=function(e,n){var t,r,o,i,u=(t=e,r=n,o=M.fromTag(r),i=mn(t),ln(o,i),o);an(e,u);var a=tn(e);return cn(u,a),fn(e),u},hn=function(e,n){sn(e.item,n.list)},yn=function(f,e,d){var n=e.slice(0,d.depth);return B(n).each(function(e){var n,t,r,o,i,u,a,s,c=(n=f,t=d.itemAttributes,r=d.content,o=M.fromTag("li",n),ln(o,t),cn(o,r),o);u=c,sn((i=e).list,u),i.item=u,s=d,dn((a=e).list)!==s.listType&&(a.list=vn(a.list,s.listType)),ln(a.list,s.listAttributes)}),n},Nn=function(e,n,t){var r,o=function(e,n,t){for(var r,o,i,u=[],a=0;a<t;a++)u.push((r=e,o=n.listType,i={list:M.fromTag(o,r),item:M.fromTag("li",r)},sn(i.list,i.item),i));return u}(e,t,t.depth-n.length);return function(e){for(var n=1;n<e.length;n++)hn(e[n-1],e[n])}(o),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=r.dom(),gn(u,o,i);var r,o,i,u;B(e).each(function(e){ln(e.list,n.listAttributes),ln(e.item,n.itemAttributes),cn(e.item,n.content)})}(o,t),r=o,Ze([B(n),_(r)],hn),n.concat(o)},Sn=function(e){return Se(e,"OL,UL")},On=function(e){return on(e).map(Sn).getOr(!1)},Cn=function(e){return 0<e.depth},bn=function(e){return e.isSelected},Ln=function(e){var n=tn(e),t=un(e).map(Sn).getOr(!1)?n.slice(0,-1):n;return E(t,pn)},Tn=Object.prototype.hasOwnProperty,Dn=(s=function(e,n){return n},function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var o=e[r];for(var i in o)Tn.call(o,i)&&(t[i]=s(t[i],o[i]))}return t}),En=function(n){w(n,function(r,e){(function(e,n){for(var t=e[n].depth,r=n-1;0<=r;r--){if(e[r].depth===t)return N.some(e[r]);if(e[r].depth<t)break}return N.none()})(n,e).each(function(e){var n,t;t=e,(n=r).listType=t.listType,n.listAttributes=Dn({},t.listAttributes)})})},wn=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return wn(t())}}},kn=function(i,u,a,s){return on(s).filter(Sn).fold(function(){u.each(function(e){ye(e.start,s)&&a.set(!0)});var n,t,r,e=(n=s,t=i,r=a.get(),nn(n).map(function(e){return{depth:t,isSelected:r,content:Ln(n),itemAttributes:mn(n),listAttributes:mn(e),listType:dn(e)}}));u.each(function(e){ye(e.end,s)&&a.set(!1)});var o=un(s).filter(Sn).map(function(e){return An(i,u,a,e)}).getOr([]);return e.toArray().concat(o)},function(e){return An(i,u,a,e)})},An=function(n,t,r,e){return I(tn(e),function(e){return(Sn(e)?An:kn)(n+1,t,r,e)})},xn=tinymce.util.Tools.resolve("tinymce.Env"),Rn=function(e,n){var t,r,o,i,u=e.dom,a=e.schema.getBlockElements(),s=u.createFragment();if(e.settings.forced_root_block&&(o=e.settings.forced_root_block),o&&((r=u.create(o)).tagName===e.settings.forced_root_block&&u.setAttribs(r,e.settings.forced_root_block_attrs),Pe(n.firstChild,a)||s.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName;i||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(i=!0),Pe(t,a)?(s.appendChild(t),r=null):o?(r||(r=u.create(o),s.appendChild(r)),r.appendChild(t)):s.appendChild(t)}return e.settings.forced_root_block?i||xn.ie&&!(10<xn.ie)||r.appendChild(u.create("br",{"data-mce-bogus":"1"})):s.appendChild(u.create("br")),s},In=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},_n=function(i,e){return E(e,function(e){var n,t,r,o=(n=e.content,r=(t||u.document).createDocumentFragment(),w(n,function(e){r.appendChild(e.dom())}),M.fromDom(r));return M.fromDom(Rn(i,o.dom()))})},Bn=function(e,n){return En(n),(t=e.contentDocument,r=n,o=A(r,function(e,n){return n.depth>e.length?Nn(t,e,n):yn(t,e,n)},[]),_(o).map(function(e){return e.list})).toArray();var t,r,o},Pn=function(e){var n,t,r=E(Je.getSelectedListItems(e),M.fromDom);return Ze([x(r,f(On)),x((n=r,t=D.call(n,0),t.reverse(),t),f(On))],function(e,n){return{start:e,end:n}})},Mn=function(a,e,s){var n,t,r,o=(n=e,t=Pn(a),r=wn(!1),E(n,function(e){return{sourceList:e,entries:An(0,t,r,e)}}));w(o,function(e){var n,t;n=e.entries,t=s,w(k(n,bn),function(e){return function(e,n){switch(e){case"Indent":n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}}(t,e)});var r,o,i,u=(r=a,o=e.entries,I(function(e,n){if(0===e.length)return[];for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a);s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(o,Cn),function(e){return _(e).map(Cn).getOr(!1)?Bn(r,e):_n(r,e)}));w(u,function(e){In(a,"Indent"===s?"IndentList":"OutdentList",e.dom())}),i=e.sourceList,w(u,function(e){an(i,e)}),fn(e.sourceList)})},Un=De.DOM,Fn=function(e,n,t){var r,o,i,u,a,s;for(i=Un.select('span[data-mce-type="bookmark"]',n),a=Rn(e,t),(r=Un.createRng()).setStartAfter(t),r.setEndAfter(n),u=(o=r.extractContents()).firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){Un.remove(u);break}e.dom.isEmpty(o)||Un.insertAfter(o,n),Un.insertAfter(a,n),Ue(e.dom,t.parentNode)&&(s=t.parentNode,Te.each(i,function(e){s.parentNode.insertBefore(e,t.parentNode)}),Un.remove(s)),Un.remove(t),Ue(e.dom,n)&&Un.remove(n)},jn=function(e){Se(e,"DT")&&vn(e,"DD")},Hn=function(r,e,n){w(n,"Indent"===e?jn:function(e){return n=r,void(Se(t=e,"DD")?vn(t,"DT"):Se(t,"DT")&&nn(t).each(function(e){return Fn(n,e.dom(),t.dom())}));var n,t})},$n=function(e,n){var t=E(Je.getSelectedListRoots(e),M.fromDom),r=E(Je.getSelectedDlItems(e),M.fromDom),o=!1;if(t.length||r.length){var i=e.selection.getBookmark();Mn(e,t,n),Hn(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(He(e.selection.getRng())),e.nodeChanged(),o=!0}return o},qn=function(e){return $n(e,"Indent")},Wn=function(e){return $n(e,"Outdent")},Vn=function(e){return $n(e,"Flatten")},zn=function(e){return/\btox\-/.test(e.className)},Kn=function(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},Xn=function(t,e){Te.each(e,function(e,n){t.setAttribute(n,e)})},Qn=function(e,n,t){var r,o,i,u,a,s,c;r=e,o=n,u=(i=t)["list-style-type"]?i["list-style-type"]:null,r.setStyle(o,"list-style-type",u),a=e,Xn(s=n,(c=t)["list-attributes"]),Te.each(a.select("li",s),function(e){Xn(e,c["list-item-attributes"])})},Yn=function(e,n,t,r){var o,i;for(o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"],1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&_e(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Be(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o},Gn=function(f,d,l){void 0===l&&(l={});var e,n=f.selection.getRng(!0),m="LI",t=Je.getClosestListRootElm(f,f.selection.getStart(!0)),g=f.dom;"false"!==g.getContentEditable(f.selection.getNode())&&("DL"===(d=d.toUpperCase())&&(m="DT"),e=qe(n),Te.each(function(t,e,r){for(var o,i=[],u=t.dom,n=Yn(t,e,!0,r),a=Yn(t,e,!1,r),s=[],c=n;c&&(s.push(c),c!==a);c=c.nextSibling);return Te.each(s,function(e){if(Be(t,e))return i.push(e),void(o=null);if(u.isBlock(e)||_e(e))return _e(e)&&u.remove(e),void(o=null);var n=e.nextSibling;Le.isBookmarkNode(e)&&(Be(t,n)||!n&&e.parentNode===r)?o=null:(o||(o=u.create("p"),e.parentNode.insertBefore(o,e),i.push(o)),o.appendChild(e))}),i}(f,n,t),function(e){var n,t,r,o,i,u,a,s,c;(t=e.previousSibling)&&ke(t)&&t.nodeName===d&&(r=t,o=l,i=g.getStyle(r,"list-style-type"),u=o?o["list-style-type"]:"",i===(u=null===u?"":u))?(n=t,e=g.rename(e,m),t.appendChild(e)):(n=g.create(d),e.parentNode.insertBefore(n,e),n.appendChild(e),e=g.rename(e,m)),a=g,s=e,c=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],Te.each(c,function(e){var n;return a.setStyle(s,((n={})[e]="",n))}),Qn(g,n,l),Zn(f.dom,n)}),f.selection.setRng(We(e)))},Jn=function(e,n,t){return s=t,(a=n)&&s&&ke(a)&&a.nodeName===s.nodeName&&(i=n,u=t,(o=e).getStyle(i,"list-style-type",!0)===o.getStyle(u,"list-style-type",!0))&&(r=t,n.className===r.className);var r,o,i,u,a,s},Zn=function(e,n){var t,r;if(t=n.nextSibling,Jn(e,n,t)){for(;r=t.firstChild;)n.appendChild(r);e.remove(t)}if(t=n.previousSibling,Jn(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild);e.remove(t)}},et=function(n,e,t,r,o){if(e.nodeName!==r||nt(o)){var i=qe(n.selection.getRng(!0));Te.each([e].concat(t),function(e){!function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t);Qn(e.dom,o,r),In(e,Kn(t),o)}else Qn(e.dom,n,r),In(e,Kn(t),n)}(n,e,r,o)}),n.selection.setRng(We(i))}else Vn(n)},nt=function(e){return"list-style-type"in e},tt={toggleList:function(e,n,t){var r=Je.getParentList(e),o=Je.getSelectedSubLists(e);t=t||{},r&&0<o.length?et(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||nt(r)||zn(n)){var o=qe(e.selection.getRng(!0));Qn(e.dom,n,r);var i=e.dom.rename(n,t);Zn(e.dom,i),e.selection.setRng(We(o)),In(e,Kn(t),i)}else Vn(e);else Gn(e,t,r),In(e,Kn(t),n)}(e,r,n,t)},mergeWithAdjacentLists:Zn},rt=De.DOM,ot=function(e,n){var t,r=n.parentNode;"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),Ue(e,r)&&rt.remove(r)):rt.setStyle(r,"listStyleType","none")),ke(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)},it=function(n,e){Te.each(Te.grep(n.select("ol,ul",e)),function(e){ot(n,e)})},ut=function(e,n,t,r){var o=n.startContainer,i=n.startOffset;if(we(o)&&(t?i<o.data.length:0<i))return o;var u=e.schema.getNonEmptyElements();1===o.nodeType&&(o=Oe.getNode(o,i));var a=new Ce(o,r);for(t&&Me(e.dom,o)&&a.next();o=a[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o;if(u[o.nodeName])return o;if(we(o)&&0<o.data.length)return o}},at=function(e,n){var t=n.childNodes;return 1===t.length&&!ke(t[0])&&e.isBlock(t[0])},st=function(e,n,t){var r,o,i,u;if(o=at(e,t)?t.firstChild:t,at(i=e,u=n)&&i.remove(u.firstChild,!0),!Ue(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},ct=function(n,e,t){var r,o,i=e.parentNode;if(Fe(n,e)&&Fe(n,t)){ke(t.lastChild)&&(o=t.lastChild),i===t.lastChild&&_e(i.previousSibling)&&n.remove(i.previousSibling),(r=t.lastChild)&&_e(r)&&e.hasChildNodes()&&n.remove(r),Ue(n,t,!0)&&n.$(t).empty(),st(n,e,t),o&&t.appendChild(o);var u=Ne(M.fromDom(t),M.fromDom(e))?n.getParents(e,ke,t):[];n.remove(e),w(u,function(e){Ue(n,e)&&e!==n.getRoot()&&n.remove(e)})}},ft=function(e,n,t,r){var o,i,u,a=e.dom;if(a.isEmpty(r))i=t,u=r,(o=e).dom.$(u).empty(),ct(o.dom,i,u),o.selection.setCursorLocation(u);else{var s=qe(n);ct(a,t,r),e.selection.setRng(We(s))}},dt=function(e,n){var t=e.dom,r=e.selection,o=r.getStart(),i=Je.getClosestListRootElm(e,o),u=t.getParent(r.getStart(),"LI",i);if(u){var a=u.parentNode;if(a===e.getBody()&&Ue(t,a))return!0;var s=He(r.getRng()),c=t.getParent(ut(e,s,n,i),"LI",i);if(c&&c!==u)return e.undoManager.transact(function(){n?ft(e,s,c,u):function(e,n,t,r){var o=qe(n);ct(e.dom,t,r);var i=We(o);e.selection.setRng(i)}(e,s,u,c)}),!0;if(!c&&!n&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact(function(){Vn(e)}),!0}return!1},lt=function(e,n){return dt(e,n)||function(o,i){var u=o.dom,e=o.selection.getStart(),a=Je.getClosestListRootElm(o,e),s=u.getParent(e,u.isBlock,a);if(s&&u.isEmpty(s)){var n=He(o.selection.getRng()),c=u.getParent(ut(o,n,i,a),"LI",a);if(c)return o.undoManager.transact(function(){var e,n,t,r;n=s,t=a,r=(e=u).getParent(n.parentNode,e.isBlock,t),e.remove(n),r&&e.isEmpty(r)&&e.remove(r),tt.mergeWithAdjacentLists(u,c.parentNode),o.selection.select(c,!0),o.selection.collapse(i)}),!0}return!1}(e,n)},mt=function(e,n){return e.selection.isCollapsed()?lt(e,n):(r=(t=e).selection.getStart(),o=Je.getClosestListRootElm(t,r),!!(t.dom.getParent(r,"LI,DT,DD",o)||0<Je.getSelectedListItems(t).length)&&(t.undoManager.transact(function(){t.execCommand("Delete"),it(t.dom,t.getBody())}),!0));var t,r,o},gt=function(n){n.on("keydown",function(e){e.keyCode===be.BACKSPACE?mt(n,!1)&&e.preventDefault():e.keyCode===be.DELETE&&mt(n,!0)&&e.preventDefault()})},pt=mt,vt=function(n){return{backspaceDelete:function(e){pt(n,e)}}},ht=function(n,t){return function(){var e=n.dom.getParent(n.selection.getStart(),"UL,OL,DL");return e&&e.nodeName===t}},yt=function(t){t.on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?qn(t):"outdent"===n&&Wn(t)}),t.addCommand("InsertUnorderedList",function(e,n){tt.toggleList(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){tt.toggleList(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){tt.toggleList(t,"DL",n)}),t.addCommand("RemoveList",function(){Vn(t)}),t.addQueryStateHandler("InsertUnorderedList",ht(t,"UL")),t.addQueryStateHandler("InsertOrderedList",ht(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",ht(t,"DL"))},Nt=function(e){return e.getParam("lists_indent_on_tab",!0)},St=function(e){var n;Nt(e)&&(n=e).on("keydown",function(e){e.keyCode!==be.TAB||be.metaKeyPressed(e)||n.undoManager.transact(function(){(e.shiftKey?Wn(n):qn(n))&&e.preventDefault()})}),gt(e)},Ot=function(n,i){return function(o){var e=function(e){var n=function(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t;return-1}(e.parents,Ie),t=-1!==n?e.parents.slice(0,n):e.parents,r=Te.grep(t,ke);o.setActive(0<r.length&&r[0].nodeName===i&&!zn(r[0]))};return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}}},Ct=function(n){var e,t,r,o=function(e){return function(){return n.execCommand(e)}};t="advlist",r=(e=n).settings.plugins?e.settings.plugins:"",-1===Te.inArray(r.split(/[ ,]/),t)&&(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:o("InsertOrderedList"),onSetup:Ot(n,"OL")}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:o("InsertUnorderedList"),onSetup:Ot(n,"UL")}))};!function bt(){c.add("lists",function(e){return St(e),Ct(e),yt(e),vt(e)})}()}(window);
