var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function s(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function k(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function y(t,e,n){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function v(t,e,n){t.classList[n?"add":"remove"](e)}let j;function w(t){j=t}function b(t){(function(){if(!j)throw new Error("Function called outside component initialization");return j})().$$.on_mount.push(t)}const $=[],D=[];let x=[];const I=[],P=Promise.resolve();let E=!1;function S(t){x.push(t)}const N=new Set;let O=0;function T(){if(0!==O)return;const t=j;do{try{for(;O<$.length;){const t=$[O];O++,w(t),C(t.$$)}}catch(t){throw $.length=0,O=0,t}for(w(null),$.length=0,O=0;D.length;)D.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];N.has(e)||(N.add(e),e())}x.length=0}while($.length);for(;I.length;)I.pop()();E=!1,N.clear(),w(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const L=new Set;function M(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&($.push(t),E||(E=!0,P.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(c,r,a,d,s,u,p,f=[-1]){const h=j;w(c);const g=c.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||h.$$.root};p&&p(g.root);let _=!1;if(g.ctx=a?a(c,r.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),_&&A(c,t)),e})):[],g.update(),_=!0,o(g.before_update),g.fragment=!!d&&d(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();r.intro&&((m=c.$$.fragment)&&m.i&&(L.delete(m),m.i(k))),function(t,n,c,r){const{fragment:a,after_update:l}=t.$$;a&&a.m(n,c),r||S((()=>{const n=t.$$.on_mount.map(e).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(S)}(c,r.target,r.anchor,r.customElement),T()}var m,k;w(h)}class J{$destroy(){M(this,1),this.$destroy=t}$on(e,n){if(!i(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(t,e,n){const o=t.slice();return o[81]=e[n],o}function K(t,e,n){const o=t.slice();return o[84]=e[n],o[86]=n,o}function B(t,e,n){const o=t.slice();return o[87]=e[n],o}function G(t,e,n){const o=t.slice();return o[90]=e[n],o}function W(t,e,n){const o=t.slice();return o[81]=e[n],o}function q(t,e,n){const o=t.slice();return o[81]=e[n],o[95]=e,o[96]=n,o}function F(t,e,n){const o=t.slice();return o[84]=e[n],o}function R(t,e,n){const o=t.slice();return o[87]=e[n],o}function Y(t,e,n){const o=t.slice();return o[101]=e[n],o[103]=n,o}function Z(e){let n,o,i;return{c(){n=s("button"),n.textContent="Login"},m(t,c){a(t,n,c),o||(i=f(n,"click",e[20]),o=!0)},p:t,d(t){t&&l(n),o=!1,i()}}}function H(e){let n,o,i;return{c(){n=s("button"),n.textContent="Logout"},m(t,c){a(t,n,c),o||(i=f(n,"click",e[21]),o=!0)},p:t,d(t){t&&l(n),o=!1,i()}}}function V(t){let e,n,o,i,c,g,m,k,y,v,j,w,b=t[9].createProject+"",$=t[9].existingProjects+"",D="Logged in"===t[4]&&null!==t[5]&&Q(t),x=t[13],I=[];for(let e=0;e<x.length;e+=1)I[e]=ct(q(t,x,e));return{c(){e=s("button"),e.textContent="Fetch Data",n=p(),o=s("h2"),i=u(b),c=p(),D&&D.c(),g=p(),m=s("h2"),k=u($),y=p(),v=s("div");for(let t=0;t<I.length;t+=1)I[t].c();h(v,"class","project-list")},m(l,d){a(l,e,d),a(l,n,d),a(l,o,d),r(o,i),a(l,c,d),D&&D.m(l,d),a(l,g,d),a(l,m,d),r(m,k),a(l,y,d),a(l,v,d);for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(v,null);j||(w=f(e,"click",t[22]),j=!0)},p(t,e){if(512&e[0]&&b!==(b=t[9].createProject+"")&&_(i,b),"Logged in"===t[4]&&null!==t[5]?D?D.p(t,e):(D=Q(t),D.c(),D.m(g.parentNode,g)):D&&(D.d(1),D=null),512&e[0]&&$!==($=t[9].existingProjects+"")&&_(k,$),1149248014&e[0]){let n;for(x=t[13],n=0;n<x.length;n+=1){const o=q(t,x,n);I[n]?I[n].p(o,e):(I[n]=ct(o),I[n].c(),I[n].m(v,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=x.length}},d(t){t&&l(e),t&&l(n),t&&l(o),t&&l(c),D&&D.d(t),t&&l(g),t&&l(m),t&&l(y),t&&l(v),d(I,t),j=!1,w()}}}function Q(t){let e,n,i,c,d,k,y,v,j,w,b,$,D,x,I,P,E,S,N,O,T,C,L,M,A,U,J,z,K,B=t[9].addProject+"";return{c(){e=s("div"),n=u("name: "),i=s("input"),d=p(),k=s("div"),y=u("description: "),v=s("input"),w=p(),b=s("div"),$=u("kpi: "),D=s("input"),I=p(),P=s("div"),E=u("due_date: "),S=s("input"),O=p(),T=s("div"),C=u("difficulty: "),L=s("input"),A=p(),U=s("button"),J=u(B),h(i,"type","text"),h(i,"placeholder",c=t[9].projectName),h(i,"maxlength","100"),h(v,"type","text"),h(v,"placeholder",j=t[9].projectDescription),h(v,"maxlength","200"),h(D,"type","number"),h(D,"placeholder",x=t[9].projectKPI),h(D,"min","0"),h(S,"type","datetime-local"),h(S,"placeholder",N=t[9].projectDueDate),h(L,"type","number"),h(L,"placeholder",M=t[9].projectDifficulty),h(L,"min","1"),h(L,"max","5")},m(o,c){a(o,e,c),r(e,n),r(e,i),m(i,t[10].name),a(o,d,c),a(o,k,c),r(k,y),r(k,v),m(v,t[10].description),a(o,w,c),a(o,b,c),r(b,$),r(b,D),m(D,t[10].kpi),a(o,I,c),a(o,P,c),r(P,E),r(P,S),m(S,t[10].due_date),a(o,O,c),a(o,T,c),r(T,C),r(T,L),m(L,t[10].difficulty),a(o,A,c),a(o,U,c),r(U,J),z||(K=[f(i,"input",t[36]),f(v,"input",t[37]),f(D,"input",t[38]),f(S,"input",t[39]),f(L,"input",t[40]),f(U,"click",t[17])],z=!0)},p(t,e){512&e[0]&&c!==(c=t[9].projectName)&&h(i,"placeholder",c),1024&e[0]&&i.value!==t[10].name&&m(i,t[10].name),512&e[0]&&j!==(j=t[9].projectDescription)&&h(v,"placeholder",j),1024&e[0]&&v.value!==t[10].description&&m(v,t[10].description),512&e[0]&&x!==(x=t[9].projectKPI)&&h(D,"placeholder",x),1024&e[0]&&g(D.value)!==t[10].kpi&&m(D,t[10].kpi),512&e[0]&&N!==(N=t[9].projectDueDate)&&h(S,"placeholder",N),1024&e[0]&&m(S,t[10].due_date),512&e[0]&&M!==(M=t[9].projectDifficulty)&&h(L,"placeholder",M),1024&e[0]&&g(L.value)!==t[10].difficulty&&m(L,t[10].difficulty),512&e[0]&&B!==(B=t[9].addProject+"")&&_(J,B)},d(t){t&&l(e),t&&l(d),t&&l(k),t&&l(w),t&&l(b),t&&l(I),t&&l(P),t&&l(O),t&&l(T),t&&l(A),t&&l(U),z=!1,o(K)}}}function X(t){let e,n,o,i;function c(...e){return t[42](t[81],t[95],t[96],...e)}return{c(){e=s("input"),h(e,"type","text"),e.value=n=t[81].name},m(t,n){a(t,e,n),o||(i=f(e,"input",c),o=!0)},p(o,i){t=o,8192&i[0]&&n!==(n=t[81].name)&&e.value!==n&&(e.value=n)},d(t){t&&l(e),o=!1,i()}}}function tt(t){let e,n,o,i;function c(...e){return t[46](t[81],t[95],t[96],...e)}return{c(){e=s("input"),h(e,"type","text"),e.value=n=t[81].description},m(t,n){a(t,e,n),o||(i=f(e,"input",c),o=!0)},p(o,i){t=o,8192&i[0]&&n!==(n=t[81].description)&&e.value!==n&&(e.value=n)},d(t){t&&l(e),o=!1,i()}}}function et(t){let e,n,o,i;function c(...e){return t[52](t[81],t[95],t[96],...e)}return{c(){e=s("input"),h(e,"type","datetime-local"),e.value=n=t[81].due_date.slice(0,16)},m(t,n){a(t,e,n),o||(i=f(e,"input",c),o=!0)},p(o,i){t=o,8192&i[0]&&n!==(n=t[81].due_date.slice(0,16))&&(e.value=n)},d(t){t&&l(e),o=!1,i()}}}function nt(t){let e,n,o,i,c=t[30](t[81])>=10*t[103]?"●":"○";return{c(){e=s("span"),n=u(c),o=p(),h(e,"class",i=t[30](t[81])>=10*t[103]?"filled":"")},m(t,i){a(t,e,i),r(e,n),r(e,o)},p(t,o){8192&o[0]&&c!==(c=t[30](t[81])>=10*t[103]?"●":"○")&&_(n,c),8192&o[0]&&i!==(i=t[30](t[81])>=10*t[103]?"filled":"")&&h(e,"class",i)},d(t){t&&l(e)}}}function ot(t){let e,n,o,i,c=t[9][t[87]]+"",d=t[84][`${t[87]}_description`]+"";return{c(){e=s("span"),n=u(c),o=u(": "),i=u(d),h(e,"class","svelte-1yythv4"),v(e,"done",t[84][`${t[87]}_done`])},m(t,c){a(t,e,c),r(e,n),r(e,o),r(e,i)},p(t,o){512&o[0]&&c!==(c=t[9][t[87]]+"")&&_(n,c),8192&o[0]&&d!==(d=t[84][`${t[87]}_description`]+"")&&_(i,d),8192&o[0]&&v(e,"done",t[84][`${t[87]}_done`])},d(t){t&&l(e)}}}function it(t){let e,n,o=["plan","do","check","act"],i=[];for(let e=0;e<4;e+=1)i[e]=ot(R(t,o,e));return{c(){e=s("div");for(let t=0;t<4;t+=1)i[t].c();n=p(),h(e,"class","pack-summary")},m(t,o){a(t,e,o);for(let t=0;t<4;t+=1)i[t]&&i[t].m(e,null);r(e,n)},p(t,c){if(8704&c[0]){let r;for(o=["plan","do","check","act"],r=0;r<4;r+=1){const a=R(t,o,r);i[r]?i[r].p(a,c):(i[r]=ot(a),i[r].c(),i[r].m(e,n))}for(;r<4;r+=1)i[r].d(1)}},d(t){t&&l(e),d(i,t)}}}function ct(t){let e,n,i,c,g,m,y,v,j,w,b,$,D,x,I,P,E,S,N,O,T,C,L,M,A,U,J,z,K,B,G,W,q,R,Z,H,V,Q,ot,ct,rt,at,lt,dt,st,ut,pt,ft,ht,gt,_t,mt,kt,yt,vt,jt,wt,bt,$t,Dt,xt,It,Pt,Et,St,Nt,Ot,Tt,Ct,Lt,Mt=t[81].name+"",At=t[81].user_id+"",Ut=t[9].editName+"",Jt=t[3]?"▲":"▼",zt=t[9].delete+"",Kt=t[9].update+"",Bt=t[81].description+"",Gt=t[9].editDescription+"",Wt=t[1]?"▲":"▼",qt=t[81].kpi+"",Ft="★".repeat(t[81].difficulty)+"",Rt=t[81].due_date+"",Yt=t[9].editDueDate+"",Zt=t[2]?"▲":"▼",Ht=t[30](t[81])+"",Vt=t[30](t[81])+"",Qt=t[9].packsSummary+"",Xt=t[3]&&X(t);function te(){return t[43](t[81])}function ee(){return t[44](t[81])}let ne=t[1]&&tt(t);function oe(){return t[47](t[81],t[95],t[96])}function ie(){return t[48](t[81],t[95],t[96])}function ce(){return t[49](t[81],t[95],t[96])}function re(){return t[50](t[81],t[95],t[96])}let ae=t[2]&&et(t),le=Array(10),de=[];for(let e=0;e<le.length;e+=1)de[e]=nt(Y(t,le,e));let se=t[81].packs,ue=[];for(let e=0;e<se.length;e+=1)ue[e]=it(F(t,se,e));return{c(){e=s("div"),n=s("h3"),i=u(Mt),c=u(": user id: "),g=u(At),m=p(),y=s("button"),v=u(Ut),j=p(),w=u(Jt),b=p(),Xt&&Xt.c(),$=p(),D=s("button"),x=u(zt),I=p(),P=s("button"),E=u(Kt),S=p(),N=s("p"),O=u(Bt),T=p(),C=s("button"),L=u(Gt),M=p(),A=u(Wt),U=p(),ne&&ne.c(),J=p(),z=s("p"),K=u("KPI: "),B=u(qt),G=p(),W=s("button"),W.textContent="+",q=p(),R=s("button"),R.textContent="-",Z=p(),H=s("p"),V=u("Difficulty: "),Q=s("span"),ot=u(Ft),ct=p(),rt=s("button"),rt.textContent="+",at=p(),lt=s("button"),lt.textContent="-",dt=p(),st=s("p"),ut=u("Due Date: "),pt=u(Rt),ft=p(),ht=s("button"),gt=u(Yt),_t=p(),mt=u(Zt),kt=p(),ae&&ae.c(),yt=p(),vt=s("p"),jt=u("Progress: "),wt=u(Ht),bt=u("%"),$t=p(),Dt=s("div"),xt=u(Vt),It=u("%\n                ");for(let t=0;t<de.length;t+=1)de[t].c();Pt=p(),Et=s("div"),St=s("h4"),Nt=u(Qt),Ot=p();for(let t=0;t<ue.length;t+=1)ue[t].c();Tt=p(),h(Q,"class","stars svelte-1yythv4"),h(Dt,"class","progress-bar svelte-1yythv4"),k(Dt,"width",t[30](t[81])+"%"),h(Et,"class","project-summary"),h(e,"class","project")},m(o,l){a(o,e,l),r(e,n),r(n,i),r(n,c),r(n,g),r(e,m),r(e,y),r(y,v),r(y,j),r(y,w),r(e,b),Xt&&Xt.m(e,null),r(e,$),r(e,D),r(D,x),r(e,I),r(e,P),r(P,E),r(e,S),r(e,N),r(N,O),r(e,T),r(e,C),r(C,L),r(C,M),r(C,A),r(e,U),ne&&ne.m(e,null),r(e,J),r(e,z),r(z,K),r(z,B),r(e,G),r(e,W),r(e,q),r(e,R),r(e,Z),r(e,H),r(H,V),r(H,Q),r(Q,ot),r(e,ct),r(e,rt),r(e,at),r(e,lt),r(e,dt),r(e,st),r(st,ut),r(st,pt),r(e,ft),r(e,ht),r(ht,gt),r(ht,_t),r(ht,mt),r(e,kt),ae&&ae.m(e,null),r(e,yt),r(e,vt),r(vt,jt),r(vt,wt),r(vt,bt),r(e,$t),r(e,Dt),r(Dt,xt),r(Dt,It);for(let t=0;t<de.length;t+=1)de[t]&&de[t].m(Dt,null);r(e,Pt),r(e,Et),r(Et,St),r(St,Nt),r(Et,Ot);for(let t=0;t<ue.length;t+=1)ue[t]&&ue[t].m(Et,null);r(e,Tt),Ct||(Lt=[f(y,"click",t[41]),f(D,"click",te),f(P,"click",ee),f(C,"click",t[45]),f(W,"click",oe),f(R,"click",ie),f(rt,"click",ce),f(lt,"click",re),f(ht,"click",t[51])],Ct=!0)},p(n,o){if(t=n,8192&o[0]&&Mt!==(Mt=t[81].name+"")&&_(i,Mt),8192&o[0]&&At!==(At=t[81].user_id+"")&&_(g,At),512&o[0]&&Ut!==(Ut=t[9].editName+"")&&_(v,Ut),8&o[0]&&Jt!==(Jt=t[3]?"▲":"▼")&&_(w,Jt),t[3]?Xt?Xt.p(t,o):(Xt=X(t),Xt.c(),Xt.m(e,$)):Xt&&(Xt.d(1),Xt=null),512&o[0]&&zt!==(zt=t[9].delete+"")&&_(x,zt),512&o[0]&&Kt!==(Kt=t[9].update+"")&&_(E,Kt),8192&o[0]&&Bt!==(Bt=t[81].description+"")&&_(O,Bt),512&o[0]&&Gt!==(Gt=t[9].editDescription+"")&&_(L,Gt),2&o[0]&&Wt!==(Wt=t[1]?"▲":"▼")&&_(A,Wt),t[1]?ne?ne.p(t,o):(ne=tt(t),ne.c(),ne.m(e,J)):ne&&(ne.d(1),ne=null),8192&o[0]&&qt!==(qt=t[81].kpi+"")&&_(B,qt),8192&o[0]&&Ft!==(Ft="★".repeat(t[81].difficulty)+"")&&_(ot,Ft),8192&o[0]&&Rt!==(Rt=t[81].due_date+"")&&_(pt,Rt),512&o[0]&&Yt!==(Yt=t[9].editDueDate+"")&&_(gt,Yt),4&o[0]&&Zt!==(Zt=t[2]?"▲":"▼")&&_(mt,Zt),t[2]?ae?ae.p(t,o):(ae=et(t),ae.c(),ae.m(e,yt)):ae&&(ae.d(1),ae=null),8192&o[0]&&Ht!==(Ht=t[30](t[81])+"")&&_(wt,Ht),8192&o[0]&&Vt!==(Vt=t[30](t[81])+"")&&_(xt,Vt),1073750016&o[0]){let e;for(le=Array(10),e=0;e<le.length;e+=1){const n=Y(t,le,e);de[e]?de[e].p(n,o):(de[e]=nt(n),de[e].c(),de[e].m(Dt,null))}for(;e<de.length;e+=1)de[e].d(1);de.length=le.length}if(8192&o[0]&&k(Dt,"width",t[30](t[81])+"%"),512&o[0]&&Qt!==(Qt=t[9].packsSummary+"")&&_(Nt,Qt),8704&o[0]){let e;for(se=t[81].packs,e=0;e<se.length;e+=1){const n=F(t,se,e);ue[e]?ue[e].p(n,o):(ue[e]=it(n),ue[e].c(),ue[e].m(Et,null))}for(;e<ue.length;e+=1)ue[e].d(1);ue.length=se.length}},d(t){t&&l(e),Xt&&Xt.d(),ne&&ne.d(),ae&&ae.d(),d(de,t),d(ue,t),Ct=!1,o(Lt)}}}function rt(t){let e,n,i,c,g,k,v,j,w,b,$,D,x,I,P,E,N,O,T,C,L,M,A,U,J,z,B,G,q,F,R,Y,Z,H,V,Q,X,tt,et=t[9].createPack+"",nt=t[9].addPack+"",ot=t[9].existingPacks+"",it=t[13],ct=[];for(let e=0;e<it.length;e+=1)ct[e]=at(W(t,it,e));let rt=t[12],lt=[];for(let e=0;e<rt.length;e+=1)lt[e]=st(K(t,rt,e));return{c(){e=s("h2"),n=u(et),i=p(),c=s("select");for(let t=0;t<ct.length;t+=1)ct[t].c();g=p(),k=s("div"),v=s("div"),j=u("pack plan_description: "),w=s("input"),$=p(),D=s("div"),x=u("pack do_description: "),I=s("input"),E=p(),N=s("div"),O=u("pack check_description: "),T=s("input"),L=p(),M=s("div"),A=u("pack act_description: "),U=s("input"),z=p(),B=s("input"),q=p(),F=s("button"),R=u(nt),Y=p(),Z=s("h2"),H=u(ot),V=p(),Q=s("div");for(let t=0;t<lt.length;t+=1)lt[t].c();void 0===t[11].project_id&&S((()=>t[53].call(c))),h(w,"type","text"),h(w,"placeholder",b=t[9].planDescription),h(w,"maxlength","300"),h(I,"type","text"),h(I,"placeholder",P=t[9].doDescription),h(I,"maxlength","300"),h(T,"type","text"),h(T,"placeholder",C=t[9].checkDescription),h(T,"maxlength","300"),h(U,"type","text"),h(U,"placeholder",J=t[9].actDescription),h(U,"maxlength","300"),h(B,"type","datetime-local"),h(B,"placeholder",G=t[9].packDueDate),h(Q,"class","pack-list")},m(o,l){a(o,e,l),r(e,n),a(o,i,l),a(o,c,l);for(let t=0;t<ct.length;t+=1)ct[t]&&ct[t].m(c,null);y(c,t[11].project_id,!0),a(o,g,l),a(o,k,l),r(k,v),r(v,j),r(v,w),m(w,t[11].plan_description),r(k,$),r(k,D),r(D,x),r(D,I),m(I,t[11].do_description),r(k,E),r(k,N),r(N,O),r(N,T),m(T,t[11].check_description),r(k,L),r(k,M),r(M,A),r(M,U),m(U,t[11].act_description),r(k,z),r(k,B),m(B,t[11].due_date),r(k,q),r(k,F),r(F,R),a(o,Y,l),a(o,Z,l),r(Z,H),a(o,V,l),a(o,Q,l);for(let t=0;t<lt.length;t+=1)lt[t]&&lt[t].m(Q,null);X||(tt=[f(c,"change",t[53]),f(w,"input",t[54]),f(I,"input",t[55]),f(T,"input",t[56]),f(U,"input",t[57]),f(B,"input",t[58]),f(B,"change",t[27]),f(F,"click",t[28])],X=!0)},p(t,e){if(512&e[0]&&et!==(et=t[9].createPack+"")&&_(n,et),8192&e[0]){let n;for(it=t[13],n=0;n<it.length;n+=1){const o=W(t,it,n);ct[n]?ct[n].p(o,e):(ct[n]=at(o),ct[n].c(),ct[n].m(c,null))}for(;n<ct.length;n+=1)ct[n].d(1);ct.length=it.length}if(10240&e[0]&&y(c,t[11].project_id),512&e[0]&&b!==(b=t[9].planDescription)&&h(w,"placeholder",b),10240&e[0]&&w.value!==t[11].plan_description&&m(w,t[11].plan_description),512&e[0]&&P!==(P=t[9].doDescription)&&h(I,"placeholder",P),10240&e[0]&&I.value!==t[11].do_description&&m(I,t[11].do_description),512&e[0]&&C!==(C=t[9].checkDescription)&&h(T,"placeholder",C),10240&e[0]&&T.value!==t[11].check_description&&m(T,t[11].check_description),512&e[0]&&J!==(J=t[9].actDescription)&&h(U,"placeholder",J),10240&e[0]&&U.value!==t[11].act_description&&m(U,t[11].act_description),512&e[0]&&G!==(G=t[9].packDueDate)&&h(B,"placeholder",G),10240&e[0]&&m(B,t[11].due_date),512&e[0]&&nt!==(nt=t[9].addPack+"")&&_(R,nt),512&e[0]&&ot!==(ot=t[9].existingPacks+"")&&_(H,ot),587469441&e[0]|2&e[1]){let n;for(rt=t[12],n=0;n<rt.length;n+=1){const o=K(t,rt,n);lt[n]?lt[n].p(o,e):(lt[n]=st(o),lt[n].c(),lt[n].m(Q,null))}for(;n<lt.length;n+=1)lt[n].d(1);lt.length=rt.length}},d(t){t&&l(e),t&&l(i),t&&l(c),d(ct,t),t&&l(g),t&&l(k),t&&l(Y),t&&l(Z),t&&l(V),t&&l(Q),d(lt,t),X=!1,o(tt)}}}function at(t){let e,n,o,i=t[81].name+"";return{c(){e=s("option"),n=u(i),e.__value=o=t[81].id,e.value=e.__value},m(t,o){a(t,e,o),r(e,n)},p(t,c){8192&c[0]&&i!==(i=t[81].name+"")&&_(n,i),8192&c[0]&&o!==(o=t[81].id)&&(e.__value=o,e.value=e.__value)},d(t){t&&l(e)}}}function lt(t){let e,n,o,i,c,d,g,m,k=t[90].description+"",y=t[9].delete+"";function v(){return t[61](t[90])}return{c(){e=s("a"),n=u(k),i=p(),c=s("button"),d=u(y),h(e,"href",o=t[90].url),h(e,"target","_blank")},m(t,o){a(t,e,o),r(e,n),a(t,i,o),a(t,c,o),r(c,d),g||(m=f(c,"click",v),g=!0)},p(i,c){t=i,4096&c[0]&&k!==(k=t[90].description+"")&&_(n,k),4096&c[0]&&o!==(o=t[90].url)&&h(e,"href",o),512&c[0]&&y!==(y=t[9].delete+"")&&_(d,y)},d(t){t&&l(e),t&&l(i),t&&l(c),g=!1,m()}}}function dt(t){let e,n,c,g,y,j,w,b,$,D,x,I,P,E,S,N,O,T,C,L,M,A,U,J,z,K,B,W,q=t[9].done+"",F=t[9][t[87]]+"",R=t[84][`${t[87]}_description`]+"",Y=t[9].addLink+"",Z=t[0]?"▲":"▼",H=t[9].addLink+"";function V(){return t[60](t[84],t[87])}let Q=t[84][t[87]].links||[],X=[];for(let e=0;e<Q.length;e+=1)X[e]=lt(G(t,Q,e));return{c(){e=s("div"),n=s("button"),c=u(q),g=p(),y=s("p"),j=u(F),w=u(": "),b=u(R),$=p();for(let t=0;t<X.length;t+=1)X[t].c();D=p(),x=s("div"),I=s("button"),P=u(Y),E=p(),S=u(Z),N=p(),O=s("div"),T=s("form"),C=s("input"),M=p(),A=s("input"),J=p(),z=s("button"),K=u(H),h(I,"class","link-create-mode"),h(C,"type","text"),h(C,"placeholder",L=t[9].linkURL),h(C,"minlength","1"),h(C,"maxlength","300"),h(A,"type","text"),h(A,"placeholder",U=t[9].linkDescription),h(A,"minlength","1"),h(A,"maxlength","300"),h(z,"type","submit"),h(O,"class","link-form"),k(O,"display",t[0]?"block":"none"),h(x,"class","link-add svelte-1yythv4"),h(e,"class","svelte-1yythv4"),v(e,"done",t[84][`${t[87]}_done`])},m(o,l){a(o,e,l),r(e,n),r(n,c),r(e,g),r(e,y),r(y,j),r(y,w),r(y,b),r(e,$);for(let t=0;t<X.length;t+=1)X[t]&&X[t].m(e,null);var d;r(e,D),r(e,x),r(x,I),r(I,P),r(I,E),r(I,S),r(x,N),r(x,O),r(O,T),r(T,C),m(C,t[7].url),r(T,M),r(T,A),m(A,t[7].description),r(T,J),r(T,z),r(z,K),B||(W=[f(n,"click",V),f(I,"click",t[62]),f(C,"input",t[63]),f(A,"input",t[64]),f(T,"submit",(d=function(){i(t[18](t[84].id,t[87]))&&t[18](t[84].id,t[87]).apply(this,arguments)},function(t){return t.preventDefault(),d.call(this,t)}))],B=!0)},p(n,o){if(t=n,512&o[0]&&q!==(q=t[9].done+"")&&_(c,q),512&o[0]&&F!==(F=t[9][t[87]]+"")&&_(j,F),4096&o[0]&&R!==(R=t[84][`${t[87]}_description`]+"")&&_(b,R),33559040&o[0]){let n;for(Q=t[84][t[87]].links||[],n=0;n<Q.length;n+=1){const i=G(t,Q,n);X[n]?X[n].p(i,o):(X[n]=lt(i),X[n].c(),X[n].m(e,D))}for(;n<X.length;n+=1)X[n].d(1);X.length=Q.length}512&o[0]&&Y!==(Y=t[9].addLink+"")&&_(P,Y),1&o[0]&&Z!==(Z=t[0]?"▲":"▼")&&_(S,Z),512&o[0]&&L!==(L=t[9].linkURL)&&h(C,"placeholder",L),128&o[0]&&C.value!==t[7].url&&m(C,t[7].url),512&o[0]&&U!==(U=t[9].linkDescription)&&h(A,"placeholder",U),128&o[0]&&A.value!==t[7].description&&m(A,t[7].description),512&o[0]&&H!==(H=t[9].addLink+"")&&_(K,H),1&o[0]&&k(O,"display",t[0]?"block":"none"),4096&o[0]&&v(e,"done",t[84][`${t[87]}_done`])},d(t){t&&l(e),d(X,t),B=!1,o(W)}}}function st(t){let e,n,o,i,c,g,m,k,y,v,j,w,b=t[9].delete+"",$=t[32](t[84].project_id)+"";function D(){return t[59](t[84])}let x=["plan","do","check","act"],I=[];for(let e=0;e<4;e+=1)I[e]=dt(B(t,x,e));return{c(){e=s("div"),n=s("div"),o=s("button"),i=u("pack "),c=u(b),g=p(),m=s("h3"),k=u($),y=p();for(let t=0;t<4;t+=1)I[t].c();v=p(),h(n,"class","pack_delete svelte-1yythv4"),h(e,"class","pack")},m(t,l){a(t,e,l),r(e,n),r(n,o),r(o,i),r(o,c),r(e,g),r(e,m),r(m,k),r(e,y);for(let t=0;t<4;t+=1)I[t]&&I[t].m(e,null);r(e,v),j||(w=f(o,"click",D),j=!0)},p(n,o){if(t=n,512&o[0]&&b!==(b=t[9].delete+"")&&_(c,b),4096&o[0]&&$!==($=t[32](t[84].project_id)+"")&&_(k,$),570692225&o[0]){let n;for(x=["plan","do","check","act"],n=0;n<4;n+=1){const i=B(t,x,n);I[n]?I[n].p(i,o):(I[n]=dt(i),I[n].c(),I[n].m(e,v))}for(;n<4;n+=1)I[n].d(1)}},d(t){t&&l(e),d(I,t),j=!1,w()}}}function ut(t){let e,n,o,i,c=t[9].progress+"",f=t[13],g=[];for(let e=0;e<f.length;e+=1)g[e]=pt(z(t,f,e));return{c(){e=s("h2"),n=u(c),o=p(),i=s("div");for(let t=0;t<g.length;t+=1)g[t].c();h(i,"class","progress")},m(t,c){a(t,e,c),r(e,n),a(t,o,c),a(t,i,c);for(let t=0;t<g.length;t+=1)g[t]&&g[t].m(i,null)},p(t,e){if(512&e[0]&&c!==(c=t[9].progress+"")&&_(n,c),1073750016&e[0]){let n;for(f=t[13],n=0;n<f.length;n+=1){const o=z(t,f,n);g[n]?g[n].p(o,e):(g[n]=pt(o),g[n].c(),g[n].m(i,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=f.length}},d(t){t&&l(e),t&&l(o),t&&l(i),d(g,t)}}}function pt(t){let e,n,o,i,c,d,f,g,m,k,y,v=t[81].name+"",j=t[30](t[81])+"";return{c(){e=s("div"),n=s("h3"),o=u(v),i=p(),c=s("progress"),f=p(),g=s("div"),m=u(j),k=u("%"),y=p(),h(c,"max","100"),c.value=d=t[30](t[81]),h(e,"class","progress-item")},m(t,l){a(t,e,l),r(e,n),r(n,o),r(e,i),r(e,c),r(e,f),r(e,g),r(g,m),r(g,k),r(e,y)},p(t,e){8192&e[0]&&v!==(v=t[81].name+"")&&_(o,v),8192&e[0]&&d!==(d=t[30](t[81]))&&(c.value=d),8192&e[0]&&j!==(j=t[30](t[81])+"")&&_(m,j)},d(t){t&&l(e)}}}function ft(e){let n,i,c,d,h,g,m,k,y,v,j,w,b,$,D,x,I,P,E,S,N,O,T,C,L,M,A,U,J,z,K,B,G,W,q=e[9].projectManagement+"",F=e[9].packManagement+"",R=e[9].progressManagement+"",Y=function(e){let n,i,c,r,d,u,h,g,_,m,k;return{c(){n=s("button"),n.textContent="Test create project",i=p(),c=s("button"),c.textContent="Test create pack",r=p(),d=s("button"),d.textContent="Test create link",u=p(),h=s("button"),h.textContent="All test functions",g=p(),_=s("button"),_.textContent="initializeDatabase"},m(t,o){a(t,n,o),a(t,i,o),a(t,c,o),a(t,r,o),a(t,d,o),a(t,u,o),a(t,h,o),a(t,g,o),a(t,_,o),m||(k=[f(n,"click",e[14]),f(c,"click",e[15]),f(d,"click",e[16]),f(h,"click",e[19]),f(_,"click",mt)],m=!0)},p:t,d(t){t&&l(n),t&&l(i),t&&l(c),t&&l(r),t&&l(d),t&&l(u),t&&l(h),t&&l(g),t&&l(_),m=!1,o(k)}}}(e);function Q(t,e){return"Logged in"===t[4]?H:Z}let X=Q(e),tt=X(e),et="projects"===e[8]&&V(e),nt="packs"===e[8]&&rt(e),ot="progress"===e[8]&&ut(e);return{c(){n=s("header"),i=s("div"),c=u("auth_login_result: "),d=u(e[4]),h=p(),g=s("div"),m=u("auth_uid: "),k=u(e[5]),y=p(),v=s("div"),j=u("auth_user_id: "),w=u(e[6]),b=p(),$=s("div"),$.textContent=`web_endpoint: ${ht}`,D=p(),Y&&Y.c(),x=p(),tt.c(),I=u("\n    auth_login_result: "),P=u(e[4]),E=p(),S=s("nav"),N=s("button"),O=u(q),T=p(),C=s("button"),L=u(F),M=p(),A=s("button"),U=u(R),J=p(),et&&et.c(),z=p(),nt&&nt.c(),K=p(),ot&&ot.c(),B=u("")},m(t,o){a(t,n,o),r(n,i),r(i,c),r(i,d),r(n,h),r(n,g),r(g,m),r(g,k),r(n,y),r(n,v),r(v,j),r(v,w),r(n,b),r(n,$),r(n,D),Y&&Y.m(n,null),r(n,x),tt.m(n,null),r(n,I),r(n,P),a(t,E,o),a(t,S,o),r(S,N),r(N,O),r(S,T),r(S,C),r(C,L),r(S,M),r(S,A),r(A,U),a(t,J,o),et&&et.m(t,o),a(t,z,o),nt&&nt.m(t,o),a(t,K,o),ot&&ot.m(t,o),a(t,B,o),G||(W=[f(N,"click",e[33]),f(C,"click",e[34]),f(A,"click",e[35])],G=!0)},p(t,e){16&e[0]&&_(d,t[4]),32&e[0]&&_(k,t[5]),64&e[0]&&_(w,t[6]),X===(X=Q(t))&&tt?tt.p(t,e):(tt.d(1),tt=X(t),tt&&(tt.c(),tt.m(n,I))),16&e[0]&&_(P,t[4]),512&e[0]&&q!==(q=t[9].projectManagement+"")&&_(O,q),512&e[0]&&F!==(F=t[9].packManagement+"")&&_(L,F),512&e[0]&&R!==(R=t[9].progressManagement+"")&&_(U,R),"projects"===t[8]?et?et.p(t,e):(et=V(t),et.c(),et.m(z.parentNode,z)):et&&(et.d(1),et=null),"packs"===t[8]?nt?nt.p(t,e):(nt=rt(t),nt.c(),nt.m(K.parentNode,K)):nt&&(nt.d(1),nt=null),"progress"===t[8]?ot?ot.p(t,e):(ot=ut(t),ot.c(),ot.m(B.parentNode,B)):ot&&(ot.d(1),ot=null)},i:t,o:t,d(t){t&&l(n),Y&&Y.d(),tt.d(),t&&l(E),t&&l(S),t&&l(J),et&&et.d(t),t&&l(z),nt&&nt.d(t),t&&l(K),ot&&ot.d(t),t&&l(B),G=!1,o(W)}}}let ht="http://localhost:8000/app7";function gt(t){return new Date(t).toISOString()}function _t(t){return t.slice(0,16)}async function mt(){try{const t=await fetch(ht+"/init_db",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"init"})}),e=await t.json();console.log("Database initialized:",e)}catch(t){console.error("Error initializing database:",t)}}function kt(t,e,n){let o=!1,i=!1,c=!1,r=!1;async function a(){const t=["44444","55555","66666"];for(const e of t)n(10,S=Object.assign(S,{name:e+"Test Project"+e,description:e+"Test Description"+e,kpi:Math.floor(101*Math.random()),due_date:(new Date).toISOString(),difficulty:Math.floor(5*Math.random())+1})),await s()}async function l(){const t=["11111","22222","33333"];for(const e of t)n(11,N=Object.assign(N,{project_id:1,plan_description:"Test Plan"+e,plan_done:1,do_description:"Test Do"+e,do_done:0,check_description:"Test Check"+e,check_done:1,act_description:"Test Act"+e,act_done:0,due_date:(new Date).toISOString()})),await u()}async function d(){n(7,v={url:"https://www.google.com",description:"Google"}),p(1,"plan"),n(7,v={url:"https://www.yahoo.co.jp",description:"Yahoo"}),p(1,"plan"),n(7,v={url:"https://www.bing.com",description:"Bing"}),p(3,"check")}async function s(){try{console.log("Creating project:",S),!m&&(f.push("Error creating project: No UID"),console.error("Error creating project: No UID"));const t=h.validateProject(S);if(f.push(...t),f.length>0)return void console.error("Error creating project:",f);const e=await fetch(`${ht}/create_projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:S.name,description:S.description,kpi:S.kpi,due_date:gt(S.due_date),difficulty:S.difficulty,uid:m})});if(!e.ok){const t=await e.json();return void console.error("Error creating project:",t.errors)}const n=await e.json();console.log("Project created with ID:",n.id)}catch(t){console.error("Error creating project:",t)}}async function u(){try{!m&&(f.push("Error creating pack: No UID"),console.error("Error creating pack: No UID"));const t=h.validatePack(N);f.push(...t),!(f.length>0)&&(()=>{throw new Error("Error creating pack:",f)})();const e=await fetch(ht+"/create_packs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project_id:N.project_id,plan_description:N.plan_description,plan_done:N.plan_done,do_description:N.do_description,do_done:N.do_done,check_description:N.check_description,check_done:N.check_done,act_description:N.act_description,act_done:N.act_done,uid:m,due_date:gt(N.due_date)})});if(!e.ok){const t=await e.json();return void console.error("Error creating pack:",t.errors)}const n=await e.json();console.log("Pack created with ID:",n.id)}catch(t){console.error("Error creating pack:",t)}}async function p(t,e){try{console.log({pack_id:t,url:v.url,description:v.description,stage:e,uid:m}),console.log("1"),!m&&(()=>{throw new Error("auth_uid is required")})(),console.log("2"),n(7,v.stage=e,v);const o=h.validateLink(v);console.log("3"),console.log("valid_errors",o),console.log("4"),o.length>0&&(()=>{throw new Error("Error creating link:",o)})(),console.log("5");const i=await fetch(ht+"/create_links",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pack_id:t,url:v.url,description:v.description,stage:v.stage,uid:m})});if(!i.ok){console.log("6");const t=await i.json();return void console.error("Error creating link:",t.errors)}const c=await i.json();console.log("Link created with ID:",c.id),n(7,v={url:"",description:"",stage:""})}catch(t){console.log("7"),console.log(t)}}let f=[];const h={validateUser:t=>{const e=[];return/^[a-zA-Z0-9_-]{28}$/.test(t)||e.push("Invalid UID format"),e},validateProject:t=>{const e=[];return("string"!=typeof t.name||t.name.length<1||t.name.length>50)&&e.push("Invalid project name"),("string"!=typeof t.description||t.description.length<1||t.description.length>300)&&e.push("Invalid project description"),(!Number.isInteger(t.kpi)||t.kpi<0||t.kpi>100)&&e.push("Invalid project KPI"),isNaN(Date.parse(t.due_date))&&e.push("Invalid project due date"),(!Number.isInteger(t.difficulty)||t.difficulty<1||t.difficulty>5)&&e.push("Invalid project difficulty"),e},validatePack:t=>{const e=[];("string"!=typeof t.plan_description||t.plan_description.length<1||t.plan_description.length>300)&&e.push("Invalid plan description"),[0,1].includes(t.plan_done)||e.push("Invalid plan done value"),("string"!=typeof t.do_description||t.do_description.length<1||t.do_description.length>300)&&e.push("Invalid do description"),[0,1].includes(t.do_done)||e.push("Invalid do done value"),("string"!=typeof t.check_description||t.check_description.length<1||t.check_description.length>300)&&e.push("Invalid check description"),[0,1].includes(t.check_done)||e.push("Invalid check done value"),("string"!=typeof t.act_description||t.act_description.length<1||t.act_description.length>300)&&e.push("Invalid act description"),[0,1].includes(t.act_done)||e.push("Invalid act done value");return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(t.due_date)||e.push("Invalid pack due date format. Must be ISO 8601 format."),e},validateLink:t=>{const e=[];return("string"!=typeof t.url||t.url.length<1||t.url.length>300||!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(t.url))&&e.push("Invalid URL"),("string"!=typeof t.description||t.description.length<1||t.description.length>300)&&e.push("Invalid link description"),["plan","do","check","act"].includes(t.stage)||e.push("Invalid stage"),e}};let _="Not logged in",m=null,k=null,y=[],v={url:"",description:"",stage:""};firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const j=new firebase.auth.GoogleAuthProvider;async function w(){try{console.log("Fetching data...",m);const t=await fetch(ht+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:m})});y=await t.json(),n(13,[T,O,k]=[y.projects_and_packs,y.packs,y.user_id],T,n(12,O),n(6,k))}catch(t){console.error("Error fetching data:",t)}}async function $(t){try{const e=await fetch(`${ht}/delete_projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project_id:t,uid:m})});if(!e.ok)throw new Error("Network response was not ok");const n=await e.json();console.log("Project successfully deleted:",n)}catch(t){console.error("Error deleting project:",t)}}async function D(t){try{const e=await fetch(`${ht}/delete_packs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pack_id:t,uid:m})});if(!e.ok)throw new Error("Network response was not ok");const n=await e.json();console.log("Pack successfully deleted:",n)}catch(t){console.error("Error deleting pack:",t)}}async function x(t){try{const e=await fetch(`${ht}/delete_links`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({link_id:t,uid:m})});if(!e.ok)throw new Error("Network response was not ok");const n=await e.json();console.log("Link successfully deleted:",n)}catch(t){console.error("Error deleting link:",t)}}async function I(t){try{!m&&(f.push("Error updating project: No UID"),console.error("Error updating project: No UID"));const e=T.find((e=>e.id===t)),n=h.validateProject(e);if(f.push(...n),f.length>0)return void console.error("Error updating project:",f);const o=await fetch(`${ht}/update_projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({project_id:t,name:e.name,description:e.description,kpi:e.kpi,due_date:gt(e.due_date),difficulty:e.difficulty,uid:m})});if(!o.ok)throw new Error("Network response was not ok");const i=await o.json();console.log("Project successfully updated:",i)}catch(t){console.error("Error updating project:",t)}}let P="projects",E={},S={name:"",description:"",kpi:0,due_date:(new Date).toISOString().slice(0,16),difficulty:3},N={project_id:null,plan_description:"",plan_done:0,do_description:"",do_done:0,check_description:"",check_done:0,act_description:"",act_done:0,due_date:(new Date).toISOString().slice(0,16)};let O=[],T=[];function C(t,e){n(12,O=O.map((n=>(n.id===t&&(n[`${e}_done`]=n[`${e}_done`]?0:1),n))));const o=O.find((e=>e.id===t)).project_id,i=M(t);O.find((e=>e.id===t));const c=T.find((t=>t.id===o));if(c.packs=c.packs.map((n=>(n.id===t&&(n[`${e}_done`]=n[`${e}_done`]?0:1),n))),100===i){const t=T.find((t=>t.id===o));t.difficulty=Math.max(1,t.difficulty-1)}if(0===i){const t=T.find((t=>t.id===o));t.difficulty=Math.min(5,t.difficulty+1)}}b((async()=>{n(9,E=await(async()=>{const t=await fetch("pdca_lang.json");return await t.json()})()),await async function(){try{const t=await new Promise(((t,e)=>{firebase.auth().onAuthStateChanged(t,e)}));console.log("Current user:",t);const e=t;e?(n(4,_="Logged in"),n(5,m=e.uid)):(n(4,_="Not logged in"),n(4,_="Logged in"))}catch(t){console.error("Error during authentication:",t),n(4,_="Authentication failed"),n(5,m="")}}(),await w()}));const L=t=>n(8,P=t),M=t=>{const e=["plan","do","check","act"],n=O.find((e=>e.id===t));return e.filter((t=>n[t].done)).length/e.length*100};return(async()=>{})(),[o,i,c,r,_,m,k,v,P,E,S,N,O,T,a,l,d,s,p,async function(){await a(),await l(),await d()},async function(){try{const t=(await firebase.auth().signInWithPopup(j)).user;n(4,_=`Logged in as: ${t.displayName}`)}catch(t){console.error("Error during Google login:",t),alert("Google login failed. "+t.message)}},async function(){try{await firebase.auth().signOut(),n(4,_="Not logged in")}catch(t){console.error("Error during sign-out:",t),alert("Sign out failed. "+t.message)}},w,$,D,x,I,t=>{const e=new Date(t.target.value);n(11,N.due_date=e.toISOString(),N)},async function(){try{await u(),n(12,O=[...O,N]),n(11,N={plan_description:"",plan_done:0,do_description:"",do_done:0,check_description:"",check_done:0,act_description:"",act_done:0,due_date:_t((new Date).toISOString())})}catch(t){console.error("Error adding pack:",t)}},C,t=>{const e=t.packs,n=e.filter((e=>e.project_id===t.id)).length,o=e.filter((e=>e.project_id===t.id&&e.plan_done&&e.do_done&&e.check_done&&e.act_done)).length;return 0===n?0:Math.round(o/n*100)},L,t=>{const e=T.find((e=>e.id===t));return e?e.name:""},()=>L("projects"),()=>L("packs"),()=>L("progress"),function(){S.name=this.value,n(10,S)},function(){S.description=this.value,n(10,S)},function(){S.kpi=g(this.value),n(10,S)},function(){S.due_date=this.value,n(10,S)},function(){S.difficulty=g(this.value),n(10,S)},()=>n(3,r=!r),(t,e,o,i)=>n(13,e[o].name=i.target.value,T),t=>$(t.id),t=>I(t.id),()=>n(1,i=!i),(t,e,o,i)=>n(13,e[o].description=i.target.value,T),(t,e,o)=>n(13,e[o].kpi=Math.min(100,t.kpi+1),T),(t,e,o)=>n(13,e[o].kpi=Math.max(0,t.kpi-1),T),(t,e,o)=>n(13,e[o].difficulty=Math.min(5,t.difficulty+1),T),(t,e,o)=>n(13,e[o].difficulty=Math.max(1,t.difficulty-1),T),()=>n(2,c=!c),(t,e,o,i)=>n(13,e[o].due_date=_t(i.target.value),T),function(){N.project_id=function(t){const e=t.querySelector(":checked");return e&&e.__value}(this),n(11,N),n(13,T)},function(){N.plan_description=this.value,n(11,N),n(13,T)},function(){N.do_description=this.value,n(11,N),n(13,T)},function(){N.check_description=this.value,n(11,N),n(13,T)},function(){N.act_description=this.value,n(11,N),n(13,T)},function(){N.due_date=this.value,n(11,N),n(13,T)},t=>D(t.id),(t,e)=>C(t.id,e),t=>x(t.id),()=>n(0,o=!o),function(){v.url=this.value,n(7,v)},function(){v.description=this.value,n(7,v)}]}return new class extends J{constructor(t){super(),U(this,t,kt,ft,c,{},null,[-1,-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
