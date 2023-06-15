import{a5 as R,r as z,D as $,K as M,b as q,E as W,w as p,o as P,a as k,g as V,F as I,l as w,Z as O}from"./index.7a0cf8c5.js";import{p as C}from"./ClosePopup.f5dbd6f3.js";import{c as F}from"./scroll.fe70ef14.js";let b,v=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const K=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const o=new Uint8Array(n);return e.getRandomValues(o),o}}return n=>{const o=[];for(let t=n;t>0;t--)o.push(Math.floor(Math.random()*256));return o}})(),L=4096;function Q(){(b===void 0||v+16>L)&&(v=0,b=K(L));const e=Array.prototype.slice.call(b,v,v+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}function j(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),R.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const _={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function G({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:s}=V(),i=z(null);let d=null;function u(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){$(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),M(a),q(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:M,mobileTouch(a){if(r.mobileCleanup(a),u(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const h=a.target;W(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&a!==void 0&&j()}}),o=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],W(r,"anchor",h)});function c(){I(r,"anchor")}function B(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function E(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)B(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return p(()=>t.contextMenu,a=>{i.value!==null&&(c(),o(a))}),p(()=>t.target,()=>{i.value!==null&&c(),E()}),p(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?c():o())}),P(()=>{E(),n!==!0&&t.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),k(()=>{d!==null&&clearTimeout(d),c()}),{anchorEl:i,canShow:u,anchorEvents:r}}function J(e,n){const o=z(null);let t;function l(d,u){const r=`${u!==void 0?"add":"remove"}EventListener`,c=u!==void 0?u:t;d!==window&&d[r]("scroll",c,w.passive),window[r]("scroll",c,w.passive),t=u}function s(){o.value!==null&&(l(o.value),o.value=null)}const i=p(()=>e.noParentEvent,()=>{o.value!==null&&(s(),n())});return k(i),{localScrollTarget:o,unconfigureScrollTarget:s,changeScrollEvent:l}}const{notPassiveCapture:x}=w,m=[];function g(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=C.length-1;for(;o>=0;){const t=C[o].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=m.length-1;t>=0;t--){const l=m[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function ee(e){m.push(e),m.length===1&&(document.addEventListener("mousedown",g,x),document.addEventListener("touchstart",g,x))}function te(e){const n=m.findIndex(o=>o===e);n>-1&&(m.splice(n,1),m.length===0&&(document.removeEventListener("mousedown",g,x),document.removeEventListener("touchstart",g,x)))}let T,S;function ne(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ie(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const H={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{H[`${e}#ltr`]=e,H[`${e}#rtl`]=e});function oe(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:H[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function N(e,n){let{top:o,left:t,right:l,bottom:s,width:i,height:d}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],s+=n[1],l+=n[0],i+=n[0],d+=n[1]),{top:o,bottom:s,height:d,left:t,right:l,width:i,middle:t+(l-t)/2,center:o+(s-o)/2}}function U(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function D(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function A(e,n,o){return{top:e[o.anchorOrigin.vertical]-n[o.selfOrigin.vertical],left:e[o.anchorOrigin.horizontal]-n[o.selfOrigin.horizontal]}}function le(e){if(O.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:u,offsetTop:r}=window.visualViewport;u!==T&&(d.setProperty("--q-pe-left",u+"px"),T=u),r!==S&&(d.setProperty("--q-pe-top",r+"px"),S=r)}const{scrollLeft:n,scrollTop:o}=e.el,t=e.absoluteOffset===void 0?N(e.anchorEl,e.cover===!0?[0,0]:e.offset):U(e.anchorEl,e.absoluteOffset,e.offset);let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const s=D(e.el);let i=A(t,s,e);if(e.absoluteOffset===void 0||e.offset===void 0)y(i,t,s,e.anchorOrigin,e.selfOrigin);else{const{top:d,left:u}=i;y(i,t,s,e.anchorOrigin,e.selfOrigin);let r=!1;if(i.top!==d){r=!0;const c=2*e.offset[1];t.center=t.top-=c,t.bottom-=c+2}if(i.left!==u){r=!0;const c=2*e.offset[0];t.middle=t.left-=c,t.right-=c+2}r===!0&&(i=A(t,s,e),y(i,t,s,e.anchorOrigin,e.selfOrigin))}l={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(l.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(l.minHeight=l.maxHeight)),i.maxWidth!==void 0&&(l.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function y(e,n,o,t,l){const s=o.bottom,i=o.right,d=F(),u=window.innerHeight-d,r=document.body.clientWidth;if(e.top<0||e.top+s>u)if(l.vertical==="center")e.top=n[t.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(n[t.vertical]>u/2){const c=Math.min(u,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(s,c),e.top=Math.max(0,c-s)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-i):0;else if(n[t.horizontal]>r/2){const c=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,r-e.left)}export{ie as a,J as b,G as c,j as d,ee as e,Q as f,oe as p,te as r,le as s,_ as u,ne as v};