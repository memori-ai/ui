import{S as n}from"./SelectBox-D8DIAYpG.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Db7hS4Po.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CveKxVw0.js";import"./chevron-down-DVO_-5Vp.js";import"./createLucideIcon-FdlEl3g3.js";import"./useValueChanged-CGPi8k_q.js";import"./useRenderElement-DOKLlZN0.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-DQ64yPsx.js";import"./useOpenChangeComplete-B9S1zS7P.js";import"./index-ygkNnwyM.js";import"./index-CPoly3xn.js";import"./LabelableContext-DUTzt1To.js";import"./useLabelableId-GfXLhUKW.js";import"./useBaseUiId-Dmip7dCp.js";import"./useId-BOFbeaU-.js";import"./useTransitionStatus-BlciFMG-.js";import"./InternalBackdrop-Bg86_PCr.js";import"./inertValue-COaEzYlu.js";import"./createBaseUIEventDetails-D0kRpgmx.js";import"./index-CgdVEbGj.js";import"./ToolbarRootContext-Dyj72GcD.js";import"./useButton-CAbaiiD8.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
