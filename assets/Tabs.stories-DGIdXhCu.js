import{r as o,j as e,R as U}from"./iframe-BQX19wKT.js";import{c as $}from"./index-D08iSxHX.js";import{u as Be}from"./useControlled-oefsznLa.js";import{u as Oe,a as Y,E as he,b as Fe,c as q,g as Ke,i as $e,f as Pe,d as le}from"./floating-ui.utils.dom-CYw4sdgl.js";import{g as Ge,a as Ye,c as Ue,i as ue,b as Ze,d as Xe,e as qe,f as Je,h as Qe,u as Re,C as _e,r as fe,j as et}from"./useCompositeListItem-C7Cj2WSK.js";import{s as Te,A as tt,a as at,i as ge,b as Q,c as be,H as nt,E as st,d as ve,e as pe,V as it,f as ot,g as rt,h as lt,M as ct}from"./composite-DbQjD2Bb.js";import{C as dt,u as ut}from"./useButton-rEuVI4Aw.js";import{o as xe}from"./owner-CvMgaIeV.js";import{u as we}from"./useBaseUiId-1bs64Evn.js";import{u as bt}from"./useCompositeItem-DHZvinuN.js";import{c as ye,n as je}from"./createBaseUIEventDetails-CaQbGL1v.js";import{a as pt,c as ht}from"./element-BLX3B4st.js";import{u as mt}from"./useOnMount-Cf7pIMt_.js";import{c as F}from"./createLucideIcon-BH633XQL.js";import{S as ft}from"./settings-CJnVLyoO.js";import"./preload-helper-Ct5FWWRu.js";import"./event-Dv_HaPaP.js";import"./useId-ajGyVUh6.js";function Tt(t){return t==null||t.hasAttribute("disabled")||t.getAttribute("aria-disabled")==="true"}function gt(){const[,t]=o.useState({});return o.useCallback(()=>{t({})},[])}const Ie="data-composite-item-active",vt=[];function xt(t){const{itemSizes:i,cols:s=1,loopFocus:b=!0,dense:n=!1,orientation:c="both",direction:d,highlightedIndex:I,onHighlightedIndexChange:k,rootRef:C,enableHomeAndEndKeys:v=!1,stopEventPropagation:m=!1,disabledIndices:P,modifierKeys:E=vt}=t,[R,y]=o.useState(0),g=s>1,_=o.useRef(null),u=Oe(_,C),h=o.useRef([]),w=o.useRef(!1),T=I??R,f=Y((l,S=!1)=>{if((k??y)(l),S){const W=h.current[l];Te(_.current,W,d,c)}}),j=Y(l=>{if(l.size===0||w.current)return;w.current=!0;const S=Array.from(l.keys()),W=S.find(x=>x?.hasAttribute(Ie))??null,N=W?S.indexOf(W):-1;N!==-1&&f(N),Te(_.current,W,d,c)}),A=o.useMemo(()=>({"aria-orientation":c==="both"?void 0:c,ref:u,onFocus(l){!_.current||!ge(l.target)||l.target.setSelectionRange(0,l.target.value.length??0)},onKeyDown(l){const S=v?tt:at;if(!S.has(l.key)||yt(l,E)||!_.current)return;const N=d==="rtl",x=N?ve:be,H={horizontal:x,vertical:Q,both:x}[c],z=N?be:ve,D={horizontal:z,vertical:pe,both:z}[c];if(ge(l.target)&&!Tt(l.target)){const B=l.target.selectionStart,V=l.target.selectionEnd,de=l.target.value??"";if(B==null||l.shiftKey||B!==V||l.key!==D&&B<de.length||l.key!==H&&B>0)return}let r=T;const M=Ge(h,P),p=Ye(h,P);if(g){const B=i||Array.from({length:h.current.length},()=>({width:1,height:1})),V=Ue(B,s,n),de=V.findIndex(O=>O!=null&&!ue(h,O,P)),He=V.reduce((O,Z,Ve)=>Z!=null&&!ue(h,Z,P)?Ve:O,-1);r=V[Ze({current:V.map(O=>O?h.current[O]:null)},{event:l,orientation:c,loopFocus:b,cols:s,disabledIndices:qe([...P||h.current.map((O,Z)=>ue(h,Z)?Z:void 0),void 0],V),minIndex:de,maxIndex:He,prevIndex:Xe(T>p?M:T,B,V,s,l.key===Q?"bl":l.key===be?"tr":"tl"),rtl:N})]}const L={horizontal:[x],vertical:[Q],both:[x,Q]}[c],K={horizontal:[z],vertical:[pe],both:[z,pe]}[c],me=g?S:{horizontal:v?rt:lt,vertical:v?it:ot,both:S}[c];v&&(l.key===nt?r=M:l.key===st&&(r=p)),r===T&&(L.includes(l.key)||K.includes(l.key))&&(b&&r===p&&L.includes(l.key)?r=M:b&&r===M&&K.includes(l.key)?r=p:r=Je(h,{startingIndex:r,decrement:K.includes(l.key),disabledIndices:P})),r!==T&&!Qe(h,r)&&(m&&l.stopPropagation(),me.has(l.key)&&l.preventDefault(),f(r,!0),queueMicrotask(()=>{h.current[r]?.focus()}))}}),[s,n,d,P,h,v,T,g,i,b,u,E,f,c,m]);return o.useMemo(()=>({props:A,highlightedIndex:T,onHighlightedIndexChange:f,elementsRef:h,disabledIndices:P,onMapChange:j,relayKeyboardEvent:A.onKeyDown}),[A,T,f,h,P,j])}function yt(t,i){for(const s of ct.values())if(!i.includes(s)&&t.getModifierState(s))return!0;return!1}function jt(t){const{render:i,className:s,refs:b=he,props:n=he,state:c=Fe,stateAttributesMapping:d,highlightedIndex:I,onHighlightedIndexChange:k,orientation:C,dense:v,itemSizes:m,loopFocus:P,cols:E,enableHomeAndEndKeys:R,onMapChange:y,stopEventPropagation:g=!0,rootRef:_,disabledIndices:u,modifierKeys:h,highlightItemOnHover:w=!1,tag:T="div",...f}=t,j=Re(),{props:A,highlightedIndex:l,onHighlightedIndexChange:S,elementsRef:W,onMapChange:N,relayKeyboardEvent:x}=xt({itemSizes:m,cols:E,loopFocus:P,dense:v,orientation:C,highlightedIndex:I,onHighlightedIndexChange:k,rootRef:_,stopEventPropagation:g,enableHomeAndEndKeys:R,direction:j,disabledIndices:u,modifierKeys:h}),H=q(T,t,{state:c,ref:b,props:[A,...n,f],stateAttributesMapping:d}),z=o.useMemo(()=>({highlightedIndex:l,onHighlightedIndexChange:S,highlightItemOnHover:w,relayKeyboardEvent:x}),[l,S,w,x]);return e.jsx(dt.Provider,{value:z,children:e.jsx(_e,{elementsRef:W,onMapChange:D=>{y?.(D),N(D)},children:H})})}function Me(t){const i=Ke(t);let s=parseFloat(i.width)||0,b=parseFloat(i.height)||0;const n=$e(t),c=n?t.offsetWidth:s,d=n?t.offsetHeight:b;return(fe(s)!==c||fe(b)!==d)&&(s=c,b=d),{width:s,height:b}}const Ce=o.createContext(void 0);function X(){const t=o.useContext(Ce);if(t===void 0)throw new Error(Pe(64));return t}let Mt=(function(t){return t.activationDirection="data-activation-direction",t.orientation="data-orientation",t})({});const ce={tabActivationDirection:t=>({[Mt.activationDirection]:t})},kt=o.forwardRef(function(i,s){const{className:b,defaultValue:n=0,onValueChange:c,orientation:d="horizontal",render:I,value:k,...C}=i,v=Re(),m=Object.hasOwn(i,"defaultValue"),P=o.useRef([]),[E,R]=o.useState(()=>new Map),[y,g]=Be({controlled:k,default:n,name:"Tabs",state:"value"}),_=k!==void 0,[u,h]=o.useState(()=>new Map),[w,T]=o.useState("none"),f=Y((r,M)=>{c?.(r,M),!M.isCanceled&&(g(r),T(M.activationDirection))}),j=Y((r,M)=>{R(p=>{if(p.get(r)===M)return p;const L=new Map(p);return L.set(r,M),L})}),A=Y((r,M)=>{R(p=>{if(!p.has(r)||p.get(r)!==M)return p;const L=new Map(p);return L.delete(r),L})}),l=o.useCallback(r=>E.get(r),[E]),S=o.useCallback(r=>{for(const M of u.values())if(r===M?.value)return M?.id},[u]),W=o.useCallback(r=>{if(r===void 0)return null;for(const[M,p]of u.entries())if(p!=null&&r===(p.value??p.index))return M;return null},[u]),N=o.useMemo(()=>({direction:v,getTabElementBySelectedValue:W,getTabIdByPanelValue:S,getTabPanelIdByValue:l,onValueChange:f,orientation:d,registerMountedTabPanel:j,setTabMap:h,unregisterMountedTabPanel:A,tabActivationDirection:w,value:y}),[v,W,S,l,f,d,j,h,A,w,y]),x=o.useMemo(()=>{for(const r of u.values())if(r!=null&&r.value===y)return r},[u,y]),H=o.useMemo(()=>{for(const r of u.values())if(r!=null&&!r.disabled)return r.value},[u]);le(()=>{if(_||u.size===0)return;const r=x?.disabled,M=x==null&&y!==null;if(m&&r&&y===n||!r&&!M)return;const L=H??null;y!==L&&(g(L),T("none"))},[n,H,m,_,x,T,g,u,y]);const D=q("div",i,{state:{orientation:d,tabActivationDirection:w},ref:s,props:C,stateAttributesMapping:ce});return e.jsx(Ce.Provider,{value:N,children:e.jsx(_e,{elementsRef:P,children:D})})}),Se=o.createContext(void 0);function Le(){const t=o.useContext(Se);if(t===void 0)throw new Error(Pe(65));return t}const Pt=o.forwardRef(function(i,s){const{className:b,disabled:n=!1,render:c,value:d,id:I,nativeButton:k=!0,...C}=i,{value:v,getTabPanelIdByValue:m,orientation:P}=X(),{activateOnFocus:E,highlightedTabIndex:R,onTabActivation:y,setHighlightedTabIndex:g,tabsListElement:_}=Le(),u=we(I),h=o.useMemo(()=>({disabled:n,id:u,value:d}),[n,u,d]),{compositeProps:w,compositeRef:T,index:f}=bt({metadata:h}),j=d===v,A=o.useRef(!1);le(()=>{if(A.current){A.current=!1;return}if(!(j&&f>-1&&R!==f))return;const p=_;if(p!=null){const L=pt(xe(p));if(L&&ht(p,L))return}n||g(f)},[j,f,R,g,n,_]);const{getButtonProps:l,buttonRef:S}=ut({disabled:n,native:k,focusableWhenDisabled:!0}),W=m(d),N=o.useRef(!1),x=o.useRef(!1);function H(p){j||n||y(d,ye(je,p.nativeEvent,void 0,{activationDirection:"none"}))}function z(p){j||(f>-1&&!n&&g(f),!n&&E&&(!N.current||N.current&&x.current)&&y(d,ye(je,p.nativeEvent,void 0,{activationDirection:"none"})))}function D(p){if(j||n)return;N.current=!0;function L(){N.current=!1,x.current=!1}(!p.button||p.button===0)&&(x.current=!0,xe(p.currentTarget).addEventListener("pointerup",L,{once:!0}))}const r=o.useMemo(()=>({disabled:n,active:j,orientation:P}),[n,j,P]);return q("button",i,{state:r,ref:[s,S,T],props:[w,{role:"tab","aria-controls":W,"aria-selected":j,id:u,onClick:H,onFocus:z,onPointerDown:D,[Ie]:j?"":void 0,onKeyDownCapture(){A.current=!0}},C,l]})}),Rt='!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';let G=(function(t){return t.activeTabLeft="--active-tab-left",t.activeTabRight="--active-tab-right",t.activeTabTop="--active-tab-top",t.activeTabBottom="--active-tab-bottom",t.activeTabWidth="--active-tab-width",t.activeTabHeight="--active-tab-height",t})({});const _t={...ce,activeTabPosition:()=>null,activeTabSize:()=>null},wt=o.forwardRef(function(i,s){const{className:b,render:n,renderBeforeHydration:c=!1,...d}=i,{getTabElementBySelectedValue:I,orientation:k,tabActivationDirection:C,value:v}=X(),{tabsListElement:m}=Le(),[P,E]=o.useState(!1),{value:R}=X();mt(()=>E(!0));const y=gt();o.useEffect(()=>{if(v!=null&&m!=null&&typeof ResizeObserver<"u"){const x=new ResizeObserver(y);return x.observe(m),()=>{x.disconnect()}}},[v,m,y]);let g=0,_=0,u=0,h=0,w=0,T=0,f=!1;if(v!=null&&m!=null){const x=I(v);if(f=!0,x!=null){const{width:H,height:z}=Me(x),{width:D,height:r}=Me(m),M=x.getBoundingClientRect(),p=m.getBoundingClientRect(),L=D>0?p.width/D:1,K=r>0?p.height/r:1;if(Math.abs(L)>Number.EPSILON&&Math.abs(K)>Number.EPSILON){const B=M.left-p.left,V=M.top-p.top;g=B/L+m.scrollLeft-m.clientLeft,u=V/K+m.scrollTop-m.clientTop}else g=x.offsetLeft,u=x.offsetTop;w=H,T=z,_=m.scrollWidth-g-w,h=m.scrollHeight-u-T}}const j=o.useMemo(()=>f?{left:g,right:_,top:u,bottom:h}:null,[g,_,u,h,f]),A=o.useMemo(()=>f?{width:w,height:T}:null,[w,T,f]),l=o.useMemo(()=>{if(f)return{[G.activeTabLeft]:`${g}px`,[G.activeTabRight]:`${_}px`,[G.activeTabTop]:`${u}px`,[G.activeTabBottom]:`${h}px`,[G.activeTabWidth]:`${w}px`,[G.activeTabHeight]:`${T}px`}},[g,_,u,h,w,T,f]),S=f&&w>0&&T>0,W=o.useMemo(()=>({orientation:k,activeTabPosition:j,activeTabSize:A,tabActivationDirection:C}),[k,j,A,C]),N=q("span",i,{state:W,ref:s,props:[{role:"presentation",style:l,hidden:!S},d,{suppressHydrationWarning:!0}],stateAttributesMapping:_t});return R==null?null:e.jsxs(o.Fragment,{children:[N,!P&&c&&e.jsx("script",{dangerouslySetInnerHTML:{__html:Rt},suppressHydrationWarning:!0})]})});let It=(function(t){return t.index="data-index",t.activationDirection="data-activation-direction",t.orientation="data-orientation",t.hidden="data-hidden",t})({});const Ct=o.forwardRef(function(i,s){const{className:b,value:n,render:c,keepMounted:d=!1,...I}=i,{value:k,getTabIdByPanelValue:C,orientation:v,tabActivationDirection:m,registerMountedTabPanel:P,unregisterMountedTabPanel:E}=X(),R=we(),y=o.useMemo(()=>({id:R,value:n}),[R,n]),{ref:g,index:_}=et({metadata:y}),u=n!==k,h=C(n),w=o.useMemo(()=>({hidden:u,orientation:v,tabActivationDirection:m}),[u,v,m]),T=q("div",i,{state:w,ref:[s,g],props:[{"aria-labelledby":h,hidden:u,id:R??void 0,role:"tabpanel",tabIndex:u?-1:0,[It.index]:_},I],stateAttributesMapping:ce});return le(()=>{if(!(u&&!d)&&R!=null)return P(n,R),()=>{E(n,R)}},[u,d,n,R,P,E]),!u||d?T:null}),St=o.forwardRef(function(i,s){const{activateOnFocus:b=!1,className:n,loopFocus:c=!0,render:d,...I}=i,{getTabElementBySelectedValue:k,onValueChange:C,orientation:v,value:m,setTabMap:P,tabActivationDirection:E}=X(),[R,y]=o.useState(0),[g,_]=o.useState(null),u=Lt(m,v,g,k),h=Y((j,A)=>{if(j!==m){const l=u(j);A.activationDirection=l,C(j,A)}}),w=o.useMemo(()=>({orientation:v,tabActivationDirection:E}),[v,E]),T={"aria-orientation":v==="vertical"?"vertical":void 0,role:"tablist"},f=o.useMemo(()=>({activateOnFocus:b,highlightedTabIndex:R,onTabActivation:h,setHighlightedTabIndex:y,tabsListElement:g,value:m}),[b,R,h,y,g,m]);return e.jsx(Se.Provider,{value:f,children:e.jsx(jt,{render:d,className:n,state:w,refs:[s,_],props:[T,I],stateAttributesMapping:ce,highlightedIndex:R,enableHomeAndEndKeys:!0,loopFocus:c,orientation:v,onHighlightedIndexChange:y,onMapChange:P,disabledIndices:he})})});function ke(t,i){const{left:s,top:b}=t.getBoundingClientRect(),{left:n,top:c}=i.getBoundingClientRect(),d=s-n,I=b-c;return{left:d,top:I}}function Lt(t,i,s,b){const[n,c]=o.useState(null);return le(()=>{if(t==null||s==null){c(null);return}const d=b(t);if(d==null){c(null);return}const{left:I,top:k}=ke(d,s);c(i==="horizontal"?I:k)},[i,b,s,t]),o.useCallback(d=>{if(d===t)return"none";if(d==null)return c(null),"none";if(d!=null&&s!=null){const I=b(d);if(I!=null){const{left:k,top:C}=ke(I,s);if(n==null)return c(i==="horizontal"?k:C),"none";if(i==="horizontal"){if(k<n)return c(k),"left";if(k>n)return c(k),"right"}else{if(C<n)return c(C),"up";if(C>n)return c(C),"down"}}}return"none"},[b,i,n,s,t])}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],Et=F("app-window",At);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Wt=F("calendar-days",Nt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],Dt=F("circle-arrow-down",zt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],Vt=F("clapperboard",Ht);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ot=F("file-text",Bt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Ae=F("layout-grid",Ft);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],$t=F("music-2",Kt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Yt=F("user-round",Gt);function J(t,i){return i===void 0?t:typeof i=="string"?typeof t=="function"?s=>$(t(s),i):$(t,i):s=>$(typeof t=="function"?t(s):t,i(s))}const Ee=U.forwardRef(({className:t,style:i,orientation:s="horizontal",variant:b="segmented",...n},c)=>{const I=J(s==="vertical"?"memori-tabs memori-tabs--vertical":"memori-tabs memori-tabs--horizontal",t);return e.jsx(kt,{ref:c,"data-memori-variant":b,orientation:s,...n,className:I,style:i})});Ee.displayName="Tabs.Root";const Ne=U.forwardRef(({activateOnFocus:t=!0,className:i,style:s,loopFocus:b,...n},c)=>e.jsx(St,{ref:c,activateOnFocus:t,loopFocus:b,...n,className:J(d=>$("memori-tabs__list",`memori-tabs__list--${d.orientation}`),i),style:s}));Ne.displayName="Tabs.List";const We=U.forwardRef(({className:t,style:i,...s},b)=>e.jsx(Pt,{ref:b,...s,className:J(n=>$("memori-tabs__tab",`memori-tabs__tab--${n.orientation}`,n.active&&"memori-tabs__tab--active",n.disabled&&"memori-tabs__tab--disabled"),t),style:i}));We.displayName="Tabs.Tab";const ze=U.forwardRef(({className:t,style:i,...s},b)=>e.jsx(Ct,{ref:b,...s,className:J(n=>$("memori-tabs__panel",`memori-tabs__panel--${n.orientation}`,n.hidden&&"memori-tabs__panel--hidden"),t),style:i}));ze.displayName="Tabs.Panel";const De=U.forwardRef(({className:t,style:i,renderBeforeHydration:s,...b},n)=>e.jsx(wt,{ref:n,...b,renderBeforeHydration:s,className:J(c=>$("memori-tabs__indicator",`memori-tabs__indicator--${c.orientation}`),t),style:i}));De.displayName="Tabs.Indicator";const a={Root:Ee,List:Ne,Tab:We,Panel:ze,Indicator:De},ba={title:"Components/Tabs",component:a.Root,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Built on `@base-ui/react/tabs`. Set **`variant`** on `Tabs.Root`: `segmented` (muted track + sliding white pill) or `underline` (baseline rule + thick marker). WAI-ARIA tabs (WCAG 2.1 AA+), roving focus, arrow keys. Controlled API: `value` / `onValueChange`. `Tabs.List` defaults `activateOnFocus` to `true`. `prefers-reduced-motion` disables non-essential animation."}}}},ee={render:()=>e.jsx("div",{style:{maxWidth:"var(--memori-modal-size-md)",padding:"var(--memori-spacing-md)",borderRadius:"var(--memori-radius-box)",backgroundColor:"var(--memori-secondary-background)",boxShadow:"var(--memori-shadow-sm)"},children:e.jsxs(a.Root,{variant:"underline",defaultValue:"assignee",children:[e.jsxs(a.List,{"aria-label":"Project views",children:[e.jsx(a.Tab,{value:"status",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Dt,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"By Status"})]})}),e.jsx(a.Tab,{value:"assignee",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Yt,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"By Assignee"})]})}),e.jsx(a.Tab,{value:"projects",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Ae,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"All projects"})]})}),e.jsx(a.Tab,{value:"calendar",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Wt,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"Calendar"})]})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"status",keepMounted:!0,children:e.jsx("p",{children:"Filter by status."})}),e.jsx(a.Panel,{value:"assignee",keepMounted:!0,children:e.jsx("p",{children:"Filter by assignee."})}),e.jsx(a.Panel,{value:"projects",keepMounted:!0,children:e.jsx("p",{children:"All projects."})}),e.jsx(a.Panel,{value:"calendar",keepMounted:!0,children:e.jsx("p",{children:"Calendar view."})})]})})},te={render:()=>e.jsxs(a.Root,{defaultValue:"music",children:[e.jsxs(a.List,{"aria-label":"Media type",children:[e.jsx(a.Tab,{value:"music",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx($t,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"Music"})]})}),e.jsx(a.Tab,{value:"movies",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Vt,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"Movies"})]})}),e.jsx(a.Tab,{value:"app",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Et,{"aria-hidden":"true",size:18,strokeWidth:2}),e.jsx("span",{children:"App"})]})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"music",keepMounted:!0,children:e.jsx("p",{children:"Music library and playlists."})}),e.jsx(a.Panel,{value:"movies",keepMounted:!0,children:e.jsx("p",{children:"Films and series."})}),e.jsx(a.Panel,{value:"app",keepMounted:!0,children:e.jsx("p",{children:"Application settings and data."})})]})},ae={render:()=>e.jsxs(a.Root,{defaultValue:"account",children:[e.jsxs(a.List,{"aria-label":"Account settings",children:[e.jsx(a.Tab,{value:"account",children:"Account"}),e.jsx(a.Tab,{value:"password",children:"Password"}),e.jsx(a.Tab,{value:"notifications",children:"Notifications"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"account",keepMounted:!0,children:e.jsx("p",{children:"Manage your account details and email preferences."})}),e.jsx(a.Panel,{value:"password",keepMounted:!0,children:e.jsx("p",{children:"Change your password and security options."})}),e.jsx(a.Panel,{value:"notifications",keepMounted:!0,children:e.jsx("p",{children:"Choose how you receive updates."})})]})},ne={render:()=>e.jsxs(a.Root,{defaultValue:"general",orientation:"vertical",children:[e.jsxs(a.List,{"aria-label":"Settings sections",children:[e.jsx(a.Tab,{value:"general",children:"General"}),e.jsx(a.Tab,{value:"privacy",children:"Privacy"}),e.jsx(a.Tab,{value:"billing",children:"Billing"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"general",keepMounted:!0,children:e.jsx("p",{children:"General application settings."})}),e.jsx(a.Panel,{value:"privacy",keepMounted:!0,children:e.jsx("p",{children:"Privacy and data controls."})}),e.jsx(a.Panel,{value:"billing",keepMounted:!0,children:e.jsx("p",{children:"Billing history and payment methods."})})]})},se={render:()=>e.jsxs(a.Root,{defaultValue:"one",children:[e.jsxs(a.List,{"aria-label":"Example with disabled tab",children:[e.jsx(a.Tab,{value:"one",children:"Enabled"}),e.jsx(a.Tab,{value:"two",disabled:!0,children:"Disabled"}),e.jsx(a.Tab,{value:"three",children:"Also enabled"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"one",keepMounted:!0,children:e.jsx("p",{children:"First panel."})}),e.jsx(a.Panel,{value:"two",keepMounted:!0,children:e.jsx("p",{children:"Second panel (not reachable when middle tab is disabled)."})}),e.jsx(a.Panel,{value:"three",keepMounted:!0,children:e.jsx("p",{children:"Third panel."})})]})},ie={render:function(){const[i,s]=U.useState("alpha");return e.jsx("div",{children:e.jsxs(a.Root,{value:i,onValueChange:s,children:[e.jsxs(a.List,{"aria-label":"Controlled tabs",children:[e.jsx(a.Tab,{value:"alpha",children:"Alpha"}),e.jsx(a.Tab,{value:"beta",children:"Beta"}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"alpha",keepMounted:!0,children:e.jsxs("p",{children:["Alpha content. Current value: ",String(i)]})}),e.jsx(a.Panel,{value:"beta",keepMounted:!0,children:e.jsx("p",{children:"Beta content."})})]})})}},oe={render:()=>e.jsxs(a.Root,{defaultValue:"overview",children:[e.jsxs(a.List,{"aria-label":"Project areas",children:[e.jsx(a.Tab,{value:"overview",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Ae,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Overview"})]})}),e.jsx(a.Tab,{value:"documents",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Ot,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Documents"})]})}),e.jsx(a.Tab,{value:"settings",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(ft,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Settings"})]})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"overview",keepMounted:!0,children:e.jsx("p",{children:"Project overview."})}),e.jsx(a.Panel,{value:"documents",keepMounted:!0,children:e.jsx("p",{children:"Documents list."})}),e.jsx(a.Panel,{value:"settings",keepMounted:!0,children:e.jsx("p",{children:"Settings for this project."})})]})},re={render:()=>e.jsx("div",{style:{maxWidth:"calc(10 * var(--memori-spacing-md))"},children:e.jsxs(a.Root,{defaultValue:"short",children:[e.jsxs(a.List,{"aria-label":"Tabs with long labels",children:[e.jsx(a.Tab,{value:"short",children:"Short"}),e.jsx(a.Tab,{value:"long",title:"Very long label that should truncate in narrow layouts",children:e.jsx("span",{className:"memori-tabs__tab-label",children:"Very long label that should truncate in narrow layouts"})}),e.jsx(a.Indicator,{})]}),e.jsx(a.Panel,{value:"short",keepMounted:!0,children:e.jsx("p",{children:"Narrow container tests truncation on the tab list."})}),e.jsx(a.Panel,{value:"long",keepMounted:!0,children:e.jsx("p",{children:"Long label tab panel."})})]})})};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 'var(--memori-modal-size-md)',
    padding: 'var(--memori-spacing-md)',
    borderRadius: 'var(--memori-radius-box)',
    backgroundColor: 'var(--memori-secondary-background)',
    boxShadow: 'var(--memori-shadow-sm)'
  }}>
      <Tabs.Root variant="underline" defaultValue="assignee">
        <Tabs.List aria-label="Project views">
          <Tabs.Tab value="status">
            <span className="memori-tabs__tab-inner">
              <ArrowDownCircle aria-hidden="true" size={18} strokeWidth={2} />
              <span>By Status</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="assignee">
            <span className="memori-tabs__tab-inner">
              <UserRound aria-hidden="true" size={18} strokeWidth={2} />
              <span>By Assignee</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="projects">
            <span className="memori-tabs__tab-inner">
              <LayoutGrid aria-hidden="true" size={18} strokeWidth={2} />
              <span>All projects</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="calendar">
            <span className="memori-tabs__tab-inner">
              <CalendarDays aria-hidden="true" size={18} strokeWidth={2} />
              <span>Calendar</span>
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="status" keepMounted>
          <p>Filter by status.</p>
        </Tabs.Panel>
        <Tabs.Panel value="assignee" keepMounted>
          <p>Filter by assignee.</p>
        </Tabs.Panel>
        <Tabs.Panel value="projects" keepMounted>
          <p>All projects.</p>
        </Tabs.Panel>
        <Tabs.Panel value="calendar" keepMounted>
          <p>Calendar view.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="music">
      <Tabs.List aria-label="Media type">
        <Tabs.Tab value="music">
          <span className="memori-tabs__tab-inner">
            <Music2 aria-hidden="true" size={18} strokeWidth={2} />
            <span>Music</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="movies">
          <span className="memori-tabs__tab-inner">
            <Clapperboard aria-hidden="true" size={18} strokeWidth={2} />
            <span>Movies</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="app">
          <span className="memori-tabs__tab-inner">
            <AppWindow aria-hidden="true" size={18} strokeWidth={2} />
            <span>App</span>
          </span>
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="music" keepMounted>
        <p>Music library and playlists.</p>
      </Tabs.Panel>
      <Tabs.Panel value="movies" keepMounted>
        <p>Films and series.</p>
      </Tabs.Panel>
      <Tabs.Panel value="app" keepMounted>
        <p>Application settings and data.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="account">
      <Tabs.List aria-label="Account settings">
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="password">Password</Tabs.Tab>
        <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="account" keepMounted>
        <p>Manage your account details and email preferences.</p>
      </Tabs.Panel>
      <Tabs.Panel value="password" keepMounted>
        <p>Change your password and security options.</p>
      </Tabs.Panel>
      <Tabs.Panel value="notifications" keepMounted>
        <p>Choose how you receive updates.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="general" orientation="vertical">
      <Tabs.List aria-label="Settings sections">
        <Tabs.Tab value="general">General</Tabs.Tab>
        <Tabs.Tab value="privacy">Privacy</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="general" keepMounted>
        <p>General application settings.</p>
      </Tabs.Panel>
      <Tabs.Panel value="privacy" keepMounted>
        <p>Privacy and data controls.</p>
      </Tabs.Panel>
      <Tabs.Panel value="billing" keepMounted>
        <p>Billing history and payment methods.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="one">
      <Tabs.List aria-label="Example with disabled tab">
        <Tabs.Tab value="one">Enabled</Tabs.Tab>
        <Tabs.Tab value="two" disabled>
          Disabled
        </Tabs.Tab>
        <Tabs.Tab value="three">Also enabled</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="one" keepMounted>
        <p>First panel.</p>
      </Tabs.Panel>
      <Tabs.Panel value="two" keepMounted>
        <p>Second panel (not reachable when middle tab is disabled).</p>
      </Tabs.Panel>
      <Tabs.Panel value="three" keepMounted>
        <p>Third panel.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = React.useState<string | number>('alpha');
    return <div>
        <Tabs.Root value={value} onValueChange={setValue}>
          <Tabs.List aria-label="Controlled tabs">
            <Tabs.Tab value="alpha">Alpha</Tabs.Tab>
            <Tabs.Tab value="beta">Beta</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Panel value="alpha" keepMounted>
            <p>Alpha content. Current value: {String(value)}</p>
          </Tabs.Panel>
          <Tabs.Panel value="beta" keepMounted>
            <p>Beta content.</p>
          </Tabs.Panel>
        </Tabs.Root>
      </div>;
  }
}`,...ie.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="overview">
      <Tabs.List aria-label="Project areas">
        <Tabs.Tab value="overview">
          <span className="memori-tabs__tab-inner">
            <LayoutGrid aria-hidden="true" size={16} strokeWidth={2} />
            <span>Overview</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="documents">
          <span className="memori-tabs__tab-inner">
            <FileText aria-hidden="true" size={16} strokeWidth={2} />
            <span>Documents</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="settings">
          <span className="memori-tabs__tab-inner">
            <Settings aria-hidden="true" size={16} strokeWidth={2} />
            <span>Settings</span>
          </span>
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="overview" keepMounted>
        <p>Project overview.</p>
      </Tabs.Panel>
      <Tabs.Panel value="documents" keepMounted>
        <p>Documents list.</p>
      </Tabs.Panel>
      <Tabs.Panel value="settings" keepMounted>
        <p>Settings for this project.</p>
      </Tabs.Panel>
    </Tabs.Root>
}`,...oe.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 'calc(10 * var(--memori-spacing-md))'
  }}>
      <Tabs.Root defaultValue="short">
        <Tabs.List aria-label="Tabs with long labels">
          <Tabs.Tab value="short">Short</Tabs.Tab>
          <Tabs.Tab value="long" title="Very long label that should truncate in narrow layouts">
            <span className="memori-tabs__tab-label">
              Very long label that should truncate in narrow layouts
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="short" keepMounted>
          <p>Narrow container tests truncation on the tab list.</p>
        </Tabs.Panel>
        <Tabs.Panel value="long" keepMounted>
          <p>Long label tab panel.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
}`,...re.parameters?.docs?.source}}};const pa=["Underline","Segmented","Default","Vertical","WithDisabledTab","Controlled","WithIcons","LongLabels"];export{ie as Controlled,ae as Default,re as LongLabels,te as Segmented,ee as Underline,ne as Vertical,se as WithDisabledTab,oe as WithIcons,pa as __namedExportsOrder,ba as default};
