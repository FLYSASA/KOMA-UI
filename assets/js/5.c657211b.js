(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{499:function(e,t,n){},501:function(e,t,n){"use strict";var o=n(499);n.n(o).a},503:function(e,t,n){"use strict";n(167);var o={name:"KomaButton",components:{"k-icon":n(500).a},props:{icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:function(e){return["left","right"].includes(e)}},loading:{type:Boolean,default:!1}}},a=(n(501),n(42)),s=Object(a.a)(o,(function(){var e,t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"koma-button",class:(e={},e["icon-"+t.iconPosition]=!0,e),on:{click:function(e){return t.$emit("click")}}},[t.loading?o("k-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):t._e(),t._v(" "),t.icon&&!t.loading?o("k-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"6acacc07",null);t.a=s.exports},563:function(e,t,n){},564:function(e,t,n){},565:function(e,t,n){},566:function(e,t,n){},654:function(e,t,n){"use strict";var o=n(563);n.n(o).a},655:function(e,t,n){"use strict";var o=n(564);n.n(o).a},656:function(e,t,n){"use strict";var o=n(565);n.n(o).a},657:function(e,t,n){"use strict";var o=n(566);n.n(o).a},693:function(e,t,n){"use strict";n.r(t);n(69),n(71),n(70);var o={name:"KomaLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var e=this;this.$children.forEach((function(t){"KomaSider"===t.$options.name&&(e.layoutClass.hasSider=!0)}))}},a=(n(654),n(42)),s=Object(a.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"layout",staticClass:"koma-layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"0f75687f",null).exports,r={name:"KomaHeader",data:function(){return{}}},c=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"koma-header"},[this._t("default")],2)}),[],!1,null,null,null).exports,l={name:"KomaSider",components:{KButton:n(503).a},props:{closeBtnVisible:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{leave:function(e,t){var n=e.getBoundingClientRect().width;e.style.marginLeft=-n+"px"}}},i=(n(655),Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"},on:{leave:e.leave}},[e.visible?n("div",{staticClass:"koma-sider"},[e._t("default"),e._v(" "),e.closeBtnVisible?n("k-button",{staticClass:"koma-sider-close-btn",on:{click:function(t){e.visible=!1}}},[e._v("关闭")]):e._e()],2):e._e()])}),[],!1,null,"0f77371c",null).exports),d={name:"KomaContent",data:function(){return{}}},u=(n(656),Object(a.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"koma-content"},[this._t("default")],2)}),[],!1,null,"634b4a34",null).exports),f={name:"KomaFooter",data:function(){return{}}},k=Object(a.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"koma-footer"},[this._t("default")],2)}),[],!1,null,null,null).exports,m={name:"KomaButton",components:{demosComponent:n(502).default,"k-layout":s,"k-header":c,"k-sider":i,"k-content":u,"k-footer":k},props:{},data:function(){return{codeStr1:'\n        <k-layout class="demo-layout">\n          <k-header class="demo-header flex-center">header</k-header>\n          <k-content class="demo-content flex-center">content</k-content>\n          <k-footer class="demo-footer flex-center">footer</k-footer>\n        </k-layout>\n\n        <k-layout class="demo-layout">\n          <k-header class="demo-header flex-center">header</k-header>\n          <k-layout>\n            <k-sider class="demo-sider flex-center">sider</k-sider>\n            <k-content class="demo-content flex-center">content</k-content>\n          </k-layout>\n          <k-footer class="demo-footer flex-center">footer</k-footer>\n        </k-layout>\n\n        <k-layout class="demo-layout">\n          <k-sider class="demo-sider flex-center" style="height: 300px;">sider</k-sider>\n          <k-layout>\n            <k-header class="demo-header flex-center">header</k-header>\n            <k-content class="demo-content flex-center">content</k-content>\n            <k-footer class="demo-footer flex-center">footer</k-footer>\n          </k-layout>\n        </k-layout>\n      ',codeStr2:'\n        <k-layout class="demo-layout">\n          <k-header class="demo-header flex-center">header</k-header>\n          <k-layout>\n            <k-sider class="demo-sider flex-center" closeBtnVisible>sider</k-sider>\n            <k-content class="demo-content flex-center">content</k-content>\n          </k-layout>\n          <k-footer class="demo-footer flex-center">footer</k-footer>\n        </k-layout>\n      '}}},v=(n(657),Object(a.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("demos-component",{attrs:{name:"基础用法",demokey:"0",description:"协助进行页面级整体布局。",codeStr:e.codeStr1},scopedSlots:e._u([{key:"code",fn:function(){return[n("k-layout",{staticClass:"demo-layout"},[n("k-header",{staticClass:"demo-header flex-center"},[e._v("header")]),e._v(" "),n("k-content",{staticClass:"demo-content flex-center"},[e._v("content")]),e._v(" "),n("k-footer",{staticClass:"demo-footer flex-center"},[e._v("footer")])],1),e._v(" "),n("k-layout",{staticClass:"demo-layout"},[n("k-header",{staticClass:"demo-header flex-center"},[e._v("header")]),e._v(" "),n("k-layout",[n("k-sider",{staticClass:"demo-sider flex-center"},[e._v("sider")]),e._v(" "),n("k-content",{staticClass:"demo-content flex-center"},[e._v("content")])],1),e._v(" "),n("k-footer",{staticClass:"demo-footer flex-center"},[e._v("footer")])],1),e._v(" "),n("k-layout",{staticClass:"demo-layout"},[n("k-sider",{staticClass:"demo-sider flex-center",staticStyle:{height:"300px"}},[e._v("sider")]),e._v(" "),n("k-layout",[n("k-header",{staticClass:"demo-header flex-center"},[e._v("header")]),e._v(" "),n("k-content",{staticClass:"demo-content flex-center"},[e._v("content")]),e._v(" "),n("k-footer",{staticClass:"demo-footer flex-center"},[e._v("footer")])],1)],1)]},proxy:!0}])}),e._v(" "),n("demos-component",{attrs:{name:"支持关闭sider",demokey:"1",description:"通过设置sider的 closeBtnVisible 属性为 true，来显示关闭按钮。",codeStr:e.codeStr2},scopedSlots:e._u([{key:"code",fn:function(){return[n("k-layout",{staticClass:"demo-layout"},[n("k-header",{staticClass:"demo-header flex-center"},[e._v("header")]),e._v(" "),n("k-layout",[n("k-sider",{staticClass:"demo-sider flex-center",attrs:{closeBtnVisible:""}},[e._v("sider")]),e._v(" "),n("k-content",{staticClass:"demo-content flex-center"},[e._v("content")])],1),e._v(" "),n("k-footer",{staticClass:"demo-footer flex-center"},[e._v("footer")])],1)]},proxy:!0}])})],1)}),[],!1,null,"f09de6aa",null));t.default=v.exports}}]);