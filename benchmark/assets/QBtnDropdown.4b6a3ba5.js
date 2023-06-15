import{c as E,h as F,Q as re}from"./QIcon.f5f0471c.js";import{e as ce,j as U,Q as M,k as de}from"./QBtn.b1ca35f6.js";import{c as i,h as d,r as y,w as C,H as fe,T as ve,a as ge,g as J,J as he,o as me,G as be}from"./index.7a0cf8c5.js";import{u as we,v as $,a as Be,b as Se,c as qe,r as L,s as ye,p as G,e as Ce,f as ke}from"./position-engine.aa14dc1a.js";import{u as Pe,b as N,c as xe,d as Oe,e as Te,f as Ae,g as De,h as He,l as Me,m as Ee,n as z,o as Fe,a as Qe,q as Re}from"./ClosePopup.f5dbd6f3.js";import{u as _e,a as je}from"./use-dark.ecbc65be.js";import{g as Ve}from"./scroll.fe70ef14.js";var Ie=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:s}){const o=i(()=>{const u=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(a=>e[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${u.length>0?" "+u:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>d("div",{class:o.value},F(s.default))}}),Ke=E({name:"QMenu",inheritAttrs:!1,props:{...we,...Pe,..._e,...N,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:$},self:{type:String,validator:$},offset:{type:Array,validator:Be},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...xe,"click","escapeKey"],setup(e,{slots:s,emit:o,attrs:u}){let a=null,l,f,g;const B=J(),{proxy:h}=B,{$q:r}=h,c=y(null),v=y(!1),k=i(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),P=je(e,r),{registerTick:x,removeTick:O}=Oe(),{registerTimeout:S}=Te(),{transitionProps:q,transitionStyle:b}=Ae(e),{localScrollTarget:n,changeScrollEvent:X,unconfigureScrollTarget:Y}=Se(e,K),{anchorEl:m,canShow:Z}=qe({showing:v}),{hide:Q}=De({showing:v,canShow:Z,handleShow:oe,handleHide:ae,hideOnRouteChange:k,processOnMount:!0}),{showPortal:R,hidePortal:_,renderPortal:p}=He(B,c,ue,"menu"),T={anchorEl:m,innerRef:c,onClickOutside(t){if(e.persistent!==!0&&v.value===!0)return Q(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&he(t),!0}},j=i(()=>G(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),ee=i(()=>e.cover===!0?j.value:G(e.self||"top start",r.lang.rtl)),te=i(()=>(e.square===!0?" q-menu--square":"")+(P.value===!0?" q-menu--dark q-dark":"")),ne=i(()=>e.autoClose===!0?{onClick:le}:{}),V=i(()=>v.value===!0&&e.persistent!==!0);C(V,t=>{t===!0?(Fe(D),Ce(T)):(z(D),L(T))});function A(){Qe(()=>{let t=c.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function oe(t){if(a=e.noRefocus===!1?document.activeElement:null,Me(W),R(),K(),l=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const H=fe(t);if(H.left!==void 0){const{top:se,left:ie}=m.value.getBoundingClientRect();l={left:H.left-ie,top:H.top-se}}}f===void 0&&(f=C(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,w)),e.noFocus!==!0&&document.activeElement.blur(),x(()=>{w(),e.noFocus!==!0&&A()}),S(()=>{r.platform.is.ios===!0&&(g=e.autoClose,c.value.click()),w(),R(!0),o("show",t)},e.transitionDuration)}function ae(t){O(),_(),I(!0),a!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),S(()=>{_(!0),o("hide",t)},e.transitionDuration)}function I(t){l=void 0,f!==void 0&&(f(),f=void 0),(t===!0||v.value===!0)&&(Ee(W),Y(),L(T),z(D)),t!==!0&&(a=null)}function K(){(m.value!==null||e.scrollTarget!==void 0)&&(n.value=Ve(m.value,e.scrollTarget),X(n.value,w))}function le(t){g!==!0?(Re(h,t),o("click",t)):g=!1}function W(t){V.value===!0&&e.noFocus!==!0&&ce(c.value,t.target)!==!0&&A()}function D(t){o("escapeKey"),Q(t)}function w(){const t=c.value;t===null||m.value===null||ye({el:t,offset:e.offset,anchorEl:m.value,anchorOrigin:j.value,selfOrigin:ee.value,absoluteOffset:l,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ue(){return d(ve,q.value,()=>v.value===!0?d("div",{role:"menu",...u,ref:c,tabindex:-1,class:["q-menu q-position-engine scroll"+te.value,u.class],style:[u.style,b.value],...ne.value},F(s.default)):null)}return ge(I),Object.assign(h,{focus:A,updatePosition:w}),p}});const We=Object.keys(U),$e=e=>We.reduce((s,o)=>{const u=e[o];return u!==void 0&&(s[o]=u),s},{});var Ye=E({name:"QBtnDropdown",props:{...U,...N,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:s,emit:o}){const{proxy:u}=J(),a=y(e.modelValue),l=y(null),f=ke(),g=i(()=>{const n={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":f,"aria-label":e.toggleAriaLabel||u.$q.lang.label[a.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),B=i(()=>"q-btn-dropdown__arrow"+(a.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),h=i(()=>de(e)),r=i(()=>$e(e));C(()=>e.modelValue,n=>{l.value!==null&&l.value[n?"show":"hide"]()}),C(()=>e.split,b);function c(n){a.value=!0,o("beforeShow",n)}function v(n){o("show",n),o("update:modelValue",!0)}function k(n){a.value=!1,o("beforeHide",n)}function P(n){o("hide",n),o("update:modelValue",!1)}function x(n){o("click",n)}function O(n){be(n),b(),o("click",n)}function S(n){l.value!==null&&l.value.toggle(n)}function q(n){l.value!==null&&l.value.show(n)}function b(n){l.value!==null&&l.value.hide(n)}return Object.assign(u,{show:q,hide:b,toggle:S}),me(()=>{e.modelValue===!0&&q()}),()=>{const n=[d(re,{class:B.value,name:e.dropdownIcon||u.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(d(Ke,{ref:l,id:f,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:c,onShow:v,onBeforeHide:k,onHide:P},s.default)),e.split===!1?d(M,{class:"q-btn-dropdown q-btn-dropdown--simple",...r.value,...g.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:x},{default:()=>F(s.label,[]).concat(n),loading:s.loading}):d(Ie,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...h.value,glossy:e.glossy,stretch:e.stretch},()=>[d(M,{class:"q-btn-dropdown--current",...r.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:O},{default:s.label,loading:s.loading}),d(M,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...g.value,...h.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{Ke as Q,Ye as a};