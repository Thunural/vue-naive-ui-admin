import{aU as e,x as n,y as a,z as o,A as r,ax as t,f4 as l,f5 as i,d as s,C as d,G as c,r as u,e$ as h,i as v,F as f,E as m,aA as b,H as p,aB as g,k as w,aa as x,aD as k,am as y,cd as z,cc as C,Y as S}from"./index-DRiF00Hx.js";import{u as D}from"./use-merged-state-D6ChJkmy.js";import{u as T,B as R,a as $,V as B}from"./Tooltip-CFz38RsP.js";import{s as M}from"./light-BWoNxIrM.js";function F(e){return window.TouchEvent&&e instanceof window.TouchEvent}function H(){const n=new Map;return e((()=>{n.clear()})),[n,e=>a=>{n.set(e,a)}]}const A=n([a("slider","\n display: block;\n padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;\n position: relative;\n z-index: 0;\n width: 100%;\n cursor: pointer;\n user-select: none;\n -webkit-user-select: none;\n ",[o("reverse",[a("slider-handles",[a("slider-handle-wrapper","\n transform: translate(50%, -50%);\n ")]),a("slider-dots",[a("slider-dot","\n transform: translateX(50%, -50%);\n ")]),o("vertical",[a("slider-handles",[a("slider-handle-wrapper","\n transform: translate(-50%, -50%);\n ")]),a("slider-marks",[a("slider-mark","\n transform: translateY(calc(-50% + var(--n-dot-height) / 2));\n ")]),a("slider-dots",[a("slider-dot","\n transform: translateX(-50%) translateY(0);\n ")])])]),o("vertical","\n padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);\n width: var(--n-rail-width-vertical);\n height: 100%;\n ",[a("slider-handles","\n top: calc(var(--n-handle-size) / 2);\n right: 0;\n bottom: calc(var(--n-handle-size) / 2);\n left: 0;\n ",[a("slider-handle-wrapper","\n top: unset;\n left: 50%;\n transform: translate(-50%, 50%);\n ")]),a("slider-rail","\n height: 100%;\n ",[r("fill","\n top: unset;\n right: 0;\n bottom: unset;\n left: 0;\n ")]),o("with-mark","\n width: var(--n-rail-width-vertical);\n margin: 0 32px 0 8px;\n "),a("slider-marks","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 22px;\n font-size: var(--n-mark-font-size);\n ",[a("slider-mark","\n transform: translateY(50%);\n white-space: nowrap;\n ")]),a("slider-dots","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 50%;\n ",[a("slider-dot","\n transform: translateX(-50%) translateY(50%);\n ")])]),o("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ",[a("slider-handle","\n cursor: not-allowed;\n ")]),o("with-mark","\n width: 100%;\n margin: 8px 0 32px 0;\n "),n("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[r("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),o("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[r("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks","\n position: absolute;\n top: 18px;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[a("slider-mark","\n position: absolute;\n transform: translateX(-50%);\n white-space: nowrap;\n ")]),a("slider-rail","\n width: 100%;\n position: relative;\n height: var(--n-rail-height);\n background-color: var(--n-rail-color);\n transition: background-color .3s var(--n-bezier);\n border-radius: calc(var(--n-rail-height) / 2);\n ",[r("fill","\n position: absolute;\n top: 0;\n bottom: 0;\n border-radius: calc(var(--n-rail-height) / 2);\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-fill-color);\n ")]),a("slider-handles","\n position: absolute;\n top: 0;\n right: calc(var(--n-handle-size) / 2);\n bottom: 0;\n left: calc(var(--n-handle-size) / 2);\n ",[a("slider-handle-wrapper","\n outline: none;\n position: absolute;\n top: 50%;\n transform: translate(-50%, -50%);\n cursor: pointer;\n display: flex;\n ",[a("slider-handle","\n height: var(--n-handle-size);\n width: var(--n-handle-size);\n border-radius: 50%;\n overflow: hidden;\n transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);\n background-color: var(--n-handle-color);\n box-shadow: var(--n-handle-box-shadow);\n ",[n("&:hover","\n box-shadow: var(--n-handle-box-shadow-hover);\n ")]),n("&:focus",[a("slider-handle","\n box-shadow: var(--n-handle-box-shadow-focus);\n ",[n("&:hover","\n box-shadow: var(--n-handle-box-shadow-active);\n ")])])])]),a("slider-dots","\n position: absolute;\n top: 50%;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[o("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot","\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n transform: translate(-50%, -50%);\n height: var(--n-dot-height);\n width: var(--n-dot-width);\n border-radius: var(--n-dot-border-radius);\n overflow: hidden;\n box-sizing: border-box;\n border: var(--n-dot-border);\n background-color: var(--n-dot-color);\n ",[o("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[t()]),a("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[o("top","\n margin-bottom: 12px;\n "),o("right","\n margin-left: 12px;\n "),o("bottom","\n margin-top: 12px;\n "),o("left","\n margin-right: 12px;\n "),t()]),l(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),i(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]),j=s({name:"Slider",props:Object.assign(Object.assign({},c.props),{to:T.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),setup(e){const{mergedClsPrefixRef:n,namespaceRef:a,inlineThemeDisabled:o}=d(e),r=c("Slider","-slider",A,M,e,n),t=u(null),[l,i]=H(),[s,w]=H(),x=u(new Set),k=h(e),{mergedDisabledRef:R}=k,$=v((()=>{const{step:n}=e;if(Number(n)<=0||"mark"===n)return 0;const a=n.toString();let o=0;return a.includes(".")&&(o=a.length-a.indexOf(".")-1),o})),B=u(e.defaultValue),j=f(e,"value"),V=D(j,B),N=v((()=>{const{value:n}=V;return(e.range?n:[n]).map(ne)})),E=v((()=>N.value.length>2)),I=v((()=>void 0===e.placement?e.vertical?"right":"top":e.placement)),O=v((()=>{const{marks:n}=e;return n?Object.keys(n).map(parseFloat):null})),P=u(-1),U=u(-1),Y=u(-1),K=u(!1),X=u(!1),L=v((()=>{const{vertical:n,reverse:a}=e;return n?a?"top":"bottom":a?"right":"left"})),_=v((()=>{if(E.value)return;const n=N.value,a=ae(e.range?Math.min(...n):e.min),o=ae(e.range?Math.max(...n):n[0]),{value:r}=L;return e.vertical?{[r]:`${a}%`,height:o-a+"%"}:{[r]:`${a}%`,width:o-a+"%"}})),W=v((()=>{const n=[],{marks:a}=e;if(a){const o=N.value.slice();o.sort(((e,n)=>e-n));const{value:r}=L,{value:t}=E,{range:l}=e,i=t?()=>!1:e=>l?e>=o[0]&&e<=o[o.length-1]:e<=o[0];for(const e of Object.keys(a)){const o=Number(e);n.push({active:i(o),label:a[e],style:{[r]:`${ae(o)}%`}})}}return n}));function G(n){return e.showTooltip||Y.value===n||P.value===n&&K.value}function q(){s.forEach(((e,n)=>{G(n)&&e.syncPosition()}))}function J(n){const{"onUpdate:value":a,onUpdateValue:o}=e,{nTriggerFormInput:r,nTriggerFormChange:t}=k;o&&y(o,n),a&&y(a,n),B.value=n,r(),t()}function Q(n){const{range:a}=e;if(a){if(Array.isArray(n)){const{value:e}=N;n.join()!==e.join()&&J(n)}}else if(!Array.isArray(n)){N.value[0]!==n&&J(n)}}function Z(n,a){if(e.range){const e=N.value.slice();e.splice(a,1,n),Q(e)}else Q(n)}function ee(n,a,o){const r=void 0!==o;o||(o=n-a>0?1:-1);const t=O.value||[],{step:l}=e;if("mark"===l){const e=oe(n,t.concat(a),r?o:void 0);return e?e.value:a}if(l<=0)return a;const{value:i}=$;let s;if(r){const e=Number((a/l).toFixed(i)),n=Math.floor(e),r=e<n?n:n+1;s=oe(a,[Number(((e>n?n:n-1)*l).toFixed(i)),Number((r*l).toFixed(i)),...t],o)}else{const a=function(n){const{step:a,min:o}=e;if(Number(a)<=0||"mark"===a)return n;const r=Math.round((n-o)/a)*a+o;return Number(r.toFixed($.value))}(n);s=oe(n,[...t,a])}return s?ne(s.value):a}function ne(n){return Math.min(e.max,Math.max(e.min,n))}function ae(n){const{max:a,min:o}=e;return(n-o)/(a-o)*100}function oe(e,n=O.value,a){if(!(null==n?void 0:n.length))return null;let o=null,r=-1;for(;++r<n.length;){const t=n[r]-e,l=Math.abs(t);(void 0===a||t*a>0)&&(null===o||l<o.distance)&&(o={index:r,distance:l,value:n[r]})}return o}function re(n){const a=t.value;if(!a)return;const o=F(n)?n.touches[0]:n,r=a.getBoundingClientRect();let l;return l=e.vertical?(r.bottom-o.clientY)/r.height:(o.clientX-r.left)/r.width,e.reverse&&(l=1-l),function(n){const{max:a,min:o}=e;return o+(a-o)*n}(l)}function te(n){const a=P.value;if(-1===a)return;const{step:o}=e,r=N.value[a];Z(ee(Number(o)<=0||"mark"===o?r:r+o*n,r,n>0?1:-1),a)}function le(){K.value&&(K.value=!1,e.onDragend&&y(e.onDragend),C("touchend",document,se),C("mouseup",document,se),C("touchmove",document,ie),C("mousemove",document,ie))}function ie(e){const{value:n}=P;if(!K.value||-1===n)return void le();const a=re(e);void 0!==a&&Z(ee(a,N.value[n]),n)}function se(){le()}m(P,((e,n)=>{S((()=>U.value=n))})),m(V,(()=>{if(e.marks){if(X.value)return;X.value=!0,S((()=>{X.value=!1}))}S(q)})),b((()=>{le()}));const de=v((()=>{const{self:{markFontSize:e,railColor:n,railColorHover:a,fillColor:o,fillColorHover:t,handleColor:l,opacityDisabled:i,dotColor:s,dotColorModal:d,handleBoxShadow:c,handleBoxShadowHover:u,handleBoxShadowActive:h,handleBoxShadowFocus:v,dotBorder:f,dotBoxShadow:m,railHeight:b,railWidthVertical:p,handleSize:g,dotHeight:w,dotWidth:x,dotBorderRadius:k,fontSize:y,dotBorderActive:z,dotColorPopover:C},common:{cubicBezierEaseInOut:S}}=r.value;return{"--n-bezier":S,"--n-dot-border":f,"--n-dot-border-active":z,"--n-dot-border-radius":k,"--n-dot-box-shadow":m,"--n-dot-color":s,"--n-dot-color-modal":d,"--n-dot-color-popover":C,"--n-dot-height":w,"--n-dot-width":x,"--n-fill-color":o,"--n-fill-color-hover":t,"--n-font-size":y,"--n-handle-box-shadow":c,"--n-handle-box-shadow-active":h,"--n-handle-box-shadow-focus":v,"--n-handle-box-shadow-hover":u,"--n-handle-color":l,"--n-handle-size":g,"--n-opacity-disabled":i,"--n-rail-color":n,"--n-rail-color-hover":a,"--n-rail-height":b,"--n-rail-width-vertical":p,"--n-mark-font-size":e}})),ce=o?p("slider",void 0,de,e):void 0,ue=v((()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:a,indicatorTextColor:o,indicatorBorderRadius:t}}=r.value;return{"--n-font-size":e,"--n-indicator-border-radius":t,"--n-indicator-box-shadow":a,"--n-indicator-color":n,"--n-indicator-text-color":o}})),he=o?p("slider-indicator",void 0,ue,e):void 0;return{mergedClsPrefix:n,namespace:a,uncontrolledValue:B,mergedValue:V,mergedDisabled:R,mergedPlacement:I,isMounted:g(),adjustedTo:T(e),dotTransitionDisabled:X,markInfos:W,isShowTooltip:G,shouldKeepTooltipTransition:function(e){return!K.value||!(P.value===e&&U.value===e)},handleRailRef:t,setHandleRefs:i,setFollowerRefs:w,fillStyle:_,getHandleStyle:function(e,n){const a=ae(e),{value:o}=L;return{[o]:`${a}%`,zIndex:n===P.value?1:0}},activeIndex:P,arrifiedValues:N,followerEnabledIndexSet:x,handleRailMouseDown:function(n){var a,o;if(R.value)return;if(!F(n)&&0!==n.button)return;const r=re(n);if(void 0===r)return;const t=N.value.slice(),i=e.range?null!==(o=null===(a=oe(r,t))||void 0===a?void 0:a.index)&&void 0!==o?o:-1:0;-1!==i&&(n.preventDefault(),function(e){var n;~e&&(P.value=e,null===(n=l.get(e))||void 0===n||n.focus())}(i),K.value||(K.value=!0,e.onDragstart&&y(e.onDragstart),z("touchend",document,se),z("mouseup",document,se),z("touchmove",document,ie),z("mousemove",document,ie)),Z(ee(r,N.value[i]),i))},handleHandleFocus:function(e){P.value=e,R.value||(Y.value=e)},handleHandleBlur:function(e){P.value===e&&(P.value=-1,le()),Y.value===e&&(Y.value=-1)},handleHandleMouseEnter:function(e){Y.value=e},handleHandleMouseLeave:function(e){Y.value===e&&(Y.value=-1)},handleRailKeyDown:function(n){if(R.value||!e.keyboard)return;const{vertical:a,reverse:o}=e;switch(n.key){case"ArrowUp":n.preventDefault(),te(a&&o?-1:1);break;case"ArrowRight":n.preventDefault(),te(!a&&o?-1:1);break;case"ArrowDown":n.preventDefault(),te(a&&o?1:-1);break;case"ArrowLeft":n.preventDefault(),te(!a&&o?1:-1)}},indicatorCssVars:o?void 0:ue,indicatorThemeClass:null==he?void 0:he.themeClass,indicatorOnRender:null==he?void 0:he.onRender,cssVars:o?void 0:de,themeClass:null==ce?void 0:ce.themeClass,onRender:null==ce?void 0:ce.onRender}},render(){var e;const{mergedClsPrefix:n,themeClass:a,formatTooltip:o}=this;return null===(e=this.onRender)||void 0===e||e.call(this),w("div",{class:[`${n}-slider`,a,{[`${n}-slider--disabled`]:this.mergedDisabled,[`${n}-slider--active`]:-1!==this.activeIndex,[`${n}-slider--with-mark`]:this.marks,[`${n}-slider--vertical`]:this.vertical,[`${n}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},w("div",{class:`${n}-slider-rail`},w("div",{class:`${n}-slider-rail__fill`,style:this.fillStyle}),this.marks?w("div",{class:[`${n}-slider-dots`,this.dotTransitionDisabled&&`${n}-slider-dots--transition-disabled`]},this.markInfos.map((e=>w("div",{key:e.label,class:[`${n}-slider-dot`,{[`${n}-slider-dot--active`]:e.active}],style:e.style})))):null,w("div",{ref:"handleRailRef",class:`${n}-slider-handles`},this.arrifiedValues.map(((e,a)=>{const r=this.isShowTooltip(a);return w(R,null,{default:()=>[w($,null,{default:()=>w("div",{ref:this.setHandleRefs(a),class:`${n}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":e,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(e,a),onFocus:()=>{this.handleHandleFocus(a)},onBlur:()=>{this.handleHandleBlur(a)},onMouseenter:()=>{this.handleHandleMouseEnter(a)},onMouseleave:()=>{this.handleHandleMouseLeave(a)}},x(this.$slots.thumb,(()=>[w("div",{class:`${n}-slider-handle`})])))}),this.tooltip&&w(B,{ref:this.setFollowerRefs(a),show:r,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(a),teleportDisabled:this.adjustedTo===T.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>w(k,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(a),onEnter:()=>{this.followerEnabledIndexSet.add(a)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(a)}},{default:()=>{var a;return r?(null===(a=this.indicatorOnRender)||void 0===a||a.call(this),w("div",{class:[`${n}-slider-handle-indicator`,this.indicatorThemeClass,`${n}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},"function"==typeof o?o(e):e)):null}})})]})}))),this.marks?w("div",{class:`${n}-slider-marks`},this.markInfos.map((e=>w("div",{key:e.label,class:`${n}-slider-mark`,style:e.style},e.label)))):null))}});export{j as _};
