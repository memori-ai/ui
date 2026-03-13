import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-Da2YPWL1.js";import{C as o}from"./Checkbox-CNIaVi3N.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C1quyIeQ.js";import"./createLucideIcon-CWzpwJR2.js";import"./useValueChanged-CSQu47fQ.js";import"./useRenderElement-iIXuqUs6.js";import"./useControlled-BqmCUJNV.js";import"./visuallyHidden-CbwUG2x5.js";import"./LabelableContext-CT5S50JL.js";import"./index-BxRARYON.js";import"./index-_qJ-_ijI.js";import"./useBaseUiId-MQ3sd41J.js";import"./useId-CRV6shn5.js";import"./useButton-DA4_hMsw.js";import"./createBaseUIEventDetails-CtaKihV1.js";import"./useOpenChangeComplete-B8lCm8j0.js";import"./useTransitionStatus-DNHvzNCX.js";const F={title:"Form/Checkbox",component:o,tags:["autodocs"],argTypes:{label:{control:"text",description:"The label content for the checkbox"},checked:{control:"boolean",description:"If true, the checkbox is checked"},defaultChecked:{control:"boolean",description:"The default checked state (uncontrolled)"},indeterminate:{control:"boolean",description:"If true, the checkbox appears in an indeterminate state"},disabled:{control:"boolean",description:"If true, the checkbox is disabled"},required:{control:"boolean",description:"If true, the checkbox is required"},name:{control:"text",description:"The name attribute of the input element"},value:{control:"text",description:"The value attribute of the input element"},className:{control:"text",description:"Additional CSS class name"}},parameters:{controls:{expanded:!0},docs:{description:{component:"A fully accessible checkbox component built with @base-ui. Supports checked, unchecked, indeterminate, and disabled states with smooth animations."}}}},n={args:{label:"Accept terms and conditions",defaultChecked:!1}},i={args:{label:"I agree to the terms",defaultChecked:!0}},l={args:{label:"Subscribe to newsletter",defaultChecked:!1}},d={args:{label:"Select all items",indeterminate:!0}},p={args:{label:"This option is disabled",disabled:!0}},m={args:{label:"This option is checked and disabled",checked:!0,disabled:!0}},h={args:{label:"Partially selected (disabled)",indeterminate:!0,disabled:!0}},u={args:{"aria-label":"Accept terms"}},b={args:{label:"I agree to the terms and conditions *",required:!0}},k={args:{label:"Custom styled checkbox",className:"my-custom-class"}},x={render:()=>{const[t,r]=S.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{label:"Controlled checkbox",checked:t,onChange:s=>r(s)}),e.jsxs("div",{style:{fontSize:"14px",color:"#595959"},children:["Current state: ",e.jsx("strong",{children:t?"Checked":"Unchecked"})]}),e.jsx("button",{onClick:()=>r(!t),style:{padding:"8px 16px",borderRadius:"8px",border:"1px solid #d9d9d9",background:"#fff",cursor:"pointer",fontSize:"14px"},children:"Toggle Checkbox"})]})}},g={render:()=>{const[t,r]=S.useState({option1:!1,option2:!0,option3:!1}),s=f=>y=>{r(a=>({...a,[f]:y}))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:600},children:"Select your preferences"}),e.jsx(o,{label:"Email notifications",checked:t.option1,onChange:s("option1")}),e.jsx(o,{label:"SMS notifications",checked:t.option2,onChange:s("option2")}),e.jsx(o,{label:"Push notifications",checked:t.option3,onChange:s("option3")})]})}},C={render:()=>{const[t,r]=S.useState({item1:!1,item2:!1,item3:!1}),s=Object.values(t).every(Boolean),f=Object.values(t).some(Boolean)&&!s,y=c=>{r({item1:c,item2:c,item3:c})},a=c=>I=>{r(v=>({...v,[c]:I}))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{label:"Select all",checked:s,indeterminate:f,onChange:y}),e.jsxs("div",{style:{marginLeft:"24px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{label:"Item 1",checked:t.item1,onChange:a("item1")}),e.jsx(o,{label:"Item 2",checked:t.item2,onChange:a("item2")}),e.jsx(o,{label:"Item 3",checked:t.item3,onChange:a("item3")})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...n.parameters?.docs?.source},description:{story:`Default checkbox with a label.
Click to toggle the checkbox state.`,...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    defaultChecked: true
  }
}`,...i.parameters?.docs?.source},description:{story:`Checkbox in checked state.
Click to toggle the checkbox state.`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    defaultChecked: false
  }
}`,...l.parameters?.docs?.source},description:{story:`Checkbox in unchecked state.
Click to toggle the checkbox state.`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select all items',
    indeterminate: true
  }
}`,...d.parameters?.docs?.source},description:{story:'Indeterminate state - useful for "select all" scenarios',...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This option is disabled',
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Disabled checkbox (unchecked)",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This option is checked and disabled',
    checked: true,
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Disabled checkbox (checked)",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Partially selected (disabled)',
    indeterminate: true,
    disabled: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Disabled checkbox (indeterminate)",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Accept terms'
  }
}`,...u.parameters?.docs?.source},description:{story:"Checkbox without a label - requires aria-label for accessibility",...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions *',
    required: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Required checkbox for forms",...b.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled checkbox',
    className: 'my-custom-class'
  }
}`,...k.parameters?.docs?.source},description:{story:"Checkbox with custom className",...k.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Checkbox label="Controlled checkbox" checked={checked} onChange={newChecked => setChecked(newChecked)} />
        <div style={{
        fontSize: '14px',
        color: '#595959'
      }}>
          Current state: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
        </div>
        <button onClick={() => setChecked(!checked)} style={{
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid #d9d9d9',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
          Toggle Checkbox
        </button>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Interactive controlled checkbox example",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false
    });
    const handleChange = (key: keyof typeof selections) => (checked: boolean) => {
      setSelections(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '16px',
        fontWeight: 600
      }}>
          Select your preferences
        </h3>
        <Checkbox label="Email notifications" checked={selections.option1} onChange={handleChange('option1')} />
        <Checkbox label="SMS notifications" checked={selections.option2} onChange={handleChange('option2')} />
        <Checkbox label="Push notifications" checked={selections.option3} onChange={handleChange('option3')} />
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Multiple checkboxes in a group",...g.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false
    });
    const allChecked = Object.values(items).every(Boolean);
    const someChecked = Object.values(items).some(Boolean) && !allChecked;
    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked
      });
    };
    const handleItemChange = (key: keyof typeof items) => (checked: boolean) => {
      setItems(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Checkbox label="Select all" checked={allChecked} indeterminate={someChecked} onChange={handleSelectAll} />
        <div style={{
        marginLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Checkbox label="Item 1" checked={items.item1} onChange={handleItemChange('item1')} />
          <Checkbox label="Item 2" checked={items.item2} onChange={handleItemChange('item2')} />
          <Checkbox label="Item 3" checked={items.item3} onChange={handleItemChange('item3')} />
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Select all with indeterminate state",...C.parameters?.docs?.description}}};const H=["Default","Checked","Unchecked","Indeterminate","Disabled","DisabledChecked","DisabledIndeterminate","WithoutLabel","Required","CustomClassName","ControlledCheckbox","CheckboxGroup","SelectAllPattern"];export{g as CheckboxGroup,i as Checked,x as ControlledCheckbox,k as CustomClassName,n as Default,p as Disabled,m as DisabledChecked,h as DisabledIndeterminate,d as Indeterminate,b as Required,C as SelectAllPattern,l as Unchecked,u as WithoutLabel,H as __namedExportsOrder,F as default};
