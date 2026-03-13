import{S as n}from"./SelectBox-CiAacI-h.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Da2YPWL1.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C1quyIeQ.js";import"./chevron-down-ByPAsnNy.js";import"./createLucideIcon-CWzpwJR2.js";import"./useValueChanged-CSQu47fQ.js";import"./useRenderElement-iIXuqUs6.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-BqmCUJNV.js";import"./useOpenChangeComplete-B8lCm8j0.js";import"./index-BxRARYON.js";import"./index-_qJ-_ijI.js";import"./LabelableContext-CT5S50JL.js";import"./useLabelableId-BY8PmX60.js";import"./useBaseUiId-MQ3sd41J.js";import"./useId-CRV6shn5.js";import"./useTransitionStatus-DNHvzNCX.js";import"./InternalBackdrop-Rzcm5TJ5.js";import"./inertValue-DzgI2U5c.js";import"./createBaseUIEventDetails-CtaKihV1.js";import"./index-g5PrAsow.js";import"./ToolbarRootContext-Bq_MNQ1m.js";import"./useButton-DA4_hMsw.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
