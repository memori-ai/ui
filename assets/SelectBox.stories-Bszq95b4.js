import{S as n}from"./SelectBox-DkiEOXrO.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BaakTlNx.js";import"./preload-helper-Ct5FWWRu.js";import"./index-rCZ8_iZn.js";import"./chevron-down-C5WHsqn8.js";import"./createLucideIcon-Czx23bqP.js";import"./useValueChanged-B_7rTNLZ.js";import"./useRenderElement-Db7CRokK.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-CSmU5uig.js";import"./useOpenChangeComplete-BF0NCrD8.js";import"./index-Debqv16E.js";import"./index-CjoSKsb3.js";import"./LabelableContext-0HjGeT9o.js";import"./useLabelableId-z0WWuJv8.js";import"./useBaseUiId-DbFBK-Vg.js";import"./useId-tLTPF3KC.js";import"./useTransitionStatus-BX5hqdzH.js";import"./InternalBackdrop-DAHiReEV.js";import"./inertValue-Dnugx8sj.js";import"./createBaseUIEventDetails-BYDv8OJP.js";import"./index-Buguh18M.js";import"./ToolbarRootContext-BbFj0-6n.js";import"./useButton-CixhwRpH.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
