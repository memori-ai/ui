import{S as n}from"./SelectBox-I_2y5GBK.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BsfEQZUO.js";import"./preload-helper-Ct5FWWRu.js";import"./index-YE87She5.js";import"./chevron-down-Dx2cnhGQ.js";import"./createLucideIcon-WSXTohSt.js";import"./check-BhlFgNyF.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-BMKNOJp3.js";import"./resolveValueLabel-CAvSd6Nw.js";import"./useControlled-CxLN9a5_.js";import"./useOpenChangeComplete-DGmjKOE-.js";import"./index-C4z8Vrai.js";import"./index-RSP2RGdd.js";import"./useOnMount-_EpbC0cI.js";import"./LabelableContext-C093U1HV.js";import"./useLabelableId-D5SI3lrK.js";import"./useBaseUiId-DW70aPwX.js";import"./useId-6CBHsoRn.js";import"./useTransitionStatus-DmkeCLXC.js";import"./InternalBackdrop-CNk5FS-_.js";import"./element-KNtVgBD-.js";import"./inertValue-B9rWk8ee.js";import"./createBaseUIEventDetails-C-M0Uih0.js";import"./index-DaTkq1CU.js";import"./useValueChanged-D-c_trcK.js";import"./getDisabledMountTransitionStyles-KyPBJVm2.js";import"./useButton-BP-ggDdF.js";import"./ToolbarRootContext-DlWlfrqY.js";import"./composite-DPnywRGh.js";const T={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
