import{j as e}from"./iframe-DvN1O8zr.js";import{C as a}from"./CopyField-jY2fDODA.js";import{F as m}from"./Field-CRFTWm9T.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./useTranslation-DeI4Z5iQ.js";import"./index-ainZ7i9v.js";import"./Input-C1tU9p04.js";import"./FieldControl-BKbeORsw.js";import"./useStableCallback-CElKwhMG.js";import"./useRenderElement-C14Ha64R.js";import"./useControlled-pBTNFuOb.js";import"./LabelableContext-CfPwMPJ-.js";import"./index-Cvf4B1Iz.js";import"./index-GoqsI4IK.js";import"./useLabelableId-BURt44CT.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useBaseUiId-C6YQlm-N.js";import"./useId-CxFSyxB1.js";import"./Button-DRT6abBc.js";import"./useButton-CvJTrdXl.js";import"./loader-circle---oKdcgR.js";import"./createLucideIcon-spauhAJQ.js";import"./check-D_hINgSS.js";import"./copy-DSjLJCc1.js";import"./useTimeout-qv1hDoHR.js";import"./useOnMount-a7LL2oC2.js";import"./element-BGnTlyAk.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,G={title:"Form/CopyField",component:a,tags:["autodocs"],args:{value:"a1b2c3d4-e5f6-7890-abcd-ef1234567890",onCopy:l()},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},secret:{control:"boolean"},showCopyText:{control:"boolean"},disabled:{control:"boolean"},copyLabel:{control:"text"},copiedLabel:{control:"text"},ariaLabel:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Read-only value with a copy button (IDs, tokens, webhook URLs). `secret` masks the value with a show/hide toggle; copy always copies the real value."}}}},r={render:o=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(m,{label:"Memori ID",children:e.jsx(a,{...o})})})},s={args:{value:"sk_live_demo_0123456789abcdef",secret:!0},render:r.render},t={args:{showCopyText:!0},render:r.render},i={render:o=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(a,{...o,size:"sm",ariaLabel:"Memori ID (sm)"}),e.jsx(a,{...o,size:"md",ariaLabel:"Memori ID (md)"}),e.jsx(a,{...o,size:"lg",ariaLabel:"Memori ID (lg)"})]})},d={args:{disabled:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
