import{p as e}from"./propTypes-BrA6lfYr.js";import{u as s}from"./useDesign-BvV_xiJk.js";import{u as a}from"./layoutContentResize-3n0x-1iH.js";import{d as r}from"./useAppInject-BhOAEsGY.js";import{d as t,r as i,i as o,b as n,V as p,o as f,c as l,h as d,w as m,a as c,n as u,bv as g,ba as h}from"./index-DRiF00Hx.js";const y=t({name:"IFrame",props:{frameSrc:e.string.def("")},setup(){const e=i(!0),t=i(),{prefixCls:p}=s("iframe-page"),{on:f,emit:l}=a(),{height:d}=r();f((function(){const e=n(t);if(!e)return;e.style.height=`${n(d)}px`}));return{getWrapStyle:o((()=>({height:`${n(d)}px`}))),loading:e,frameRef:t,prefixCls:p,hideLoading:function(){e.value=!1,l()}}}}),x=["src"];const j=p(y,[["render",function(e,s,a,r,t,i){const o=h;return f(),l("div",{class:u(e.prefixCls),style:g(e.getWrapStyle)},[d(o,{show:e.loading,size:"large",style:g(e.getWrapStyle)},{default:m((()=>[c("iframe",{ref:"frameRef",src:e.frameSrc,class:u(`${e.prefixCls}__main`),onLoad:s[0]||(s[0]=(...s)=>e.hideLoading&&e.hideLoading(...s))},null,42,x)])),_:1},8,["show","style"])],6)}],["__scopeId","data-v-3bda7496"]]);export{j as default};
