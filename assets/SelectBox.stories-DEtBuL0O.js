import{S as n}from"./SelectBox-Dx0h669z.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D_NeFAqD.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1bf4BWt.js";import"./chevron-down-DwaydD3H.js";import"./createLucideIcon-s-LF2Xxe.js";import"./useValueChanged-C1oA34l1.js";import"./useRenderElement-y2NZYrYT.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-5WxRBkP_.js";import"./useOpenChangeComplete-BxR9RuhB.js";import"./index-B4loDbn6.js";import"./index-ohg0VX3w.js";import"./LabelableContext-CIl3QsmZ.js";import"./useLabelableId-CccEl0A5.js";import"./useBaseUiId-DaM797vj.js";import"./useId-5md-ePaQ.js";import"./useTransitionStatus-BLhS55u5.js";import"./InternalBackdrop-B4ZLukao.js";import"./inertValue-B8Qkp6dH.js";import"./createBaseUIEventDetails-CSk7iuHf.js";import"./index-DSSecd2u.js";import"./ToolbarRootContext-W3MCn1K2.js";import"./useButton-BdZLTf6b.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
