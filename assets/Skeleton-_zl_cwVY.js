import{x as n,y as e,d as r,G as o,C as t,i as a,a8 as s,bU as i,k as l,U as c,bV as d,a4 as u}from"./index-DRiF00Hx.js";import{s as b}from"./light-Cg5vy_o4.js";import{u as m}from"./use-houdini-Cs4odyph.js";const g=n([e("skeleton","\n height: 1em;\n width: 100%;\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);\n background-color: var(--n-color-start);\n "),n("@keyframes skeleton-loading","\n 0% {\n background: var(--n-color-start);\n }\n 40% {\n background: var(--n-color-end);\n }\n 80% {\n background: var(--n-color-start);\n }\n 100% {\n background: var(--n-color-start);\n }\n ")]),p=r({name:"Skeleton",inheritAttrs:!1,props:Object.assign(Object.assign({},o.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),setup(n){m();const{mergedClsPrefixRef:e}=t(n),r=o("Skeleton","-skeleton",g,b,n,e);return{mergedClsPrefix:e,style:a((()=>{var e,o;const t=r.value,{common:{cubicBezierEaseInOut:a}}=t,l=t.self,{color:c,colorEnd:d,borderRadius:u}=l;let b;const{circle:m,sharp:g,round:p,width:h,height:k,size:f,text:v,animated:y}=n;void 0!==f&&(b=l[s("height",f)]);const x=m?null!==(e=null!=h?h:k)&&void 0!==e?e:b:h,z=null!==(o=m&&null!=h?h:k)&&void 0!==o?o:b;return{display:v?"inline-block":"",verticalAlign:v?"-0.125em":"",borderRadius:m?"50%":p?"4096px":g?"":u,width:"number"==typeof x?i(x):x,height:"number"==typeof z?i(z):z,animation:y?"":"none","--n-bezier":a,"--n-color-start":c,"--n-color-end":d}}))}},render(){const{repeat:n,style:e,mergedClsPrefix:r,$attrs:o}=this,t=l("div",c({class:`${r}-skeleton`,style:e},o));return n>1?l(u,null,d(n,null).map((n=>[t,"\n"]))):t}});export{p as _};
