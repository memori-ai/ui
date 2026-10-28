import{j as c}from"./iframe-ldhl-yys.js";import{C as m}from"./Combobox-D795ADWm.js";import{W as p,I as d}from"./wrench-CMm5UrMQ.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CMw0MgeV.js";import"./useStableId-CL97m0j7.js";import"./useTranslation-Xu6St0tX.js";import"./index-5eNX3V5E.js";import"./chevron-down-DRiNll8A.js";import"./createLucideIcon-DCH9r7pE.js";import"./search-BZ8Q3Nn_.js";import"./check-BEeDpQqY.js";import"./ComboboxItem-BayWjvFB.js";import"./useControlled-BHhy6oSo.js";import"./useRenderElement-DeH3yDN1.js";import"./resolveValueLabel-C8jo2Ahx.js";import"./useStableCallback-CeZu76Yj.js";import"./visuallyHidden-CbwUG2x5.js";import"./useValueAsRef-BYwa147I.js";import"./useBaseUiId-C1idvx-D.js";import"./useId-B-CVskLf.js";import"./useOpenChangeComplete-BryifO-P.js";import"./index-CmQ0_eun.js";import"./index-O2PdrO36.js";import"./useOnMount-BjwUxIUM.js";import"./LabelableContext-BClHZJDK.js";import"./useLabelableId-Ut6mjXrW.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useTransitionStatus-CyJMXh_r.js";import"./InternalBackdrop-Ch-B0NE2.js";import"./popupStateMapping-DWpNPy3a.js";import"./FocusGuard-s8u5paY1.js";import"./element-BGnTlyAk.js";import"./useTimeout--bIj-BXi.js";import"./event-BggRprRz.js";import"./owner-CvMgaIeV.js";import"./useValueChanged-BJNS3xZD.js";import"./getDisabledMountTransitionStyles-H6tVDnCH.js";import"./DirectionContext-BX9K6zJ-.js";import"./useClick-ZadvQxWx.js";import"./useListNavigation-CNlR_L4q.js";import"./useCompositeListItem-OyTQ-drt.js";import"./inertValue-BJx73rTv.js";import"./useButton-BnENeNgJ.js";import"./getPseudoElementBounds-CKTTfGJZ.js";const se={title:"Form/Combobox",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],a={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:e}},o={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet"},...e]}},h=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-8x22b",label:"Mistral 8X22B"},{value:"mistral-nemo",label:"Mistral Nemo"},{value:"mistral-small",label:"Mistral Small"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],l={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:h}},u=[...e,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"quince",label:"Quince"}],r={args:{label:"Long List",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:u}},b=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[c.jsx(p,{size:14},"w"),c.jsx(d,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:c.jsx(p,{size:14})},{value:"llama-3-70b",label:"Llama 3 70B"}],t={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:b}},i={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",triggerEndIcons:c.jsx(p,{size:16}),options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},...e]}},s={args:{label:"Disabled Combobox",placeholder:"Cannot select",searchPlaceholder:"Search…",options:e,disabled:!0}},n={args:{label:"Required field",placeholder:"Pick an option",searchPlaceholder:"Search…",options:e,required:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
