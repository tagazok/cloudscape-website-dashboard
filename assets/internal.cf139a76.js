import{_ as q,g as we,r as m,G as Kt,u as Ye,x as Je,J as Wt,o as jt,e as A,b as x,f as L,j as d,c as Xe,a as Ut,L as qt,M as Qt,O as Yt,Q as mt,S as dt,F as xt,d as Jt,l as Pe,K as ne,T as yt,q as nt,U as Xt,V as Zt,W as Ee,X as rt,Y as er,Z as Ae,R as O,$ as wt,a0 as tr,a1 as at,v as rr,a2 as ir,p as ot,a3 as ct,a4 as nr,a5 as ar,y as or,a6 as sr,a7 as ft,a8 as lr}from"./index.18bdd6ca.js";const me={layout:"awsui_layout_5gtk3_1onm4_99","is-visual-refresh":"awsui_is-visual-refresh_5gtk3_1onm4_99",background:"awsui_background_5gtk3_1onm4_102",header:"awsui_header_5gtk3_1onm4_105","is-overlap-disabled":"awsui_is-overlap-disabled_5gtk3_1onm4_115","has-breadcrumbs":"awsui_has-breadcrumbs_5gtk3_1onm4_132",content:"awsui_content_5gtk3_1onm4_141"};function ur(e){var t,r,i,n=e.children,a=e.disableOverlap,o=e.header,s=q(e,["children","disableOverlap","header"]),u=we(s),l=m.exports.useContext(Kt).breadcrumbs,g=m.exports.useRef(null),h=Ye("ContentLayout").__internalRootRef,p=Je(g,h),y=Wt(),f=jt(),v=!n||!o||a;return A("div",{...x({},u,{className:L(u.className,me.layout,(t={},t[me["is-overlap-disabled"]]=v,t[me["is-visual-refresh"]]=f,t)),ref:p}),children:[d("div",{className:L(me.background,(r={},r[me["is-overlap-disabled"]]=v,r),"awsui-context-content-header"),ref:y}),o&&d("div",{className:L(me.header,(i={},i[me["has-breadcrumbs"]]=l,i),"awsui-context-content-header"),children:o}),d("div",{className:me.content,children:n})]})}Xe(ur,"ContentLayout");var _t=function(e){var t=Object.keys(e).filter(function(r){return r.indexOf("__")!==0});return t.reduce(function(r,i){return r[i]=e[i],r},{})};function dr(e){var t=e.columns,r=t===void 0?1:t,i=e.variant,n=i===void 0?"default":i,a=e.borders,o=a===void 0?"none":a,s=e.disableGutters,u=s===void 0?!1:s,l=q(e,["columns","variant","borders","disableGutters"]),g=Ye("ColumnLayout"),h=Ut(Qt),p=h[0],y=h[1],f=_t(l);return d(qt,{...x({columns:r,variant:n,borders:o,disableGutters:u},f,g,{__breakpoint:p,ref:y})})}Xe(dr,"ColumnLayout");function cr(e){var t=e.variant,r=t===void 0?"default":t,i=e.disableHeaderPaddings,n=i===void 0?!1:i,a=e.disableContentPaddings,o=a===void 0?!1:a,s=q(e,["variant","disableHeaderPaddings","disableContentPaddings"]),u=Ye("Container"),l=_t(s);return d(Yt,{...x({variant:r,disableHeaderPaddings:n,disableContentPaddings:o},l,u)})}Xe(cr,"Container");var fr=["value","label","description","labelTag"],gt=function(e,t,r){if(!e)return!1;var i=e.toLowerCase().indexOf(t);return r?i===0:i>-1},ht=function(e,t,r){var i=t.toLowerCase(),n=e.option,a=function(u){return gt(n[u],i,r)},o=function(u){var l;return(l=n[u])===null||l===void 0?void 0:l.some(function(g){return gt(g,i,r)})},s=["tags"];return r||s.push("filteringTags"),fr.some(a)||s.some(o)},kt=function(e,t,r){if(r===void 0&&(r=!1),t==="")return e;var i=null,n=!1;return e.reduce(function(a,o){return o.type==="parent"?(n=!1,i=o,ht(o,t,r)&&(n=!0,a.push(i)),a):(o.type!=="child"&&(i=null,n=!1),n?a.push(o):ht(o,t,r)&&(i&&(a.push(i),i=null),a.push(o)),a)},[])},St=function(e){return!!e&&!e.disabled&&e.type!=="parent"},Tt=function(e){return!!e&&!e.disabled},$e=function(e){return!!e&&"options"in e};const it={root:"awsui_root_1afi9_19bf4_93",hidden:"awsui_hidden_1afi9_19bf4_103","no-items":"awsui_no-items_1afi9_19bf4_106"};const Ot={root:"awsui_root_vrgzu_1obpu_93",recovery:"awsui_recovery_vrgzu_1obpu_105"};function gr(e){var t=e.children;return d("div",{className:Ot.root,children:t})}var hr=function(e){var t=e.statusType,r=e.empty,i=e.loadingText,n=e.finishedText,a=e.errorText,o=e.recoveryText,s=e.isEmpty,u=e.isNoMatch,l=e.noMatch,g=e.onRecoveryClick,h=m.exports.useRef(null),p=function(){var v;return(v=h.current)===null||v===void 0?void 0:v.focus()},y=mt(t),f={isSticky:!0,content:null,focusRecoveryLink:p};return t==="loading"?f.content=d(dt,{type:"loading",children:i}):t==="error"?f.content=A(xt,{children:[d(dt,{type:"error",__animate:y!=="error",children:a})," ",o&&d(Jt,{ref:h,onFollow:function(){return Pe(g)},variant:"recovery",className:Ot.recovery,children:o})]}):s&&r?f.content=r:u&&l?f.content=l:t==="finished"&&n&&(f.content=n,f.isSticky=!1),f},vr=function(e){var t,r=e.content,i=e.hasItems,n=i===void 0?!0:i;return d("div",{className:L(it.root,(t={},t[it.hidden]=r===null,t[it["no-items"]]=!n,t)),"aria-live":"polite","aria-atomic":"true",children:r&&d(gr,{children:r})})};const vt=vr;var pr=function(e){var t=new Map,r=e.reduce(function(i,n){if("options"in n){var a=n.options,o=q(n,["options"]),s={type:"parent",option:n},u=a.every(function(g){return g.disabled});(n.disabled||u)&&(s.disabled=!0),i.push(s),a.forEach(function(g){var h={type:"child",option:g};(o.disabled||g.disabled)&&(h.disabled=!0),i.push(h),t.set(h,s)})}else{var l={option:n};n.disabled&&(l.disabled=!0),i.push(l)}return i},[]);return{flatOptions:r,parentMap:t}},qe=new WeakMap,br=function(e){return qe.get(e)},mr=function(e,t){var r=1,i=0,n=1,a=null;e.forEach(function(o){if(!("type"in o))qe.set(o,{throughIndex:r++});else if(o.type==="child"){var s=t(o);s&&s!==a?(a=s,n=1,qe.set(o,{throughIndex:r++,groupIndex:++i,inGroupIndex:n++})):qe.set(o,{throughIndex:r++,groupIndex:i,inGroupIndex:n++})}})};function xr(e,t,r){var i=pr(e),n=i.flatOptions,a=i.parentMap,o=t!=="auto"?n:kt(n,r);return mr(o,a.get.bind(a)),{filteredOptions:o,parentMap:a}}function yr(e){var t=e.options,r=e.isHighlightable,i=m.exports.useState(-1),n=i[0],a=i[1],o=m.exports.useState("keyboard"),s=o[0],u=o[1],l=m.exports.useCallback(function(f,v){a(f),u(v)},[]),g=t[n]&&r(t[n])?t[n]:void 0,h=function(f,v,w){v===void 0&&(v=n);var _=v;do _+=f;while(t[_]&&!r(t[_]));t[_]&&l(_,w)},p=function(f,v){return h(f,n,v)},y=m.exports.useCallback(function(f,v){var w=t.indexOf(f);l(w,v)},[t,l]);return[{highlightType:s,highlightedIndex:n,highlightedOption:g},{setHighlightedIndexWithMouse:function(f){return l(f,"mouse")},moveHighlightWithKeyboard:function(f){return p(f,"keyboard")},highlightOptionWithKeyboard:function(f){return y(f,"keyboard")},resetHighlightWithKeyboard:function(){return l(-1,"keyboard")},goHomeWithKeyboard:function(){return h(1,-1,"keyboard")},goEndWithKeyboard:function(){return h(-1,t.length,"keyboard")}}]}var wr=36,_r=35,kr=function(e){var t=e.moveHighlight,r=e.selectOption,i=e.goHome,n=e.goEnd,a=e.closeDropdown,o=e.isSelectingUsingSpace,s=e.preventNativeSpace,u=s===void 0?!1:s;return m.exports.useCallback(function(l){switch(l.detail.keyCode){case ne.up:l.preventDefault(),t(-1);break;case ne.down:l.preventDefault(),t(1);break;case wr:i();break;case _r:n();break;case ne.escape:a();break;case ne.enter:l.preventDefault(),r();break;case ne.space:u&&(l.preventDefault(),r(),o.current=!0)}},[t,r,i,n,a,o,u])},Sr=function(e){var t=e.openDropdown,r=e.goHome;return m.exports.useCallback(function(i){switch(i.detail.keyCode){case ne.up:case ne.down:i.preventDefault(),r(),t();break;case ne.space:i.preventDefault(),t();break}},[t,r])},Tr=function(e){var t=e.hasSelectedOption;return{selectedOptionId:m.exports.useMemo(function(){return t?yt():void 0},[t]),menuId:nt("option-list")}},pt=function(e,t){if(!(t<0))return"".concat(e,"-option-").concat(t)},Or=function(e,t){return(t||[]).map(function(r){for(var i=0,n=e;i<n.length;i++){var a=n[i];if(a.type!=="parent"&&a.option.value===r.value)return a}return{option:r}})},Ue=function(e,t){for(var r=0;r<e.length;r++){var i=e[r];if(i===t||i.value===t.value)return r}return-1};function Ir(e){var t=e.selectedOptions,r=e.updateSelectedOption,i=e.options,n=e.filteringType,a=e.onBlur,o=e.onFocus,s=e.externalRef,u=e.keepOpen,l=e.fireLoadItems,g=e.setFilteringValue,h=e.useInteractiveGroups,p=h===void 0?!1:h,y=p?Tt:St,f=function(c){return!!c&&(p||c.type!=="parent")},v=m.exports.useRef(null),w=m.exports.useRef(null),_=m.exports.useRef(null),S=n!=="none",E=S?v:_,B=m.exports.useRef(!1),N=Or(i,t),z=t.reduce(function(c,b){return b.value&&c.add(b.value),c},new Set),K=yr({options:i,isHighlightable:f}),$=K[0],Q=$.highlightType,D=$.highlightedOption,V=$.highlightedIndex,T=K[1],ae=T.moveHighlightWithKeyboard,_e=T.resetHighlightWithKeyboard,ke=T.setHighlightedIndexWithMouse,ze=T.highlightOptionWithKeyboard,Se=T.goHomeWithKeyboard,fe=T.goEndWithKeyboard,oe=Xt({onOpen:function(){return l("")},onClose:function(){_e(),g("")}}),Z=oe.isOpen,Ne=oe.openDropdown,se=oe.closeDropdown,Ve=oe.toggleDropdown,re=m.exports.useRef(!1),Y=function(){re.current||(Ee(o,{}),re.current=!0)},le=function(c){var b=c.detail,k=b.relatedTarget,C=k?rt(w.current,k):!1,X=k?rt(_.current,k)||rt(v.current,k):!1,H=C||X,W=re.current&&!H;(C||W)&&se(),W&&(Ee(a,{}),re.current=!1)},J=N.length>0,pe=Tr({hasSelectedOption:J}),De=pe.selectedOptionId,ue=pe.menuId,ge=pt(ue,V),de=function(c){var b;B.current=!1;var k=c||D;!k||!y(k)||(r(k.option),u||((b=w.current)===null||b===void 0||b.focus(),se()))},he=kr({moveHighlight:ae,selectOption:de,goHome:Se,goEnd:fe,closeDropdown:function(){var c;(c=w.current)===null||c===void 0||c.focus(),se()},isSelectingUsingSpace:B,preventNativeSpace:!S}),He=Sr({openDropdown:Ne,goHome:Se}),Te=function(c){c===void 0&&(c=!1);var b={ref:w,onFocus:Y,onBlur:le};return c||(b.onMouseDown=function(k){var C;k.preventDefault(),Z&&((C=w.current)===null||C===void 0||C.focus()),Ve()},b.onKeyDown=He),J&&(b.ariaLabelledby=De),b},ee=function(){var c;return S?{ref:v,onKeyDown:he,__onBlurWithDetail:le,onFocus:Y,onChange:function(b){g(b.detail.value),_e()},__onDelayedInput:function(b){l(b.detail.value)},__nativeAttributes:(c={"aria-activedescendant":ge},c["aria-owns"]=ue,c["aria-controls"]=ue,c)}:{}},Oe=function(){var c={id:ue,ref:_,open:Z,onFocus:Y,onBlur:le,onMouseUp:function(b){b>-1&&de(i[b])},onMouseMove:function(b){b>-1&&ke(b)}};return S||(c.onKeyDown=he,c.onBlur=le,c.onFocus=Y,c.nativeAttributes={"aria-activedescendant":ge}),c},be=function(c){var b=c.options.filter(function(X){return!!X.value&&z.has(X.value)}).length,k=b>0,C=b===c.options.length;return{selected:k&&C,indeterminate:k&&!C}},R=function(c,b){var k,C,X=c===D,H=$e(c.option)?be(c.option):void 0,W=N.indexOf(c)>-1||!!(H!=null&&H.selected),ce=(C=i[b+1])===null||C===void 0?void 0:C.option,Ie=!!ce&&$e(ce)?be(ce).selected:N.indexOf(i[b+1])>-1,Me=(k={key:b,option:c,highlighted:X,selected:W,isNextSelected:Ie,indeterminate:!!(H!=null&&H.indeterminate)},k["data-mouse-target"]=f(c)?b:-1,k.id=pt(ue,b),k);return Me},M=mt(Z);m.exports.useEffect(function(){Z&&!M&&J&&ke(i.indexOf(N[0]))},[Z,N,J,ke,i,M]),m.exports.useEffect(function(){var c;Z&&((c=E.current)===null||c===void 0||c.focus({preventScroll:!0}))},[Z,E]),Zt(s,w);var I=!!D&&$e(D.option)&&be(D.option).selected,G=!!D&&(N.indexOf(D)>-1||I);return{isOpen:Z,highlightedOption:D,highlightedIndex:V,highlightType:Q,getTriggerProps:Te,getMenuProps:Oe,getFilterProps:ee,getOptionProps:R,highlightOption:ze,selectOption:de,announceSelected:G}}var Cr=function(e){return[0,ne.enter,ne.space,ne.tab].indexOf(e)===-1},Rr=function(e){return e.split("").every(function(t){return t===e[0]})};function Pr(e,t,r,i){var n=i?Tt:St,a=function(l){return kt(e,l,!0).filter(function(g){return n(g)})},o=a(t);if(o.length===1)return o[0];if(r&&t.length>1&&Rr(t)){var s=a(t[0]);if(s.length>0){var u=$e(r)?s.map(function(l){var g=l.option;return g}).indexOf(r):s.map(function(l){var g=l.option;return g.value}).indexOf(r.value);return u+=1,u=u%s.length,s[u]}}return o.length>0?o[0]:null}function Lr(e){var t=e.isEnabled,r=e.options,i=e.highlightOption,n=e.highlightedOption,a=e.useInteractiveGroups,o=m.exports.useRef(""),s=er(function(){return o.current=""},500);return function(u){if(!!t){var l=u.charCode;if(!!Cr(l)){s();var g=o.current+String.fromCharCode(l);o.current=g;var h=Pr(r,g,n,a);h&&i(h)}}}}var Nr=function(e){var t=e.onLoadItems,r=e.options,i=e.statusType,n=m.exports.useRef(void 0),a=function(u){n.current!==u&&(n.current=u,Pe(t,{filteringText:u,firstPage:!0,samePage:!1}))},o=function(){var u=r.length===0;i==="pending"&&Pe(t,{firstPage:u,samePage:!1,filteringText:n.current||""})},s=function(){return Pe(t,{firstPage:!1,samePage:!0,filteringText:n.current||""})};return{fireLoadItems:a,handleLoadMore:o,handleRecoveryClick:s}};function Dr(e,t){return[t&&t.label,e.label||e.value,e.description,e.labelTag].concat(e.tags).filter(function(r){return!!r}).join(" ")}function Mr(e){var t=e.announceSelected,r=e.highlightedOption,i=e.getParent,n=e.selectedAriaLabel,a=e.renderHighlightedAriaLive,o=m.exports.useRef(void 0);if(m.exports.useEffect(function(){if(r){var p=requestAnimationFrame(function(){o.current=i(r)});return function(){return cancelAnimationFrame(p)}}}),!r)return"";var s=r.option,u=i(r),l=u&&u!==o.current?u:void 0;if(a)return a(s,l);var g=t&&n?n:"",h=Dr(s,l);return[g,h].filter(Boolean).join(" ")}const U={placeholder:"awsui_placeholder_dwuol_agn1m_93",item:"awsui_item_dwuol_agn1m_98",checkbox:"awsui_checkbox_dwuol_agn1m_102",filter:"awsui_filter_dwuol_agn1m_111",trigger:"awsui_trigger_dwuol_agn1m_116","layout-strut":"awsui_layout-strut_dwuol_agn1m_122","list-bottom":"awsui_list-bottom_dwuol_agn1m_128","selected-icon":"awsui_selected-icon_dwuol_agn1m_132","show-label-tag":"awsui_show-label-tag_dwuol_agn1m_136"};const F={option:"awsui_option_1p2cx_1tubf_97",disabled:"awsui_disabled_1p2cx_1tubf_113",parent:"awsui_parent_1p2cx_1tubf_116",content:"awsui_content_1p2cx_1tubf_123","label-content":"awsui_label-content_1p2cx_1tubf_130",label:"awsui_label_1p2cx_1tubf_130",tag:"awsui_tag_1p2cx_1tubf_137","label-tag":"awsui_label-tag_1p2cx_1tubf_138","label-prefix":"awsui_label-prefix_1p2cx_1tubf_149",tags:"awsui_tags_1p2cx_1tubf_162",description:"awsui_description_1p2cx_1tubf_163",icon:"awsui_icon_1p2cx_1tubf_180","icon-size-big":"awsui_icon-size-big_1p2cx_1tubf_187","filtering-match-highlight":"awsui_filtering-match-highlight_1p2cx_1tubf_191","trigger-variant":"awsui_trigger-variant_1p2cx_1tubf_206"};var Fr=function(e,t){var r=t.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"),i=new RegExp(r,"gi"),n=e.split(i),a=e.match(i);return{noMatches:n,matches:a}},bt=function(e){var t=e.str;return t?d("span",{className:L(F["filtering-match-highlight"]),children:t}):null};function Ke(e){var t=e.str,r=e.highlightText;if(!t||!r)return d(xt,{children:t});if(t===r)return d(bt,{str:t});var i=Fr(t,r),n=i.noMatches,a=i.matches,o=[];return n.forEach(function(s,u){o.push(s),a&&u<a.length&&o.push(d(bt,{str:a[u]},u))}),d("span",{children:o})}var Er=function(e){var t=e.label,r=e.prefix,i=e.highlightText,n=e.triggerVariant;return A("span",{className:L(F.label,n&&F["trigger-variant"]),children:[r&&A("span",{className:L(F["label-prefix"],n&&F["trigger-variant"]),children:[r," "]}),d(Ke,{str:t,highlightText:i})]})},zr=function(e){var t=e.labelTag,r=e.highlightText,i=e.triggerVariant;return t?d("span",{className:L(F["label-tag"],i&&F["trigger-variant"]),children:d(Ke,{str:t,highlightText:r})}):null},Vr=function(e){var t=e.description,r=e.highlightText,i=e.triggerVariant;return t?d("span",{className:L(F.description,i&&F["trigger-variant"]),"aria-disabled":!0,children:d(Ke,{str:t,highlightText:r})}):null},Hr=function(e){var t=e.tags,r=e.highlightText,i=e.triggerVariant;return t?d("span",{className:L(F.tags),children:t.map(function(n,a){return d("span",{className:L(F.tag,i&&F["trigger-variant"]),"aria-disabled":!0,children:d(Ke,{str:n,highlightText:r})},a)})}):null},Br=function(e){var t=e.filteringTags,r=e.highlightText,i=e.triggerVariant;if(!r||!t)return null;var n=r.toLowerCase();return d("span",{className:L(F.tags),children:t.map(function(a,o){var s=a.toLowerCase().indexOf(n)!==-1;return s?d("span",{className:L(F.tag,i&&F["trigger-variant"]),"aria-disabled":!0,children:d(Ke,{str:a,highlightText:r})},o):null})})},Gr=function(e){return!e.name&&!e.url&&!e.svg?null:d("span",{className:L(F.icon,e.size==="big"&&[F["icon-size-big"]]),children:d(Ae,{...x({},e)})})},$r=function(e){var t=e.option,r=e.highlightText,i=e.triggerVariant,n=i===void 0?!1:i,a=e.isGroupOption,o=a===void 0?!1:a,s=q(e,["option","highlightText","triggerVariant","isGroupOption"]);if(!t)return null;var u=t.disabled,l=we(s),g=L(F.option,u&&F.disabled,o&&F.parent),h=t.__customIcon||d(Gr,{name:t.iconName,url:t.iconUrl,svg:t.iconSvg,alt:t.iconAlt,size:t.description||t.tags?"big":"normal"});return A("span",{...x({title:t.label||t.value,"data-value":t.value,className:g,"aria-disabled":u},l),children:[h,A("span",{className:L(F.content),children:[A("span",{className:L(F["label-content"]),children:[d(Er,{label:t.label||t.value,prefix:t.__labelPrefix,highlightText:r,triggerVariant:n}),d(zr,{labelTag:t.labelTag,highlightText:r,triggerVariant:n})]}),d(Vr,{description:t.description,highlightText:r,triggerVariant:n}),d(Hr,{tags:t.tags,highlightText:r,triggerVariant:n}),d(Br,{filteringTags:t.filteringTags,highlightText:r,triggerVariant:n})]})]})};const Ze=$r;const j={"selectable-item":"awsui_selectable-item_15o6u_1g6vu_93","pad-bottom":"awsui_pad-bottom_15o6u_1g6vu_113","has-background":"awsui_has-background_15o6u_1g6vu_122",highlighted:"awsui_highlighted_15o6u_1g6vu_125",selected:"awsui_selected_15o6u_1g6vu_125",disabled:"awsui_disabled_15o6u_1g6vu_139","next-item-selected":"awsui_next-item-selected_15o6u_1g6vu_147","is-keyboard":"awsui_is-keyboard_15o6u_1g6vu_155",parent:"awsui_parent_15o6u_1g6vu_159",interactiveGroups:"awsui_interactiveGroups_15o6u_1g6vu_163",child:"awsui_child_15o6u_1g6vu_175",virtual:"awsui_virtual_15o6u_1g6vu_190","measure-strut":"awsui_measure-strut_15o6u_1g6vu_201","measure-strut-first":"awsui_measure-strut-first_15o6u_1g6vu_210","screenreader-content":"awsui_screenreader-content_15o6u_1g6vu_214","option-content":"awsui_option-content_15o6u_1g6vu_220"};var Ar=function(e,t){var r,i=e.children,n=e.ariaSelected,a=e.ariaChecked,o=e.selected,s=e.highlighted,u=e.disabled,l=e.hasBackground,g=e.isParent,h=e.isChild,p=e.virtualPosition,y=e.padBottom,f=e.isNextSelected,v=e.useInteractiveGroups,w=e.screenReaderContent,_=e.ariaPosinset,S=e.ariaSetsize,E=e.highlightType,B=q(e,["children","ariaSelected","ariaChecked","selected","highlighted","disabled","hasBackground","isParent","isChild","virtualPosition","padBottom","isNextSelected","useInteractiveGroups","screenReaderContent","ariaPosinset","ariaSetsize","highlightType"]),N=we(B),z=N.className,K=q(N,["className"]),$=L(z,j["selectable-item"],(r={},r[j.selected]=o,r[j.highlighted]=s,r[j["has-background"]]=l,r[j.parent]=g,r[j.child]=h,r[j["is-keyboard"]]=E==="keyboard",r[j.disabled]=u,r[j.virtual]=p!==void 0,r[j["pad-bottom"]]=y,r[j["next-item-selected"]]=f,r[j.interactiveGroups]=v,r)),Q=m.exports.useRef(null),D=m.exports.useRef(null);m.exports.useLayoutEffect(function(){s&&w&&(Q.current&&Q.current.setAttribute("aria-hidden","true"),D.current&&(D.current.textContent=w))},[s,w,Q,D]);var V=p!==void 0?{transform:"translateY(".concat(p,"px)")}:void 0,T={"aria-disabled":u};return g&&!v&&(T["aria-hidden"]=!0),n!==void 0&&(T["aria-selected"]=n),a!==void 0&&(T["aria-checked"]=a),_&&S&&(T["aria-posinset"]=_,T["aria-setsize"]=S),A("li",{...x({role:"option",className:$,style:V},T,K),children:[d("div",{className:j["option-content"],ref:Q,children:i}),d("div",{className:j["measure-strut"],ref:t}),d("div",{className:j["screenreader-content"],ref:D})]})};const It=O.forwardRef(Ar);var Kr=function(e,t){var r=e.option,i=e.highlighted,n=e.selected,a=e.filteringValue,o=e.hasCheckbox,s=e.virtualPosition,u=e.padBottom,l=e.isNextSelected,g=e.screenReaderContent,h=e.ariaPosinset,p=e.ariaSetsize,y=e.highlightType,f=q(e,["option","highlighted","selected","filteringValue","hasCheckbox","virtualPosition","padBottom","isNextSelected","screenReaderContent","ariaPosinset","ariaSetsize","highlightType"]),v=we(f),w=r.type==="parent",_=r.type==="child",S=r.option,E=r.disabled||S.disabled;return d(It,{...x({ariaSelected:Boolean(n),selected:n,isNextSelected:l,highlighted:i,disabled:r.disabled,isParent:w,isChild:_,ref:t,virtualPosition:s,padBottom:u,screenReaderContent:g,ariaPosinset:h,ariaSetsize:p,highlightType:y},v),children:A("div",{className:L(U.item,!w&&S.labelTag&&U["show-label-tag"]),children:[o&&!w&&d("div",{className:U.checkbox,children:d(wt,{checked:n||!1,disabled:r.disabled})}),w?S.label||S.value:d(Ze,{option:x(x({},S),{disabled:E}),highlightText:a}),!o&&!w&&n&&d("div",{className:U["selected-icon"],children:d(Ae,{name:"check"})})]})})};const Wr=O.memo(O.forwardRef(Kr));var jr=function(e,t){var r,i=e.option,n=e.highlighted,a=e.selected,o=e.filteringValue,s=e.hasCheckbox,u=e.virtualPosition,l=e.padBottom,g=e.isNextSelected,h=e.indeterminate,p=e.screenReaderContent,y=e.ariaPosinset,f=e.ariaSetsize,v=e.highlightType,w=q(e,["option","highlighted","selected","filteringValue","hasCheckbox","virtualPosition","padBottom","isNextSelected","indeterminate","screenReaderContent","ariaPosinset","ariaSetsize","highlightType"]),_=we(w),S=i.type==="parent",E=i.type==="child",B=i.option,N=i.disabled||B.disabled,z=L(U.item,(r={},r[U.disabled]=N,r));return d(It,{...x({ariaChecked:S&&h?"mixed":Boolean(a),selected:a,isNextSelected:g,highlighted:n,disabled:N,isParent:S,isChild:E,highlightType:v,ref:t,virtualPosition:u,padBottom:l,useInteractiveGroups:!0,screenReaderContent:p,ariaPosinset:y,ariaSetsize:f},_),children:A("div",{className:z,children:[s&&d("div",{className:U.checkbox,children:d(wt,{checked:a,indeterminate:S&&h,disabled:i.disabled})}),d(Ze,{option:x(x({},B),{disabled:N}),highlightText:o,isGroupOption:S})]})})};const Ur=O.memo(O.forwardRef(jr));var qr=function(e){var t,r=e.option,i=e.index,n=e.getOptionProps,a=e.filteringValue,o=e.checkboxes,s=o===void 0?!1:o,u=n(r,i);u.filteringValue=a;var l=br(r)||{},g=l.inGroupIndex,h=l.groupIndex,p=l.throughIndex;return x(x({},u),(t={hasCheckbox:s},t["data-group-index"]=h,t["data-child-index"]=g,t["data-test-index"]=p,t))},Ct=function(e){var t=e.options,r=e.getOptionProps,i=e.filteringValue,n=e.highlightType,a=e.checkboxes,o=a===void 0?!1:a,s=e.hasDropdownStatus,u=e.virtualItems,l=e.useInteractiveGroups,g=e.screenReaderContent,h=e.ariaSetsize;return t.map(function(p,y){var f=u&&u[y],v=f?f.index:y,w=qr({option:p,index:v,getOptionProps:r,filteringValue:i,checkboxes:o}),_=y===t.length-1,S=!s&&_,E=l?Ur:Wr;return d(E,{...x({key:v},w,{virtualPosition:f&&f.start,ref:f&&f.measureRef,padBottom:S,screenReaderContent:g,ariaPosinset:v+1,ariaSetsize:h,highlightType:n})})})},Qr=function(e,t){var r=e.menuProps,i=e.getOptionProps,n=e.filteredOptions,a=e.filteringValue,o=e.highlightType,s=e.checkboxes,u=e.hasDropdownStatus,l=e.listBottom,g=e.useInteractiveGroups,h=e.screenReaderContent,p=r.ref;return m.exports.useImperativeHandle(t,function(){return function(y){var f,v=(f=p.current)===null||f===void 0?void 0:f.querySelector('[data-mouse-target="'.concat(y,'"]'));o==="keyboard"&&v&&tr(v)}},[o,p]),A(at,{...x({},r),children:[Ct({options:n,getOptionProps:i,filteringValue:a,highlightType:o,checkboxes:s,hasDropdownStatus:u,useInteractiveGroups:g,screenReaderContent:h}),l?d("li",{role:"option",className:U["list-bottom"],children:l}):null]})};const Yr=m.exports.forwardRef(Qr);function Re(){return Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Re.apply(this,arguments)}function Jr(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Xr=["bottom","height","left","right","top","width"],Zr=function(t,r){return t===void 0&&(t={}),r===void 0&&(r={}),Xr.some(function(i){return t[i]!==r[i]})},ye=new Map,Rt,ei=function e(){var t=[];ye.forEach(function(r,i){var n=i.getBoundingClientRect();Zr(n,r.rect)&&(r.rect=n,t.push(r))}),t.forEach(function(r){r.callbacks.forEach(function(i){return i(r.rect)})}),Rt=window.requestAnimationFrame(e)};function ti(e,t){return{observe:function(){var i=ye.size===0;ye.has(e)?ye.get(e).callbacks.push(t):ye.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),i&&ei()},unobserve:function(){var i=ye.get(e);if(i){var n=i.callbacks.indexOf(t);n>=0&&i.callbacks.splice(n,1),i.callbacks.length||ye.delete(e),ye.size||cancelAnimationFrame(Rt)}}}}var Qe=typeof window<"u"?O.useLayoutEffect:O.useEffect;function ri(e,t){t===void 0&&(t={width:0,height:0});var r=O.useState(e.current),i=r[0],n=r[1],a=O.useReducer(ii,t),o=a[0],s=a[1],u=O.useRef(!1);return Qe(function(){e.current!==i&&n(e.current)}),Qe(function(){if(i&&!u.current){u.current=!0;var l=i.getBoundingClientRect();s({rect:l})}},[i]),O.useEffect(function(){if(!!i){var l=ti(i,function(g){s({rect:g})});return l.observe(),function(){l.unobserve()}}},[i]),o}function ii(e,t){var r=t.rect;return e.height!==r.height||e.width!==r.width?r:e}var ni=function(){return 50},ai=function(t){return t},oi=function(t,r){var i=r?"offsetWidth":"offsetHeight";return t[i]},si=function(t){for(var r=Math.max(t.start-t.overscan,0),i=Math.min(t.end+t.overscan,t.size-1),n=[],a=r;a<=i;a++)n.push(a);return n};function li(e){var t,r=e.size,i=r===void 0?0:r,n=e.estimateSize,a=n===void 0?ni:n,o=e.overscan,s=o===void 0?1:o,u=e.paddingStart,l=u===void 0?0:u,g=e.paddingEnd,h=g===void 0?0:g,p=e.parentRef,y=e.horizontal,f=e.scrollToFn,v=e.useObserver,w=e.initialRect,_=e.onScrollElement,S=e.scrollOffsetFn,E=e.keyExtractor,B=E===void 0?ai:E,N=e.measureSize,z=N===void 0?oi:N,K=e.rangeExtractor,$=K===void 0?si:K,Q=y?"width":"height",D=y?"scrollLeft":"scrollTop",V=O.useRef({scrollOffset:0,measurements:[]}),T=O.useState(0),ae=T[0],_e=T[1];V.current.scrollOffset=ae;var ke=v||ri,ze=ke(p,w),Se=ze[Q];V.current.outerSize=Se;var fe=O.useCallback(function(R){p.current&&(p.current[D]=R)},[p,D]),oe=f||fe;f=O.useCallback(function(R){oe(R,fe)},[fe,oe]);var Z=O.useState({}),Ne=Z[0],se=Z[1],Ve=O.useCallback(function(){return se({})},[]),re=O.useRef([]),Y=O.useMemo(function(){var R=re.current.length>0?Math.min.apply(Math,re.current):0;re.current=[];for(var M=V.current.measurements.slice(0,R),I=R;I<i;I++){var G=B(I),c=Ne[G],b=M[I-1]?M[I-1].end:l,k=typeof c=="number"?c:a(I),C=b+k;M[I]={index:I,start:b,size:k,end:C,key:G}}return M},[a,Ne,l,i,B]),le=(((t=Y[i-1])==null?void 0:t.end)||l)+h;V.current.measurements=Y,V.current.totalSize=le;var J=_?_.current:p.current,pe=O.useRef(S);pe.current=S,Qe(function(){if(!J){_e(0);return}var R=function(I){var G=pe.current?pe.current(I):J[D];_e(G)};return R(),J.addEventListener("scroll",R,{capture:!1,passive:!0}),function(){J.removeEventListener("scroll",R)}},[J,D]);var De=di(V.current),ue=De.start,ge=De.end,de=O.useMemo(function(){return $({start:ue,end:ge,overscan:s,size:Y.length})},[ue,ge,s,Y.length,$]),he=O.useRef(z);he.current=z;var He=O.useMemo(function(){for(var R=[],M=function(b,k){var C=de[b],X=Y[C],H=Re(Re({},X),{},{measureRef:function(ce){if(ce){var Ie=he.current(ce,y);if(Ie!==H.size){var Me=V.current.scrollOffset;H.start<Me&&fe(Me+(Ie-H.size)),re.current.push(C),se(function(et){var Be;return Re(Re({},et),{},(Be={},Be[H.key]=Ie,Be))})}}}});R.push(H)},I=0,G=de.length;I<G;I++)M(I);return R},[de,fe,y,Y]),Te=O.useRef(!1);Qe(function(){Te.current&&se({}),Te.current=!0},[a]);var ee=O.useCallback(function(R,M){var I=M===void 0?{}:M,G=I.align,c=G===void 0?"start":G,b=V.current,k=b.scrollOffset,C=b.outerSize;c==="auto"&&(R<=k?c="start":R>=k+C?c="end":c="start"),c==="start"?f(R):c==="end"?f(R-C):c==="center"&&f(R-C/2)},[f]),Oe=O.useCallback(function(R,M){var I=M===void 0?{}:M,G=I.align,c=G===void 0?"auto":G,b=Jr(I,["align"]),k=V.current,C=k.measurements,X=k.scrollOffset,H=k.outerSize,W=C[Math.max(0,Math.min(R,i-1))];if(!!W){if(c==="auto")if(W.end>=X+H)c="end";else if(W.start<=X)c="start";else return;var ce=c==="center"?W.start+W.size/2:c==="end"?W.end:W.start;ee(ce,Re({align:c},b))}},[ee,i]),be=O.useCallback(function(){for(var R=arguments.length,M=new Array(R),I=0;I<R;I++)M[I]=arguments[I];Oe.apply(void 0,M),requestAnimationFrame(function(){Oe.apply(void 0,M)})},[Oe]);return{virtualItems:He,totalSize:le,scrollToOffset:ee,scrollToIndex:be,measure:Ve}}var ui=function(t,r,i,n){for(;t<=r;){var a=(t+r)/2|0,o=i(a);if(o<n)t=a+1;else if(o>n)r=a-1;else return a}return t>0?t-1:0};function di(e){for(var t=e.measurements,r=e.outerSize,i=e.scrollOffset,n=t.length-1,a=function(l){return t[l].start},o=ui(0,n,a,i),s=o;s<n&&t[s].end<i+r;)s++;return{start:o,end:s}}var ci=function(e,t){return e.menuProps.open?d(fi,{...x({},e,{ref:t})}):d(gi,{...x({},e,{ref:t})})},fi=m.exports.forwardRef(function(e,t){var r=e.menuProps,i=e.getOptionProps,n=e.filteredOptions,a=e.filteringValue,o=e.highlightType,s=e.checkboxes,u=e.hasDropdownStatus,l=e.listBottom,g=e.useInteractiveGroups,h=e.screenReaderContent,p=rr(function(z){return z.width},[]),y=p[0],f=p[1],v=m.exports.useRef(null),w=Je(f,v,r.ref),_=li({size:n.length,parentRef:v,estimateSize:m.exports.useCallback(function(){return 31},[y,a]),overscan:5}),S=_.virtualItems,E=_.totalSize,B=_.scrollToIndex;m.exports.useImperativeHandle(t,function(){return function(z){o==="keyboard"&&B(z)}},[o,B]);var N=Ct({options:S.map(function(z){var K=z.index;return n[K]}),getOptionProps:i,filteringValue:a,highlightType:o,checkboxes:s,hasDropdownStatus:u,virtualItems:S,useInteractiveGroups:g,screenReaderContent:h,ariaSetsize:n.length});return A(at,{...x({},r,{ref:w}),children:[d("div",{"aria-hidden":"true",className:U["layout-strut"],style:{height:E}},"total-size"),N,l?d("li",{role:"option",className:U["list-bottom"],children:l}):null]})}),gi=m.exports.forwardRef(function(e,t){var r=e.menuProps,i=e.listBottom;return m.exports.useImperativeHandle(t,function(){return function(){}},[]),d(at,{...x({},r,{ref:r.ref}),children:i?d("li",{role:"option",className:U["list-bottom"],children:i}):null})});const hi=m.exports.forwardRef(ci);var vi=O.forwardRef(function(e,t){var r=e.filteringType,i=q(e,["filteringType"]);return r==="none"?null:d(ir,{...x({ref:t,type:"search",className:U.filter,autoComplete:!1,disableBrowserAutocorrect:!0,invalid:!1,__noBorderRadius:!0},i,{__nativeAttributes:x({"aria-expanded":!0,"aria-haspopup":!0,role:"combobox",autoCorrect:"off",autoCapitalize:"off"},i.__nativeAttributes)})})});const pi=vi;const xe={"button-trigger":"awsui_button-trigger_18eso_10fjc_97",arrow:"awsui_arrow_18eso_10fjc_97","has-caret":"awsui_has-caret_18eso_10fjc_135",placeholder:"awsui_placeholder_18eso_10fjc_138",pressed:"awsui_pressed_18eso_10fjc_151",disabled:"awsui_disabled_18eso_10fjc_154","in-filtering-token":"awsui_in-filtering-token_18eso_10fjc_163","read-only":"awsui_read-only_18eso_10fjc_169",invalid:"awsui_invalid_18eso_10fjc_186"};var bi=function(e,t){var r=e.children,i=e.pressed,n=i===void 0?!1:i,a=e.hideCaret,o=a===void 0?!1:a,s=e.disabled,u=s===void 0?!1:s,l=e.readOnly,g=l===void 0?!1:l,h=e.invalid,p=h===void 0?!1:h,y=e.inFilteringToken,f=e.ariaHasPopup,v=e.ariaLabel,w=e.ariaLabelledby,_=e.ariaDescribedby,S=e.onKeyDown,E=e.onKeyUp,B=e.onMouseDown,N=e.onClick,z=e.onFocus,K=e.onBlur,$=q(e,["children","pressed","hideCaret","disabled","readOnly","invalid","inFilteringToken","ariaHasPopup","ariaLabel","ariaLabelledby","ariaDescribedby","onKeyDown","onKeyUp","onMouseDown","onClick","onFocus","onBlur"]),Q=we($),D=ot(),V=x(x(x({},D),Q),{type:"button",className:L(xe["button-trigger"],Q.className,n&&xe.pressed,u&&xe.disabled,p&&xe.invalid,!o&&xe["has-caret"],g&&xe["read-only"],y&&xe["in-filtering-token"]),disabled:u||g,"aria-expanded":n,"aria-label":v,"aria-labelledby":w,"aria-describedby":_,"aria-haspopup":f!=null?f:"listbox",onKeyDown:S&&function(T){return ct(S,T)},onKeyUp:E&&function(T){return ct(E,T)},onMouseDown:B&&function(T){return Ee(B,{},T)},onClick:N&&function(T){return Ee(N,{},T)},onFocus:z&&function(T){return Ee(z,{},T)},onBlur:K&&function(T){return Ee(K,{relatedTarget:nr(T.nativeEvent)},T)}});return p&&(V["aria-invalid"]=p),A("button",{...x({ref:t},V),children:[r,!o&&d("span",{className:xe.arrow,children:d(Ae,{name:"caret-down-filled",variant:u?"disabled":"normal"})})]})};const mi=O.forwardRef(bi);var xi=O.forwardRef(function(e,t){var r=e.ariaLabelledby,i=e.ariaDescribedby,n=e.controlId,a=e.invalid,o=e.triggerProps,s=e.selectedOption,u=e.triggerVariant,l=e.inFilteringToken,g=e.isOpen,h=e.placeholder,p=e.disabled,y=e.ariaLabel,f=m.exports.useMemo(function(){return n!=null?n:yt()},[n]),v=null;s?u==="option"?v=d(Ze,{id:o.ariaLabelledby,option:x(x({},s),{disabled:p}),triggerVariant:!0}):v=d("span",{id:o.ariaLabelledby,className:U.trigger,children:s.label||s.value}):v=d("span",{"aria-disabled":"true",className:L(U.placeholder,U.trigger),id:o.ariaLabelledby,children:h});var w=Je(o.ref,t);return d(mi,{...x({},o,{id:f,ref:w,pressed:g,disabled:p,invalid:a,inFilteringToken:l,ariaLabel:y,ariaDescribedby:i,ariaLabelledby:[r,o.ariaLabelledby].filter(function(_){return!!_}).join(" ")}),children:v})});const yi=xi;const Le={root:"awsui_root_dm8gx_1kw6u_97","has-items":"awsui_has-items_dm8gx_1kw6u_107",token:"awsui_token_dm8gx_1kw6u_111","dismiss-button":"awsui_dismiss-button_dm8gx_1kw6u_123","token-disabled":"awsui_token-disabled_dm8gx_1kw6u_157",toggle:"awsui_toggle_dm8gx_1kw6u_172",description:"awsui_description_dm8gx_1kw6u_233"};function wi(e){var t=e.disabled,r=e.dismissLabel,i=e.onDismiss,n={tabIndex:-1};r&&(n["aria-label"]=r),t||(n.onClick=i,n.tabIndex=0);var a=ot();return d("button",{...x({type:"button",className:L(Le["dismiss-button"])},n,a),children:d(Ae,{name:"close"})})}var _i=function(e){var t=e.controlId,r=e.allHidden,i=e.expanded,n=e.numberOfHiddenOptions,a=e.onClick,o=e.i18nStrings,s=o===void 0?{}:o,u=ot(),l=r?n:"+".concat(n),g=i?s.limitShowFewer:"".concat(s.limitShowMore||""," (").concat(l,")"),h=m.exports.useCallback(function(){Pe(a,null)},[a]);return A("button",{...x({type:"button",className:Le.toggle,onClick:h,"aria-controls":t,"aria-expanded":i},u),children:[d(Ae,{name:i?"treeview-collapse":"treeview-expand"}),d("span",{className:Le.description,children:g})]})};const ki=_i;function Si(e){var t=e.items,r=e.alignment,i=e.onDismiss,n=e.__internalRootRef,a=e.limit,o=q(e,["items","alignment","onDismiss","__internalRootRef","limit"]);ar("TokenGroup","items",t,"onDismiss",i);var s=m.exports.useState(!1),u=s[0],l=s[1],g=nt(),h=t.length>0,p=h&&a!==void 0&&t.length>a,y=p&&!u?t.slice(0,a):t,f=we(o),v=L(f.className,Le.root,h&&Le["has-items"]);return A("div",{...x({},f,{className:v,ref:n}),children:[h&&d(or,{id:g,direction:r,size:"xs",children:y.map(function(w,_){return d(Ti,{...x({key:_},w,{onDismiss:function(){return Pe(i,{itemIndex:_})}})})})}),p&&d(ki,{controlId:g,allHidden:a===0,expanded:u,numberOfHiddenOptions:t.length-y.length,i18nStrings:o.i18nStrings,onClick:function(){return l(!u)}})]})}function Ti(e){var t=e.disabled,r=e.dismissLabel,i=e.onDismiss,n=q(e,["disabled","dismissLabel","onDismiss"]);return A("div",{className:L(Le.token,t&&Le["token-disabled"]),"aria-disabled":t?"true":void 0,children:[d(Ze,{option:x(x({},n),{disabled:t})}),d(wi,{disabled:t,dismissLabel:r,onDismiss:i})]})}function Pt(e){var t=e.items,r=t===void 0?[]:t,i=e.alignment,n=i===void 0?"horizontal":i,a=q(e,["items","alignment"]),o=Ye("TokenGroup");return d(Si,{...x({items:r,alignment:n},a,o)})}Xe(Pt,"TokenGroup");const Oi={root:"awsui_root_f8g6q_1bz5w_93"};var Ii=O.forwardRef(function(e,t){var r,i=e.options,n=i===void 0?[]:i,a=e.filteringType,o=a===void 0?"none":a,s=e.filteringPlaceholder,u=e.filteringAriaLabel,l=e.ariaRequired,g=e.placeholder,h=e.disabled,p=e.ariaLabel,y=e.statusType,f=y===void 0?"finished":y,v=e.empty,w=e.loadingText,_=e.finishedText,S=e.errorText,E=e.recoveryText,B=e.noMatch,N=e.selectedAriaLabel,z=e.renderHighlightedAriaLive,K=e.selectedOptions,$=K===void 0?[]:K,Q=e.deselectAriaLabel,D=e.keepOpen,V=D===void 0?!0:D,T=e.tokenLimit,ae=e.i18nStrings,_e=e.onBlur,ke=e.onFocus,ze=e.onLoadItems,Se=e.onChange,fe=e.virtualScroll,oe=e.hideTokens,Z=oe===void 0?!1:oe,Ne=e.expandToViewport,se=e.__internalRootRef,Ve=se===void 0?null:se,re=q(e,["options","filteringType","filteringPlaceholder","filteringAriaLabel","ariaRequired","placeholder","disabled","ariaLabel","statusType","empty","loadingText","finishedText","errorText","recoveryText","noMatch","selectedAriaLabel","renderHighlightedAriaLive","selectedOptions","deselectAriaLabel","keepOpen","tokenLimit","i18nStrings","onBlur","onFocus","onLoadItems","onChange","virtualScroll","hideTokens","expandToViewport","__internalRootRef"]),Y=we(re),le=sr(re),J=Nr({onLoadItems:ze,options:n,statusType:f}),pe=J.handleLoadMore,De=J.handleRecoveryClick,ue=J.fireLoadItems,ge=!0,de=m.exports.useState(""),he=de[0],He=de[1],Te=xr(n,o,he),ee=Te.filteredOptions,Oe=Te.parentMap,be=m.exports.useCallback(function(P){var ve=ee.filter(function(te){return te.type!=="parent"}).map(function(te){return te.option}),We=function(te){return te.every(function(ie){return Ue($,ie)>-1||ie.disabled})},je=function(te,ie){return te.filter(function(Fe){return Ue(ie,Fe)>-1&&!Fe.disabled})},At=function(te,ie){return te.filter(function(Fe){return Ue(ie,Fe)===-1}).concat(ie)},lt=function(te,ie){return At(ie,te)},ut=function(te,ie){return ie.filter(function(Fe){return Ue(te,Fe)===-1})},Ce=ft([],$,!0);if($e(P)){var tt=je(ft([],P.options,!0),ve);Ce=We(tt)?ut(tt,Ce):lt(tt,Ce)}else Ce=We([P])?ut([P],Ce):lt([P],Ce);Pe(Se,{selectedOptions:Ce})},[Se,$,ee]),R=m.exports.useRef(null),M=nt("trigger"),I=(r=le.controlId)!==null&&r!==void 0?r:M,G=m.exports.useRef(null),c=Ir({selectedOptions:$,updateSelectedOption:be,options:ee,filteringType:o,onFocus:ke,onBlur:_e,externalRef:t,keepOpen:V,fireLoadItems:ue,setFilteringValue:He,useInteractiveGroups:ge}),b=c.isOpen,k=c.highlightType,C=c.highlightedOption,X=c.highlightedIndex,H=c.getTriggerProps,W=c.getFilterProps,ce=c.getMenuProps,Ie=c.getOptionProps,Me=c.highlightOption,et=c.announceSelected,Be=Lr({isEnabled:o==="none"&&b,options:ee,highlightOption:Me,highlightedOption:C==null?void 0:C.option,useInteractiveGroups:ge}),Lt=!n||n.length===0,Nt=ee&&ee.length===0,Ge=hr({statusType:f,empty:v,loadingText:w,finishedText:_,errorText:S,recoveryText:E,isEmpty:Lt,isNoMatch:Nt,noMatch:B,onRecoveryClick:De}),Dt=d(pi,{...x({filteringType:o,placeholder:s,ariaLabel:u,ariaRequired:l,value:he},W())}),Mt=d(yi,{...x({placeholder:g,disabled:h,ariaLabel:p,triggerProps:H(h),selectedOption:null,isOpen:b},le,{controlId:I})}),Ft=x(x({},ce()),{onLoadMore:pe,ariaLabelledby:I}),Et=Mr({announceSelected:et,highlightedOption:C,getParent:function(P){var ve;return(ve=Oe.get(P))===null||ve===void 0?void 0:ve.option},selectedAriaLabel:N,renderHighlightedAriaLive:z}),st=$.map(function(P){return{label:P.label,disabled:h||P.disabled,labelTag:P.labelTag,description:P.description,iconAlt:P.iconAlt,iconName:P.iconName,iconUrl:P.iconUrl,iconSvg:P.iconSvg,tags:P.tags,dismissLabel:Q?Q(P):void 0}});m.exports.useEffect(function(){var P;(P=G.current)===null||P===void 0||P.call(G,X)},[X]);var zt=fe?hi:Yr,Vt=function(P){var ve=P.target;ve!==document.activeElement&&P.preventDefault()},Ht=!Z&&st.length>0,Bt=function(P){var ve=P.detail,We=$[ve.itemIndex];be(We);var je=H().ref;je.current&&je.current.focus()},Gt={limitShowFewer:ae==null?void 0:ae.tokenLimitShowFewer,limitShowMore:ae==null?void 0:ae.tokenLimitShowMore},$t=Je(R,Ve);return A("div",{...x({},Y,{ref:$t,className:L(Oi.root,Y.className),onKeyPress:Be}),children:[d(lr,{open:b,trigger:Mt,header:Dt,onMouseDown:Vt,footer:Ge.isSticky?d(vt,{content:Ge.content}):null,expandToViewport:Ne,children:d(zt,{listBottom:Ge.isSticky?null:d(vt,{content:Ge.content}),menuProps:Ft,getOptionProps:Ie,filteredOptions:ee,filteringValue:he,ref:G,hasDropdownStatus:Ge.content!==null,checkboxes:!0,useInteractiveGroups:ge,screenReaderContent:Et,highlightType:k})}),Ht&&d(Pt,{limit:T,items:st,onDismiss:Bt,i18nStrings:Gt})]})});const Ri=Ii;export{cr as C,Ri as I,dr as a,ur as b};
