import{S as n}from"./SelectBox-BaRnMaBY.js";import"./iframe-CbkzK_Ne.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DS7HLWym.js";import"./chevron-down-Ccu9cO0E.js";import"./createLucideIcon-DMqLCRsw.js";import"./check-ts49Q5-r.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-D7O_O9fD.js";import"./resolveValueLabel-Cpp3cgGA.js";import"./useControlled-B8GzABoU.js";import"./useOpenChangeComplete-sJ0Hs9DL.js";import"./index-CeDvvr81.js";import"./index-CUck_JVj.js";import"./useOnMount-BshAaH-I.js";import"./LabelableContext-B3BKzV7H.js";import"./useLabelableId-B5JtjM4b.js";import"./useBaseUiId-DvS8LH9Q.js";import"./useId-CLSo67vu.js";import"./useTransitionStatus-DPO_S3aL.js";import"./popupStateMapping-Tt05INlk.js";import"./FocusGuard-C6Fcq2S2.js";import"./element-DB4TQX-y.js";import"./createBaseUIEventDetails-BzDikJ6g.js";import"./useTimeout-eLRjYdCg.js";import"./event-DndnpbDb.js";import"./index-BWL2k1f-.js";import"./useValueChanged-B8k4E7r-.js";import"./InternalBackdrop-VSwHXvCm.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-DaqBWxZu.js";import"./floating-ui.utils-BKXbaBvz.js";import"./useClick-CqhPpjxB.js";import"./useListNavigation-CavvilF5.js";import"./composite-CrJCYmmL.js";import"./getPseudoElementBounds-D2Ns9OB-.js";import"./useButton-Dj-E1taN.js";import"./inertValue-DcJu5k_w.js";import"./ToolbarRootContext-COY0oFdB.js";import"./composite-D4EIbuJx.js";const R={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
