import{S as n}from"./SelectBox-BOALd7V-.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BqNpmkKY.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Dj4mtbzf.js";import"./chevron-down-DJEWd44e.js";import"./createLucideIcon-BNW0R9Vg.js";import"./useValueChanged-BQPLStq5.js";import"./useRenderElement-D6NAjNdo.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-uRRaOK6n.js";import"./useOpenChangeComplete-Dl-6wTqE.js";import"./index-yLwj1WGv.js";import"./index-C9GbRddH.js";import"./LabelableContext-D5oNkNX4.js";import"./useLabelableId-BlUZ6qbN.js";import"./useBaseUiId-EAZq4LRz.js";import"./useId-CtDhqtc1.js";import"./useTransitionStatus-Bj313yo8.js";import"./InternalBackdrop-CBI6wpwt.js";import"./inertValue-DbMM5-uW.js";import"./createBaseUIEventDetails-DtmPi99F.js";import"./index-BAor9rNn.js";import"./ToolbarRootContext-norgAQfz.js";import"./useButton-CJQSc5KN.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
