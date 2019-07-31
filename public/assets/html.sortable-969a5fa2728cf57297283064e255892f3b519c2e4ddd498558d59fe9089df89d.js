!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.sortable=t()}(this,function(){"use strict";function u(n,r,a){var o=null;return 0===r?n:function(){var e=a||this,t=arguments;clearTimeout(o),o=setTimeout(function(){n.apply(e,t)},r)}}var p,h,g=[],m=[],v=function(e,t,n){if(n===undefined)return e&&e.h5s&&e.h5s.data&&e.h5s.data[t];e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n},t=function(e){e.h5s&&delete e.h5s.data},y=function(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)},b=function(e,t){if(!t)return Array.prototype.slice.call(e);for(var n=[],r=0;r<e.length;++r)"string"==typeof t&&y(e[r],t)&&n.push(e[r]),-1!==t.indexOf(e[r])&&n.push(e[r]);return n},E=function(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)E(e[r],t,n);else e.addEventListener(t,n),e.h5s=e.h5s||{},e.h5s.events=e.h5s.events||{},e.h5s.events[t]=n},a=function(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)a(e[n],t);else e.h5s&&e.h5s.events&&e.h5s.events[t]&&(e.removeEventListener(t,e.h5s.events[t]),delete e.h5s.events[t])},x=function(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)x(e[r],t,n);else e.setAttribute(t,n)},r=function(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)r(e[n],t);else e.removeAttribute(t)},I=function(e){var t=e.getClientRects()[0];return{left:t.left+window.scrollX,top:t.top+window.scrollY}},o=function(e){a(e,"dragstart"),a(e,"dragend"),a(e,"selectstart"),a(e,"dragover"),a(e,"dragenter"),a(e,"drop")},i=function(e){a(e,"dragover"),a(e,"dragenter"),a(e,"drop")},s=function(e,t){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text",""),e.dataTransfer.setDragImage&&e.dataTransfer.setDragImage(t.draggedItem,t.x,t.y)},l=function(e,t){return t.x||(t.x=parseInt(e.pageX-I(t.draggedItem).left)),t.y||(t.y=parseInt(e.pageY-I(t.draggedItem).top)),t},d=function(e){return{draggedItem:e}},w=function(e,t){var n=d(t);n=l(e,n),s(e,n)},c=function(e){t(e),r(e,"aria-dropeffect")},f=function(e){r(e,"aria-grabbed"),r(e,"draggable"),r(e,"role")},C=function(e,t){return e===t||v(e,"connectWith")!==undefined&&v(e,"connectWith")===v(t,"connectWith")},A=function(e,t){var n,r=[];if(!t)return e;for(var a=0;a<e.length;++a)n=e[a].querySelectorAll(t),r=r.concat(Array.prototype.slice.call(n));return r},n=function(e){var t=v(e,"opts")||{},n=b(q(e),t.items),r=A(n,t.handle);i(e),c(e),a(r,"mousedown"),o(n),f(n)},D=function(e){var t=v(e,"opts"),n=b(q(e),t.items),r=A(n,t.handle);x(e,"aria-dropeffect","move"),v(e,"_disabled","false"),x(r,"draggable","true"),"function"!=typeof(document||window.document).createElement("span").dragDrop||t.disableIEFix||E(r,"mousedown",function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var e=this.parentElement;-1===n.indexOf(e);)e=e.parentElement;e.dragDrop()}})},S=function(e){var t=v(e,"opts"),n=b(q(e),t.items),r=A(n,t.handle);x(e,"aria-dropeffect","none"),v(e,"_disabled","true"),x(r,"draggable","false"),a(r,"mousedown")},L=function(e){var t=v(e,"opts"),n=b(q(e),t.items),r=A(n,t.handle);v(e,"_disabled","false"),o(n),a(r,"mousedown"),i(e)},O=function(e){return e.parentElement?Array.prototype.indexOf.call(e.parentElement.children,e):0},T=function(e){return!!e.parentNode},W=function(e,t){if("string"!=typeof e)return e;var n=document.createElement(t);return n.innerHTML=e,n.firstChild},M=function(e,t){e.parentElement.insertBefore(t,e)},N=function(e,t){e.parentElement.insertBefore(t,e.nextElementSibling)},P=function(e){e.parentNode&&e.parentNode.removeChild(e)},_=function(e,t){var n=document.createEvent("Event");return t&&(n.detail=t),n.initEvent(e,!1,!0),n},Y=function(t,n){m.forEach(function(e){C(t,e)&&e.dispatchEvent(n)})},q=function(e){return e.children},z=function(e,c){var f=String(c);return(c=function(e){var t={connectWith:!1,placeholder:null,disableIEFix:!1,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,debounce:0,maxItems:0};for(var n in e)t[n]=e[n];return t}(c))&&"function"==typeof c.getChildren&&(q=c.getChildren),"string"==typeof e&&(e=document.querySelectorAll(e)),e instanceof window.Element&&(e=[e]),(e=Array.prototype.slice.call(e)).forEach(function(n){if(/enable|disable|destroy/.test(f))z[f](n);else{c=v(n,"opts")||c,v(n,"opts",c),L(n);var t,r,a,s=b(q(n),c.items),l=c.placeholder;if(l||(l=document.createElement(/^ul|ol$/i.test(n.tagName)?"li":"div")),(l=W(l,n.tagName)).classList.add.apply(l.classList,c.placeholderClass.split(" ")),!n.getAttribute("data-sortable-id")){var e=m.length;m[e]=n,x(n,"data-sortable-id",e),x(s,"data-item-sortable-id",e)}if(v(n,"items",c.items),g.push(l),c.connectWith&&v(n,"connectWith",c.connectWith),D(n),x(s,"role","option"),x(s,"aria-grabbed","false"),c.hoverClass){var o="sortable-over";"string"==typeof c.hoverClass&&(o=c.hoverClass),E(s,"mouseenter",function(){this.classList.add(o)}),E(s,"mouseleave",function(){this.classList.remove(o)})}c.maxItems&&"number"==typeof c.maxItems&&(a=c.maxItems),E(s,"dragstart",function(e){e.stopImmediatePropagation(),c.handle&&!y(e.target,c.handle)||"false"===this.getAttribute("draggable")||(w(e,this),this.classList.add(c.draggingClass),x(p=this,"aria-grabbed","true"),t=O(p),h=parseInt(window.getComputedStyle(p).height),r=this.parentElement,Y(n,_("sortstart",{item:p,placeholder:l,startparent:r})))}),E(s,"dragend",function(){var e;p&&(p.classList.remove(c.draggingClass),x(p,"aria-grabbed","false"),p.style.display=p.oldDisplay,delete p.oldDisplay,g.forEach(P),e=this.parentElement,Y(n,_("sortstop",{item:p,startparent:r})),t===O(p)&&r===e||Y(n,_("sortupdate",{item:p,index:b(q(e),v(e,"items")).indexOf(p),oldindex:s.indexOf(p),elementIndex:O(p),oldElementIndex:t,startparent:r,endparent:e})),h=p=null)}),E([n,l],"drop",function(e){var t;C(n,p.parentElement)&&(e.preventDefault(),e.stopPropagation(),t=g.filter(T)[0],N(t,p),p.dispatchEvent(_("dragend")))});var i=u(function(e,t){if(p)if(-1!==s.indexOf(e)){var n=parseInt(window.getComputedStyle(e).height),r=O(l),a=O(e);if(c.forcePlaceholderSize&&(l.style.height=h+"px"),h<n){var o=n-h,i=I(e).top;if(r<a&&t<i+o)return;if(a<r&&i+n-o<t)return}p.oldDisplay===undefined&&(p.oldDisplay=p.style.display),"none"!==p.style.display&&(p.style.display="none"),r<a?N(e,l):M(e,l),g.filter(function(e){return e!==l}).forEach(P)}else-1!==g.indexOf(e)||b(q(e),c.items).length||(g.forEach(P),e.appendChild(l))},c.debounce),d=function(e){p&&C(n,p.parentElement)&&"true"!==v(n,"_disabled")&&(a&&b(q(n),v(n,"items")).length>=a||(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="move",i(this,e.pageY)))};E(s.concat(n),"dragover",d),E(s.concat(n),"dragenter",d)}}),e};return z.destroy=function(e){n(e)},z.enable=function(e){D(e)},z.disable=function(e){S(e)},z});