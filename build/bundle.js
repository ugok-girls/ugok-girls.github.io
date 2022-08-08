var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,i;function l(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function h(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function w(t){i=t}function b(){if(!i)throw new Error("Function called outside component initialization");return i}const y=[],$=[],x=[],_=[],E=Promise.resolve();let L=!1;function C(t){x.push(t)}const S=new Set;let j=0;function T(){const t=i;do{for(;j<y.length;){const t=y[j];j++,w(t),G(t.$$)}for(w(null),y.length=0,j=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while(y.length);for(;_.length;)_.pop()();L=!1,S.clear(),w(t)}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const M=new Set;let U;function W(t,e){t&&t.i&&(M.delete(t),t.i(e))}function D(t,e){const n=e.token={};function o(t,o,c,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;void 0!==c&&(i=i.slice(),i[c]=s);const l=t&&(e.current=t)(i);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(U={r:0,c:[],p:U},function(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),U.c.push((()=>{M.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),U.r||r(U.c),U=U.p)})):e.block.d(1),l.c(),W(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[o]=l),u&&T()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=b();if(t.then((t=>{w(n),o(e.then,1,e.value,t),w(null)}),(t=>{if(w(n),o(e.catch,2,e.error,t),w(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var c}function O(t,e){t.d(1),e.delete(t.key)}function A(t,e){-1===t.$$.dirty[0]&&(y.push(t),L||(L=!0,E.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(c,s,l,u,a,d,p,g=[-1]){const h=i;w(c);const m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:s.target||h.$$.root};p&&p(m.root);let k=!1;if(m.ctx=l?l(c,s.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),k&&A(c,t)),e})):[],m.update(),k=!0,r(m.before_update),m.fragment=!!u&&u(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();s.intro&&W(c.$$.fragment),function(t,n,c,s){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,c),s||C((()=>{const n=l.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(C)}(c,s.target,s.anchor,s.customElement),T()}w(h)}function N(t,e,n){const r=t.slice();return r[7]=e[n],r}function P(t,e,n){const r=t.slice();return r[10]=e[n],r}function R(t){let e,n,r=t[13].message+"";return{c(){e=d("p"),n=p(r),v(e,"color","red")},m(t,r){a(t,e,r),u(e,n)},p(t,e){1&e&&r!==(r=t[13].message+"")&&k(n,r)},d(t){t&&f(e)}}}function z(t){let e,n,o,c,s,i,l,p,k,w,b,y,$,x,_,E,L=[],C=new Map;function S(){return t[1](t[6])}function j(){return t[2](t[6])}function T(){return t[3](t[6])}function G(){return t[4](t[6])}let M=t[6];const U=t=>t[7].username;for(let e=0;e<M.length;e+=1){let n=N(t,M,e),r=U(n);C.set(r,L[e]=q(r,n))}return{c(){e=d("div"),n=d("h1"),n.innerHTML='Twitter発信状況一覧<br/><span style="font-size:small">（過去2週間）</span>',o=g(),c=d("div"),s=d("button"),s.textContent="Tweets",i=g(),l=d("button"),l.textContent="Likes",p=g(),k=d("button"),k.textContent="Replies",w=g(),b=d("button"),b.textContent="RTs",y=g();for(let t=0;t<L.length;t+=1)L[t].c();$=g(),x=d("footer"),x.textContent="— UGOK Project since 2017 —",v(n,"text-align","center"),m(n,"class","svelte-1giuci8"),m(s,"class","svelte-1giuci8"),m(l,"class","svelte-1giuci8"),m(k,"class","svelte-1giuci8"),m(b,"class","svelte-1giuci8"),m(c,"class","btn svelte-1giuci8"),m(e,"id","ranking"),m(x,"class","svelte-1giuci8")},m(t,r){a(t,e,r),u(e,n),u(e,o),u(e,c),u(c,s),u(c,i),u(c,l),u(c,p),u(c,k),u(c,w),u(c,b),u(e,y);for(let t=0;t<L.length;t+=1)L[t].m(e,null);a(t,$,r),a(t,x,r),_||(E=[h(s,"click",S),h(l,"click",j),h(k,"click",T),h(b,"click",G)],_=!0)},p(n,r){t=n,1&r&&(M=t[6],L=function(t,e,n,r,o,c,s,i,l,u,a,f){let d=t.length,p=c.length,g=d;const h={};for(;g--;)h[t[g].key]=g;const m=[],k=new Map,v=new Map;for(g=p;g--;){const t=f(o,c,g),i=n(t);let l=s.get(i);l?r&&l.p(t,e):(l=u(i,t),l.c()),k.set(i,m[g]=l),i in h&&v.set(i,Math.abs(g-h[i]))}const w=new Set,b=new Set;function y(t){W(t,1),t.m(i,a),s.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(a=e.first,d--,p--):k.has(o)?!s.has(r)||w.has(r)?y(e):b.has(o)?d--:v.get(r)>v.get(o)?(b.add(r),y(e)):(w.add(o),d--):(l(n,s),d--)}for(;d--;){const e=t[d];k.has(e.key)||l(e,s)}for(;p;)y(m[p-1]);return m}(L,r,U,1,t,M,C,e,O,q,null,N))},d(t){t&&f(e);for(let t=0;t<L.length;t+=1)L[t].d();t&&f($),t&&f(x),_=!1,r(E)}}}function H(t){let e;return{c(){e=d("span"),m(e,"class","bar svelte-1giuci8"),v(e,"height",8*t[10]+1+"px")},m(t,n){a(t,e,n)},p(t,n){1&n&&v(e,"height",8*t[10]+1+"px")},d(t){t&&f(e)}}}function q(t,e){let n,r,o,c,s,i,w,b,y,$,x,_,E,L,C,S,j,T,G,M,U,W,D,O,A,B,N,R,z,q,F,I,J,K,Q,V,X=e[7].screenname+"",Y=e[7].tweets+"",Z=e[7].likes+"",tt=e[7].replies+"",et=e[7].retweets+"",nt=e[7].dailytweets,rt=[];for(let t=0;t<nt.length;t+=1)rt[t]=H(P(e,nt,t));function ot(...t){return e[5](e[7],e[6],...t)}return{key:t,first:null,c(){n=d("div"),r=d("div"),o=d("a"),c=d("div"),s=d("img"),w=g(),b=d("p"),y=p(X),x=g(),_=d("div"),E=p(Y),L=p(" Tweets"),C=d("br"),S=g(),j=p(Z),T=p(" Likes"),G=d("br"),M=g(),U=p(tt),W=p(" Replies"),D=d("br"),O=g(),A=p(et),B=p(" RTs"),N=g(),R=d("div");for(let t=0;t<rt.length;t+=1)rt[t].c();z=g(),q=d("span"),q.textContent="▶",F=g(),I=d("input"),K=g(),l(s.src,i=e[7].iconurl)||m(s,"src",i),m(s,"alt","プロフィール画像"),m(b,"class","svelte-1giuci8"),m(c,"class","profile svelte-1giuci8"),m(o,"href",$="https://twitter.com/"+e[7].username),m(o,"class","svelte-1giuci8"),m(_,"class","snsData svelte-1giuci8"),v(q,"color","coral"),m(R,"class","graph svelte-1giuci8"),m(I,"class","pickup svelte-1giuci8"),m(I,"type","radio"),m(I,"name","pickup"),I.checked=J=e[7].username==localStorage.pickupUser,m(r,"class","card svelte-1giuci8"),v(r,"background-color",e[7].username==localStorage.pickupUser?"ivory":"inherit"),m(n,"class","record svelte-1giuci8"),this.first=n},m(t,e){a(t,n,e),u(n,r),u(r,o),u(o,c),u(c,s),u(c,w),u(c,b),u(b,y),u(r,x),u(r,_),u(_,E),u(_,L),u(_,C),u(_,S),u(_,j),u(_,T),u(_,G),u(_,M),u(_,U),u(_,W),u(_,D),u(_,O),u(_,A),u(_,B),u(r,N),u(r,R);for(let t=0;t<rt.length;t+=1)rt[t].m(R,null);u(R,z),u(R,q),u(r,F),u(r,I),u(n,K),Q||(V=h(I,"click",ot),Q=!0)},p(t,n){if(e=t,1&n&&!l(s.src,i=e[7].iconurl)&&m(s,"src",i),1&n&&X!==(X=e[7].screenname+"")&&k(y,X),1&n&&$!==($="https://twitter.com/"+e[7].username)&&m(o,"href",$),1&n&&Y!==(Y=e[7].tweets+"")&&k(E,Y),1&n&&Z!==(Z=e[7].likes+"")&&k(j,Z),1&n&&tt!==(tt=e[7].replies+"")&&k(U,tt),1&n&&et!==(et=e[7].retweets+"")&&k(A,et),1&n){let t;for(nt=e[7].dailytweets,t=0;t<nt.length;t+=1){const r=P(e,nt,t);rt[t]?rt[t].p(r,n):(rt[t]=H(r),rt[t].c(),rt[t].m(R,z))}for(;t<rt.length;t+=1)rt[t].d(1);rt.length=nt.length}1&n&&J!==(J=e[7].username==localStorage.pickupUser)&&(I.checked=J),1&n&&v(r,"background-color",e[7].username==localStorage.pickupUser?"ivory":"inherit")},d(t){t&&f(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(rt,t),Q=!1,V()}}}function F(e){let n;return{c(){n=d("div"),n.innerHTML='<div class="spinner svelte-1giuci8"></div>',m(n,"id","loading"),m(n,"class","svelte-1giuci8")},m(t,e){a(t,n,e)},p:t,d(t){t&&f(n)}}}function I(e){let n,r,o,c,s,i,p,h={ctx:e,current:null,token:null,hasCatch:!0,pending:F,then:z,catch:R,value:6,error:13};return D(p=e[0],h),{c(){n=d("html"),r=d("script"),c=d("script"),c.textContent="window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n\n    gtag('config', 'G-1BWG4DW92L');",s=g(),i=d("main"),h.block.c(),document.title="Twitter発信状況一覧サイト",m(n,"lang","ja"),r.async=!0,l(r.src,o="https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L")||m(r,"src","https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L"),m(i,"class","svelte-1giuci8")},m(t,e){u(document.head,n),u(document.head,r),u(document.head,c),a(t,s,e),a(t,i,e),h.block.m(i,h.anchor=null),h.mount=()=>i,h.anchor=null},p(t,[n]){e=t,h.ctx=e,1&n&&p!==(p=e[0])&&D(p,h)||function(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}(h,e,n)},i:t,o:t,d(t){f(n),f(r),f(c),t&&f(s),t&&f(i),h.block.d(),h.token=null,h=null}}}function J(t){const e=localStorage.pickupUser;if(!e)return t;const n=t.findIndex((t=>t.username==e)),r=t.splice(n,1)[0];return t.unshift(r),t}function K(t,e,n){let r=async function(){const t=await fetch("https://asuka-script.deno.dev");let e={};if(!t.ok)throw new Error(t);e=await t.json();const n=e.sort(((t,e)=>e.tweets-t.tweets));for(const t of n)t.dailytweets=JSON.parse(t.dailytweets).reverse();return J(n)}();return[r,t=>{t.sort(((t,e)=>e.tweets-t.tweets)),n(0,r)},t=>{t.sort(((t,e)=>e.likes-t.likes)),n(0,r)},t=>{t.sort(((t,e)=>e.replies-t.replies)),n(0,r)},t=>{t.sort(((t,e)=>e.retweets-t.retweets)),n(0,r)},(t,e,r)=>{localStorage.pickupUser=t.username,n(0,e=J(e))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,K,I,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
