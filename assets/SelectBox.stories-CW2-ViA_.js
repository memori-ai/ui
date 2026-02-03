import{S as n}from"./SelectBox-j-lYVJoA.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-MPf2BmTu.js";import"./preload-helper-Ct5FWWRu.js";import"./index-LVbeAjUY.js";import"./chevron-down-BejVgIx1.js";import"./createLucideIcon-CCYfyPTP.js";import"./useValueChanged-BTEerX3_.js";import"./useRenderElement-CKhIJgJr.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-C2us-cWE.js";import"./useOpenChangeComplete-CLQ4C5Yd.js";import"./index-C-SJACv0.js";import"./index-Fwl2Sfby.js";import"./LabelableContext-pNuV-rHZ.js";import"./useLabelableId-B9T0ZUav.js";import"./useBaseUiId-DA_4z8sm.js";import"./useId-5CL8Ta-k.js";import"./useTransitionStatus-BcDri2nl.js";import"./InternalBackdrop-J9V0v7Vr.js";import"./inertValue-B-axSBQ0.js";import"./createBaseUIEventDetails-B54A9B_7.js";import"./index-Er6iWqKh.js";import"./ToolbarRootContext-JEMgWweb.js";import"./useButton-CmoyBEXj.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
