(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{2470:function(e,t,n){Promise.resolve().then(n.bind(n,1279))},4766:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]])},3745:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]])},2369:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},5805:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},9374:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},642:function(e,t,n){"use strict";var r=n(7437),s=n(2265),a=n(4522),i=n(4449),l=n(4938),o=n(5805),c=n(9374),d=n(2718),u=n(2369),f=n(4766),h=n(3871),m=n(9229),x=n(9376),p=n(8882);t.Z=()=>{let{isSidebarOpen:e,toggleSidebar:t}=(0,m.Z)(),n=(0,x.useRouter)(),g=(0,s.useRef)(null),{user:v}=(0,p.Z)(),y=(r,s)=>{n.push(r),e&&t()},j=n=>{e&&g.current&&!g.current.contains(n.target)&&t()};(0,s.useEffect)(()=>(e?document.addEventListener("click",j):document.removeEventListener("click",j),()=>{document.removeEventListener("click",j)}),[e]);let w=(null==v?void 0:v.username)?v.username.split(" ").map(e=>e.charAt(0).toUpperCase()).join(""):"U";return(0,r.jsx)("aside",{ref:g,className:"fixed top-10  left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ".concat(e?"translate-x-0 bg-white dark:bg-[rgb(37,38,39)] shadow-lg":"-translate-x-full","  ").concat(e?"md:hidden ":"md:block"," md:bg-transparent md:shadow-none "),children:(0,r.jsxs)("div",{className:"flex flex-col h-full overflow-y-auto",children:[(0,r.jsxs)("nav",{className:"space-y-3 flex-grow",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2 cursor-pointer",onClick:()=>y("/"),children:[(0,r.jsx)(a.qE,{className:"h-8 w-8",children:(null==v?void 0:v.profilePicture)?(0,r.jsx)(a.F$,{src:null==v?void 0:v.profilePicture,alt:null==v?void 0:v.username}):(0,r.jsx)(a.Q5,{className:"dark:bg-gray-400",children:w})}),(0,r.jsx)("span",{className:"font-semibold",children:null==v?void 0:v.username})]}),(0,r.jsxs)(i.z,{variant:"ghost",className:"full justify-start   ",onClick:()=>y("/"),children:[(0,r.jsx)(l.Z,{className:"mr-4"}),"Home"]}),(0,r.jsxs)(i.z,{variant:"ghost",className:"full justify-start",onClick:()=>y("/friends-list"),children:[(0,r.jsx)(o.Z,{className:"mr-4"}),"Friends"]}),(0,r.jsxs)(i.z,{variant:"ghost",className:"full justify-start",onClick:()=>y("/videos"),children:[(0,r.jsx)(c.Z,{className:"mr-4"}),"Video"]}),(0,r.jsxs)(i.z,{variant:"ghost",className:"full justify-start",children:[(0,r.jsx)(d.Z,{className:"mr-4"}),"Messages"]}),(0,r.jsxs)(i.z,{variant:"ghost",className:"full justify-start",onClick:()=>y("/user-profile/".concat(null==v?void 0:v._id)),children:[(0,r.jsx)(u.Z,{className:"mr-4"}),"Profile"]}),(0,r.jsxs)(i.z,{variant:"ghost",className:"full justify-start",children:[(0,r.jsx)(f.Z,{className:"mr-4"}),"Notification"]})]}),(0,r.jsxs)("div",{className:"mb-16",children:[(0,r.jsx)(h.Z,{className:"my-4"}),(0,r.jsx)("div",{className:"flex items-center space-x-2 mb-4 cursor-pointer",children:(0,r.jsx)(a.qE,{className:"h-8 w-8",onClick:()=>y("/user-profile/".concat(null==v?void 0:v._id)),children:(null==v?void 0:v.profilePicture)?(0,r.jsx)(a.F$,{src:null==v?void 0:v.profilePicture,alt:null==v?void 0:v.username}):(0,r.jsx)(a.Q5,{className:"dark:bg-gray-400",children:w})})}),(0,r.jsxs)("div",{className:"text-xs text-muted-foreground space-y-1",children:[(0,r.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Advertising "}),(0,r.jsx)("p",{children:"Cookies \xb7 Meta \xa9 2024"})]})]})]})})}},1279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(7437),s=n(2265),a=n(642),i=n(6474);function l(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("animate-pulse rounded-md bg-primary/10",t),...n})}var o=n(4847),c=n(3745);let d=()=>(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[(0,r.jsx)(l,{className:"h-24 w-24 rounded-full mx-auto mb-4"}),(0,r.jsx)(l,{className:"h-4 w-3/4 mx-auto mb-2"}),(0,r.jsx)(l,{className:"h-8 w-full mb-2"}),(0,r.jsx)(l,{className:"h-8 w-full"})]}),u=e=>{let{text:t,description:n}=e;return(0,r.jsxs)(o.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"flex flex-col items-center justify-center w-full  p-8 text-center",children:[(0,r.jsx)(c.Z,{size:64,className:"text-gray-400 mb-4"}),(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-2",children:t}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400 mb-4",children:n})]})};var f=n(8614),h=n(4522),m=n(9205);let x=(0,m.Z)("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),p=(0,m.Z)("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);var g=n(4449),v=e=>{var t;let{friend:n,onAction:s}=e,a=null==n?void 0:null===(t=n.username)||void 0===t?void 0:t.split(" ").map(e=>e[0]).join("");return(0,r.jsx)(f.M,{children:(0,r.jsxs)(o.E.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.3},className:"bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg",children:[(0,r.jsx)(h.qE,{className:"h-32 w-32 rounded mx-auto mb-4",children:(null==n?void 0:n.profilePicture)?(0,r.jsx)(h.F$,{src:null==n?void 0:n.profilePicture,alt:null==n?void 0:n.username}):(0,r.jsx)(h.Q5,{className:"dark:bg-gray-400",children:a})}),(0,r.jsx)("h3",{className:"text-lg font-semibold text-center mb-4 ",children:null==n?void 0:n.username}),(0,r.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,r.jsxs)(g.z,{className:"bg-blue-500 ",size:"lg",onClick:()=>{},children:[(0,r.jsx)(x,{className:"mr-2 h-4 w-4"})," Confirm"]}),(0,r.jsxs)(g.z,{className:"mt-2 ",size:"lg",onClick:()=>{},children:[(0,r.jsx)(p,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})})},y=e=>{var t;let{friend:n,onAction:s}=e,a=null==n?void 0:null===(t=n.username)||void 0===t?void 0:t.split(" ").map(e=>e[0]).join("");return(0,r.jsx)(f.M,{children:(0,r.jsxs)(o.E.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.3},className:"bg-white mb-4 dark:bg-gray-800 p-4 shadow rounded-lg",children:[(0,r.jsx)(h.qE,{className:"h-32 w-32 rounded mx-auto mb-4",children:(null==n?void 0:n.profilePicture)?(0,r.jsx)(h.F$,{src:null==n?void 0:n.profilePicture,alt:null==n?void 0:n.username}):(0,r.jsx)(h.Q5,{children:a})}),(0,r.jsx)("h3",{className:"text-lg font-semibold text-center mb-4 ",children:null==n?void 0:n.username}),(0,r.jsx)("div",{className:"flex flex-col justify-between",children:(0,r.jsxs)(g.z,{className:"bg-blue-500 ",size:"lg",onClick:()=>s("confirm",null==n?void 0:n._id),children:[(0,r.jsx)(x,{className:"mr-2 h-4 w-4"})," Add Friend"]})})]})})},j=n(9681),w=n(9064),b=()=>{let{followUser:e,loading:t,UnfollowUser:n,fetchFriendRequest:i,fetchFriendSuggestion:l,deleteUserFromRequest:o,fetchMutualFriends:c,friendRequest:f,friendSuggestion:h,mutualFriends:m}=(0,j.e)();(0,s.useEffect)(()=>{i(),l()},[]);let x=async(t,r)=>{"confirm"===t?(w.ZP.success("friend added successfully"),await e(r),i(),l()):"delete"===t&&(await n(r),i(),l())};return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-100 dark:bg-[rgb(36,37,38)] ",children:[(0,r.jsx)(a.Z,{}),(0,r.jsxs)("main",{className:"ml-0 md:ml-64 mt-16 p-6",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Friends Requests"}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ",children:t?(0,r.jsx)(d,{}):0===f.length?(0,r.jsx)(u,{text:"No Friend Requests",description:"Looks like you are all caught up! Why not explore and connect with new people?"}):f.map(e=>(0,r.jsx)(v,{friend:e,loading:t,onAction:x},e._id))}),(0,r.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"People you may know"}),(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ",children:t?(0,r.jsx)(d,{}):0===h.length?(0,r.jsx)(u,{text:"No Friend Suggestion",description:"Looks like you are all caught up! Why not explore and connect with new people?"}):h.map(e=>(0,r.jsx)(y,{friend:e,loading:t,onAction:x},e._id))})]})]})}},4522:function(e,t,n){"use strict";n.d(t,{F$:function(){return o},Q5:function(){return c},qE:function(){return l}});var r=n(7437),s=n(2265),a=n(4930),i=n(6474);let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.fC,{ref:t,className:(0,i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...s})});l.displayName=a.fC.displayName;let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Ee,{ref:t,className:(0,i.cn)("aspect-square h-full w-full",n),...s})});o.displayName=a.Ee.displayName;let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.NY,{ref:t,className:(0,i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...s})});c.displayName=a.NY.displayName},4449:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(7437),s=n(2265),a=n(7053),i=n(7712),l=n(6474);let o=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:n,variant:s,size:i,asChild:c=!1,...d}=e,u=c?a.g7:"button";return(0,r.jsx)(u,{className:(0,l.cn)(o({variant:s,size:i,className:n})),ref:t,...d})});c.displayName="Button"},3871:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7437),s=n(2265),a=n(5156),i=n(6474);let l=s.forwardRef((e,t)=>{let{className:n,orientation:s="horizontal",decorative:l=!0,...o}=e;return(0,r.jsx)(a.f,{ref:t,decorative:l,orientation:s,className:(0,i.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",n),...o})});l.displayName=a.f.displayName},6474:function(e,t,n){"use strict";n.d(t,{F:function(){return o},cn:function(){return l},u:function(){return c}});var r=n(1994),s=n(3335),a=n(8528),i=n(2258);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,r.W)(t))}let o=e=>(0,a.Q)((0,i.D)(e),{addSuffix:!0}),c=e=>new Date(e).toLocaleDateString("en-GB")},7415:function(e,t,n){"use strict";let r=n(3464).Z.create({baseURL:"http://localhost:5000",withCredentials:!0});t.Z=r},7061:function(e,t,n){"use strict";n.d(t,{AW:function(){return m},C0:function(){return d},Lj:function(){return u},P_:function(){return i},Qv:function(){return a},W5:function(){return l},YI:function(){return c},ZT:function(){return s},ik:function(){return o},ir:function(){return h},qo:function(){return f}});var r=n(7415);let s=async()=>{try{let e=await r.Z.get("/api/users/friend-request");return null==e?void 0:e.data}catch(e){throw console.log(e),e}},a=async()=>{try{let e=await r.Z.get("/api/users/user-to-request");return null==e?void 0:e.data}catch(e){throw console.log(e),e}},i=async e=>{try{let t=await r.Z.post("/api/users/follow",{userIdToFollow:e});return null==t?void 0:t.data}catch(e){throw console.log(e),e}},l=async e=>{try{let t=await r.Z.post("/api/users/unfollow",{userIdToUnFollow:e});return null==t?void 0:t.data}catch(e){throw console.log(e),e}},o=async e=>{try{let t=await r.Z.post("/api/users/friend-request/remove",{requestSenderId:e});return null==t?void 0:t.data}catch(e){throw console.log(e),e}},c=async e=>{try{var t;let n=await r.Z.get("/api/users/profile/".concat(e));return null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.data}catch(e){throw console.log(e),e}},d=async e=>{try{var t;let n=await r.Z.get("/api/users/mutual-friends/".concat(e));return null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.data}catch(e){throw console.log(e),e}},u=async(e,t)=>{try{var n;let s=await r.Z.put("/api/users/profile/".concat(e),t);return null==s?void 0:null===(n=s.data)||void 0===n?void 0:n.data}catch(e){throw console.log(e),e}},f=async(e,t)=>{try{var n;let s=await r.Z.put("/api/users/profile/cover-photo/".concat(e),t);return null==s?void 0:null===(n=s.data)||void 0===n?void 0:n.data}catch(e){throw console.log(e),e}},h=async(e,t)=>{try{var n;let s=await r.Z.put("/api/users/bio/".concat(e),t);return null==s?void 0:null===(n=s.data)||void 0===n?void 0:n.data}catch(e){throw console.log(e),e}},m=async()=>{try{var e;let t=await r.Z.get("/api/users");return null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.data}catch(e){throw console.log(e),e}}},9229:function(e,t,n){"use strict";let r=(0,n(3011).U)(e=>({isSidebarOpen:!1,toggleSidebar:()=>e(e=>({isSidebarOpen:!e.isSidebarOpen}))}));t.Z=r},9681:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});var r=n(7061),s=n(9064);let a=(0,n(3011).U)((e,t)=>({friendRequest:[],friendSuggestion:[],mutualFriends:[],loading:!1,fetchFriendRequest:async()=>{e({loading:!0});try{let t=await (0,r.ZT)();e({friendRequest:t.data,loading:!1})}catch(t){e({error:t,loading:!1})}finally{e({loading:!1})}},fetchFriendSuggestion:async()=>{e({loading:!0});try{let t=await (0,r.Qv)();e({friendSuggestion:t.data,isLoading:!1})}catch(t){e({error:t,loading:!1})}finally{e({loading:!1})}},fetchMutualFriends:async t=>{e({loading:!0});try{let n=await (0,r.C0)(t);e({mutualFriends:n,loading:!1})}catch(t){e({error:t,loading:!1})}finally{e({loading:!1})}},followUser:async t=>{e({loading:!0});try{await (0,r.P_)(t)}catch(t){e({error:t,loading:!1})}},UnfollowUser:async t=>{e({loading:!0});try{await (0,r.W5)(t)}catch(t){e({error:t,loading:!1})}},deleteUserFromRequest:async t=>{e({loading:!0});try{await (0,r.ik)(t),s.ZP.success("you have deleted friend successfully")}catch(t){e({error:t,loading:!1})}}}))},8882:function(e,t,n){"use strict";var r=n(3011),s=n(6885);let a=(0,r.U)((0,s.tJ)(e=>({user:null,setUser:t=>e({user:t}),clearUser:()=>e({user:null})}),{name:"user-storage",getStorage:()=>localStorage}));t.Z=a},5156:function(e,t,n){"use strict";n.d(t,{f:function(){return c}});var r=n(2265),s=n(6840),a=n(7437),i="horizontal",l=["horizontal","vertical"],o=r.forwardRef((e,t)=>{let{decorative:n,orientation:r=i,...o}=e,c=l.includes(r)?r:i;return(0,a.jsx)(s.WV.div,{"data-orientation":c,...n?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...o,ref:t})});o.displayName="Separator";var c=o},8614:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(7437),s=n(2265),a=n(4252),i=n(3576),l=n(5750);class o extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n}=e,a=(0,s.useId)(),i=(0,s.useRef)(null),c=(0,s.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,s.useContext)(l._);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:s}=c.current;if(n||!i.current||!e||!t)return;i.current.dataset.motionPopId=a;let l=document.createElement("style");return d&&(l.nonce=d),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,r.jsx)(o,{isPresent:n,childRef:i,sizeRef:c,children:s.cloneElement(t,{ref:i})})}let d=e=>{let{children:t,initial:n,isPresent:l,onExitComplete:o,custom:d,presenceAffectsLayout:f,mode:h}=e,m=(0,i.h)(u),x=(0,s.useId)(),p=(0,s.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;o&&o()},[m,o]),g=(0,s.useMemo)(()=>({id:x,initial:n,isPresent:l,custom:d,onExitComplete:p,register:e=>(m.set(e,!1),()=>m.delete(e))}),f?[Math.random(),p]:[l,p]);return(0,s.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[l]),s.useEffect(()=>{l||m.size||!o||o()},[l]),"popLayout"===h&&(t=(0,r.jsx)(c,{isPresent:l,children:t})),(0,r.jsx)(a.O.Provider,{value:g,children:t})};function u(){return new Map}var f=n(8881),h=n(3223);let m=e=>e.key||"";function x(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}var p=n(1534);let g=e=>{let{children:t,exitBeforeEnter:n,custom:a,initial:l=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:u="sync"}=e;(0,h.k)(!n,"Replace exitBeforeEnter with mode='wait'");let g=(0,s.useMemo)(()=>x(t),[t]),v=g.map(m),y=(0,s.useRef)(!0),j=(0,s.useRef)(g),w=(0,i.h)(()=>new Map),[b,N]=(0,s.useState)(g),[k,Z]=(0,s.useState)(g);(0,p.L)(()=>{y.current=!1,j.current=g;for(let e=0;e<k.length;e++){let t=m(k[e]);v.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[k,v.length,v.join("-")]);let E=[];if(g!==b){let e=[...g];for(let t=0;t<k.length;t++){let n=k[t],r=m(n);v.includes(r)||(e.splice(t,0,n),E.push(n))}"wait"===u&&E.length&&(e=E),Z(x(e)),N(g);return}let{forceRender:z}=(0,s.useContext)(f.p);return(0,r.jsx)(r.Fragment,{children:k.map(e=>{let t=m(e),n=g===k||v.includes(t);return(0,r.jsx)(d,{isPresent:n,initial:(!y.current||!!l)&&void 0,custom:n?void 0:a,presenceAffectsLayout:c,mode:u,onExitComplete:n?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==z||z(),Z(j.current),o&&o())},children:e},t)})})}}},function(e){e.O(0,[454,835,971,117,744],function(){return e(e.s=2470)}),_N_E=e.O()}]);