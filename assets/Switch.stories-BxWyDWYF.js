import{j as e,r as m}from"./iframe-DQnDAKDD.js";import{S as t}from"./Switch-CaZ_XEX4.js";import{a as n}from"./Field-31MqisI0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./useStableId-C_KYzaE7.js";import"./useControlled-BxKwvZDq.js";import"./useStableCallback-D88_nEGo.js";import"./useRenderElement-cOdDho9S.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-Du8KLZzD.js";import"./useId-De35mOlf.js";import"./LabelableContext-3B9JIArg.js";import"./index-BVVOsdlT.js";import"./index-BuiRabFg.js";import"./useLabelableId-CXBYCdWy.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useValueChanged-B4u935Jy.js";import"./useButton-7PT9BvyD.js";import"./useTimeout-DTtOPXgK.js";import"./useOnMount-DPtsMZQG.js";import"./element-BGnTlyAk.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,I={title:"Form/Switch",component:t,tags:["autodocs"],argTypes:{label:{control:"text",description:"Visible label rendered next to the switch"},checked:{control:"boolean",description:"If true, the switch is on (controlled)"},defaultChecked:{control:"boolean",description:"The initial on state (uncontrolled)"},disabled:{control:"boolean",description:"If true, the switch is disabled"},size:{control:"select",options:["sm","md"],description:"Switch size",table:{defaultValue:{summary:"md"}}},name:{control:"text",description:"The name of the hidden input"},onCheckedChange:{description:"Callback fired when the switch is toggled"}},args:{onCheckedChange:h()},parameters:{controls:{expanded:!0},docs:{description:{component:"An accessible on/off toggle built with @base-ui Switch. Use for settings that apply immediately; use Checkbox for choices submitted with a form."}}}},o={args:{label:"Enable notifications"}},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{...r,size:"sm",label:"Small"}),e.jsx(t,{...r,size:"md",label:"Medium"})]})},l={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{...r,label:"Off"}),e.jsx(t,{...r,label:"On",defaultChecked:!0}),e.jsx(t,{...r,label:"Disabled off",disabled:!0}),e.jsx(t,{...r,label:"Disabled on",defaultChecked:!0,disabled:!0})]})},a={args:{"aria-label":"Dark mode"}},c={render:r=>{const[d,p]=m.useState(!1);return e.jsx(t,{...r,label:d?"On":"Off",checked:d,onCheckedChange:p})}},s={render:r=>e.jsxs(n.Root,{children:[e.jsx(n.Label,{children:"Auto-save"}),e.jsx(t,{...r}),e.jsx(n.Description,{children:"Changes are saved as you type."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Switch {...args} size="sm" label="Small" />
      <Switch {...args} size="md" label="Medium" />
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Switch {...args} label="Off" />
      <Switch {...args} label="On" defaultChecked />
      <Switch {...args} label="Disabled off" disabled />
      <Switch {...args} label="Disabled on" defaultChecked disabled />
    </div>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Dark mode'
  }
}`,...a.parameters?.docs?.source},description:{story:"Without a visible label an `aria-label` is required.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} label={checked ? 'On' : 'Off'} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root>
      <Field.Label>Auto-save</Field.Label>
      <Switch {...args} />
      <Field.Description>Changes are saved as you type.</Field.Description>
    </Field.Root>
}`,...s.parameters?.docs?.source},description:{story:"Inside `Field.Root`, `Field.Label` and `Field.Description` are wired to the switch automatically.",...s.parameters?.docs?.description}}};const V=["Default","AllVariants","States","WithoutLabel","Controlled","InField"];export{i as AllVariants,c as Controlled,o as Default,s as InField,l as States,a as WithoutLabel,V as __namedExportsOrder,I as default};
