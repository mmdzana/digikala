(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7260],{6566:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/best-selling",function(){return a(82798)}])},82798:function(e,n,a){"use strict";a.r(n),a.d(n,{__getServerSideProps:function(){return U},default:function(){return H}});var t,r=a(40171),s=a(47842),i=a(52322),l=a(82039),o=a(2607),d=a(42222),c=a(45227),u=a(55357),g=a(41701),p=a(70865),x=a(90917),v=a(15393),f=a(79968),m=a(1324),_=a(12694),h=a(64248),N=(0,m.q)({url:"/best-selling/",transformer:function(e){var n,a,t,r,s=e.data;return(0,h.Y)({title:null==s?void 0:s.title,seeMoreUrl:(0,f.f)({data:null==s?void 0:s.see_more_url}),products:(null==s?void 0:null===(n=s.products)||void 0===n?void 0:null===(a=n.map)||void 0===a?void 0:a.call(n,function(e,n){return(0,p.Z)({productBestSellingRank:n+1},(0,v.r)({data:e}))}))||[],categories:(null==s?void 0:null===(t=s.categories)||void 0===t?void 0:null===(r=t.map)||void 0===r?void 0:r.call(t,function(e){return(0,x.n)({data:e})}))||[]})},inputTransformer:function(e){var n;return(0,_.s)((n={},(0,s.Z)(n,c.Tx.CATEGORY_ID,null==e?void 0:e[c.Tx.CATEGORY_ID]),(0,s.Z)(n,c.Tx.LAST_DAYS,null==e?void 0:e[c.Tx.LAST_DAYS]),n))},isPageGetRequest:!0}),P=a(5632),S=a(644),T=a(98723),j=a(41435),A=a(82332),R=a(50020),b=a(10896),w="pointer my-2-lg d-inline-block mx-2";function k(e){var n=e.categories,a=void 0===n?[]:n,t=e.activeCategoryId,r=e.pending,l=e.addAllOption,o=(0,P.useRouter)(),d=(0,j.x)(a),u=d&&void 0!==r&&r?Array(12).fill({}):a;return(0,i.jsxs)("div",{className:"overflow-x-auto d-flex flex-wrap-lg jc-center-lg pr-2 pl-3 py-5 align-center text-no-wrap hide-scrollbar",children:[!d&&void 0!==l&&l&&(0,i.jsx)(T.r,{to:(0,b.K)({url:o.pathname}),children:(0,i.jsx)(S.A,{isSkeleton:d,className:w,label:"همه نوع کالا",isActive:(0,R.k)(t),size:"medium"})}),u.map(function(e,n){var a=e.categoryId,r=e.categoryTitleFa;return(0,i.jsx)(T.r,{CROId:"best-selling-categories",to:(0,b.K)({queries:(0,s.Z)({},c.Tx.CATEGORY_ID,a),url:o.asPath}),children:(0,i.jsx)(S.A,{isSkeleton:d,size:"medium",className:w,label:r,isActive:(0,A.t)(a,t)})},null!=a?a:n)})]})}var y=a(72677),I=a(55344),E=a.n(I);function O(e){var n,a=e.isActive,t=e.rangeName,r=(0,y.d)("text-button-1 align-center pointer px-3 px-4-lg whitespace-nowrap",E().Range,(n={},(0,s.Z)(n,E()["Range--active"],a),(0,s.Z)(n,"color-900",!a),n));return(0,i.jsx)("div",{className:r,children:t})}var Z=a(15885),C=a.n(Z);function D(e){var n=e.isLeft,a=(0,y.d)("d-none d-block-lg",C().SidePane,(0,s.Z)({},C()["SidePane--left"],n));return(0,i.jsx)("span",{className:a})}var L=a(21505),Y=a.n(L),K=(0,y.d)(Y().sellingRange,"d-block d-none-lg mt-5");function G(e){var n=e.ranges,a=e.activeRange,t=void 0===a?"week":a,r=(0,P.useRouter)(),l=(0,y.d)("d-grid gap-1 gap-3-lg px-6","grid-cols-".concat(null==n?void 0:n.length));return(0,i.jsxs)("div",{className:"pos-relative w-full -mt-4 h-13 h-10-lg  d-flex flex-row-lg flex-column jc-center ai-center",children:[(0,i.jsx)(D,{}),(0,i.jsx)("div",{className:l,children:n.map(function(e,n){var a=e.rangeId,l=e.rangeUrl,o=e.rangeName;return(0,i.jsx)(T.r,{CROId:"best-selling-date",to:(0,b.K)({url:r.asPath,queries:(0,s.Z)({},c.Tx.LAST_DAYS,a)}),children:(0,i.jsx)(O,{isActive:(0,A.t)(t,a),rangeName:o})},null!=l?l:n)})}),(0,i.jsx)(D,{isLeft:!0}),(0,i.jsx)("span",{className:K})]})}var M={WEEK:"week",MONTH:"month"},q=[{rangeName:"۷ روز گذشته",rangeId:M.WEEK},{rangeName:"۳۰ روز گذشته",rangeId:M.MONTH}],H=(0,g.D)((t={},(0,s.Z)(t,"component",function(){var e=(0,u.et)(),n=e.data,a=e.fetchNextPage,t=e.hasNextPage,r=e.items,s=e.pending,g=e.params,p=e.fetchPage,x=e.pageNumber,v=e.changeParams,f=(n||{}).categories,m=g||{},_=m[c.Tx.LAST_DAYS],h=m[c.Tx.CATEGORY_ID];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{isStatic:!0,isDesktopStatic:!0,children:[(0,i.jsx)(l.V,{}),(0,i.jsx)(G,{ranges:q,activeRange:_}),(0,i.jsx)(k,{categories:f,pending:s,activeCategoryId:h,addAllOption:!0})]}),(0,i.jsx)(d.c,{pages:r,fetchNextPage:a,fetchPage:p,pageNumber:x,hasNextPage:t,pending:s,changeParams:v,data:n,params:g,shouldHideProductListHeader:!0,shouldHideDesktopSidebar:!0})]})}),(0,s.Z)(t,"dataProps",{apiMethod:N,disabled:!1,shouldUseLocation:!0}),(0,s.Z)(t,"layoutProps",{desktopContentWidth:"4xl",wrapperClassName:"px-5 px-0-lg",chatKey:"best-selling"}),t)),U=(0,r.I)({getSSRMethods:H.getAPIMethods,queryProps:H.dataProps})},55344:function(e){e.exports={Range:"styles_Range__eZ6oK","Range--active":"styles_Range--active__3xwOS"}},21505:function(e){e.exports={sellingRange:"styles_sellingRange___6LtP"}},15885:function(e){e.exports={SidePane:"styles_SidePane__13J_G","SidePane--left":"styles_SidePane--left__ouToQ"}}},function(e){e.O(0,[10,6547,5214,2636,6057,9491,1710,8980,9774,2888,179],function(){return e(e.s=6566)}),_N_E=e.O()}]);