import{d as me}from"./QSelect.77e6394b.js";import{c as de,u as ce,h as fe,f as ee,Q as te}from"./QBtn.6b260d38.js";import{u as he,Q as W}from"./use-meta.aedf1250.js";import{a as ge,h as m,T as be,ab as xe,r as h,c as O,w as X,B as pe,ac as we,g as ye,I as _e,q as Se,u as Ie,o as Te,t as y,N as L,M as u,y as D,P as V,z as ae,x as H,R as F,Q as G,O as $,v as ne,ad as ke}from"./index.57be0b24.js";import{h as Re,k as Le,F as oe,q as Be,z as Ce,Q as le,A as Z,B as ie}from"./position-engine.2cd36b78.js";import{c as qe,d as Ne,Q as se,l as C,B as Oe,g as z,o as De,p as Ee,q as je,t as Qe,b as ue,m as Ue,k as Ve}from"./utils.5ed6aa13.js";import"./scroll.a3d00d48.js";var Pe=de({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:q,emit:r}){let s=!1,d,c,b=null,g=null,v,B;function _(){d&&d(),d=null,s=!1,b!==null&&(clearTimeout(b),b=null),g!==null&&(clearTimeout(g),g=null),c!==void 0&&c.removeEventListener("transitionend",v),v=null}function f(n,x,w){x!==void 0&&(n.style.height=`${x}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,d=w}function p(n,x){n.style.overflowY=null,n.style.height=null,n.style.transition=null,_(),x!==B&&r(x)}function N(n,x){let w=0;c=n,s===!0?(_(),w=n.offsetHeight===n.scrollHeight?0:void 0):(B="hide",n.style.overflowY="hidden"),f(n,w,x),b=setTimeout(()=>{b=null,n.style.height=`${n.scrollHeight}px`,v=S=>{g=null,(Object(S)!==S||S.target===n)&&p(n,"show")},n.addEventListener("transitionend",v),g=setTimeout(v,e.duration*1.1)},100)}function j(n,x){let w;c=n,s===!0?_():(B="show",n.style.overflowY="hidden",w=n.scrollHeight),f(n,w,x),b=setTimeout(()=>{b=null,n.style.height=0,v=S=>{g=null,(Object(S)!==S||S.target===n)&&p(n,"hide")},n.addEventListener("transitionend",v),g=setTimeout(v,e.duration*1.1)},100)}return ge(()=>{s===!0&&_()}),()=>m(be,{css:!1,appear:e.appear,onEnter:N,onLeave:j},q.default)}});const E=xe({}),Ae=Object.keys(ce);var re=de({name:"QExpansionItem",props:{...ce,...Re,...qe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Le,"click","afterShow","afterHide"],setup(e,{slots:q,emit:r}){const{proxy:{$q:s}}=ye(),d=Ne(e,s),c=h(e.modelValue!==null?e.modelValue:e.defaultOpened),b=h(null),g=oe(),{show:v,hide:B,toggle:_}=Be({showing:c});let f,p;const N=O(()=>`q-expansion-item q-item-type q-expansion-item--${c.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),j=O(()=>{if(e.contentInsetLevel===void 0)return null;const o=s.lang.rtl===!0?"Right":"Left";return{["padding"+o]:e.contentInsetLevel*56+"px"}}),n=O(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),x=O(()=>{const o={};return Ae.forEach(R=>{o[R]=e[R]}),o}),w=O(()=>n.value===!0||e.expandIconToggle!==!0),S=O(()=>e.expandedIcon!==void 0&&c.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),J=O(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),M=O(()=>({expanded:c.value===!0,detailsId:e.targetUid,toggle:_,show:v,hide:B})),P=O(()=>{const o=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[c.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":c.value===!0?"true":"false","aria-controls":g,"aria-label":o}});X(()=>e.group,o=>{p!==void 0&&p(),o!==void 0&&a()});function K(o){n.value!==!0&&_(o),r("click",o)}function Y(o){o.keyCode===13&&A(o,!0)}function A(o,R){R!==!0&&b.value!==null&&b.value.focus(),_(o),_e(o)}function l(){r("afterShow")}function t(){r("afterHide")}function a(){f===void 0&&(f=oe()),c.value===!0&&(E[e.group]=f);const o=X(c,U=>{U===!0?E[e.group]=f:E[e.group]===f&&delete E[e.group]}),R=X(()=>E[e.group],(U,ve)=>{ve===f&&U!==void 0&&U!==f&&B()});p=()=>{o(),R(),E[e.group]===f&&delete E[e.group],p=void 0}}function i(){const o={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},R=[m(ee,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&c.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:S.value})];return J.value===!0&&(Object.assign(o,{tabindex:0,...P.value,onClick:A,onKeyup:Y}),R.unshift(m("div",{ref:b,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(Z,o,()=>R)}function T(){let o;return q.header!==void 0?o=[].concat(q.header(M.value)):(o=[m(Z,()=>[m(le,{lines:e.labelLines},()=>e.label||""),e.caption?m(le,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&o[e.switchToggleSide===!0?"push":"unshift"](m(Z,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>m(ee,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&o[e.switchToggleSide===!0?"unshift":"push"](i()),o}function k(){const o={ref:"item",style:e.headerStyle,class:e.headerClass,dark:d.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return w.value===!0&&(o.clickable=!0,o.onClick=K,Object.assign(o,n.value===!0?x.value:P.value)),m(Ce,o,T)}function I(){return pe(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:j.value,id:g},fe(q.default)),[[we,c.value]])}function Q(){const o=[k(),m(Pe,{duration:e.duration,onShow:l,onHide:t},I)];return e.expandSeparator===!0&&o.push(m(se,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:d.value}),m(se,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:d.value})),o}return e.group!==void 0&&a(),ge(()=>{p!==void 0&&p()}),()=>m("div",{class:N.value},[m("div",{class:"q-expansion-item__container relative-position"},Q())])}});const He={class:"q-pa-md example-row-equal-width"},Fe={class:"row"},Ge={class:"col-12 col-md"},$e={style:{"padding-bottom":"20px"}},ze={style:{"padding-left":"10px"}},Je={class:"row"},Me={class:"col"},Ke={class:"col"},Ye={class:"col-12 col-md"},We={style:{"text-align":"right"}},Xe={key:0},Ze={style:{"max-height":"75vh",overflow:"auto"}},et=["viewBox"],tt=["href"],at={key:0},nt=["points"],ot={key:1},lt=["points"],it={class:"row"},mt=Se({__name:"DetailsPage",setup(e){const q=Ie(),r=h(""),s=h(""),d=h(""),c=h([]),b=h("0 0 0 0"),g=h(""),v=h([]),B=h([]),_=h(!0),f=h(!0),p=h(!1),N=h(""),j=h([]);let n;Te(()=>{r.value=q.currentRoute.value.params.name,s.value=q.currentRoute.value.params.imageName,d.value=q.currentRoute.value.params.engine;const l=ue.getEngines();c.value=l,he({title:"Barcode Reading Benchmark - "+r.value+" - "+s.value}),x(),w()});const x=async()=>{const l=await C.getItem(r.value+":image:"+s.value);if(l){let t=new Image;t.src=l,t.onload=function(){b.value="0 0 "+t.width+" "+t.height,g.value=l}}else{const a=await(await fetch("./dataset/"+r.value+"/"+s.value)).blob();if(a.size>0){const i=await Oe(a);await C.setItem(r.value+":image:"+s.value,i),x()}}},w=async(l,t)=>{let a;if(l?a=l:a=d.value,t)v.value=t.results;else{const k=await C.getItem(r.value+":detectionResult:"+z(s.value)+"-"+a+".json");let I;k?(I=JSON.parse(k),v.value=I.results):v.value=[]}const i=await C.getItem(r.value+":groundTruth:"+z(s.value)+".txt");let T;i&&(T=JSON.parse(i),B.value=T),t&&i&&P(t.results,T)},S=l=>{let t=l.x1+","+l.y1+" ";return t=t+l.x2+","+l.y2+" ",t=t+l.x3+","+l.y3+" ",t=t+l.x4+","+l.y4,t},J=async()=>{let l=!1;n?n.getEngine()!=d.value&&(l=!0):l=!0,l&&(N.value="Initializing...",n=await ue.createInstance(d.value),N.value=""),await M();const t=await C.getItem(r.value+":image:"+s.value);if(t){N.value="Decoding...";let a=await n.detect(t);N.value="",console.log(a),v.value=a.results,p.value===!0&&await C.setItem(r.value+":detectionResult:"+z(s.value)+"-"+d.value+".json",JSON.stringify(a)),w(d.value,a)}},M=async()=>{const l=await Ue(r.value,d.value,n.getSupportedSettings());console.log(l),await n.setSupportedSettings(l)},P=(l,t)=>{let a=[];for(let i=0;i<l.length;i++){const T=l[i];let k=!1;for(let I=0;I<t.length;I++){const Q=t[I],o=De(T),R=Ee(Q);if(je(o,R)>0){Q.text&&(Qe(Q,T)?k=!0:a.push(i));continue}I===t.length-1&&k===!1&&a.push(i)}}j.value=a},K=l=>{w(l)},Y=async()=>{C.removeItem(r.value+":image:"+s.value),C.removeItem(r.value+":groundTruth:"+z(s.value)+".txt");const l=await C.getItem("projects");if(l){const t=JSON.parse(l);for(let a=0;a<t.length;a++)if(t[a].info.name===r.value){const i=t[a],T=[];for(let k=0;k<i.info.images.length;k++){const I=i.info.images[k];I!=s.value&&T.push(I)}i.info.images=T}await C.setItem("projects",JSON.stringify(t)),alert("deleted")}},A=()=>{if(g.value){const l=Ve(g.value),t=document.createElement("a");t.href=URL.createObjectURL(l),t.download=s.value,document.body.appendChild(t),t.click(),document.body.removeChild(t)}else alert("The image has not been downloaded.")};return(l,t)=>(y(),L("div",He,[u("div",Fe,[u("div",Ge,[u("div",$e,[D(me,{"onUpdate:modelValue":[t[0]||(t[0]=a=>K(a)),t[1]||(t[1]=a=>d.value=a)],style:{"max-width":"300px"},modelValue:d.value,options:c.value,label:"Engine"},null,8,["modelValue","options"])]),u("div",null,[D(te,{outline:"",color:"primary",label:"Decode",onClick:J}),D(W,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=a=>p.value=a),label:"Save Detection Results"},null,8,["modelValue"]),u("span",ze,V(N.value),1)]),u("div",null,[D(W,{modelValue:_.value,"onUpdate:modelValue":t[3]||(t[3]=a=>_.value=a),label:"Show Detection Results"},null,8,["modelValue"])]),u("div",null,[D(W,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value=a),label:"Show Ground Trurh"},null,8,["modelValue"])]),u("div",Je,[u("div",Me,[ae(" Barcode Results: "),D(ie,{bordered:"",class:"rounded-borders"},{default:H(()=>[(y(!0),L(G,null,$(v.value,(a,i)=>(y(),ne(re,{class:ke(j.value.indexOf(i)!=-1?"incorrect":"correct"),"switch-toggle-side":"","dense-toggle":"",label:i.toString()+": "+a.barcodeText,key:i},{default:H(()=>[u("pre",null,""+V(JSON.stringify(a,null,4))+`
                `,1)]),_:2},1032,["class","label"]))),128))]),_:1})]),u("div",Ke,[ae(" Ground Truth: "),D(ie,{bordered:"",class:"rounded-borders"},{default:H(()=>[(y(!0),L(G,null,$(B.value,(a,i)=>(y(),ne(re,{"switch-toggle-side":"","dense-toggle":"",label:i.toString()+": "+a.text,key:i},{default:H(()=>[u("pre",null,""+V(JSON.stringify(a,null,4))+`
                `,1)]),_:2},1032,["label"]))),128))]),_:1})])])]),u("div",Ye,[u("div",null,[u("div",We,[g.value?F("",!0):(y(),L("span",Xe," Downloading... ")),u("a",{href:"javascript:void();",onClick:t[5]||(t[5]=a=>A())},"Save the image")])]),u("div",Ze,[g.value?(y(),L("svg",{key:0,viewBox:b.value,class:"fade"},[u("image",{href:g.value},null,8,tt),_.value?(y(),L("a",at,[(y(!0),L(G,null,$(v.value,(a,i)=>(y(),L("polygon",{key:"polygon"+i,points:S(a),class:"barcode-polygon"},[u("title",null,V(a.barcodeFormat+": "+a.barcodeText),1)],8,nt))),128))])):F("",!0),f.value?(y(),L("a",ot,[(y(!0),L(G,null,$(B.value,(a,i)=>(y(),L("polygon",{key:"polygon"+i,points:S(a),class:"groundtruth-polygon"},[u("title",null,V(a.attrib.Type+": "+a.text),1)],8,lt))),128))])):F("",!0)],8,et)):F("",!0)])])]),u("div",it,[D(te,{outline:"",color:"red",label:"Delete this image",onClick:Y})])]))}});export{mt as default};