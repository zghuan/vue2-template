"use strict";(self["webpackChunkvue2_test_eslint"]=self["webpackChunkvue2_test_eslint"]||[]).push([[177],{559:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("button",{on:{click:function(e){return t.go("/layout")}}},[t._v("布局")]),e("button",{on:{click:function(e){return t.go("/topics")}}},[t._v("观察者模式")])])},i=[];s(7658);class r{constructor(t){this.status="pending",this.successVal="",this.failReason="",this.successfunArr=[],this.errorfunArr=[],this.thenValue="";const e=t=>{"pending"===this.status&&(this.status="fulfilled",this.successVal=t,this.successfunArr&&this.successfunArr.forEach((t=>{this.thenValue=t(this.thenValue||this.successVal),this.successVal=void 0})))},s=t=>{"pending"===this.status&&(this.status="rejected",this.failReason=t,this.errorfunArr&&this.errorfunArr.forEach((t=>t(this.failReason))))};t(e,s)}then(t,e){return"pending"===this.status&&(this.successfunArr.push(t),"function"===typeof e&&this.errorfunArr.push(e)),"fulfilled"===this.status&&(this.thenValue=t(this.thenValue||this.successVal),this.successVal=void 0),"rejected"===this.status&&"function"===typeof e&&e(this.failReason),this}catch(t){"pending"===this.status&&this.errorfunArr.push(t),"rejected"===this.status&&t(this.failReason)}}r.resolve=t=>new r((e=>{e(t)})),r.reject=t=>new r(((e,s)=>{s(t)}));var a=s(3344);class o{constructor(){this.name="alwa-es6"}getName(){return this.name}}class c extends o{constructor(){super(),this.age=18}getInfo(){return this}}function l(){this.name="alwa-es5"}function u(){this.age=19}l.prototype.getName=function(){return this.name},u.prototype=new l,u.prototype.getInfo=function(){return this};var h={name:"Home",data(){return{show:!1,originObj:{a:1,b:{c:3},e:[1,2,3],f:function(){}}}},created(){this.$root.name="曾"},methods:{go(t){this.$router.push(t)},protoExtend(){const t=new c;t.getInfo().name;const e=new u;e.getInfo().name},testClone(){(0,a.bV)(this.originObj),(0,a.I8)(this.originObj);this.originObj.a=2,this.originObj.b.c=4,this.originObj.e[0]="zgh"},testPromise(){this.promise1(),this.promise2(),this.promise3()},promise3(){const t=new r(((t,e)=>{t(1)}));t.then((t=>r.resolve(2))).then((t=>{t.then((t=>{}))}))},promise2(){const t=new r(((t,e)=>{t(1)}));t.then((t=>"alwa1")).then((t=>"alwa2"))},promise1(){new r(((t,e)=>{setTimeout((()=>{t(1)}),1e3)})).then((t=>"alwa1"),(t=>{})).then((t=>"alwa2")).then((t=>{}))}}},d=h,f=s(1001),m=(0,f.Z)(d,n,i,!1,null,"6e8bddd2",null),g=m.exports},2698:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid"},[e("div",{staticClass:"space-around flex-align fixed-0"},[e("span",{directives:[{name:"anchor",rawName:"v-anchor",value:"grid1",expression:"'grid1'"}]},[t._v("常见宫格")]),e("span",{directives:[{name:"anchor",rawName:"v-anchor",value:"grid2",expression:"'grid2'"}]},[t._v("特殊布局")]),e("span",{directives:[{name:"anchor",rawName:"v-anchor",value:"grid3",expression:"'grid3'"}]},[t._v("自动布局")]),e("span",{directives:[{name:"anchor",rawName:"v-anchor",value:"grid4",expression:"'grid4'"}]},[t._v("瀑布流")])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"grid1"},[t._l(t.n,(function(s){return[e("div",{key:s,staticClass:"item1 flex-align flex-center"},[t._v(t._s(s))])]}))],2),e("div",{staticClass:"functional"},[e("button",{on:{click:function(e){t.loading=!t.loading}}},[t._v("自定义loading")]),e("button",{on:{click:function(e){return t.openToast("alwa")}}},[t._v("js调用toast")])]),e("div",{staticClass:"grid2"},[t._l(t.n2,(function(s){return[e("div",{key:s,staticClass:"item2 flex-align flex-center",class:"area"+s},[t._v(t._s(s))])]}))],2),e("div",{staticClass:"grid3"},[t._l(t.n,(function(s){return[e("div",{key:s,staticClass:"item3 flex-align flex-center",style:{"grid-column-start":"span "+(s%3===0?2:1)}},[t._v(t._s(s))])]}))],2),e("div",{staticClass:"grid4"},[t._l(t.list,(function(s){return[e("div",{key:s,staticClass:"item4 flex-align flex-center",style:{height:t.randomWidth(50,300)}},[t._v(t._s(s))])]}))],2)])},i=[],r=(s(7658),s(3344)),a={name:"Grid",data(){return{debounce:r.Ds,loading:!1,n:8,n2:6,list:[...new Array(10).keys()]}},mounted(){this.$root.name,window.addEventListener("scroll",(0,r.P2)((t=>{this.scrollBottom()}),500))},methods:{openToast:(0,r.Ds)((function(t){this.$Toast("加载呀~")}),500),scrollBottom(){const t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+e)>=s-100&&this.loadMore()},loadMore(){this.list.length<20&&this.list.push(...new Array(10).keys())},randomWidth(t,e){return Math.floor(Math.random()*(e-t+1)+t)+"px"}}},o=a,c=s(1001),l=(0,c.Z)(o,n,i,!1,null,"c38dcf94",null),u=l.exports}}]);