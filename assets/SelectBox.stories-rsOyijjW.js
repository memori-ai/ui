import{S as n}from"./SelectBox-hM03Xphk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BWB1Ij87.js";import"./preload-helper-Ct5FWWRu.js";import"./index-d-JtRtMp.js";import"./chevron-down-BaRcMqtd.js";import"./createLucideIcon-CRCyqzoL.js";import"./check-CVmGCSmI.js";import"./visuallyHidden-CbwUG2x5.js";import"./floating-ui.utils.dom-V6aZq_O3.js";import"./resolveValueLabel-giIQ2yuA.js";import"./useControlled-BhuF0FRY.js";import"./useOpenChangeComplete-uDWvsJaa.js";import"./index-CuEG0We4.js";import"./index-DTzRkhq3.js";import"./useOnMount-BwqLUKSk.js";import"./useField-Ccg0TdPM.js";import"./useLabelableId-BNBM8eTn.js";import"./useBaseUiId-qvqj2ThF.js";import"./useId-gw_n1_Fy.js";import"./useTransitionStatus-B2pmr6Qt.js";import"./InternalBackdrop-TPt2yMFV.js";import"./element-CXY8pS-z.js";import"./inertValue-BMOeBm4b.js";import"./createBaseUIEventDetails-CChy5WaT.js";import"./index-DGl9aoh8.js";import"./useValueChanged-Dj_FTcBN.js";import"./getDisabledMountTransitionStyles-BB1xaW-f.js";import"./getPseudoElementBounds-8nwbNK0s.js";import"./useButton-DqYQ8Hy3.js";import"./ToolbarRootContext-DNPJIwUP.js";import"./composite-DPnywRGh.js";const j={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const q=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,q as __namedExportsOrder,j as default};
