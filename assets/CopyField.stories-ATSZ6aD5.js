import{j as e}from"./iframe-CvaKCvHw.js";import{C as a}from"./CopyField-BtE1Wum4.js";import{F as m}from"./Field-D2W6F-It.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D-Q26sh1.js";import"./useTranslation-DqTxMO2X.js";import"./index-DczL_6t1.js";import"./Input-bAYm-Aji.js";import"./FieldControl-CGs90KFY.js";import"./useStableCallback-BrjHH0xH.js";import"./useRenderElement-CcBESBd8.js";import"./useControlled-BdKTXIeR.js";import"./LabelableContext-DNLbDo0d.js";import"./index-DfUhiCTo.js";import"./index-8zugb847.js";import"./useLabelableId-DFww-q7y.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useBaseUiId-D4BOOIaw.js";import"./useId-DXC1gtfb.js";import"./Button-m1FlTGWB.js";import"./useButton-DYS1GHKO.js";import"./loader-circle-BdqT435e.js";import"./createLucideIcon-DwxI1SnN.js";import"./check-B57I1UWk.js";import"./copy-BoUGrldx.js";import"./useTimeout-Ce2UM54m.js";import"./useOnMount-CaNF8zDx.js";import"./element-BGnTlyAk.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,G={title:"Form/CopyField",component:a,tags:["autodocs"],args:{value:"a1b2c3d4-e5f6-7890-abcd-ef1234567890",onCopy:l()},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},secret:{control:"boolean"},showCopyText:{control:"boolean"},disabled:{control:"boolean"},copyLabel:{control:"text"},copiedLabel:{control:"text"},ariaLabel:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Read-only value with a copy button (IDs, tokens, webhook URLs). `secret` masks the value with a show/hide toggle; copy always copies the real value."}}}},r={render:o=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(m,{label:"Memori ID",children:e.jsx(a,{...o})})})},s={args:{value:"sk_live_demo_0123456789abcdef",secret:!0},render:r.render},t={args:{showCopyText:!0},render:r.render},i={render:o=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(a,{...o,size:"sm",ariaLabel:"Memori ID (sm)"}),e.jsx(a,{...o,size:"md",ariaLabel:"Memori ID (md)"}),e.jsx(a,{...o,size:"lg",ariaLabel:"Memori ID (lg)"})]})},d={args:{disabled:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
