import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-ByQU2BNT.js";import{c as Se}from"./index-Db0Da-SN.js";import{C as Pe}from"./chevron-down-xSsxmaFF.js";import{c as ye}from"./createLucideIcon-DB9m5VVq.js";import{C as oe}from"./check-DSUjuhEk.js";import{a as re,l as _e,b as Me,s as u,A as Te,m as le,d as je,e as Ie,f as Le,C as Re,g as we,h as Ne,i as Oe,j as Ve,k as ae,W as K,I as Ae}from"./ComboboxItem-lYQLII56.js";import{u as ke,a as ne}from"./useRenderElement-Bm3UgFrF.js";import{u as qe,g as Ee,c as X}from"./element-CfyAZhWR.js";import{o as De}from"./inertValue-DjbkPP0Z.js";import{u as Ge,a as Fe,f as Be}from"./LabelableContext-BtlVCVF1.js";import{u as d,s as We,p as ze}from"./InternalBackdrop-Cy1toXRO.js";import{u as Ue,g as He}from"./getPseudoElementBounds-DP8gfNsD.js";import{c as Y,l as Xe}from"./createBaseUIEventDetails-DbQuAIGZ.js";import{u as Ye}from"./useCompositeListItem-WVZilrah.js";import{u as Ke}from"./useButton-Be4eE8CD.js";import{r as $e}from"./resolveValueLabel-B5ydKq3e.js";import{u as Qe}from"./useTransitionStatus-CRk8z9OI.js";import{u as Je,t as Ze}from"./useOpenChangeComplete-DG9VOwN5.js";import"./preload-helper-Ct5FWWRu.js";import"./useControlled-ieZLT0dB.js";import"./visuallyHidden-CbwUG2x5.js";import"./useLabelableId-CUELGrsQ.js";import"./useBaseUiId-Dch4vH_m.js";import"./useId-Bf8mvrXM.js";import"./useValueChanged-BkoHqiER.js";import"./index-B2nbzJuQ.js";import"./index-DBuOMn_v.js";import"./useOnMount-BKXpaVxi.js";import"./index-BtbkyIgn.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],oo=ye("search",eo),O=2,ao={...ze,...Be},to=m.forwardRef(function(r,b){const{render:s,className:h,nativeButton:f=!0,disabled:i=!1,...v}=r,{state:c,disabled:T,setTouched:S,setFocused:P,validationMode:B,validation:j}=Ge(),{labelId:W}=Fe(),a=re(),L=d(a,u.selectionMode),I=d(a,u.disabled),g=d(a,u.readOnly),z=d(a,u.listElement),U=d(a,u.triggerProps),p=d(a,u.triggerElement),e=d(a,u.inputInsidePopup),l=d(a,u.open),x=d(a,u.selectedValue),H=d(a,u.activeIndex),se=d(a,u.selectedIndex),y=_e(),ie=Me(),ce=qe(),C=T||I||i,J=m.useRef("");function Z(n){J.current=n.pointerType}const ee=y.select("domReferenceElement");m.useEffect(()=>{e&&p&&p!==ee&&y.set("domReferenceElement",p)},[p,ee,y,e]);const{reference:ue}=Ue(y,{enabled:!l&&!g&&!I&&L==="single",listRef:a.state.labelsRef,activeIndex:H,selectedIndex:se,onMatch(n){const R=a.state.valuesRef.current[n];R!==void 0&&a.state.setSelectedValue(R,Y("none"))}}),{reference:de}=Ye(y,{enabled:!g&&!I,event:"mousedown"}),{buttonRef:me,getButtonProps:pe}=Ke({native:f,disabled:C}),be=m.useMemo(()=>({...c,open:l,disabled:C}),[c,l,C]),he=ke(n=>{a.set("triggerElement",n)});return ne("button",r,{ref:[b,me,he],state:be,props:[U,de,ue,{tabIndex:e?0:-1,disabled:C,role:e?"combobox":void 0,"aria-expanded":l?"true":"false","aria-haspopup":e?"dialog":"listbox","aria-controls":l?z?.id:void 0,"aria-readonly":g||void 0,"aria-labelledby":W,onPointerDown:Z,onPointerEnter:Z,onFocus(){P(!0),!(C||g)&&ce.start(0,a.state.forceMount)},onBlur(){if(S(!0),P(!1),B==="onBlur"){const n=L==="none"?ie:x;j.commit(n)}},onMouseDown(n){if(C||g||(e||y.set("domReferenceElement",n.currentTarget),a.state.forceMount(),J.current!=="touch"&&(a.state.inputRef.current?.focus(),e||n.preventDefault()),l))return;const R=De(n.currentTarget);function fe(_){if(!p)return;const w=Ee(_),ge=a.state.positionerElement,xe=a.state.listElement;if(X(p,w)||X(ge,w)||X(xe,w)||w===p)return;const N=He(p),ve=_.clientX>=N.left-O&&_.clientX<=N.right+O,Ce=_.clientY>=N.top-O&&_.clientY<=N.bottom+O;ve&&Ce||a.state.setOpen(!1,Y("cancel-open",_))}e&&R.addEventListener("mouseup",fe,{once:!0})},onKeyDown(n){C||g||(n.key==="ArrowDown"||n.key==="ArrowUp")&&(We(n),a.state.setOpen(!0,Y(Xe,n.nativeEvent)),a.state.inputRef.current?.focus())}},j?j.getValidationProps(v):v,pe],stateAttributesMapping:ao})});function ro(t){const{multiple:r=!1,defaultValue:b,value:s,onValueChange:h,...f}=t;return o.jsx(Te,{...f,selectionMode:r?"multiple":"single",selectedValue:s,defaultSelectedValue:b,onSelectedValueChange:h})}function lo(t){const{children:r}=t,b=re(),s=d(b,u.itemToStringLabel),h=d(b,u.selectedValue),f=d(b,u.items);let i=null;return typeof r=="function"?i=r(h):r!=null?i=r:i=$e(h,f,s),o.jsx(m.Fragment,{children:i})}const te=m.forwardRef(function(r,b){const s=r.keepMounted??!1,{selected:h}=le();return s||h?o.jsx(no,{...r,ref:b}):null}),no=m.memo(m.forwardRef((t,r)=>{const{render:b,className:s,keepMounted:h,...f}=t,{selected:i}=le(),v=m.useRef(null),{transitionStatus:c,setMounted:T}=Qe(i),S=m.useMemo(()=>({selected:i,transitionStatus:c}),[i,c]),P=ne("span",t,{ref:[r,v],state:S,props:[{"aria-hidden":!0,children:"✔️"},f],stateAttributesMapping:Ze});return Je({open:i,ref:v,onComplete(){i||T(!1)}}),P}));function $(t){const r=t[0];return t.length>0&&r!=null&&"groupLabel"in r&&"options"in r}function so(t){return $(t)?t.map(r=>({value:r.groupLabel,items:r.options})):t}function io(t){return $(t)?t.flatMap(r=>r.options):t}function co(t){return typeof t.label=="string"?t.label:String(t.value)}const Q=m.forwardRef(({value:t,defaultValue:r,onChange:b,options:s,placeholder:h="Select an option",searchPlaceholder:f="Search…",disabled:i=!1,required:v=!1,label:c,name:T,triggerEndIcons:S,className:P,style:B},j)=>{const W=m.useMemo(()=>so(s),[s]),a=m.useMemo(()=>io(s),[s]),L=e=>co(e),I=e=>String(e.value),g=(e,l)=>l!=null&&e.value===l.value,z=t!=null?a.find(e=>e.value===t)??null:null,U=r!=null?a.find(e=>e.value===r)??null:null,p=m.useId();return o.jsx("div",{ref:j,className:Se("memori-combobox",P),style:B,children:o.jsxs(ro,{value:z??void 0,defaultValue:U??void 0,onValueChange:(e,l)=>{const x=e;b?.(x!=null?x.value:null)},items:W,disabled:i,required:v,name:T,itemToStringLabel:L,itemToStringValue:I,isItemEqualToValue:g,autoHighlight:!0,children:[c!=null&&c!==""&&o.jsx("label",{className:"memori-combobox__label",htmlFor:p,id:`${p}-label`,children:c}),o.jsxs(to,{id:p,className:"memori-combobox__trigger","aria-label":c!=null&&c!==""?void 0:c,"aria-labelledby":c!=null&&c!==""?`${p}-label`:void 0,children:[o.jsx(lo,{"data-placeholder":h,children:e=>{if(e==null)return o.jsx("span",{className:"memori-combobox__value","data-placeholder":h});const l=a.find(H=>H.value===e.value),x=l?l.label:String(e.value);return o.jsx("span",{className:"memori-combobox__value",children:x})}}),S!=null&&o.jsx("span",{className:"memori-combobox__trigger-icons","aria-hidden":!0,children:S}),o.jsx("span",{className:"memori-combobox__trigger-icon","aria-hidden":!0,children:o.jsx(Pe,{size:16})})]}),o.jsx(je,{className:"memori-combobox__portal",children:o.jsx(Ie,{className:"memori-combobox__positioner",sideOffset:8,side:"bottom",align:"start",children:o.jsxs(Le,{className:"memori-combobox__popup",children:[o.jsxs("div",{className:"memori-combobox__search-wrap",children:[o.jsx(Re,{className:"memori-combobox__search",placeholder:f,"aria-label":f}),o.jsx("span",{className:"memori-combobox__search-icon","aria-hidden":!0,children:o.jsx(oo,{size:16})})]}),o.jsx(we,{className:"memori-combobox__list",children:$(s)?s.map(e=>o.jsxs(Ne,{items:e.options,className:"memori-combobox__group",children:[o.jsx(Oe,{className:"memori-combobox__group-label",children:e.groupLabel}),o.jsx(Ve,{children:(l,x)=>o.jsxs(ae,{value:l,disabled:l.disabled,index:x,className:"memori-combobox__item",children:[o.jsx("span",{className:"memori-combobox__item-text",children:l.label}),(l.icon!=null||l.icons!=null&&l.icons.length>0)&&o.jsxs("span",{className:"memori-combobox__item-icons","aria-hidden":!0,children:[l.icon,l.icons]}),o.jsx(te,{children:o.jsx(oe,{className:"memori-combobox__check-icon"})})]},l.value)})]},e.groupLabel)):(e,l)=>o.jsxs(ae,{value:e,disabled:e.disabled,index:l,className:"memori-combobox__item",children:[o.jsx("span",{className:"memori-combobox__item-text",children:e.label}),(e.icon!=null||e.icons!=null&&e.icons.length>0)&&o.jsxs("span",{className:"memori-combobox__item-icons","aria-hidden":!0,children:[e.icon,e.icons]}),o.jsx(te,{children:o.jsx(oe,{className:"memori-combobox__check-icon"})})]},e.value)})]})})})]})})});Q.displayName="Combobox";Q.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Selected value (option.value). Controlled."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Default selected value. Uncontrolled."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Called when selection changes"},options:{required:!0,tsType:{name:"union",raw:"ComboboxOption[] | ComboboxGroupOption[]",elements:[{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},{name:"Array",elements:[{name:"ComboboxGroupOption"}],raw:"ComboboxGroupOption[]"}]},description:"Flat list or grouped list of options"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder when no value selected (trigger)",defaultValue:{value:"'Select an option'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for the search input inside the popup",defaultValue:{value:"'Search…'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the combobox",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Mark as required",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label (uses Combobox.Label)"},name:{required:!1,tsType:{name:"string"},description:"Form name for the hidden input"},triggerEndIcons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icons rendered before the chevron on the trigger (e.g. Wrench)"},className:{required:!1,tsType:{name:"string"},description:"Root wrapper className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Root wrapper style"}}};const Uo={title:"Form/Combobox",component:Q,tags:["autodocs"],parameters:{docs:{description:{component:"A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons."}}},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},searchPlaceholder:{control:"text"}}},M=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],V={args:{label:"Favorite Fruit",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:M}},A={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},{value:"claude-3-5-sonnet",label:"Claude 3.5 Sonnet"},...M]}},uo=[{groupLabel:"Mistral",options:[{value:"mistral-7b",label:"Mistral 7B"},{value:"mistral-8x22b",label:"Mistral 8X22B"},{value:"mistral-nemo",label:"Mistral Nemo"},{value:"mistral-small",label:"Mistral Small"}]},{groupLabel:"Other",options:[{value:"pixtral-12b",label:"Pixtral 12B"},{value:"llama-3-70b",label:"Llama 3 70B"}]}],k={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:uo}},mo=[...M,{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"},{value:"orange",label:"Orange"},{value:"papaya",label:"Papaya"},{value:"quince",label:"Quince"}],q={args:{label:"Long List",placeholder:"Pick a fruit",searchPlaceholder:"Search fruits…",options:mo}},po=[{value:"mistral-7b",label:"Mistral 7B"},{value:"pixtral-12b",label:"Pixtral 12B",icons:[o.jsx(K,{size:14},"w"),o.jsx(Ae,{size:14},"i")]},{value:"mistral-small",label:"Mistral Small",icon:o.jsx(K,{size:14})},{value:"llama-3-70b",label:"Llama 3 70B"}],E={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",options:po}},D={args:{label:"Modello IA - LLM",placeholder:"Select model",searchPlaceholder:"Search…",value:"chat-gpt-4o-mini",triggerEndIcons:o.jsx(K,{size:16}),options:[{value:"chat-gpt-4o-mini",label:"Chat GPT 4o Mini"},{value:"chat-gpt-4o",label:"Chat GPT 4o"},...M]}},G={args:{label:"Disabled Combobox",placeholder:"Cannot select",searchPlaceholder:"Search…",options:M,disabled:!0}},F={args:{label:"Required field",placeholder:"Pick an option",searchPlaceholder:"Search…",options:M,required:!0}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: flatOptions
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: groupedOptions
  }
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Long List',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: manyOptions
  }
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Combobox',
    placeholder: 'Cannot select',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    disabled: true
  }
}`,...G.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'Pick an option',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    required: true
  }
}`,...F.parameters?.docs?.source}}};const Ho=["Default","WithValue","Grouped","WithSearch","WithOptionIcons","WithTriggerIcon","Disabled","Required"];export{V as Default,G as Disabled,k as Grouped,F as Required,E as WithOptionIcons,q as WithSearch,D as WithTriggerIcon,A as WithValue,Ho as __namedExportsOrder,Uo as default};
