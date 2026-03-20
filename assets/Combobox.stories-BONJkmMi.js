import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Bn9CEIwO.js";import{c as fe}from"./index-BYCd1y5x.js";import{C as xe}from"./chevron-down-FrV821JD.js";import{c as ve}from"./createLucideIcon-uNbY9Fcg.js";import{a as ae,l as Ce,b as Se,s,A as Pe,d as ye,e as _e,f as Te,C as Me,g as Le,h as je,i as Ie,j as we,k as oe,W as K,I as Oe}from"./ComboboxItem-BFasuhbY.js";import{u as Ne,a as Re}from"./useRenderElement-wx8wirWP.js";import{u as Ve,g as qe,c as X}from"./element-DWwsQruf.js";import{o as Ae}from"./inertValue-s55r6dUv.js";import{u as Ee,a as De,f as ke}from"./LabelableContext-BCNOyXiI.js";import{u as i,s as Ge,p as Fe}from"./InternalBackdrop-kQ2NHw4f.js";import{u as Be,g as We}from"./getPseudoElementBounds-BW9h8Q0a.js";import{c as Y,l as ze}from"./createBaseUIEventDetails-BjdszJ8x.js";import{u as Ue}from"./useCompositeListItem-DaKLxl7y.js";import{u as He}from"./useButton-D9aK1PDu.js";import{r as Xe}from"./resolveValueLabel-DnEgIz-B.js";import"./preload-helper-Ct5FWWRu.js";import"./useControlled-CqxqDhbw.js";import"./visuallyHidden-CbwUG2x5.js";import"./useOpenChangeComplete-CZtJ3Yz4.js";import"./index-zB60VmG6.js";import"./index-DM63YNAa.js";import"./useOnMount-t-CMtdxM.js";import"./useLabelableId-B_VQu0zx.js";import"./useBaseUiId-S0aZiIZg.js";import"./useId-cN53qVUP.js";import"./useTransitionStatus-BstDDSkA.js";import"./useValueChanged-Xh010vEl.js";import"./index-DZa1gaRM.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ke=ve("search",Ye),N=2,$e={...Fe,...ke},Qe=p.forwardRef(function(r,m){const{render:u,className:b,nativeButton:h=!0,disabled:g=!1,...T}=r,{state:d,disabled:F,setTouched:M,setFocused:L,validationMode:B,validation:y}=Ee(),{labelId:W}=De(),a=ae(),j=i(a,s.selectionMode),_=i(a,s.disabled),f=i(a,s.readOnly),z=i(a,s.listElement),U=i(a,s.triggerProps),c=i(a,s.triggerElement),e=i(a,s.inputInsidePopup),t=i(a,s.open),x=i(a,s.selectedValue),H=i(a,s.activeIndex),te=i(a,s.selectedIndex),C=Ce(),le=Se(),re=Ve(),v=F||_||g,J=p.useRef("");function Z(n){J.current=n.pointerType}const ee=C.select("domReferenceElement");p.useEffect(()=>{e&&c&&c!==ee&&C.set("domReferenceElement",c)},[c,ee,C,e]);const{reference:ne}=Be(C,{enabled:!t&&!f&&!_&&j==="single",listRef:a.state.labelsRef,activeIndex:H,selectedIndex:te,onMatch(n){const I=a.state.valuesRef.current[n];I!==void 0&&a.state.setSelectedValue(I,Y("none"))}}),{reference:se}=Ue(C,{enabled:!f&&!_,event:"mousedown"}),{buttonRef:ie,getButtonProps:ce}=He({native:h,disabled:v}),ue=p.useMemo(()=>({...d,open:t,disabled:v}),[d,t,v]),de=Ne(n=>{a.set("triggerElement",n)});return Re("button",r,{ref:[m,ie,de],state:ue,props:[U,se,ne,{tabIndex:e?0:-1,disabled:v,role:e?"combobox":void 0,"aria-expanded":t?"true":"false","aria-haspopup":e?"dialog":"listbox","aria-controls":t?z?.id:void 0,"aria-readonly":f||void 0,"aria-labelledby":W,onPointerDown:Z,onPointerEnter:Z,onFocus(){L(!0),!(v||f)&&re.start(0,a.state.forceMount)},onBlur(){if(M(!0),L(!1),B==="onBlur"){const n=j==="none"?le:x;y.commit(n)}},onMouseDown(n){if(v||f||(e||C.set("domReferenceElement",n.currentTarget),a.state.forceMount(),J.current!=="touch"&&(a.state.inputRef.current?.focus(),e||n.preventDefault()),t))return;const I=Ae(n.currentTarget);function me(S){if(!c)return;const w=qe(S),pe=a.state.positionerElement,be=a.state.listElement;if(X(c,w)||X(pe,w)||X(be,w)||w===c)return;const O=We(c),he=S.clientX>=O.left-N&&S.clientX<=O.right+N,ge=S.clientY>=O.top-N&&S.clientY<=O.bottom+N;he&&ge||a.state.setOpen(!1,Y("cancel-open",S))}e&&I.addEventListener("mouseup",me,{once:!0})},onKeyDown(n){v||f||(n.key==="ArrowDown"||n.key==="ArrowUp")&&(Ge(n),a.state.setOpen(!0,Y(ze,n.nativeEvent)),a.state.inputRef.current?.focus())}},y?y.getValidationProps(T):T,ce],stateAttributesMapping:$e})});function Je(l){const{multiple:r=!1,defaultValue:m,value:u,onValueChange:b,...h}=l;return o.jsx(Pe,{...h,selectionMode:r?"multiple":"single",selectedValue:u,defaultSelectedValue:m,onSelectedValueChange:b})}function Ze(l){const{children:r}=l,m=ae(),u=i(m,s.itemToStringLabel),b=i(m,s.selectedValue),h=i(m,s.items);let g=null;return typeof r=="function"?g=r(b):r!=null?g=r:g=Xe(b,h,u),o.jsx(p.Fragment,{children:g})}function $(l){const r=l[0];return l.length>0&&r!=null&&"groupLabel"in r&&"options"in r}function eo(l){return $(l)?l.map(r=>({value:r.groupLabel,items:r.options})):l}function oo(l){return $(l)?l.flatMap(r=>r.options):l}function ao(l){return typeof l.label=="string"?l.label:String(l.value)}const Q=p.forwardRef(({value:l,defaultValue:r,onChange:m,options:u,placeholder:b="Select an option",searchPlaceholder:h="Search…",disabled:g=!1,required:T=!1,label:d,name:F,triggerEndIcons:M,className:L,style:B},y)=>{const W=p.useMemo(()=>eo(u),[u]),a=p.useMemo(()=>oo(u),[u]),j=e=>ao(e),_=e=>String(e.value),f=(e,t)=>t!=null&&e.value===t.value,z=l!=null?a.find(e=>e.value===l)??null:null,U=r!=null?a.find(e=>e.value===r)??null:null,c=p.useId();return o.jsx("div",{ref:y,className:fe("memori-combobox",L),style:B,children:o.jsxs(Je,{value:z??void 0,defaultValue:U??void 0,onValueChange:(e,t)=>{const x=e;m?.(x!=null?x.value:null)},items:W,disabled:g,required:T,name:F,itemToStringLabel:j,itemToStringValue:_,isItemEqualToValue:f,autoHighlight:!0,children:[d!=null&&d!==""&&o.jsx("label",{className:"memori-combobox__label",htmlFor:c,id:`${c}-label`,children:d}),o.jsxs(Qe,{id:c,className:"memori-combobox__trigger","aria-label":d!=null&&d!==""?void 0:d,"aria-labelledby":d!=null&&d!==""?`${c}-label`:void 0,children:[o.jsx(Ze,{"data-placeholder":b,children:e=>{if(e==null)return o.jsx("span",{className:"memori-combobox__value","data-placeholder":b});const t=a.find(H=>H.value===e.value),x=t?t.label:String(e.value);return o.jsx("span",{className:"memori-combobox__value",children:x})}}),M!=null&&o.jsx("span",{className:"memori-combobox__trigger-icons","aria-hidden":!0,children:M}),o.jsx("span",{className:"memori-combobox__trigger-icon","aria-hidden":!0,children:o.jsx(xe,{size:16})})]}),o.jsx(ye,{className:"memori-combobox__portal",children:o.jsx(_e,{className:"memori-combobox__positioner",sideOffset:8,side:"bottom",align:"start",children:o.jsxs(Te,{className:"memori-combobox__popup",children:[o.jsxs("div",{className:"memori-combobox__search-wrap",children:[o.jsx(Me,{className:"memori-combobox__search",placeholder:h,"aria-label":h}),o.jsx("span",{className:"memori-combobox__search-icon","aria-hidden":!0,children:o.jsx(Ke,{size:16})})]}),o.jsx(Le,{className:"memori-combobox__list",children:$(u)?u.map(e=>o.jsxs(je,{items:e.options,className:"memori-combobox__group",children:[o.jsx(Ie,{className:"memori-combobox__group-label",children:e.groupLabel}),o.jsx(we,{children:(t,x)=>o.jsxs(oe,{value:t,disabled:t.disabled,index:x,className:"memori-combobox__item",children:[o.jsx("span",{className:"memori-combobox__item-text",children:t.label}),(t.icon!=null||t.icons!=null&&t.icons.length>0)&&o.jsxs("span",{className:"memori-combobox__item-icons","aria-hidden":!0,children:[t.icon,t.icons]})]},t.value)})]},e.groupLabel)):(e,t)=>o.jsxs(oe,{value:e,disabled:e.disabled,index:t,className:"memori-combobox__item",children:[o.jsx("span",{className:"memori-combobox__item-text",children:e.label}),(e.icon!=null||e.icons!=null&&e.icons.length>0)&&o.jsxs("span",{className:"memori-combobox__item-icons","aria-hidden":!0,children:[e.icon,e.icons]})]},e.value)})]})})})]})})});Q.displayName="Combobox";Q.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Selected value (option.value). Controlled."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Default selected value. Uncontrolled."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Called when selection changes"},options:{required:!0,tsType:{name:"union",raw:"ComboboxOption[] | ComboboxGroupOption[]",elements:[{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},{name:"Array",elements:[{name:"ComboboxGroupOption"}],raw:"ComboboxGroupOption[]"}]},description:"Flat list or grouped list of options"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder when no value selected (trigger)",defaultValue:{value:"'Select an option'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for the search input inside the popup",defaultValue:{value:"'Search…'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the combobox",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Mark as required",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label (uses Combobox.Label)"},name:{required:!1,tsType:{name:"string"},description:"Form name for the hidden input"},triggerEndIcons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icons rendered before the chevron on the trigger (e.g. Wrench)"},className:{required:!1,tsType:{name:"string"},description:"Root wrapper className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Root wrapper style"}}};const Eo={title:"Form/Combobox",component:Q,tags:["autodocs"],parameters:{docs:{description:{component:"A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"}}},P=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],R={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:P}},V={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet"},...P]}},to=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-8x22b",label:"Mistral 8X22B"},{value:"mistral-nemo",label:"Mistral Nemo"},{value:"mistral-small",label:"Mistral Small"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],q={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:to}},lo=[...P,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"quince",label:"Quince"}],A={args:{label:"Long List",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:lo}},ro=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[o.jsx(K,{size:14},"w"),o.jsx(Oe,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:o.jsx(K,{size:14})},{value:"llama-3-70b",label:"Llama 3 70B"}],E={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:ro}},D={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",triggerEndIcons:o.jsx(K,{size:16}),options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},...P]}},k={args:{label:"Disabled Combobox",placeholder:"Cannot select",searchPlaceholder:"Search…",options:P,disabled:!0}},G={args:{label:"Required field",placeholder:"Pick an option",searchPlaceholder:"Search…",options:P,required:!0}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: flatOptions
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: groupedOptions
  }
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Long List',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: manyOptions
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: optionsWithIcons
  }
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Combobox',
    placeholder: 'Cannot select',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    disabled: true
  }
}`,...k.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Pick an option',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    required: true
  }
}`,...G.parameters?.docs?.source}}};const Do=["Default","WithValue","Grouped","WithSearch","WithOptionIcons","WithTriggerIcon","Disabled","Required"];export{R as Default,k as Disabled,q as Grouped,G as Required,E as WithOptionIcons,A as WithSearch,D as WithTriggerIcon,V as WithValue,Do as __namedExportsOrder,Eo as default};
