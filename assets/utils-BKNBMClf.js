import{f7 as e}from"./index-DRiF00Hx.js";const t=e&&"loading"in document.createElement("img"),s=new WeakMap,o=new WeakMap,n=new WeakMap,r=(e,t,r)=>{if(!e)return()=>{};const a=((e={})=>{var t;const{root:s=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):null!==(t=e.threshold)&&void 0!==t?t:"0"}`,options:Object.assign(Object.assign({},e),{root:("string"==typeof s?document.querySelector(s):s)||document.documentElement})}})(t),{root:i}=a.options;let h;const l=s.get(i);let c,d;l?h=l:(h=new Map,s.set(i,h)),h.has(a.hash)?(d=h.get(a.hash),d[1].has(e)||(c=d[0],d[1].add(e),c.observe(e))):(c=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=o.get(e.target),s=n.get(e.target);t&&t(),s&&(s.value=!0)}}))}),a.options),c.observe(e),d=[c,new Set([e])],h.set(a.hash,d));let p=!1;const g=()=>{p||(o.delete(e),n.delete(e),p=!0,d[1].has(e)&&(d[0].unobserve(e),d[1].delete(e)),d[1].size<=0&&h.delete(a.hash),h.size||s.delete(i))};return o.set(e,g),n.set(e,r),g};export{t as i,r as o};
