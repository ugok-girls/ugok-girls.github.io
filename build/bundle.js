var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let g;function v(t){g=t}function k(){if(!g)throw new Error("Function called outside component initialization");return g}const w=[],b=[],_=[],y=[],$=Promise.resolve();let x=!1;function T(t){_.push(t)}let N=!1;const L=new Set;function j(){if(!N){N=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),C(e.$$)}for(v(null),w.length=0;b.length;)b.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];L.has(e)||(L.add(e),e())}_.length=0}while(w.length);for(;y.length;)y.pop()();x=!1,N=!1,L.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const E=new Set;let G;function U(t,e){t&&t.i&&(E.delete(t),t.i(e))}function M(t,e){const n=e.token={};function c(t,c,r,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;void 0!==r&&(i=i.slice(),i[r]=s);const l=t&&(e.current=t)(i);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==c&&t&&(G={r:0,c:[],p:G},function(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),G.c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),G.r||o(G.c),G=G.p)})):e.block.d(1),l.c(),U(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[c]=l),u&&j()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=k();if(t.then((t=>{v(n),c(e.then,1,e.value,t),v(null)}),(t=>{if(v(n),c(e.catch,2,e.error,t),v(null),!e.hasCatch)throw t})),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}var r}function O(t,e){t.d(1),e.delete(t.key)}function A(t,e){-1===t.$$.dirty[0]&&(w.push(t),x||(x=!0,$.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(r,s,i,u,a,f,p=[-1]){const d=g;v(r);const h=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:p,skip_bound:!1};let m=!1;if(h.ctx=i?i(r,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&A(r,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();s.intro&&U(r.$$.fragment),function(t,n,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,r),T((()=>{const n=i.map(e).filter(c);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(T)}(r,s.target,s.anchor),j()}v(d)}function K(t,e,n){const o=t.slice();return o[8]=e[n],o}function W(t){let e,n,o=t[11].message+"";return{c(){e=u("p"),n=a(o),m(e,"color","red")},m(t,o){i(t,e,o),s(e,n)},p(t,e){1&e&&o!==(o=t[11].message+"")&&h(n,o)},d(t){t&&l(e)}}}function R(t){let e,n,c,r,a,h,g,v,k,w,b,_,y,$,x,T,N=[],L=new Map;function j(){return t[1](t[7])}function C(){return t[2](t[7])}function E(){return t[3](t[7])}function G(){return t[4](t[7])}let M=t[7];const A=t=>t[8].userName;for(let e=0;e<M.length;e+=1){let n=K(t,M,e),o=A(n);L.set(o,N[e]=B(o,n))}return{c(){e=u("div"),n=u("h1"),n.innerHTML='Twitter発信状況一覧<br/><span style="font-size:small">（第1ステージ 10/4～10/24）</span>',c=f(),r=u("div"),a=u("button"),a.textContent="Tweets",h=f(),g=u("button"),g.textContent="Likes",v=f(),k=u("button"),k.textContent="Replies",w=f(),b=u("button"),b.textContent="RTs",_=f();for(let t=0;t<N.length;t+=1)N[t].c();y=f(),$=u("footer"),$.textContent="— UGOK Project since 2017 —",m(n,"text-align","center"),d(n,"class","svelte-vpccip"),d(a,"class","svelte-vpccip"),d(g,"class","svelte-vpccip"),d(k,"class","svelte-vpccip"),d(b,"class","svelte-vpccip"),d(r,"class","btn svelte-vpccip"),d(e,"id","ranking"),d($,"class","svelte-vpccip")},m(t,o){i(t,e,o),s(e,n),s(e,c),s(e,r),s(r,a),s(r,h),s(r,g),s(r,v),s(r,k),s(r,w),s(r,b),s(e,_);for(let t=0;t<N.length;t+=1)N[t].m(e,null);i(t,y,o),i(t,$,o),x||(T=[p(a,"click",j),p(g,"click",C),p(k,"click",E),p(b,"click",G)],x=!0)},p(n,o){t=n,1&o&&(M=t[7],N=function(t,e,n,o,c,r,s,i,l,u,a,f){let p=t.length,d=r.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],v=new Map,k=new Map;for(h=d;h--;){const t=f(c,r,h),i=n(t);let l=s.get(i);l?o&&l.p(t,e):(l=u(i,t),l.c()),v.set(i,g[h]=l),i in m&&k.set(i,Math.abs(h-m[i]))}const w=new Set,b=new Set;function _(t){U(t,1),t.m(i,a),s.set(t.key,t),a=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],o=e.key,c=n.key;e===n?(a=e.first,p--,d--):v.has(c)?!s.has(o)||w.has(o)?_(e):b.has(c)?p--:k.get(o)>k.get(c)?(b.add(o),_(e)):(w.add(c),p--):(l(n,s),p--)}for(;p--;){const e=t[p];v.has(e.key)||l(e,s)}for(;d;)_(g[d-1]);return g}(N,o,A,1,t,M,L,e,O,B,null,K))},d(t){t&&l(e);for(let t=0;t<N.length;t+=1)N[t].d();t&&l(y),t&&l($),x=!1,o(T)}}}function B(t,e){let n,o,c,r,p,m,g,v,k,w,b,_,y,$,x,T,N,L,j,C,E,G,U,M,O,A,D,K=e[8].screenName+"",W=e[8].nTweets+"",R=e[8].likes+"",B=e[8].replies+"",S=e[8].retweets+"";return{key:t,first:null,c(){n=u("div"),o=u("div"),c=u("a"),r=u("div"),p=u("img"),g=f(),v=u("p"),k=a(K),b=f(),_=u("div"),y=a(W),$=a(" Tweets"),x=u("br"),T=f(),N=a(R),L=a(" Likes"),j=u("br"),C=f(),E=a(B),G=a(" Replies"),U=u("br"),M=f(),O=a(S),A=a(" RTs"),D=f(),p.src!==(m=e[8].iconUrl)&&d(p,"src",m),d(p,"alt","プロフィール画像"),d(v,"class","svelte-vpccip"),d(r,"class","profile svelte-vpccip"),d(c,"href",w="https://twitter.com/"+e[8].userName),d(c,"class","svelte-vpccip"),d(_,"class","snsData svelte-vpccip"),d(o,"class","card svelte-vpccip"),d(n,"class","record svelte-vpccip"),this.first=n},m(t,e){i(t,n,e),s(n,o),s(o,c),s(c,r),s(r,p),s(r,g),s(r,v),s(v,k),s(o,b),s(o,_),s(_,y),s(_,$),s(_,x),s(_,T),s(_,N),s(_,L),s(_,j),s(_,C),s(_,E),s(_,G),s(_,U),s(_,M),s(_,O),s(_,A),s(n,D)},p(t,n){e=t,1&n&&p.src!==(m=e[8].iconUrl)&&d(p,"src",m),1&n&&K!==(K=e[8].screenName+"")&&h(k,K),1&n&&w!==(w="https://twitter.com/"+e[8].userName)&&d(c,"href",w),1&n&&W!==(W=e[8].nTweets+"")&&h(y,W),1&n&&R!==(R=e[8].likes+"")&&h(N,R),1&n&&B!==(B=e[8].replies+"")&&h(E,B),1&n&&S!==(S=e[8].retweets+"")&&h(O,S)},d(t){t&&l(n)}}}function S(e){let n;return{c(){n=u("div"),n.innerHTML='<div class="spinner svelte-vpccip"></div>',d(n,"id","loading"),d(n,"class","svelte-vpccip")},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function H(e){let n,o,c,r,a,p,h,m={ctx:e,current:null,token:null,hasCatch:!0,pending:S,then:R,catch:W,value:7,error:11};return M(h=e[0],m),{c(){n=u("html"),o=u("script"),r=u("script"),r.textContent="window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n\n    gtag('config', 'G-1BWG4DW92L');",a=f(),p=u("main"),m.block.c(),document.title="Twitter発信状況一覧サイト",d(n,"lang","ja"),o.async=!0,o.src!==(c="https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L")&&d(o,"src","https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L"),d(p,"class","svelte-vpccip")},m(t,e){s(document.head,n),s(document.head,o),s(document.head,r),i(t,a,e),i(t,p,e),m.block.m(p,m.anchor=null),m.mount=()=>p,m.anchor=null},p(t,[n]){if(e=t,m.ctx=e,1&n&&h!==(h=e[0])&&M(h,m));else{const t=e.slice();t[7]=t[11]=m.resolved,m.block.p(t,n)}},i:t,o:t,d(t){l(n),l(o),l(r),t&&l(a),t&&l(p),m.block.d(),m.token=null,m=null}}}function P(t,e,n){const o=["UGOK_5563","usagi_UGOK","AyA3156_ugok","kumi_UGOK","ms_UGOK","yuria_ugok","misk_ugok","mami_ugok","0024_ugok","haru_ugok","natsu_ugok","sakumwu","HMDKN_5A"];let c=async function(){const t=[],e=/^RT\s.+:/;for(const n of o){const o="https://ugok-twitter-status.deno.dev/?member="+n,c=await fetch(o,{mode:"cors"});if(!c.ok)throw new Error(c);{const n=await c.json();if("success"!==n.status)throw new Error(n);{const o=n.record;let c=0,r=0,s=0,i=0;for(const t of o.tweets){if(t.text.match(e))continue;c+=1;const n=t.public_metrics;r+=n.like_count,s+=n.retweet_count,i+=n.reply_count,t.in_reply_to_user_id&&t.in_reply_to_user_id===t.author_id&&(i-=1)}t.push({userName:o.userName,screenName:o.screenName,iconUrl:o.iconUrl,nTweets:c,likes:r,retweets:s,replies:i})}}}return t.sort(((t,e)=>t.screenName.localeCompare(e.screenName)),"ja")}();return[c,t=>{t.sort(((t,e)=>e.nTweets-t.nTweets)),n(0,c)},t=>{t.sort(((t,e)=>e.likes-t.likes)),n(0,c)},t=>{t.sort(((t,e)=>e.replies-t.replies)),n(0,c)},t=>{t.sort(((t,e)=>e.retweets-t.retweets)),n(0,c)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),D(this,t,P,H,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
