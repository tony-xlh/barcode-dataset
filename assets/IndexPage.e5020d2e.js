var Ve=Object.defineProperty;var Ie=(e,h,p)=>h in e?Ve(e,h,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[h]=p;var ye=(e,h,p)=>(Ie(e,typeof h!="symbol"?h+"":h,p),p);import{u as Ne,a as Ee,b as Te,c as Ae,f as xe,d as Oe,e as De,Q as Z,g as ue,h as ce,i as me,j as ge}from"./QDialog.fc1be9d8.js";import{u as Le,a as Be,l as L,Q as ve,r as $e,B as Qe,g as ze,b as Ue}from"./utils.2154a026.js";import{Q as qe,a as he,b as ie}from"./QPage.c5f9f9a7.js";import{r as O,w as Y,b as le,K as Ke,c as j,a as Ze,o as _e,h as oe,L as Je,g as je,G as pe,d as He,e as ke,f as Ye,q as We,u as Xe,t as J,v as re,x as g,M as q,y as d,z as Q,N as we,O as be,B as H,P as ae,Q as Me,C as Ge,R as et}from"./index.db0cda80.js";import{c as Fe,h as tt,Q as W,R as fe}from"./QBtn.a31f1403.js";import{Q as Ce,a as at,b as nt,J as lt,C as ne}from"./jszip.min.f2c4bcca.js";import"./scroll.3e255381.js";const Se={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},de={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Pe=Object.keys(de);Pe.forEach(e=>{de[e].regex=new RegExp(de[e].pattern)});const ot=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Pe.join("")+"])|(.)","g"),Re=/[.*+?^${}()|[\]\\]/g,S=String.fromCharCode(1),st={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function it(e,h,p,b){let v,k,F,_,B,M;const C=O(null),c=O(f());function N(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Y(()=>e.type+e.autogrow,P),Y(()=>e.mask,l=>{if(l!==void 0)U(c.value,!0);else{const a=D(c.value);P(),e.modelValue!==a&&h("update:modelValue",a)}}),Y(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&U(c.value,!0)}),Y(()=>e.unmaskedValue,()=>{C.value===!0&&U(c.value)});function f(){if(P(),C.value===!0){const l=K(D(e.modelValue));return e.fillMask!==!1?ee(l):l}return e.modelValue}function $(l){if(l<v.length)return v.slice(-l);let a="",r=v;const n=r.indexOf(S);if(n>-1){for(let o=l-r.length;o>0;o--)a+=S;r=r.slice(0,n)+a+r.slice(n)}return r}function P(){if(C.value=e.mask!==void 0&&e.mask.length>0&&N(),C.value===!1){_=void 0,v="",k="";return}const l=Se[e.mask]===void 0?e.mask:Se[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=a.replace(Re,"\\$&"),n=[],o=[],s=[];let i=e.reverseFillMask===!0,u="",m="";l.replace(ot,(w,t,y,T,A)=>{if(T!==void 0){const I=de[T];s.push(I),m=I.negate,i===!0&&(o.push("(?:"+m+"+)?("+I.pattern+"+)?(?:"+m+"+)?("+I.pattern+"+)?"),i=!1),o.push("(?:"+m+"+)?("+I.pattern+")?")}else if(y!==void 0)u="\\"+(y==="\\"?"":y),s.push(y),n.push("([^"+u+"]+)?"+u+"?");else{const I=t!==void 0?t:A;u=I==="\\"?"\\\\\\\\":I.replace(Re,"\\\\$&"),s.push(I),n.push("([^"+u+"]+)?"+u+"?")}});const R=new RegExp("^"+n.join("")+"("+(u===""?".":"[^"+u+"]")+"+)?"+(u===""?"":"["+u+"]*")+"$"),E=o.length-1,x=o.map((w,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+w):t===E?new RegExp("^"+w+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+w));F=s,_=w=>{const t=R.exec(e.reverseFillMask===!0?w:w.slice(0,s.length+1));t!==null&&(w=t.slice(1).join(""));const y=[],T=x.length;for(let A=0,I=w;A<T;A++){const te=x[A].exec(I);if(te===null)break;I=I.slice(te.shift().length),y.push(...te)}return y.length>0?y.join(""):w},v=s.map(w=>typeof w=="string"?w:S).join(""),k=v.split(S).join(a)}function U(l,a,r){const n=b.value,o=n.selectionEnd,s=n.value.length-o,i=D(l);a===!0&&P();const u=K(i),m=e.fillMask!==!1?ee(u):u,R=c.value!==m;n.value!==m&&(n.value=m),R===!0&&(c.value=m),document.activeElement===n&&le(()=>{if(m===k){const x=e.reverseFillMask===!0?k.length:0;n.setSelectionRange(x,x,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const x=n.selectionEnd;let w=o-1;for(let t=B;t<=w&&t<x;t++)v[t]!==S&&w++;V.right(n,w);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const x=e.reverseFillMask===!0?o===0?m.length>u.length?1:0:Math.max(0,m.length-(m===k?0:Math.min(u.length,s)+1))+1:o;n.setSelectionRange(x,x,"forward");return}if(e.reverseFillMask===!0)if(R===!0){const x=Math.max(0,m.length-(m===k?0:Math.min(u.length,s+1)));x===1&&o===1?n.setSelectionRange(x,x,"forward"):V.rightReverse(n,x)}else{const x=m.length-s;n.setSelectionRange(x,x,"backward")}else if(R===!0){const x=Math.max(0,v.indexOf(S),Math.min(u.length,o)-1);V.right(n,x)}else{const x=o-1;V.right(n,x)}});const E=e.unmaskedValue===!0?D(m):m;String(e.modelValue)!==E&&p(E,!0)}function se(l,a,r){const n=K(D(l.value));a=Math.max(0,v.indexOf(S),Math.min(n.length,a)),B=a,l.setSelectionRange(a,r,"forward")}const V={left(l,a){const r=v.slice(a-1).indexOf(S)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(v[n]===S){a=n,r===!0&&a++;break}if(n<0&&v[a]!==void 0&&v[a]!==S)return V.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const r=l.value.length;let n=Math.min(r,a+1);for(;n<=r;n++)if(v[n]===S){a=n;break}else v[n-1]===S&&(a=n);if(n>r&&v[a-1]!==void 0&&v[a-1]!==S)return V.left(l,r);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const r=$(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(r[n-1]===S){a=n;break}else if(r[n]===S&&(a=n,n===0))break;if(n<0&&r[a]!==void 0&&r[a]!==S)return V.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const r=l.value.length,n=$(r),o=n.slice(0,a+1).indexOf(S)===-1;let s=Math.min(r,a+1);for(;s<=r;s++)if(n[s-1]===S){a=s,a>0&&o===!0&&a--;break}if(s>r&&n[a-1]!==void 0&&n[a-1]!==S)return V.leftReverse(l,r);l.setSelectionRange(a,a,"forward")}};function X(l){h("click",l),M=void 0}function G(l){if(h("keydown",l),Ke(l)===!0)return;const a=b.value,r=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(M=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&M===void 0&&(M=a.selectionDirection==="forward"?r:n);const o=V[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),o(a,M===r?n:r),l.shiftKey){const s=a.selectionStart;a.setSelectionRange(Math.min(M,s),Math.max(M,s),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&r===n?(V.left(a,r),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&r===n&&(V.rightReverse(a,n),a.setSelectionRange(r,a.selectionEnd,"forward"))}function K(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return z(l);const a=F;let r=0,n="";for(let o=0;o<a.length;o++){const s=l[r],i=a[o];if(typeof i=="string")n+=i,s===i&&r++;else if(s!==void 0&&i.regex.test(s))n+=i.transform!==void 0?i.transform(s):s,r++;else return n}return n}function z(l){const a=F,r=v.indexOf(S);let n=l.length-1,o="";for(let s=a.length-1;s>=0&&n>-1;s--){const i=a[s];let u=l[n];if(typeof i=="string")o=i+o,u===i&&n--;else if(u!==void 0&&i.regex.test(u))do o=(i.transform!==void 0?i.transform(u):u)+o,n--,u=l[n];while(r===s&&u!==void 0&&i.regex.test(u));else return o}return o}function D(l){return typeof l!="string"||_===void 0?typeof l=="number"?_(""+l):l:_(l)}function ee(l){return k.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?k.slice(0,-l.length)+l:l+k.slice(l.length)}return{innerValue:c,hasMask:C,moveCursorForPaste:se,updateMaskValue:U,onMaskedKeydown:G,onMaskedClick:X}}function rt(e,h){function p(){const b=e.modelValue;try{const v="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(b)===b&&("length"in b?Array.from(b):[b]).forEach(k=>{v.items.add(k)}),{files:v.files}}catch{return{files:void 0}}}return h===!0?j(()=>{if(e.type==="file")return p()}):j(p)}var ut=Fe({name:"QInput",inheritAttrs:!1,props:{...Ne,...st,...Le,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ee,"paste","change","keydown","click","animationend"],setup(e,{emit:h,attrs:p}){const{proxy:b}=je(),{$q:v}=b,k={};let F=NaN,_,B,M=null,C;const c=O(null),N=Be(e),{innerValue:f,hasMask:$,moveCursorForPaste:P,updateMaskValue:U,onMaskedKeydown:se,onMaskedClick:V}=it(e,h,u,c),X=rt(e,!0),G=j(()=>xe(f.value)),K=De(s),z=Te(),D=j(()=>e.type==="textarea"||e.autogrow===!0),ee=j(()=>D.value===!0||["text","search","url","tel","password"].includes(e.type)),l=j(()=>{const t={...z.splitAttrs.listeners.value,onInput:s,onPaste:o,onChange:R,onBlur:E,onFocus:pe};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=K,$.value===!0&&(t.onKeydown=se,t.onClick=V),e.autogrow===!0&&(t.onAnimationend=i),t}),a=j(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:N.value,...z.splitAttrs.attributes.value,id:z.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return D.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});Y(()=>e.type,()=>{c.value&&(c.value.value=e.modelValue)}),Y(()=>e.modelValue,t=>{if($.value===!0){if(B===!0&&(B=!1,String(t)===F))return;U(t)}else f.value!==t&&(f.value=t,e.type==="number"&&k.hasOwnProperty("value")===!0&&(_===!0?_=!1:delete k.value));e.autogrow===!0&&le(m)}),Y(()=>e.autogrow,t=>{t===!0?le(m):c.value!==null&&p.rows>0&&(c.value.style.height="auto")}),Y(()=>e.dense,()=>{e.autogrow===!0&&le(m)});function r(){Oe(()=>{const t=document.activeElement;c.value!==null&&c.value!==t&&(t===null||t.id!==z.targetUid.value)&&c.value.focus({preventScroll:!0})})}function n(){c.value!==null&&c.value.select()}function o(t){if($.value===!0&&e.reverseFillMask!==!0){const y=t.target;P(y,y.selectionStart,y.selectionEnd)}h("paste",t)}function s(t){if(!t||!t.target)return;if(e.type==="file"){h("update:modelValue",t.target.files);return}const y=t.target.value;if(t.target.qComposing===!0){k.value=y;return}if($.value===!0)U(y,!1,t.inputType);else if(u(y),ee.value===!0&&t.target===document.activeElement){const{selectionStart:T,selectionEnd:A}=t.target;T!==void 0&&A!==void 0&&le(()=>{t.target===document.activeElement&&y.indexOf(t.target.value)===0&&t.target.setSelectionRange(T,A)})}e.autogrow===!0&&m()}function i(t){h("animationend",t),m()}function u(t,y){C=()=>{M=null,e.type!=="number"&&k.hasOwnProperty("value")===!0&&delete k.value,e.modelValue!==t&&F!==t&&(F=t,y===!0&&(B=!0),h("update:modelValue",t),le(()=>{F===t&&(F=NaN)})),C=void 0},e.type==="number"&&(_=!0,k.value=t),e.debounce!==void 0?(M!==null&&clearTimeout(M),k.value=t,M=setTimeout(C,e.debounce)):C()}function m(){requestAnimationFrame(()=>{const t=c.value;if(t!==null){const y=t.parentNode.style,{scrollTop:T}=t,{overflowY:A,maxHeight:I}=v.platform.is.firefox===!0?{}:window.getComputedStyle(t),te=A!==void 0&&A!=="scroll";te===!0&&(t.style.overflowY="hidden"),y.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",te===!0&&(t.style.overflowY=parseInt(I,10)<t.scrollHeight?"auto":"hidden"),y.marginBottom="",t.scrollTop=T}})}function R(t){K(t),M!==null&&(clearTimeout(M),M=null),C!==void 0&&C(),h("change",t.target.value)}function E(t){t!==void 0&&pe(t),M!==null&&(clearTimeout(M),M=null),C!==void 0&&C(),_=!1,B=!1,delete k.value,e.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=f.value!==void 0?f.value:"")})}function x(){return k.hasOwnProperty("value")===!0?k.value:f.value!==void 0?f.value:""}Ze(()=>{E()}),_e(()=>{e.autogrow===!0&&m()}),Object.assign(z,{innerValue:f,fieldClass:j(()=>`q-${D.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:j(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:c,emitValue:u,hasValue:G,floatingLabel:j(()=>G.value===!0&&(e.type!=="number"||isNaN(f.value)===!1)||xe(e.displayValue)),getControl:()=>oe(D.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:x()}:X.value}),getShadowControl:()=>oe("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(D.value===!0?"":" text-no-wrap")},[oe("span",{class:"invisible"},x()),oe("span",e.shadowText)])});const w=Ae(z);return Object.assign(b,{focus:r,select:n,getNativeElement:()=>c.value}),Je(b,"nativeEl",()=>c.value),w}});const ct={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function ft(){const{props:e,proxy:{$q:h}}=je(),p=He(Ye,ke);if(p===ke)return console.error("QPageSticky needs to be child of QLayout"),ke;const b=j(()=>{const c=e.position;return{top:c.indexOf("top")>-1,right:c.indexOf("right")>-1,bottom:c.indexOf("bottom")>-1,left:c.indexOf("left")>-1,vertical:c==="top"||c==="bottom",horizontal:c==="left"||c==="right"}}),v=j(()=>p.header.offset),k=j(()=>p.right.offset),F=j(()=>p.footer.offset),_=j(()=>p.left.offset),B=j(()=>{let c=0,N=0;const f=b.value,$=h.lang.rtl===!0?-1:1;f.top===!0&&v.value!==0?N=`${v.value}px`:f.bottom===!0&&F.value!==0&&(N=`${-F.value}px`),f.left===!0&&_.value!==0?c=`${$*_.value}px`:f.right===!0&&k.value!==0&&(c=`${-$*k.value}px`);const P={transform:`translate(${c}, ${N})`};return e.offset&&(P.margin=`${e.offset[1]}px ${e.offset[0]}px`),f.vertical===!0?(_.value!==0&&(P[h.lang.rtl===!0?"right":"left"]=`${_.value}px`),k.value!==0&&(P[h.lang.rtl===!0?"left":"right"]=`${k.value}px`)):f.horizontal===!0&&(v.value!==0&&(P.top=`${v.value}px`),F.value!==0&&(P.bottom=`${F.value}px`)),P}),M=j(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function C(c){const N=tt(c.default);return oe("div",{class:M.value,style:B.value},e.expand===!0?N:[oe("div",N)])}return{$layout:p,getStickyContent:C}}var dt=Fe({name:"QPageSticky",props:ct,setup(e,{slots:h}){const{getStickyContent:p}=ft();return()=>p(h)}});class mt{constructor(h){ye(this,"info");this.info=h}}const gt={class:"q-pa-md",style:{width:"100%"}},vt={class:"dialogs"},ht=q("div",{class:"text-h6"},"New project",-1),kt={class:"text-h6"},wt={key:0},yt={class:"absolute-full flex flex-center"},jt=We({__name:"IndexPage",setup(e){const h=O(!1),p=O(""),b=O([]),v=O(!1),k=O(!1),F=Xe(),_=O([]),B=O(0),M=O(""),C=O(!1),c=O("");let N=-1,f=O(null);_e(async()=>{const o=await L.getItem("projects");o&&(b.value=JSON.parse(o)),$()});const $=async()=>{const s=await(await fetch("./dataset/projects.json")).text();if(s)try{const i=JSON.parse(s);_.value=i}catch(i){console.log(i)}},P=o=>new Date(o).toLocaleString(),U=()=>{p.value="",h.value=!0},se=()=>{if(V(p.value))alert("Project name duplicated. Please use another name.");else{const o=new mt({name:p.value,creationTimestamp:Date.now(),images:[]});b.value.push(o),X()}},V=o=>{for(let s=0;s<b.value.length;s++)if(b.value[s].info.name===o)return!0;return!1},X=async()=>{let o=[];b.value.forEach(s=>{o.push(s)}),await L.setItem("projects",JSON.stringify(o))},G=o=>{N=o,v.value=!0},K=()=>{F.push("/project/"+encodeURIComponent(b.value[N].info.name))},z=async()=>{let o=[];for(let s=0;s<b.value.length;s++){const i=b.value[s];s!=N?o.push(i):await $e(i)}b.value=o,X()},D=async o=>{const i=await(await fetch("./dataset/"+o+"/project_manifest.json")).text(),u=JSON.parse(i);f.value=u,await L.getItem(u.info.name+":results.zip")?C.value=!0:C.value=!1;let R=0;for(let E=0;E<u.info.images.length;E++){const x=u.info.images[E];await L.getItem(u.info.name+":image:"+x)&&(R=R+1)}a(R-1),k.value=!0},ee=async()=>{var i,u;c.value="Downloading...";const o=await fetch("./dataset/"+((i=f.value)==null?void 0:i.info.name)+"/results.zip");c.value="";const s=await o.blob();s.size>0&&(await L.setItem(((u=f.value)==null?void 0:u.info.name)+":results.zip",s),C.value=!0)},l=async()=>{if(f.value)for(let o=0;o<f.value.info.images.length;o++){if(k.value===!1)return;const s=f.value.info.images[o];if(!await L.getItem(f.value.info.name+":image:"+s)){const m=await(await fetch("./dataset/"+f.value.info.name+"/"+s)).blob();if(m.size>0){const R=Qe(m);await L.setItem(f.value.info.name+":image:"+s,R)}}a(o)}},a=o=>{f.value&&(B.value=parseFloat(((o+1)/f.value.info.images.length).toFixed(2)),M.value=o+1+"/"+f.value.info.images.length)},r=async()=>{let o=[];b.value.forEach(s=>{var i;if(s.info.name===((i=f.value)==null?void 0:i.info.name)){alert("The project has already been added.");return}o.push(s)}),await n(),f.value&&o.push(f.value),b.value=o,await L.setItem("projects",JSON.stringify(o))},n=async()=>{var o,s,i,u;if(f.value){const m=await L.getItem(f.value.info.name+":results.zip");if(m){const R=new lt;await R.loadAsync(m);const E=await((o=R.file("detection_result_filenames.json"))==null?void 0:o.async("string"));if(E){const w=JSON.parse(E);for(let t=0;t<w.length;t++){const y=w[t],T=await((s=R.file(y))==null?void 0:s.async("string"));T&&await L.setItem(f.value.info.name+":detectionResult:"+y,T)}await L.setItem(f.value.info.name+":detectionResultFileNamesList",w)}for(let w=0;w<f.value.info.images.length;w++){const t=f.value.info.images[w],y=ze(t)+".txt",T=f.value.info.name+":groundTruth:"+y,A=await((i=R.file(y))==null?void 0:i.async("string"));A&&await L.setItem(T,A)}const x=Ue.getEngines();for(let w=0;w<x.length;w++){const t=x[w],y=await((u=R.file(t+"_settings.json"))==null?void 0:u.async("string"));y&&await L.setItem(f.value.info.name+":settings:"+t,JSON.parse(y))}}}};return(o,s)=>(J(),re(qe,{class:"row justify-evenly"},{default:g(()=>[q("div",gt,[d(me,{bordered:"",separator:""},{default:g(()=>[d(Z,{header:""},{default:g(()=>[Q("Local Projects:")]),_:1}),d(ve,{spaced:""}),(J(!0),we(Me,null,be(b.value,(i,u)=>H((J(),re(ue,{clickable:"",key:i.info.name},{default:g(()=>[d(ce,{onClick:m=>G(u)},{default:g(()=>[d(Z,null,{default:g(()=>[Q(ae(i.info.name),1)]),_:2},1024),d(Z,{caption:"",lines:"2"},{default:g(()=>{var m;return[Q(" Number of Images: "+ae((m=i.info.images)==null?void 0:m.length)+" Creation Time: "+ae(P(i.info.creationTimestamp)),1)]}),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),[[fe]])),128))]),_:1}),d(me,{bordered:"",separator:""},{default:g(()=>[d(Z,{header:""},{default:g(()=>[Q("Remote Projects:")]),_:1}),d(ve,{spaced:""}),(J(!0),we(Me,null,be(_.value,i=>H((J(),re(ue,{clickable:"",key:i},{default:g(()=>[d(ce,{onClick:u=>D(i)},{default:g(()=>[d(Z,null,{default:g(()=>[Q(ae(i),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),[[fe]])),128))]),_:1})]),q("div",vt,[d(ge,{modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=i=>h.value=i)},{default:g(()=>[d(he,null,{default:g(()=>[d(ie,null,{default:g(()=>[ht]),_:1}),d(ie,null,{default:g(()=>[d(ut,{outlined:"",modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=i=>p.value=i),label:"Project Name"},null,8,["modelValue"])]),_:1}),d(Ce,{align:"right"},{default:g(()=>[H(d(W,{flat:"",label:"Cancel",color:"primary"},null,512),[[ne]]),H(d(W,{flat:"",label:"Okay",color:"primary",onClick:se},null,512),[[ne]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),d(ge,{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=i=>v.value=i)},{default:g(()=>[d(he,{style:{width:"300px"}},{default:g(()=>[d(ie,null,{default:g(()=>[d(me,{bordered:"",separator:""},{default:g(()=>[d(Z,{header:""},{default:g(()=>[Q("Actions")]),_:1}),d(ve,{spaced:""}),H((J(),re(ue,{clickable:""},{default:g(()=>[d(ce,{onClick:K},{default:g(()=>[d(Z,null,{default:g(()=>[Q("Open")]),_:1})]),_:1})]),_:1})),[[fe],[ne]]),H((J(),re(ue,{clickable:""},{default:g(()=>[d(ce,{onClick:z},{default:g(()=>[d(Z,null,{default:g(()=>[Q("Delete")]),_:1})]),_:1})]),_:1})),[[fe],[ne]])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),d(ge,{modelValue:k.value,"onUpdate:modelValue":s[3]||(s[3]=i=>k.value=i)},{default:g(()=>[d(he,null,{default:g(()=>[d(ie,null,{default:g(()=>{var i;return[q("div",kt,"Remote project: "+ae((i=Ge(f))==null?void 0:i.info.name),1)]}),_:1}),d(ie,null,{default:g(()=>[q("div",null,[Q(" Text results"),C.value?(J(),we("span",wt," (downloaded)")):et("",!0),Q(": "),q("span",null,ae(c.value),1),q("div",null,[d(W,{outline:"",color:"primary",label:"Download",onClick:ee})])]),q("div",null,[Q(" Images: "),d(at,{size:"25px",value:B.value,color:"blue"},{default:g(()=>[q("div",yt,[d(nt,{color:"white","text-color":"black",label:M.value},null,8,["label"])])]),_:1},8,["value"]),d(W,{outline:"",color:"primary",label:"Download",onClick:l})])]),_:1}),d(Ce,{align:"right"},{default:g(()=>[H(d(W,{flat:"",color:"primary",label:"Import",onClick:r},null,512),[[ne]]),H(d(W,{flat:"",color:"primary",label:"Close"},null,512),[[ne]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),d(dt,{position:"bottom-right",offset:[18,18]},{default:g(()=>[d(W,{fab:"",icon:"add",color:"blue",onClick:U})]),_:1})]),_:1}))}});export{jt as default};
