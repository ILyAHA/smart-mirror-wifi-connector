(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{38:function(e,t,a){e.exports=a(54)},43:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),i=(a(43),a(88)),l=a(30),c=a.n(l),d=a(84);class h extends r.a.Component{constructor(e){super(e),this.state={networkName:"error",networkPassword:"error"}}qrString(){return'SMART-MIRROR-WIFISETTINGS:NETWORK="'.concat(this.state.networkName,'"&PASSWORD="').concat(this.state.networkPassword,'"')}handleChangeName(e){this.setState({networkName:e.target.value})}handleChangePassword(e){this.setState({networkPassword:e.target.value})}isValidQRCode(){return this.state.networkName&&"error"!==this.state.networkName}render(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"qrCode"},this.isValidQRCode()?r.a.createElement(c.a,{value:this.qrString(),size:"192"}):r.a.createElement(d.a,{component:"h1",variant:"h5"},"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 Wifi \u0441\u0435\u0442\u0438")),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement("div",null,r.a.createElement(i.a,{label:"\u041d\u0430\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0442\u0438",onChange:this.handleChangeName.bind(this)})),r.a.createElement("div",null,r.a.createElement(i.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",onChange:this.handleChangePassword.bind(this)}))))}}const m=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),m)}},[[38,1,2]]]);
//# sourceMappingURL=main.70803587.chunk.js.map