import{j as e}from"./iframe-DvN1O8zr.js";import{T as o}from"./Textarea-CwEBVeCu.js";import{F as l}from"./Field-CRFTWm9T.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./FieldControl-BKbeORsw.js";import"./useStableCallback-CElKwhMG.js";import"./useRenderElement-C14Ha64R.js";import"./useControlled-pBTNFuOb.js";import"./LabelableContext-CfPwMPJ-.js";import"./index-Cvf4B1Iz.js";import"./index-GoqsI4IK.js";import"./useLabelableId-BURt44CT.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useBaseUiId-C6YQlm-N.js";import"./useId-CxFSyxB1.js";import"./useTimeout-qv1hDoHR.js";import"./useOnMount-a7LL2oC2.js";import"./element-BGnTlyAk.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,S={title:"Form/Textarea",component:o,tags:["autodocs"],argTypes:{autosize:{control:"object",description:"Grow with the content. `true` or `{ minRows, maxRows }` to bound it"},error:{control:"boolean",description:"Invalid state (same style as Input error)"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},placeholder:{control:"text",description:"Placeholder text"},rows:{control:"number",description:"Visible rows (native attribute)"},onChange:{description:"Native change handler"}},args:{onChange:n()},parameters:{controls:{expanded:!0},docs:{description:{component:"Multi-line text input with the same chrome as Input. Accepts every native `<textarea>` attribute; optional `autosize`. Works inside `Field` / `FieldGroup`."}}}},a={args:{placeholder:"Write a description...",rows:4}},s={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...r,placeholder:"Default",rows:3}),e.jsx(o,{...r,placeholder:"Error",defaultValue:"Invalid content",rows:3,error:!0}),e.jsx(o,{...r,placeholder:"Disabled",defaultValue:"Cannot edit",rows:3,disabled:!0})]})},t={args:{placeholder:"Type several lines...",autosize:{minRows:2,maxRows:6}}},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Bio",helperText:"A few words about you.",children:e.jsx(o,{...r,rows:3})}),e.jsx(l,{label:"Bio",error:"This field is required.",invalid:!0,children:e.jsx(o,{...r,rows:3})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write a description...',
    rows: 4
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Textarea {...args} placeholder="Default" rows={3} />
      <Textarea {...args} placeholder="Error" defaultValue="Invalid content" rows={3} error />
      <Textarea {...args} placeholder="Disabled" defaultValue="Cannot edit" rows={3} disabled />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type several lines...',
    autosize: {
      minRows: 2,
      maxRows: 6
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Grows with the content between 2 and 6 rows, then scrolls.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <FieldGroup label="Bio" helperText="A few words about you.">
        <Textarea {...args} rows={3} />
      </FieldGroup>
      <FieldGroup label="Bio" error="This field is required." invalid>
        <Textarea {...args} rows={3} />
      </FieldGroup>
    </div>
}`,...i.parameters?.docs?.source}}};const _=["Default","States","Autosize","InField"];export{t as Autosize,a as Default,i as InField,s as States,_ as __namedExportsOrder,S as default};
