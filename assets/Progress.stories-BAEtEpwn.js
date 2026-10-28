import{j as e}from"./iframe-DvN1O8zr.js";import{P as r}from"./Progress-BsQov1Zy.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./useValueAsRef-CQA32jHK.js";import"./useRenderElement-C14Ha64R.js";const g={title:"Feedback/Progress",component:r,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Completion percentage, clamped to 0–100"},variant:{control:"select",options:["line","circle"],description:"Visual shape of the indicator",table:{defaultValue:{summary:"line"}}},status:{control:"select",options:["default","success","error"],description:"Semantic color of the indicator",table:{defaultValue:{summary:"default"}}},showValue:{control:"boolean",description:"If true, renders the rounded percentage"},size:{control:"select",options:["sm","md"],description:"Size of the indicator. A number (px) is honored only by the circle variant",table:{defaultValue:{summary:"md"}}},"aria-label":{control:"text",description:"Accessible name of the progress bar"},className:{control:"text",description:"Additional CSS class name"}},args:{value:42,"aria-label":"Upload progress"},parameters:{controls:{expanded:!0},docs:{description:{component:'Determinate progress indicator. The line variant is built on @base-ui Progress; the circle variant is an SVG ring. Both expose role="progressbar" with aria-valuenow/min/max.'}}}},a={},t={args:{showValue:!0}},o={args:{variant:"circle",showValue:!0,value:68}},i={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--memori-spacing-lg)",maxWidth:420},children:[e.jsx(r,{...s,size:"sm",showValue:!0}),e.jsx(r,{...s,size:"md",showValue:!0}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--memori-spacing-lg)"},children:[e.jsx(r,{...s,variant:"circle",size:"sm",showValue:!0}),e.jsx(r,{...s,variant:"circle",size:"md",showValue:!0}),e.jsx(r,{...s,variant:"circle",size:120,showValue:!0})]})]})},l={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--memori-spacing-lg)",maxWidth:420},children:[e.jsx(r,{...s,value:0,showValue:!0}),e.jsx(r,{...s,status:"default",value:42,showValue:!0}),e.jsx(r,{...s,status:"success",value:100,showValue:!0}),e.jsx(r,{...s,status:"error",value:73,showValue:!0}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--memori-spacing-lg)"},children:[e.jsx(r,{...s,variant:"circle",status:"default",value:42,showValue:!0}),e.jsx(r,{...s,variant:"circle",status:"success",value:100,showValue:!0}),e.jsx(r,{...s,variant:"circle",status:"error",value:73,showValue:!0})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showValue: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    showValue: true,
    value: 68
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--memori-spacing-lg)',
    maxWidth: 420
  }}>
      <Progress {...args} size="sm" showValue />
      <Progress {...args} size="md" showValue />
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--memori-spacing-lg)'
    }}>
        <Progress {...args} variant="circle" size="sm" showValue />
        <Progress {...args} variant="circle" size="md" showValue />
        <Progress {...args} variant="circle" size={120} showValue />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--memori-spacing-lg)',
    maxWidth: 420
  }}>
      <Progress {...args} value={0} showValue />
      <Progress {...args} status="default" value={42} showValue />
      <Progress {...args} status="success" value={100} showValue />
      <Progress {...args} status="error" value={73} showValue />
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--memori-spacing-lg)'
    }}>
        <Progress {...args} variant="circle" status="default" value={42} showValue />
        <Progress {...args} variant="circle" status="success" value={100} showValue />
        <Progress {...args} variant="circle" status="error" value={73} showValue />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const v=["Default","WithValue","Circle","AllVariants","States"];export{i as AllVariants,o as Circle,a as Default,l as States,t as WithValue,v as __namedExportsOrder,g as default};
