!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LiquorTree=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=' .tree-node { white-space: nowrap; display: flex; flex-direction: column; position: relative; box-sizing: border-box; } .tree-content { display: flex; align-items: center; padding: 4px; cursor: pointer; width: 100%; box-sizing: border-box; } .tree-node:not(.selected) > .tree-content:hover { background: #f6f8fb; } .tree-node.selected > .tree-content { background-color: #e7eef7; } .tree-node.disabled > .tree-content:hover { background: inherit; } .tree-arrow { display: inline-block; height: 30px; cursor: pointer; margin-left: 30px; width: 0; } .tree-arrow.has-child { margin-left: 0; width: 30px; position: relative; } .tree-arrow.has-child:after { border: 1.5px solid #494646; position: absolute; border-left: 0; border-top: 0; left: 9px; top: 50%; height: 9px; width: 9px; transform: rotate(-45deg) translateY(-50%) translateX(0); transition: transform .25s; transform-origin: center; } .tree-arrow.expanded.has-child:after { transform: rotate(45deg) translateY(-50%) translateX(-5px); } .tree-checkbox { display: inline-block; position: relative; width: 30px; height: 30px; box-sizing: border-box; border: 1px solid #dadada; border-radius: 2px; background: #fff; transition: border-color .25s, background-color .25s; } .tree-checkbox:after, .tree-arrow:after { position: absolute; display: block; content: ""; } .tree-checkbox.checked, .tree-checkbox.indeterminate { background-color: #3a99fc; border-color: #218eff; } .tree-checkbox.checked:after { box-sizing: content-box; border: 1.5px solid #fff; /* probably width would be rounded in most cases */ border-left: 0; border-top: 0; left: 9px; top: 3px; height: 15px; width: 8px; transform: rotate(45deg) scaleY(0); transition: transform .25s; transform-origin: center; } .tree-checkbox.checked:after { transform: rotate(45deg) scaleY(1); } .tree-checkbox.indeterminate:after { background-color: #fff; top: 50%; left: 20%; right: 20%; height: 2px; } .tree-anchor { flex-grow: 2; outline: none; display: flex; text-decoration: none; color: #343434; vertical-align: top; margin-left: 3px; line-height: 24px; padding: 3px 6px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .tree-node.selected .tree-anchor { outline: none; } .tree-node.disabled .tree-anchor { color: #989191; background: #fff; opacity: .6; cursor: default; outline: none; } .l-fade-enter-active, .l-fade-leave-active { transition: opacity .3s, transform .3s; transform: translateX(0); } .l-fade-enter, .l-fade-leave-to { opacity: 0; transform: translateX(-2em); } .tree--small .tree-anchor { line-height: 19px; } .tree--small .tree-checkbox { width: 23px; height: 23px; } .tree--small .tree-arrow { height: 23px; } .tree--small .tree-checkbox.checked:after { left: 7px; top: 3px; height: 11px; width: 5px; } ';t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var e={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"tree-node",class:e.nodeClass},[n("div",{staticClass:"tree-content",style:{"padding-left":e.paddingLeft},on:{mouseup:e.select,touchend:e.select}},[n("i",{staticClass:"tree-arrow",class:{expanded:e.node.states.expanded,"has-child":e.node.children.length},on:{click:function(t){t.stopPropagation(),e.toggleExpand(t)}}}),e._v(" "),e.options.checkbox?n("i",{staticClass:"tree-checkbox",class:{checked:e.node.states.checked,indeterminate:e.node.states.indeterminate},on:{click:function(t){t.stopPropagation(),e.check(t)}}}):e._e(),e._v(" "),n("a",{ref:"anchor",staticClass:"tree-anchor",attrs:{href:"javascript:void(0)",tabindex:"1"},on:{focus:e.onNodeFocus}},[n("node-content",{attrs:{node:e.node}})],1)]),e._v(" "),n("transition",{attrs:{name:"l-fade"}},[e.hasChildren()&&e.state.expanded?n("ul",{staticClass:"tree-children"},e._l(e.node.children,function(t){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()})):e._e()])],1)},staticRenderFns:[],name:"Node",inject:["tree"],props:["node","options"],components:{NodeContent:{props:["node"],render:function(e){var t=this.node,n=this.node.tree.vm;return n.$scopedSlots.default?n.$scopedSlots.default({node:this.node}):e("span",{domProps:{innerHTML:t.text}})}}},data:function(){return this.node.vm=this,{state:this.node.states}},computed:{paddingLeft:function(){return this.node.depth*this.options.paddingLeft+"px"},nodeClass:function(){var e=this.state,t=this.hasChildren(),n={"has-child":t,expanded:t&&e.expanded,selected:e.selected,disabled:e.disabled};return this.options.checkbox&&(n.checked=e.checked,n.indeterminate=e.indeterminate),n}},methods:{onNodeFocus:function(){this.tree.activeElement=this.node},focus:function(){this.$refs.anchor.focus(),this.node.select()},check:function(){this.node.checked()?this.node.uncheck():this.node.check()},select:function(e){void 0===e&&(e=evnt);var t=e.ctrlKey,n=this.options;if(n.checkbox&&n.checkOnSelect)return!n.parentSelect&&this.hasChildren()?this.toggleExpand():this.check(t);if(!n.parentSelect&&this.hasChildren())return this.toggleExpand();var r=this.tree,i=this.node;n.multiple?i.selected()?t?i.unselect():(r.unselectAll(),i.select()):i.select(t):i.selected()?i.unselect():i.select()},toggleExpand:function(){this.hasChildren()&&this.node.toggleExpand()},hasChildren:function(){return this.node.hasChildren()}}};function t(e,n){var r;return Array.isArray(e)?e.map(function(e){return t(e,n)}):(!1!==(r=n(e))&&e.hasChildren()&&(r=t(e.children,n)),r)}var n=document.createElement("div");function r(e){return function(t){return Object.keys(e).every(function(r){var i=t[r],o=function(e){if(e instanceof RegExp)return e;return new RegExp("^"+e+"$","g")}(e[r]);if("states"==r){var s=e[r];return Object.keys(s).every(function(e){return t[r][e]===s[e]})}return"text"==r&&(n.innerHTML=i,i=n.innerText),o.test(i)})}}function i(e,t,n){if(void 0===n&&(n=!0),!e||!e.length)return null;if(n&&(e=function(e){var t=[];return e.forEach(function e(n){t.push(n),n.children&&n.children.forEach(e)}),t}(e)),"number"==typeof t)return e[t]||null;("string"==typeof t||t instanceof RegExp)&&(t={text:t}),"function"!=typeof t&&(t=r(t));var i=e.filter(t);return i.length?i:null}var o=function(e,t){if(this.id=t.id,this.states=t.state,this.children=t.children||[],this.parent=t.parent||null,this._data=Object.assign({},{text:t.text},t.data||{}),!e)throw new Error("Node must has a Tree context!");this.tree=e},s={depth:{configurable:!0},text:{configurable:!0}};function c(e,t){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];e.forEach(function(e){return e[t].apply(e,n)})}o.prototype.$emit=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.tree).$emit.apply(t,["node:"+e,this].concat(n))},s.depth.get=function(){var e=0,t=this.parent;if(!t)return e;do{e++}while(t=t.parent);return e},s.text.get=function(){return this.data("text")},s.text.set=function(e){var t=this.text;this.data("text",e),this.tree.$emit("node:text:changed",e,t)},o.prototype.data=function(e,t){return void 0===t?this._data[e]:(this._data[e]=t,this)},o.prototype.state=function(e,t){return void 0===t?this.states[e]:(this.states[e]=t,this)},o.prototype.recurseUp=function(e,t){if(void 0===t&&(t=this),t.parent)return!1!==e(t.parent)?this.recurseUp(e,t.parent):void 0},o.prototype.recurseDown=function(e,n){!0!==n&&e(this),this.hasChildren()&&t(this.children,e)},o.prototype.refreshIndeterminateState=function(){if(!this.tree.options.autoCheckChildren)return this;if(this.state("indeterminate",!1),this.hasChildren()){var e=this.children.length,t=0,n=0,r=0;this.children.forEach(function(e){e.checked()&&t++,e.disabled()&&r++,e.indeterminate()&&n++}),t==e-r?this.checked()||(this.state("checked",!0),this.$emit("checked")):(this.checked()&&(this.state("checked",!1),this.$emit("unchecked")),this.state("indeterminate",n>0||t>0&&t<e))}this.parent&&this.parent.refreshIndeterminateState()},o.prototype.indeterminate=function(){return this.state("indeterminate")},o.prototype.selectable=function(){return!this.state("disabled")&&this.state("selectable")},o.prototype.selected=function(){return this.state("selected")},o.prototype.select=function(e){return!this.selectable()||this.selected()?this:(this.tree.select(this,e),this.state("selected",!0),this.$emit("selected"),this)},o.prototype.unselect=function(){return this.selectable()&&this.selected()?(this.tree.unselect(this),this.state("selected",!1),this.$emit("unselected"),this):this},o.prototype.checked=function(){return this.state("checked")},o.prototype.check=function(){var e=this;return this.checked()||this.disabled()?this:this.indeterminate()?this.uncheck():(this.tree.options.autoCheckChildren?(this.recurseDown(function(t){t.state("indeterminate",!1),t.checked()||(e.tree.check(t),t.state("checked",!0),t.$emit("checked"))}),this.parent&&this.parent.refreshIndeterminateState()):(this.tree.check(this),this.state("checked",!0),this.$emit("checked")),this)},o.prototype.uncheck=function(){var e=this;return!this.indeterminate()&&!this.checked()||this.disabled()?this:(this.tree.options.autoCheckChildren?(this.recurseDown(function(t){t.state("indeterminate",!1),t.checked()&&(e.tree.uncheck(t),t.state("checked",!1),t.$emit("unchecked"))}),this.parent&&this.parent.refreshIndeterminateState()):(this.tree.uncheck(this),this.state("checked",!1),this.$emit("unchecked")),this)},o.prototype.show=function(){return this.visible()?this:(this.state("visible",!0),this.$emit("shown"),this)},o.prototype.hide=function(){return this.hidden()?this:(this.state("visible",!1),this.$emit("hidden"),this)},o.prototype.visible=function(){return this.state("visible")},o.prototype.hidden=function(){return!this.state("visible")},o.prototype.enable=function(){return this.enabled()?this:(this.recurseDown(function(e){e.disabled()&&(e.state("disabled",!1),e.$emit("enabled"))}),this)},o.prototype.enabled=function(){return!this.state("disabled")},o.prototype.disable=function(){return this.disabled()?this:(this.recurseDown(function(e){e.enabled()&&(e.state("disabled",!0),e.$emit("disabled"))}),this)},o.prototype.disabled=function(){return this.state("disabled")},o.prototype.expand=function(){return!this.hasChildren()||this.expanded()||this.disabled()?this:(this.state("expanded",!0),this.$emit("expanded"),this)},o.prototype.expanded=function(){return this.state("expanded")},o.prototype.collapse=function(){return!this.hasChildren()||this.collapsed()||this.disabled()?this:(this.state("expanded",!1),this.$emit("collapsed"),this)},o.prototype.collapsed=function(){return!this.state("expanded")},o.prototype.toggleExpand=function(){return this._toggleOpenedState()},o.prototype.toggleCollapse=function(){return this._toggleOpenedState()},o.prototype._toggleOpenedState=function(){return this.disabled()||!this.hasChildren()?this:this.expanded()?this.collapse():this.expand()},o.prototype.index=function(e){return this.tree.index(this,e)},o.prototype.first=function(){return this.hasChildren()?this.children[0]:null},o.prototype.last=function(){return this.hasChildren()?this.children[this.children.length-1]:null},o.prototype.next=function(){return this.tree.nextNode(this)},o.prototype.prev=function(){return this.tree.prevNode(this)},o.prototype.insertAt=function(e,t){return void 0===t&&(t=this.children.length),(e=this.tree.objectToNode(e)).parent=this,this.children.splice(t,0,e),this.$emit("added",e),e},o.prototype.addChild=function(e){return this.insertAt(e)},o.prototype.append=function(e){return this.addChild(e)},o.prototype.prepend=function(e){return this.insertAt(e,0)},o.prototype.before=function(e){return this.tree.before(this,e)},o.prototype.after=function(e){return this.tree.after(this,e)},o.prototype.empty=function(){for(var e;e=this.children.pop();)e.remove();return this},o.prototype.remove=function(){return this.tree.removeNode(this)},o.prototype.removeChild=function(e){var t=this.find(e);return t?this.tree.removeNode(t):null},o.prototype.find=function(e,t){return e instanceof o?e:i(this.children,e,t)},o.prototype.focus=function(){this.vm&&this.vm.focus()},o.prototype.hasChildren=function(){return this.children.length>0},o.prototype.isRoot=function(){return null===this.parent},Object.defineProperties(o.prototype,s);var d=function(e){function t(t,n){var r;e.call(this),this.tree=t,(r=this).push.apply(r,n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.remove=function(){return c(this,"remove"),this},t.prototype.expand=function(){return c(this,"expand"),this},t.prototype.collapse=function(){return c(this,"collapse"),this},t.prototype.select=function(e){return c(this,"select",e),this},t.prototype.unselect=function(){return c(this,"unselect"),this},t.prototype.check=function(){return this.tree.options.checkbox&&c(this,"check"),this},t.prototype.uncheck=function(){return this.tree.options.checkbox&&c(this,"uncheck"),this},t}(Array);function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function h(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}var p={selected:!1,selectable:!0,checked:!1,expanded:!1,disabled:!1,visible:!0,indeterminate:!1};function l(e){return void 0===e&&(e={}),Object.assign({},p,e)}function u(e,t){var n=null;return t instanceof o?t:("string"==typeof t?n=new o(e,{text:t,state:l(),id:h()}):((n=new o(e,t)).states=l(n.states),n.id||(n.id=h()),n.children.length&&(n.children=n.children.map(function(t){return(t=u(e,t)).parent=n,t}))),n)}var f=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.empty=function(){return this.splice(0,this.length),this},t.prototype.add=function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];return(e=this).push.apply(e,t),this},t.prototype.remove=function(e){var t=this.indexOf(e);return-1==t?this:(this.splice(t,1),this)},t.prototype.removeAll=function(e){for(;this.includes(e);)this.remove(e);return this},t.prototype.top=function(){return this[this.length-1]},t}(Array),m={id:"id",text:"text",children:"children",state:"state",data:"data"};var y=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[e]);var r=Object.assign({},m,n);return e.map(function e(t){var n,i,o={id:(n=t)[(i=r).id],text:n[i.text],children:n[i.children],state:n[i.state],data:n[i.data]};return o.children&&!Array.isArray(o.children)&&(o.children=[o.children]),o.children&&(o.children=o.children.map(e)),o}).map(function(e){return u(t,e)})},x=function(e){this.vm=e,this.options=e.options,this.activeElement=null};x.prototype.$on=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$on.apply(t,[e].concat(n))},x.prototype.$once=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$once.apply(t,[e].concat(n))},x.prototype.$off=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$off.apply(t,[e].concat(n))},x.prototype.$emit=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$emit.apply(t,[e].concat(n))},x.prototype.selected=function(){return new(Function.prototype.bind.apply(d,[null].concat([this],this.selectedNodes)))},x.prototype.checked=function(){return this.options.checkbox?new(Function.prototype.bind.apply(d,[null].concat([this],this.checkedNodes))):null},x.prototype.setModel=function(e){var n=this;if(this.model=e,this.selectedNodes=new f,this.checkedNodes=new f,t(e,function(e){e.tree=n,e.selected()&&n.selectedNodes.add(e),e.checked()&&(n.checkedNodes.add(e),e.parent&&e.parent.refreshIndeterminateState())}),!this.options.multiple&&this.selectedNodes.length){var r=this.selectedNodes.top();this.selectedNodes.forEach(function(e){r!==e&&e.state("selected",!1)}),this.selectedNodes.empty().add(r)}this.options.checkOnSelect&&this.options.checkbox&&this.unselectAll()},x.prototype.recurseDown=function(e,n){return!n&&e&&(n=e,e=this.model),t(e,n)},x.prototype.select=function(e,t){var n=this.getNode(e);return!!n&&(this.options.multiple&&t?this.selectedNodes.add(n):(this.unselectAll(),this.selectedNodes.empty().add(n)),!0)},x.prototype.selectAll=function(){var e=this;return!!this.options.multiple&&(this.selectedNodes.empty(),this.recurseDown(function(t){e.selectedNodes.add(t.select(!0))}),!0)},x.prototype.unselect=function(e){var t=this.getNode(e);return!!t&&(this.selectedNodes.remove(t),!0)},x.prototype.unselectAll=function(){for(var e;e=this.selectedNodes.pop();)e.unselect();return!0},x.prototype.check=function(e){this.checkedNodes.add(e)},x.prototype.uncheck=function(e){this.checkedNodes.remove(e)},x.prototype.checkAll=function(){this.recurseDown(function(e){0==e.depth&&(e.indeterminate()&&e.state("indeterminate",!1),e.check())})},x.prototype.uncheckAll=function(){for(var e;e=this.checkedNodes.pop();)e.uncheck();return!0},x.prototype.expand=function(e){return!e.expanded()&&(e.expand(),!0)},x.prototype.collapse=function(e){return!e.collapsed()&&(e.collapse(),!0)},x.prototype.toggleExpand=function(e){return!!e.hasChildren()&&(e.toggleExpand(),!0)},x.prototype.toggleCollapse=function(e){return!!e.hasChildren()&&(e.toggleCollapse(),!0)},x.prototype.expandAll=function(){this.recurseDown(function(e){e.hasChildren()&&e.collapsed()&&e.expand()})},x.prototype.collapseAll=function(){this.recurseDown(function(e){e.hasChildren()&&e.expanded()&&e.collapse()})},x.prototype.index=function(e,t){var n=e.parent,r=(n=n?n.children:this.model).indexOf(e);return t?{index:r,target:n,node:n[r]}:r},x.prototype.nextNode=function(e){var t=this.index(e,!0);return t.target[t.index+1]||null},x.prototype.nextVisibleNode=function(e){if(e.hasChildren()&&e.expanded())return e.first();var t=this.nextNode(e);return!t&&e.parent?e.parent.next():t},x.prototype.prevNode=function(e){var t=this.index(e,!0);return t.target[t.index-1]||null},x.prototype.prevVisibleNode=function(e){var t=this.prevNode(e);return t?t.hasChildren()&&t.expanded()?t.last():t:e.parent},x.prototype.addToModel=function(e,t){var n=this;void 0===t&&(t=this.model.length),e=this.objectToNode(e),this.model.splice(t,0,e),this.recurseDown(e,function(e){e.tree=n}),this.$emit("node:added",e)},x.prototype.append=function(e,t){var n=this.find(e);return!!n&&n.append(t)},x.prototype.prepend=function(e,t){var n=this.find(e);return!!n&&n.prepend(t)},x.prototype.before=function(e,t){e=this.find(e);var n=this.index(e,!0),r=this.objectToNode(t);return!!~n.index&&(n.target.splice(n.index,0,r),this.$emit("node:added",r),t)},x.prototype.after=function(e,t){e=this.find(e);var n=this.index(e,!0),r=this.objectToNode(t);return!!~n.index&&(n.target.splice(n.index+1,0,r),this.$emit("node:added",r),t)},x.prototype.addNode=function(e){var t=this.model.length;return e=u(e),this.model.splice(t,0,e),this.$emit("node:added",e),e},x.prototype.remove=function(e,t){return this.removeNode(this.find(e,t))},x.prototype.removeNode=function(e){if(e instanceof d)return e.remove();if(!e)return!1;if(e.parent){var t=e.parent.children;~t.indexOf(e)&&t.splice(t.indexOf(e),1)}else~this.model.indexOf(e)&&this.model.splice(this.model.indexOf(e),1);return e.parent&&e.parent.indeterminate()&&!e.parent.hasChildren()&&e.parent.state("indeterminate",!1),e.parent=null,this.$emit("node:removed",e),this.selectedNodes.remove(e),this.checkedNodes.remove(e),e},x.prototype.isNode=function(e){return e instanceof o},x.prototype.find=function(e,t){if(e instanceof o)return e;var n=i(this.model,e);return n&&n.length?new d(this,!0===t?n:[n[0]]):null},x.prototype.getNode=function(e){return e instanceof o?e:null},x.prototype.objectToNode=function(e){return u(this,e)},x.prototype.parse=function(e,t){t||(t=this.options.propertyNames);try{return y(e,this,t)}catch(e){return console.error(e),[]}};var v={ARROW_LEFT:37,ARROW_TOP:38,ARROW_RIGHT:39,ARROW_BOTTOM:40,SPACE:32,DELETE:46},b=[37,38,39,40,32];function g(e){e.vm.$el.addEventListener("keydown",function(t){var n=t.keyCode,r=e.activeElement;if(e.isNode(r))switch(b.includes(n)&&(t.preventDefault(),t.stopPropagation()),n){case v.ARROW_LEFT:return function(e,t){if(t.expanded())t.collapse();else{var n=t.parent;n&&n.focus()}}(0,r);case v.ARROW_RIGHT:return function(e,t){if(t.collapsed())t.expand();else{var n=t.first();n&&n.focus()}}(0,r);case v.ARROW_TOP:return function e(t,n){var r=t.prevVisibleNode(n);if(r)return r.disabled()?e(t,r):void r.focus()}(e,r);case v.ARROW_BOTTOM:return function e(t,n){var r=t.nextVisibleNode(n);if(r)return r.disabled()?e(t,r):void r.focus()}(e,r);case v.SPACE:return function(e,t){t.checked()?t.uncheck():t.check()}(0,r);case v.DELETE:return function(e,t){var n=e.options.deletion;n&&("function"==typeof n?!0===n(t)&&t.remove():!0===n&&t.remove())}(e,r)}},!0)}var k={mounted:function(){var e=new x(this);this.model=e.parse(this.data,this.options.modelParse),this.tree=e,this.tree.setModel(this.model),this._provided.tree=e,!1!==this.options.keyboardNavigation&&g(e)},methods:{selected:function(){return this.tree.selected()},checked:function(){return this.tree.checked()},append:function(e,t){return t?this.tree.append(e,t):this.tree.addToModel(e,this.tree.model.length)},prepend:function(e,t){return t?this.tree.prepend(e,t):this.tree.addToModel(e,0)},addChild:function(e,t){return this.append(e,t)},remove:function(e,t){return this.tree.remove(e,t)},before:function(e,t){return t?this.tree.before(e,t):this.prepend(e)},after:function(e,t){return t?this.tree.after(e,t):this.append(e)},find:function(e,t){return this.tree.find(e,t)},findAll:function(e){return this.tree.find(e,!0)},recursiveDown:function(){},expandReqursice:function(){}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree { overflow: auto; } .tree-root, .tree-children { list-style: none; padding: 0; } .tree > .tree-root { padding: 3px; box-sizing: border-box; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var N={multiple:!0,checkbox:!1,checkOnSelect:!1,autoCheckChildren:!0,parentSelect:!1,keyboardNavigation:!0,paddingLeft:24},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree",attrs:{role:"tree"}},[n("ul",{staticClass:"tree-root"},e._l(e.model,function(t){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()}))])},staticRenderFns:[],name:"Tree",components:{node:e},mixins:[k],provide:function(e){return{tree:null}},props:{data:{type:Array,default:function(e){return[]}},options:{type:Object,default:function(e){return{}}}},data:function(){for(var e in N)!1==e in this.options&&(this.options[e]=N[e]);return{model:null,tree:null}}};return w.install=function(e){e.component(w.name,w)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(w),w});
