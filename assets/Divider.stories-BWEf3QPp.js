import{j as e}from"./iframe-CfppFBML.js";import{D as r}from"./Divider-DZInc4en.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DqrBYd1k.js";const p={title:"Contenuto/Divider",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Direction of the line",table:{defaultValue:{summary:"horizontal"}}},label:{control:"text",description:"Content centered between two lines (horizontal only)"},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Thin separator between content blocks. Horizontal by default, optionally with a centered label; vertical for inline groups."}}}},n={render:t=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:0},children:"Above"}),e.jsx(r,{...t}),e.jsx("p",{style:{margin:0},children:"Below"})]})},a={args:{label:"or"},render:n.render},s={args:{orientation:"vertical"},render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{children:"Edit"}),e.jsx(r,{...t}),e.jsx("span",{children:"Duplicate"}),e.jsx(r,{...t}),e.jsx("span",{children:"Delete"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(r,{}),e.jsx(r,{label:"Section label"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Right"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p style={{
      margin: 0
    }}>Above</p>
      <Divider {...args} />
      <p style={{
      margin: 0
    }}>Below</p>
    </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or'
  },
  render: Default.render
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
      <span>Edit</span>
      <Divider {...args} />
      <span>Duplicate</span>
      <Divider {...args} />
      <span>Delete</span>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      <Divider />
      <Divider label="Section label" />
      <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const m=["Default","WithLabel","Vertical","AllVariants"];export{i as AllVariants,n as Default,s as Vertical,a as WithLabel,m as __namedExportsOrder,p as default};
