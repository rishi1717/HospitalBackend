(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{612:function(e,t,r){"use strict";r.r(t);var a=r(14),n=r(3),c=r(24),o=r(8),i=r.n(o),s=r(10),l=r(6),m=r(625),d=r(618),u=r(628),p=r(617),b=r(629),f=r(630),x=r(15),E=r(0),g=r.n(E),v=r(16),h=r(149),k=r(18),j=r(580),w=r(59),F=r(19),y=r.n(F),O=r(200),C=r.n(O),P=r(29);function D(e){var t=e.prescriptions,r=Object(v.c)(function(e){return e.doctor});return E.createElement(E.Fragment,null,t.map(function(e){return E.createElement(b.a,{key:e._id,sx:{display:"flex",m:"0.4rem",flexDirection:{xs:"column",md:"row"},borderRadius:2,backgroundColor:"#eaeaea"}},E.createElement(d.a,{container:!0,spacing:2},E.createElement(d.a,{item:!0,xs:12,sm:4},E.createElement(f.a,{sx:{flex:"1 0 auto"}},e.medicine.map(function(e){return E.createElement(m.a,{key:e,variant:"subtitle1",color:"text.secondary",component:"div"},e)}))),E.createElement(d.a,{item:!0,xs:12,sm:3.8},E.createElement(f.a,{sx:{flex:"1 0 auto"}},e.dosage.map(function(e,t){return E.createElement(m.a,{key:t,variant:"subtitle1",color:"text.secondary",component:"div"},e)}))),E.createElement(d.a,{item:!0,sm:2.2},E.createElement(f.a,{sx:{flex:"1 0 auto"}},E.createElement(m.a,{variant:"subtitle1",color:"text.secondary",component:"div"},e.date))),E.createElement(d.a,{item:!0,sm:2},E.createElement(f.a,{sx:{flex:"1 0 auto"}},E.createElement(m.a,{variant:"subtitle1",color:"text.secondary",component:"div"},E.createElement("div",{onClick:Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.fire({title:"Are you sure?",text:"Prescription will be removed!",background:"#eaeaea",color:"#595959",showCancelButton:!0,cancelButtonColor:"#609ACF",confirmButtonText:"Remove Prescription",confirmButtonColor:"#B81C1C"});case 2:if(!t.sent.isConfirmed){t.next=12;break}return t.prev=4,t.next=7,C.a.delete("/prescription/".concat(e._id),{headers:{"auth-token":r.token}});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[4,9]])}))},E.createElement(P.b,{value:"X",color:"white",text:"#B81C1C"})))))))}))}var B=r(150);function S(e){var t=e.prescriptions,r=e.setData;return E.createElement(E.Fragment,null,t.medicine.map(function(e,a){return E.createElement(b.a,{key:a,sx:{display:"flex",m:"0.4rem",flexDirection:{xs:"column",md:"row"},justifyContent:"center",alignItems:"center",borderRadius:2,backgroundColor:"#eaeaea"}},E.createElement(d.a,{container:!0,spacing:2},E.createElement(d.a,{item:!0,xs:12,sm:3.5},E.createElement(f.a,{sx:{flex:"1 0 auto"}},E.createElement(m.a,{variant:"subtitle1",color:"text.secondary",component:"div"},e))),E.createElement(d.a,{item:!0,xs:12,sm:3.5},E.createElement(f.a,{sx:{flex:"1 0 auto"}},E.createElement(m.a,{variant:"subtitle1",color:"text.secondary",component:"div"},t.dosage[a]))),E.createElement(d.a,{item:!0,xs:12,sm:3},E.createElement(f.a,{sx:{flex:"1 0 auto"}},E.createElement(m.a,{variant:"subtitle1",color:"text.secondary",component:"div"},t.prescribedFor[a]))),E.createElement(d.a,{item:!0,xs:12,sm:2,sx:{display:"flex",justifyContent:"center",alignItems:"center"}},E.createElement(p.a,{sx:{color:"red"},onClick:function(){r({medicine:t.medicine.filter(function(e,t){return t!==a}),dosage:t.dosage.filter(function(e,t){return t!==a}),prescribedFor:t.prescribedFor.filter(function(e,t){return t!==a})})}},"X"))))}))}var q=y.a.mixin({background:"#1E1E1E",color:"white",toast:!0,position:"top-end",showConfirmButton:!1,timerProgressBar:!0});t.default=function(){var e=Object(v.c)(function(e){return e.doctor});if(e.token){var t=Object(k.f)().state.user,r=Object(w.a)(),o=r.register,F=r.handleSubmit,y=r.formState.errors,O=Object(E.useState)({doctorId:e.id,userId:t._id,user:t.firstName,doctor:e.name,medicine:[],dosage:[],prescribedFor:[],date:new Date}),C=Object(l.a)(O,2),P=C[0],A=C[1],R=Object(E.useState)({medicine:"",dosage:"",prescribedFor:""}),I=Object(l.a)(R,2),T=I[0],M=I[1],_=Object(E.useState)([]),z=Object(l.a)(_,2),N=z[0],W=z[1];Object(E.useEffect)(function(){Object(s.a)(i.a.mark(function r(){var a;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.a.get("/prescription/".concat(t._id),{headers:{"auth-token":e.token}});case 2:a=r.sent,W(a.data.prescription);case 4:case"end":return r.stop()}},r)}))()},[]);var J=function(e){var t=e.currentTarget,r=t.name,a=t.value;M(Object(c.a)({},T,Object(n.a)({},r,a)))},X=function(){var t=Object(s.a)(i.a.mark(function t(){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=Object(c.a)({},P),t.next=4,x.a.post("/prescription",r,{headers:{"auth-token":e.token}});case 4:q.fire({position:"bottom-right",icon:"success",title:"Prescription Added",showConfirmButton:!1,timer:3e3}),A(Object(c.a)({},P,{medicine:[],dosage:[],prescribedFor:[]})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(){return t.apply(this,arguments)}}();return g.a.createElement(h.a,null,g.a.createElement(m.a,{sx:{fontSize:{xs:"1.2rem",sm:"1.4rem"},display:{xs:"none",sm:"block"},fontFamily:"sans-serif",color:"#1976D2"},component:"p"},"Prescribe Medicine"),g.a.createElement(m.a,{sx:{fontSize:{xs:"1rem",sm:"1.2rem"},fontFamily:"sans-serif",color:"#595959",textAlign:"center",mb:3,mt:{xs:1,sm:3}},component:"p"},"Prescribe Medicine for ",t.firstName),g.a.createElement(j.a,{component:"form",noValidate:!0,onSubmit:F(X),sx:{m:{xs:2,sm:5}}},g.a.createElement(d.a,{direction:"column",container:!0,spacing:2},g.a.createElement(d.a,{item:!0},g.a.createElement(u.a,Object.assign({},o("medicine",{required:"Provide medicine!"}),{required:!0,fullWidth:!0,id:"medicine",label:"Medicine",name:"medicine",onChange:J,value:T.medicine,error:!!y.medicine,helperText:y.medicine?y.medicine.message:null}))),g.a.createElement(d.a,{item:!0},g.a.createElement(u.a,Object.assign({},o("dosage",{required:"Provide dosage!"}),{required:!0,fullWidth:!0,id:"dosage",label:"dosage",name:"dosage",onChange:J,value:T.dosage,error:!!y.dosage,helperText:y.dosage?y.dosage.message:null}))),g.a.createElement(d.a,{item:!0},g.a.createElement(u.a,Object.assign({},o("prescribedFor",{required:"prescribedFor?"}),{required:!0,fullWidth:!0,id:"prescribedFor",label:"prescribed For",name:"prescribedFor",onChange:J,value:T.prescribedFor,error:!!y.prescribedFor,helperText:y.prescribedFor?y.prescribedFor.message:null}))),g.a.createElement(d.a,{item:!0},g.a.createElement(p.a,{onClick:function(){""!==T.medicine&&""!==T.dosage&&""!==T.prescribedFor?(A(Object(c.a)({},P,{medicine:[].concat(Object(a.a)(P.medicine),[T.medicine]),dosage:[].concat(Object(a.a)(P.dosage),[T.dosage]),prescribedFor:[].concat(Object(a.a)(P.prescribedFor),[T.prescribedFor])})),M({medicine:"",dosage:"",prescribedFor:""})):q.fire({icon:"error",title:"Please fill all fields"})}},"Add Prescription to list")),P.medicine.length>0&&g.a.createElement(g.a.Fragment,null,g.a.createElement(S,{setData:A,prescriptions:P}),g.a.createElement(d.a,{item:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center"}},g.a.createElement(p.a,{type:"submit",sx:{backgroundColor:"#1976D2",color:"white",":hover":{backgroundColor:"white",color:"#1976D2"}}},"Prescribe"))))),g.a.createElement(m.a,{sx:{fontSize:{xs:"1rem",sm:"1.2rem"},fontFamily:"sans-serif",color:"#595959",textAlign:"center",mb:3,mt:{xs:1,sm:3}},component:"p"},"Prescriptions of ",t.firstName),g.a.createElement(b.a,{sx:{display:{xs:"none",sm:"flex"},m:"1rem",flexDirection:{xs:"column",md:"row"},backgroundColor:"#585858"}},g.a.createElement(d.a,{container:!0,spacing:2},g.a.createElement(d.a,{item:!0,xs:4},g.a.createElement(f.a,{sx:{flex:"1 0 auto"}},g.a.createElement(m.a,{variant:"subtitle1",color:"white",component:"div",borderRight:1},"Medicine"))),g.a.createElement(d.a,{item:!0,xs:4},g.a.createElement(f.a,null,g.a.createElement(m.a,{variant:"subtitle1",color:"white",component:"div",borderRight:1},"Dosage"))),g.a.createElement(d.a,{item:!0,xs:2.3},g.a.createElement(f.a,null,g.a.createElement(m.a,{variant:"subtitle1",color:"white",component:"div",borderRight:1},"Date"))),g.a.createElement(d.a,{item:!0,xs:1.7},g.a.createElement(f.a,{sx:{flex:"1 0 auto"}},g.a.createElement(m.a,{variant:"subtitle1",color:"white",component:"div"},"Options"))))),g.a.createElement(D,{prescriptions:N}))}return g.a.createElement(B.a,null)}}}]);
//# sourceMappingURL=6.65e1c5fa.chunk.js.map