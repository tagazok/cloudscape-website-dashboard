import{_ as re,u as et,j as u,h as Rt,b as D,c as tt,a as nt,e as A,F as Fe,f as L,R as G,g as Ne,r as m,V as Tt,a9 as It,l as K,$ as Lt,q as Be,aa as Dt,K as fe,ab as Ge,ac as ve,a7 as Ft,p as rt,Z as Nt,ad as Xe,ae as it,W as Bt,af as Pt,m as Mt,ag as Wt,ah as zt,ai as ne,aj as jt,ak as qt,al as Ye,o as Pe,x as we,am as Ht,G as Et,v as Qe,O as Ot,S as At,an as Ut,ao as Vt,ap as $t,aq as Kt}from"./index.45e55c72.js";function Gt(e){var t=e.variant,n=t===void 0?"div":t,i=e.margin,r=i===void 0?{}:i,o=e.padding,l=o===void 0?{}:o,a=re(e,["variant","margin","padding"]),d=et("Box");return u(Rt,{...D({variant:n,margin:r,padding:l},a,d)})}tt(Gt,"Box");const p={root:"awsui_root_wih1l_wc5vj_97",tools:"awsui_tools_wih1l_wc5vj_106","tools-filtering":"awsui_tools-filtering_wih1l_wc5vj_112","tools-align-right":"awsui_tools-align-right_wih1l_wc5vj_117","tools-pagination":"awsui_tools-pagination_wih1l_wc5vj_121","tools-preferences":"awsui_tools-preferences_wih1l_wc5vj_121","tools-small":"awsui_tools-small_wih1l_wc5vj_127",table:"awsui_table_wih1l_wc5vj_133","table-layout-fixed":"awsui_table-layout-fixed_wih1l_wc5vj_139",wrapper:"awsui_wrapper_wih1l_wc5vj_143","variant-stacked":"awsui_variant-stacked_wih1l_wc5vj_153","variant-container":"awsui_variant-container_wih1l_wc5vj_153","variant-embedded":"awsui_variant-embedded_wih1l_wc5vj_157","has-header":"awsui_has-header_wih1l_wc5vj_160","has-footer":"awsui_has-footer_wih1l_wc5vj_163","cell-merged":"awsui_cell-merged_wih1l_wc5vj_173","cell-merged-content":"awsui_cell-merged-content_wih1l_wc5vj_177",empty:"awsui_empty_wih1l_wc5vj_192",loading:"awsui_loading_wih1l_wc5vj_196","selection-control":"awsui_selection-control_wih1l_wc5vj_200","selection-control-header":"awsui_selection-control-header_wih1l_wc5vj_207","sticky-scrollbar":"awsui_sticky-scrollbar_wih1l_wc5vj_212","sticky-scrollbar-content":"awsui_sticky-scrollbar-content_wih1l_wc5vj_222","sticky-scrollbar-visible":"awsui_sticky-scrollbar-visible_wih1l_wc5vj_225","header-secondary":"awsui_header-secondary_wih1l_wc5vj_229","header-controls":"awsui_header-controls_wih1l_wc5vj_246",divider:"awsui_divider_wih1l_wc5vj_263","footer-wrapper":"awsui_footer-wrapper_wih1l_wc5vj_270",footer:"awsui_footer_wih1l_wc5vj_270","thead-active":"awsui_thead-active_wih1l_wc5vj_279",row:"awsui_row_wih1l_wc5vj_280","row-selected":"awsui_row-selected_wih1l_wc5vj_281"};function Xt(e){var t=e.header,n=e.filter,i=e.pagination,r=e.preferences,o=nt(["xs"]),l=o[0],a=o[1],d=l==="default",c=n||i||r;return A(Fe,{children:[t,c&&A("div",{ref:a,className:L(p.tools,d&&p["tools-small"]),children:[n&&u("div",{className:p["tools-filtering"],children:n}),A("div",{className:p["tools-align-right"],children:[i&&u("div",{className:p["tools-pagination"],children:i}),r&&u("div",{className:p["tools-preferences"],children:r})]})]})]})}const Se={root:"awsui_root_k2y2q_5zih0_93","checkbox-control":"awsui_checkbox-control_k2y2q_5zih0_105",outline:"awsui_outline_k2y2q_5zih0_113"};var Yt=G.forwardRef(function(e,t){var n=e.controlId,i=e.name,r=e.checked,o=e.disabled,l=e.indeterminate,a=e.children,d=e.description,c=e.ariaLabel,s=e.ariaLabelledby,v=e.ariaDescribedby,w=e.onFocus,_=e.onBlur,h=e.onChange,k=e.withoutLabel,R=e.tabIndex,f=e.__internalRootRef,T=re(e,["controlId","name","checked","disabled","indeterminate","children","description","ariaLabel","ariaLabelledby","ariaDescribedby","onFocus","onBlur","onChange","withoutLabel","tabIndex","__internalRootRef"]),C=Ne(T),y=m.exports.useRef(null);return Tt(t,y),m.exports.useEffect(function(){y.current&&(y.current.indeterminate=Boolean(l))}),u(It,{...D({},C,{className:L(Se.root,C.className),controlClassName:Se["checkbox-control"],outlineClassName:Se.outline,controlId:n,disabled:o,label:a,description:d,descriptionBottomPadding:!0,ariaLabel:c,ariaLabelledby:s,ariaDescribedby:v,nativeControl:function(N){return u("input",{...D({},N,{ref:y,type:"checkbox",checked:r,name:i,tabIndex:R,onFocus:w&&function(){return K(w)},onBlur:_&&function(){return K(_)},onChange:function(){},onClick:h&&function(){return K(h,l?{checked:!0,indeterminate:!1}:{checked:!r,indeterminate:!1})}})})},styledControl:u(Lt,{checked:r,indeterminate:l,disabled:o}),withoutLabel:k,__internalRootRef:f})})});const Qt=Yt;const de={root:"awsui_root_1ut8b_8i78g_93",label:"awsui_label_1ut8b_8i78g_97",stud:"awsui_stud_1ut8b_8i78g_113"};function ot(e){var t=e.selectionType,n=e.indeterminate,i=n===void 0?!1:n,r=e.onShiftToggle,o=e.onFocusUp,l=e.onFocusDown,a=e.name,d=e.ariaLabel,c=re(e,["selectionType","indeterminate","onShiftToggle","onFocusUp","onFocusDown","name","ariaLabel"]),s=Be(),v=t==="multi",w=function(f){v&&r&&r(f.shiftKey)},_=function(f){w(f),v&&f.preventDefault()},h=function(f){w(f),v&&(f.keyCode===fe.up&&(f.preventDefault(),o&&o(f)),f.keyCode===fe.down&&(f.preventDefault(),l&&l(f)))},k=function(f){var T=f.currentTarget,C=T.tagName==="INPUT"?T:T.querySelector("input");C==null||C.focus()},R=v?u(Qt,{...D({},c,{controlId:s,withoutLabel:!0,indeterminate:i})}):u(Dt,{...D({},c,{controlId:s,withoutLabel:!0,name:a,value:"",label:""})});return A(Fe,{children:[u("label",{onKeyDown:h,onKeyUp:w,onMouseDown:_,onMouseUp:w,onClick:k,htmlFor:s,className:L(de.label,de.root),"aria-label":d,children:R}),u("span",{className:L(de.stud),"aria-hidden":!0,children:"\xA0"})]})}var at=function(e,t){return typeof e=="function"?e(t):t[e]},Zt=function(e,t,n){return e?at(e,t):n},ue=function(e,t){return e?at(e,t):t},Z=function(e,t){return e.id||t},Jt=function(e){var t=!e||e==="container";return t?"default":e},xe,ke,Re,_e="selection-item",en="selection-root";function tn(e,t){return t===-1?e.querySelector("[data-".concat(_e,'="all"] .').concat(de.root," input")):e.querySelectorAll("[data-".concat(_e,'="item"] .').concat(de.root," input"))[t]}function nn(e){return ve(e,function(t){return t.dataset.selectionRoot==="true"})}function rn(e,t){if(e!=="multi")return{};function n(l,a,d){for(var c=a,s=nn(l);c>=-1&&c<t;){c+=d;var v=tn(s,c);if(v&&!v.disabled){v.focus();break}}}var i=[1,-1].map(function(l){return function(a){var d=a.currentTarget,c=ve(d,function(v){return v.dataset.selectionItem==="item"}),s=Array.prototype.indexOf.call(c.parentElement.children,c);n(d,s,l)}}),r=i[0],o=i[1];return{moveFocusDown:r,moveFocusUp:o,moveFocus:n}}var Te=function(){function e(t,n){var i=this;this.map=new Map,this.put=function(r){return i.map.set.call(i.map,ue(i.trackBy,r),r)},this.has=function(r){return i.map.has.call(i.map,ue(i.trackBy,r))},this.forEach=this.map.forEach.bind(this.map),this.trackBy=t,n.forEach(this.put)}return e}(),Le={item:(xe={},xe["data-"+_e]="item",xe),all:(ke={},ke["data-"+_e]="all",ke),root:(Re={},Re["data-"+en]="true",Re)};function on(e){var t,n=e.items,i=e.selectedItems,r=i===void 0?[]:i,o=e.selectionType,l=e.isItemDisabled,a=l===void 0?function(){return!1}:l,d=e.trackBy,c=e.onSelectionChange,s=e.ariaLabels,v=m.exports.useState(!1),w=v[0],_=v[1],h=m.exports.useState(null),k=h[0],R=h[1],f=Be(),T=o==="single"?r.slice(0,1):r,C=new Te(d,T),y=new Map;n.forEach(function(g,S){return y.set(ue(d,g),S)});var N=C.has.bind(C),H=function(g){return{disabled:a(g),selected:N(g)}},F=o?n.reduce(function(g,S){var b=g[0],P=g[1],z=H(S),$=z.disabled,Y=z.selected;return[b&&$,P&&(Y||$)]},[!0,!0]):[!0,!0],B=F[0],x=F[1],W=T.length>0,U=function(){var g=new Te(d,n),S=x?O(g):X(g);K(c,{selectedItems:S})},V=function(g){var S=new Te(d,[g]),b=k?y.get(ue(d,k)):-1;if(b===void 0&&(b=-1),w&&b!==-1){var P=y.get(ue(d,g)),z=Math.min(P,b),$=Math.max(P,b);n.slice(z,$+1).forEach(function(Y){return S.put(Y)})}return S},O=function(g){var S=[];return r.forEach(function(b){var P=g.has(b);(!P||a(b))&&S.push(b)}),S},X=function(g){var S=Ft([],r,!0);return g.forEach(function(b){var P=H(b),z=P.selected,$=P.disabled;!z&&!$&&S.push(b)}),S},q=function(g){return function(){var S=H(g),b=S.disabled,P=S.selected;if(!(b||o==="single"&&P))if(o==="single")K(c,{selectedItems:[g]});else{var z=V(g),$=P?O(z):X(z);K(c,{selectedItems:$}),R(g)}}};return{isItemSelected:N,selectAllProps:{name:f,disabled:B,selectionType:o,indeterminate:W&&!x,checked:W&&x,onChange:U,ariaLabel:Ge(s==null?void 0:s.selectionGroupLabel,(t=s==null?void 0:s.allItemsSelectionLabel)===null||t===void 0?void 0:t.call(s,{selectedItems:r}))},getItemSelectionProps:function(g){var S;return{name:f,selectionType:o,ariaLabel:Ge(s==null?void 0:s.selectionGroupLabel,(S=s==null?void 0:s.itemSelectionLabel)===null||S===void 0?void 0:S.call(s,{selectedItems:r},g)),onChange:q(g),checked:N(g),disabled:a(g)}},updateShiftToggle:function(g){_(g)}}}var an={sortable:"caret-down",ascending:"caret-up-filled",descending:"caret-down-filled"},sn={sortable:"none",ascending:"ascending",descending:"descending"},ln=function(e,t,n,i){if(t)return n?"descending":"ascending";if(e&&!i)return"sortable"},cn=function(e){return an[e]},dn=function(e){return sn[e]},un=function(e,t){return e===t||e.sortingField!==void 0&&e.sortingField===t.sortingField||e.sortingComparator!==void 0&&e.sortingComparator===t.sortingComparator};const E={"header-cell":"awsui_header-cell_1spae_1p6if_93","header-cell-sticky":"awsui_header-cell-sticky_1spae_1p6if_103","header-cell-stuck":"awsui_header-cell-stuck_1spae_1p6if_106","header-cell-variant-full-page":"awsui_header-cell-variant-full-page_1spae_1p6if_109","header-cell-sortable":"awsui_header-cell-sortable_1spae_1p6if_115","sorting-icon":"awsui_sorting-icon_1spae_1p6if_128","header-cell-disabled":"awsui_header-cell-disabled_1spae_1p6if_135","header-cell-sorted":"awsui_header-cell-sorted_1spae_1p6if_135","header-cell-content":"awsui_header-cell-content_1spae_1p6if_135","header-cell-fake-focus":"awsui_header-cell-fake-focus_1spae_1p6if_168","header-cell-text":"awsui_header-cell-text_1spae_1p6if_197","header-cell-text-wrap":"awsui_header-cell-text-wrap_1spae_1p6if_197","header-cell-ascending":"awsui_header-cell-ascending_1spae_1p6if_203","header-cell-descending":"awsui_header-cell-descending_1spae_1p6if_204"};function fn(e){var t,n,i,r=e.className,o=e.style,l=e.tabIndex,a=e.column,d=e.activeSortingColumn,c=e.sortingDescending,s=e.sortingDisabled,v=e.wrapLines,w=e.resizer,_=e.showFocusRing,h=e.onClick,k=e.onFocus,R=e.onBlur,f=rt(),T=!!a.sortingComparator||!!a.sortingField,C=!!d&&un(a,d),y=ln(T,C,!!c,!!s),N=function(){return h({sortingColumn:a,isDescending:C?!c:!1})},H=function(F){var B=F.nativeEvent;(B.keyCode===fe.enter||B.keyCode===fe.space)&&(B.preventDefault(),N())};return A("th",{className:L(r,(t={},t[E["header-cell-sortable"]]=y,t[E["header-cell-sorted"]]=y==="ascending"||y==="descending",t[E["header-cell-disabled"]]=s,t[E["header-cell-ascending"]]=y==="ascending",t[E["header-cell-descending"]]=y==="descending",t)),"aria-sort":y&&dn(y),style:o,scope:"col",children:[A("div",{...D({className:L(E["header-cell-content"],(n={},n[E["header-cell-fake-focus"]]=_&&f["data-awsui-focus-visible"],n)),"aria-label":a.ariaLabel?a.ariaLabel({sorted:C,descending:C&&!!c,disabled:!!s}):void 0},s||!y?(i={},i["aria-disabled"]="true",i):D(D({onKeyPress:H,tabIndex:l,role:"button"},f),{onClick:N,onFocus:k,onBlur:R})),children:[u("div",{className:L(E["header-cell-text"],v&&E["header-cell-text-wrap"]),children:a.header}),y&&u("span",{className:E["sorting-icon"],children:u(Nt,{name:cn(y)})})]}),w]})}const oe={"resize-active":"awsui_resize-active_x7peu_1luui_93",resizer:"awsui_resizer_x7peu_1luui_98","resizer-active":"awsui_resizer-active_x7peu_1luui_114",tracker:"awsui_tracker_x7peu_1luui_124"};var vn=10,hn=10,Ze=5;function pn(e){var t=e.onDragMove,n=e.onFinish,i=m.exports.useState(!1),r=i[0],o=i[1],l=m.exports.useState(),a=l[0],d=l[1],c=m.exports.useRef(),s=Xe(n),v=Xe(t);return m.exports.useEffect(function(){if(!(!r||!a)){var w=ve(a,function(x){return x.className.indexOf(p.root)>-1}),_=w.querySelector("table"),h=w.querySelector(".".concat(oe.tracker)),k=it(a)[0],R=k.getBoundingClientRect(),f=R.left,T=R.right,C=function(x){var W=_.getBoundingClientRect().left;h.style.top=a.getBoundingClientRect().height+"px",h.style.left=x-W-1+"px"},y=function(x){v(x),C(a.getBoundingClientRect().right)},N=function(x){if(x>f){var W=a.getBoundingClientRect().left,U=x-W;y(U)}},H=function(){var x=a.getBoundingClientRect().width;c.current=setTimeout(H,hn),y(x+Ze),k.scrollLeft+=Ze},F=function(x){clearTimeout(c.current);var W=x.pageX;W>T?c.current=setTimeout(H,vn):N(W)},B=function(x){N(x.pageX),o(!1),s(),clearTimeout(c.current)};return C(a.getBoundingClientRect().right),document.body.classList.add(oe["resize-active"]),document.addEventListener("mousemove",F),document.addEventListener("mouseup",B),function(){clearTimeout(c.current),document.body.classList.remove(oe["resize-active"]),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",B)}}},[a,r,v,s]),u("span",{className:L(oe.resizer,r&&oe["resizer-active"]),onMouseDown:function(w){if(w.button===0){w.preventDefault();var _=ve(w.currentTarget,function(h){return h.tagName.toLowerCase()==="th"});o(!0),d(_)}}})}function mn(){return u("span",{className:oe.tracker})}var he=120,gn=54;function wn(e,t,n){for(var i={},r=0;r<t.length;r++){var o=t[r],l=Z(t[r],r),a=o.width||0,d=o.minWidth||a||he;if(!a&&r!==t.length-1){var c=n?r+2:r+1,s=e.querySelector(".".concat(E["header-cell"],":nth-child(").concat(c,")"));a=s.getBoundingClientRect().width}i[l]=Math.max(a,d)}return i}function _n(e,t,n,i){var r,o=e[i],l=Z(o,i),a=typeof o.minWidth=="number"?o.minWidth:he;return n=Math.max(n,a),t[l]===n?t:D(D({},t),(r={},r[l]=n,r))}var st=m.exports.createContext({totalWidth:0,columnWidths:{},updateColumn:function(){}});function bn(e){var t=e.tableRef,n=e.visibleColumnDefinitions,i=e.resizableColumns,r=e.hasSelection,o=e.children,l=m.exports.useRef(null),a=m.exports.useState({}),d=a[0],c=a[1];m.exports.useEffect(function(){if(!!i){var w=l.current;if(w)for(var _=function(k){var R=n[k],f=Z(R,k);!d[f]&&w.indexOf(R.id)===-1&&c(function(T){var C;return D(D({},T),(C={},C[f]=R.width||he,C))})},h=0;h<n.length;h++)_(h);l.current=n.map(function(k){return k.id})}},[d,i,n]),m.exports.useEffect(function(){!i||c(function(){return wn(t.current,n,r)})},[]);function s(w,_){c(function(h){return _n(n,h,_,w)})}var v=n.reduce(function(w,_,h){return w+(d[Z(_,h)]||he)},0);return r&&(v+=gn),u(st.Provider,{value:{columnWidths:d,totalWidth:v,updateColumn:s},children:o})}function yn(){return m.exports.useContext(st)}var Cn=G.forwardRef(function(e,t){var n=e.containerWidth,i=e.selectionType,r=e.selectAllProps,o=e.columnDefinitions,l=e.sortingColumn,a=e.sortingDisabled,d=e.sortingDescending,c=e.resizableColumns,s=e.variant,v=e.wrapLines,w=e.onFocusMove,_=e.onCellFocus,h=e.onCellBlur,k=e.onSortingChange,R=e.onResizeFinish,f=e.showFocusRing,T=f===void 0?null:f,C=e.sticky,y=C===void 0?!1:C,N=e.hidden,H=N===void 0?!1:N,F=e.stuck,B=F===void 0?!1:F,x=L(E["header-cell"],E["header-cell-variant-".concat(s)],y&&E["header-cell-sticky"],B&&E["header-cell-stuck"]),W=L(p["selection-control"],p["selection-control-header"]),U=yn(),V=U.columnWidths,O=U.totalWidth,X=U.updateColumn;return u("thead",{className:L(!H&&p["thead-active"]),children:A("tr",{...D({},Le.all,{ref:t}),children:[i==="multi"&&u("th",{className:L(x,W),scope:"col",children:u(ot,{...D({onFocusDown:function(q){return w(q.target,-1,1)}},r,H?{tabIndex:-1}:{})})}),i==="single"&&u("th",{className:L(x,W),scope:"col",children:u("span",{"aria-hidden":!0,children:"\xA0"})}),o.map(function(q,g){var S;return c&&(V&&(S=V[Z(q,g)]),g===o.length-1&&n&&n>O&&(S="auto")),u(fn,{className:x,style:{width:S||q.width,minWidth:y?void 0:q.minWidth,maxWidth:c||y?void 0:q.maxWidth},tabIndex:y?-1:0,showFocusRing:g===T,column:q,activeSortingColumn:l,sortingDescending:d,sortingDisabled:a,wrapLines:v,resizer:c&&u(pn,{onDragMove:function(b){return X(g,b)},onFinish:function(){return R(V)}}),onClick:function(b){return K(k,b)},onFocus:function(){return _==null?void 0:_(g)},onBlur:h},Z(q,g))})]})})});const lt=Cn;const te={"body-cell":"awsui_body-cell_c6tup_c7aag_9","body-cell-wrap":"awsui_body-cell-wrap_c6tup_c7aag_18","body-cell-first-row":"awsui_body-cell-first-row_c6tup_c7aag_31","body-cell-last-row":"awsui_body-cell-last-row_c6tup_c7aag_34","body-cell-selected":"awsui_body-cell-selected_c6tup_c7aag_37","body-cell-next-selected":"awsui_body-cell-next-selected_c6tup_c7aag_56","body-cell-prev-selected":"awsui_body-cell-prev-selected_c6tup_c7aag_60"};function ct(e){var t=e.className,n=e.style,i=e.children,r=e.wrapLines,o=e.isFirstRow,l=e.isLastRow,a=e.isSelected,d=e.isNextSelected,c=e.isPrevSelected;return u("td",{style:n,className:L(t,te["body-cell"],r&&te["body-cell-wrap"],o&&te["body-cell-first-row"],l&&te["body-cell-last-row"],a&&te["body-cell-selected"],d&&te["body-cell-next-selected"],c&&te["body-cell-prev-selected"]),children:i})}function Sn(e){var t=e.item,n=e.column,i=re(e,["item","column"]);return u(ct,{...D({},i),children:n.cell(t)})}function xn(e){var t=e.onRowClick,n=e.onRowContextMenu,i=function(o,l,a){var d=ve(a.target,function(s){return s.tagName.toLowerCase()==="td"});if(!d||!d.classList.contains(p["selection-control"])){var c={rowIndex:o,item:l};K(t,c)}},r=function(o,l,a){var d={rowIndex:o,item:l,clientX:a.clientX,clientY:a.clientY};Bt(n,d,a)};return{onRowClickHandler:t&&i,onRowContextMenuHandler:n&&r}}function kn(e,t){t===void 0&&(t=!1);var n=m.exports.useRef(null),i=function(r){var o=r.target;o&&(n.current===null||n.current===o)&&requestAnimationFrame(function(){n.current=o,e.forEach(function(l){var a=l.current;a&&a!==o&&(a.scrollLeft=o.scrollLeft)}),requestAnimationFrame(function(){n.current=null})})};return t?void 0:i}function Rn(e,t){var n=function(){if(!(!e.current||!t.current)){var r=dt(e.current,t.current);r>0&&De(r,e.current)}},i=function(r){if(!(!r||!e.current||!t.current)){var o=t.current.getBoundingClientRect().bottom,l=o-r.getBoundingClientRect().top;l>0&&De(l,e.current)}};return{scrollToTop:n,scrollToItem:i}}function dt(e,t){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect();return n.top-i.top}function De(e,t){var n=it(t);n.length?n[0].scrollTop-=e:window.scrollTo({top:window.pageYOffset-e})}function Tn(e,t){for(var n=Array.prototype.slice.apply(e.children),i=Array.prototype.slice.apply(t.children),r=0;r<n.length;r++){var o=n[r].style.width;o!=="auto"&&(o="".concat(n[r].offsetWidth,"px")),i[r].style.width=o}}var In=function(e,t,n,i,r){var o=Pt(),l=m.exports.useCallback(function(){e.current&&t.current&&n.current&&i.current&&r.current&&(Tn(t.current,n.current),i.current.style.width="".concat(e.current.offsetWidth,"px"),r.current.style.marginTop="-".concat(t.current.offsetHeight,"px"))},[t,n,i,r,e]);m.exports.useLayoutEffect(function(){l(),setTimeout(function(){return l()},0);var s=i.current,v=r.current;return function(){s&&(s.style.width=""),v&&(v.style.marginTop="")}}),Mt(t,l);var a=function(){if(!o&&t.current&&n.current&&r.current){var s=dt(t.current,n.current);s>0&&De(s,r.current)}},d=Rn(r,n).scrollToItem,c=function(s){o||d(s)};return{scrollToRow:c,scrollToTop:a}};const Ln=m.exports.forwardRef(Dn);function Dn(e,t){var n,i=e.variant,r=e.theadProps,o=e.wrapperRef,l=e.theadRef,a=e.secondaryWrapperRef,d=e.onScroll,c=e.tableRef,s=m.exports.useRef(null),v=m.exports.useRef(null),w=m.exports.useContext(Wt).isStuck,_=m.exports.useState(null),h=_[0],k=_[1],R=In(c,l,s,v,o),f=R.scrollToRow,T=R.scrollToTop;return m.exports.useImperativeHandle(t,function(){return{scrollToTop:T,scrollToRow:f,setFocusedColumn:k}}),u("div",{className:L(p["header-secondary"],p["variant-".concat(i)],(n={},n[p.stuck]=w,n)),"aria-hidden":!0,tabIndex:-1,ref:a,onScroll:d,children:u("table",{className:L(p.table,p["table-layout-fixed"]),role:"table",ref:v,children:u(lt,{...D({ref:s,sticky:!0,stuck:w,showFocusRing:h},r)})})})}var ut=zt(function(){if(typeof document>"u")return{width:0,height:0};var e=document.createElement("div");e.style.overflow="scroll",e.style.height="100px",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:n}}),Ie=function(e,t,n,i,r,o){if(!(!e||!n||!t)){var l=Ye(t)[0],a=l.top+l.height,d=e.getBoundingClientRect(),c=d.top,s=d.bottom,v=d.width,w=t.getBoundingClientRect().width,_=ut().height,h=_>0?_:-15/2,k=a-o>=s+h,R=c>=a-o-h,f=v>w;if(k||R||!f?n.classList.remove(p["sticky-scrollbar-visible"]):(n.classList.contains(p["sticky-scrollbar-visible"])||requestAnimationFrame(function(){n.scrollLeft=t.scrollLeft}),n.classList.add(p["sticky-scrollbar-visible"])),_&&n&&i&&(n.style.height="".concat(_,"px"),i.style.height="".concat(_,"px")),e&&t&&i&&n){var T=Ye(t)[0],C=t.getBoundingClientRect(),y=e.getBoundingClientRect();n.style.width="".concat(C.width,"px"),i.style.width="".concat(y.width,"px"),n.style.left=r?"0px":"".concat(C.left,"px"),n.style.top=r?"0px":"".concat(Math.min(T.top+T.height,window.innerHeight-o),"px")}}};function Fn(e,t,n,i,r){var o=m.exports.useState(!1),l=o[0],a=o[1],d=l?0:r;m.exports.useEffect(function(){if(ne()){var s=function(){Ie(n.current,i.current,e.current,t.current,l,d)};return s(),window.addEventListener("scroll",s,!0),function(){window.removeEventListener("scroll",s,!0)}}},[e,n,i,d,t,l]);var c=i.current;m.exports.useEffect(function(){c&&ne()&&a(!!jt(c))},[c]),m.exports.useEffect(function(){if(ne()&&n.current){var s=new qt(function(v){t.current&&(t.current.style.width="".concat(v[0].borderBoxSize[0].inlineSize,"px"),Ie(n.current,i.current,e.current,t.current,l,d))});return s.observe(n.current),function(){s.disconnect()}}},[t,e,n,i,d,l]),m.exports.useEffect(function(){if(ne()){var s=function(){Ie(n.current,i.current,e.current,t.current,l,d)};return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}},[n,i,e,t,l,d])}const Nn=m.exports.forwardRef(Bn);function Bn(e,t){var n=e.wrapperRef,i=e.tableRef,r=e.onScroll,o=G.useRef(null),l=G.useRef(null),a=Pe(),d=we(t,o),c=Ht().stickyOffsetBottom,s=m.exports.useContext(Et).offsetBottom,v=a?s:c;return Fn(o,l,i,n,v),u("div",{ref:d,className:p["sticky-scrollbar"],onScroll:r,children:u("div",{ref:l,className:p["sticky-scrollbar-content"]})})}var Pn=G.forwardRef(function(e,t){var n,i=e.header,r=e.footer,o=e.empty,l=e.filter,a=e.pagination,d=e.preferences,c=e.items,s=e.columnDefinitions,v=e.trackBy,w=e.loading,_=e.loadingText,h=e.selectionType,k=e.selectedItems,R=e.isItemDisabled,f=e.ariaLabels,T=e.onSelectionChange,C=e.onSortingChange,y=e.sortingColumn,N=e.sortingDescending,H=e.sortingDisabled,F=e.visibleColumns,B=e.stickyHeader,x=e.stickyHeaderVerticalOffset,W=e.onRowClick,U=e.onRowContextMenu,V=e.wrapLines,O=e.resizableColumns,X=e.onColumnWidthsChange,q=e.variant,g=e.__internalRootRef,S=re(e,["header","footer","empty","filter","pagination","preferences","items","columnDefinitions","trackBy","loading","loadingText","selectionType","selectedItems","isItemDisabled","ariaLabels","onSelectionChange","onSortingChange","sortingColumn","sortingDescending","sortingDisabled","visibleColumns","stickyHeader","stickyHeaderVerticalOffset","onRowClick","onRowContextMenu","wrapLines","resizableColumns","onColumnWidthsChange","variant","__internalRootRef"]),b=Ne(S);B=B&&ne();var P=Qe(function(I){var M=I.width;return M}),z=P[0],$=P[1],Y=m.exports.useRef(null),vt=we($,Y),Me=Qe(function(I){var M=I.width;return M}),We=Me[0],ht=Me[1],pe=m.exports.useRef(null),pt=we(ht,pe),ze=G.useRef(null),je=m.exports.useRef(null),ae=G.useRef(null),qe=G.useRef(null);m.exports.useImperativeHandle(t,function(){var I;return{scrollToTop:((I=ae.current)===null||I===void 0?void 0:I.scrollToTop)||function(){}}});var be=kn([Y,qe,ze],!ne()),ye=rn(h,c.length),mt=ye.moveFocusDown,gt=ye.moveFocusUp,wt=ye.moveFocus,He=xn({onRowClick:W,onRowContextMenu:U}),Ee=He.onRowClickHandler,Oe=He.onRowContextMenuHandler,se=F?s.filter(function(I){return I.id&&F.indexOf(I.id)!==-1}):s,me=on({items:c,trackBy:v,selectedItems:k,selectionType:h,isItemDisabled:R,onSelectionChange:T,ariaLabels:f}),Ce=me.isItemSelected,Ae=me.selectAllProps,_t=me.getItemSelectionProps,bt=me.updateShiftToggle;w&&(Ae.disabled=!0);var yt=Pe(),ie=yt?q:["embedded","full-page"].indexOf(q)>-1?"container":q,Ue=!!(i||l||a||d),Ve={containerWidth:z,selectionType:h,selectAllProps:Ae,columnDefinitions:se,variant:ie,wrapLines:V,resizableColumns:O,sortingColumn:y,sortingDisabled:H,sortingDescending:N,onSortingChange:C,onFocusMove:wt,onResizeFinish:function(I){var M=s.map(function(Q,J){return I[Z(Q,J)]||Q.width||he}),le=M.some(function(Q,J){return s[J].width!==Q});le&&K(X,{widths:M})}},Ct=We&&z&&We>z,St=Ct?{role:"region",tabIndex:0,"aria-label":f==null?void 0:f.tableLabel}:{},xt=rt();return u(bn,{tableRef:pe,visibleColumnDefinitions:se,resizableColumns:O,hasSelection:!!h,children:A(Ot,{...D({},b,{__internalRootRef:g,className:L(b.className,p.root),header:A(Fe,{children:[Ue&&u("div",{className:L(p["header-controls"],p["variant-".concat(ie)]),children:u(Xt,{header:i,filter:l,pagination:a,preferences:d})}),B&&u(Ln,{ref:ae,variant:ie,theadProps:Ve,wrapperRef:Y,theadRef:je,secondaryWrapperRef:ze,tableRef:pe,onScroll:be})]}),disableHeaderPaddings:!0,disableContentPaddings:!0,variant:Jt(ie),__disableFooterPaddings:!0,__disableFooterDivider:!0,footer:r&&A("div",{className:L(p["footer-wrapper"],p["variant-".concat(ie)]),children:[u("hr",{className:p.divider}),u("div",{className:p.footer,children:r})]}),__stickyHeader:B,__stickyOffset:x},Le.root),children:[A("div",{...D({ref:vt,className:L(p.wrapper,p["variant-".concat(ie)],(n={},n[p["has-footer"]]=!!r,n[p["has-header"]]=Ue,n)),onScroll:be},St,xt),children:[A("table",{ref:pt,className:L(p.table,O&&p["table-layout-fixed"]),role:"table","aria-label":f==null?void 0:f.tableLabel,children:[u(lt,{...D({ref:je,hidden:B,onCellFocus:function(I){var M;return(M=ae.current)===null||M===void 0?void 0:M.setFocusedColumn(I)},onCellBlur:function(){var I;return(I=ae.current)===null||I===void 0?void 0:I.setFocusedColumn(null)}},Ve)}),u("tbody",{children:w||c.length===0?u("tr",{children:u("td",{colSpan:h?se.length+1:se.length,className:p["cell-merged"],children:u("div",{className:p["cell-merged-content"],style:{width:ne()&&z&&Math.floor(z)||void 0},children:w?u(At,{type:"loading",className:p.loading,wrapText:!0,children:_}):u("div",{className:p.empty,children:o})})})}):c.map(function(I,M){var le=M===0,Q=M===c.length-1,J=!!h&&Ce(I),$e=!!h&&!le&&Ce(c[M-1]),Ke=!!h&&!Q&&Ce(c[M+1]);return A("tr",{...D({key:Zt(v,I,M),className:L(p.row,J&&p["row-selected"]),onFocus:function(ee){var ce,kt=ee.currentTarget;return(ce=ae.current)===null||ce===void 0?void 0:ce.scrollToRow(kt)}},Le.item,{onClick:Ee&&Ee.bind(null,M,I),onContextMenu:Oe&&Oe.bind(null,M,I)}),children:[h!==void 0&&u(ct,{className:p["selection-control"],isFirstRow:le,isLastRow:Q,isSelected:J,isNextSelected:Ke,isPrevSelected:$e,wrapLines:!1,children:u(ot,{...D({onFocusDown:mt,onFocusUp:gt,onShiftToggle:bt},_t(I))})}),se.map(function(ee,ce){return u(Sn,{style:O?{}:{width:ee.width,minWidth:ee.minWidth,maxWidth:ee.maxWidth},column:ee,item:I,wrapLines:V,isFirstRow:le,isLastRow:Q,isSelected:J,isNextSelected:Ke,isPrevSelected:$e},Z(ee,ce))})]})})})]}),O&&u(mn,{})]}),u(Nn,{ref:qe,wrapperRef:Y,tableRef:pe,onScroll:be})]})})});const Mn=Pn;var ft=G.forwardRef(function(e,t){var n=e.items,i=n===void 0?[]:n,r=e.selectedItems,o=r===void 0?[]:r,l=e.variant,a=l===void 0?"container":l,d=re(e,["items","selectedItems","variant"]),c=et("Table");return u(Mn,{...D({items:i,selectedItems:o,variant:a},d,c,{ref:t})})});tt(ft,"Table");const On=ft;const j={dialog:"awsui_dialog_1d2i7_1q6b4_105","modal-slide-up":"awsui_modal-slide-up_1d2i7_1q6b4_1","awsui-motion-fade-in-0":"awsui_awsui-motion-fade-in-0_1d2i7_1q6b4_1",refresh:"awsui_refresh_1d2i7_1q6b4_128","awsui-motion-scale-popup":"awsui_awsui-motion-scale-popup_1d2i7_1q6b4_1",root:"awsui_root_1d2i7_1q6b4_161","awsui-motion-fade-in":"awsui_awsui-motion-fade-in_1d2i7_1q6b4_1",hidden:"awsui_hidden_1d2i7_1q6b4_224","focus-lock":"awsui_focus-lock_1d2i7_1q6b4_228",small:"awsui_small_1d2i7_1q6b4_246",medium:"awsui_medium_1d2i7_1q6b4_249",large:"awsui_large_1d2i7_1q6b4_252",max:"awsui_max_1d2i7_1q6b4_255","breakpoint-xs":"awsui_breakpoint-xs_1d2i7_1q6b4_255",container:"awsui_container_1d2i7_1q6b4_260",content:"awsui_content_1d2i7_1q6b4_284","no-paddings":"awsui_no-paddings_1d2i7_1q6b4_287",header:"awsui_header_1d2i7_1q6b4_291","header--text":"awsui_header--text_1d2i7_1q6b4_298",footer:"awsui_footer_1d2i7_1q6b4_302","dismiss-control":"awsui_dismiss-control_1d2i7_1q6b4_312","modal-open":"awsui_modal-open_1d2i7_1q6b4_316"};var ge=void 0;function Wn(){zn(),document.body.classList.add(j["modal-open"])}function Je(){document.body.classList.remove(j["modal-open"]),qn()}function zn(){if(Hn()){ge=document.body.style.paddingRight;var e=jn(),t=ut().width,n=e+t;document.body.style.paddingRight=n+"px"}}function jn(){return parseInt(window.getComputedStyle(document.body).paddingRight,10)}function qn(){ge?document.body.style.setProperty("padding-right",ge):document.body.style.removeProperty("padding-right"),ge=void 0}function Hn(){return document.body.clientWidth<window.innerWidth}function An(e){var t,n,i=e.size,r=e.visible,o=e.closeAriaLabel,l=e.header,a=e.children,d=e.footer,c=e.disableContentPaddings,s=e.onDismiss,v=e.modalRoot,w=e.__internalRootRef,_=w===void 0?null:w,h=re(e,["size","visible","closeAriaLabel","header","children","footer","disableContentPaddings","onDismiss","modalRoot","__internalRootRef"]),k=Be(),R="".concat(h.id||k,"-header"),f=m.exports.useRef(null),T=m.exports.useRef(null),C=m.exports.useRef(null),y=nt(["xs"]),N=y[0],H=y[1],F=m.exports.useRef(null),B=we(H,F,_),x=Pe(),W=Ne(h);m.exports.useEffect(function(){return function(){Je()}},[]),m.exports.useEffect(function(){r?Wn():Je()},[r]),m.exports.useEffect(function(){r&&F.current&&(F.current.scrollTop=0)},[F,r]);var U=function(){C.current=document.activeElement},V=function(){var b;(b=C.current)===null||b===void 0||b.focus(),C.current=null},O=function(b){return K(s,{reason:b})},X=function(b){T.current=b.target},q=function(b){var P=F.current,z=T.current;b.target===P&&z===P&&O("overlay")},g=function(){return O("closeButton")},S=function(b){b.keyCode===fe.escape&&O("keyboard")};return u(Ut,{container:v,children:u("div",{...D({},W,{className:L(j.root,(t={},t[j.hidden]=!r,t),W.className,x&&j.refresh),role:"dialog","aria-modal":!0,"aria-labelledby":R,onMouseDown:X,onClick:q,ref:B}),children:u(Vt,{disabled:!r,autoFocus:!0,className:j["focus-lock"],ref:f,onActivation:U,onDeactivation:V,children:u("div",{className:L(j.dialog,j[i],j["breakpoint-".concat(N)],x&&j.refresh),onKeyDown:S,tabIndex:-1,children:A("div",{className:j.container,children:[u("div",{className:j.header,children:u($t,{variant:"h2",__disableActionsWrapping:!0,actions:u(Kt,{ariaLabel:o,className:j["dismiss-control"],variant:"modal-dismiss",iconName:"close",formAction:"none",onClick:g}),children:u("span",{id:R,className:j["header--text"],children:l})})}),u("div",{className:L(j.content,(n={},n[j["no-paddings"]]=c,n)),children:a}),d&&u("div",{className:j.footer,children:d})]})})})})})}export{Gt as B,An as I,On as T,Qt as a};
