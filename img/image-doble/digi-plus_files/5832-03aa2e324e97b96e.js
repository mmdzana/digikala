(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5832],{26956:function(e,s,n){"use strict";n.d(s,{x:function(){return l}});var t=n(52322),i=n(57931),r=n(98780),a=n(52216),o=n(72677);function l(e){var s=e.className,n=e.likeCount,l=e.dislikeCount,c=e.onLike,u=e.onDislike,d=e.isComments,m=void 0!==d&&d,x=e.isLoadingLike,h=e.isLoadingDislike,f=e.isLike,w=e.isDislike,p=e.thumbsUpCroId,v=e.thumbsDownCroId,q=(0,o.d)("d-flex ai-center pt-3 color-500",s),N=(0,o.d)("text-body-2 ml-10-lg",{"d-none d-block-lg":!m}),A=(0,o.d)({"color-hint-text-success":f,"color-400":!f}),k=(0,o.d)({"color-hint-text-error":w,"color-400":!w}),b=(0,o.d)("mr-1",{"text-hint-success-text":f,"color-400":!f}),g=(0,o.d)("mr-1",{"color-hint-text-error":w,"color-400":!w});return(0,t.jsxs)("div",{className:q,children:[(0,t.jsxs)("p",{className:N,children:["آیا این ",m?"دیدگاه":"پاسخ"," مفید بود؟"]}),(0,t.jsxs)("div",{className:"mr-auto mr-0-lg d-flex ai-center",children:[(0,t.jsx)(i.z,{isLoading:x,onClick:c,hasCustomMode:!0,mode:"text",size:"small",className:A,CROId:p,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,a.U)(void 0===n?0:n)}),(0,t.jsx)(r.J,{icon:"thumbsUp",className:b,size:20,color:f?"success":"low-emphasis"})]})}),(0,t.jsxs)(i.z,{isLoading:h,onClick:u,hasCustomMode:!0,mode:"text",removePadding:!0,className:k,CROId:v,children:[(0,t.jsx)("p",{children:(0,a.U)(void 0===l?0:l)}),(0,t.jsx)(r.J,{icon:"thumbsDown",className:g,size:20,color:w?"error":"low-emphasis"})]})]})]})}},55972:function(e,s,n){"use strict";n.d(s,{M:function(){return f}});var t=n(66383),i=n(52322),r=n(2784),a=n(57931),o=n(98723),l=n(50603),c=n(26442),u=n(11559),d=n(55059),m=n(45227),x=(0,n(1324).q)({type:m.XN.POST,url:function(e){var s=e.questionId;return"questions/".concat(s,"/answer/add/")},transformer:d.u,inputTransformer:function(e){return{answer:e.answer}}}),h=n(85009);function f(e){var s=e.answerModalData,n=e.onClose,d=s||{},m=d.isOpen,f=d.questionId,w=d.questionText,p=d.successCallback,v=(0,t.Z)((0,r.useState)(""),2),q=v[0],N=v[1],A=(0,t.Z)((0,r.useState)(!1),2),k=A[0],b=A[1],g=(0,u.Z)({apiMethod:x}),j=g.request,C=g.pending,I=function(){j({questionId:f,answer:q}).then(function(){n(),p()})};(0,r.useEffect)(function(){m&&N("")},[m]);var L=(0,r.useMemo)(function(){return(0,i.jsxs)("div",{className:"d-flex-lg ai-center jc-between",children:[(0,i.jsx)("div",{className:"w-full 50-lg pl-4-lg",children:(0,i.jsx)(a.z,{size:"large",onClick:I,className:"w-full",disabled:!k,isLoading:C,CROId:"pdp-submit-answer",children:"ثبت پاسخ"})}),(0,i.jsxs)("p",{className:"align-center mt-2 grow-1",children:["ثبت پاسخ به معنی موافقت با",(0,i.jsx)(o.r,{target:"_blank",to:c.m,className:"mx-1 color-secondary-500",children:"قوانین انتشار دیجی‌کالا"}),"است."]})]})},[I]);return(0,i.jsx)(l.Modal,{isFullScreen:!0,isOpen:m,onDismiss:n,headerTitle:"به این پرسش پاسخ دهید",footer:L,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-body-1 mb-4",children:w}),(0,i.jsx)(h.F,{label:"پاسخ",onChange:function(e){N(e)},handleCanSubmit:b,maxLength:500,resetValue:m})]})})}},47674:function(e,s,n){"use strict";n.d(s,{Q:function(){return p}});var t=n(66383),i=n(52322),r=n(2784),a=n(98780),o=n(72677),l=n(41435),c=n(57931),u=n(74607);function d(e){var s=e.openAnswerModal,n=e.buttonText,t=e.CROId,r=e.className;return(0,i.jsx)("div",{className:(0,o.d)("mr-10",r),children:(0,i.jsxs)(c.z,{mode:"text",size:"small",color:"secondary",onClick:s,CROId:t,className:"mt-3 color-secondary-500",children:[n,(0,i.jsx)(a.J,{icon:"chevronLeft",color:"secondary",size:16,className:"mx-2"})]})})}var m=n(73739);function x(e){var s=e.className;return(0,i.jsx)(m.k,{className:s,icon:"infoOutline",children:"پاسخ شما ثبت شد و پس از بررسی و تایید نمایش داده خواهد شد."})}function h(e){var s=e.answers,n=e.questionText,t=e.submitted,r=e.showAllAnswers,o=e.setShowAllAnswers,l=e.openAnswerModal,m=e.className;return r||1===s.length?(0,i.jsxs)("div",{className:m,children:[s.map(function(e){return(0,i.jsx)(u.s,{className:"br-list-vertical-no-padding",questionAnswer:e,questionText:n},e.questionAnswerId)}),t?(0,i.jsx)(x,{}):(0,i.jsx)(d,{className:"border-t mt-4",buttonText:"ثبت پاسخ جدید",openAnswerModal:l})]}):s.length>1?(0,i.jsxs)("div",{className:m,children:[(0,i.jsx)(u.s,{questionAnswer:s[0],questionText:n}),(0,i.jsxs)(c.z,{shape:"text",color:"secondary",onClick:function(){o(!0)},className:"mt-2 mb-3 pr-0 mr-10 font-bold color-secondary-500",children:["مشاهده‌ی پاسخ‌های دیگر",(0,i.jsx)(a.J,{icon:"expandMore",color:"secondary",className:"mx-2",size:24})]})]}):null}function f(e){var s=e.submitted,n=e.openAnswerModal,t=e.className;return s?(0,i.jsx)(x,{className:(0,o.d)("mt-4",t)}):(0,i.jsx)(d,{buttonText:"ثبت پاسخ‌",CROId:"pdp-answer",className:(0,o.d)("border-t mt-4",t),openAnswerModal:n})}var w=(0,r.memo)(function(e){var s=e.answers,n=e.questionId,a=e.questionText,o=e.showAllAnswers,c=e.setShowAllAnswers,u=e.openAnswerModal,d=(0,t.Z)((0,r.useState)(!1),2),m=d[0],x=d[1],w=function(){x(!0)};(0,r.useEffect)(function(){},[m]);var p=function(){u({questionId:n,questionText:a,successCallback:w})};return(0,l.x)(s)?(0,i.jsx)(f,{submitted:m,openAnswerModal:p}):(0,i.jsx)(h,{answers:s,questionText:a,submitted:m,showAllAnswers:o,setShowAllAnswers:c,openAnswerModal:p})});function p(e){var s=e.className,n=e.question,l=e.openAnswerModal,c=n||{},u=c.questionAnswers,d=c.questionText,m=c.questionId,x=(0,t.Z)((0,r.useState)(!1),2),h=x[0],f=x[1];return(0,i.jsxs)("article",{className:(0,o.d)(s,"py-3"),children:[(0,i.jsxs)("div",{className:"d-flex ai-start",children:[(0,i.jsx)("span",{className:"mt-1 ml-4",children:(0,i.jsx)(a.J,{icon:"question",color:"secondary",size:24})}),(0,i.jsx)("p",{className:"text-subtitle w-full",children:d})]}),(0,i.jsx)(w,{questionId:m,answers:u,questionText:d,showAllAnswers:h,setShowAllAnswers:f,openAnswerModal:l})]})}},74607:function(e,s,n){"use strict";n.d(s,{s:function(){return j}});var t=n(66383),i=n(52322),r=n(2784),a=n(17165),o=n(45756),l=n(66781),c=n(82650),u=n(11559),d=n(41435),m=n(55059),x=n(45227),h=n(1324),f=n(12694),w=(0,h.q)({type:x.XN.POST,url:function(e){var s=e.answerId;return"answers/".concat(s,"/like/")},inputTransformer:function(e){var s=e.type;return(0,f.s)({type:s})},transformer:m.u}),p=n(26956),v=n(31969),q=n(98780),N=n(31909),A=n(61695),k=n(82332),b=n(72677);function g(e){var s=e.className,n=e.media,t=e.onClick,r=n.mediaUrl,a=n.mediaType,o=n.mediaThumbnailUrl,l=(0,k.t)(a,A.L.VIDEO);return(0,i.jsxs)("div",{className:(0,b.d)(s,"pos-relative pointer"),onClick:t,children:[(0,i.jsx)(N.E,{alt:"question-answer-media",src:l?o:r,radius:8,height:50,width:50}),l&&(0,i.jsx)(q.J,{size:24,className:"pos-absolute bottom-0 left-0",icon:"playSimple",color:"white"})]})}function j(e){var s=e.className,n=e.questionAnswer,m=e.questionText,x=e.isInDetailModal,h=n||{},f=h.questionAnswerId,q=h.questionAnswerText,N=h.questionAnswerType,A=h.questionAnswerSender,k=h.questionAnswerUserReaction,b=h.questionAnswerReactionsLikes,j=h.questionAnswerHasQABadge,C=h.questionAnswerReactionsDisLikes,I=h.questionAnswerMedias,L=(0,t.Z)((0,r.useState)(!![k].includes(v.d.LIKE)),2),y=L[0],S=L[1],T=(0,t.Z)((0,r.useState)(!![k].includes(v.d.DISLIKE)),2),R=T[0],D=T[1],M=(0,t.Z)((0,r.useState)({questionAnswerReactionsLikes:b,questionAnswerReactionsDisLikes:C}),2),_=M[0],E=M[1],z=function(e){E({questionAnswerReactionsLikes:null==e?void 0:e.likes,questionAnswerReactionsDisLikes:null==e?void 0:e.dislikes}),n.questionAnswerReactionsDisLikes=null==e?void 0:e.dislikes,n.questionAnswerReactionsLikes=null==e?void 0:e.likes},U=(0,u.E)({apiMethod:w,onSuccess:z}),O=U.request,Z=U.pending,K=(0,u.E)({apiMethod:w,onSuccess:z}),P=K.request,H=K.pending,J=(0,c.z)().emit,Q=function(){return J(l.P8,{questionAnswer:n,questionText:m})};return(0,i.jsxs)("div",{className:s,children:[(0,i.jsxs)("div",{className:"d-flex ai-center mt-4 color-600",children:[(0,i.jsx)("p",{className:"text-caption ml-4",children:"پاسخ"}),(0,i.jsx)("div",{className:"grow-1",children:(0,i.jsx)("p",{className:"text-body-1",children:q})})]}),(0,i.jsxs)("div",{className:"d-flex flex-column jc-center mr-10",children:[!x&&!(0,d.x)(I)&&(0,i.jsx)("div",{className:"d-flex flex-wrap gap-2 mt-3 mb-3-lg mb-4",children:I.map(function(e){return(0,i.jsx)(g,{media:e,onClick:Q})})}),(0,i.jsx)("p",{className:"text-caption color-400",children:A}),j?(0,i.jsx)(a.C,{size:"small",text:"نماینده برند",className:"mr-2",textClasses:"color-000",bgColor:"neutral-400"}):"buyer"===N?(0,i.jsx)(a.C,{size:"small",text:"خریدار",className:"mr-2",textClasses:"color-500",bgColor:"app-background"}):null,(0,i.jsx)(p.x,{onLike:function(){O({type:v.d.LIKE,answerId:f}).then(function(e){e.likes>_.questionAnswerReactionsLikes?(S(!0),n.questionAnswerUserReaction=v.d.LIKE):(S(!1),n.questionAnswerUserReaction="")}).finally(function(){D(!1)})},isLike:y,className:"mr-auto",onDislike:function(){P({answerId:f,type:v.d.DISLIKE}).then(function(e){e.dislikes>_.questionAnswerReactionsDisLikes?(D(!0),n.questionAnswerUserReaction=v.d.DISLIKE):(D(!1),n.questionAnswerUserReaction="")}).finally(function(){S(!1)})},isDislike:R,isLoadingLike:Z,isLoadingDislike:H,likeCount:null==_?void 0:_.questionAnswerReactionsLikes,dislikeCount:null==_?void 0:_.questionAnswerReactionsDisLikes,thumbsUpCroId:o.h.PDP_QUESTION_LIKE,thumbsDownCroId:o.h.PDP_QUESTION_DISLIKE})]})]})}},85009:function(e,s,n){"use strict";n.d(s,{F:function(){return l}});var t=n(66383),i=n(52322),r=n(2784),a=n(47),o=n(52216),l=(0,r.forwardRef)(function(e,s){var n=e.label,l=e.onChange,c=e.maxLength,u=e.className,d=e.handleCanSubmit,m=e.resetValue,x=void 0===m||m,h=(0,t.Z)((0,r.useState)(""),2),f=h[0],w=h[1];(0,r.useImperativeHandle)(s,function(){return{resetInput:p}},[]),(0,r.useEffect)(function(){d(f.length>0&&f.length<=c&&f.trim().length>6),l&&l(f)},[f,c]),(0,r.useEffect)(function(){x&&w("")},[x]);var p=function(){w("")};return(0,i.jsxs)("div",{className:u,children:[(0,i.jsx)(a.K,{value:f,label:n,maxLength:c,onChange:function(e){w(e.target.value)},className:"text-body-2 w-full"}),(0,i.jsxs)("div",{className:"color-400 text-body-2 mr-4 align-left",children:[(0,o.U)(c),"/",(0,o.U)(f.length)]})]})})},31969:function(e,s,n){"use strict";n.d(s,{d:function(){return t}});var t={LIKE:"like",DISLIKE:"dislike"}},55059:function(e,s,n){"use strict";function t(e){var s=e.data||{};return{dislikes:s.dislikes,likes:s.likes}}n.d(s,{u:function(){return t}})},47:function(e,s,n){"use strict";n.d(s,{K:function(){return x}});var t=n(70865),i=n(52322),r=n(96670),a=n(26297),o=n(2784),l=n(9280),c=n(30952),u=n(50158),d=n.n(u),m=(0,o.forwardRef)(function(e,s){var n=e.name,o=e.label,u=e.size,m=e.disabled,x=e.required,h=e.error,f=e.helper,w=e.successPhrase,p=e.fullWidth,v=e.placeholder,q=e.containerClassName,N=e.textareaClassName,A=e.className,k=(0,a.Z)(e,["name","label","size","disabled","required","error","helper","successPhrase","fullWidth","placeholder","containerClassName","textareaClassName","className"]);return(0,i.jsx)(l.Z,{size:void 0===u?"normal":u,label:o,disabled:m,required:x,error:h,helper:f,successPhrase:w,fullWidth:p,containerClassName:(0,c.dh)("px-2 bg-100 bg-000-lg",d().container,d().frameHeightAuto,q),labelClassName:"mr-4 text-body-1 color-700",helperClassName:"mt-2 pr-3 text-body-1 color-400",errorClassName:"mt-2 pr-3 text-body-2 color-hint-text-error",requiredClassName:"color-primary-500",className:A,children:(0,i.jsx)("textarea",(0,r.Z)((0,t.Z)({},k),{className:(0,c.dh)("py-2 px-3 text-subtitle w-100",d().textarea,N),name:n,disabled:m,onKeyUp:function(e){if(""===e.target.value.trim()){e.target.style.height="auto";return}e.target.style.height="".concat(e.target.scrollHeight,"px")},placeholder:v,ref:s}))})});function x(e){return(0,i.jsx)(m,(0,t.Z)({},e))}},45507:function(e,s,n){"use strict";n.d(s,{v:function(){return i}});var t=n(95976);function i(e){var s=e.data||{},n=s.id,i=s.text,r=s.answer_count,a=s.sender,o=s.created_at,l=s.answers;return{questionId:n,questionText:i,questionAnswerCount:r,questionSender:a,questionCreatedAt:o,questionAnswers:null==l?void 0:l.map(function(e){var s,n,i,r,a,o,l,c,u,d,m,x,h,f;return i=(n=e||{}).id,r=n.has_qa_badge,a=n.text,o=n.reactions,l=n.created_at,c=n.sender,u=n.type,d=n.user_reaction,m=n.files,h=(x=o||{}).likes,f=x.dislikes,{questionAnswerId:i,questionAnswerHasQABadge:!!r,questionAnswerText:a,questionAnswerReactions:{likes:(s=o||{}).likes,dislikes:s.dislikes},questionAnswerCreatedAt:l,questionAnswerSender:c,questionAnswerType:u,questionAnswerUserReaction:d,questionAnswerMedias:(void 0===m?[]:m).map(function(e){return(0,t.w)({data:e})}),questionAnswerReactionsLikes:h,questionAnswerReactionsDisLikes:f}})}}},95976:function(e,s,n){"use strict";n.d(s,{w:function(){return i}});var t=n(61695);function i(e){var s=e.data||{},n=s.storage_ids,i=s.url,r=s.temporary_id,a=s.thumbnail_url;return{mediaStorageIds:n||[],mediaUrl:null==i?void 0:i[0],mediaTemporaryId:r,mediaThumbnailUrl:(null==a?void 0:a[0])||"",mediaType:function(e){var s,n,i,r;if(!e)return t.L.UNKNOWN;switch(null===(s=/(\w+)\.([1-9A-Za-z]{3,4})(?=\?|$)/.exec(e))||void 0===s?void 0:null===(n=s.slice)||void 0===n?void 0:null===(i=n.call(s,-1))||void 0===i?void 0:null===(r=i[0])||void 0===r?void 0:r.toLowerCase()){case"jpg":case"jpeg":case"svg":case"png":return t.L.IMAGE;case"mp4":case"mkv":case"webm":return t.L.VIDEO;default:return t.L.UNKNOWN}}(null==i?void 0:i[0])}}},50158:function(e){e.exports={textarea:"styles_textarea__WQzCM",container:"styles_container__JqZxq",frameHeightAuto:"styles_frameHeightAuto__8BmMM"}}}]);