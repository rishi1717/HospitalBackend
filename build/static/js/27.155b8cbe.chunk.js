(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{313:function(e,t,a){"use strict";var n=a(625),r=a(0),o=a.n(r);t.a=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(n.a,{sx:{fontSize:{xs:"0.9rem",sm:"1.4rem"},fontFamily:"sans-serif",fontWeight:"bold",color:"#595959",mt:10},component:"p"},e.head),o.a.createElement(n.a,{sx:{mx:{xs:3,sm:20},fontSize:{xs:"0.8rem",sm:"1rem"},fontFamily:"sans-serif",mt:2,mb:2,color:"#595959"},component:"p"},e.para))}},320:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(24),i=a(10),s=a(6),m=a(618),c=a(628),l=a(627),u=a(617),p=a(625),d=a(0),f=a.n(d),x=a(596),h=a(402),g=a(597),b=a(15),E=a(339),v=a.n(E),y=a(340),k=a.n(y),S=a(341),w=a.n(S);a(343);v.a.extend(k.a);var j={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:7},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:4},mobile:{breakpoint:{max:464,min:0},items:3}};t.a=function(e){var t=e.appointmentId,a=e.appointment,n=e.setAppointment,E=Object(d.useState)([]),y=Object(s.a)(E,2),k=y[0],S=y[1],O=Object(d.useState)(0),C=Object(s.a)(O,2),W=C[0],T=C[1],A=Object(d.useState)(0),D=Object(s.a)(A,2),H=D[0],z=D[1],F=Object(d.useState)(0),P=Object(s.a)(F,2),Y=P[0],M=P[1],I=Object(d.useState)(0),R=Object(s.a)(I,2),q=R[0],B=R[1],L=Object(d.useState)(0),N=Object(s.a)(L,2),_=N[0],J=N[1],K=Object(d.useState)(0),U=Object(s.a)(K,2),G=U[0],Q=U[1],V=Object(d.useState)([]),X=Object(s.a)(V,2),Z=X[0],$=X[1],ee=Object(d.useState)([]),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],re=function(){var e=Object(i.a)(r.a.mark(function e(t){var i,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=v()(t).add(1,"day"),console.log(i),n(Object(o.a)({},a,{date:i})),e.next=5,b.a.get("/appointment/".concat(a.doctorId,"/").concat(t),{headers:{"auth-token":localStorage.userToken}});case 5:s=e.sent,S(s.data.doctorTiming.days),$(s.data.timeArray),T(s.data.doctorTiming.startTime),B(s.data.doctorTiming.endTime);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(d.useEffect)(function(){Object(i.a)(r.a.mark(function e(){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/appointment/detail/".concat(t),{headers:{"auth-token":localStorage.userToken}});case 2:a=e.sent,i=v()(a.data.appointment.date,"DD/MM/YYYY"),n(Object(o.a)({},a.data.appointment,{date:i}));case 5:case"end":return e.stop()}},e)}))()},[]),Object(d.useEffect)(function(){z(v()(W,"hh:mm A").format("HH")),M(v()(W,"hh:mm A").format("mm")),J(v()(q,"hh:mm A").format("HH")),Q(v()(q,"hh:mm A").format("mm"))},[W,q]),Object(d.useEffect)(function(){for(var e=v()().hour(H).minute(Y),t=v()().hour(_).minute(G),a=[];e.isBefore(t);)a.push(e.format("hh:mm A")),e=e.add(30,"minute");ne(a)},[G]);return f.a.createElement(m.a,{container:!0,spacing:2},f.a.createElement(m.a,{item:!0,xs:12,sm:3},f.a.createElement(h.a,{dateAdapter:x.a},f.a.createElement(g.a,{maxDate:(new Date).setDate((new Date).getDate()+60),disablePast:!0,shouldDisableDate:function(e){return!k.includes(e.getDay())},label:"Select date",id:"date",name:"date",value:a.date,onChange:function(e){re(e)},renderInput:function(e){return f.a.createElement(c.a,e)}}))),f.a.createElement(m.a,{item:!0,xs:12,sm:9},f.a.createElement(l.a,{sx:{border:1,borderColor:"#595959",borderRadius:1,p:1}},ae.length>0?f.a.createElement(w.a,{responsive:j,autoPlaySpeed:1e5,key:ae},ae.map(function(e,t){var r=v()(),i=v()(e,"hh:mm A"),s=r.format("DD/MM/YYYY");return v()(a.date).format("DD/MM/YYYY")===s&&i.isBefore(r.add(1,"Hour"))&&Z.push(e),f.a.createElement(u.a,{onClick:function(){var t;t=e,n(Object(o.a)({},a,{time:t}))},disabled:Z.includes(e),sx:{backgroundColor:e===a.time?"#609acf":"#f5f5f5",color:e===a.time?"#000":""},key:t},e)})):f.a.createElement(p.a,{sx:{fontSize:12,p:1.15,color:"#595959"}},"Select a date to see available Time slots"))))}},338:function(e,t,a){e.exports=a.p+"static/media/services.1a029ea9.png"},344:function(e,t,a){e.exports=a.p+"static/media/labaratory2.3bc1ef13.webp"},345:function(e,t,a){"use strict";var n=a(0),r=a(625),o=a(618),i=a(629),s=a(630),m=a(631);t.a=function(e){return n.createElement(o.a,{item:!0,xs:12,sm:6,sx:{mt:"1rem"}},n.createElement(i.a,{elevation:3,sx:{display:"flex",maxHeight:"18rem",minHeight:{xs:0,sm:150}}},n.createElement(m.a,{component:"img",sx:{margin:"0.4rem",maxWidth:{xs:120,sm:150},maxHeight:{xs:120,sm:150}},image:e.image,alt:"image"}),n.createElement(s.a,{sx:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}},n.createElement(r.a,{sx:{fontSize:{xs:"0.85rem",sm:"1rem",fontWeight:"bold"},fontFamily:"sans-serif",color:"#595959"},component:"p"},e.head),n.createElement(r.a,{sx:{fontSize:{xs:"0.75rem",sm:"1rem",textAlign:"left"},fontFamily:"sans-serif",color:"#595959"},component:"p"},e.text))))}},346:function(e,t,a){e.exports=a.p+"static/media/distancing.436519b6.svg"},347:function(e,t,a){e.exports=a.p+"static/media/maskedMan.c3d7ddec.svg"},348:function(e,t,a){e.exports=a.p+"static/media/tempCheck.0d831521.svg"},349:function(e,t,a){e.exports=a.p+"static/media/sanitize.5ef8ea44.svg"},350:function(e,t,a){"use strict";var n=a(0),r=a(625),o=a(618),i=a(629),s=a(630),m=a(631);t.a=function(e){return n.createElement(o.a,{item:!0,xs:12,sx:{mt:"1rem"}},n.createElement(i.a,{elevation:0,sx:{display:"flex",maxHeight:"18rem",minHeight:{xs:0,sm:200}}},n.createElement(s.a,{sx:{flex:2,display:"flex",flexDirection:"column",justifyContent:"center"}},n.createElement(r.a,{sx:{fontSize:{xs:"0.8rem",sm:"1rem",color:"#595959"}},component:"p"},e.smallText?e.smallText:""),n.createElement(r.a,{sx:{fontSize:{xs:"1rem",sm:"1.8rem",color:"#595959"}},component:"p"},e.largeText?e.largeText:""),n.createElement(r.a,{sx:{fontSize:{xs:"1.1rem",sm:"2rem",fontFamily:"revert"}},component:"p"},e.phrase?e.phrase:"")),n.createElement(m.a,{component:"img",sx:{margin:"0.4rem",maxWidth:{xs:200,sm:600},maxHeight:{xs:300,sm:300}},image:e.image,alt:"image"})))}},351:function(e,t,a){"use strict";a.d(t,"a",function(){return y});var n=a(8),r=a.n(n),o=a(10),i=a(6),s=a(0),m=a.n(s),c=a(571),l=a(626),u=a(627),p=a(625),d=a(618),f=a(617),x=a(628),h=a(29),g=a(15),b=a(610),E=a(320),v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60vw",bgcolor:"background.paper",borderRadius:"4px",boxShadow:24,p:4};function y(e){var t=e.update,a=e.setUpdate,n=Object(s.useState)({}),y=Object(i.a)(n,2),k=y[0],S=y[1],w=m.a.useState(!1),j=Object(i.a)(w,2),O=j[0],C=j[1],W=m.a.useState(!1),T=Object(i.a)(W,2),A=T[0],D=T[1],H=m.a.useState(""),z=Object(i.a)(H,2),F=z[0],P=z[1],Y=function(){C(!1)},M=function(){D(!1)},I=Object(s.useState)(0),R=Object(i.a)(I,2),q=R[0],B=R[1],L=Object(s.useState)([]),N=Object(i.a)(L,2),_=N[0],J=N[1];return Object(s.useEffect)(function(){Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/appointment/".concat(localStorage.userId),{headers:{"auth-token":localStorage.userToken}});case 2:t=e.sent,J(t.data.appointment);case 4:case"end":return e.stop()}},e)}))()},[t]),0===_.length?m.a.createElement(u.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},m.a.createElement(c.a,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{width:"100%",m:2,p:5,justifyContent:"center",alignItems:"center"}}},m.a.createElement(l.a,{elevation:16,sx:{border:"1px solid #609acf",backgroundColor:"#eaeaea",p:{xs:1,sm:2}}},m.a.createElement(p.a,{sx:{fontSize:{xs:"1rem",sm:"1.4rem",color:"#595959"},textAlign:"center"},component:"p"},"You have no appointments scheduled.")))):m.a.createElement(m.a.Fragment,null,_.map(function(e,n){return"Scheduled"===e.status?m.a.createElement(d.a,{key:e._id,item:!0,xs:12,sm:6},m.a.createElement(c.a,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,minHeight:{xs:0,sm:150},width:"100%"}}},m.a.createElement(l.a,{elevation:8,sx:{border:"1px solid #609acf",backgroundColor:"#eaeaea",p:{xs:1,sm:2}}},m.a.createElement(p.a,{sx:{fontSize:{xs:"0.7rem",sm:"1rem"}},component:"p"},"Appointment with Dr. ",e.doctor),m.a.createElement(p.a,{sx:{fontSize:{xs:"1rem",sm:"1.4rem",color:"#595959",fontWeight:"bold"}},component:"p"},e.date),m.a.createElement(p.a,{sx:{fontSize:{xs:"1.1rem",sm:"1.8rem",color:"#595959",fontWeight:"bold"}},component:"p"},e.time),m.a.createElement(d.a,{container:!0,rowSpacing:1,columnSpacing:{xs:4,sm:0}},m.a.createElement(d.a,{onClick:function(){B(e._id),D(!0)},item:!0,xs:3.5,sm:3,sx:{ml:{sm:"auto",xs:0}}},m.a.createElement(h.b,{color:"#FEB139",value:"Reschedule"})),m.a.createElement(d.a,{onClick:function(){B(e._id),C(!0)},item:!0,xs:2,sm:2.9,sx:{mr:{xs:"2rem",sm:"0.5rem"}}},m.a.createElement(h.b,{color:"#CC3E34",value:"Cancel"}))))),m.a.createElement(b.a,{open:A,onClose:M,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},m.a.createElement(c.a,{sx:v},m.a.createElement(E.a,{appointmentId:q,appointment:k,setAppointment:S}),m.a.createElement(d.a,{container:!0,spacing:2},m.a.createElement(d.a,{item:!0,xs:6,sm:4,ml:"auto"},m.a.createElement(f.a,{onClick:M,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Keep Appointment")),m.a.createElement(d.a,{item:!0,xs:6,sm:4},m.a.createElement(f.a,{onClick:Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.put("/appointment/".concat(q),{date:k.date,time:k.time},{headers:{"auth-token":localStorage.getItem("userToken")}});case 2:a(!t),M();case 4:case"end":return e.stop()}},e)})),fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"orange",fontSize:"0.8rem"}},"Reschedule"))))),m.a.createElement(b.a,{open:O,onClose:Y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},m.a.createElement(c.a,{sx:v},m.a.createElement(x.a,{required:!0,fullWidth:!0,id:"cancelingFor",label:"Reason For cancelling",name:"cancelingFor",value:F,onChange:function(e){var t=e.currentTarget;P(t.value)}}),m.a.createElement(d.a,{container:!0,spacing:2},m.a.createElement(d.a,{item:!0,xs:6,sm:4,ml:"auto"},m.a.createElement(f.a,{onClick:Y,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Keep Appointment")),m.a.createElement(d.a,{item:!0,xs:6,sm:4},m.a.createElement(f.a,{onClick:Object(o.a)(r.a.mark(function e(){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={status:"Canceled",cancelReason:F},e.next=3,g.a.put("/appointment/".concat(q),n,{headers:{"auth-token":localStorage.userToken}});case 3:return e.next=5,g.a.get("/appointment",{headers:{"auth-token":localStorage.userToken}});case 5:o=e.sent,J(o.data.appointment),a(!t),Y();case 9:case"end":return e.stop()}},e)})),fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"#EF4242"}},"Cancel Appointment")))))):null}))}},352:function(e,t,a){e.exports=a.p+"static/media/hospital.97b4f086.webp"},426:function(e,t,a){e.exports=a.p+"static/media/receptionWaiting.4f0bfe63.webp"},427:function(e,t,a){e.exports=a.p+"static/media/medicalTeam.1d5081a5.jpg"},428:function(e,t,a){e.exports=a.p+"static/media/medicine2.dd73d505.webp"},429:function(e,t,a){e.exports=a.p+"static/media/userPortrait-removebg.41a5a67f.png"},608:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(625),i=a(627),s=a(618),m=a(580),c=a(426),l=a.n(c),u=a(159),p=a.n(u),d=a(344),f=a.n(d),x=a(345),h=a(346),g=a.n(h),b=a(347),E=a.n(b),v=a(348),y=a.n(v),k=a(349),S=a.n(k),w=a(313),j=a(29),O=a(58);var C=function(){return r.a.createElement(O.a,null,r.a.createElement(o.a,{sx:{textAlign:"right",mt:2,mr:{xs:1,sm:10},mb:-1,fontSize:{xs:"0.8rem",sm:"1.6rem"},fontFamily:"revert",color:"#595959"},component:"p"},"Wait Less at the Reception! Make an Online Appointment"),r.a.createElement(i.a,null,r.a.createElement(s.a,{textAlign:"center"},r.a.createElement(m.a,{mt:1,sm:4,md:7,component:"img",sx:{height:"auto",width:"auto",maxWidth:{xs:340,sm:700,md:1e3}},alt:"Hospital",src:l.a}),r.a.createElement(j.a,{value:"Register to make an Appointment"}),r.a.createElement(w.a,{head:"Committed To Your Safety",para:"At One Health Hospital we continue to follow the highest level of safety precautions as we treat our patients. We are strictly adhering to all ICMR & WHO mandated protocols, to keep you and your family safe & healthy."}),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(x.a,{image:y.a,head:"Screening for all",text:"All our employees & patients must go through a mandatory thermal screening before entering the hospital premises."}),r.a.createElement(x.a,{image:E.a,head:"Masks for everyone",text:"Wearing a mask that securely covers the nose & mouth is mandatory for all patients, attendants, doctors & hospital staff."}),r.a.createElement(x.a,{image:g.a,head:"Worry-free treatment",text:"Everyone is requested to adhere to social distancing norms in waiting and all public areas."}),r.a.createElement(x.a,{image:S.a,head:"Sanitized Facility",text:"We regularly disinfect medical equipment and the facility to ensure a healthy and virus free environment."})),r.a.createElement(w.a,{head:"Well Trained and Dedicated Doctors and Staffs ",para:"We have highly trained experts & doctors, trained in international institutions, coupled with years of experience to deliver just the right medical outcomes. Our team of highly qualified doctors have several unique achievements to their credits, but the most important thing is our multi-disciplinary approach to providing the best possible treatment for each patient."}),r.a.createElement(m.a,{mt:1,sm:4,md:7,component:"img",sx:{height:"auto",width:"auto",maxWidth:{xs:300,sm:400,md:500}},alt:"Hospital",src:p.a}),r.a.createElement(w.a,{head:"Top Notch Equipments and Laboratories",para:"Good clinical outcomes starts with the right diagnosis. Our multi-disciplinary approach does just that. Our team of specialists will listen to your needs, evaluate your condition and collaborate with different specialisations on complex cases, to come up with the right treatment plan. Patients are provided with multiple treatment options, the most suitable of which is arrived at after through a cross-function, cross-specialisation committee such as Tumour board that decides the best course of action."}),r.a.createElement(m.a,{mt:1,sm:4,md:7,component:"img",sx:{height:"auto",width:"auto",maxWidth:{xs:300,sm:400,md:500}},alt:"Hospital",src:f.a}))))},W=a(6),T=a(629),A=a(630),D=a(631),H=a(28);var z=function(e){return n.createElement(s.a,{item:!0,xs:12,sm:6,sx:{mt:"1rem"}},n.createElement(T.a,{elevation:6,sx:{display:"flex",maxHeight:"18rem",minHeight:{xs:0,sm:200}}},n.createElement(A.a,{sx:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}},n.createElement(o.a,{sx:{marginLeft:"1rem",display:{xs:"block",sm:"block"},fontSize:{xs:"0.8rem",sm:"1rem"}},component:"p"},e.smallPhrase?e.smallPhrase:""),n.createElement(H.b,{to:e.link,style:{textDecoration:"none"}},n.createElement(j.b,{value:e.phrase}))),n.createElement(D.a,{component:"img",sx:{margin:"0.4rem",maxWidth:{xs:180,sm:"auto"},maxHeight:{xs:150,sm:"auto"},display:{xs:"block",sm:"block"}},image:e.image,alt:"image"})))},F=a(427),P=a.n(F),Y=a(338),M=a.n(Y),I=a(428),R=a.n(I),q=a(352),B=a.n(q),L=a(429),N=a.n(L),_=a(350),J=a(351);var K=function(){var e=r.a.useState(0),t=Object(W.a)(e,2),a=t[0],n=t[1];return r.a.createElement(O.a,null,r.a.createElement(i.a,null,r.a.createElement(_.a,{smallText:"Hi ".concat(localStorage.getItem("userName"),","),largeText:"Welcome Back!",phrase:"Feel better about finding Healthcare",image:P.a}),r.a.createElement(s.a,{container:!0,spacing:2,mt:1,mb:1},r.a.createElement(J.a,{update:a,setUpdate:n})),r.a.createElement(s.a,{textAlign:"center",sx:{mb:4}},r.a.createElement(H.b,{style:{textDecoration:"none"},to:"/doctors"},r.a.createElement(j.a,{value:"Make an Appointment now",text:"#606acf",color:"#eaeaea"}))),r.a.createElement(s.a,{container:!0,spacing:2,sx:{mb:4}},r.a.createElement(z,{smallPhrase:"We care about our Patients. Take a look at your Profile",phrase:"Profile",link:"Profile",image:N.a}),r.a.createElement(z,{smallPhrase:"We provide our services in various Departments",phrase:"Departments",link:"doctors",image:M.a}),r.a.createElement(z,{smallPhrase:"Now in our app, you can view your Prescription",phrase:"prescription",link:"prescriptions",image:R.a}),r.a.createElement(z,{smallPhrase:"See how One Health Hospital is making an impact on lifes of our patients.",phrase:"About",link:"about",image:B.a}))))};t.default=function(){return r.a.createElement(r.a.Fragment,null,localStorage.userToken?r.a.createElement(K,null):r.a.createElement(C,null))}}}]);
//# sourceMappingURL=27.155b8cbe.chunk.js.map