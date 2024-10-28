"use strict";exports.id=388,exports.ids=[388],exports.modules={8998:(e,s,a)=>{a.d(s,{Z:()=>t});let t=(0,a(6323).Z)("Delete",[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]])},9219:(e,s,a)=>{a.d(s,{Z:()=>t});let t=(0,a(6323).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},7692:(e,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return r}});let t=a(352);a(7247),a(8964);let l=t._(a(2404));function r(e,s){var a;let t={loading:e=>{let{error:s,isLoading:a,pastDelay:t}=e;return null}};"function"==typeof e&&(t.loader=e);let r={...t,...s};return(0,l.default)({...r,modules:null==(a=r.loadableGenerated)?void 0:a.modules})}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},9304:(e,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let t=a(7173);function l(e){let{reason:s,children:a}=e;throw new t.BailoutToCSRError(s)}},2404:(e,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return o}});let t=a(7247),l=a(8964),r=a(9304),i=a(4146);function n(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(n(()=>null)),loading:null,ssr:!0},o=function(e){let s={...c,...e},a=(0,l.lazy)(()=>s.loader().then(n)),o=s.loading;function d(e){let n=o?(0,t.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,c=s.ssr?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.PreloadCss,{moduleIds:s.modules}),(0,t.jsx)(a,{...e})]}):(0,t.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,t.jsx)(a,{...e})});return(0,t.jsx)(l.Suspense,{fallback:n,children:c})}return d.displayName="LoadableComponent",d}},4146:(e,s,a)=>{Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"PreloadCss",{enumerable:!0,get:function(){return r}});let t=a(7247),l=a(4580);function r(e){let{moduleIds:s}=e,a=(0,l.getExpectedRequestStore)("next/dynamic css"),r=[];if(a.reactLoadableManifest&&s){let e=a.reactLoadableManifest;for(let a of s){if(!e[a])continue;let s=e[a].files.filter(e=>e.endsWith(".css"));r.push(...s)}}return 0===r.length?null:(0,t.jsx)(t.Fragment,{children:r.map(e=>(0,t.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},3766:(e,s,a)=>{a.a(e,async(e,t)=>{try{a.r(s),a.d(s,{default:()=>u});var l=a(7247),r=a(8964),i=a(5853),n=a(9298),c=a(6713),o=a(7153),d=a(6636),m=a(6481),x=a(2411),h=e([d]);d=(h.then?(await h)():h)[0];let u=()=>{let[e,s]=(0,r.useState)(!1),[a,t]=(0,r.useState)(new Set),{posts:h,fetchPost:u,handleLikePost:p,handleCommentPost:j,handleSharePost:f}=(0,m.Y)();(0,r.useEffect)(()=>{u()},[u]),(0,r.useEffect)(()=>{let e=localStorage.getItem("likePosts");e&&t(new Set(JSON.parse(e)))},[]);let g=async e=>{let s=new Set(a);s.has(e)?(s.delete(e),x.ZP.error("post disliked successfully")):(s.add(e),x.ZP.success("post like successfully")),t(s),localStorage.setItem("likePosts",JSON.stringify(Array.from(s)));try{await p(e),await u()}catch(e){console.error(e),x.ZP.error("failed to like or unlike the post")}};return l.jsx("div",{className:"flex flex-col min-h-screen bg-background text-foreground",children:(0,l.jsxs)("main",{className:"flex flex-1 pt-10",children:[l.jsx(i.Z,{}),l.jsx("div",{className:"flex-1 sm:px-2 sm:py-6 md:ml-64 lg:max-w-2xl 2xl:mx-auto overscroll-x-auto sm:max-w-[100vw]",children:(0,l.jsxs)("div",{className:" 2xl:ml-28",children:[l.jsx("div",{className:"overflow-x-auto max-w-[100vw] pl-1 dark:bg-[rgb(36,37,38)] my-1 sm:rounded-lg   mt-[8px] ",children:l.jsx(c.Z,{})}),l.jsx(o.Z,{isPostFormOpen:e,setIsPostFormOpen:s}),l.jsx("div",{className:" mt-1 sm:mt-6 sm:space-y-6 mb-4 ",children:h.map(e=>l.jsx(d.Z,{post:e,isLiked:a.has(e?._id),onLike:()=>g(e?._id),onComment:async s=>{await j(e?._id,s.text),await u()},onShare:async()=>{await f(e?._id),await u()}},e._id))})]})}),l.jsx("div",{className:"hidden 2xl:block lg:w-64 xl:w-80 fixed right-0 top-10 sm:top-16 bottom-0 overflow-y-auto p-4",children:l.jsx(n.Z,{})})]})})};t()}catch(e){t(e)}})},5853:(e,s,a)=>{a.d(s,{Z:()=>f});var t=a(7247),l=a(8964),r=a(8826),i=a(1914),n=a(6460),c=a(7989),o=a(6034),d=a(7073);let m=(0,a(6323).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);var x=a(1299),h=a(4294),u=a(9840),p=a(4178),j=a(4571);let f=()=>{let{isSidebarOpen:e,toggleSidebar:s}=(0,u.Z)(),a=(0,p.useRouter)(),f=(0,l.useRef)(null),{user:g}=(0,j.Z)(),y=(t,l)=>{a.push(t),e&&s()},v=a=>{e&&f.current&&!f.current.contains(a.target)&&s()};(0,l.useEffect)(()=>(e?document.addEventListener("click",v):document.removeEventListener("click",v),()=>{document.removeEventListener("click",v)}),[e]);let N=g?.username?g.username.split(" ").map(e=>e.charAt(0).toUpperCase()).join(""):"U";return t.jsx("aside",{ref:f,className:`fixed top-10  left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ${e?"translate-x-0 bg-white dark:bg-[rgb(37,38,39)] shadow-lg":"-translate-x-full"}  ${e?"md:hidden ":"md:block"} md:bg-transparent md:shadow-none `,children:(0,t.jsxs)("div",{className:"flex flex-col h-full overflow-y-auto",children:[(0,t.jsxs)("nav",{className:"space-y-3 flex-grow",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2 cursor-pointer",onClick:()=>y("/"),children:[t.jsx(r.qE,{className:"h-8 w-8",children:g?.profilePicture?t.jsx(r.F$,{src:g?.profilePicture,alt:g?.username}):t.jsx(r.Q5,{className:"dark:bg-gray-400",children:N})}),t.jsx("span",{className:"font-semibold",children:g?.username})]}),(0,t.jsxs)(i.z,{variant:"ghost",className:"full justify-start   ",onClick:()=>y("/"),children:[t.jsx(n.Z,{className:"mr-4"}),"Home"]}),(0,t.jsxs)(i.z,{variant:"ghost",className:"full justify-start",onClick:()=>y("/friends-list"),children:[t.jsx(c.Z,{className:"mr-4"}),"Friends"]}),(0,t.jsxs)(i.z,{variant:"ghost",className:"full justify-start",onClick:()=>y("/videos"),children:[t.jsx(o.Z,{className:"mr-4"}),"Video"]}),(0,t.jsxs)(i.z,{variant:"ghost",className:"full justify-start",children:[t.jsx(d.Z,{className:"mr-4"}),"Messages"]}),(0,t.jsxs)(i.z,{variant:"ghost",className:"full justify-start",onClick:()=>y(`/user-profile/${g?._id}`),children:[t.jsx(m,{className:"mr-4"}),"Profile"]}),(0,t.jsxs)(i.z,{variant:"ghost",className:"full justify-start",children:[t.jsx(x.Z,{className:"mr-4"}),"Notification"]})]}),(0,t.jsxs)("div",{className:"mb-16",children:[t.jsx(h.Z,{className:"my-4"}),t.jsx("div",{className:"flex items-center space-x-2 mb-4 cursor-pointer",children:t.jsx(r.qE,{className:"h-8 w-8",onClick:()=>y(`/user-profile/${g?._id}`),children:g?.profilePicture?t.jsx(r.F$,{src:g?.profilePicture,alt:g?.username}):t.jsx(r.Q5,{className:"dark:bg-gray-400",children:N})})}),(0,t.jsxs)("div",{className:"text-xs text-muted-foreground space-y-1",children:[t.jsx("p",{children:"Privacy \xb7 Terms \xb7 Advertising "}),t.jsx("p",{children:"Cookies \xb7 Meta \xa9 2024"})]})]})]})})}},9298:(e,s,a)=>{a.d(s,{Z:()=>m});var t=a(7247),l=a(8964),r=a(8277),i=a(5887),n=a(6323);let c=(0,n.Z)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),o=(0,n.Z)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var d=a(1914);let m=()=>{let[e,s]=(0,l.useState)(!1),a=[{name:"Netflix",description:"Watch the latest trending movies and series.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qmBuBERRMhoFTvvNUWw7Kr9iicoxC4c8ZQ&s",website:"https://www.netflix.com"},{name:"Instagram",description:"Explore the latest features and connect with friends.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NoNt4ECTrCIzRA6PhvyyPThBY9OUEW0-ng&s",website:"https://www.instagram.com"},{name:"Spotify",description:"Stream your favorite music anytime, anywhere.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpvQJUXehm_yT1kr2WSATHaDRF88_JjWHcQ&s",website:"https://www.spotify.com"},{name:"Amazon",description:"Shop for everything you need with fast delivery.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBLSbp3rFpIZ0kzoreJLN7uZqkJz0h6-RQQ&s",website:"https://www.amazon.com"},{name:"Apple",description:"Discover innovative products and services.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsC4qgsmGTJ9HnNYatRyi7GyJ7GlRMujlw&s",website:"https://www.apple.com"}],n=e?a:a.slice(0,2);return t.jsx(r.E.aside,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5},className:"space-y-4 ",children:(0,t.jsxs)(i.Zb,{children:[t.jsx(i.Ol,{children:(0,t.jsxs)(i.ll,{className:"flex text-lg font-semibold items-center",children:[t.jsx(c,{className:"mr-2 h-5 w-5 text-primary"}),"Papuler Sponsers"]})}),(0,t.jsxs)(i.aY,{children:[t.jsx("ul",{className:"space-y-4",children:n.map((e,s)=>(0,t.jsxs)(r.E.li,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*s},className:"flex flex-col items-center space-x-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200",children:[t.jsx("img",{src:e.image,alt:e.name,className:"object-contain h-32 w-50 rounded-md"}),(0,t.jsxs)("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold  text-lg",children:e.name}),t.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.description}),(0,t.jsxs)("a",{href:e.website,target:"_blank",className:"text-primary text-sm flex items-center mt-1 hover:underline",children:["visit website ",t.jsx(o,{className:"h-4 w-4 ml-4"})," "]})]})]},e.name))}),a.length>2&&t.jsx(d.z,{variant:"outline",className:"w-full mt-4 dark:text-white",onClick:()=>s(!e),children:e?"Show Less":"Show More"})]})]})})}},7153:(e,s,a)=>{a.d(s,{Z:()=>Z});var t=a(7247),l=a(5887),r=a(8964),i=a(8826),n=a(2355),c=a(2898),o=a(4294),d=a(1914),m=a(6323);let x=(0,m.Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);var h=a(6034);let u=(0,m.Z)("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);var p=a(7013),j=a(9219),f=a(4991),g=a(7078),y=a(8277),v=a(7692),N=a.n(v),b=a(4571),w=a(6481);let k=N()(async()=>{},{loadableGenerated:{modules:["app\\posts\\NewPostForm.jsx -> emoji-picker-react"]},ssr:!1}),Z=({isPostFormOpen:e,setIsPostFormOpen:s})=>{let[a,m]=(0,r.useState)(!1),{user:v}=(0,b.Z)(),[N,Z]=(0,r.useState)(""),[C,P]=(0,r.useState)(null),[S,z]=(0,r.useState)(null),[_,E]=(0,r.useState)(""),[F,L]=(0,r.useState)(!1),{handleCreatePost:R}=(0,w.Y)(),[q,M]=(0,r.useState)(!1),O=(0,r.useRef)(null),U=v?.username?.split(" ").map(e=>e[0]).join(""),T=async()=>{try{L(!0);let e=new FormData;e.append("content",N),S&&e.append("media",S);let a=await R(e);console.log(a),Z(""),z(null),P(null),s(!1)}catch(e){console.error(e),L(!1)}};return t.jsx(l.Zb,{className:" max-sm:rounded-none",children:t.jsx(l.aY,{className:"p-1 sm:p-4 ",children:(0,t.jsxs)("div",{className:"flex space-x-4",children:[t.jsx(i.qE,{children:v?.profilePicture?t.jsx(i.F$,{src:v?.profilePicture,alt:v?.username}):t.jsx(i.Q5,{className:"dark:bg-gray-400",children:U})}),(0,t.jsxs)(n.Vq,{open:e,onOpenChange:s,children:[(0,t.jsxs)(n.hg,{className:"w-full",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[t.jsx(c.I,{placeholder:"what's on your mind?",readOnly:!0,className:"cursor-pointer rounded-full sm:h-12  dark:bg-[rgb(58,59,60)] placeholder:text-gray-500 dark:placeholder:text-gray-400  "}),t.jsx("div",{className:"block sm:hidden",children:t.jsx(d.z,{variant:"ghost",className:"flex items-center justify-center",children:t.jsx(x,{className:"h-12 w-12 text-green-500 "})})})]}),t.jsx(o.Z,{className:"my-2 dark:bg-slate-400 hidden sm:block"}),t.jsx("div",{className:"hidden sm:block",children:(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsxs)(d.z,{variant:"ghost",className:"flex items-center justify-center",children:[t.jsx(x,{className:"h-5 w-5 text-green-500 mr-2"}),t.jsx("span",{className:"dark:text-slate-100",children:"Photo"})]}),(0,t.jsxs)(d.z,{variant:"ghost",className:"flex items-center justify-center",children:[t.jsx(h.Z,{className:"h-5 w-5 text-red-500 mr-2"}),t.jsx("span",{className:"dark:text-slate-100",children:"Video"})]}),(0,t.jsxs)(d.z,{variant:"ghost",className:"flex items-center justify-center",children:[t.jsx(u,{className:"h-5 w-5 text-orange-500 mr-2"}),t.jsx("span",{className:"dark:text-slate-100",children:"Feelings"})]})]})})]}),(0,t.jsxs)(n.cZ,{className:"sm:max-w-[525px] max-h-[80vh] overflow-y-auto",children:[t.jsx(n.fK,{children:t.jsx(n.$N,{className:"text-center",children:"Create Post"})}),t.jsx(o.Z,{}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 py-4",children:[t.jsx(i.qE,{className:"h-10 w-10",children:v?.profilePicture?t.jsx(i.F$,{src:v?.profilePicture,alt:v?.username}):t.jsx(i.Q5,{children:U})}),t.jsx("div",{children:t.jsx("p",{className:"font-semibold",children:v?.username})})]}),t.jsx(f.g,{placeholder:"what's on your mind?",className:"max-h-12 sm:min-h-[100px] text-lg",value:N,onChange:e=>Z(e.target.value)}),t.jsx(g.M,{children:(q||C)&&(0,t.jsxs)(y.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"relative mt-4 border-2 border-dashed  border-gray-300 rounded-lg p-8 flex  flex-col items-center justify-center ",children:[t.jsx(d.z,{variant:"ghost",size:"icon",className:"absolute top-2 right-2",onClick:()=>{M(!1),z(null),P(null)},children:t.jsx(p.Z,{className:"h-4 w-4"})}),C?_.startsWith("image")?t.jsx("img",{src:C,alt:"preview_img",className:"w-full h-auto max-h-[300px] object-cover"}):t.jsx("video",{controls:!0,src:C,className:"w-full h-auto max-h-[300px] object-cover"}):(0,t.jsxs)(t.Fragment,{children:[t.jsx(j.Z,{className:"h-12 w-12 text-gray-400 mb-2 cursor-pointer ",onClick:()=>O.current.click()}),t.jsx("p",{className:"text-center  text-gray-500 ",children:"Add Photos/Videos"})]}),t.jsx("input",{type:"file",accept:"image/*,video/*",className:"hidden",onChange:e=>{let s=e.target.files[0];z(s),E(s.type),P(URL.createObjectURL(s))},ref:O})]})}),(0,t.jsxs)("div",{className:"bg-gray-200 dark:bg-muted p-4 rounded-lg mt-4 ",children:[t.jsx("p",{className:"font-semibold mb-2",children:"Add Your Post"}),(0,t.jsxs)("div",{className:"flex space-x-2 ",children:[t.jsx(d.z,{variant:"outline",size:"icon",onClick:()=>M(!q),children:t.jsx(x,{className:"h-4 w-4 text-green-500 "})}),t.jsx(d.z,{variant:"outline",size:"icon",onClick:()=>M(!q),children:t.jsx(h.Z,{className:"h-4 w-4 text-red-500 "})}),t.jsx(d.z,{variant:"outline",size:"icon",onClick:()=>m(!a),children:t.jsx(u,{className:"h-4 w-4 text-orange-500 "})})]})]}),a&&(0,t.jsxs)(y.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"relative",children:[t.jsx(d.z,{variant:"ghost",size:"icon",className:"absolute top-2 right-2 z-10",onClick:()=>m(!1),children:t.jsx(p.Z,{className:"h-4 w-4"})}),t.jsx(k,{onEmojiClick:e=>{Z(s=>s+e.emoji)}})]}),t.jsx("div",{className:"flex justify-end mt-4",children:t.jsx(d.z,{className:"bg-blue-500 text-white",onClick:T,children:F?"Saving...":"Post"})})]})]})]})})})}},6636:(e,s,a)=>{a.a(e,async(e,t)=>{try{a.d(s,{Z:()=>Z});var l=a(7247),r=a(8964),i=a(8277),n=a(7078),c=a(5887),o=a(8826),d=a(1914),m=a(8998),x=a(9389),h=a(5718),u=a(7073),p=a(9875),j=a(4294),f=a(2355),g=a(1833),y=a(5294),v=a(4178),N=a(6481),b=a(4571),w=a(2411),k=e([g]);g=(k.then?(await k)():k)[0];let Z=({post:e,isLiked:s,onShare:a,onComment:t,onLike:k})=>{let[Z,C]=(0,r.useState)(!1),[P,S]=(0,r.useState)(!1),[z,_]=(0,r.useState)(!1),E=(0,r.useRef)(null),F=(0,v.useRouter)(),{user:L}=(0,b.Z)(),{handleDeletePost:R}=(0,N.Y)(),q=e?.user?.username?.split(" ").map(e=>e[0]).join(""),M=()=>`http://localhost:3000/${e?.id}`,O=async()=>{C(!0),setTimeout(async()=>{try{await R(e._id),w.ZP.success("Post deleted successfully")}catch(e){w.ZP.error("Failed to delete post")}finally{C(!1)}},1e3)},U=e=>{let s;let a=M();switch(e){case"facebook":s="https://www.facebook.com/sharer/sharer.php?u=}";break;case"twitter":s="https://twitter.com/intent/tweet?url=}";break;case"linkedin":s="https://www.linkedin.com/shareArticle?mini=true&url=}";break;case"copy":navigator.clipboard.writeText(a),S(!1);return;default:return}window.open(s,"_blank"),S(!1)};return l.jsx(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-[100vw] min-w-full",children:l.jsx(c.Zb,{className:"max-sm:rounded-none my-1 ",children:(0,l.jsxs)(c.aY,{className:"p-2 sm:p-6 dark:text-white",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between sm:mb-4",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3 cursor-pointer ",onClick:()=>{F.push(`/user-profile/${e?.user?._id}`)},children:[l.jsx(o.qE,{children:e?.user?.profilePicture?l.jsx(o.F$,{src:e?.user?.profilePicture,alt:e?.user?.username}):l.jsx(o.Q5,{className:"dark:bg-gray-400",children:q})}),(0,l.jsxs)("div",{children:[l.jsx("p",{className:"font-semibold dark:text-white",children:e?.user?.username}),l.jsx("p",{className:"font-sm text-gray-500",children:(0,y.F)(e?.createdAt)})]})]}),e?.user?._id===L?._id?Z?l.jsx(d.z,{variant:"ghost",disabled:!0,children:"Loading..."}):(0,l.jsxs)(d.z,{variant:"ghost",onClick:O,children:[l.jsx(m.Z,{className:"h-4 w-4"})," Delete"]}):l.jsx(d.z,{variant:"ghost",className:"dark:hover:bg-gray-500",children:l.jsx(x.Z,{className:"dark:text-white h-4 w-4"})})]}),l.jsx("p",{className:"sm:mb-4 mb-1",children:e?.content}),e?.mediaUrl&&"image"===e.mediaType&&l.jsx("img",{src:e?.mediaUrl,alt:"post_image",className:"w-full h-auto rounded-lg mb-4"}),e?.mediaUrl&&"video"===e.mediaType&&(0,l.jsxs)("video",{controls:!0,className:"w-full h-auto rounded-lg mb-4",children:[l.jsx("source",{src:e?.mediaUrl,type:"video/mp4"}),"Your browser does not support the video tag"]}),(0,l.jsxs)("div",{className:"flex justify-between items-center mb-1 sm:mb-4",children:[(0,l.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer ",children:[e?.likeCount," likes"]}),(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer ",onClick:()=>_(!z),children:[e?.commentCount," comments"]}),(0,l.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400 hover:border-b-2 border-gray-400 cursor-pointer ",children:[e?.shareCount," share"]})]})]}),l.jsx(j.Z,{className:"mb-2 dark:bg-gray-400"}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,l.jsxs)(d.z,{variant:"ghost",className:`flex-1 dark:hover:bg-gray-600 ${s?"text-blue-600":""}`,onClick:k,children:[l.jsx(h.Z,{className:" h-4 w-4"})," Like"]}),(0,l.jsxs)(d.z,{variant:"ghost",className:"flex-1 dark:hover:bg-gray-600 ",onClick:()=>{_(!z)},children:[l.jsx(u.Z,{className:" h-4 w-4"})," Comment"]}),(0,l.jsxs)(f.Vq,{open:P,onOpenChange:S,children:[l.jsx(f.hg,{asChild:!0,children:(0,l.jsxs)(d.z,{variant:"ghost",className:"flex-1 dark:hover:bg-gray-500",onClick:a,children:[l.jsx(p.Z,{className:" h-4 w-4"}),"share"]})}),(0,l.jsxs)(f.cZ,{children:[(0,l.jsxs)(f.fK,{children:[l.jsx(f.$N,{children:"Share This Post"}),l.jsx(f.Be,{children:"Choose how you want to share this post"})]}),(0,l.jsxs)("div",{className:"flex flex-col space-y-4 ",children:[l.jsx(d.z,{onClick:()=>U("facebook"),children:"Share on Facebook"}),l.jsx(d.z,{onClick:()=>U("twitter"),children:"Share on Twitter"}),l.jsx(d.z,{onClick:()=>U("linkedin"),children:"Share on Linkedin"}),l.jsx(d.z,{onClick:()=>U("copy"),children:"Copy Link"})]})]})]})]}),l.jsx(j.Z,{className:"mb-2 dark:bg-gray-400"}),l.jsx(n.M,{children:z&&l.jsx(i.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:l.jsx(g.Z,{post:e,onComment:t,commentInputRef:E})})})]})})},e?._id)};t()}catch(e){t(e)}})},6713:(e,s,a)=>{a.d(s,{Z:()=>p});var t=a(7247),l=a(8964),r=a(8826),i=a(1914),n=a(5887),c=a(6481),o=a(4571),d=a(9219),m=a(1313),x=a(7013);let h=({file:e,fileType:s,onClose:a,onPost:n,isNewStory:c,username:o,avatar:d,isLoading:h})=>{let u=o?.split(" ").map(e=>e.charAt(0).toUpperCase()).join(""),p=(0,l.useRef)(null),j=e=>{p.current&&!p.current.contains(e.target)&&a()};return(0,l.useEffect)(()=>(document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}),[]),t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",children:(0,t.jsxs)("div",{className:"relative w-full max-w-md h-[70vh] max-sm:max-w-[95%] flex flex-col bg-white dark:text-white dark:bg-gray-800 rounded-sm sm:rounded-lg overflow-hidden",ref:p,children:[t.jsx(i.z,{className:"absolute top-4 right-4 z-10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",variant:"ghost",onClick:a,children:t.jsx(x.Z,{className:"h-6 w-6"})}),(0,t.jsxs)("div",{className:"absolute sm:top-4 sm:left-4 z-10 flex items-center p-1",children:[t.jsx(r.qE,{className:" w-8 h-8 sm:w-10 sm:h-10 mr-2",children:d?t.jsx(r.F$,{src:d,alt:o}):t.jsx(m.Q5,{className:"text-sm",children:u})}),t.jsx("span",{className:"text-gray-700 dark:text-gray-200 font-semibold",children:o})]}),t.jsx("div",{className:"flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-900",children:"image"===s?t.jsx("img",{src:e,alt:"story_preview",className:"max-w-full max-h-full object-cover"}):t.jsx("video",{src:e,controls:!0,autoPlay:!0,className:"max-w-full max-h-full object-cover"})}),c&&t.jsx("div",{className:"absolute bottom-4 right-2 transform -translate-x-1/2",children:t.jsx(i.z,{onClick:n,className:"bg-blue-500 hover:bg-orange-500 text-white",children:h?"Saving...":"Share"})})]})})},u=({isAddStory:e,story:s})=>{let{user:a}=(0,o.Z)(),[m,x]=(0,l.useState)(null),[u,p]=(0,l.useState)(null),[j,f]=(0,l.useState)(""),[g,y]=(0,l.useState)(!1),{handleCreateStory:v}=(0,c.Y)(),[N,b]=(0,l.useState)(!1),[w,k]=(0,l.useState)(!1),Z=(0,l.useRef)(null),C=s?.user?.username?.split(" ").map(e=>e[0]).join(""),P=async()=>{try{y(!0);let e=new FormData;u&&e.append("media",u),await v(e),S()}catch(e){console.error(e),y(!1)}},S=()=>{b(!1),p(null),x(null),f(null),k(!1)};return(0,t.jsxs)(t.Fragment,{children:[t.jsx(n.Zb,{className:" h-36 md:w-40 w-20 md:h-60 relative  group cursor-pointer rounded-xl",onClick:e?void 0:()=>{x(s?.mediaUrl),f(s?.mediaType),k(!1),b(!0)},children:t.jsx(n.aY,{className:"p-0 h-full rounded-xl",children:e?(0,t.jsxs)("div",{className:"w-full h-full flex flex-col",children:[t.jsx("div",{className:"sm:h-3/4 h-3/5 w-full relative border-b",children:t.jsx(r.qE,{className:"w-full h-full rounded-none",children:a?.profilePicture?t.jsx(r.F$,{src:a?.profilePicture,alt:a?.username,className:"object-cover"}):t.jsx("p",{className:"w-full h-full flex justify-center items-center text-4xl",children:C})})}),(0,t.jsxs)("div",{className:"sm:h-1/4  w-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center",children:[t.jsx(i.z,{variant:"ghost",size:"sm",className:"p-0 min-h-6 h-6 min-w-6 w-6 rounded-full bg-blue-500 hover:bg-blue-600 ",onClick:()=>Z.current.click(),children:t.jsx(d.Z,{className:"min-h-4 min-w-4 text-white"})}),t.jsx("p",{className:"text-xs font-semibold mt-1",children:"Create Story"})]}),t.jsx("input",{type:"file",accept:"image/*,video/*",className:"hidden",ref:Z,onChange:e=>{let s=e.target.files[0];s&&(p(s),f(s.type.startsWith("video")?"video":"image"),x(URL.createObjectURL(s)),k(!0),b(!0)),e.target.value=""}})]}):(0,t.jsxs)(t.Fragment,{children:[s?.mediaType==="image"?t.jsx("img",{src:s?.mediaUrl,alt:s?.user?.username,className:"w-full h-full object-cover rounded-lg"}):t.jsx("video",{src:s?.mediaUrl,alt:s?.user?.username,className:"w-full h-full object-cover rounded-lg"}),t.jsx("div",{className:"absolute top-2 left-2 ring-2 ring-blue-500 rounded-full ",children:t.jsx(r.qE,{className:"w-8 h-8",children:s?.user?.profilePicture?t.jsx(r.F$,{src:s?.user?.profilePicture,alt:s?.user?.username}):t.jsx(r.Q5,{children:C})})}),t.jsx("div",{className:"absolute bottom-2 left-2 right-2",children:t.jsx("p",{className:"text-white text-xs font-semibold truncate",children:s?.user?.username})})]})})}),N&&t.jsx("div",{className:"fixed top-0 left-0 right-0 bottom-0 z-[999] h-[100vh] w-[100vw]",children:t.jsx(h,{file:m,fileType:j,onClose:()=>{S()},onPost:P,isNewStory:w,username:w?a?.username:s?.user?.username,avatar:w?a?.profilePicture:s?.user?.profilePicture,isLoading:g})})]})},p=()=>{let{story:e,fetchStoryPost:s}=(0,c.Y)();return(0,l.useEffect)(()=>{s()},[s]),t.jsx("div",{className:"relative ",children:t.jsx("div",{className:"flex overflow-x-auto sm:py-6 py-2",children:(0,t.jsxs)("div",{className:"flex space-x-2",children:[" ",t.jsx(u,{isAddStory:!0}),e?.map(e=>t.jsx(u,{story:e,className:"w-48 flex-shrink-0"},e._id))]})})})}},8559:(e,s,a)=>{a.r(s),a.d(s,{default:()=>t});let t=(0,a(5347).createProxy)(String.raw`C:\Users\softw\OneDrive\Desktop\facebook-clone\frontend\src\app\Homepage\page.js#default`)}};