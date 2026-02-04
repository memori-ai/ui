import{S as n}from"./SelectBox-CNMATg1B.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-wsWDW1O0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BbY4N8eN.js";import"./chevron-down-DZ8AelLm.js";import"./createLucideIcon-BiEBwf8H.js";import"./useValueChanged-9DFFoKKl.js";import"./useRenderElement--A5P0jgk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-C3Ty3Znm.js";import"./useOpenChangeComplete-BoJ2zPNb.js";import"./index-CfheY1gQ.js";import"./index-BVOdkd4u.js";import"./LabelableContext-ktDLNdZb.js";import"./useLabelableId-D-5nFcW6.js";import"./useBaseUiId-nxXa6pfL.js";import"./useId-D0cp8jRC.js";import"./useTransitionStatus-CsvIMCjV.js";import"./InternalBackdrop-MoUorTnx.js";import"./inertValue-lnjaKZUy.js";import"./createBaseUIEventDetails-Dns5EoUj.js";import"./index-BI8nlwTx.js";import"./ToolbarRootContext-BX-6DRZv.js";import"./useButton-BzNtmNNl.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
