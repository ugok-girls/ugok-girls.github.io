var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,l;function i(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function w(t){l=t}function v(){if(!l)throw new Error("Function called outside component initialization");return l}const y=[],$=[],x=[],_=[],E=Promise.resolve();let L=!1;function j(t){x.push(t)}const C=new Set;let T=0;function G(){const t=l;do{for(;T<y.length;){const t=y[T];T++,w(t),M(t.$$)}for(w(null),y.length=0,T=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(y.length);for(;_.length;)_.pop()();L=!1,C.clear(),w(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const W=new Set;let D;function A(t,e){t&&t.i&&(W.delete(t),t.i(e))}function B(t,e){const n=e.token={};function o(t,o,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;void 0!==c&&(l=l.slice(),l[c]=s);const i=t&&(e.current=t)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(D={r:0,c:[],p:D},function(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),D.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),D.r||r(D.c),D=D.p)})):e.block.d(1),i.c(),A(i,1),i.m(e.mount(),e.anchor),u=!0),e.block=i,e.blocks&&(e.blocks[o]=i),u&&G()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=v();if(t.then((t=>{w(n),o(e.then,1,e.value,t),w(null)}),(t=>{if(w(n),o(e.catch,2,e.error,t),w(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var c}function O(t,e){t.d(1),e.delete(t.key)}function P(t,e){-1===t.$$.dirty[0]&&(y.push(t),L||(L=!0,E.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(c,s,i,u,a,d,h,p=[-1]){const g=l;w(c);const m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(g?g.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:s.target||g.$$.root};h&&h(m.root);let k=!1;if(m.ctx=i?i(c,s.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),k&&P(c,t)),e})):[],m.update(),k=!0,r(m.before_update),m.fragment=!!u&&u(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();s.intro&&A(c.$$.fragment),function(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(n,c),s||j((()=>{const n=i.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(j)}(c,s.target,s.anchor,s.customElement),G()}w(g)}function S(t,e,n){const r=t.slice();return r[6]=e[n],r}function N(t){let e,n,r=t[9].message+"";return{c(){e=d("p"),n=h(r),b(e,"color","red")},m(t,r){a(t,e,r),u(e,n)},p(t,e){1&e&&r!==(r=t[9].message+"")&&k(n,r)},d(t){t&&f(e)}}}function z(t){let e,n,o,c,s,l,i,h,k,w,v,y,$,x,_,E,L=[],j=new Map;function C(){return t[1](t[5])}function T(){return t[2](t[5])}function G(){return t[3](t[5])}function M(){return t[4](t[5])}let W=t[5];const D=t=>t[6].username;for(let e=0;e<W.length;e+=1){let n=S(t,W,e),r=D(n);j.set(r,L[e]=q(r,n))}return{c(){e=d("div"),n=d("h1"),n.innerHTML='Twitter発信状況一覧<br/><span style="font-size:small">（過去2週間）</span>',o=p(),c=d("div"),s=d("button"),s.textContent="Tweets",l=p(),i=d("button"),i.textContent="Likes",h=p(),k=d("button"),k.textContent="Replies",w=p(),v=d("button"),v.textContent="RTs",y=p();for(let t=0;t<L.length;t+=1)L[t].c();$=p(),x=d("footer"),x.textContent="— UGOK Project since 2017 —",b(n,"text-align","center"),m(n,"class","svelte-rc1008"),m(s,"class","svelte-rc1008"),m(i,"class","svelte-rc1008"),m(k,"class","svelte-rc1008"),m(v,"class","svelte-rc1008"),m(c,"class","btn svelte-rc1008"),m(e,"id","ranking"),m(x,"class","svelte-rc1008")},m(t,r){a(t,e,r),u(e,n),u(e,o),u(e,c),u(c,s),u(c,l),u(c,i),u(c,h),u(c,k),u(c,w),u(c,v),u(e,y);for(let t=0;t<L.length;t+=1)L[t].m(e,null);a(t,$,r),a(t,x,r),_||(E=[g(s,"click",C),g(i,"click",T),g(k,"click",G),g(v,"click",M)],_=!0)},p(n,r){t=n,1&r&&(W=t[5],L=function(t,e,n,r,o,c,s,l,i,u,a,f){let d=t.length,h=c.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],k=new Map,b=new Map;for(p=h;p--;){const t=f(o,c,p),l=n(t);let i=s.get(l);i?r&&i.p(t,e):(i=u(l,t),i.c()),k.set(l,m[p]=i),l in g&&b.set(l,Math.abs(p-g[l]))}const w=new Set,v=new Set;function y(t){A(t,1),t.m(l,a),s.set(t.key,t),a=t.first,h--}for(;d&&h;){const e=m[h-1],n=t[d-1],r=e.key,o=n.key;e===n?(a=e.first,d--,h--):k.has(o)?!s.has(r)||w.has(r)?y(e):v.has(o)?d--:b.get(r)>b.get(o)?(v.add(r),y(e)):(w.add(o),d--):(i(n,s),d--)}for(;d--;){const e=t[d];k.has(e.key)||i(e,s)}for(;h;)y(m[h-1]);return m}(L,r,D,1,t,W,j,e,O,q,null,S))},d(t){t&&f(e);for(let t=0;t<L.length;t+=1)L[t].d();t&&f($),t&&f(x),_=!1,r(E)}}}function q(t,e){let n,r,o,c,s,l,g,b,w,v,y,$,x,_,E,L,j,C,T,G,M,W,D,A,B,O,P,R=e[6].screenname+"",S=e[6].tweets+"",N=e[6].likes+"",z=e[6].replies+"",q=e[6].retweets+"";return{key:t,first:null,c(){n=d("div"),r=d("div"),o=d("a"),c=d("div"),s=d("img"),g=p(),b=d("p"),w=h(R),y=p(),$=d("div"),x=h(S),_=h(" Tweets"),E=d("br"),L=p(),j=h(N),C=h(" Likes"),T=d("br"),G=p(),M=h(z),W=h(" Replies"),D=d("br"),A=p(),B=h(q),O=h(" RTs"),P=p(),i(s.src,l=e[6].iconurl)||m(s,"src",l),m(s,"alt","プロフィール画像"),m(b,"class","svelte-rc1008"),m(c,"class","profile svelte-rc1008"),m(o,"href",v="https://twitter.com/"+e[6].username),m(o,"class","svelte-rc1008"),m($,"class","snsData svelte-rc1008"),m(r,"class","card svelte-rc1008"),m(n,"class","record svelte-rc1008"),this.first=n},m(t,e){a(t,n,e),u(n,r),u(r,o),u(o,c),u(c,s),u(c,g),u(c,b),u(b,w),u(r,y),u(r,$),u($,x),u($,_),u($,E),u($,L),u($,j),u($,C),u($,T),u($,G),u($,M),u($,W),u($,D),u($,A),u($,B),u($,O),u(n,P)},p(t,n){e=t,1&n&&!i(s.src,l=e[6].iconurl)&&m(s,"src",l),1&n&&R!==(R=e[6].screenname+"")&&k(w,R),1&n&&v!==(v="https://twitter.com/"+e[6].username)&&m(o,"href",v),1&n&&S!==(S=e[6].tweets+"")&&k(x,S),1&n&&N!==(N=e[6].likes+"")&&k(j,N),1&n&&z!==(z=e[6].replies+"")&&k(M,z),1&n&&q!==(q=e[6].retweets+"")&&k(B,q)},d(t){t&&f(n)}}}function F(e){let n;return{c(){n=d("div"),m(n,"id","loading"),m(n,"class","svelte-rc1008")},m(t,e){a(t,n,e)},p:t,d(t){t&&f(n)}}}function H(e){let n,r,o,c,s,l,h,g={ctx:e,current:null,token:null,hasCatch:!0,pending:F,then:z,catch:N,value:5,error:9};return B(h=e[0],g),{c(){n=d("html"),r=d("script"),c=d("script"),c.textContent="window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n\n    gtag('config', 'G-1BWG4DW92L');",s=p(),l=d("main"),g.block.c(),document.title="Twitter発信状況一覧サイト",m(n,"lang","ja"),r.async=!0,i(r.src,o="https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L")||m(r,"src","https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L"),m(l,"class","svelte-rc1008")},m(t,e){u(document.head,n),u(document.head,r),u(document.head,c),a(t,s,e),a(t,l,e),g.block.m(l,g.anchor=null),g.mount=()=>l,g.anchor=null},p(t,[n]){e=t,g.ctx=e,1&n&&h!==(h=e[0])&&B(h,g)||function(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}(g,e,n)},i:t,o:t,d(t){f(n),f(r),f(c),t&&f(s),t&&f(l),g.block.d(),g.token=null,g=null}}}function K(t,e,n){let r=async function(){const t=await fetch("https://asuka-script.deno.dev");let e={};if(!t.ok)throw new Error(t);return e=await t.json(),e}();return[r,t=>{t.sort(((t,e)=>e.tweets-t.tweets)),n(0,r)},t=>{t.sort(((t,e)=>e.likes-t.likes)),n(0,r)},t=>{t.sort(((t,e)=>e.replies-t.replies)),n(0,r)},t=>{t.sort(((t,e)=>e.retweets-t.retweets)),n(0,r)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),R(this,t,K,H,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
