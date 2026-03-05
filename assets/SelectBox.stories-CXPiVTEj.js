import{S as n}from"./SelectBox-DznFFNzd.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-CL3h2agR.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CVEenwfq.js";import"./chevron-down-D5AVO16K.js";import"./createLucideIcon-FGqF3I5h.js";import"./useValueChanged-DBxZpssU.js";import"./useRenderElement-wdOWGKxP.js";import"./visuallyHidden-CbwUG2x5.js";import"./useControlled-SZRCRM15.js";import"./useOpenChangeComplete-Dl2-LycN.js";import"./index-CSHy7B0p.js";import"./index-Bp2Z_IhA.js";import"./LabelableContext-C5VAGL3D.js";import"./useLabelableId-BNwGgg4S.js";import"./useBaseUiId-ByH1gQpl.js";import"./useId-C1Yydu1G.js";import"./useTransitionStatus-CdKYX01V.js";import"./InternalBackdrop-BRATYHTC.js";import"./inertValue-CRA7K0oc.js";import"./createBaseUIEventDetails-CifbpNtl.js";import"./index-CMrNxw_n.js";import"./ToolbarRootContext-BFWS2osw.js";import"./useButton-ChidId8v.js";const G={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},a={args:{label:"Favorite Fruit",value:"banana",options:e}},o={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
