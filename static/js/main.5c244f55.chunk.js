(this.webpackJsonpaccounting=this.webpackJsonpaccounting||[]).push([[0],{100:function(e,a,t){e.exports=t(129)},105:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),o=t.n(r),c=(t(105),t(17)),i=t(71),m=t.n(i),s=t(175),u=t(168),d=t(172),E=t(176),p=t(158),f=t(160),h=t(173),g=t(166),v=t(167),b=t(76),C=t.n(b),y=t(47),w=t.n(y),k=t(46),S=t.n(k),N=t(155),x=Object(N.a)((function(e){return{formControl:{margin:e.spacing(.3),marginTop:15,marginRight:20},emailAndPhone:{display:"flex",alignContent:"center",flexWrap:"wrap",flexDirection:"row"}}})),A=function(e){var a=x();return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,"About"),l.a.createElement(f.a,null,l.a.createElement("div",null,l.a.createElement("p",null,"We are here to handle all of your bookkeeping, taxation and payroll demands; so that you can keep focusing on your core priorities both within business and your personal life."),l.a.createElement("p",null,"Solutions for your accounts, bookkeeping, taxation, VAT & payroll matters."),l.a.createElement("p",null,"Our contact information is listed below. Also find out what other services we offer by clicking the Services Offered button on the main page.")),l.a.createElement("div",null,l.a.createElement(h.a,{label:"Address",defaultValue:"1 Alice Close, Bedworth Coventry CV12 0BS, United Kingdom",fullWidth:!0,InputProps:{readOnly:!0,startAdornment:l.a.createElement(g.a,{position:"start"},l.a.createElement(S.a,null))}}),l.a.createElement("div",{className:a.emailAndPhone},l.a.createElement(h.a,{className:a.formControl,label:"Phone Number",defaultValue:"+44 (744) 025-6423",size:"medium",InputProps:{readOnly:!0,startAdornment:l.a.createElement(g.a,{position:"start"},l.a.createElement(C.a,null))}}),l.a.createElement(h.a,{className:a.formControl,label:"Email",defaultValue:"test@test.com",InputProps:{readOnly:!0,startAdornment:l.a.createElement(g.a,{position:"start"},l.a.createElement(w.a,null))}})))),l.a.createElement(v.a,null,l.a.createElement(u.a,{variant:"outlined",onClick:function(a){e.closeFunction()},color:"secondary"},"Close")))},O=t(165),j=t(169),F=t(170),W=t(171),P=t(77),B=t.n(P),I=t(78),T=t.n(I),V=t(79),z=t.n(V),D=t(80),U=t.n(D),q=t(81),M=t.n(q),H=t(82),J=t.n(H),K=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,"Services We Offer"),l.a.createElement(f.a,null,l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(B.a,null)),l.a.createElement(W.a,{primary:"Bookkeeping"})),l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(S.a,null)),l.a.createElement(W.a,{primary:"Company's Formation"})),l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(T.a,null)),l.a.createElement(W.a,{primary:"Company's Returns & Annual Accounts"})),l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(z.a,null)),l.a.createElement(W.a,{primary:"Corporation Tax"})),l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(U.a,null)),l.a.createElement(W.a,{primary:"Self Assessment Tax for Individuals and Sole Proprietorship (Special Discounts available for Taxi Drivers)"})),l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(M.a,null)),l.a.createElement(W.a,{primary:"Streamline your finance fucntion and mortgage advice"})),l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement(J.a,null)),l.a.createElement(W.a,{primary:"Fees start at \xa399"})))),l.a.createElement(v.a,null,l.a.createElement(u.a,{variant:"outlined",onClick:function(a){e.closeFunction()},color:"secondary"},"Close")))},R=t(49),Z=t(50),$=t(51),L=t.n($),G=t(83),Q=t(84),X=t.n(Q),Y=(t(70),t(161)),_=Object(N.a)((function(e){return{formControl:{margin:e.spacing(1.5)},container:{display:"flex",alignContent:"left",flexWrap:"wrap",flexDirection:"column"},button:{display:"flex",alignContent:"center",flexWrap:"wrap",flexDirection:"row"}}})),ee=function(e){var a=function(){e.closeFunction()},t=l.a.useState({name:"",email:"",phoneNumber:"",message:""}),n=Object(c.a)(t,2),r=n[0],o=n[1],i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,m=l.a.useState(""),s=Object(c.a)(m,2),d=s[0],E=s[1],f=l.a.useState(!0),g=Object(c.a)(f,2),v=g[0],b=g[1],C=/.*\S.*/,y=l.a.useState(""),w=Object(c.a)(y,2),k=w[0],S=w[1],N=l.a.useState(!0),x=Object(c.a)(N,2),A=x[0],O=x[1],j=/.*\S.*/,F=l.a.useState(""),W=Object(c.a)(F,2),P=W[0],B=W[1],I=l.a.useState(!0),T=Object(c.a)(I,2),V=T[0],z=T[1],D=_(),U=function(){var e=Object(G.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json"},e.next=3,X.a.post("https://whispering-ridge-38836.herokuapp.com/mail",r,{headers:t}).then((function(e){a()})).catch((function(e){console.log("post form error! contact Admin")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){i.test(r.email)?(b(!1),E("")):(E("Please enter a valid email"),b(!0))},M=function(e){switch(o(Object(Z.a)(Object(Z.a)({},r),{},Object(R.a)({},e.target.name,e.target.value))),e.target.name){case"email":q();break;case"name":C.test(r.name)?(O(!1),S("")):(S("Please enter a name"),O(!0));break;case"message":j.test(r.message)?(z(!1),B("")):(B("Please enter a message"),z(!0))}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,"Contact Us"),l.a.createElement("div",{className:D.container},l.a.createElement(Y.a,{component:"fieldset",className:D.formControl},l.a.createElement(h.a,{required:!0,id:"name",name:"name",label:"Name",error:A,helperText:k,value:r.name,variant:"outlined",onChange:M})),l.a.createElement(Y.a,{component:"fieldset",className:D.formControl},l.a.createElement(h.a,{required:!0,id:"email",name:"email",label:"Email",error:v,helperText:d,value:r.email,variant:"outlined",onChange:function(e){M(e),q()}})),l.a.createElement(Y.a,{component:"fieldset",className:D.formControl},l.a.createElement(h.a,{id:"phoneNumber",name:"phoneNumber",label:"Phone Number",value:r.phoneNumber,variant:"outlined",onChange:M})),l.a.createElement(Y.a,{component:"fieldset",className:D.formControl},l.a.createElement(h.a,{id:"message",required:!0,label:"Message",name:"message",error:V,helperText:P,value:r.message,multiline:!0,rows:12,variant:"outlined",onChange:M}))),l.a.createElement("div",{className:D.button},l.a.createElement(Y.a,{component:"fieldset",className:D.formControl},l.a.createElement(u.a,{disabled:v||V||A,variant:"outlined",onClick:U,color:"primary"},"Submit")),l.a.createElement(Y.a,{component:"fieldset",className:D.formControl},l.a.createElement(u.a,{variant:"outlined",onClick:function(e){return a()},color:"secondary"},"Close"))))},ae=t(52),te=t.n(ae),ne=t(86),le=t.n(ne),re=t(87),oe=t.n(re),ce=t(88),ie=t.n(ce),me=t(89),se=t.n(me);var ue=function(){var e=l.a.useState(!1),a=Object(c.a)(e,2),t=a[0],n=a[1],r=l.a.useState(!1),o=Object(c.a)(r,2),i=o[0],p=o[1],f=l.a.useState(!1),h=Object(c.a)(f,2),g=h[0],v=h[1];function b(){n(!1)}function C(){n(!0)}function y(){p(!1)}function k(){v(!1)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Background"},l.a.createElement("div",null,l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),"Friends Accounting Services",l.a.createElement("div",{className:"Buttons-header"},l.a.createElement("div",{className:"Button"},l.a.createElement(s.a,{title:"View Services We Offer"},l.a.createElement(u.a,{variant:"outlined",color:"default",size:"medium",startIcon:l.a.createElement(le.a,null),onClick:function(){p(!0)}},"Services"))),l.a.createElement("div",{className:"Button"},l.a.createElement(s.a,{title:"More About Us"},l.a.createElement(u.a,{variant:"outlined",color:"primary",size:"medium",startIcon:l.a.createElement(te.a,null),onClick:function(){return C()}},"About"))),l.a.createElement("div",{className:"Button"},l.a.createElement(s.a,{title:"Send us a message"},l.a.createElement(u.a,{variant:"outlined",color:"secondary",size:"medium",startIcon:l.a.createElement(w.a,null),onClick:function(){v(!0)}},"Contact")))))),l.a.createElement("div",null,l.a.createElement("div",{className:"ContentHeader"},"Welcome to Friends Accounting Services"),l.a.createElement("div",{className:"SubcontentHeader"},l.a.createElement("p",null,"Friends Accounting Services has been providing trusted and certified accounting services that meet a wide range of corporate and personal business needs in the UK."))),l.a.createElement("div",{className:"ContentButton"},l.a.createElement(u.a,{variant:"contained",color:"primary",size:"medium",startIcon:l.a.createElement(te.a,null),onClick:function(){return C()}},"Click here to learn more")),l.a.createElement("div",{className:"Socials"},l.a.createElement(s.a,{title:"Visit our Facebook Page"},l.a.createElement(d.a,{color:"secondary",onClick:function(){window.open("https://facebook.com")}},l.a.createElement(oe.a,null))),l.a.createElement(s.a,{title:"Visit our Twitter Page"},l.a.createElement(d.a,{color:"secondary",onClick:function(){window.open("https://twitter.com")}},l.a.createElement(ie.a,null))),l.a.createElement(s.a,{title:"Visit our LinkedIn Page"},l.a.createElement(d.a,{color:"secondary",onClick:function(){window.open("https://linkedin.com")}},l.a.createElement(se.a,null)))),l.a.createElement(E.a,{fullWidth:!0,maxWidth:"sm",open:t,onClose:b},l.a.createElement(A,{show:t,closeFunction:b})),l.a.createElement(E.a,{fullWidth:!0,maxWidth:"sm",open:i,onClose:y},l.a.createElement(K,{show:i,closeFunction:y})),l.a.createElement(E.a,{fullWidth:!0,maxWidth:"xs",open:g,onClose:k},l.a.createElement(ee,{show:g,closeFunction:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){},71:function(e,a,t){e.exports=t.p+"static/media/handshake.5175131e.svg"}},[[100,1,2]]]);
//# sourceMappingURL=main.5c244f55.chunk.js.map