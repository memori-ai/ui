import{j as e,r as m}from"./iframe-welL_Y03.js";import{a as r,R as o}from"./Radio-BkJfzwkd.js";import{a as c}from"./Field-CvY9UilL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BFu-4PJz.js";import"./useControlled-CrE2ZJDa.js";import"./useStableCallback-BmsFBrCP.js";import"./useRenderElement-BsYNz85m.js";import"./useBaseUiId-Bw28qrdv.js";import"./useId-CoJK8Gi1.js";import"./composite-BZTvdP9J.js";import"./floating-ui.utils.dom-C95aRAwF.js";import"./CompositeRoot-BEKBgyJ0.js";import"./useCompositeListItem-BSVTosTd.js";import"./isElementDisabled-CwHw_lZC.js";import"./composite-9T5Ts5cl.js";import"./constants-B1v3gF3O.js";import"./shadowDom-C7-QBKxN.js";import"./useButton-DsWz-oUq.js";import"./DirectionContext-B1YwdV18.js";import"./useSetFieldFocused-D4iMvA2q.js";import"./useValueChanged-wmE338Q0.js";import"./useStableId-CAlA3-bx.js";import"./visuallyHidden-BI2aS7uD.js";import"./useOpenChangeComplete-B8oq_RqC.js";import"./index-CLv6_fCs.js";import"./index-DrBWIv9O.js";import"./useOnMount-C-u17Km0.js";import"./CompositeItem-p7vm4A3o.js";import"./useCompositeItem-BjjQc_c0.js";import"./FieldItemContext-csvGlzsA.js";import"./useAriaLabelledBy-iUXOPePp.js";import"./serializeValue-B8e3iXO-.js";import"./useTransitionStatus-nxPEYtLr.js";import"./useTimeout-DlB3jOiB.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,W={title:"Form/Radio",component:o,subcomponents:{Radio:r},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value (controlled)"},defaultValue:{control:"text",description:"The initially selected value (uncontrolled)"},orientation:{control:"select",options:["vertical","horizontal"],description:"Layout direction of the radios",table:{defaultValue:{summary:"vertical"}}},disabled:{control:"boolean",description:"If true, every radio in the group is disabled"},name:{control:"text",description:"The name of the hidden input"},onValueChange:{description:"Callback fired when the selected radio changes"}},args:{"aria-label":"Plan",defaultValue:"free",onValueChange:b()},parameters:{controls:{expanded:!0},docs:{description:{component:"A single-choice group built with @base-ui RadioGroup and Radio. Arrow keys move the selection; the group is a single tab stop."}}},render:a=>e.jsxs(o,{...a,children:[e.jsx(r,{value:"free",label:"Free"}),e.jsx(r,{value:"pro",label:"Pro"}),e.jsx(r,{value:"enterprise",label:"Enterprise"})]})},l={},t={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs(o,{...a,orientation:"vertical",children:[e.jsx(r,{value:"free",label:"Vertical — Free"}),e.jsx(r,{value:"pro",label:"Vertical — Pro"})]}),e.jsxs(o,{...a,orientation:"horizontal",children:[e.jsx(r,{value:"free",label:"Horizontal — Free"}),e.jsx(r,{value:"pro",label:"Horizontal — Pro"})]})]})},s={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs(o,{...a,children:[e.jsx(r,{value:"free",label:"Selected"}),e.jsx(r,{value:"pro",label:"Unselected"}),e.jsx(r,{value:"enterprise",label:"Single radio disabled",disabled:!0})]}),e.jsxs(o,{...a,disabled:!0,children:[e.jsx(r,{value:"free",label:"Group disabled (selected)"}),e.jsx(r,{value:"pro",label:"Group disabled"})]})]})},d={render:a=>{const[p,u]=m.useState("pro");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs(o,{...a,value:p,onValueChange:u,children:[e.jsx(r,{value:"free",label:"Free"}),e.jsx(r,{value:"pro",label:"Pro"})]}),e.jsxs("span",{children:["Selected: ",e.jsx("strong",{children:p})]})]})}},i={args:{"aria-label":void 0},render:a=>e.jsxs(c.Root,{children:[e.jsx(c.Label,{children:"Plan"}),e.jsxs(o,{...a,children:[e.jsx(r,{value:"free",label:"Free"}),e.jsx(r,{value:"pro",label:"Pro"})]})]})},n={render:a=>e.jsxs(o,{...a,"aria-label":"Chi può chattare",defaultValue:"public",orientation:"horizontal",children:[e.jsx(r,{variant:"card",value:"public",label:"Pubblico",description:"Chiunque trovi il bot può scrivergli."}),e.jsx(r,{variant:"card",value:"password",label:"Richiedi una password",description:"Il bot chiede una password prima di rispondere."}),e.jsx(r,{variant:"card",value:"whitelist",label:"Lista consentiti",description:"Solo gli utenti in elenco possono scrivere.",disabled:!0})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioGroup {...args} orientation="vertical">
        <Radio value="free" label="Vertical — Free" />
        <Radio value="pro" label="Vertical — Pro" />
      </RadioGroup>
      <RadioGroup {...args} orientation="horizontal">
        <Radio value="free" label="Horizontal — Free" />
        <Radio value="pro" label="Horizontal — Pro" />
      </RadioGroup>
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioGroup {...args}>
        <Radio value="free" label="Selected" />
        <Radio value="pro" label="Unselected" />
        <Radio value="enterprise" label="Single radio disabled" disabled />
      </RadioGroup>
      <RadioGroup {...args} disabled>
        <Radio value="free" label="Group disabled (selected)" />
        <Radio value="pro" label="Group disabled" />
      </RadioGroup>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('pro');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <RadioGroup {...args} value={value} onValueChange={setValue}>
          <Radio value="free" label="Free" />
          <Radio value="pro" label="Pro" />
        </RadioGroup>
        <span>
          Selected: <strong>{value}</strong>
        </span>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': undefined
  },
  render: args => <Field.Root>
      <Field.Label>Plan</Field.Label>
      <RadioGroup {...args}>
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>
    </Field.Root>
}`,...i.parameters?.docs?.source},description:{story:"Inside `Field.Root`, `Field.Label` names the group.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args} aria-label="Chi può chattare" defaultValue="public" orientation="horizontal">
      <Radio variant="card" value="public" label="Pubblico" description="Chiunque trovi il bot può scrivergli." />
      <Radio variant="card" value="password" label="Richiedi una password" description="Il bot chiede una password prima di rispondere." />
      <Radio variant="card" value="whitelist" label="Lista consentiti" description="Solo gli utenti in elenco possono scrivere." disabled />
    </RadioGroup>
}`,...n.parameters?.docs?.source}}};const X=["Default","AllVariants","States","Controlled","InField","Cards"];export{t as AllVariants,n as Cards,d as Controlled,l as Default,i as InField,s as States,X as __namedExportsOrder,W as default};
