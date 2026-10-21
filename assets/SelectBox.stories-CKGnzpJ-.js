import{S as n}from"./SelectBox-pWzbUfoC.js";import"./iframe-BXoPY9wl.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CWjFjZSg.js";import"./useTranslation-BjczBpAw.js";import"./index-BlMiX275.js";import"./chevron-down-DES3vOgG.js";import"./createLucideIcon-KNAk1hxz.js";import"./check-DPvA1kSW.js";import"./visuallyHidden-CbwUG2x5.js";import"./useRenderElement-DXWaToy6.js";import"./resolveValueLabel-BNQgESEY.js";import"./useControlled-4_v4svvh.js";import"./useStableCallback-BbYRKgG5.js";import"./useValueAsRef-C2qGIdgV.js";import"./LabelableContext-DVM4QQkJ.js";import"./index-BgmNc_hI.js";import"./index-uhqEoe0I.js";import"./useLabelableId-CG2xlmsb.js";import"./floating-ui.utils.dom-B8UkErNH.js";import"./useBaseUiId-ChhW82KN.js";import"./useId-BMVthQJU.js";import"./useTransitionStatus-Cx1HwP9a.js";import"./useOpenChangeComplete-Cidceu5y.js";import"./useOnMount-CMoo4wSm.js";import"./popupStateMapping-D1Ki-Rc0.js";import"./FocusGuard-CtLGtsZh.js";import"./element-B0Wt50zv.js";import"./useTimeout-Ce8uFSXF.js";import"./event-Be6GidtD.js";import"./useValueChanged-Nx1WOo-O.js";import"./InternalBackdrop-BebDlKjo.js";import"./owner-CvMgaIeV.js";import"./getDisabledMountTransitionStyles-CE3d5ApD.js";import"./floating-ui.utils-KD-aFX0i.js";import"./useClick-DZCVZwEP.js";import"./useListNavigation-D7uw7_VJ.js";import"./composite-BI20dDJu.js";import"./getPseudoElementBounds-5IansotS.js";import"./useButton-CEgo-tWA.js";import"./inertValue-DMxAgAo1.js";import"./ToolbarRootContext-BUBLIo8f.js";import"./composite-CIqflnCd.js";const X={title:"Form/SelectBox",component:n,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},error:{control:"boolean"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],r={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",options:e}},o={args:{label:"Favorite Fruit",value:"banana",options:e}},a={args:{label:"Disabled Select",placeholder:"Cannot select",options:e,disabled:!0}},t={args:{label:"Error Select",options:e,error:!0}},l={args:{label:"Long List",options:[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
