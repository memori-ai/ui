import{j as e}from"./iframe-CbkzK_Ne.js";import{F as o,a as i}from"./Field-BXbsGsl3.js";import{I as a}from"./Input-B_6P24Zz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DS7HLWym.js";import"./LabelableContext-B3BKzV7H.js";import"./index-CeDvvr81.js";import"./index-CUck_JVj.js";import"./useRenderElement-D7O_O9fD.js";import"./useTimeout-eLRjYdCg.js";import"./useOnMount-BshAaH-I.js";import"./useBaseUiId-DvS8LH9Q.js";import"./useId-CLSo67vu.js";import"./element-DB4TQX-y.js";import"./useControlled-B8GzABoU.js";import"./useLabelableId-B5JtjM4b.js";import"./createBaseUIEventDetails-BzDikJ6g.js";const G={title:"Form/Field",component:o,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Form field wrapper built on @base-ui/react Field. Provides labeling, description, and error messaging with correct ARIA association. WCAG 2.1 AA+. Use FieldGroup for a simple label + control + helper/error API, or Field.Root + Field.Label + Field.Description + Field.Error for full control."}}},argTypes:{label:{control:{type:"text"},description:"Label text"},helperText:{control:{type:"text"},description:"Helper or description text"},error:{control:{type:"text"},description:"Error message (use with invalid=true)"},required:{control:{type:"boolean"},description:"Show required indicator"},disabled:{control:{type:"boolean"},description:"Disable the field"},invalid:{control:{type:"boolean"},description:"Mark field as invalid (shows error when error prop is set)"}},args:{label:"Email",helperText:"We will never share your email.",required:!1,disabled:!1,invalid:!1,children:e.jsx(a,{placeholder:"you@example.com",type:"email"})}},l={args:{label:"Email",helperText:"We will never share your email."},render:r=>e.jsx(o,{...r,children:r.children??e.jsx(a,{placeholder:"you@example.com",type:"email"})})},t={args:{label:"Username",required:!0,children:e.jsx(a,{placeholder:"Choose a username"})},render:r=>e.jsx(o,{...r,children:r.children??e.jsx(a,{placeholder:"Choose a username"})})},s={args:{label:"Email",error:"Please enter a valid email address.",invalid:!0,children:e.jsx(a,{placeholder:"you@example.com",variant:"error",defaultValue:"invalid"})},render:r=>e.jsx(o,{...r,children:r.children??e.jsx(a,{placeholder:"you@example.com",variant:"error",defaultValue:"invalid"})})},d={args:{label:"Disabled field",helperText:"This field is disabled.",disabled:!0,children:e.jsx(a,{placeholder:"Cannot edit",disabled:!0})},render:r=>e.jsx(o,{...r,children:r.children??e.jsx(a,{placeholder:"Cannot edit",disabled:!0})})},n={args:{label:"Bio",helperText:"Tell us a little about yourself. Max 500 characters.",children:e.jsx(a,{placeholder:"Write something..."})},render:r=>e.jsx(o,{...r,children:r.children??e.jsx(a,{placeholder:"Write something..."})})},c={args:{},parameters:{docs:{description:{story:"Use the compound API when you need full control over structure and validation."}}},render:()=>e.jsxs(i.Root,{children:[e.jsxs(i.Label,{children:["Full name",e.jsx("span",{className:"memori-field__required-indicator","aria-hidden":"true",children:"*"})]}),e.jsx(a,{placeholder:"First and last name"}),e.jsx(i.Description,{children:"As it appears on your ID."}),e.jsx(i.Error,{match:!0,children:"This field is required."})]})},p={args:{},parameters:{docs:{description:{story:"Field.Root validate and validationMode (e.g. onBlur) with custom error message."}}},render:()=>e.jsxs(i.Root,{validate:r=>{const u=String(r??"").trim();return u.length===0?"Value is required.":u.length<3?"Must be at least 3 characters.":null},validationMode:"onBlur",children:[e.jsx(i.Label,{children:"Username"}),e.jsx(a,{placeholder:"Min 3 characters"}),e.jsx(i.Validity,{children:r=>r.errors?.length?e.jsx(i.Error,{match:!0,children:r.errors[0]}):null})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    helperText: 'We will never share your email.'
  },
  render: args => <FieldGroup {...args}>
      {args.children ?? <Input placeholder="you@example.com" type="email" />}
    </FieldGroup>
}`,...l.parameters?.docs?.source},description:{story:"Default field with label and optional helper text.",...l.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    required: true,
    children: <Input placeholder="Choose a username" />
  },
  render: args => <FieldGroup {...args}>
      {args.children ?? <Input placeholder="Choose a username" />}
    </FieldGroup>
}`,...t.parameters?.docs?.source},description:{story:"Required field with asterisk indicator.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    error: 'Please enter a valid email address.',
    invalid: true,
    children: <Input placeholder="you@example.com" variant="error" defaultValue="invalid" />
  },
  render: args => <FieldGroup {...args}>
      {args.children ?? <Input placeholder="you@example.com" variant="error" defaultValue="invalid" />}
    </FieldGroup>
}`,...s.parameters?.docs?.source},description:{story:"Field with validation error.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled field',
    helperText: 'This field is disabled.',
    disabled: true,
    children: <Input placeholder="Cannot edit" disabled />
  },
  render: args => <FieldGroup {...args}>
      {args.children ?? <Input placeholder="Cannot edit" disabled />}
    </FieldGroup>
}`,...d.parameters?.docs?.source},description:{story:"Disabled field.",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    helperText: 'Tell us a little about yourself. Max 500 characters.',
    children: <Input placeholder="Write something..." />
  },
  render: args => <FieldGroup {...args}>
      {args.children ?? <Input placeholder="Write something..." />}
    </FieldGroup>
}`,...n.parameters?.docs?.source},description:{story:"Field with description (helper text).",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Use the compound API when you need full control over structure and validation.'
      }
    }
  },
  render: () => <Field.Root>
      <Field.Label>
        Full name
        <span className="memori-field__required-indicator" aria-hidden="true">
          *
        </span>
      </Field.Label>
      <Input placeholder="First and last name" />
      <Field.Description>As it appears on your ID.</Field.Description>
      <Field.Error match={true}>This field is required.</Field.Error>
    </Field.Root>
}`,...c.parameters?.docs?.source},description:{story:"Compound API: full control with Field.Root, Field.Label, Input, Field.Description, Field.Error.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Field.Root validate and validationMode (e.g. onBlur) with custom error message.'
      }
    }
  },
  render: () => <Field.Root validate={value => {
    const v = String(value ?? '').trim();
    if (v.length === 0) return 'Value is required.';
    if (v.length < 3) return 'Must be at least 3 characters.';
    return null;
  }} validationMode="onBlur">
      <Field.Label>Username</Field.Label>
      <Input placeholder="Min 3 characters" />
      <Field.Validity>
        {validity => validity.errors?.length ? <Field.Error match={true}>{validity.errors[0]}</Field.Error> : null}
      </Field.Validity>
    </Field.Root>
}`,...p.parameters?.docs?.source},description:{story:"Built-in validation with validate callback and validationMode.",...p.parameters?.docs?.description}}};const C=["Default","Required","WithError","Disabled","WithDescription","Composition","Validation"];export{c as Composition,l as Default,d as Disabled,t as Required,p as Validation,n as WithDescription,s as WithError,C as __namedExportsOrder,G as default};
