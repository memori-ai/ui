import{S as n}from"./SelectBox-D6YzLw2t.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-kzfK_FTO.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C70KY_Jq.js";import"./chevron-down-Du1aBd8B.js";import"./createLucideIcon-B4206NuS.js";import"./useValueChanged-BYCo75qt.js";import"./useRenderElement-BnXSDomb.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-OdIqUL4-.js";import"./useOpenChangeComplete-CG1VwVam.js";import"./index-CvMNudcH.js";import"./index-CNJRaT6p.js";import"./LabelableContext-BkuRSplA.js";import"./useLabelableId-BZuhO7S2.js";import"./useBaseUiId-C8NeOaDq.js";import"./useId-B1b2CkJv.js";import"./useTransitionStatus-DTsx7gj8.js";import"./InternalBackdrop-PRYzTzKL.js";import"./inertValue-CEl4D1wZ.js";import"./createBaseUIEventDetails-Dvll5yum.js";import"./index-B-8ROXJd.js";import"./useButton-Ds0fd3Bv.js";const k={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
