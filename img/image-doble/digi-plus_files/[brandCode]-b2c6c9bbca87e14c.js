(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2624],{99905:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[categoryCode]/[brandCode]",function(){return n(70443)}])},3096:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var r=n(52322),a=n(88413),o=n(64177),i=n(41435),s=n(72677),l=n(16332);function c(e){var t=e.page,n=e.className,c=(t||{}).pageBanners,d=(0,o.C)().isDesktop?4:2;return(0,i.x)(c)?null:(0,r.jsx)("div",{className:(0,s.d)("d-flex gap-3 my-5 flex-wrap container-2xl-w",n),children:null==c?void 0:c.map(function(e,t){return(0,r.jsx)(l.N,{style:{width:"calc((100% - ".concat(d-1," * ",16,"px)/").concat(d,")")},banner:e,position:a.BE.BOTTOM_PLP+t,className:n},null==e?void 0:e.sponsorBannerId)})})}},16332:function(e,t,n){"use strict";n.d(t,{N:function(){return u}});var r=n(66383),a=n(52322),o=n(16514),i=n(31909),s=n(98723),l=n(36036),c=n(69932),d=n(72677);function u(e){var t=e.banner,n=e.className,u=e.position,p=e.style,f=t.sponsorBannerUrl,v=t.sponsorBannerImage,m=t.sponsorBannerId,x=t.sponsorCampaignId,g=t.sponsorSellerId,h=t.sponsorBannerProvider,b=(0,r.Z)((0,o.Z)({callback:function(){(0,c.wh)({adIds:[m]}),(0,l.c2)({adType:"sponsored_banner",ad:{id:m,campaignId:x,sellerId:g,provider:h},position:u})}}),1)[0];return(0,a.jsx)(s.r,{onClick:function(){(0,c.Je)({adIds:[m]}),(0,l.nO)({adType:"sponsored_banner",ad:{id:m,campaignId:x,sellerId:g,provider:h},position:u})},to:f,shouldHandleUrlAndOnClick:!0,target:"_blank",style:p,children:(0,a.jsx)("div",{ref:b,className:(0,d.d)("w-100 h-100"),children:(0,a.jsx)(i.E,{className:(0,d.d)("w-100 h-100",n),image:v})})})}},60179:function(e,t,n){"use strict";n.d(t,{u:function(){return s}});var r=n(52322),a=n(31909),o=n(95766),i=n(72677);function s(e){var t=e.brand,n=e.category,s=e.className,l=e.pending,c=e.brandPage,d=t||{},u=d.brandTitle,p=d.brandImage,f=d.brandTitleEn,v=(n||{}).categoryTitle,m=(0,i.d)("d-flex ai-center my-3 mb-5-lg",s);return l?(0,r.jsx)(o.O,{height:58,className:"w-100 my-5-lg my-3"}):(0,r.jsxs)("div",{className:m,children:[p&&c&&(0,r.jsx)("div",{className:"ml-5",children:(0,r.jsx)(a.E,{image:p,alt:u||f,width:50,height:50})}),(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsxs)("h1",{className:"color-900 text-h5",children:[v," ",u||f]}),c&&(0,r.jsx)("p",{className:"text-body-2 color-500",children:"کالاهای ثبت شده با این برند"})]})]})}},76372:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(41435),a=n(29890);function o(e){if(!(0,r.x)(e))try{var t=(null==e?void 0:e.map(function(e){return JSON.parse(e)})).find(function(e){return(null==e?void 0:e["@type"])==="FAQPage"});if(!(0,r.x)(t)){var n=t.mainEntity;if(!(0,r.x)(n)&&(0,a.k)(n))return n.map(function(e,t){var n=e.name,r=(e.acceptedAnswer||{}).text;return{id:t,title:n,answer:r}})}}catch(o){}return[]}},24360:function(e,t,n){"use strict";n.d(t,{e:function(){return c}});var r=n(70865),a=n(96670),o=n(50930),i=n(30952),s=n(36036),l=n(41435);function c(e){var t,n,c=e.response,d=e.params,u=e.identifier,p=e.cpcData,f=(0,r.Z)((0,a.Z)((0,r.Z)({},d||{}),{sort:(null==d?void 0:d.sort)?null==d?void 0:d.sort:null==c?void 0:null===(t=c.sort)||void 0===t?void 0:t.sortDefaultOptionId}),u(c));i.s$||(window.plpProductsData=(0,o.Z)(window.plpProductsData).concat((0,o.Z)((null==p?void 0:p.hasMobileSidebar)?[null==p?void 0:null===(n=p.cpcProducts)||void 0===n?void 0:n[0]]:[]),(0,o.Z)((0,l.x)(null==c?void 0:c.products)?[]:Object.values(c.products).map(function(e,t){var n;return(0,r.Z)({productPage:null==c?void 0:null===(n=c.pager)||void 0===n?void 0:n.pagerCurrentPage,productIndex:t},e)}))),window.plpData={data:c,identifiers:f}),(0,l.x)(c)||(0,s.Wp)(c,f,p)}},70443:function(e,t,n){"use strict";n.r(t),n.d(t,{__getServerSideProps:function(){return O},default:function(){return C}});var r=n(40171),a=n(26297),o=n(52322),i=n(97228),s=n(42222),l=n(55357),c=n(41701),d=n(3096),u=n(60179),p=n(76372),f=n(24360),v=n(70865),m=n(96670),x=n(8371),g=n(60036),h=n(90917),b=n(1324),y=n(12694),N=n(64248),j=(0,b.q)({url:function(e){var t=e.categoryCode,n=e.brandCode;return"/categories/".concat(null==t?void 0:t.replace("category-",""),"/brands/").concat(n,"/search/")},transformer:function(e){var t,n=e.data;return(0,N.Y)((0,m.Z)((0,v.Z)({},(0,x.H)({data:n})),{category:(0,h.n)({data:null==n?void 0:n.category}),brand:(0,g.Q)({data:null==n?void 0:n.brand}),categoryBrandDescription:null==n?void 0:null===(t=n.category_brand)||void 0===t?void 0:t.description}))},inputTransformer:function(e){e.categoryCode,e.brandCode;var t=(0,a.Z)(e,["categoryCode","brandCode"]);return(0,y.s)(t)},isPageGetRequest:!0}),_=(0,c.D)({component:function(){var e=(0,l.et)(),t=e.data,n=e.fetchNextPage,r=e.hasNextPage,c=e.items,f=e.pending,v=e.params,m=e.fetchPage,x=e.pageNumber,g=e.changeParams,h=v||{},b=(h.categoryCode,h.brandCode,(0,a.Z)(h,["categoryCode","brandCode"])),y=t||{},N=y.categoryBrandDescription,j=y.seoData,_=y.brand,C=y.category,O=j||{},w=O.seoContent,P=O.seoMarkupSchemas,I=O.seoFacetUrls,T=(0,p.M)(P);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.u,{category:C,brand:_,pending:f}),(0,o.jsx)(s.c,{pages:c,fetchNextPage:n,fetchPage:m,pageNumber:x,hasNextPage:r,pending:f,changeParams:g,data:t,params:b,bannersComponent:d.M}),(0,o.jsx)(i.R,{description:w||N,questions:T,links:I,className:"mt-10 px-5 px-0-lg"})]})},dataProps:{apiMethod:j,disabled:!1,shouldUseLocation:!0,onSuccess:function(e){var t=e.params,n=e.response;(0,f.e)({params:t,response:n,identifier:function(e){var t,n;return{categoryId:null==e?void 0:null===(t=e.category)||void 0===t?void 0:t.categoryId,brandId:null==e?void 0:null===(n=e.brand)||void 0===n?void 0:n.brandId}}})}},layoutProps:{showDigiplusSubscriptionRenewal:!0,desktopContentWidth:"4xl",chatKey:"brand",wrapperClassName:"px-5 px-0-lg"}}),C=_,O=(0,r.I)({getSSRMethods:_.getAPIMethods,queryProps:_.dataProps})},73153:function(e,t,n){"use strict";n.d(t,{U:function(){return d}});var r=n(70865),a=n(52322),o=n(66383),i=n(2784),s=n(82494),l=n(30952);function c(e){var t=e.title,n=e.children,r=e.className,c=e.titleClassName,d=e.childrenClassName,u=e.CROId,p=(0,o.Z)((0,i.useState)(!1),2),f=p[0],v=p[1],m=(0,l.dh)("text-caption color-700",{"d-none":!f},d);return(0,a.jsxs)("div",{className:(0,l.dh)("text-body1-strong",r),"data-cro-id":u,children:[(0,a.jsx)(s.D,{className:void 0===c?"border-b-200 py-2":c,titleClassName:"pointer",label:t,leftIcon:f?"chevronUp":"chevronDown",onClick:function(){return v(!f)}}),f&&(0,a.jsx)("div",{className:m,children:n})]})}function d(e){return(0,a.jsx)(c,(0,r.Z)({},e))}},97228:function(e,t,n){"use strict";n.d(t,{R:function(){return N}});var r=n(47842),a=n(66383),o=n(52322),i=n(2784),s=n(97729),l=n.n(s),c=n(5632),d=n(73153),u=n(98780),p=n(98723),f=n(45756),v=n(55357),m=n(41435),x=n(58449),g=n(72677),h=n(32097),b=n(22491),y=n.n(b);function N(e){var t,n,s,b=e.title,N=e.description,j=e.questions,_=e.links,C=e.className,O=(0,v.et)(),w=O.params,P=O.pageNumber,I=(0,i.useRef)(null),T=(0,a.Z)((0,i.useState)(0),2),k=T[0],Z=T[1],S=(0,a.Z)((0,i.useState)(!1),2),E=S[0],M=S[1],D=(0,c.useRouter)(),R=null==D?void 0:null===(t=D.asPath)||void 0===t?void 0:null===(n=t.split)||void 0===n?void 0:null===(s=n.call(t,"page"))||void 0===s?void 0:s[0],U=(0,h.N)(null==D?void 0:D.asPath),G=w||{},B=G.categoryCode,A=G.brandCode,F=(0,i.useMemo)(function(){if(!B||A)return!1;var e=Object.keys(U);return 0===e.length||1===e.length&&(null==U?void 0:U.page)},[U,B,A]);(0,i.useEffect)(function(){I.current&&(Z(I.current.offsetHeight),M(I.current.offsetHeight<=200))},[]);var H={article:(0,g.d)("w-full seo",C),content:(0,g.d)("mb-1",y().content,(0,r.Z)({},y()["content--expanded"],E||k<=200))};return(0,o.jsxs)("article",{ref:I,className:H.article,children:[!(0,m.x)(_)&&(0,o.jsx)("div",{className:"border-b-200",children:(0,o.jsx)("div",{className:"bg-000 border-200-lg radius-md px-5-lg py-5 my-5 d-flex gap-4 flex-wrap text-body-2",children:_.map(function(e){return(0,o.jsx)(p.r,{CROId:f.h.PLP_FACET,to:"/search".concat(e.url),children:e.name})})})}),!(0,x.k)(b)&&(0,o.jsx)("span",{className:"text-h3 color-600 mb-5-lg mb-4",children:b}),(0,o.jsxs)("div",{className:H.content,children:[!(0,x.k)(N)&&(0,o.jsx)("div",{className:"text-body-1 color-400",dangerouslySetInnerHTML:{__html:N}}),!(0,m.x)(j)&&j.map(function(e){var t=e.id,n=e.title,r=e.answer;return(0,o.jsx)(d.U,{title:n,titleClassName:"text-h5 color-500 px-4",className:"my-4 br-list-vertical",childrenClassName:"p-4",children:(0,o.jsx)("div",{className:"text-body-2 color-400",children:r})},t)})]}),F&&(0,o.jsxs)("div",{className:"d-flex jc-between",children:[P<6&&P>2&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("link",{rel:"prev",href:"".concat(R,"page=").concat(P-1)})},"prev"),(0,o.jsx)(p.r,{rel:"prev",to:"".concat(R,"page=").concat(P-1)})]}),P<6&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("link",{rel:"next",href:"".concat(R,"page=").concat(P+1)})},"next"),(0,o.jsx)(p.r,{rel:"next",to:"".concat(R,"page=").concat(P+1)})]})]}),!E&&k>200&&(0,o.jsxs)("div",{className:"pointer color-secondary-500 text-body-1 d-flex ai-center",onClick:function(){M(!0)},children:["مشاهده بیشتر",(0,o.jsx)(u.J,{icon:"expandMore",size:24,color:"secondary"})]}),E&&k>200&&(0,o.jsxs)("div",{className:"pointer color-secondary-500 text-body-1 d-flex ai-center",onClick:function(){M(!1)},children:["مشاهده کمتر",(0,o.jsx)(u.J,{icon:"expandLess",size:24,color:"secondary"})]})]})}},98884:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(79968);function a(e){var t=e.data||{},n=t.title,a=t.url;return{breadcrumbTitle:n,breadcrumbUrl:(0,r.f)({data:a})}}},44286:function(e,t,n){"use strict";n.d(t,{h:function(){return function e(t){var n,f=t.data||{},v=f.type,m=f.key,x=f.icon,g=f.title,h=f.options;if((0,i.t)(v,c.kQ.NESTED_LIST))return(null==h?void 0:h.reduce(function(t,n){return(0,o.Z)(t).concat([e({data:(0,a.Z)((0,r.Z)({},n),{key:{keyCode:m,keyId:n.id}})})])},[]))||[];var b=(0,i.t)(m,l.Tx.CATEGORIES)&&(0,i.t)(v,c.kQ.CATEGORY_LIST);return{filterKey:m,filterType:v,filterIcon:x,filterTitle:g,filterOptionMin:null==h?void 0:h.min,filterOptionMax:null==h?void 0:h.max,filterCROId:(0,d.c)(m),filterOptions:null==h?void 0:null===(n=h.map)||void 0===n?void 0:n.call(h,function(e){var t,n,r,a,o,i,l,c,d,f,v;return b?(0,u.n)({data:e}):(n=(t=e||{}).id,r=t.icon,a=t.title,o=t.title_en,i=t.title_fa,l=t.is_selected,c=t.visibility,d=t.hex_code,f=t.description,v=t.image,{filterOptionId:n,filterOptionIcon:r,filterOptionHexCode:d,filterOptionTitleEn:o,filterOptionVisibility:c,filterOptionIsSelected:l,filterOptionTitle:(0,s.U)(i)||a,filterOptionDescription:f,filterOptionImage:(0,p.W)({data:v}),filterOptionTitleFa:(0,s.U)(i)||a})})}}}});var r=n(70865),a=n(96670),o=n(50930),i=n(82332),s=n(52216),l=n(45227),c=n(43202),d=n(89086),u=n(90917),p=n(70582)},46932:function(e,t,n){"use strict";function r(e){var t=e.data||{};return{pagerTotalItems:t.total_items,pagerTotalPages:t.total_pages,pagerCurrentPage:t.current_page}}n.d(t,{d:function(){return r}})},92552:function(e,t,n){"use strict";n.d(t,{k:function(){return f}});var r=n(70865),a=n(96670),o=n(66383),i=n(5759),s=n(90917),l=n(15393),c=n(72394),d=n(46932),u=n(44286),p=n(98884);function f(e){var t,n,f=e.data,v=f||{},m=v.filters,x=v.pager,g=v.products,h=v.sort,b=v.category,y=v.breadcrumb;return{filters:Object.entries(m||{}).flatMap(function(e){var t=(0,o.Z)(e,2),n=t[0],a=t[1];return(0,u.h)({data:(0,r.Z)({key:n},a)})}),pager:(0,d.d)({data:x}),products:null==g?void 0:g.map(function(e){return(0,l.r)({data:e})}),sort:(0,c.G)({data:(0,a.Z)((0,r.Z)({},f),{default:(0,i.h)(h)?h:null==h?void 0:h.default})}),breadcrumbs:(null===(t=null==y?void 0:y.slice(0,-1))||void 0===t?void 0:null===(n=t.map)||void 0===n?void 0:n.call(t,function(e){return(0,p.W)({data:e})}))||[],category:(0,s.n)({data:b})}}},9642:function(e,t,n){"use strict";n.d(t,{m:function(){return l}});var r=n(4547);function a(e){try{return JSON.stringify(e)}catch(t){(0,r.g)("Failed on stringify json",t)}return""}var o=n(41435),i=n(29890),s=n(79968);function l(e){var t=e.data||{},n=t.markup_schema,r=t.description,l=t.content,c=t.header,d=t.title,u=t.twitter_card,p=t.open_graph,f=t.product,v=t.facet_urls;return{seoMarkupSchemas:(n?{seoMarkupSchemas:(0,i.k)(n)?n.map(function(e){return a(e)}):[a(n)]}:{}).seoMarkupSchemas,seoDescription:r,seoContent:l,seoTitle:d,seoFacetUrls:v,seoHeader:{seoRobotsMeta:null==c?void 0:c.robots_meta,seoShowRobotsMeta:null==c?void 0:c.show_robots_meta,seoCanonicalUrl:(0,s.f)({data:null==c?void 0:c.canonical_url})},seoTwitterExists:!(0,o.x)(u),seoTwitter:{seoTwitterTitle:null==u?void 0:u.title,seoTwitterDescription:null==u?void 0:u.description,seoTwitterDescriptionImage:null==u?void 0:u.image,seoTwitterDescriptionPrice:null==u?void 0:u.price},seoOpenGraphExists:!(0,o.x)(p),seoOpenGraph:{seoOpenGraphTitle:null==p?void 0:p.title,seoOpenGraphType:null==p?void 0:p.type,seoOpenGraphUrl:(0,s.f)({data:null==p?void 0:p.url}),seoOpenGraphImage:null==p?void 0:p.image,seoOpenGraphAvailability:null==p?void 0:p.availability},seoProductExists:!(0,o.x)(f),seoProduct:{seoProductAvailability:null==f?void 0:f.availability,seoProductCondition:null==f?void 0:f.condition,seoProductPrice:null==f?void 0:f.price}}}},72394:function(e,t,n){"use strict";n.d(t,{G:function(){return a}});var r=n(64248);function a(e){var t,n=e.prefix,a=e.data||{},o=a.sort_options,i=a.default;return(0,r.Y)({sortDefaultOptionId:i,sortOptions:null==o?void 0:null===(t=o.map)||void 0===t?void 0:t.call(o,function(e){var t,n,r,a;return n=(t=e||{}).id,r=t.title_fa,a=t.title,{sortOptionId:n,sortOptionTitle:r||a}})},{prefix:n})}},22491:function(e){e.exports={content:"styles_content__NtE6p","content--expanded":"styles_content--expanded__5wMiV"}}},function(e){e.O(0,[10,6547,5214,2636,6057,9491,1710,4376,9774,2888,179],function(){return e(e.s=99905)}),_N_E=e.O()}]);