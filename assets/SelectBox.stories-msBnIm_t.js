import{S as n}from"./SelectBox-COYqVs0r.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-uFAQNaKU.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BOI9WHRR.js";import"./chevron-down-OqF4H67K.js";import"./createLucideIcon-i_t6GcoG.js";import"./useValueChanged-AlJYyNCb.js";import"./useRenderElement-X2j9fBHf.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-BB67YIy_.js";import"./useOpenChangeComplete-BoR3aiV_.js";import"./index-Zu4kpGmk.js";import"./index-Yd_vZcQE.js";import"./LabelableContext-1f-xgr84.js";import"./useLabelableId-DDz8Z8zX.js";import"./useBaseUiId-ODPNdTf5.js";import"./useId-TZycg8h4.js";import"./useTransitionStatus-oBhab4dG.js";import"./InternalBackdrop-BN81lfpc.js";import"./inertValue-BjipwndK.js";import"./createBaseUIEventDetails-Cz59SBu5.js";import"./index-CUkq3xoa.js";import"./ToolbarRootContext-C56MlMun.js";import"./useButton-CqS4aFeb.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const H=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,o as Disabled,t as ErrorState,a as Preselected,l as WithManyOptions,H as __namedExportsOrder,G as default};
