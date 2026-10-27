import{j as a,r as f}from"./iframe-dIQ7bXS9.js";import{A as x}from"./Autocomplete-CcwT8blI.js";import{W as S,I as O}from"./wrench-73eYu5dn.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";import"./useStableId-B7vA0iIE.js";import"./chevron-down-DpIg6mz7.js";import"./createLucideIcon-iXCOnvW_.js";import"./ComboboxItem-CjcyAqW_.js";import"./useControlled-DbA9sIq-.js";import"./useRenderElement-BTl_khHM.js";import"./resolveValueLabel-ucDXOzvD.js";import"./useStableCallback-C6i8wFRs.js";import"./visuallyHidden-CbwUG2x5.js";import"./useValueAsRef-CEEoYs_V.js";import"./useBaseUiId-BlZ3QajR.js";import"./useId-DVSx0zRu.js";import"./useOpenChangeComplete-B8etkAr2.js";import"./index-CT9ohHEL.js";import"./index-C8WBCW8r.js";import"./useOnMount-CUD15mrL.js";import"./LabelableContext-DcQCGclD.js";import"./useLabelableId-5f3dhAU0.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useTransitionStatus-BLNyivaB.js";import"./InternalBackdrop-Di-VFUb2.js";import"./popupStateMapping-ChW93uMk.js";import"./FocusGuard-B3d9MW1C.js";import"./element-BGnTlyAk.js";import"./useTimeout-2-_v_P1r.js";import"./event-BggRprRz.js";import"./index-DDC5NtrN.js";import"./owner-CvMgaIeV.js";import"./useValueChanged-W3ZvH3GA.js";import"./getDisabledMountTransitionStyles-BClALbS_.js";import"./DirectionContext-B2EhYFsY.js";import"./useClick-C_dc2UPd.js";import"./useListNavigation-BolWyTOf.js";import"./useCompositeListItem-CwA6NjBY.js";import"./inertValue-BAtq0sSX.js";import"./useButton-D2NgSzQ3.js";const ge={title:"Form/Autocomplete",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"A text field with optional suggestions, built on `@base-ui/react/autocomplete`. Free-form input is supported; the list filters as you type. Keyboard navigation and ARIA follow the WAI-ARIA combobox pattern (WCAG 2.1 AA+). **When users must pick exactly one option from a fixed set** (and arbitrary text is not allowed), prefer **Combobox** instead—see Base UI guidance."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},mode:{control:"select",options:["list","both","inline","none"]}}},e=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],s={args:{label:"Favorite fruit",placeholder:"Type to search…",options:e}},l={args:{label:"Favorite fruit",placeholder:"Type to search…",defaultValue:"cherry",options:e}};function C(o){const[r,y]=f.useState(o.value??"");return a.jsx(x,{...o,value:r,onChange:(t,A)=>{y(t),o.onChange?.(t,A)}})}const n={render:o=>a.jsx(C,{...o}),args:{label:"Controlled",placeholder:"Type to search…",value:"banana",options:e}},w=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-nemo",label:"Mistral Nemo"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],i={args:{label:"Model",placeholder:"Search models…",options:w}},p={args:{label:"Async (loading state)",placeholder:"Search…",options:e,loading:!0,loadingText:"Loading suggestions…"}};function T(o){const[r,y]=f.useState(!0),[t,A]=f.useState([]);return f.useEffect(()=>{const v=window.setTimeout(()=>{A(e),y(!1)},1200);return()=>window.clearTimeout(v)},[]),a.jsx(x,{...o,options:t,loading:r,emptyText:r?"Loading…":"No results"})}const c={render:o=>a.jsx(T,{...o}),args:{label:"Async load",placeholder:"Wait for options…"}},d={args:{label:"Clearable",placeholder:"Type something…",options:e,clearable:!0,defaultValue:"Apple"}},m={args:{label:"Mode: inline",placeholder:"Arrow down to preview",options:e,mode:"inline"}},u={args:{label:"Mode: both",placeholder:"Filter + inline completion",options:e,mode:"both"}},M=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[a.jsx(S,{size:14},"w"),a.jsx(O,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:a.jsx(S,{size:14})}],b={args:{label:"Options with icons",placeholder:"Search…",options:M}},g={args:{label:"Disabled",placeholder:"Cannot edit",options:e,disabled:!0,defaultValue:"Apple"}},h={args:{label:"Required field",placeholder:"Type to search…",options:e,required:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const he=["Default","WithDefaultValue","Controlled","Grouped","Loading","AsyncSimulated","Clearable","ModeInline","ModeBoth","WithOptionIcons","Disabled","Required"];export{c as AsyncSimulated,d as Clearable,n as Controlled,s as Default,g as Disabled,i as Grouped,p as Loading,u as ModeBoth,m as ModeInline,h as Required,l as WithDefaultValue,b as WithOptionIcons,he as __namedExportsOrder,ge as default};
