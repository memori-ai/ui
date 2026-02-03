import{S as n}from"./SelectBox-BDr1zAJ_.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CTOMHOm0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C5x7Mp0w.js";import"./chevron-down-DEaFmW0A.js";import"./createLucideIcon-BvbFY1Jx.js";import"./useValueChanged-DOo8RX2X.js";import"./useRenderElement-Djj-ViQ7.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-Ctku7Tv-.js";import"./useOpenChangeComplete-BSd7yabq.js";import"./index-BcfCKVRE.js";import"./index-5f-lEFqM.js";import"./LabelableContext-FiZOJMTN.js";import"./useLabelableId-_aQwpQlI.js";import"./useBaseUiId-CqxkTjQt.js";import"./useId-iQsnEZFu.js";import"./useTransitionStatus-DaDuUJSA.js";import"./InternalBackdrop-BKOfAQou.js";import"./inertValue-BT35zXnm.js";import"./createBaseUIEventDetails-k7plXc4m.js";import"./index-DqdY6CgO.js";import"./ToolbarRootContext-DtJBiG6k.js";import"./useButton-BHNINC64.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
