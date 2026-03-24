import{S as n}from"./SelectBox-CIjC19-s.js";import"./iframe-CiKKjRAe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DK8dLYt8.js";import"./chevron-down-BmFrE8DW.js";import"./createLucideIcon-svTLFCMu.js";import"./check-H5F8OVr6.js";import"./visuallyHidden-CbwUG2x5.js";import"./floating-ui.utils.dom-CbJPnVLw.js";import"./resolveValueLabel-6X81_NIc.js";import"./useControlled-Byjxzkiy.js";import"./useOpenChangeComplete-Dwa_CQXj.js";import"./index-D_3UqApH.js";import"./index-4RjoVWVq.js";import"./useOnMount-CdzI2A97.js";import"./useField-Dx0fWtD_.js";import"./useLabelableId-BLshErvu.js";import"./useBaseUiId-D9zj88KS.js";import"./useId-CZfkaMbZ.js";import"./useTransitionStatus-C5TmU-27.js";import"./InternalBackdrop-Capv0Mq0.js";import"./element-DhP3wEwj.js";import"./owner-CvMgaIeV.js";import"./useTimeout-m-bX0xdG.js";import"./inertValue-BvEuKEuX.js";import"./createBaseUIEventDetails-DQe_MgnJ.js";import"./event-C6tESqBV.js";import"./index-BBDmNSfz.js";import"./useValueChanged-CkUzm4dC.js";import"./getDisabledMountTransitionStyles-Ba5gCjRX.js";import"./useCompositeListItem-DXCUCG1Y.js";import"./getPseudoElementBounds-CU8bVAg7.js";import"./useButton-dUjK-BIU.js";import"./ToolbarRootContext-CuZseDRi.js";import"./composite-Dz92mzIx.js";const I={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
