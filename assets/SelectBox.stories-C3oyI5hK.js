import{S as n}from"./SelectBox-Dg7IgAcO.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CRwFCSLw.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C3TgcMZS.js";import"./chevron-down-Zn_p9X6x.js";import"./createLucideIcon-DN1MZ5_1.js";import"./useValueChanged-Byu40iA1.js";import"./useRenderElement-BaH19cm7.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-DdoIPtwJ.js";import"./useOpenChangeComplete-BGTqe6Np.js";import"./index-DjaRES9M.js";import"./index-DQApBB8Z.js";import"./LabelableContext-CciveItH.js";import"./useLabelableId-DhpmEaHY.js";import"./useBaseUiId-RW2uusrL.js";import"./useId-BfuAArhX.js";import"./useTransitionStatus-BsVNSeYZ.js";import"./InternalBackdrop-UqgNGsTu.js";import"./inertValue-Ds0PAuG6.js";import"./createBaseUIEventDetails-CXt6ibmY.js";import"./index-BN_ez-sd.js";import"./ToolbarRootContext-G7VWKetp.js";import"./useButton-Dt4mO4tN.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
