"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[9798],{2004:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var i=n(5500),l=n(6938);const o=(0,i._)("div",{style:{height:"500px",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",color:"#999"}}," 试试看在上下左右四个角落右键，看看边缘位置修正效果 ",-1);function s(e,t,n,s,a,u){const m=(0,i.up)("el-alert"),c=(0,i.up)("el-empty"),d=(0,i.up)("el-table-column"),r=(0,i.up)("el-table"),f=(0,i.up)("el-card"),h=(0,i.up)("el-col"),p=(0,i.up)("el-row"),w=(0,i.up)("el-main"),b=(0,i.up)("sc-contextmenu-item"),g=(0,i.up)("sc-contextmenu");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{gutter:15},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{lg:12},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{shadow:"never"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{title:"试试右键表格行看看. 支持多级菜单, 动态菜单等等等...",type:"success",style:{"margin-bottom":"20px"}}),(0,i.Wm)(r,{ref:"table",data:a.tableData,"highlight-current-row":"",onRowContextmenu:u.rowContextmenu},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{type:"expand"},{default:(0,i.w5)((e=>[(0,i.Wm)(c,{description:e.row.id+" 自定义扩展行","image-size":60},null,8,["description"])])),_:1}),(0,i.Wm)(d,{prop:"id",label:"ID",width:"50"}),(0,i.Wm)(d,{prop:"name",label:"NAME",width:"220"}),(0,i.Wm)(d,{prop:"date",label:"DATE"}),(0,i.Wm)(d,{prop:"state",label:"STATE"})])),_:1},8,["data","onRowContextmenu"])])),_:1})])),_:1}),(0,i.Wm)(h,{lg:12},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{shadow:"never",onContextmenu:(0,l.iM)(u.openMenu,["prevent"])},{default:(0,i.w5)((()=>[o])),_:1},8,["onContextmenu"])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(g,{ref:"contextmenu",onCommand:u.handleCommand,onVisibleChange:u.visibleChange},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{command:"a",title:"返回(B)",suffix:"Alt+←"}),(0,i.Wm)(b,{command:"b",title:"重新加载(R)",suffix:"Ctrl+R",icon:"el-icon-refresh"}),(0,i.Wm)(b,{title:"切换兼容性模式",divided:""},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{command:"c1",title:"二级菜单1"}),(0,i.Wm)(b,{title:"二级菜单2"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{command:"c2-1",title:"三级菜单1"}),(0,i.Wm)(b,{command:"c2-2",title:"三级菜单2"}),(0,i.Wm)(b,{command:"c2-3",title:"三级菜单3"})])),_:1}),(0,i.Wm)(b,{command:"c3",title:"二级菜单3"})])),_:1}),(0,i.Wm)(b,{command:"d",title:"属性(P)",divided:"",disabled:a.row&&0==a.row.state},null,8,["disabled"]),a.row&&0==a.row.state?((0,i.wg)(),(0,i.j4)(b,{key:0,command:"e",title:"设置state=1"})):(0,i.kq)("",!0)])),_:1},8,["onCommand","onVisibleChange"])],64)}var a=n(5192);const u={class:"sc-contextmenu__menu"};function m(e,t,n,o,s,m){return(0,i.wg)(),(0,i.j4)(l.uT,{name:"el-zoom-in-top"},{default:(0,i.w5)((()=>[s.visible?((0,i.wg)(),(0,i.iD)("div",{key:0,ref:"contextmenu",class:"sc-contextmenu",style:(0,a.j5)({left:s.left+"px",top:s.top+"px"}),onContextmenu:t[0]||(t[0]=(0,l.iM)(((...e)=>m.fun&&m.fun(...e)),["prevent"]))},[(0,i._)("ul",u,[(0,i.WI)(e.$slots,"default")])],36)):(0,i.kq)("",!0)])),_:3})}var c={provide(){return{menuClick:this.menuClick}},data(){return{visible:!1,top:0,left:0}},watch:{visible(e){e?document.body.addEventListener("click",this.cm,!0):document.body.removeEventListener("click",this.cm,!0)}},mounted(){},methods:{cm(e){let t=this.$refs.contextmenu;t&&!t.contains(e.target)&&this.closeMenu()},menuClick(e){this.closeMenu(),this.$emit("command",e)},openMenu(e){e.preventDefault(),this.visible=!0,this.left=e.clientX+1,this.top=e.clientY+1,this.$nextTick((()=>{var t=e.clientX+1,n=e.clientY+1,i=window.innerWidth,l=window.innerHeight,o=this.$refs.contextmenu.offsetHeight,s=this.$refs.contextmenu.offsetWidth;this.left=t+s>i?i-s:t,this.top=n+o>l?n-o:n})),this.$emit("visibleChange",!0)},closeMenu(){this.visible=!1,this.$emit("visibleChange",!1)},fun(){return!1}}},d=n(7068);const r=(0,d.Z)(c,[["render",m]]);var f=r;const h={key:0},p={class:"title"},w={class:"sc-contextmenu__suffix"},b={key:0,class:"sc-contextmenu__menu"};function g(e,t,n,o,s,u){const m=(0,i.up)("el-icon"),c=(0,i.up)("el-icon-arrow-right");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n.divided?((0,i.wg)(),(0,i.iD)("hr",h)):(0,i.kq)("",!0),(0,i._)("li",{class:(0,a.C_)(n.disabled?"disabled":""),onClick:t[0]||(t[0]=(0,l.iM)(((...e)=>u.liClick&&u.liClick(...e)),["stop"])),onMouseenter:t[1]||(t[1]=e=>u.openSubmenu(e)),onMouseleave:t[2]||(t[2]=e=>u.closeSubmenu(e))},[(0,i._)("span",p,[(0,i.Wm)(m,{class:"sc-contextmenu__icon"},{default:(0,i.w5)((()=>[n.icon?((0,i.wg)(),(0,i.j4)((0,i.LL)(n.icon),{key:0})):(0,i.kq)("",!0)])),_:1}),(0,i.Uk)(" "+(0,a.zw)(n.title),1)]),(0,i._)("span",w,[e.$slots.default?((0,i.wg)(),(0,i.j4)(m,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(c)])),_:1})):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,a.zw)(n.suffix),1)],64))]),e.$slots.default?((0,i.wg)(),(0,i.iD)("ul",b,[(0,i.WI)(e.$slots,"default")])):(0,i.kq)("",!0)],34)],64)}var v={props:{command:{type:String,default:""},title:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},divided:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},inject:["menuClick"],methods:{liClick(){return!this.$slots.default&&(!this.disabled&&void this.menuClick(this.command))},openSubmenu(e){var t=e.target.querySelector("ul");if(!t)return!1;if(this.disabled)return!1;t.style.display="inline-block";var n=t.getBoundingClientRect(),i=n.left,l=n.top,o=window.innerWidth,s=window.innerHeight,a=t.offsetHeight,u=t.offsetWidth;i+u>o&&(t.style.left="auto",t.style.right="100%"),l+a>s&&(t.style.top="auto",t.style.bottom="0")},closeSubmenu(e){var t=e.target.querySelector("ul");if(!t)return!1;t.removeAttribute("style"),t.style.display="none"}}};const x=(0,d.Z)(v,[["render",g]]);var y=x,C={name:"contextmenu",components:{scContextmenu:f,scContextmenuItem:y},data(){return{row:null,tableData:[{id:"1",name:"Sakuya",date:"2021-10-10",state:1},{id:"2",name:"Lolowan(此行右键属性禁用)",date:"2021-10-09",state:0},{id:"3",name:"Ali",date:"2021-10-08",state:1}]}},mounted(){},methods:{rowContextmenu(e,t,n){this.row=e,this.$refs.table.setCurrentRow(e),this.$refs.contextmenu.openMenu(n)},openMenu(e){this.row=null,this.$refs.contextmenu.openMenu(e)},handleCommand(e){this.$message("click on item "+e),"e"==e&&(this.row.state=1)},visibleChange(e){e||this.$refs.table.setCurrentRow()}}};const k=(0,d.Z)(C,[["render",s]]);var W=k}}]);