import{d as e,k as o,a6 as t,s as n,i as r,a5 as i,cE as l,a4 as a,ao as c,r as d,cn as s,cF as v,cG as m,cH as u,x as h,y as p,z as g,A as x,ai as f,cI as C,C as b,G as z,cJ as y,ay as w,F as I,ck as A,am as N,H as S,bK as H,co as P}from"./index-BLWT44Eo.js";import{N as R}from"./Dropdown-DYvk341l.js";import{_ as k}from"./Tooltip-anTY7wtM.js";import{c as F,V as T}from"./utils-Ur8S4I8h.js";import{u as E}from"./use-merged-state-DCdOf7ht.js";const O=e({name:"ChevronDownFilled",render:()=>o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}),L=t("n-layout-sider"),$={type:String,default:"static"},K=t("n-menu"),j=t("n-submenu"),B=t("n-menu-item-group");function _(e){const o=n(K),{props:t,mergedCollapsedRef:i}=o,l=n(j,null),a=n(B,null),c=r((()=>"horizontal"===t.mode)),d=r((()=>c.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right")),s=r((()=>{var e;return Math.max(null!==(e=t.collapsedIconSize)&&void 0!==e?e:t.iconSize,t.iconSize)})),v=r((()=>{var o;return!c.value&&e.root&&i.value&&null!==(o=t.collapsedIconSize)&&void 0!==o?o:t.iconSize})),m=r((()=>{if(c.value)return;const{collapsedWidth:o,indent:n,rootIndent:r}=t,{root:d,isGroup:v}=e,m=void 0===r?n:r;return d?i.value?o/2-s.value/2:m:a&&"number"==typeof a.paddingLeftRef.value?n/2+a.paddingLeftRef.value:l&&"number"==typeof l.paddingLeftRef.value?(v?n/2:n)+l.paddingLeftRef.value:0})),u=r((()=>{const{collapsedWidth:o,indent:n,rootIndent:r}=t,{value:l}=s,{root:a}=e;if(c.value)return 8;if(!a)return 8;if(!i.value)return 8;return(void 0===r?n:r)+l+8-(o+l)/2}));return{dropdownPlacement:d,activeIconSize:v,maxIconSize:s,paddingLeft:m,iconMarginRight:u,NMenu:o,NSubmenu:l}}const M={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},V=Object.assign(Object.assign({},M),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),D=e({name:"MenuOptionGroup",props:V,setup(e){i(j,null);const t=_(e);i(B,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:r,props:c}=n(K);return function(){const{value:n}=r,i=t.paddingLeft.value,{nodeProps:d}=c,s=null==d?void 0:d(e.tmNode.rawNode);return o("div",{class:`${n}-menu-item-group`,role:"group"},o("div",Object.assign({},s,{class:[`${n}-menu-item-group-title`,null==s?void 0:s.class],style:[(null==s?void 0:s.style)||"",void 0!==i?`padding-left: ${i}px;`:""]}),l(e.title),e.extra?o(a,null," ",l(e.extra)):null),o("div",null,e.tmNodes.map((e=>oe(e,c)))))}}}),U=e({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=n(K);return{menuProps:o,style:r((()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}})),iconStyle:r((()=>{const{maxIconSize:o,activeIconSize:t,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${t}px`,marginRight:`${n}px`}}))}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:r,renderExtra:i,expandIcon:a}}=this,d=n?n(t.rawNode):l(this.icon);return o("div",{onClick:e=>{var o;null===(o=this.onClick)||void 0===o||o.call(this,e)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&o("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),o("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):l(this.title),this.extra||i?o("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):l(this.extra)):null),this.showArrow?o(c,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):o(O,null)}):null)}}),G=Object.assign(Object.assign({},M),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),q=e({name:"Submenu",props:G,setup(e){const o=_(e),{NMenu:t,NSubmenu:n}=o,{props:l,mergedCollapsedRef:a,mergedThemeRef:c}=t,v=r((()=>{const{disabled:o}=e;return!!(null==n?void 0:n.mergedDisabledRef.value)||(!!l.disabled||o)})),m=d(!1);return i(j,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:v}),i(B,null),{menuProps:l,mergedTheme:c,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:m,paddingLeft:o.paddingLeft,mergedDisabled:v,mergedValue:t.mergedValueRef,childActive:s((()=>{var o;return null!==(o=e.virtualChildActive)&&void 0!==o?o:t.activePathRef.value.includes(e.internalKey)})),collapsed:r((()=>"horizontal"!==l.mode&&(!!a.value||!t.mergedExpandedKeysRef.value.includes(e.internalKey)))),dropdownEnabled:r((()=>!v.value&&("horizontal"===l.mode||a.value))),handlePopoverShowChange:function(e){m.value=e},handleClick:function(){v.value||(a.value||t.toggleExpand(e.internalKey),function(){const{onClick:o}=e;o&&o()}())}}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:n,renderLabel:r}}=this,i=()=>{const{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:r,maxIconSize:i,activeIconSize:l,title:a,childActive:c,icon:d,handleClick:s,menuProps:{nodeProps:v},dropdownShow:m,iconMarginRight:u,tmNode:h,mergedClsPrefix:p,isEllipsisPlaceholder:g,extra:x}=this,f=null==v?void 0:v(h.rawNode);return o("div",Object.assign({},f,{class:[`${p}-menu-item`,null==f?void 0:f.class],role:"menuitem"}),o(U,{tmNode:h,paddingLeft:t,collapsed:n,disabled:r,iconMarginRight:u,maxIconSize:i,activeIconSize:l,title:a,extra:x,showArrow:!e,childActive:c,clsPrefix:p,icon:d,hover:m,onClick:s,isEllipsisPlaceholder:g}))},l=()=>o(v,null,{default:()=>{const{tmNodes:e,collapsed:n}=this;return n?null:o("div",{class:`${t}-submenu-children`,role:"menu"},e.map((e=>oe(e,this.menuProps))))}});return this.root?o(R,Object.assign({size:"large",trigger:"hover"},null===(e=this.menuProps)||void 0===e?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:r}),{default:()=>o("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:l())}):o("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),l())}}),W=Object.assign(Object.assign({},M),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),J=e({name:"MenuOption",props:W,setup(e){const o=_(e),{NSubmenu:t,NMenu:n}=o,{props:i,mergedClsPrefixRef:l,mergedCollapsedRef:a}=n,c=t?t.mergedDisabledRef:{value:!1},d=r((()=>c.value||e.disabled));return{mergedClsPrefix:l,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:i,dropdownEnabled:s((()=>e.root&&a.value&&"horizontal"!==i.mode&&!d.value)),selected:s((()=>n.mergedValueRef.value===e.internalKey)),mergedDisabled:d,handleClick:function(o){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),function(o){const{onClick:t}=e;t&&t(o)}(o))}}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r,nodeProps:i}}=this,a=null==i?void 0:i(n.rawNode);return o("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,null==a?void 0:a.class]}),o(k,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||void 0===this.title,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(n.rawNode):l(this.title),trigger:()=>o(U,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Z=e({name:"MenuDivider",setup(){const e=n(K),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:o("div",{class:`${t.value}-menu-divider`})}}),Q=u(V),X=u(W),Y=u(G);function ee(e){return"divider"===e.type||"render"===e.type}function oe(e,t){const{rawNode:n}=e,{show:r}=n;if(!1===r)return null;if(ee(n))return function(e){return"divider"===e.type}(n)?o(Z,Object.assign({key:e.key},n.props)):null;const{labelField:i}=t,{key:l,level:a,isGroup:c}=e,d=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:l,internalKey:l,level:a,root:0===a,isGroup:c});return e.children?e.isGroup?o(D,m(d,Q,{tmNode:e,tmNodes:e.children,key:l})):o(q,m(d,Y,{key:l,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):o(J,m(d,X,{key:l,tmNode:e}))}const te=[h("&::before","background-color: var(--n-item-color-hover);"),x("arrow","\n color: var(--n-arrow-color-hover);\n "),x("icon","\n color: var(--n-item-icon-color-hover);\n "),p("menu-item-content-header","\n color: var(--n-item-text-color-hover);\n ",[h("a","\n color: var(--n-item-text-color-hover);\n "),x("extra","\n color: var(--n-item-text-color-hover);\n ")])],ne=[x("icon","\n color: var(--n-item-icon-color-hover-horizontal);\n "),p("menu-item-content-header","\n color: var(--n-item-text-color-hover-horizontal);\n ",[h("a","\n color: var(--n-item-text-color-hover-horizontal);\n "),x("extra","\n color: var(--n-item-text-color-hover-horizontal);\n ")])],re=h([p("menu","\n background-color: var(--n-color);\n color: var(--n-item-text-color);\n overflow: hidden;\n transition: background-color .3s var(--n-bezier);\n box-sizing: border-box;\n font-size: var(--n-font-size);\n padding-bottom: 6px;\n ",[g("horizontal","\n max-width: 100%;\n width: 100%;\n display: flex;\n overflow: hidden;\n padding-bottom: 0;\n ",[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content","\n padding: 0 20px;\n border-bottom: 2px solid #0000;\n ",[h("&::before","display: none;"),g("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[g("selected",[x("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active-horizontal);\n ",[h("a","color: var(--n-item-text-color-active-horizontal);"),x("extra","color: var(--n-item-text-color-active-horizontal);")])]),g("child-active","\n border-bottom: 2px solid var(--n-border-color-horizontal);\n ",[p("menu-item-content-header","\n color: var(--n-item-text-color-child-active-horizontal);\n ",[h("a","\n color: var(--n-item-text-color-child-active-horizontal);\n "),x("extra","\n color: var(--n-item-text-color-child-active-horizontal);\n ")]),x("icon","\n color: var(--n-item-icon-color-child-active-horizontal);\n ")]),f("disabled",[f("selected, child-active",[h("&:focus-within",ne)]),g("selected",[ie(null,[x("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active-hover-horizontal);\n ",[h("a","color: var(--n-item-text-color-active-hover-horizontal);"),x("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),g("child-active",[ie(null,[x("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header","\n color: var(--n-item-text-color-child-active-hover-horizontal);\n ",[h("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),x("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ie("border-bottom: 2px solid var(--n-border-color-horizontal);",ne)]),p("menu-item-content-header",[h("a","color: var(--n-item-text-color-horizontal);")])])]),f("responsive",[p("menu-item-content-header","\n overflow: hidden;\n text-overflow: ellipsis;\n ")]),g("collapsed",[p("menu-item-content",[g("selected",[h("&::before","\n background-color: var(--n-item-color-active-collapsed) !important;\n ")]),p("menu-item-content-header","opacity: 0;"),x("arrow","opacity: 0;"),x("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item","\n height: var(--n-item-height);\n margin-top: 6px;\n position: relative;\n "),p("menu-item-content",'\n box-sizing: border-box;\n line-height: 1.75;\n height: 100%;\n display: grid;\n grid-template-areas: "icon content arrow";\n grid-template-columns: auto 1fr auto;\n align-items: center;\n cursor: pointer;\n position: relative;\n padding-right: 18px;\n transition:\n background-color .3s var(--n-bezier),\n padding-left .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ',[h("> *","z-index: 1;"),h("&::before",'\n z-index: auto;\n content: "";\n background-color: #0000;\n position: absolute;\n left: 8px;\n right: 8px;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border-radius: var(--n-border-radius);\n transition: background-color .3s var(--n-bezier);\n '),g("disabled","\n opacity: .45;\n cursor: not-allowed;\n "),g("collapsed",[x("arrow","transform: rotate(0);")]),g("selected",[h("&::before","background-color: var(--n-item-color-active);"),x("arrow","color: var(--n-arrow-color-active);"),x("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active);\n ",[h("a","color: var(--n-item-text-color-active);"),x("extra","color: var(--n-item-text-color-active);")])]),g("child-active",[p("menu-item-content-header","\n color: var(--n-item-text-color-child-active);\n ",[h("a","\n color: var(--n-item-text-color-child-active);\n "),x("extra","\n color: var(--n-item-text-color-child-active);\n ")]),x("arrow","\n color: var(--n-arrow-color-child-active);\n "),x("icon","\n color: var(--n-item-icon-color-child-active);\n ")]),f("disabled",[f("selected, child-active",[h("&:focus-within",te)]),g("selected",[ie(null,[x("arrow","color: var(--n-arrow-color-active-hover);"),x("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active-hover);\n ",[h("a","color: var(--n-item-text-color-active-hover);"),x("extra","color: var(--n-item-text-color-active-hover);")])])]),g("child-active",[ie(null,[x("arrow","color: var(--n-arrow-color-child-active-hover);"),x("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header","\n color: var(--n-item-text-color-child-active-hover);\n ",[h("a","color: var(--n-item-text-color-child-active-hover);"),x("extra","color: var(--n-item-text-color-child-active-hover);")])])]),g("selected",[ie(null,[h("&::before","background-color: var(--n-item-color-active-hover);")])]),ie(null,te)]),x("icon","\n grid-area: icon;\n color: var(--n-item-icon-color);\n transition:\n color .3s var(--n-bezier),\n font-size .3s var(--n-bezier),\n margin-right .3s var(--n-bezier);\n box-sizing: content-box;\n display: inline-flex;\n align-items: center;\n justify-content: center;\n "),x("arrow","\n grid-area: arrow;\n font-size: 16px;\n color: var(--n-arrow-color);\n transform: rotate(180deg);\n opacity: 1;\n transition:\n color .3s var(--n-bezier),\n transform 0.2s var(--n-bezier),\n opacity 0.2s var(--n-bezier);\n "),p("menu-item-content-header","\n grid-area: content;\n transition:\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n opacity: 1;\n white-space: nowrap;\n color: var(--n-item-text-color);\n ",[h("a","\n outline: none;\n text-decoration: none;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n ",[h("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),x("extra","\n font-size: .93em;\n color: var(--n-group-text-color);\n transition: color .3s var(--n-bezier);\n ")])]),p("submenu","\n cursor: pointer;\n position: relative;\n margin-top: 6px;\n ",[p("menu-item-content","\n height: var(--n-item-height);\n "),p("submenu-children","\n overflow: hidden;\n padding: 0;\n ",[C({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title","\n margin-top: 6px;\n color: var(--n-group-text-color);\n cursor: default;\n font-size: .93em;\n height: 36px;\n display: flex;\n align-items: center;\n transition:\n padding-left .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ")])]),p("menu-tooltip",[h("a","\n color: inherit;\n text-decoration: none;\n ")]),p("menu-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 6px 18px;\n ")]);function ie(e,o){return[g("hover",e,o),h("&:hover",e,o)]}const le=e({name:"Menu",props:Object.assign(Object.assign({},z.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:l}=b(e),a=z("Menu","-menu",re,y,e,t),c=n(L,null),s=r((()=>{var o;const{collapsed:t}=e;if(void 0!==t)return t;if(c){const{collapseModeRef:e,collapsedRef:t}=c;if("width"===e.value)return null!==(o=t.value)&&void 0!==o&&o}return!1})),v=r((()=>{const{keyField:o,childrenField:t,disabledField:n}=e;return F(e.items||e.options,{getIgnored:e=>ee(e),getChildren:e=>e[t],getDisabled:e=>e[n],getKey(e){var t;return null!==(t=e[o])&&void 0!==t?t:e.name}})})),m=r((()=>new Set(v.value.treeNodes.map((e=>e.key))))),{watchProps:u}=e,h=d(null);(null==u?void 0:u.includes("defaultValue"))?w((()=>{h.value=e.defaultValue})):h.value=e.defaultValue;const p=I(e,"value"),g=E(p,h),x=d([]),f=()=>{x.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(g.value,{includeSelf:!1}).keyPath};(null==u?void 0:u.includes("defaultExpandedKeys"))?w(f):f();const C=A(e,["expandedNames","expandedKeys"]),P=E(C,x),R=r((()=>v.value.treeNodes)),k=r((()=>v.value.getPath(g.value).keyPath));function T(o){const{"onUpdate:expandedKeys":t,onUpdateExpandedKeys:n,onExpandedNamesChange:r,onOpenNamesChange:i}=e;t&&N(t,o),n&&N(n,o),r&&N(r,o),i&&N(i,o),x.value=o}i(K,{props:e,mergedCollapsedRef:s,mergedThemeRef:a,mergedValueRef:g,mergedExpandedKeysRef:P,activePathRef:k,mergedClsPrefixRef:t,isHorizontalRef:r((()=>"horizontal"===e.mode)),invertedRef:I(e,"inverted"),doSelect:function(o,t){const{"onUpdate:value":n,onUpdateValue:r,onSelect:i}=e;r&&N(r,o,t);n&&N(n,o,t);i&&N(i,o,t);h.value=o},toggleExpand:function(o){const t=Array.from(P.value),n=t.findIndex((e=>e===o));if(~n)t.splice(n,1);else{if(e.accordion&&m.value.has(o)){const e=t.findIndex((e=>m.value.has(e)));e>-1&&t.splice(e,1)}t.push(o)}T(t)}});const O=r((()=>{const{inverted:o}=e,{common:{cubicBezierEaseInOut:t},self:n}=a.value,{borderRadius:r,borderColorHorizontal:i,fontSize:l,itemHeight:c,dividerColor:d}=n,s={"--n-divider-color":d,"--n-bezier":t,"--n-font-size":l,"--n-border-color-horizontal":i,"--n-border-radius":r,"--n-item-height":c};return o?(s["--n-group-text-color"]=n.groupTextColorInverted,s["--n-color"]=n.colorInverted,s["--n-item-text-color"]=n.itemTextColorInverted,s["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,s["--n-item-text-color-active"]=n.itemTextColorActiveInverted,s["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,s["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,s["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,s["--n-item-icon-color"]=n.itemIconColorInverted,s["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,s["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,s["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,s["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,s["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,s["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,s["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,s["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,s["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,s["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,s["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,s["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,s["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,s["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,s["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,s["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,s["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,s["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,s["--n-arrow-color"]=n.arrowColorInverted,s["--n-arrow-color-hover"]=n.arrowColorHoverInverted,s["--n-arrow-color-active"]=n.arrowColorActiveInverted,s["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,s["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,s["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,s["--n-item-color-hover"]=n.itemColorHoverInverted,s["--n-item-color-active"]=n.itemColorActiveInverted,s["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,s["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(s["--n-group-text-color"]=n.groupTextColor,s["--n-color"]=n.color,s["--n-item-text-color"]=n.itemTextColor,s["--n-item-text-color-hover"]=n.itemTextColorHover,s["--n-item-text-color-active"]=n.itemTextColorActive,s["--n-item-text-color-child-active"]=n.itemTextColorChildActive,s["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,s["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,s["--n-item-icon-color"]=n.itemIconColor,s["--n-item-icon-color-hover"]=n.itemIconColorHover,s["--n-item-icon-color-active"]=n.itemIconColorActive,s["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,s["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,s["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,s["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,s["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,s["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,s["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,s["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,s["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,s["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,s["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,s["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,s["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,s["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,s["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,s["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,s["--n-arrow-color"]=n.arrowColor,s["--n-arrow-color-hover"]=n.arrowColorHover,s["--n-arrow-color-active"]=n.arrowColorActive,s["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,s["--n-arrow-color-child-active"]=n.arrowColorChildActive,s["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,s["--n-item-color-hover"]=n.itemColorHover,s["--n-item-color-active"]=n.itemColorActive,s["--n-item-color-active-hover"]=n.itemColorActiveHover,s["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),s})),$=l?S("menu",r((()=>e.inverted?"a":"b")),O,e):void 0,j=H(),B=d(null),_=d(null);let M=!0;const V=()=>{var e;M?M=!1:null===(e=B.value)||void 0===e||e.sync({showAllItemsBeforeCalculate:!0})};const D=d(-1);const U=r((()=>{const o=D.value;return{children:-1===o?[]:e.options.slice(o)}})),G=r((()=>{const{childrenField:o,disabledField:t,keyField:n}=e;return F([U.value],{getIgnored:e=>ee(e),getChildren:e=>e[o],getDisabled:e=>e[t],getKey(e){var o;return null!==(o=e[n])&&void 0!==o?o:e.name}})})),W=r((()=>F([{}]).treeNodes[0]));return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:x,mergedExpandedKeys:P,uncontrolledValue:h,mergedValue:g,activePath:k,tmNodes:R,mergedTheme:a,mergedCollapsed:s,cssVars:l?void 0:O,themeClass:null==$?void 0:$.themeClass,overflowRef:B,counterRef:_,updateCounter:()=>{},onResize:V,onUpdateOverflow:function(e){e||(D.value=-1)},onUpdateCount:function(o){D.value=e.options.length-o},renderCounter:function(){var e;if(-1===D.value)return o(q,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:W.value,domId:j,isEllipsisPlaceholder:!0});const t=G.value.treeNodes[0],n=k.value,r=!!(null===(e=t.children)||void 0===e?void 0:e.some((e=>n.includes(e.key))));return o(q,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:r,tmNode:t,domId:j,rawNodes:t.rawNode.children||[],tmNodes:t.children||[],isEllipsisPlaceholder:!0})},getCounter:function(){return document.getElementById(j)},onRender:null==$?void 0:$.onRender,showOption:o=>{const t=v.value.getPath(null!=o?o:g.value,{includeSelf:!1}).keyPath;if(!t.length)return;const n=Array.from(P.value),r=new Set([...n,...t]);e.accordion&&m.value.forEach((e=>{r.has(e)&&!t.includes(e)&&r.delete(e)})),T(Array.from(r))},deriveResponsiveState:V}},render(){const{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;null==r||r();const i=()=>this.tmNodes.map((e=>oe(e,this.$props))),l="horizontal"===t&&this.responsive,a=()=>o("div",{role:"horizontal"===t?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${t}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?o(T,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return l?o(P,{onResize:this.onResize},{default:a}):a()}});export{le as _,$ as p};
