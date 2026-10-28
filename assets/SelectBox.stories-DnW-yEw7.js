import{S as n}from"./SelectBox-B73UxPAw.js";import"./iframe-DvN1O8zr.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./useTranslation-DeI4Z5iQ.js";import"./index-ainZ7i9v.js";import"./chevron-down-D59TnDSI.js";import"./createLucideIcon-spauhAJQ.js";import"./check-D_hINgSS.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-C14Ha64R.js";import"./resolveValueLabel-D96TyPW0.js";import"./useControlled-pBTNFuOb.js";import"./useStableCallback-CElKwhMG.js";import"./useValueAsRef-CQA32jHK.js";import"./LabelableContext-CfPwMPJ-.js";import"./index-Cvf4B1Iz.js";import"./index-GoqsI4IK.js";import"./useLabelableId-BURt44CT.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useBaseUiId-C6YQlm-N.js";import"./useId-CxFSyxB1.js";import"./useTransitionStatus-o5Ok2Zm5.js";import"./useOpenChangeComplete-CSERUBMO.js";import"./useOnMount-a7LL2oC2.js";import"./popupStateMapping-C8STduq9.js";import"./FocusGuard-6CwoA7aF.js";import"./element-BGnTlyAk.js";import"./useTimeout-qv1hDoHR.js";import"./event-BggRprRz.js";import"./useValueChanged-DOxMuGjQ.js";import"./InternalBackdrop-C-8ox1ql.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-1v6fVsC0.js";import"./DirectionContext-DBJJuJ3j.js";import"./useClick-C0u2b3Z-.js";import"./useListNavigation-NHXchD5H.js";import"./useCompositeListItem-AMGAnRp0.js";import"./getPseudoElementBounds-Czg74gzD.js";import"./useButton-CvJTrdXl.js";import"./inertValue-DQ3oSNZV.js";import"./ToolbarRootContext-CLiqUWz6.js";import"./composite-D3kou_rz.js";const X={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Y=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,a as Disabled,t as ErrorState,o as Preselected,l as WithManyOptions,Y as __namedExportsOrder,X as default};
