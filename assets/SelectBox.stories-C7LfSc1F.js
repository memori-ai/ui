import{S as n}from"./SelectBox-1JN6Cnp0.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-HYX3YOun.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CCmOX4YW.js";import"./chevron-down-Dp5lWiYx.js";import"./createLucideIcon-CmQxie3v.js";import"./check-B5f2nkgC.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-gNAn4yF7.js";import"./resolveValueLabel-B_P67r7F.js";import"./useControlled-C2No5Fja.js";import"./useOpenChangeComplete-BHs6zioV.js";import"./index-BF2BB5aL.js";import"./index-D5w9Er7P.js";import"./useOnMount-ClM3LSQb.js";import"./LabelableContext-tQjwsbQf.js";import"./useLabelableId-C1sUhvGN.js";import"./useBaseUiId-B3eZtIuJ.js";import"./useId-B2r8dojJ.js";import"./useTransitionStatus-FJRzZncS.js";import"./InternalBackdrop-JmUwDc6a.js";import"./element-D5CnMJ-W.js";import"./inertValue-DuYogZGQ.js";import"./createBaseUIEventDetails-BS9CMq3M.js";import"./index-Ca-P3DwM.js";import"./useValueChanged-cOapKSQ7.js";import"./useCompositeListItem-B_0v8eoG.js";import"./getPseudoElementBounds-B7VGL03L.js";import"./useButton-C_KKF5Lm.js";import"./ToolbarRootContext-CFWcnC0I.js";import"./composite-DPnywRGh.js";const j={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const q=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,q as __namedExportsOrder,j as default};
