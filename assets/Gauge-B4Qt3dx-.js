var t=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;import{_ as s}from"./LoadingCard-CpFYHPPk.js";import{u as i}from"./useECharts-VaeQIWq-.js";import{b as p}from"./chartProps-Bicb7JjS.js";import{u as n}from"./useLoading-2-ALe2M0.js";import{d as l,r as m,o as u,e as f,w as j,a as d,bv as g,b}from"./index-BLWT44Eo.js";import"./Space-B9frXtWC.js";import"./light-DFJtCmXp.js";import"./get-slot-BjAOOWF7.js";import"./Skeleton-Dv8NRC07.js";import"./light-DlnGODcc.js";import"./use-houdini-DDkl0Bo6.js";import"./useRootSetting-B_pBTmqU.js";import"./layoutContentResize-DHiQ2vvp.js";import"./propTypes-BrA6lfYr.js";const c=l({__name:"Gauge",props:((t,s)=>{for(var i in s||(s={}))r.call(s,i)&&a(t,i,s[i]);if(e)for(var i of e(s))o.call(s,i)&&a(t,i,s[i]);return t})({},p("250px")),setup(t){const e=m(),r=n();return i({chartRef:e},{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}",fontSize:"20"},data:[{value:50,name:"SCORE"}]}]}),(t,o)=>{const a=s;return u(),f(a,{loading:b(r),title:"仪表盘"},{default:j((()=>[d("div",{ref_key:"chartRef",ref:e,style:g({width:t.width,height:t.height})},null,4)])),_:1},8,["loading"])}}});export{c as default};
