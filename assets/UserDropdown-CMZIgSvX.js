import{d as t,ad as e,ag as o,cA as r,i as s,h as n}from"./index-DRiF00Hx.js";import{h as a}from"./header-Cd3vFUY4.js";import{_ as i}from"./Icon-BBFjs19F.js";import{_ as c}from"./Avatar-BSI9JTG4.js";import{N as l}from"./Dropdown-wodx8OeX.js";import"./propTypes-BrA6lfYr.js";import"./useDesign-BvV_xiJk.js";import"./utils-BKNBMClf.js";import"./Tag-DnTiE1E0.js";import"./light-BjF-GFCJ.js";import"./Tooltip-CFz38RsP.js";import"./_baseIsEqual-CCRaRR-p.js";import"./get-g7Q8ZpuG.js";import"./format-length-l2rsThpR.js";import"./cssr-BAp9t9hT.js";import"./use-merged-state-D6ChJkmy.js";import"./next-frame-once-DiJwGkuW.js";import"./Icon-CrA-p7eB.js";import"./ChevronRight-IasqeWR6.js";import"./utils-gZPJG5sK.js";import"./Checkmark-DfZLjuro.js";import"./Empty-Byo6tjCM.js";import"./use-locale-B6YvjK0_.js";import"./create-ref-setter-DNc6_3jH.js";var u=function(t){return t[t.LOGOUT=0]="LOGOUT",t[t.AccountCenter=1]="AccountCenter",t[t.AccountSetting=2]="AccountSetting",t}(u||{});const m=t({name:"UserDropdown",setup(){const t=e(),{t:m}=o(),p=r(),d=s((()=>{const{realName:t="",avatar:e,desc:o}=p.getUserInfo||{};return{realName:t,avatar:e||a,desc:o}})),g=[{key:u.AccountCenter,label:m("layout.header.accountCenter"),icon:()=>n(i,{icon:"ant-design:user-outlined"},null)},{key:u.AccountSetting,label:m("layout.header.accountSetting"),icon:()=>n(i,{icon:"ant-design:setting-outline"},null)},{type:"divider",key:"d1"},{key:u.LOGOUT,label:m("layout.header.dropdownItemLoginOut"),icon:()=>n(i,{icon:"ion-power-outline"},null)}];function j(e){switch(e){case u.LOGOUT:p.confirmLoginOut();break;case u.AccountCenter:t("/account/center");break;case u.AccountSetting:t("/account/setting")}}return()=>n(l,{options:g,trigger:"hover",onSelect:j,width:"trigger"},{default:()=>[n("div",{class:"cursor-pointer h-full px-2.5 flex justify-between items-center hover:bg-$hover-color"},[n(c,{class:"mr-3",src:d.value.avatar,round:!0,size:24},null),n("span",{class:"text-14px text-$text-color"},[d.value.realName])])]})}});export{m as default};
