import{j as e,r as m}from"./iframe-DQnDAKDD.js";import{a as r,R as o}from"./Radio-oVbHHNf9.js";import{a as c}from"./Field-31MqisI0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./useControlled-BxKwvZDq.js";import"./useRenderElement-cOdDho9S.js";import"./useStableCallback-D88_nEGo.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-Du8KLZzD.js";import"./useId-De35mOlf.js";import"./composite-D3kou_rz.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./CompositeRoot-D7kfusPc.js";import"./useCompositeListItem-BT75gscy.js";import"./DirectionContext-C6MBq8M9.js";import"./event-BggRprRz.js";import"./element-BGnTlyAk.js";import"./useButton-7PT9BvyD.js";import"./LabelableContext-3B9JIArg.js";import"./index-BVVOsdlT.js";import"./index-BuiRabFg.js";import"./useValueChanged-B4u935Jy.js";import"./useStableId-C_KYzaE7.js";import"./useOpenChangeComplete-Cqu1IpCR.js";import"./useValueAsRef-D3PBd9gO.js";import"./useOnMount-DPtsMZQG.js";import"./CompositeItem-CoWAW1Z4.js";import"./useCompositeItem-CGgBqWNx.js";import"./FieldItemContext-BIdifIj7.js";import"./useLabelableId-CXBYCdWy.js";import"./useTransitionStatus-BW_pRtG3.js";import"./useTimeout-DTtOPXgK.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,N={title:"Form/Radio",component:o,subcomponents:{Radio:r},tags:["autodocs"],argTypes:{value:{control:"text",description:"The selected value (controlled)"},defaultValue:{control:"text",description:"The initially selected value (uncontrolled)"},orientation:{control:"select",options:["vertical","horizontal"],description:"Layout direction of the radios",table:{defaultValue:{summary:"vertical"}}},disabled:{control:"boolean",description:"If true, every radio in the group is disabled"},name:{control:"text",description:"The name of the hidden input"},onValueChange:{description:"Callback fired when the selected radio changes"}},args:{"aria-label":"Plan",defaultValue:"free",onValueChange:b()},parameters:{controls:{expanded:!0},docs:{description:{component:"A single-choice group built with @base-ui RadioGroup and Radio. Arrow keys move the selection; the group is a single tab stop."}}},render:a=>e.jsxs(o,{...a,children:[e.jsx(r,{value:"free",label:"Free"}),e.jsx(r,{value:"pro",label:"Pro"}),e.jsx(r,{value:"enterprise",label:"Enterprise"})]})},l={},s={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs(o,{...a,orientation:"vertical",children:[e.jsx(r,{value:"free",label:"Vertical — Free"}),e.jsx(r,{value:"pro",label:"Vertical — Pro"})]}),e.jsxs(o,{...a,orientation:"horizontal",children:[e.jsx(r,{value:"free",label:"Horizontal — Free"}),e.jsx(r,{value:"pro",label:"Horizontal — Pro"})]})]})},t={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs(o,{...a,children:[e.jsx(r,{value:"free",label:"Selected"}),e.jsx(r,{value:"pro",label:"Unselected"}),e.jsx(r,{value:"enterprise",label:"Single radio disabled",disabled:!0})]}),e.jsxs(o,{...a,disabled:!0,children:[e.jsx(r,{value:"free",label:"Group disabled (selected)"}),e.jsx(r,{value:"pro",label:"Group disabled"})]})]})},d={render:a=>{const[p,u]=m.useState("pro");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs(o,{...a,value:p,onValueChange:u,children:[e.jsx(r,{value:"free",label:"Free"}),e.jsx(r,{value:"pro",label:"Pro"})]}),e.jsxs("span",{children:["Selected: ",e.jsx("strong",{children:p})]})]})}},i={args:{"aria-label":void 0},render:a=>e.jsxs(c.Root,{children:[e.jsx(c.Label,{children:"Plan"}),e.jsxs(o,{...a,children:[e.jsx(r,{value:"free",label:"Free"}),e.jsx(r,{value:"pro",label:"Pro"})]})]})},n={render:a=>e.jsxs(o,{...a,"aria-label":"Chi può chattare",defaultValue:"public",orientation:"horizontal",children:[e.jsx(r,{variant:"card",value:"public",label:"Pubblico",description:"Chiunque trovi il bot può scrivergli."}),e.jsx(r,{variant:"card",value:"password",label:"Richiedi una password",description:"Il bot chiede una password prima di rispondere."}),e.jsx(r,{variant:"card",value:"whitelist",label:"Lista consentiti",description:"Solo gli utenti in elenco possono scrivere.",disabled:!0})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Q=["Default","AllVariants","States","Controlled","InField","Cards"];export{s as AllVariants,n as Cards,d as Controlled,l as Default,i as InField,t as States,Q as __namedExportsOrder,N as default};
