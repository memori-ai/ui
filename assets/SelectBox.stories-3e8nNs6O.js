import{S as n}from"./SelectBox-B6awh6I6.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D84Y4vqx.js";import"./preload-helper-Ct5FWWRu.js";import"./index-KPDjPuE5.js";import"./chevron-down-DbprM_jO.js";import"./createLucideIcon-ChCsIH7i.js";import"./useValueChanged-DogWkZAS.js";import"./useRenderElement-B-fE6Aik.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-GCwwvnS6.js";import"./useOpenChangeComplete-PhaOJo8y.js";import"./index-DVO6GvrJ.js";import"./index-CNv2ZOiO.js";import"./LabelableContext-Dwt6TA_S.js";import"./useLabelableId-2xJb5a7T.js";import"./useBaseUiId-tU8G9Mnr.js";import"./useId-BGa0Pbcx.js";import"./useTransitionStatus-CvdKO19F.js";import"./InternalBackdrop-oaeO8_wr.js";import"./inertValue-B00IoPds.js";import"./createBaseUIEventDetails-CANsHQPX.js";import"./index-Drh1KYe1.js";import"./ToolbarRootContext-BO_VjYrO.js";import"./useButton-B0iWvfSG.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
