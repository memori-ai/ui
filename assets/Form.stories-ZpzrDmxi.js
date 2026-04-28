import{j as e}from"./iframe-CbkzK_Ne.js";import{F as s}from"./Form-B1tbhGFV.js";import{F as o}from"./Field-BXbsGsl3.js";import{I as a}from"./Input-B_6P24Zz.js";import{B as t}from"./Button-k9XqVxjI.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DS7HLWym.js";import"./useRenderElement-D7O_O9fD.js";import"./createBaseUIEventDetails-BzDikJ6g.js";import"./LabelableContext-B3BKzV7H.js";import"./index-CeDvvr81.js";import"./index-CUck_JVj.js";import"./useValueChanged-B8k4E7r-.js";import"./useTimeout-eLRjYdCg.js";import"./useOnMount-BshAaH-I.js";import"./useBaseUiId-DvS8LH9Q.js";import"./useId-CLSo67vu.js";import"./element-DB4TQX-y.js";import"./useControlled-B8GzABoU.js";import"./useLabelableId-B5JtjM4b.js";import"./useButton-Dj-E1taN.js";import"./loader-circle-DTIpBvt8.js";import"./createLucideIcon-DMqLCRsw.js";const R={title:"Form/Form",component:s,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Native form element with consolidated error handling, built on @base-ui/react Form. Use with Field/FieldGroup for labeling and validation. Supports onSubmit, onFormSubmit (values object), errors map, and validationMode. WCAG 2.1 AA+ with correct ARIA association and keyboard submit."}}},argTypes:{validationMode:{control:{type:"select"},options:["onSubmit","onBlur","onChange"],description:"When to run validation"},method:{control:{type:"select"},options:["get","post"],description:"Form method"},disabled:{control:{type:"boolean"},description:"Disable the form"}},args:{validationMode:"onSubmit",method:"post",disabled:!1}},i={render:()=>e.jsxs(s,{onSubmit:r=>{r.preventDefault(),console.log("Submitted (native)")},children:[e.jsx(o,{label:"Email",helperText:"We will never share your email.",required:!0,children:e.jsx(a,{name:"email",type:"email",placeholder:"you@example.com"})}),e.jsx(o,{label:"Password",children:e.jsx(a,{name:"password",type:"password",placeholder:"••••••••"})}),e.jsx(t,{type:"submit",children:"Submit"})]})},l={render:()=>e.jsxs(s,{onFormSubmit:r=>{console.log("Form values:",r)},children:[e.jsx(o,{label:"Username",children:e.jsx(a,{name:"username",placeholder:"johndoe"})}),e.jsx(o,{label:"Quantity",children:e.jsx(a,{name:"quantity",type:"number",placeholder:"1",defaultValue:"1"})}),e.jsx(t,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"onFormSubmit provides form values as a Record<string, unknown> keyed by input name. Useful for API calls or transforming data before submit."}}}},m={args:{errors:{email:"Please enter a valid email address.",password:"Password must be at least 8 characters."}},render:r=>e.jsxs(s,{...r,children:[e.jsx(o,{name:"email",label:"Email",error:Array.isArray(r.errors?.email)?r.errors.email[0]:r.errors?.email,invalid:!!r.errors?.email,children:e.jsx(a,{name:"email",type:"email",placeholder:"you@example.com",variant:"error"})}),e.jsx(o,{name:"password",label:"Password",error:Array.isArray(r.errors?.password)?r.errors.password[0]:r.errors?.password,invalid:!!r.errors?.password,children:e.jsx(a,{name:"password",type:"password",placeholder:"••••••••",variant:"error"})}),e.jsx(t,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"Set errors from server response or Zod/schema validation. Field names in the errors object should match the name attribute on controls."}}}},d={render:()=>e.jsxs(s,{validationMode:"onBlur",children:[e.jsx(o,{label:"Username",required:!0,children:e.jsx(a,{name:"username",placeholder:"Min 3 characters"})}),e.jsx(o,{label:"Email",required:!0,children:e.jsx(a,{name:"email",type:"email",placeholder:"you@example.com"})}),e.jsx(t,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"Validation runs when a field loses focus (onBlur). Use with Field.Root validate + Field.Validity for messages."}}}},n={render:()=>e.jsxs(s,{disabled:!0,children:[e.jsx(o,{label:"Email",helperText:"Form is disabled.",children:e.jsx(a,{name:"email",type:"email",placeholder:"you@example.com",disabled:!0})}),e.jsx(t,{type:"submit",disabled:!0,children:"Submit"})]})},p={render:()=>e.jsxs(s,{className:"custom-form",style:{padding:"var(--memori-spacing-lg)",border:"1px solid var(--memori-border-color)",borderRadius:"var(--memori-radius-box)"},children:[e.jsx(o,{label:"Name",children:e.jsx(a,{name:"name",placeholder:"Your name"})}),e.jsx(t,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"className and style are merged with the default root styles."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    console.log('Submitted (native)');
  }}>
      <FieldGroup label="Email" helperText="We will never share your email." required>
        <Input name="email" type="email" placeholder="you@example.com" />
      </FieldGroup>
      <FieldGroup label="Password">
        <Input name="password" type="password" placeholder="••••••••" />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>
}`,...i.parameters?.docs?.source},description:{story:`Default form with FieldGroup, Input, and submit Button.
Submit via Enter or button; validation runs on submit.`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Form onFormSubmit={formValues => {
    console.log('Form values:', formValues);
  }}>
      <FieldGroup label="Username">
        <Input name="username" placeholder="johndoe" />
      </FieldGroup>
      <FieldGroup label="Quantity">
        <Input name="quantity" type="number" placeholder="1" defaultValue="1" />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>,
  parameters: {
    docs: {
      description: {
        story: 'onFormSubmit provides form values as a Record<string, unknown> keyed by input name. Useful for API calls or transforming data before submit.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Use onFormSubmit to receive form values as an object.
preventDefault() is called automatically when onFormSubmit is provided.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    errors: {
      email: 'Please enter a valid email address.',
      password: 'Password must be at least 8 characters.'
    }
  },
  render: args => <Form {...args}>
      <FieldGroup name="email" label="Email" error={Array.isArray(args.errors?.email) ? args.errors.email[0] : args.errors?.email} invalid={Boolean(args.errors?.email)}>
        <Input name="email" type="email" placeholder="you@example.com" variant="error" />
      </FieldGroup>
      <FieldGroup name="password" label="Password" error={Array.isArray(args.errors?.password) ? args.errors.password[0] : args.errors?.password} invalid={Boolean(args.errors?.password)}>
        <Input name="password" type="password" placeholder="••••••••" variant="error" />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>,
  parameters: {
    docs: {
      description: {
        story: 'Set errors from server response or Zod/schema validation. Field names in the errors object should match the name attribute on controls.'
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Pass server or schema validation errors via the errors prop.
Keys must match the name attribute on Field.Root / form controls.`,...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Form validationMode="onBlur">
      <FieldGroup label="Username" required>
        <Input name="username" placeholder="Min 3 characters" />
      </FieldGroup>
      <FieldGroup label="Email" required>
        <Input name="email" type="email" placeholder="you@example.com" />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>,
  parameters: {
    docs: {
      description: {
        story: 'Validation runs when a field loses focus (onBlur). Use with Field.Root validate + Field.Validity for messages.'
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"validationMode controls when fields validate: onSubmit (default), onBlur, or onChange.",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Form disabled>
      <FieldGroup label="Email" helperText="Form is disabled.">
        <Input name="email" type="email" placeholder="you@example.com" disabled />
      </FieldGroup>
      <Button type="submit" disabled>
        Submit
      </Button>
    </Form>
}`,...n.parameters?.docs?.source},description:{story:"Disabled form: all controls are disabled.",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Form className="custom-form" style={{
    padding: 'var(--memori-spacing-lg)',
    border: '1px solid var(--memori-border-color)',
    borderRadius: 'var(--memori-radius-box)'
  }}>
      <FieldGroup label="Name">
        <Input name="name" placeholder="Your name" />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>,
  parameters: {
    docs: {
      description: {
        story: 'className and style are merged with the default root styles.'
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Custom className and style are merged with root styles.",...p.parameters?.docs?.description}}};const q=["Default","WithOnFormSubmit","WithErrors","ValidationModeOnBlur","Disabled","CustomStyling"];export{p as CustomStyling,i as Default,n as Disabled,d as ValidationModeOnBlur,m as WithErrors,l as WithOnFormSubmit,q as __namedExportsOrder,R as default};
