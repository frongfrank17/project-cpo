(this["webpackJsonpproject-cpo"]=this["webpackJsonpproject-cpo"]||[]).push([[0],{280:function(e,t,a){e.exports=a(591)},318:function(e,t){},337:function(e,t,a){},455:function(e,t,a){},554:function(e,t,a){},555:function(e,t,a){},586:function(e,t,a){},587:function(e,t,a){},591:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=a(16),i=a(602),s=a(246),m=a(20),u=a(21),p=a(22),E=a(23),d=a(121),g=a.n(d),f="https://emergencycell-demo.herokuapp.com/",h=g()(f),v=a(44),_=Object(v.a)(),b=a(77),y=a.n(b),O=(a(337),a(100),a(594)),x=a(595),N=a(599),C=a(275),w=a(59),j=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.onLogin=function(){var t=e.state,a=t.username,n=t.password;console.log("username:"+a+":password"+n),e.props.dispatch(function(e,t){return function(a){var n={username:e,password:t};y.a.post(f+"api/station/manager/v1/staff/login",n,{headers:{"Content-Type":"application/json"}}).then((function(e){var t=e.data;0!=t.success&&(localStorage.setItem("token",t.token),localStorage.setItem("authentication",t.success),a({type:"LOGIN_AUTH_ACTION",payload:t}),_.push("/manager"))}))}}(a,n))},e.state={username:"",password:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:" container-fluid bg-login"},l.a.createElement("div",{className:" container-sm container-md container-lg container-xl"},l.a.createElement(O.a,{className:"login-containar"},l.a.createElement(x.a,{xs:5,sm:8,md:9,lg:11,xl:13,style:{textAlign:"center",backgroundColor:"#5DADE2"}}," register "),l.a.createElement(x.a,{xs:21,sm:17,md:13,lg:9,xl:11},l.a.createElement("div",{className:"text-title-form"},"Log In ",l.a.createElement("p",null,"Station Oparater  ")),l.a.createElement(N.a,{className:"login-form"},l.a.createElement(N.a.Item,{className:"login-form-input",name:"username",rules:[{required:!0,message:"Please input your Username!"}]},l.a.createElement(C.a,{type:"text",placeholder:"Username",name:"username",onChange:function(t){return e.onChange(t)}})),l.a.createElement(N.a.Item,{className:"login-form-input",name:"password",rules:[k]},l.a.createElement(C.a,{type:"password",placeholder:"Password",name:"password",onChange:function(t){return e.onChange(t)}})),l.a.createElement(w.a,{type:"primary",className:"login-form-button",onClick:function(){return e.onLogin()}},"Log in"),l.a.createElement("a",{href:"#Forget your password",className:"login-forget"},"forget your password"))))))}}]),a}(n.Component),k={required:!0,message:"Please input your Password!"},S=Object(o.b)()(j),I=a(600),M=(a(455),a(97)),A={user_location:[],staff_location:[]},L=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidCatch",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props.location.user_location,t=new window.google.maps.LatLng(e.latitude,e.longitude);return l.a.createElement(M.GoogleMap,{defaultCenter:new window.google.maps.LatLng(14.9799,100.501762),defaultZoom:10,defaultMapTypeId:"roadmap",center:t,zoom:10},l.a.createElement(M.Marker,{position:t,title:"Emergency",icon:{url:"https://image.flaticon.com/icons/svg/584/584517.svg",anchor:new window.google.maps.Point(40,40),scaledSize:new window.google.maps.Size(40,40)}}))}}]),a}(n.Component),U=Object(M.withScriptjs)(Object(M.withGoogleMap)(L)),P=Object(o.b)((function(e){return{location:e.Map_User}}))(U),T=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.createElement(P,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCPOmq_l7JF2EAW2vjev8bMIa6TI319Y6A",loadingElement:n.createElement("div",{style:{height:"100vh",width:"100%"}}),containerElement:n.createElement("div",{style:{height:"100vh",width:"100%"}}),mapElement:n.createElement("div",{style:{height:"100vh",width:"100%"}})})}}]),a}(n.Component);var R=Object(o.b)()((function(){return l.a.createElement(T,null)})),D=(a(554),a(598)),G=a(597),z=a(596),J=a(601),Y=(a(555),G.a.Text),F=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).status=function(){return"SOS"==n.state.Service_?l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{flex:"auto"},l.a.createElement(N.a,{className:"col-margin-topic"},l.a.createElement(N.a.Item,null,l.a.createElement(J.a,{type:"text",placeholder:"select"})))),l.a.createElement(x.a,{flex:"auto"},l.a.createElement(w.a,null,"add"))):(e=n.state.Service_,l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{flex:"auto"},l.a.createElement(O.a,null,l.a.createElement(x.a,{className:"col-margin-topic"},"status"),l.a.createElement(x.a,null," ",l.a.createElement(Y,{code:!0}," ",e)," ")))));var e},n.state={_id:"",Profile:[],Contact:[],Lisence_plate:[],Detail_car:[],Service_:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get(f+"api/emergency/v1/station/staff/detailCell?id="+this.props.id).then((function(t){var a=t.data;e.setState({Profile:a.User_.Profile,Contact:a.User_.Contact,Lisence_plate:a.User_car.Lisence_plate,Detail_car:a.User_car.detail_Car,Service_:a.status,_id:a._id})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.Profile,a=e.Contact,n=e.Lisence_plate,r=e.Detail_car,c=(e.Service_,e._id);return""==c||null==c||void 0==c?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(z.a,{size:"large"})):l.a.createElement("div",null,l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:.5},l.a.createElement("img",{src:t.profile_image,width:"170px",height:"200px"})),l.a.createElement(x.a,{flex:4,className:"col-detail"},l.a.createElement("p",{className:"col-margin-detail"}," ",t.first_name+" "+t.last_name),l.a.createElement("p",{className:"col-margin-detail"},"  Male",t.gender),l.a.createElement("p",{className:"col-margin-detail"},"  ",a.email),l.a.createElement("p",{className:"col-margin-detail"},"  ",a.phone_number),l.a.createElement("p",{className:"col-margin-detail"},"  ",n.plate_number+" "+n.plate_province))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-car"},l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null,"\u0e22\u0e35\u0e48\u0e2b\u0e49\u0e2d\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c"))," ",l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.car_brand)),l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null,"\u0e23\u0e38\u0e48\u0e19\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.car_model))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null," \u0e41\u0e1a\u0e15\u0e23\u0e35\u0e48\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.battery_type)),l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null," \u0e02\u0e19\u0e32\u0e14\u0e41\u0e1a\u0e15\u0e23\u0e35\u0e48")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.battery_size))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null," \u0e2b\u0e31\u0e27\u0e0a\u0e32\u0e15")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,"1. ",r.connect_type)),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,"2. ",r.connect_type))))),l.a.createElement(O.a,null,this.status()))}}]),a}(n.Component);var q=Object(o.b)()(F),B=h,W=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ModelOpen=function(e){n.setState({visible:!0,userId:e})},n.ModelOk=function(){n.setState({visible:!1})},n.ModalCancel=function(){n.setState({visible:!1})},n.Chkstatus=function(e){return"INPROGRESS"==e?l.a.createElement("span",{class:"badge badge-warning font-status"},"IN PROGRESS"):l.a.createElement("span",{class:"badge badge-danger font-status"},"SOS")},n.PossionMap=function(e){n.props.dispatch(function(e){return function(t){t({type:"EMERGENCY_MAP_ACTION",payload:e})}}(e))},n.state={row:[],visible:!1,userId:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.on("emergency-cell-lists",(function(t){var a=JSON.parse(t);e.setState({row:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(D.a,{title:"Model",width:"1000px",visible:this.state.visible,onOk:this.ModelOk,onCancel:this.ModalCancel},l.a.createElement(q,{id:this.state.userId})),l.a.createElement("div",{className:"container-fix"},l.a.createElement("p",null,"Emergency-cell"),l.a.createElement("table",{className:"table table-responsive  "},l.a.createElement("thead",null,l.a.createElement("th",{style:{width:"10%",textAlign:"center"}}),l.a.createElement("th",{style:{width:"10%",textAlign:"center"}}),l.a.createElement("th",{style:{width:"30%",textAlign:"center"}},"username"),l.a.createElement("th",{style:{width:"20%",textAlign:"center"}},"phone"),l.a.createElement("th",{style:{width:"10%",textAlign:"center"}},"status")),l.a.createElement("tbody",null,this.state.row.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("a",{onClick:function(){return e.ModelOpen(t._id)}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2674/2674880.svg",height:"25px",widgth:"30px"}))),l.a.createElement("td",null,l.a.createElement("a",{size:"default",onClick:function(){return e.PossionMap(t.Location)}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/854/854878.svg",height:"30px",width:"30px"}))),l.a.createElement("td",null,t.User_.Profile.first_name+" "+t.User_.Profile.last_name),l.a.createElement("td",null,t.User_.Contact.phone_number),l.a.createElement("td",null,e.Chkstatus(t.status)))}))))))}}]),a}(n.Component),H=Object(o.b)()(W);var K=g()("https://stolen-report-demo.herokuapp.com/"),Z=(a(586),G.a.Text),$=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={_id:"",Profile:[],Contact:[],Lisence_plate:[],Detail_car:[],Service_:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://stolen-report-demo.herokuapp.com/api/stolen/v1/report/getReport?id="+this.props.id).then((function(t){var a=t.data;e.setState({Profile:a.User_.Profile,Contact:a.User_.Contact,Lisence_plate:a.User_car.Lisence_plate,Detail_car:a.User_car.detail_Car,Service_:a,_id:a._id})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.Profile,a=e.Contact,n=e.Lisence_plate,r=e.Detail_car,c=e.Service_,o=e._id;return""==o||null==o||void 0==o?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(z.a,{size:"large"})):l.a.createElement("div",null,l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:.5},l.a.createElement("img",{src:t.profile_image,width:"170px",height:"200px"})),l.a.createElement(x.a,{flex:4,className:"col-detail"},l.a.createElement("p",{className:"col-margin-detail"}," ",t.first_name+" "+t.last_name),l.a.createElement("p",{className:"col-margin-detail"},"  Male",t.gender),l.a.createElement("p",{className:"col-margin-detail"},"  ",a.email),l.a.createElement("p",{className:"col-margin-detail"},"  ",a.phone_number),l.a.createElement("p",{className:"col-margin-detail"},"  ",n.plate_number+" "+n.plate_province))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-car"},l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null,"\u0e22\u0e35\u0e48\u0e2b\u0e49\u0e2d\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c"))," ",l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.car_brand)),l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null,"\u0e23\u0e38\u0e48\u0e19\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.car_model))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null," \u0e41\u0e1a\u0e15\u0e23\u0e35\u0e48\u0e23\u0e16\u0e22\u0e19\u0e15\u0e4c")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.battery_type)),l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null," \u0e02\u0e19\u0e32\u0e14\u0e41\u0e1a\u0e15\u0e23\u0e35\u0e48")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,r.battery_size))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto",className:"col-margin-topic"},l.a.createElement("p",null," \u0e2b\u0e31\u0e27\u0e0a\u0e32\u0e15")),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,"1. ",r.connect_type)),l.a.createElement(x.a,{flex:"auto",className:"col-margin-car"},l.a.createElement("p",null,"2. ",r.connect_type))))),l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto"},l.a.createElement(O.a,null,l.a.createElement(x.a,{className:"status"},"status "),l.a.createElement(x.a,null," ",l.a.createElement(Z,{className:"Text",code:!0}," ",c.status)," ")))))}}]),a}(n.Component),Q=Object(o.b)()($),V=(a(587),K),X=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ModelOpen=function(e){n.setState({visible:!0,userId:e})},n.ModelOk=function(){n.setState({visible:!1})},n.ModalCancel=function(){n.setState({visible:!1})},n.Chkstatus=function(e){return"Lock"==e?l.a.createElement("span",{class:"badge badge-warning font-status"},"Lock"):l.a.createElement("span",{class:"badge badge-danger font-status"},"Report")},n.state={row:[],visible:!1,userId:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;V.on("stolen-report-lists",(function(t){var a=JSON.parse(t);console.log(a),e.setState({row:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:""},l.a.createElement(D.a,{title:"Model",visible:this.state.visible,onOk:this.ModelOk,onCancel:this.ModalCancel},l.a.createElement(Q,{id:this.state.userId})),l.a.createElement("div",{className:" container-fuild "},l.a.createElement("p",null,"Report"),l.a.createElement("div",{className:" container table-responsive "},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",{style:{width:"100%"}},l.a.createElement("th",{style:{textAlign:"center"}}),l.a.createElement("th",{style:{textAlign:"center"}}," Lisence plate"),l.a.createElement("th",{style:{textAlign:"center"}}," Car Brand "),l.a.createElement("th",{style:{textAlign:"center"}}," Car Model "),l.a.createElement("th",{style:{textAlign:"center"}}," Connector "),l.a.createElement("th",{style:{textAlign:"center"}}," Connector "),l.a.createElement("th",{style:{textAlign:"center"}}," Username "),l.a.createElement("th",{style:{textAlign:"center"}}," Phone number "),l.a.createElement("th",{style:{textAlign:"center"}}," E - Mail "),l.a.createElement("th",{style:{textAlign:"center"}}," status ")),l.a.createElement("tbody",null,this.state.row.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("a",{onClick:function(){return e.ModelOpen(t._id)}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2674/2674880.svg",height:"25px",widgth:"30px"}))),l.a.createElement("td",null,t.User_car.Lisence_plate.plate_number+" "+t.User_car.Lisence_plate.plate_province),l.a.createElement("td",null,t.User_car.detail_Car.car_brand),l.a.createElement("td",null,t.User_car.detail_Car.car_model),l.a.createElement("td",null,t.User_car.detail_Car.connect_type[0]),l.a.createElement("td",null,t.User_car.detail_Car.connect_type[1]),l.a.createElement("td",null,t.User_.Profile.first_name+" "+t.User_.Profile.last_name),l.a.createElement("td",null,t.User_.Contact.phone_number),l.a.createElement("td",null,t.User_.Contact.email),l.a.createElement("td",null,e.Chkstatus(t.status)))})))))))}}]),a}(n.Component),ee=Object(o.b)()(X);function te(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"auto"},l.a.createElement(R,null)),l.a.createElement(x.a,{flex:"500px"},l.a.createElement(H,null))))}var ae=Object(o.b)()((function(){return"stolen-report"==Object(o.c)((function(e){return e.Lists})).listdata?l.a.createElement(ee,null):l.a.createElement(te,null)})),ne=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.dispatch;return l.a.createElement("div",null,l.a.createElement(O.a,null,l.a.createElement(x.a,{flex:"50px",className:"content-tab-menu"},l.a.createElement(I.a,{className:"tab-menu",theme:"dark",mode:"inline",defaultSelectedKeys:["4"]},l.a.createElement(I.a.Item,{key:"1",className:"tab-topic",onClick:function(){return e((function(e){e({type:"LIST_EMERGENCY_ACTION"})}))}},l.a.createElement("span",{className:"nav-text"},"Emergency")),l.a.createElement(I.a.Item,{key:"2",className:"tab-topic",onClick:function(){return e((function(e){e({type:"LIST_REPORT_ACTION"})}))}},l.a.createElement("span",{className:"nav-text"},"Report")),l.a.createElement(I.a.Item,{key:"3",className:"tab-topic",onClick:function(){return e((function(e){localStorage.removeItem("token"),localStorage.removeItem("authentication"),e({type:"LOGOUT_ACTION"}),_.push("/")}))}},l.a.createElement("span",{className:"nav-text"},"Logout")))),l.a.createElement(x.a,{flex:"auto"},l.a.createElement(ae,null))),l.a.createElement(O.a,null))}}]),a}(n.Component),le=Object(o.b)()(ne),re=a(277),ce=function(e){var t=e.component,a=Object(re.a)(e,["component"]);return l.a.createElement(i.b,Object.assign({},a,{render:function(e){return localStorage.getItem("authentication")?l.a.createElement(t,e):l.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var oe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.c,{history:_},l.a.createElement(i.d,null,l.a.createElement(ce,{exact:!0,path:"/manager",component:le}),l.a.createElement(i.b,{exact:!0,path:"/",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(82),se=a(273),me=a(274),ue=a.n(me),pe=localStorage.getItem("token"),Ee=localStorage.getItem("authentication"),de=Ee?{loggedIn:!0,authentication:Ee,token:pe}:{},ge={listdata:""},fe=Object(ie.c)({LoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_AUTH_ACTION":return{loggedIn:!0,authentication:t.payload.success,token:t.payload.token};case"LOGOUT_ACTION":return{loggedIn:!1,authentication:!1,token:""};default:return e}},Lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_EMERGENCY_ACTION":return{listdata:"emergency-cell"};case"LIST_REPORT_ACTION":return{listdata:"stolen-report"};default:return e}},Map_User:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMERGENCY_MAP_ACTION":return{user_location:t.payload};default:return e}}}),he=Object(ie.d)(fe,Object(ie.a)(se.a,ue.a));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,{store:he},l.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[280,1,2]]]);
//# sourceMappingURL=main.2da32eca.chunk.js.map