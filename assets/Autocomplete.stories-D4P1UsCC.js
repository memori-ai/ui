import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-CC-EOf8e.js";import{c as se}from"./index-DrktbJ3p.js";import{C as _e}from"./chevron-down--WA4noas.js";import{u as Ce,A as Te,a as me,b as Ae,s as j,c as Ie,C as we,d as Se,e as Oe,f as qe,g as Re,h as Ve,i as je,j as Me,k as le,W as re,I as Le}from"./ComboboxItem-iaqJFoUj.js";import{u as ie,a as J}from"./useRenderElement-D03DcVvj.js";import{u as Ne}from"./LabelableContext-DaJ0bkc_.js";import{u as De}from"./useTransitionStatus-B-_tgKA5.js";import{u as Ee,t as ke}from"./useOpenChangeComplete-CpdpsKIf.js";import{p as Fe,c as ue,a as pe}from"./createBaseUIEventDetails-CleEspmA.js";import{u as M,t as Be}from"./InternalBackdrop-DO8qyNtT.js";import{u as We}from"./useButton-QwI6WhU6.js";import{s as ce}from"./resolveValueLabel-DMWIU2bn.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-BwJRafyi.js";import"./useControlled-j73fdSyh.js";import"./visuallyHidden-CbwUG2x5.js";import"./useLabelableId-BZh8I77g.js";import"./useBaseUiId-BJUK5w58.js";import"./useId-BKdEnpdl.js";import"./useValueChanged-_FAxEOfT.js";import"./useCompositeListItem-DyLymaf5.js";import"./element-D1H5LOPu.js";import"./useOnMount-aNS7vw6n.js";import"./inertValue-5r7Kyfit.js";import"./index-Bw48Ob8W.js";import"./index-B534SnbS.js";import"./index-BmDxgx1y.js";function de(t){const{openOnInputClick:o=!1,value:r,defaultValue:c,onValueChange:h,mode:l="list",itemToStringValue:_,...d}=t,m=l==="inline"||l==="both",C=l==="inline"||l==="none",a=r!==void 0,[T,O]=i.useState(c??""),[A,y]=i.useState("");i.useEffect(()=>{a&&y("")},[r,a]);let f;m&&A!==""?f=A:a?f=r??"":f=T;const q=ie((u,g)=>{y(""),a||O(u),h?.(u,g)}),b=Ce(),v=i.useMemo(()=>d.filter?d.filter:(u,g,I)=>b.contains(ce(u,I),g),[d,b]),w=String(a?r:T).trim(),R=i.useMemo(()=>l!=="both"?C?null:d.filter:(u,g,I)=>v(u,w,I),[v,l,d.filter,w,C]),V=ie((u,g)=>{t.onItemHighlighted?.(u,g),g.reason!==Fe&&(m?u==null?y(""):y(ce(u,_)):y(""))});return e.jsx(Te,{...d,itemToStringLabel:_,openOnInputClick:o,selectionMode:"none",fillInputOnItemPress:!0,filter:R,autoComplete:l,inputValue:f,defaultInputValue:c,onInputValueChange:q,onItemHighlighted:V})}const Pe={...ke,...Be},He=i.forwardRef(function(o,r){const{render:c,className:h,disabled:l=!1,nativeButton:_=!0,keepMounted:d=!1,...m}=o,{disabled:C}=Ne(),a=me(),T=M(a,j.selectionMode),O=M(a,j.disabled),A=M(a,j.readOnly),y=M(a,j.open),f=M(a,j.selectedValue),q=Ae();let b=!1;T==="none"?b=q!=="":T==="single"?b=f!=null:b=Array.isArray(f)&&f.length>0;const v=C||O||l,{buttonRef:w,getButtonProps:R}=We({native:_,disabled:v}),{mounted:V,transitionStatus:u,setMounted:g}=De(b),I=i.useMemo(()=>({disabled:v,open:y,transitionStatus:u}),[v,y,u]);Ee({open:b,ref:a.state.clearRef,onComplete(){b||g(!1)}});const U=J("button",o,{state:I,ref:[r,w,a.state.clearRef],props:[{tabIndex:-1,children:"x",disabled:v,"aria-readonly":A||void 0,onMouseDown(S){S.preventDefault()},onClick(S){if(v||A)return;const N=a.state.keyboardActiveRef;a.state.setInputValue("",ue(pe,S.nativeEvent)),T!=="none"?(a.state.setSelectedValue(Array.isArray(f)?[]:null,ue(pe,S.nativeEvent)),a.state.setIndices({activeIndex:null,selectedIndex:null,type:N.current?"keyboard":"pointer"})):a.state.setIndices({activeIndex:null,type:N.current?"keyboard":"pointer"}),a.state.inputRef.current?.focus()}},m,R],stateAttributesMapping:Pe});return d||V?U:null}),Ge=i.forwardRef(function(o,r){const{render:c,className:h,...l}=o;return J("div",o,{ref:r,props:[{role:"status","aria-live":"polite","aria-atomic":!0},l]})}),ze=i.forwardRef(function(o,r){const{render:c,className:h,children:l,..._}=o,{filteredItems:d}=Ie(),m=me(),C=d.length===0?l:null;return J("div",o,{ref:[r,m.state.emptyRef],props:[{children:C,role:"status","aria-live":"polite","aria-atomic":!0},_]})}),Xe="styles-module__root___SFkgu",$e="styles-module__label___SDIv9",Ue="styles-module__inputRow___74kL2",Ke="styles-module__input___owaFj",Qe="styles-module__clear___XQKqu",Je="styles-module__inputChevron___XMspj",Ye="styles-module__portal___5foeo",Ze="styles-module__positioner___EbXrX",et="styles-module__popup___id8d4",tt="styles-module__status___8Vrdc",ot="styles-module__empty___wWz-9",at="styles-module__list___oq8oY",nt="styles-module__group___XoJPo",st="styles-module__groupLabel___d58Rj",lt="styles-module__item___MnPVl",rt="styles-module__itemText___cDaS4",it="styles-module__itemIcons___LFp-L",n={root:Xe,label:$e,inputRow:Ue,input:Ke,clear:Qe,inputChevron:Je,portal:Ye,positioner:Ze,popup:et,status:tt,empty:ot,list:at,group:nt,groupLabel:st,item:lt,itemText:rt,itemIcons:it};function Q(t){const o=t[0];return t.length>0&&o!=null&&"groupLabel"in o&&"options"in o}function ut(t){return Q(t)?t.map(o=>({value:o.groupLabel,items:o.options})):t}function pt(t){return typeof t.label=="string"?t.label:String(t.value)}const L=i.forwardRef(({options:t,value:o,defaultValue:r,onChange:c,placeholder:h="Type to search…",disabled:l=!1,required:_=!1,readOnly:d=!1,label:m,name:C,id:a,inputRef:T,mode:O="list",autoHighlight:A=!0,clearable:y=!1,loading:f=!1,loadingText:q="Loading…",emptyText:b="No results",open:v,defaultOpen:w,onOpenChange:R,onOpenChangeComplete:V,limit:u,modal:g,openOnInputClick:I,highlightItemOnHover:U,keepHighlight:Y,submitOnItemClick:S,onItemHighlighted:N,filter:fe,filteredItems:Z,className:be,style:ge,inputClassName:he},ye)=>{const ee=i.useId(),K=a??ee,te=a!=null?`${a}-input`:`${ee}-input`,oe=i.useMemo(()=>ut(t),[t]),ve=Q(t),ae={id:K,value:o,defaultValue:r,onValueChange:(s,p)=>{c?.(s,p)},mode:O,disabled:l,required:_,readOnly:d,name:C,inputRef:T,itemToStringLabel:s=>pt(s),itemToStringValue:s=>String(s.value),autoHighlight:A,open:v,defaultOpen:w,onOpenChange:R,onOpenChangeComplete:V,limit:u,modal:g,openOnInputClick:I,highlightItemOnHover:U,keepHighlight:Y,submitOnItemClick:S,onItemHighlighted:N,filter:fe??void 0},ne=e.jsxs(e.Fragment,{children:[m!=null&&m!==""&&e.jsx("label",{className:n.label,htmlFor:te,id:`${K}-label`,children:m}),e.jsxs("div",{className:n.inputRow,children:[e.jsx(we,{id:te,className:se(n.input,he),placeholder:h,"aria-labelledby":m!=null&&m!==""?`${K}-label`:void 0}),y&&e.jsx(He,{type:"button",className:n.clear,"aria-label":"Clear"}),e.jsx("span",{className:n.inputChevron,"aria-hidden":!0,children:e.jsx(_e,{size:16})})]}),e.jsx(Se,{className:n.portal,children:e.jsx(Oe,{className:n.positioner,sideOffset:8,side:"bottom",align:"start",children:e.jsxs(qe,{className:n.popup,children:[f&&e.jsx(Ge,{className:n.status,children:q}),e.jsx(ze,{className:n.empty,children:b}),e.jsx(Re,{className:n.list,children:Q(t)?t.map(s=>e.jsxs(Ve,{items:s.options,className:n.group,children:[e.jsx(je,{className:n.groupLabel,children:s.groupLabel}),e.jsx(Me,{children:(p,xe)=>e.jsxs(le,{value:p,disabled:p.disabled,index:xe,className:n.item,children:[e.jsx("span",{className:n.itemText,children:p.label}),(p.icon!=null||p.icons!=null&&p.icons.length>0)&&e.jsxs("span",{className:n.itemIcons,"aria-hidden":!0,children:[p.icon,p.icons]})]},p.value)})]},s.groupLabel)):(s,p)=>e.jsxs(le,{value:s,disabled:s.disabled,index:p,className:n.item,children:[e.jsx("span",{className:n.itemText,children:s.label}),(s.icon!=null||s.icons!=null&&s.icons.length>0)&&e.jsxs("span",{className:n.itemIcons,"aria-hidden":!0,children:[s.icon,s.icons]})]},s.value)})]})})})]});return e.jsx("div",{ref:ye,className:se(n.root,be),style:ge,children:ve?e.jsx(de,{...ae,items:oe,filteredItems:Z,children:ne}):e.jsx(de,{...ae,items:oe,filteredItems:Z,children:ne})})});L.displayName="Autocomplete";L.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"union",raw:"AutocompleteOption[] | AutocompleteGroupOption[]",elements:[{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},{name:"Array",elements:[{name:"AutocompleteGroupOption"}],raw:"AutocompleteGroupOption[]"}]},description:"Flat list or grouped list of options"},value:{required:!1,tsType:{name:"string"},description:"Input value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default input value (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: string,
  eventDetails: AutocompleteRootChangeEventDetails,
) => void`,signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"AutocompleteRootChangeEventDetails"},name:"eventDetails"}],return:{name:"void"}}},description:"Called when the input value changes"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder for the text input",defaultValue:{value:"'Type to search…'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the control",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Mark as required",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only input",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label (native label element)"},name:{required:!1,tsType:{name:"string"},description:"Form name"},id:{required:!1,tsType:{name:"string"},description:"Root id (input id defaults to this with `-input` suffix when set)"},inputRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref to the &lt;input&gt; element"},mode:{required:!1,tsType:{name:"union",raw:"'list' | 'both' | 'inline' | 'none'",elements:[{name:"literal",value:"'list'"},{name:"literal",value:"'both'"},{name:"literal",value:"'inline'"},{name:"literal",value:"'none'"}]},description:"Filtering / inline completion mode (maps to Base UI `mode`)",defaultValue:{value:"'list'",computed:!1}},autoHighlight:{required:!1,tsType:{name:"union",raw:"boolean | 'always'",elements:[{name:"boolean"},{name:"literal",value:"'always'"}]},description:"Highlight first match while typing",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Show clear button when there is text",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading status region (announced to screen readers)",defaultValue:{value:"false",computed:!1}},loadingText:{required:!1,tsType:{name:"string"},description:"Text shown in the status region while `loading`",defaultValue:{value:"'Loading…'",computed:!1}},emptyText:{required:!1,tsType:{name:"string"},description:"Message when there are no matching options",defaultValue:{value:"'No results'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled popup open state"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  open: boolean,
  eventDetails: AutocompleteRootChangeEventDetails,
) => void`,signature:{arguments:[{type:{name:"boolean"},name:"open"},{type:{name:"AutocompleteRootChangeEventDetails"},name:"eventDetails"}],return:{name:"void"}}},description:""},onOpenChangeComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},limit:{required:!1,tsType:{name:"number"},description:"Max items to show"},modal:{required:!1,tsType:{name:"boolean"},description:"Modal popup (locks scroll)"},openOnInputClick:{required:!1,tsType:{name:"boolean"},description:""},highlightItemOnHover:{required:!1,tsType:{name:"boolean"},description:""},keepHighlight:{required:!1,tsType:{name:"boolean"},description:""},submitOnItemClick:{required:!1,tsType:{name:"boolean"},description:""},onItemHighlighted:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  highlightedValue: AutocompleteOption | undefined,
  eventDetails: AutocompleteRootHighlightEventDetails,
) => void`,signature:{arguments:[{type:{name:"union",raw:"AutocompleteOption | undefined",elements:[{name:"AutocompleteOption"},{name:"undefined"}]},name:"highlightedValue"},{type:{name:"AutocompleteRootHighlightEventDetails"},name:"eventDetails"}],return:{name:"void"}}},description:""},filter:{required:!1,tsType:{name:"union",raw:`| null
| ((
    itemValue: AutocompleteOption,
    query: string,
    itemToString?: (itemValue: AutocompleteOption) => string,
  ) => boolean)`,elements:[{name:"null"},{name:"unknown"}]},description:"External filter (Base UI `filter` prop)"},filteredItems:{required:!1,tsType:{name:"union",raw:`| readonly AutocompleteOption[]
| readonly { value: string; items: readonly AutocompleteOption[] }[]`,elements:[{name:"unknown"},{name:"unknown"}]},description:"Controlled filtered items"},className:{required:!1,tsType:{name:"string"},description:"Root wrapper className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Root wrapper style"},inputClassName:{required:!1,tsType:{name:"string"},description:"Extra className for the text input"}}};const zt={title:"Form/Autocomplete",component:L,tags:["autodocs"],parameters:{docs:{description:{component:"A text field with optional suggestions, built on `@base-ui/react/autocomplete`. Free-form input is supported; the list filters as you type. Keyboard navigation and ARIA follow the WAI-ARIA combobox pattern (WCAG 2.1 AA+). **When users must pick exactly one option from a fixed set** (and arbitrary text is not allowed), prefer **Combobox** instead—see Base UI guidance."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},mode:{control:"select",options:["list","both","inline","none"]}}},x=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],D={args:{label:"Favorite fruit",placeholder:"Type to search…",options:x}},E={args:{label:"Favorite fruit",placeholder:"Type to search…",defaultValue:"cherry",options:x}};function ct(t){const[o,r]=i.useState(t.value??"");return e.jsx(L,{...t,value:o,onChange:(c,h)=>{r(c),t.onChange?.(c,h)}})}const k={render:t=>e.jsx(ct,{...t}),args:{label:"Controlled",placeholder:"Type to search…",value:"banana",options:x}},dt=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-nemo",label:"Mistral Nemo"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],F={args:{label:"Model",placeholder:"Search models…",options:dt}},B={args:{label:"Async (loading state)",placeholder:"Search…",options:x,loading:!0,loadingText:"Loading suggestions…"}};function mt(t){const[o,r]=i.useState(!0),[c,h]=i.useState([]);return i.useEffect(()=>{const l=window.setTimeout(()=>{h(x),r(!1)},1200);return()=>window.clearTimeout(l)},[]),e.jsx(L,{...t,options:c,loading:o,emptyText:o?"Loading…":"No results"})}const W={render:t=>e.jsx(mt,{...t}),args:{label:"Async load",placeholder:"Wait for options…"}},P={args:{label:"Clearable",placeholder:"Type something…",options:x,clearable:!0,defaultValue:"Apple"}},H={args:{label:"Mode: inline",placeholder:"Arrow down to preview",options:x,mode:"inline"}},G={args:{label:"Mode: both",placeholder:"Filter + inline completion",options:x,mode:"both"}},ft=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[e.jsx(re,{size:14},"w"),e.jsx(Le,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:e.jsx(re,{size:14})}],z={args:{label:"Options with icons",placeholder:"Search…",options:ft}},X={args:{label:"Disabled",placeholder:"Cannot edit",options:x,disabled:!0,defaultValue:"Apple"}},$={args:{label:"Required field",placeholder:"Type to search…",options:x,required:!0}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    options: flatOptions
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    defaultValue: 'cherry',
    options: flatOptions
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledAutocomplete {...args} />,
  args: {
    label: 'Controlled',
    placeholder: 'Type to search…',
    value: 'banana',
    options: flatOptions
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Model',
    placeholder: 'Search models…',
    options: groupedOptions
  }
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Async (loading state)',
    placeholder: 'Search…',
    options: flatOptions,
    loading: true,
    loadingText: 'Loading suggestions…'
  }
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <LoadingAsyncStory {...args} />,
  args: {
    label: 'Async load',
    placeholder: 'Wait for options…'
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clearable',
    placeholder: 'Type something…',
    options: flatOptions,
    clearable: true,
    defaultValue: 'Apple'
  }
}`,...P.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: inline',
    placeholder: 'Arrow down to preview',
    options: flatOptions,
    mode: 'inline'
  }
}`,...H.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: both',
    placeholder: 'Filter + inline completion',
    options: flatOptions,
    mode: 'both'
  }
}`,...G.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Options with icons',
    placeholder: 'Search…',
    options: optionsWithIcons
  }
}`,...z.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit',
    options: flatOptions,
    disabled: true,
    defaultValue: 'Apple'
  }
}`,...X.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Type to search…',
    options: flatOptions,
    required: true
  }
}`,...$.parameters?.docs?.source}}};const Xt=["Default","WithDefaultValue","Controlled","Grouped","Loading","AsyncSimulated","Clearable","ModeInline","ModeBoth","WithOptionIcons","Disabled","Required"];export{W as AsyncSimulated,P as Clearable,k as Controlled,D as Default,X as Disabled,F as Grouped,B as Loading,G as ModeBoth,H as ModeInline,$ as Required,E as WithDefaultValue,z as WithOptionIcons,Xt as __namedExportsOrder,zt as default};
