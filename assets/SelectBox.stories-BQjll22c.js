import{S as p}from"./SelectBox-k6bt5ovp.js";import"./iframe-welL_Y03.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BFu-4PJz.js";import"./useTranslation-CzbaMplr.js";import"./index-D77dsTa6.js";import"./chevron-down-Cq_AWkOA.js";import"./createLucideIcon-BOPdVp22.js";import"./check-Drdp-hnt.js";import"./visuallyHidden-BI2aS7uD.js";import"./useRenderElement-BsYNz85m.js";import"./resolveValueLabel-BiyVorLU.js";import"./floating-ui.utils.dom-C95aRAwF.js";import"./useId-CoJK8Gi1.js";import"./useStableCallback-BmsFBrCP.js";import"./FloatingRootStore-CHZ76bOK.js";import"./useOpenChangeComplete-B8oq_RqC.js";import"./index-CLv6_fCs.js";import"./index-DrBWIv9O.js";import"./useOnMount-C-u17Km0.js";import"./addEventListener-C7Nm7Zds.js";import"./constants-3lpsu0Po.js";import"./index-BiXAPOqp.js";import"./shadowDom-C7-QBKxN.js";import"./constants-B1v3gF3O.js";import"./composite-9T5Ts5cl.js";import"./useBaseUiId-Bw28qrdv.js";import"./useTimeout-DlB3jOiB.js";import"./useTransitionStatus-nxPEYtLr.js";import"./serializeValue-B8e3iXO-.js";import"./isElementDisabled-CwHw_lZC.js";import"./useControlled-CrE2ZJDa.js";import"./useValueAsRef-e6pjvu4b.js";import"./useSetFieldFocused-D4iMvA2q.js";import"./useValueChanged-wmE338Q0.js";import"./useAnchoredPopupScrollLock-CEDJhmiP.js";import"./InternalBackdrop-BEB37GIB.js";import"./clamp-DyuOe9kr.js";import"./useListNavigation-CzTYGsIV.js";import"./getPseudoElementBounds-P9lJQs0O.js";import"./ItemIndicator-DJt7esVy.js";import"./useButton-DsWz-oUq.js";import"./inertValue-DC14xXHo.js";import"./useCompositeListItem-BSVTosTd.js";import"./usePositioner-Cr3lYg9a.js";import"./DirectionContext-B1YwdV18.js";import"./ToolbarRootContext-qwUl-ekE.js";import"./composite-BZTvdP9J.js";import"./CSPContext-hWn-34Ci.js";const or={title:"Form/SelectBox",component:p,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},r=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],e={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:r}},o={args:{label:"Favorite Fruit",value:"banana",options:r}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:r,disabled:!0}},t={args:{label:"Error Select",options:r,error:!0}},i={args:{label:"Long List",options:[...r,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    options: options
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ar=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{e as Default,a as Disabled,t as ErrorState,o as Preselected,i as WithManyOptions,ar as __namedExportsOrder,or as default};
