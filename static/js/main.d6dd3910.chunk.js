(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date,timerId:setInterval((function(){}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({timerId:setInterval((function(){t.setState({date:new Date})}),1e3)})}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){var t=this.state.date;return console.log(t.toLocaleTimeString()),Object(b.jsx)(b.Fragment,{children:t.toLocaleTimeString()})}}]),n}(u.a.Component),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsxs)("p",{children:["Current time:"," ",e?Object(b.jsx)(m,{name:this.state.clockName}):null]}),Object(b.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show Clock"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide Clock"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){t.setState({clockName:Math.floor(100*Math.random())})},children:"Set random name"})]})})}}]),n}(u.a.Component),j=h;a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d6dd3910.chunk.js.map