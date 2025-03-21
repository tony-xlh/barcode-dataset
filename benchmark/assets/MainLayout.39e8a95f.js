import{c as $,h as N,a as U,b as K}from"./dom.39abbeda.js";import{c,h as f,i as W,e as z,r as _,w,o as j,l as M,g as Q,p as A,a as D,d as G,f as J,j as X,k as Y,m as H,q as Z,_ as ee,s as te,u as oe,t as ne,v as ae,x as le,y as T,z as P,A as L,B as ie,C as re}from"./index.c9d13e01.js";import{Q as O}from"./QResizeObserver.54cae302.js";import{g as se,a as ue,b as ce,c as F}from"./scroll.7c67c206.js";var de=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const l=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:l.value,role:"toolbar"},N(v.default))}}),fe=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:l}){const{proxy:{$q:n}}=Q(),o=W(M,z);if(o===z)return console.error("QHeader needs to be child of QLayout"),z;const r=_(parseInt(e.heightHint,10)),u=_(!0),p=c(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),g=c(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return u.value===!0?r.value:0;const t=r.value-o.scroll.value.position;return t>0?t:0}),s=c(()=>e.modelValue!==!0||p.value===!0&&u.value!==!0),S=c(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),y=c(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=c(()=>{const t=o.rows.value.top,h={};return t[0]==="l"&&o.left.space===!0&&(h[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),t[2]==="r"&&o.right.space===!0&&(h[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),h});function i(t,h){o.update("header",t,h)}function m(t,h){t.value!==h&&(t.value=h)}function R({height:t}){m(r,t),i("size",t)}function V(t){S.value===!0&&m(u,!0),l("focusin",t)}w(()=>e.modelValue,t=>{i("space",t),m(u,!0),o.animate()}),w(g,t=>{i("offset",t)}),w(()=>e.reveal,t=>{t===!1&&m(u,e.modelValue)}),w(u,t=>{o.animate(),l("reveal",t)}),w(o.scroll,t=>{e.reveal===!0&&m(u,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const q={};return o.instances.header=q,e.modelValue===!0&&i("size",r.value),i("space",e.modelValue),i("offset",g.value),j(()=>{o.instances.header===q&&(o.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const t=U(v.default,[]);return e.elevated===!0&&t.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(f(O,{debounce:0,onResize:R})),f("header",{class:y.value,style:b.value,onFocusin:V},t)}}}),ve=$({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:l}}=Q(),n=W(M,z);if(n===z)return console.error("QPageContainer needs to be child of QLayout"),z;A(D,!0);const o=c(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>f("div",{class:"q-page-container",style:o.value},N(v.default))}});const{passive:I}=X,he=["both","horizontal","vertical"];var ge=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>he.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,r;w(()=>e.scrollTarget,()=>{g(),p()});function u(){n!==null&&n();const y=Math.max(0,ue(o)),b=ce(o),i={top:y-l.position.top,left:b-l.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const m=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";l.position={top:y,left:b},l.directionChanged=l.direction!==m,l.delta=i,l.directionChanged===!0&&(l.direction=m,l.inflectionPoint=l.position),v("scroll",{...l})}function p(){o=se(r,e.scrollTarget),o.addEventListener("scroll",s,I),s(!0)}function g(){o!==void 0&&(o.removeEventListener("scroll",s,I),o=void 0)}function s(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(n===null){const[b,i]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];n=()=>{i(b),n=null}}}const{proxy:S}=Q();return w(()=>S.$q.lang.rtl,u),G(()=>{r=S.$el.parentNode,p()}),j(()=>{n!==null&&n(),g()}),Object.assign(S,{trigger:s,getPosition:()=>l}),J}}),me=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:l}){const{proxy:{$q:n}}=Q(),o=_(null),r=_(n.screen.height),u=_(e.container===!0?0:n.screen.width),p=_({position:0,direction:"down",inflectionPoint:0}),g=_(0),s=_(Y.value===!0?0:F()),S=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=c(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),b=c(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),i=c(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function m(a){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};p.value=d,e.onScroll!==void 0&&l("scroll",d)}}function R(a){const{height:d,width:x}=a;let C=!1;r.value!==d&&(C=!0,r.value=d,e.onScrollHeight!==void 0&&l("scrollHeight",d),q()),u.value!==x&&(C=!0,u.value=x),C===!0&&e.onResize!==void 0&&l("resize",a)}function V({height:a}){g.value!==a&&(g.value=a,q())}function q(){if(e.container===!0){const a=r.value>g.value?F():0;s.value!==a&&(s.value=a)}}let t=null;const h={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:o,height:r,containerHeight:g,scrollbarWidth:s,totalWidth:c(()=>u.value+s.value),rows:c(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:p,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,d,x){h[a][d]=x}};if(A(M,h),F()>0){let x=function(){a=null,d.classList.remove("hide-scrollbar")},C=function(){if(a===null){if(d.scrollHeight>n.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},B=function(E){a!==null&&E==="remove"&&(clearTimeout(a),x()),window[`${E}EventListener`]("resize",C)},a=null;const d=document.body;w(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),Z(()=>{B("remove")})}return()=>{const a=K(v.default,[f(ge,{onScroll:m}),f(O,{onResize:R})]),d=f("div",{class:S.value,style:y.value,ref:e.container===!0?void 0:o,tabindex:-1},a);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:o},[f(O,{onResize:V}),f("div",{class:"absolute-full",style:b.value},[f("div",{class:"scroll",style:i.value},[d])])]):d}}});const k=e=>(ie("data-v-67fe9417"),e=e(),re(),e),pe=k(()=>L("a",{class:"ds-logo",href:"https://www.dynamsoft.com"},null,-1)),ye=k(()=>L("div",{class:"toolbar-span"},null,-1)),be=k(()=>L("a",{href:"https://github.com/tony-xlh/barcode-reading-benchmark",target:"_blank"},"GitHub",-1)),_e=te({__name:"MainLayout",setup(e){const v=oe(),l=()=>{console.log("goHome"),v.push("/")};return(n,o)=>{const r=ne("router-view");return ae(),le(me,{view:"lHh Lpr lFf"},{default:T(()=>[P(fe,{elevated:""},{default:T(()=>[P(de,{class:"bg-black text-white"},{default:T(()=>[pe,ye,L("div",{class:"right"},[L("a",{href:"javascript:void(0);",onClick:l},"Home"),be])]),_:1})]),_:1}),P(ve,null,{default:T(()=>[P(r)]),_:1})]),_:1})}}});var qe=ee(_e,[["__scopeId","data-v-67fe9417"]]);export{qe as default};
