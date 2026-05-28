import{S as n}from"./SelectBox-CfA_qCsU.js";import"./iframe-k7SGigxF.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DsmQYVHx.js";import"./MemoriUIProvider-CmXiALMK.js";import"./useRenderElement-DwjMhQ4v.js";import"./element-_PnpZE4H.js";import"./visuallyHidden-CbwUG2x5.js";import"./chevron-down-B2e29ikF.js";import"./createLucideIcon-zTjE7aLk.js";import"./check-Bf_rgdxm.js";import"./resolveValueLabel-D8YjhAt4.js";import"./useControlled-CxZbZMOG.js";import"./useOpenChangeComplete-oaJG7e08.js";import"./index-BMiAcgPD.js";import"./index-C9jcR3wK.js";import"./useOnMount-SFyJDhSW.js";import"./LabelableContext-BbwaLWoD.js";import"./useLabelableId-C98OxMOF.js";import"./useBaseUiId-TlITiNrH.js";import"./useId-BOEjsOHB.js";import"./useTransitionStatus-C1unQHwj.js";import"./popupStateMapping-KpQlk_aB.js";import"./createBaseUIEventDetails-C4SRS0l3.js";import"./useTimeout-CJB1BzDF.js";import"./event-D5ca7_oH.js";import"./index-gP0pmKmj.js";import"./useValueChanged-CRepLsKY.js";import"./InternalBackdrop-DwUxlv2z.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-C73Hs3TD.js";import"./floating-ui.utils-Cv-_XEYz.js";import"./useClick-CrkQeAdj.js";import"./useListNavigation-DmJNkiJA.js";import"./composite-DEDHph1x.js";import"./getPseudoElementBounds-DekjgIre.js";import"./useButton-CuW66FKX.js";import"./inertValue-zj1v3joU.js";import"./ToolbarRootContext-CBs6UbAa.js";import"./composite-B2_mOIzN.js";const R={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
