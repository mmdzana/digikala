(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4866],{3083:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[categoryCode]",function(){return n(56544)}])},11390:function(e,t,n){"use strict";n.d(t,{u:function(){return a}});var o=n(82075),r=n(8398),a=(0,n(1324).q)({url:function(e){var t=e.categoryCode;return"/dynamic-category-page/".concat("".concat(t).replace("category-",""),"/")},transformer:function(e){var t=e.data;return(0,o.r)({data:t,isDynamicCategory:!0})},inputTransformer:r.d,isPageGetRequest:!0})},48060:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var o=n(52322),r=n(15973),a=n(19587);function u(e){var t=e.ssrData,n=e.pending,u=(0,a.K)({data:null==t?void 0:t.data,widgetProps:{}});return(0,o.jsx)(r.E,{data:u,pending:n})}},56544:function(e,t,n){"use strict";n.r(t),n.d(t,{__getServerSideProps:function(){return _},default:function(){return P}});var o=n(40171),r=n(70865),a=n(96670),u=n(52322),c=n(5632),s=n(36913),i=n(51359),d=n(41701),g=n(41435),p=n(48060),l=n(6378),f=n(43252),y=n(24360),h=n(11390),m=["category-mobile-phone","category-notebook-netbook-ultrabook","category-book-and-magazines","category-perfume-all","2048","2050","2051","2052","2053","test-dynamic-cat","category-coffee","category-beauty"],v=(0,d.D)({component:function e(t){var n=(0,c.useRouter)();return m.includes(n.query.categoryCode)?(0,u.jsx)(p.k,(0,a.Z)((0,r.Z)({},t),{getSSRMethods:e.getAPIMethods})):(0,u.jsx)(l.c,(0,a.Z)((0,r.Z)({},t),{getSSRMethods:e.getAPIMethods}))},getAPIMethods:function(e){var t=e.query;return m.includes(t.categoryCode)?[{apiMethod:h.u,apiData:t}]:[]},dataProps:function(e){var t=e.query;return m.includes(t.categoryCode)?void 0:{apiMethod:s.s,disabled:!1,shouldUseLocation:!0,onSuccess:function(e){var t=e.mutateItem,n=e.mutateItems,o=e.params,r=e.response;(0,f.F)({mutateItem:t,mutateItems:n,params:o,response:r}).then(function(e){(0,g.x)(r)||((0,i.h)({data:r,cpcData:e,queryParams:o}),(0,y.e)({params:o,response:r,identifier:function(e){var t;return{categoryId:null==e?void 0:null===(t=e.category)||void 0===t?void 0:t.categoryId}},cpcData:e}))})}}},layoutProps:function(e){var t=e.query,n=m.includes(null==t?void 0:t.categoryCode);return{showDigiplusSubscriptionRenewal:!0,chatKey:"search",noContentPadding:!0,desktopFullWidth:n,desktopContentWidth:n?null:"4xl"}},noDefaultLoader:!0}),P=v,_=(0,o.I)({getSSRMethods:v.getAPIMethods,queryProps:v.dataProps})}},function(e){e.O(0,[10,6547,5214,86,6057,9491,1710,2075,5517,4376,6062,7631,9774,2888,179],function(){return e(e.s=3083)}),_N_E=e.O()}]);