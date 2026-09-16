import{S as n}from"./SelectBox-xKbiI-xO.js";import"./iframe-Bo1cJqrf.js";import"./preload-helper-Ct5FWWRu.js";import"./index-5vbeg16v.js";import"./chevron-down-BUS485MC.js";import"./createLucideIcon-DzkbYN6-.js";import"./check-DffFp84F.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-1BfdClFz.js";import"./resolveValueLabel-DIuA0ReD.js";import"./useControlled-DoAlAGCi.js";import"./useOpenChangeComplete-BYSY6RDZ.js";import"./index-DiLLKfnI.js";import"./index-C92CPJk0.js";import"./useOnMount-CcWZyARC.js";import"./LabelableContext-D6pQBUP1.js";import"./useLabelableId-CiPRrSog.js";import"./useBaseUiId-DD4jNb1f.js";import"./useId-DgqPHbMz.js";import"./useTransitionStatus-Drl7ktYQ.js";import"./popupStateMapping-fS71hRNN.js";import"./FocusGuard-Q4kS6LvG.js";import"./element-Dw99vYDi.js";import"./useTimeout-BUHPYqJv.js";import"./event-DfvuULh7.js";import"./index-D8aNPbY-.js";import"./useValueChanged-UKuYRGcE.js";import"./InternalBackdrop-GpefzQna.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-jc8FoTWN.js";import"./floating-ui.utils-BjS1pbwQ.js";import"./useClick-D2oFVwlS.js";import"./useListNavigation-Ba4lvLLd.js";import"./composite-CpGUe9QI.js";import"./getPseudoElementBounds-U9dlybH-.js";import"./useButton-BTVAYUdC.js";import"./inertValue-Bheb5XBX.js";import"./ToolbarRootContext-Mg7JlNfB.js";import"./composite-CKQRbeis.js";const Q={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    options: options
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    value: 'banana',
    options: options
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select',
    options: options,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const R=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,a as Disabled,t as ErrorState,o as Preselected,l as WithManyOptions,R as __namedExportsOrder,Q as default};
