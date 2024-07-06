var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,o,i)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,a=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))i.call(a,l)&&r(e,l,a[l]);return e};import{_ as l}from"./Icon-CRcO2jOk.js";import{B as s,_ as n}from"./TableAction-O37uf_Pg.js";import{_ as p}from"./BasicForm-qOHCsuot.js";import{u as m}from"./useForm-KCRZjC-K.js";import{k as u,d as c,l as d,r as j,m as f,p as b,o as h,e as y,w as k,h as v,b as g,q as w,B as S,N as _,_ as P}from"./index-BLWT44Eo.js";import{_ as x}from"./Avatar-pV84KNML.js";import{N}from"./Icon-DLWgwdKK.js";import{_ as q}from"./Space-B9frXtWC.js";import"./propTypes-BrA6lfYr.js";import"./useDesign-CZnxk_Lj.js";import"./vuedraggable-DPwRvjoG.js";import"./componentSetting-C8-BnnRr.js";import"./Tooltip-anTY7wtM.js";import"./_baseIsEqual-BGsWZIhh.js";import"./get-C07Juxwr.js";import"./format-length-l2rsThpR.js";import"./cssr-Bn6OPr4i.js";import"./use-merged-state-DCdOf7ht.js";import"./next-frame-once-DiJwGkuW.js";import"./Checkbox-D1qHqI7h.js";import"./Divider-BIoCbvN2.js";import"./useWindowSizeFn-DLIVMrXN.js";import"./Input-BelaXqkC.js";import"./use-locale-7p-wVYXM.js";import"./InputNumber-D-AHAWQT.js";import"./light-C72C8OYA.js";import"./Add-CzCGN0lD.js";import"./Select-DqydGNb3.js";import"./utils-Ur8S4I8h.js";import"./Checkmark-COOfFbaS.js";import"./Empty-BfqMuUzh.js";import"./Tag-Bmq0WN4v.js";import"./light-CNoan_WW.js";import"./attribute-Cap6sGiE.js";import"./Switch-D1kMYwab.js";import"./light-hewbUTA9.js";import"./DatePicker-C5rP7mE9.js";import"./index-DVGRNl7o.js";import"./RadioGroup-B2rFP7HH.js";import"./get-slot-BjAOOWF7.js";import"./isEqual-BiDbZAVD.js";import"./DataTable-C0kPRk4D.js";import"./Dropdown-DYvk341l.js";import"./ChevronRight-Bi2575K4.js";import"./create-ref-setter-DNc6_3jH.js";import"./Ellipsis-DnWSkqpp.js";import"./prop-Cw6lxrfM.js";import"./Popselect-CsqDIKho.js";import"./useBreakpoint-BeUap6gk.js";import"./light-g9fEKwFD.js";import"./ColorPicker--twUTkIu.js";import"./convert-BEzjbT9T.js";import"./Slider-BwH87vok.js";import"./utils-C-DyHkjJ.js";import"./RadioButton-DKPfpUY1.js";import"./FormItem-DN9aaP3F.js";import"./text-CvtvQEOx.js";import"./Grid-cihNI7Wf.js";import"./use-breakpoints-DcVC2Cdm.js";import"./light-DFJtCmXp.js";const C=[{title:"id",key:"id",width:100},{title:"名称",key:"name",width:100},{title:"头像",key:"avatar",width:100,render:e=>u(x,{size:48,src:e.avatar})},{title:"地址",key:"address",auth:["super"],ifShow:()=>!0,width:150},{title:"开始日期",key:"beginTime",width:160},{title:"结束日期",key:"endTime",width:160},{title:"创建时间",key:"date",width:100}],D=[{field:"name",labelMessage:"这是一个提示",component:"NInput",label:"姓名",required:!0,componentProps:{onInput:e=>{}}},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1}},{field:"type",component:"NSelect",label:"类型",componentProps:{options:[{label:"类型一",value:1},{label:"类型二",value:2}]}},{field:"makeDate",component:"NDatePicker",label:"预约时间",defaultValue:164313526e4},{field:"makeTime",component:"NTimePicker",label:"停留时间"},{field:"makeSource",component:"NRadioGroup",label:"来源",defaultValue:1,componentProps:{options:[{label:"来源一",value:1},{label:"来源二",value:2}]}}],I=[{field:"name",component:"NInput",label:"名称",required:!0},{field:"address",component:"NInputTextarea",label:"地址",required:!0},{field:"date",component:"NDatePicker",label:"日期",required:!0}],T=c({__name:"basic",setup(e){const{service:t}=d(),o=j(null),i=f(),r=j(),c=j(!1),x=j(!1),T=b({name:"",address:"",date:null}),R=j({page:1,pageSize:10}),B=b({width:220,title:"操作",key:"action",fixed:"right",render:e=>u(n,{style:"button",actions:[{label:"删除",icon:"ic:outline-delete-outline",quaternary:!0,type:"error",popConfirm:{title:"真的要删除吗？",icon:"ic:outline-delete-outline",onPositiveClick:V.bind(null,e)},ifShow:()=>!0,auth:["super"]},{label:"编辑",quaternary:!0,type:"info",onClick:U.bind(null,e),ifShow:()=>!0,auth:["super"]}],dropDownActions:[{label:"启用",key:"enabled",ifShow:()=>!0},{label:"禁用",key:"disabled",ifShow:()=>!0}],select:e=>{i.info(`您点击了，${e} 按钮`)}})}),[E]=m({gridProps:{cols:"1 sm:2 xl:3",xGap:24},inline:!0,schemas:D});function O(){c.value=!0}const z=e=>{return o=this,i=null,r=function*(){return yield t.demo.table.demoListApi(a(a(a({},T),R.value),e))},new Promise(((e,t)=>{var a=e=>{try{s(r.next(e))}catch(o){t(o)}},l=e=>{try{s(r.throw(e))}catch(o){t(o)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,l);s((r=r.apply(o,i)).next())}));var o,i,r};function A(e){}function F(){r.value.reload()}function G(e){e.preventDefault(),x.value=!0,o.value.validate((e=>{e?i.error("请填写完整信息"):(i.success("新建成功"),setTimeout((()=>{c.value=!1,F()}))),x.value=!1}))}function U(e){i.info("点击了编辑")}function V(e){i.info("点击了删除")}function M(e){F()}function K(e){}return(e,t)=>{const o=l,i=N,a=S,n=q,m=_,u=P;return h(),y(u,{bordered:!1},{default:k((()=>[v(g(p),{onRegister:g(E),onSubmit:M,onReset:K},null,8,["onRegister"]),v(g(s),{ref_key:"actionRef",ref:r,columns:g(C),request:z,"row-key":e=>e.id,pagination:{pageSizes:[5,10,15]},"can-resize":!0,"action-column":B,"scroll-x":1090,"onUpdate:dropEditor":U,"onUpdate:dropDelete":V,"onUpdate:checkedRowKeys":A,title:"基础表格",titleTooltip:"温馨提醒"},{toolbar:k((()=>[v(a,{class:"mr-8px",type:"primary",onClick:O},{icon:k((()=>[v(i,null,{default:k((()=>[v(o,{icon:"ant-design:plus-outlined"})])),_:1})])),default:k((()=>[w(" 新建 ")])),_:1}),v(a,{type:"primary",onClick:F},{default:k((()=>[w("刷新数据")])),_:1})])),_:1},8,["columns","row-key","action-column"]),v(m,{show:c.value,"onUpdate:show":t[1]||(t[1]=e=>c.value=e),"show-icon":!1,preset:"dialog",title:"新建"},{action:k((()=>[v(n,null,{default:k((()=>[v(a,{onClick:t[0]||(t[0]=()=>c.value=!1)},{default:k((()=>[w("取消")])),_:1}),v(a,{type:"info",loading:x.value,onClick:G},{default:k((()=>[w("确定")])),_:1},8,["loading"])])),_:1})])),default:k((()=>[v(g(p),{schemas:g(I),onSubmit:M,onReset:K},null,8,["schemas"])])),_:1},8,["show"])])),_:1})}}});export{T as default};
