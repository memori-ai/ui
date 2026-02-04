import{S as n}from"./SelectBox-DX0cn70r.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-B9uOJsSL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-dXCIleMP.js";import"./chevron-down-CaJWD5Ik.js";import"./createLucideIcon-VaSbAUOD.js";import"./useValueChanged-BbbRmtHt.js";import"./useRenderElement-DmmzgYVq.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-_oS37XeA.js";import"./useOpenChangeComplete-CsetHOUX.js";import"./index-t9fGC64O.js";import"./index-C29no7ld.js";import"./LabelableContext-Bw1tTldp.js";import"./useLabelableId-CQWx88hA.js";import"./useBaseUiId-B_mqZa20.js";import"./useId-DebusY3o.js";import"./useTransitionStatus-DdKVSL9F.js";import"./InternalBackdrop-BcNtC5Vr.js";import"./inertValue-GpYZgtTh.js";import"./createBaseUIEventDetails-B2md9Uml.js";import"./index-DWYFr4oQ.js";import"./ToolbarRootContext-jXJvS7uI.js";import"./useButton-Cfqxct3j.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
