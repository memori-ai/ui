import{S as n}from"./SelectBox-DsNIVQ5U.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D-U7IczE.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DQbU3_qp.js";import"./chevron-down-JsICpmCs.js";import"./createLucideIcon-CFSO2DeJ.js";import"./useValueChanged-BYljOVra.js";import"./useRenderElement-DuLFbtds.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-CDGxHO7g.js";import"./useOpenChangeComplete-GHcSHiSz.js";import"./index-xhtJoVdg.js";import"./index-ygACuTZi.js";import"./LabelableContext-DBKQkHyc.js";import"./useLabelableId-CrLlx27A.js";import"./useBaseUiId-6ZzCw9VC.js";import"./useId-DU26bEhB.js";import"./useTransitionStatus-BhQniD98.js";import"./InternalBackdrop-D3istYCs.js";import"./inertValue-CgNGGci2.js";import"./createBaseUIEventDetails-BSM6SfuC.js";import"./index-X_Hg15QX.js";import"./ToolbarRootContext-b8flQDmy.js";import"./useButton-ZKuPhQUI.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
