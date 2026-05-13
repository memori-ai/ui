import{S as n}from"./SelectBox-Daisw4k6.js";import"./iframe-BL5kBO2E.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CvO13Q2o.js";import"./chevron-down-CZe6_B7S.js";import"./createLucideIcon-zHLtVbSf.js";import"./check-CNO1jMDe.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-DMzPT2AM.js";import"./resolveValueLabel-BW4R_TAx.js";import"./useControlled-BU4M8y-9.js";import"./useOpenChangeComplete-NBw_u7MZ.js";import"./index-BPM8Lkk9.js";import"./index-CrVajavV.js";import"./useOnMount-B9H9welB.js";import"./LabelableContext-9WVFYZSH.js";import"./useLabelableId-BmvIwmNU.js";import"./useBaseUiId-N7Z-tFEk.js";import"./useId-6uGm9R11.js";import"./useTransitionStatus-D2bimz1A.js";import"./popupStateMapping-Bmh3L9zG.js";import"./FocusGuard-CQD2hgYk.js";import"./element-BHYbfa34.js";import"./createBaseUIEventDetails-CKau-mWD.js";import"./useTimeout-C1sSX1wB.js";import"./event-4Hs-0gts.js";import"./index-Vx7mRDqa.js";import"./useValueChanged-DlHVAkoP.js";import"./InternalBackdrop-CL8wnAg6.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-CFs5I_oA.js";import"./floating-ui.utils-BOEHVcN5.js";import"./useClick-C4ZIsaEm.js";import"./useListNavigation-DRiAadG3.js";import"./composite-B3BgQLQt.js";import"./getPseudoElementBounds-PtVkpV8f.js";import"./useButton-CoJKgu0P.js";import"./inertValue-CEFAxL04.js";import"./ToolbarRootContext-2tO99aex.js";import"./composite-CVmsIvHa.js";const R={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
