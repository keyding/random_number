var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n){return t(n={exports:{}},n.exports),n.exports}var e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=function(t){return"object"==typeof t?null!==t:"function"==typeof t},c=r.document,l=u(c)&&u(c.createElement),a=!i&&!o((function(){return 7!=Object.defineProperty((t="div",l?c.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),f=function(t){if(!u(t))throw TypeError(String(t)+" is not an object");return t},s=function(t,n){if(!u(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!u(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!u(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!u(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")},p=Object.defineProperty,g={f:i?p:function(t,n,e){if(f(t),n=s(n,!0),f(e),a)try{return p(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},h=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},d=i?function(t,n,e){return g.f(t,n,h(1,e))}:function(t,n,e){return t[n]=e,t},y=function(t,n){try{d(r,t,n)}catch(e){r[t]=n}return n},v=r["__core-js_shared__"]||y("__core-js_shared__",{}),b=n((function(t){(t.exports=function(t,n){return v[t]||(v[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),x={}.hasOwnProperty,S=function(t,n){return x.call(t,n)},m=0,E=Math.random(),w=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++m+E).toString(36)},O=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),j=O&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,R=b("wks"),I=r.Symbol,T=j?I:I&&I.withoutSetter||w,P=function(t){return S(R,t)||(O&&S(I,t)?R[t]=I[t]:R[t]=T("Symbol."+t)),R[t]},_={};_[P("toStringTag")]="z";var A="[object z]"===String(_),C=Function.toString;"function"!=typeof v.inspectSource&&(v.inspectSource=function(t){return C.call(t)});var M,N,k,U,D=v.inspectSource,L=r.WeakMap,F="function"==typeof L&&/native code/.test(D(L)),$=b("keys"),z={},K=r.WeakMap;if(F){var B=new K,G=B.get,Y=B.has,W=B.set;M=function(t,n){return W.call(B,t,n),n},N=function(t){return G.call(B,t)||{}},k=function(t){return Y.call(B,t)}}else{var q=$[U="state"]||($[U]=w(U));z[q]=!0,M=function(t,n){return d(t,q,n),n},N=function(t){return S(t,q)?t[q]:{}},k=function(t){return S(t,q)}}var V={set:M,get:N,has:k,enforce:function(t){return k(t)?N(t):M(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=N(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},X=n((function(t){var n=V.get,e=V.enforce,o=String(String).split("String");(t.exports=function(t,n,i,u){var c=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof n||S(i,"name")||d(i,"name",n),e(i).source=o.join("string"==typeof n?n:"")),t!==r?(c?!a&&t[n]&&(l=!0):delete t[n],l?t[n]=i:d(t,n,i)):l?t[n]=i:y(n,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||D(this)}))})),H={}.toString,J=function(t){return H.call(t).slice(8,-1)},Q=P("toStringTag"),Z="Arguments"==J(function(){return arguments}()),tt=A?J:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),Q))?e:Z?J(n):"Object"==(r=J(n))&&"function"==typeof n.callee?"Arguments":r},nt=A?{}.toString:function(){return"[object "+tt(this)+"]"};A||X(Object.prototype,"toString",nt,{unsafe:!0});var et={}.propertyIsEnumerable,rt=Object.getOwnPropertyDescriptor,ot={f:rt&&!et.call({1:2},1)?function(t){var n=rt(this,t);return!!n&&n.enumerable}:et},it="".split,ut=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==J(t)?it.call(t,""):Object(t)}:Object,ct=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},lt=function(t){return ut(ct(t))},at=Object.getOwnPropertyDescriptor,ft={f:i?at:function(t,n){if(t=lt(t),n=s(n,!0),a)try{return at(t,n)}catch(t){}if(S(t,n))return h(!ot.f.call(t,n),t[n])}},st=r,pt=function(t){return"function"==typeof t?t:void 0},gt=Math.ceil,ht=Math.floor,dt=function(t){return isNaN(t=+t)?0:(t>0?ht:gt)(t)},yt=Math.min,vt=function(t){return t>0?yt(dt(t),9007199254740991):0},bt=Math.max,xt=Math.min,St=function(t){return function(n,e,r){var o,i=lt(n),u=vt(i.length),c=function(t,n){var e=dt(t);return e<0?bt(e+n,0):xt(e,n)}(r,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},mt={includes:St(!0),indexOf:St(!1)}.indexOf,Et=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),wt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var e,r=lt(t),o=0,i=[];for(e in r)!S(z,e)&&S(r,e)&&i.push(e);for(;n.length>o;)S(r,e=n[o++])&&(~mt(i,e)||i.push(e));return i}(t,Et)}},Ot={f:Object.getOwnPropertySymbols},jt=function(t,n){return arguments.length<2?pt(st[t])||pt(r[t]):st[t]&&st[t][n]||r[t]&&r[t][n]}("Reflect","ownKeys")||function(t){var n=wt.f(f(t)),e=Ot.f;return e?n.concat(e(t)):n},Rt=function(t,n){for(var e=jt(n),r=g.f,o=ft.f,i=0;i<e.length;i++){var u=e[i];S(t,u)||r(t,u,o(n,u))}},It=/#|\.prototype\./,Tt=function(t,n){var e=_t[Pt(t)];return e==Ct||e!=At&&("function"==typeof n?o(n):!!n)},Pt=Tt.normalize=function(t){return String(t).replace(It,".").toLowerCase()},_t=Tt.data={},At=Tt.NATIVE="N",Ct=Tt.POLYFILL="P",Mt=Tt,Nt=ft.f,kt=function(){var t=f(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n};function Ut(t,n){return RegExp(t,n)}var Dt,Lt,Ft={UNSUPPORTED_Y:o((function(){var t=Ut("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:o((function(){var t=Ut("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},$t=RegExp.prototype.exec,zt=String.prototype.replace,Kt=$t,Bt=(Dt=/a/,Lt=/b*/g,$t.call(Dt,"a"),$t.call(Lt,"a"),0!==Dt.lastIndex||0!==Lt.lastIndex),Gt=Ft.UNSUPPORTED_Y||Ft.BROKEN_CARET,Yt=void 0!==/()??/.exec("")[1];(Bt||Yt||Gt)&&(Kt=function(t){var n,e,r,o,i=this,u=Gt&&i.sticky,c=kt.call(i),l=i.source,a=0,f=t;return u&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(l="(?: "+l+")",f=" "+f,a++),e=new RegExp("^(?:"+l+")",c)),Yt&&(e=new RegExp("^"+l+"$(?!\\s)",c)),Bt&&(n=i.lastIndex),r=$t.call(u?e:i,f),u?r?(r.input=r.input.slice(a),r[0]=r[0].slice(a),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Bt&&r&&(i.lastIndex=i.global?r.index+r[0].length:n),Yt&&r&&r.length>1&&zt.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var Wt=Kt;!function(t,n){var e,o,i,u,c,l=t.target,a=t.global,f=t.stat;if(e=a?r:f?r[l]||y(l,{}):(r[l]||{}).prototype)for(o in n){if(u=n[o],i=t.noTargetGet?(c=Nt(e,o))&&c.value:e[o],!Mt(a?o:l+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;Rt(u,i)}(t.sham||i&&i.sham)&&d(u,"sham",!0),X(e,o,u,t)}}({target:"RegExp",proto:!0,forced:/./.exec!==Wt},{exec:Wt});var qt=RegExp.prototype,Vt=qt.toString,Xt=o((function(){return"/a/b"!=Vt.call({source:"a",flags:"b"})})),Ht="toString"!=Vt.name;(Xt||Ht)&&X(RegExp.prototype,"toString",(function(){var t=f(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in qt)?kt.call(t):e)}),{unsafe:!0});var Jt=P("species"),Qt=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Zt="$0"==="a".replace(/./,"$0"),tn=P("replace"),nn=!!/./[tn]&&""===/./[tn]("a","$0"),en=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),rn=P("match"),on=P("species"),un=function(t,n){var e,r=f(t).constructor;return void 0===r||null==(e=f(r)[on])?n:function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}(e)},cn=function(t){return function(n,e){var r,o,i=String(ct(n)),u=dt(e),c=i.length;return u<0||u>=c?t?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):r:t?i.slice(u,u+2):o-56320+(r-55296<<10)+65536}},ln={codeAt:cn(!1),charAt:cn(!0)}.charAt,an=function(t,n,e){return n+(e?ln(t,n).length:1)},fn=function(t,n){var e=t.exec;if("function"==typeof e){var r=e.call(t,n);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==J(t))throw TypeError("RegExp#exec called on incompatible receiver");return Wt.call(t,n)},sn=[].push,pn=Math.min,gn=!o((function(){return!RegExp(4294967295,"y")}));!function(t,n,e,r){var i=P(t),u=!o((function(){var n={};return n[i]=function(){return 7},7!=""[t](n)})),c=u&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[Jt]=function(){return e},e.flags="",e[i]=/./[i]),e.exec=function(){return n=!0,null},e[i](""),!n}));if(!u||!c||"replace"===t&&(!Qt||!Zt||nn)||"split"===t&&!en){var l=/./[i],a=e(i,""[t],(function(t,n,e,r,o){return n.exec===Wt?u&&!o?{done:!0,value:l.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Zt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:nn}),f=a[0],s=a[1];X(String.prototype,t,f),X(RegExp.prototype,i,2==n?function(t,n){return s.call(t,this,n)}:function(t){return s.call(t,this)})}r&&d(RegExp.prototype[i],"sham",!0)}("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r,o,i=String(ct(this)),c=void 0===e?4294967295:e>>>0;if(0===c)return[];if(void 0===t)return[i];if(!u(r=t)||!(void 0!==(o=r[rn])?o:"RegExp"==J(r)))return n.call(i,t,c);for(var l,a,f,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,p+"g");(l=Wt.call(h,i))&&!((a=h.lastIndex)>g&&(s.push(i.slice(g,l.index)),l.length>1&&l.index<i.length&&sn.apply(s,l.slice(1)),f=l[0].length,g=a,s.length>=c));)h.lastIndex===l.index&&h.lastIndex++;return g===i.length?!f&&h.test("")||s.push(""):s.push(i.slice(g)),s.length>c?s.slice(0,c):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=ct(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var i=e(r,t,this,o,r!==n);if(i.done)return i.value;var u=f(t),c=String(this),l=un(u,RegExp),a=u.unicode,s=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(gn?"y":"g"),p=new l(gn?u:"^(?:"+u.source+")",s),g=void 0===o?4294967295:o>>>0;if(0===g)return[];if(0===c.length)return null===fn(p,c)?[c]:[];for(var h=0,d=0,y=[];d<c.length;){p.lastIndex=gn?d:0;var v,b=fn(p,gn?c:c.slice(d));if(null===b||(v=pn(vt(p.lastIndex+(gn?0:d)),c.length))===h)d=an(c,d,a);else{if(y.push(c.slice(h,d)),y.length===g)return y;for(var x=1;x<=b.length-1;x++)if(y.push(b[x]),y.length===g)return y;d=h=v}}return y.push(c.slice(h)),y}]}),!gn);export default function(){return+Math.random().toString().split(".")[1].substring(0,8)}
