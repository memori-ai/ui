import{S as n}from"./SelectBox-BtNCcK7G.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BIxNv6Ij.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C_Wr9c_C.js";import"./chevron-down-BE-F0ald.js";import"./createLucideIcon-kWaI82Qt.js";import"./useValueChanged-DQIvtGrP.js";import"./useRenderElement-CDm1SxJF.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-OleI5eBP.js";import"./useOpenChangeComplete-QGjOlSh8.js";import"./index-DgQOuNdV.js";import"./index-D8cz-bcR.js";import"./LabelableContext-CPHmgyye.js";import"./useLabelableId-sjwa_jCb.js";import"./useBaseUiId-BVwYbwZ3.js";import"./useId-CVMLpEvr.js";import"./useTransitionStatus-C-puF4U9.js";import"./InternalBackdrop-caEGZEH1.js";import"./inertValue-PzFyMuR_.js";import"./createBaseUIEventDetails-tn7-8NUW.js";import"./index-CulFE8Zv.js";import"./ToolbarRootContext--a6HgDUk.js";import"./useButton-zkZniz44.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
