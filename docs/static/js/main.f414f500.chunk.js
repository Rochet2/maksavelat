(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,a){e.exports=a(313)},184:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(48),c=a.n(o),l=(a(184),a(25)),i=a(26),u=a(29),s=a(27),m=a(30),d=a(329),h=a(330),f=a(331),v=a(322),p=a(328),b=a(321),E=function(e){var t=e.to,a=e.linkProps,n=e.segmentProps,o=e.children;return r.a.createElement(b.a,Object.assign({to:t},a),r.a.createElement(f.a,Object.assign({padded:"very"},n),o))},w=function(){return r.a.createElement(v.a,{textAlign:"center",fluid:!0,style:{cursor:"pointer",height:"100%"}},r.a.createElement(f.a.Group,null,r.a.createElement(E,{to:"/AddDebt"},r.a.createElement(p.a,null,"Add debt")),r.a.createElement(E,{to:"/Debts"},r.a.createElement(p.a,null,"Debts")),r.a.createElement(E,{to:"/Contacts"},r.a.createElement(p.a,null,"Edit contacts")),r.a.createElement(E,{to:"/Reasons"},r.a.createElement(p.a,null,"Edit reasons"))))},g=a(28),y=a(324),k=a(56),C=a.n(k),O=function(e){return{key:e,text:e,value:e}},j=function(){return{debt:!0,who:"",amount:"",for:"",comment:"",errorAmount:!1,errorContact:!1,errorReason:!1,errorTimer:null}},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state=j(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.reasons,o=t.contacts,c=t.whiteTheme,l=this.state,i=l.errorAmount,u=l.errorContact,s=l.errorReason,m=l.debt,d=l.who,h=l.for,v=l.comment,p=l.amount;return r.a.createElement("div",null,r.a.createElement(f.a,{inverted:c,basic:!0,style:{height:"100vh"}},r.a.createElement(y.a,{inverted:c,onSubmit:function(){(p=Number(p))||(i=!0),d||(u=!0),h||(s=!0),i||u||s?(e.state.errorTimer&&clearTimeout(e.state.errorTimer),e.setState({errorAmount:i,errorReason:s,errorContact:u,errorTimer:setTimeout(function(){return e.setState({errorAmount:!1,errorReason:!1,errorContact:!1})},3e3)})):(e.props.dispatch({type:"AddDebt",value:{who:d,amount:m?-p:p,reason:h,comment:v,date:C()().format(),paid:!1}}),e.state.errorTimer&&clearTimeout(e.state.errorTimer),e.setState(j()))}},this.state.debt?r.a.createElement(n.Fragment,null,r.a.createElement(y.a.Input,{required:!0,error:i,type:"number",label:"You owe",placeholder:"Amount...",value:this.state.amount,onChange:function(t,a){return e.setState({amount:a.value})}}),r.a.createElement(y.a.Select,{required:!0,error:u,label:"To",options:o.map(O),placeholder:"Contact...",value:this.state.who,onChange:function(t,a){return e.setState({who:a.value})}})):r.a.createElement(n.Fragment,null,r.a.createElement(y.a.Select,{required:!0,error:u,label:"Contact",options:o.map(O),placeholder:"Contact...",value:this.state.who,onChange:function(t,a){return e.setState({who:a.value})}}),r.a.createElement(y.a.Input,{required:!0,error:i,type:"number",label:"Owes you",placeholder:"Amount...",value:this.state.amount,onChange:function(t,a){return e.setState({amount:a.value})}})),r.a.createElement(y.a.Select,{required:!0,error:s,label:"For",options:a.map(O),placeholder:"Reason...",value:this.state.for,onChange:function(t,a){return e.setState({for:a.value})}}),r.a.createElement(y.a.Input,{label:"Comment (optional)",placeholder:"Comment...",value:this.state.comment,onChange:function(t,a){return e.setState({comment:a.value})}}),r.a.createElement(y.a.Group,{widths:"equal"},r.a.createElement(y.a.Button,{color:"blue",basic:!0,fluid:!0,onClick:function(t){t.preventDefault(),e.setState(function(e){return{debt:!e.debt}})}},"Toggle reciever"),r.a.createElement(y.a.Button,{color:"green",basic:!0,fluid:!0},"Add debt")))))}}]),t}(n.Component),S=Object(g.b)(function(e){return{reasons:e.reasons,contacts:e.contacts,whiteTheme:e.whiteTheme}})(T),A=a(323),R=a(326),D=a(327),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={value:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.whiteTheme,n=t.dispatch,o=t.reasons;return r.a.createElement("div",null,r.a.createElement(f.a,{inverted:a,basic:!0,style:{height:"100vh"}},r.a.createElement(p.a,{size:"large"},"Reasons"),r.a.createElement(A.a,{action:{content:"Add reason",onClick:function(){n({type:"AddReason",value:e.state.value}),e.setState({value:""})}},placeholder:"Reason name...",onChange:function(t){return e.setState({value:t.target.value})},value:this.state.value}),r.a.createElement(R.a,{inverted:a,divided:!0},o.map(function(e){return r.a.createElement(R.a.Item,{key:e},r.a.createElement(R.a.Content,{floated:"right"},r.a.createElement(D.a,{color:"red",content:"Remove",icon:"remove",onClick:function(){n({type:"RemoveReason",value:e})}})),r.a.createElement(R.a.Header,null,e))}))))}}]),t}(n.Component),P=Object(g.b)(function(e){return{reasons:e.reasons,whiteTheme:e.whiteTheme}})(I),Y=a(325),x=a(97),M=function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"summaryItem",value:function(e){var t=this;return r.a.createElement(Y.a,{key:e.who},r.a.createElement(Y.a.Content,null,e.amount>0?r.a.createElement(Y.a.Header,null,e.who," owes ",r.a.createElement("span",{style:{color:"green"}},e.amount,"\u20ac")," to you"):r.a.createElement(Y.a.Header,null,"You owe ",r.a.createElement("span",{style:{color:"red"}},-e.amount,"\u20ac")," to ",e.who)),r.a.createElement(D.a,{color:"green",content:"Pay all",icon:"euro",onClick:function(){return t.props.dispatch({type:"PayAll",value:e.who})}}))}},{key:"debtItem",value:function(e){var t=this;return r.a.createElement(Y.a,{key:e.id},e.amount>0?r.a.createElement(Y.a.Content,null,r.a.createElement(Y.a.Header,{style:{color:e.paid?"gray":"black"}},e.who," owes ",r.a.createElement("span",{style:{color:"green"}},e.amount,"\u20ac")," to you for ",e.reason),r.a.createElement(Y.a.Meta,null,C()(e.date).local().format("DD-MM-YYYY")),e.comment&&r.a.createElement(Y.a.Description,{style:{color:e.paid?"gray":"black"}},e.comment)):r.a.createElement(Y.a.Content,null,r.a.createElement(Y.a.Header,{style:{color:e.paid?"gray":"black"}},"You owe ",r.a.createElement("span",{style:{color:"red"}},-e.amount,"\u20ac")," to ",e.who," for ",e.reason),r.a.createElement(Y.a.Meta,null,C()(e.date).local().format("DD-MM-YYYY")),e.comment&&r.a.createElement(Y.a.Description,{style:{color:e.paid?"gray":"black"}},e.comment)),r.a.createElement(D.a,{color:"green",content:e.paid?"Undo payment":"Pay",icon:"euro",basic:e.paid,onClick:function(){return t.props.dispatch({type:e.paid?"UnPayDebt":"PayDebt",value:e.id})}}))}},{key:"render",value:function(){var e=this.props,t=e.whiteTheme,a=e.debts;return r.a.createElement(f.a,{inverted:t,basic:!0,style:{height:"100vh"}},r.a.createElement(f.a,null,r.a.createElement(p.a,{size:"large"},r.a.createElement(x.a,{name:"file outline"}),"Summary"),r.a.createElement(Y.a.Group,{divided:!0,link:!0},function(e){var t={};return e.filter(function(e){return!e.paid}).forEach(function(e){t[e.who]=t[e.who]||{who:e.who,amount:0},t[e.who].amount+=e.amount}),Object.values(t).filter(function(e){return 0!==e.amount})}(a).sort(function(e,t){return e.who.localeCompare(t.who)}).map(this.summaryItem.bind(this)))),r.a.createElement(f.a,null,r.a.createElement(p.a,{size:"large"},r.a.createElement(x.a,{name:"history"}),"History"),r.a.createElement(Y.a.Group,{divided:!0},a.sort(function(e,t){return-e.date.localeCompare(t.date)}).map(this.debtItem.bind(this)))))}}]),t}(n.Component),H=Object(g.b)(function(e){return{debts:e.debts,whiteTheme:e.whiteTheme}})(M),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={value:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.whiteTheme,n=t.dispatch,o=t.contacts;return r.a.createElement(f.a,{inverted:a,basic:!0,style:{height:"100vh"}},r.a.createElement(p.a,{size:"large"},"Contacts"),r.a.createElement(A.a,{action:{content:"Add contact",onClick:function(){n({type:"AddContact",value:e.state.value}),e.setState({value:""})}},placeholder:"Contact name...",onChange:function(t){return e.setState({value:t.target.value})},value:this.state.value}),r.a.createElement(R.a,{inverted:a,divided:!0},o.sort().map(function(e){return r.a.createElement(R.a.Item,{key:e},r.a.createElement(R.a.Content,{floated:"right"},r.a.createElement(D.a,{color:"red",content:"Remove",icon:"remove",onClick:function(){n({type:"RemoveContact",value:e})}})),r.a.createElement(R.a.Header,null,e))})))}}]),t}(n.Component),W=Object(g.b)(function(e){return{contacts:e.contacts,whiteTheme:e.whiteTheme}})(N),q=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/maksavelat"},r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{exact:!0,path:"/AddDebt",component:S}),r.a.createElement(h.a,{exact:!0,path:"/Debts",component:H}),r.a.createElement(h.a,{exact:!0,path:"/Reasons",component:P}),r.a.createElement(h.a,{exact:!0,path:"/Contacts",component:W})))}}]),t}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var B=a(77),z={reasons:["Movies","Badminton","Other"],contacts:[],debts:[],whiteTheme:!1},G=function(e,t){var a=e||JSON.parse(window.localStorage.getItem("maksavelat"))||z,n=JSON.parse(JSON.stringify(a));switch(t.type){case"ToggleTheme":n.whiteTheme=!n.whiteTheme;break;case"AddReason":0===t.value.length||n.reasons.find(function(e){return e===t.value})||n.reasons.push(t.value);break;case"RemoveReason":n.reasons=n.reasons.filter(function(e){return e!==t.value});break;case"AddContact":0===t.value.length||n.contacts.find(function(e){return e===t.value})||n.contacts.push(t.value);break;case"RemoveContact":n.contacts=n.contacts.filter(function(e){return e!==t.value});break;case"AddDebt":t.value.id=n.debts.reduce(function(e,t){return Math.max(t.id,e)},0)+1,n.debts.push(t.value);break;case"PayDebt":n.debts.filter(function(e){return e.id===t.value}).forEach(function(e){e.paid=!0});break;case"UnPayDebt":n.debts.filter(function(e){return e.id===t.value}).forEach(function(e){e.paid=!1});break;case"PayAll":n.debts.filter(function(e){return e.who===t.value}).forEach(function(e){e.paid=!0})}return window.localStorage.setItem("maksavelat",JSON.stringify(n)),console.log(n,t),n},F=Object(B.b)(G),L=function(){c.a.render(r.a.createElement(g.a,{store:F},r.a.createElement(q,null)),document.getElementById("root"))};F.subscribe(L),L(),function(e){if("serviceWorker"in navigator){if(new URL("/maksavelat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/maksavelat","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):U(t,e)})}}()}},[[179,2,1]]]);
//# sourceMappingURL=main.f414f500.chunk.js.map