import{S as n}from"./SelectBox-krI3baot.js";import"./iframe-BwIdVvwp.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CX-tc6YD.js";import"./chevron-down-D4RVXqNs.js";import"./createLucideIcon-D3CX2Ubn.js";import"./check-CfMiF3Sy.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-DN0kusQj.js";import"./resolveValueLabel-DAqH-tOG.js";import"./useControlled-DI5CS7C2.js";import"./useOpenChangeComplete-DziRZd1Q.js";import"./index-DaGwvplM.js";import"./index-B1n0XUvM.js";import"./useOnMount-CQQzYocw.js";import"./LabelableContext-C9k6ZrOz.js";import"./useLabelableId-CWs372Il.js";import"./useBaseUiId-CO8VfC06.js";import"./useId-CDx9Mt0u.js";import"./useTransitionStatus-WcuiytXs.js";import"./popupStateMapping-Bpvnm31O.js";import"./FocusGuard-HFFUTxQ5.js";import"./element-dQJJoTTz.js";import"./createBaseUIEventDetails-BAxFoY0S.js";import"./useTimeout-2rHrogx9.js";import"./event-DxijsKHt.js";import"./index-CGoCDIZ5.js";import"./useValueChanged-CaWEGYQQ.js";import"./InternalBackdrop-B2HLTdVS.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-BKX_tcOE.js";import"./floating-ui.utils-RzLQ9Dqx.js";import"./useListNavigation-CD0iXLug.js";import"./composite-NctPkxYX.js";import"./getPseudoElementBounds-BA4Uqr7I.js";import"./useButton-B2nH_T8b.js";import"./inertValue-DWXTeb3H.js";import"./ToolbarRootContext-aCpi_qve.js";import"./composite-D-wkdU_g.js";const Q={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const R=["Default","Preselected","Disabled","ErrorState","WithManyOptions"];export{r as Default,a as Disabled,t as ErrorState,o as Preselected,l as WithManyOptions,R as __namedExportsOrder,Q as default};
