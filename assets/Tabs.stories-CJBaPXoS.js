import{r as i,j as e,R as G}from"./iframe-B8-rblLz.js";import{c as F}from"./index-Cf_b6_i3.js";import{u as Oe}from"./useControlled-MyfZaxmG.js";import{u as We,a as Y,E as ue,b as Ve,c as X,g as Be,i as ze,f as Me,d as oe}from"./floating-ui.utils.dom--RLsitNG.js";import{g as Ke,a as Fe,c as $e,i as le,b as Ye,d as Ge,e as Ue,f as Ze,h as Xe,u as Re,C as Pe,r as he,j as qe}from"./useCompositeListItem-B47U8f0Z.js";import{s as pe,A as Je,a as Qe,i as fe,b as J,c as ce,H as et,E as tt,d as me,e as de,V as at,f as nt,g as st,h as ot,M as it}from"./composite-B2GdcNCG.js";import{C as rt,u as lt}from"./useButton-BGmIrAqY.js";import{o as ge}from"./owner-CvMgaIeV.js";import{u as Ie}from"./useBaseUiId-hEuNaOW_.js";import{u as ct}from"./useCompositeItem-Bjpm37pP.js";import{c as Te,n as ve}from"./createBaseUIEventDetails-srsDSIBj.js";import{a as dt,c as ut}from"./element-DX-JIHCu.js";import{u as bt}from"./useOnMount-B2tI9fY3.js";import{c as je}from"./createLucideIcon-wnTL_raX.js";import{S as ht}from"./settings-DNfYkGwT.js";import"./preload-helper-Ct5FWWRu.js";import"./event-B8GTwhVz.js";import"./useId-BEGQEjmb.js";function pt(t){return t==null||t.hasAttribute("disabled")||t.getAttribute("aria-disabled")==="true"}function ft(){const[,t]=i.useState({});return i.useCallback(()=>{t({})},[])}const we="data-composite-item-active",mt=[];function gt(t){const{itemSizes:o,cols:n=1,loopFocus:b=!0,dense:a=!1,orientation:d="both",direction:c,highlightedIndex:k,onHighlightedIndexChange:P,rootRef:S,enableHomeAndEndKeys:v=!1,stopEventPropagation:f=!1,disabledIndices:I,modifierKeys:A=mt}=t,[j,y]=i.useState(0),T=n>1,w=i.useRef(null),u=We(w,S),p=i.useRef([]),C=i.useRef(!1),g=k??j,m=Y((l,E=!1)=>{if((P??y)(l),E){const H=p.current[l];pe(w.current,H,c,d)}}),M=Y(l=>{if(l.size===0||C.current)return;C.current=!0;const E=Array.from(l.keys()),H=E.find(x=>x?.hasAttribute(we))??null,N=H?E.indexOf(H):-1;N!==-1&&m(N),pe(w.current,H,c,d)}),_=i.useMemo(()=>({"aria-orientation":d==="both"?void 0:d,ref:u,onFocus(l){!w.current||!fe(l.target)||l.target.setSelectionRange(0,l.target.value.length??0)},onKeyDown(l){const E=v?Je:Qe;if(!E.has(l.key)||Tt(l,A)||!w.current)return;const N=c==="rtl",x=N?me:ce,W={horizontal:x,vertical:J,both:x}[d],D=N?ce:me,O={horizontal:D,vertical:de,both:D}[d];if(fe(l.target)&&!pt(l.target)){const B=l.target.selectionStart,V=l.target.selectionEnd,re=l.target.value??"";if(B==null||l.shiftKey||B!==V||l.key!==O&&B<re.length||l.key!==W&&B>0)return}let r=g;const R=Ke(p,I),h=Fe(p,I);if(T){const B=o||Array.from({length:p.current.length},()=>({width:1,height:1})),V=$e(B,n,a),re=V.findIndex(z=>z!=null&&!le(p,z,I)),He=V.reduce((z,U,De)=>U!=null&&!le(p,U,I)?De:z,-1);r=V[Ye({current:V.map(z=>z?p.current[z]:null)},{event:l,orientation:d,loopFocus:b,cols:n,disabledIndices:Ue([...I||p.current.map((z,U)=>le(p,U)?U:void 0),void 0],V),minIndex:re,maxIndex:He,prevIndex:Ge(g>h?R:g,B,V,n,l.key===J?"bl":l.key===ce?"tr":"tl"),rtl:N})]}const L={horizontal:[x],vertical:[J],both:[x,J]}[d],K={horizontal:[D],vertical:[de],both:[D,de]}[d],be=T?E:{horizontal:v?st:ot,vertical:v?at:nt,both:E}[d];v&&(l.key===et?r=R:l.key===tt&&(r=h)),r===g&&(L.includes(l.key)||K.includes(l.key))&&(b&&r===h&&L.includes(l.key)?r=R:b&&r===R&&K.includes(l.key)?r=h:r=Ze(p,{startingIndex:r,decrement:K.includes(l.key),disabledIndices:I})),r!==g&&!Xe(p,r)&&(f&&l.stopPropagation(),be.has(l.key)&&l.preventDefault(),m(r,!0),queueMicrotask(()=>{p.current[r]?.focus()}))}}),[n,a,c,I,p,v,g,T,o,b,u,A,m,d,f]);return i.useMemo(()=>({props:_,highlightedIndex:g,onHighlightedIndexChange:m,elementsRef:p,disabledIndices:I,onMapChange:M,relayKeyboardEvent:_.onKeyDown}),[_,g,m,p,I,M])}function Tt(t,o){for(const n of it.values())if(!o.includes(n)&&t.getModifierState(n))return!0;return!1}function vt(t){const{render:o,className:n,refs:b=ue,props:a=ue,state:d=Ve,stateAttributesMapping:c,highlightedIndex:k,onHighlightedIndexChange:P,orientation:S,dense:v,itemSizes:f,loopFocus:I,cols:A,enableHomeAndEndKeys:j,onMapChange:y,stopEventPropagation:T=!0,rootRef:w,disabledIndices:u,modifierKeys:p,highlightItemOnHover:C=!1,tag:g="div",...m}=t,M=Re(),{props:_,highlightedIndex:l,onHighlightedIndexChange:E,elementsRef:H,onMapChange:N,relayKeyboardEvent:x}=gt({itemSizes:f,cols:A,loopFocus:I,dense:v,orientation:S,highlightedIndex:k,onHighlightedIndexChange:P,rootRef:w,stopEventPropagation:T,enableHomeAndEndKeys:j,direction:M,disabledIndices:u,modifierKeys:p}),W=X(g,t,{state:d,ref:b,props:[_,...a,m],stateAttributesMapping:c}),D=i.useMemo(()=>({highlightedIndex:l,onHighlightedIndexChange:E,highlightItemOnHover:C,relayKeyboardEvent:x}),[l,E,C,x]);return e.jsx(rt.Provider,{value:D,children:e.jsx(Pe,{elementsRef:H,onMapChange:O=>{y?.(O),N(O)},children:W})})}function xe(t){const o=Be(t);let n=parseFloat(o.width)||0,b=parseFloat(o.height)||0;const a=ze(t),d=a?t.offsetWidth:n,c=a?t.offsetHeight:b;return(he(n)!==d||he(b)!==c)&&(n=d,b=c),{width:n,height:b}}const Ce=i.createContext(void 0);function Z(){const t=i.useContext(Ce);if(t===void 0)throw new Error(Me(64));return t}let xt=(function(t){return t.activationDirection="data-activation-direction",t.orientation="data-orientation",t})({});const ie={tabActivationDirection:t=>({[xt.activationDirection]:t})},yt=i.forwardRef(function(o,n){const{className:b,defaultValue:a=0,onValueChange:d,orientation:c="horizontal",render:k,value:P,...S}=o,v=Re(),f=Object.hasOwn(o,"defaultValue"),I=i.useRef([]),[A,j]=i.useState(()=>new Map),[y,T]=Oe({controlled:P,default:a,name:"Tabs",state:"value"}),w=P!==void 0,[u,p]=i.useState(()=>new Map),[C,g]=i.useState("none"),m=Y((r,R)=>{d?.(r,R),!R.isCanceled&&(T(r),g(R.activationDirection))}),M=Y((r,R)=>{j(h=>{if(h.get(r)===R)return h;const L=new Map(h);return L.set(r,R),L})}),_=Y((r,R)=>{j(h=>{if(!h.has(r)||h.get(r)!==R)return h;const L=new Map(h);return L.delete(r),L})}),l=i.useCallback(r=>A.get(r),[A]),E=i.useCallback(r=>{for(const R of u.values())if(r===R?.value)return R?.id},[u]),H=i.useCallback(r=>{if(r===void 0)return null;for(const[R,h]of u.entries())if(h!=null&&r===(h.value??h.index))return R;return null},[u]),N=i.useMemo(()=>({direction:v,getTabElementBySelectedValue:H,getTabIdByPanelValue:E,getTabPanelIdByValue:l,onValueChange:m,orientation:c,registerMountedTabPanel:M,setTabMap:p,unregisterMountedTabPanel:_,tabActivationDirection:C,value:y}),[v,H,E,l,m,c,M,p,_,C,y]),x=i.useMemo(()=>{for(const r of u.values())if(r!=null&&r.value===y)return r},[u,y]),W=i.useMemo(()=>{for(const r of u.values())if(r!=null&&!r.disabled)return r.value},[u]);oe(()=>{if(w||u.size===0)return;const r=x?.disabled,R=x==null&&y!==null;if(f&&r&&y===a||!r&&!R)return;const L=W??null;y!==L&&(T(L),g("none"))},[a,W,f,w,x,g,T,u,y]);const O=X("div",o,{state:{orientation:c,tabActivationDirection:C},ref:n,props:S,stateAttributesMapping:ie});return e.jsx(Ce.Provider,{value:N,children:e.jsx(Pe,{elementsRef:I,children:O})})}),ke=i.createContext(void 0);function Se(){const t=i.useContext(ke);if(t===void 0)throw new Error(Me(65));return t}const Mt=i.forwardRef(function(o,n){const{className:b,disabled:a=!1,render:d,value:c,id:k,nativeButton:P=!0,...S}=o,{value:v,getTabPanelIdByValue:f,orientation:I}=Z(),{activateOnFocus:A,highlightedTabIndex:j,onTabActivation:y,setHighlightedTabIndex:T,tabsListElement:w}=Se(),u=Ie(k),p=i.useMemo(()=>({disabled:a,id:u,value:c}),[a,u,c]),{compositeProps:C,compositeRef:g,index:m}=ct({metadata:p}),M=c===v,_=i.useRef(!1);oe(()=>{if(_.current){_.current=!1;return}if(!(M&&m>-1&&j!==m))return;const h=w;if(h!=null){const L=dt(ge(h));if(L&&ut(h,L))return}a||T(m)},[M,m,j,T,a,w]);const{getButtonProps:l,buttonRef:E}=lt({disabled:a,native:P,focusableWhenDisabled:!0}),H=f(c),N=i.useRef(!1),x=i.useRef(!1);function W(h){M||a||y(c,Te(ve,h.nativeEvent,void 0,{activationDirection:"none"}))}function D(h){M||(m>-1&&!a&&T(m),!a&&A&&(!N.current||N.current&&x.current)&&y(c,Te(ve,h.nativeEvent,void 0,{activationDirection:"none"})))}function O(h){if(M||a)return;N.current=!0;function L(){N.current=!1,x.current=!1}(!h.button||h.button===0)&&(x.current=!0,ge(h.currentTarget).addEventListener("pointerup",L,{once:!0}))}const r=i.useMemo(()=>({disabled:a,active:M,orientation:I}),[a,M,I]);return X("button",o,{state:r,ref:[n,E,g],props:[C,{role:"tab","aria-controls":H,"aria-selected":M,id:u,onClick:W,onFocus:D,onPointerDown:O,[we]:M?"":void 0,onKeyDownCapture(){_.current=!0}},S,l]})}),Rt='!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';let $=(function(t){return t.activeTabLeft="--active-tab-left",t.activeTabRight="--active-tab-right",t.activeTabTop="--active-tab-top",t.activeTabBottom="--active-tab-bottom",t.activeTabWidth="--active-tab-width",t.activeTabHeight="--active-tab-height",t})({});const Pt={...ie,activeTabPosition:()=>null,activeTabSize:()=>null},It=i.forwardRef(function(o,n){const{className:b,render:a,renderBeforeHydration:d=!1,...c}=o,{getTabElementBySelectedValue:k,orientation:P,tabActivationDirection:S,value:v}=Z(),{tabsListElement:f}=Se(),[I,A]=i.useState(!1),{value:j}=Z();bt(()=>A(!0));const y=ft();i.useEffect(()=>{if(v!=null&&f!=null&&typeof ResizeObserver<"u"){const x=new ResizeObserver(y);return x.observe(f),()=>{x.disconnect()}}},[v,f,y]);let T=0,w=0,u=0,p=0,C=0,g=0,m=!1;if(v!=null&&f!=null){const x=k(v);if(m=!0,x!=null){const{width:W,height:D}=xe(x),{width:O,height:r}=xe(f),R=x.getBoundingClientRect(),h=f.getBoundingClientRect(),L=O>0?h.width/O:1,K=r>0?h.height/r:1;if(Math.abs(L)>Number.EPSILON&&Math.abs(K)>Number.EPSILON){const B=R.left-h.left,V=R.top-h.top;T=B/L+f.scrollLeft-f.clientLeft,u=V/K+f.scrollTop-f.clientTop}else T=x.offsetLeft,u=x.offsetTop;C=W,g=D,w=f.scrollWidth-T-C,p=f.scrollHeight-u-g}}const M=i.useMemo(()=>m?{left:T,right:w,top:u,bottom:p}:null,[T,w,u,p,m]),_=i.useMemo(()=>m?{width:C,height:g}:null,[C,g,m]),l=i.useMemo(()=>{if(m)return{[$.activeTabLeft]:`${T}px`,[$.activeTabRight]:`${w}px`,[$.activeTabTop]:`${u}px`,[$.activeTabBottom]:`${p}px`,[$.activeTabWidth]:`${C}px`,[$.activeTabHeight]:`${g}px`}},[T,w,u,p,C,g,m]),E=m&&C>0&&g>0,H=i.useMemo(()=>({orientation:P,activeTabPosition:M,activeTabSize:_,tabActivationDirection:S}),[P,M,_,S]),N=X("span",o,{state:H,ref:n,props:[{role:"presentation",style:l,hidden:!E},c,{suppressHydrationWarning:!0}],stateAttributesMapping:Pt});return j==null?null:e.jsxs(i.Fragment,{children:[N,!I&&d&&e.jsx("script",{dangerouslySetInnerHTML:{__html:Rt},suppressHydrationWarning:!0})]})});let jt=(function(t){return t.index="data-index",t.activationDirection="data-activation-direction",t.orientation="data-orientation",t.hidden="data-hidden",t})({});const wt=i.forwardRef(function(o,n){const{className:b,value:a,render:d,keepMounted:c=!1,...k}=o,{value:P,getTabIdByPanelValue:S,orientation:v,tabActivationDirection:f,registerMountedTabPanel:I,unregisterMountedTabPanel:A}=Z(),j=Ie(),y=i.useMemo(()=>({id:j,value:a}),[j,a]),{ref:T,index:w}=qe({metadata:y}),u=a!==P,p=S(a),C=i.useMemo(()=>({hidden:u,orientation:v,tabActivationDirection:f}),[u,v,f]),g=X("div",o,{state:C,ref:[n,T],props:[{"aria-labelledby":p,hidden:u,id:j??void 0,role:"tabpanel",tabIndex:u?-1:0,[jt.index]:w},k],stateAttributesMapping:ie});return oe(()=>{if(!(u&&!c)&&j!=null)return I(a,j),()=>{A(a,j)}},[u,c,a,j,I,A]),!u||c?g:null}),Ct=i.forwardRef(function(o,n){const{activateOnFocus:b=!1,className:a,loopFocus:d=!0,render:c,...k}=o,{getTabElementBySelectedValue:P,onValueChange:S,orientation:v,value:f,setTabMap:I,tabActivationDirection:A}=Z(),[j,y]=i.useState(0),[T,w]=i.useState(null),u=kt(f,v,T,P),p=Y((M,_)=>{if(M!==f){const l=u(M);_.activationDirection=l,S(M,_)}}),C=i.useMemo(()=>({orientation:v,tabActivationDirection:A}),[v,A]),g={"aria-orientation":v==="vertical"?"vertical":void 0,role:"tablist"},m=i.useMemo(()=>({activateOnFocus:b,highlightedTabIndex:j,onTabActivation:p,setHighlightedTabIndex:y,tabsListElement:T,value:f}),[b,j,p,y,T,f]);return e.jsx(ke.Provider,{value:m,children:e.jsx(vt,{render:c,className:a,state:C,refs:[n,w],props:[g,k],stateAttributesMapping:ie,highlightedIndex:j,enableHomeAndEndKeys:!0,loopFocus:d,orientation:v,onHighlightedIndexChange:y,onMapChange:I,disabledIndices:ue})})});function ye(t,o){const{left:n,top:b}=t.getBoundingClientRect(),{left:a,top:d}=o.getBoundingClientRect(),c=n-a,k=b-d;return{left:c,top:k}}function kt(t,o,n,b){const[a,d]=i.useState(null);return oe(()=>{if(t==null||n==null){d(null);return}const c=b(t);if(c==null){d(null);return}const{left:k,top:P}=ye(c,n);d(o==="horizontal"?k:P)},[o,b,n,t]),i.useCallback(c=>{if(c===t)return"none";if(c==null)return d(null),"none";if(c!=null&&n!=null){const k=b(c);if(k!=null){const{left:P,top:S}=ye(k,n);if(a==null)return d(o==="horizontal"?P:S),"none";if(o==="horizontal"){if(P<a)return d(P),"left";if(P>a)return d(P),"right"}else{if(S<a)return d(S),"up";if(S>a)return d(S),"down"}}}return"none"},[b,o,a,n,t])}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Et=je("file-text",St);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],_t=je("layout-grid",Lt);function q(t,o){return o===void 0?t:typeof o=="string"?typeof t=="function"?n=>F(t(n),o):F(t,o):n=>F(typeof t=="function"?t(n):t,o(n))}const Ee=G.forwardRef(({className:t,style:o,orientation:n="horizontal",...b},a)=>{const c=q(n==="vertical"?"memori-tabs memori-tabs--vertical":"memori-tabs memori-tabs--horizontal",t);return e.jsx(yt,{ref:a,orientation:n,...b,className:c,style:o})});Ee.displayName="Tabs.Root";const Le=G.forwardRef(({activateOnFocus:t=!0,className:o,style:n,loopFocus:b,...a},d)=>e.jsx(Ct,{ref:d,activateOnFocus:t,loopFocus:b,...a,className:q(c=>F("memori-tabs__list",`memori-tabs__list--${c.orientation}`),o),style:n}));Le.displayName="Tabs.List";const _e=G.forwardRef(({className:t,style:o,...n},b)=>e.jsx(Mt,{ref:b,...n,className:q(a=>F("memori-tabs__tab",`memori-tabs__tab--${a.orientation}`,a.active&&"memori-tabs__tab--active",a.disabled&&"memori-tabs__tab--disabled"),t),style:o}));_e.displayName="Tabs.Tab";const Ae=G.forwardRef(({className:t,style:o,...n},b)=>e.jsx(wt,{ref:b,...n,className:q(a=>F("memori-tabs__panel",`memori-tabs__panel--${a.orientation}`,a.hidden&&"memori-tabs__panel--hidden"),t),style:o}));Ae.displayName="Tabs.Panel";const Ne=G.forwardRef(({className:t,style:o,renderBeforeHydration:n,...b},a)=>e.jsx(It,{ref:a,...b,renderBeforeHydration:n,className:q(d=>F("memori-tabs__indicator",`memori-tabs__indicator--${d.orientation}`),t),style:o}));Ne.displayName="Tabs.Indicator";const s={Root:Ee,List:Le,Tab:_e,Panel:Ae,Indicator:Ne},Jt={title:"Components/Tabs",component:s.Root,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Tabbed interface built on `@base-ui/react/tabs`. Follows the WAI-ARIA tabs pattern (WCAG 2.1 AA+): `tablist`, `tab`, and `tabpanel` roles, roving focus, and arrow-key navigation. Controlled state uses `value` and `onValueChange` (same idea as MUI `value` / `onChange`). `Tabs.List` defaults `activateOnFocus` to `true` so arrow keys move selection; set `activateOnFocus={false}` to match Base UI’s default (activate with Enter/Space only). Motion uses design tokens; tab hover/active uses subtle scale feedback and visible panels fade/slide in, while `prefers-reduced-motion` disables decorative animation."}}}},Q={render:()=>e.jsxs(s.Root,{defaultValue:"account",children:[e.jsxs(s.List,{"aria-label":"Account settings",children:[e.jsx(s.Tab,{value:"account",children:"Account"}),e.jsx(s.Tab,{value:"password",children:"Password"}),e.jsx(s.Tab,{value:"notifications",children:"Notifications"}),e.jsx(s.Indicator,{})]}),e.jsx(s.Panel,{value:"account",keepMounted:!0,children:e.jsx("p",{children:"Manage your account details and email preferences."})}),e.jsx(s.Panel,{value:"password",keepMounted:!0,children:e.jsx("p",{children:"Change your password and security options."})}),e.jsx(s.Panel,{value:"notifications",keepMounted:!0,children:e.jsx("p",{children:"Choose how you receive updates."})})]})},ee={render:()=>e.jsxs(s.Root,{defaultValue:"general",orientation:"vertical",children:[e.jsxs(s.List,{"aria-label":"Settings sections",children:[e.jsx(s.Tab,{value:"general",children:"General"}),e.jsx(s.Tab,{value:"privacy",children:"Privacy"}),e.jsx(s.Tab,{value:"billing",children:"Billing"}),e.jsx(s.Indicator,{})]}),e.jsx(s.Panel,{value:"general",keepMounted:!0,children:e.jsx("p",{children:"General application settings."})}),e.jsx(s.Panel,{value:"privacy",keepMounted:!0,children:e.jsx("p",{children:"Privacy and data controls."})}),e.jsx(s.Panel,{value:"billing",keepMounted:!0,children:e.jsx("p",{children:"Billing history and payment methods."})})]})},te={render:()=>e.jsxs(s.Root,{defaultValue:"one",children:[e.jsxs(s.List,{"aria-label":"Example with disabled tab",children:[e.jsx(s.Tab,{value:"one",children:"Enabled"}),e.jsx(s.Tab,{value:"two",disabled:!0,children:"Disabled"}),e.jsx(s.Tab,{value:"three",children:"Also enabled"}),e.jsx(s.Indicator,{})]}),e.jsx(s.Panel,{value:"one",keepMounted:!0,children:e.jsx("p",{children:"First panel."})}),e.jsx(s.Panel,{value:"two",keepMounted:!0,children:e.jsx("p",{children:"Second panel (not reachable when middle tab is disabled)."})}),e.jsx(s.Panel,{value:"three",keepMounted:!0,children:e.jsx("p",{children:"Third panel."})})]})},ae={render:function(){const[o,n]=G.useState("alpha");return e.jsx("div",{children:e.jsxs(s.Root,{value:o,onValueChange:n,children:[e.jsxs(s.List,{"aria-label":"Controlled tabs",children:[e.jsx(s.Tab,{value:"alpha",children:"Alpha"}),e.jsx(s.Tab,{value:"beta",children:"Beta"}),e.jsx(s.Indicator,{})]}),e.jsx(s.Panel,{value:"alpha",keepMounted:!0,children:e.jsxs("p",{children:["Alpha content. Current value: ",String(o)]})}),e.jsx(s.Panel,{value:"beta",keepMounted:!0,children:e.jsx("p",{children:"Beta content."})})]})})}},ne={render:()=>e.jsxs(s.Root,{defaultValue:"overview",children:[e.jsxs(s.List,{"aria-label":"Project areas",children:[e.jsx(s.Tab,{value:"overview",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(_t,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Overview"})]})}),e.jsx(s.Tab,{value:"documents",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(Et,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Documents"})]})}),e.jsx(s.Tab,{value:"settings",children:e.jsxs("span",{className:"memori-tabs__tab-inner",children:[e.jsx(ht,{"aria-hidden":"true",size:16,strokeWidth:2}),e.jsx("span",{children:"Settings"})]})}),e.jsx(s.Indicator,{})]}),e.jsx(s.Panel,{value:"overview",keepMounted:!0,children:e.jsx("p",{children:"Project overview."})}),e.jsx(s.Panel,{value:"documents",keepMounted:!0,children:e.jsx("p",{children:"Documents list."})}),e.jsx(s.Panel,{value:"settings",keepMounted:!0,children:e.jsx("p",{children:"Settings for this project."})})]})},se={render:()=>e.jsx("div",{style:{maxWidth:"calc(10 * var(--memori-spacing-md))"},children:e.jsxs(s.Root,{defaultValue:"short",children:[e.jsxs(s.List,{"aria-label":"Tabs with long labels",children:[e.jsx(s.Tab,{value:"short",children:"Short"}),e.jsx(s.Tab,{value:"long",title:"Very long label that should truncate in narrow layouts",children:e.jsx("span",{className:"memori-tabs__tab-label",children:"Very long label that should truncate in narrow layouts"})}),e.jsx(s.Indicator,{})]}),e.jsx(s.Panel,{value:"short",keepMounted:!0,children:e.jsx("p",{children:"Narrow container tests truncation on the tab list."})}),e.jsx(s.Panel,{value:"long",keepMounted:!0,children:e.jsx("p",{children:"Long label tab panel."})})]})})};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source}}};const Qt=["Default","Vertical","WithDisabledTab","Controlled","WithIcons","LongLabels"];export{ae as Controlled,Q as Default,se as LongLabels,ee as Vertical,te as WithDisabledTab,ne as WithIcons,Qt as __namedExportsOrder,Jt as default};
