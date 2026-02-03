import{S as n}from"./SelectBox-B2eMQ0af.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DI0GI4kP.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ChaZM-ZB.js";import"./chevron-down-CjuPGSCM.js";import"./createLucideIcon-BFicjCNl.js";import"./useValueChanged-TeFMaMU9.js";import"./useRenderElement-CmZxDvdR.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-CaZntFgO.js";import"./useOpenChangeComplete-DEr7-Yw-.js";import"./index-C0bere59.js";import"./index-EuVP70cL.js";import"./LabelableContext-Ct3YtpMp.js";import"./useLabelableId-DvL_D60X.js";import"./useBaseUiId-CvPSqBVe.js";import"./useId-CnIZrkBI.js";import"./useTransitionStatus-CFERVb1H.js";import"./InternalBackdrop-CJhQ6ISz.js";import"./inertValue-B7pkN3oF.js";import"./createBaseUIEventDetails-Bdemprhx.js";import"./index-DxLFcgki.js";import"./ToolbarRootContext-GhaAquog.js";import"./useButton-Bn5YNTru.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
