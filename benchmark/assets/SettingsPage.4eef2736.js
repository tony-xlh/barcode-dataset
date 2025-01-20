import{a as Bt,Q as At,c as pe,d as Xe,b as Ke}from"./QMenu.b1f1861f.js";import{j as Et,q as ct,c as He,y as It,l as Tt,Q as G}from"./QBtn.ff5381ee.js";import{$ as ue,f as Rt,an as Pt,H as he,ao as Oe,M as We,J as K,K as _e,I as De,L as dt,r as E,c,o as Ot,aa as Dt,ac as Le,h as d,g as Se,w as ze,n as je,O as Lt,a9 as Ft,_ as Nt,s as Ut,u as Qt,d as zt,v as H,P as Y,z as q,y as L,R as se,C as O,U as ye,V as jt,S as ke,E as te,ae as Ge,ai as Fe,Q as Je,A as Ht,B as Yt}from"./index.c6843b6f.js";import{g as Ze,s as et,Q as ie,a as tt,b as Ne,c as Xt,u as Kt}from"./QTabPanels.09d74348.js";import{q as Wt,z as vt,y as ft,u as gt,B as mt,I as Gt,Q as Jt,c as Zt,d as at,C as lt}from"./ClosePopup.91eb0b8f.js";import{b as re}from"./format.a33550d6.js";import{t as ea}from"./patterns.5b28f170.js";import{Q as ta}from"./QSeparator.acfeb34c.js";import{Q as aa}from"./QPage.bab25e13.js";import{Q as la}from"./QCardActions.cd8f5b04.js";import{i as Ce,b as na,D as nt,m as ra,n as oa,l as ua}from"./DynamsoftButton.8ed13d16.js";import"./scroll.21a228ff.js";import"./QResizeObserver.a6129a08.js";import"./rtl.b51694b1.js";function Ue(t,n,u){const o=_e(t);let e,l=o.left-n.event.x,i=o.top-n.event.y,v=Math.abs(l),p=Math.abs(i);const f=n.direction;f.horizontal===!0&&f.vertical!==!0?e=l<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?e=i<0?"up":"down":f.up===!0&&i<0?(e="up",v>p&&(f.left===!0&&l<0?e="left":f.right===!0&&l>0&&(e="right"))):f.down===!0&&i>0?(e="down",v>p&&(f.left===!0&&l<0?e="left":f.right===!0&&l>0&&(e="right"))):f.left===!0&&l<0?(e="left",v<p&&(f.up===!0&&i<0?e="up":f.down===!0&&i>0&&(e="down"))):f.right===!0&&l>0&&(e="right",v<p&&(f.up===!0&&i<0?e="up":f.down===!0&&i>0&&(e="down")));let x=!1;if(e===void 0&&u===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,x=!0,e==="left"||e==="right"?(o.left-=l,v=0,l=0):(o.top-=i,p=0,i=0)}return{synthetic:x,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:o,direction:e,isFirst:n.event.isFirst,isFinal:u===!0,duration:Date.now()-n.event.time,distance:{x:v,y:p},offset:{x:l,y:i},delta:{x:o.left-n.event.lastX,y:o.top-n.event.lastY}}}}let sa=0;var bt=Et({name:"touch-pan",beforeMount(t,{value:n,modifiers:u}){if(u.mouse!==!0&&ue.has.touch!==!0)return;function o(l,i){u.mouse===!0&&i===!0?dt(l):(u.stop===!0&&K(l),u.prevent===!0&&We(l))}const e={uid:"qvtp_"+sa++,handler:n,modifiers:u,direction:Ze(u),noop:Rt,mouseStart(l){et(l,e)&&Pt(l)&&(he(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(et(l,e)){const i=l.target;he(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,i){if(ue.is.firefox===!0&&Oe(t,!0),e.lastEvt=l,i===!0||u.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const f=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&We(f),l.cancelBubble===!0&&K(f),Object.assign(f,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:f}}K(l)}const{left:v,top:p}=_e(l);e.event={x:v,y:p,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:p}},move(l){if(e.event===void 0)return;const i=_e(l),v=i.left-e.event.x,p=i.top-e.event.y;if(v===0&&p===0)return;e.lastEvt=l;const f=e.event.mouse===!0,x=()=>{o(l,f);let h;u.preserveCursor!==!0&&u.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Wt(),e.styleCleanup=$=>{if(e.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),f===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};$!==void 0?setTimeout(()=>{z(),$()},50):z()}else $!==void 0&&$()}};if(e.event.detected===!0){e.event.isFirst!==!0&&o(l,e.event.mouse);const{payload:h,synthetic:$}=Ue(l,e,!1);h!==void 0&&(e.handler(h)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&x(),e.event.lastX=h.position.left,e.event.lastY=h.position.top,e.event.lastDir=$===!0?void 0:h.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||f===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){x(),e.event.detected=!0,e.move(l);return}const M=Math.abs(v),s=Math.abs(p);M!==s&&(e.direction.horizontal===!0&&M>s||e.direction.vertical===!0&&M<s||e.direction.up===!0&&M<s&&p<0||e.direction.down===!0&&M<s&&p>0||e.direction.left===!0&&M>s&&v<0||e.direction.right===!0&&M>s&&v>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,i){if(e.event!==void 0){if(De(e,"temp"),ue.is.firefox===!0&&Oe(t,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(Ue(l===void 0?e.lastEvt:l,e).payload);const{payload:v}=Ue(l===void 0?e.lastEvt:l,e,!0),p=()=>{e.handler(v)};e.styleCleanup!==void 0?e.styleCleanup(p):p()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,u.mouse===!0){const l=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";he(e,"main",[[t,"mousedown","mouseStart",`passive${l}`]])}ue.has.touch===!0&&he(e,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const u=t.__qtouchpan;u!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&u.end(),u.handler=n.value),u.direction=Ze(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),De(n,"main"),De(n,"temp"),ue.is.firefox===!0&&Oe(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}});const rt="q-slider__marker-labels",ia=t=>({value:t}),ca=({marker:t})=>d("div",{key:t.value,style:t.style,class:t.classes},t.label),pt=[34,37,40,33,39,38],da={...ft,...gt,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:t=>t>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},va=["pan","update:modelValue","change"];function fa({updateValue:t,updatePosition:n,getDragging:u,formAttrs:o}){const{props:e,emit:l,slots:i,proxy:{$q:v}}=Se(),p=vt(e,v),f=mt(o),x=E(!1),M=E(!1),s=E(!1),h=E(!1),$=c(()=>e.vertical===!0?"--v":"--h"),z=c(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),N=c(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(v.lang.rtl===!0)),U=c(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),b=c(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),y=c(()=>e.disable!==!0&&e.readonly!==!0&&U.value<b.value),g=c(()=>(String(e.step).trim().split(".")[1]||"").length),V=c(()=>e.step===0?1:e.step),w=c(()=>y.value===!0?e.tabindex||0:-1),j=c(()=>e.max-e.min),ee=c(()=>b.value-U.value),R=c(()=>C(U.value)),X=c(()=>C(b.value)),P=c(()=>e.vertical===!0?N.value===!0?"bottom":"top":N.value===!0?"right":"left"),W=c(()=>e.vertical===!0?"height":"width"),ae=c(()=>e.vertical===!0?"width":"height"),oe=c(()=>e.vertical===!0?"vertical":"horizontal"),I=c(()=>{const r={role:"slider","aria-valuemin":U.value,"aria-valuemax":b.value,"aria-orientation":oe.value,"data-step":e.step};return e.disable===!0?r["aria-disabled"]="true":e.readonly===!0&&(r["aria-readonly"]="true"),r}),de=c(()=>`q-slider q-slider${$.value} q-slider--${x.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(y.value===!0?" q-slider--editable":""))+(s.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(p.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+$.value:""));function le(r){const S="q-slider__"+r;return`${S} ${S}${$.value} ${S}${$.value}${z.value}`}function ve(r){const S="q-slider__"+r;return`${S} ${S}${$.value}`}const xe=c(()=>{const r=e.selectionColor||e.color;return"q-slider__selection absolute"+(r!==void 0?` text-${r}`:"")}),Me=c(()=>ve("markers")+" absolute overflow-hidden"),Ve=c(()=>ve("track-container")),fe=c(()=>le("pin")),qe=c(()=>le("label")),$e=c(()=>le("text-container")),Be=c(()=>le("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),Ae=c(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),Ee=c(()=>{const r={[ae.value]:e.trackSize};return e.trackImg!==void 0&&(r.backgroundImage=`url(${e.trackImg}) !important`),r}),Ie=c(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),a=c(()=>{const r={[P.value]:`${100*R.value}%`,[W.value]:`${100*(X.value-R.value)}%`};return e.innerTrackImg!==void 0&&(r.backgroundImage=`url(${e.innerTrackImg}) !important`),r});function m(r){const{min:S,max:B,step:A}=e;let D=S+r*(B-S);if(A>0){const Z=(D-S)%A;D+=(Math.abs(Z)>=A/2?(Z<0?-1:1)*A:0)-Z}return g.value>0&&(D=parseFloat(D.toFixed(g.value))),re(D,U.value,b.value)}function C(r){return j.value===0?0:(r-e.min)/j.value}function _(r,S){const B=_e(r),A=e.vertical===!0?re((B.top-S.top)/S.height,0,1):re((B.left-S.left)/S.width,0,1);return re(N.value===!0?1-A:A,R.value,X.value)}const F=c(()=>Dt(e.markers)===!0?e.markers:V.value),k=c(()=>{const r=[],S=F.value,B=e.max;let A=e.min;do r.push(A),A+=S;while(A<B);return r.push(B),r}),Q=c(()=>{const r=` ${rt}${$.value}-`;return rt+`${r}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${r}${N.value===!0?"rtl":"ltr"}`}),T=c(()=>e.markerLabels===!1?null:me(e.markerLabels).map((r,S)=>({index:S,value:r.value,label:r.label||r.value,classes:Q.value+(r.classes!==void 0?" "+r.classes:""),style:{...be(r.value),...r.style||{}}}))),J=c(()=>({markerList:T.value,markerMap:kt.value,classes:Q.value,getStyle:be})),ge=c(()=>{if(ee.value!==0){const r=100*F.value/ee.value;return{...a.value,backgroundSize:e.vertical===!0?`2px ${r}%`:`${r}% 2px`}}return null});function me(r){if(r===!1)return null;if(r===!0)return k.value.map(ia);if(typeof r=="function")return k.value.map(B=>{const A=r(B);return Le(A)===!0?{...A,value:B}:{value:B,label:A}});const S=({value:B})=>B>=e.min&&B<=e.max;return Array.isArray(r)===!0?r.map(B=>Le(B)===!0?B:{value:B}).filter(S):Object.keys(r).map(B=>{const A=r[B],D=Number(B);return Le(A)===!0?{...A,value:D}:{value:D,label:A}}).filter(S)}function be(r){return{[P.value]:`${100*(r-e.min)/j.value}%`}}const kt=c(()=>{if(e.markerLabels===!1)return null;const r={};return T.value.forEach(S=>{r[S.value]=S}),r});function Ct(){if(i["marker-label-group"]!==void 0)return i["marker-label-group"](J.value);const r=i["marker-label"]||ca;return T.value.map(S=>r({marker:S,...J.value}))}const _t=c(()=>[[bt,St,void 0,{[oe.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function St(r){r.isFinal===!0?(h.value!==void 0&&(n(r.evt),r.touch===!0&&t(!0),h.value=void 0,l("pan","end")),x.value=!1,s.value=!1):r.isFirst===!0?(h.value=u(r.evt),n(r.evt),t(),x.value=!0,l("pan","start")):(n(r.evt),t())}function Ye(){s.value=!1}function wt(r){n(r,u(r)),t(),M.value=!0,x.value=!0,document.addEventListener("mouseup",Te,!0)}function Te(){M.value=!1,x.value=!1,t(!0),Ye(),document.removeEventListener("mouseup",Te,!0)}function xt(r){n(r,u(r)),t(!0)}function Mt(r){pt.includes(r.keyCode)&&t(!0)}function Vt(r){if(e.vertical===!0)return null;const S=v.lang.rtl!==e.reverse?1-r:r;return{transform:`translateX(calc(${2*S-1} * ${e.thumbSize} / 2 + ${50-100*S}%))`}}function qt(r){const S=c(()=>M.value===!1&&(s.value===r.focusValue||s.value==="both")?" q-slider--focus":""),B=c(()=>`q-slider__thumb q-slider__thumb${$.value} q-slider__thumb${$.value}-${N.value===!0?"rtl":"ltr"} absolute non-selectable`+S.value+(r.thumbColor.value!==void 0?` text-${r.thumbColor.value}`:"")),A=c(()=>({width:e.thumbSize,height:e.thumbSize,[P.value]:`${100*r.ratio.value}%`,zIndex:s.value===r.focusValue?2:void 0})),D=c(()=>r.labelColor.value!==void 0?` text-${r.labelColor.value}`:""),Z=c(()=>Vt(r.ratio.value)),Re=c(()=>"q-slider__text"+(r.labelTextColor.value!==void 0?` text-${r.labelTextColor.value}`:""));return()=>{const Pe=[d("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[d("path",{d:e.thumbPath})]),d("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(Pe.push(d("div",{class:fe.value+" absolute fit no-pointer-events"+D.value},[d("div",{class:qe.value,style:{minWidth:e.thumbSize}},[d("div",{class:$e.value,style:Z.value},[d("span",{class:Re.value},r.label.value)])])])),e.name!==void 0&&e.disable!==!0&&f(Pe,"push")),d("div",{class:B.value,style:A.value,...r.getNodeData()},Pe)}}function $t(r,S,B,A){const D=[];e.innerTrackColor!=="transparent"&&D.push(d("div",{key:"inner",class:Ie.value,style:a.value})),e.selectionColor!=="transparent"&&D.push(d("div",{key:"selection",class:xe.value,style:r.value})),e.markers!==!1&&D.push(d("div",{key:"marker",class:Me.value,style:ge.value})),A(D);const Z=[ct("div",{key:"trackC",class:Ve.value,tabindex:S.value,...B.value},[d("div",{class:Ae.value,style:Ee.value},D)],"slide",y.value,()=>_t.value)];if(e.markerLabels!==!1){const Re=e.switchMarkerLabelsSide===!0?"unshift":"push";Z[Re](d("div",{key:"markerL",class:Be.value},Ct()))}return Z}return Ot(()=>{document.removeEventListener("mouseup",Te,!0)}),{state:{active:x,focus:s,preventFocus:M,dragging:h,editable:y,classes:de,tabindex:w,attributes:I,step:V,decimals:g,trackLen:j,innerMin:U,innerMinRatio:R,innerMax:b,innerMaxRatio:X,positionProp:P,sizeProp:W,isReversed:N},methods:{onActivate:wt,onMobileClick:xt,onBlur:Ye,onKeyup:Mt,getContent:$t,getThumbRenderFn:qt,convertRatioToModel:m,convertModelToRatio:C,getDraggingRatio:_}}}const ga=()=>({});var ne=He({name:"QSlider",props:{...da,modelValue:{required:!0,default:null,validator:t=>typeof t=="number"||t===null},labelValue:[String,Number]},emits:va,setup(t,{emit:n}){const{proxy:{$q:u}}=Se(),{state:o,methods:e}=fa({updateValue:$,updatePosition:N,getDragging:z,formAttrs:Gt(t)}),l=E(null),i=E(0),v=E(0);function p(){v.value=t.modelValue===null?o.innerMin.value:re(t.modelValue,o.innerMin.value,o.innerMax.value)}ze(()=>`${t.modelValue}|${o.innerMin.value}|${o.innerMax.value}`,p),p();const f=c(()=>e.convertModelToRatio(v.value)),x=c(()=>o.active.value===!0?i.value:f.value),M=c(()=>{const y={[o.positionProp.value]:`${100*o.innerMinRatio.value}%`,[o.sizeProp.value]:`${100*(x.value-o.innerMinRatio.value)}%`};return t.selectionImg!==void 0&&(y.backgroundImage=`url(${t.selectionImg}) !important`),y}),s=e.getThumbRenderFn({focusValue:!0,getNodeData:ga,ratio:x,label:c(()=>t.labelValue!==void 0?t.labelValue:v.value),thumbColor:c(()=>t.thumbColor||t.color),labelColor:c(()=>t.labelColor),labelTextColor:c(()=>t.labelTextColor)}),h=c(()=>o.editable.value!==!0?{}:u.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:U,onBlur:e.onBlur,onKeydown:b,onKeyup:e.onKeyup});function $(y){v.value!==t.modelValue&&n("update:modelValue",v.value),y===!0&&n("change",v.value)}function z(){return l.value.getBoundingClientRect()}function N(y,g=o.dragging.value){const V=e.getDraggingRatio(y,g);v.value=e.convertRatioToModel(V),i.value=t.snap!==!0||t.step===0?V:e.convertModelToRatio(v.value)}function U(){o.focus.value=!0}function b(y){if(!pt.includes(y.keyCode))return;dt(y);const g=([34,33].includes(y.keyCode)?10:1)*o.step.value,V=([34,37,40].includes(y.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(t.vertical===!0?-1:1)*g;v.value=re(parseFloat((v.value+V).toFixed(o.decimals.value)),o.innerMin.value,o.innerMax.value),$()}return()=>{const y=e.getContent(M,o.tabindex,h,g=>{g.push(s())});return d("div",{ref:l,class:o.classes.value+(t.modelValue===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":t.modelValue},y)}}});const ma=/^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;function ot({r:t,g:n,b:u,a:o}){const e=o!==void 0;if(t=Math.round(t),n=Math.round(n),u=Math.round(u),t>255||n>255||u>255||e&&o>100)throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");return o=e?(Math.round(255*o/100)|1<<8).toString(16).slice(1):"","#"+(u|n<<8|t<<16|1<<24).toString(16).slice(1)+o}function ut({r:t,g:n,b:u,a:o}){return`rgb${o!==void 0?"a":""}(${t},${n},${u}${o!==void 0?","+o/100:""})`}function ht(t){if(typeof t!="string")throw new TypeError("Expected a string");t=t.replace(/^#/,""),t.length===3?t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t.length===4&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const n=parseInt(t,16);return t.length>6?{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:Math.round((n&255)/2.55)}:{r:n>>16,g:n>>8&255,b:n&255}}function st({h:t,s:n,v:u,a:o}){let e,l,i;n=n/100,u=u/100,t=t/360;const v=Math.floor(t*6),p=t*6-v,f=u*(1-n),x=u*(1-p*n),M=u*(1-(1-p)*n);switch(v%6){case 0:e=u,l=M,i=f;break;case 1:e=x,l=u,i=f;break;case 2:e=f,l=u,i=M;break;case 3:e=f,l=x,i=u;break;case 4:e=M,l=f,i=u;break;case 5:e=u,l=f,i=x;break}return{r:Math.round(e*255),g:Math.round(l*255),b:Math.round(i*255),a:o}}function Qe({r:t,g:n,b:u,a:o}){const e=Math.max(t,n,u),l=Math.min(t,n,u),i=e-l,v=e===0?0:i/e,p=e/255;let f;switch(e){case l:f=0;break;case t:f=n-u+i*(n<u?6:0),f/=6*i;break;case n:f=u-t+i*2,f/=6*i;break;case u:f=t-n+i*4,f/=6*i;break}return{h:Math.round(f*360),s:Math.round(v*100),v:Math.round(p*100),a:o}}function yt(t){if(typeof t!="string")throw new TypeError("Expected a string");const n=t.replace(/ /g,""),u=ma.exec(n);if(u===null)return ht(n);const o={r:Math.min(255,parseInt(u[2],10)),g:Math.min(255,parseInt(u[3],10)),b:Math.min(255,parseInt(u[4],10))};if(u[1]){const e=parseFloat(u[5]);o.a=Math.min(1,isNaN(e)===!0?1:e)*100}return o}function ba(t){if(typeof t!="string"&&(!t||t.r===void 0))throw new TypeError("Expected a string or a {r, g, b} object as color");const n=typeof t=="string"?yt(t):t,u=n.r/255,o=n.g/255,e=n.b/255,l=u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4),i=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),v=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4);return .2126*l+.7152*i+.0722*v}const pa=["rgb(255,204,204)","rgb(255,230,204)","rgb(255,255,204)","rgb(204,255,204)","rgb(204,255,230)","rgb(204,255,255)","rgb(204,230,255)","rgb(204,204,255)","rgb(230,204,255)","rgb(255,204,255)","rgb(255,153,153)","rgb(255,204,153)","rgb(255,255,153)","rgb(153,255,153)","rgb(153,255,204)","rgb(153,255,255)","rgb(153,204,255)","rgb(153,153,255)","rgb(204,153,255)","rgb(255,153,255)","rgb(255,102,102)","rgb(255,179,102)","rgb(255,255,102)","rgb(102,255,102)","rgb(102,255,179)","rgb(102,255,255)","rgb(102,179,255)","rgb(102,102,255)","rgb(179,102,255)","rgb(255,102,255)","rgb(255,51,51)","rgb(255,153,51)","rgb(255,255,51)","rgb(51,255,51)","rgb(51,255,153)","rgb(51,255,255)","rgb(51,153,255)","rgb(51,51,255)","rgb(153,51,255)","rgb(255,51,255)","rgb(255,0,0)","rgb(255,128,0)","rgb(255,255,0)","rgb(0,255,0)","rgb(0,255,128)","rgb(0,255,255)","rgb(0,128,255)","rgb(0,0,255)","rgb(128,0,255)","rgb(255,0,255)","rgb(245,0,0)","rgb(245,123,0)","rgb(245,245,0)","rgb(0,245,0)","rgb(0,245,123)","rgb(0,245,245)","rgb(0,123,245)","rgb(0,0,245)","rgb(123,0,245)","rgb(245,0,245)","rgb(214,0,0)","rgb(214,108,0)","rgb(214,214,0)","rgb(0,214,0)","rgb(0,214,108)","rgb(0,214,214)","rgb(0,108,214)","rgb(0,0,214)","rgb(108,0,214)","rgb(214,0,214)","rgb(163,0,0)","rgb(163,82,0)","rgb(163,163,0)","rgb(0,163,0)","rgb(0,163,82)","rgb(0,163,163)","rgb(0,82,163)","rgb(0,0,163)","rgb(82,0,163)","rgb(163,0,163)","rgb(92,0,0)","rgb(92,46,0)","rgb(92,92,0)","rgb(0,92,0)","rgb(0,92,46)","rgb(0,92,92)","rgb(0,46,92)","rgb(0,0,92)","rgb(46,0,92)","rgb(92,0,92)","rgb(255,255,255)","rgb(205,205,205)","rgb(178,178,178)","rgb(153,153,153)","rgb(127,127,127)","rgb(102,102,102)","rgb(76,76,76)","rgb(51,51,51)","rgb(25,25,25)","rgb(0,0,0)"],it="M5 5 h10 v10 h-10 v-10 z",ha="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";var ya=He({name:"QColor",props:{...ft,...gt,modelValue:String,defaultValue:String,defaultView:{type:String,default:"spectrum",validator:t=>["spectrum","tune","palette"].includes(t)},formatModel:{type:String,default:"auto",validator:t=>["auto","hex","rgb","hexa","rgba"].includes(t)},palette:Array,noHeader:Boolean,noHeaderTabs:Boolean,noFooter:Boolean,square:Boolean,flat:Boolean,bordered:Boolean,disable:Boolean,readonly:Boolean},emits:["update:modelValue","change"],setup(t,{emit:n}){const{proxy:u}=Se(),{$q:o}=u,e=vt(t,o),{getCache:l}=Kt(),i=E(null),v=E(null),p=c(()=>t.formatModel==="auto"?null:t.formatModel.indexOf("hex")>-1),f=c(()=>t.formatModel==="auto"?null:t.formatModel.indexOf("a")>-1),x=E(t.formatModel==="auto"?t.modelValue===void 0||t.modelValue===null||t.modelValue===""||t.modelValue.startsWith("#")?"hex":"rgb":t.formatModel.startsWith("hex")?"hex":"rgb"),M=E(t.defaultView),s=E(W(t.modelValue||t.defaultValue)),h=c(()=>t.disable!==!0&&t.readonly!==!0),$=c(()=>t.modelValue===void 0||t.modelValue===null||t.modelValue===""||t.modelValue.startsWith("#")),z=c(()=>p.value!==null?p.value:$.value),N=c(()=>({type:"hidden",name:t.name,value:s.value[z.value===!0?"hex":"rgb"]})),U=mt(N),b=c(()=>f.value!==null?f.value:s.value.a!==void 0),y=c(()=>({backgroundColor:s.value.rgb||"#000"})),g=c(()=>`q-color-picker__header-content q-color-picker__header-content--${(s.value.a!==void 0&&s.value.a<65?!0:ba(s.value)>.4)?"light":"dark"}`),V=c(()=>({background:`hsl(${s.value.h},100%,50%)`})),w=c(()=>({top:`${100-s.value.v}%`,[o.lang.rtl===!0?"right":"left"]:`${s.value.s}%`})),j=c(()=>t.palette!==void 0&&t.palette.length>0?t.palette:pa),ee=c(()=>"q-color-picker"+(t.bordered===!0?" q-color-picker--bordered":"")+(t.square===!0?" q-color-picker--square no-border-radius":"")+(t.flat===!0?" q-color-picker--flat no-shadow":"")+(t.disable===!0?" disabled":"")+(e.value===!0?" q-color-picker--dark q-dark":"")),R=c(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{}),X=c(()=>[[bt,ve,void 0,{prevent:!0,stop:!0,mouse:!0}]]);ze(()=>t.modelValue,a=>{const m=W(a||t.defaultValue);m.hex!==s.value.hex&&(s.value=m)}),ze(()=>t.defaultValue,a=>{if(!t.modelValue&&a){const m=W(a);m.hex!==s.value.hex&&(s.value=m)}});function P(a,m){s.value.hex=ot(a),s.value.rgb=ut(a),s.value.r=a.r,s.value.g=a.g,s.value.b=a.b,s.value.a=a.a;const C=s.value[z.value===!0?"hex":"rgb"];n("update:modelValue",C),m===!0&&n("change",C)}function W(a){const m=f.value!==void 0?f.value:t.formatModel==="auto"?null:t.formatModel.indexOf("a")>-1;if(typeof a!="string"||a.length===0||ea.anyColor(a.replace(/ /g,""))!==!0)return{h:0,s:0,v:0,r:0,g:0,b:0,a:m===!0?100:void 0,hex:void 0,rgb:void 0};const C=yt(a);return m===!0&&C.a===void 0&&(C.a=100),C.hex=ot(C),C.rgb=ut(C),Object.assign(C,Qe(C))}function ae(a,m,C){const _=i.value;if(_===null)return;const F=_.clientWidth,k=_.clientHeight,Q=_.getBoundingClientRect();let T=Math.min(F,Math.max(0,a-Q.left));o.lang.rtl===!0&&(T=F-T);const J=Math.min(k,Math.max(0,m-Q.top)),ge=Math.round(100*T/F),me=Math.round(100*Math.max(0,Math.min(1,-(J/k)+1))),be=st({h:s.value.h,s:ge,v:me,a:b.value===!0?s.value.a:void 0});s.value.s=ge,s.value.v=me,P(be,C)}function oe(a,m){const C=Math.round(a),_=st({h:C,s:s.value.s,v:s.value.v,a:b.value===!0?s.value.a:void 0});s.value.h=C,P(_,m)}function I(a,m,C,_,F){if(_!==void 0&&K(_),!/^[0-9]+$/.test(a)){F===!0&&u.$forceUpdate();return}const k=Math.floor(Number(a));if(k<0||k>C){F===!0&&u.$forceUpdate();return}const Q={r:m==="r"?k:s.value.r,g:m==="g"?k:s.value.g,b:m==="b"?k:s.value.b,a:b.value===!0?m==="a"?k:s.value.a:void 0};if(m!=="a"){const T=Qe(Q);s.value.h=T.h,s.value.s=T.s,s.value.v=T.v}if(P(Q,F),_!==void 0&&F!==!0&&_.target.selectionEnd!==void 0){const T=_.target.selectionEnd;je(()=>{_.target.setSelectionRange(T,T)})}}function de(a,m){let C;const _=a.target.value;if(K(a),x.value==="hex"){if(_.length!==(b.value===!0?9:7)||!/^#[0-9A-Fa-f]+$/.test(_))return!0;C=ht(_)}else{let k;if(_.endsWith(")"))if(b.value!==!0&&_.startsWith("rgb(")){if(k=_.substring(4,_.length-1).split(",").map(Q=>parseInt(Q,10)),k.length!==3||!/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(_))return!0}else if(b.value===!0&&_.startsWith("rgba(")){if(k=_.substring(5,_.length-1).split(","),k.length!==4||!/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(_))return!0;for(let T=0;T<3;T++){const J=parseInt(k[T],10);if(J<0||J>255)return!0;k[T]=J}const Q=parseFloat(k[3]);if(Q<0||Q>1)return!0;k[3]=Q}else return!0;else return!0;if(k[0]<0||k[0]>255||k[1]<0||k[1]>255||k[2]<0||k[2]>255||b.value===!0&&(k[3]<0||k[3]>1))return!0;C={r:k[0],g:k[1],b:k[2],a:b.value===!0?k[3]*100:void 0}}const F=Qe(C);if(s.value.h=F.h,s.value.s=F.s,s.value.v=F.v,P(C,m),m!==!0){const k=a.target.selectionEnd;je(()=>{a.target.setSelectionRange(k,k)})}}function le(a){const m=W(a),C={r:m.r,g:m.g,b:m.b,a:m.a};C.a===void 0&&(C.a=s.value.a),s.value.h=m.h,s.value.s=m.s,s.value.v=m.v,P(C,!0)}function ve(a){a.isFinal?ae(a.position.left,a.position.top,!0):xe(a)}const xe=It(a=>{ae(a.position.left,a.position.top)},20);function Me(a){ae(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset,!0)}function Ve(a){ae(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)}function fe(a){v.value!==null&&(v.value.$el.style.opacity=a?1:0)}function qe(){const a=[];return t.noHeaderTabs!==!0&&a.push(d(tt,{class:"q-color-picker__header-tabs",modelValue:x.value,dense:!0,align:"justify",...l("topVTab",{"onUpdate:modelValue":m=>{x.value=m}})},()=>[d(ie,{label:"HEX"+(b.value===!0?"A":""),name:"hex",ripple:!1}),d(ie,{label:"RGB"+(b.value===!0?"A":""),name:"rgb",ripple:!1})])),a.push(d("div",{class:"q-color-picker__header-banner row flex-center no-wrap"},[d("input",{class:"fit",value:s.value[x.value],...h.value!==!0?{readonly:!0}:{},...l("topIn",{onInput:m=>{fe(de(m)===!0)},onChange:K,onBlur:m=>{de(m,!0)===!0&&u.$forceUpdate(),fe(!1)}})}),d(Tt,{ref:v,class:"q-color-picker__error-icon absolute no-pointer-events",name:o.iconSet.type.negative})])),d("div",{class:"q-color-picker__header relative-position overflow-hidden"},[d("div",{class:"q-color-picker__header-bg absolute-full"}),d("div",{class:g.value,style:y.value},a)])}function $e(){return d(Xt,{modelValue:M.value,animated:!0},()=>[d(Ne,{class:"q-color-picker__spectrum-tab overflow-hidden",name:"spectrum"},Ae),d(Ne,{class:"q-pa-md q-color-picker__tune-tab",name:"tune"},Ee),d(Ne,{class:"q-color-picker__palette-tab",name:"palette"},Ie)])}function Be(){return d("div",{class:"q-color-picker__footer relative-position overflow-hidden"},[d(tt,{class:"absolute-full",modelValue:M.value,dense:!0,align:"justify",...l("ftIn",{"onUpdate:modelValue":a=>{M.value=a}})},()=>[d(ie,{icon:o.iconSet.colorPicker.spectrum,name:"spectrum",ripple:!1}),d(ie,{icon:o.iconSet.colorPicker.tune,name:"tune",ripple:!1}),d(ie,{icon:o.iconSet.colorPicker.palette,name:"palette",ripple:!1})])])}function Ae(){const a={ref:i,class:"q-color-picker__spectrum non-selectable relative-position cursor-pointer"+(h.value!==!0?" readonly":""),style:V.value,...h.value===!0?{onClick:Me,onMousedown:Ve}:{}},m=[d("div",{style:{paddingBottom:"100%"}}),d("div",{class:"q-color-picker__spectrum-white absolute-full"}),d("div",{class:"q-color-picker__spectrum-black absolute-full"}),d("div",{class:"absolute",style:w.value},[s.value.hex!==void 0?d("div",{class:"q-color-picker__spectrum-circle"}):null])],C=[d(ne,{class:"q-color-picker__hue non-selectable",modelValue:s.value.h,min:0,max:360,trackSize:"8px",innerTrackColor:"transparent",selectionColor:"transparent",readonly:h.value!==!0,thumbPath:it,"onUpdate:modelValue":oe,...l("lazyhue",{onChange:_=>oe(_,!0)})})];return b.value===!0&&C.push(d(ne,{class:"q-color-picker__alpha non-selectable",modelValue:s.value.a,min:0,max:100,trackSize:"8px",trackColor:"white",innerTrackColor:"transparent",selectionColor:"transparent",trackImg:ha,readonly:h.value!==!0,hideSelection:!0,thumbPath:it,...l("alphaSlide",{"onUpdate:modelValue":_=>I(_,"a",100),onChange:_=>I(_,"a",100,void 0,!0)})})),[ct("div",a,m,"spec",h.value,()=>X.value),d("div",{class:"q-color-picker__sliders"},C)]}function Ee(){return[d("div",{class:"row items-center no-wrap"},[d("div","R"),d(ne,{modelValue:s.value.r,min:0,max:255,color:"red",dark:e.value,readonly:h.value!==!0,...l("rSlide",{"onUpdate:modelValue":a=>I(a,"r",255),onChange:a=>I(a,"r",255,void 0,!0)})}),d("input",{value:s.value.r,maxlength:3,readonly:h.value!==!0,onChange:K,...l("rIn",{onInput:a=>I(a.target.value,"r",255,a),onBlur:a=>I(a.target.value,"r",255,a,!0)})})]),d("div",{class:"row items-center no-wrap"},[d("div","G"),d(ne,{modelValue:s.value.g,min:0,max:255,color:"green",dark:e.value,readonly:h.value!==!0,...l("gSlide",{"onUpdate:modelValue":a=>I(a,"g",255),onChange:a=>I(a,"g",255,void 0,!0)})}),d("input",{value:s.value.g,maxlength:3,readonly:h.value!==!0,onChange:K,...l("gIn",{onInput:a=>I(a.target.value,"g",255,a),onBlur:a=>I(a.target.value,"g",255,a,!0)})})]),d("div",{class:"row items-center no-wrap"},[d("div","B"),d(ne,{modelValue:s.value.b,min:0,max:255,color:"blue",readonly:h.value!==!0,dark:e.value,...l("bSlide",{"onUpdate:modelValue":a=>I(a,"b",255),onChange:a=>I(a,"b",255,void 0,!0)})}),d("input",{value:s.value.b,maxlength:3,readonly:h.value!==!0,onChange:K,...l("bIn",{onInput:a=>I(a.target.value,"b",255,a),onBlur:a=>I(a.target.value,"b",255,a,!0)})})]),b.value===!0?d("div",{class:"row items-center no-wrap"},[d("div","A"),d(ne,{modelValue:s.value.a,color:"grey",readonly:h.value!==!0,dark:e.value,...l("aSlide",{"onUpdate:modelValue":a=>I(a,"a",100),onChange:a=>I(a,"a",100,void 0,!0)})}),d("input",{value:s.value.a,maxlength:3,readonly:h.value!==!0,onChange:K,...l("aIn",{onInput:a=>I(a.target.value,"a",100,a),onBlur:a=>I(a.target.value,"a",100,a,!0)})})]):null]}function Ie(){const a=m=>d("div",{class:"q-color-picker__cube col-auto",style:{backgroundColor:m},...h.value===!0?l("palette#"+m,{onClick:()=>{le(m)}}):{}});return[d("div",{class:"row items-center q-color-picker__palette-rows"+(h.value===!0?" q-color-picker__palette-rows--editable":"")},j.value.map(a))]}return()=>{const a=[$e()];return t.name!==void 0&&t.disable!==!0&&U(a,"push"),t.noHeader!==!0&&a.unshift(qe()),t.noFooter!==!0&&a.push(Be()),d("div",{class:ee.value,...R.value},a)}}});function ce(t,n=new WeakMap){if(Object(t)!==t)return t;if(n.has(t))return n.get(t);const u=t instanceof Date?new Date(t):t instanceof RegExp?new RegExp(t.source,t.flags):t instanceof Set?new Set:t instanceof Map?new Map:typeof t.constructor!="function"?Object.create(null):t.prototype!==void 0&&typeof t.prototype.constructor=="function"?t:new t.constructor;if(typeof t.constructor=="function"&&typeof t.valueOf=="function"){const o=t.valueOf();if(Object(o)!==o){const e=new t.constructor(o);return n.set(t,e),e}}return n.set(t,u),t instanceof Set?t.forEach(o=>{u.add(ce(o,n))}):t instanceof Map&&t.forEach((o,e)=>{u.set(e,ce(o,n))}),Object.assign(u,...Object.keys(t).map(o=>({[o]:ce(t[o],n)})))}var ka=He({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(t,{slots:n,emit:u}){const{proxy:o}=Se(),{$q:e}=o,l=E(null),i=E(""),v=E("");let p=!1;const f=c(()=>Lt({initialValue:i.value,validate:t.validate,set:x,cancel:M,updatePosition:s},"value",()=>v.value,g=>{v.value=g}));function x(){t.validate(v.value)!==!1&&(h()===!0&&(u("save",v.value,i.value),u("update:modelValue",v.value)),$())}function M(){h()===!0&&u("cancel",v.value,i.value),$()}function s(){je(()=>{l.value.updatePosition()})}function h(){return Ft(v.value,i.value)===!1}function $(){p=!0,l.value.hide()}function z(){p=!1,i.value=ce(t.modelValue),v.value=ce(t.modelValue),u("beforeShow")}function N(){u("show")}function U(){p===!1&&h()===!0&&(t.autoSave===!0&&t.validate(v.value)===!0?(u("save",v.value,i.value),u("update:modelValue",v.value)):u("cancel",v.value,i.value)),u("beforeHide")}function b(){u("hide")}function y(){const g=n.default!==void 0?[].concat(n.default(f.value)):[];return t.title&&g.unshift(d("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},t.title)),t.buttons===!0&&g.push(d("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[d(G,{flat:!0,color:t.color,label:t.labelCancel||e.lang.label.cancel,onClick:M}),d(G,{flat:!0,color:t.color,label:t.labelSet||e.lang.label.set,onClick:x})])),g}return Object.assign(o,{set:x,cancel:M,show(g){l.value!==null&&l.value.show(g)},hide(g){l.value!==null&&l.value.hide(g)},updatePosition:s}),()=>{if(t.disable!==!0)return d(Bt,{ref:l,class:"q-popup-edit",cover:t.cover,onBeforeShow:z,onShow:N,onBeforeHide:U,onHide:b,onEscapeKey:M},y)}}});const we=t=>(Ht("data-v-38334ee1"),t=t(),Yt(),t),Ca={class:"full"},_a={class:"header"},Sa={class:"text-h6 fontOswald"},wa={class:"container"},xa=we(()=>O("label",null,"Engine: ",-1)),Ma=["onUpdate:modelValue"],Va=["value"],qa=we(()=>O("label",null,"Display Name: ",-1)),$a=["onUpdate:modelValue"],Ba=we(()=>O("label",null,"Color: ",-1)),Aa=["onUpdate:modelValue"],Ea={class:"text-grey-8 q-gutter-xs"},Ia=we(()=>O("div",{class:"text-h6"},"Settings",-1)),Ta={for:"'settings-' + setting.name"},Ra={key:0},Pa=["id","onUpdate:modelValue"],Oa={key:1},Da=["onUpdate:modelValue"],La=["value"],Fa=Ut({__name:"SettingsPage",setup(t){const n=E(""),u=Qt(),o=E([]),e=E([]),l=E(!1),i=E([]),v=E({});let p=-1;zt(async()=>{n.value=u.currentRoute.value.params.name,e.value=Ce.getEngines(),console.log(n.value);const b=await na(u.currentRoute.value.params.name);o.value=b});const f=()=>{const b=o.value,y={engine:e.value[0],displayName:e.value[0],settings:[]};b.push(y),o.value=b},x=b=>{ra(o.value,b)},M=b=>{oa(o.value,b)},s=b=>{const y=o.value;y.splice(b,1),o.value=y},h=async()=>{const b=JSON.parse(JSON.stringify(o.value));await ua.setItem(n.value+":settings",b),alert("Saved")},$=()=>{p!=-1&&(o.value[p].settings=JSON.parse(JSON.stringify(i.value)))},z=async(b,y)=>{var ee;p=b,i.value;const g=Ce.getSupportedSettings(y),V=Ce.getDefaultSettings(y),w=o.value[p].settings,j=[];for(let R=w.length-1;R>=0;R--){const X=w[R];let P=!1;for(const W of g)if(X.name===W.name){P=!0;break}P===!1&&w.splice(R,1)}for(const R of g){let X=!1;R.type==="select"&&j.push(R.name);for(const P of w)if(P.name===R.name){X=!0;break}if(!X){const P=(ee=V[R.name])!=null?ee:"";w.push({name:R.name,value:P,type:R.type})}}i.value=w,U(j,y),l.value=!0},N=b=>v.value[b],U=async(b,y)=>{const g={};for(const V of b){const w=await Ce.getSettingOptions(y,V,i.value);g[V]=w}v.value=g};return(b,y)=>(H(),Y(se,null,[q(aa,null,{default:L(()=>[O("div",Ca,[O("div",_a,[O("div",Sa,ye(n.value),1)]),O("div",wa,[q(At,{bordered:"",class:"rounded-borders"},{default:L(()=>[q(pe,{header:""},{default:L(()=>[jt("Barcode Reader Configuration")]),_:1}),(H(!0),Y(se,null,ke(o.value,(g,V)=>(H(),Y("div",{key:V},[q(Xe,null,{default:L(()=>[q(Ke,{top:""},{default:L(()=>[q(pe,null,{default:L(()=>[xa,te(O("select",{"onUpdate:modelValue":w=>g.engine=w},[(H(!0),Y(se,null,ke(e.value,w=>(H(),Y("option",{key:"config-"+w,value:w},ye(w),9,Va))),128))],8,Ma),[[Ge,g.engine]])]),_:2},1024),q(pe,{lines:"1"},{default:L(()=>[qa,te(O("input",{type:"text","onUpdate:modelValue":w=>g.displayName=w},null,8,$a),[[Fe,g.displayName]])]),_:2},1024),q(pe,{lines:"1"},{default:L(()=>[Ba,te(O("input",{type:"text","onUpdate:modelValue":w=>g.color=w},null,8,Aa),[[Fe,g.color]]),O("span",null,[q(G,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"colorize"}),q(ka,{modelValue:g.color,"onUpdate:modelValue":w=>g.color=w,"auto-save":""},{default:L(w=>[q(ya,{modelValue:w.value,"onUpdate:modelValue":j=>w.value=j},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024),q(Ke,{top:"",side:""},{default:L(()=>[O("div",Ea,[q(G,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"arrow_upward",onClick:w=>x(V)},null,8,["onClick"]),q(G,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"arrow_downward",onClick:w=>M(V)},null,8,["onClick"]),q(G,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:w=>s(V)},null,8,["onClick"]),q(G,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"settings",onClick:w=>z(V,g.engine)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024),q(ta,{spaced:""})]))),128)),q(Xe,null,{default:L(()=>[q(nt,{label:"Add Configuration",onClick:f}),q(nt,{style:{"margin-left":"10px"},label:"Save",onClick:h})]),_:1})]),_:1})])])]),_:1}),q(Jt,{modelValue:l.value,"onUpdate:modelValue":y[1]||(y[1]=g=>l.value=g)},{default:L(()=>[q(Zt,null,{default:L(()=>[q(at,null,{default:L(()=>[Ia]),_:1}),q(at,{class:"q-pt-none"},{default:L(()=>[(H(!0),Y(se,null,ke(i.value,g=>(H(),Y("div",{key:g.name},[O("div",null,[O("label",Ta,ye(g.name+":"),1)]),g.type==="string"?(H(),Y("div",Ra,[te(O("textarea",{id:"settings-"+g.name,"onUpdate:modelValue":V=>g.value=V},null,8,Pa),[[Fe,g.value]])])):Je("",!0),g.type==="select"?(H(),Y("div",Oa,[te(O("select",{"onUpdate:modelValue":V=>g.value=V},[(H(!0),Y(se,null,ke(N(g.name),V=>(H(),Y("option",{key:"engine-"+V,value:V},ye(V),9,La))),128))],8,Da),[[Ge,g.value]])])):Je("",!0)]))),128))]),_:1}),q(la,{align:"right"},{default:L(()=>[te(q(G,{flat:"",color:"primary",label:"Save",onClick:y[0]||(y[0]=g=>$())},null,512),[[lt]]),te(q(G,{flat:"",color:"primary",label:"Close"},null,512),[[lt]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});var tl=Nt(Fa,[["__scopeId","data-v-38334ee1"]]);export{tl as default};