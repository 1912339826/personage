webpackJsonp([1],{"7Vqr":function(A,t){},"81Pq":function(A,t){},AJpu:function(A,t){},NHnr:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){var A=this.$createElement,t=this._self._c||A;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App",components:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},s,!1,function(A){e("AJpu")},null,null).exports,a=e("/ocq"),c={name:"",components:{},props:{},data:function(){return{fon:new Function}},created:function(){},mounted:function(){var A=this;window.onload=function(){A.fon=new function(A){for(var t in this.lineWidth=5,this.color="#000",this.background="#fff",A)this[t]=A[t];if(this.canvas=document.createElement("canvas"),!this.canvas.getContext||!this.canvas.getContext("2d"))return this.section=document.createElement("section"),this.section.className="errorCanvas",this.section.innerHTML="对不起，当前浏览器暂不支持此功能！",void this.el.prepend(this.section);this.canvas.width=this.el.clientWidth,this.canvas.height=this.el.clientHeight,this.el.prepend(this.canvas),this.cxt=this.canvas.getContext("2d"),this.cxt.fillStyle=this.background,this.cxt.fillRect(0,0,this.canvas.width,this.canvas.height),console.log(this.canvas.height),this.cxt.strokeStyle=this.color,this.cxt.lineWidth=this.lineWidth,this.cxt.lineCap="round",this.cxt.lineJoin="round",this.cxt.shadowBlur=1,this.cxt.shadowColor="#000",this.canvas.addEventListener("touchstart",function(A){this.cxt.beginPath(),this.cxt.moveTo(A.changedTouches[0].pageX,A.changedTouches[0].pageY)}.bind(this),!1),this.canvas.addEventListener("touchmove",function(A){this.cxt.lineTo(A.changedTouches[0].pageX,A.changedTouches[0].pageY),this.cxt.stroke()}.bind(this),!1),this.canvas.addEventListener("touchend",function(A){this.cxt.closePath()}.bind(this),!1),this.clearEl.addEventListener("click",function(){this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height)}.bind(this),!1),this.saveEl.addEventListener("click",function(){var A=this.canvas.toDataURL("image/png"),t=this.canvas.toDataURL("image/jpeg",.8);console.log(A,t)}.bind(this),!1)}({el:document.querySelector("#canvas"),clearEl:document.querySelector("#clearCanvas"),saveEl:document.querySelector("#saveCanvas"),cancelEl:document.querySelector("#cancelCanvas")})}},activated:function(){},update:function(){},methods:{},filters:{},computed:{},watch:{}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var A=this.$createElement,t=this._self._c||A;return t("div",{attrs:{id:"Signature"}},[t("div",{attrs:{id:"canvas"}},[t("div",{staticClass:"button_"},[t("p",{attrs:{id:"clearCanvas"}},[this._v("清除")]),this._v(" "),t("p",{attrs:{id:"saveCanvas"}},[this._v("保存")]),this._v(" "),t("p",{attrs:{id:"cancelCanvas"}},[this._v("取消")])])])])}]};var B={name:"",components:{},props:{},data:function(){return{fon:new Function}},created:function(){},mounted:function(){this.lineCanvas(document.querySelector("#canvas_box").clientWidth,document.querySelector("#canvas_box").clientHeight)},activated:function(){},update:function(){},methods:{lineCanvas:function(A,t){var e=this;function i(i){for(var s in this.lineWidth=5,this.color="#000",this.background="#fff",i)this[s]=i[s];this.canvas=document.getElementsByTagName("canvas")[0],this.canvas.width=A,this.canvas.height=t,console.log(this.canvas.width,this.canvas.height,"11111111",A),this.cxt=this.canvas.getContext("2d"),this.cxt.fillStyle=this.background,this.cxt.fillRect(0,0,this.canvas.width,this.canvas.height),this.cxt.lineWidth=this.lineWidth,this.cxt.lineCap="round",this.cxt.lineJoin="round",this.cxt.shadowBlur=1,this.cxt.shadowColor="#000",this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.addEventListener("touchstart",function(A){this.cxt.beginPath(),this.cxt.moveTo(A.changedTouches[0].pageX,A.changedTouches[0].pageY)}.bind(this),!1),this.canvas.addEventListener("touchmove",function(A){this.cxt.lineTo(A.changedTouches[0].pageX,A.changedTouches[0].pageY),this.cxt.stroke()}.bind(this),!1),this.canvas.addEventListener("touchend",function(A){this.cxt.closePath()}.bind(this),!1),this.clearEl.addEventListener("click",function(){this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height)}.bind(this),!1),this.saveEl.addEventListener("click",function(){var A=this.canvas.toDataURL("image/png");e.save(A)}.bind(this),!1),this.cancelEl.addEventListener("click",function(){this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height),e.cancel()}.bind(this),!1)}window.onload=function(){e.fon=new i({el:document.querySelector("#canvas_box"),clearEl:document.querySelector("#clearCanvas"),saveEl:document.querySelector("#saveCanvas"),cancelEl:document.querySelector("#cancelCanvas")})}},save:function(A){"data:image/png;base64,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"==A||console.log(A)},cancel:function(){console.log("取消")}},filters:{},computed:{},watch:{}},Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var A=this.$createElement,t=this._self._c||A;return t("div",{attrs:{id:"Signature"}},[t("div",{attrs:{id:"canvas"}},[t("section",{staticClass:"canvas_box",attrs:{id:"canvas_box"}},[t("canvas")]),this._v(" "),t("div",{staticClass:"button_"},[t("p",{attrs:{id:"clearCanvas"}},[this._v("清除")]),this._v(" "),t("p",{attrs:{id:"saveCanvas"}},[this._v("保存")]),this._v(" "),t("p",{attrs:{id:"cancelCanvas"}},[this._v("取消")])])])])}]};var o={name:"SignatureTwo",components:{},props:{},data:function(){return{}},created:function(){},mounted:function(){window.onload=function(){new function(A){for(var t in this.linewidth=1,this.color="#000000",this.background="#ffffff",A)this[t]=A[t];this.canvas=document.createElement("canvas"),this.el.appendChild(this.canvas),this.cxt=this.canvas.getContext("2d"),this.canvas.width=this.el.clientWidth,this.canvas.height=this.el.clientHeight,this.cxt.fillStyle=this.background,this.cxt.fillRect(0,0,this.canvas.width,this.canvas.width),this.cxt.strokeStyle=this.color,this.cxt.lineWidth=this.linewidth,this.cxt.lineCap="round",this.canvas.addEventListener("touchstart",function(A){this.cxt.beginPath(),this.cxt.moveTo(A.changedTouches[0].pageX,A.changedTouches[0].pageY)}.bind(this),!1),this.canvas.addEventListener("touchmove",function(A){this.cxt.lineTo(A.changedTouches[0].pageX,A.changedTouches[0].pageY),this.cxt.stroke()}.bind(this),!1),this.canvas.addEventListener("touchend",function(){this.cxt.closePath()}.bind(this),!1),this.clearEl.addEventListener("click",function(){this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height)}.bind(this),!1),this.saveEl.addEventListener("click",function(){var A=this.canvas.toDataURL();console.log(A)}.bind(this),!1)}({el:document.getElementById("canvas"),clearEl:document.getElementById("clearCanvas"),saveEl:document.getElementById("saveCanvas")})}},activated:function(){},update:function(){},methods:{},filters:{},computed:{},watch:{}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var A=this.$createElement,t=this._self._c||A;return t("div",{attrs:{id:"SignatureTwo"}},[t("div",{attrs:{id:"canvas"}},[t("p",{attrs:{id:"clearCanvas"}},[this._v("清除")]),this._v(" "),t("p",{attrs:{id:"saveCanvas"}},[this._v("保存")])])])}]};var E={name:"home",components:{SignatureOne:e("VU/8")(c,g,!1,function(A){e("7Vqr")},"data-v-69c7b44c",null).exports,SignatureDome:e("VU/8")(B,Q,!1,function(A){e("TiuR")},"data-v-5ee9afe2",null).exports,SignatureTwo:e("VU/8")(o,h,!1,function(A){e("Thx/")},"data-v-135d864d",null).exports},props:{},data:function(){return{}},created:function(){},mounted:function(){},activated:function(){},update:function(){},methods:{},filters:{},computed:{},watch:{}},I={render:function(){var A=this.$createElement,t=this._self._c||A;return t("div",{attrs:{id:"home"}},[t("SignatureTwo")],1)},staticRenderFns:[]};var u=e("VU/8")(E,I,!1,function(A){e("81Pq")},"data-v-dafbd440",null).exports;i.default.use(a.a);var C=new a.a({routes:[{path:"/"},{path:"/home",name:"home",component:u,children:[]}]}),d=(e("uMhA"),e("zL8q")),r=e.n(d),l=(e("tvR6"),e("XLwt")),S=e.n(l),w=(e("tcAE"),e("oPmM")),v=e.n(w);i.default.prototype.$txt=function(A){var t=new XMLHttpRequest,e="file:"===document.location.protocol?0:200;return t.open("GET",A,!1),t.overrideMimeType("text/html;charset=utf-8"),t.send(null),t.status===e?t.responseText:null},S.a.dataTool=e("4/S3"),i.default.prototype.$echarts=S.a,i.default.prototype.$dataTool=S.a.dataTool,i.default.use(v.a),i.default.config.productionTip=!1,i.default.use(r.a);var x=new i.default;new i.default({el:"#app",router:C,data:{Bus:x},components:{App:n},template:"<App/>"})},"Thx/":function(A,t){},TiuR:function(A,t){},oPmM:function(A,t){},tvR6:function(A,t){},uMhA:function(A,t){}},["NHnr"]);