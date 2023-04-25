import{u as Qe,a as gt,c as ht,b as yt,g as Ht,h as Lt,i as Dt,v as rt,j as Kt,k as $t,l as Nt,m as jt,n as Qt,o as Wt,p as Ut,q as Xt,r as Yt,G as Gt,H as Jt,s as st,I as ct,t as Zt,x as dt,J as el,y as tl,d as ll,K as ul,C as nl,f as ft,A as ol,Q as al,z as il,e as rl}from"./position-engine.45fe186d.js";import{c as Te,o as sl,p as cl,w as dl,f as pe,r as fl,R as vl,h as ml,l as Sl,b as gl}from"./QBtn.22a958d1.js";import{c as bt,d as wt,u as hl,a as yl}from"./utils.e52f91ac.js";import{c as v,h as k,g as Pe,I as se,r as T,w as ce,H as bl,T as wl,a as We,n as Cl,U as Vl,a2 as kl,W as xl,X as ql,b as re,V as Al,a8 as Ol,J as Ne,a9 as Oe,D as zl,G as ke,K as Fl}from"./index.1b87fe24.js";import{g as Ml}from"./scroll.05fc905d.js";var Il=Te({name:"QField",inheritAttrs:!1,props:Qe,emits:gt,setup(){return ht(yt())}});const Bl={xs:8,sm:10,md:14,lg:20,xl:24};var _l=Te({name:"QChip",props:{...bt,...sl,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:r}){const{proxy:{$q:h}}=Pe(),x=wt(e,h),i=cl(e,Bl),F=v(()=>e.selected===!0||e.icon!==void 0),y=v(()=>e.selected===!0?e.iconSelected||h.iconSet.chip.selected:e.icon),b=v(()=>e.iconRemove||h.iconSet.chip.remove),M=v(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=v(()=>{const V=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(V?` text-${V} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(M.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(x.value===!0?" q-chip--dark q-dark":"")}),g=v(()=>{const V=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...V,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||h.lang.label.remove};return{chip:V,remove:D}});function q(V){V.keyCode===13&&w(V)}function w(V){e.disable||(r("update:selected",!e.selected),r("click",V))}function H(V){(V.keyCode===void 0||V.keyCode===13)&&(se(V),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function _(){const V=[];M.value===!0&&V.push(k("div",{class:"q-focus-helper"})),F.value===!0&&V.push(k(pe,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const D=e.label!==void 0?[k("div",{class:"ellipsis"},[e.label])]:void 0;return V.push(k("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},fl(s.default,D))),e.iconRight&&V.push(k(pe,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&V.push(k(pe,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:b.value,...g.value.remove,onClick:H,onKeyup:H})),V}return()=>{if(e.modelValue===!1)return;const V={class:c.value,style:i.value};return M.value===!0&&Object.assign(V,g.value.chip,{onClick:w,onKeyup:q}),dl("div",V,_(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[vl,e.ripple]])}}}),pl=Te({name:"QMenu",inheritAttrs:!1,props:{...Ht,...Lt,...bt,...Dt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:rt},self:{type:String,validator:rt},offset:{type:Array,validator:Kt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...$t,"click","escapeKey"],setup(e,{slots:s,emit:r,attrs:h}){let x=null,i,F,y;const b=Pe(),{proxy:M}=b,{$q:c}=M,g=T(null),q=T(!1),w=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),H=wt(e,c),{registerTick:_,removeTick:V}=Nt(),{registerTimeout:D}=jt(),{transitionProps:L,transitionStyle:W}=Qt(e),{localScrollTarget:I,changeScrollEvent:B,unconfigureScrollTarget:U}=Wt(e,S),{anchorEl:Q,canShow:le}=Ut({showing:q}),{hide:ue}=Xt({showing:q,canShow:le,handleShow:a,handleHide:n,hideOnRouteChange:w,processOnMount:!0}),{showPortal:Y,hidePortal:N,renderPortal:ne}=Yt(b,g,P,"menu"),ee={anchorEl:Q,innerRef:g,onClickOutside(l){if(e.persistent!==!0&&q.value===!0)return ue(l),(l.type==="touchstart"||l.target.classList.contains("q-dialog__backdrop"))&&se(l),!0}},oe=v(()=>dt(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),te=v(()=>e.cover===!0?oe.value:dt(e.self||"top start",c.lang.rtl)),G=v(()=>(e.square===!0?" q-menu--square":"")+(H.value===!0?" q-menu--dark q-dark":"")),Se=v(()=>e.autoClose===!0?{onClick:O}:{}),ae=v(()=>q.value===!0&&e.persistent!==!0);ce(ae,l=>{l===!0?(el(C),tl(ee)):(ct(C),st(ee))});function J(){ll(()=>{let l=g.value;l&&l.contains(document.activeElement)!==!0&&(l=l.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||l.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||l.querySelector("[autofocus], [data-autofocus]")||l,l.focus({preventScroll:!0}))})}function a(l){if(x=e.noRefocus===!1?document.activeElement:null,Gt(E),Y(),S(),i=void 0,l!==void 0&&(e.touchPosition||e.contextMenu)){const R=bl(l);if(R.left!==void 0){const{top:ie,left:de}=Q.value.getBoundingClientRect();i={left:R.left-de,top:R.top-ie}}}F===void 0&&(F=ce(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,f)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{f(),e.noFocus!==!0&&J()}),D(()=>{c.platform.is.ios===!0&&(y=e.autoClose,g.value.click()),f(),Y(!0),r("show",l)},e.transitionDuration)}function n(l){V(),N(),d(!0),x!==null&&(l===void 0||l.qClickOutside!==!0)&&(((l&&l.type.indexOf("key")===0?x.closest('[tabindex]:not([tabindex^="-"])'):void 0)||x).focus(),x=null),D(()=>{N(!0),r("hide",l)},e.transitionDuration)}function d(l){i=void 0,F!==void 0&&(F(),F=void 0),(l===!0||q.value===!0)&&(Jt(E),U(),st(ee),ct(C)),l!==!0&&(x=null)}function S(){(Q.value!==null||e.scrollTarget!==void 0)&&(I.value=Ml(Q.value,e.scrollTarget),B(I.value,f))}function O(l){y!==!0?(ul(M,l),r("click",l)):y=!1}function E(l){ae.value===!0&&e.noFocus!==!0&&Sl(g.value,l.target)!==!0&&J()}function C(l){r("escapeKey"),ue(l)}function f(){const l=g.value;l===null||Q.value===null||Zt({el:l,offset:e.offset,anchorEl:Q.value,anchorOrigin:oe.value,selfOrigin:te.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function P(){return k(wl,L.value,()=>q.value===!0?k("div",{role:"menu",...h,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+G.value,h.class],style:[h.style,W.value],...Se.value},ml(s.default)):null)}return We(d),Object.assign(M,{focus:J,updatePosition:f}),ne}});let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const s=document.createElement("div");Object.assign(s.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(s),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const X=1e3,El=["start","center","end","start-force","center-force","end-force"],Ct=Array.prototype.filter,Tl=window.getComputedStyle(document.body).overflowAnchor===void 0?Cl:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];Ct.call(r,x=>x.dataset&&x.dataset.qVsAnchor!==void 0).forEach(x=>{delete x.dataset.qVsAnchor});const h=r[s];h&&h.dataset&&(h.dataset.qVsAnchor="")}))};function xe(e,s){return e+s}function je(e,s,r,h,x,i,F,y){const b=e===window?document.scrollingElement||document.documentElement:e,M=x===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-y,scrollMaxSize:0,offsetStart:-F,offsetEnd:-y};if(x===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=b.scrollLeft,c.scrollViewSize+=b.clientWidth),c.scrollMaxSize=b.scrollWidth,i===!0&&(c.scrollStart=(Ee===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=b.scrollTop,c.scrollViewSize+=b.clientHeight),c.scrollMaxSize=b.scrollHeight),r!==null)for(let g=r.previousElementSibling;g!==null;g=g.previousElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=g[M]);if(h!==null)for(let g=h.nextElementSibling;g!==null;g=g.nextElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=g[M]);if(s!==e){const g=b.getBoundingClientRect(),q=s.getBoundingClientRect();x===!0?(c.offsetStart+=q.left-g.left,c.offsetEnd-=q.width):(c.offsetStart+=q.top-g.top,c.offsetEnd-=q.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function vt(e,s,r,h){s==="end"&&(s=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(h===!0&&(s=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):r===!0?(h===!0&&(s=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function ze(e,s,r,h){if(r>=h)return 0;const x=s.length,i=Math.floor(r/X),F=Math.floor((h-1)/X)+1;let y=e.slice(i,F).reduce(xe,0);return r%X!==0&&(y-=s.slice(i*X,r).reduce(xe,0)),h%X!==0&&h!==x&&(y-=s.slice(h,F*X).reduce(xe,0)),y}const Vt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Ql=Object.keys(Vt),Pl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Vt};function Rl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:r,virtualScrollItemSizeComputed:h}){const x=Pe(),{props:i,emit:F,proxy:y}=x,{$q:b}=y;let M,c,g,q=[],w;const H=T(0),_=T(0),V=T({}),D=T(null),L=T(null),W=T(null),I=T({from:0,to:0}),B=v(()=>i.tableColspan!==void 0?i.tableColspan:100);h===void 0&&(h=v(()=>i.virtualScrollItemSize));const U=v(()=>h.value+";"+i.virtualScrollHorizontal),Q=v(()=>U.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ce(Q,()=>{G()}),ce(U,le);function le(){te(c,!0)}function ue(n){te(n===void 0?c:n)}function Y(n,d){const S=s();if(S==null||S.nodeType===8)return;const O=je(S,r(),D.value,L.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);g!==O.scrollViewSize&&G(O.scrollViewSize),ne(S,O,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,El.indexOf(d)>-1?d:c>-1&&n>c?"end":"start")}function N(){const n=s();if(n==null||n.nodeType===8)return;const d=je(n,r(),D.value,L.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),S=e.value-1,O=d.scrollMaxSize-d.offsetStart-d.offsetEnd-_.value;if(M===d.scrollStart)return;if(d.scrollMaxSize<=0){ne(n,d,0,0);return}g!==d.scrollViewSize&&G(d.scrollViewSize),ee(I.value.from);const E=Math.floor(d.scrollMaxSize-Math.max(d.scrollViewSize,d.offsetEnd)-Math.min(w[S],d.scrollViewSize/2));if(E>0&&Math.ceil(d.scrollStart)>=E){ne(n,d,S,d.scrollMaxSize-d.offsetEnd-q.reduce(xe,0));return}let C=0,f=d.scrollStart-d.offsetStart,P=f;if(f<=O&&f+d.scrollViewSize>=H.value)f-=H.value,C=I.value.from,P=f;else for(let l=0;f>=q[l]&&C<S;l++)f-=q[l],C+=X;for(;f>0&&C<S;)f-=w[C],f>-d.scrollViewSize?(C++,P=f):P=w[C]+f;ne(n,d,C,P)}function ne(n,d,S,O,E){const C=typeof E=="string"&&E.indexOf("-force")>-1,f=C===!0?E.replace("-force",""):E,P=f!==void 0?f:"start";let l=Math.max(0,S-V.value[P]),R=l+V.value.total;R>e.value&&(R=e.value,l=Math.max(0,R-V.value.total)),M=d.scrollStart;const ie=l!==I.value.from||R!==I.value.to;if(ie===!1&&f===void 0){ae(S);return}const{activeElement:de}=document,Z=W.value;ie===!0&&Z!==null&&Z!==de&&Z.contains(de)===!0&&(Z.addEventListener("focusout",oe),setTimeout(()=>{Z!==null&&Z.removeEventListener("focusout",oe)})),Tl(Z,S-l);const Fe=f!==void 0?w.slice(l,S).reduce(xe,0):0;if(ie===!0){const fe=R>=I.value.from&&l<=I.value.to?I.value.to:R;I.value={from:l,to:fe},H.value=ze(q,w,0,l),_.value=ze(q,w,R,e.value),requestAnimationFrame(()=>{I.value.to!==R&&M===d.scrollStart&&(I.value={from:I.value.from,to:R},_.value=ze(q,w,R,e.value))})}requestAnimationFrame(()=>{if(M!==d.scrollStart)return;ie===!0&&ee(l);const fe=w.slice(l,S).reduce(xe,0),ge=fe+d.offsetStart+H.value,Me=ge+w[S];let qe=ge+O;if(f!==void 0){const Re=fe-Fe,$=d.scrollStart+Re;qe=C!==!0&&$<ge&&Me<$+d.scrollViewSize?$:f==="end"?Me-d.scrollViewSize:ge-(f==="start"?0:Math.round((d.scrollViewSize-w[S])/2))}M=qe,vt(n,qe,i.virtualScrollHorizontal,b.lang.rtl),ae(S)})}function ee(n){const d=W.value;if(d){const S=Ct.call(d.children,l=>l.classList&&l.classList.contains("q-virtual-scroll--skip")===!1),O=S.length,E=i.virtualScrollHorizontal===!0?l=>l.getBoundingClientRect().width:l=>l.offsetHeight;let C=n,f,P;for(let l=0;l<O;){for(f=E(S[l]),l++;l<O&&S[l].classList.contains("q-virtual-scroll--with-prev")===!0;)f+=E(S[l]),l++;P=f-w[C],P!==0&&(w[C]+=P,q[Math.floor(C/X)]+=P),C++}}}function oe(){W.value!==null&&W.value!==void 0&&W.value.focus()}function te(n,d){const S=1*h.value;(d===!0||Array.isArray(w)===!1)&&(w=[]);const O=w.length;w.length=e.value;for(let C=e.value-1;C>=O;C--)w[C]=S;const E=Math.floor((e.value-1)/X);q=[];for(let C=0;C<=E;C++){let f=0;const P=Math.min((C+1)*X,e.value);for(let l=C*X;l<P;l++)f+=w[l];q.push(f)}c=-1,M=void 0,H.value=ze(q,w,0,I.value.from),_.value=ze(q,w,I.value.to,e.value),n>=0?(ee(I.value.from),re(()=>{Y(n)})):J()}function G(n){if(n===void 0&&typeof window!="undefined"){const f=s();f!=null&&f.nodeType!==8&&(n=je(f,r(),D.value,L.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}g=n;const d=parseFloat(i.virtualScrollSliceRatioBefore)||0,S=parseFloat(i.virtualScrollSliceRatioAfter)||0,O=1+d+S,E=n===void 0||n<=0?1:Math.ceil(n/h.value),C=Math.max(1,E,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/O));V.value={total:Math.ceil(C*O),start:Math.ceil(C*d),center:Math.ceil(C*(.5+d)),end:Math.ceil(C*(1+d)),view:E}}function Se(n,d){const S=i.virtualScrollHorizontal===!0?"width":"height",O={["--q-virtual-scroll-item-"+S]:h.value+"px"};return[n==="tbody"?k(n,{class:"q-virtual-scroll__padding",key:"before",ref:D},[k("tr",[k("td",{style:{[S]:`${H.value}px`,...O},colspan:B.value})])]):k(n,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[S]:`${H.value}px`,...O}}),k(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},d.flat()),n==="tbody"?k(n,{class:"q-virtual-scroll__padding",key:"after",ref:L},[k("tr",[k("td",{style:{[S]:`${_.value}px`,...O},colspan:B.value})])]):k(n,{class:"q-virtual-scroll__padding",key:"after",ref:L,style:{[S]:`${_.value}px`,...O}})]}function ae(n){c!==n&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:n,from:I.value.from,to:I.value.to-1,direction:n<c?"decrease":"increase",ref:y}),c=n)}G();const J=Vl(N,b.platform.is.ios===!0?120:35);kl(()=>{G()});let a=!1;return xl(()=>{a=!0}),ql(()=>{if(a!==!0)return;const n=s();M!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?vt(n,M,i.virtualScrollHorizontal,b.lang.rtl):Y(c)}),We(()=>{J.cancel()}),Object.assign(y,{scrollTo:Y,reset:le,refresh:ue}),{virtualScrollSliceRange:I,virtualScrollSliceSizeComputed:V,setVirtualScrollSize:G,onVirtualScrollEvt:J,localResetVirtualScroll:te,padVirtualScroll:Se,scrollTo:Y,reset:le,refresh:ue}}function Wl(e,s,r){return r<=s?s:Math.min(r,Math.max(s,e))}function mt(e,s,r){if(r<=s)return s;const h=r-s+1;let x=s+(e-s)%h;return x<s&&(x=h+x),x===0?0:x}const St=e=>["add","add-unique","toggle"].includes(e),Hl=".*+?^${}()|[]\\",Ll=Object.keys(Qe);var Ul=Te({name:"QSelect",inheritAttrs:!1,props:{...Pl,...hl,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:St},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:s,emit:r}){const{proxy:h}=Pe(),{$q:x}=h,i=T(!1),F=T(!1),y=T(-1),b=T(""),M=T(!1),c=T(!1);let g=null,q,w,H,_=null,V,D,L,W;const I=T(null),B=T(null),U=T(null),Q=T(null),le=T(null),ue=yl(e),Y=rl(ut),N=v(()=>Array.isArray(e.options)?e.options.length:0),ne=v(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ee,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:te,padVirtualScroll:G,onVirtualScrollEvt:Se,scrollTo:ae,setVirtualScrollSize:J}=Rl({virtualScrollLength:N,getVirtualScrollTarget:At,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:ne}),a=yt(),n=v(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,o=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&q!==void 0?q:[],m=o.map(z=>qt(z,u));return e.modelValue===null&&t===!0?m.filter(z=>z!==null):m}return o}),d=v(()=>{const t={};return Ll.forEach(o=>{const u=e[o];u!==void 0&&(t[o]=u)}),t}),S=v(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),O=v(()=>ft(n.value)),E=v(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=v(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),f=v(()=>N.value===0),P=v(()=>n.value.map(t=>j.value(t)).join(", ")),l=v(()=>e.displayValue!==void 0?e.displayValue:P.value),R=v(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=v(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(R.value))),de=v(()=>a.focused.value===!0?e.tabindex:-1),Z=v(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${y.value}`),t}),Fe=v(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),fe=v(()=>n.value.map((t,o)=>({index:o,opt:t,html:R.value(t),selected:!0,removeAtIndex:xt,toggleOption:ve,tabindex:de.value}))),ge=v(()=>{if(N.value===0)return[];const{from:t,to:o}=ee.value;return e.options.slice(t,o).map((u,m)=>{const z=he.value(u)===!0,A=t+m,p={clickable:!0,active:!1,activeClass:Re.value,manualFocus:!0,focused:!1,disable:z,tabindex:-1,dense:e.optionsDense,dark:S.value,role:"option",id:`${a.targetUid.value}_${A}`,onClick:()=>{ve(u)}};return z!==!0&&(De(u)===!0&&(p.active=!0),y.value===A&&(p.focused=!0),p["aria-selected"]=p.active===!0?"true":"false",x.platform.is.desktop===!0&&(p.onMousemove=()=>{i.value===!0&&ye(A)})),{index:A,opt:u,html:R.value(u),label:j.value(u),selected:p.active,focused:p.focused,toggleOption:ve,setOptionIndex:ye,itemProps:p}})}),Me=v(()=>e.dropdownIcon!==void 0?e.dropdownIcon:x.iconSet.arrow.dropdown),qe=v(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Re=v(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),$=v(()=>Le(e.optionValue,"value")),j=v(()=>Le(e.optionLabel,"label")),he=v(()=>Le(e.optionDisable,"disable")),Ie=v(()=>n.value.map(t=>$.value(t))),kt=v(()=>{const t={onInput:ut,onChange:Y,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(o){w===!0&&ke(o)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Y,t});ce(n,t=>{q=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||O.value!==!0)&&(H!==!0&&Ve(),(F.value===!0||i.value===!0)&&be(""))},{immediate:!0}),ce(()=>e.fillInput,Ve),ce(i,Ke),ce(N,Rt);function Ue(t){return e.emitValue===!0?$.value(t):t}function He(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const o=e.modelValue.slice();r("remove",{index:t,value:o.splice(t,1)[0]}),r("update:modelValue",o)}else r("update:modelValue",null)}function xt(t){He(t),a.focus()}function Xe(t,o){const u=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&Ae(j.value(t),!0,!0),r("update:modelValue",u);return}if(n.value.length===0){r("add",{index:0,value:u}),r("update:modelValue",e.multiple===!0?[u]:u);return}if(o===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();r("add",{index:m.length,value:u}),m.push(u),r("update:modelValue",m)}function ve(t,o){if(a.editable.value!==!0||t===void 0||he.value(t)===!0)return;const u=$.value(t);if(e.multiple!==!0){o!==!0&&(Ae(e.fillInput===!0?j.value(t):"",!0,!0),me()),B.value!==null&&B.value.focus(),(n.value.length===0||Oe($.value(n.value[0]),u)!==!0)&&r("update:modelValue",e.emitValue===!0?u:t);return}if((w!==!0||M.value===!0)&&a.focus(),Ye(),n.value.length===0){const A=e.emitValue===!0?u:t;r("add",{index:0,value:A}),r("update:modelValue",e.multiple===!0?[A]:A);return}const m=e.modelValue.slice(),z=Ie.value.findIndex(A=>Oe(A,u));if(z>-1)r("remove",{index:z,value:m.splice(z,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const A=e.emitValue===!0?u:t;r("add",{index:m.length,value:A}),m.push(A)}r("update:modelValue",m)}function ye(t){if(x.platform.is.desktop!==!0)return;const o=t>-1&&t<N.value?t:-1;y.value!==o&&(y.value=o)}function Be(t=1,o){if(i.value===!0){let u=y.value;do u=mt(u+t,-1,N.value-1);while(u!==-1&&u!==y.value&&he.value(e.options[u])===!0);y.value!==u&&(ye(u),ae(u),o!==!0&&e.useInput===!0&&e.fillInput===!0&&_e(u>=0?j.value(e.options[u]):V))}}function qt(t,o){const u=m=>Oe($.value(m),t);return e.options.find(u)||o.find(u)||t}function Le(t,o){const u=t!==void 0?t:o;return typeof u=="function"?u:m=>m!==null&&typeof m=="object"&&u in m?m[u]:m}function De(t){const o=$.value(t);return Ie.value.find(u=>Oe(u,o))!==void 0}function Ye(t){e.useInput===!0&&B.value!==null&&(t===void 0||B.value===t.target&&t.target.value===P.value)&&B.value.select()}function Ge(t){zl(t,27)===!0&&i.value===!0&&(ke(t),me(),Ve()),r("keyup",t)}function Je(t){const{value:o}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",g!==null&&(clearTimeout(g),g=null),Ve(),typeof o=="string"&&o.length>0){const u=o.toLocaleLowerCase(),m=A=>{const p=e.options.find(K=>A.value(K).toLocaleLowerCase()===u);return p===void 0?!1:(n.value.indexOf(p)===-1?ve(p):me(),!0)},z=A=>{m($)!==!0&&(m(j)===!0||A===!0||be(o,!0,()=>z(!0)))};z()}else a.clearValue(t)}function Ze(t){r("keypress",t)}function et(t){if(r("keydown",t),Fl(t)===!0)return;const o=b.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||o===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&u===!1){we();return}if(t.target===void 0||t.target.id!==a.targetUid.value)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&i.value===!1){se(t),Ce();return}if(t.keyCode===8&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(se(t),y.value=-1,Be(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(se(t),y.value=Math.max(-1,Math.min(N.value,y.value+(t.keyCode===33?-1:1)*oe.value.view)),Be(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(se(t),Be(t.keyCode===38?-1:1,e.multiple));const m=N.value;if((L===void 0||W<Date.now())&&(L=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length>0)){i.value!==!0&&Ce(t);const z=t.key.toLocaleLowerCase(),A=L.length===1&&L[0]===z;W=Date.now()+1500,A===!1&&(se(t),L+=z);const p=new RegExp("^"+L.split("").map($e=>Hl.indexOf($e)>-1?"\\"+$e:$e).join(".*"),"i");let K=y.value;if(A===!0||K<0||p.test(j.value(e.options[K]))!==!0)do K=mt(K+1,-1,m-1);while(K!==y.value&&(he.value(e.options[K])===!0||p.test(j.value(e.options[K]))!==!0));y.value!==K&&re(()=>{ye(K),ae(K),K>=0&&e.useInput===!0&&e.fillInput===!0&&_e(j.value(e.options[K]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&se(t),y.value>-1&&y.value<m){ve(e.options[y.value]);return}if(o===!0){const z=(A,p)=>{if(p){if(St(p)!==!0)return}else p=e.newValueMode;if(A==null)return;Ae("",e.multiple!==!0,!0),(p==="toggle"?ve:Xe)(A,p==="add-unique"),e.multiple!==!0&&(B.value!==null&&B.value.focus(),me())};if(e.onNewValue!==void 0?r("newValue",b.value,z):z(b.value),e.multiple!==!0)return}i.value===!0?we():a.innerLoading.value!==!0&&Ce()}}function tt(){return w===!0?le.value:U.value!==null&&U.value.contentEl!==null?U.value.contentEl:void 0}function At(){return tt()}function Ot(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?fe.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?fe.value.map((t,o)=>k(_l,{key:"option-"+o,removable:a.editable.value===!0&&he.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:de.value,onRemove(){t.removeAtIndex(o)}},()=>k("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:j.value(t.opt)}))):[k("span",{[ie.value===!0?"innerHTML":"textContent"]:l.value})]}function lt(){if(f.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:b.value}):void 0;const t=s.option!==void 0?s.option:u=>k(il,{key:u.index,...u.itemProps},()=>k(ol,()=>k(al,()=>k("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let o=G("div",ge.value.map(t));return s["before-options"]!==void 0&&(o=s["before-options"]().concat(o)),gl(s["after-options"],o)}function zt(t,o){const u=o===!0?{...Z.value,...a.splitAttrs.attributes.value}:void 0,m={ref:o===!0?B:void 0,key:"i_t",class:E.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...u,id:o===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...kt.value};return t!==!0&&w===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),k("input",m)}function ut(t){g!==null&&(clearTimeout(g),g=null),!(t&&t.target&&t.target.qComposing===!0)&&(_e(t.target.value||""),H=!0,V=b.value,a.focused.value!==!0&&(w!==!0||M.value===!0)&&a.focus(),e.onFilter!==void 0&&(g=setTimeout(()=>{g=null,be(b.value)},e.inputDebounce)))}function _e(t){b.value!==t&&(b.value=t,r("inputValue",t))}function Ae(t,o,u){H=u!==!0,e.useInput===!0&&(_e(t),(o===!0||u!==!0)&&(V=t),o!==!0&&be(t))}function be(t,o,u){if(e.onFilter===void 0||o!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?r("filterAbort"):(a.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&H!==!0&&t===j.value(n.value[0])&&(t="");const m=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);_!==null&&clearTimeout(_),_=m,r("filter",t,(z,A)=>{(o===!0||a.focused.value===!0)&&_===m&&(clearTimeout(_),typeof z=="function"&&z(),c.value=!1,re(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(o===!0?i.value===!0&&me():i.value===!0?Ke(!0):i.value=!0),typeof A=="function"&&re(()=>{A(h)}),typeof u=="function"&&re(()=>{u(h)})}))},()=>{a.focused.value===!0&&_===m&&(clearTimeout(_),a.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function Ft(){return k(pl,{ref:U,class:C.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&f.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:S.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Fe.value,onScrollPassive:Se,onBeforeShow:ot,onBeforeHide:Mt,onShow:It},lt)}function Mt(t){at(t),we()}function It(){J()}function Bt(t){ke(t),B.value!==null&&B.value.focus(),M.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function _t(t){ke(t),re(()=>{M.value=!1})}function pt(){const t=[k(Il,{class:`col-auto ${a.fieldClass.value}`,...d.value,for:a.targetUid.value,dark:S.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:b.value.length>0,...a.splitAttrs.listeners.value,onFocus:Bt,onBlur:_t},{...s,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(k("div",{ref:le,class:C.value+" scroll",style:e.popupContentStyle,...Fe.value,onClick:Ne,onScrollPassive:Se},lt())),k(nl,{ref:Q,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:D,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ot,onBeforeHide:Et,onHide:Tt,onShow:Pt},()=>k("div",{class:"q-select__dialog"+(S.value===!0?" q-select__dialog--dark q-dark":"")+(M.value===!0?" q-select__dialog--focused":"")},t))}function Et(t){at(t),Q.value!==null&&Q.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function Tt(t){me(),a.focused.value===!1&&r("blur",t),Ve()}function Pt(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&B.value!==null&&B.value!==t&&B.value.focus(),J()}function we(){F.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),a.focused.value===!1&&(_!==null&&(clearTimeout(_),_=null),a.innerLoading.value===!0&&(r("filterAbort"),a.innerLoading.value=!1,c.value=!1)))}function Ce(t){a.editable.value===!0&&(w===!0?(a.onControlFocusin(t),F.value=!0,re(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?be(b.value):(f.value!==!0||s["no-option"]!==void 0)&&(i.value=!0))}function me(){F.value=!1,we()}function Ve(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&j.value(n.value[0])||"",!0,!0)}function Ke(t){let o=-1;if(t===!0){if(n.value.length>0){const u=$.value(n.value[0]);o=e.options.findIndex(m=>Oe($.value(m),u))}te(o)}ye(o)}function Rt(t,o){i.value===!0&&a.innerLoading.value===!1&&(te(-1,!0),re(()=>{i.value===!0&&a.innerLoading.value===!1&&(t>o?te():Ke(!0))}))}function nt(){F.value===!1&&U.value!==null&&U.value.updatePosition()}function ot(t){t!==void 0&&ke(t),r("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function at(t){t!==void 0&&ke(t),r("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function it(){w=x.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||f.value===!1:!0),D=x.platform.is.ios===!0&&w===!0&&e.useInput===!0?"fade":e.transitionShow}return Al(it),Ol(nt),it(),We(()=>{g!==null&&clearTimeout(g)}),Object.assign(h,{showPopup:Ce,hidePopup:me,removeAtIndex:He,add:Xe,toggleOption:ve,getOptionIndex:()=>y.value,setOptionIndex:ye,moveOptionSelection:Be,filter:be,updateMenuPosition:nt,updateInputValue:Ae,isOptionSelected:De,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>he.value.apply(null,t)===!0,getOptionValue:(...t)=>$.value.apply(null,t),getOptionLabel:(...t)=>j.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:v(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:I,targetRef:B,hasValue:O,showPopup:Ce,floatingLabel:v(()=>e.hideSelected!==!0&&O.value===!0||typeof b.value=="number"||b.value.length>0||ft(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(F.value===!0||f.value!==!0||s["no-option"]!==void 0))return w===!0?pt():Ft();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{Ve(),we()})},onClick(t){if(Ne(t),w!==!0&&i.value===!0){we(),B.value!==null&&B.value.focus();return}Ce(t)}},getControl:t=>{const o=Ot(),u=t===!0||F.value!==!0||w!==!0;if(e.useInput===!0)o.push(zt(t,u));else if(a.editable.value===!0){const z=u===!0?Z.value:void 0;o.push(k("input",{ref:u===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?a.targetUid.value:void 0,value:l.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...z,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&o.push(k("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(ue.value!==void 0&&e.disable!==!0&&Ie.value.length>0){const z=Ie.value.map(A=>k("option",{value:A,selected:!0}));o.push(k("select",{class:"hidden",name:ue.value,multiple:e.multiple},z))}const m=e.useInput===!0||u!==!0?void 0:a.splitAttrs.attributes.value;return k("div",{class:"q-field__native row items-center",...m,...a.splitAttrs.listeners.value},o)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[k(pe,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Me.value})]:null}),ht(a)}});export{pl as Q,Rl as a,Wl as b,Ql as c,Ul as d,Pl as u};
