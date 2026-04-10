import{j as a,r as f}from"./iframe-DqGN4zcb.js";import{A as x}from"./Autocomplete-DTjl3RTq.js";import{W as S}from"./wrench-I96RJJap.js";import{I as O}from"./image-DQAWrlUW.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BHoQKl2H.js";import"./chevron-down-Bp1-3Nlb.js";import"./createLucideIcon-Dc9roOL1.js";import"./ComboboxItem-CRIvlta8.js";import"./useControlled-mZZILBl_.js";import"./useRenderElement-BFHbmR0r.js";import"./resolveValueLabel-CKiXzHte.js";import"./visuallyHidden-CbwUG2x5.js";import"./useOpenChangeComplete-DZasYhlz.js";import"./index-DEthKgW_.js";import"./index-Cb-_pKeO.js";import"./useOnMount-B2uQlNDi.js";import"./createBaseUIEventDetails-BTwloxI5.js";import"./LabelableContext-CDzC22ZE.js";import"./useLabelableId-Do7IWZVw.js";import"./useBaseUiId-GV23OO0x.js";import"./useId-Dz9n0Spo.js";import"./useTransitionStatus-C5bi69xo.js";import"./InternalBackdrop-s4T-jVVn.js";import"./element-D3xSlqUF.js";import"./owner-CvMgaIeV.js";import"./useTimeout-LsjGLBxC.js";import"./popupStateMapping-DSVw8flo.js";import"./FocusGuard-CiWuffBh.js";import"./event-FFOBfaG7.js";import"./index-Cj6qqVNK.js";import"./useValueChanged-DdlWDUPH.js";import"./getDisabledMountTransitionStyles-CCtTQAPf.js";import"./floating-ui.utils-20l7-UVG.js";import"./useListNavigation-hDL0puPw.js";import"./composite-Cj85DCyU.js";import"./inertValue-nWu4X4RY.js";import"./useButton-C-tDvCzh.js";const me={title:"Form/Autocomplete",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"A text field with optional suggestions, built on `@base-ui/react/autocomplete`. Free-form input is supported; the list filters as you type. Keyboard navigation and ARIA follow the WAI-ARIA combobox pattern (WCAG 2.1 AA+). **When users must pick exactly one option from a fixed set** (and arbitrary text is not allowed), prefer **Combobox** instead—see Base UI guidance."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},mode:{control:"select",options:["list","both","inline","none"]}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],s={args:{label:"Favorite fruit",placeholder:"Type to search…",options:e}},l={args:{label:"Favorite fruit",placeholder:"Type to search…",defaultValue:"cherry",options:e}};function C(o){const[r,y]=f.useState(o.value??"");return a.jsx(x,{...o,value:r,onChange:(t,A)=>{y(t),o.onChange?.(t,A)}})}const n={render:o=>a.jsx(C,{...o}),args:{label:"Controlled",placeholder:"Type to search…",value:"banana",options:e}},w=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-nemo",label:"Mistral Nemo"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],i={args:{label:"Model",placeholder:"Search models…",options:w}},p={args:{label:"Async (loading state)",placeholder:"Search…",options:e,loading:!0,loadingText:"Loading suggestions…"}};function T(o){const[r,y]=f.useState(!0),[t,A]=f.useState([]);return f.useEffect(()=>{const v=window.setTimeout(()=>{A(e),y(!1)},1200);return()=>window.clearTimeout(v)},[]),a.jsx(x,{...o,options:t,loading:r,emptyText:r?"Loading…":"No results"})}const c={render:o=>a.jsx(T,{...o}),args:{label:"Async load",placeholder:"Wait for options…"}},d={args:{label:"Clearable",placeholder:"Type something…",options:e,clearable:!0,defaultValue:"Apple"}},m={args:{label:"Mode: inline",placeholder:"Arrow down to preview",options:e,mode:"inline"}},u={args:{label:"Mode: both",placeholder:"Filter + inline completion",options:e,mode:"both"}},M=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[a.jsx(S,{size:14},"w"),a.jsx(O,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:a.jsx(S,{size:14})}],b={args:{label:"Options with icons",placeholder:"Search…",options:M}},g={args:{label:"Disabled",placeholder:"Cannot edit",options:e,disabled:!0,defaultValue:"Apple"}},h={args:{label:"Required field",placeholder:"Type to search…",options:e,required:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    options: flatOptions
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    defaultValue: 'cherry',
    options: flatOptions
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledAutocomplete {...args} />,
  args: {
    label: 'Controlled',
    placeholder: 'Type to search…',
    value: 'banana',
    options: flatOptions
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Model',
    placeholder: 'Search models…',
    options: groupedOptions
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Async (loading state)',
    placeholder: 'Search…',
    options: flatOptions,
    loading: true,
    loadingText: 'Loading suggestions…'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <LoadingAsyncStory {...args} />,
  args: {
    label: 'Async load',
    placeholder: 'Wait for options…'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clearable',
    placeholder: 'Type something…',
    options: flatOptions,
    clearable: true,
    defaultValue: 'Apple'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: inline',
    placeholder: 'Arrow down to preview',
    options: flatOptions,
    mode: 'inline'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: both',
    placeholder: 'Filter + inline completion',
    options: flatOptions,
    mode: 'both'
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Options with icons',
    placeholder: 'Search…',
    options: optionsWithIcons
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit',
    options: flatOptions,
    disabled: true,
    defaultValue: 'Apple'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Type to search…',
    options: flatOptions,
    required: true
  }
}`,...h.parameters?.docs?.source}}};const ue=["Default","WithDefaultValue","Controlled","Grouped","Loading","AsyncSimulated","Clearable","ModeInline","ModeBoth","WithOptionIcons","Disabled","Required"];export{c as AsyncSimulated,d as Clearable,n as Controlled,s as Default,g as Disabled,i as Grouped,p as Loading,u as ModeBoth,m as ModeInline,h as Required,l as WithDefaultValue,b as WithOptionIcons,ue as __namedExportsOrder,me as default};
