(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{291:function(e,t,a){"use strict";var n=a(627),r=a(626),o=a(571),c=a(617),l=a(0),i=a.n(l),s=a(18),m=a(58);t.a=function(){var e=Object(s.g)();return i.a.createElement(m.a,null,i.a.createElement(n.a,{sx:{display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",height:"60vh"}},i.a.createElement(r.a,{elevation:3,sx:{border:1,borderColor:"#EF4242",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",m:{xs:1,sm:15},p:{xs:2,sm:4},backgroundColor:"#eaeaea"}},i.a.createElement(o.a,{sx:{p:2,color:"#595959",fontSize:"1.6rem"},textAlign:"center"},"You are not authorized to access this page !!!"),i.a.createElement(c.a,{onClick:function(){e("/login")},sx:{p:2,fontWeight:"bold"}},"Login To access this page"))))}},312:function(e,t,a){e.exports=a.p+"static/media/doctorPortrait.7dc429c7.webp"},607:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),o=a(10),c=a(6),l=a(627),i=a(571),s=a(628),m=a(15),u=a(0),d=a.n(u),f=a(625),p=a(629),E=a(630),x=a(631),b=a(29),v=a(28);function g(e){return u.createElement(p.a,{sx:{display:"flex",m:"1rem",flexDirection:{xs:"column",md:"row"},borderRadius:2}},u.createElement(x.a,{component:"img",sx:{width:151,height:151},image:e.doctor.image,alt:"picture"}),u.createElement(E.a,{sx:{flex:"1 0 "}},u.createElement(f.a,{component:"div",variant:"h5"},e.doctor.name),u.createElement(f.a,{variant:"subtitle1",color:"text.secondary",component:"div"},e.doctor.department),u.createElement(f.a,{variant:"subtitle1",color:"text.secondary",component:"div"},e.doctor.qualification)),u.createElement(E.a,{sx:{flex:"1 0 "}},u.createElement(f.a,{component:"div",variant:"h5"},"OP Time"),u.createElement(f.a,{variant:"subtitle1",color:"text.secondary",component:"div"},e.doctor.days.map(function(t,a){var n=["sun","mon","tue","wed","thu","fri","sat"];return a+1===e.doctor.days.length?n[t]+".":n[t]+", "})),u.createElement(f.a,{variant:"subtitle1",color:"text.secondary",component:"div"},e.doctor.startTime," to ",e.doctor.endTime)),u.createElement(E.a,{sx:{display:"flex",flexDirection:{xs:"row",sm:"row",md:"column"}}},u.createElement(v.b,{to:"/doctorprofile",state:{doctor:e.doctor},style:{textDecoration:"none"}},u.createElement(b.b,{value:"Profile"})),u.createElement(v.b,{to:"/booking",state:{doctor:e.doctor},style:{textDecoration:"none"}},u.createElement(b.b,{value:"Appoint"}))))}var h=a(312),y=a.n(h),w=a(605),j=a(644),k=a(645);function O(e){var t=e.departments,a=e.doctors;return d.a.createElement("div",null,t.map(function(e){return d.a.createElement(w.a,{key:e._id,sx:{m:"1rem",borderRadius:2,"&:before":{display:"none"},backgroundColor:"#eaeaea"}},d.a.createElement(j.a,null,d.a.createElement(f.a,null,e.name)),d.a.createElement(k.a,null,a.map(function(t){return d.a.createElement("div",{key:t._id},e.doctors.includes(t._id)?d.a.createElement(g,{key:t.id,doctor:t,image:y.a}):"")})))}))}function C(e){e.departments;var t=e.doctors;return d.a.createElement("div",null,t.map(function(e){return d.a.createElement(g,{key:e._id,doctor:e,image:y.a})}))}var S=a(58),D=a(291);t.default=function(){var e=Object(u.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1],f=Object(u.useState)([]),p=Object(c.a)(f,2),E=p[0],x=p[1],b=Object(u.useState)([]),v=Object(c.a)(b,2),g=v[0],h=v[1],y=Object(u.useState)(""),w=Object(c.a)(y,2),j=w[0],k=w[1];Object(u.useEffect)(function(){Object(o.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/department",{headers:{"auth-token":localStorage.userToken}});case 2:return t=e.sent,e.next=5,m.a.get("/doctor",{headers:{"auth-token":localStorage.userToken}});case 5:a=e.sent,n(t.data.department),x(a.data.doctor);case 8:case"end":return e.stop()}},e)}))()},[]);var T=function(e){e.preventDefault();var t=new FormData(e.currentTarget);k(t.get("search").toLowerCase())};return Object(u.useEffect)(function(){var e=E.filter(function(e){return Object.entries(e).some(function(e){return String(e[1]).toLowerCase().includes(j)})});h(e)},[j]),localStorage.userToken?d.a.createElement(S.a,null,d.a.createElement(l.a,null,d.a.createElement(i.a,{display:"flex",justifyContent:"center",component:"form",autoComplete:"off",onChange:T,onSubmit:T,noValidate:!0,sx:{mt:1,mb:2}},d.a.createElement(s.a,{margin:"normal",fullWidth:!0,id:"search",label:"Search",name:"search",autoFocus:!0,variant:"standard",sx:{width:"90%"}})),""===j?d.a.createElement(O,{departments:a,doctors:E}):d.a.createElement(C,{doctors:g}))):d.a.createElement(D.a,null)}}}]);
//# sourceMappingURL=23.e8ddb5b8.chunk.js.map