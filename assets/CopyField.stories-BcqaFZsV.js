import{j as e}from"./iframe-welL_Y03.js";import{C as a}from"./CopyField-7wTZbVHh.js";import{F as m}from"./Field-CvY9UilL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BFu-4PJz.js";import"./useTranslation-CzbaMplr.js";import"./index-D77dsTa6.js";import"./Input-B8dB6fKN.js";import"./FieldControl-B6-75kr4.js";import"./useStableCallback-BmsFBrCP.js";import"./useRenderElement-BsYNz85m.js";import"./useTimeout-DlB3jOiB.js";import"./useOnMount-C-u17Km0.js";import"./useSetFieldFocused-D4iMvA2q.js";import"./useBaseUiId-Bw28qrdv.js";import"./useId-CoJK8Gi1.js";import"./useValueChanged-wmE338Q0.js";import"./Button-CDDWBJSa.js";import"./useButton-DsWz-oUq.js";import"./floating-ui.utils.dom-C95aRAwF.js";import"./loader-circle-DyaS_Vrp.js";import"./createLucideIcon-BOPdVp22.js";import"./check-Drdp-hnt.js";import"./copy-BbbbpYMH.js";import"./useTransitionStatus-nxPEYtLr.js";import"./useOpenChangeComplete-B8oq_RqC.js";import"./index-CLv6_fCs.js";import"./index-DrBWIv9O.js";import"./shadowDom-C7-QBKxN.js";import"./FieldItemContext-csvGlzsA.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,U={title:"Form/CopyField",component:a,tags:["autodocs"],args:{value:"a1b2c3d4-e5f6-7890-abcd-ef1234567890",onCopy:l()},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},secret:{control:"boolean"},showCopyText:{control:"boolean"},disabled:{control:"boolean"},copyLabel:{control:"text"},copiedLabel:{control:"text"},ariaLabel:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Read-only value with a copy button (IDs, tokens, webhook URLs). `secret` masks the value with a show/hide toggle; copy always copies the real value."}}}},r={render:o=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(m,{label:"Memori ID",children:e.jsx(a,{...o})})})},s={args:{value:"sk_live_demo_0123456789abcdef",secret:!0},render:r.render},t={args:{showCopyText:!0},render:r.render},i={render:o=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(a,{...o,size:"sm",ariaLabel:"Memori ID (sm)"}),e.jsx(a,{...o,size:"md",ariaLabel:"Memori ID (md)"}),e.jsx(a,{...o,size:"lg",ariaLabel:"Memori ID (lg)"})]})},d={args:{disabled:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const B=["Default","Secret","WithText","AllSizes","Disabled"];export{i as AllSizes,r as Default,d as Disabled,s as Secret,t as WithText,B as __namedExportsOrder,U as default};
