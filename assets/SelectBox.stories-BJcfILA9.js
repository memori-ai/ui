import{S as n}from"./SelectBox-X4tXk8BS.js";import"./iframe-B0OM0oY6.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CkY9QmTP.js";import"./chevron-down-CHNF2mhn.js";import"./createLucideIcon-DgiQPABd.js";import"./check-DTNotrAW.js";import"./visuallyHidden-CbwUG2x5.js";import"./floating-ui.utils.dom--WESSqZL.js";import"./resolveValueLabel-YSXCc43H.js";import"./useControlled-CuPg2bK-.js";import"./useOpenChangeComplete-B_3PKTiH.js";import"./index-3Oq-mKww.js";import"./index-ClrnxdEM.js";import"./useOnMount-C2oSACa6.js";import"./useField-Chdik_Wb.js";import"./useLabelableId-BA104M6P.js";import"./useBaseUiId-D6NLNipD.js";import"./useId-Cr1QziXz.js";import"./useTransitionStatus-BiejDNbr.js";import"./InternalBackdrop-BAmkM6P4.js";import"./element-4q-OtjAF.js";import"./inertValue-BNlvIgMa.js";import"./createBaseUIEventDetails-DnoFLGxB.js";import"./index-BjoPtNiR.js";import"./useValueChanged-2AdT0efe.js";import"./getDisabledMountTransitionStyles-DyXbTvGJ.js";import"./getPseudoElementBounds-xNhRNe69.js";import"./useButton-DLFNYVzj.js";import"./ToolbarRootContext-CgrivXus.js";import"./composite-DPnywRGh.js";const T={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
