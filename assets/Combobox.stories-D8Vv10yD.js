import{j as c}from"./iframe-CfppFBML.js";import{C as m}from"./Combobox-Cmhuh3Bo.js";import{W as p,I as d}from"./wrench-aNA1rGs9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DqrBYd1k.js";import"./useStableId-DyElzNJG.js";import"./useTranslation-LlCKG-af.js";import"./index-CvRqaRa1.js";import"./chevron-down-Brpa3ZUz.js";import"./createLucideIcon-DljGq0Ho.js";import"./search-BPFRstz9.js";import"./check-DLo5nvHP.js";import"./ComboboxItem-IMSHYoMw.js";import"./useControlled-BSJhJNlr.js";import"./useRenderElement-CwgC88KG.js";import"./resolveValueLabel-CuT3rZVx.js";import"./useStableCallback-CS5fRckw.js";import"./visuallyHidden-CbwUG2x5.js";import"./useValueAsRef-D7_7nHQw.js";import"./useBaseUiId-CkKruMly.js";import"./useId-ZQMZ-VaW.js";import"./useOpenChangeComplete-DNEC6Tk0.js";import"./index-Cy7wA9S6.js";import"./index-Bxrnq4hh.js";import"./useOnMount-oCGj1n5G.js";import"./LabelableContext-KtTj1KM3.js";import"./useLabelableId-Ct_A4v-i.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useTransitionStatus-ptjEx5Ad.js";import"./InternalBackdrop-DLF-NBOi.js";import"./popupStateMapping-DsLP6ZG0.js";import"./FocusGuard-Bjx5rkfr.js";import"./element-BGnTlyAk.js";import"./useTimeout-B8Gm6GRf.js";import"./event-BggRprRz.js";import"./owner-CvMgaIeV.js";import"./useValueChanged-MqpKPDT0.js";import"./getDisabledMountTransitionStyles-BZBhRMIY.js";import"./DirectionContext-BsTSRZZT.js";import"./useClick-DZL_NscK.js";import"./useListNavigation-CZxh-qr7.js";import"./useCompositeListItem-Cwb6q_4f.js";import"./inertValue-DLEu4UBG.js";import"./useButton-jUNrtBih.js";import"./getPseudoElementBounds-CZXmnwwg.js";const se={title:"Form/Combobox",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],a={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:e}},o={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet"},...e]}},h=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-8x22b",label:"Mistral 8X22B"},{value:"mistral-nemo",label:"Mistral Nemo"},{value:"mistral-small",label:"Mistral Small"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],l={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:h}},u=[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"quince",label:"Quince"}],r={args:{label:"Long List",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:u}},b=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[c.jsx(p,{size:14},"w"),c.jsx(d,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:c.jsx(p,{size:14})},{value:"llama-3-70b",label:"Llama 3 70B"}],t={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:b}},i={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",triggerEndIcons:c.jsx(p,{size:16}),options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},...e]}},s={args:{label:"Disabled Combobox",placeholder:"Cannot select",searchPlaceholder:"Search…",options:e,disabled:!0}},n={args:{label:"Required field",placeholder:"Pick an option",searchPlaceholder:"Search…",options:e,required:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: flatOptions
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    value: 'chat-gpt-4o-mini',
    options: [{
      value: 'chat-gpt-4o-mini',
      label: 'Chat GPT 4o Mini'
    }, {
      value: 'chat-gpt-4o',
      label: 'Chat GPT 4o'
    }, {
      value: 'claude-3-5-sonnet',
      label: 'Claude 3.5 Sonnet'
    }, ...flatOptions]
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: groupedOptions
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Long List',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: manyOptions
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: optionsWithIcons
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    value: 'chat-gpt-4o-mini',
    triggerEndIcons: <Wrench size={16} />,
    options: [{
      value: 'chat-gpt-4o-mini',
      label: 'Chat GPT 4o Mini'
    }, {
      value: 'chat-gpt-4o',
      label: 'Chat GPT 4o'
    }, ...flatOptions]
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Combobox',
    placeholder: 'Cannot select',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Pick an option',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    required: true
  }
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithValue","Grouped","WithSearch","WithOptionIcons","WithTriggerIcon","Disabled","Required"];export{a as Default,s as Disabled,l as Grouped,n as Required,t as WithOptionIcons,r as WithSearch,i as WithTriggerIcon,o as WithValue,ne as __namedExportsOrder,se as default};
