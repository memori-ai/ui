import{S as n}from"./SelectBox-D15-d4eF.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-TF17xonV.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ylUPx7jS.js";import"./chevron-down-B7diVqG6.js";import"./createLucideIcon-CmAYKov3.js";import"./check-1KGiQN6L.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-UBZUFsgd.js";import"./resolveValueLabel-SxERbgdG.js";import"./useControlled-Bs-MLDMT.js";import"./useOpenChangeComplete-C0p1Sz0_.js";import"./index-zWZ6G3Em.js";import"./index-B4m9fM0D.js";import"./useOnMount-BOns0eOp.js";import"./LabelableContext-CJmqcQ7U.js";import"./useLabelableId-uq6CU7QN.js";import"./useBaseUiId-tcKqUCmS.js";import"./useId-GGwe1k0v.js";import"./useTransitionStatus-BwfLdC3n.js";import"./InternalBackdrop-QAQ_WFUO.js";import"./element-BCjgJTTv.js";import"./inertValue-ChDB2eVS.js";import"./createBaseUIEventDetails-BrjOEfSO.js";import"./index-yLVaaY7-.js";import"./useValueChanged-Bf_BIMoi.js";import"./getDisabledMountTransitionStyles-BN3kATvq.js";import"./useButton-NA_r8zxc.js";import"./ToolbarRootContext-DYEXzpWf.js";import"./composite-DPnywRGh.js";const T={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const j=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,j as __namedExportsOrder,T as default};
