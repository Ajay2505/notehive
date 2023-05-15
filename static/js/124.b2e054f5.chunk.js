"use strict";(self.webpackChunkajay=self.webpackChunkajay||[]).push([[124],{6124:function(e,r,t){t.r(r),t.d(r,{default:function(){return w},loader:function(){return j}});var n=t(4165),a=t(5861),s=t(9434),o=t(3875),l=t(9232),i=t(9291),u=t(2892),c=t(7689),d=t(8174),m=t(2499),p=t(184);function f(){var e=(0,s.I0)(),r=(0,c.s0)(),t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var s,i,u,c,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=a.target,i=s.email,u=s.password,e((0,o.Kf)({loader:!0})),t.prev=3,t.next=6,(0,m.jW)({email:i.value,password:u.value});case 6:c=t.sent,e((0,l.oE)({token:c.userData.token,name:c.userData.name})),e((0,l.vA)(!0)),r("/home"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),p=t.t0.message,d.Am.error(p);case 16:e((0,o.Kf)({loader:!1}));case 17:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:t,className:"flex flex-col gap-3",children:[(0,p.jsxs)("div",{className:"w-full flex flex-col relative pt-3",children:[(0,p.jsx)("input",{required:!0,name:"email",className:"outline-none rounded-md border-2 focus:border-2 focus:border-[#f5ba13] p-2",type:"email",placeholder:"Email"}),(0,p.jsx)("label",{className:"text-xs ml-3 font-semibold duration-300",children:"Email"})]}),(0,p.jsxs)("div",{className:"w-full flex flex-col relative pt-3",children:[(0,p.jsx)("input",{required:!0,minLength:7,name:"password",autoComplete:"off",className:"outline-none rounded-md border-2 focus:border-2 focus:border-[#f5ba13] p-2",type:"password",placeholder:"Password"}),(0,p.jsx)("label",{className:"ml-3 duration-300 font-semibold text-xs",children:"Password"})]}),(0,p.jsx)("button",{type:"submit",className:"w-fit duration-100 shadow-lg p-2 px-3 text-white rounded-lg bg-green-600 hover:bg-green-500",children:"Login"})]}),(0,p.jsxs)("p",{children:["Dont have an account? ",(0,p.jsx)("span",{onClick:function(){return e((0,l.$U)({formType:"signup"}))},className:"cursor-pointer text-blue-600 relative underlineAnime",children:"Sign Up!"})]}),(0,p.jsxs)("p",{onClick:function(){return e((0,l.$U)({formType:"otpLogin"}))},className:"text-blue-600 w-fit relative underlineAnime cursor-pointer hoverAr",children:["Login using OTP ",(0,p.jsx)("i",{className:"fa-solid duration-500 fa-arrow-right child:text-red-400"})]}),(0,p.jsxs)("p",{onClick:function(){return r("/home")},className:"text-blue-600 w-fit relative underlineAnime cursor-pointer hoverAr",children:["Continue as Guest ",(0,p.jsx)("i",{className:"fa-solid duration-500 fa-arrow-right child:text-red-400"})]})]})}var x=t(9439),h=t(2791),v=t(8768),g=t(7665);function b(){var e=(0,h.useState)(!1),r=(0,x.Z)(e,2),t=r[0],i=r[1],u=(0,h.useState)(!1),f=(0,x.Z)(u,2),b=f[0],w=f[1],j=(0,h.useState)(""),N=(0,x.Z)(j,2),y=N[0],k=N[1],Z=(0,h.useState)(""),A=(0,x.Z)(Z,2),L=A[0],S=A[1],C=(0,s.v9)(l.IL),D=(0,s.I0)(),I=(0,c.s0)(),K=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),"otpLogin"!==C&&S(r.target.name.value),k(r.target.email.value),D((0,o.Kf)({loader:!0})),e.prev=4,e.next=7,(0,m.IV)({email:r.target.email.value,type:"otpLogin"===C});case 7:t=e.sent,d.Am.success(t.message),i(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),d.Am.error(e.t0.message);case 15:D((0,o.Kf)({loader:!1}));case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(r){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s,i,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),D((0,o.Kf)({loader:!0})),e.prev=2,e.next=5,(0,m.YQ)({email:y,otp:r.target.otp.value,name:L,type:"otpLogin"===C});case 5:u=e.sent,localStorage.setItem("notehubData",{token:null===u||void 0===u||null===(t=u.userData)||void 0===t?void 0:t.token,name:null===u||void 0===u||null===(a=u.response)||void 0===a?void 0:a.name}),d.Am.success(u.message),D((0,l.oE)({token:null===u||void 0===u||null===(s=u.userData)||void 0===s?void 0:s.token,name:null===u||void 0===u||null===(i=u.userData)||void 0===i?void 0:i.name})),D((0,l.vA)(!0)),"otpLogin"===C?I("/home"):w(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),d.Am.error(e.t0.message);case 16:D((0,o.Kf)({loader:!1}));case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(r){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!1),e.next=4,(0,m.bG)({email:y,type:"otpLogin"===C});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),r=e.t0.message,d.Am.error(r);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t=r.target,a=t.initPassword,!((s=t.password).value<7)){e.next=5;break}return d.Am.error("Please choose a stronger password!"),e.abrupt("return");case 5:if(a.value===s.value){e.next=8;break}return d.Am.error("Incorrect password!"),e.abrupt("return");case 8:return D((0,o.Kf)({loader:!0})),e.prev=9,e.next=12,(0,v.Uq)({password:r.target.password.value});case 12:l=e.sent,d.Am.success(null===l||void 0===l?void 0:l.message),I("/home"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),d.Am.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 20:D((0,o.Kf)({loader:!1}));case 21:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(r){return e.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:b?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:"w-full text-right text-blue-600",children:(0,p.jsxs)("span",{onClick:function(){return I("/home")},className:"w-fit underlineAnime relative cursor-pointer hoverAr",children:["Skip for now? ",(0,p.jsx)("i",{className:"fa-solid duration-500 fa-arrow-right"})]})}),(0,p.jsxs)("form",{onSubmit:E,className:"flex flex-col gap-3",children:[(0,p.jsx)(g.Z,{}),(0,p.jsx)("button",{className:"duration-500 w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500",type:"submit",children:"Confirm"})]})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:"w-full text-right text-blue-600",children:(0,p.jsxs)("span",{onClick:function(){return D((0,l.$U)({formType:"login"}))},className:"w-fit underlineAnime relative after:right-0 after:left-auto cursor-pointer hoverAl",children:[(0,p.jsx)("i",{className:"fa-solid duration-500 fa-arrow-left"})," Back"]})}),(0,p.jsxs)("form",{onSubmit:t?P:K,className:"flex flex-col gap-2",children:["signup"===C&&(0,p.jsxs)("div",{className:"flex flex-col w-full relative pt-3",children:[(0,p.jsx)("input",{disabled:t,required:!0,minLength:3,name:"name",type:"text",className:"outline-none border-2 rounded-md focus:border-2 focus:border-[#f5ba13] p-2",placeholder:"Name"}),(0,p.jsx)("label",{children:"Name"})]}),(0,p.jsxs)("div",{className:"flex flex-col w-full relative pt-3",children:[(0,p.jsx)("input",{required:!0,disabled:t,className:"outline-none border-2 rounded-md focus:border-2 focus:border-[#f5ba13] p-2",type:"email",name:"email",placeholder:"Email"}),(0,p.jsx)("label",{children:"Email"})]}),(0,p.jsx)("button",{className:"".concat(t&&"hide"," w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500"),type:"submit",name:"button",children:"Send OTP"}),(0,p.jsxs)("div",{className:"".concat(!t&&"hidden"," flex flex-col w-full relative pt-3"),children:[(0,p.jsx)("input",{className:"duration-500 outline-none border-2 rounded-md focus:border-2 focus:border-[#f5ba13] p-2",type:"number",name:"otp",placeholder:"OTP"}),(0,p.jsx)("label",{children:"OTP"})]}),(0,p.jsx)("button",{className:"".concat(!t&&"hide"," duration-500 w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500"),type:"submit",children:"otpLogin"===C?"Login":"Confirm"})]}),(0,p.jsx)("p",{onClick:T,className:"".concat(!t&&"hide"," underlineAnime relative duration-500 cursor-pointer w-fit text-blue-600"),children:"Wrong Email?"})]})})}function w(){var e=(0,s.v9)(o.lk),r=(0,s.v9)(l.IL);return(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)(u.Z,{}),(0,p.jsxs)("div",{className:"w-screen relative h-screen overflow-x-hidden gap-y-5 py-7 lg:py-0 overflow-y-auto flex flex-col justify-center items-center",children:[(0,p.jsx)(i.Z,{}),(0,p.jsxs)("div",{className:"boxShadow bg-white text-sm mt-44 lg:mt-32 duration-1000 sm:text-base lg:text-lg p-6 w-[90%] md:w-1/2 lg:w-2/5 rounded-md flex flex-col gap-4",children:["login"===r&&(0,p.jsx)(f,{}),("signup"===r||"otpLogin"===r)&&(0,p.jsx)(b,{})]}),(0,p.jsx)("div",{className:"h-fit boxShadow duration-300 p-3 rounded-lg bg-gray-200 w-[90%] md:w-1/2 lg:w-2/5",children:(0,p.jsxs)("p",{className:" sm:text-base lg:text-lg",children:[(0,p.jsx)("span",{className:"text-red-700 font-semibold text-lg",children:"Notice: "}),"We are currently experiencing a slight issue with our backend system. As a result, our login feature is temporarily unavailable. However, you can still continue to browse our website as a ",(0,p.jsx)("span",{className:"text-green-700 font-semibold",children:"Guest"})," and even add notes, which will be backed up once you sign in. We apologize for any inconvenience this may cause and our team is working to resolve the issue as quickly as possible. Thank you for your patience and understanding."]})})]})]})}function j(){return N.apply(this,arguments)}function N(){return(N=(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(r=JSON.parse(localStorage.getItem("notehubData")))||void 0===r?void 0:r.token){e.next=3;break}return e.abrupt("return",{});case 3:return window.location.href="/home",e.abrupt("return",{});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=124.b2e054f5.chunk.js.map