import{j as c}from"./iframe-BwCpS2F9.js";import{C as m}from"./Combobox-_s3nzYub.js";import{W as p}from"./wrench-DvmsqcjL.js";import{I as d}from"./image-B9h0V9Sm.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DObxF8ju.js";import"./chevron-down-BqUBkZ_5.js";import"./createLucideIcon-BwN1Sv5Q.js";import"./search-CC7E7Gw1.js";import"./check-BihfKzwO.js";import"./ComboboxItem-B39bAthI.js";import"./useControlled-CPfH1C-4.js";import"./useRenderElement-C3UwhPBt.js";import"./resolveValueLabel-B9WjVzT8.js";import"./visuallyHidden-CbwUG2x5.js";import"./useOpenChangeComplete-DzqDS3Ew.js";import"./index-Bx0ABgt7.js";import"./index-CD9qwg9W.js";import"./useOnMount-CI818weQ.js";import"./createBaseUIEventDetails-DxmiVwxF.js";import"./LabelableContext-BivjBg7k.js";import"./useLabelableId-CmCcSW8I.js";import"./useBaseUiId-D9Tk0zYn.js";import"./useId-CKURL-_J.js";import"./useTransitionStatus-D-hAcpQ5.js";import"./InternalBackdrop-Bbvn8AID.js";import"./element-D8DcDpo1.js";import"./owner-CvMgaIeV.js";import"./useTimeout-B5wXoXVf.js";import"./popupStateMapping-d9utM2h4.js";import"./FocusGuard-BaUjkm0A.js";import"./event-EIz7PDkq.js";import"./index-q0QjlSF-.js";import"./useValueChanged-Dk9RBqZv.js";import"./getDisabledMountTransitionStyles-GvYHfPYG.js";import"./floating-ui.utils-DoQta1cY.js";import"./useListNavigation-BDe6gMF5.js";import"./composite-CdUZmsqz.js";import"./inertValue-C7oTUQ9v.js";import"./useButton-31x1PvqL.js";import"./getPseudoElementBounds-neD_DnLY.js";const le={title:"Form/Combobox",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],a={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:e}},o={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet"},...e]}},h=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-8x22b",label:"Mistral 8X22B"},{value:"mistral-nemo",label:"Mistral Nemo"},{value:"mistral-small",label:"Mistral Small"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],l={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:h}},u=[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"quince",label:"Quince"}],r={args:{label:"Long List",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:u}},b=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[c.jsx(p,{size:14},"w"),c.jsx(d,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:c.jsx(p,{size:14})},{value:"llama-3-70b",label:"Llama 3 70B"}],t={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:b}},s={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",triggerEndIcons:c.jsx(p,{size:16}),options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},...e]}},n={args:{label:"Disabled Combobox",placeholder:"Cannot select",searchPlaceholder:"Search…",options:e,disabled:!0}},i={args:{label:"Required field",placeholder:"Pick an option",searchPlaceholder:"Search…",options:e,required:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Combobox',
    placeholder: 'Cannot select',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Pick an option',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    required: true
  }
}`,...i.parameters?.docs?.source}}};const re=["Default","WithValue","Grouped","WithSearch","WithOptionIcons","WithTriggerIcon","Disabled","Required"];export{a as Default,n as Disabled,l as Grouped,i as Required,t as WithOptionIcons,r as WithSearch,s as WithTriggerIcon,o as WithValue,re as __namedExportsOrder,le as default};
