import{S as n}from"./SelectBox-C79iptOe.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Df99ttWU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BBImuRfr.js";import"./chevron-down-FqD5KN3u.js";import"./createLucideIcon-BTE_w9xk.js";import"./check-DUAqCZok.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-XDx0KrF7.js";import"./resolveValueLabel-BJSRQEZd.js";import"./useControlled-D_3EGPRK.js";import"./useOpenChangeComplete-DJrZLzhy.js";import"./index-B4ESgH_n.js";import"./index-BObdHSWk.js";import"./useOnMount-BeA-lunk.js";import"./LabelableContext-MlMBRAR8.js";import"./useLabelableId-DmFP8_nc.js";import"./useBaseUiId-DWijKGyL.js";import"./useId-DGGw2Ud4.js";import"./useTransitionStatus-kSTb_nD6.js";import"./InternalBackdrop-cWFfNAMa.js";import"./element-BuIIM3as.js";import"./inertValue-C_I7Ij0x.js";import"./createBaseUIEventDetails-D8FG30S9.js";import"./index-HeIYcObH.js";import"./useValueChanged-_fXz88Tj.js";import"./getDisabledMountTransitionStyles-DmUl4UL7.js";import"./useButton-8lghnPJ-.js";import"./ToolbarRootContext-syHiHCv3.js";import"./composite-DPnywRGh.js";const T={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const j=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,j as __namedExportsOrder,T as default};
