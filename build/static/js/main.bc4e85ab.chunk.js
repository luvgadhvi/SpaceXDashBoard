(this["webpackJsonpspacex-dashboard"]=this["webpackJsonpspacex-dashboard"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(8),s=a.n(c),i=(a(88),a(89),a(90),a.p+"static/media/spacex.18beeda5.png"),r=a(157),l=a(159),o=a(161),d=a(3),u=Object(r.a)((function(e){return{root:{flexGrow:1},appBar:{backgroundColor:"#FFFFFF",minHeight:"75px",alignItems:"center"}}}));var j=function(){var e=u();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(l.a,{position:"relative",className:e.appBar,children:Object(d.jsx)(o.a,{edge:"center",children:Object(d.jsx)("img",{src:i,className:"spaceXLogo",alt:"SpaceX"})})})})},h=a(162),b=a(163),x=a(18),O=a(56),m=a.n(O),p=(a(55),a(96),a(12)),f=a.n(p),g={"Last Week":[f()().subtract(6,"days"),f()()],"Last month":[f()().subtract(1,"month").startOf("month"),f()()],"Past 3 months":[f()().subtract(3,"month").startOf("month"),f()()],"Past 6 months":[f()().subtract(6,"month").startOf("month"),f()()],"Past year":[f()().subtract(1,"years"),f()()],"Past 2 year":[f()().subtract(2,"years"),f()()]},D={parentEl:"datePicker",alwaysShowCalendars:!0,showDropdowns:!0,autoApply:!0,ranges:Object(x.a)({},g)},N=a(30),v=a(24),_={ADD_DATE_RANGE:"ADD_DATE_RANGE",ADD_LAUNCH_STATUS:"ADD_LAUNCH_STATUS"},y={setDateRange:function(e,t){return{type:_.ADD_DATE_RANGE,payload:{range:{startDate:e,endDate:t}}}},setLaunchStatus:function(e,t){return{type:_.ADD_LAUNCH_STATUS,payload:{launchStatus:{launchText:t,launchIndex:e}}}}};var S=Object(v.b)((function(e){return{dateRange:e.range}}),(function(e){return{setDateRange:function(t,a){e(y.setDateRange(t,a))}}}))((function(e){var t=e.setDateRange,a=e.dateRange,c=function(e,a){t(e,a)};return Object(n.useEffect)((function(){m()("#datePicker").daterangepicker(Object(x.a)(Object(x.a)({},D),{},{startDate:a.startDate,endDate:a.endDate}),c)})),Object(d.jsxs)("div",{className:"dataRange",children:[Object(d.jsx)(N.a,{className:"icon"}),Object(d.jsx)("input",{type:"text",id:"datePicker",className:"calendarInput",name:"daterange",onChange:function(){}})]})})),T=a(20),k=a(172),C=a(175);var L=Object(v.b)((function(e){return{launch:e.launchStatus}}),(function(e){return{setLaunchStatus:function(t,a){e(y.setLaunchStatus(t,a))}}}))((function(e){var t=e.launch,a=e.setLaunchStatus,c=Object(n.useState)(null),s=Object(T.a)(c,2),i=s[0],r=s[1],l=["All Launches","Upcoming Launches","Successful Launches","Failed Launches"];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"filterIconContainer",onClick:function(e){r(e.currentTarget)},children:[Object(d.jsx)(N.c,{className:"filerIcon"}),Object(d.jsx)("div",{className:"selectedOptions",children:l[t.launchIndex]}),Object(d.jsx)(N.b,{className:"filerIcon"})]}),Object(d.jsx)(k.a,{id:"option-menu",anchorEl:i,getContentAnchorEl:null,keepMounted:!0,open:Boolean(i),onClose:function(e){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:l.map((function(e,n){return Object(d.jsx)(C.a,{selected:n===t.launchIndex,onClick:function(){return function(e){a(e,l[e]),r(null)}(n)},children:e},e)}))})]})})),w=Object(r.a)((function(e){return{filterGridContainer:{marginTop:"30px"}}}));var A=function(){var e=w();return Object(d.jsx)(h.a,{className:e.filterGridContainer,children:Object(d.jsxs)(b.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(d.jsx)(b.a,{item:!0,children:Object(d.jsx)(S,{})}),Object(d.jsx)(b.a,{item:!0,children:Object(d.jsx)(L,{})})]})})},I=a(58),R=a.n(I),F=a(76),E=a(22),H=a(77),M=a.n(H).a.create({baseURL:"https://api.spacexdata.com/v3/launches"}),U=a(166),Y=a(168),z=a(123),B=a(170),P=a(165),G=a(167),W=a(169),J=a(171),X=a(164),q=Object(r.a)((function(e){return{tableContainer:{maxHeight:"70vh",marginTop:"20px"},root:{},paginationRoot:{"& > *":{marginTop:e.spacing(2)},display:"flex",justifyContent:"flex-end"},tableCell:{borderBottom:"none"},loadingRow:{height:"70vh"},loadingIcon:{fontSize:"50px",textAlign:"center"}}}));a(121);var K=function(e){var t=e.upcoming,a=e.success;return!0===t&&null===a?Object(d.jsx)("div",{className:["launchCode","upcomingColor"].join(" "),children:"Upcoming"}):!0===a?Object(d.jsx)("div",{className:["launchCode","successColor"].join(" "),children:"Success"}):Object(d.jsx)("div",{className:["launchCode","failedColor"].join(" "),children:"Failed"})};var Q=function(e){var t=e.launchDate,a=f()(t).utc().format("DD MMMM YYYY [at] HH:mm");return Object(d.jsx)(d.Fragment,{children:a})},V=a(176),Z=a(78),$=Object(r.a)((function(e){return{icons:{fontSize:"24px",cursor:"pointer"},missionImage:{height:"72px",weight:"72px",marginBottom:"15px"},dialogHeader:{display:"flex",justifyContent:"space-between",marginTop:"25px"},dialogHeaderItem:{display:"flex"},mission_name:{fontSize:"18px",fontWeight:600},headInner:{marginLeft:"15px"},rocket_name:{fontSize:"14px",fontWeight:500,marginTop:"10px",marginLeft:"5px"},headerIcon:{fontSize:"16px",marginRight:"5px",marginLeft:"5px",cursor:"pointer"},headerIconsList:{marginTop:"5px"},headerStatus:{width:"80px",marginLeft:"10px"},launchDetails:{marginTop:"10px",marginBottom:"15px",fontSize:"14px"},launchDetailsTable:{width:"100%",fontSize:"14px",textAlign:"left","& tr":{lineHeight:"40px"},"& td":{borderBottom:"1px solid #E4E4E7"}},launchTableData:{width:"40%"},launchTableRow:{borderBottom:"1px solid #E4E4E7"}}})),ee=a(59);var te=function(e){var t=e.open,a=e.launch,n=e.handleClose,c=$();return void 0===a||"{}"===JSON.stringify(a)?null:Object(d.jsx)(V.a,{onClose:n,open:t,fullWidth:!0,"aria-labelledby":"max-width-dialog-title",children:Object(d.jsxs)(h.a,{children:[Object(d.jsxs)("div",{className:c.dialogHeader,children:[Object(d.jsxs)("div",{className:c.dialogHeaderItem,children:[Object(d.jsx)("img",{src:a.links.mission_patch_small,alt:"alt",className:c.missionImage}),Object(d.jsxs)("div",{className:c.headInner,children:[Object(d.jsx)("div",{className:c.mission_name,children:a.mission_name}),Object(d.jsx)("div",{className:c.rocket_name,children:a.rocket.rocket_name}),Object(d.jsxs)("div",{className:c.headerIconsList,children:[Object(d.jsx)(ee.a,{onClick:function(){window.open(a.links.wikipedia)},className:c.headerIcon}),Object(d.jsx)(ee.b,{onClick:function(){window.open(a.links.video_link)},className:c.headerIcon})]})]}),Object(d.jsx)("div",{className:c.headerStatus,children:Object(d.jsx)(K,{upcoming:a.upcoming,success:a.launch_success})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(Z.a,{onClick:n,className:c.icons})})]}),Object(d.jsx)("div",{className:c.launchDetails,children:a.details?a.details:null}),Object(d.jsx)("table",{className:c.launchDetailsTable,children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{className:c.launchTableRow,children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Flight Number"}),Object(d.jsx)("td",{children:a.flight_number})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Mission Name"}),Object(d.jsx)("td",{children:a.mission_name})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Rocket Type"}),Object(d.jsx)("td",{children:a.rocket.rocket_type})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Manufacturer"}),Object(d.jsx)("td",{children:a.rocket.second_stage.payloads[0].manufacturer?a.rocket.second_stage.payloads[0].manufacturer:"Data Not Found"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Nationality"}),Object(d.jsx)("td",{children:a.rocket.second_stage.payloads[0].nationality?a.rocket.second_stage.payloads[0].nationality:"Data Not Found"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Launch Date"}),Object(d.jsx)("td",{children:Object(d.jsx)(Q,{launchDate:a.launch_date_utc})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Payload Type"}),Object(d.jsx)("td",{children:a.rocket.second_stage.payloads[0].payload_type?a.rocket.second_stage.payloads[0].payload_type:"Data Not Found"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Orbit"}),Object(d.jsx)("td",{children:a.rocket.second_stage.payloads[0].orbit?a.rocket.second_stage.payloads[0].orbit:"Data Not Found"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:c.launchTableData,children:"Launch Site"}),Object(d.jsx)("td",{children:a.launch_site.site_name?a.launch_site.site_name:"Data Not Found"})]})]})})]})})};var ae=Object(v.b)((function(e){return{dateRange:e.range,launchStatus:e.launchStatus}}),(function(e){return{}}))((function(e){var t=this,a=e.launchStatus,c=e.dateRange,s=q(),i=Object(n.useState)([]),r=Object(T.a)(i,2),l=r[0],o=r[1],u=Object(n.useState)([]),j=Object(T.a)(u,2),h=j[0],b=j[1],O=Object(n.useState)(1),m=Object(T.a)(O,2),p=m[0],f=m[1],g=Object(n.useState)(!1),D=Object(T.a)(g,2),v=D[0],_=D[1],y=Object(n.useState)(!1),S=Object(T.a)(y,2),k=S[0],C=S[1],L=Object(n.useState)(!1),w=Object(T.a)(L,2),A=w[0],I=w[1],H=Object(n.useState)({}),V=Object(T.a)(H,2),Z=V[0],$=V[1],ee=Object(n.useState)(!1),ae=Object(T.a)(ee,2),ne=ae[0],ce=ae[1],se=function(){return ne?Object(d.jsx)(X.a,{hover:!0,className:s.loadingRow,children:Object(d.jsx)(P.a,{colSpan:7,align:"center",children:Object(d.jsx)(N.d,{className:s.loadingIcon})})},"Loading"):Object(d.jsx)(X.a,{hover:!0,className:s.loadingRow,children:Object(d.jsx)(P.a,{colSpan:7,align:"center",children:"No Result Found For the specified filter"})},"Loading")},ie=function(e){console.log(e),_(!0),$(Object(x.a)({},e))},re=12,le=function(){var e=Object(F.a)(R.a.mark((function e(){var t,a,n,c=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:"",_(!1),ce(!0),""!==t){e.next=13;break}return se(),e.next=7,M();case 7:a=e.sent,o(Object(E.a)(a.data)),b(Object(E.a)(a.data)),ce(!1),e.next=20;break;case 13:return se(),e.next=16,M({params:{start:t.start,end:t.end}});case 16:n=e.sent,o(Object(E.a)(n.data)),b(Object(E.a)(n.data)),ce(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k?function(e){if(_(!1),"Upcoming Launches"===e.launchText){var t=l.filter((function(e){return e.upcoming}));console.log(t),f(1),b(Object(E.a)(t))}else if("Successful Launches"===e.launchText){var a=l.filter((function(e){return e.launch_success}));f(1),b(Object(E.a)(a))}else if("Failed Launches"===e.launchText){var n=l.filter((function(e){return!e.launch_success&&!e.upcoming}));f(1),console.log(n),b(Object(E.a)(n))}else"All Launches"===e.launchText&&(f(1),b(Object(E.a)(l)))}(a):C(!0)}),[a]),Object(n.useEffect)((function(){if(A){var e={start:c.startDate.format("YYYY-MM-DD"),end:c.endDate.format("YYYY-MM-DD")};le(e)}else I(!0)}),[c]),Object(n.useEffect)((function(){le()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U.a,{}),Object(d.jsxs)(z.a,{className:"root",children:[Object(d.jsx)(G.a,{className:s.tableContainer,id:"launchTable",children:Object(d.jsxs)(Y.a,{size:"medium",padding:"default",stickyHeader:!0,children:[Object(d.jsx)(W.a,{children:Object(d.jsx)(X.a,{children:[{id:"No."},{id:"Launched(UTC)"},{id:"Location"},{id:"Mission"},{id:"Orbit"},{id:"Launch Status"},{id:"Rocket"}].map((function(e){return Object(d.jsx)(P.a,{style:{minWidth:e.minWidth},className:s.tableCell,children:e.id},e.id)}))},"header")}),Object(d.jsx)(B.a,{children:h.length>0?h.slice((p-1)*re,(p-1)*re+re).map((function(e,a){return Object(d.jsxs)(X.a,{hover:!0,onClick:ie.bind(t,e),className:s.tableCell,children:[Object(d.jsx)(P.a,{style:{width:50},children:a<=8&&(p-1)*re<=0?"0"+((p-1)*re+a+1):(p-1)*re+a+1}),Object(d.jsx)(P.a,{style:{width:250},children:Object(d.jsx)(Q,{launchDate:e.launch_date_utc})}),Object(d.jsx)(P.a,{style:{width:200},children:e.launch_site.site_name}),Object(d.jsx)(P.a,{style:{width:250},children:e.mission_name}),Object(d.jsx)(P.a,{children:e.rocket.second_stage.payloads[0].orbit}),Object(d.jsx)(P.a,{children:Object(d.jsx)(K,{upcoming:e.upcoming,success:e.launch_success})}),Object(d.jsx)(P.a,{children:e.rocket.rocket_name})]},a)})):se()})]})}),Object(d.jsx)(te,{open:v,launch:Z,handleClose:function(){_(!1)}})]}),h.length>12?Object(d.jsx)("div",{className:s.paginationRoot,children:Object(d.jsx)(J.a,{count:Math.ceil(h.length/re),variant:"outlined",shape:"rounded",page:p,onChange:function(e,t){f(t)}})}):null]})})),ne=a(46),ce={range:{startDate:f()().subtract(7,"days"),endDate:f()()},launchStatus:{launchText:"All Launches",launchIndex:0}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.ADD_DATE_RANGE:case _.ADD_LAUNCH_STATUS:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},ie=Object(ne.b)(se);var re=function(){return Object(d.jsxs)(v.a,{store:ie,children:[Object(d.jsx)(j,{}),Object(d.jsx)(h.a,{children:Object(d.jsxs)(b.a,{container:!0,direction:"column",children:[Object(d.jsx)(b.a,{item:!0,children:Object(d.jsx)(A,{})}),Object(d.jsx)(b.a,{item:!0,children:Object(d.jsx)(ae,{})})]})})]})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};s.a.render(Object(d.jsx)(re,{}),document.getElementById("root")),le()},55:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.bc4e85ab.chunk.js.map