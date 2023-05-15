"use strict";(self.webpackChunkajay=self.webpackChunkajay||[]).push([[796],{8796:function(e,t,r){r.r(t),r.d(t,{default:function(){return k},loader:function(){return C}});var n=r(4165),o=r(5861),a=r(9439),l=r(9434),s=r(2791),i=r(7689),c=r(8174),u=r(8768),d=r(512),x=r(184);function v(){var e=(0,l.I0)(),t=(0,s.useState)(!0),r=(0,a.Z)(t,2),i=r[0],v=r[1],m=(0,s.useState)("#000000"),f=(0,a.Z)(m,2),h=f[0],p=f[1],b=(0,s.useState)("#FFFFFF"),g=(0,a.Z)(b,2),j=g[0],w=g[1],y=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o,a,l,s,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),o=r.target,a=o.title,l=o.note,a.value||l.value){t.next=5;break}return c.Am.error("Sorry cannot add an empty note!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,(0,u.Ip)({title:a.value.trim(),note:l.value.trim(),textColor:h,noteBg:j});case 8:s=t.sent,e((0,d.l$)({note:null===s||void 0===s?void 0:s.note})),a.value="",l.value="",v(!0),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),i=t.t0.message,c.Am.error(i);case 19:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{onClick:function(){return v(!0)},className:"flex w-full justify-center mt-24 md:mt-28 lg:mt-32",children:(0,x.jsxs)("form",{onSubmit:y,onClick:function(e){v(!1),e.stopPropagation()},className:"".concat(i?"":"pb-7"," shadow-lg duration-500 flex relative flex-col gap-4 w-11/12 md:w-8/12 lg:w-5/12 h-fit p-3 md:p-6 rounded-lg bg-white"),children:[(0,x.jsxs)("div",{className:"".concat(i?"hide":"animateLines"," w-full relative pt-3"),children:[(0,x.jsx)("input",{placeholder:"Title",name:"title",className:"duration-500 w-full outline-none rounded-md border-2 focus:border-2 focus:border-[#f5ba13] p-2",type:"text"}),(0,x.jsx)("label",{children:"Title"})]}),(0,x.jsxs)("div",{className:"w-full relative pt-2",children:[(0,x.jsx)("textarea",{rows:i?1:3,name:"note",placeholder:"Note",className:"duration-500 resize-none w-full outline-none rounded-md border-2 focus:border-2 focus:border-[#f5ba13] p-2",type:"text"}),(0,x.jsx)("label",{children:"Note"})]}),(0,x.jsxs)("div",{className:"".concat(i&&"hide -z-10"," duration-500 max-sm:gap-9 flex justify-evenly"),children:[(0,x.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,x.jsx)("label",{className:"relative",htmlFor:"textColor",children:(0,x.jsx)("i",{className:"fa-solid fa-t text-base leading-3 cursor-pointer px-[.7rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-blue-400 lg:hover:bg-blue-400 hover:border-blue-400 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"})}),(0,x.jsx)("input",{onChange:function(e){return p(e.target.value)},name:"textColor",value:h,type:"color",className:"relative cursor-pointer",id:"textColor"})]}),(0,x.jsxs)("div",{className:"flex gap-2 justify-center items-center",children:[(0,x.jsx)("label",{className:"relative",htmlFor:"bgColor",children:(0,x.jsx)("i",{className:"fa-solid fa-palette text-base leading-3 cursor-pointer px-[.6rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-[#f5ba13] lg:hover:bg-[#f5ba13] hover:border-yellow-500 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"})}),(0,x.jsx)("input",{onChange:function(e){return w(e.target.value)},name:"noteBg",value:j,type:"color",className:"relative cursor-pointer",id:"bgColor"})]})]}),(0,x.jsx)("button",{name:"button",type:"submit",className:"".concat(i&&"hide -z-10"," select-none border-2 border-[#f5ba13] hover:bg-yellow-300 focus:outline-none focus:border-2 focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-700 absolute right-5 -bottom-5 w-fit py-2 px-3 text-sm md:text-base rounded-full bg-[#f5ba13] text-white"),children:(0,x.jsx)("i",{className:"fa-solid fa-plus"})})]})})})}var m=r(3875);function f(e){var t,r=e.note,n=(0,l.I0)(),o=(0,l.v9)(m.ev);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{style:{backgroundColor:null===r||void 0===r?void 0:r.noteBg,color:null===r||void 0===r?void 0:r.textColor,opacity:(null===o||void 0===o||null===(t=o.note)||void 0===t?void 0:t._id)===(null===r||void 0===r?void 0:r._id)?"0":"1"},onClick:function(){return n((0,m.Lm)({note:r,modalState:!0}))},className:"scaleAnime scrollBar relative shadow-md border hover:border overflow-y-hidden hover:overflow-y-auto hover:border-[#777] hover:shadow-lg duration-300 cursor-pointer p-4 rounded-lg max-md:mx-auto w-full h-fit max-h-[50vh] lg:max-h-[30vh] md:w-fit md:max-w-[47%] md:min-w-[250px]",children:[(0,x.jsx)("h1",{className:"focus:outline-none text-center mb-1 font-bold text-lg md:text-xl",children:null===r||void 0===r?void 0:r.title}),null===r||void 0===r?void 0:r.note.split("\n").map((function(e,t){return(0,x.jsx)("p",{children:e},t)}))]})})}function h(){var e=(0,l.v9)(d.Kk);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"flex justify-start gap-4 flex-wrap my-10  w-screen h-fit px-[2vw] md:px-[5vw]",children:null!==e&&void 0!==e&&e.length?null===e||void 0===e?void 0:e.map((function(e){return(0,x.jsx)(f,{note:e},null===e||void 0===e?void 0:e._id)})):""})})}var p=r(9291),b=r(2892);function g(){var e=(0,l.I0)(),t=(0,l.v9)(m.ev).note,r=(0,l.v9)(m.lk),i=(0,s.useState)(null===t||void 0===t?void 0:t.title),v=(0,a.Z)(i,2),f=v[0],h=v[1],p=(0,s.useState)(null===t||void 0===t?void 0:t.note),g=(0,a.Z)(p,2),j=g[0],w=g[1],y=(0,s.useState)(null===t||void 0===t?void 0:t.noteBg),N=(0,a.Z)(y,2),k=N[0],C=N[1],S=(0,s.useState)(null===t||void 0===t?void 0:t.textColor),Z=(0,a.Z)(S,2),A=Z[0],F=Z[1],I=function(){var r=(0,o.Z)((0,n.Z)().mark((function r(){var o;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e((0,m.Kf)({loader:!0})),r.prev=1,r.next=4,(0,u.Qu)(t._id);case 4:e((0,m.nC)()),e((0,d.xH)({_id:null===t||void 0===t?void 0:t._id})),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),o=r.t0.message,c.Am.error(o);case 12:e((0,m.Kf)({loader:!1}));case 13:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}(),z=function(){var r=(0,o.Z)((0,n.Z)().mark((function r(o){var a,l;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e((0,m.Kf)({loader:!0})),o.target.disabled=!0,r.prev=2,r.next=5,(0,u.w3)({note:t,title:f,noteText:j,noteBg:k,textColor:A});case 5:a=r.sent,c.Am.success(null===a||void 0===a?void 0:a.message),e((0,d.BI)({note:null===a||void 0===a?void 0:a.note})),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(2),l=r.t0.message,c.Am.error(l);case 14:o.target.disabled=!1,e((0,m.nC)());case 16:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[r&&(0,x.jsx)(b.Z,{}),(0,x.jsx)("div",{onClick:function(){return e(e((0,m.nC)()))},className:"w-screen h-screen left-0 top-0 z-40 fixed flex justify-center items-center bg-[rgba(0,0,0,0.55)]",children:(0,x.jsxs)("div",{onClick:function(e){return e.stopPropagation()},style:{backgroundColor:k,color:A},className:"bg-white border-2 boxShadow border-white rounded-md duration-200 relative scaleAnime flex flex-col w-full h-fit max-w-[90vw] max-h-[90vh] overflow-y-auto md:w-1/2 p-2 sm:px-7",children:[(0,x.jsx)("i",{onClick:function(){return e(e((0,m.nC)()))},className:"fa-solid fa-xmark absolute right-6 top-4 py-[.3rem] px-[.5rem] cursor-pointer rounded-full bg-white text-red-600"}),(0,x.jsx)("h1",{className:"text-lg text-center font-semibold mt-5",children:"Edit Note!"}),(0,x.jsx)("hr",{})," ",(0,x.jsx)("br",{}),(0,x.jsx)("input",{placeholder:"Title",className:"text-center placeholder:text-inherit placeholder:opacity-40 bg-inherit text-inherit outline-none font-bold text-lg mb-3",value:f,onChange:function(e){return h(e.target.value)}}),(0,x.jsx)("textarea",{placeholder:"Note",rows:"5",onChange:function(e){return w(e.target.value)},value:j,className:"outline-none placeholder:opacity-40 placeholder:text-inherit text-inherit scrollBar bg-inherit resize-none"}),(0,x.jsxs)("div",{className:"flex max-lg:flex-col justify-center items-center",children:[(0,x.jsxs)("div",{className:"flex justify-evenly items-center my-7 w-full",children:[(0,x.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,x.jsx)("label",{className:"relative text-inherit",htmlFor:"textColor",children:(0,x.jsx)("i",{className:"fa-solid fa-t text-base leading-3 cursor-pointer px-[.7rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-blue-400 lg:hover:bg-blue-400 hover:border-blue-400 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"})}),(0,x.jsx)("input",{onChange:function(e){return F(e.target.value)},name:"textColor",value:A,type:"color",className:"relative opacity-0 -z-10 -translate-x-7 w-0 translate-y-1",id:"textColor"})]}),(0,x.jsx)("i",{onClick:I,className:"fa-solid fa-trash cursor-pointer select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-red-500 lg:hover:bg-red-500 hover:border-red-500 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-2"}),(0,x.jsxs)("div",{className:"flex gap-2 justify-center items-center",children:[(0,x.jsx)("label",{className:"relative text-inherit",htmlFor:"bgColor",children:(0,x.jsx)("i",{className:"fa-solid fa-palette text-base leading-3 cursor-pointer px-[.6rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-[#f5ba13] lg:hover:bg-[#f5ba13] hover:border-yellow-500 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"})}),(0,x.jsx)("input",{onChange:function(e){return C(e.target.value)},name:"noteBg",value:k,type:"color",className:"relative opacity-0 -translate-x-7 translate-y-1 w-0",id:"bgColor"})]})]}),(0,x.jsx)("button",{onClick:z,className:"text-white lg:place-self-center bg-green-700 place-self-end w-fit p-2 rounded-lg",children:"Save"})]})]})})]})}function j(){var e=(0,i.s0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"w-screen h-screen fixed flex justify-center items-center z-50 bg-[rgba(0,0,0,0.45)] ",children:(0,x.jsxs)("div",{className:"bg-[rgba(52,53,65,1)] scaleAnime flex flex-col text-white p-4 rounded-md h-fit w-[90%] md:w-1/2",children:[(0,x.jsx)("p",{className:"text-xl font-semibold text-center mb-4",children:"Hey! "}),(0,x.jsx)("p",{className:"text-xl font-semibold text-center",children:"Your session has expired. Please Login again to continue!"}),(0,x.jsx)("button",{onClick:function(){return e("/")},className:"place-self-end outline hover:bg-[#444] outline-white p-2 rounded-lg mr-5 mt-2 w-fit",children:"Login"})]})})})}var w=r(1263),y=r(9232);function N(){var e=(0,l.I0)(),t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.target.disabled=!0,t.prev=1,t.next=4,(0,u.Qo)();case 4:o=t.sent,e((0,d.ak)(null===o||void 0===o?void 0:o.notes)),c.Am.info(null===o||void 0===o?void 0:o.message),e((0,m.hR)(!1)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),a=t.t0.message,c.Am.error(a);case 14:r.target.disabled=!1;case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"flex justify-center items-center w-screen h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.65)]",children:(0,x.jsxs)("div",{className:"flex flex-col gap-7 relative bg-white  scaleAnime w-full md:w-1/2 p-10 rounded-xl text-lg",children:[(0,x.jsx)("i",{onClick:function(){return e((0,m.hR)(!1))},className:"fa-solid fa-xmark absolute top-4 right-4 cursor-pointer hover:text-red-500 p-1"}),(0,x.jsx)("h1",{className:"text-center font-semibold text-[#800000] text-md md:text-xl",children:"What would you like to do with your guest notes?"}),(0,x.jsx)("p",{children:"You have notes saved on your device that were created while using NoteHive as a guest. Would you like to save these notes to your account or delete them from your device?"}),(0,x.jsxs)("div",{className:"flex justify-around ",children:[(0,x.jsx)("button",{onClick:t,className:"p-2 px-3 rounded-md bg-green-700 text-white",children:"Upload"}),(0,x.jsx)("button",{onClick:function(){return e((0,m.hR)(!1))},className:"px-3 rounded-md bg-gray-400 hover:bg-slate-400",children:"Ask me Later"}),(0,x.jsx)("button",{onClick:function(){localStorage.removeItem("notehubNotes"),e((0,m.hR)(!1)),c.Am.info("Notes deleted!")},className:"px-3 rounded-md text-white bg-red-700",children:"Delete"})]})]})})})}function k(){var e=(0,l.v9)(m.ev).modalState,t=(0,i.f_)(),r=(0,l.I0)(),n=(0,s.useState)(!1),o=(0,a.Z)(n,2),c=o[0],u=o[1],f=(0,l.v9)(m.P4);return(0,s.useEffect)((function(){if(401!==(null===t||void 0===t?void 0:t.errorStatus)){var e=JSON.parse(localStorage.getItem("notehubData"));if(r((0,d.f1)({notes:null===t||void 0===t?void 0:t.notes})),e){r((0,y.oE)({name:null===e||void 0===e?void 0:e.name,token:null===e||void 0===e?void 0:e.token})),r((0,y.vA)(!0));var n=JSON.parse(localStorage.getItem("notehubNotes"));null!==n&&void 0!==n&&n.length&&r((0,m.hR)(!0))}else r((0,y.vA)(!1))}else u(!0)}),[]),(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)(j,{}),e&&(0,x.jsx)(g,{}),f&&(0,x.jsx)(N,{}),(0,x.jsxs)("div",{className:"w-screen h-screen overflow-x-hidden overflow-y-auto",children:[(0,x.jsx)(p.Z,{home:!0}),(0,x.jsx)(v,{}),(0,x.jsx)(h,{})]})]})}var C=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,r,o,a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null===(t=JSON.parse(localStorage.getItem("notehubData")))||void 0===t?void 0:t.token){e.next=4;break}return c.Am.info("Login to save your notes!"),e.abrupt("return",{notes:JSON.parse(localStorage.getItem("notehubNotes"))||[]});case 4:return e.prev=4,e.next=7,fetch(w.g.getNotes,{method:"GET",headers:{"Content-Type":"application/json",Authorization:r}});case 7:return o=e.sent,e.next=10,o.json();case 10:if(a=e.sent,o){e.next=13;break}return e.abrupt("return",c.Am.error("Something went wrong!"));case 13:if(401!==o.status){e.next=16;break}return localStorage.removeItem("notehubData"),e.abrupt("return",{errorStatus:401});case 16:if(!(o.status>299)){e.next=19;break}return c.Am.error(null===o||void 0===o?void 0:o.message),e.abrupt("return",{});case 19:return e.abrupt("return",a);case 22:return e.prev=22,e.t0=e.catch(4),l=e.t0.message,c.Am.error(l),e.abrupt("return",{});case 27:case"end":return e.stop()}}),e,null,[[4,22]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=796.0f263e37.chunk.js.map