(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7631],{6378:function(e,t,n){"use strict";n.d(t,{c:function(){return C}});var a=n(70865),r=n(26297),s=n(52322),c=n(97228),i=n(81188),o=n(12887),l=n(90713),d=n(42222),u=n(96057),m=n(88413),x=n(93008),p=n(55357),g=n(41435),h=n(50020),b=n(56978),f=n(3096),v=n(16332),N=n(38260),j=n(60179),y=n(76372);function C(){var e=(0,p.et)(),t=e.data,n=e.fetchNextPage,C=e.hasNextPage,k=e.items,P=e.pending,T=e.params,_=e.fetchPage,w=e.pageNumber,E=e.changeParams,O=T||{},S=(O.categoryCode,(0,r.Z)(O,["categoryCode"])),F=t||{},I=F.advertisementSponsoredBrand,R=F.subCategories,B=F.breadcrumbs,M=F.sidebarCPCProduct,Z=F.categoryDescriptionFa,D=F.seoData,L=F.aboveSideBarFilter,A=F.belowSideBarFilter,U=F.relatedSearchWords,H=F.category,q=I||{},z=q.advertisementBrand,J=q.advertisementProducts,V=D||{},Y=V.seoContent,G=V.seoMarkupSchemas,Q=V.seoFacetUrls,W=(0,y.M)(G);return(0,s.jsxs)("div",{className:"px-5",children:[(0,s.jsx)(i.O,{pending:P,CROId:"plp-burger-menu",breadcrumbs:B,className:"py-0 py-5-lg grow-1",hasMobilePadding:!1}),(0,s.jsx)(j.u,{category:H,pending:P}),(!(0,g.x)(J)||!(0,g.x)(z))&&(0,s.jsx)(N.y,{brand:z,products:J,position:m.BE.TOP_FILTER,className:"mb-5 mx-0-lg"}),(0,s.jsx)(o.Z,{categories:R,className:"mb-5"}),(0,s.jsx)(d.c,{pages:k,fetchNextPage:n,fetchPage:_,pageNumber:w,hasNextPage:C,pending:P,changeParams:E,data:t,params:S,bannersComponent:f.M,productListHeaderSlot:(0,s.jsx)(b.D,{options:null==t?void 0:t.didYouMeans}),showFirstAd:!0,stickySlot:!(0,h.k)(M)&&(0,s.jsx)(u.b,(0,a.Z)({className:"border-200 radius mb-4",type:x.nL.CPC,enableBigDataTrackerAdClickEvent:!0,enableBigDataTrackerAdViewEvent:!0},M)),stickyBottomSlot:!(0,h.k)(A)&&(0,s.jsx)(v.N,{banner:A,position:m.BE.BOTTOM_FILTER,className:"mb-4"}),sidebarSlot:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.I,{className:"mb-4",options:U}),!(0,h.k)(L)&&(0,s.jsx)(v.N,{banner:L,position:m.BE.TOP_FILTER,className:"mb-4"})]})}),(0,s.jsx)(c.R,{description:Y||Z,questions:W,links:Q,className:"px-5 px-0-lg"})]})}},60179:function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var a=n(52322),r=n(31909),s=n(95766),c=n(72677);function i(e){var t=e.brand,n=e.category,i=e.className,o=e.pending,l=e.brandPage,d=t||{},u=d.brandTitle,m=d.brandImage,x=d.brandTitleEn,p=(n||{}).categoryTitle,g=(0,c.d)("d-flex ai-center my-3 mb-5-lg",i);return o?(0,a.jsx)(s.O,{height:58,className:"w-100 my-5-lg my-3"}):(0,a.jsxs)("div",{className:g,children:[m&&l&&(0,a.jsx)("div",{className:"ml-5",children:(0,a.jsx)(r.E,{image:m,alt:u||x,width:50,height:50})}),(0,a.jsxs)("div",{className:"d-flex flex-column",children:[(0,a.jsxs)("h1",{className:"color-900 text-h5",children:[p," ",u||x]}),l&&(0,a.jsx)("p",{className:"text-body-2 color-500",children:"کالاهای ثبت شده با این برند"})]})]})}},76372:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var a=n(41435),r=n(29890);function s(e){if(!(0,a.x)(e))try{var t=(null==e?void 0:e.map(function(e){return JSON.parse(e)})).find(function(e){return(null==e?void 0:e["@type"])==="FAQPage"});if(!(0,a.x)(t)){var n=t.mainEntity;if(!(0,a.x)(n)&&(0,r.k)(n))return n.map(function(e,t){var n=e.name,a=(e.acceptedAnswer||{}).text;return{id:t,title:n,answer:a}})}}catch(s){}return[]}},36913:function(e,t,n){"use strict";n.d(t,{s:function(){return u}});var a=n(70865),r=n(96670),s=n(26297),c=n(90917),i=n(9642),o=n(1324),l=n(64248),d=n(8371),u=(0,o.q)({url:function(e){var t=e.categoryCode;return"/categories/".concat("".concat(t).replace("category-",""),"/search/")},transformer:function(e){var t,n=e.data,s=n||{},o=s.category,u=s.sub_categories_best_selling,m=s.seo;return(0,l.Y)((0,r.Z)((0,a.Z)({},(0,d.H)({data:n}),(0,c.n)({data:o})),{subCategories:null==u?void 0:null===(t=u.map)||void 0===t?void 0:t.call(u,function(e){return(0,c.n)({data:e})}),seoData:(0,i.m)({data:m})}))},inputTransformer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.categoryCode,(0,s.Z)(e,["categoryCode"])},isPageGetRequest:!0})},73153:function(e,t,n){"use strict";n.d(t,{U:function(){return d}});var a=n(70865),r=n(52322),s=n(66383),c=n(2784),i=n(82494),o=n(30952);function l(e){var t=e.title,n=e.children,a=e.className,l=e.titleClassName,d=e.childrenClassName,u=e.CROId,m=(0,s.Z)((0,c.useState)(!1),2),x=m[0],p=m[1],g=(0,o.dh)("text-caption color-700",{"d-none":!x},d);return(0,r.jsxs)("div",{className:(0,o.dh)("text-body1-strong",a),"data-cro-id":u,children:[(0,r.jsx)(i.D,{className:void 0===l?"border-b-200 py-2":l,titleClassName:"pointer",label:t,leftIcon:x?"chevronUp":"chevronDown",onClick:function(){return p(!x)}}),x&&(0,r.jsx)("div",{className:g,children:n})]})}function d(e){return(0,r.jsx)(l,(0,a.Z)({},e))}},81188:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var a=n(52322),r=n(98723),s=n(97411),c=n(95766),i=n(72677);function o(e){var t=e.className,n=e.CROId,o=void 0===n?"":n,l=e.breadcrumbs,d=e.hasMobilePadding,u=e.pending,m=e.lastItemTag,x=void 0===m?"span":m,p=null==l?void 0:l.length,g=(0,i.d)("py-2",{"px-5 px-0-lg":void 0===d||d},t);return u?(0,a.jsx)(c.O,{radiusSize:"small",height:26,className:"w-full my-2 my-5-lg"}):(0,a.jsx)("nav",{className:g,children:(0,a.jsx)(s.l,{sliderProps:{spaceBetween:0},items:null==l?void 0:l.map(function(e,t){return(0,a.jsxs)(r.r,{className:"color-500 text-body-2 shrink-0",to:e.breadcrumbUrl,CROId:o,children:[p!==t+1&&e.breadcrumbTitle,p===t+1&&(0,a.jsx)(x,{className:"d-inline color-500 text-body-2 ",children:e.breadcrumbTitle}),(0,a.jsx)("span",{className:"mx-3",children:p===t+1?"":"/"})]},e.breadcrumbTitle+e.breadcrumbUrl)})})})}},97228:function(e,t,n){"use strict";n.d(t,{R:function(){return j}});var a=n(47842),r=n(66383),s=n(52322),c=n(2784),i=n(97729),o=n.n(i),l=n(5632),d=n(73153),u=n(98780),m=n(98723),x=n(45756),p=n(55357),g=n(41435),h=n(58449),b=n(72677),f=n(32097),v=n(22491),N=n.n(v);function j(e){var t,n,i,v=e.title,j=e.description,y=e.questions,C=e.links,k=e.className,P=(0,p.et)(),T=P.params,_=P.pageNumber,w=(0,c.useRef)(null),E=(0,r.Z)((0,c.useState)(0),2),O=E[0],S=E[1],F=(0,r.Z)((0,c.useState)(!1),2),I=F[0],R=F[1],B=(0,l.useRouter)(),M=null==B?void 0:null===(t=B.asPath)||void 0===t?void 0:null===(n=t.split)||void 0===n?void 0:null===(i=n.call(t,"page"))||void 0===i?void 0:i[0],Z=(0,f.N)(null==B?void 0:B.asPath),D=T||{},L=D.categoryCode,A=D.brandCode,U=(0,c.useMemo)(function(){if(!L||A)return!1;var e=Object.keys(Z);return 0===e.length||1===e.length&&(null==Z?void 0:Z.page)},[Z,L,A]);(0,c.useEffect)(function(){w.current&&(S(w.current.offsetHeight),R(w.current.offsetHeight<=200))},[]);var H={article:(0,b.d)("w-full seo",k),content:(0,b.d)("mb-1",N().content,(0,a.Z)({},N()["content--expanded"],I||O<=200))};return(0,s.jsxs)("article",{ref:w,className:H.article,children:[!(0,g.x)(C)&&(0,s.jsx)("div",{className:"border-b-200",children:(0,s.jsx)("div",{className:"bg-000 border-200-lg radius-md px-5-lg py-5 my-5 d-flex gap-4 flex-wrap text-body-2",children:C.map(function(e){return(0,s.jsx)(m.r,{CROId:x.h.PLP_FACET,to:"/search".concat(e.url),children:e.name})})})}),!(0,h.k)(v)&&(0,s.jsx)("span",{className:"text-h3 color-600 mb-5-lg mb-4",children:v}),(0,s.jsxs)("div",{className:H.content,children:[!(0,h.k)(j)&&(0,s.jsx)("div",{className:"text-body-1 color-400",dangerouslySetInnerHTML:{__html:j}}),!(0,g.x)(y)&&y.map(function(e){var t=e.id,n=e.title,a=e.answer;return(0,s.jsx)(d.U,{title:n,titleClassName:"text-h5 color-500 px-4",className:"my-4 br-list-vertical",childrenClassName:"p-4",children:(0,s.jsx)("div",{className:"text-body-2 color-400",children:a})},t)})]}),U&&(0,s.jsxs)("div",{className:"d-flex jc-between",children:[_<6&&_>2&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("link",{rel:"prev",href:"".concat(M,"page=").concat(_-1)})},"prev"),(0,s.jsx)(m.r,{rel:"prev",to:"".concat(M,"page=").concat(_-1)})]}),_<6&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("link",{rel:"next",href:"".concat(M,"page=").concat(_+1)})},"next"),(0,s.jsx)(m.r,{rel:"next",to:"".concat(M,"page=").concat(_+1)})]})]}),!I&&O>200&&(0,s.jsxs)("div",{className:"pointer color-secondary-500 text-body-1 d-flex ai-center",onClick:function(){R(!0)},children:["مشاهده بیشتر",(0,s.jsx)(u.J,{icon:"expandMore",size:24,color:"secondary"})]}),I&&O>200&&(0,s.jsxs)("div",{className:"pointer color-secondary-500 text-body-1 d-flex ai-center",onClick:function(){R(!1)},children:["مشاهده کمتر",(0,s.jsx)(u.J,{icon:"expandLess",size:24,color:"secondary"})]})]})}},22491:function(e){e.exports={content:"styles_content__NtE6p","content--expanded":"styles_content--expanded__5wMiV"}}}]);