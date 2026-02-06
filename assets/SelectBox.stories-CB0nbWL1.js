import{S as n}from"./SelectBox-S1mYtAYI.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CXG_yZbi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Dxv66HwA.js";import"./chevron-down-D0fJf9Zb.js";import"./createLucideIcon-BVTuSBsF.js";import"./useValueChanged-zzaEn3x0.js";import"./useRenderElement-YGX_w70D.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-hBI5ORZ5.js";import"./useOpenChangeComplete-BShMDcIb.js";import"./index-DwlT22TA.js";import"./index-DjfJ7c71.js";import"./LabelableContext-DsdhSZqh.js";import"./useLabelableId-8sEvftAL.js";import"./useBaseUiId-CWog9uOn.js";import"./useId-DETuFqSu.js";import"./useTransitionStatus-DZfWt3wZ.js";import"./InternalBackdrop-C9boPfET.js";import"./inertValue-BN46nT2Z.js";import"./createBaseUIEventDetails-Bku4VMyz.js";import"./index-DE8VCwmv.js";import"./ToolbarRootContext-DLJ4GNLP.js";import"./useButton-aGlhcqeh.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
