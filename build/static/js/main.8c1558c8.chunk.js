(this.webpackJsonpconstruhelp=this.webpackJsonpconstruhelp||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=a(2),s=a.n(l),u=a(14),i=a(3),m=(a(22),a(15)),d=a.n(m).a.create({baseURL:"https://4000-a7c42405-109c-4013-ade4-ee153e2c0421.ws-us02.gitpod.io"});var p=function(){var e=document.querySelector("#body"),t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),p=m[0],h=m[1];function f(){return(f=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d.post("/createuser",{email:o,password:p});case 3:a=e.sent,console.log(a),alert("Seu email: "+o+"\nSua senha: "+p),n={email:o,id:a.data.create.user._id},console.log(a.data.create.user),localStorage.setItem("user",JSON.stringify(n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return e.onload=function(){JSON.parse(localStorage.getItem("user"))&&(document.querySelector("#teste").setAttribute("class","sumir"),document.querySelector("#logado").setAttribute("class","on"))},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"logado",className:"off"},r.a.createElement("h1",null,"Voc\xea est\xe1 logado")),r.a.createElement("div",{id:"teste"},r.a.createElement("div",{id:"dashboard"},r.a.createElement("h1",{id:"title"},"Cadastrar-se"),r.a.createElement("form",{id:"formulario",method:"POST",autoComplete:"off",onSubmit:function(e){return f.apply(this,arguments)}},r.a.createElement("input",{type:"email",name:"email",className:"inputText",placeholder:"Digite seu email",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"senha",className:"inputText",placeholder:"Digite uma senha segura",value:p,onChange:function(e){return h(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"inputButton",value:"Cadastrar-se"})))))};a(40);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.8c1558c8.chunk.js.map