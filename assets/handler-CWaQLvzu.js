var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,s)=>{for(var a in s||(s={}))n.call(s,a)&&o(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&o(e,a,s[a]);return e};import{H as a}from"./index-CJ5f-lnL.js";import{bn as i}from"./index-BLWT44Eo.js";import{u}from"./useRootSetting-B_pBTmqU.js";function c(e,t){const n=i(),r=function(e,t){const n=i(),{getThemeColor:r}=u();switch(e){case a.CHANGE_LAYOUT:const{mode:e,type:o,split:i}=t;return{menuSetting:s({mode:e,type:o,collapsed:!1,show:!0,hidden:!1},void 0!==i?{split:i}:{})};case a.CHANGE_THEME_COLOR:return r.value===t?{}:{themeColor:t};case a.MENU_ACCORDION:return{menuSetting:{accordion:t}};case a.MENU_TRIGGER:return{menuSetting:{trigger:t}};case a.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case a.MENU_ROOT_INDENT:return{menuSetting:{menuRootIndent:t}};case a.MENU_INDENT:return{menuSetting:{menuIndent:t}};case a.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case a.MENU_SPLIT:return{menuSetting:{split:t}};case a.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case a.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case a.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case a.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case a.SHOW_BREADCRUMB:return{showBreadCrumb:t};case a.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case a.SHOW_FOOTER:return{showFooter:t};case a.SHOW_LOGO:return{showLogo:t};case a.TABS_SHOW:return{multiTabsSetting:{show:t}};case a.TABS_STYLE:return{multiTabsSetting:{tabs:t}};case a.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(r)}export{c as b};
