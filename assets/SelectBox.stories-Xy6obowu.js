import{S as n}from"./SelectBox-hk_DBIsl.js";import"./iframe-vVfrRlka.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BUNYpyAn.js";import"./MemoriUIProvider-D2g-WdKB.js";import"./useRenderElement-D-LMQ39S.js";import"./element-Dh58Rho_.js";import"./visuallyHidden-CbwUG2x5.js";import"./chevron-down-CMzlZD9f.js";import"./createLucideIcon-CrxtLqBa.js";import"./check-CHaxsD5q.js";import"./resolveValueLabel-RTM4tx1J.js";import"./useControlled-CYdluksL.js";import"./useOpenChangeComplete-Dr0L3SYB.js";import"./index-Cr9l5bwg.js";import"./index-B1EqKNIl.js";import"./useOnMount-CxkBe2fF.js";import"./LabelableContext-IjqIHSwB.js";import"./useLabelableId-Bq5gyCJ5.js";import"./useBaseUiId-Bitp_3F8.js";import"./useId-MSTJcCBv.js";import"./useTransitionStatus-CYXe7GDK.js";import"./popupStateMapping-DgFNo_FZ.js";import"./createBaseUIEventDetails-3bIxIfXx.js";import"./useTimeout-BXyAF-4g.js";import"./event-DhJKfg3D.js";import"./index-dc2J88cb.js";import"./useValueChanged-DmCRKzCQ.js";import"./InternalBackdrop-9Z1prJC4.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-CbVEGxmN.js";import"./floating-ui.utils-BZ3sVtB0.js";import"./useClick-gHtdJbw9.js";import"./useListNavigation-gbW4CgBy.js";import"./composite-CrKGrkzd.js";import"./getPseudoElementBounds-DK36Re75.js";import"./useButton-Bc8WTMJJ.js";import"./inertValue-9fgjLWO1.js";import"./ToolbarRootContext-9LsieRcS.js";import"./composite-HXyyDIMn.js";const R={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
