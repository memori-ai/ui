import{j as a,r as f}from"./iframe-Bzal39wr.js";import{A as x}from"./Autocomplete-Chi03ft9.js";import{W as S,I as O}from"./wrench-0LvsPOkx.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DhNmoAx4.js";import"./chevron-down-6TJhS0C-.js";import"./createLucideIcon-CBFxnKgq.js";import"./ComboboxItem-XUIqgecH.js";import"./useControlled-DKjDaFHR.js";import"./floating-ui.utils.dom-D8hcOBmT.js";import"./resolveValueLabel-Bmo3t4xA.js";import"./visuallyHidden-CbwUG2x5.js";import"./useOpenChangeComplete-C6xYa1GZ.js";import"./index-CYdcoCcb.js";import"./index--Pa5-pOD.js";import"./useOnMount-BA7icgTK.js";import"./createBaseUIEventDetails-Ks5CDE3V.js";import"./useField-Cos8GeqF.js";import"./useLabelableId-DwEyNAIH.js";import"./useBaseUiId-CFUEM9N1.js";import"./useId-C-pGQFqv.js";import"./useTransitionStatus-Dj36GIJw.js";import"./InternalBackdrop-D4sNFFwJ.js";import"./element-DA2Y4hYc.js";import"./inertValue-DqsgySZi.js";import"./index-7fXWLnKL.js";import"./useValueChanged-vWHkZ4uf.js";import"./getDisabledMountTransitionStyles-DVNwT8qx.js";import"./useButton-CwKRievM.js";const re={title:"Form/Autocomplete",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"A text field with optional suggestions, built on `@base-ui/react/autocomplete`. Free-form input is supported; the list filters as you type. Keyboard navigation and ARIA follow the WAI-ARIA combobox pattern (WCAG 2.1 AA+). **When users must pick exactly one option from a fixed set** (and arbitrary text is not allowed), prefer **Combobox** instead—see Base UI guidance."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},mode:{control:"select",options:["list","both","inline","none"]}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],s={args:{label:"Favorite fruit",placeholder:"Type to search…",options:e}},l={args:{label:"Favorite fruit",placeholder:"Type to search…",defaultValue:"cherry",options:e}};function C(o){const[r,y]=f.useState(o.value??"");return a.jsx(x,{...o,value:r,onChange:(t,A)=>{y(t),o.onChange?.(t,A)}})}const n={render:o=>a.jsx(C,{...o}),args:{label:"Controlled",placeholder:"Type to search…",value:"banana",options:e}},w=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-nemo",label:"Mistral Nemo"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],i={args:{label:"Model",placeholder:"Search models…",options:w}},p={args:{label:"Async (loading state)",placeholder:"Search…",options:e,loading:!0,loadingText:"Loading suggestions…"}};function T(o){const[r,y]=f.useState(!0),[t,A]=f.useState([]);return f.useEffect(()=>{const v=window.setTimeout(()=>{A(e),y(!1)},1200);return()=>window.clearTimeout(v)},[]),a.jsx(x,{...o,options:t,loading:r,emptyText:r?"Loading…":"No results"})}const c={render:o=>a.jsx(T,{...o}),args:{label:"Async load",placeholder:"Wait for options…"}},d={args:{label:"Clearable",placeholder:"Type something…",options:e,clearable:!0,defaultValue:"Apple"}},u={args:{label:"Mode: inline",placeholder:"Arrow down to preview",options:e,mode:"inline"}},m={args:{label:"Mode: both",placeholder:"Filter + inline completion",options:e,mode:"both"}},M=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[a.jsx(S,{size:14},"w"),a.jsx(O,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:a.jsx(S,{size:14})}],b={args:{label:"Options with icons",placeholder:"Search…",options:M}},g={args:{label:"Disabled",placeholder:"Cannot edit",options:e,disabled:!0,defaultValue:"Apple"}},h={args:{label:"Required field",placeholder:"Type to search…",options:e,required:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: inline',
    placeholder: 'Arrow down to preview',
    options: flatOptions,
    mode: 'inline'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: both',
    placeholder: 'Filter + inline completion',
    options: flatOptions,
    mode: 'both'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const te=["Default","WithDefaultValue","Controlled","Grouped","Loading","AsyncSimulated","Clearable","ModeInline","ModeBoth","WithOptionIcons","Disabled","Required"];export{c as AsyncSimulated,d as Clearable,n as Controlled,s as Default,g as Disabled,i as Grouped,p as Loading,m as ModeBoth,u as ModeInline,h as Required,l as WithDefaultValue,b as WithOptionIcons,te as __namedExportsOrder,re as default};
