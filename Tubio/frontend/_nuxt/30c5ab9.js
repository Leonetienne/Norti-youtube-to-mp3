(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{244:function(t,e,o){var content=o(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("ac8f1938",content,!0,{sourceMap:!1})},245:function(t,e,o){"use strict";o.r(e);var r={props:{height:{type:String,default:"0"},m_height:{type:String,default:"0"}},computed:{mobile_height:function(){return"0"===this.m_height?this.height:this.m_height}}},n=(o(249),o(9)),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"spacer",style:"--height: "+this.height+"; --m_height: "+this.mobile_height+";"})}),[],!1,null,"70a5daf0",null);e.default=component.exports},246:function(t,e,o){var content=o(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("1d10f8d7",content,!0,{sourceMap:!1})},247:function(t,e,o){var content=o(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3edd6b06",content,!0,{sourceMap:!1})},248:function(t,e,o){var content=o(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("2759991e",content,!0,{sourceMap:!1})},249:function(t,e,o){"use strict";var r=o(244);o.n(r).a},250:function(t,e,o){(e=o(19)(!1)).push([t.i,".spacer[data-v-70a5daf0]{width:1px;height:var(--height)}@media(max-width:660px){.spacer[data-v-70a5daf0]{height:var(--m_height)}}",""]),t.exports=e},251:function(t,e,o){var content=o(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("68a41681",content,!0,{sourceMap:!1})},256:function(t,e,o){"use strict";o.r(e);var r=o(9),n=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-toggle-on",attrs:{viewBox:"-4 -4 24 24",fill:"#8a54a2",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}})])}),[],!1,null,null,null).exports,l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-toggle-off",attrs:{viewBox:"-4 -4 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"}})])}),[],!1,null,null,null).exports,c={props:{isOn:{type:Boolean,default:!1}},components:{IconToggleOn:n,IconToggleOff:l}},d=(o(260),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"toggle-button"},[this.isOn?e("IconToggleOn"):e("IconToggleOff")],1)])}),[],!1,null,"7e3e3a36",null));e.default=d.exports},257:function(t,e,o){"use strict";o.r(e);o(49);var r={components:{LogEntry:o(258).default},computed:{logs:function(){return this.$store.state.logs.logs}},mounted:function(){var t=this;this.$store.dispatch("logs/update",this),setInterval((function(){t.$store.dispatch("logs/update",t)}),1e3)}},n=(o(264),o(9)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"log-box"},this._l(this.logs,(function(t,o){return e("LogEntry",{key:o,attrs:{mode:0===t.type?"normal":1===t.type?"warn":"error",message:t.compiledMessage}})})),1)}),[],!1,null,"89740186",null);e.default=component.exports;installComponents(component,{LogEntry:o(258).default})},258:function(t,e,o){"use strict";o.r(e);var r={props:{mode:{type:String,default:"normal"},message:{type:String}}},n=(o(262),o(9)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{class:this.mode},[this._v("\n        "+this._s(this.message)+"\n    ")])])}),[],!1,null,"6828301b",null);e.default=component.exports},260:function(t,e,o){"use strict";var r=o(246);o.n(r).a},261:function(t,e,o){(e=o(19)(!1)).push([t.i,".toggle-button[data-v-7e3e3a36]{width:50px;overflow:visible;stroke-width:1px;fill:#bbb;stroke:#bbb;cursor:pointer;transition:fill .1s,stroke .1s}.toggle-button[data-v-7e3e3a36]:hover{fill:#fff;stroke:#fff}",""]),t.exports=e},262:function(t,e,o){"use strict";var r=o(247);o.n(r).a},263:function(t,e,o){(e=o(19)(!1)).push([t.i,".warn[data-v-6828301b]{background-color:rgba(255,204,0,.26667)}.error[data-v-6828301b],.warn[data-v-6828301b]{color:#bbb;font-size:14pt}.error[data-v-6828301b]{background-color:rgba(221,68,0,.26667)}.normal[data-v-6828301b]{color:#bbb;font-size:14pt}",""]),t.exports=e},264:function(t,e,o){"use strict";var r=o(248);o.n(r).a},265:function(t,e,o){(e=o(19)(!1)).push([t.i,".log-box[data-v-89740186]{width:100%;height:600px;border-radius:5px;padding:20px;background-color:hsla(0,0%,100%,.33333);overflow-y:scroll}",""]),t.exports=e},266:function(t,e,o){"use strict";var r=o(251);o.n(r).a},267:function(t,e,o){(e=o(19)(!1)).push([t.i,"h1[data-v-e4fac65e]{font-size:32pt}h1[data-v-e4fac65e],h2[data-v-e4fac65e]{color:#bbb}h2[data-v-e4fac65e]{font-size:24pt}.disk-usage__entry p[data-v-e4fac65e]{color:#bbb;font-size:16pt}.disk-usage__entry p[data-v-e4fac65e]:first-child{width:150px}.option[data-v-e4fac65e]{color:#bbb;font-size:18pt;height:50px}.option.toggle>p[data-v-e4fac65e]{width:300px}.option.text>input[data-v-e4fac65e]{width:240px;text-align:right;border-radius:5px;font-size:16pt;height:30px;padding-left:.7em;padding-right:.7em}@media(max-width:768px){.option.text>input[data-v-e4fac65e]{width:180px}}.option.text.narrow>input[data-v-e4fac65e]{width:120px}@media(min-width:1024px){.border-right[data-v-e4fac65e]{border-right:1px solid #888}.border-left[data-v-e4fac65e]{border-left:1px solid #888}}.button[data-v-e4fac65e]{color:#000;font-family:ZillaSlab,serif;font-size:18pt;transition:background-color .2s;max-width:200px}.button[data-v-e4fac65e]:hover{background-color:#d40}hr[data-v-e4fac65e]{border:none;border-bottom:2px solid #888}",""]),t.exports=e},275:function(t,e,o){"use strict";o.r(e);var r=o(18),n=o.n(r),l=o(256),c=o(257),d=o(245),f={components:{Toggle:l.default,LogBox:c.default,Spacer:d.default},computed:{diskUsage:function(){return this.$store.state.diskUsage.usage}},methods:{clearDLCache:function(){var t=this;n.a.post("/api",{request:"clear_download_cache"}).then((function(e){"OK"===e.data.status&&t.$store.dispatch("dlcache/update",t)}))},clearLogs:function(){var t=this;n.a.post("/api",{request:"clear_logs"}).then((function(e){"OK"===e.data.status&&t.$store.dispatch("logs/update",t)}))}},mounted:function(){this.$store.dispatch("diskUsage/update",this)}},h=(o(266),o(9)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Settings")]),t._v(" "),o("Spacer",{attrs:{height:"2em"}}),t._v(" "),o("div",{staticClass:"flex-col w-full"},[o("div",{staticClass:"flex flex-col lg:flex-row justify-content-start w-full"},[o("div",{staticClass:"w-full lg:w-1/2 border-right lg:pr-3"},[o("div",{staticClass:"option toggle flex justify-between items-center"},[o("p",[t._v("Show console")]),t._v(" "),o("Toggle",{attrs:{isOn:!1}})],1),t._v(" "),o("div",{staticClass:"option toggle flex justify-between items-center"},[o("p",[t._v("Use account")]),t._v(" "),o("Toggle",{attrs:{isOn:!1}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"option toggle flex justify-between items-center"},[o("p",[t._v("Limit speed")]),t._v(" "),o("Toggle",{attrs:{isOn:!1}})],1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),o("div",{staticClass:"w-full lg:w-1/2 border-left lg:pl-3 mt-6 lg:mt-0"},[o("div",{staticClass:"disk-usage"},[o("h2",[t._v("Disk usage")]),t._v(" "),o("div",{staticClass:"disk-usage__entry flex"},[o("p",{staticClass:"mr-3"},[t._v("Downloads: ")]),t._v(" "),o("p",[t._v(t._s(Math.round(t.diskUsage.dlcache/1024/1024))+" mb")])]),t._v(" "),o("div",{staticClass:"disk-usage__entry flex"},[o("p",{staticClass:"mr-3"},[t._v("Logs: ")]),t._v(" "),o("p",[t._v(t._s(Math.round(t.diskUsage.logs/1024/1024))+" mb")])]),t._v(" "),o("div",{staticClass:"disk-usage__entry flex"},[o("p",{staticClass:"mr-3"},[t._v("Dependencies: ")]),t._v(" "),o("p",[t._v(t._s(Math.round(t.diskUsage.dependencies/1024/1024))+" mb")])]),t._v(" "),o("div",{staticClass:"disk-usage__entry flex"},[o("p",{staticClass:"mr-3"},[t._v("Misc: ")]),t._v(" "),o("p",[t._v(t._s(Math.round(t.diskUsage.misc/1024/1024))+" mb")])]),t._v(" "),o("div",{staticClass:"disk-usage__entry flex"},[o("p",{staticClass:"mr-3"},[t._v("Total: ")]),t._v(" "),o("p",[t._v(t._s(Math.round(t.diskUsage.total/1024/1024))+" mb")])])]),t._v(" "),o("Spacer",{attrs:{height:"50px"}}),t._v(" "),o("div",{staticClass:"button",on:{click:t.clearDLCache}},[t._v("Clear downloads")]),t._v(" "),o("div",{staticClass:"button mt-2",on:{click:t.clearLogs}},[t._v("Clear logs")])],1)]),t._v(" "),o("hr",{staticClass:"mt-6 lg:mt-2"}),t._v(" "),o("div",{staticClass:"pt-6"},[o("h2",{staticClass:"mb-4"},[t._v("Logs")]),t._v(" "),o("LogBox")],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"option text flex justify-between w-full items-center"},[e("p",{staticClass:"mr-3"},[this._v("Username")]),this._v(" "),e("input",{attrs:{type:"text",id:"username",name:"username"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"option text flex justify-between w-full items-center"},[e("p",{staticClass:"mr-3"},[this._v("Password")]),this._v(" "),e("input",{attrs:{type:"password",id:"password",name:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"option text narrow flex justify-between w-full items-center"},[e("p",{staticClass:"mr-3"},[this._v("Max speed")]),this._v(" "),e("input",{attrs:{type:"text",id:"max_speed",name:"max_speed",placeholder:"100M"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"option text narrow flex justify-between w-full items-center"},[e("p",{staticClass:"mr-3"},[this._v("Download threads")]),this._v(" "),e("input",{attrs:{type:"text",id:"max_threads",name:"max_threads",placeholder:"10"}})])}],!1,null,"e4fac65e",null);e.default=component.exports;installComponents(component,{Spacer:o(245).default,Toggle:o(256).default,LogBox:o(257).default})}}]);