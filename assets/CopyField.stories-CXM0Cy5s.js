import{j as e}from"./iframe-dIQ7bXS9.js";import{C as a}from"./CopyField-CwaNH12U.js";import{F as m}from"./Field--8bqvUf_.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";import"./useTranslation-5eAe1hAT.js";import"./index-DDC5NtrN.js";import"./Input-BIi4v0RZ.js";import"./FieldControl-DZIiljyP.js";import"./useStableCallback-C6i8wFRs.js";import"./useRenderElement-BTl_khHM.js";import"./useControlled-DbA9sIq-.js";import"./LabelableContext-DcQCGclD.js";import"./index-CT9ohHEL.js";import"./index-C8WBCW8r.js";import"./useLabelableId-5f3dhAU0.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useBaseUiId-BlZ3QajR.js";import"./useId-DVSx0zRu.js";import"./Button-BnH6Kki6.js";import"./useButton-D2NgSzQ3.js";import"./loader-circle-Dw6T3hSw.js";import"./createLucideIcon-iXCOnvW_.js";import"./check-DrI4tIEZ.js";import"./copy-BQ0NbFIY.js";import"./useTimeout-2-_v_P1r.js";import"./useOnMount-CUD15mrL.js";import"./element-BGnTlyAk.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,G={title:"Form/CopyField",component:a,tags:["autodocs"],args:{value:"a1b2c3d4-e5f6-7890-abcd-ef1234567890",onCopy:l()},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},secret:{control:"boolean"},showCopyText:{control:"boolean"},disabled:{control:"boolean"},copyLabel:{control:"text"},copiedLabel:{control:"text"},ariaLabel:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Read-only value with a copy button (IDs, tokens, webhook URLs). `secret` masks the value with a show/hide toggle; copy always copies the real value."}}}},r={render:o=>e.jsx("div",{style:{maxWidth:480},children:e.jsx(m,{label:"Memori ID",children:e.jsx(a,{...o})})})},s={args:{value:"sk_live_demo_0123456789abcdef",secret:!0},render:r.render},t={args:{showCopyText:!0},render:r.render},i={render:o=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:480},children:[e.jsx(a,{...o,size:"sm",ariaLabel:"Memori ID (sm)"}),e.jsx(a,{...o,size:"md",ariaLabel:"Memori ID (md)"}),e.jsx(a,{...o,size:"lg",ariaLabel:"Memori ID (lg)"})]})},d={args:{disabled:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
