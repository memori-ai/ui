import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as g}from"./iframe-D5yxewrq.js";import{I as r}from"./Input-ByxXZh9y.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DQzFdsyo.js";import"./useRenderElement-D6sDHrQp.js";import"./useControlled-Be6k71_q.js";import"./LabelableContext-TXvfIeUJ.js";import"./index-te92Yn59.js";import"./index-CW9ujn6S.js";import"./useLabelableId-CbVst15h.js";import"./useBaseUiId-DAx6pYLI.js";import"./useId-uEe0_HmB.js";import"./createBaseUIEventDetails-S-xoRQh1.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,L={title:"Form/Input",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","error","disabled"],description:"Input variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},fullWidth:{control:{type:"boolean"},description:"Whether the input should take full width"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},placeholder:{control:{type:"text"},description:"Placeholder text"},value:{control:{type:"text"},description:"Input value (controlled)"},defaultValue:{control:{type:"text"},description:"Default value (uncontrolled)"},type:{control:{type:"text"},description:"Input type"},onValueChange:{description:"Callback fired when the value changes"}},parameters:{controls:{expanded:!0}},args:{onValueChange:f()}},a={args:{placeholder:"Enter text...",variant:"default"}},t={args:{placeholder:"This field has an error",variant:"error",defaultValue:"Invalid input"}},s={args:{placeholder:"Disabled input",variant:"disabled",defaultValue:"Cannot edit"}},o={args:{placeholder:"Small input",variant:"default",size:"sm"}},i={args:{placeholder:"Medium input",variant:"default",size:"md"}},l={args:{placeholder:"Large input",variant:"default",size:"lg"}},n={args:{placeholder:"Full width input",variant:"default",fullWidth:!0}},p={render:()=>{const[m,h]=g.useState("");return e.jsx(r,{value:m,onValueChange:h,placeholder:"Type something..."})}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Default variant",variant:"default"}),e.jsx(r,{placeholder:"Error variant",variant:"error"}),e.jsx(r,{placeholder:"Disabled variant",variant:"disabled"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Small input",size:"sm"}),e.jsx(r,{placeholder:"Medium input",size:"md"}),e.jsx(r,{placeholder:"Large input",size:"lg"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit'
  }
}`,...s.parameters?.docs?.source},description:{story:"Disabled input state.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm'
  }
}`,...o.parameters?.docs?.source},description:{story:"Small size input.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...i.parameters?.docs?.source},description:{story:"Medium size input (default).",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...l.parameters?.docs?.source},description:{story:"Large size input.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Full width input.",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onValueChange={setValue} placeholder="Type something..." />;
  }
}`,...p.parameters?.docs?.source},description:{story:"Controlled input example.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Different input types.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Disabled variant" variant="disabled" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"All variants displayed together for comparison.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Small input" size="sm" />
      <Input placeholder="Medium input" size="md" />
      <Input placeholder="Large input" size="lg" />
    </div>
}`,...u.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...u.parameters?.docs?.description}}};const M=["Default","Error","Disabled","Small","Medium","Large","FullWidth","Controlled","InputTypes","AllVariants","AllSizes"];export{u as AllSizes,c as AllVariants,p as Controlled,a as Default,s as Disabled,t as Error,n as FullWidth,d as InputTypes,l as Large,i as Medium,o as Small,M as __namedExportsOrder,L as default};
