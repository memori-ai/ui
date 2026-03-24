import{S as n}from"./SelectBox-DxsCISk8.js";import"./iframe-BQX19wKT.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D08iSxHX.js";import"./chevron-down-cKSnNwIv.js";import"./createLucideIcon-BH633XQL.js";import"./check-Bv2ZDDBI.js";import"./visuallyHidden-CbwUG2x5.js";import"./floating-ui.utils.dom-CYw4sdgl.js";import"./resolveValueLabel-DyH-onqO.js";import"./useControlled-oefsznLa.js";import"./useOpenChangeComplete-2OnrpUIZ.js";import"./index-CPylO8iD.js";import"./index-F-Pr0gTS.js";import"./useOnMount-Cf7pIMt_.js";import"./useField-CJNvwF3L.js";import"./useLabelableId-QAiVa7Yp.js";import"./useBaseUiId-1bs64Evn.js";import"./useId-ajGyVUh6.js";import"./useTransitionStatus-3HujQbO8.js";import"./InternalBackdrop-DwwpLWUc.js";import"./element-BLX3B4st.js";import"./owner-CvMgaIeV.js";import"./useTimeout-CP2hd1gd.js";import"./inertValue-C_y64Zw8.js";import"./createBaseUIEventDetails-CaQbGL1v.js";import"./event-Dv_HaPaP.js";import"./index-bDUex28z.js";import"./useValueChanged-D85ZzJ61.js";import"./getDisabledMountTransitionStyles-BMmzsLlN.js";import"./useCompositeListItem-C7Cj2WSK.js";import"./getPseudoElementBounds-kgs23rB0.js";import"./useButton-rEuVI4Aw.js";import"./ToolbarRootContext-CvHxRTOX.js";import"./composite-DbQjD2Bb.js";const I={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
