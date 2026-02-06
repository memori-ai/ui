import{S as n}from"./SelectBox-Dvcn3MUx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CvFTNeBt.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CnKyDnXL.js";import"./chevron-down-B7IK1mEI.js";import"./createLucideIcon-BiWkk8e-.js";import"./useValueChanged-CeMFzami.js";import"./useRenderElement-CHujKbnS.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-DjZINGIC.js";import"./useOpenChangeComplete-B0FMkH6f.js";import"./index-DL4kUc-0.js";import"./index-CLaxZBTc.js";import"./LabelableContext-D69eP9sw.js";import"./useLabelableId-n72a-DTo.js";import"./useBaseUiId-BXbfEI12.js";import"./useId-CU7tOPqx.js";import"./useTransitionStatus-BBMPC08n.js";import"./InternalBackdrop-B-LcElR3.js";import"./inertValue-DpFjyZDY.js";import"./createBaseUIEventDetails-DPw49x1M.js";import"./index-CxYgifJc.js";import"./ToolbarRootContext-DhWuKh5p.js";import"./useButton-C91SHQpY.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    options: options
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    value: 'banana',
    options: options
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select',
    options: options,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error Select',
    options: options,
    error: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Long List',
    options: [...options, {
      value: 'fig',
      label: 'Fig'
    }, {
      value: 'grape',
      label: 'Grape'
    }, {
      value: 'honeydew',
      label: 'Honeydew'
    }]
  }
}`,...l.parameters?.docs?.source}}};const H=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,H as __namedExportsOrder,G as default};
