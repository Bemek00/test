(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(12),n(3)),u=n(4),l=n(6),s=n(5),f=(n(13),n(14),["Patryk","Ania","Amadeusz","Mateusz","Patrycja","Adrianna"]),w=function(t){return t.users.length>0?r.a.createElement("ul",null,t.users.map((function(t){return r.a.createElement("li",{key:t}," ",t," ")}))):r.a.createElement("p",null," Brak wynik\xf3w ")},y=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={filtrowaniUzytkownicy:f},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onInput:function(e){return t.filtrowanie(e)}}),r.a.createElement(w,{users:this.state.filtrowaniUzytkownicy}))}},{key:"filtrowanie",value:function(t){var e=t.target.value,n=this.filtrowaniUzytkownicyPrzezTekst(e);this.setState({filtrowaniUzytkownicy:n})}},{key:"filtrowaniUzytkownicyPrzezTekst",value:function(t){return f.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.e434bf79.chunk.js.map