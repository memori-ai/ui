import{S as n}from"./SelectBox-D9wu9HfP.js";import"./iframe-cGtJURnu.js";import"./preload-helper-Ct5FWWRu.js";import"./index-yFIvOUTD.js";import"./MemoriUIProvider-m0BnJF8A.js";import"./useRenderElement-DhP6jT1L.js";import"./element-dErl7jfl.js";import"./visuallyHidden-CbwUG2x5.js";import"./chevron-down-DZD0gZFo.js";import"./createLucideIcon-CeGz0CgT.js";import"./check-40b_btPR.js";import"./resolveValueLabel-DJITUCLN.js";import"./useControlled-CqrLwQUf.js";import"./useOpenChangeComplete-B1whGy7_.js";import"./index-pVPggkGF.js";import"./index-BWzI7GQS.js";import"./useOnMount-edqM4C5m.js";import"./LabelableContext-DvKNBqY9.js";import"./useLabelableId-BtlwArNQ.js";import"./useBaseUiId-DnlnGnNg.js";import"./useId-OtW9ZJcH.js";import"./useTransitionStatus-CrbDG08E.js";import"./popupStateMapping-DyS0MkVe.js";import"./createBaseUIEventDetails-D1zxOq23.js";import"./useTimeout-DiOuuqkN.js";import"./event-CSFT6G73.js";import"./index-BbOWvSfg.js";import"./useValueChanged-BYZTOOkB.js";import"./InternalBackdrop-DELQyC6G.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-CMFlf8IZ.js";import"./floating-ui.utils-Dk0BK6OH.js";import"./useClick-DeLnLGF-.js";import"./useListNavigation-BL9EqRCS.js";import"./composite-CemP3M5z.js";import"./getPseudoElementBounds-DIcC9gdj.js";import"./useButton-GuhbyDl_.js";import"./inertValue-BpGpENtR.js";import"./ToolbarRootContext-Bqt48vJd.js";import"./composite-DwFxcZ0x.js";const R={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const U=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,a as Disabled,t as ErrorState,o as Preselected,l as WithManyOptions,U as __namedExportsOrder,R as default};
