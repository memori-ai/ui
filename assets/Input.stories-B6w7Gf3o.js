import{j as e,R as v}from"./iframe-CiKKjRAe.js";import{I as r}from"./Input-CJaJ0Vbd.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DK8dLYt8.js";import"./floating-ui.utils.dom-CbJPnVLw.js";import"./useControlled-Byjxzkiy.js";import"./useField-Dx0fWtD_.js";import"./index-D_3UqApH.js";import"./index-4RjoVWVq.js";import"./useLabelableId-BLshErvu.js";import"./useBaseUiId-D9zj88KS.js";import"./useId-CZfkaMbZ.js";import"./createBaseUIEventDetails-DQe_MgnJ.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,L={title:"Form/Input",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","error","success","disabled"],description:"Input variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},fullWidth:{control:{type:"boolean"},description:"Whether the input should take full width"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},placeholder:{control:{type:"text"},description:"Placeholder text"},value:{control:{type:"text"},description:"Input value (controlled)"},defaultValue:{control:{type:"text"},description:"Default value (uncontrolled)"},type:{control:{type:"text"},description:"Input type"},onValueChange:{description:"Callback fired when the value changes"}},parameters:{controls:{expanded:!0}},args:{onValueChange:f()}},a={args:{placeholder:"Enter text...",variant:"default"}},t={args:{placeholder:"This field has an error",variant:"error",defaultValue:"Invalid input"}},s={args:{placeholder:"Looks good",variant:"success",defaultValue:"Valid value"}},o={args:{placeholder:"Disabled input",variant:"disabled",defaultValue:"Cannot edit"}},i={args:{placeholder:"Small input",variant:"default",size:"sm"}},l={args:{placeholder:"Medium input",variant:"default",size:"md"}},n={args:{placeholder:"Large input",variant:"default",size:"lg"}},p={args:{placeholder:"Full width input",variant:"default",fullWidth:!0}},d={render:()=>{const[h,g]=v.useState("");return e.jsx(r,{value:h,onValueChange:g,placeholder:"Type something..."})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Default variant",variant:"default"}),e.jsx(r,{placeholder:"Error variant",variant:"error"}),e.jsx(r,{placeholder:"Success variant",variant:"success"}),e.jsx(r,{placeholder:"Disabled variant",variant:"disabled"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Small input",size:"sm"}),e.jsx(r,{placeholder:"Medium input",size:"md"}),e.jsx(r,{placeholder:"Large input",size:"lg"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default'
  }
}`,...a.parameters?.docs?.source},description:{story:"Default input variant with standard styling.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This field has an error',
    variant: 'error',
    defaultValue: 'Invalid input'
  }
}`,...t.parameters?.docs?.source},description:{story:"Error variant indicates validation errors.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Looks good',
    variant: 'success',
    defaultValue: 'Valid value'
  }
}`,...s.parameters?.docs?.source},description:{story:"Success variant for valid input (e.g. after validation passes).",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit'
  }
}`,...o.parameters?.docs?.source},description:{story:"Disabled input state.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm'
  }
}`,...i.parameters?.docs?.source},description:{story:"Small size input.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...l.parameters?.docs?.source},description:{story:"Medium size input (default).",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source},description:{story:"Large size input.",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Full width input.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onValueChange={setValue} placeholder="Type something..." />;
  }
}`,...d.parameters?.docs?.source},description:{story:"Controlled input example.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Different input types.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Success variant" variant="success" />
      <Input placeholder="Disabled variant" variant="disabled" />
    </div>
}`,...u.parameters?.docs?.source},description:{story:"All variants displayed together for comparison.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Small input" size="sm" />
      <Input placeholder="Medium input" size="md" />
      <Input placeholder="Large input" size="lg" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...m.parameters?.docs?.description}}};const M=["Default","Error","Success","Disabled","Small","Medium","Large","FullWidth","Controlled","InputTypes","AllVariants","AllSizes"];export{m as AllSizes,u as AllVariants,d as Controlled,a as Default,o as Disabled,t as Error,p as FullWidth,c as InputTypes,n as Large,l as Medium,i as Small,s as Success,M as __namedExportsOrder,L as default};
