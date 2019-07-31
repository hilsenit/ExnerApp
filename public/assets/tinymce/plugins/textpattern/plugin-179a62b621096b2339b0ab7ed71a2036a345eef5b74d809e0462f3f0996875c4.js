!function(f){"use strict";var t,n,e,r,o,a=function(t){var n=t,e=function(){return n};return{get:e,set:function(t){n=t},clone:function(){return a(e())}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){},c=function(t){return function(){return t}},s=function(t){return t},l=c(!1),d=c(!0),m=l,g=d,p=function(){return h},h=(r={fold:function(t){return t()},is:m,isSome:m,isNone:g,getOr:e=function(t){return t},getOrThunk:n=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:n,map:p,ap:p,each:function(){},bind:p,flatten:p,exists:m,forall:g,filter:p,equals:t=function(t){return t.isNone()},equals_:t,toArray:function(){return[]},toString:c("none()")},Object.freeze&&Object.freeze(r),r),v=function(e){var t=function(){return e},n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:g,isNone:m,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return v(t(e))},ap:function(t){return t.fold(p,function(t){return v(t(e))})},each:function(t){t(e)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(e)?o:h},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(m,function(t){return n(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},y={some:v,none:p,from:function(t){return null===t||t===undefined?h:v(t)}},k=function(n){return function(t){return function(t){if(null===t)return"null";var n=typeof t;return"object"===n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n}(t)===n}},b=k("string"),O=k("object"),w=k("array"),E=k("function"),C=Array.prototype.slice,x=(o=Array.prototype.indexOf)===undefined?function(t,n){return S(t,n)}:function(t,n){return o.call(t,n)},T=function(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var a=t[o];r[o]=n(a,o,t)}return r},N=function(t,n){for(var e=0,r=t.length;e<r;e++)n(t[e],e,t)},R=function(t,n){for(var e=[],r=0,o=t.length;r<o;r++){var a=t[r];n(a,r,t)&&e.push(a)}return e},P=function(t,n,e){return function(t,n){for(var e=t.length-1;0<=e;e--)n(t[e],e,t)}(t,function(t){e=n(e,t)}),e},S=function(t,n){for(var e=0,r=t.length;e<r;++e)if(t[e]===n)return e;return-1},M=function(t,n){for(var e=0,r=t.length;e<r;++e)if(!0!==n(t[e],e,t))return!1;return!0},A=(E(Array.from)&&Array.from,Object.keys),D=Object.hasOwnProperty,j=function(t,n){return D.call(t,n)},B=function(i){if(!w(i))throw new Error("cases must be an array");if(0===i.length)throw new Error("there must be at least one case");var u=[],e={};return N(i,function(t,r){var n=A(t);if(1!==n.length)throw new Error("one and only one name per case");var o=n[0],a=t[o];if(e[o]!==undefined)throw new Error("duplicate key detected:"+o);if("cata"===o)throw new Error("cannot have a case named cata (sorry)");if(!w(a))throw new Error("case arguments must be an array");u.push(o),e[o]=function(){var t=arguments.length;if(t!==a.length)throw new Error("Wrong number of arguments to case "+o+". Expected "+a.length+" ("+a+"), got "+t);for(var e=new Array(t),n=0;n<e.length;n++)e[n]=arguments[n];return{fold:function(){if(arguments.length!==i.length)throw new Error("Wrong number of arguments to fold. Expected "+i.length+", got "+arguments.length);return arguments[r].apply(null,e)},match:function(t){var n=A(t);if(u.length!==n.length)throw new Error("Wrong number of arguments to match. Expected: "+u.join(",")+"\nActual: "+n.join(","));if(!M(u,function(t){return-1<x(n,t)}))throw new Error("Not all branches were specified when using match. Specified: "+n.join(", ")+"\nRequired: "+u.join(", "));return t[o].apply(null,e)},log:function(t){f.console.log(t,{constructors:u,constructor:o,params:e})}}}}),e},I=(B([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(t){var n=[],e=[];return N(t,function(t){t.fold(function(t){n.push(t)},function(t){e.push(t)})}),{errors:n,values:e}}),_=function(e){return{is:function(t){return e===t},isValue:d,isError:l,getOr:c(e),getOrThunk:c(e),getOrDie:c(e),or:function(){return _(e)},orThunk:function(){return _(e)},fold:function(t,n){return n(e)},map:function(t){return _(t(e))},mapError:function(){return _(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOption:function(){return y.some(e)}}},L=function(n){return{is:l,isValue:l,isError:d,getOr:s,getOrThunk:function(t){return t()},getOrDie:function(){return t=String(n),function(){throw new Error(t)}();var t},or:function(t){return t},orThunk:function(t){return t()},fold:function(t){return t(n)},map:function(){return L(n)},mapError:function(t){return L(t(n))},each:u,bind:function(){return L(n)},exists:l,forall:d,toOption:y.none}},U={value:_,error:L,fromOption:function(t,n){return t.fold(function(){return L(n)},_)}},q=function(t){return"inline-command"===t.type||"inline-format"===t.type},V=function(t){return"block-command"===t.type||"block-format"===t.type},W=function(t){return n=t,e=function(t,n){return t.start.length===n.start.length?0:t.start.length>n.start.length?-1:1},(r=C.call(n,0)).sort(e),r;var n,e,r},X=function(o){var a=function(t){return U.error({message:t,pattern:o})},t=function(t,n,e){if(o.format===undefined)return o.cmd!==undefined?b(o.cmd)?U.value(e(o.cmd,o.value)):a(t+" pattern has non-string `cmd` parameter"):a(t+" pattern is missing both `format` and `cmd` parameters");var r=void 0;if(w(o.format)){if(!M(o.format,b))return a(t+" pattern has non-string items in the `format` array");r=o.format}else{if(!b(o.format))return a(t+" pattern has non-string `format` parameter");r=[o.format]}return U.value(n(r))};if(!O(o))return a("Raw pattern is not an object");if(!b(o.start))return a("Raw pattern is missing `start` parameter");if(o.end===undefined)return o.replacement!==undefined?b(o.replacement)?0===o.start.length?a("Replacement pattern has empty `start` parameter"):U.value({type:"inline-command",start:"",end:o.start,cmd:"mceInsertContent",value:o.replacement}):a("Replacement pattern has non-string `replacement` parameter"):0===o.start.length?a("Block pattern has empty `start` parameter"):t("Block",function(t){return{type:"block-format",start:o.start,format:t[0]}},function(t,n){return{type:"block-command",start:o.start,cmd:t,value:n}});if(!b(o.end))return a("Inline pattern has non-string `end` parameter");if(0===o.start.length&&0===o.end.length)return a("Inline pattern has empty `start` and `end` parameters");var e=o.start,r=o.end;return 0===r.length&&(r=e,e=""),t("Inline",function(t){return{type:"inline-format",start:e,end:r,format:t}},function(t,n){return{type:"inline-command",start:e,end:r,cmd:t,value:n}})},z=function(t){return"block-command"===t.type?{start:t.start,cmd:t.cmd,value:t.value}:"block-format"===t.type?{start:t.start,format:t.format}:"inline-command"===t.type?"mceInsertContent"===t.cmd&&""===t.start?{start:t.end,replacement:t.value}:{start:t.start,end:t.end,cmd:t.cmd,value:t.value}:"inline-format"===t.type?{start:t.start,end:t.end,format:1===t.format.length?t.format[0]:t.format}:void 0},F=function(t){return{inlinePatterns:R(t,q),blockPatterns:W(R(t,V))}},J=function(r){return{setPatterns:function(t){var n=I(T(t,X));if(0<n.errors.length){var e=n.errors[0];throw new Error(e.message+":\n"+JSON.stringify(e.pattern,null,2))}r.set(F(n.values))},getPatterns:function(){return T(r.get().inlinePatterns,z).concat(T(r.get().blockPatterns,z))}}},K="undefined"!=typeof f.window?f.window:Function("return this;")(),G=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=K.console;e&&(e.error?e.error.apply(e,t):e.log.apply(e,t))},H=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],Q=function(t){var n,e,r=(n=t,e="textpattern_patterns",j(n,e)?y.from(n[e]):y.none()).getOr(H);if(!w(r))return G("The setting textpattern_patterns should be an array"),{inlinePatterns:[],blockPatterns:[]};var o=I(T(r,X));return N(o.errors,function(t){return G(t.message,t.pattern)}),F(o.values)},Y=tinymce.util.Tools.resolve("tinymce.util.Delay"),Z=tinymce.util.Tools.resolve("tinymce.util.VK"),$=tinymce.util.Tools.resolve("tinymce.util.Tools"),tt=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),nt=function(t){return t.nodeType===f.Node.TEXT_NODE},et=function(t,n,e){if(n&&t.isEmpty(n)&&!e(n)){var r=n.parentNode;t.remove(n),et(t,r,e)}},rt=function(t,n,e,r){void 0===r&&(r=!0);var o=n.startContainer.parentNode,a=n.endContainer.parentNode;n.deleteContents(),r&&!e(n.startContainer)&&(nt(n.startContainer)&&0===n.startContainer.data.length&&t.remove(n.startContainer),nt(n.endContainer)&&0===n.endContainer.data.length&&t.remove(n.endContainer),et(t,o,e),o!==a&&et(t,a,e))},ot=function(t,n){var e,r=n.get(t);return w(r)&&(e=r,0===e.length?y.none():y.some(e[0])).exists(function(t){return j(t,"block")})},at=function(t){return 0===t.start.length},it=function(t,n){return function(t,n){for(var e=0,r=t.length;e<r;e++){var o=t[e];if(n(o,e,t))return y.some(o)}return y.none()}(t,function(t){return!(0!==n.indexOf(t.start)||j(t,"end")&&t.end&&n.lastIndexOf(t.end)!==n.length-t.end.length)})},ut=function(t,n){return{element:t,offset:n}},ft=function(t,n){var e=new tt(t,n),r=function(t){for(var n=e[t]();n&&n.nodeType!==f.Node.TEXT_NODE;)n=e[t]();return n&&n.nodeType===f.Node.TEXT_NODE?y.some(n):y.none()};return{next:function(){return r("next")},prev:function(){return r("prev")},prev2:function(){return r("prev2")}}},ct=function(t,n,e){return nt(t)&&0<=n?y.some(ut(t,n)):ft(t,e).prev().map(function(t){return ut(t,t.data.length)})},st=function(t,e,r){if(!nt(t))return y.none();var n=t.textContent;return 0<=e&&e<=n.length?y.some(ut(t,e)):ft(t,r).prev().bind(function(t){var n=t.textContent;return st(t,e+n.length,r)})},lt=function(t,n,e){if(!nt(t))return y.none();var r=t.textContent;return n<=r.length?y.some(ut(t,n)):ft(t,e).next().bind(function(t){return lt(t,n-r.length,e)})},dt=B([{aborted:[]},{edge:["element"]},{success:["info"]}]),mt=B([{abort:[]},{kontinue:[]},{finish:["info"]}]),gt=function(n,e,t,r,o,a){var i=function(){return a.fold(dt.aborted,dt.edge)},u=function(){var t=o();return t?gt(n,t,y.none(),r,o,y.some(e)):i()};if(n.isBlock(e))return i();if(nt(e)){var f=e.textContent;return r(mt,e,f,t).fold(dt.aborted,function(){return u()},dt.success)}return u()},pt=function(t,n,e){if(nt(n)&&(e<0||e>n.data.length))return[];for(var r=[e],o=n;o!==t&&o.parentNode;){for(var a=o.parentNode,i=0;i<a.childNodes.length;i++)if(a.childNodes[i]===o){r.push(i);break}o=a}return o===t?r.reverse():[]},ht=function(t,n,e,r,o){return{start:pt(t,n,e),end:pt(t,r,o)}},vt=function(t,n){var e,r,o,a=n.slice(),i=a.pop();return(e=a,r=function(t,n){return t.bind(function(t){return y.from(t.childNodes[n])})},o=y.some(t),N(e,function(t){o=r(o,t)}),o).bind(function(t){return nt(t)&&0<=i&&t.data.length,y.some({node:t,offset:i})})},yt=function(n,e){return vt(n,e.start).bind(function(t){var o=t.node,a=t.offset;return vt(n,e.end).map(function(t){var n=t.node,e=t.offset,r=f.document.createRange();return r.setStart(o,a),r.setEnd(n,e),r})})},kt=function(r,o,t){ft(o,o).next().each(function(e){lt(e,t.start.length,o).each(function(t){var n=r.createRng();n.setStart(e,0),n.setEnd(t.element,t.offset),rt(r,n,function(t){return t===o})})})},bt=function(t,n){var e=t.dom,r=t.selection.getRng(),o=e.getParent(r.startContainer,e.isBlock);if(!e.is(o,"p")||o.nodeType!==f.Node.ELEMENT_NODE)return[];var a=o.textContent;return it(n,a).map(function(t){return $.trim(a).length===t.start.length?[]:[{pattern:t,range:ht(e.getRoot(),o,0,o,0)}]}).getOr([])},Ot=function(u,t){if(0!==t.length){var n=u.selection.getBookmark();N(t,function(t){return e=t,r=(n=u).dom,o=e.pattern,a=yt(r.getRoot(),e.range).getOrDie("Unable to resolve path range"),i=r.getParent(a.startContainer,r.isBlock),"block-format"===o.type?ot(o.format,n.formatter)&&n.undoManager.transact(function(){kt(n.dom,i,o),n.formatter.apply(o.format)}):"block-command"===o.type&&n.undoManager.transact(function(){kt(n.dom,i,o),n.execCommand(o.cmd,!1,o.value)}),!0;var n,e,r,o,a,i}),u.selection.moveToBookmark(n)}},wt=function(){return(wt=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},Et=0,Ct=function(t,n){return t.create("span",{"data-mce-type":"bookmark",id:n})},xt=function(t,n){var e=t.createRng();return e.setStartAfter(n.start),e.setEndBefore(n.end),e},Tt=function(t,n,e){var r=yt(t.getRoot(),e).getOrDie("Unable to resolve path range"),o=r.startContainer,a=r.endContainer,i=0===r.endOffset?a:a.splitText(r.endOffset),u=0===r.startOffset?o:o.splitText(r.startOffset);return{prefix:n,end:i.parentNode.insertBefore(Ct(t,n+"-end"),i),start:u.parentNode.insertBefore(Ct(t,n+"-start"),u)}},Nt=function(t,n,e){et(t,t.get(n.prefix+"-end"),e),et(t,t.get(n.prefix+"-start"),e)},Rt=function(i,u,t,n,l,d){if(void 0===d&&(d=!1),0!==u.start.length||d)return ct(t,n,l).bind(function(n){var t,e,r,o,a,f,c,s;return(t=i,e=n.element,r=n.offset,f=i,c=l,s=u.start,o=function(e,r,t,n){if(r===c)return e.abort();var o=t.substring(0,n.getOr(t.length)),a=o.lastIndexOf(s.charAt(s.length-1)),i=o.lastIndexOf(s);if(-1===i)return-1!==a?st(r,a+1-s.length,c).fold(function(){return e.kontinue()},function(t){var n=f.createRng();return n.setStart(t.element,t.offset),n.setEnd(r,a+1),n.toString()===s?e.finish(n):e.kontinue()}):e.kontinue();var u=f.createRng();return u.setStart(r,i),u.setEnd(r,i+s.length),e.finish(u)},a=new tt(e,l),gt(t,e,y.some(r),o,a.prev,y.none())).fold(y.none,y.none,y.some).bind(function(t){if(d){if(t.endContainer===n.element&&t.endOffset===n.offset)return y.none();if(0===n.offset&&t.endContainer.textContent.length===t.endOffset)return y.none()}return y.some(t)})});var e=i.createRng();return e.setStart(t,n),e.setEnd(t,n),y.some(e)},Pt=function(a,i,u){var f=a.dom,c=f.getRoot(),s=u.pattern,l=u.position.element,d=u.position.offset;return st(l,d-u.pattern.end.length,i).bind(function(t){var r=ht(c,t.element,t.offset,l,d);if(at(s))return y.some({matches:[{pattern:s,startRng:r,endRng:r}],position:t});var n=St(a,u.remainingPatterns,t.element,t.offset,i),o=n.getOr({matches:[],position:t}),e=o.position;return Rt(f,s,e.element,e.offset,i,n.isNone()).map(function(t){var n,e=ht(c,(n=t).startContainer,n.startOffset,n.endContainer,n.endOffset);return{matches:o.matches.concat([{pattern:s,startRng:e,endRng:r}]),position:ut(t.startContainer,t.startOffset)}})})},St=function(d,m,g,p,h){var v=d.dom;return ct(g,p,v.getRoot()).bind(function(t){var n=v.createRng();n.setStart(h,0),n.setEnd(g,p);for(var e,r,o,a,i,u=n.toString(),f=0;f<m.length;f++){var c=m[f];if(e=u,i=a=o=void 0,a=r=c.end,i=(o=e).length-r.length,""===a||!(o.length<a.length||o.substr(i,i+a.length)!==a)){var s=m.slice();s.splice(f,1);var l=Pt(d,h,{pattern:c,remainingPatterns:s,position:t});if(l.isSome())return l}}return y.none()})},Mt=function(n,t,e){n.selection.setRng(e),"inline-format"===t.type?N(t.format,function(t){n.formatter.apply(t)}):n.execCommand(t.cmd,!1,t.value)},At=function(o,t){var n,e,a=(n="mce_textpattern",e=(new Date).getTime(),n+"_"+Math.floor(1e9*Math.random())+ ++Et+String(e)),i=P(t,function(t,n){var e=Tt(o,a+"_end"+t.length,n.endRng);return t.concat([wt({},n,{endMarker:e})])},[]);return P(i,function(t,n){var e=i.length-t.length-1,r=at(n.pattern)?n.endMarker:Tt(o,a+"_start"+e,n.startRng);return t.concat([wt({},n,{startMarker:r})])},[])},Dt=function(t,n,e){var r=t.selection.getRng();if(!1===r.collapsed)return[];var o=t.dom.getParent(r.startContainer,t.dom.isBlock),a=r.startOffset-(e?1:0);return St(t,n,r.startContainer,a,o).fold(function(){return[]},function(t){return t.matches})},jt=function(f,t){if(0!==t.length){var c=f.dom,n=f.selection.getBookmark(),e=At(c,t);N(e,function(t){var n,e,r,o,a,i=c.getParent(t.startMarker.start,c.isBlock),u=function(t){return t===i};at(t.pattern)?(n=f,e=t.pattern,r=t.endMarker,o=u,a=xt(n.dom,r),rt(n.dom,a,o),Mt(n,e,a)):function(t,n,e,r,o){var a=t.dom,i=xt(a,r),u=xt(a,e);rt(a,u,o),rt(a,i,o);var f={prefix:e.prefix,start:e.end,end:r.start},c=xt(a,f);Mt(t,n,c)}(f,t.pattern,t.startMarker,t.endMarker,u),Nt(c,t.endMarker,u),Nt(c,t.startMarker,u)}),f.selection.moveToBookmark(n)}},Bt=function(t,n,e){for(var r=0;r<t.length;r++)if(e(t[r],n))return!0},It=function(e,t){if(!e.selection.isCollapsed())return!1;var r=Dt(e,t.inlinePatterns,!1),o=bt(e,t.blockPatterns);return(0<o.length||0<r.length)&&(e.undoManager.add(),e.undoManager.extra(function(){e.execCommand("mceInsertNewLine")},function(){e.insertContent("\ufeff"),jt(e,r),Ot(e,o);var t=e.selection.getRng(),n=ct(t.startContainer,t.startOffset,e.dom.getRoot());e.execCommand("mceInsertNewLine"),n.each(function(t){"\ufeff"===t.element.data.charAt(t.offset-1)&&(t.element.deleteData(t.offset-1,1),et(e.dom,t.element.parentNode,function(t){return t===e.dom.getRoot()}))})}),!0)},_t=function(t,n){var e=Dt(t,n.inlinePatterns,!0);0<e.length&&t.undoManager.transact(function(){jt(t,e)})},Lt=function(t,n){return Bt(t,n,function(t,n){return t.charCodeAt(0)===n.charCode})},Ut=function(t,n){return Bt(t,n,function(t,n){return t===n.keyCode&&!1===Z.modifierPressed(n)})},qt=function(n,e){var r=[",",".",";",":","!","?"],o=[32];n.on("keydown",function(t){13!==t.keyCode||Z.modifierPressed(t)||It(n,e.get())&&t.preventDefault()},!0),n.on("keyup",function(t){Ut(o,t)&&_t(n,e.get())}),n.on("keypress",function(t){Lt(r,t)&&Y.setEditorTimeout(n,function(){_t(n,e.get())})})};!function Vt(){i.add("textpattern",function(t){var n=a(Q(t.settings));return qt(t,n),J(n)})}()}(window);