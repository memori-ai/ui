import{S as n}from"./SelectBox-ollJB2f7.js";import"./iframe-BwstfbU_.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CHh8EnzU.js";import"./chevron-down-bqVMoOJn.js";import"./createLucideIcon-bqJrGWO7.js";import"./check-DWWfMcM-.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-DcA6ERQ4.js";import"./resolveValueLabel-DucP67aC.js";import"./useControlled-COn54uVx.js";import"./useOpenChangeComplete-CHi39809.js";import"./index-CYjwu2gQ.js";import"./index-oIKqCt5g.js";import"./useOnMount-CJ8_7ib_.js";import"./LabelableContext-ClmbY_C3.js";import"./useLabelableId-C7cxk96e.js";import"./useBaseUiId-B1BUohrF.js";import"./useId-r7T9hLUe.js";import"./useTransitionStatus-JDupYW0F.js";import"./popupStateMapping-DnSUvbCZ.js";import"./FocusGuard-DBx-8b64.js";import"./element-CIC31Ruh.js";import"./useTimeout-BD1-9TAe.js";import"./event-DwOKp21H.js";import"./index-CTUcfkhN.js";import"./useValueChanged-B7SdCi3M.js";import"./InternalBackdrop-BvINn9CB.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-BFGLEDNq.js";import"./floating-ui.utils-BcePE9om.js";import"./useClick-DifsviqF.js";import"./useListNavigation-nKEo_xbJ.js";import"./composite-BF154L-e.js";import"./getPseudoElementBounds-DyeB0yot.js";import"./useButton-BUEON4ru.js";import"./inertValue-DBhwcdTM.js";import"./ToolbarRootContext-BjrnaLuY.js";import"./composite-WMCqpFgV.js";const Q={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
