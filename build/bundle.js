var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let p;function _(t){p=t}function v(){if(!p)throw new Error("Function called outside component initialization");return p}const w=[],k=[],b=[],y=[],x=Promise.resolve();let $=!1;function j(t){b.push(t)}let C=!1;const N=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];_(e),E(e.$$)}for(_(null),w.length=0;k.length;)k.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];N.has(e)||(N.add(e),e())}b.length=0}while(w.length);for(;y.length;)y.pop()();$=!1,C=!1,N.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const L=new Set;let O;function G(){O={r:0,c:[],p:O}}function A(){O.r||o(O.c),O=O.p}function U(t,e){t&&t.i&&(L.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),O.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function K(t,e){const n=e.token={};function o(t,o,r,i){if(e.token!==n)return;e.resolved=i;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=i);const a=t&&(e.current=t)(s);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(G(),P(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),A())})):e.block.d(1),a.c(),U(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[o]=a),c&&T()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=v();if(t.then((t=>{_(n),o(e.then,1,e.value,t),_(null)}),(t=>{if(_(n),o(e.catch,2,e.error,t),_(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function M(t,e){P(t,1,1,(()=>{e.delete(t.key)}))}function B(t,n,i){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(n,i),j((()=>{const n=a.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(j)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(w.push(t),$||($=!0,x.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,r,i,s,a,l,u=[-1]){const d=p;_(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let f=!1;if(h.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),f&&R(e,t)),n})):[],h.update(),f=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();r.intro&&U(e.$$.fragment),B(e,r.target,r.anchor),T()}_(d)}function I(){}function S(t){for(var e,n,o=1,r=arguments.length;o<r;o++)for(e in n=arguments[o])t[e]=n[e];return t}function H(t,e){e.appendChild(t)}function q(t,e,n){e.insertBefore(t,n)}function z(t){t.parentNode.removeChild(t)}function F(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function Q(t,e,n){t.setAttribute(e,n)}function V(){return Object.create(null)}function X(t){this.destroy=I,this.fire("destroy"),this.set=this.get=I,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function Y(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function Z(t,e,n,o,r){for(var i in e)if(n[i]){var s=o[i],a=r[i],c=e[i];if(c)for(var l=0;l<c.length;l+=1){var u=c[l];u.__calling||(u.__calling=!0,u.call(t,s,a),u.__calling=!1)}}}function tt(t,e){t.options=e,t._observers={pre:V(),post:V()},t._handlers=V(),t._root=e._root||t,t._yield=e._yield,t._bind=e._bind}function et(t){for(;t&&t.length;)t.pop()()}var nt={destroy:X,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(S({},t)),this._root._lock||(this._root._lock=!0,et(this._root._beforecreate),et(this._root._oncreate),et(this._root._aftercreate),this._root._lock=!1)},teardown:X,_recompute:I,_set:function(t){var e=this._state,n={},o=!1;for(var r in t)Y(t[r],e[r])&&(n[r]=o=!0);o&&(this._state=S({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),Z(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),Z(this,this._observers.post,n,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment.u()}},ot={loadAPI(){var t="twitter-wjs";if(!document.getElementById(t)){var e=document.createElement("script");e.id=t,e.type="text/javascript",e.async=!0,e.src="//platform.twitter.com/widgets.js",document.getElementsByTagName("head")[0].appendChild(e)}}};function rt(){ot.loadAPI()}function it(t){tt(this,t),this._state=S({href:"https://twitter.com/sveltejs",grid:!1,lang:void 0,showReplies:void 0,chrome:void 0,theme:void 0,width:void 0,height:void 0,tweetLimit:void 0,linkColor:void 0,borderColor:void 0,ariaPolite:void 0,dnt:void 0},t.data),this._recompute({href:1,grid:1},this._state);var e=rt.bind(this);t._root?this._root._oncreate.push(e):this._oncreate=[e],this._fragment=function(t,e){var n,o,r,i;return{c:function(){n=F("a"),o=J("Tweets from "),r=J(t.href),i=J("."),this.h()},h:function(){Q(n,"data-width",t.width),n.className=t.timelineClass,Q(n,"data-lang",t.lang),Q(n,"data-show-replies",t.showReplies),Q(n,"data-chrome",t.chrome),Q(n,"data-theme",t.theme),n.href=t.href,Q(n,"data-height",t.height),Q(n,"data-tweet-limit",t.tweetLimit),Q(n,"data-link-color",t.linkColor),Q(n,"data-border-color",t.borderColor),Q(n,"data-aria-polite",t.ariaPolite),Q(n,"data-dnt",t.dnt)},m:function(t,e){q(n,t,e),H(o,n),H(r,n),H(i,n)},p:function(t,e){t.width&&Q(n,"data-width",e.width),t.timelineClass&&(n.className=e.timelineClass),t.lang&&Q(n,"data-lang",e.lang),t.showReplies&&Q(n,"data-show-replies",e.showReplies),t.chrome&&Q(n,"data-chrome",e.chrome),t.theme&&Q(n,"data-theme",e.theme),t.href&&(n.href=e.href),t.height&&Q(n,"data-height",e.height),t.tweetLimit&&Q(n,"data-tweet-limit",e.tweetLimit),t.linkColor&&Q(n,"data-link-color",e.linkColor),t.borderColor&&Q(n,"data-border-color",e.borderColor),t.ariaPolite&&Q(n,"data-aria-polite",e.ariaPolite),t.dnt&&Q(n,"data-dnt",e.dnt),t.href&&(r.data=e.href)},u:function(){z(n)},d:I}}(this._state),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),et(this._oncreate))}function st(){ot.loadAPI()}function at(t){tt(this,t),this._state=S({href:"https://twitter.com/sveltejs/status/802710541366128640",cards:void 0,conversation:void 0,theme:void 0,linkColor:void 0,width:void 0,align:void 0,lang:void 0,dnt:void 0},t.data);var e=st.bind(this);t._root?this._root._oncreate.push(e):this._oncreate=[e],this._fragment=function(t,e){var n,o,r,i,s;return{c:function(){n=F("blockquote"),o=F("a"),r=J("Tweet from "),i=J(t.href),s=J("."),this.h()},h:function(){n.className="twitter-tweet",Q(n,"data-cards",t.cards),Q(n,"data-conversation",t.conversation),Q(n,"data-theme",t.theme),Q(n,"data-link-color",t.linkColor),Q(n,"data-width",t.width),Q(n,"data-align",t.align),Q(n,"data-lang",t.lang),Q(n,"data-dnt",t.dnt),o.href=t.href},m:function(t,e){q(n,t,e),H(o,n),H(r,o),H(i,o),H(s,o)},p:function(t,e){t.cards&&Q(n,"data-cards",e.cards),t.conversation&&Q(n,"data-conversation",e.conversation),t.theme&&Q(n,"data-theme",e.theme),t.linkColor&&Q(n,"data-link-color",e.linkColor),t.width&&Q(n,"data-width",e.width),t.align&&Q(n,"data-align",e.align),t.lang&&Q(n,"data-lang",e.lang),t.dnt&&Q(n,"data-dnt",e.dnt),t.href&&(o.href=e.href,i.data=e.href)},u:function(){z(n)},d:I}}(this._state),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),et(this._oncreate))}S(it.prototype,nt),it.prototype._recompute=function(t,e){var n,o;(t.href||t.grid)&&Y(e.timelineClass,e.timelineClass=(n=e.href,o=e.grid,n.indexOf("/timelines/")>-1&&o?"twitter-grid":"twitter-timeline"))&&(t.timelineClass=!0)},S(at.prototype,nt);var ct=at;function lt(t,e,n){const o=t.slice();return o[8]=e[n],o}function ut(e){let n,o,r=e[11].message+"";return{c(){n=l("p"),o=u(r),g(n,"color","red")},m(t,e){a(t,n,e),s(n,o)},p(t,e){1&e&&r!==(r=t[11].message+"")&&m(o,r)},i:t,o:t,d(t){t&&c(n)}}}function dt(t){let e,n,r,i,u,m,p,_,v,w,k,b,y,x,$,j,C,N=[],T=new Map;function E(){return t[1](t[7])}function L(){return t[2](t[7])}function O(){return t[3](t[7])}function K(){return t[4](t[7])}let B=t[7];const D=t=>t[8].userName;for(let e=0;e<B.length;e+=1){let n=lt(t,B,e),o=D(n);T.set(o,N[e]=ht(o,n))}return{c(){e=l("div"),n=l("h1"),n.innerHTML='UGOK Twitter発信状況一覧<br/><span style="font-size:small">（第1ステージ 10/4～10/24）</span>',r=d(),i=l("div"),u=l("button"),u.textContent="ツイート数",m=d(),p=l("button"),p.textContent="いいね数",_=d(),v=l("button"),v.textContent="コメント数",w=d(),k=l("button"),k.textContent="RT数",b=d();for(let t=0;t<N.length;t+=1)N[t].c();y=d(),x=l("footer"),x.textContent="— UGOK Project since 2017 —",g(n,"text-align","center"),f(n,"class","svelte-jx3me1"),f(u,"class","svelte-jx3me1"),f(p,"class","svelte-jx3me1"),f(v,"class","svelte-jx3me1"),f(k,"class","svelte-jx3me1"),f(i,"class","btn svelte-jx3me1"),f(e,"id","ranking"),f(x,"class","svelte-jx3me1")},m(t,o){a(t,e,o),s(e,n),s(e,r),s(e,i),s(i,u),s(i,m),s(i,p),s(i,_),s(i,v),s(i,w),s(i,k),s(e,b);for(let t=0;t<N.length;t+=1)N[t].m(e,null);a(t,y,o),a(t,x,o),$=!0,j||(C=[h(u,"click",E),h(p,"click",L),h(v,"click",O),h(k,"click",K)],j=!0)},p(n,o){t=n,1&o&&(B=t[7],G(),N=function(t,e,n,o,r,i,s,a,c,l,u,d){let h=t.length,f=i.length,m=h;const g={};for(;m--;)g[t[m].key]=m;const p=[],_=new Map,v=new Map;for(m=f;m--;){const t=d(r,i,m),a=n(t);let c=s.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),_.set(a,p[m]=c),a in g&&v.set(a,Math.abs(m-g[a]))}const w=new Set,k=new Set;function b(t){U(t,1),t.m(a,u),s.set(t.key,t),u=t.first,f--}for(;h&&f;){const e=p[f-1],n=t[h-1],o=e.key,r=n.key;e===n?(u=e.first,h--,f--):_.has(r)?!s.has(o)||w.has(o)?b(e):k.has(r)?h--:v.get(o)>v.get(r)?(k.add(o),b(e)):(w.add(r),h--):(c(n,s),h--)}for(;h--;){const e=t[h];_.has(e.key)||c(e,s)}for(;f;)b(p[f-1]);return p}(N,o,D,1,t,B,T,e,M,ht,null,lt),A())},i(t){if(!$){for(let t=0;t<B.length;t+=1)U(N[t]);$=!0}},o(t){for(let t=0;t<N.length;t+=1)P(N[t]);$=!1},d(t){t&&c(e);for(let t=0;t<N.length;t+=1)N[t].d();t&&c(y),t&&c(x),j=!1,o(C)}}}function ht(t,e){let n,o,r,i,h,g,p,_,v,w,k,b,y,x,$,j,C,N,T,E,L,O,G,A,K,M,R,W,I,S,H,q,z=e[8].screenName+"",F=e[8].nTweets+"",J=e[8].likes+"",Q=e[8].replies+"",V=e[8].retweets+"";return S=new ct({props:{href:"https://twitter.com/"+e[8].userName+"?ref_src=twsrc%5Etfw"}}),{key:t,first:null,c(){var t;n=l("div"),o=l("div"),r=l("div"),i=l("img"),g=d(),p=l("p"),_=u(z),v=d(),w=l("div"),k=l("div"),b=u(" "),y=u(F),x=u(" ツイート"),$=l("br"),j=u("\n                 "),C=u(J),N=u(" いいね"),T=l("br"),E=u("\n                 "),L=u(Q),O=u(" コメント"),G=l("br"),A=u("\n                 "),K=u(V),M=u(" RT"),R=l("br"),W=d(),I=l("div"),(t=S.$$.fragment)&&t.c(),H=d(),i.src!==(h=e[8].iconUrl)&&f(i,"src",h),f(i,"alt","プロフィール画像"),f(p,"class","svelte-jx3me1"),f(r,"class","profile svelte-jx3me1"),f(k,"class","twData svelte-jx3me1"),f(w,"class","snsData svelte-jx3me1"),f(o,"class","card svelte-jx3me1"),f(I,"class","tweet svelte-jx3me1"),f(n,"class","record svelte-jx3me1"),this.first=n},m(t,e){a(t,n,e),s(n,o),s(o,r),s(r,i),s(r,g),s(r,p),s(p,_),s(o,v),s(o,w),s(w,k),s(k,b),s(k,y),s(k,x),s(k,$),s(k,j),s(k,C),s(k,N),s(k,T),s(k,E),s(k,L),s(k,O),s(k,G),s(k,A),s(k,K),s(k,M),s(k,R),s(n,W),s(n,I),B(S,I,null),s(n,H),q=!0},p(t,n){e=t,(!q||1&n&&i.src!==(h=e[8].iconUrl))&&f(i,"src",h),(!q||1&n)&&z!==(z=e[8].screenName+"")&&m(_,z),(!q||1&n)&&F!==(F=e[8].nTweets+"")&&m(y,F),(!q||1&n)&&J!==(J=e[8].likes+"")&&m(C,J),(!q||1&n)&&Q!==(Q=e[8].replies+"")&&m(L,Q),(!q||1&n)&&V!==(V=e[8].retweets+"")&&m(K,V);const o={};1&n&&(o.href="https://twitter.com/"+e[8].userName+"?ref_src=twsrc%5Etfw"),S.$set(o)},i(t){q||(U(S.$$.fragment,t),q=!0)},o(t){P(S.$$.fragment,t),q=!1},d(t){t&&c(n),D(S)}}}function ft(e){let n;return{c(){n=l("div"),n.innerHTML='<div class="spinner svelte-jx3me1"></div>',f(n,"id","loading"),f(n,"class","svelte-jx3me1")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}function mt(t){let e,n,o,r,i,u,h,m,g={ctx:t,current:null,token:null,hasCatch:!0,pending:ft,then:dt,catch:ut,value:7,error:11,blocks:[,,,]};return K(h=t[0],g),{c(){e=l("html"),n=l("script"),r=l("script"),r.textContent="window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag('js', new Date());\n\n    gtag('config', 'G-1BWG4DW92L');",i=d(),u=l("main"),g.block.c(),document.title="UGOK Twitter発信状況一覧サイト",f(e,"lang","ja"),n.async=!0,n.src!==(o="https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L")&&f(n,"src","https://www.googletagmanager.com/gtag/js?id=G-1BWG4DW92L"),f(u,"class","svelte-jx3me1")},m(t,o){s(document.head,e),s(document.head,n),s(document.head,r),a(t,i,o),a(t,u,o),g.block.m(u,g.anchor=null),g.mount=()=>u,g.anchor=null,m=!0},p(e,[n]){if(t=e,g.ctx=t,1&n&&h!==(h=t[0])&&K(h,g));else{const e=t.slice();e[7]=e[11]=g.resolved,g.block.p(e,n)}},i(t){m||(U(g.block),m=!0)},o(t){for(let t=0;t<3;t+=1){P(g.blocks[t])}m=!1},d(t){c(e),c(n),c(r),t&&c(i),t&&c(u),g.block.d(),g.token=null,g=null}}}function gt(t,e,n){const o=["UGOK_5563","usagi_UGOK","AyA3156_ugok","kumi_UGOK","ms_UGOK","yuria_ugok","misk_ugok","mami_ugok","0024_ugok","haru_ugok","natsu_ugok","sakumwu","HMDKN_5A"];let r=async function(){const t=[],e=/^RT\s.+:/;for(const n of o){const o="https://ugok-twitter-status.deno.dev/?member="+n,r=await fetch(o,{mode:"cors"});if(!r.ok)throw new Error(r);{const n=await r.json();if("success"!==n.status)throw new Error(n);{const o=n.record;let r=0,i=0,s=0,a=0;for(const t of o.tweets){if(t.text.match(e))continue;r+=1;const n=t.public_metrics;i+=n.like_count,s+=n.retweet_count,a+=n.reply_count,t.in_reply_to_user_id&&t.in_reply_to_user_id===t.author_id&&(a-=1)}t.push({userName:o.userName,screenName:o.screenName,iconUrl:o.iconUrl,nTweets:r,likes:i,retweets:s,replies:a})}}}return t.sort(((t,e)=>t.screenName.localeCompare(e.screenName)),"ja")}();return[r,t=>{t.sort(((t,e)=>e.nTweets-t.nTweets)),n(0,r)},t=>{t.sort(((t,e)=>e.likes-t.likes)),n(0,r)},t=>{t.sort(((t,e)=>e.replies-t.replies)),n(0,r)},t=>{t.sort(((t,e)=>e.retweets-t.retweets)),n(0,r)}]}return new class extends class{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),W(this,t,gt,mt,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
