import{y as e,x as r,A as t,d as n,C as o,eX as a,k as l,c2 as i,bW as s,c4 as u,c6 as d,c8 as c,bR as p,bS as h,r as b,cd as g,cc as v,i as m,a6 as f,s as x,ay as k,c1 as w,c3 as y,c7 as C,c5 as $,f3 as S,ax as U,z as A,e$ as z,G as D,a5 as P,F as R,E as V,a8 as _,H as F,aB as B,bQ as M,aD as q,S as I,aF as O,fI as T,am as j,B as H,Y as E}from"./index-DRiF00Hx.js";import{r as X,d as L,a as N,h as G,c as K,b as Y}from"./convert-BEzjbT9T.js";import{_ as Q}from"./Input-CsapG9XR.js";import{u as W}from"./use-locale-B6YvjK0_.js";import{u as Z}from"./use-merged-state-D6ChJkmy.js";import{u as J,B as ee,a as re,V as te}from"./Tooltip-CFz38RsP.js";const ne=e("input-group","\n display: inline-flex;\n width: 100%;\n flex-wrap: nowrap;\n vertical-align: bottom;\n",[r(">",[e("input",[r("&:not(:last-child)","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "),r("&:not(:first-child)","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n margin-left: -1px!important;\n ")]),e("button",[r("&:not(:last-child)","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ",[t("state-border, border","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ")]),r("&:not(:first-child)","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ",[t("state-border, border","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ")])]),r("*",[r("&:not(:last-child)","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ",[r(">",[e("input","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "),e("base-selection",[e("base-selection-label","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "),e("base-selection-tags","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n "),t("box-shadow, border, state-border","\n border-top-right-radius: 0!important;\n border-bottom-right-radius: 0!important;\n ")])])]),r("&:not(:first-child)","\n margin-left: -1px!important;\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ",[r(">",[e("input","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n "),e("base-selection",[e("base-selection-label","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n "),e("base-selection-tags","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n "),t("box-shadow, border, state-border","\n border-top-left-radius: 0!important;\n border-bottom-left-radius: 0!important;\n ")])])])])])]),oe=n({name:"InputGroup",props:{},setup(e){const{mergedClsPrefixRef:r}=o(e);return a("-input-group",ne,r),{mergedClsPrefix:r}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:`${e}-input-group`},this.$slots)}});function ae(e){return null===e?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}const le={rgb:{hex:e=>i(s(e)),hsl(e){const[r,t,n,o]=s(e);return u([...X(r,t,n),o])},hsv(e){const[r,t,n,o]=s(e);return d([...L(r,t,n),o])}},hex:{rgb:e=>c(s(e)),hsl(e){const[r,t,n,o]=s(e);return u([...X(r,t,n),o])},hsv(e){const[r,t,n,o]=s(e);return d([...L(r,t,n),o])}},hsl:{hex(e){const[r,t,n,o]=p(e);return i([...N(r,t,n),o])},rgb(e){const[r,t,n,o]=p(e);return c([...N(r,t,n),o])},hsv(e){const[r,t,n,o]=p(e);return d([...G(r,t,n),o])}},hsv:{hex(e){const[r,t,n,o]=h(e);return i([...K(r,t,n),o])},rgb(e){const[r,t,n,o]=h(e);return c([...K(r,t,n),o])},hsl(e){const[r,t,n,o]=h(e);return u([...Y(r,t,n),o])}}};function ie(e,r,t){if(!(t=t||ae(e)))return null;if(t===r)return e;return le[t][r](e)}const se="12px",ue="6px",de=n({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const r=b(null);function t(t){const{value:n}=r;if(!n)return;const{width:o,left:a}=n.getBoundingClientRect(),l=(i=(t.clientX-a-6)/(o-12)*360,(i=Math.round(i))>=360?359:i<0?0:i);var i;e.onUpdateHue(l)}function n(){var r;v("mousemove",document,t),v("mouseup",document,n),null===(r=e.onComplete)||void 0===r||r.call(e)}return{railRef:r,handleMouseDown:function(e){r.value&&(g("mousemove",document,t),g("mouseup",document,n),t(e))}}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,style:{height:se,borderRadius:ue}},l("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:"linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",height:se,borderRadius:ue,position:"relative"},onMousedown:this.handleMouseDown},l("div",{style:{position:"absolute",left:ue,right:ue,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ue})`,borderRadius:ue,width:se,height:se}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ue,width:se,height:se}})))))}}),ce="12px",pe="6px",he=n({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const r=b(null);function t(t){const{value:n}=r;if(!n)return;const{width:o,left:a}=n.getBoundingClientRect(),l=(t.clientX-a)/(o-12);var i;e.onUpdateAlpha((i=l,(i=Math.round(100*i)/100)>1?1:i<0?0:i))}function n(){var r;v("mousemove",document,t),v("mouseup",document,n),null===(r=e.onComplete)||void 0===r||r.call(e)}return{railRef:r,railBackgroundImage:m((()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""})),handleMouseDown:function(o){r.value&&e.rgba&&(g("mousemove",document,t),g("mouseup",document,n),t(o))}}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ce,borderRadius:pe},onMousedown:this.handleMouseDown},l("div",{style:{borderRadius:pe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},l("div",{class:`${e}-color-picker-checkboard`}),l("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&l("div",{style:{position:"absolute",left:pe,right:pe,top:0,bottom:0}},l("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${100*this.alpha}% - ${pe})`,borderRadius:pe,width:ce,height:ce}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:c(this.rgba),borderRadius:pe,width:ce,height:ce}}))))}}),be="12px",ge="6px",ve=n({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const r=b(null);function t(t){const{value:n}=r;if(!n)return;const{width:o,height:a,left:l,bottom:i}=n.getBoundingClientRect(),s=(i-t.clientY)/a,u=(t.clientX-l)/o,d=100*(u>1?1:u<0?0:u),c=100*(s>1?1:s<0?0:s);e.onUpdateSV(d,c)}function n(){var r;v("mousemove",document,t),v("mouseup",document,n),null===(r=e.onComplete)||void 0===r||r.call(e)}return{palleteRef:r,handleColor:m((()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""})),handleMouseDown:function(e){r.value&&(g("mousemove",document,t),g("mouseup",document,n),t(e))}}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},l("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),l("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&l("div",{class:`${e}-color-picker-handle`,style:{width:be,height:be,borderRadius:ge,left:`calc(${this.displayedSv[0]}% - ${ge})`,bottom:`calc(${this.displayedSv[1]}% - ${ge})`}},l("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ge,width:be,height:be}})))}}),me=f("n-color-picker");const fe={paddingSmall:"0 4px"},xe=n({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const r=b(""),{themeRef:t}=x(me,null);function n(){const{value:r}=e;if(null===r)return"";const{label:t}=e;return"HEX"===t?r:"A"===t?`${Math.floor(100*r)}%`:String(Math.floor(r))}return k((()=>{r.value=n()})),{mergedTheme:t,inputValue:r,handleInputChange:function(t){let o,a;switch(e.label){case"HEX":a=function(e){const r=e.trim();return!!/^#[0-9a-fA-F]+$/.test(r)&&[4,5,7,9].includes(r.length)}(t),a&&e.onUpdateValue(t),r.value=n();break;case"H":o=function(e){return!!/^\d{1,3}\.?\d*$/.test(e.trim())&&Math.max(0,Math.min(parseInt(e),360))}(t),!1===o?r.value=n():e.onUpdateValue(o);break;case"S":case"L":case"V":o=function(e){return!!/^\d{1,3}\.?\d*$/.test(e.trim())&&Math.max(0,Math.min(parseInt(e),100))}(t),!1===o?r.value=n():e.onUpdateValue(o);break;case"A":o=function(e){return!!/^\d{1,3}\.?\d*%$/.test(e.trim())&&Math.max(0,Math.min(parseInt(e)/100,100))}(t),!1===o?r.value=n():e.onUpdateValue(o);break;case"R":case"G":case"B":o=function(e){return!!/^\d{1,3}\.?\d*$/.test(e.trim())&&Math.max(0,Math.min(parseInt(e),255))}(t),!1===o?r.value=n():e.onUpdateValue(o)}},handleInputUpdateValue:function(e){r.value=e}}},render(){const{mergedTheme:e}=this;return l(Q,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:fe,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:"A"===this.label?"flex-grow: 1.25;":""})}}),ke=n({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup:e=>({handleUnitUpdateValue(r,t){const{showAlpha:n}=e;if("hex"===e.mode)return void e.onUpdateValue((n?i:w)(t));let o;switch(o=null===e.valueArr?[0,0,0,0]:Array.from(e.valueArr),e.mode){case"hsv":o[r]=t,e.onUpdateValue((n?d:$)(o));break;case"rgb":o[r]=t,e.onUpdateValue((n?c:C)(o));break;case"hsl":o[r]=t,e.onUpdateValue((n?u:y)(o))}}}),render(){const{clsPrefix:e,modes:r}=this;return l("div",{class:`${e}-color-picker-input`},l("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:1===r.length?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),l(oe,null,{default:()=>{const{mode:e,valueArr:r,showAlpha:t}=this;if("hex"===e){let e=null;try{e=null===r?null:(t?i:w)(r)}catch(n){}return l(xe,{label:"HEX",showAlpha:t,value:e,onUpdateValue:e=>{this.handleUnitUpdateValue(0,e)}})}return(e+(t?"a":"")).split("").map(((e,t)=>l(xe,{label:e.toUpperCase(),value:null===r?null:r[t],onUpdateValue:e=>{this.handleUnitUpdateValue(t,e)}})))}}))}}),we=n({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:r,renderLabelRef:t}=x(me,null);return()=>{const{hsla:n,value:o,clsPrefix:a,onClick:i,disabled:s}=e,d=r.label||t.value;return l("div",{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:i},l("div",{class:`${a}-color-picker-trigger__fill`},l("div",{class:`${a}-color-picker-checkboard`}),l("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?u(n):""}}),o&&n?l("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},d?d(o):o):null))}}});function ye(e,r){if("hsv"===r){const[r,t,n,o]=h(e);return c([...K(r,t,n),o])}return e}const Ce=n({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){function r(r){const{mode:t}=e;let{value:n,mode:o}=r;return o||(o="hex",/^[a-zA-Z]+$/.test(n)?n=function(e){const r=document.createElement("canvas").getContext("2d");return r?(r.fillStyle=e,r.fillStyle):"#000000"}(n):(S("color-picker",`color ${n} in swatches is invalid.`),n="#000000")),o===t?n:ie(n,t,o)}function t(t){e.onUpdateColor(r(t))}return{parsedSwatchesRef:m((()=>e.swatches.map((e=>{const r=ae(e);return{value:e,mode:r,legalValue:ye(e,r)}})))),handleSwatchSelect:t,handleSwatchKeyDown:function(e,r){"Enter"===e.key&&t(r)}}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map((r=>l("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(r)},onKeydown:e=>{this.handleSwatchKeyDown(e,r)}},l("div",{class:`${e}-color-picker-swatch__fill`,style:{background:r.legalValue}})))))}}),$e=n({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const r=ae(e);return Boolean(!e||r&&"hsv"!==r)}},onUpdateColor:{type:Function,required:!0}},setup:e=>({handleChange:function(r){var t;const n=r.target.value;null===(t=e.onUpdateColor)||void 0===t||t.call(e,ie(n.toUpperCase(),e.mode,"hex")),r.stopPropagation()}}),render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-color-picker-preview__preview`},l("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),l("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Se=r([e("color-picker","\n display: inline-block;\n box-sizing: border-box;\n height: var(--n-height);\n font-size: var(--n-font-size);\n width: 100%;\n position: relative;\n "),e("color-picker-panel","\n margin: 4px 0;\n width: 240px;\n font-size: var(--n-panel-font-size);\n color: var(--n-text-color);\n background-color: var(--n-color);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n ",[U(),e("input","\n text-align: center;\n ")]),e("color-picker-checkboard","\n background: white; \n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ",[r("&::after",'\n background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);\n background-size: 12px 12px;\n background-position: 0 0, 0 6px, 6px -6px, -6px 0px;\n background-repeat: repeat;\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),e("color-picker-slider","\n margin-bottom: 8px;\n position: relative;\n box-sizing: border-box;\n ",[t("image","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n "),r("&::after",'\n content: "";\n position: absolute;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);\n pointer-events: none;\n ')]),e("color-picker-handle","\n z-index: 1;\n box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);\n position: absolute;\n background-color: white;\n overflow: hidden;\n ",[t("fill","\n box-sizing: border-box;\n border: 2px solid white;\n ")]),e("color-picker-pallete","\n height: 180px;\n position: relative;\n margin-bottom: 8px;\n cursor: crosshair;\n ",[t("layer","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ",[A("shadowed","\n box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);\n ")])]),e("color-picker-preview","\n display: flex;\n ",[t("sliders","\n flex: 1 0 auto;\n "),t("preview","\n position: relative;\n height: 30px;\n width: 30px;\n margin: 0 0 8px 6px;\n border-radius: 50%;\n box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;\n overflow: hidden;\n "),t("fill","\n display: block;\n width: 30px;\n height: 30px;\n "),t("input","\n position: absolute;\n top: 0;\n left: 0;\n width: 30px;\n height: 30px;\n opacity: 0;\n z-index: 1;\n ")]),e("color-picker-input","\n display: flex;\n align-items: center;\n ",[e("input","\n flex-grow: 1;\n flex-basis: 0;\n "),t("mode","\n width: 72px;\n text-align: center;\n ")]),e("color-picker-control","\n padding: 12px;\n "),e("color-picker-action","\n display: flex;\n margin-top: -4px;\n border-top: 1px solid var(--n-divider-color);\n padding: 8px 12px;\n justify-content: flex-end;\n ",[e("button","margin-left: 8px;")]),e("color-picker-trigger","\n border: var(--n-border);\n height: 100%;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n cursor: pointer;\n ",[t("value","\n white-space: nowrap;\n position: relative;\n "),t("fill","\n border-radius: var(--n-border-radius);\n position: absolute;\n display: flex;\n align-items: center;\n justify-content: center;\n left: 4px;\n right: 4px;\n top: 4px;\n bottom: 4px;\n "),A("disabled","cursor: not-allowed"),e("color-picker-checkboard","\n border-radius: var(--n-border-radius);\n ",[r("&::after","\n --n-block-size: calc((var(--n-height) - 8px) / 3);\n background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);\n background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; \n ")])]),e("color-picker-swatches","\n display: grid;\n grid-gap: 8px;\n flex-wrap: wrap;\n position: relative;\n grid-template-columns: repeat(auto-fill, 18px);\n margin-top: 10px;\n ",[e("color-picker-swatch","\n width: 18px;\n height: 18px;\n background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);\n background-size: 8px 8px;\n background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;\n background-repeat: repeat;\n ",[t("fill","\n position: relative;\n width: 100%;\n height: 100%;\n border-radius: 3px;\n box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;\n cursor: pointer;\n "),r("&:focus","\n outline: none;\n ",[t("fill",[r("&::after",'\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n background: inherit;\n filter: blur(2px);\n content: "";\n ')])])])])]),Ue=n({name:"ColorPicker",props:Object.assign(Object.assign({},D.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:J.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e,{slots:r}){const t=b(null);let n=null;const a=z(e),{mergedSizeRef:g,mergedDisabledRef:v}=a,{localeRef:f}=W("global"),{mergedClsPrefixRef:x,namespaceRef:S,inlineThemeDisabled:U}=o(e),A=D("ColorPicker","-color-picker",Se,T,e,x);P(me,{themeRef:A,renderLabelRef:R(e,"renderLabel"),colorPickerSlots:r});const q=b(e.defaultShow),I=Z(R(e,"show"),q);function O(r){const{onUpdateShow:t,"onUpdate:show":n}=e;t&&j(t,r),n&&j(n,r),q.value=r}const{defaultValue:Q}=e,ee=b(void 0===Q?function(e,r){switch(e[0]){case"hex":return r?"#000000FF":"#000000";case"rgb":return r?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return r?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return r?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}(e.modes,e.showAlpha):Q),re=Z(R(e,"value"),ee),te=b([re.value]),ne=b(0),oe=m((()=>ae(re.value))),{modes:le}=e,ie=b(ae(re.value)||le[0]||"rgb");function se(){const{modes:r}=e,{value:t}=ie,n=r.findIndex((e=>e===t));ie.value=~n?r[(n+1)%r.length]:"rgb"}let ue,ce,pe,be,ge,fe,xe,we;const ye=m((()=>{const{value:e}=re;if(!e)return null;switch(oe.value){case"hsv":return h(e);case"hsl":return[ue,ce,pe,we]=p(e),[...G(ue,ce,pe),we];case"rgb":case"hex":return[ge,fe,xe,we]=s(e),[...L(ge,fe,xe),we]}})),Ue=m((()=>{const{value:e}=re;if(!e)return null;switch(oe.value){case"rgb":case"hex":return s(e);case"hsv":return[ue,ce,be,we]=h(e),[...K(ue,ce,be),we];case"hsl":return[ue,ce,pe,we]=p(e),[...N(ue,ce,pe),we]}})),Ae=m((()=>{const{value:e}=re;if(!e)return null;switch(oe.value){case"hsl":return p(e);case"hsv":return[ue,ce,be,we]=h(e),[...Y(ue,ce,be),we];case"rgb":case"hex":return[ge,fe,xe,we]=s(e),[...X(ge,fe,xe),we]}})),ze=m((()=>{switch(ie.value){case"rgb":case"hex":return Ue.value;case"hsv":return ye.value;case"hsl":return Ae.value}})),De=b(0),Pe=b(1),Re=b([0,0]);function Ve(r,t){const{value:n}=ye,o=De.value,a=n?n[3]:1;Re.value=[r,t];const{showAlpha:l}=e;switch(ie.value){case"hsv":Be((l?d:$)([o,r,t,a]),"cursor");break;case"hsl":Be((l?u:y)([...Y(o,r,t),a]),"cursor");break;case"rgb":Be((l?c:C)([...K(o,r,t),a]),"cursor");break;case"hex":Be((l?i:w)([...K(o,r,t),a]),"cursor")}}function _e(r){De.value=r;const{value:t}=ye;if(!t)return;const[,n,o,a]=t,{showAlpha:l}=e;switch(ie.value){case"hsv":Be((l?d:$)([r,n,o,a]),"cursor");break;case"rgb":Be((l?c:C)([...K(r,n,o),a]),"cursor");break;case"hex":Be((l?i:w)([...K(r,n,o),a]),"cursor");break;case"hsl":Be((l?u:y)([...Y(r,n,o),a]),"cursor")}}function Fe(e){switch(ie.value){case"hsv":[ue,ce,be]=ye.value,Be(d([ue,ce,be,e]),"cursor");break;case"rgb":[ge,fe,xe]=Ue.value,Be(c([ge,fe,xe,e]),"cursor");break;case"hex":[ge,fe,xe]=Ue.value,Be(i([ge,fe,xe,e]),"cursor");break;case"hsl":[ue,ce,pe]=Ae.value,Be(u([ue,ce,pe,e]),"cursor")}Pe.value=e}function Be(r,t){n="cursor"===t?r:null;const{nTriggerFormChange:o,nTriggerFormInput:l}=a,{onUpdateValue:i,"onUpdate:value":s}=e;i&&j(i,r),s&&j(s,r),o(),l(),ee.value=r}function Me(e){Be(e,"input"),E(qe)}function qe(r=!0){const{value:t}=re;if(t){const{nTriggerFormChange:n,nTriggerFormInput:o}=a,{onComplete:l}=e;l&&l(t);const{value:i}=te,{value:s}=ne;r&&(i.splice(s+1,i.length,t),ne.value=s+1),n(),o()}}function Ie(){const{value:e}=ne;e-1<0||(Be(te.value[e-1],"input"),qe(!1),ne.value=e-1)}function Oe(){const{value:e}=ne;e<0||e+1>=te.value.length||(Be(te.value[e+1],"input"),qe(!1),ne.value=e+1)}function Te(){Be(null,"input"),O(!1)}function je(){const{value:r}=re,{onConfirm:t}=e;t&&t(r),O(!1)}const He=m((()=>ne.value>=1)),Ee=m((()=>{const{value:e}=te;return e.length>1&&ne.value<e.length-1}));V(I,(e=>{e||(te.value=[re.value],ne.value=0)})),k((()=>{if(n&&n===re.value);else{const{value:e}=ye;e&&(De.value=e[0],Pe.value=e[3],Re.value=[e[1],e[2]])}n=null}));const Xe=m((()=>{const{value:e}=g,{common:{cubicBezierEaseInOut:r},self:{textColor:t,color:n,panelFontSize:o,boxShadow:a,border:l,borderRadius:i,dividerColor:s,[_("height",e)]:u,[_("fontSize",e)]:d}}=A.value;return{"--n-bezier":r,"--n-text-color":t,"--n-color":n,"--n-panel-font-size":o,"--n-font-size":d,"--n-box-shadow":a,"--n-border":l,"--n-border-radius":i,"--n-height":u,"--n-divider-color":s}})),Le=U?F("color-picker",m((()=>g.value[0])),Xe,e):void 0;return{mergedClsPrefix:x,namespace:S,selfRef:t,hsla:Ae,rgba:Ue,mergedShow:I,mergedDisabled:v,isMounted:B(),adjustedTo:J(e),mergedValue:re,handleTriggerClick(){O(!0)},handleClickOutside(e){var r;(null===(r=t.value)||void 0===r?void 0:r.contains(M(e)))||O(!1)},renderPanel:function(){var t;const{value:n}=Ue,{value:o}=De,{internalActions:a,modes:i,actions:s}=e,{value:u}=A,{value:d}=x;return l("div",{class:[`${d}-color-picker-panel`,null==Le?void 0:Le.themeClass.value],onDragstart:e=>{e.preventDefault()},style:U?void 0:Xe.value},l("div",{class:`${d}-color-picker-control`},l(ve,{clsPrefix:d,rgba:n,displayedHue:o,displayedSv:Re.value,onUpdateSV:Ve,onComplete:qe}),l("div",{class:`${d}-color-picker-preview`},l("div",{class:`${d}-color-picker-preview__sliders`},l(de,{clsPrefix:d,hue:o,onUpdateHue:_e,onComplete:qe}),e.showAlpha?l(he,{clsPrefix:d,rgba:n,alpha:Pe.value,onUpdateAlpha:Fe,onComplete:qe}):null),e.showPreview?l($e,{clsPrefix:d,mode:ie.value,color:Ue.value&&w(Ue.value),onUpdateColor:e=>{Be(e,"input")}}):null),l(ke,{clsPrefix:d,showAlpha:e.showAlpha,mode:ie.value,modes:i,onUpdateMode:se,value:re.value,valueArr:ze.value,onUpdateValue:Me}),(null===(t=e.swatches)||void 0===t?void 0:t.length)&&l(Ce,{clsPrefix:d,mode:ie.value,swatches:e.swatches,onUpdateColor:e=>{Be(e,"input")}})),(null==s?void 0:s.length)?l("div",{class:`${d}-color-picker-action`},s.includes("confirm")&&l(H,{size:"small",onClick:je,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button},{default:()=>f.value.confirm}),s.includes("clear")&&l(H,{size:"small",onClick:Te,disabled:!re.value,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button},{default:()=>f.value.clear})):null,r.action?l("div",{class:`${d}-color-picker-action`},{default:r.action}):a?l("div",{class:`${d}-color-picker-action`},a.includes("undo")&&l(H,{size:"small",onClick:Ie,disabled:!He.value,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button},{default:()=>f.value.undo}),a.includes("redo")&&l(H,{size:"small",onClick:Oe,disabled:!Ee.value,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button},{default:()=>f.value.redo})):null)},cssVars:U?void 0:Xe,themeClass:null==Le?void 0:Le.themeClass,onRender:null==Le?void 0:Le.onRender}},render(){const{$slots:e,mergedClsPrefix:r,onRender:t}=this;return null==t||t(),l("div",{class:[this.themeClass,`${r}-color-picker`],ref:"selfRef",style:this.cssVars},l(ee,null,{default:()=>[l(re,null,{default:()=>l(we,{clsPrefix:r,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),l(te,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===J.tdkey,to:this.adjustedTo},{default:()=>l(q,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?I(this.renderPanel(),[[O,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{oe as _,Ue as a};
