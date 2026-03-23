import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-ByQU2BNT.js";import{c as ne}from"./index-Db0Da-SN.js";import{C as xe}from"./chevron-down-xSsxmaFF.js";import{u as Ce,A as Te,a as de,b as Ae,s as V,c as Ie,C as we,d as Se,e as Oe,f as qe,g as _e,h as Re,i as Ve,j as je,k as le,W as se,I as Me}from"./ComboboxItem-lYQLII56.js";import{u as re,a as J}from"./useRenderElement-Bm3UgFrF.js";import{u as Ne}from"./LabelableContext-BtlVCVF1.js";import{u as De}from"./useTransitionStatus-CRk8z9OI.js";import{u as Le,t as Ee}from"./useOpenChangeComplete-DG9VOwN5.js";import{p as ke,c as ie,a as ue}from"./createBaseUIEventDetails-DbQuAIGZ.js";import{u as j,t as Fe}from"./InternalBackdrop-Cy1toXRO.js";import{u as Be}from"./useButton-Be4eE8CD.js";import{s as pe}from"./resolveValueLabel-B5ydKq3e.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-DB9m5VVq.js";import"./useControlled-ieZLT0dB.js";import"./visuallyHidden-CbwUG2x5.js";import"./useLabelableId-CUELGrsQ.js";import"./useBaseUiId-Dch4vH_m.js";import"./useId-Bf8mvrXM.js";import"./useValueChanged-BkoHqiER.js";import"./useCompositeListItem-WVZilrah.js";import"./element-CfyAZhWR.js";import"./useOnMount-BKXpaVxi.js";import"./inertValue-DjbkPP0Z.js";import"./index-B2nbzJuQ.js";import"./index-DBuOMn_v.js";import"./index-BtbkyIgn.js";function ce(t){const{openOnInputClick:o=!1,value:s,defaultValue:p,onValueChange:g,mode:l="list",itemToStringValue:x,...c}=t,d=l==="inline"||l==="both",C=l==="inline"||l==="none",a=s!==void 0,[T,O]=r.useState(p??""),[A,h]=r.useState("");r.useEffect(()=>{a&&h("")},[s,a]);let m;d&&A!==""?m=A:a?m=s??"":m=T;const q=re((i,b)=>{h(""),a||O(i),g?.(i,b)}),f=Ce(),y=r.useMemo(()=>c.filter?c.filter:(i,b,I)=>f.contains(pe(i,I),b),[c,f]),w=String(a?s:T).trim(),_=r.useMemo(()=>l!=="both"?C?null:c.filter:(i,b,I)=>y(i,w,I),[y,l,c.filter,w,C]),R=re((i,b)=>{t.onItemHighlighted?.(i,b),b.reason!==ke&&(d?i==null?h(""):h(pe(i,x)):h(""))});return e.jsx(Te,{...c,itemToStringLabel:x,openOnInputClick:o,selectionMode:"none",fillInputOnItemPress:!0,filter:_,autoComplete:l,inputValue:m,defaultInputValue:p,onInputValueChange:q,onItemHighlighted:R})}const We={...Ee,...Fe},He=r.forwardRef(function(o,s){const{render:p,className:g,disabled:l=!1,nativeButton:x=!0,keepMounted:c=!1,...d}=o,{disabled:C}=Ne(),a=de(),T=j(a,V.selectionMode),O=j(a,V.disabled),A=j(a,V.readOnly),h=j(a,V.open),m=j(a,V.selectedValue),q=Ae();let f=!1;T==="none"?f=q!=="":T==="single"?f=m!=null:f=Array.isArray(m)&&m.length>0;const y=C||O||l,{buttonRef:w,getButtonProps:_}=Be({native:x,disabled:y}),{mounted:R,transitionStatus:i,setMounted:b}=De(f),I=r.useMemo(()=>({disabled:y,open:h,transitionStatus:i}),[y,h,i]);Le({open:f,ref:a.state.clearRef,onComplete(){f||b(!1)}});const U=J("button",o,{state:I,ref:[s,w,a.state.clearRef],props:[{tabIndex:-1,children:"x",disabled:y,"aria-readonly":A||void 0,onMouseDown(S){S.preventDefault()},onClick(S){if(y||A)return;const N=a.state.keyboardActiveRef;a.state.setInputValue("",ie(ue,S.nativeEvent)),T!=="none"?(a.state.setSelectedValue(Array.isArray(m)?[]:null,ie(ue,S.nativeEvent)),a.state.setIndices({activeIndex:null,selectedIndex:null,type:N.current?"keyboard":"pointer"})):a.state.setIndices({activeIndex:null,type:N.current?"keyboard":"pointer"}),a.state.inputRef.current?.focus()}},d,_],stateAttributesMapping:We});return c||R?U:null}),Pe=r.forwardRef(function(o,s){const{render:p,className:g,...l}=o;return J("div",o,{ref:s,props:[{role:"status","aria-live":"polite","aria-atomic":!0},l]})}),Ge=r.forwardRef(function(o,s){const{render:p,className:g,children:l,...x}=o,{filteredItems:c}=Ie(),d=de(),C=c.length===0?l:null;return J("div",o,{ref:[s,d.state.emptyRef],props:[{children:C,role:"status","aria-live":"polite","aria-atomic":!0},x]})});function Q(t){const o=t[0];return t.length>0&&o!=null&&"groupLabel"in o&&"options"in o}function ze(t){return Q(t)?t.map(o=>({value:o.groupLabel,items:o.options})):t}function $e(t){return typeof t.label=="string"?t.label:String(t.value)}const M=r.forwardRef(({options:t,value:o,defaultValue:s,onChange:p,placeholder:g="Type to search…",disabled:l=!1,required:x=!1,readOnly:c=!1,label:d,name:C,id:a,inputRef:T,mode:O="list",autoHighlight:A=!0,clearable:h=!1,loading:m=!1,loadingText:q="Loading…",emptyText:f="No results",open:y,defaultOpen:w,onOpenChange:_,onOpenChangeComplete:R,limit:i,modal:b,openOnInputClick:I,highlightItemOnHover:U,keepHighlight:X,submitOnItemClick:S,onItemHighlighted:N,filter:me,filteredItems:Y,className:fe,style:be,inputClassName:ge},he)=>{const Z=r.useId(),K=a??Z,ee=a!=null?`${a}-input`:`${Z}-input`,te=r.useMemo(()=>ze(t),[t]),ye=Q(t),oe={id:K,value:o,defaultValue:s,onValueChange:(n,u)=>{p?.(n,u)},mode:O,disabled:l,required:x,readOnly:c,name:C,inputRef:T,itemToStringLabel:n=>$e(n),itemToStringValue:n=>String(n.value),autoHighlight:A,open:y,defaultOpen:w,onOpenChange:_,onOpenChangeComplete:R,limit:i,modal:b,openOnInputClick:I,highlightItemOnHover:U,keepHighlight:X,submitOnItemClick:S,onItemHighlighted:N,filter:me??void 0},ae=e.jsxs(e.Fragment,{children:[d!=null&&d!==""&&e.jsx("label",{className:"memori-autocomplete__label",htmlFor:ee,id:`${K}-label`,children:d}),e.jsxs("div",{className:"memori-autocomplete__input-row",children:[e.jsx(we,{id:ee,className:ne("memori-autocomplete__input",ge),placeholder:g,"aria-labelledby":d!=null&&d!==""?`${K}-label`:void 0}),h&&e.jsx(He,{type:"button",className:"memori-autocomplete__clear","aria-label":"Clear"}),e.jsx("span",{className:"memori-autocomplete__input-chevron","aria-hidden":!0,children:e.jsx(xe,{size:16})})]}),e.jsx(Se,{className:"memori-autocomplete__portal",children:e.jsx(Oe,{className:"memori-autocomplete__positioner",sideOffset:8,side:"bottom",align:"start",children:e.jsxs(qe,{className:"memori-autocomplete__popup",children:[m&&e.jsx(Pe,{className:"memori-autocomplete__status",children:q}),e.jsx(Ge,{className:"memori-autocomplete__empty",children:f}),e.jsx(_e,{className:"memori-autocomplete__list",children:Q(t)?t.map(n=>e.jsxs(Re,{items:n.options,className:"memori-autocomplete__group",children:[e.jsx(Ve,{className:"memori-autocomplete__group-label",children:n.groupLabel}),e.jsx(je,{children:(u,ve)=>e.jsxs(le,{value:u,disabled:u.disabled,index:ve,className:"memori-autocomplete__item",children:[e.jsx("span",{className:"memori-autocomplete__item-text",children:u.label}),(u.icon!=null||u.icons!=null&&u.icons.length>0)&&e.jsxs("span",{className:"memori-autocomplete__item-icons","aria-hidden":!0,children:[u.icon,u.icons]})]},u.value)})]},n.groupLabel)):(n,u)=>e.jsxs(le,{value:n,disabled:n.disabled,index:u,className:"memori-autocomplete__item",children:[e.jsx("span",{className:"memori-autocomplete__item-text",children:n.label}),(n.icon!=null||n.icons!=null&&n.icons.length>0)&&e.jsxs("span",{className:"memori-autocomplete__item-icons","aria-hidden":!0,children:[n.icon,n.icons]})]},n.value)})]})})})]});return e.jsx("div",{ref:he,className:ne("memori-autocomplete",fe),style:be,children:ye?e.jsx(ce,{...oe,items:te,filteredItems:Y,children:ae}):e.jsx(ce,{...oe,items:te,filteredItems:Y,children:ae})})});M.displayName="Autocomplete";M.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"union",raw:"AutocompleteOption[] | AutocompleteGroupOption[]",elements:[{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},{name:"Array",elements:[{name:"AutocompleteGroupOption"}],raw:"AutocompleteGroupOption[]"}]},description:"Flat list or grouped list of options"},value:{required:!1,tsType:{name:"string"},description:"Input value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default input value (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
| readonly { value: string; items: readonly AutocompleteOption[] }[]`,elements:[{name:"unknown"},{name:"unknown"}]},description:"Controlled filtered items"},className:{required:!1,tsType:{name:"string"},description:"Root wrapper className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Root wrapper style"},inputClassName:{required:!1,tsType:{name:"string"},description:"Extra className for the text input"}}};const Ot={title:"Form/Autocomplete",component:M,tags:["autodocs"],parameters:{docs:{description:{component:"A text field with optional suggestions, built on `@base-ui/react/autocomplete`. Free-form input is supported; the list filters as you type. Keyboard navigation and ARIA follow the WAI-ARIA combobox pattern (WCAG 2.1 AA+). **When users must pick exactly one option from a fixed set** (and arbitrary text is not allowed), prefer **Combobox** instead—see Base UI guidance."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},mode:{control:"select",options:["list","both","inline","none"]}}},v=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],D={args:{label:"Favorite fruit",placeholder:"Type to search…",options:v}},L={args:{label:"Favorite fruit",placeholder:"Type to search…",defaultValue:"cherry",options:v}};function Ue(t){const[o,s]=r.useState(t.value??"");return e.jsx(M,{...t,value:o,onChange:(p,g)=>{s(p),t.onChange?.(p,g)}})}const E={render:t=>e.jsx(Ue,{...t}),args:{label:"Controlled",placeholder:"Type to search…",value:"banana",options:v}},Ke=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-nemo",label:"Mistral Nemo"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],k={args:{label:"Model",placeholder:"Search models…",options:Ke}},F={args:{label:"Async (loading state)",placeholder:"Search…",options:v,loading:!0,loadingText:"Loading suggestions…"}};function Qe(t){const[o,s]=r.useState(!0),[p,g]=r.useState([]);return r.useEffect(()=>{const l=window.setTimeout(()=>{g(v),s(!1)},1200);return()=>window.clearTimeout(l)},[]),e.jsx(M,{...t,options:p,loading:o,emptyText:o?"Loading…":"No results"})}const B={render:t=>e.jsx(Qe,{...t}),args:{label:"Async load",placeholder:"Wait for options…"}},W={args:{label:"Clearable",placeholder:"Type something…",options:v,clearable:!0,defaultValue:"Apple"}},H={args:{label:"Mode: inline",placeholder:"Arrow down to preview",options:v,mode:"inline"}},P={args:{label:"Mode: both",placeholder:"Filter + inline completion",options:v,mode:"both"}},Je=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[e.jsx(se,{size:14},"w"),e.jsx(Me,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:e.jsx(se,{size:14})}],G={args:{label:"Options with icons",placeholder:"Search…",options:Je}},z={args:{label:"Disabled",placeholder:"Cannot edit",options:v,disabled:!0,defaultValue:"Apple"}},$={args:{label:"Required field",placeholder:"Type to search…",options:v,required:!0}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    options: flatOptions
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    defaultValue: 'cherry',
    options: flatOptions
  }
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledAutocomplete {...args} />,
  args: {
    label: 'Controlled',
    placeholder: 'Type to search…',
    value: 'banana',
    options: flatOptions
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Model',
    placeholder: 'Search models…',
    options: groupedOptions
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Async (loading state)',
    placeholder: 'Search…',
    options: flatOptions,
    loading: true,
    loadingText: 'Loading suggestions…'
  }
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <LoadingAsyncStory {...args} />,
  args: {
    label: 'Async load',
    placeholder: 'Wait for options…'
  }
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clearable',
    placeholder: 'Type something…',
    options: flatOptions,
    clearable: true,
    defaultValue: 'Apple'
  }
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: inline',
    placeholder: 'Arrow down to preview',
    options: flatOptions,
    mode: 'inline'
  }
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mode: both',
    placeholder: 'Filter + inline completion',
    options: flatOptions,
    mode: 'both'
  }
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Options with icons',
    placeholder: 'Search…',
    options: optionsWithIcons
  }
}`,...G.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit',
    options: flatOptions,
    disabled: true,
    defaultValue: 'Apple'
  }
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Type to search…',
    options: flatOptions,
    required: true
  }
}`,...$.parameters?.docs?.source}}};const qt=["Default","WithDefaultValue","Controlled","Grouped","Loading","AsyncSimulated","Clearable","ModeInline","ModeBoth","WithOptionIcons","Disabled","Required"];export{B as AsyncSimulated,W as Clearable,E as Controlled,D as Default,z as Disabled,k as Grouped,F as Loading,P as ModeBoth,H as ModeInline,$ as Required,L as WithDefaultValue,G as WithOptionIcons,qt as __namedExportsOrder,Ot as default};
