(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{351:function(e,t,a){e.exports=a.p+"static/media/hospital.97b4f086.webp"},615:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),o=a(10),s=a(3),c=a(24),i=a(6),l=a(0),m=a.n(l),u=a(616),p=a(617),d=a(628),f=a(626),g=a(571),h=a(618),b=a(152),x=a.n(b),E=a(625),v=a(351),O=a.n(v),S=a(627),w=a(59),y=a(18),j=a(28),I=a(15),k=a(19),T=a.n(k),C=a(58),P=a(29),W=T.a.mixin({background:"#1E1E1E",color:"white",toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0}),V=function(e){var t=e.phone,a=e.setOtp,n=e.otpData,b=m.a.useState(30),v=Object(i.a)(b,2),O=v[0],S=v[1];Object(l.useEffect)(function(){var e=setInterval(function(){S(O-1)},1e3);return O<1&&clearInterval(e),function(){return clearInterval(e)}},[O]);var j=Object(y.g)(),k=m.a.useState(),T=Object(i.a)(k,2),C=T[0],V=T[1],q=Object(w.a)(),D=q.register,B=q.handleSubmit,R=q.reset,N=q.formState.errors,F=m.a.useState({otpVerify:"",phone:t}),J=Object(i.a)(F,2),L=J[0],U=J[1],_=function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("/user/otpverify",L);case 3:200===(t=e.sent).status?(localStorage.setItem("userToken",t.data.token),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("userImage",t.data.user.image),localStorage.setItem("userName",t.data.user.firstName),W.fire({position:"bottom-right",icon:"success",title:"user Logged in",showConfirmButton:!1,timer:3e3}),j("/")):V("Incorrect OTP"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&V(e.t0.response.data.message),console.log(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}();return m.a.createElement(h.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,sx:{borderRadius:"1rem"}},m.a.createElement(g.a,{sx:{my:4,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},m.a.createElement(u.a,{sx:{m:1,bgcolor:"secondary.main"}},m.a.createElement(x.a,null)),m.a.createElement(E.a,{component:"h1",variant:"h5"},"Sign in"),m.a.createElement(g.a,{component:"form",noValidate:!0,onSubmit:B(_),sx:{mt:1}},m.a.createElement(d.a,Object.assign({},D("otpVerify",{required:"Provide OTP!"}),{margin:"normal",required:!0,fullWidth:!0,id:"otpVerify",label:"OTP",name:"otpVerify",autoComplete:"otpVerify",autoFocus:!0,onChange:function(e){var t=e.currentTarget;U(Object(c.a)({},L,Object(s.a)({},t.name,t.value))),R()},value:L.otpVerify,error:!!N.otpVerify,helperText:N.otpVerify?N.otpVerify.message:null})),m.a.createElement(E.a,{sx:{color:"red",m:1}},C||""),m.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Verify OTP"),m.a.createElement(p.a,{onClick:function(){a(!1)},fullWidth:!0,sx:{mb:4}},"Sign In With Email and password"),O>0?m.a.createElement("div",null,"Resend OTP in ",O," sec"):m.a.createElement("div",{onClick:Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("/user/otplogin",n);case 3:S(30),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}},e,null,[[0,6]])}))},m.a.createElement(P.b,{value:"Resend OTP",text:"#609acf",color:"#eaeaea"})))))},q=function(e){var t=e.setOtp,a=m.a.useState(),n=Object(i.a)(a,2),l=n[0],b=n[1],v=m.a.useState(!1),O=Object(i.a)(v,2),S=O[0],y=O[1],k=Object(w.a)(),T=k.register,C=k.handleSubmit,P=k.formState.errors,W=m.a.useState({phone:"+91"}),q=Object(i.a)(W,2),D=q[0],B=q[1],R=function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("/user/otplogin",D);case 3:y(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&b(e.t0.response.data.message),console.log(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}();return S?m.a.createElement(V,{setOtp:t,otpData:D,phone:D.phone}):m.a.createElement(h.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,sx:{borderRadius:"1rem"}},m.a.createElement(g.a,{sx:{my:4,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},m.a.createElement(u.a,{sx:{m:1,bgcolor:"secondary.main"}},m.a.createElement(x.a,null)),m.a.createElement(E.a,{component:"h1",variant:"h5"},"Sign in"),m.a.createElement(g.a,{component:"form",noValidate:!0,onSubmit:C(R),sx:{mt:1}},m.a.createElement(d.a,Object.assign({},T("phone",{required:"Provide phone!"}),{margin:"normal",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",autoComplete:"phone",autoFocus:!0,onChange:function(e){var t=e.currentTarget;B(Object(c.a)({},D,Object(s.a)({},t.name,t.value)))},value:D.phone,error:!!P.phone,helperText:P.phone?P.phone.message:null})),m.a.createElement(E.a,{sx:{color:"red",m:1}},l||""),m.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Send OTP"),m.a.createElement(p.a,{onClick:function(){t(!1)},fullWidth:!0,sx:{mb:4}},"Sign In With Email and password"),m.a.createElement(h.a,{container:!0},m.a.createElement(h.a,{item:!0},m.a.createElement(j.b,{to:"/register",style:{textDecoration:"none",color:"#609acf"}},"Don't have an account? Sign Up"))))))};a.d(t,"default",function(){return B});var D=T.a.mixin({background:"#1E1E1E",color:"white",toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0});function B(){var e=l.useState(),t=Object(i.a)(e,2),a=t[0],n=t[1],m=l.useState(!1),b=Object(i.a)(m,2),v=b[0],k=b[1],T=Object(y.g)(),P=Object(w.a)(),W=P.register,V=P.handleSubmit,B=P.formState.errors,R=l.useState({email:"",password:""}),N=Object(i.a)(R,2),F=N[0],J=N[1],L=function(e){var t=e.currentTarget;J(Object(c.a)({},F,Object(s.a)({},t.name,t.value)))},U=function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("/user/login",F);case 3:t=e.sent,localStorage.setItem("userToken",t.data.token),localStorage.setItem("userId",t.data.user._id),localStorage.setItem("userImage",t.data.user.image),localStorage.setItem("userName",t.data.user.firstName),D.fire({position:"bottom-right",icon:"success",title:"user Logged in",showConfirmButton:!1,timer:3e3}),T("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),n(e.t0.response.data.message);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(){return e.apply(this,arguments)}}();return localStorage.getItem("userToken")?l.createElement(y.a,{to:"/"}):l.createElement(C.a,null,l.createElement(S.a,null,l.createElement(h.a,{container:!0,mt:4},l.createElement(h.a,{item:!0,xs:!1,sm:4,md:7},l.createElement(g.a,{item:!0,mt:10,xs:!1,sm:4,md:7,component:"img",sx:{height:"auto",width:"auto",maxWidth:{xs:0,sm:400,md:500}},alt:"Hospital",src:O.a})),v?l.createElement(q,{setOtp:k}):l.createElement(h.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,sx:{borderRadius:"1rem"}},l.createElement(g.a,{sx:{my:4,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},l.createElement(u.a,{sx:{m:1,bgcolor:"secondary.main"}},l.createElement(x.a,null)),l.createElement(E.a,{component:"h1",variant:"h5"},"Sign in"),l.createElement(g.a,{component:"form",noValidate:!0,onSubmit:V(U),sx:{mt:1}},l.createElement(d.a,Object.assign({},W("email",{required:"Provide email!"}),{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:L,value:F.email,error:!!B.email,helperText:B.email?B.email.message:null})),l.createElement(d.a,Object.assign({},W("password",{required:"provide a password!"}),{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:L,value:F.password,error:!!B.password,helperText:B.password?B.password.message:null})),l.createElement(E.a,{sx:{color:"red",m:1}},a||""),l.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In"),l.createElement(p.a,{onClick:function(){k(!0)},fullWidth:!0,sx:{mb:4}},"Sign In With OTP"),l.createElement(h.a,{container:!0},l.createElement(h.a,{item:!0},l.createElement(j.b,{to:"/register",style:{textDecoration:"none",color:"#609acf"}},"Don't have an account? Sign Up"))))))),l.createElement(h.a,{container:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:5}},l.createElement(h.a,{item:!0},l.createElement(p.a,{onClick:function(){T("/doctor")}},"Doctors page")))))}}}]);
//# sourceMappingURL=25.c3fef428.chunk.js.map