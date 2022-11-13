import{_ as K,g as E,a as ne,x as se,o as _e,j as a,b as _,f as v,as as ve,e as f,Z as me,aq as ae,l as U,h as he,u as z,c as M,i as be,R as Y,a6 as J,r as k,a2 as we,at as fe,q as ye,aa as ge,V as xe,au as Ce,a3 as re,H as Z,z as $,F as Re,A as ke,C as Ne,N as Fe,D as je,B as te,E as Be}from"./index.a792d038.js";import{I as Ie,C as Q,a as Te,b as Le}from"./internal.8ae0d69e.js";import{I as Se,f as Pe,c as qe}from"./data.62f4a2ea.js";const c={alert:"awsui_alert_mx3cw_wdted_93","awsui-motion-fade-in":"awsui_awsui-motion-fade-in_mx3cw_wdted_1",root:"awsui_root_mx3cw_wdted_119",hidden:"awsui_hidden_mx3cw_wdted_133",body:"awsui_body_mx3cw_wdted_156",header:"awsui_header_mx3cw_wdted_162",action:"awsui_action_mx3cw_wdted_166","action-button":"awsui_action-button_mx3cw_wdted_171",text:"awsui_text_mx3cw_wdted_175",icon:"awsui_icon_mx3cw_wdted_179",message:"awsui_message_mx3cw_wdted_182","breakpoint-default":"awsui_breakpoint-default_mx3cw_wdted_190",content:"awsui_content_mx3cw_wdted_204",dismiss:"awsui_dismiss_mx3cw_wdted_208","dismiss-button":"awsui_dismiss-button_mx3cw_wdted_214","type-error":"awsui_type-error_mx3cw_wdted_222","type-warning":"awsui_type-warning_mx3cw_wdted_230","type-success":"awsui_type-success_mx3cw_wdted_238","type-info":"awsui_type-info_mx3cw_wdted_246"};var Ae={error:"status-negative",warning:"status-warning",success:"status-positive",info:"status-info"};function Oe(e){var r,t=e.type,l=e.visible,n=l===void 0?!0:l,d=e.dismissible,u=e.dismissAriaLabel,s=e.children,o=e.header,y=e.buttonText,m=e.action,g=e.onDismiss,x=e.onButtonClick,C=e.__internalRootRef,R=C===void 0?null:C,N=K(e,["type","visible","dismissible","dismissAriaLabel","children","header","buttonText","action","onDismiss","onButtonClick","__internalRootRef"]),T=E(N),B=ne(["xs"]),q=B[0],A=B[1],O=se(A,R),i=_e(),h=i?"normal":o&&s?"big":"normal",b=m||a(ae,{className:c["action-button"],onClick:function(){return U(x)},formAction:"none",children:y}),F=Boolean(m||y);return a("div",{..._({},T,{"aria-hidden":!n,className:v(c.root,(r={},r[c.hidden]=!n,r),T.className,c["breakpoint-".concat(q)]),ref:O}),children:a(ve,{contextName:"alert",children:f("div",{className:v(c.alert,c["type-".concat(t)]),children:[a("div",{className:v(c.icon,c.text),children:a(me,{name:Ae[t],size:h})}),f("div",{className:c.body,children:[f("div",{className:v(c.message,c.text),children:[o&&a("div",{className:c.header,children:o}),a("div",{className:c.content,children:s})]}),F&&a("div",{className:c.action,children:b})]}),d&&a("div",{className:c.dismiss,children:a(ae,{className:c["dismiss-button"],variant:"icon",iconName:"close",formAction:"none",ariaLabel:u,onClick:function(){return U(g)}})})]})})})}const S={root:"awsui_root_1i0s3_ntsvl_93",header:"awsui_header_1i0s3_ntsvl_104",content:"awsui_content_1i0s3_ntsvl_108",error:"awsui_error_1i0s3_ntsvl_112",footer:"awsui_footer_1i0s3_ntsvl_116","actions-section":"awsui_actions-section_1i0s3_ntsvl_120","secondary-actions":"awsui_secondary-actions_1i0s3_ntsvl_129",actions:"awsui_actions_1i0s3_ntsvl_120"};function De(e){var r=e.children,t=e.header,l=e.errorText,n=e.actions,d=e.secondaryActions,u=e.__internalRootRef,s=K(e,["children","header","errorText","actions","secondaryActions","__internalRootRef"]),o=E(s);return f("div",{..._({},o,{ref:u,className:v(S.root,o.className)}),children:[t&&a("div",{className:S.header,children:t}),r&&a("div",{className:S.content,children:r}),a("div",{"aria-live":"assertive",children:l&&a(he,{margin:{top:"l"},children:a(Oe,{type:"error",children:a("div",{className:S.error,children:l})})})}),(n||d)&&a("div",{className:S.footer,children:f("div",{className:S["actions-section"],children:[n&&a("div",{className:S.actions,children:n}),d&&a("div",{className:S["secondary-actions"],children:d})]})})]})}function oe(e){var r=z("Form");return a(De,{..._({},e,r)})}M(oe,"Form");function P(e){var r=e.stretch,t=r===void 0?!1:r,l=K(e,["stretch"]),n=z("FormField");return a(be,{..._({stretch:t},l,{__hideLabel:!1},n)})}M(P,"FormField");var le=Y.forwardRef(function(e,r){var t=e.value,l=e.type,n=l===void 0?"text":l,d=e.step,u=e.inputMode,s=e.autoComplete,o=s===void 0?!0:s,y=e.disabled,m=e.readOnly,g=e.disableBrowserAutocorrect,x=e.onKeyDown,C=e.onKeyUp,R=e.onChange,N=e.onBlur,T=e.onFocus,B=e.ariaRequired,q=e.name,A=e.placeholder,O=e.autoFocus,i=e.ariaLabel,h=K(e,["value","type","step","inputMode","autoComplete","disabled","readOnly","disableBrowserAutocorrect","onKeyDown","onKeyUp","onChange","onBlur","onFocus","ariaRequired","name","placeholder","autoFocus","ariaLabel"]),b=z("Input"),F=E(h),j=J(h),D=j.ariaLabelledby,L=j.ariaDescribedby,G=j.controlId,H=j.invalid,I=k.exports.useRef(null);return k.exports.useImperativeHandle(r,function(){return{focus:function(){for(var p,ee=[],V=0;V<arguments.length;V++)ee[V]=arguments[V];(p=I.current)===null||p===void 0||p.focus.apply(p,ee)},select:function(){var p;(p=I.current)===null||p===void 0||p.select()}}},[I]),a(we,{..._({ref:I},_(_(_({},F),b),{autoComplete:o,ariaLabel:i,ariaDescribedby:L,ariaLabelledby:D,ariaRequired:B,autoFocus:O,controlId:G,disabled:y,disableBrowserAutocorrect:g,invalid:H,name:q,onKeyDown:x,onKeyUp:C,onChange:R,onBlur:N,onFocus:T,placeholder:A,readOnly:m,type:n,step:d,inputMode:u,value:t}),{className:v(fe.root,F.className)})})});M(le,"Input");const ie=le;var de=Y.forwardRef(function(e,r){var t=e.options,l=t===void 0?[]:t,n=e.filteringType,d=n===void 0?"none":n,u=e.statusType,s=u===void 0?"finished":u,o=e.selectedOptions,y=o===void 0?[]:o,m=e.keepOpen,g=m===void 0?!0:m,x=e.hideTokens,C=x===void 0?!1:x,R=K(e,["options","filteringType","statusType","selectedOptions","keepOpen","hideTokens"]),N=z("Multiselect");return a(Ie,{..._({options:l,filteringType:d,statusType:s,selectedOptions:y,keepOpen:g,hideTokens:C},R,N,{ref:r})})});M(de,"Multiselect");const Ke=de;function ce(e){var r=z("RadioGroup");return a(Se,{..._({},e,r)})}M(ce,"RadioGroup");const w={"column-layout":"awsui_column-layout_vj6p7_1ws36_93",grid:"awsui_grid_vj6p7_1ws36_104","grid-no-gutters":"awsui_grid-no-gutters_vj6p7_1ws36_109","grid-variant-text-grid":"awsui_grid-variant-text-grid_vj6p7_1ws36_112","grid-breakpoint-default":"awsui_grid-breakpoint-default_vj6p7_1ws36_119","grid-columns-1":"awsui_grid-columns-1_vj6p7_1ws36_122","grid-breakpoint-xxs":"awsui_grid-breakpoint-xxs_vj6p7_1ws36_122","grid-breakpoint-xs":"awsui_grid-breakpoint-xs_vj6p7_1ws36_125","grid-columns-2":"awsui_grid-columns-2_vj6p7_1ws36_128","grid-columns-3":"awsui_grid-columns-3_vj6p7_1ws36_134","grid-columns-4":"awsui_grid-columns-4_vj6p7_1ws36_140","grid-vertical-borders":"awsui_grid-vertical-borders_vj6p7_1ws36_153","grid-horizontal-borders":"awsui_grid-horizontal-borders_vj6p7_1ws36_186",root:"awsui_root_vj6p7_1ws36_240","tile-container":"awsui_tile-container_vj6p7_1ws36_255","has-metadata":"awsui_has-metadata_vj6p7_1ws36_264",selected:"awsui_selected_vj6p7_1ws36_267",disabled:"awsui_disabled_vj6p7_1ws36_271",columns:"awsui_columns_vj6p7_1ws36_286","column-1":"awsui_column-1_vj6p7_1ws36_291","breakpoint-xs":"awsui_breakpoint-xs_vj6p7_1ws36_298","breakpoint-xxs":"awsui_breakpoint-xxs_vj6p7_1ws36_303","column-2":"awsui_column-2_vj6p7_1ws36_308","column-3":"awsui_column-3_vj6p7_1ws36_325","column-4":"awsui_column-4_vj6p7_1ws36_342",control:"awsui_control_vj6p7_1ws36_360","no-image":"awsui_no-image_vj6p7_1ws36_364",image:"awsui_image_vj6p7_1ws36_368"};var ze=["default","xxs","xs"];function Me(e){var r=e.value,t=e.items,l=e.ariaLabel,n=e.ariaRequired,d=e.columns,u=e.onChange,s=e.__internalRootRef,o=s===void 0?null:s,y=K(e,["value","items","ariaLabel","ariaRequired","columns","onChange","__internalRootRef"]),m=function(){if(d)return d;var i=t?t.length:0,h={0:1,1:1,2:2,4:2,8:2};return h[i]||3},g=J(y),x=g.ariaDescribedby,C=g.ariaLabelledby,R=E(y),N=ye("awsui-tiles-"),T=m(),B=ne(ze),q=B[0],A=B[1],O=se(A,o);return a("div",{..._({role:"radiogroup","aria-label":l,"aria-labelledby":C,"aria-describedby":x,"aria-required":n},R,{className:v(R.className,w.root),ref:O}),children:a("div",{className:v(w.columns,w["column-".concat(T)]),children:t&&t.map(function(i){var h,b,F,j,D,L=i.controlId||"".concat(N,"-value-").concat(i.value);return f("label",{className:v(w["tile-container"],(h={},h[w["has-metadata"]]=i.description||i.image,h),(b={},b[w.selected]=i.value===r,b),(F={},F[w.disabled]=!!i.disabled,F),w["breakpoint-".concat(q)]),"data-value":i.value,htmlFor:L,id:"".concat(L,"-wrapper"),children:[a("div",{className:v(w.control,(j={},j[w["no-image"]]=!i.image,j)),children:a(ge,{checked:i.value===r,name:N,withoutLabel:!0,value:i.value,label:i.label,description:i.description,disabled:i.disabled,onChange:u,controlId:L})}),i.image&&a("div",{className:v(w.image,(D={},D[w.disabled]=!!i.disabled,D)),children:i.image})]},i.value)})})})}const W={root:"awsui_root_qk1j1_eoztp_93",textarea:"awsui_textarea_qk1j1_eoztp_97","textarea-readonly":"awsui_textarea-readonly_qk1j1_eoztp_121","textarea-invalid":"awsui_textarea-invalid_qk1j1_eoztp_157"};var ue=Y.forwardRef(function(e,r){var t,l=e.value,n=e.autoComplete,d=n===void 0?!0:n,u=e.disabled,s=e.readOnly,o=e.disableBrowserAutocorrect,y=e.disableBrowserSpellcheck,m=e.onKeyDown,g=e.onKeyUp,x=e.onChange,C=e.onBlur,R=e.onFocus,N=e.ariaRequired,T=e.name,B=e.rows,q=e.placeholder,A=e.autoFocus,O=e.ariaLabel,i=K(e,["value","autoComplete","disabled","readOnly","disableBrowserAutocorrect","disableBrowserSpellcheck","onKeyDown","onKeyUp","onChange","onBlur","onFocus","ariaRequired","name","rows","placeholder","autoFocus","ariaLabel"]),h=z("Textarea").__internalRootRef,b=J(i),F=b.ariaLabelledby,j=b.ariaDescribedby,D=b.controlId,L=b.invalid,G=E(i),H=k.exports.useRef(null);xe(r,H);var I={"aria-label":O,"aria-labelledby":F,"aria-describedby":j,"aria-required":N?"true":void 0,"aria-invalid":L?"true":void 0,name:T,placeholder:q,autoFocus:A,className:v(W.textarea,(t={},t[W["textarea-readonly"]]=s,t[W["textarea-invalid"]]=L,t)),autoComplete:Ce(d),disabled:u,readOnly:s?!0:void 0,rows:B||3,onKeyDown:m&&function(p){return re(m,p)},onKeyUp:g&&function(p){return re(g,p)},value:l||"",onChange:x&&function(p){return U(x,{value:p.target.value})},onBlur:C&&function(){return U(C)},onFocus:R&&function(){return U(R)}};return o&&(I.autoCorrect="off",I.autoCapitalize="off"),y&&(I.spellCheck="false"),a("span",{..._({},G,{className:v(W.root,G.className),ref:h}),children:a("textarea",{..._({ref:H,id:D},I,{spellCheck:!1})})})});M(ue,"Textarea");const Ue=ue;function pe(e){var r=z("Tiles");return a(Me,{..._({},e,r)})}M(pe,"Tiles");const X=k.exports.createContext({isFormSubmitted:!1}),$e=[...Pe,...qe].map(e=>({value:e,label:e}));function Ee(){const[e,r]=k.exports.useState("yes"),[t,l]=k.exports.useState([]);return a(X.Consumer,{children:({isFormSubmitted:n})=>a(Q,{header:a(Z,{variant:"h2",children:"Ingredients"}),children:f($,{direction:"vertical",size:"l",children:[a(P,{label:"List of ingredients",description:"",errorText:n&&t.length===0&&"List of ingredients is required.",children:a(Ke,{placeholder:"Select all ingredients",selectedOptions:t,onChange:({detail:d})=>l(d.selectedOptions),options:$e})}),a(P,{label:"Organic",children:a(ce,{value:e,onChange:({detail:d})=>r(d.value),items:[{value:"no",label:"No"},{value:"yes",label:"Yes"}]})})]})})})}function Ge(){const[e,r]=k.exports.useState(""),[t,l]=k.exports.useState(""),[n,d]=k.exports.useState(""),u=s=>!(s!=null&&s.length);return a(X.Consumer,{children:({isFormSubmitted:s})=>a(Q,{header:a(Z,{variant:"h2",children:"Marketing"}),children:a(P,{label:"Prices",description:"Define the prices for wholesale and retail",children:f($,{direction:"vertical",size:"l",children:[f(Te,{columns:2,children:[a(P,{label:"Wholesale Price",stretch:!0,errorText:s&&u(e)&&"Wholesale Price is required.",children:a(ie,{value:e,onChange:({detail:o})=>r(o.value),type:"number"})}),a(P,{label:"Retail Price",stretch:!0,errorText:s&&u(t)&&"Retail Price is required.",children:a(ie,{value:t,onChange:({detail:o})=>l(o.value),type:"number"})})]}),a(P,{label:f(Re,{children:["Aditional Notes",a("i",{children:" - optional"})]}),stretch:!0,children:a(Ue,{onChange:({detail:o})=>d(o.value),value:n,placeholder:"This is a placeholder"})})]})})})})}function He(){const[e,r]=k.exports.useState("bar");return a(Q,{header:a(Z,{variant:"h2",children:"Chocolate Shape"}),children:a(P,{label:"Shape",stretch:!0,children:a(pe,{items:[{value:"bar",label:"Bar",description:"Traditional bar shaped chocolate"},{value:"praline",label:"Pralines",description:"Sophisticated and premium-looking chocolate shape"}],value:e,onChange:t=>r(t.detail.value)})})})}function Ve(){const[e,r]=k.exports.useState(!1);return a(ke,{contentType:"form",breadcrumbs:a(Ne,{active:{text:"Create Flavor",href:"create-flavor.html"}}),navigation:a(Fe,{}),tools:a(je,{header:a("h2",{children:"Help Panel"})}),children:a(Le,{header:a(Z,{variant:"h1",description:"Create a new flavor by specifying ingredients, quality, and price. On creation a flavor will be tested by the product and marketing team.",children:"Create Flavor"}),children:a($,{size:"m",children:a(X.Provider,{value:{isFormSubmitted:e},children:a("form",{onSubmit:t=>{r(!0),t.preventDefault()},children:a(oe,{actions:f($,{direction:"horizontal",size:"xs",children:[a(te,{href:"flavors.html",variant:"link",children:"Cancel"}),a(te,{formAction:"submit",variant:"primary",children:"Create flavor"})]}),children:f($,{size:"l",children:[a(He,{}),a(Ee,{}),a(Ge,{})]})})})})})})})}const We=Be.createRoot(document.getElementById("root"));We.render(a(Y.StrictMode,{children:a(Ve,{})}));
