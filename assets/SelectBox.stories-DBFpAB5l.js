import{S as n}from"./SelectBox-CmnCWVGB.js";import"./iframe-Ci_ZrkHm.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYxeM9Ge.js";import"./chevron-down-CRNSR5XS.js";import"./createLucideIcon-CqLrMdl-.js";import"./check-UkqBkojV.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-Bee0-OFi.js";import"./resolveValueLabel-BagImz-r.js";import"./useControlled-B2siLxo_.js";import"./useOpenChangeComplete-zV7bFpD2.js";import"./index-Dsj0DM1F.js";import"./index-CXpMfGQp.js";import"./useOnMount-CczKdE0M.js";import"./LabelableContext-BuY9h51S.js";import"./useLabelableId-B-3vBu8u.js";import"./useBaseUiId-CAb6mNwx.js";import"./useId-CJMVA-tA.js";import"./useTransitionStatus-Dx0HrvJV.js";import"./popupStateMapping-8V1If8eo.js";import"./FocusGuard-BgUHkoXW.js";import"./element-ijlxSx6-.js";import"./useTimeout-BII1fCsQ.js";import"./event-C2DITEeS.js";import"./index-Ej_2y8o4.js";import"./useValueChanged-BiKftmDT.js";import"./InternalBackdrop-DN4iEoR0.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-BycaIMIJ.js";import"./floating-ui.utils-CXOfbn6-.js";import"./useClick-Bv2ccznM.js";import"./useListNavigation-DAAiGw-y.js";import"./composite-D91NKYnL.js";import"./getPseudoElementBounds-BhJX1VjE.js";import"./useButton-h4OGIE4V.js";import"./inertValue-CkvZvodV.js";import"./ToolbarRootContext-BE1PxIqz.js";import"./composite-CTwQ1aiC.js";const Q={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
