(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{117:function(e,a,t){"use strict";var r=t(3),n=t(4),o=t(1),i=t(0),l=t(7),s=t(550),c=t(596),m=t(16),d=t(9),u=t(551),p=t(552);function b(e){return Object(u.a)("MuiFab",e)}var h=Object(p.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),f=t(8),g=t(2),x=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],E=Object(f.a)(c.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a[t.variant],a["size".concat(Object(m.a)(t.size))],"inherit"===t.color&&a.colorInherit,a[Object(m.a)(t.size)],a[t.color]]}})(function(e){var a,t=e.theme,n=e.ownerState;return Object(o.a)({},t.typography.button,(a={minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:t.zIndex.fab,boxShadow:t.shadows[6],"&:active":{boxShadow:t.shadows[12]},color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],"&:hover":{backgroundColor:t.palette.grey.A100,"@media (hover: none)":{backgroundColor:t.palette.grey[300]},textDecoration:"none"}},Object(r.a)(a,"&.".concat(h.focusVisible),{boxShadow:t.shadows[6]}),Object(r.a)(a,"&.".concat(h.disabled),{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground}),a),"small"===n.size&&{width:40,height:40},"medium"===n.size&&{width:48,height:48},"extended"===n.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===n.variant&&"small"===n.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===n.variant&&"medium"===n.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===n.color&&{color:"inherit"})},function(e){var a=e.theme,t=e.ownerState;return Object(o.a)({},"inherit"!==t.color&&"default"!==t.color&&null!=a.palette[t.color]&&{color:a.palette[t.color].contrastText,backgroundColor:a.palette[t.color].main,"&:hover":{backgroundColor:a.palette[t.color].dark,"@media (hover: none)":{backgroundColor:a.palette[t.color].main}}})}),w=i.forwardRef(function(e,a){var t=Object(d.a)({props:e,name:"MuiFab"}),r=t.children,i=t.className,c=t.color,u=void 0===c?"default":c,p=t.component,h=void 0===p?"button":p,f=t.disabled,w=void 0!==f&&f,v=t.disableFocusRipple,y=void 0!==v&&v,O=t.focusVisibleClassName,j=t.size,C=void 0===j?"large":j,q=t.variant,S=void 0===q?"circular":q,k=Object(n.a)(t,x),T=Object(o.a)({},t,{color:u,component:h,disabled:w,disableFocusRipple:y,size:C,variant:S}),z=function(e){var a=e.color,t=e.variant,r=e.classes,n=e.size,o={root:["root",t,"size".concat(Object(m.a)(n)),"inherit"===a?"colorInherit":a]};return Object(s.a)(o,b,r)}(T);return Object(g.jsx)(E,Object(o.a)({className:Object(l.a)(z.root,i),component:h,disabled:w,focusRipple:!y,focusVisibleClassName:Object(l.a)(z.focusVisible,O),ownerState:T,ref:a},k,{children:r}))});a.a=w},118:function(e,a,t){"use strict";var r=t(4),n=t(1),o=t(0),i=t(7),l=t(550),s=t(8),c=t(9),m=t(551),d=t(552);function u(e){return Object(m.a)("MuiFormGroup",e)}Object(d.a)("MuiFormGroup",["root","row","error"]);var p=t(22),b=t(33),h=t(2),f=["className","row"],g=Object(s.a)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.row&&a.row]}})(function(e){var a=e.ownerState;return Object(n.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},a.row&&{flexDirection:"row"})}),x=o.forwardRef(function(e,a){var t=Object(c.a)({props:e,name:"MuiFormGroup"}),o=t.className,s=t.row,m=void 0!==s&&s,d=Object(r.a)(t,f),x=Object(p.a)(),E=Object(b.a)({props:t,muiFormControl:x,states:["error"]}),w=Object(n.a)({},t,{row:m,error:E.error}),v=function(e){var a=e.classes,t={root:["root",e.row&&"row",e.error&&"error"]};return Object(l.a)(t,u,a)}(w);return Object(h.jsx)(g,Object(n.a)({className:Object(i.a)(v.root,o),ownerState:w,ref:a},d))});a.a=x},337:function(e,a,t){"use strict";var r=t(41);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(42)),o=t(2),i=(0,n.default)((0,o.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddBoxRounded");a.default=i},369:function(e,a,t){"use strict";var r=t(6),n=t(0),o=t(631),i=t(567),l=t(628),s=t(627),c=t(620),m=t(539),d=t(53),u=t.n(d),p=t(622),b=t(611),h=t(615),f=t(51),g=t.n(f),x=t(28),E={padding:"1rem",textDecoration:"none",color:"white"},w={padding:"1rem",textDecoration:"none",color:"black"};a.a=function(){var e=n.useState(null),a=Object(r.a)(e,2),t=a[0],d=a[1],f=function(){d(null)};return n.createElement(o.a,{position:"static",sx:{borderRadius:"0.6rem"}},n.createElement("style",null,"@import url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap')"),n.createElement(p.a,{maxWidth:"xl"},n.createElement(l.a,{disableGutters:!0},n.createElement(s.a,{sx:{p:0,display:{xs:"none",sm:"flex"}}},n.createElement(b.a,{sx:{display:{xs:"none",sm:"flex"}},alt:"One Health",src:g.a}),n.createElement(x.b,{style:E,to:"/doctor"},n.createElement(c.a,{variant:"h6",noWrap:!0,component:"div",sx:{fontFamily:"Sniglet",fontSize:"1.1rem",color:"white",mr:2,display:{xs:"none",sm:"flex"}}},"One Health Hospital"))),n.createElement(i.a,{sx:{flexGrow:1,display:{xs:"flex",sm:"none"}}},n.createElement(s.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit"},n.createElement(u.a,null)),n.createElement(m.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(t),onClose:f,sx:{display:{xs:"block",sm:"none"}}},n.createElement(h.a,{onClick:f},n.createElement(x.b,{style:w,to:"/doctor"},n.createElement(c.a,{textAlign:"center"},"Home"))),n.createElement(h.a,{onClick:f},n.createElement(x.b,{style:w,to:"/doctor/login"},n.createElement(c.a,{textAlign:"center"},"Login"))),n.createElement(h.a,{onClick:f},n.createElement(x.b,{style:w,to:"/doctor/register"},n.createElement(c.a,{textAlign:"center"},"Register"))))),n.createElement(i.a,{sx:{flexGrow:0,marginLeft:"auto",display:{xs:"flex",sm:"flex"}}},n.createElement(x.b,{style:E,to:"/doctor/login"},"Login"),n.createElement(x.b,{style:E,to:"/doctor/register"},"Register")))))}},577:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return M});var r=t(3),n=t(19),o=t(10),i=t.n(o),l=t(12),s=t(6),c=t(0),m=t.n(c),d=t(612),u=t(623),p=t(613),b=t(567),h=t(620),f=t(622),g=t(121),x=t(17),E=t(14),w=t(20),v=t.n(w),y=t(337),O=t.n(y),j=t(117),C=t(634),q=t(606),S=t(599),k=t(615),T=t(636),z=t(118),R=t(638),F=t(598),W=t(369),A=v.a.mixin({background:"#1E1E1E",color:"white",toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0});function M(){var e=Object(x.g)(),a=Object(g.a)(),t=a.register,o=a.handleSubmit,w=a.formState.errors,v=Object(c.useState)(),y=Object(s.a)(v,2),M=y[0],L=y[1],N=Object(c.useState)(),P=Object(s.a)(N,2),D=P[0],H=P[1],V=Object(c.useState)([]),G=Object(s.a)(V,2),I=G[0],U=G[1];Object(c.useEffect)(function(){Object(l.a)(i.a.mark(function e(){var a,t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/department");case 2:a=e.sent,t=a.data.department.map(function(e){return e.name}),U(t);case 5:case"end":return e.stop()}},e)}))()},[]),Object(c.useEffect)(function(){if($(Object(n.a)({},Z,{image:M})),M){var e=URL.createObjectURL(M);return H(e),function(){return URL.revokeObjectURL(e)}}H(void 0)},[M]);var B=function(e){e.target.files&&0!==e.target.files.length?L(e.target.files[0]):L(void 0)},J=Object(c.useState)(),_=Object(s.a)(J,2),Q=_[0],Y=_[1],K=Object(c.useState)({name:"",qualification:"",department:"",email:"",password:"",cpassword:"",experience:"",expertise:"",days:[],startTime:"",endTime:"",fee:0,request:!0,image:""}),X=Object(s.a)(K,2),Z=X[0],$=X[1],ee=function(e){var a=e.currentTarget;$(Object(n.a)({},Z,Object(r.a)({},a.name,a.value)))},ae=function(){var a=Object(l.a)(i.a.mark(function a(){var t;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,Z.password===Z.cpassword){a.next=4;break}throw Y("Passwords do not match"),new Error("Passwords do not match");case 4:if(M){a.next=7;break}throw Y("Upload an image"),new Error("Upload an image");case 7:return(t=new FormData).append("name",Z.name),t.append("qualification",Z.qualification),t.append("department",Z.department),t.append("email",Z.email),t.append("password",Z.password),t.append("experience",Z.experience),t.append("expertise",Z.expertise),t.append("days",JSON.stringify(Z.days)),t.append("startTime",Z.startTime),t.append("endTime",Z.endTime),t.append("fee",Z.fee),t.append("request",Z.request),t.append("image",M),console.log(t),a.next=24,E.a.post("/doctor",t);case 24:e("/doctor/login"),A.fire({position:"bottom-right",icon:"success",title:"Register request sent",text:"Wait for admin to aprove your request",showConfirmButton:!1,timer:3e3}),a.next=32;break;case 28:a.prev=28,a.t0=a.catch(0),console.log(a.t0.message),a.t0.response&&Y(a.t0.response.data.message);case 32:case"end":return a.stop()}},a,null,[[0,28]])}));return function(){return a.apply(this,arguments)}}(),te=m.a.useState({sunday:!1,monday:!0,tuesday:!0,wednesday:!0,thursday:!0,friday:!0,saturday:!0}),re=Object(s.a)(te,2),ne=re[0],oe=re[1],ie=function(e){oe(Object(n.a)({},ne,Object(r.a)({},e.target.name,e.target.checked)))};return Object(c.useEffect)(function(){var e=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],a=Object.keys(ne).filter(function(e){return ne[e]}).map(function(a){return e.indexOf(a)});$(Object(n.a)({},Z,{days:a}))},[ne]),m.a.createElement(m.a.Fragment,null,m.a.createElement(W.a,null),m.a.createElement(f.a,null,m.a.createElement(b.a,{sx:{flexGrow:1}}),m.a.createElement(f.a,{component:"main",maxWidth:"md"},m.a.createElement(h.a,{align:"center",component:"h1",variant:"h5",sx:{marginTop:3,color:"#595959"}},"Register"),m.a.createElement(b.a,{component:"form",onSubmit:o(ae),noValidate:!0},m.a.createElement(p.a,{container:!0,spacing:2,alignItems:"center"},m.a.createElement(p.a,{item:!0,xs:12,sm:6,textAlign:"center"},m.a.createElement(p.a,{sx:{maxHeight:"50vh"},container:!0,spacing:2},m.a.createElement(p.a,{item:!0,xs:12,mt:{xs:4,sm:0}},!M&&m.a.createElement("label",{htmlFor:"image"},m.a.createElement("input",{style:{display:"none"},id:"image",name:"image",type:"file",onChange:B}),m.a.createElement(j.a,{size:"small",component:"span","aria-label":"add",variant:"extended"},m.a.createElement(O.a,null)," Upload photo"))),m.a.createElement(p.a,{item:!0,xs:12},M&&m.a.createElement(p.a,{container:!0,spacing:2},m.a.createElement(p.a,{item:!0,xs:12},m.a.createElement("img",{style:{width:"12rem",height:"12rem",borderRadius:100},src:D,alt:""})),m.a.createElement(p.a,{item:!0,xs:12},m.a.createElement("label",{htmlFor:"image"},m.a.createElement("input",{style:{display:"none"},id:"image",name:"image",type:"file",onChange:B}),m.a.createElement(j.a,{size:"small",component:"span","aria-label":"add",variant:"extended"},m.a.createElement(O.a,null)," Change photo"))))))),m.a.createElement(p.a,{item:!0,xs:12,sm:6},m.a.createElement(b.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"}},m.a.createElement(b.a,{sx:{mt:2}},m.a.createElement(p.a,{container:!0,spacing:2},m.a.createElement(p.a,{item:!0,xs:12,sm:12},m.a.createElement(u.a,Object.assign({},t("name",{required:"Provide name!",minLength:{value:2,message:"Atleast 2 characters required"}}),{autoFocus:!0,required:!0,fullWidth:!0,name:"name",id:"name",label:"Name",onChange:ee,value:Z.name,error:w.name,helperText:w.name?w.name.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:12},m.a.createElement(u.a,Object.assign({},t("email",{required:"Provide email!",minLength:{value:2,message:"Atleast 2 characters required"}}),{autoFocus:!0,required:!0,fullWidth:!0,name:"email",id:"email",label:"Email",onChange:ee,value:Z.email,error:w.email,helperText:w.email?w.email.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:12},m.a.createElement(u.a,Object.assign({},t("qualification",{required:"Provide qualification!",minLength:{value:2,message:"Atleast 2 characters required"}}),{required:!0,fullWidth:!0,id:"qualification",label:"Qualification",name:"qualification",onChange:ee,value:Z.qualification,error:w.qualification,helperText:w.qualification?w.qualification.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:12},m.a.createElement(C.a,{fullWidth:!0},m.a.createElement(q.a,{id:"department"},"department"),m.a.createElement(S.a,Object.assign({},t("department",{required:"Select department!"}),{required:!0,fullWidth:!0,label:"department",id:"department",name:"department",value:Z.department,onChange:function(e){$(Object(n.a)({},Z,Object(r.a)({},e.target.name,e.target.value)))},error:w.department}),I.map(function(e,a){return m.a.createElement(k.a,{key:a,value:e},e)})),m.a.createElement(T.a,{sx:{color:"#D32F2F"}},w.department?w.department.message:null))))))),m.a.createElement(p.a,{item:!0,xs:12,sm:6},m.a.createElement(u.a,Object.assign({},t("experience",{required:"Provide your experience!"}),{required:!0,fullWidth:!0,id:"experience",label:"Experience (in years)",name:"experience",autoComplete:"experience",onChange:ee,value:Z.experience,error:w.experience,helperText:w.experience?w.experience.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:6},m.a.createElement(u.a,Object.assign({},t("expertise",{required:"Provide expertise "}),{required:!0,fullWidth:!0,id:"expertise",label:"Expertise",name:"expertise",onChange:ee,value:Z.expertise,error:w.expertise,helperText:w.expertise?w.expertise.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:6},m.a.createElement(u.a,Object.assign({},t("password",{required:"Create a password!",minLength:{value:8,message:"Atleast 8 characters required"}}),{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:ee,value:Z.password,error:w.password,helperText:w.password?w.password.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:6},m.a.createElement(u.a,Object.assign({},t("cpassword",{required:"Confirm your password!"}),{required:!0,fullWidth:!0,name:"cpassword",label:"Confirm Password",type:"password",id:"cpassword",onChange:ee,value:Z.cpassword,error:w.cpassword,helperText:w.cpassword?w.cpassword.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:12,sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center",justifyContent:"space-between"}},m.a.createElement(h.a,{sx:{color:"#595959",fontSize:"1.1rem"}},"Select Working days :"),m.a.createElement(z.a,{sx:{display:"flex",flexDirection:"row",border:"1px solid #b5b5b5",borderRadius:1,padding:"0.5rem"}},m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.monday,onChange:ie,name:"monday"}),label:"Mon"}),m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.tuesday,onChange:ie,name:"tuesday"}),label:"Tue"}),m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.wednesday,onChange:ie,name:"wednesday"}),label:"Wed"}),m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.thursday,onChange:ie,name:"thursday"}),label:"Thu"}),m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.friday,onChange:ie,name:"friday"}),label:"Fri"}),m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.saturday,onChange:ie,name:"saturday"}),label:"Sat"}),m.a.createElement(R.a,{sx:{color:"#595959",fontSize:"1.1rem"},control:m.a.createElement(F.a,{checked:ne.sunday,onChange:ie,name:"sunday"}),label:"Sun"}))),m.a.createElement(p.a,{item:!0,xs:12,sm:4},m.a.createElement(u.a,Object.assign({},t("startTime",{required:"Confirm your password!"}),{required:!0,fullWidth:!0,name:"startTime",label:"Starting time (hh:mm A)",type:"text",id:"startTime",onChange:ee,value:Z.startTime,error:w.startTime,helperText:w.startTime?w.startTime.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:4},m.a.createElement(u.a,Object.assign({},t("endTime",{required:"Confirm your password!"}),{required:!0,fullWidth:!0,name:"endTime",label:"Finishing time (hh:mm A)",type:"text",id:"endTime",onChange:ee,value:Z.endTime,error:w.endTime,helperText:w.endTime?w.endTime.message:null}))),m.a.createElement(p.a,{item:!0,xs:12,sm:4},m.a.createElement(u.a,Object.assign({},t("fee",{required:"Enter your fees!"}),{required:!0,fullWidth:!0,name:"fee",label:"Your Fee",type:"number",id:"fee",onChange:ee,value:Z.fee,error:w.fee,helperText:w.fee?w.fee.message:null}))),m.a.createElement(h.a,{sx:{color:"red",m:2,width:"100%",textAlign:"center"}},Q||"")),m.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mb:3}},"Sign Up")))))}}}]);
//# sourceMappingURL=4.f7defcfe.chunk.js.map