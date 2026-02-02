import{S as n}from"./SelectBox-DRHQLEKP.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CtF6-BRW.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DHgBJDGw.js";import"./chevron-down-BJEhrUaG.js";import"./createLucideIcon-KhO0644x.js";import"./useValueChanged-DfjmOLf2.js";import"./useRenderElement-BbRnVlwV.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-D6PmGm-2.js";import"./useOpenChangeComplete-CG8Mclpm.js";import"./index-DQlA-RLx.js";import"./index-CaLJk9LY.js";import"./LabelableContext-DQd5gB-8.js";import"./useLabelableId-W8e9oaSl.js";import"./useBaseUiId-CikzkmzT.js";import"./useId-NdY23qgx.js";import"./useTransitionStatus-BgByPNGP.js";import"./InternalBackdrop-BEU80NIT.js";import"./inertValue-DI7LtYg9.js";import"./createBaseUIEventDetails-CLNiu8YE.js";import"./index-RA6-mGU5.js";import"./useButton-D3jFTeYv.js";const k={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const G=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,G as __namedExportsOrder,k as default};
