import{S as n}from"./SelectBox-B6XeCKqd.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CC-EOf8e.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DrktbJ3p.js";import"./chevron-down--WA4noas.js";import"./createLucideIcon-BwJRafyi.js";import"./check-B81PI9uV.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-D03DcVvj.js";import"./resolveValueLabel-DMWIU2bn.js";import"./useControlled-j73fdSyh.js";import"./useOpenChangeComplete-CpdpsKIf.js";import"./index-Bw48Ob8W.js";import"./index-B534SnbS.js";import"./useOnMount-aNS7vw6n.js";import"./LabelableContext-DaJ0bkc_.js";import"./useLabelableId-BZh8I77g.js";import"./useBaseUiId-BJUK5w58.js";import"./useId-BKdEnpdl.js";import"./useTransitionStatus-B-_tgKA5.js";import"./InternalBackdrop-DO8qyNtT.js";import"./element-D1H5LOPu.js";import"./inertValue-5r7Kyfit.js";import"./createBaseUIEventDetails-CleEspmA.js";import"./index-BmDxgx1y.js";import"./useValueChanged-_FAxEOfT.js";import"./useCompositeListItem-DyLymaf5.js";import"./getPseudoElementBounds-CsRk92qY.js";import"./useButton-QwI6WhU6.js";import"./ToolbarRootContext-BKzsTeKu.js";import"./composite-DPnywRGh.js";const j={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
