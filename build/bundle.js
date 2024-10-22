var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function f(){return u("")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function k(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function v(t,e,n){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function j(t,e,n){t.classList[n?"add":"remove"](e)}let $;function b(t){$=t}function x(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const D=[],w=[];let I=[];const P=[],N=Promise.resolve();let E=!1;function S(t){I.push(t)}const O=new Set;let q=0;function L(){if(0!==q)return;const t=$;do{try{for(;q<D.length;){const t=D[q];q++,b(t),M(t.$$)}}catch(t){throw D.length=0,q=0,t}for(b(null),D.length=0,q=0;w.length;)w.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];O.has(e)||(O.add(e),e())}I.length=0}while(D.length);for(;P.length;)P.pop()();E=!1,O.clear(),b(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const A=new Set;function C(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];I.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),I=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(D.push(t),E||(E=!0,N.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(r,i,l,s,d,u,p,f=[-1]){const h=$;b(r);const g=r.$$={fragment:null,ctx:[],props:u,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:i.target||h.$$.root};p&&p(g.root);let m=!1;if(g.ctx=l?l(r,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),m&&K(r,t)),e})):[],g.update(),m=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();i.intro&&((_=r.$$.fragment)&&_.i&&(A.delete(_),_.i(y))),function(t,n,r,i){const{fragment:l,after_update:a}=t.$$;l&&l.m(n,r),i||S((()=>{const n=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(S)}(r,i.target,i.anchor,i.customElement),L()}var _,y;b(h)}class z{$destroy(){C(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t,e,n){const o=t.slice();return o[50]=e[n],o}function W(t,e,n){const o=t.slice();return o[53]=e[n],o[55]=n,o}function B(t,e,n){const o=t.slice();return o[56]=e[n],o}function H(t,e,n){const o=t.slice();return o[59]=e[n],o}function J(t,e,n){const o=t.slice();return o[50]=e[n],o}function F(t,e,n){const o=t.slice();return o[50]=e[n],o}function U(t,e,n){const o=t.slice();return o[53]=e[n],o}function V(t,e,n){const o=t.slice();return o[56]=e[n],o}function Y(t,e,n){const o=t.slice();return o[70]=e[n],o[72]=n,o}function Q(e){let n,o,c;return{c(){n=d("button"),n.textContent="Login"},m(t,r){l(t,n,r),o||(c=h(n,"click",e[8]),o=!0)},p:t,d(t){t&&a(n),o=!1,c()}}}function R(e){let n,o,c;return{c(){n=d("button"),n.textContent="Logout"},m(t,r){l(t,n,r),o||(c=h(n,"click",e[9]),o=!0)},p:t,d(t){t&&a(n),o=!1,c()}}}function X(t){let e,n,c,r,f,m,y,k,v,j,$,b,x,D,w=t[3].createProject+"",I=t[3].existingProjects+"",P="Logged in"===t[0]&&null!==t[1]&&Z(t),N=t[7],E=[];for(let e=0;e<N.length;e+=1)E[e]=ot(F(t,N,e));return{c(){e=d("button"),e.textContent="Initialize Database",n=p(),c=d("button"),c.textContent="Fetch Data",r=p(),f=d("h2"),m=u(w),y=p(),P&&P.c(),k=p(),v=d("h2"),j=u(I),$=p(),b=d("div");for(let t=0;t<E.length;t+=1)E[t].c();g(b,"class","project-list")},m(o,a){l(o,e,a),l(o,n,a),l(o,c,a),l(o,r,a),l(o,f,a),i(f,m),l(o,y,a),P&&P.m(o,a),l(o,k,a),l(o,v,a),i(v,j),l(o,$,a),l(o,b,a);for(let t=0;t<E.length;t+=1)E[t]&&E[t].m(b,null);x||(D=[h(e,"click",ht),h(c,"click",t[10])],x=!0)},p(t,e){if(8&e[0]&&w!==(w=t[3].createProject+"")&&_(m,w),"Logged in"===t[0]&&null!==t[1]?P?P.p(t,e):(P=Z(t),P.c(),P.m(k.parentNode,k)):P&&(P.d(1),P=null),8&e[0]&&I!==(I=t[3].existingProjects+"")&&_(j,I),688264&e[0]){let n;for(N=t[7],n=0;n<N.length;n+=1){const o=F(t,N,n);E[n]?E[n].p(o,e):(E[n]=ot(o),E[n].c(),E[n].m(b,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=N.length}},d(t){t&&a(e),t&&a(n),t&&a(c),t&&a(r),t&&a(f),t&&a(y),P&&P.d(t),t&&a(k),t&&a(v),t&&a($),t&&a(b),s(E,t),x=!1,o(D)}}}function Z(t){let e,n,c,r,s,f,k,v,j,$,b,x,D,w,I,P,N,E,S,O=t[3].addProject+"";return{c(){e=d("input"),c=p(),r=d("input"),f=p(),k=d("input"),j=p(),$=d("input"),x=p(),D=d("input"),I=p(),P=d("button"),N=u(O),g(e,"type","text"),g(e,"placeholder",n=t[3].projectName),g(e,"maxlength","100"),g(r,"type","text"),g(r,"placeholder",s=t[3].projectDescription),g(r,"maxlength","200"),g(k,"type","number"),g(k,"placeholder",v=t[3].projectKPI),g(k,"min","0"),g($,"type","datetime-local"),g($,"placeholder",b=t[3].projectDueDate),g(D,"type","number"),g(D,"placeholder",w=t[3].projectDifficulty),g(D,"min","1"),g(D,"max","5")},m(n,o){l(n,e,o),y(e,t[4].name),l(n,c,o),l(n,r,o),y(r,t[4].description),l(n,f,o),l(n,k,o),y(k,t[4].kpi),l(n,j,o),l(n,$,o),y($,t[4].due_date),l(n,x,o),l(n,D,o),y(D,t[4].difficulty),l(n,I,o),l(n,P,o),i(P,N),E||(S=[h(e,"input",t[24]),h(r,"input",t[25]),h(k,"input",t[26]),h($,"input",t[27]),h(D,"input",t[28]),h(P,"click",t[11])],E=!0)},p(t,o){8&o[0]&&n!==(n=t[3].projectName)&&g(e,"placeholder",n),16&o[0]&&e.value!==t[4].name&&y(e,t[4].name),8&o[0]&&s!==(s=t[3].projectDescription)&&g(r,"placeholder",s),16&o[0]&&r.value!==t[4].description&&y(r,t[4].description),8&o[0]&&v!==(v=t[3].projectKPI)&&g(k,"placeholder",v),16&o[0]&&m(k.value)!==t[4].kpi&&y(k,t[4].kpi),8&o[0]&&b!==(b=t[3].projectDueDate)&&g($,"placeholder",b),16&o[0]&&y($,t[4].due_date),8&o[0]&&w!==(w=t[3].projectDifficulty)&&g(D,"placeholder",w),16&o[0]&&m(D.value)!==t[4].difficulty&&y(D,t[4].difficulty),8&o[0]&&O!==(O=t[3].addProject+"")&&_(N,O)},d(t){t&&a(e),t&&a(c),t&&a(r),t&&a(f),t&&a(k),t&&a(j),t&&a($),t&&a(x),t&&a(D),t&&a(I),t&&a(P),E=!1,o(S)}}}function tt(t){let e,n,o,c,r=t[15](t[50])>=10*t[72]?"●":"○";return{c(){e=d("span"),n=u(r),o=p(),g(e,"class",c=t[15](t[50])>=10*t[72]?"filled":"")},m(t,c){l(t,e,c),i(e,n),i(e,o)},p(t,o){128&o[0]&&r!==(r=t[15](t[50])>=10*t[72]?"●":"○")&&_(n,r),128&o[0]&&c!==(c=t[15](t[50])>=10*t[72]?"filled":"")&&g(e,"class",c)},d(t){t&&a(e)}}}function et(t){let e,n,o,c,r=t[3][t[56]]+"",s=t[53][`${t[56]}_description`]+"";return{c(){e=d("span"),n=u(r),o=u(": "),c=u(s),g(e,"class","svelte-1qe4kqh"),j(e,"done",t[53][`${t[56]}_done`])},m(t,r){l(t,e,r),i(e,n),i(e,o),i(e,c)},p(t,o){8&o[0]&&r!==(r=t[3][t[56]]+"")&&_(n,r),128&o[0]&&s!==(s=t[53][`${t[56]}_description`]+"")&&_(c,s),128&o[0]&&j(e,"done",t[53][`${t[56]}_done`])},d(t){t&&a(e)}}}function nt(t){let e,n,o=["plan","do","check","act"],c=[];for(let e=0;e<4;e+=1)c[e]=et(V(t,o,e));return{c(){e=d("div");for(let t=0;t<4;t+=1)c[t].c();n=p(),g(e,"class","pack-summary")},m(t,o){l(t,e,o);for(let t=0;t<4;t+=1)c[t]&&c[t].m(e,null);i(e,n)},p(t,r){if(136&r[0]){let i;for(o=["plan","do","check","act"],i=0;i<4;i+=1){const l=V(t,o,i);c[i]?c[i].p(l,r):(c[i]=et(l),c[i].c(),c[i].m(e,n))}for(;i<4;i+=1)c[i].d(1)}},d(t){t&&a(e),s(c,t)}}}function ot(t){let e,n,o,c,r,f,m,y,v,j,$,b,x,D,w,I,P,N,E,S,O,q,L,M,A,C,K,T,z,G,W,B,H,J,F,V,Q=t[50].name+"",R=t[50].user_id+"",X=t[50].description+"",Z=t[50].kpi+"",et="★".repeat(t[50].difficulty)+"",ot=t[17](t[50].due_date)+"",ct=t[15](t[50])+"",rt=t[3].packsSummary+"",it=t[3].delete+"",lt=Array(10),at=[];for(let e=0;e<lt.length;e+=1)at[e]=tt(Y(t,lt,e));let st=t[50].packs,dt=[];for(let e=0;e<st.length;e+=1)dt[e]=nt(U(t,st,e));function ut(){return t[29](t[50])}return{c(){e=d("div"),n=d("h3"),o=u(Q),c=u(": user id: "),r=u(R),f=p(),m=d("p"),y=u(X),v=p(),j=d("p"),$=u("KPI: "),b=u(Z),x=p(),D=d("p"),w=u("Difficulty: "),I=d("span"),P=u(et),N=p(),E=d("p"),S=u("Due Date: "),O=u(ot),q=p(),L=d("div"),M=u(ct),A=u("%\n                    ");for(let t=0;t<at.length;t+=1)at[t].c();C=p(),K=d("div"),T=d("h4"),z=u(rt),G=p();for(let t=0;t<dt.length;t+=1)dt[t].c();W=p(),B=d("button"),H=u(it),J=p(),g(I,"class","stars svelte-1qe4kqh"),g(L,"class","progress-bar svelte-1qe4kqh"),k(L,"width",t[15](t[50])+"%"),g(K,"class","project-summary"),g(B,"class","delete"),g(e,"class","project")},m(t,a){l(t,e,a),i(e,n),i(n,o),i(n,c),i(n,r),i(e,f),i(e,m),i(m,y),i(e,v),i(e,j),i(j,$),i(j,b),i(e,x),i(e,D),i(D,w),i(D,I),i(I,P),i(e,N),i(e,E),i(E,S),i(E,O),i(e,q),i(e,L),i(L,M),i(L,A);for(let t=0;t<at.length;t+=1)at[t]&&at[t].m(L,null);i(e,C),i(e,K),i(K,T),i(T,z),i(K,G);for(let t=0;t<dt.length;t+=1)dt[t]&&dt[t].m(K,null);i(e,W),i(e,B),i(B,H),i(e,J),F||(V=h(B,"click",ut),F=!0)},p(e,n){if(t=e,128&n[0]&&Q!==(Q=t[50].name+"")&&_(o,Q),128&n[0]&&R!==(R=t[50].user_id+"")&&_(r,R),128&n[0]&&X!==(X=t[50].description+"")&&_(y,X),128&n[0]&&Z!==(Z=t[50].kpi+"")&&_(b,Z),128&n[0]&&et!==(et="★".repeat(t[50].difficulty)+"")&&_(P,et),128&n[0]&&ot!==(ot=t[17](t[50].due_date)+"")&&_(O,ot),128&n[0]&&ct!==(ct=t[15](t[50])+"")&&_(M,ct),32896&n[0]){let e;for(lt=Array(10),e=0;e<lt.length;e+=1){const o=Y(t,lt,e);at[e]?at[e].p(o,n):(at[e]=tt(o),at[e].c(),at[e].m(L,null))}for(;e<at.length;e+=1)at[e].d(1);at.length=lt.length}if(128&n[0]&&k(L,"width",t[15](t[50])+"%"),8&n[0]&&rt!==(rt=t[3].packsSummary+"")&&_(z,rt),136&n[0]){let e;for(st=t[50].packs,e=0;e<st.length;e+=1){const o=U(t,st,e);dt[e]?dt[e].p(o,n):(dt[e]=nt(o),dt[e].c(),dt[e].m(K,null))}for(;e<dt.length;e+=1)dt[e].d(1);dt.length=st.length}8&n[0]&&it!==(it=t[3].delete+"")&&_(H,it)},d(t){t&&a(e),s(at,t),s(dt,t),F=!1,V()}}}function ct(t){let e,n,c,r,f,m,k,j,$,b,x,D,w,I,P,N,E,O,q,L,M,A,C,K,T,z,G,B,H,F=t[3].createPack+"",U=t[3].addPack+"",V=t[3].existingPacks+"",Y=t[7],Q=[];for(let e=0;e<Y.length;e+=1)Q[e]=rt(J(t,Y,e));let R=t[6],X=[];for(let e=0;e<R.length;e+=1)X[e]=st(W(t,R,e));return{c(){e=d("h2"),n=u(F),c=p(),r=d("select");for(let t=0;t<Q.length;t+=1)Q[t].c();f=p(),m=d("input"),j=p(),$=d("input"),x=p(),D=d("input"),I=p(),P=d("input"),E=p(),O=d("input"),L=p(),M=d("button"),A=u(U),C=p(),K=d("h2"),T=u(V),z=p(),G=d("div");for(let t=0;t<X.length;t+=1)X[t].c();void 0===t[5].projectId&&S((()=>t[30].call(r))),g(m,"type","text"),g(m,"placeholder",k=t[3].planDescription),g(m,"maxlength","300"),g($,"type","text"),g($,"placeholder",b=t[3].doDescription),g($,"maxlength","300"),g(D,"type","text"),g(D,"placeholder",w=t[3].checkDescription),g(D,"maxlength","300"),g(P,"type","text"),g(P,"placeholder",N=t[3].actDescription),g(P,"maxlength","300"),g(O,"type","datetime-local"),g(O,"placeholder",q=t[3].packDueDate),g(G,"class","pack-list")},m(o,a){l(o,e,a),i(e,n),l(o,c,a),l(o,r,a);for(let t=0;t<Q.length;t+=1)Q[t]&&Q[t].m(r,null);v(r,t[5].projectId,!0),l(o,f,a),l(o,m,a),y(m,t[5].plan_description),l(o,j,a),l(o,$,a),y($,t[5].do_description),l(o,x,a),l(o,D,a),y(D,t[5].check_description),l(o,I,a),l(o,P,a),y(P,t[5].act_description),l(o,E,a),l(o,O,a),y(O,t[5].due_date),l(o,L,a),l(o,M,a),i(M,A),l(o,C,a),l(o,K,a),i(K,T),l(o,z,a),l(o,G,a);for(let t=0;t<X.length;t+=1)X[t]&&X[t].m(G,null);B||(H=[h(r,"change",t[30]),h(m,"input",t[31]),h($,"input",t[32]),h(D,"input",t[33]),h(P,"input",t[34]),h(O,"input",t[35]),h(O,"change",t[12]),h(M,"click",t[13])],B=!0)},p(t,e){if(8&e[0]&&F!==(F=t[3].createPack+"")&&_(n,F),128&e[0]){let n;for(Y=t[7],n=0;n<Y.length;n+=1){const o=J(t,Y,n);Q[n]?Q[n].p(o,e):(Q[n]=rt(o),Q[n].c(),Q[n].m(r,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=Y.length}if(160&e[0]&&v(r,t[5].projectId),8&e[0]&&k!==(k=t[3].planDescription)&&g(m,"placeholder",k),160&e[0]&&m.value!==t[5].plan_description&&y(m,t[5].plan_description),8&e[0]&&b!==(b=t[3].doDescription)&&g($,"placeholder",b),160&e[0]&&$.value!==t[5].do_description&&y($,t[5].do_description),8&e[0]&&w!==(w=t[3].checkDescription)&&g(D,"placeholder",w),160&e[0]&&D.value!==t[5].check_description&&y(D,t[5].check_description),8&e[0]&&N!==(N=t[3].actDescription)&&g(P,"placeholder",N),160&e[0]&&P.value!==t[5].act_description&&y(P,t[5].act_description),8&e[0]&&q!==(q=t[3].packDueDate)&&g(O,"placeholder",q),160&e[0]&&y(O,t[5].due_date),8&e[0]&&U!==(U=t[3].addPack+"")&&_(A,U),8&e[0]&&V!==(V=t[3].existingPacks+"")&&_(T,V),1327176&e[0]){let n;for(R=t[6],n=0;n<R.length;n+=1){const o=W(t,R,n);X[n]?X[n].p(o,e):(X[n]=st(o),X[n].c(),X[n].m(G,null))}for(;n<X.length;n+=1)X[n].d(1);X.length=R.length}},d(t){t&&a(e),t&&a(c),t&&a(r),s(Q,t),t&&a(f),t&&a(m),t&&a(j),t&&a($),t&&a(x),t&&a(D),t&&a(I),t&&a(P),t&&a(E),t&&a(O),t&&a(L),t&&a(M),t&&a(C),t&&a(K),t&&a(z),t&&a(G),s(X,t),B=!1,o(H)}}}function rt(t){let e,n,o,c=t[50].name+"";return{c(){e=d("option"),n=u(c),e.__value=o=t[50].id,e.value=e.__value},m(t,o){l(t,e,o),i(e,n)},p(t,r){128&r[0]&&c!==(c=t[50].name+"")&&_(n,c),128&r[0]&&o!==(o=t[50].id)&&(e.__value=o,e.value=e.__value)},d(t){t&&a(e)}}}function it(t){let e,n=t[53][t[56]].links,o=[];for(let e=0;e<n.length;e+=1)o[e]=lt(H(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=f()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);l(t,e,n)},p(t,c){if(64&c[0]){let r;for(n=t[53][t[56]].links,r=0;r<n.length;r+=1){const i=H(t,n,r);o[r]?o[r].p(i,c):(o[r]=lt(i),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){s(o,t),t&&a(e)}}}function lt(t){let e,n,o,c,r,s,f=t[59].description+"",h="★".repeat(t[59].stars)+"";return{c(){e=d("a"),n=u(f),c=p(),r=d("span"),s=u(h),g(e,"href",o=t[59].url),g(e,"target","_blank"),g(r,"class","stars svelte-1qe4kqh")},m(t,o){l(t,e,o),i(e,n),l(t,c,o),l(t,r,o),i(r,s)},p(t,c){64&c[0]&&f!==(f=t[59].description+"")&&_(n,f),64&c[0]&&o!==(o=t[59].url)&&g(e,"href",o),64&c[0]&&h!==(h="★".repeat(t[59].stars)+"")&&_(s,h)},d(t){t&&a(e),t&&a(c),t&&a(r)}}}function at(t){let e,n,o,c,r,s,m,y,k,v,$,b,x=t[3].done+"",D=t[3][t[56]]+"",w=t[53][`${t[56]}_description`]+"";function I(){return t[36](t[53],t[56])}let P=t[53][t[56]].links.length>0&&it(t);return{c(){e=d("div"),n=d("button"),o=u(x),c=p(),r=d("p"),s=u(D),m=u(": "),y=u(w),k=p(),P&&P.c(),v=f(),g(e,"class","svelte-1qe4kqh"),j(e,"done",t[53][`${t[56]}_done`])},m(t,a){l(t,e,a),i(e,n),i(n,o),i(e,c),i(e,r),i(r,s),i(r,m),i(r,y),l(t,k,a),P&&P.m(t,a),l(t,v,a),$||(b=h(n,"click",I),$=!0)},p(n,c){t=n,8&c[0]&&x!==(x=t[3].done+"")&&_(o,x),8&c[0]&&D!==(D=t[3][t[56]]+"")&&_(s,D),64&c[0]&&w!==(w=t[53][`${t[56]}_description`]+"")&&_(y,w),64&c[0]&&j(e,"done",t[53][`${t[56]}_done`]),t[53][t[56]].links.length>0?P?P.p(t,c):(P=it(t),P.c(),P.m(v.parentNode,v)):P&&(P.d(1),P=null)},d(t){t&&a(e),t&&a(k),P&&P.d(t),t&&a(v),$=!1,b()}}}function st(t){let e,n,o,c,r,f,m,y,k,v,j=t[18](t[53].project_id)+"",$=t[3].delete+"",b=["plan","do","check","act"],x=[];for(let e=0;e<4;e+=1)x[e]=at(B(t,b,e));function D(){return t[37](t[53])}return{c(){e=d("div"),n=d("h3"),o=u(j),c=p();for(let t=0;t<4;t+=1)x[t].c();r=p(),f=d("button"),m=u($),y=p(),g(e,"class","pack")},m(t,a){l(t,e,a),i(e,n),i(n,o),i(e,c);for(let t=0;t<4;t+=1)x[t]&&x[t].m(e,null);i(e,r),i(e,f),i(f,m),i(e,y),k||(v=h(f,"click",D),k=!0)},p(n,c){if(t=n,64&c[0]&&j!==(j=t[18](t[53].project_id)+"")&&_(o,j),16456&c[0]){let n;for(b=["plan","do","check","act"],n=0;n<4;n+=1){const o=B(t,b,n);x[n]?x[n].p(o,c):(x[n]=at(o),x[n].c(),x[n].m(e,r))}for(;n<4;n+=1)x[n].d(1)}8&c[0]&&$!==($=t[3].delete+"")&&_(m,$)},d(t){t&&a(e),s(x,t),k=!1,v()}}}function dt(t){let e,n,o,c,r=t[3].progress+"",f=t[7],h=[];for(let e=0;e<f.length;e+=1)h[e]=ut(G(t,f,e));return{c(){e=d("h2"),n=u(r),o=p(),c=d("div");for(let t=0;t<h.length;t+=1)h[t].c();g(c,"class","progress")},m(t,r){l(t,e,r),i(e,n),l(t,o,r),l(t,c,r);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(c,null)},p(t,e){if(8&e[0]&&r!==(r=t[3].progress+"")&&_(n,r),32896&e[0]){let n;for(f=t[7],n=0;n<f.length;n+=1){const o=G(t,f,n);h[n]?h[n].p(o,e):(h[n]=ut(o),h[n].c(),h[n].m(c,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=f.length}},d(t){t&&a(e),t&&a(o),t&&a(c),s(h,t)}}}function ut(t){let e,n,o,c,r,s,f,h,m,y,k,v=t[50].name+"",j=t[15](t[50])+"";return{c(){e=d("div"),n=d("h3"),o=u(v),c=p(),r=d("progress"),f=p(),h=d("div"),m=u(j),y=u("%"),k=p(),g(r,"max","100"),r.value=s=t[15](t[50]),g(e,"class","progress-item")},m(t,a){l(t,e,a),i(e,n),i(n,o),i(e,c),i(e,r),i(e,f),i(e,h),i(h,m),i(h,y),i(e,k)},p(t,e){128&e[0]&&v!==(v=t[50].name+"")&&_(o,v),128&e[0]&&s!==(s=t[15](t[50]))&&(r.value=s),128&e[0]&&j!==(j=t[15](t[50])+"")&&_(m,j)},d(t){t&&a(e)}}}function pt(e){let n,c,r,s,g,m,y,k,v,j,$,b,x,D,w,I,P,N,E,S=e[3].projectManagement+"",O=e[3].packManagement+"",q=e[3].progressManagement+"";function L(t,e){return"Logged in"===t[0]?R:Q}let M=L(e),A=M(e),C="projects"===e[2]&&X(e),K="packs"===e[2]&&ct(e),T="progress"===e[2]&&dt(e);return{c(){n=d("header"),A.c(),c=u("\nauth_login_result: "),r=u(e[0]),s=p(),g=d("nav"),m=d("button"),y=u(S),k=p(),v=d("button"),j=u(O),$=p(),b=d("button"),x=u(q),D=p(),C&&C.c(),w=p(),K&&K.c(),I=p(),T&&T.c(),P=f()},m(t,o){l(t,n,o),A.m(n,null),i(n,c),i(n,r),l(t,s,o),l(t,g,o),i(g,m),i(m,y),i(g,k),i(g,v),i(v,j),i(g,$),i(g,b),i(b,x),l(t,D,o),C&&C.m(t,o),l(t,w,o),K&&K.m(t,o),l(t,I,o),T&&T.m(t,o),l(t,P,o),N||(E=[h(m,"click",e[21]),h(v,"click",e[22]),h(b,"click",e[23])],N=!0)},p(t,e){M===(M=L(t))&&A?A.p(t,e):(A.d(1),A=M(t),A&&(A.c(),A.m(n,c))),1&e[0]&&_(r,t[0]),8&e[0]&&S!==(S=t[3].projectManagement+"")&&_(y,S),8&e[0]&&O!==(O=t[3].packManagement+"")&&_(j,O),8&e[0]&&q!==(q=t[3].progressManagement+"")&&_(x,q),"projects"===t[2]?C?C.p(t,e):(C=X(t),C.c(),C.m(w.parentNode,w)):C&&(C.d(1),C=null),"packs"===t[2]?K?K.p(t,e):(K=ct(t),K.c(),K.m(I.parentNode,I)):K&&(K.d(1),K=null),"progress"===t[2]?T?T.p(t,e):(T=dt(t),T.c(),T.m(P.parentNode,P)):T&&(T.d(1),T=null)},i:t,o:t,d(t){t&&a(n),A.d(),t&&a(s),t&&a(g),t&&a(D),C&&C.d(t),t&&a(w),K&&K.d(t),t&&a(I),T&&T.d(t),t&&a(P),N=!1,o(E)}}}let ft="http://localhost:8000";async function ht(){try{const t=await fetch(ft+"/init_db",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"init"})}),e=await t.json();console.log("Database initialized:",e)}catch(t){console.error("Error initializing database:",t)}}function gt(t,e,n){let o=[];const c=t=>{const e=[];return("string"!=typeof t.name||t.name.length<1||t.name.length>50)&&e.push("Invalid project name"),("string"!=typeof t.description||t.description.length<1||t.description.length>300)&&e.push("Invalid project description"),(!Number.isInteger(t.kpi)||t.kpi<0||t.kpi>100)&&e.push("Invalid project KPI"),isNaN(Date.parse(t.due_date))&&e.push("Invalid project due date"),(!Number.isInteger(t.difficulty)||t.difficulty<1||t.difficulty>5)&&e.push("Invalid project difficulty"),e};let r="Not logged in",i=null,l=[];firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const a=new firebase.auth.GoogleAuthProvider;async function s(){try{const t=await fetch(ft+"/",{method:"GET"});l=await t.json(),n(7,[g,h]=[l.projects_and_packs,l.packs],g,n(6,h))}catch(t){console.error("Error fetching data:",t)}}let d="projects",u={},p={name:"",description:"",kpi:0,due_date:(new Date).toISOString().slice(0,16),difficulty:3},f={project_id:null,plan_description:"",plan_done:0,do_description:"",do_done:0,check_description:"",check_done:0,act_description:"",act_done:0,due_date:(new Date).toISOString().slice(0,16)};let h=[],g=[];function _(t,e){n(6,h=h.map((n=>(n.id===t&&(n[`${e}_done`]=n[`${e}_done`]?0:1),n))));const o=h.find((e=>e.id===t)).project_id,c=v(t);h.find((e=>e.id===t));const r=g.find((t=>t.id===o));if(r.packs=r.packs.map((n=>(n.id===t&&(n[`${e}_done`]=n[`${e}_done`]?0:1),n))),100===c){const t=g.find((t=>t.id===o));t.difficulty=Math.max(1,t.difficulty-1)}if(0===c){const t=g.find((t=>t.id===o));t.difficulty=Math.min(5,t.difficulty+1)}}x((async()=>{n(3,u=await(async()=>{const t=await fetch("pdca_lang.json");return await t.json()})()),await s(),await async function(){try{const t=await new Promise(((t,e)=>{firebase.auth().onAuthStateChanged(t,e)}));t?(n(0,r="Logged in"),n(1,i=t.uid)):(n(0,r="Not logged in"),n(1,i=""))}catch(t){console.error("Error during authentication:",t),n(0,r="Authentication failed"),n(1,i="")}}()}));const y=t=>n(2,d=t),k=t=>{projects=projects.filter((e=>e.id!==t))},v=t=>{const e=["plan","do","check","act"],n=h.find((e=>e.id===t));return e.filter((t=>n[t].done)).length/e.length*100},j=t=>{n(6,h=h.filter((e=>e.id!==t)))};return(async()=>{})(),[r,i,d,u,p,f,h,g,async function(){try{const t=(await firebase.auth().signInWithPopup(a)).user;n(0,r=`Logged in as: ${t.displayName}`)}catch(t){console.error("Error during Google login:",t),alert("Google login failed. "+t.message)}},async function(){try{await firebase.auth().signOut(),n(0,r="Not logged in")}catch(t){console.error("Error during sign-out:",t),alert("Sign out failed. "+t.message)}},s,async function(){try{if(console.log("Creating project:",p),!i)return o.push("Error creating project: No UID"),void console.error("Error creating project: No UID");const t=c(p);if(o.push(...t),o.length>0)return void console.error("Error creating project:",o);const e=await fetch(`${ft}/create_projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p.name,description:p.description,kpi:p.kpi,due_date:p.due_date,difficulty:p.difficulty,uid:i})});if(!e.ok){const t=await e.json();return void console.error("Error creating project:",t.errors)}const n=await e.json();console.log("Project created with ID:",n.id)}catch(t){console.error("Error creating project:",t)}},t=>{const e=new Date(t.target.value);n(5,f.due_date=e.toISOString(),f)},()=>{const t={...f,id:Date.now()};n(6,h=[...h,t]),n(5,f={project_id:null,plan_description:"",plan_done:0,do_description:"",do_done:0,check_description:"",check_done:0,act_description:"",act_done:0,due_date:(new Date).toISOString()})},_,t=>{const e=t.packs,n=e.filter((e=>e.project_id===t.id)).length,o=e.filter((e=>e.project_id===t.id&&e.plan_done&&e.do_done&&e.check_done&&e.act_done)).length;return 0===n?0:Math.round(o/n*100)},y,t=>{const e=new Date;return e.setHours(e.getHours()+t),e.toLocaleString()},t=>{const e=g.find((e=>e.id===t));return e?e.name:""},k,j,()=>y("projects"),()=>y("packs"),()=>y("progress"),function(){p.name=this.value,n(4,p)},function(){p.description=this.value,n(4,p)},function(){p.kpi=m(this.value),n(4,p)},function(){p.due_date=this.value,n(4,p)},function(){p.difficulty=m(this.value),n(4,p)},t=>k(t.id),function(){f.projectId=function(t){const e=t.querySelector(":checked");return e&&e.__value}(this),n(5,f),n(7,g)},function(){f.plan_description=this.value,n(5,f),n(7,g)},function(){f.do_description=this.value,n(5,f),n(7,g)},function(){f.check_description=this.value,n(5,f),n(7,g)},function(){f.act_description=this.value,n(5,f),n(7,g)},function(){f.due_date=this.value,n(5,f),n(7,g)},(t,e)=>_(t.id,e),t=>j(t.id)]}return new class extends z{constructor(t){super(),T(this,t,gt,pt,r,{},null,[-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
