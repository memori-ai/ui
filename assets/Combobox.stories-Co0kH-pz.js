import{j as c}from"./iframe-BMqfQgqn.js";import{C as m}from"./Combobox-CkBxoqM3.js";import{W as p}from"./wrench-DRYnIxPg.js";import{I as d}from"./image-BzKGqaOd.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DsNATcLx.js";import"./useStableId-CcpR4vFl.js";import"./MemoriUIProvider-DNkiZJyR.js";import"./useRenderElement-BfLIbjiU.js";import"./element-BuhfI0wj.js";import"./visuallyHidden-CbwUG2x5.js";import"./chevron-down-B78Miorn.js";import"./createLucideIcon-BmziOYk9.js";import"./search-Bql6lNtW.js";import"./check-BUMRJjnh.js";import"./ComboboxItem-BMno0bTV.js";import"./useControlled-BESqbipS.js";import"./resolveValueLabel-BW4xnlsj.js";import"./useOpenChangeComplete-K2daJa-U.js";import"./index-DAw-S_l1.js";import"./index-DSXKMTY1.js";import"./useOnMount--IuiD5k7.js";import"./createBaseUIEventDetails-MOQ-bLLp.js";import"./LabelableContext-Draw2Q_E.js";import"./useLabelableId-DwTkP0iX.js";import"./useBaseUiId-B0oSCpTs.js";import"./useId-wjbuEOn9.js";import"./useTransitionStatus-DuHQtbwI.js";import"./InternalBackdrop-Cmt087R_.js";import"./owner-CvMgaIeV.js";import"./useTimeout-BhtsOWeJ.js";import"./popupStateMapping-DED2VfVP.js";import"./event-Byu5us_0.js";import"./index-CXqYn8fp.js";import"./useValueChanged-C8YJvZ8w.js";import"./getDisabledMountTransitionStyles-1G6_0LW4.js";import"./floating-ui.utils-WQ052GDp.js";import"./useClick-B5idx4qN.js";import"./useListNavigation-DgG4fMT7.js";import"./composite-BPb4Gtib.js";import"./inertValue-CnKZSJUc.js";import"./useButton-DfXTSsXY.js";import"./getPseudoElementBounds-CgSUyHja.js";const te={title:"Form/Combobox",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],a={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:e}},o={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet"},...e]}},h=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-8x22b",label:"Mistral 8X22B"},{value:"mistral-nemo",label:"Mistral Nemo"},{value:"mistral-small",label:"Mistral Small"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],l={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:h}},u=[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"quince",label:"Quince"}],r={args:{label:"Long List",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:u}},b=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[c.jsx(p,{size:14},"w"),c.jsx(d,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:c.jsx(p,{size:14})},{value:"llama-3-70b",label:"Llama 3 70B"}],t={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:b}},s={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",triggerEndIcons:c.jsx(p,{size:16}),options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},...e]}},n={args:{label:"Disabled Combobox",placeholder:"Cannot select",searchPlaceholder:"Search…",options:e,disabled:!0}},i={args:{label:"Required field",placeholder:"Pick an option",searchPlaceholder:"Search…",options:e,required:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const se=["Default","WithValue","Grouped","WithSearch","WithOptionIcons","WithTriggerIcon","Disabled","Required"];export{a as Default,n as Disabled,l as Grouped,i as Required,t as WithOptionIcons,r as WithSearch,s as WithTriggerIcon,o as WithValue,se as __namedExportsOrder,te as default};
