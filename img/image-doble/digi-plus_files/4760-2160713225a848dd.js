(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4760],{90145:function(e,i,s){"use strict";s.r(i),s.d(i,{DigiplusSubscriptionModal:function(){return E}});var n=s(66383),t=s(52322),l=s(2784),r=s(50603),a=s(83590),c=s(45756),o=s(72873),d=s(64177),x=s(41435),u=s(72677),p=s(12978),m=(0,s(1324).q)({url:"/digiplus/plans/",inputTransformer:function(e){return{hide_direct_debit:e.isHideDirectDebit}},transformer:function(e){var i,s=e.data||{},n=s.plans,t=s.services;return{plans:null==n?void 0:null===(i=n.map)||void 0===i?void 0:i.call(n,function(e){return(0,p.G)({data:e})}),services:null==t?void 0:t.map(function(e){var i;return{serviceTitle:(i=e||{}).title,serviceIcon:i.image,serviceDescription:i.desc}})}}}),h=s(73739);function v(e){var i=e.title,s=e.description;return(0,t.jsx)(h.k,{icon:"infoOutline",className:"mb-2 mt-3 p-3",leftSlot:(0,t.jsx)("p",{className:"color-500 text-body-2 mr-10",children:s}),children:(0,t.jsx)("div",{className:"d-flex jc-between ai-start w-100",children:(0,t.jsx)("div",{className:"text-subtitle-strong color-700 mt-1",children:i})})})}var f=s(98780),j=s(5185),b=s(26442),g=s(72762),N=s(26168);function _(e){var i=e.planId,s=e.price,n=e.className,l=e.isPending;return(0,t.jsxs)("div",{className:(0,u.d)("w-full user-select-none",n),children:[(0,t.jsxs)("div",{className:"d-flex ai-center jc-between",children:[(0,t.jsx)(N.m,{size:"large",disabled:!i||void 0!==l&&l,to:(0,b.py)({type:j.Rd.PLUS,id:i}),className:"w-50",CROId:c.h.PLUS_ON_MODAL_ADD,children:"خرید اشتراک"}),(0,t.jsxs)("div",{className:"d-flex flex-column ai-end",children:[(0,t.jsx)("p",{className:"text-caption color-600",children:"مجموع هزینه اشتراک"}),(0,t.jsxs)("div",{className:"d-flex ai-center color-800 text-subtitle-strong",children:[(0,g.j)(void 0===s?0:s),(0,t.jsx)(f.J,{icon:"toman",size:18,className:"mr-2"})]})]})]}),(0,t.jsxs)("div",{className:"w-full mt-2 text-caption color-500 align-center d-flex ai-center jc-center",children:[(0,t.jsx)(f.J,{icon:"infoOutline",size:18,color:"gray",className:"ml-2"}),"به مبالغ فوق ٪۹ بابت مالیات بر ارزش افزوده اضافه می‌شود."]})]})}var w=s(57394),y=s(3417),D=s(74740);function P(e){var i=e.planId,s=e.price,n=e.className,l=e.isPending,r=e.onCloseModal,a=e.onAddSubscriptionCallback,o=(0,w.J)({action:y.o_}),d=o.request,x=o.pending;return(0,t.jsxs)("div",{className:(0,u.d)("w-full user-select-none",n),children:[(0,t.jsxs)("div",{className:"d-flex ai-center jc-between",children:[(0,t.jsx)(N.m,{size:"large",disabled:!i||l||x,CROId:c.h.PLUS_ON_MODAL_ADD_TO_CART,onClick:function(){d({planId:i}).then(function(){(0,D.m)(a)&&a(),(0,D.m)(r)&&r()})},className:"w-50",children:"افزودن به سبد خرید"}),(0,t.jsxs)("div",{className:"d-flex flex-column ai-end",children:[(0,t.jsx)("p",{className:"text-caption color-600",children:"مجموع هزینه اشتراک"}),(0,t.jsxs)("div",{className:"d-flex ai-center color-800 text-subtitle-strong",children:[(0,g.j)(void 0===s?0:s),(0,t.jsx)(f.J,{icon:"toman",size:18,className:"mr-2"})]})]})]}),(0,t.jsxs)("div",{className:"w-full mt-2 text-caption color-500 align-center d-flex ai-center jc-center",children:[(0,t.jsx)(f.J,{icon:"infoOutline",size:18,color:"gray",className:"ml-2"}),"به مبالغ فوق ٪۹ بابت مالیات بر ارزش افزوده اضافه می‌شود."]})]})}var S=s(47842),I=s(52216),C=s(23154),M=s(65916),O=s.n(M);function k(e){var i=e.planItem,s=e.activePlanId,n=e.onClickPlan,l=i||{},r=l.planId,a=l.planIcon,c=l.planTitle,o=l.planPricePerMonth,d=l.planFreeShipmentCount,x=l.planDirectDebitDiscountDescription,p=l.planCROId,m=l.planActiveDirectDebit;return(0,t.jsxs)("div",{"data-cro-id":p,onClick:n(i),className:(0,u.d)("w-full radius d-flex pointer flex-column py-1 px-4 user-select-none overflow-hidden",O().SubscriptionModalPlanSlide__planItem,(0,S.Z)({border:s!==r},O()["SubscriptionModalPlanSlide__planItem--activated"],s===r)),children:[(0,t.jsxs)("div",{className:"d-flex flex-column w-full ai-center pt-1 pb-2 border-b",children:[(0,t.jsx)(f.J,{size:30,icon:a,color:(0,C.$)("color-plus-500")}),(0,t.jsx)("div",{className:"text-subtitle-strong color-700 text-no-wrap mt-2",children:(0,I.U)(c)}),(0,t.jsxs)("div",{className:(0,u.d)("text-caption color-400",{"color-plus-500":m}),children:[(0,I.U)(d)," ارسال رایگان"]})]}),(0,t.jsxs)("div",{className:"d-flex flex-column w-full pt-2",children:[(0,t.jsxs)("div",{className:(0,u.d)("d-flex jc-between",{"visibility-hidden":!o}),children:[(0,t.jsx)("div",{className:"color-400 text-body2-strong",children:"ماهانه"}),(0,t.jsxs)("div",{className:"d-flex ai-center",children:[(0,t.jsx)("div",{className:"text-subtitle-strong color-800 ml-1",children:(0,g.j)(null!=o?o:0)}),(0,t.jsx)(f.J,{icon:"toman",size:16})]})]}),m&&(0,t.jsx)("div",{className:"color-primary-700 text-caption align-center",children:(0,I.U)(x)})]})]})}var A=s(3284);function z(e){var i=e.isDesktop;return(0,t.jsx)(t.Fragment,{children:i?(0,t.jsx)(A.p,{viewBox:"0 0 100 100",children:(0,t.jsx)("rect",{x:"0",y:"0",rx:"2",ry:"2",width:"100",height:"100"})}):(0,t.jsx)(A.p,{viewBox:"0 0 100 70",children:(0,t.jsx)("rect",{x:"0",y:"0",rx:"2",ry:"2",width:"100",height:"70"})})})}var L=s(31909),T=s(47072);function J(){var e=(0,d.C)().isDesktop;return(0,t.jsx)(t.Fragment,{children:Array.from({length:8}).map(function(i,s){return(0,t.jsx)("div",{className:"w-full d-flex ai-center",children:e?(0,t.jsxs)(A.p,{viewBox:"0 0 360 100",children:[(0,t.jsx)("rect",{x:"300",y:"0",rx:"2",ry:"2",width:"60",height:"60"}),(0,t.jsx)("rect",{x:"190",y:"0",rx:"2",ry:"2",width:"100",height:"24"}),(0,t.jsx)("rect",{x:"0",y:"40",rx:"2",ry:"2",width:"290",height:"20"})]},s):(0,t.jsxs)(A.p,{viewBox:"0 0 600 74",children:[(0,t.jsx)("rect",{x:"540",y:"0",rx:"2",ry:"2",width:"60",height:"60"}),(0,t.jsx)("rect",{x:"300",y:"0",rx:"2",ry:"2",width:"230",height:"24"}),(0,t.jsx)("rect",{x:"0",y:"38",rx:"2",ry:"2",width:"530",height:"20"})]},s)})})})}function U(e){var i=e.className,s=e.services,n=e.isPending;return(0,t.jsxs)("div",{className:i,children:[(0,t.jsx)(T.D,{withLine:!0,color:"purple",title:"مزایای دیجی‌پلاس"}),(0,t.jsx)("div",{className:"d-grid grid-cols-2-lg grid-cols-1 gap-x-5-lg user-select-none",children:n?(0,t.jsx)(J,{}):s.map(function(e){var i=e.serviceTitle,s=e.serviceDescription,n=e.serviceIcon;return(0,t.jsxs)("div",{className:"w-full d-flex ai-center",children:[(0,t.jsx)(L.E,{width:40,height:40,src:n,className:"ml-4"}),(0,t.jsxs)("div",{className:"d-flex flex-column my-2 border-b w-full",children:[(0,t.jsx)("h4",{className:"color-900 text-subtitle-strong align-right",children:i}),(0,t.jsx)("p",{className:"text-body-2 color-600",children:s})]})]},i)})})]})}var B=s(68882),R=s.n(B),Z={prev:(0,u.d)("d-flex pos-absolute jc-center ai-center bg-000 pointer z-10 shadow-fab-button right-0",R().button,R()["button--prev"]),next:(0,u.d)("d-flex pos-absolute jc-center ai-center bg-000 pointer z-10 shadow-fab-button left-0",R().button,R()["button--next"]),disabled:"d-none"};function E(e){var i=e.isOpenModal,s=e.isDigiplusTemporaryModal,u=e.isHideDirectDebitPlans,p=e.onAddSubscriptionCallback,h=e.onCloseModal,f=(0,d.C)().isDesktop,j=(0,n.Z)((0,l.useState)([]),2),b=j[0],g=j[1],N=(0,n.Z)((0,l.useState)([]),2),w=N[0],y=N[1],D=(0,n.Z)((0,l.useState)(),2),S=D[0],I=D[1],C=function(e){return function(){return I(e)}},M=S||{},O=M.planId,A=M.planActiveDirectDebit,L=M.planTotalPayablePrice,T=M.planMessage||{},J=T.planMessageTitle,B=T.planMessageDescription,R=(0,o.V)({disabled:!i,apiMethod:m,apiData:{isHideDirectDebit:void 0!==u&&u},onSuccess:function(e){var i=e.plans,s=e.services;(0,x.x)(i)||(g(i),I(i[0])),(0,x.x)(s)||y(s)}}).pending;return(0,t.jsxs)(r.Modal,{shouldCloseOnOverlayClick:!1,width:600,height:"auto",isOpen:i,headerTitle:"خرید اشتراک دیجی‌پلاس",onDismiss:h,closeIconCroId:c.h.PLUS_ON_MODAL_CLOSE,footer:s?(0,t.jsx)(P,{price:L,isPending:R,planId:O,onAddSubscriptionCallback:p,onCloseModal:h}):(0,t.jsx)(_,{price:L,isPending:R,planId:O}),children:[(0,t.jsx)(a.i,{slides:R?Array.from({length:3}).map(function(e,i){return(0,t.jsx)(z,{isDesktop:f},i)}):null==b?void 0:b.map(function(e){return(0,t.jsx)(k,{planItem:e,activePlanId:O,onClickPlan:C})}),navigationButtonClassName:Z,spaceBetween:12,slidesPerView:f?3:2}),A&&(0,t.jsx)(v,{title:J,description:B}),(0,t.jsx)(U,{isPending:R,services:w})]})}},65916:function(e){e.exports={SubscriptionModalPlanSlide__planItem:"styles_SubscriptionModalPlanSlide__planItem__mrL54","SubscriptionModalPlanSlide__planItem--activated":"styles_SubscriptionModalPlanSlide__planItem--activated__dIZKs"}},68882:function(e){e.exports={button:"styles_button__1hf8f","button--prev":"styles_button--prev__Y8PJe","button--next":"styles_button--next__Wm8F0"}}}]);