import{S as n}from"./SelectBox-DlOtIoSY.js";import"./iframe-Bzal39wr.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DhNmoAx4.js";import"./chevron-down-6TJhS0C-.js";import"./createLucideIcon-CBFxnKgq.js";import"./check-ChHHYvMV.js";import"./visuallyHidden-CbwUG2x5.js";import"./floating-ui.utils.dom-D8hcOBmT.js";import"./resolveValueLabel-Bmo3t4xA.js";import"./useControlled-DKjDaFHR.js";import"./useOpenChangeComplete-C6xYa1GZ.js";import"./index-CYdcoCcb.js";import"./index--Pa5-pOD.js";import"./useOnMount-BA7icgTK.js";import"./useField-Cos8GeqF.js";import"./useLabelableId-DwEyNAIH.js";import"./useBaseUiId-CFUEM9N1.js";import"./useId-C-pGQFqv.js";import"./useTransitionStatus-Dj36GIJw.js";import"./InternalBackdrop-D4sNFFwJ.js";import"./element-DA2Y4hYc.js";import"./inertValue-DqsgySZi.js";import"./createBaseUIEventDetails-Ks5CDE3V.js";import"./index-7fXWLnKL.js";import"./useValueChanged-vWHkZ4uf.js";import"./getDisabledMountTransitionStyles-DVNwT8qx.js";import"./getPseudoElementBounds-B6gEmnYa.js";import"./useButton-CwKRievM.js";import"./ToolbarRootContext-DGd8Frco.js";import"./composite-DPnywRGh.js";const T={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
