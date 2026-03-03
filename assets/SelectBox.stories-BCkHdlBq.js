import{S as n}from"./SelectBox-D0qWtSfx.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bsyr4_LE.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BrGdYgR1.js";import"./chevron-down-Cfke_n6V.js";import"./createLucideIcon-BjMzpu2i.js";import"./useValueChanged-b5XxOkJX.js";import"./useRenderElement-CMayYb6P.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-CLRWeJKp.js";import"./useOpenChangeComplete-DIJ2zHtH.js";import"./index-Bo_D-tnZ.js";import"./index-CjZSkbJ8.js";import"./LabelableContext-Dp_exsOz.js";import"./useLabelableId-hQ-RQqFn.js";import"./useBaseUiId-McyQmpqf.js";import"./useId-CpAr-gcQ.js";import"./useTransitionStatus-CfpFiojm.js";import"./InternalBackdrop-DeP7tV9W.js";import"./inertValue-ClFpzPTc.js";import"./createBaseUIEventDetails-BUF15fRJ.js";import"./index-C-mmtt3N.js";import"./ToolbarRootContext-BIyKC_TL.js";import"./useButton-BKYQJXEX.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
