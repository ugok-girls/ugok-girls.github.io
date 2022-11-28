var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,l;function i(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function v(t){l=t}function b(){if(!l)throw new Error("Function called outside component initialization");return l}const y=[],$=[],x=[],_=[],S=Promise.resolve();let E=!1;function L(t){x.push(t)}const C=new Set;let T=0;function j(){const t=l;do{for(;T<y.length;){const t=y[T];T++,v(t),U(t.$$)}for(v(null),y.length=0,T=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(y.length);for(;_.length;)_.pop()();E=!1,C.clear(),v(t)}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const G=new Set;let M;function W(t,e){t&&t.i&&(G.delete(t),t.i(e))}function D(t,e){const n=e.token={};function r(t,r,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;void 0!==c&&(l=l.slice(),l[c]=s);const i=t&&(e.current=t)(l);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(M={r:0,c:[],p:M},function(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),M.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),M.r||o(M.c),M=M.p)})):e.block.d(1),i.c(),W(i,1),i.m(e.mount(),e.anchor),a=!0),e.block=i,e.blocks&&(e.blocks[r]=i),a&&j()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=b();if(t.then((t=>{v(n),r(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),r(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var c}function O(t,e){t.d(1),e.delete(t.key)}function A(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,S.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(c,s,i,a,u,d,h,p=[-1]){const g=l;v(c);const m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(g?g.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:s.target||g.$$.root};h&&h(m.root);let k=!1;if(m.ctx=i?i(c,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),k&&A(c,t)),e})):[],m.update(),k=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();s.intro&&W(c.$$.fragment),function(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,c),s||L((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(L)}(c,s.target,s.anchor,s.customElement),j()}v(g)}function N(t,e,n){const o=t.slice();return o[7]=e[n],o}function P(t,e,n){const o=t.slice();return o[10]=e[n],o}function R(t){let e,n,o=t[13].message+"";return{c(){e=d("p"),n=h(o),w(e,"color","red")},m(t,o){u(t,e,o),a(e,n)},p(t,e){1&e&&o!==(o=t[13].message+"")&&k(n,o)},d(t){t&&f(e)}}}function z(t){let e,n,r,c,s,l,i,h,k,v,b,y,$,x,_,S,E=[],L=new Map;function C(){return t[1](t[6])}function T(){return t[2](t[6])}function j(){return t[3](t[6])}function U(){return t[4](t[6])}let G=t[6];const M=t=>t[7].username;for(let e=0;e<G.length;e+=1){let n=N(t,G,e),o=M(n);L.set(o,E[e]=q(o,n))}return{c(){e=d("div"),n=d("h1"),n.innerHTML='Twitter発信状況一覧<br/><span style="font-size:small">（2022年11月1日〜11月28日）</span>',r=p(),c=d("div"),s=d("button"),s.textContent="Tweets",l=p(),i=d("button"),i.textContent="Likes",h=p(),k=d("button"),k.textContent="Replies",v=p(),b=d("button"),b.textContent="RTs",y=p();for(let t=0;t<E.length;t+=1)E[t].c();$=p(),x=d("footer"),x.textContent="— UGOK Project since 2017 —",w(n,"text-align","center"),m(n,"class","svelte-4hc9o"),m(s,"class","svelte-4hc9o"),m(i,"class","svelte-4hc9o"),m(k,"class","svelte-4hc9o"),m(b,"class","svelte-4hc9o"),m(c,"class","btn svelte-4hc9o"),m(e,"id","ranking"),m(x,"class","svelte-4hc9o")},m(t,o){u(t,e,o),a(e,n),a(e,r),a(e,c),a(c,s),a(c,l),a(c,i),a(c,h),a(c,k),a(c,v),a(c,b),a(e,y);for(let t=0;t<E.length;t+=1)E[t].m(e,null);u(t,$,o),u(t,x,o),_||(S=[g(s,"click",C),g(i,"click",T),g(k,"click",j),g(b,"click",U)],_=!0)},p(n,o){t=n,1&o&&(G=t[6],E=function(t,e,n,o,r,c,s,l,i,a,u,f){let d=t.length,h=c.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],k=new Map,w=new Map;for(p=h;p--;){const t=f(r,c,p),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),k.set(l,m[p]=i),l in g&&w.set(l,Math.abs(p-g[l]))}const v=new Set,b=new Set;function y(t){W(t,1),t.m(l,u),s.set(t.key,t),u=t.first,h--}for(;d&&h;){const e=m[h-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,h--):k.has(r)?!s.has(o)||v.has(o)?y(e):b.has(r)?d--:w.get(o)>w.get(r)?(b.add(o),y(e)):(v.add(r),d--):(i(n,s),d--)}for(;d--;){const e=t[d];k.has(e.key)||i(e,s)}for(;h;)y(m[h-1]);return m}(E,o,M,1,t,G,L,e,O,q,null,N))},d(t){t&&f(e);for(let t=0;t<E.length;t+=1)E[t].d();t&&f($),t&&f(x),_=!1,o(S)}}}function H(t){let e;return{c(){e=d("span"),m(e,"class","bar svelte-4hc9o"),w(e,"height",8*t[10]+1+"px")},m(t,n){u(t,e,n)},p(t,n){1&n&&w(e,"height",8*t[10]+1+"px")},d(t){t&&f(e)}}}function q(t,e){let n,o,r,c,s,l,v,b,y,$,x,_,S,E,L,C,T,j,U,G,M,W,D,O,A,B,N,R,z,q,F,I,J,K,Q,V,X=e[7].screenname+"",Y=e[7].tweets+"",Z=e[7].likes+"",tt=e[7].replies+"",et=e[7].retweets+"",nt=e[7].dailytweets,ot=[];for(let t=0;t<nt.length;t+=1)ot[t]=H(P(e,nt,t));function rt(...t){return e[5](e[7],e[6],...t)}return{key:t,first:null,c(){n=d("div"),o=d("div"),r=d("a"),c=d("div"),s=d("img"),v=p(),b=d("p"),y=h(X),x=p(),_=d("div"),S=h(Y),E=h(" Tweets"),L=d("br"),C=p(),T=h(Z),j=h(" Likes"),U=d("br"),G=p(),M=h(tt),W=h(" Replies"),D=d("br"),O=p(),A=h(et),B=h(" RTs"),N=p(),R=d("div");for(let t=0;t<ot.length;t+=1)ot[t].c();z=p(),q=d("span"),q.textContent="▶",F=p(),I=d("input"),K=p(),i(s.src,l=e[7].iconurl)||m(s,"src",l),m(s,"alt","プロフィール画像"),m(b,"class","svelte-4hc9o"),m(c,"class","profile svelte-4hc9o"),m(r,"href",$="https://twitter.com/"+e[7].username),m(r,"target","_blank"),m(r,"rel","noopener"),m(r,"class","svelte-4hc9o"),m(_,"class","snsData svelte-4hc9o"),w(q,"color","coral"),m(R,"class","graph svelte-4hc9o"),m(I,"class","pickup svelte-4hc9o"),m(I,"type","radio"),m(I,"name","pickup"),I.checked=J=e[7].username==localStorage.pickupUser,m(o,"class","card svelte-4hc9o"),w(o,"background-color",e[7].username==localStorage.pickupUser?"cornsilk":"inherit"),m(n,"class","record svelte-4hc9o"),this.first=n},m(t,e){u(t,n,e),a(n,o),a(o,r),a(r,c),a(c,s),a(c,v),a(c,b),a(b,y),a(o,x),a(o,_),a(_,S),a(_,E),a(_,L),a(_,C),a(_,T),a(_,j),a(_,U),a(_,G),a(_,M),a(_,W),a(_,D),a(_,O),a(_,A),a(_,B),a(o,N),a(o,R);for(let t=0;t<ot.length;t+=1)ot[t].m(R,null);a(R,z),a(R,q),a(o,F),a(o,I),a(n,K),Q||(V=g(I,"click",rt),Q=!0)},p(t,n){if(e=t,1&n&&!i(s.src,l=e[7].iconurl)&&m(s,"src",l),1&n&&X!==(X=e[7].screenname+"")&&k(y,X),1&n&&$!==($="https://twitter.com/"+e[7].username)&&m(r,"href",$),1&n&&Y!==(Y=e[7].tweets+"")&&k(S,Y),1&n&&Z!==(Z=e[7].likes+"")&&k(T,Z),1&n&&tt!==(tt=e[7].replies+"")&&k(M,tt),1&n&&et!==(et=e[7].retweets+"")&&k(A,et),1&n){let t;for(nt=e[7].dailytweets,t=0;t<nt.length;t+=1){const o=P(e,nt,t);ot[t]?ot[t].p(o,n):(ot[t]=H(o),ot[t].c(),ot[t].m(R,z))}for(;t<ot.length;t+=1)ot[t].d(1);ot.length=nt.length}1&n&&J!==(J=e[7].username==localStorage.pickupUser)&&(I.checked=J),1&n&&w(o,"background-color",e[7].username==localStorage.pickupUser?"cornsilk":"inherit")},d(t){t&&f(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(ot,t),Q=!1,V()}}}function F(e){let n;return{c(){n=d("div"),n.innerHTML='<div class="spinner svelte-4hc9o"></div>',m(n,"id","loading"),m(n,"class","svelte-4hc9o")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function I(e){let n,o,r,c,s,l,h,g={ctx:e,current:null,token:null,hasCatch:!0,pending:F,then:z,catch:R,value:6,error:13};return D(h=e[0],g),{c(){n=d("html"),o=d("script"),c=d("script"),c.textContent="window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n\n    gtag('config', 'G-1BWG4DW92L');",s=p(),l=d("main"),g.block.c(),document.title="Twitter発信状況一覧サイト",m(n,"lang","ja"),o.async=!0,i(o.src,r="https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L")||m(o,"src","https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L"),m(l,"class","svelte-4hc9o")},m(t,e){a(document.head,n),a(document.head,o),a(document.head,c),u(t,s,e),u(t,l,e),g.block.m(l,g.anchor=null),g.mount=()=>l,g.anchor=null},p(t,[n]){e=t,g.ctx=e,1&n&&h!==(h=e[0])&&D(h,g)||function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(g,e,n)},i:t,o:t,d(t){f(n),f(o),f(c),t&&f(s),t&&f(l),g.block.d(),g.token=null,g=null}}}function J(t){const e=localStorage.pickupUser;if(!e)return t;const n=t.findIndex((t=>t.username==e)),o=t.splice(n,1)[0];return t.unshift(o),t}function K(t,e,n){let o=async function(){const t=await fetch("https://asuka-script.deno.dev");let e={};if(!t.ok)throw new Error(t);e=await t.json();const n=e.sort(((t,e)=>e.tweets-t.tweets));for(const t of n)t.dailytweets=JSON.parse(t.dailytweets).reverse();return J(n)}();return[o,t=>{t.sort(((t,e)=>e.tweets-t.tweets)),n(0,o)},t=>{t.sort(((t,e)=>e.likes-t.likes)),n(0,o)},t=>{t.sort(((t,e)=>e.replies-t.replies)),n(0,o)},t=>{t.sort(((t,e)=>e.retweets-t.retweets)),n(0,o)},(t,e,r)=>{t.username==localStorage.pickupUser?(delete localStorage.pickupUser,n(0,o)):(localStorage.pickupUser=t.username,n(0,e=J(e)),window.scrollTo({top:0,behavior:"smooth"}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,K,I,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
