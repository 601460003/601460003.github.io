"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[2048],{5420:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var a=l(5500);const n={style:{"margin-top":"15px"}};function o(e,t,l,o,s,r){const u=(0,a.up)("el-alert"),d=(0,a.up)("sc-code-editor"),i=(0,a.up)("el-button"),m=(0,a.up)("el-card"),c=(0,a.up)("el-col"),p=(0,a.up)("el-row"),h=(0,a.up)("el-main");return(0,a.wg)(),(0,a.j4)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{title:"感谢codeMirror组件",type:"success",style:{"margin-bottom":"20px"}}),(0,a.Wm)(p,{gutter:15},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{lg:24},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{shadow:"never",header:"JSON"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{ref:"editor",modelValue:s.json,"onUpdate:modelValue":t[0]||(t[0]=e=>s.json=e),mode:"javascript",height:200},null,8,["modelValue"]),(0,a._)("div",n,[(0,a.Wm)(i,{type:"primary",onClick:r.getCode},{default:(0,a.w5)((()=>[(0,a.Uk)("获取v-model")])),_:1},8,["onClick"]),(0,a.Wm)(i,{type:"primary",onClick:r.getValue},{default:(0,a.w5)((()=>[(0,a.Uk)("getValue()")])),_:1},8,["onClick"]),(0,a.Wm)(i,{type:"primary",onClick:r.setValue},{default:(0,a.w5)((()=>[(0,a.Uk)("setValue()")])),_:1},8,["onClick"])])])),_:1})])),_:1}),(0,a.Wm)(c,{lg:12},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{shadow:"never",header:"javascript Darcula主题"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:s.js,"onUpdate:modelValue":t[1]||(t[1]=e=>s.js=e),mode:"javascript",theme:"darcula"},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(c,{lg:12},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{shadow:"never",header:"SQL"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:s.sql,"onUpdate:modelValue":t[2]||(t[2]=e=>s.sql=e),mode:"sql"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}const s=(0,a.RC)((()=>Promise.all([l.e(6054),l.e(3784)]).then(l.bind(l,3784))));var r={name:"codeeditor",components:{scCodeEditor:s},data(){return{json:'{\n\t"name": "SCUI",\n\t"menu": [\n\t\t{\n\t\t\t"title": "VUE 3",\n\t\t\t"type": true,\n\t\t\t"link": "https://v3.cn.vuejs.org"\n\t\t},\n\t\t{\n\t\t\t"title": "elementplus",\n\t\t\t"type": false,\n\t\t\t"link": "https://element-plus.gitee.io"\n\t\t}\n\t]\n}',js:"// Demo code (the actual new parser character stream implementation)\nfunction StringStream(string) {\n\tthis.pos = 0;\n\tthis.string = string;\n}",sql:"SELECT `author`, `title` FROM `posts`\nWHERE `status` = 'draft' AND `author` IN('author1','author2')\nORDER BY `created_at` DESC, `id` DESC LIMIT 0, 10;"}},methods:{getCode(){this.$message("请查看控制台"),console.log(this.json)},getValue(){this.$message("请查看控制台");var e=this.$refs.editor.coder.getValue();console.log(e)},setValue(){var e='{"key":"newValue"}';this.$refs.editor.coder.setValue(e)}}},u=l(7068);const d=(0,u.Z)(r,[["render",o]]);var i=d}}]);