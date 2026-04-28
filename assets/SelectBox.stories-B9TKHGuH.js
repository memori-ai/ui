import{S as n}from"./SelectBox-BrHCN_Zt.js";import"./iframe-O68z1mxK.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CSmndyWh.js";import"./chevron-down-B23Z-sKy.js";import"./createLucideIcon-BaFDcQ3o.js";import"./check-jPqk57JY.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-DRdNKtsf.js";import"./resolveValueLabel-DU2kmCBI.js";import"./useControlled-D7B32g2U.js";import"./useOpenChangeComplete-BU107cwN.js";import"./index-D_NKXEFY.js";import"./index-Dd1kHScx.js";import"./useOnMount-B8ugZxPq.js";import"./LabelableContext-gVkgral4.js";import"./useLabelableId-COM2oEcf.js";import"./useBaseUiId-a4LxWQmM.js";import"./useId-DAVUMIto.js";import"./useTransitionStatus-7TBYrvCj.js";import"./popupStateMapping-Dt9kZgH5.js";import"./FocusGuard-ChiHEIrU.js";import"./element-BGprK8IF.js";import"./createBaseUIEventDetails-ztdJLXBx.js";import"./useTimeout-La72h_gF.js";import"./event-B31ub6us.js";import"./index-BJWcKxT6.js";import"./useValueChanged-BfAJ7-xN.js";import"./InternalBackdrop-omvqOc7X.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-CSq9FLNC.js";import"./floating-ui.utils-Br6bzb5N.js";import"./useClick-DIUp58Lr.js";import"./useListNavigation-yC8eVYUg.js";import"./composite-DrqApV9c.js";import"./getPseudoElementBounds-G-iZJxWg.js";import"./useButton-CxaZp33S.js";import"./inertValue-D2n-UvZd.js";import"./ToolbarRootContext-DF0yGsY-.js";import"./composite-DuCVRxjY.js";const R={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
