(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a,r,i,c,l,o,s=n(0),u=n.n(s),m=n(8),d=n.n(m),p=(n(81),n(13)),g=n(18),f=n(14),h=n(21),b=f.a.nav(a||(a=Object(p.a)(["\n  padding: 1.5rem;\n  margin-bottom: 4rem;\n  background: var(--clr-white);\n  text-align: center;\n  display: grid;\n  grid-template-columns: auto auto 100px;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  h4 {\n    margin-bottom: 0;\n    font-weight: 400;\n  }\n  img {\n    width: 35px !important;\n    height: 35px;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  button {\n    background: transparent;\n    border: transparent;\n    font-size: 1.2rem;\n    text-transform: capitalize;\n    letter-spacing: var(--spacing);\n    color: var(--clr-grey-5);\n    cursor: pointer;\n  }\n"]))),E=function(){var e=Object(h.b)(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout,r=e.user,i=(e.isLoading,t&&r);return u.a.createElement(b,null,i&&r.picture&&u.a.createElement("img",{src:r.picture}),i&&r.name&&u.a.createElement("h4",null,"Welcome, ",u.a.createElement("strong",null," ",r.name," ")),i?u.a.createElement("button",{onClick:function(){a({returnTo:window.location.origin})}},"Logout"):u.a.createElement("button",{onClick:n},"Login"))},v=n(42),x=n.n(v),y=u.a.createContext(),w=function(e){var t=e.children;return u.a.createElement(y.Provider,{value:"fun"},t)},j=function(){return u.a.createElement("section",null,u.a.createElement("h4",{style:{textAlign:"center",marginTop:"1rem"}}," ","Developed By: Utkarsh Singh"," "),u.a.createElement("p",{style:{textAlign:"center"}},u.a.createElement("a",{href:"https://github.com/singhutkarshh/HACKATHON"},"GitHub Source Code"," ")))},k=n(16),O=n.n(k),C=n(26),S=n(27),D=n.n(S),A=n(142),N=f.a.section(r||(r=Object(p.a)(["\n  .cardsi {\n    width: 25rem;\n    height: 13rem;\n    padding: 20px;\n    margin: 1rem 1rem;\n  }\n  .cardsi > h4 {\n    font-size: 20px;\n  }\n  .bt2 {\n    font-size: 16px;\n    padding: 6px 14px;\n    background-color: #39a133;\n    color: white;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n  }\n  .bt2:hover {\n    background-color: #669c64;\n  }\n  .btnCon {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 0 40px;\n  }\n"]))),z=function(e){var t=e.registerAction,n=e.deleteAction,a=e.data,r=e.setChanged,i=e.changed,c=e.setChanged1,l=e.changed1,o=e.setToggle,s=e.setDetails,m=a.endDate,d=a.eventdata,p=a.isRegistered,g=a.organiser,f=a.startDate,h=a._id,b=function(){var e=Object(C.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.put("https://protected-basin-58955.herokuapp.com/api/note/update",n);case 2:t(),c(!l);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.put("https://protected-basin-58955.herokuapp.com/api/note/update",t);case 2:c(!l);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(C.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.delete("https://protected-basin-58955.herokuapp.com/api/note/".concat(t));case 2:console.log(t),r(!i),n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(N,null,u.a.createElement(A.a,null,u.a.createElement("div",{className:"cardsi",key:h},u.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},u.a.createElement("h4",null,d),u.a.createElement("button",{onClick:function(){return e={_id:h,eventdata:d,startDate:f,endDate:m,organiser:g,isRegistered:p},o(!0),void s(e);var e},style:{padding:"6px 10px",color:"black",backgroundColor:"white"}},"Details")),u.a.createElement("p",null,"Start date : ",f),u.a.createElement("p",null,"End date : ",m),u.a.createElement("div",{className:"btnCon"},p?u.a.createElement("button",{className:"bt2",onClick:function(){return E({_id:h,eventdata:d,startDate:f,endDate:m,organiser:g,isRegistered:p})}},"Registered"):u.a.createElement("button",{className:"btn",onClick:function(){return b({_id:h,eventdata:d,startDate:f,endDate:m,organiser:g,isRegistered:p})}},"Register"),u.a.createElement("button",{className:"btn btn1",onClick:function(e){return v(h)}},"Delete")))))},R=n(24),B=n(147),T=n(148),W=n(149),I=n(146),H=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),L=function(e){var t=e.setAddPop,n=e.updateAction,a=H(),r=u.a.useState({eventdata:"",startDate:"",endDate:"",organiser:"",isRegistered:!1}),i=Object(g.a)(r,2),c=i[0],l=i[1],o=function(){var e=Object(C.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,D.a.post("https://protected-basin-58955.herokuapp.com/api/note",c).then((function(){t(!1)})).catch((function(e){return console.log(e)}));case 3:n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40rem"}},u.a.createElement("div",{style:{width:"25rem",height:"25rem"}},u.a.createElement(A.a,{className:a.paper},u.a.createElement("form",{autoComplete:"off",noValidate:!0,className:a.form,onSubmit:o},u.a.createElement(B.a,{variant:"h5",style:{}},"Add a New Event"),u.a.createElement(T.a,{name:"eventdata",variant:"outlined",label:"Event",fullWidth:!0,value:c.eventdata,onChange:function(e){l(Object(R.a)(Object(R.a)({},c),{},{eventdata:e.target.value}))},style:{marginBottom:"1rem",marginTop:"1rem"}}),u.a.createElement(T.a,{name:"startDate",variant:"outlined",label:"Start date",fullWidth:!0,value:c.startDate,onChange:function(e){l(Object(R.a)(Object(R.a)({},c),{},{startDate:e.target.value}))},style:{marginBottom:"1rem"}}),u.a.createElement(T.a,{name:"endDate",variant:"outlined",label:"End date",fullWidth:!0,value:c.endDate,onChange:function(e){l(Object(R.a)(Object(R.a)({},c),{},{endDate:e.target.value}))},style:{marginBottom:"1rem"}}),u.a.createElement(T.a,{name:"organiser",variant:"outlined",label:"organiser",fullWidth:!0,value:c.organiser,onChange:function(e){l(Object(R.a)(Object(R.a)({},c),{},{organiser:e.target.value}))},style:{marginBottom:"1rem"}}),u.a.createElement(W.a,{className:a.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0}," ","Submit"," ")))))},P=f.a.section(i||(i=Object(p.a)(["\n  padding: 3rem;\n  width: 100%;\n\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 3rem;\n  }\n\n  .heading {\n    font-size: 30px;\n  }\n\n  .headBtn {\n    font-size: 25px;\n    padding: 4px 8px;\n    background-color: blue;\n    color: white;\n    border-radius: 5px;\n    outline: none;\n    border: none;\n  }\n  .eventBroadcast {\n    margin-top: 2rem;\n    height: 4rem;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0 5px;\n    font-weight: 500;\n  }\n  .sc-gtsrHT {\n    width: 26rem;\n    height: 15rem;\n  }\n  .IHpuS {\n    width: 26rem;\n    height: 15rem;\n  }\n  .eventBroadcast > h4 {\n    font-size: 26px;\n    animation: anime 20s infinite;\n  }\n\n  .eventCards {\n    width: 100rem;\n    max-height: 80rem;\n    padding: 20px;\n    overflow: scroll;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n  }\n\n  @keyframes anime {\n    0% {\n      transform: translate(0, 0);\n    }\n\n    50% {\n      transform: translate(70rem, 0);\n    }\n\n    100% {\n      transform: translate(0, 0);\n    }\n  }\n"]))),F=function(e){var t=e.registerAction,n=e.deleteAction,a=e.updateAction,r=u.a.useState(!1),i=Object(g.a)(r,2),c=i[0],l=i[1],o=u.a.useState(!1),s=Object(g.a)(o,2),m=s[0],d=s[1],p=u.a.useState(!1),f=Object(g.a)(p,2),h=f[0],b=f[1],E=u.a.useState([]),v=Object(g.a)(E,2),x=v[0],y=v[1],w=u.a.useState(!1),j=Object(g.a)(w,2),k=j[0],S=j[1],N=u.a.useState(),R=Object(g.a)(N,2),B=R[0],T=R[1];return u.a.useEffect((function(){(function(){var e=Object(C.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()("https://protected-basin-58955.herokuapp.com/api/note").catch((function(e){console.log(e)}));case 2:(t=e.sent)&&(n=t.data.data,y(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m,c,h]),1==k?u.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},u.a.createElement(A.a,{style:{width:"40rem",height:"30rem",display:"flex",flexDirection:"column",justifyContent:"space-evenly",padding:"20px"}},u.a.createElement("h3",{style:{textAlign:"center"}},"Event Details"),u.a.createElement("p",{style:{fontSize:"21px"}},"Event Name : ",B.eventdata),u.a.createElement("p",{style:{fontSize:"21px"}},"Start date : ",B.startDate),u.a.createElement("p",{style:{fontSize:"21px"}},"End date : ",B.endDate),u.a.createElement("p",{style:{fontSize:"21px"}},"Organiser : ",B.organiser),B.isRegistered?u.a.createElement("p",{style:{fontSize:"21px"}},"Registered : Yes"):u.a.createElement("p",{style:{fontSize:"21px"}},"Registered : No ")),u.a.createElement("button",{className:"btn",style:{marginTop:"2rem"},onClick:function(){return S(!1)}},"Ok")):c?u.a.createElement(L,{setAddPop:l,updateAction:a}):u.a.createElement(u.a.Fragment,null,u.a.createElement(P,null,u.a.createElement("div",{className:"header"},u.a.createElement("h1",{className:"heading"},"Upcoming Events"),u.a.createElement("button",{className:"btn",style:{backgroundColor:"blue"},onClick:function(){l(!0)}},"Add new event")),u.a.createElement("div",{className:"eventBroadcast"},u.a.createElement("h4",null,"Latest upcoming event : codechef contest")),u.a.createElement("span",{className:"eventCards"},x.map((function(e){return u.a.createElement(z,{data:e,registerAction:t,deleteAction:n,setChanged:d,changed:m,setChanged1:b,changed1:h,setToggle:S,setDetails:T})})))))},U=f.a.section(c||(c=Object(p.a)(["\n  z-index: 10;\n  .notifyDel {\n    z-index: 100;\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    color: white;\n    font-size: 20px;\n    padding-left: 3rem;\n    background-color: red;\n  }\n  .notifyReg {\n    z-index: 100;\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    color: white;\n    font-size: 20px;\n    padding-left: 3rem;\n    background-color: green;\n  }\n  .notifyUpdate {\n    z-index: 100;\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    color: white;\n    font-size: 20px;\n    padding-left: 3rem;\n    background-color: blue;\n  }\n"]))),G=function(){var e=u.a.useContext(y).isloading,t=u.a.useState(!1),n=Object(g.a)(t,2),a=n[0],r=n[1],i=u.a.useState(!1),c=Object(g.a)(i,2),l=c[0],o=c[1],s=u.a.useState(!1),m=Object(g.a)(s,2),d=m[0],p=m[1];return e?u.a.createElement("main",null,u.a.createElement(E,null),u.a.createElement("img",{src:x.a,className:"loading-img",alt:""}),u.a.createElement(j,{flag:""})):u.a.createElement("main",null,u.a.createElement(U,null,u.a.createElement(E,null),a?u.a.createElement("div",{className:"notifyReg"},"Registration Successful , Check details"," "):u.a.createElement(u.a.Fragment,null),l?u.a.createElement("div",{className:"notifyDel"},"Deleted Successfully...!"):u.a.createElement(u.a.Fragment,null),d?u.a.createElement("div",{className:"notifyUpdate"},"Event Added Successfully...!"):u.a.createElement(u.a.Fragment,null),u.a.createElement(F,{registerAction:function(){r(!0),setTimeout((function(){r(!1)}),2e3)},deleteAction:function(){o(!0),setTimeout((function(){o(!1)}),2e3)},updateAction:function(){p(!0),setTimeout((function(){p(!1)}),2e3)}})))},_=n(68),M=n.n(_),Z=f.a.section(l||(l=Object(p.a)(["\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  .container {\n    width: 90vw;\n    max-width: 600px;\n    text-align: center;\n  }\n  img {\n    margin-bottom: 3rem;\n  }\n  h1 {\n    margin-bottom: 1.5rem;\n  }\n"]))),J=function(){var e=Object(h.b)().loginWithRedirect;return u.a.createElement(Z,null,u.a.createElement("div",{className:"container"},u.a.createElement("img",{src:M.a,alt:"GitHub User Image"}),u.a.createElement("h1",null,"Event Manager"),u.a.createElement("buttton",{className:"btn",onClick:e},"Login/Signup")),u.a.createElement(j,{flag:"true"}))};var q,K=f.a.section(o||(o=Object(p.a)(["\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  img {\n    width: 150px;\n  }\n"]))),V=function(e){var t=e.children,n=Object(h.b)(),a=n.isLoading,r=n.error;return a?u.a.createElement(K,null,u.a.createElement("img",{src:x.a})):r?u.a.createElement(K,null,u.a.createElement("h1",null,r.message)):u.a.createElement(u.a.Fragment,null,t)},Y=n(70),Q=n(10),X=["children"],$=function(e){var t=e.children,n=Object(Y.a)(e,X),a=Object(h.b)(),r=a.isAuthenticated,i=a.user,c=r&&i;return u.a.createElement(Q.b,Object.assign({},n,{render:function(){return c?t:u.a.createElement(Q.a,{to:"/login"})}}))},ee=n(38),te=f.a.section(q||(q=Object(p.a)(["\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background: var(--clr-primary-10);\n  text-align: center;\n  h1 {\n    font-size: 10rem;\n  }\n  h3 {\n    color: var(--clr-grey-3);\n    margin-bottom: 1.5rem;\n  }\n"]))),ne=function(){return u.a.createElement(te,null,u.a.createElement("div",null,u.a.createElement("h1",null,"404"),u.a.createElement("h3",null,"Sorry , the page you tried cannot be found!!"),u.a.createElement(ee.b,{to:"/",className:"btn"},"Back Home")))},ae=n(69),re=n.n(ae);var ie=function(){return u.a.createElement(V,null,u.a.createElement(ee.a,null,u.a.createElement(Q.d,null,u.a.createElement($,{path:"/",exact:!0},u.a.createElement(G,null)),u.a.createElement(Q.b,{path:"/login",exact:!0},u.a.createElement(J,null)),u.a.createElement(Q.b,{path:"/details",exact:!0},u.a.createElement(re.a,null)),u.a.createElement(Q.b,{path:"*"},u.a.createElement(ne,null)))))};d.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(h.a,{domain:"dev-9pfp2jo6.jp.auth0.com",clientId:"ZPCZqscLcpI7BiPGPmGP3EjAf3wDvEvZ",redirectUri:window.location.origin},u.a.createElement(w,null,u.a.createElement(ie,null)))),document.getElementById("root"))},42:function(e,t,n){e.exports=n.p+"static/media/preloader.c114fda3.gif"},68:function(e,t,n){e.exports=n.p+"static/media/login-img.20a90984.svg"},69:function(e,t){},76:function(e,t,n){e.exports=n(113)},81:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.d4c7b889.chunk.js.map