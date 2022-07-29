var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,l;function i(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function v(t){l=t}function $(){if(!l)throw new Error("Function called outside component initialization");return l}const y=[],w=[],x=[],_=[],T=Promise.resolve();let E=!1;function C(t){x.push(t)}const N=new Set;let j=0;function M(){const t=l;do{for(;j<y.length;){const t=y[j];j++,v(t),L(t.$$)}for(v(null),y.length=0,j=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];N.has(e)||(N.add(e),e())}x.length=0}while(y.length);for(;_.length;)_.pop()();E=!1,N.clear(),v(t)}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const O=new Set;let S;function A(t,e){t&&t.i&&(O.delete(t),t.i(e))}function P(t,e){const n=e.token={};function o(t,o,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;void 0!==c&&(l=l.slice(),l[c]=s);const i=t&&(e.current=t)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(S={r:0,c:[],p:S},function(t,e,n,r){if(t&&t.o){if(O.has(t))return;O.add(t),S.c.push((()=>{O.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),S.r||r(S.c),S=S.p)})):e.block.d(1),i.c(),A(i,1),i.m(e.mount(),e.anchor),u=!0),e.block=i,e.blocks&&(e.blocks[o]=i),u&&M()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=$();if(t.then((t=>{v(n),o(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),o(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var c}function R(t,e){t.d(1),e.delete(t.key)}function U(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,T.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(c,s,i,u,a,d,h,p=[-1]){const m=l;v(c);const g=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:s.target||m.$$.root};h&&h(g.root);let b=!1;if(g.ctx=i?i(c,s.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),b&&U(c,t)),e})):[],g.update(),b=!0,r(g.before_update),g.fragment=!!u&&u(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();s.intro&&A(c.$$.fragment),function(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(n,c),s||C((()=>{const n=i.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(C)}(c,s.target,s.anchor,s.customElement),M()}v(m)}function H(t,e,n){const r=t.slice();return r[6]=e[n],r}function q(t){let e,n,r=t[9].message+"";return{c(){e=d("p"),n=h(r),k(e,"color","red")},m(t,r){a(t,e,r),u(e,n)},p(t,e){1&e&&r!==(r=t[9].message+"")&&b(n,r)},d(t){t&&f(e)}}}function B(t){let e,n,o,c,s,l,i,h,b,v,$,y,w,x,_,T,E=[],C=new Map;function N(){return t[1](t[5])}function j(){return t[2](t[5])}function M(){return t[3](t[5])}function L(){return t[4](t[5])}let O=t[5];const S=t=>t[6].userName;for(let e=0;e<O.length;e+=1){let n=H(t,O,e),r=S(n);C.set(r,E[e]=D(r,n))}return{c(){e=d("div"),n=d("h1"),n.innerHTML='Twitter発信状況一覧<br/><span style="font-size:small">（過去2週間）</span>',o=p(),c=d("div"),s=d("button"),s.textContent="Tweets",l=p(),i=d("button"),i.textContent="Likes",h=p(),b=d("button"),b.textContent="Replies",v=p(),$=d("button"),$.textContent="RTs",y=p();for(let t=0;t<E.length;t+=1)E[t].c();w=p(),x=d("footer"),x.textContent="— UGOK Project since 2017 —",k(n,"text-align","center"),g(n,"class","svelte-rc1008"),g(s,"class","svelte-rc1008"),g(i,"class","svelte-rc1008"),g(b,"class","svelte-rc1008"),g($,"class","svelte-rc1008"),g(c,"class","btn svelte-rc1008"),g(e,"id","ranking"),g(x,"class","svelte-rc1008")},m(t,r){a(t,e,r),u(e,n),u(e,o),u(e,c),u(c,s),u(c,l),u(c,i),u(c,h),u(c,b),u(c,v),u(c,$),u(e,y);for(let t=0;t<E.length;t+=1)E[t].m(e,null);a(t,w,r),a(t,x,r),_||(T=[m(s,"click",N),m(i,"click",j),m(b,"click",M),m($,"click",L)],_=!0)},p(n,r){t=n,1&r&&(O=t[5],E=function(t,e,n,r,o,c,s,l,i,u,a,f){let d=t.length,h=c.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],b=new Map,k=new Map;for(p=h;p--;){const t=f(o,c,p),l=n(t);let i=s.get(l);i?r&&i.p(t,e):(i=u(l,t),i.c()),b.set(l,g[p]=i),l in m&&k.set(l,Math.abs(p-m[l]))}const v=new Set,$=new Set;function y(t){A(t,1),t.m(l,a),s.set(t.key,t),a=t.first,h--}for(;d&&h;){const e=g[h-1],n=t[d-1],r=e.key,o=n.key;e===n?(a=e.first,d--,h--):b.has(o)?!s.has(r)||v.has(r)?y(e):$.has(o)?d--:k.get(r)>k.get(o)?($.add(r),y(e)):(v.add(o),d--):(i(n,s),d--)}for(;d--;){const e=t[d];b.has(e.key)||i(e,s)}for(;h;)y(g[h-1]);return g}(E,r,S,1,t,O,C,e,R,D,null,H))},d(t){t&&f(e);for(let t=0;t<E.length;t+=1)E[t].d();t&&f(w),t&&f(x),_=!1,r(T)}}}function D(t,e){let n,r,o,c,s,l,m,k,v,$,y,w,x,_,T,E,C,N,j,M,L,O,S,A,P,R,U,z=e[6].screenName+"",H=e[6].nTweets+"",q=e[6].likes+"",B=e[6].replies+"",D=e[6].retweets+"";return{key:t,first:null,c(){n=d("div"),r=d("div"),o=d("a"),c=d("div"),s=d("img"),m=p(),k=d("p"),v=h(z),y=p(),w=d("div"),x=h(H),_=h(" Tweets"),T=d("br"),E=p(),C=h(q),N=h(" Likes"),j=d("br"),M=p(),L=h(B),O=h(" Replies"),S=d("br"),A=p(),P=h(D),R=h(" RTs"),U=p(),i(s.src,l=e[6].iconUrl)||g(s,"src",l),g(s,"alt","プロフィール画像"),g(k,"class","svelte-rc1008"),g(c,"class","profile svelte-rc1008"),g(o,"href",$="https://twitter.com/"+e[6].userName),g(o,"class","svelte-rc1008"),g(w,"class","snsData svelte-rc1008"),g(r,"class","card svelte-rc1008"),g(n,"class","record svelte-rc1008"),this.first=n},m(t,e){a(t,n,e),u(n,r),u(r,o),u(o,c),u(c,s),u(c,m),u(c,k),u(k,v),u(r,y),u(r,w),u(w,x),u(w,_),u(w,T),u(w,E),u(w,C),u(w,N),u(w,j),u(w,M),u(w,L),u(w,O),u(w,S),u(w,A),u(w,P),u(w,R),u(n,U)},p(t,n){e=t,1&n&&!i(s.src,l=e[6].iconUrl)&&g(s,"src",l),1&n&&z!==(z=e[6].screenName+"")&&b(v,z),1&n&&$!==($="https://twitter.com/"+e[6].userName)&&g(o,"href",$),1&n&&H!==(H=e[6].nTweets+"")&&b(x,H),1&n&&q!==(q=e[6].likes+"")&&b(C,q),1&n&&B!==(B=e[6].replies+"")&&b(L,B),1&n&&D!==(D=e[6].retweets+"")&&b(P,D)},d(t){t&&f(n)}}}function F(e){let n;return{c(){n=d("div"),n.innerHTML='<div class="spinner svelte-rc1008"></div>',g(n,"id","loading"),g(n,"class","svelte-rc1008")},m(t,e){a(t,n,e)},p:t,d(t){t&&f(n)}}}function G(e){let n,r,o,c,s={ctx:e,current:null,token:null,hasCatch:!0,pending:F,then:B,catch:q,value:5,error:9};return P(c=e[0],s),{c(){n=d("html"),r=p(),o=d("main"),s.block.c(),document.title="Twitter発信状況一覧サイト",g(n,"lang","ja"),g(o,"class","svelte-rc1008")},m(t,e){u(document.head,n),a(t,r,e),a(t,o,e),s.block.m(o,s.anchor=null),s.mount=()=>o,s.anchor=null},p(t,[n]){e=t,s.ctx=e,1&n&&c!==(c=e[0])&&P(c,s)||function(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}(s,e,n)},i:t,o:t,d(t){f(n),t&&f(r),t&&f(o),s.block.d(),s.token=null,s=null}}}function J(t,e,n){let r=async function(){const t=await fetch("https://asuka-script.deno.dev",{mode:"no-cors"}),e=await t.json();return console.log(JSON.parse(e)),e.sort(((t,e)=>t.nTweets>e.nTweets))}();return[r,t=>{t.sort(((t,e)=>e.nTweets-t.nTweets)),n(0,r)},t=>{t.sort(((t,e)=>e.likes-t.likes)),n(0,r)},t=>{t.sort(((t,e)=>e.replies-t.replies)),n(0,r)},t=>{t.sort(((t,e)=>e.retweets-t.retweets)),n(0,r)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),z(this,t,J,G,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
