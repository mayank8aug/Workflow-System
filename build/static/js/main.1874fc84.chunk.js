(this["webpackJsonpworkflow-system"]=this["webpackJsonpworkflow-system"]||[]).push([[0],{32:function(e,t,a){e.exports=a(54)},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=a(5),s=a(10),i=a(30),u={isLoggedIn:!1,email:null};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return Object.assign({},e,{isLoggedIn:!0,email:t.email});case"LOGOUT_USER":return Object.assign({},e,{isLoggedIn:!1,email:null});default:return e}},f={filterState:null,searchQuery:null};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_QUERY":return Object.assign({},e,{searchQuery:t.query});case"SET_FILTER":return Object.assign({},e,{filterState:t.filterState});default:return e}},E=a(29),w={workflows:[],updateStateErr:!1,nodeRemoved:!1,workflowRemoved:!1,persistedWorkflows:[],searchQuery:"",filterState:""};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_WORKFLOW":return Object.assign({},e,{persistedWorkflows:e.persistedWorkflows.concat(t.workflow),updateStateErr:!1,workflowAdded:!0});case"DELETE_WORKFLOW":return e.persistedWorkflows.splice(t.index,1),Object.assign({},e,{workflows:Object(E.a)(e.persistedWorkflows),updateStateErr:!1,workflowRemoved:!0});case"UPDATE_WORKFLOW_STATE":var a=JSON.parse(JSON.stringify(e.persistedWorkflows)),n=a[t.index],r=n.nodes.some((function(e){return"COMPLETED"!==e.state}));return r?Object.assign({},e,{updateStateErr:!0}):(n.state="PENDING"===n.state?"COMPLETED":"PENDING",Object.assign({},e,{persistedWorkflows:a}));case"UPDATE_WORKFLOWS":var l=JSON.parse(JSON.stringify(e.persistedWorkflows));return"fromPersist"===t.updateType?Object.assign({},e,{workflows:l,saved:!1}):Object.assign({},e,{persistedWorkflows:e.workflows,saved:!0});case"ADD_NODE":var o=JSON.parse(JSON.stringify(e.workflows));return o[t.index].nodes.push(t.node),Object.assign({},e,{workflows:o,updateStateErr:!1});case"DELETE_NODE":var c=JSON.parse(JSON.stringify(e.workflows)),s=c[t.index].nodes;return s.pop(),Object.assign({},e,{nodeRemoved:!0,workflows:c});case"UPDATE_NODE_STATE":for(var i=JSON.parse(JSON.stringify(e.workflows)),u=i[t.workflowIndex].nodes,d=u[t.nodeIndex],f=!1,m=0;m<t.nodeIndex;m++)if("COMPLETED"!==u[m].state){f=!0;break}return f&&"IN-PROGRESS"===d.state?Object.assign({},e,{updateStateErr:!0}):(d.state="PENDING"===d.state?"IN-PROGRESS":"COMPLETED",Object.assign({},e,{workflows:i}));case"CLEAR_WORKFLOW_ERROR":return Object.assign({},e,{updateStateErr:!1,nodeRemoved:!1,workflowRemoved:!1,workflowAdded:!1,saved:!1});case"UPDATE_WORKFLOW":var p=e.workflows[t.index];return Object.assign(p,t.data),Object.assign({},e,{workflows:e.workflows});case"UPDATE_NODE":var b=e.workflows[t.workflowIndex].nodes[t.nodeIndex];return Object.assign(b,t.data),Object.assign({},e,{workflows:e.workflows});case"SHUFFLE_NODES":for(var O=e.workflows[t.index],k=O.nodes,v=k.length-1;v>0;v--){var N=Math.floor(Math.random()*(v+1)),g=[k[N],k[v]];k[v]=g[0],k[N]=g[1]}return Object.assign({},e,{workflows:e.workflows});case"SET_SEARCH_QUERY":return Object.assign({},e,{searchQuery:t.query.trim().toLowerCase()});case"SET_FILTER":return Object.assign({},e,{filterState:t.filterState});default:return e}},b={data:null};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_GROWL":return Object.assign({},e,{data:t.data});default:return e}},k=Object(s.c)({auth:d,workflowHeader:m,workflow:p,message:O}),v=a(22),N=a.n(v),g=a(31),h=N.a.mark(y);function y(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([]);case 2:case"end":return e.stop()}}),h)}var j=a(12),S=a(13),x=a(7),T="LOGIN_USER",L="LOGOUT_USER",C="SET_SEARCH_QUERY",D="SET_FILTER",R="ADD_WORKFLOW",_="DELETE_WORKFLOW",W="ADD_NODE",P="DELETE_NODE",A="UPDATE_NODE_STATE",I="UPDATE_GROWL",U="CLEAR_WORKFLOW_ERROR",F="UPDATE_WORKFLOW_STATE",G="UPDATE_WORKFLOWS",K="UPDATE_WORKFLOW",J="UPDATE_NODE",M="SHUFFLE_NODES";function Q(e){return{type:I,data:e}}function H(){return{type:U}}function q(e){return{type:G,updateType:e}}a(42);function B(e,t){e({type:L}),t.replace("/")}var Y=function(){var e=Object(j.f)(),t=Object(c.b)(),a=Object(n.useCallback)(B.bind(null,t,e)),l=Object(c.c)((function(e){return e.auth.isLoggedIn})),o=e.location.pathname.indexOf("workflows/")>-1;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"fs20 fw700 color-white display-flex align-items-center"},o&&r.a.createElement("span",{className:"back-btn",onClick:e.goBack},r.a.createElement(x.a,null)),r.a.createElement("span",{className:"pd-l4"},"WORKFLOW SYSTEM")),l&&r.a.createElement("button",{className:"logout-btn",onClick:a},"Logout"))},Z=a(16),V=function(e){return void 0===e||null===e||""===e};function $(){}function z(e){var t=null;return(!V(e)&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||V(e))&&(t="Please enter a valid Email"),t}function X(e){var t=e?e.trim().length:0;if(V(e)||t<1)return"This is required"}a(44);function ee(e,t){t(function(e){return{type:T,email:e}}("mk@yopmail.com")),e.replace("/workflows")}function te(){}var ae=function(e){var t=e.history,a=Object(c.b)(),l=Object(n.useCallback)(ee.bind(null,t,a),[]);return r.a.createElement("div",{className:"login-container display-flex flex-column justify-space-center align-items-center"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"mr-b20 fw700 text-center"},"Login"),r.a.createElement(Z.b,{onSubmit:l,validate:te,render:function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(Z.a,{name:"email",validate:z},(function(e){var t=e.input,a=e.meta;return r.a.createElement("div",{className:"mr-b40 pos-rel"},r.a.createElement("input",Object.assign({className:"input-field outline-none",type:"email"},t,{placeholder:"*Email"})),a.touched&&a.error&&r.a.createElement("span",{className:"val-error pos-abs"},a.error))})),r.a.createElement(Z.a,{name:"password",validate:X},(function(e){var t=e.input,a=e.meta;return r.a.createElement("div",{className:"mr-b40 pos-rel"},r.a.createElement("input",Object.assign({className:"input-field outline-none",type:"password"},t,{placeholder:"*Password"})),a.touched&&a.error&&r.a.createElement("span",{className:"val-error pos-abs"},a.error))})),r.a.createElement("label",{className:"mr-b20 inline-block cursor-pointer"},r.a.createElement(Z.a,{name:"rememberLogin"},(function(e){var t=e.input,a=e.meta;return r.a.createElement("span",null,r.a.createElement("input",Object.assign({className:"cursor-pointer",type:"checkbox"},t)),a.touched&&a.error&&r.a.createElement("span",null,a.error))})),r.a.createElement("span",{className:"pd-l4 fs14 text-top"},"Remember me")),r.a.createElement("button",{className:"w100 color-white cursor-pointer submit-btn outline-none",type:"submit"},"Login"))}}),r.a.createElement("div",{className:"signup-text cursor-pointer"},"Don't have an account? Sign up here")))};var ne=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];var o=this,c=function(){a=null,e.apply(o,r)};clearTimeout(a),a=setTimeout(c,t)}}((function(e,t){t(function(e){return{type:C,query:e}}(e))}),200);var re=function(){var e=Object(c.b)();return r.a.createElement("div",{className:"workflow-search pos-rel"},r.a.createElement(x.f,null),r.a.createElement("input",{className:"search",type:"text",placeholder:"Search Workflows",onKeyUp:function(t){return ne(t.target.value,e)}}))};a(45);function le(e,t){e({type:D,filterState:t})}var oe=function(){var e=Object(c.b)(),t=Object(n.useCallback)((function(t){return le(e,t.target.value)}),[e]);return r.a.createElement("div",{className:"filters pos-rel"},r.a.createElement(x.c,null),r.a.createElement("select",{onChange:t},r.a.createElement("option",{value:""},"ALL"),r.a.createElement("option",{value:"PENDING"},"PENDING"),r.a.createElement("option",{value:"COMPLETED"},"COMPLETED")))};function ce(e){e({type:R,workflow:{name:"New Workflow",state:"PENDING",nodes:[]}})}var se=function(){var e=Object(c.b)(),t=Object(n.useCallback)(ce.bind(null,e),[]);return r.a.createElement("div",{className:"list-header"},r.a.createElement("div",{className:"search-filter"},r.a.createElement(re,null),r.a.createElement(oe,null)),r.a.createElement("button",{className:"add-workflow display-flex align-items-center",onClick:t},r.a.createElement(x.d,null),r.a.createElement("span",{className:"pd-l4"},"Create Workflow")))};a(46);function ie(e,t){e(function(e){return{type:_,index:e}}(t))}function ue(e,t){e(function(e){return{type:F,index:e}}(t))}function de(e,t){e.push("/workflows/".concat(t))}var fe=function(e){var t=e.workflow,a=t.name,l=t.state,o=e.index,s=Object(j.f)(),i=Object(c.b)(),u=Object(n.useCallback)((function(e){ie(i,o),e.stopPropagation()}),[i,o]),d=Object(n.useCallback)((function(e){ue(i,o),e.stopPropagation()}),[i,o]),f=Object(n.useCallback)(de.bind(null,s,o),[]);return r.a.createElement("div",{className:"workflow-card",onClick:f},r.a.createElement("div",{className:"delete-icon",onClick:u},r.a.createElement(x.h,null)),r.a.createElement("div",{className:"workflow-name"},a),r.a.createElement("div",{className:"display-flex justify-space-between align-items-center"},l,r.a.createElement("span",{className:"state-icon ".concat(l.toLowerCase()),onClick:d},r.a.createElement(x.b,null))))};a(47);var me=function(e){var t=e.workflows;return r.a.createElement("div",{className:"workflow-list"},t.map((function(e,t){return r.a.createElement(fe,{key:t,workflow:e,index:t})})))};function Ee(e,t){"update-error"===t?e(Q({type:"error",message:"This workflow can not be updated as all the tasks are not done.",timeout:4e3})):"delete-success"===t&&e(Q({type:"success",message:"The workflow has been deleted successfully.",timeout:3e3})),e(H())}var we=function(){var e=Object(c.c)((function(e){return e.auth.isLoggedIn})),t=Object(j.f)();e||t.push("/");var a=Object(c.b)(),l=Object(n.useCallback)(Ee.bind(null,a),[]),o=Object(c.c)((function(e){return e.workflow})),s=o.persistedWorkflows,i=o.updateStateErr,u=o.workflowRemoved,d=o.workflowAdded,f=o.searchQuery,m=o.filterState;Object(n.useEffect)((function(){i?l("update-error"):u?l("delete-success"):d&&a(H())}),[d,u,i,l,t,s,a]);var E=f||m?s.filter((function(e){return e.name.toLowerCase().indexOf(f)>-1&&(!m||e.state===m)})):s;return r.a.createElement("div",null,r.a.createElement(se,null),E.length>0?r.a.createElement(me,{workflows:E}):r.a.createElement("span",{className:"pd-l20"},"No Workflows..."))};function pe(e,t){e(function(e){return{type:W,index:e,node:{title:"New Task",content:"Task Content",state:"PENDING"}}}(t))}function be(e,t){e(function(e){return{type:P,index:e}}(t))}function Oe(e){e(q())}function ke(e,t){e(function(e){return{type:M,index:e}}(t))}var ve=function(e){var t=e.index,a=e.nodesCount,l=e.allowShuffle,o=Object(c.b)(),s=Object(n.useCallback)(pe.bind(null,o,t),[]),i=Object(n.useCallback)(be.bind(null,o,t),[]),u=Object(n.useCallback)(Oe.bind(null,o),[o]),d=Object(n.useCallback)(ke.bind(null,o,t),[o,t]);return r.a.createElement("div",{className:"workflow-actions display-flex align-items-center"},l&&r.a.createElement("button",{className:"shuffle display-flex align-items-center",onClick:d},r.a.createElement(x.e,null),r.a.createElement("span",{className:"pd-l4"},"Shuffle")),a>0&&r.a.createElement("button",{className:"delete-node display-flex align-items-center",onClick:i},r.a.createElement(x.g,null),r.a.createElement("span",{className:"pd-l4"},"Delete")),r.a.createElement("button",{className:"add-node display-flex align-items-center",onClick:s},r.a.createElement(x.d,null),r.a.createElement("span",{className:"pd-l4"},"Add Node")),r.a.createElement("button",{className:"save display-flex align-items-center",onClick:u},r.a.createElement("span",{className:"pd-l4"},"Save")))};a(48);function Ne(e,t,a){e(function(e,t){return{type:K,index:e,data:t}}(t,{name:a}))}var ge=function(e){var t=e.index,a=e.workflow,l=a.name,o=a.nodes,s="COMPLETED"===a.state&&o.length>1,i=Object(c.b)(),u=Object(n.useCallback)((function(e){Ne(i,t,e.target.value)}),[i,t]);return r.a.createElement("div",{className:"workflow-header"},r.a.createElement("input",{className:"workflow-name-text",type:"text",defaultValue:l,onBlur:u}),r.a.createElement(ve,{index:t,nodesCount:o.length,allowShuffle:s}))};a(49);function he(e,t,a){e(function(e,t){return{type:A,workflowIndex:e,nodeIndex:t}}(t,a))}function ye(e,t,a,n){var r=n.target,l={};l[r.dataset.key]=r.textContent,e(function(e,t,a){return{type:J,workflowIndex:e,nodeIndex:t,data:a}}(t,a,l))}var je=function(e){var t=e.workflowIndex,a=e.nodeIndex,l=e.node,o=l.title,s=l.content,i=l.state,u=Object(c.b)(),d=Object(n.useCallback)(he.bind(null,u,t,a),[u,a,t]),f=Object(n.useCallback)((function(e){return ye(u,t,a,e)}),[u,a,t]);return r.a.createElement("div",{className:"workflow-node"},r.a.createElement("div",{className:"node-state-icon ".concat(i.toLowerCase()).concat("COMPLETED"!==i?" cursor-pointer":""),onClick:"COMPLETED"!==i?d:$},r.a.createElement(x.b,null)),r.a.createElement("div",{className:"title","data-key":"title",contentEditable:!0,onBlur:f},o),r.a.createElement("div",{className:"content","data-key":"content",contentEditable:!0,onBlur:f},s))};a(50);var Se=function(e){var t=e.workflowIndex,a=e.workflow.nodes;return r.a.createElement("div",{className:"nodes-list display-flex"},a.map((function(e,a){return r.a.createElement(je,{key:a,node:e,workflowIndex:t,nodeIndex:a})})))};function xe(e,t){"update-error"===t?e(Q({type:"error",message:"This task can not be completed as the previous tasks are not done.",timeout:5e3})):"delete-success"===t?e(Q({type:"success",message:"The last task of this workflow has been deleted successfully.",timeout:4e3})):"saved-success"===t&&e(Q({type:"success",message:"The workflow has been saved successfully.",timeout:3e3})),e(H())}var Te=function(e){var t=e.match,a=Number(t.params.index),l=Object(c.b)(),o=Object(n.useCallback)(xe.bind(null,l),[]),s=Object(c.c)((function(e){return e.workflow})),i=s.workflows,u=s.updateStateErr,d=s.nodeRemoved,f=s.saved,m=i[a];return Object(n.useEffect)((function(){l(q("fromPersist"))}),[l]),Object(n.useEffect)((function(){u?o("update-error"):d?o("delete-success"):f&&o("saved-success")}),[f,d,u,o]),m?r.a.createElement("div",{className:"workflow"},r.a.createElement(ge,{workflow:m,index:a}),r.a.createElement(Se,{workflow:m,workflowIndex:a})):null};a(51),a(52),a(53);function Le(e){e(Q(null))}var Ce=function(){var e=Object(c.c)((function(e){return e.message.data}))||{},t=e.message,a=e.type,l=e.timeout,o=Object(c.b)(),s=Object(n.useCallback)(Le.bind(null,o),[]);return Object(n.useEffect)((function(){setTimeout(s,l)}),[s,l]),t?r.a.createElement("div",{className:"growl growl-".concat(a)},t):null};var De=function(){return r.a.createElement(S.a,{basename:"/Workflow-System"},r.a.createElement("div",{className:"app-container"},r.a.createElement(Y,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:function(e){return r.a.createElement(ae,e)}}),r.a.createElement(j.a,{exact:!0,path:"/workflows",component:function(e){return r.a.createElement(we,e)}}),r.a.createElement(j.a,{exact:!0,path:"/workflows/:index",component:function(e){return r.a.createElement(Te,e)}})),r.a.createElement(Ce,null)))},Re=function(){var e=Object(i.a)(),t=[e],a=Object(s.d)(s.a.apply(void 0,t)),n=Object(s.e)(k,a);return e.run(y),n}();o.a.render(r.a.createElement(c.a,{store:Re},r.a.createElement(De,null)),document.querySelector(".container"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1874fc84.chunk.js.map