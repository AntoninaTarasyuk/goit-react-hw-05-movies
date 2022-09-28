"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{3522:function(n,t,e){e.d(t,{O:function(){return g}});var r,a,u,o,i=e(7689),c=e(8371),s=e(168),p=e(9549),f=p.Z.div(r||(r=(0,s.Z)(["\n  width: 100%;\n"]))),l=p.Z.h2(a||(a=(0,s.Z)(["\n  font-size: 18px;\n"]))),d=e(184),h=function(n){var t=n.movie,e=t.title,r=t.poster_path;return(0,d.jsxs)(f,{children:[(0,d.jsx)("img",{src:r?"".concat(c.HX)+r:"https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg",alt:e}),(0,d.jsx)(l,{children:e})]})},m=e(6731),x=p.Z.ul(u||(u=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-auto-rows: auto;\n  grid-gap: 20px;\n  justify-content: center;\n  margin: 20px auto;\n"]))),v=(0,p.Z)(m.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  color: #000000;\n"]))),g=function(n){var t=n.movies,e=(0,i.TH)();return(0,d.jsx)(x,{children:t.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(v,{to:"/movies/".concat(n.id),state:{from:e},children:(0,d.jsx)(h,{movie:n})})},n.id)}))})}},2703:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,u,o=e(5861),i=e(885),c=e(4687),s=e.n(c),p=e(2791),f=e(6731),l=e(7596),d=e(8371),h=e(3522),m=e(6355),x=e(168),v=e(9549),g=v.Z.form(r||(r=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n"]))),y=v.Z.input(a||(a=(0,x.Z)(["\n  padding: 8px 32px 8px 8px;\n  ackground-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #000000;\n  font: inherit;\n"]))),b=v.Z.button(u||(u=(0,x.Z)(["\n  position: absolute;\n  top: 11px;\n  right: 6px;\n  padding: 0;\n  border: none;\n  color: #000000;\n  background-color: transparent;\n  cursor: pointer;\n"]))),Z=e(184),w=function(n){var t=n.onSubmit,e=(0,p.useState)(""),r=(0,i.Z)(e,2),a=r[0],u=r[1];return(0,Z.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),t(a),""===a.trim())return u(""),l.Am.info("Please enter a search query");u("")},children:[(0,Z.jsx)(y,{type:"text",name:"searchQuery",placeholder:"Enter movie name",value:a,onChange:function(n){return u(n.target.value)}}),(0,Z.jsx)(b,{type:"submit",children:(0,Z.jsx)(m.U41,{})})]})},k=function(){var n,t=(0,p.useState)(null),e=(0,i.Z)(t,2),r=e[0],a=e[1],u=(0,f.lr)(),c=(0,i.Z)(u,2),m=c[0],x=c[1],v=null!==(n=m.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){function n(){return(n=(0,o.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===t.trim()){n.next=11;break}return n.prev=1,n.next=4,(0,d.oR)(t);case 4:e=n.sent,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error();case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}""!==v.trim()&&function(t){n.apply(this,arguments)}(v)}),[v]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{onSubmit:function(n){if(n===v)return l.Am.info("You just searched for ".concat(v,". Try searching for something else"));x(""!==n?{query:n}:{})}}),r&&(0,Z.jsx)(h.O,{movies:r})]})}},8371:function(n,t,e){e.d(t,{$h:function(){return f},HX:function(){return p},TP:function(){return x},jC:function(){return l},oR:function(){return h},tx:function(){return b},zv:function(){return g}});var r=e(5861),a=e(4687),u=e.n(a),o=e(4569),i=e.n(o);i().defaults.baseURL="https://api.themoviedb.org/3/";var c="86ce07b8f3d2976f0645a9d5066f9d40",s="api_key=".concat(c,"&language=en-US&include_adult=false"),p="https://image.tmdb.org/t/p/w500",f="https://image.tmdb.org/t/p/w200/";function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("trending/movie/day?".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("search/movie?query=".concat(t,"&page=1&").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("movie/".concat(t,"/credits?&api_key=").concat(c,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error();case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/reviews?&api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=703.12a95d8a.chunk.js.map