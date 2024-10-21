var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function f(){return d("")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}function v(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function y(t,e,n){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function $(t){const e=t.querySelector(":checked");return e&&e.__value}function j(t,e,n){t.classList[n?"add":"remove"](e)}let b;function x(t){b=t}function P(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const w=[],I=[];let q=[];const N=[],D=Promise.resolve();let E=!1;function M(t){q.push(t)}const A=new Set;let S=0;function L(){if(0!==S)return;const t=b;do{try{for(;S<w.length;){const t=w[S];S++,x(t),H(t.$$)}}catch(t){throw w.length=0,S=0,t}for(x(null),w.length=0,S=0;I.length;)I.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];A.has(e)||(A.add(e),e())}q.length=0}while(w.length);for(;N.length;)N.pop()();E=!1,A.clear(),x(t)}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const O=new Set;function C(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];q.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),q=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(w.push(t),E||(E=!0,D.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(r,l,i,a,u,d,p,f=[-1]){const h=b;x(r);const m=r.$$={fragment:null,ctx:[],props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:l.target||h.$$.root};p&&p(m.root);let g=!1;if(m.ctx=i?i(r,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&K(r,t)),e})):[],m.update(),g=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(s)}else m.fragment&&m.fragment.c();l.intro&&((k=r.$$.fragment)&&k.i&&(O.delete(k),k.i(_))),function(t,n,r,l){const{fragment:i,after_update:s}=t.$$;i&&i.m(n,r),l||M((()=>{const n=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(M)}(r,l.target,l.anchor,l.customElement),L()}var k,_;x(h)}class z{$destroy(){C(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(t,e,n){const o=t.slice();return o[44]=e[n],o}function F(t,e,n){const o=t.slice();return o[47]=e[n],o}function G(t,e,n){const o=t.slice();return o[50]=e[n],o}function J(t,e,n){const o=t.slice();return o[53]=e[n],o}function Q(t,e,n){const o=t.slice();return o[50]=e[n],o[56]=e,o[57]=n,o}function R(t,e,n){const o=t.slice();return o[53]=e[n],o[58]=e,o[59]=n,o}function U(t,e,n){const o=t.slice();return o[60]=e[n],o[62]=n,o}function V(t,e,n){const o=t.slice();return o[44]=e[n],o}function W(t,e,n){const o=t.slice();return o[44]=e[n],o}function X(t,e,n){const o=t.slice();return o[47]=e[n],o}function Y(t,e,n){const o=t.slice();return o[50]=e[n],o}function Z(t,e,n){const o=t.slice();return o[60]=e[n],o[62]=n,o}function tt(t){let e,n,c,r,f,v,y,$,j,b,x,P,w,I,q,N,D,E,M,A,S,L,H,O,C,K,T=t[1].createProject+"",z=t[1].addProject+"",B=t[1].existingProjects+"",F=t[6],G=[];for(let e=0;e<F.length;e+=1)G[e]=ct(W(t,F,e));return{c(){e=u("button"),e.textContent="sampleProjectAndThePacks",n=p(),c=u("h2"),r=d(T),f=p(),v=u("input"),$=p(),j=u("textarea"),x=p(),P=u("input"),I=p(),q=u("input"),D=p(),E=u("button"),M=d(z),A=p(),S=u("h2"),L=d(B),H=p(),O=u("div");for(let t=0;t<G.length;t+=1)G[t].c();m(v,"type","text"),m(v,"placeholder",y=t[1].projectName),m(j,"placeholder",b=t[1].projectDescription),m(P,"type","number"),m(P,"placeholder",w=t[1].projectKPI),m(q,"type","number"),m(q,"placeholder",N=t[1].projectDueDate),m(q,"min","1"),m(O,"class","project-list")},m(o,s){i(o,e,s),i(o,n,s),i(o,c,s),l(c,r),i(o,f,s),i(o,v,s),_(v,t[2].name),i(o,$,s),i(o,j,s),_(j,t[2].description),i(o,x,s),i(o,P,s),_(P,t[2].kpi),i(o,I,s),i(o,q,s),_(q,t[2].due_date),i(o,D,s),i(o,E,s),l(E,M),i(o,A,s),i(o,S,s),l(S,L),i(o,H,s),i(o,O,s);for(let t=0;t<G.length;t+=1)G[t]&&G[t].m(O,null);C||(K=[h(e,"click",t[7]),h(v,"input",t[21]),h(j,"input",t[22]),h(P,"input",t[23]),h(q,"input",t[24]),h(E,"click",t[14])],C=!0)},p(t,e){if(2&e[0]&&T!==(T=t[1].createProject+"")&&k(r,T),2&e[0]&&y!==(y=t[1].projectName)&&m(v,"placeholder",y),4&e[0]&&v.value!==t[2].name&&_(v,t[2].name),2&e[0]&&b!==(b=t[1].projectDescription)&&m(j,"placeholder",b),4&e[0]&&_(j,t[2].description),2&e[0]&&w!==(w=t[1].projectKPI)&&m(P,"placeholder",w),4&e[0]&&g(P.value)!==t[2].kpi&&_(P,t[2].kpi),2&e[0]&&N!==(N=t[1].projectDueDate)&&m(q,"placeholder",N),4&e[0]&&g(q.value)!==t[2].due_date&&_(q,t[2].due_date),2&e[0]&&z!==(z=t[1].addProject+"")&&k(M,z),2&e[0]&&B!==(B=t[1].existingProjects+"")&&k(L,B),39490&e[0]){let n;for(F=t[6],n=0;n<F.length;n+=1){const o=W(t,F,n);G[n]?G[n].p(o,e):(G[n]=ct(o),G[n].c(),G[n].m(O,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=F.length}},d(t){t&&s(e),t&&s(n),t&&s(c),t&&s(f),t&&s(v),t&&s($),t&&s(j),t&&s(x),t&&s(P),t&&s(I),t&&s(q),t&&s(D),t&&s(E),t&&s(A),t&&s(S),t&&s(H),t&&s(O),a(G,t),C=!1,o(K)}}}function et(t){let e,n,o,c,r=t[9](t[44])>=10*t[62]?"●":"○";return{c(){e=u("span"),n=d(r),o=p(),m(e,"class",c=t[9](t[44])>=10*t[62]?"filled":"")},m(t,c){i(t,e,c),l(e,n),l(e,o)},p(t,o){64&o[0]&&r!==(r=t[9](t[44])>=10*t[62]?"●":"○")&&k(n,r),64&o[0]&&c!==(c=t[9](t[44])>=10*t[62]?"filled":"")&&m(e,"class",c)},d(t){t&&s(e)}}}function nt(t){let e,n,o,c,r=t[1][t[50]]+"",a=t[47][`${t[50]}_description`]+"";return{c(){e=u("span"),n=d(r),o=d(": "),c=d(a),m(e,"class","svelte-1qe4kqh"),j(e,"done",t[47][`${t[50]}_done`])},m(t,r){i(t,e,r),l(e,n),l(e,o),l(e,c)},p(t,o){2&o[0]&&r!==(r=t[1][t[50]]+"")&&k(n,r),64&o[0]&&a!==(a=t[47][`${t[50]}_description`]+"")&&k(c,a),64&o[0]&&j(e,"done",t[47][`${t[50]}_done`])},d(t){t&&s(e)}}}function ot(t){let e,n,o,c,r,f,g,_=t[1].viewPacks+"",v=["plan","do","check","act"],y=[];for(let e=0;e<4;e+=1)y[e]=nt(Y(t,v,e));function $(){return t[25](t[47])}return{c(){e=u("div");for(let t=0;t<4;t+=1)y[t].c();n=p(),o=u("button"),c=d(_),r=p(),m(e,"class","pack-summary")},m(t,s){i(t,e,s);for(let t=0;t<4;t+=1)y[t]&&y[t].m(e,null);l(e,n),l(e,o),l(o,c),l(e,r),f||(g=h(o,"click",$),f=!0)},p(o,r){if(t=o,66&r[0]){let o;for(v=["plan","do","check","act"],o=0;o<4;o+=1){const c=Y(t,v,o);y[o]?y[o].p(c,r):(y[o]=nt(c),y[o].c(),y[o].m(e,n))}for(;o<4;o+=1)y[o].d(1)}2&r[0]&&_!==(_=t[1].viewPacks+"")&&k(c,_)},d(t){t&&s(e),a(y,t),f=!1,g()}}}function ct(t){let e,n,o,c,r,f,g,_,y,$,j,b,x,P,w,I,q,N,D,E,M,A,S,L,H,O,C,K,T,z,B,F,G,J,Q=t[44].name+"",R=t[44].description+"",U=t[44].kpi+"",V="★".repeat(t[44].difficulty)+"",W=t[12](t[44].due_date)+"",Y=t[9](t[44])+"",tt=t[1].packsSummary+"",nt=t[1].delete+"",ct=Array(10),rt=[];for(let e=0;e<ct.length;e+=1)rt[e]=et(Z(t,ct,e));let lt=t[44].packs,it=[];for(let e=0;e<lt.length;e+=1)it[e]=ot(X(t,lt,e));function st(){return t[26](t[44])}return{c(){e=u("div"),n=u("h3"),o=d(Q),c=p(),r=u("p"),f=d(R),g=p(),_=u("p"),y=d("KPI: "),$=d(U),j=p(),b=u("p"),x=d("Difficulty: "),P=u("span"),w=d(V),I=p(),q=u("p"),N=d("Due Date: "),D=d(W),E=p(),M=u("div"),A=d(Y),S=d("%\n                    ");for(let t=0;t<rt.length;t+=1)rt[t].c();L=p(),H=u("div"),O=u("h4"),C=d(tt),K=p();for(let t=0;t<it.length;t+=1)it[t].c();T=p(),z=u("button"),B=d(nt),F=p(),m(P,"class","stars svelte-1qe4kqh"),m(M,"class","progress-bar svelte-1qe4kqh"),v(M,"width",t[9](t[44])+"%"),m(H,"class","project-summary"),m(z,"class","delete"),m(e,"class","project")},m(t,s){i(t,e,s),l(e,n),l(n,o),l(e,c),l(e,r),l(r,f),l(e,g),l(e,_),l(_,y),l(_,$),l(e,j),l(e,b),l(b,x),l(b,P),l(P,w),l(e,I),l(e,q),l(q,N),l(q,D),l(e,E),l(e,M),l(M,A),l(M,S);for(let t=0;t<rt.length;t+=1)rt[t]&&rt[t].m(M,null);l(e,L),l(e,H),l(H,O),l(O,C),l(H,K);for(let t=0;t<it.length;t+=1)it[t]&&it[t].m(H,null);l(e,T),l(e,z),l(z,B),l(e,F),G||(J=h(z,"click",st),G=!0)},p(e,n){if(t=e,64&n[0]&&Q!==(Q=t[44].name+"")&&k(o,Q),64&n[0]&&R!==(R=t[44].description+"")&&k(f,R),64&n[0]&&U!==(U=t[44].kpi+"")&&k($,U),64&n[0]&&V!==(V="★".repeat(t[44].difficulty)+"")&&k(w,V),64&n[0]&&W!==(W=t[12](t[44].due_date)+"")&&k(D,W),64&n[0]&&Y!==(Y=t[9](t[44])+"")&&k(A,Y),576&n[0]){let e;for(ct=Array(10),e=0;e<ct.length;e+=1){const o=Z(t,ct,e);rt[e]?rt[e].p(o,n):(rt[e]=et(o),rt[e].c(),rt[e].m(M,null))}for(;e<rt.length;e+=1)rt[e].d(1);rt.length=ct.length}if(64&n[0]&&v(M,"width",t[9](t[44])+"%"),2&n[0]&&tt!==(tt=t[1].packsSummary+"")&&k(C,tt),2114&n[0]){let e;for(lt=t[44].packs,e=0;e<lt.length;e+=1){const o=X(t,lt,e);it[e]?it[e].p(o,n):(it[e]=ot(o),it[e].c(),it[e].m(H,null))}for(;e<it.length;e+=1)it[e].d(1);it.length=lt.length}2&n[0]&&nt!==(nt=t[1].delete+"")&&k(B,nt)},d(t){t&&s(e),a(rt,t),a(it,t),G=!1,J()}}}function rt(t){let e,n,c,r,f,g,v,$,j,b,x,P,w,I,q,N,D,E,A=t[1].createPack+"",S=t[1].addPack+"",L=t[1].existingPacks+"",H=t[4],O=[];for(let e=0;e<H.length;e+=1)O[e]=lt(V(t,H,e));let C=["plan","do","check","act"],K=[];for(let e=0;e<4;e+=1)K[e]=at(Q(t,C,e));let T=t[5],z=[];for(let e=0;e<T.length;e+=1)z[e]=ft(F(t,T,e));return{c(){e=u("h2"),n=d(A),c=p(),r=u("select");for(let t=0;t<O.length;t+=1)O[t].c();f=p();for(let t=0;t<4;t+=1)K[t].c();g=p(),v=u("input"),j=p(),b=u("button"),x=d(S),P=p(),w=u("h2"),I=d(L),q=p(),N=u("div");for(let t=0;t<z.length;t+=1)z[t].c();void 0===t[3].projectId&&M((()=>t[27].call(r))),m(v,"type","datetime-local"),m(v,"placeholder",$=t[1].due_date),m(N,"class","pack-list")},m(o,s){i(o,e,s),l(e,n),i(o,c,s),i(o,r,s);for(let t=0;t<O.length;t+=1)O[t]&&O[t].m(r,null);y(r,t[3].projectId,!0),i(o,f,s);for(let t=0;t<4;t+=1)K[t]&&K[t].m(o,s);i(o,g,s),i(o,v,s),_(v,t[3].due_date),i(o,j,s),i(o,b,s),l(b,x),i(o,P,s),i(o,w,s),l(w,I),i(o,q,s),i(o,N,s);for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(N,null);D||(E=[h(r,"change",t[27]),h(v,"input",t[34]),h(b,"click",t[16])],D=!0)},p(t,e){if(2&e[0]&&A!==(A=t[1].createPack+"")&&k(n,A),16&e[0]){let n;for(H=t[4],n=0;n<H.length;n+=1){const o=V(t,H,n);O[n]?O[n].p(o,e):(O[n]=lt(o),O[n].c(),O[n].m(r,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=H.length}if(24&e[0]&&y(r,t[3].projectId),10&e[0]){let n;for(C=["plan","do","check","act"],n=0;n<4;n+=1){const o=Q(t,C,n);K[n]?K[n].p(o,e):(K[n]=at(o),K[n].c(),K[n].m(g.parentNode,g))}for(;n<4;n+=1)K[n].d(1)}if(2&e[0]&&$!==($=t[1].due_date)&&m(v,"placeholder",$),24&e[0]&&_(v,t[3].due_date),2&e[0]&&S!==(S=t[1].addPack+"")&&k(x,S),2&e[0]&&L!==(L=t[1].existingPacks+"")&&k(I,L),139554&e[0]){let n;for(T=t[5],n=0;n<T.length;n+=1){const o=F(t,T,n);z[n]?z[n].p(o,e):(z[n]=ft(o),z[n].c(),z[n].m(N,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=T.length}},d(t){t&&s(e),t&&s(c),t&&s(r),a(O,t),t&&s(f),a(K,t),t&&s(g),t&&s(v),t&&s(j),t&&s(b),t&&s(P),t&&s(w),t&&s(q),t&&s(N),a(z,t),D=!1,o(E)}}}function lt(t){let e,n,o,c=t[44].name+"";return{c(){e=u("option"),n=d(c),e.__value=o=t[44].id,e.value=e.__value},m(t,o){i(t,e,o),l(e,n)},p(t,r){16&r[0]&&c!==(c=t[44].name+"")&&k(n,c),16&r[0]&&o!==(o=t[44].id)&&(e.__value=o,e.value=e.__value)},d(t){t&&s(e)}}}function it(e){let n,o,c=e[62]+1+"";return{c(){n=u("option"),o=d(c),n.__value=e[62]+1,n.value=n.__value},m(t,e){i(t,n,e),l(n,o)},p:t,d(t){t&&s(n)}}}function st(t){let e,n,c,r,f,g,v,$,j,b,x,P,w="★".repeat(t[53].stars)+"";function I(){t[30].call(e,t[58],t[59])}function q(){t[31].call(r,t[58],t[59])}let N=Array(5),D=[];for(let e=0;e<N.length;e+=1)D[e]=it(U(t,N,e));function E(){t[32].call(v,t[58],t[59])}return{c(){e=u("input"),c=p(),r=u("input"),g=p(),v=u("select");for(let t=0;t<D.length;t+=1)D[t].c();$=p(),j=u("span"),b=d(w),m(e,"type","text"),m(e,"placeholder",n=t[1].linkName),m(r,"type","url"),m(r,"placeholder",f=t[1].linkHref),void 0===t[53].stars&&M(E),m(j,"class","stars svelte-1qe4kqh")},m(n,o){i(n,e,o),_(e,t[53].description),i(n,c,o),i(n,r,o),_(r,t[53].href),i(n,g,o),i(n,v,o);for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(v,null);y(v,t[53].stars,!0),i(n,$,o),i(n,j,o),l(j,b),x||(P=[h(e,"input",I),h(r,"input",q),h(v,"change",E)],x=!0)},p(o,c){t=o,2&c[0]&&n!==(n=t[1].linkName)&&m(e,"placeholder",n),24&c[0]&&e.value!==t[53].description&&_(e,t[53].description),2&c[0]&&f!==(f=t[1].linkHref)&&m(r,"placeholder",f),24&c[0]&&r.value!==t[53].href&&_(r,t[53].href),24&c[0]&&y(v,t[53].stars),8&c[0]&&w!==(w="★".repeat(t[53].stars)+"")&&k(b,w)},d(t){t&&s(e),t&&s(c),t&&s(r),t&&s(g),t&&s(v),a(D,t),t&&s($),t&&s(j),x=!1,o(P)}}}function at(t){let e,n,c,r,f,g,v,y,$,j,b,x,P,w,I=t[1].done+"",q=t[1].addLink+"";function N(){t[28].call(e,t[50])}function D(){t[29].call(f,t[50])}let E=t[3][t[50]].links,M=[];for(let e=0;e<E.length;e+=1)M[e]=st(R(t,E,e));function A(){return t[33](t[50])}return{c(){e=u("input"),c=p(),r=u("label"),f=u("input"),g=p(),v=d(I),y=p(),$=u("div");for(let t=0;t<M.length;t+=1)M[t].c();j=p(),b=u("button"),x=d(q),m(e,"type","text"),m(e,"placeholder",n=t[1][t[50]]),m(e,"maxlength","100"),m(f,"type","checkbox"),m($,"class","links")},m(n,o){i(n,e,o),_(e,t[3][t[50]].description),i(n,c,o),i(n,r,o),l(r,f),f.checked=t[3][t[50]].done,l(r,g),l(r,v),i(n,y,o),i(n,$,o);for(let t=0;t<M.length;t+=1)M[t]&&M[t].m($,null);l($,j),l($,b),l(b,x),P||(w=[h(e,"input",N),h(f,"change",D),h(b,"click",A)],P=!0)},p(o,c){if(t=o,2&c[0]&&n!==(n=t[1][t[50]])&&m(e,"placeholder",n),24&c[0]&&e.value!==t[3][t[50]].description&&_(e,t[3][t[50]].description),24&c[0]&&(f.checked=t[3][t[50]].done),2&c[0]&&I!==(I=t[1].done+"")&&k(v,I),10&c[0]){let e;for(E=t[3][t[50]].links,e=0;e<E.length;e+=1){const n=R(t,E,e);M[e]?M[e].p(n,c):(M[e]=st(n),M[e].c(),M[e].m($,j))}for(;e<M.length;e+=1)M[e].d(1);M.length=E.length}2&c[0]&&q!==(q=t[1].addLink+"")&&k(x,q)},d(t){t&&s(e),t&&s(c),t&&s(r),t&&s(y),t&&s($),a(M,t),P=!1,o(w)}}}function ut(t){let e,n=t[47][t[50]].links,o=[];for(let e=0;e<n.length;e+=1)o[e]=dt(J(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=f()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);i(t,e,n)},p(t,c){if(32&c[0]){let r;for(n=t[47][t[50]].links,r=0;r<n.length;r+=1){const l=J(t,n,r);o[r]?o[r].p(l,c):(o[r]=dt(l),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){a(o,t),t&&s(e)}}}function dt(t){let e,n,o,c,r,a,f=t[53].description+"",h="★".repeat(t[53].stars)+"";return{c(){e=u("a"),n=d(f),c=p(),r=u("span"),a=d(h),m(e,"href",o=t[53].url),m(e,"target","_blank"),m(r,"class","stars svelte-1qe4kqh")},m(t,o){i(t,e,o),l(e,n),i(t,c,o),i(t,r,o),l(r,a)},p(t,c){32&c[0]&&f!==(f=t[53].description+"")&&k(n,f),32&c[0]&&o!==(o=t[53].url)&&m(e,"href",o),32&c[0]&&h!==(h="★".repeat(t[53].stars)+"")&&k(a,h)},d(t){t&&s(e),t&&s(c),t&&s(r)}}}function pt(t){let e,n,o,c,r,a,g,_,v,y,$,b,x=t[1].done+"",P=t[1][t[50]]+"",w=t[47][`${t[50]}_description`]+"";function I(){return t[35](t[47],t[50])}let q=t[47][t[50]].links.length>0&&ut(t);return{c(){e=u("div"),n=u("button"),o=d(x),c=p(),r=u("p"),a=d(P),g=d(": "),_=d(w),v=p(),q&&q.c(),y=f(),m(e,"class","svelte-1qe4kqh"),j(e,"done",t[47][`${t[50]}_done`])},m(t,s){i(t,e,s),l(e,n),l(n,o),l(e,c),l(e,r),l(r,a),l(r,g),l(r,_),i(t,v,s),q&&q.m(t,s),i(t,y,s),$||(b=h(n,"click",I),$=!0)},p(n,c){t=n,2&c[0]&&x!==(x=t[1].done+"")&&k(o,x),2&c[0]&&P!==(P=t[1][t[50]]+"")&&k(a,P),32&c[0]&&w!==(w=t[47][`${t[50]}_description`]+"")&&k(_,w),32&c[0]&&j(e,"done",t[47][`${t[50]}_done`]),t[47][t[50]].links.length>0?q?q.p(t,c):(q=ut(t),q.c(),q.m(y.parentNode,y)):q&&(q.d(1),q=null)},d(t){t&&s(e),t&&s(v),q&&q.d(t),t&&s(y),$=!1,b()}}}function ft(t){let e,n,o,c,r,f,g,_,v,y,$=t[13](t[47].project_id)+"",j=t[1].delete+"",b=["plan","do","check","act"],x=[];for(let e=0;e<4;e+=1)x[e]=pt(G(t,b,e));function P(){return t[36](t[47])}return{c(){e=u("div"),n=u("h3"),o=d($),c=p();for(let t=0;t<4;t+=1)x[t].c();r=p(),f=u("button"),g=d(j),_=p(),m(e,"class","pack")},m(t,s){i(t,e,s),l(e,n),l(n,o),l(e,c);for(let t=0;t<4;t+=1)x[t]&&x[t].m(e,null);l(e,r),l(e,f),l(f,g),l(e,_),v||(y=h(f,"click",P),v=!0)},p(n,c){if(t=n,32&c[0]&&$!==($=t[13](t[47].project_id)+"")&&k(o,$),290&c[0]){let n;for(b=["plan","do","check","act"],n=0;n<4;n+=1){const o=G(t,b,n);x[n]?x[n].p(o,c):(x[n]=pt(o),x[n].c(),x[n].m(e,r))}for(;n<4;n+=1)x[n].d(1)}2&c[0]&&j!==(j=t[1].delete+"")&&k(g,j)},d(t){t&&s(e),a(x,t),v=!1,y()}}}function ht(t){let e,n,o,c,r=t[1].progress+"",f=t[4],h=[];for(let e=0;e<f.length;e+=1)h[e]=mt(B(t,f,e));return{c(){e=u("h2"),n=d(r),o=p(),c=u("div");for(let t=0;t<h.length;t+=1)h[t].c();m(c,"class","progress")},m(t,r){i(t,e,r),l(e,n),i(t,o,r),i(t,c,r);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(c,null)},p(t,e){if(2&e[0]&&r!==(r=t[1].progress+"")&&k(n,r),530&e[0]){let n;for(f=t[4],n=0;n<f.length;n+=1){const o=B(t,f,n);h[n]?h[n].p(o,e):(h[n]=mt(o),h[n].c(),h[n].m(c,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=f.length}},d(t){t&&s(e),t&&s(o),t&&s(c),a(h,t)}}}function mt(t){let e,n,o,c,r,a,f,h,g,_,v,y,$,j,b=t[44].name+"",x=t[1].progressSummary+"",P=t[9](t[44])+"";return{c(){e=u("div"),n=u("h3"),o=d(b),c=p(),r=u("div"),a=d(x),f=p(),h=u("progress"),_=p(),v=u("div"),y=d(P),$=d("%"),j=p(),m(h,"max","100"),h.value=g=t[9](t[44]),m(e,"class","progress-item")},m(t,s){i(t,e,s),l(e,n),l(n,o),l(e,c),l(e,r),l(r,a),l(e,f),l(e,h),l(e,_),l(e,v),l(v,y),l(v,$),l(e,j)},p(t,e){16&e[0]&&b!==(b=t[44].name+"")&&k(o,b),2&e[0]&&x!==(x=t[1].progressSummary+"")&&k(a,x),16&e[0]&&g!==(g=t[9](t[44]))&&(h.value=g),16&e[0]&&P!==(P=t[9](t[44])+"")&&k(y,P)},d(t){t&&s(e)}}}function gt(e){let n,c,r,a,m,g,_,v,y,$,j,b,x,P,w,I,q,N=e[1].projectManagement+"",D=e[1].packManagement+"",E=e[1].progressManagement+"",M="projects"===e[0]&&tt(e),A="packs"===e[0]&&rt(e),S="progress"===e[0]&&ht(e);return{c(){n=u("header"),c=p(),r=u("nav"),a=u("button"),m=d(N),g=p(),_=u("button"),v=d(D),y=p(),$=u("button"),j=d(E),b=p(),M&&M.c(),x=p(),A&&A.c(),P=p(),S&&S.c(),w=f()},m(t,o){i(t,n,o),i(t,c,o),i(t,r,o),l(r,a),l(a,m),l(r,g),l(r,_),l(_,v),l(r,y),l(r,$),l($,j),i(t,b,o),M&&M.m(t,o),i(t,x,o),A&&A.m(t,o),i(t,P,o),S&&S.m(t,o),i(t,w,o),I||(q=[h(a,"click",e[18]),h(_,"click",e[19]),h($,"click",e[20])],I=!0)},p(t,e){2&e[0]&&N!==(N=t[1].projectManagement+"")&&k(m,N),2&e[0]&&D!==(D=t[1].packManagement+"")&&k(v,D),2&e[0]&&E!==(E=t[1].progressManagement+"")&&k(j,E),"projects"===t[0]?M?M.p(t,e):(M=tt(t),M.c(),M.m(x.parentNode,x)):M&&(M.d(1),M=null),"packs"===t[0]?A?A.p(t,e):(A=rt(t),A.c(),A.m(P.parentNode,P)):A&&(A.d(1),A=null),"progress"===t[0]?S?S.p(t,e):(S=ht(t),S.c(),S.m(w.parentNode,w)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&s(n),t&&s(c),t&&s(r),t&&s(b),M&&M.d(t),t&&s(x),A&&A.d(t),t&&s(P),S&&S.d(t),t&&s(w),I=!1,o(q)}}}function kt(t,e,n){let o=[];const c=async()=>{const t=await fetch("http://localhost:8000/");o=await t.json(),n(4,a=o.projects),n(5,u=o.packs),n(6,d=o.projects_and_packs)};let r="projects",l={},i={name:"",description:"",kpi:0,due_date:96,difficulty:3},s={projectId:null,plan:{description:"",done:!1,links:[]},do:{description:"",done:!1,links:[]},check:{description:"",done:!1,links:[]},act:{description:"",done:!1,links:[]}},a=[],u=[],d=[];function p(t,e){n(5,u=u.map((n=>n.id===t?{...n,[e]:{...n[e],done:!n[e].done}}:n)));const o=k(t),c=u.find((e=>e.id===t));if(100===o){const t=a.find((t=>t.id===c.projectId));t.difficulty=Math.max(1,t.difficulty-1)}if(0===o){const t=a.find((t=>t.id===c.projectId));t.difficulty=Math.min(5,t.difficulty+1)}}P((async()=>{n(1,l=await(async()=>{const t=await fetch("pdca_lang.json");return await t.json()})())}));const f=t=>n(0,r=t),h=t=>{f("packs"),n(3,s.projectId=t,s)},m=t=>{n(4,a=a.filter((e=>e.id!==t)))},k=t=>{const e=["plan","do","check","act"],n=u.find((e=>e.id===t));return e.filter((t=>n[t].done)).length/e.length*100},_=t=>{n(5,u=u.filter((e=>e.id!==t)))};return(async()=>{await c()})(),[r,l,i,s,a,u,d,c,p,t=>{const e=u.filter((e=>e.projectId===t.id)).length,n=u.filter((e=>e.projectId===t.id&&e.plan.done&&e.do.done&&e.check.done&&e.act.done)).length;return 0===e?0:Math.round(n/e*100)},f,h,t=>{const e=new Date;return e.setHours(e.getHours()+t),e.toLocaleString()},t=>{const e=a.find((e=>e.id===t));return e?e.name:""},()=>{const t={...i,id:Date.now()};n(4,a=[...a,t]),n(2,i={name:"",description:"",kpi:0,due_date:96,difficulty:3})},m,()=>{const t={...s,id:Date.now()};n(5,u=[...u,t]),n(3,s={projectId:null,plan:{description:"",done:!1,links:[]},do:{description:"",done:!1,links:[]},check:{description:"",done:!1,links:[]},act:{description:"",done:!1,links:[]}})},_,()=>f("projects"),()=>f("packs"),()=>f("progress"),function(){i.name=this.value,n(2,i)},function(){i.description=this.value,n(2,i)},function(){i.kpi=g(this.value),n(2,i)},function(){i.due_date=g(this.value),n(2,i)},t=>h(t.project_id),t=>m(t.id),function(){s.projectId=$(this),n(3,s),n(4,a)},function(t){s[t].description=this.value,n(3,s),n(4,a)},function(t){s[t].done=this.checked,n(3,s),n(4,a)},function(t,e){t[e].description=this.value,n(3,s),n(4,a)},function(t,e){t[e].href=this.value,n(3,s),n(4,a)},function(t,e){t[e].stars=$(this),n(3,s),n(4,a)},t=>addLink(t),function(){s.due_date=this.value,n(3,s),n(4,a)},(t,e)=>p(t.id,e),t=>_(t.id)]}return new class extends z{constructor(t){super(),T(this,t,kt,gt,r,{},null,[-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
