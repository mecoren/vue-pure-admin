const m=Vue.defineComponent({__name:"filters",setup(i){const l=Vue.ref(),r=e=>{const{clearFilter:t}=l.value.getTableRef();t(e)},s=()=>{r(["date"])},c=[{label:"日期",prop:"date",sortable:!0,columnKey:"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],filterMethod:(e,t,o)=>{const a=o.property;return t[a]===e}},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"标签",prop:"tag",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],filterMethod:(e,t)=>t.tag===e,filterPlacement:"bottom-end",slot:"tag"}],u=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}];return(e,t)=>{const o=Vue.resolveComponent("el-button"),a=Vue.resolveComponent("el-tag"),d=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(o,{onClick:s},{default:Vue.withCtx(()=>[Vue.createTextVNode("reset date filter")]),_:1}),Vue.createVNode(o,{onClick:r},{default:Vue.withCtx(()=>[Vue.createTextVNode("reset all filters")]),_:1}),Vue.createVNode(d,{ref_key:"tableRef",ref:l,"row-key":"date",data:u,columns:c},{tag:Vue.withCtx(({row:n})=>[Vue.createVNode(a,{type:n.tag==="Home"?"":"success","disable-transitions":""},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(n.tag),1)]),_:2},1032,["type"])]),_:1},512)])}}});export{m as _};