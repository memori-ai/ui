import{j as a}from"./iframe-CfppFBML.js";import{A as e}from"./Avatar-eVcXVbol.js";import{B as n}from"./bot-CTjVvoaN.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DqrBYd1k.js";import"./createLucideIcon-DljGq0Ho.js";import"./useRenderElement-CwgC88KG.js";import"./useStableCallback-CS5fRckw.js";import"./useTimeout-B8Gm6GRf.js";import"./useOnMount-oCGj1n5G.js";const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='teal'/><circle cx='32' cy='26' r='12' fill='white'/><rect x='14' y='42' width='36' height='22' rx='11' fill='white'/></svg>",A={title:"Contenuto/Avatar",component:e,tags:["autodocs"],argTypes:{src:{control:"text",description:"Image URL"},alt:{control:"text",description:"Alternative text"},initials:{control:"text",description:"Fallback initials when the image is missing or fails"},size:{control:"select",options:["sm","md","lg",56],description:"Preset size or pixel value",table:{defaultValue:{summary:"md"}}},shape:{control:"select",options:["circle","square"],description:"Avatar shape",table:{defaultValue:{summary:"circle"}}},icon:{control:!1},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"User or entity picture built on @base-ui Avatar. Falls back to initials, then to an icon, while the image loads or when it fails."}}}},t={args:{src:o,alt:"Ada Lovelace",initials:"AL"}},s={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["circle","square"].map(r=>a.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:["sm","md","lg",56].map(l=>a.jsx(e,{size:l,shape:r,initials:"AL",alt:"Ada Lovelace"},String(l)))},r))})},i={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[a.jsx(e,{src:o,alt:"Image"}),a.jsx(e,{src:"/missing-avatar.png",alt:"Broken image falls back to initials",initials:"BI"}),a.jsx(e,{initials:"MR",alt:"Mario Rossi"}),a.jsx(e,{alt:"Default icon"}),a.jsx(e,{icon:a.jsx(n,{}),alt:"Custom icon"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleSrc,
    alt: 'Ada Lovelace',
    initials: 'AL'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const y=["Default","AllVariants","States"];export{s as AllVariants,t as Default,i as States,y as __namedExportsOrder,A as default};
