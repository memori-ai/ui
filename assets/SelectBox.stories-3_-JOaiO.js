import{S as n}from"./SelectBox-B2MyptTM.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D-zt2Vwu.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B6wI6582.js";import"./chevron-down-DJ0Y2E-B.js";import"./createLucideIcon-CEakCH6X.js";import"./useValueChanged-DqI8skhp.js";import"./useRenderElement-DFdawvTL.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-Xm9N_r2M.js";import"./useOpenChangeComplete-DjKCrmPL.js";import"./index-ocdVKqlk.js";import"./index-bgGe3x8B.js";import"./LabelableContext-CjmL1IGw.js";import"./useLabelableId-vhXpGqSF.js";import"./useBaseUiId-B5cBdiX7.js";import"./useId-CUGsVYFy.js";import"./useTransitionStatus-BYsRcINA.js";import"./InternalBackdrop-BdcStdkV.js";import"./inertValue-6LgCUvbH.js";import"./createBaseUIEventDetails-C1e53cgm.js";import"./index-ByMzGxHq.js";import"./ToolbarRootContext-Bp0RyzZ8.js";import"./useButton-DpjEt0KU.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
