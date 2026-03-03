import{S as n}from"./SelectBox-CSAlIl5f.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D5yxewrq.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DQzFdsyo.js";import"./chevron-down-DYyzWPvn.js";import"./createLucideIcon-DOF08Mk7.js";import"./useValueChanged-DHnJICX0.js";import"./useRenderElement-D6sDHrQp.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-Be6k71_q.js";import"./useOpenChangeComplete-CMbzMpKQ.js";import"./index-te92Yn59.js";import"./index-CW9ujn6S.js";import"./LabelableContext-TXvfIeUJ.js";import"./useLabelableId-CbVst15h.js";import"./useBaseUiId-DAx6pYLI.js";import"./useId-uEe0_HmB.js";import"./useTransitionStatus-Cqt7UmLE.js";import"./InternalBackdrop-2qKu14jO.js";import"./inertValue-DIueBHcm.js";import"./createBaseUIEventDetails-S-xoRQh1.js";import"./index-BI8Cqf38.js";import"./ToolbarRootContext-ihqBpy07.js";import"./useButton-CmKVEyg3.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
