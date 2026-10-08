import{j as e,R as v}from"./iframe-NAmncnrC.js";import{I as r}from"./Input-B1vIK-6k.js";import{S as x}from"./search-DvLTAcds.js";import"./preload-helper-Ct5FWWRu.js";import"./index-5gX2znmI.js";import"./useRenderElement-MX4Ulavc.js";import"./useControlled-D3G7VynW.js";import"./LabelableContext-Di8KONJO.js";import"./index-Dkf7Uq27.js";import"./index-Bvi1x9vB.js";import"./useLabelableId-CGPcasBO.js";import"./useBaseUiId-D51YW1_H.js";import"./useId-D2HAxcmJ.js";import"./createLucideIcon-Cf5hL4ec.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,_={title:"Form/Input",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","error","success","disabled"],description:"Input variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},fullWidth:{control:{type:"boolean"},description:"Whether the input should take full width"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},placeholder:{control:{type:"text"},description:"Placeholder text"},value:{control:{type:"text"},description:"Input value (controlled)"},defaultValue:{control:{type:"text"},description:"Default value (uncontrolled)"},type:{control:{type:"text"},description:"Input type"},onValueChange:{description:"Callback fired when the value changes"}},parameters:{controls:{expanded:!0}},args:{onValueChange:y()}},a={args:{placeholder:"Enter text...",variant:"default"}},t={args:{placeholder:"This field has an error",variant:"error",defaultValue:"Invalid input"}},s={args:{placeholder:"Looks good",variant:"success",defaultValue:"Valid value"}},o={args:{placeholder:"Disabled input",variant:"disabled",defaultValue:"Cannot edit"}},i={args:{placeholder:"Small input",variant:"default",size:"sm"}},n={args:{placeholder:"Medium input",variant:"default",size:"md"}},l={args:{placeholder:"Large input",variant:"default",size:"lg"}},p={args:{placeholder:"Full width input",variant:"default",fullWidth:!0}},d={render:()=>{const[f,g]=v.useState("");return e.jsx(r,{value:f,onValueChange:g,placeholder:"Type something..."})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Default variant",variant:"default"}),e.jsx(r,{placeholder:"Error variant",variant:"error"}),e.jsx(r,{placeholder:"Success variant",variant:"success"}),e.jsx(r,{placeholder:"Disabled variant",variant:"disabled"})]})},m={args:{placeholder:"Search",prefix:e.jsx(x,{"aria-hidden":!0}),fullWidth:!0}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{placeholder:"Small input",size:"sm"}),e.jsx(r,{placeholder:"Medium input",size:"md"}),e.jsx(r,{placeholder:"Large input",size:"lg"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Small size input.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...n.parameters?.docs?.source},description:{story:"Medium size input (default).",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...l.parameters?.docs?.source},description:{story:"Large size input.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  args: {
    placeholder: 'Search',
    prefix: <Search aria-hidden />,
    fullWidth: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Search icon in the prefix slot. The field owns the inset; callers do not pad the input.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Small input" size="sm" />
      <Input placeholder="Medium input" size="md" />
      <Input placeholder="Large input" size="lg" />
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All sizes displayed together for comparison.",...h.parameters?.docs?.description}}};const A=["Default","Error","Success","Disabled","Small","Medium","Large","FullWidth","Controlled","InputTypes","AllVariants","WithPrefix","AllSizes"];export{h as AllSizes,u as AllVariants,d as Controlled,a as Default,o as Disabled,t as Error,p as FullWidth,c as InputTypes,l as Large,n as Medium,i as Small,s as Success,m as WithPrefix,A as __namedExportsOrder,_ as default};
