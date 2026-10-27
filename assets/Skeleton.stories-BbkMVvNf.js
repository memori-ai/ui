import{j as e}from"./iframe-dIQ7bXS9.js";import{S as r}from"./Skeleton-lhTHKvzh.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";const l={title:"Feedback/Skeleton",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","rect","circle"],description:"Shape of the placeholder",table:{defaultValue:{summary:"text"}}},width:{control:"text",description:"Width (numbers are pixels)"},height:{control:"text",description:"Height, per line for text (numbers are pixels)"},lines:{control:{type:"number",min:1},description:"Number of lines for the text variant",table:{defaultValue:{summary:"1"}}},className:{control:"text",description:"Additional CSS class name"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Decorative loading placeholder (`aria-hidden`). Shimmers when motion is allowed, pulses opacity under `prefers-reduced-motion: reduce`. Announce loading on the container (e.g. `aria-busy`)."}}}},t={},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--memori-spacing-lg)",maxWidth:"24rem"},children:[e.jsx(r,{variant:"text",lines:3}),e.jsx(r,{variant:"rect",height:120}),e.jsx(r,{variant:"circle",width:48})]})},i={args:{variant:"text",lines:4,width:320}},s={render:()=>e.jsxs("div",{"aria-busy":"true",style:{display:"flex",gap:"var(--memori-spacing-md)",alignItems:"center",maxWidth:"24rem"},children:[e.jsx(r,{variant:"circle"}),e.jsx("div",{style:{flex:1},children:e.jsx(r,{lines:2,height:12})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Single text line.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--memori-spacing-lg)',
    maxWidth: '24rem'
  }}>
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="rect" height={120} />
      <Skeleton variant="circle" width={48} />
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Text, rect and circle.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 4,
    width: 320
  }
}`,...i.parameters?.docs?.source},description:{story:"Multi-line paragraph placeholder.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" style={{
    display: 'flex',
    gap: 'var(--memori-spacing-md)',
    alignItems: 'center',
    maxWidth: '24rem'
  }}>
      <Skeleton variant="circle" />
      <div style={{
      flex: 1
    }}>
        <Skeleton lines={2} height={12} />
      </div>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Composed card-like placeholder.",...s.parameters?.docs?.description}}};const p=["Default","AllVariants","Paragraph","Composition"];export{a as AllVariants,s as Composition,t as Default,i as Paragraph,p as __namedExportsOrder,l as default};
