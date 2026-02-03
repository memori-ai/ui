import{S as n}from"./SelectBox-Bq1TNtjb.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-IXhPtTxv.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BTjoDbUl.js";import"./chevron-down-TEI9bGJN.js";import"./createLucideIcon-DeGCNO4g.js";import"./useValueChanged-C1h4RjuE.js";import"./useRenderElement-BzfLhTyN.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-BcRbQtbr.js";import"./useOpenChangeComplete-DKLMV5Zr.js";import"./index-DSATKbeN.js";import"./index-mtlPMMi6.js";import"./LabelableContext-D7qBKCpG.js";import"./useLabelableId-DQkjSoKa.js";import"./useBaseUiId-BbqsQ0p8.js";import"./useId-D96Hyc-_.js";import"./useTransitionStatus-BBEnsYcu.js";import"./InternalBackdrop-DkBwNLYT.js";import"./inertValue-CMK_5UUR.js";import"./createBaseUIEventDetails-AYnXdaWq.js";import"./index-DylRA2EZ.js";import"./useButton-2bq9o1vh.js";const k={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const G=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,G as __namedExportsOrder,k as default};
