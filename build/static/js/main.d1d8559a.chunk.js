(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__2w4Fl",control:"ProfileForm_control__27do7",action:"ProfileForm_action__2dXnm"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__3ckKQ",logo:"MainNavigation_logo__afwxQ"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__2Shti"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__2MrWM"}},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c,o=n(17),i=n.n(o),r=n(7),s=(n(30),n(1)),a=n.n(s),l=n(2),j=n(15),u=n.n(j),d=n(11),b=n(0),h=a.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),g=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},x=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=g(t);return n<=6e4?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var o=Object(s.useState)(t),i=Object(d.a)(o,2),r=i[0],a=i[1],l=!!r,j=Object(s.useCallback)((function(){a(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),c&&clearTimeout(c)}),[]);Object(s.useEffect)((function(){n&&(console.log(n.duration),c=setTimeout(j,n.duration))}),[n,j]);var u={token:r,isLoggedIn:l,login:function(e,t){a(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=g(t);c=setTimeout(j,n)},logout:j};return Object(b.jsx)(h.Provider,{value:u,children:e.children})},O=h,m=function(){var e=Object(s.useContext)(O),t=e.isLoggedIn;return Object(b.jsxs)("header",{className:u.a.header,children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("div",{className:u.a.logo,children:"FAN Dance Studio"})}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[!t&&Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/auth",children:"Login"})}),t&&Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/profile",children:"Profile"})}),t&&Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},p=function(e){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{children:e.children})]})},f=n(12),v=n.n(f),_=function(){Object(l.g)();var e=Object(s.useRef)();Object(s.useContext)(O);return Object(b.jsxs)("form",{className:v.a.form,children:[Object(b.jsxs)("div",{className:v.a.control,children:[Object(b.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(b.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:e})]}),Object(b.jsx)("div",{className:v.a.action,children:Object(b.jsx)("button",{children:"Change Password"})})]})},S=n(20),w=n.n(S),k=n.p+"static/media/avatar.6a00bfac.jpg",I=function(){return Object(b.jsxs)("section",{className:w.a.profile,children:[Object(b.jsx)("h1",{children:"Your User Profile"}),Object(b.jsx)("img",{src:k,alt:"Avatar",width:"500px",height:"500px"}),Object(b.jsx)(_,{})]})},N=n(9),F=n.n(N),A=function(){var e=Object(l.g)(),t=Object(s.useRef)(),n=Object(s.useRef)(),c=Object(s.useContext)(O),o=Object(s.useState)(!0),i=Object(d.a)(o,2),r=i[0],a=i[1],j=Object(s.useState)(!1),u=Object(d.a)(j,2),h=(u[0],u[1]);return Object(b.jsxs)("section",{className:F.a.auth,children:[Object(b.jsx)("h1",{children:r?"Login":"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(o){o.preventDefault();var i,s=t.current.value,a=n.current.value;h(!0),i=r?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCX4Z7IEhm0WKSgZ2s59Visk09Q2MVAhug":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCX4Z7IEhm0WKSgZ2s59Visk09Q2MVAhug",fetch(i,{method:"POST",body:JSON.stringify({email:s,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return h(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication failed!")}))})).then((function(t){var n=new Date((new Date).getTime()+1e3*+t.expiresIn);c.login(t.idToken,n.toISOString()),e.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(b.jsxs)("div",{className:F.a.control,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(b.jsx)("input",{type:"email",id:"email",required:!0,ref:t})]}),Object(b.jsxs)("div",{className:F.a.control,children:[Object(b.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(b.jsx)("input",{type:"password",id:"password",required:!0,ref:n})]}),Object(b.jsxs)("div",{className:F.a.actions,children:[Object(b.jsx)("button",{children:r?"Login":"Create Account"}),Object(b.jsx)("button",{type:"button",className:F.a.toggle,onClick:function(){a((function(e){return!e}))},children:r?"Create new account":"Login with existing account"})]})]})]})},C=function(){return Object(b.jsx)(A,{})},T=n(21),y=n.n(T),P=(n.p,n.p,n.p+"static/media/FANR.c223bdc1.png"),L=n.p+"static/media/FANR2.cc8bb616.jpg",R=n.p+"static/media/FANR3.c7282e3e.jpg",W=function(){return Object(b.jsxs)("section",{className:y.a.starting,children:[Object(b.jsx)("div",{class:"Title",children:Object(b.jsx)("h1",{children:"Records"})}),Object(b.jsx)("div",{id:"Square",children:Object(b.jsx)("img",{src:P,alt:"FanWorkshops"})}),Object(b.jsx)("div",{id:"Square",children:Object(b.jsx)("img",{src:L,alt:"FanWorkshops2"})}),Object(b.jsx)("div",{id:"Square",children:Object(b.jsx)("img",{src:R,alt:"FanWorkshops3"})})]})},E=function(){return Object(b.jsx)(W,{})};var D=function(){var e=Object(s.useContext)(O);return Object(b.jsx)(p,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,children:Object(b.jsx)(E,{})}),!e.isLoggedIn&&Object(b.jsx)(l.b,{path:"/auth",children:Object(b.jsx)(C,{})}),Object(b.jsxs)(l.b,{path:"/profile",children:[e.isLoggedIn&&Object(b.jsx)(I,{}),!e.isLoggedIn&&Object(b.jsx)(l.a,{to:"/auth"})]}),Object(b.jsx)(l.b,{path:"*",children:Object(b.jsx)(l.a,{to:"/"})})]})})};i.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(x,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(D,{})})}))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__2WYc0",control:"AuthForm_control__2oGno",actions:"AuthForm_actions__1Eit2",toggle:"AuthForm_toggle__3BaSX"}}},[[39,1,2]]]);
//# sourceMappingURL=main.d1d8559a.chunk.js.map