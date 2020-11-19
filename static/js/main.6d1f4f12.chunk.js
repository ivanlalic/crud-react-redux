(this.webpackJsonpcrudredux=this.webpackJsonpcrudredux||[]).push([[0],{47:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),o=c(20),s=c.n(o),u=(c(47),c(13)),l=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar dark bg-primary justify-content-between",children:[Object(n.jsx)("div",{className:"cotainer",children:Object(n.jsx)("h1",{children:Object(n.jsx)(u.b,{to:"/",className:"text-light",children:"CRUD - React, REDUX, REST API & Axios"})})}),Object(n.jsx)(u.b,{to:"/products/new",className:"btn btn-danger nuevo-post d-block d-md-inline-block",children:"Add product +"})]})},i=c(4),d=c(15),b=c.n(d),j=c(5),p=c(11),O=c.n(p),f=c(19),h="ADD_PRODUCT",m="ADD_PRODUCT_OK",x="ADD_PRODUCT_ERROR",v="START_LOADING_PRODUCTS",y="LOADING_PRODUCTS_OK",g="LOADING_PRODUCTS_ERROR",N="GET_PRODUCT_DELETE",D="PRODUCT_DELETE_OK",E="PRODUCT_DELETE_ERROR",_="GET_PRODUCT_EDIT",T="PRODUCT_EDIT_OK",R="PRODUCT_EDIT_ERROR",w="SHOW_ALERT",P="HIDE_ALERT",C=c(39),S=c.n(C).a.create({baseURL:"https://my-json-server.typicode.com/ivanlalic/crud-react-redux-db"});var k=function(){return{type:h,payload:!0}},A=function(e){return{type:m,payload:e}},U=function(e){return{type:x,payload:e}};var L=function(){return{type:v,payload:!0}},I=function(e){return{type:y,payload:e}},B=function(){return{type:g,payload:!0}};var F=function(e){return{type:N,payload:e}},G=function(){return{type:D}},X=function(){return{type:E,payload:!0}};var K=function(e){return{type:_,payload:e}};var Y=function(){return{type:"START_PRODUCT_EDIT"}},H=function(e){return{type:T,payload:e}},J=function(){return{type:R,payload:!0}},V=function(e){var t=e.product,c=t.name,r=t.id,a=t.price,o=Object(j.b)(),s=Object(i.f)(),u=function(e){b.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then((function(t){t.isConfirmed&&o(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(F(e)),t.prev=1,t.next=4,S.delete("/products/".concat(e));case 4:c(G()),b.a.fire("Deleted!","Your file has been deleted.","success"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),c(X());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}))},l=function(e){o(function(e){return function(t){t(K(e))}}(e)),s.push("/products/edit/".concat(e.id))};return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:Object(n.jsxs)("span",{className:"font-weight-bold",children:["$",a]})}),Object(n.jsxs)("td",{className:"acciones",children:[Object(n.jsx)("button",{type:"button",onClick:function(){return l(t)},className:"btn btn-primary mr-2",children:"Edit"}),Object(n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return u(r)},children:"Delete"})]})]})},q=function(){var e=Object(j.b)();Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L()),e.prev=1,e.next=4,S.get("/products");case 4:c=e.sent,t(I(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(B());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(j.c)((function(e){return e.products.products})),c=Object(j.c)((function(e){return e.products.error})),a=Object(j.c)((function(e){return e.products.loading}));return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h2",{className:"text-center my-5",children:"Products List"}),c?Object(n.jsx)("p",{className:"font-weight-bold alert alert-danger text-center mt-4",children:"Error"}):null,a?Object(n.jsx)("p",{className:"text-center",children:"Loading..."}):null,Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{className:"bg-primary table-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Price"}),Object(n.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(n.jsx)("tbody",{children:0===t.length?"No products":t.map((function(e){return Object(n.jsx)(V,{product:e},e.id)}))})]})]})},M=c(18);var W=function(e){return{type:w,payload:e}};var $=function(){return{type:P}},z=function(e){var t=e.history,c=Object(r.useState)(""),a=Object(M.a)(c,2),o=a[0],s=a[1],u=Object(r.useState)(0),l=Object(M.a)(u,2),i=l[0],d=l[1],p=Object(j.b)(),h=Object(j.c)((function(e){return e.products.loading})),m=Object(j.c)((function(e){return e.products.error})),x=Object(j.c)((function(e){return e.alert.alert})),v=function(e){return p(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(k()),t.prev=1,t.next=4,S.post("/products",e);case 4:c(A(e)),b.a.fire("Correct","Product added succesully","success"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),c(U(!0)),b.a.fire({icon:"error",title:"Error",text:"Try again"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"text-center mb-4 font-weight-bold",children:"Add New Product"}),x?Object(n.jsx)("p",{className:x.classes,children:x.msg}):null,Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim()||i<=0){p(function(e){return function(t){t(W(e))}}({msg:"All fields are required",classes:"alert alert-danger text-center text-uppercase p3"}))}else p((function(e){e($())})),v({name:o,price:i}),t.push("/")},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Product name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Product name",name:"name",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Product Price"}),Object(n.jsx)("input",{type:"number",className:"form-control",placeholder:"Product price",name:"price",value:i,onChange:function(e){return d(Number(e.target.value))}})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100",children:"Add"})]}),h?Object(n.jsx)("p",{children:"Loading..."}):null,m?Object(n.jsx)("p",{className:"alert alert-danger p2 mt-4 text-center",children:"Error"}):null]})})})})},Q=c(23),Z=c(3),ee=function(){var e=Object(i.f)(),t=Object(j.b)(),c=Object(r.useState)({name:"",price:""}),a=Object(M.a)(c,2),o=a[0],s=a[1],u=Object(j.c)((function(e){return e.products.editproduct}));Object(r.useEffect)((function(){s(u)}),[u]);var l=function(e){s(Object(Z.a)(Object(Z.a)({},o),{},Object(Q.a)({},e.target.name,e.target.value)))},d=o.name,b=o.price;return Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"text-center mb-4 font-weight-bold",children:"Edit Product"}),Object(n.jsxs)("form",{onSubmit:function(c){c.preventDefault(),t(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(Y(e)),t.prev=1,t.next=4,S.put("/products/".concat(e.id),e);case 4:c(H(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),c(J());case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(o)),e.push("/")},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Product name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Product name",name:"name",value:d,onChange:l})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Product Price"}),Object(n.jsx)("input",{type:"number",className:"form-control",placeholder:"Product price",name:"price",value:b,onChange:l})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100",children:"Save"})]})]})})})})},te=c(12),ce=c(40),ne=c(41),re={products:[],error:null,loading:!1,deleteproduct:null,editproduct:null};var ae={alert:null};var oe=Object(te.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case h:return Object(Z.a)(Object(Z.a)({},e),{},{loading:t.payload});case m:return Object(Z.a)(Object(Z.a)({},e),{},{loading:!1,products:[].concat(Object(ne.a)(e.products),[t.payload])});case x:case g:case E:case R:return Object(Z.a)(Object(Z.a)({},e),{},{loading:!1,error:t.payload});case y:return Object(Z.a)(Object(Z.a)({},e),{},{products:t.payload,loading:!1,error:null});case N:return Object(Z.a)(Object(Z.a)({},e),{},{deleteproduct:t.payload});case D:return Object(Z.a)(Object(Z.a)({},e),{},{products:e.products.filter((function(t){return t.id!==e.deleteproduct})),deleteproduct:null});case _:return Object(Z.a)(Object(Z.a)({},e),{},{editproduct:t.payload});case T:return Object(Z.a)(Object(Z.a)({},e),{},{editproduct:null,products:e.products.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(Z.a)(Object(Z.a)({},e),{},{alert:t.payload});case P:return Object(Z.a)(Object(Z.a)({},e),{},{alert:null});default:return e}}}),se=Object(te.e)(oe,Object(te.d)(Object(te.a)(ce.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));var ue=function(){return Object(n.jsx)(u.a,{children:Object(n.jsxs)(j.a,{store:se,children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"container mt-5",children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{exact:!0,path:"/",component:q}),Object(n.jsx)(i.a,{exact:!0,path:"/products/new",component:z}),Object(n.jsx)(i.a,{exact:!0,path:"/products/edit/:id",component:ee})]})})]})})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ue,{})}),document.getElementById("root")),le()}},[[71,1,2]]]);
//# sourceMappingURL=main.6d1f4f12.chunk.js.map