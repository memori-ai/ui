import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D9yWnpUp.js";import{T as p}from"./Tooltip-CdnrqHpU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DjKZ1saX.js";const f={title:"UI/Tooltip",component:p,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}}},parameters:{controls:{expanded:!0}},render:n=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",paddingTop:"10rem"},children:e.jsx(p,{...n})})},r={args:{content:"Here is some tooltip content",children:e.jsx("span",{children:"Hover me"})}},t={args:{content:e.jsxs("p",{children:["Here we have some JSX, useful for"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"links"}),", for example."]}),children:e.jsx("span",{children:"Hover me"})}},s={args:{content:"Here is some tooltip content but I am disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},o={args:{content:"Here is some tooltip content displayed by default as I am controlled",children:e.jsx("span",{children:"Hover me"}),visible:!0}},a={args:{content:"Here is some tooltip content",children:e.jsx("span",{children:"Hover me"}),align:"left",visible:!0},render:n=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:"10rem"},children:e.jsx(p,{...n})})},i={args:{content:"Here is some tooltip content",children:e.jsx("span",{children:"Hover me"}),align:"right",visible:!0}},l={args:{content:"Here is some tooltip content",children:e.jsx("span",{children:"Hover me"}),align:"topLeft",visible:!0},render:n=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:"10rem"},children:e.jsx(p,{...n})})},c={args:{content:"Here is some tooltip content",children:e.jsx("span",{children:"Hover me"}),align:"topRight",visible:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: <p>
        Here we have some JSX, useful for{' '}
        <a href="https://memori.ai" rel="noopener noreferrer" target="_blank">
          links
        </a>
        , for example.
      </p>,
    children: <span>Hover me</span>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content but I am disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content displayed by default as I am controlled',
    children: <span>Hover me</span>,
    visible: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'left',
    visible: true
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10rem'
  }}>
      <Tooltip {...args} />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'right',
    visible: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topLeft',
    visible: true
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10rem'
  }}>
      <Tooltip {...args} />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topRight',
    visible: true
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","WithJSXContent","Disabled","VisibleControlled","AlignLeft","AlignRight","AlignTopLeft","AlignTopRight"];export{a as AlignLeft,i as AlignRight,l as AlignTopLeft,c as AlignTopRight,r as Default,s as Disabled,o as VisibleControlled,t as WithJSXContent,v as __namedExportsOrder,f as default};
