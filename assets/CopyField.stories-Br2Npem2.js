import{j as e}from"./iframe-DQnDAKDD.js";import{C as a}from"./CopyField-CaBvU3GN.js";import{F as m}from"./Field-31MqisI0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./useTranslation-CPQkVxRz.js";import"./index-DfFO9_zg.js";import"./Input-DqAJVGHJ.js";import"./FieldControl-CIn9tvBi.js";import"./useStableCallback-D88_nEGo.js";import"./useRenderElement-cOdDho9S.js";import"./useControlled-BxKwvZDq.js";import"./LabelableContext-3B9JIArg.js";import"./index-BVVOsdlT.js";import"./index-BuiRabFg.js";import"./useLabelableId-CXBYCdWy.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useBaseUiId-Du8KLZzD.js";import"./useId-De35mOlf.js";import"./Button-Bpfv0ff0.js";import"./useButton-7PT9BvyD.js";import"./loader-circle-CSUD6ElO.js";import"./createLucideIcon-C4Q6ZgnJ.js";import"./check-CWQd9Y5N.js";import"./copy-CEuoB01o.js";import"./useTimeout-DTtOPXgK.js";import"./useOnMount-DPtsMZQG.js";import"./element-BGnTlyAk.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,G={title:"Form/CopyField",component:a,tags:["autodocs"],args:{value:"a1b2c3d4-e5f6-7890-abcd-ef1234567890",onCopy:l()},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},secret:{control:"boolean"},showCopyText:{control:"boolean"},disabled:{control:"boolean"},copyLabel:{control:"text"},copiedLabel:{control:"text"},ariaLabel:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Read-only value with a copy button (IDs, tokens, webhook URLs). `secret` masks the value with a show/hide toggle; copy always copies the real value."}}}},r={render:o=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(m,{label:"Memori ID",children:e.jsx(a,{...o})})})},s={args:{value:"sk_live_demo_0123456789abcdef",secret:!0},render:r.render},t={args:{showCopyText:!0},render:r.render},i={render:o=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(a,{...o,size:"sm",ariaLabel:"Memori ID (sm)"}),e.jsx(a,{...o,size:"md",ariaLabel:"Memori ID (md)"}),e.jsx(a,{...o,size:"lg",ariaLabel:"Memori ID (lg)"})]})},d={args:{disabled:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 480
  }}>
      <FieldGroup label="Memori ID">
        <CopyField {...args} />
      </FieldGroup>
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'sk_live_demo_0123456789abcdef',
    secret: true
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showCopyText: true
  },
  render: Default.render
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12,
    maxWidth: 480
  }}>
      <CopyField {...args} size="sm" ariaLabel="Memori ID (sm)" />
      <CopyField {...args} size="md" ariaLabel="Memori ID (md)" />
      <CopyField {...args} size="lg" ariaLabel="Memori ID (lg)" />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: Default.render
}`,...d.parameters?.docs?.source}}};const A=["Default","Secret","WithText","AllSizes","Disabled"];export{i as AllSizes,r as Default,d as Disabled,s as Secret,t as WithText,A as __namedExportsOrder,G as default};
