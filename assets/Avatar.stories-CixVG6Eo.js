import{r as i,j as a}from"./iframe-BXoPY9wl.js";import{c as R}from"./index-CWjFjZSg.js";import{U as M}from"./user-CfMb8nhT.js";import{f as k,u as x,a as w,N as j}from"./useRenderElement-DXWaToy6.js";import{u as N}from"./useStableCallback-BbYRKgG5.js";import{u as q}from"./useTimeout-Ce8uFSXF.js";import{c as C}from"./createLucideIcon-KNAk1hxz.js";import"./preload-helper-Ct5FWWRu.js";import"./useOnMount-CMoo4wSm.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],T=C("bot",_),b=i.createContext(void 0);function I(){const s=i.useContext(b);if(s===void 0)throw new Error(k(13));return s}const y={imageLoadingStatus:()=>null},E=i.forwardRef(function(e,c){const{className:g,render:l,...n}=e,[t,o]=i.useState("idle"),m=i.useMemo(()=>({imageLoadingStatus:t}),[t]),u=i.useMemo(()=>({imageLoadingStatus:t,setImageLoadingStatus:o}),[t,o]),r=x("span",e,{state:m,ref:c,props:n,stateAttributesMapping:y});return a.jsx(b.Provider,{value:u,children:r})});function P(s,{referrerPolicy:e,crossOrigin:c}){const[g,l]=i.useState("idle");return w(()=>{if(!s)return l("error"),j;let n=!0;const t=new window.Image,o=m=>()=>{n&&l(m)};return l("loading"),t.onload=o("loaded"),t.onerror=o("error"),e&&(t.referrerPolicy=e),t.crossOrigin=c??null,t.src=s,()=>{n=!1}},[s,c,e]),g}const V=i.forwardRef(function(e,c){const{className:g,render:l,onLoadingStatusChange:n,referrerPolicy:t,crossOrigin:o,...m}=e,u=I(),r=P(e.src,{referrerPolicy:t,crossOrigin:o}),p=N(S=>{n?.(S),u.setImageLoadingStatus(S)});w(()=>{r!=="idle"&&p(r)},[r,p]);const A=i.useMemo(()=>({imageLoadingStatus:r}),[r]);return x("img",e,{state:A,ref:c,props:m,stateAttributesMapping:y,enabled:r==="loaded"})}),z=i.forwardRef(function(e,c){const{className:g,render:l,delay:n,...t}=e,{imageLoadingStatus:o}=I(),[m,u]=i.useState(n===void 0),r=q();i.useEffect(()=>(n!==void 0&&r.start(n,()=>u(!0)),r.clear),[r,n]);const p=i.useMemo(()=>({imageLoadingStatus:o}),[o]);return x("span",e,{state:p,ref:c,props:t,stateAttributesMapping:y,enabled:o!=="loaded"&&m})}),d=i.forwardRef(({src:s,alt:e,initials:c,icon:g,size:l="md",shape:n="circle",className:t,style:o},m)=>{const u=typeof l=="number",r=u?{width:l,height:l,fontSize:Math.max(10,Math.round(l*.4))}:void 0,p=c?.trim();return a.jsxs(E,{ref:m,className:R("memori-avatar",!u&&`memori-avatar--${l}`,`memori-avatar--${n}`,t),style:{...r,...o},children:[s&&a.jsx(V,{className:"memori-avatar__image",src:s,alt:e??""}),a.jsx(z,{className:"memori-avatar__fallback",...e?{role:"img","aria-label":e}:{},children:p?a.jsx("span",{className:"memori-avatar__initials",children:p}):a.jsx("span",{className:"memori-avatar__icon","aria-hidden":"true",children:g??a.jsx(M,{})})})]})});d.displayName="Avatar";d.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image URL. While loading, or if it fails, the fallback is shown."},alt:{required:!1,tsType:{name:"string"},description:"Alternative text for the image. Also used as accessible name of the fallback."},initials:{required:!1,tsType:{name:"string"},description:"Initials shown when the image is missing or fails to load."},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon shown when there is no image and no `initials`.\n@default <User />"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]},description:`Avatar size: preset or pixel value.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:`Avatar shape.
@default 'circle'`,defaultValue:{value:"'circle'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='teal'/><circle cx='32' cy='26' r='12' fill='white'/><rect x='14' y='42' width='36' height='22' rx='11' fill='white'/></svg>",K={title:"Contenuto/Avatar",component:d,tags:["autodocs"],argTypes:{src:{control:"text",description:"Image URL"},alt:{control:"text",description:"Alternative text"},initials:{control:"text",description:"Fallback initials when the image is missing or fails"},size:{control:"select",options:["sm","md","lg",56],description:"Preset size or pixel value",table:{defaultValue:{summary:"md"}}},shape:{control:"select",options:["circle","square"],description:"Avatar shape",table:{defaultValue:{summary:"circle"}}},icon:{control:!1},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"User or entity picture built on @base-ui Avatar. Falls back to initials, then to an icon, while the image loads or when it fails."}}}},f={args:{src:L,alt:"Ada Lovelace",initials:"AL"}},v={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["circle","square"].map(s=>a.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:["sm","md","lg",56].map(e=>a.jsx(d,{size:e,shape:s,initials:"AL",alt:"Ada Lovelace"},String(e)))},s))})},h={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[a.jsx(d,{src:L,alt:"Image"}),a.jsx(d,{src:"/missing-avatar.png",alt:"Broken image falls back to initials",initials:"BI"}),a.jsx(d,{initials:"MR",alt:"Mario Rossi"}),a.jsx(d,{alt:"Default icon"}),a.jsx(d,{icon:a.jsx(T,{}),alt:"Custom icon"})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleSrc,
    alt: 'Ada Lovelace',
    initials: 'AL'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {(['circle', 'square'] as const).map(shape => <div key={shape} style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
          {(['sm', 'md', 'lg', 56] as const).map(size => <Avatar key={String(size)} size={size} shape={shape} initials="AL" alt="Ada Lovelace" />)}
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Avatar src={sampleSrc} alt="Image" />
      <Avatar src="/missing-avatar.png" alt="Broken image falls back to initials" initials="BI" />
      <Avatar initials="MR" alt="Mario Rossi" />
      <Avatar alt="Default icon" />
      <Avatar icon={<Bot />} alt="Custom icon" />
    </div>
}`,...h.parameters?.docs?.source}}};const Q=["Default","AllVariants","States"];export{v as AllVariants,f as Default,h as States,Q as __namedExportsOrder,K as default};
