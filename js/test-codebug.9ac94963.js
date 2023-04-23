"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[5297],{1567:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var a=t(5500);function l(e,r,t,l,n,o){const d=(0,a.up)("el-alert"),u=(0,a.up)("el-button"),s=(0,a.up)("el-card"),i=(0,a.up)("el-col"),c=(0,a.up)("el-row"),w=(0,a.up)("el-main");return(0,a.wg)(),(0,a.j4)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{title:"通过VUE开放的errorHandler可以很方便的捕捉到处理异常, SCUI收集后可上报日志收集系统, 相关代码:@/utils/errorHandler.js",type:"success",style:{"margin-bottom":"20px"}}),(0,a.Wm)(c,{gutter:15},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"ReferenceError"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.ReferenceError},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"TypeError"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.TypeError},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"RangeError"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.RangeError},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"API 401"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.api401},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"API 404"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.api404},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"API 500"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.api500},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(i,{lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",header:"Router 404"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{type:"danger",onClick:o.router404},{default:(0,a.w5)((()=>[(0,a.Uk)("模拟触发")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d,{title:":) 尝试模拟SyntaxError语法错误时,发现VUE编译失败,所以这不作模拟了",type:"info",style:{"margin-top":"20px"}})])),_:1})}t(4567);var n={name:"codebug",data(){return{}},mounted(){},methods:{ReferenceError(){console.log(obj)},TypeError(){const e=null;console.log(e.a)},RangeError(){const e=1;e.toFixed(101)},async api401(){await this.$API.demo.status.get(401)},async api404(){await this.$API.demo.status.get(404)},async api500(){await this.$API.demo.status.get(500)},router404(){this.$router.push("/page/404")}}},o=t(7068);const d=(0,o.Z)(n,[["render",l]]);var u=d}}]);