(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),o=n(1),i=n.n(o),u=n(2),l=n(3),p=n(4),m=n(6),d=n(5),f=n(7);n(17);var h=function(e){var t=e.user;return r.a.createElement("div",{className:"userBox"},r.a.createElement("h4",null,t.name,"|"),r.a.createElement("p",null,"E-mail:",t.email,"|"),r.a.createElement("p",null,"Address:",t.address.city,",",t.address.street))};var v=function(e){var t=e.comment;return e.isActive?r.a.createElement("div",{className:"comment"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.body),r.a.createElement("span",null,t.email)):null},b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isActive:!1},n.showComments=function(e){n.setState(function(e){return{isActive:!e.isActive}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.post,a=t.users,s=t.comments,c=this.state.isActive,o=a.find(function(e){return e.id===n.userId}),i=r.a.createElement(h,{key:o.id,user:o}),u=s.filter(function(e){return e.postId===n.id}).map(function(e){return r.a.createElement(v,{key:e.id,comment:e,isActive:c})});return r.a.createElement("div",{className:"post"},r.a.createElement("h3",null,n.title),r.a.createElement("p",null,n.body),i,r.a.createElement("button",{type:"button",className:"commentButton",onClick:function(){return e.showComments(n.id)}},"Comments"),r.a.createElement("hr",null),u)}}]),t}(r.a.Component),y=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,n=t.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/posts",e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,n=t.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/comments",e.next=3,fetch("https://jsonplaceholder.typicode.com/comments");case 3:return t=e.sent,n=t.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],posts:[],visiblePosts:[],comments:[],inputText:"",isLoaded:!1,isLoading:!1},n.loadData=Object(u.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,y();case 3:return t=e.sent,e.next=6,E();case 6:return a=e.sent,e.next=9,j();case 9:r=e.sent,n.setState({users:t,posts:a,visiblePosts:a,comments:r,isLoaded:!0,isLoading:!1});case 11:case"end":return e.stop()}},e)})),n.checkPostInfo=function(e,t){return e&&e.toLowerCase().includes(t.toLowerCase())},n.inputFilter=function(e){var t=e.target.value;n.setState(function(e){return{inputText:t,visiblePosts:e.posts.filter(function(e){var a=e.title+e.body;return n.checkPostInfo(a,t)})}})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.visiblePosts,s=t.comments,c=t.isLoaded,o=t.isLoading,i=t.inputText,u=a.map(function(e){return r.a.createElement(b,{key:e.id,post:e,users:n,comments:s})});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Dynamic list of posts"),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",className:"inputFilter",value:i,onChange:this.inputFilter,placeholder:"Find your post"}),u):r.a.createElement("button",{type:"button",className:"loadButton",disabled:o,onClick:function(){return e.loadData()}},o?"Loading...":"Load"))}}]),t}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.1480e868.chunk.js.map