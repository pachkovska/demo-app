(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),c=t.n(o),i=(t(14),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),p=t(8),m=t.n(p),d=(t(15),t(16),function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"BarChart-content"},n.a.createElement("div",{className:"BarChart-title"},"Some Bar Chart"),n.a.createElement("div",{className:"BarChart-graph"},this.props.barData&&this.props.barData.map((function(a){return n.a.createElement("div",{className:"GraphBar",style:{height:Number(a.value)/e.props.highest_value*100+"%",backgroundColor:e.props.barColor,width:"50px"}},a.value)}))))}}]),a}(r.Component)),f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={barData:[{year:2015,value:123},{year:2016,value:250},{year:2017,value:895},{year:2018,value:654},{year:2019,value:375}],highest_value:895},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App",style:{background:"#282B33"}},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})),n.a.createElement(d,{barData:this.state.barData,highest_value:this.state.highest_value,barColor:"#add8e6"}),n.a.createElement("div",{style:{color:"#ffffff",paddingTop:"20px"}},"React Bar Chart Example"),n.a.createElement("div",{style:{color:"#ffffff",paddingBottom:"50px"}},"Don't judge, it was built in 20 minutes :-)"))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d9d1bd1f.chunk.js.map