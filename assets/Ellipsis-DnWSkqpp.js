import{y as e,ai as i,z as t,d as l,ha as n,G as s,fP as r,r as o,i as a,dH as c,k as p,U as d}from"./index-BLWT44Eo.js";import{_ as u}from"./Tooltip-anTY7wtM.js";const g=e("ellipsis",{overflow:"hidden"},[i("line-clamp","\n white-space: nowrap;\n display: inline-block;\n vertical-align: bottom;\n max-width: 100%;\n "),t("line-clamp","\n display: -webkit-inline-box;\n -webkit-box-orient: vertical;\n "),t("cursor-pointer","\n cursor: pointer;\n ")]);function v(e){return`${e}-ellipsis--line-clamp`}function f(e,i){return`${e}-ellipsis--cursor-${i}`}const m=Object.assign(Object.assign({},s.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),h=l({name:"Ellipsis",inheritAttrs:!1,props:m,setup(e,{slots:i,attrs:t}){const l=n(),u=s("Ellipsis","-ellipsis",g,r,e,l),m=o(null),h=o(null),b=o(null),w=o(!1),T=a((()=>{const{lineClamp:i}=e,{value:t}=w;return void 0!==i?{textOverflow:"","-webkit-line-clamp":t?"":i}:{textOverflow:t?"":"ellipsis","-webkit-line-clamp":""}}));function k(){let i=!1;const{value:t}=w;if(t)return!0;const{value:n}=m;if(n){const{lineClamp:t}=e;if(function(i){if(!i)return;const t=T.value,n=v(l.value);void 0!==e.lineClamp?C(i,n,"add"):C(i,n,"remove");for(const e in t)i.style[e]!==t[e]&&(i.style[e]=t[e])}(n),void 0!==t)i=n.scrollHeight<=n.offsetHeight;else{const{value:e}=h;e&&(i=e.getBoundingClientRect().width<=n.getBoundingClientRect().width)}!function(i,t){const n=f(l.value,"pointer");"click"!==e.expandTrigger||t?C(i,n,"remove"):C(i,n,"add")}(n,i)}return i}const x=a((()=>"click"===e.expandTrigger?()=>{var e;const{value:i}=w;i&&(null===(e=b.value)||void 0===e||e.setShow(!1)),w.value=!i}:void 0));c((()=>{var i;e.tooltip&&(null===(i=b.value)||void 0===i||i.setShow(!1))}));function C(e,i,t){"add"===t?e.classList.contains(i)||e.classList.add(i):e.classList.contains(i)&&e.classList.remove(i)}return{mergedTheme:u,triggerRef:m,triggerInnerRef:h,tooltipRef:b,handleClick:x,renderTrigger:()=>p("span",Object.assign({},d(t,{class:[`${l.value}-ellipsis`,void 0!==e.lineClamp?v(l.value):void 0,"click"===e.expandTrigger?f(l.value,"pointer"):void 0],style:T.value}),{ref:"triggerRef",onClick:x.value,onMouseenter:"click"===e.expandTrigger?k:void 0}),e.lineClamp?i:p("span",{ref:"triggerInnerRef"},i)),getTooltipDisabled:k}},render(){var e;const{tooltip:i,renderTrigger:t,$slots:l}=this;if(i){const{mergedTheme:n}=this;return p(u,Object.assign({ref:"tooltipRef",placement:"top"},i,{getDisabled:this.getTooltipDisabled,theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip}),{trigger:t,default:null!==(e=l.tooltip)&&void 0!==e?e:l.default})}return t()}});export{h as _,f as a,v as c,m as e,g as s};
