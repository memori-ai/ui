import{S as n}from"./SelectBox-Cr68GFqA.js";import"./iframe-B8-rblLz.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Cf_b6_i3.js";import"./chevron-down-VeBFnoq6.js";import"./createLucideIcon-wnTL_raX.js";import"./check-B_sw92oq.js";import"./visuallyHidden-CbwUG2x5.js";import"./floating-ui.utils.dom--RLsitNG.js";import"./resolveValueLabel-K2XHOCna.js";import"./useControlled-MyfZaxmG.js";import"./useOpenChangeComplete-BoCsHN89.js";import"./index-Dv62FLe4.js";import"./index-BMd0FooR.js";import"./useOnMount-B2tI9fY3.js";import"./useField-B-Erikjf.js";import"./useLabelableId-9olALUDp.js";import"./useBaseUiId-hEuNaOW_.js";import"./useId-BEGQEjmb.js";import"./useTransitionStatus-CX1KqFEx.js";import"./InternalBackdrop-Bs2NSQL7.js";import"./element-DX-JIHCu.js";import"./owner-CvMgaIeV.js";import"./useTimeout-C-YIRbxs.js";import"./inertValue-C8aZY4jh.js";import"./createBaseUIEventDetails-srsDSIBj.js";import"./event-B8GTwhVz.js";import"./index-CP6wEfff.js";import"./useValueChanged-CRlMIPOZ.js";import"./getDisabledMountTransitionStyles-BhDqV_31.js";import"./useCompositeListItem-B47U8f0Z.js";import"./getPseudoElementBounds-CgHX67fw.js";import"./useButton-BGmIrAqY.js";import"./ToolbarRootContext-C5CrMpVE.js";import"./composite-B2GdcNCG.js";const I={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const J=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,a as Disabled,t as ErrorState,o as Preselected,l as WithManyOptions,J as __namedExportsOrder,I as default};
