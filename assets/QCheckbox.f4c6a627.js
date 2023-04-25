import{p as j,b as z,h as F,o as Q,c as R,f as D}from"./QBtn.a31f1403.js";import{d as M,c as N,u as H,n as K}from"./utils.2154a026.js";import{r as _,c as a,h as n,g as L,aa as d,I as V}from"./index.db0cda80.js";function G(l,f){const e=_(null),c=a(()=>l.disable===!0?null:n("span",{ref:e,class:"no-outline",tabindex:-1}));function i(u){const r=f.value;u!==void 0&&u.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(u===void 0||r!==null&&r.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:i}}var J={xs:30,sm:35,md:40,lg:50,xl:60};const U={...N,...Q,...H,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(l,f){const{props:e,slots:c,emit:i,proxy:u}=L(),{$q:r}=u,I=M(e,r),h=_(null),{refocusTargetEl:k,refocusTarget:q}=G(e,h),C=j(e,J),v=a(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=a(()=>{const t=d(e.val);return v.value===!0?e.modelValue.findIndex(s=>d(s)===t):-1}),o=a(()=>v.value===!0?m.value>-1:d(e.modelValue)===d(e.trueValue)),b=a(()=>v.value===!0?m.value===-1:d(e.modelValue)===d(e.falseValue)),x=a(()=>o.value===!1&&b.value===!1),y=a(()=>e.disable===!0?-1:e.tabindex||0),S=a(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(I.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=a(()=>{const t=o.value===!0?"truthy":b.value===!0?"falsy":"indet",s=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?o.value===!0:b.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${t}${s}`}),w=a(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":o.value,"^checked":o.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),t}),O=K(w),B=a(()=>{const t={tabindex:y.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":x.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function g(t){t!==void 0&&(V(t),q(t)),e.disable!==!0&&i("update:modelValue",T(),t)}function T(){if(v.value===!0){if(o.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(b.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function E(t){(t.keyCode===13||t.keyCode===32)&&g(t)}const P=f(o,x);return Object.assign(u,{toggle:g}),()=>{const t=P();e.disable!==!0&&O(t,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const s=[n("div",{class:$.value,style:C.value,"aria-hidden":"true"},t)];k.value!==null&&s.push(k.value);const p=e.label!==void 0?z(c.default,[e.label]):F(c.default);return p!==void 0&&s.push(n("div",{class:`q-${l}__label q-anchor--skip`},p)),n("div",{ref:h,class:S.value,...B.value,onClick:g,onKeydown:A,onKeyup:E},s)}}const Y=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var le=R({name:"QCheckbox",props:U,emits:W,setup(l){function f(e,c){const i=a(()=>(e.value===!0?l.checkedIcon:c.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>i.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(D,{class:"q-checkbox__icon",name:i.value})])]:[Y]}return X("checkbox",f)}});export{le as Q};
