!function(){"use strict";var n,t,e,r,u=tinymce.util.Tools.resolve("tinymce.PluginManager"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),O=function(n,t,e){var r="UL"===t?"InsertUnorderedList":"InsertOrderedList";n.execCommand(r,!1,!1===e?null:{"list-style-type":e})},o=function(e){e.addCommand("ApplyUnorderedListStyle",function(n,t){O(e,"UL",t["list-style-type"])}),e.addCommand("ApplyOrderedListStyle",function(n,t){O(e,"OL",t["list-style-type"])})},i=function(n){var t=n.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return t?t.split(/[ ,]/):[]},l=function(n){var t=n.getParam("advlist_bullet_styles","default,circle,square");return t?t.split(/[ ,]/):[]},c=function(n){return function(){return n}},s=c(!1),f=c(!0),a=s,d=f,g=function(){return p},p=(r={fold:function(n){return n()},is:a,isSome:a,isNone:d,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:g,ap:g,each:function(){},bind:g,flatten:g,exists:a,forall:d,filter:g,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:c("none()")},Object.freeze&&Object.freeze(r),r),m=function(e){var n=function(){return e},t=function(){return u},r=function(n){return n(e)},u={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:d,isNone:a,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return m(n(e))},ap:function(n){return n.fold(g,function(n){return m(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?u:p},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(a,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return u},y=function(n){return null===n||n===undefined?p:m(n)},h=function(n){return n&&/^(TH|TD)$/.test(n.nodeName)},L=function(r){return function(n){return n&&/^(OL|UL|DL)$/.test(n.nodeName)&&(e=n,(t=r).$.contains(t.getBody(),e));var t,e}},N=function(n){var t=n.dom.getParent(n.selection.getNode(),"ol,ul"),e=n.dom.getStyle(t,"listStyleType");return y(e)},S=function(n,t,e){var r=function(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e;return-1}(t.parents,h),u=-1!==r?t.parents.slice(0,r):t.parents,o=v.grep(u,L(n));return 0<o.length&&o[0].nodeName===e},T=function(n,t,e,r,u,o){var i,l,c,s,f,a,d,g,p,m,y;0<o.length?(d=t,g=e,p=r,m=u,y=o,(a=n).ui.registry.addSplitButton(d,{tooltip:g,icon:"OL"===m?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:function(n){n(v.map(y,function(n){return{type:"choiceitem",value:"default"===n?"":n,icon:"list-"+("OL"===m?"num":"bull")+"-"+("disc"===n||"decimal"===n?"default":n),text:n.replace(/\-/g," ").replace(/\b\w/g,function(n){return n.toUpperCase()})}}))},onAction:function(){return a.execCommand(p)},onItemAction:function(n,t){O(a,m,t)},select:function(t){return N(a).map(function(n){return t===n}).getOr(!1)},onSetup:function(t){var n=function(n){t.setActive(S(a,n,m))};return a.on("NodeChange",n),function(){return a.off("NodeChange",n)}}})):(l=t,c=e,s=r,f=u,(i=n).ui.registry.addToggleButton(l,{active:!1,tooltip:c,icon:"OL"===f?"ordered-list":"unordered-list",onSetup:function(t){var n=function(n){t.setActive(S(i,n,f))};return i.on("NodeChange",n),function(){return i.off("NodeChange",n)}},onAction:function(){return i.execCommand(s)}}))},b=function(n){T(n,"numlist","Numbered list","InsertOrderedList","OL",i(n)),T(n,"bullist","Bullet list","InsertUnorderedList","UL",l(n))};!function A(){u.add("advlist",function(n){var t,e,r;e="lists",r=(t=n).settings.plugins?t.settings.plugins:"",-1!==v.inArray(r.split(/[ ,]/),e)&&(b(n),o(n))})}()}();