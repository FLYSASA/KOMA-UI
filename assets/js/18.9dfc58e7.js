(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{507:function(e,t,a){"use strict";var n=a(1),o=a(100),l=a(44),i=a(13),r=a(11),d=a(101),s=a(46),c=a(45),u=a(18),m=c("splice"),v=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,f=Math.min;n({target:"Array",proto:!0,forced:!m||!v},{splice:function(e,t){var a,n,c,u,m,v,h=r(this),y=i(h.length),b=o(e,y),k=arguments.length;if(0===k?a=n=0:1===k?(a=0,n=y-b):(a=k-2,n=f(p(l(t),0),y-b)),y+a-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=d(h,n),u=0;u<n;u++)(m=b+u)in h&&s(c,u,h[m]);if(c.length=n,a<n){for(u=b;u<y-n;u++)v=u+a,(m=u+n)in h?h[v]=h[m]:delete h[v];for(u=y;u>y-n+a;u--)delete h[u-1]}else if(a>n)for(u=y-n;u>b;u--)v=u+a-1,(m=u+n-1)in h?h[v]=h[m]:delete h[v];for(u=0;u<a;u++)h[u+b]=arguments[u+2];return h.length=y-n+a,c}})},583:function(e,t,a){},584:function(e,t,a){},674:function(e,t,a){"use strict";var n=a(583);a.n(n).a},675:function(e,t,a){"use strict";var n=a(584);a.n(n).a},701:function(e,t,a){"use strict";a.r(t);a(507),a(24),a(69),a(102),a(166),a(72),a(504),a(26),a(70);var n={name:"KomaTable",components:{KIcon:a(500).a,Vnodes:{functional:!0,render:function(e,t){return t.props.vnodes}}},props:{dataSource:{type:Array,required:!0,validator:function(e){return!(e.filter((function(e){return void 0===e.id})).length>0)}},numberVisible:{type:Boolean,default:!1},border:{type:Boolean,default:!0},compact:{type:Boolean,default:!1},striped:{type:Boolean,default:!0},checkable:{type:Boolean,default:!1},selectedItems:{type:Array,default:function(){return[]}},orderBy:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1},height:{type:Number},expandKey:{type:String}},data:function(){return{expendedItemKeys:[],columns:[]}},watch:{selectedItems:function(e){e.length>0&&e.length<this.dataSource.length?this.$refs.allCheckBox.indeterminate=!0:(e.length,this.dataSource.length,this.$refs.allCheckBox.indeterminate=!1)},"dataSource.length":function(e){var t=this;this.$nextTick((function(){t.$refs.tableWrapper.getBoundingClientRect().width,t.$refs.table.getBoundingClientRect().width;t.addThGutter()}))}},computed:{expandedCellColSpan:function(){var e=0;return this.checkable&&(e+=1),this.expandKey&&(e+=1),this.columns.length+e},isAllItemSelected:function(){var e=this.dataSource.map((function(e){return e.id})).sort(),t=this.selectedItems.map((function(e){return e.id})).sort();if(e.length!==t.length)return!1;for(var a=!0,n=0;n<e.length;n++)if(e[n]!==t[n]){a=!1;break}return a}},mounted:function(){var e=this,t=this.$slots.default.filter((function(e){return e.tag}));this.columns=t.map((function(e){var t=e.componentOptions.propsData;return{text:t.text,prop:t.prop,width:t.width,render:e.data.scopedSlots&&e.data.scopedSlots.default}})),this.$nextTick((function(){e.fixedHeader(),e.addThGutter(),e.updateActionWidth()}))},beforeDestroy:function(){this.cloneTable.remove()},methods:{fixedHeader:function(){var e=this.$refs.table.cloneNode(!1);this.cloneTable=e,e.classList.add("clone-table");var t=this.$refs.table.children[0],a=t.getBoundingClientRect().height;this.$refs.tableWrapper.style.marginTop=a+"px",this.$refs.tableWrapper.style.height=this.height-a+"px",e.appendChild(t),this.$refs.wrapper.appendChild(e)},addThGutter:function(){var e=this.$refs.tableWrapper.getBoundingClientRect().width,t=this.$refs.table.getBoundingClientRect().width;if(e-t>0)this.$refs.gutter.style.width=e-t-(this.$scopedSlots.action?0:-1)+"px";else{var a=this.$refs.table.querySelectorAll("td");a.length&&a.forEach((function(e){e.style.borderBottom="1px solid #d5d5d5"})),this.$refs.gutter.style.display="none",this.$refs.actionsHeader.style.borderRight="none"}},updateActionWidth:function(){if(this.$scopedSlots.action&&this.dataSource.length){var e=this.$refs.actions[0],t=e.getBoundingClientRect().width,a=e.parentNode,n=getComputedStyle(a),o=n.getPropertyValue("padding-left"),l=n.getPropertyValue("padding-right"),i=n.getPropertyValue("border-left-width"),r=n.getPropertyValue("border-right-width"),d=t+parseInt(o)+parseInt(l)+parseInt(i)+parseInt(r)+"px";this.$refs.actionsHeader.style.width=d,this.$refs.actions.map((function(e){e.parentNode.style.width=d}))}},inExpandedIds:function(e){return this.expendedItemKeys.indexOf(e)>-1},onExpand:function(e){this.inExpandedIds(e.id)?this.expendedItemKeys.splice(this.expendedItemKeys.indexOf(e.id),1):this.expendedItemKeys.push(e.id)},updateHeadersWidth:function(){var e,t=this.cloneTable,a=Array.from(this.$refs.table.children).filter((function(e){return"thead"===e.tagName.toLowerCase()}))[0];Array.from(t.children).map((function(t){"thead"!==t.tagName.toLowerCase()?t.remove():e=t})),Array.from(a.children[0].children).map((function(t,a){var n=t.getBoundingClientRect().width;e.children[0].children[a].style.width=n+"px"}))},changeOrderBy:function(e){var t=JSON.parse(JSON.stringify(this.orderBy)),a=t[e];t[e]="asc"===a?"desc":"desc"===a||"asc",this.$emit("update:orderBy",t)},inselectedItems:function(e){return this.selectedItems.filter((function(t){return t.id===e.id})).length>0},onChangeAllItems:function(e){var t=e.target.checked;this.$emit("update:selectedItems",t?this.dataSource:[])},onChangeItem:function(e,t,a){var n=a.target.checked,o=JSON.parse(JSON.stringify(this.selectedItems));n?o.push(e):o=o.filter((function(t){return t.id!==e.id})),this.$emit("update:selectedItems",o)}}},o=(a(674),a(42)),l=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"wrapper",staticClass:"koma-table-wrapper",class:{border:e.border}},[a("div",{ref:"tableWrapper",staticClass:"koma-table-wrapper-content",style:{overflow:"auto"}},[a("table",{ref:"table",staticClass:"koma-table",class:{border:e.border,compact:e.compact,striped:e.striped}},[a("thead",[a("tr",[e.expandKey?a("th",{staticClass:"table-center",style:{width:"50px"}}):e._e(),e._v(" "),e.checkable?a("th",{staticClass:"table-center",style:{width:"50px"}},[a("input",{ref:"allCheckBox",staticClass:"pointer",attrs:{type:"checkbox"},domProps:{checked:e.isAllItemSelected},on:{change:e.onChangeAllItems}})]):e._e(),e._v(" "),e.numberVisible?a("th",{staticClass:"table-center",style:{width:"50px"}},[e._v("#")]):e._e(),e._v(" "),e._l(e.columns,(function(t,n){return a("th",{key:t.prop,class:{last:n===e.columns.length-1&&!e.$scopedSlots.action},style:{width:t.width+"px"}},[a("div",{staticClass:"kama-table-name",on:{click:function(a){return e.changeOrderBy(t.prop)}}},[e._v("\n              "+e._s(t.text)+"\n              "),t.prop in e.orderBy?a("span",{staticClass:"koma-sorter"},[a("k-icon",{class:{active:"asc"===e.orderBy[t.prop]},attrs:{name:"ascending"}}),e._v(" "),a("k-icon",{class:{active:"desc"===e.orderBy[t.prop]},attrs:{name:"descending"}})],1):e._e()])])})),e._v(" "),e.$scopedSlots.action?a("th",{ref:"actionsHeader"},[e._v("操作")]):e._e(),e._v(" "),a("th",{ref:"gutter",staticClass:"gutter",staticStyle:{padding:"0"}})],2)]),e._v(" "),a("tbody",[e._l(e.dataSource,(function(t,n){return[a("tr",{key:t.id},[e.expandKey?a("td",{staticClass:"table-center",style:{width:"50px"},on:{click:function(a){return e.onExpand(t)}}},[a("k-icon",{staticClass:"expand-icon",class:{active:e.expendedItemKeys.indexOf(t.id)>-1},attrs:{name:"right"}})],1):e._e(),e._v(" "),e.checkable?a("td",{staticClass:"table-center",style:{width:"50px"}},[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.inselectedItems(t)},on:{change:function(a){return e.onChangeItem(t,n,a)}}})]):e._e(),e._v(" "),e.numberVisible?a("td",{staticClass:"table-center",style:{width:"50px"}},[e._v(e._s(n+1))]):e._e(),e._v(" "),e._l(e.columns,(function(n){return[a("td",{key:n.prop,style:{width:n.width+"px"}},[n.render?[a("vnodes",{attrs:{vnodes:n.render({row:t})}})]:[e._v("\n                  "+e._s(t[n.prop])+"\n                ")]],2)]})),e._v(" "),e.$scopedSlots.action?a("td",[a("div",{ref:"actions",refInFor:!0,staticStyle:{display:"inline-block"}},[e._t("action",null,{row:t,$index:n})],2)]):e._e()],2),e._v(" "),e.inExpandedIds(t.id)?a("tr",{key:"expand-"+t.id},[a("td",{attrs:{colspan:e.expandedCellColSpan}},[e._v("\n              "+e._s(t[e.expandKey]||"空")+"\n            ")])]):e._e()]}))],2)]),e._v(" "),e.dataSource.length?e._e():a("div",{staticClass:"no-data"},[e._v("\n      暂无数据\n    ")])]),e._v(" "),e.loading?a("div",{staticClass:"koma-table-loading"},[a("k-icon",{attrs:{name:"loading"}})],1):e._e()])}),[],!1,null,"723eac5b",null).exports,i={name:"KomaTableColumn",components:{},props:{text:{type:String,required:!0},prop:{type:String,required:!0},width:{type:Number}}},r=Object(o.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports,d={name:"KomaTableDemo",components:{demosComponent:a(502).default,"k-table":l,"k-table-column":r},props:{},watch:{selectedItems:function(e){console.log(e)}},data:function(){return{codeStr1:"\n        <k-table :data-source=\"dataSource\" :height=\"400\">\n          <k-table-column text=\"姓名\" prop=\"name\" width=\"200\"></k-table-column>\n          <k-table-column text=\"最爱\" prop=\"favorite\"></k-table-column>\n        </k-table>\n\n        data() {\n          return {\n            dataSource:[\n              { id: 1, name: '花猫', favorite: '花'},\n              { id: 2, name: '白猫', favorite: '大白菜'},\n              { id: 3, name: '小猫', favorite: '小白'},\n              { id: 4, name: '波斯猫', favorite: '毛球'},\n              { id: 5, name: '卷猫', favorite: '卷子'},\n              { id: 6, name: '卡西欧', favorite: '卡卡'},\n              { id: 7, name: '绿猫', favorite: '绿帽'},\n              { id: 8, name: '狗的猫宁', favorite: '安安'},\n              { id: 9, name: '奋斗的小猫', favorite: '奋斗'},\n              { id: 10, name: '努力的小猫', favorite: '努力'},\n              { id: 11, name: '勤奋的小猫', favorite: '勤奋'},\n              { id: 12, name: '上进的小猫', favorite: '上进'},\n              { id: 13, name: '好学的小猫', favorite: '学习'},\n              { id: 14, name: '勤劳的小猫', favorite: '劳动'},\n              { id: 15, name: '可爱的小猫', favorite: '撒娇'},\n            ],\n          }\n        }\n      ",codeStr2:'\n        <k-table :data-source="dataSource" :striped="false" :height="400">\n          <k-table-column text="姓名" prop="name" width="200"></k-table-column>\n          <k-table-column text="最爱" prop="favorite"></k-table-column>\n        </k-table>\n      ',codeStr3:'\n        <k-table :data-source="dataSource" :height="400"\n          numberVisible :border="false">\n          <k-table-column text="姓名" prop="name" width="200"></k-table-column>\n          <k-table-column text="最爱" prop="favorite"></k-table-column>\n        </k-table>\n      ',codeStr4:'\n        <k-table :data-source="dataSource" :height="400" compact>\n          <k-table-column text="姓名" prop="name" width="200"></k-table-column>\n          <k-table-column text="最爱" prop="favorite"></k-table-column>\n        </k-table>\n      ',codeStr5:"\n        <k-table :data-source=\"dataSource\" :height=\"400\"\n          checkable :selectedItems.sync=\"selectedItems\">\n          <k-table-column text=\"姓名\" prop=\"name\" width=\"200\"></k-table-column>\n          <k-table-column text=\"最爱\" prop=\"favorite\"></k-table-column>\n        </k-table>\n\n        data(){\n          return {\n            dataSource: [\n              { id: 1, name: '花猫', favorite: '花'},\n              { id: 2, name: '白猫', favorite: '大白菜'},\n              { id: 3, name: '小猫', favorite: '小白'},\n              { id: 4, name: '波斯猫', favorite: '毛球'},\n              { id: 5, name: '卷猫', favorite: '卷子'},\n              { id: 6, name: '卡西欧', favorite: '卡卡'},\n              { id: 7, name: '绿猫', favorite: '绿帽'},\n              { id: 8, name: '狗的猫宁', favorite: '安安'},\n              { id: 9, name: '奋斗的小猫', favorite: '奋斗'},\n              { id: 10, name: '努力的小猫', favorite: '努力'},\n              { id: 11, name: '勤奋的小猫', favorite: '勤奋'},\n              { id: 12, name: '上进的小猫', favorite: '上进'},\n              { id: 13, name: '好学的小猫', favorite: '学习'},\n              { id: 14, name: '勤劳的小猫', favorite: '劳动'},\n              { id: 15, name: '可爱的小猫', favorite: '撒娇'},\n            ],\n            selectedItems: []\n          }\n        },\n        watch: {\n          selectedItems(val){\n            console.log(val)\n          }\n        }\n      ",codeStr6:"\n        <k-table :data-source.sync=\"dataSource1\" :height=\"400\"\n          :loading=\"loading\"\n          :orderBy.sync=\"sortRules\"\n          @update:orderBy=\"updateSourse\">\n            <k-table-column text=\"姓名\" prop=\"name\" width=\"200\"></k-table-column>\n            <k-table-column text=\"最爱\" prop=\"favorite\" width=\"300\"></k-table-column>\n            <k-table-column text=\"可爱值\" prop=\"lovelyValue\"></k-table-column>\n          </k-table>\n        </template>\n\n        data(){\n          return {\n            dataSource1: [\n              { id: 1, name: '花猫', favorite: '花', lovelyValue: '100'},\n              { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},\n              { id: 3, name: '小猫', favorite: '小白', lovelyValue: '95'},\n              { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},\n              { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},\n              { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},\n              { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},\n              { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},\n              { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},\n              { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},\n              { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},\n              { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},\n              { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},\n              { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},\n              { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},\n            ],\n            loading: false,\n            sortRules: {\n              lovelyValue: 'desc'\n            },\n          }\n        },\n        methods: {\n          updateSourse(sort){\n            this.loading = true \n            setTimeout(()=>{\n              if(sort.lovelyValue === 'asc') {\n                this.dataSource1.sort((a, b) => a.lovelyValue - b.lovelyValue)\n              }else{\n                this.dataSource1.sort((a, b) => b.lovelyValue - a.lovelyValue)\n              }\n              this.loading = false\n            }, 1500)\n          },\n        },\n      ",codeStr7:"\n        <k-table :data-source.sync=\"dataSource2\" :height=\"400\"\n          expand-key=\"description\">\n          <k-table-column text=\"姓名\" prop=\"name\" width=\"200\"></k-table-column>\n          <k-table-column text=\"最爱\" prop=\"favorite\" width=\"300\"></k-table-column>\n          <k-table-column text=\"可爱值\" prop=\"lovelyValue\"></k-table-column>\n        </k-table>\n\n        data(){\n          return {\n            dataSource1: [\n              { id: 1, name: '花猫', favorite: '花', lovelyValue: '100', description: '花猫的颜色是五彩斑斓的。'},\n              { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},\n              { id: 3, name: '小猫', favorite: '白猫', lovelyValue: '95', description: '小猫是所有猫里最小的，它喜欢白猫。'},\n              { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},\n              { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},\n              { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},\n              { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},\n              { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},\n              { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},\n              { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},\n              { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},\n              { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},\n              { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},\n              { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},\n              { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},\n            ],\n          }\n        },\n      ",codeStr8:"\n        <k-table :data-source.sync=\"dataSource3\" :height=\"400\">\n          <k-table-column text=\"姓名\" prop=\"name\" width=\"200\"></k-table-column>\n          <k-table-column text=\"最爱\" prop=\"favorite\" width=\"200\"></k-table-column>\n          <k-table-column text=\"可爱值\" prop=\"lovelyValue\" width=\"100\"></k-table-column>\n          <template #action=\"scope\">\n            <span class=\"opre-btn\" @click=\"editItem(scope.row, scope.$index)\">编辑</span>\n            <span class=\"opre-btn\" @click=\"deleteItem(scope.$index)\">删除</span>\n          </template>\n        </k-table>\n\n        data(){\n          return {\n            dataSource3: [\n              { id: 1, name: '花猫', favorite: '花', lovelyValue: '100'},\n              { id: 2, name: '白猫', favorite: '大白菜', lovelyValue: '90'},\n              { id: 3, name: '小猫', favorite: '小白', lovelyValue: '95'},\n              { id: 4, name: '波斯猫', favorite: '毛球', lovelyValue: '80'},\n              { id: 5, name: '卷猫', favorite: '卷子', lovelyValue: '75'},\n              { id: 6, name: '卡西欧', favorite: '卡卡', lovelyValue: '55'},\n              { id: 7, name: '绿猫', favorite: '绿帽', lovelyValue: '85'},\n              { id: 8, name: '狗的猫宁', favorite: '安安', lovelyValue: '90'},\n              { id: 9, name: '奋斗的小猫', favorite: '奋斗', lovelyValue: '100'},\n              { id: 10, name: '努力的小猫', favorite: '努力', lovelyValue: '95'},\n              { id: 11, name: '勤奋的小猫', favorite: '勤奋', lovelyValue: '75'},\n              { id: 12, name: '上进的小猫', favorite: '上进', lovelyValue: '85'},\n              { id: 13, name: '好学的小猫', favorite: '学习', lovelyValue: '95'},\n              { id: 14, name: '勤劳的小猫', favorite: '劳动', lovelyValue: '65'},\n              { id: 15, name: '可爱的小猫', favorite: '撒娇', lovelyValue: '100'},\n            ],\n          }\n        },\n\n        methods: {\n          editItem(item) {\n            console.log(item)\n          },\n          deleteItem(item, index){\n            this.dataSource3.splice(index, 1)\n          }\n        }\n      ",dataSource:[{id:1,name:"花猫",favorite:"花"},{id:2,name:"白猫",favorite:"大白菜"},{id:3,name:"小猫",favorite:"小白"},{id:4,name:"波斯猫",favorite:"毛球"},{id:5,name:"卷猫",favorite:"卷子"},{id:6,name:"卡西欧",favorite:"卡卡"},{id:7,name:"绿猫",favorite:"绿帽"},{id:8,name:"狗的猫宁",favorite:"安安"},{id:9,name:"奋斗的小猫",favorite:"奋斗"},{id:10,name:"努力的小猫",favorite:"努力"},{id:11,name:"勤奋的小猫",favorite:"勤奋"},{id:12,name:"上进的小猫",favorite:"上进"},{id:13,name:"好学的小猫",favorite:"学习"},{id:14,name:"勤劳的小猫",favorite:"劳动"},{id:15,name:"可爱的小猫",favorite:"撒娇"}],dataSource1:[{id:1,name:"花猫",favorite:"花",lovelyValue:"100"},{id:2,name:"白猫",favorite:"大白菜",lovelyValue:"90"},{id:3,name:"小猫",favorite:"小白",lovelyValue:"95"},{id:4,name:"波斯猫",favorite:"毛球",lovelyValue:"80"},{id:5,name:"卷猫",favorite:"卷子",lovelyValue:"75"},{id:6,name:"卡西欧",favorite:"卡卡",lovelyValue:"55"},{id:7,name:"绿猫",favorite:"绿帽",lovelyValue:"85"},{id:8,name:"狗的猫宁",favorite:"安安",lovelyValue:"90"},{id:9,name:"奋斗的小猫",favorite:"奋斗",lovelyValue:"100"},{id:10,name:"努力的小猫",favorite:"努力",lovelyValue:"95"},{id:11,name:"勤奋的小猫",favorite:"勤奋",lovelyValue:"75"},{id:12,name:"上进的小猫",favorite:"上进",lovelyValue:"85"},{id:13,name:"好学的小猫",favorite:"学习",lovelyValue:"95"},{id:14,name:"勤劳的小猫",favorite:"劳动",lovelyValue:"65"},{id:15,name:"可爱的小猫",favorite:"撒娇",lovelyValue:"100"}],dataSource2:[{id:1,name:"花猫",favorite:"花",lovelyValue:"100",description:"花猫的颜色是五彩斑斓的。"},{id:2,name:"白猫",favorite:"大白菜",lovelyValue:"90"},{id:3,name:"小猫",favorite:"白猫",lovelyValue:"95",description:"小猫是所有猫里最小的，它喜欢白猫。"},{id:4,name:"波斯猫",favorite:"毛球",lovelyValue:"80"},{id:5,name:"卷猫",favorite:"卷子",lovelyValue:"75"},{id:6,name:"卡西欧",favorite:"卡卡",lovelyValue:"55"},{id:7,name:"绿猫",favorite:"绿帽",lovelyValue:"85"},{id:8,name:"狗的猫宁",favorite:"安安",lovelyValue:"90"},{id:9,name:"奋斗的小猫",favorite:"奋斗",lovelyValue:"100"},{id:10,name:"努力的小猫",favorite:"努力",lovelyValue:"95"},{id:11,name:"勤奋的小猫",favorite:"勤奋",lovelyValue:"75"},{id:12,name:"上进的小猫",favorite:"上进",lovelyValue:"85"},{id:13,name:"好学的小猫",favorite:"学习",lovelyValue:"95"},{id:14,name:"勤劳的小猫",favorite:"劳动",lovelyValue:"65"},{id:15,name:"可爱的小猫",favorite:"撒娇",lovelyValue:"100"}],dataSource3:[{id:1,name:"花猫",favorite:"花",lovelyValue:"100"},{id:2,name:"白猫",favorite:"大白菜",lovelyValue:"90"},{id:3,name:"小猫",favorite:"小白",lovelyValue:"95"},{id:4,name:"波斯猫",favorite:"毛球",lovelyValue:"80"},{id:5,name:"卷猫",favorite:"卷子",lovelyValue:"75"},{id:6,name:"卡西欧",favorite:"卡卡",lovelyValue:"55"},{id:7,name:"绿猫",favorite:"绿帽",lovelyValue:"85"},{id:8,name:"狗的猫宁",favorite:"安安",lovelyValue:"90"},{id:9,name:"奋斗的小猫",favorite:"奋斗",lovelyValue:"100"},{id:10,name:"努力的小猫",favorite:"努力",lovelyValue:"95"},{id:11,name:"勤奋的小猫",favorite:"勤奋",lovelyValue:"75"},{id:12,name:"上进的小猫",favorite:"上进",lovelyValue:"85"},{id:13,name:"好学的小猫",favorite:"学习",lovelyValue:"95"},{id:14,name:"勤劳的小猫",favorite:"劳动",lovelyValue:"65"},{id:15,name:"可爱的小猫",favorite:"撒娇",lovelyValue:"100"}],selectedItems:[],loading:!1,sortRules:{lovelyValue:"desc"}}},methods:{updateSourse:function(e){var t=this;this.loading=!0,setTimeout((function(){"asc"===e.lovelyValue?t.dataSource1.sort((function(e,t){return e.lovelyValue-t.lovelyValue})):t.dataSource1.sort((function(e,t){return t.lovelyValue-e.lovelyValue})),t.loading=!1}),1500)},editItem:function(e){console.log(e)},deleteItem:function(e,t){this.dataSource3.splice(t,1)}}},s=(a(675),Object(o.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper table-demo"},[a("demos-component",{attrs:{name:"基础用法",demokey:"0",description:"data-source设置数据源。",codeStr:e.codeStr1},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource,height:400}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"不显示斑马纹",demokey:"1",description:"斑马纹是默认显示的，可以设置striped属性为false，来不显示斑马纹。",codeStr:e.codeStr2},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource,striped:!1,height:400}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"序号和边框显示",demokey:"2",description:"你可以通过传入 numberVisible 和 border 属性来控制序号和边框的显示。",codeStr:e.codeStr3},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource,height:400,numberVisible:"",border:!1}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"紧凑型表格",demokey:"3",description:"compact为true时，会显示更紧凑的表格。",codeStr:e.codeStr4},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource,height:400,compact:""}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"表格多选",demokey:"4",description:"选择多行数据时使用 Checkbox。",codeStr:e.codeStr5},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource,height:400,checkable:"",selectedItems:e.selectedItems},on:{"update:selectedItems":function(t){e.selectedItems=t},"update:selected-items":function(t){e.selectedItems=t}}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"表格排序",demokey:"5",description:"对表格进行排序，可快速查找或对比数据。",codeStr:e.codeStr6},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource1,height:400,striped:"",loading:e.loading,orderBy:e.sortRules},on:{"update:dataSource":function(t){e.dataSource1=t},"update:data-source":function(t){e.dataSource1=t},"update:orderBy":[function(t){e.sortRules=t},e.updateSourse],"update:order-by":function(t){e.sortRules=t}}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite",width:"300"}}),e._v(" "),a("k-table-column",{attrs:{text:"可爱值",prop:"lovelyValue"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"展开行",demokey:"6",description:"当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。",codeStr:e.codeStr7},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource2,height:400,striped:"","expand-key":"description"},on:{"update:dataSource":function(t){e.dataSource2=t},"update:data-source":function(t){e.dataSource2=t}}},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite",width:"300"}}),e._v(" "),a("k-table-column",{attrs:{text:"可爱值",prop:"lovelyValue"}})],1)]},proxy:!0}])}),e._v(" "),a("demos-component",{attrs:{name:"操作列",demokey:"7",description:"可以加入action操作列，对数据进行修改。",codeStr:e.codeStr8},scopedSlots:e._u([{key:"code",fn:function(){return[a("k-table",{attrs:{"data-source":e.dataSource3,height:400},on:{"update:dataSource":function(t){e.dataSource3=t},"update:data-source":function(t){e.dataSource3=t}},scopedSlots:e._u([{key:"action",fn:function(t){return[a("span",{staticClass:"opre-btn",on:{click:function(a){return e.editItem(t.row)}}},[e._v("编辑")]),e._v(" "),a("span",{staticClass:"opre-btn",on:{click:function(a){return e.deleteItem(t.$index)}}},[e._v("删除")])]}}])},[a("k-table-column",{attrs:{text:"姓名",prop:"name",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"最爱",prop:"favorite",width:"200"}}),e._v(" "),a("k-table-column",{attrs:{text:"可爱值",prop:"lovelyValue",width:"100"}})],1)]},proxy:!0}])})],1)}),[],!1,null,"1d57fba9",null));t.default=s.exports}}]);