import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-ByQU2BNT.js";import{c as N}from"./index-Db0Da-SN.js";import{u as D,a as W,c as V}from"./useRenderElement-Bm3UgFrF.js";import{b as O,n as _}from"./createBaseUIEventDetails-DbQuAIGZ.js";import{F as H}from"./LabelableContext-BtlVCVF1.js";import{u as L}from"./useValueChanged-BkoHqiER.js";import{F as t}from"./Field-DQdly9tz.js";import{I as s}from"./Input-Bw42OHJK.js";import{B as u}from"./Button-Cr__w9JV.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B2nbzJuQ.js";import"./index-DBuOMn_v.js";import"./element-CfyAZhWR.js";import"./useOnMount-BKXpaVxi.js";import"./useBaseUiId-Dch4vH_m.js";import"./useId-Bf8mvrXM.js";import"./useControlled-ieZLT0dB.js";import"./useLabelableId-CUELGrsQ.js";import"./useButton-Be4eE8CD.js";import"./loader-circle-4EonD_Mg.js";import"./createLucideIcon-DB9m5VVq.js";const Y=n.forwardRef(function(d,j){const{render:C,className:I,validationMode:g="onSubmit",errors:p,onSubmit:B,onFormSubmit:R,...E}=d,l=n.useRef({fields:new Map}),c=n.useRef(!1),x=n.useRef(!1),b=D(o=>{o&&(o.focus(),o.tagName==="INPUT"&&o.select())}),[a,T]=n.useState(p);L(p,()=>{T(p)}),n.useEffect(()=>{if(!c.current)return;c.current=!1;const o=Array.from(l.current.fields.values()).filter(i=>i.validityData.state.valid===!1);o.length&&b(o[0].controlRef.current)},[a,b]);const U=W("form",d,{ref:j,props:[{noValidate:!0,onSubmit(o){x.current=!0;let i=Array.from(l.current.fields.values());i.forEach(f=>{f.validate()}),i=Array.from(l.current.fields.values());const M=i.filter(f=>!f.validityData.state.valid);if(M.length)o.preventDefault(),b(M[0].controlRef.current);else if(c.current=!0,B?.(o),R){o.preventDefault();const f=i.reduce((q,P)=>(P.name&&(q[P.name]=P.getValue()),q),{});R(f,O(_,o.nativeEvent))}}},E]}),A=D(o=>{if(o&&a&&V.hasOwnProperty.call(a,o)){const i={...a};delete i[o],T(i)}}),k=n.useMemo(()=>({formRef:l,validationMode:g,errors:a??V,clearErrors:A,submitAttemptedRef:x}),[l,g,a,A]);return e.jsx(H.Provider,{value:k,children:U})}),G=n.forwardRef(({className:r,style:d,errors:j,onFormSubmit:C,validationMode:I,onSubmit:g,action:p,method:B,disabled:R,children:E,...l},c)=>{const x=typeof r=="function"?a=>N("memori-form",r(a)):N("memori-form",r),b=typeof d=="function"?a=>({...d(a)}):d;return e.jsx(Y,{ref:c,className:x,style:b,errors:j,onFormSubmit:C,validationMode:I,onSubmit:g,action:p,method:B,...l,children:E})});G.displayName="Form";const m=G;G.__docgenInfo={description:"",methods:[],displayName:"Form",props:{errors:{required:!1,tsType:{name:"BaseFormProps['errors']",raw:"BaseFormProps<Record<string, unknown>>['errors']"},description:"Validation errors keyed by field name (e.g. from server or schema).\nKeys should match the `name` attribute on form controls."},onFormSubmit:{required:!1,tsType:{name:"BaseFormProps['onFormSubmit']",raw:"BaseFormProps<Record<string, unknown>>['onFormSubmit']"},description:`Called when form is submitted with values as an object.
When used, preventDefault() is called on the native submit event.`},validationMode:{required:!1,tsType:{name:"BaseFormProps['validationMode']",raw:"BaseFormProps<Record<string, unknown>>['validationMode']"},description:`When to run validation: 'onSubmit' | 'onBlur' | 'onChange'.
@default 'onSubmit'`},onSubmit:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},description:"Native form submit handler (use onFormSubmit for values object)."},action:{required:!1,tsType:{name:"string"},description:"Form action URL (native)."},method:{required:!1,tsType:{name:"union",raw:"'get' | 'post'",elements:[{name:"literal",value:"'get'"},{name:"literal",value:"'post'"}]},description:"Form method (native)."},disabled:{required:!1,tsType:{name:"boolean"},description:`When true, form submission is disabled (use with disabled on submit Button for UX).
Note: native <form> has no disabled attribute; disable individual controls as needed.`},className:{required:!1,tsType:{name:"union",raw:"string | ((state: FormState) => string | undefined)",elements:[{name:"string"},{name:"unknown"}]},description:"CSS class (merged with root styles). Can be a function (state) => string for Base UI compatibility."},style:{required:!1,tsType:{name:"union",raw:`| React.CSSProperties
| ((state: FormState) => React.CSSProperties | undefined)`,elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"unknown"}]},description:"Inline styles (merged with root styles). Can be a function (state) => CSSProperties for Base UI compatibility."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Form content (use Field + inputs + Button type="submit").'}},composes:["Omit"]};const fe={title:"Form/Form",component:m,tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Native form element with consolidated error handling, built on @base-ui/react Form. Use with Field/FieldGroup for labeling and validation. Supports onSubmit, onFormSubmit (values object), errors map, and validationMode. WCAG 2.1 AA+ with correct ARIA association and keyboard submit."}}},argTypes:{validationMode:{control:{type:"select"},options:["onSubmit","onBlur","onChange"],description:"When to run validation"},method:{control:{type:"select"},options:["get","post"],description:"Form method"},disabled:{control:{type:"boolean"},description:"Disable the form"}},args:{validationMode:"onSubmit",method:"post",disabled:!1}},h={render:()=>e.jsxs(m,{onSubmit:r=>{r.preventDefault(),console.log("Submitted (native)")},children:[e.jsx(t,{label:"Email",helperText:"We will never share your email.",required:!0,children:e.jsx(s,{name:"email",type:"email",placeholder:"you@example.com"})}),e.jsx(t,{label:"Password",children:e.jsx(s,{name:"password",type:"password",placeholder:"••••••••"})}),e.jsx(u,{type:"submit",children:"Submit"})]})},y={render:()=>e.jsxs(m,{onFormSubmit:r=>{console.log("Form values:",r)},children:[e.jsx(t,{label:"Username",children:e.jsx(s,{name:"username",placeholder:"johndoe"})}),e.jsx(t,{label:"Quantity",children:e.jsx(s,{name:"quantity",type:"number",placeholder:"1",defaultValue:"1"})}),e.jsx(u,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"onFormSubmit provides form values as a Record<string, unknown> keyed by input name. Useful for API calls or transforming data before submit."}}}},F={args:{errors:{email:"Please enter a valid email address.",password:"Password must be at least 8 characters."}},render:r=>e.jsxs(m,{...r,children:[e.jsx(t,{name:"email",label:"Email",error:Array.isArray(r.errors?.email)?r.errors.email[0]:r.errors?.email,invalid:!!r.errors?.email,children:e.jsx(s,{name:"email",type:"email",placeholder:"you@example.com",variant:"error"})}),e.jsx(t,{name:"password",label:"Password",error:Array.isArray(r.errors?.password)?r.errors.password[0]:r.errors?.password,invalid:!!r.errors?.password,children:e.jsx(s,{name:"password",type:"password",placeholder:"••••••••",variant:"error"})}),e.jsx(u,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"Set errors from server response or Zod/schema validation. Field names in the errors object should match the name attribute on controls."}}}},v={render:()=>e.jsxs(m,{validationMode:"onBlur",children:[e.jsx(t,{label:"Username",required:!0,children:e.jsx(s,{name:"username",placeholder:"Min 3 characters"})}),e.jsx(t,{label:"Email",required:!0,children:e.jsx(s,{name:"email",type:"email",placeholder:"you@example.com"})}),e.jsx(u,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"Validation runs when a field loses focus (onBlur). Use with Field.Root validate + Field.Validity for messages."}}}},S={render:()=>e.jsxs(m,{disabled:!0,children:[e.jsx(t,{label:"Email",helperText:"Form is disabled.",children:e.jsx(s,{name:"email",type:"email",placeholder:"you@example.com",disabled:!0})}),e.jsx(u,{type:"submit",disabled:!0,children:"Submit"})]})},w={render:()=>e.jsxs(m,{className:"custom-form",style:{padding:"var(--memori-spacing-lg)",border:"1px solid var(--memori-border-color)",borderRadius:"var(--memori-radius-box)"},children:[e.jsx(t,{label:"Name",children:e.jsx(s,{name:"name",placeholder:"Your name"})}),e.jsx(u,{type:"submit",children:"Submit"})]}),parameters:{docs:{description:{story:"className and style are merged with the default root styles."}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Default form with FieldGroup, Input, and submit Button.
Submit via Enter or button; validation runs on submit.`,...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Use onFormSubmit to receive form values as an object.
preventDefault() is called automatically when onFormSubmit is provided.`,...y.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Pass server or schema validation errors via the errors prop.
Keys must match the name attribute on Field.Root / form controls.`,...F.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"validationMode controls when fields validate: onSubmit (default), onBlur, or onChange.",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Form disabled>
      <FieldGroup label="Email" helperText="Form is disabled.">
        <Input name="email" type="email" placeholder="you@example.com" disabled />
      </FieldGroup>
      <Button type="submit" disabled>
        Submit
      </Button>
    </Form>
}`,...S.parameters?.docs?.source},description:{story:"Disabled form: all controls are disabled.",...S.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Custom className and style are merged with root styles.",...w.parameters?.docs?.description}}};const he=["Default","WithOnFormSubmit","WithErrors","ValidationModeOnBlur","Disabled","CustomStyling"];export{w as CustomStyling,h as Default,S as Disabled,v as ValidationModeOnBlur,F as WithErrors,y as WithOnFormSubmit,he as __namedExportsOrder,fe as default};
