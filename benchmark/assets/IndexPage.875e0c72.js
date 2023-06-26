var Re=Object.defineProperty;var Se=(e,h,p)=>h in e?Re(e,h,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[h]=p;var ue=(e,h,p)=>(Se(e,typeof h!="symbol"?h+"":h,p),p);import{Q as Pe}from"./QPage.83449c26.js";import{u as Ie,a as Fe,b as Ve,Q as fe,c as me,d as oe,C as W}from"./ClosePopup.b40d0207.js";import{u as je,a as Te,b as Ae,c as De,f as ve,d as Ee,Q as Ne,e as Be,l as ge,t as ze}from"./projectUtils.8fb06a3a.js";import{r as T,w as q,L as te,M as Le,c as z,o as Oe,b as be,h as se,N as Ue,g as Qe,H as he,_ as Ze,m as Ke,u as qe,s as X,O as ie,x as k,v as j,A as C,P as we,Q as $e,R as ne,C as G,t as ke,S as ee,U as ce,y as He,z as Je}from"./index.e4c56f4b.js";import{c as Ye,Q as K}from"./QBtn.dfccd46a.js";import{Q as ye}from"./QCardActions.7091f2cb.js";import{Q as We}from"./QTooltip.4dbe6d62.js";import{l as B,D as de,r as Xe,B as Ge}from"./DynamsoftButton.3f171a36.js";import"./scroll.9e7c086f.js";import"./patterns.5b28f170.js";const xe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},re={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ce=Object.keys(re);Ce.forEach(e=>{re[e].regex=new RegExp(re[e].pattern)});const et=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ce.join("")+"])|(.)","g"),pe=/[.*+?^${}()|[\]\\]/g,b=String.fromCharCode(1),tt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function at(e,h,p,m){let v,w,A,P,I,g;const M=T(null),c=T(F());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}q(()=>e.type+e.autogrow,Q),q(()=>e.mask,s=>{if(s!==void 0)O(c.value,!0);else{const n=V(c.value);Q(),e.modelValue!==n&&h("update:modelValue",n)}}),q(()=>e.fillMask+e.reverseFillMask,()=>{M.value===!0&&O(c.value,!0)}),q(()=>e.unmaskedValue,()=>{M.value===!0&&O(c.value)});function F(){if(Q(),M.value===!0){const s=Z(V(e.modelValue));return e.fillMask!==!1?$(s):s}return e.modelValue}function L(s){if(s<v.length)return v.slice(-s);let n="",u=v;const o=u.indexOf(b);if(o>-1){for(let t=s-u.length;t>0;t--)n+=b;u=u.slice(0,o)+n+u.slice(o)}return u}function Q(){if(M.value=e.mask!==void 0&&e.mask.length>0&&H(),M.value===!1){P=void 0,v="",w="";return}const s=xe[e.mask]===void 0?e.mask:xe[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",u=n.replace(pe,"\\$&"),o=[],t=[],a=[];let i=e.reverseFillMask===!0,r="",d="";s.replace(et,(y,l,x,U,E)=>{if(U!==void 0){const S=re[U];a.push(S),d=S.negate,i===!0&&(t.push("(?:"+d+"+)?("+S.pattern+"+)?(?:"+d+"+)?("+S.pattern+"+)?"),i=!1),t.push("(?:"+d+"+)?("+S.pattern+")?")}else if(x!==void 0)r="\\"+(x==="\\"?"":x),a.push(x),o.push("([^"+r+"]+)?"+r+"?");else{const S=l!==void 0?l:E;r=S==="\\"?"\\\\\\\\":S.replace(pe,"\\\\$&"),a.push(S),o.push("([^"+r+"]+)?"+r+"?")}});const R=new RegExp("^"+o.join("")+"("+(r===""?".":"[^"+r+"]")+"+)?"+(r===""?"":"["+r+"]*")+"$"),D=t.length-1,f=t.map((y,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+u+"*"+y):l===D?new RegExp("^"+y+"("+(d===""?".":d)+"+)?"+(e.reverseFillMask===!0?"$":u+"*")):new RegExp("^"+y));A=a,P=y=>{const l=R.exec(e.reverseFillMask===!0?y:y.slice(0,a.length+1));l!==null&&(y=l.slice(1).join(""));const x=[],U=f.length;for(let E=0,S=y;E<U;E++){const Y=f[E].exec(S);if(Y===null)break;S=S.slice(Y.shift().length),x.push(...Y)}return x.length>0?x.join(""):y},v=a.map(y=>typeof y=="string"?y:b).join(""),w=v.split(b).join(n)}function O(s,n,u){const o=m.value,t=o.selectionEnd,a=o.value.length-t,i=V(s);n===!0&&Q();const r=Z(i),d=e.fillMask!==!1?$(r):r,R=c.value!==d;o.value!==d&&(o.value=d),R===!0&&(c.value=d),document.activeElement===o&&te(()=>{if(d===w){const f=e.reverseFillMask===!0?w.length:0;o.setSelectionRange(f,f,"forward");return}if(u==="insertFromPaste"&&e.reverseFillMask!==!0){const f=o.selectionEnd;let y=t-1;for(let l=I;l<=y&&l<f;l++)v[l]!==b&&y++;_.right(o,y);return}if(["deleteContentBackward","deleteContentForward"].indexOf(u)>-1){const f=e.reverseFillMask===!0?t===0?d.length>r.length?1:0:Math.max(0,d.length-(d===w?0:Math.min(r.length,a)+1))+1:t;o.setSelectionRange(f,f,"forward");return}if(e.reverseFillMask===!0)if(R===!0){const f=Math.max(0,d.length-(d===w?0:Math.min(r.length,a+1)));f===1&&t===1?o.setSelectionRange(f,f,"forward"):_.rightReverse(o,f)}else{const f=d.length-a;o.setSelectionRange(f,f,"backward")}else if(R===!0){const f=Math.max(0,v.indexOf(b),Math.min(r.length,t)-1);_.right(o,f)}else{const f=t-1;_.right(o,f)}});const D=e.unmaskedValue===!0?V(d):d;String(e.modelValue)!==D&&p(D,!0)}function ae(s,n,u){const o=Z(V(s.value));n=Math.max(0,v.indexOf(b),Math.min(o.length,n)),I=n,s.setSelectionRange(n,u,"forward")}const _={left(s,n){const u=v.slice(n-1).indexOf(b)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(v[o]===b){n=o,u===!0&&n++;break}if(o<0&&v[n]!==void 0&&v[n]!==b)return _.right(s,0);n>=0&&s.setSelectionRange(n,n,"backward")},right(s,n){const u=s.value.length;let o=Math.min(u,n+1);for(;o<=u;o++)if(v[o]===b){n=o;break}else v[o-1]===b&&(n=o);if(o>u&&v[n-1]!==void 0&&v[n-1]!==b)return _.left(s,u);s.setSelectionRange(n,n,"forward")},leftReverse(s,n){const u=L(s.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(u[o-1]===b){n=o;break}else if(u[o]===b&&(n=o,o===0))break;if(o<0&&u[n]!==void 0&&u[n]!==b)return _.rightReverse(s,0);n>=0&&s.setSelectionRange(n,n,"backward")},rightReverse(s,n){const u=s.value.length,o=L(u),t=o.slice(0,n+1).indexOf(b)===-1;let a=Math.min(u,n+1);for(;a<=u;a++)if(o[a-1]===b){n=a,n>0&&t===!0&&n--;break}if(a>u&&o[n-1]!==void 0&&o[n-1]!==b)return _.leftReverse(s,u);s.setSelectionRange(n,n,"forward")}};function le(s){h("click",s),g=void 0}function J(s){if(h("keydown",s),Le(s)===!0)return;const n=m.value,u=n.selectionStart,o=n.selectionEnd;if(s.shiftKey||(g=void 0),s.keyCode===37||s.keyCode===39){s.shiftKey&&g===void 0&&(g=n.selectionDirection==="forward"?u:o);const t=_[(s.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(s.preventDefault(),t(n,g===u?o:u),s.shiftKey){const a=n.selectionStart;n.setSelectionRange(Math.min(g,a),Math.max(g,a),"forward")}}else s.keyCode===8&&e.reverseFillMask!==!0&&u===o?(_.left(n,u),n.setSelectionRange(n.selectionStart,o,"backward")):s.keyCode===46&&e.reverseFillMask===!0&&u===o&&(_.rightReverse(n,o),n.setSelectionRange(u,n.selectionEnd,"forward"))}function Z(s){if(s==null||s==="")return"";if(e.reverseFillMask===!0)return N(s);const n=A;let u=0,o="";for(let t=0;t<n.length;t++){const a=s[u],i=n[t];if(typeof i=="string")o+=i,a===i&&u++;else if(a!==void 0&&i.regex.test(a))o+=i.transform!==void 0?i.transform(a):a,u++;else return o}return o}function N(s){const n=A,u=v.indexOf(b);let o=s.length-1,t="";for(let a=n.length-1;a>=0&&o>-1;a--){const i=n[a];let r=s[o];if(typeof i=="string")t=i+t,r===i&&o--;else if(r!==void 0&&i.regex.test(r))do t=(i.transform!==void 0?i.transform(r):r)+t,o--,r=s[o];while(u===a&&r!==void 0&&i.regex.test(r));else return t}return t}function V(s){return typeof s!="string"||P===void 0?typeof s=="number"?P(""+s):s:P(s)}function $(s){return w.length-s.length<=0?s:e.reverseFillMask===!0&&s.length>0?w.slice(0,-s.length)+s:s+w.slice(s.length)}return{innerValue:c,hasMask:M,moveCursorForPaste:ae,updateMaskValue:O,onMaskedKeydown:J,onMaskedClick:le}}function lt(e,h){function p(){const m=e.modelValue;try{const v="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(m)===m&&("length"in m?Array.from(m):[m]).forEach(w=>{v.items.add(w)}),{files:v.files}}catch{return{files:void 0}}}return h===!0?z(()=>{if(e.type==="file")return p()}):z(p)}var nt=Ye({name:"QInput",inheritAttrs:!1,props:{...je,...tt,...Ie,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Te,"paste","change","keydown","click","animationend"],setup(e,{emit:h,attrs:p}){const{proxy:m}=Qe(),{$q:v}=m,w={};let A=NaN,P,I,g=null,M;const c=T(null),H=Fe(e),{innerValue:F,hasMask:L,moveCursorForPaste:Q,updateMaskValue:O,onMaskedKeydown:ae,onMaskedClick:_}=at(e,h,r,c),le=lt(e,!0),J=z(()=>ve(F.value)),Z=Ee(a),N=Ae(),V=z(()=>e.type==="textarea"||e.autogrow===!0),$=z(()=>V.value===!0||["text","search","url","tel","password"].includes(e.type)),s=z(()=>{const l={...N.splitAttrs.listeners.value,onInput:a,onPaste:t,onChange:R,onBlur:D,onFocus:he};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=Z,L.value===!0&&(l.onKeydown=ae,l.onClick=_),e.autogrow===!0&&(l.onAnimationend=i),l}),n=z(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...N.splitAttrs.attributes.value,id:N.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return V.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});q(()=>e.type,()=>{c.value&&(c.value.value=e.modelValue)}),q(()=>e.modelValue,l=>{if(L.value===!0){if(I===!0&&(I=!1,String(l)===A))return;O(l)}else F.value!==l&&(F.value=l,e.type==="number"&&w.hasOwnProperty("value")===!0&&(P===!0?P=!1:delete w.value));e.autogrow===!0&&te(d)}),q(()=>e.autogrow,l=>{l===!0?te(d):c.value!==null&&p.rows>0&&(c.value.style.height="auto")}),q(()=>e.dense,()=>{e.autogrow===!0&&te(d)});function u(){Ve(()=>{const l=document.activeElement;c.value!==null&&c.value!==l&&(l===null||l.id!==N.targetUid.value)&&c.value.focus({preventScroll:!0})})}function o(){c.value!==null&&c.value.select()}function t(l){if(L.value===!0&&e.reverseFillMask!==!0){const x=l.target;Q(x,x.selectionStart,x.selectionEnd)}h("paste",l)}function a(l){if(!l||!l.target)return;if(e.type==="file"){h("update:modelValue",l.target.files);return}const x=l.target.value;if(l.target.qComposing===!0){w.value=x;return}if(L.value===!0)O(x,!1,l.inputType);else if(r(x),$.value===!0&&l.target===document.activeElement){const{selectionStart:U,selectionEnd:E}=l.target;U!==void 0&&E!==void 0&&te(()=>{l.target===document.activeElement&&x.indexOf(l.target.value)===0&&l.target.setSelectionRange(U,E)})}e.autogrow===!0&&d()}function i(l){h("animationend",l),d()}function r(l,x){M=()=>{g=null,e.type!=="number"&&w.hasOwnProperty("value")===!0&&delete w.value,e.modelValue!==l&&A!==l&&(A=l,x===!0&&(I=!0),h("update:modelValue",l),te(()=>{A===l&&(A=NaN)})),M=void 0},e.type==="number"&&(P=!0,w.value=l),e.debounce!==void 0?(g!==null&&clearTimeout(g),w.value=l,g=setTimeout(M,e.debounce)):M()}function d(){requestAnimationFrame(()=>{const l=c.value;if(l!==null){const x=l.parentNode.style,{scrollTop:U}=l,{overflowY:E,maxHeight:S}=v.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=E!==void 0&&E!=="scroll";Y===!0&&(l.style.overflowY="hidden"),x.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt(S,10)<l.scrollHeight?"auto":"hidden"),x.marginBottom="",l.scrollTop=U}})}function R(l){Z(l),g!==null&&(clearTimeout(g),g=null),M!==void 0&&M(),h("change",l.target.value)}function D(l){l!==void 0&&he(l),g!==null&&(clearTimeout(g),g=null),M!==void 0&&M(),P=!1,I=!1,delete w.value,e.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=F.value!==void 0?F.value:"")})}function f(){return w.hasOwnProperty("value")===!0?w.value:F.value!==void 0?F.value:""}Oe(()=>{D()}),be(()=>{e.autogrow===!0&&d()}),Object.assign(N,{innerValue:F,fieldClass:z(()=>`q-${V.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:z(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:c,emitValue:r,hasValue:J,floatingLabel:z(()=>J.value===!0&&(e.type!=="number"||isNaN(F.value)===!1)||ve(e.displayValue)),getControl:()=>se(V.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...s.value,...e.type!=="file"?{value:f()}:le.value}),getShadowControl:()=>se("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(V.value===!0?"":" text-no-wrap")},[se("span",{class:"invisible"},f()),se("span",e.shadowText)])});const y=De(N);return Object.assign(m,{focus:u,select:o,getNativeElement:()=>c.value}),Ue(m,"nativeEl",()=>c.value),y}});class Me{constructor(h,p){ue(this,"info");ue(this,"isRemote",!1);this.info=h,p&&(this.isRemote=p)}}const _e=e=>(He("data-v-2d7763ae"),e=e(),Je(),e),ot={class:"full"},st={class:"container"},it={class:"main"},rt=_e(()=>C("h2",null,"Barcode Reading Benchmark",-1)),ut={class:"project-name"},ct={class:"flex-container"},dt={class:"buttons"},ft={class:"dialogs"},mt=_e(()=>C("div",{class:"text-h6"},"New project",-1)),vt={class:"text-h6"},gt={key:0},ht={href:"javascript:void();"},wt={class:"absolute-full flex flex-center"},kt={style:{height:"25px"}},yt=Ke({__name:"IndexPage",setup(e){const h=T(!1),p=T(""),m=T([]),v=T(!1),w=qe(),A=T(0),P=T(""),I=T(!1),g=T(""),M=T(""),c=T(null);let H=-1;be(async()=>{const t=await B.getItem("projects");t&&(m.value=JSON.parse(t)),F()});const F=async()=>{const a=await(await fetch("./dataset/projects.json")).text();if(a)try{const i=JSON.parse(a);console.log(i);const r=m.value;for(let d=0;d<i.length;d++){const R=i[d];let D=!1;for(let f=0;f<m.value.length;f++){const y=m.value[f];if(y.info.name===R){D=!0,y.isRemote=!0;break}}if(D===!1){let f=new Me({name:R,images:[],creationTimestamp:0},!0);r.push(f)}}m.value=r,console.log(r)}catch(i){console.log(i)}},L=t=>new Date(t).toLocaleString(),Q=()=>{p.value="",h.value=!0},O=()=>{if(ae(p.value))alert("Project name duplicated. Please use another name.");else{const t=new Me({name:p.value,creationTimestamp:Date.now(),images:[]});m.value.push(t),_()}},ae=t=>{for(let a=0;a<m.value.length;a++)if(m.value[a].info.name===t)return!0;return!1},_=async()=>{let t=[];m.value.forEach(a=>{t.push(a)}),await B.setItem("projects",JSON.stringify(t))},le=async t=>{if(M.value!=""){alert("Please wait for the current operation.");return}let a=m.value[t];if(a.isRemote){const i=await $(a);i&&(a=i)}await o(a),w.push("/project/"+encodeURIComponent(m.value[t].info.name))},J=async()=>{let t=[];for(let a=0;a<m.value.length;a++){const i=m.value[a];a!=H?t.push(i):(await Xe(i),i.isRemote&&(i.info.images=[],t.push(i)))}m.value=t,_()},Z=()=>{if(c.value){const t="/project/"+encodeURIComponent(c.value.info.name)+"/settings",a=w.resolve(t);window.open(a.href,"_blank")}},N=async()=>{I.value===!0?c.value&&(await ge(c.value),alert("Imported")):alert("Please download the text results first.")},V=async t=>{H=t;let a=m.value[t];if(c.value=a,console.log("selected:"),console.log(c),a.isRemote){const i=await $(a);i&&(a=i,c.value=a),await B.getItem(a.info.name+":results.zip")?I.value=!0:I.value=!1;let d=0;for(let R=0;R<a.info.images.length;R++){const D=a.info.images[R];await B.getItem(a.info.name+":image:"+D)&&(d=d+1)}u(d-1)}console.log(a),console.log(m),v.value=!0},$=async t=>{if(t.info.images.length===0){const a=t.info.name,r=await(await fetch("./dataset/"+a+"/project_manifest.json")).text();return t=JSON.parse(r),t.isRemote=!0,t}},s=async()=>{var i,r;if(g.value==="Downloading..."){alert("Already downloading.");return}g.value="Downloading...";const t=await fetch("./dataset/"+((i=c.value)==null?void 0:i.info.name)+"/results.zip");g.value="";const a=await t.blob();a.size>0&&(await B.setItem(((r=c.value)==null?void 0:r.info.name)+":results.zip",a),I.value=!0)},n=async()=>{if(c.value){if(g.value==="Downloading..."){alert("Already downloading.");return}g.value="Downloading...";for(let t=0;t<c.value.info.images.length;t++){if(v.value===!1){g.value="";return}const a=c.value.info.images[t];if(!await B.getItem(c.value.info.name+":image:"+a)){const d=await(await fetch("./dataset/"+c.value.info.name+"/"+a)).blob();if(d.size>0){const R=await Ge(d);await B.setItem(c.value.info.name+":image:"+a,R)}}u(t)}g.value=""}},u=t=>{c.value&&(A.value=parseFloat(((t+1)/c.value.info.images.length).toFixed(2)),P.value=t+1+"/"+c.value.info.images.length)},o=async t=>{if(console.log(t),t.isRemote){if(!await B.getItem(t.info.name+":results.zip")){M.value="Downloading remote project text result files...";const d=await(await fetch("./dataset/"+t.info.name+"/results.zip")).blob();d.size>0&&await B.setItem(t.info.name+":results.zip",d)}if(!await ze(t)){M.value="Importing remote project...",await ge(t);let r=[];m.value.forEach(d=>{d.info.name===t.info.name?r.push(t):r.push(d)}),await B.setItem("projects",JSON.stringify(r))}M.value=""}};return(t,a)=>(X(),ie(we,null,[k(Pe,null,{default:j(()=>[C("div",ot,[C("div",st,[C("div",it,[rt,(X(!0),ie(we,null,$e(m.value,(i,r)=>(X(),ie("div",{class:"project-list-item",key:i.info.name},[C("div",ut,ne(i.info.name),1),C("div",ct,ne(i.isRemote&&i.info.images.length===0?"remote project":L(i.info.creationTimestamp)),1),C("div",dt,[k(de,{label:"Open",onClick:d=>le(r)},null,8,["onClick"]),k(de,{style:{"margin-left":"5px",color:"black","border-color":"black","background-color":"#fff"},label:"Manage",onClick:d=>V(r)},null,8,["onClick"])])]))),128))]),C("div",null,[C("div",null,[k(de,{outline:"",label:"New Project",onClick:Q})]),C("div",null,ne(M.value),1)])])])]),_:1}),C("div",ft,[k(fe,{modelValue:h.value,"onUpdate:modelValue":a[1]||(a[1]=i=>h.value=i)},{default:j(()=>[k(me,null,{default:j(()=>[k(oe,null,{default:j(()=>[mt]),_:1}),k(oe,null,{default:j(()=>[k(nt,{outlined:"",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=i=>p.value=i),label:"Project Name"},null,8,["modelValue"])]),_:1}),k(ye,{align:"right"},{default:j(()=>[G(k(K,{flat:"",label:"Cancel",color:"primary"},null,512),[[W]]),G(k(K,{flat:"",label:"Okay",color:"primary",onClick:O},null,512),[[W]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),k(fe,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=i=>v.value=i)},{default:j(()=>[k(me,{style:{"min-width":"300px"}},{default:j(()=>{var i;return[k(oe,null,{default:j(()=>{var r;return[C("div",vt,"Project: "+ne((r=c.value)==null?void 0:r.info.name),1)]}),_:1}),(i=c.value)!=null&&i.isRemote?(X(),ke(oe,{key:0},{default:j(()=>[C("div",null,[ee(" Text results"),I.value?(X(),ie("span",gt," (downloaded)")):ce("",!0),ee(": "),C("div",null,[k(K,{outline:"",color:"primary",label:"Download",onClick:s})])]),C("div",null,[ee(" Images "),C("a",ht,[ee(" (help) "),k(We,{style:{"font-size":"14px"}},{default:j(()=>[ee(" required if you need to checkout the images or rerun the decoding ")]),_:1})]),ee(": "),k(Ne,{size:"25px",value:A.value,color:"blue"},{default:j(()=>[C("div",wt,[k(Be,{color:"white","text-color":"black",label:P.value},null,8,["label"])])]),_:1},8,["value"]),k(K,{outline:"",color:"primary",label:"Download",onClick:n})]),C("div",kt,[C("span",null,ne(g.value),1)])]),_:1})):ce("",!0),k(ye,{align:"right"},{default:j(()=>{var r;return[G(k(K,{flat:"",color:"primary",label:"Settings",onClick:Z},null,512),[[W]]),(r=c.value)!=null&&r.isRemote?G((X(),ke(K,{key:0,flat:"",color:"primary",label:"Import results",onClick:N},null,512)),[[W]]):ce("",!0),G(k(K,{flat:"",color:"primary",label:"Delete",onClick:J},null,512),[[W]]),G(k(K,{flat:"",color:"primary",label:"Close"},null,512),[[W]])]}),_:1})]}),_:1})]),_:1},8,["modelValue"])])],64))}});var Vt=Ze(yt,[["__scopeId","data-v-2d7763ae"]]);export{Vt as default};
