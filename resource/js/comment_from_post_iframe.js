(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l="Symbol.iterator",p="function",q="object",r="string",t,u=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},v=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:u(a)}},w=typeof Object.defineProperties==p?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},x=function(a){a=[q==typeof globalThis&&globalThis,a,q==typeof window&&window,q==typeof self&&
self,q==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},y=x(this),A=function(a,b){if(b)a:{var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&w(c,a,{configurable:!0,writable:!0,value:b})}};
A("Symbol",function(a){if(a)return a;var b=function(h,m){this.ca=h;w(this,"description",{configurable:!0,writable:!0,value:m})};b.prototype.toString=function(){return this.ca};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(h){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(h||"")+"_"+d++,h)};return e},"es6","es3");
A(l,function(a){if(a)return a;a=Symbol(l);for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=y[b[c]];typeof d===p&&typeof d.prototype[a]!=p&&w(d.prototype,a,{configurable:!0,writable:!0,value:function(){return B(u(this))}})}return a},"es6","es3");
var B=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},C=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
A("WeakMap",function(a){function b(){}function c(g){var k=typeof g;return k===q&&null!==g||k===p}function d(g){if(!C(g,h)){var k=new b;w(g,h,{value:k})}}function e(g){var k=Object[g];k&&(Object[g]=function(n){if(n instanceof b)return n;Object.isExtensible(n)&&d(n);return k(n)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),n=new a([[g,2],[k,3]]);if(2!=n.get(g)||3!=n.get(k))return!1;n.delete(g);n.set(k,4);return!n.has(g)&&4==n.get(k)}catch(z){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var m=0,f=function(g){this.J=(m+=Math.random()+1).toString();if(g){g=v(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}};f.prototype.set=function(g,k){if(!c(g))throw Error("Invalid WeakMap key");d(g);if(!C(g,h))throw Error("WeakMap key fail: "+g);g[h][this.J]=k;return this};f.prototype.get=function(g){return c(g)&&C(g,h)?g[h][this.J]:void 0};f.prototype.has=function(g){return c(g)&&C(g,h)&&C(g[h],this.J)};
f.prototype.delete=function(g){return c(g)&&C(g,h)&&C(g[h],this.J)?delete g[h][this.J]:!1};return f},"es6","es3");
A("Map",function(a){if(function(){if(!a||typeof a!=p||!a.prototype.entries||typeof Object.seal!=p)return!1;try{var f=Object.seal({x:4}),g=new a(v([[f,"s"]]));if("s"!=g.get(f)||1!=g.size||g.get({x:4})||g.set({x:4},"t")!=g||2!=g.size)return!1;var k=g.entries(),n=k.next();if(n.done||n.value[0]!=f||"s"!=n.value[1])return!1;n=k.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!k.next().done?!1:!0}catch(z){return!1}}())return a;var b=new WeakMap,c=function(f){this.G={};this.s=h();this.size=0;if(f){f=
v(f);for(var g;!(g=f.next()).done;)g=g.value,this.set(g[0],g[1])}};c.prototype.set=function(f,g){f=0===f?0:f;var k=d(this,f);k.list||(k.list=this.G[k.id]=[]);k.i?k.i.value=g:(k.i={next:this.s,u:this.s.u,head:this.s,key:f,value:g},k.list.push(k.i),this.s.u.next=k.i,this.s.u=k.i,this.size++);return this};c.prototype.delete=function(f){f=d(this,f);return f.i&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.G[f.id],f.i.u.next=f.i.next,f.i.next.u=f.i.u,f.i.head=null,this.size--,!0):!1};c.prototype.clear=
function(){this.G={};this.s=this.s.u=h();this.size=0};c.prototype.has=function(f){return!!d(this,f).i};c.prototype.get=function(f){return(f=d(this,f).i)&&f.value};c.prototype.entries=function(){return e(this,function(f){return[f.key,f.value]})};c.prototype.keys=function(){return e(this,function(f){return f.key})};c.prototype.values=function(){return e(this,function(f){return f.value})};c.prototype.forEach=function(f,g){for(var k=this.entries(),n;!(n=k.next()).done;)n=n.value,f.call(g,n[1],n[0],this)};
c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(f,g){var k=g&&typeof g;k==q||k==p?b.has(g)?k=b.get(g):(k=""+ ++m,b.set(g,k)):k="p_"+g;var n=f.G[k];if(n&&C(f.G,k))for(f=0;f<n.length;f++){var z=n[f];if(g!==g&&z.key!==z.key||g===z.key)return{id:k,list:n,index:f,i:z}}return{id:k,list:n,index:-1,i:void 0}},e=function(f,g){var k=f.s;return B(function(){if(k){for(;k.head!=f.s;)k=k.u;for(;k.next!=k.head;)return k=k.next,{done:!1,value:g(k)};k=null}return{done:!0,value:void 0}})},h=function(){var f=
{};return f.u=f.next=f.head=f},m=0;return c},"es6","es3");var D=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var h=c++;return{value:b(h,a[h]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};A("Array.prototype.values",function(a){return a?a:function(){return D(this,function(b,c){return c})}},"es8","es3");
A("Array.prototype.keys",function(a){return a?a:function(){return D(this,function(b){return b})}},"es6","es3");A("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var e=[],h="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if(typeof h==p){b=h.call(b);for(var m=0;!(h=b.next()).done;)e.push(c.call(d,h.value,m++))}else for(h=b.length,m=0;m<h;m++)e.push(c.call(d,b[m],m));return e}},"es6","es3");
var E=this||self,F=function(a){var b=typeof a;b=b!=q?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||b==q&&"number"==typeof a.length};var G=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(typeof a===r)return typeof b!==r||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function H(a){var b;a:{if(b=E.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function I(){return H("Safari")&&!(J()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))}function J(){return(H("Chrome")||H("CriOS"))&&!H("Edge")||H("Silk")};var aa=H("Trident")||H("MSIE");var K=function(a,b){return typeof b===r?a.getElementById(b):b},L=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var h=d=0,m;m=b[h];h++)e==m.nodeName&&(a[d++]=m);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(h=d=0;m=b[h];h++){e=m.className;var f;if(f=typeof e.split==p)f=0<=G(e.split(/\s+/),
c);f&&(a[d++]=m)}a.length=d;return a}return b};var M=function(a){this.L=a};M.prototype.serialize=function(a){var b=[];this.P(a,b);return b.join("")};
M.prototype.P=function(a,b){if(null==a)b.push("null");else{if(typeof a==q){if(Array.isArray(a)){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.la(a,b);return}}switch(typeof a){case r:this.ba(a,b);break;case "number":this.ka(a,b);break;case "boolean":b.push(String(a));break;case p:b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
var N={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ba=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;M.prototype.ba=function(a,b){b.push('"',a.replace(ba,function(c){var d=N[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),N[c]=d);return d}),'"')};M.prototype.ka=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
M.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.P(this.L?this.L.call(a,String(e),d):d,b),d=",";b.push("]")};M.prototype.la=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=p&&(b.push(c),this.ba(d,b),b.push(":"),this.P(this.L?this.L.call(a,d,e):e,b),c=",")}b.push("}")};var ca=function(a){if(a.B&&typeof a.B==p)return a.B();if("undefined"!==typeof Map&&a instanceof Map||"undefined"!==typeof Set&&a instanceof Set)return Array.from(a.values());if(typeof a===r)return a.split("");if(F(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b},da=function(a){if(a.M&&typeof a.M==p)return a.M();if(!a.B||typeof a.B!=p){if("undefined"!==typeof Map&&a instanceof Map)return Array.from(a.keys());if(!("undefined"!==typeof Set&&a instanceof
Set)){if(F(a)||typeof a===r){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}},ea=function(a,b,c){if(a.forEach&&typeof a.forEach==p)a.forEach(b,c);else if(F(a)||typeof a===r)Array.prototype.forEach.call(a,b,c);else for(var d=da(a),e=ca(a),h=e.length,m=0;m<h;m++)b.call(c,e[m],d&&d[m],a)};var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),ha=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var h=a[c].substring(0,d);e=a[c].substring(d+1)}else h=a[c];b(h,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var O=function(a,b){this.H=this.K=this.A="";this.F=null;this.I=this.O="";this.j=this.ja=!1;var c;a instanceof O?(this.j=void 0!==b?b:a.j,this.W(a.A),this.X(a.K),this.R(a.H),this.U(a.F),this.setPath(a.getPath()),this.V(a.l.clone()),this.S(a.I)):a&&(c=String(a).match(fa))?(this.j=!!b,this.W(c[1]||"",!0),this.X(c[2]||"",!0),this.R(c[3]||"",!0),this.U(c[4]),this.setPath(c[5]||"",!0),this.V(c[6]||"",!0),this.S(c[7]||"",!0)):(this.j=!!b,this.l=new P(null,this.j))};t=O.prototype;
t.toString=function(){var a=[],b=this.A;b&&a.push(Q(b,R,!0),":");var c=this.H;if(c||"file"==b)a.push("//"),(b=this.K)&&a.push(Q(b,R,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.F,null!=c&&a.push(":",String(c));if(c=this.getPath())this.N()&&"/"!=c.charAt(0)&&a.push("/"),a.push(Q(c,"/"==c.charAt(0)?ia:ja,!0));(c=this.Z())&&a.push("?",c);(c=this.I)&&a.push("#",Q(c,ka));return a.join("")};
t.resolve=function(a){var b=this.clone(),c=a.ha();c?b.W(a.A):c=a.ia();c?b.X(a.K):c=a.N();c?b.R(a.H):c=a.fa();var d=a.getPath();if(c)b.U(a.F);else if(c=a.aa()){if("/"!=d.charAt(0))if(this.N()&&!this.aa())d="/"+d;else{var e=b.getPath().lastIndexOf("/");-1!=e&&(d=b.getPath().slice(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var h=[],m=0;m<e.length;){var f=e[m++];"."==f?d&&m==e.length&&h.push(""):".."==f?((1<h.length||
1==h.length&&""!=h[0])&&h.pop(),d&&m==e.length&&h.push("")):(h.push(f),d=!0)}d=h.join("/")}else d=e}c?b.setPath(d):c=a.ga();c?b.V(a.l.clone()):c=a.ea();c&&b.S(a.I);return b};t.clone=function(){return new O(this)};t.W=function(a,b){this.m();if(this.A=b?S(a,!0):a)this.A=this.A.replace(/:$/,"");return this};t.ha=function(){return!!this.A};t.X=function(a,b){this.m();this.K=b?S(a):a;return this};t.ia=function(){return!!this.K};t.R=function(a,b){this.m();this.H=b?S(a,!0):a;return this};t.N=function(){return!!this.H};
t.U=function(a){this.m();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.F=a}else this.F=null;return this};t.fa=function(){return null!=this.F};t.getPath=function(){return this.O};t.setPath=function(a,b){this.m();this.O=b?S(a,!0):a;return this};t.aa=function(){return!!this.O};t.ga=function(){return""!==this.l.toString()};t.V=function(a,b){this.m();a instanceof P?(this.l=a,this.l.T(this.j)):(b||(a=Q(a,la)),this.l=new P(a,this.j));return this};t.Z=function(){return this.l.toString()};
t.getQuery=function(){return this.Z()};t.ma=function(a,b){this.m();this.l.set(a,b);return this};t.da=function(a){return this.l.get(a)};t.S=function(a,b){this.m();this.I=b?S(a):a;return this};t.ea=function(){return!!this.I};t.removeParameter=function(a){this.m();this.l.remove(a);return this};t.m=function(){if(this.ja)throw Error("Tried to modify a read-only Uri");};t.T=function(a){this.j=a;this.l&&this.l.T(a);return this};
var S=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Q=function(a,b,c){return typeof a===r?(a=encodeURI(a).replace(b,ma),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ma=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},R=/[#\/\?@]/g,ja=/[#\?:]/g,ia=/[#\?]/g,la=/[#\?@]/g,ka=/#/g,P=function(a,b){this.h=this.g=null;this.v=a||null;this.j=!!b};t=P.prototype;
t.o=function(){if(!this.g&&(this.g=new Map,this.h=0,this.v)){var a=this;ha(this.v,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)})}};t.add=function(a,b){this.o();this.D();a=this.C(a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.h+=1;return this};t.remove=function(a){this.o();a=this.C(a);return this.g.has(a)?(this.D(),this.h-=this.g.get(a).length,this.g.delete(a)):!1};t.clear=function(){this.D();this.g=null;this.h=0};t.isEmpty=function(){this.o();return 0==this.h};
t.Y=function(a){this.o();a=this.C(a);return this.g.has(a)};t.forEach=function(a,b){this.o();this.g.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};t.M=function(){this.o();for(var a=Array.from(this.g.values()),b=Array.from(this.g.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],h=0;h<e.length;h++)c.push(b[d]);return c};
t.B=function(a){this.o();var b=[];if(typeof a===r)this.Y(a)&&(b=b.concat(this.g.get(this.C(a))));else{a=Array.from(this.g.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};t.set=function(a,b){this.o();this.D();a=this.C(a);this.Y(a)&&(this.h-=this.g.get(a).length);this.g.set(a,[b]);this.h+=1;return this};t.get=function(a,b){if(!a)return b;a=this.B(a);return 0<a.length?String(a[0]):b};
t.setValues=function(a,b){this.remove(a);if(0<b.length){this.D();var c=this.g,d=c.set;a=this.C(a);var e=b.length;if(0<e){for(var h=Array(e),m=0;m<e;m++)h[m]=b[m];e=h}else e=[];d.call(c,a,e);this.h+=b.length}};
t.toString=function(){if(this.v)return this.v;if(!this.g)return"";for(var a=[],b=Array.from(this.g.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.B(d);for(var h=0;h<d.length;h++){var m=e;""!==d[h]&&(m+="="+encodeURIComponent(String(d[h])));a.push(m)}}return this.v=a.join("&")};t.D=function(){this.v=null};t.clone=function(){var a=new P;a.v=this.v;this.g&&(a.g=new Map(this.g),a.h=this.h);return a};t.C=function(a){a=String(a);this.j&&(a=a.toLowerCase());return a};
t.T=function(a){a&&!this.j&&(this.o(),this.D(),this.g.forEach(function(b,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,b))},this));this.j=a};t.extend=function(a){for(var b=0;b<arguments.length;b++)ea(arguments[b],function(c,d){this.add(d,c)},this)};function T(a,b,c){a:{var d=9==b.nodeType?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||"";break a}d=""}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||"inherit"==d||"transparent"==d||"rgba(0, 0, 0, 0)"==d?b!=(9==b.nodeType?b:b.ownerDocument||b.document).body&&b.parentNode?U(a,b.parentNode):c:d}function U(a,b){return T(a,b,"rgb(0, 0, 0)")}
function na(){for(var a=L(document,"IFRAME","blogger-iframe-colorize",void 0),b=0;b<a.length;b++){var c=a[b],d=K(document,c.id+"-src"),e=d.href;if(!(new O(e)).da("skin")){var h=U("color",c),m=U("backgroundColor",c),f=T("fontFamily",c,"serif");d.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var g=U("color",d);d=d.href=e;e=encodeURIComponent;h=(new M(void 0)).serialize({color:h,backgroundColor:m,unvisitedLinkColor:g,fontFamily:f});e=d+("#"+e(h))}c.src=e}};!H("Android")||J();J();I();var oa=!aa&&!I();var V=-1,pa=/\.(blogger|google)\.com($|:)/;var W=function(){V=Math.floor(1E7*Math.random());for(var a=L(document,"iframe","blogger-comment-from-post",void 0),b=0;b<a.length;b++){var c=K(document,a[b].id+"-src"),d=new O(c.href);d.ma("blogspotRpcToken",V);c.href=d.toString()}na();a=function(e){if(pa.test(e.origin)&&typeof e.data===r&&0==e.data.indexOf("set-comment-editor-height")){var h=document.getElementById("comment-editor");h.height=e.data.substring(26);if(oa&&h.dataset)h.dataset.resized=!0;else{if(/-[a-z]/.test("resized"))throw Error("");
h.setAttribute("data-"+"resized".replace(/([A-Z])/g,"-$1").toLowerCase(),!0)}}};window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)},X=["BLOG_CMT_createIframe"],Y=E;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=W;}).call(this);
