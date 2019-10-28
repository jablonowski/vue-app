(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],p=0,m=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"small-container",attrs:{id:"app"}},[n("h1",[e._v("Employees")]),n("employee-form",{on:{"add:employee":e.addEmployee}}),n("employee-table",{attrs:{employees:e.employees},on:{"delete:employee":e.deleteEmployee}})],1)},i=[],a=(n("99af"),n("4de4"),n("d81d"),n("d3b7"),n("284c")),s=(n("96cf"),n("89ba")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[e.employees.length<1?n("p",{staticClass:"empty-table"},[e._v("No employees")]):n("table",[e._m(0),n("tbody",e._l(e.employees,(function(t){return n("tr",{key:t.id},[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"employee.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"employee.email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{on:{click:function(n){return e.editEmployee(t)}}},[e._v("Save")]),n("button",{staticClass:"muted-button",on:{click:function(n){return e.cancelEdit(t)}}},[e._v("Cancel")])]):n("td",[n("button",{on:{click:function(n){return e.editMode(t)}}},[e._v("Edit")]),n("button",{on:{click:function(n){return e.$emit("delete:employee",t.id)}}},[e._v("Delete")])])])})),0)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Employee name")]),n("th",[e._v("Employee email")]),n("th",[e._v("Actions")])])])}],u=(n("b0c0"),{name:"employee-table",props:{employees:Array},data:function(){return{editing:null}},methods:{editMode:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},cancelEdit:function(e){Object.assign(e,this.cachedEmployee),this.editing=null},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)}}}),p=u,m=(n("dbab"),n("2877")),d=Object(m["a"])(p,c,l,!1,null,"069acf61",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",[e._v("Employee name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],ref:"first",class:{"has-error":e.submitting&&e.invalidName},attrs:{type:"text"},domProps:{value:e.employee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),n("label",[e._v("Employee Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],class:{"has-error":e.submitting&&e.invalidEmail},attrs:{type:"text"},domProps:{value:e.employee.email},on:{focus:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v("❗Please fill out all required fields")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v("✅ Employee successfully added")]):e._e(),n("button",[e._v("Add Employee")])])])},y=[],v={name:"employee-form",methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.employee={name:"",email:""},this.$refs.first.focus(),this.error=!1,this.success=!0,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}},computed:{invalidName:function(){return""===this.employee.name},invalidEmail:function(){return""===this.employee.email}},data:function(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}}},b=v,g=(n("8770"),Object(m["a"])(b,h,y,!1,null,"2b9b513c",null)),_=g.exports,E={name:"app",components:{EmployeeTable:f,EmployeeForm:_},methods:{getEmployees:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.employees=n,e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),addEmployee:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,this.employees=[].concat(Object(a["a"])(this.employees),[r]),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),deleteEmployee:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(t),{method:"DELETE"});case 3:this.employees=this.employees.filter((function(e){return e.id!==t})),e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}(),editEmployee:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(t),{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,this.employees=this.employees.map((function(e){return e.id===t?o:e})),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,n){return e.apply(this,arguments)}return t}()},data:function(){return{employees:[]}},mounted:function(){this.getEmployees()}},x=E,j=(n("034f"),Object(m["a"])(x,o,i,!1,null,null,null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},7692:function(e,t,n){},"85ec":function(e,t,n){},8770:function(e,t,n){"use strict";var r=n("c42d"),o=n.n(r);o.a},c42d:function(e,t,n){},dbab:function(e,t,n){"use strict";var r=n("7692"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7ffaea4b.js.map