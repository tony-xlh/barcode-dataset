import{Q as Qe}from"./QSelect.98080fa8.js";import{c as ke,u as Ce,h as qe,f as xe,Q as fe}from"./QBtn.50994610.js";import{u as Ne,Q as me}from"./use-meta.794870f7.js";import{a as Le,h as _,T as Oe,ab as Ve,r as g,c as N,w as he,B as O,ac as Ue,g as je,I as Ge,q as Pe,u as Me,o as Ae,t as c,N as p,M as s,y as r,P as G,z as H,x as d,R as X,ad as ye,Q as F,O as z,v as J,a7 as pe}from"./index.01dcdc71.js";import{h as He,k as Fe,J as _e,q as ze,z as te,Q as $,A as M,B as Je}from"./position-engine.527dc7ff.js";import{Q as we,a as $e,b as Se}from"./QCard.c430ec8b.js";import{c as Ye,d as Ke,l as B,B as We,g as Z,o as Xe,p as Ze,q as et,t as tt,b as Te,m as at,k as nt,C as lt}from"./utils.c91624c1.js";import{Q as be,a as ot,C as ee}from"./ClosePopup.e427c250.js";import{Q as it}from"./QBtnDropdown.4b62c4dc.js";import"./scroll.09c2055f.js";var st=ke({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(a,{slots:D,emit:f}){let u=!1,h,b,y=null,I=null,x,S;function v(){h&&h(),h=null,u=!1,y!==null&&(clearTimeout(y),y=null),I!==null&&(clearTimeout(I),I=null),b!==void 0&&b.removeEventListener("transitionend",x),x=null}function w(o,m,C){m!==void 0&&(o.style.height=`${m}px`),o.style.transition=`height ${a.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,h=C}function k(o,m){o.style.overflowY=null,o.style.height=null,o.style.transition=null,v(),m!==S&&f(m)}function V(o,m){let C=0;b=o,u===!0?(v(),C=o.offsetHeight===o.scrollHeight?0:void 0):(S="hide",o.style.overflowY="hidden"),w(o,C,m),y=setTimeout(()=>{y=null,o.style.height=`${o.scrollHeight}px`,x=T=>{I=null,(Object(T)!==T||T.target===o)&&k(o,"show")},o.addEventListener("transitionend",x),I=setTimeout(x,a.duration*1.1)},100)}function E(o,m){let C;b=o,u===!0?v():(S="show",o.style.overflowY="hidden",C=o.scrollHeight),w(o,C,m),y=setTimeout(()=>{y=null,o.style.height=0,x=T=>{I=null,(Object(T)!==T||T.target===o)&&k(o,"hide")},o.addEventListener("transitionend",x),I=setTimeout(x,a.duration*1.1)},100)}return Le(()=>{u===!0&&v()}),()=>_(Oe,{css:!1,appear:a.appear,onEnter:V,onLeave:E},D.default)}});const P=Ve({}),ut=Object.keys(Ce);var Ie=ke({name:"QExpansionItem",props:{...Ce,...He,...Ye,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Fe,"click","afterShow","afterHide"],setup(a,{slots:D,emit:f}){const{proxy:{$q:u}}=je(),h=Ke(a,u),b=g(a.modelValue!==null?a.modelValue:a.defaultOpened),y=g(null),I=_e(),{show:x,hide:S,toggle:v}=ze({showing:b});let w,k;const V=N(()=>`q-expansion-item q-item-type q-expansion-item--${b.value===!0?"expanded":"collapsed"} q-expansion-item--${a.popup===!0?"popup":"standard"}`),E=N(()=>{if(a.contentInsetLevel===void 0)return null;const l=u.lang.rtl===!0?"Right":"Left";return{["padding"+l]:a.contentInsetLevel*56+"px"}}),o=N(()=>a.disable!==!0&&(a.href!==void 0||a.to!==void 0&&a.to!==null&&a.to!=="")),m=N(()=>{const l={};return ut.forEach(L=>{l[L]=a[L]}),l}),C=N(()=>o.value===!0||a.expandIconToggle!==!0),T=N(()=>a.expandedIcon!==void 0&&b.value===!0?a.expandedIcon:a.expandIcon||u.iconSet.expansionItem[a.denseToggle===!0?"denseIcon":"icon"]),Y=N(()=>a.disable!==!0&&(o.value===!0||a.expandIconToggle===!0)),U=N(()=>({expanded:b.value===!0,detailsId:a.targetUid,toggle:v,show:x,hide:S})),Q=N(()=>{const l=a.toggleAriaLabel!==void 0?a.toggleAriaLabel:u.lang.label[b.value===!0?"collapse":"expand"](a.label);return{role:"button","aria-expanded":b.value===!0?"true":"false","aria-controls":I,"aria-label":l}});he(()=>a.group,l=>{k!==void 0&&k(),l!==void 0&&ne()});function ae(l){o.value!==!0&&v(l),f("click",l)}function K(l){l.keyCode===13&&W(l,!0)}function W(l,L){L!==!0&&y.value!==null&&y.value.focus(),v(l),Ge(l)}function oe(){f("afterShow")}function ie(){f("afterHide")}function ne(){w===void 0&&(w=_e()),b.value===!0&&(P[a.group]=w);const l=he(b,A=>{A===!0?P[a.group]=w:P[a.group]===w&&delete P[a.group]}),L=he(()=>P[a.group],(A,ve)=>{ve===w&&A!==void 0&&A!==w&&S()});k=()=>{l(),L(),P[a.group]===w&&delete P[a.group],k=void 0}}function se(){const l={class:[`q-focusable relative-position cursor-pointer${a.denseToggle===!0&&a.switchToggleSide===!0?" items-end":""}`,a.expandIconClass],side:a.switchToggleSide!==!0,avatar:a.switchToggleSide},L=[_(xe,{class:"q-expansion-item__toggle-icon"+(a.expandedIcon===void 0&&b.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:T.value})];return Y.value===!0&&(Object.assign(l,{tabindex:0,...Q.value,onClick:W,onKeyup:K}),L.unshift(_("div",{ref:y,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),_(M,l,()=>L)}function ue(){let l;return D.header!==void 0?l=[].concat(D.header(U.value)):(l=[_(M,()=>[_($,{lines:a.labelLines},()=>a.label||""),a.caption?_($,{lines:a.captionLines,caption:!0},()=>a.caption):null])],a.icon&&l[a.switchToggleSide===!0?"push":"unshift"](_(M,{side:a.switchToggleSide===!0,avatar:a.switchToggleSide!==!0},()=>_(xe,{name:a.icon})))),a.disable!==!0&&a.hideExpandIcon!==!0&&l[a.switchToggleSide===!0?"unshift":"push"](se()),l}function re(){const l={ref:"item",style:a.headerStyle,class:a.headerClass,dark:h.value,disable:a.disable,dense:a.dense,insetLevel:a.headerInsetLevel};return C.value===!0&&(l.clickable=!0,l.onClick=ae,Object.assign(l,o.value===!0?m.value:Q.value)),_(te,l,ue)}function de(){return O(_("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:E.value,id:I},qe(D.default)),[[Ue,b.value]])}function ce(){const l=[re(),_(st,{duration:a.duration,onShow:oe,onHide:ie},de)];return a.expandSeparator===!0&&l.push(_(we,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:h.value}),_(we,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:h.value})),l}return a.group!==void 0&&ne(),Le(()=>{k!==void 0&&k()}),()=>_("div",{class:V.value},[_("div",{class:"q-expansion-item__container relative-position"},ce())])}});const rt={class:"q-pa-md example-row-equal-width"},dt={class:"row"},ct={class:"col-12 col-md",style:{"padding-right":"10px"}},vt={style:{"padding-bottom":"20px"}},gt={style:{"padding-left":"10px"}},ft={class:"row results"},mt={class:"col"},ht={class:"col"},bt={class:"col-12 col-md"},xt={style:{display:"flex"}},yt={key:0},pt=s("div",{style:{flex:"1"}},null,-1),_t={style:{"max-height":"75vh",overflow:"auto"}},wt=["viewBox"],St=["href"],Tt={key:0},It=["points"],kt={key:1},Ct=["points","onMousedown"],Lt=["x","y","font-size"],Rt={key:2},Bt=["cx","cy"],Dt={class:"row"},Et={class:"dialogs"},Qt=s("div",{class:"text-h6"},"Edit Ground Truth",-1),qt=s("div",null,[s("label",{for:"ground-truth-format"},"Format:")],-1),Nt=s("div",null,[s("label",{for:"ground-truth-text"},"Text:")],-1),zt=Pe({__name:"DetailsPage",setup(a){const D=Me(),f=g(""),u=g(""),h=g(""),b=g([]),y=g(0),I=g(0),x=g(""),S=g([]),v=g([]),w=g(!0),k=g(!0),V=g(!1),E=g(""),o=g([]),m=g(!1),C=g(),T=g([]),Y=g(!1),U=g(-1);let Q;Ae(()=>{f.value=D.currentRoute.value.params.name,u.value=D.currentRoute.value.params.imageName,h.value=D.currentRoute.value.params.engine;const n=Te.getEngines();b.value=n,Ne({title:"Barcode Reading Benchmark - "+f.value+" - "+u.value}),ae(),K(D.currentRoute.value.params.engine)});const ae=async()=>{const n=await B.getItem(f.value+":image:"+u.value);if(n){let e=new Image;e.src=n,e.onload=function(){y.value=e.width,I.value=e.height,x.value=n}}else{const t=await(await fetch("./dataset/"+f.value+"/"+u.value)).blob();if(t.size>0){const i=await We(t);await B.setItem(f.value+":image:"+u.value,i),ae()}}},K=async(n,e)=>{let t;if(n?t=n:t=h.value,e)S.value=e.results;else{const q=await B.getItem(f.value+":detectionResult:"+Z(u.value)+"-"+t+".json");q?(e=JSON.parse(q),e&&(S.value=e.results)):S.value=[]}const i=await B.getItem(f.value+":groundTruth:"+Z(u.value)+".txt");let R;i&&(R=JSON.parse(i),v.value=R),e&&i&&ne(e.results,R)},W=n=>{let e=n.x1+","+n.y1+" ";return e=e+n.x2+","+n.y2+" ",e=e+n.x3+","+n.y3+" ",e=e+n.x4+","+n.y4,e},oe=async()=>{let n=!1;Q?Q.getEngine()!=h.value&&(n=!0):n=!0,n&&(E.value="Initializing...",Q=await Te.createInstance(h.value),E.value=""),await ie();const e=await B.getItem(f.value+":image:"+u.value);if(e){E.value="Decoding...";let t=await Q.detect(e);E.value="",console.log(t),S.value=t.results,V.value===!0&&await B.setItem(f.value+":detectionResult:"+Z(u.value)+"-"+h.value+".json",JSON.stringify(t)),K(h.value,t)}},ie=async()=>{const n=await at(f.value,h.value,Q.getSupportedSettings());await Q.setSupportedSettings(n)},ne=(n,e)=>{let t=[];for(let i=0;i<n.length;i++){const R=n[i];let q=!1;for(let j=0;j<e.length;j++){const le=e[j];let ge;if(le.hasLocation===!1)ge=1;else{const De=Xe(R),Ee=Ze(le);ge=et(De,Ee)}if(ge>0){le.text&&(tt(le,R)?q=!0:t.push(i));continue}j===e.length-1&&q===!1&&t.push(i)}}o.value=t},se=n=>{K(n)},ue=async()=>{B.removeItem(f.value+":image:"+u.value),B.removeItem(f.value+":groundTruth:"+Z(u.value)+".txt");const n=await B.getItem("projects");if(n){const e=JSON.parse(n);for(let t=0;t<e.length;t++)if(e[t].info.name===f.value){const i=e[t],R=[];for(let q=0;q<i.info.images.length;q++){const j=i.info.images[q];j!=u.value&&R.push(j)}i.info.images=R}await B.setItem("projects",JSON.stringify(e)),alert("deleted")}},re=()=>{if(x.value){const n=nt(x.value),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download=u.value,document.body.appendChild(e),e.click(),document.body.removeChild(e)}else alert("The image has not been downloaded.")},de=()=>{m.value=!m.value},ce=()=>{v.value=lt(S.value)},l=async()=>{await B.setItem(f.value+":groundTruth:"+Z(u.value)+".txt",JSON.stringify(v.value)),alert("Saved")},L=n=>(n.preventDefault(),!1),A=(n,e)=>{let t=1;return t=y.value/C.value.clientWidth,{x:Math.floor(t*n),y:Math.floor(t*e)}},ve=(n,e)=>{m.value&&(n.stopPropagation(),U.value=e,Y.value=!0)},Re=n=>{if(m.value){const e=[];if(T.value.forEach(t=>{e.push(t)}),n.button==2)n.preventDefault(),e.pop();else if(e.push(A(n.offsetX,n.offsetY)),e.length>=4){Be(e);return}T.value=e}},Be=n=>{const e=[],t={x1:n[0].x,x2:n[1].x,x3:n[2].x,x4:n[3].x,y1:n[0].y,y2:n[1].y,y3:n[2].y,y4:n[3].y,text:"",attrib:{Type:""},value_attrib:{}};v.value.forEach(i=>{e.push(i)}),e.push(t),v.value=e,T.value=[]};return(n,e)=>(c(),p("div",rt,[s("div",dt,[s("div",ct,[s("div",vt,[r(Qe,{"onUpdate:modelValue":[e[0]||(e[0]=t=>se(t)),e[1]||(e[1]=t=>h.value=t)],style:{"max-width":"300px"},modelValue:h.value,options:b.value,label:"Engine"},null,8,["modelValue","options"])]),s("div",null,[r(fe,{outline:"",color:"primary",label:"Decode",onClick:oe}),r(me,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=t=>V.value=t),label:"Save Detection Results"},null,8,["modelValue"]),s("span",gt,G(E.value),1)]),s("div",null,[r(me,{modelValue:w.value,"onUpdate:modelValue":e[3]||(e[3]=t=>w.value=t),label:"Show Detection Results"},null,8,["modelValue"])]),s("div",null,[r(me,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=t=>k.value=t),label:"Show Ground Trurh"},null,8,["modelValue"])]),s("div",ft,[s("div",mt,[H(" Barcode Results: "),r(be,{bordered:"",class:"rounded-borders"},{default:d(()=>[(c(!0),p(F,null,z(S.value,(t,i)=>(c(),J(Ie,{class:ye(o.value.indexOf(i)!=-1?"incorrect":"correct"),"switch-toggle-side":"","dense-toggle":"",label:i.toString()+": "+t.barcodeText,key:i},{default:d(()=>[s("pre",null,""+G(JSON.stringify(t,null,4))+`
                `,1)]),_:2},1032,["class","label"]))),128))]),_:1})]),s("div",ht,[H(" Ground Truth: "),r(be,{bordered:"",class:"rounded-borders"},{default:d(()=>[(c(!0),p(F,null,z(v.value,(t,i)=>(c(),J(Ie,{"switch-toggle-side":"","dense-toggle":"",label:i.toString()+": "+t.text,key:i},{default:d(()=>[s("pre",null,""+G(JSON.stringify(t,null,4))+`
                `,1)]),_:2},1032,["label"]))),128))]),_:1})])])]),s("div",bt,[s("div",xt,[x.value?X("",!0):(c(),p("div",yt,"Downloading... ")),pt,s("div",null,[r(it,{color:"primary",label:"Action"},{default:d(()=>[r(be,null,{default:d(()=>[O((c(),J(te,{clickable:"",onClick:re},{default:d(()=>[r(M,null,{default:d(()=>[r($,null,{default:d(()=>[H("Save the image")]),_:1})]),_:1})]),_:1})),[[ee]]),O((c(),J(te,{clickable:"",onClick:de},{default:d(()=>[r(M,null,{default:d(()=>[r($,null,{default:d(()=>[H(G(m.value?"Disable":"Enable")+" annotation",1)]),_:1})]),_:1})]),_:1})),[[ee]]),O((c(),J(te,{clickable:"",onClick:ce},{default:d(()=>[r(M,null,{default:d(()=>[r($,null,{default:d(()=>[H("Convert detected results to ground truth")]),_:1})]),_:1})]),_:1})),[[ee]]),O((c(),J(te,{clickable:"",onClick:l},{default:d(()=>[r(M,null,{default:d(()=>[r($,null,{default:d(()=>[H("Save modified ground truth")]),_:1})]),_:1})]),_:1})),[[ee]])]),_:1})]),_:1})])]),s("div",_t,[x.value?(c(),p("svg",{key:0,viewBox:"0 0 "+y.value+" "+I.value,ref_key:"svgRef",ref:C,class:ye("fade"+(m.value?" annotator":"")),onContextmenu:e[5]||(e[5]=t=>L(t)),onMousedown:e[6]||(e[6]=t=>Re(t))},[s("image",{href:x.value},null,8,St),w.value?(c(),p("a",Tt,[(c(!0),p(F,null,z(S.value,(t,i)=>(c(),p("polygon",{key:"polygon"+i,points:W(t),class:"barcode-polygon"},[s("title",null,G(t.barcodeFormat+": "+t.barcodeText),1)],8,It))),128))])):X("",!0),k.value?(c(),p("a",kt,[(c(!0),p(F,null,z(v.value,(t,i)=>(c(),p("polygon",{key:"polygon"+i,points:W(t),class:"groundtruth-polygon",onMousedown:R=>ve(R,i)},[s("title",null,G(t.attrib.Type+": "+t.text),1)],40,Ct))),128)),(c(!0),p(F,null,z(v.value,(t,i)=>(c(),p("text",{key:"text"+i,x:t.x1,y:t.y1,"font-size":16/(640/y.value),class:"barcodeTypeLabel"},G(t.attrib.Type),9,Lt))),128))])):X("",!0),m.value?(c(),p("a",Rt,[(c(!0),p(F,null,z(T.value,(t,i)=>(c(),p("circle",{key:"point"+i,cx:t.x,cy:t.y},null,8,Bt))),128))])):X("",!0)],42,wt)):X("",!0)])])]),s("div",Dt,[r(fe,{outline:"",color:"red",label:"Delete this image",onClick:ue})]),s("div",Et,[r(Je,{modelValue:Y.value,"onUpdate:modelValue":e[9]||(e[9]=t=>Y.value=t)},{default:d(()=>[r($e,null,{default:d(()=>[r(Se,null,{default:d(()=>[Qt]),_:1}),r(Se,{class:"q-pt-none"},{default:d(()=>[s("div",null,[qt,s("div",null,[O(s("input",{type:"text",id:"'ground-truth-format","onUpdate:modelValue":e[7]||(e[7]=t=>v.value[U.value].attrib.Type=t)},null,512),[[pe,v.value[U.value].attrib.Type]])]),Nt,s("div",null,[O(s("textarea",{id:"'ground-truth-text","onUpdate:modelValue":e[8]||(e[8]=t=>v.value[U.value].text=t)},null,512),[[pe,v.value[U.value].text]])])])]),_:1}),r(ot,{align:"right"},{default:d(()=>[O(r(fe,{flat:"",color:"primary",label:"Close"},null,512),[[ee]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}});export{zt as default};