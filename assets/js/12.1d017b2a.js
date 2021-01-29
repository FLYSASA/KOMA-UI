(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{499:function(t,e,o){},501:function(t,e,o){"use strict";var n=o(499);o.n(n).a},503:function(t,e,o){"use strict";o(167);var n={name:"KomaButton",components:{"k-icon":o(500).a},props:{icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:function(t){return["left","right"].includes(t)}},loading:{type:Boolean,default:!1}}},r=(o(501),o(42)),i=Object(r.a)(n,(function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("button",{staticClass:"koma-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.loading?n("k-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),e.icon&&!e.loading?n("k-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),n("div",{staticClass:"content"},[e._t("default")],2)],1)}),[],!1,null,"6acacc07",null);e.a=i.exports},508:function(t,e,o){},548:function(t,e,o){"use strict";var n=o(508);o.n(n).a},576:function(t,e,o){},599:function(t,e,o){"use strict";o(166);var n={name:"KomaPopover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}},container:{type:Element}},data:function(){return{visible:!1}},mounted:function(){this.addPopoverListeners()},beforeDestroy:function(){this.recoverElContent(),this.removePopoverListeners()},methods:{removePopoverListeners:function(){this.$refs.popover&&("click"===this.trigger?this.$refs.popover.removeEventListener("click",this.clickPopover):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close)))},addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.clickPopover):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},recoverElContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.popover;e&&o.appendChild(e)},positionContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.triggerWrapper;if(e){(this.container||document.body).appendChild(e);var n=o.getBoundingClientRect(),r=n.left,i=n.top,s=n.height,p=n.width,c=e.getBoundingClientRect().height,a={top:{top:i+window.scrollY,left:r+window.scrollX},bottom:{top:i+s+window.scrollY,left:r+window.scrollX},left:{top:i+window.scrollY+(s-c)/2,left:r+window.scrollX},right:{top:i+window.scrollY+(s-c)/2,left:r+p+window.scrollX}};e.style.left=a[this.position].left+"px",e.style.top=a[this.position].top+"px"}},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},clickPopover:function(t){this.$refs.triggerWrapper.contains(t.target)&&(this.visible?this.close():this.open())},close:function(){this.visible=!1,this.$emit("close"),document.removeEventListener("click",this.onClickDocument)},open:function(){var t=this;this.visible=!0,this.$emit("open"),this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))}}},r=(o(548),o(42)),i=Object(r.a)(n,(function(){var t,e=this.$createElement,o=this._self._c||e;return o("div",{ref:"popover",staticClass:"koma-popover"},[this.visible?o("div",{ref:"contentWrapper",staticClass:"koma-popover-content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),o("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"d673f154",null);e.a=i.exports},667:function(t,e,o){"use strict";var n=o(576);o.n(n).a},712:function(t,e,o){"use strict";o.r(e);var n=o(503),r=o(500),i=o(599),s={name:"KomaButton",components:{demosComponent:o(502).default,"k-button":n.a,"k-icon":r.a,"k-popover":i.a},props:{},data:function(){return{codeStr1:'\n        <k-popover>\n          <k-button>上方弹出</k-button>\n          <template slot="content">弹出内容</template>\n        </k-popover>\n        <k-popover position="bottom">\n          <k-button>下方弹出</k-button>\n          <template slot="content">弹出内容</template>\n        </k-popover>\n        <k-popover position="left">\n          <k-button>左方弹出</k-button>\n          <template slot="content">弹出内容</template>\n        </k-popover>\n        <k-popover position="right">\n          <k-button>右方弹出</k-button>\n          <template slot="content">弹出内容</template>\n        </k-popover>\n      ',codeStr2:'\n        <div ref="demoPopoverWrapper" class="demo-popover-wrapper"></div>\n        <k-popover :container="demoPopoverWrapper">\n          <k-button>上方弹出</k-button>\n          <template slot="content">弹出内容</template>\n        </k-popover>\n\n        data(){\n          return  {\n            demoPopoverWrapper: null\n          }\n        },\n        mounted() {\n          this.demoPopoverWrapper = this.$refs.demoPopoverWrapper\n        },\n      ',demoPopoverWrapper:null}},mounted:function(){this.demoPopoverWrapper=this.$refs.demoPopoverWrapper},methods:{clickBtn:function(){this.$toast('<span style="color: red;">越努力的人越幸运吗？</span>',{enableHtml:!0,closeButton:{text:"是的",callback:function(){console.log("越努力的人越幸运。")}}})}}},p=(o(667),o(42)),c=Object(p.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("demos-component",{attrs:{name:"基础用法",demokey:"0",description:"可以设定提示框的弹出方向。",codeStr:t.codeStr1},scopedSlots:t._u([{key:"code",fn:function(){return[o("k-popover",[o("k-button",[t._v("上方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2),t._v(" "),o("k-popover",{attrs:{position:"bottom"}},[o("k-button",[t._v("下方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2),t._v(" "),o("k-popover",{attrs:{position:"left"}},[o("k-button",[t._v("左方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2),t._v(" "),o("k-popover",{attrs:{position:"right"}},[o("k-button",[t._v("右方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2)]},proxy:!0}])}),t._v(" "),o("demos-component",{attrs:{name:"hover弹出",demokey:"1",description:"将trigger属性设为hover即可鼠标悬浮展示popover内容。",codeStr:t.codeStr1},scopedSlots:t._u([{key:"code",fn:function(){return[o("k-popover",{attrs:{trigger:"hover"}},[o("k-button",[t._v("上方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2),t._v(" "),o("k-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("k-button",[t._v("下方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2),t._v(" "),o("k-popover",{attrs:{position:"left",trigger:"hover"}},[o("k-button",[t._v("左方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2),t._v(" "),o("k-popover",{attrs:{position:"right",trigger:"hover"}},[o("k-button",[t._v("右方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("弹出内容")])],2)]},proxy:!0}])}),t._v(" "),o("demos-component",{attrs:{name:"挂载元素",demokey:"2",description:"可以设置container属性绑定某个元素，popover就会挂载到该元素下。",codeStr:t.codeStr2},scopedSlots:t._u([{key:"code",fn:function(){return[o("div",{ref:"demoPopoverWrapper",staticClass:"demo-popover-wrapper"}),t._v(" "),o("k-popover",{attrs:{container:t.demoPopoverWrapper}},[o("k-button",[t._v("挂载元素")]),t._v(" "),o("template",{slot:"content"},[t._v("我被挂在了demoPopoverWrapper下")])],2)]},proxy:!0}])})],1)}),[],!1,null,"7af4f286",null);e.default=c.exports}}]);