import{S as n}from"./SelectBox-BmhGo-tk.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D9yWnpUp.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DjKZ1saX.js";import"./chevron-down-CCSMMNvW.js";import"./createLucideIcon-CSLCYGi4.js";import"./useValueChanged-CjGPoVZ6.js";import"./useRenderElement-Du1Cl12l.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-DkDsPwAc.js";import"./useOpenChangeComplete-CqVfQ585.js";import"./index-B94jpnMc.js";import"./index-BJZe8b7n.js";import"./LabelableContext-DpvFjPr6.js";import"./useLabelableId-CUroFhYl.js";import"./useBaseUiId-BCcVE1ZR.js";import"./useId-M2STGO8e.js";import"./useTransitionStatus-DuEI6xd3.js";import"./InternalBackdrop-D2Y508NT.js";import"./inertValue-B5K4mErK.js";import"./createBaseUIEventDetails-C5QVj11M.js";import"./index-BQJf-DHn.js";import"./ToolbarRootContext-CnpYztm9.js";import"./useButton-DWvNQyB3.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
