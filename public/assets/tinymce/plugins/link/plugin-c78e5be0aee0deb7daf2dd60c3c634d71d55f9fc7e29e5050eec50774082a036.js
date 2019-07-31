!function(a){"use strict";var n,t,e,r,o,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=tinymce.util.Tools.resolve("tinymce.util.VK"),c=function(n){return n.target_list},l=function(n){return n.rel_list},f=function(n){return n.link_class_list},p=function(n){var t=n.link_assume_external_targets;return"boolean"==typeof t&&t?1:"string"!=typeof t||"http"!==t&&"https"!==t?0:t},s=function(n){return"boolean"==typeof n.link_context_toolbar&&n.link_context_toolbar},g=function(n){return n.link_list},h=function(n){return"string"==typeof n.default_link_target},v=function(n){return n.default_link_target},m=c,d=function(n){return!1!==c(n)},y=l,k=function(n){return l(n)!==undefined},x=f,b=function(n){return f(n)!==undefined},O=function(n){return!1!==n.link_title},w=function(n){return"boolean"==typeof n.allow_unsafe_link_target&&n.allow_unsafe_link_target},A=function(n){return!0===n.link_quicklink},C=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),_=tinymce.util.Tools.resolve("tinymce.Env"),T=function(n){if(!_.ie||10<_.ie){var t=a.document.createElement("a");t.target="_blank",t.href=n,t.rel="noreferrer noopener";var e=a.document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,a.window,0,0,0,0,0,!1,!1,!1,!1,0,null),i=t,u=e,a.document.body.appendChild(i),i.dispatchEvent(u),a.document.body.removeChild(i)}else{var r=a.window.open("","_blank");if(r){r.opener=null;var o=r.document;o.open(),o.write('<meta http-equiv="refresh" content="0; url='+C.DOM.encode(n)+'">'),o.close()}}var i,u},N=function(){},S=function(n){return function(){return n}},D=S(!1),M=S(!0),L=D,E=M,U=function(){return R},R=(r={fold:function(n){return n()},is:L,isSome:L,isNone:E,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:U,ap:U,each:function(){},bind:U,flatten:U,exists:L,forall:E,filter:U,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:S("none()")},Object.freeze&&Object.freeze(r),r),P=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:E,isNone:L,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return P(n(e))},ap:function(n){return n.fold(U,function(n){return P(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:R},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(L,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},z={some:P,none:U,from:function(n){return null===n||n===undefined?R:P(n)}},q=function(t){return function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===t}},K=q("string"),I=q("array"),j=q("function"),B=(Array.prototype.slice,(o=Array.prototype.indexOf)===undefined?function(n,t){return F(n,t)}:function(n,t){return o.call(n,t)}),V=function(n,t){for(var e=0,r=n.length;e<r;e++)t(n[e],e,n)},F=function(n,t){for(var e=0,r=n.length;e<r;++e)if(n[e]===t)return e;return-1},W=Array.prototype.push,H=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!I(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n);W.apply(t,n[e])}return t},$=function(n,t){var e=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o,n)}return r}(n,t);return H(e)},G=(j(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.Tools")),J=function(n){return/^\w+:/i.test(n)},X=function(n,t){var e,r,o=["noopener"],i=n?n.split(/\s+/):[],u=function(n){return n.filter(function(n){return-1===G.inArray(o,n)})},a=t?0<(e=u(e=i)).length?e.concat(o):o:u(i);return 0<a.length?(r=a,G.trim(r.sort().join(" "))):""},Q=function(n,t){return t=t||n.selection.getNode(),Z(t)?n.dom.select("a[href]",t)[0]:n.dom.getParent(t,"a[href]")},Y=function(n){return n&&"A"===n.nodeName&&!!n.href},Z=function(n){return n&&"FIGURE"===n.nodeName&&/\bimage\b/i.test(n.className)},nn=function(n){return t=["title","rel","class","target"],e=function(t,e){return n[e].each(function(n){t[e]=0<n.length?n:null}),t},r={href:n.href},V(t,function(n){r=e(r,n)}),r;var t,e,r},tn=function(n,t){var e=n.dom.select("img",t)[0];if(e){var r=n.dom.getParents(e,"a[href]",t)[0];r&&(r.parentNode.insertBefore(e,r),n.dom.remove(r))}},en=function(n,t,e){var r=n.dom.select("img",t)[0];if(r){var o=n.dom.create("a",e);r.parentNode.insertBefore(o,r),o.appendChild(r)}},rn=function(m,d,h){m.undoManager.transact(function(){var n,t,e,r,o,i,u,a,c,l=m.selection.getNode(),f=Q(m,l),s=nn(h);if(!k(m.settings)&&!1===w(m.settings)){var g=X(s.rel,"_blank"===s.target);s.rel=g||null}s.href=(n=s.href,"http"!==(t=p(m.settings))&&"https"!==t||J(n)?n:t+"://"+n),h.href===d.href&&d.attach(),f?(m.focus(),u=m,a=f,c=s,h.text.each(function(n){a.hasOwnProperty("innerText")?a.innerText=n:a.textContent=n}),u.dom.setAttribs(a,c),u.selection.select(a)):(e=m,r=l,o=h.text,i=s,Z(r)?en(e,r,i):o.fold(function(){e.execCommand("mceInsertLink",!1,i)},function(n){e.insertContent(e.dom.createHTML("a",i,e.dom.encode(n)))}))})},on=function(e){e.undoManager.transact(function(){var n=e.selection.getNode();if(Z(n))tn(e,n);else{var t=e.dom.getParent(n,"a[href]",e.getBody());t&&e.dom.remove(t,!0)}e.focus()})},un=function(n){return 0<G.grep(n,Y).length},an=function(n){return n.getAttribute("data-mce-href")||n.getAttribute("href")},cn=function(n){return!(/</.test(n)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(n)||-1===n.indexOf("href=")))},ln=Q,fn=function(n,t){return(t?t.innerText||t.textContent:n.getContent({format:"text"})).replace(/\uFEFF/g,"")},sn=X,gn=J,mn=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e);if(r.isSome())return r}return z.none()},dn=function(n){return K(n.value)?n.value:""},hn=function(e){return void 0===e&&(e=dn),function(n){return z.from(n).map(function(n){return t=n,r=e,o=[],G.each(t,function(n){var t=K(n.text)?n.text:K(n.title)?n.title:"";if(n.menu!==undefined);else{var e=r(n);o.push({text:t,value:e})}}),o;var t,r,o})}},pn={sanitize:function(n){return hn(dn)(n)},sanitizeWith:hn,createUi:function(t,e){return function(n){return{name:t,type:"selectbox",label:e,items:n}}},getValue:dn},vn=function(n){var t=n,e=function(){return t};return{get:e,set:function(n){t=n},clone:function(){return vn(e())}}},yn=function(t,n,e,r){var o,i,u=r[n],a=0<t.length;return u!==undefined?(o=u,i=e,mn(i,function(n){return z.some(n).filter(function(n){return n.value===o})})).map(function(n){return{url:{value:n.value,meta:{text:a?t:n.text,attach:N}},text:a?t:n.text}}):z.none()},kn=function(n,i){var u=vn(n.text),o=function(n,t){var e,r,o=(e=i,r=t.name,"link"===r?e.catalogs.link:"anchor"===r?e.catalogs.anchor:z.none()).getOr([]);return yn(u.get(),t.name,o,n)};return{onChange:function(n,t){return"url"===t.name?function(n){if(u.get().length<=0){var t=n.url.meta.text!==undefined?n.url.meta.text:n.url.value;return z.some({text:t})}return z.none()}(n()):(e=["anchor","link"],r=t.name,-1<B(e,r)?o(n(),t):("text"===t.name&&u.set(n().text),z.none()));var e,r}}},xn=function(){return(xn=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},bn=function(n){var e=z.none(),t=[],r=function(n){o()?u(n):t.push(n)},o=function(){return e.isSome()},i=function(n){V(n,u)},u=function(t){e.each(function(n){a.setTimeout(function(){t(n)},0)})};return n(function(n){e=z.some(n),i(t),t=[]}),{get:r,map:function(e){return bn(function(t){r(function(n){t(e(n))})})},isReady:o}},On={nu:bn,pure:function(t){return bn(function(n){n(t)})}},wn=function(t){var o=function(n){var r;t((r=n,function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=this;a.setTimeout(function(){r.apply(e,n)},0)}))},e=function(){return On.nu(o)};return{map:function(r){return wn(function(e){o(function(n){var t=r(n);e(t)})})},bind:function(e){return wn(function(t){o(function(n){e(n).get(t)})})},anonBind:function(t){return wn(function(n){o(function(){t.get(n)})})},toLazy:e,toCached:function(){var t=null;return wn(function(n){null===t&&(t=e()),t.get(n)})},get:o}},An={nu:wn,pure:function(t){return wn(function(n){n(t)})}},Cn=tinymce.util.Tools.resolve("tinymce.util.Delay"),_n=function(n){var t=n.href;return 0<t.indexOf("@")&&-1===t.indexOf("//")&&-1===t.indexOf("mailto:")?z.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(n){return xn({},n,{href:"mailto:"+t})}}):z.none()},Tn=function(u,n,a){return mn([_n,(e=n,function(n){var t=n.href;return 1===e&&!gn(t)||0===e&&/^\s*www[\.|\d\.]/i.test(t)?z.some({message:"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",preprocess:function(n){return xn({},n,{href:"http://"+t})}}):z.none()})],function(n){return n(a)}).fold(function(){return An.pure(a)},function(i){return An.nu(function(t){var e,n,r,o;e=u,n=i.message,r=function(n){t(n?i.preprocess(a):a)},o=e.selection.getRng(),Cn.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(n){e.selection.setRng(o),r(n)})})})});var e},Nn=function(n){var t=n.dom.select("a:not([href])"),e=$(t,function(n){var t=n.name||n.id;return t?[{text:t,value:"#"+t}]:[]});return 0<e.length?z.some([{text:"None",value:""}].concat(e)):z.none()},Sn=function(n){if(b(n.settings)){var t=x(n.settings);return pn.sanitize(t)}return z.none()},Dn=tinymce.util.Tools.resolve("tinymce.util.XHR"),Mn=function(t){var e=function(n){return t.convertURL(n.value||n.url,"href")},n=g(t.settings);return An.nu(function(t){"string"==typeof n?Dn.send({url:n,success:function(n){return t(function(n){try{return z.some(JSON.parse(n))}catch(t){return z.none()}}(n))},error:function(){return t(z.none())}}):"function"==typeof n?n(function(n){return t(z.some(n))}):t(z.from(n))}).map(function(n){return n.bind(pn.sanitizeWith(e)).map(function(n){return 0<n.length?[{text:"None",value:""}].concat(n):n})})},Ln=function(n,t){if(k(n.settings)){var e=y(n.settings),r=t.is("_blank");return(!1===w(n.settings)?pn.sanitizeWith(function(n){return sn(pn.getValue(n),r)}):pn.sanitize)(e)}return z.none()},En=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],Un=function(n){if(d(n.settings)){var t=m(n.settings);return pn.sanitize(t).orThunk(function(){return z.some(En)})}return z.none()},Rn=function(n,t,e){var r=n.getAttrib(t,e);return null!==r&&0<r.length?z.some(r):z.none()},Pn=function(s,g,m){return Mn(s).map(function(n){var t,e,r,o,i,u,a,c,l,f=(e=m,r=(t=s).selection,o=t.dom,i=cn(r.getContent())?z.some(fn(r,e)):z.none(),u=e?z.some(o.getAttrib(e,"href")):z.none(),a=e?z.from(o.getAttrib(e,"target")):z.none(),c=Rn(o,e,"rel"),l=Rn(o,e,"class"),{url:u,text:i,title:Rn(o,e,"title"),target:a,rel:c,linkClass:l});return{anchor:f,catalogs:{targets:Un(s),rels:Ln(s,f.target),classes:Sn(s),anchor:Nn(s),link:n},optNode:z.from(m),flags:{titleEnabled:O(g)}}})},zn=function(d){var n,t,e;(t=(n=d).settings,e=ln(n),Pn(n,t,e)).map(function(n){var i,u,a,t,e,r,o,c,l,f,s,g,m;return e=(u=t=n,a=p((i=d).settings),function(n){var e=n.getData();if(!e.url.value)return on(i),void n.close();var t=function(t){return z.from(e[t]).filter(function(n){return!u.anchor[t].is(n)})},r={href:e.url.value,text:t("text"),target:t("target"),rel:t("rel"),"class":t("linkClass"),title:t("title")},o={href:e.url.value,attach:e.url.meta!==undefined&&e.url.meta.attach?e.url.meta.attach:function(){}};Tn(i,a,r).get(function(n){rn(i,o,n)}),n.close()}),r=d.settings,l=t.anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),f=t.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],c=h(r)?z.some(v(r)):z.none(),s={url:{value:(o=t).anchor.url.getOr(""),meta:{attach:function(){},text:o.anchor.url.fold(function(){return""},function(){return o.anchor.text.getOr("")}),original:{value:o.anchor.url.getOr("")}}},text:o.anchor.text.getOr(""),title:o.anchor.title.getOr(""),anchor:o.anchor.url.getOr(""),link:o.anchor.url.getOr(""),rel:o.anchor.rel.getOr(""),target:o.anchor.target.or(c).getOr(""),linkClass:o.anchor.linkClass.getOr("")},g=kn(s,t),m=t.catalogs,{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:H([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],l,f,function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e);return t}([m.anchor.map(pn.createUi("anchor","Anchors")),m.rels.map(pn.createUi("rel","Rel")),m.targets.map(pn.createUi("target","Open link in...")),m.link.map(pn.createUi("link","Link list")),m.classes.map(pn.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:s,onChange:function(t,n){var e=n.name;g.onChange(t.getData,{name:e}).each(function(n){t.setData(n)})},onSubmit:e}}).get(function(n){d.windowManager.open(n)})},qn=function(n,t){return n.dom.getParent(t,"a[href]")},Kn=function(n){return qn(n,n.selection.getStart())},In=function(n,t){if(t){var e=an(t);if(/^#/.test(e)){var r=n.$(e);r.length&&n.selection.scrollIntoView(r[0],!0)}else T(t.href)}},jn=function(n){return function(){zn(n)}},Bn=function(n){return function(){In(n,Kn(n))}},Vn=function(r){r.on("click",function(n){var t=qn(r,n.target);t&&u.metaKeyPressed(n)&&(n.preventDefault(),In(r,t))}),r.on("keydown",function(n){var t,e=Kn(r);e&&13===n.keyCode&&!0===(t=n).altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey&&(n.preventDefault(),In(r,e))})},Fn=function(e){return function(t){var n=function(n){return t.setActive(!e.readonly&&!!ln(e,n.element))};return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},Wn=function(e){return function(t){t.setDisabled(!un(e.dom.getParents(e.selection.getStart())));var n=function(n){return t.setDisabled(!un(n.parents))};return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},Hn=function(n){n.addCommand("mceLink",function(){A(n.settings)?n.fire("contexttoolbar-show",{toolbarKey:"quicklink"}):jn(n)()})},$n=function(n){n.addShortcut("Meta+K","",function(){n.execCommand("mceLink")})},Gn=function(n){n.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:jn(n),onSetup:Fn(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:function(){return on(n)},onSetup:Wn(n)})},Jn=function(n){n.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Bn(n),onSetup:Wn(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:jn(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:function(){return on(n)},onSetup:Wn(n)})},Xn=function(t){t.ui.registry.addContextMenu("link",{update:function(n){return un(t.dom.getParents(n,"a"))?"link unlink openlink":"link"}})},Qn=function(i){var n=function(n){var t=i.selection.getNode();return n.setDisabled(!ln(i,t)),function(){}};i.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:Fn(i)},label:"Link",predicate:function(n){return!!ln(i,n)&&s(i.settings)},initValue:function(){var n=ln(i);return n?an(n):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(n){var t=i.selection.getNode();return n.setActive(!!ln(i,t)),Fn(i)(n)},onAction:function(n){var t=ln(i),e=n.getValue();if(t)i.dom.setAttrib(t,"href",e),i.selection.collapse(!1),n.hide();else{var r={href:e,attach:function(){}},o=cn(i.selection.getContent())?z.some(fn(i.selection,t)).filter(function(n){return 0<n.length}).or(z.from(e)):z.none();rn(i,r,{href:e,text:o,title:z.none(),rel:z.none(),target:z.none(),"class":z.none()}),n.hide()}}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:n,onAction:function(n){on(i),n.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:n,onAction:function(n){Bn(i)(),n.hide()}}]})};!function Yn(){i.add("link",function(n){Gn(n),Jn(n),Xn(n),Qn(n),Vn(n),Hn(n),$n(n)})}()}(window);