import{S as n}from"./SelectBox-Cz9bcKLh.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DzJZUDBE.js";import"./preload-helper-Ct5FWWRu.js";import"./index-eEt5vBUp.js";import"./chevron-down-DNJPdfNY.js";import"./createLucideIcon-D4-TB1fU.js";import"./check-WiQgJWZB.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-CeL6r5pH.js";import"./resolveValueLabel-nN8d7pRy.js";import"./useControlled-F0W8xS7l.js";import"./useOpenChangeComplete-BWwgYIlH.js";import"./index-D0I0DVsh.js";import"./index-DwfktSNd.js";import"./useOnMount-DzbJtSZc.js";import"./LabelableContext-CSTJo_Ds.js";import"./useLabelableId-Ck31tUYI.js";import"./useBaseUiId-BxB0tYVO.js";import"./useId-DrJfPNPA.js";import"./useTransitionStatus-mfTOxE1p.js";import"./InternalBackdrop-JcszXVWI.js";import"./element-10oxSewP.js";import"./inertValue-B20z19Y5.js";import"./createBaseUIEventDetails-DWGjkO6i.js";import"./index-6K0Mfr4B.js";import"./useValueChanged-_XpOAn6m.js";import"./getDisabledMountTransitionStyles-DBsP3QNp.js";import"./useButton-B-qn_7KE.js";import"./ToolbarRootContext-DEVcuOfs.js";import"./composite-DPnywRGh.js";const T={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
