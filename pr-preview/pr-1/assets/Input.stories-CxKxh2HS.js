import{i as e,w as t}from"./iframe-tXXeCmse.js";import{t as n}from"./react-dom-C4zOJtT6.js";import{t as r}from"./jsx-runtime-D3fcwA20.js";import{d as i}from"./floating-ui.utils.dom-DXR4vcPl.js";import{t as a}from"./classnames-BMcGO9Ah.js";import{a as o,c as s,d as c,f as l,i as u,t as d}from"./useRenderElement-C08tm2PC.js";import{o as f,t as p,u as m}from"./createBaseUIEventDetails-Dd5SHRQV.js";let h=function(e){return e.disabled=`data-disabled`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});const g={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},_={valid(e){return e===null?null:e?{[h.valid]:``}:{[h.invalid]:``}}};var v=t(e());const y=v.createContext({invalid:void 0,name:void 0,validityData:{state:g,errors:[],error:``,value:``,initialValue:null},setValidityData:o,disabled:void 0,touched:!1,setTouched:o,dirty:!1,setDirty:o,filled:!1,setFilled:o,focused:!1,setFocused:o,validate:()=>null,validationMode:`onSubmit`,validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:{disabled:!1,valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},markedDirtyRef:{current:!1},validation:{getValidationProps:(e=u)=>e,getInputValidationProps:(e=u)=>e,inputRef:{current:null},commit:async()=>{}}});function b(e=!0){let t=v.useContext(y);if(t.setValidityData===o&&!e)throw Error(s(28));return t}const x=v.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:o,validationMode:`onSubmit`,submitAttemptedRef:{current:!1}});function S(){return v.useContext(x)}const C=v.createContext({controlId:void 0,setControlId:o,labelId:void 0,setLabelId:o,messageIds:[],setMessageIds:o,getDescriptionProps:e=>e});function w(){return v.useContext(C)}function T(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}function E({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=v.useRef(e!==void 0),[a,o]=v.useState(t);return[i?e:a,v.useCallback(e=>{i||o(e)},[])]}function D(e={}){let{id:t,implicit:n=!1,controlRef:r}=e,{controlId:a,setControlId:s}=w(),l=m(t);return c(()=>{if(!(!n&&!t||s===o)){if(n){let e=r?.current;i(e)&&e.closest(`label`)!=null?s(t??null):s(a??l)}else t&&s(t);return()=>{t&&s(void 0)}}},[t,r,a,s,n,l]),a??l}var O=t(n());function k(e){let{enabled:t=!0,value:n,id:r,name:i,controlRef:a,commit:o}=e,{formRef:s}=S(),{invalid:u,markedDirtyRef:d,validityData:f,setValidityData:p}=b(),m=l(e.getValue);c(()=>{if(!t)return;let e=n;e===void 0&&(e=m()),f.initialValue===null&&e!==null&&p(t=>({...t,initialValue:e}))},[t,p,n,f.initialValue,m]),c(()=>{!t||!r||s.current.fields.set(r,{getValue:m,name:i,controlRef:a,validityData:T(f,u),validate(){let e=n;e===void 0&&(e=m()),d.current=!0,O.flushSync(()=>o(e))}})},[o,a,t,s,m,r,u,d,i,f,n]),c(()=>{let e=s.current.fields;return()=>{r&&e.delete(r)}},[s,r])}const A=v.forwardRef(function(e,t){let{render:n,className:r,id:i,name:a,value:o,disabled:s=!1,onValueChange:u,defaultValue:m,...h}=e,{state:g,name:y,disabled:x}=b(),S=x||s,C=y??a,T=v.useMemo(()=>({...g,disabled:S}),[g,S]),{setTouched:O,setDirty:A,validityData:j,setFocused:M,setFilled:N,validationMode:P,validation:F}=b(),{labelId:I}=w(),L=D({id:i});c(()=>{let e=o!=null;F.inputRef.current?.value||e&&o!==``?N(!0):e&&o===``&&N(!1)},[F.inputRef,N,o]);let[R,z]=E({controlled:o,default:m,name:`FieldControl`,state:`value`}),B=o!==void 0,V=l((e,t)=>{u?.(e,t),!t.isCanceled&&z(e)});return k({id:L,name:C,commit:F.commit,value:R,getValue:()=>F.inputRef.current?.value,controlRef:F.inputRef}),d(`input`,e,{ref:t,state:T,props:[{id:L,disabled:S,name:C,ref:F.inputRef,"aria-labelledby":I,...B?{value:R}:{defaultValue:m},onChange(e){let t=e.currentTarget.value;V(t,p(f,e.nativeEvent)),A(t!==j.initialValue),N(t!==``)},onFocus(){M(!0)},onBlur(e){O(!0),M(!1),P===`onBlur`&&F.commit(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(O(!0),F.commit(e.currentTarget.value))}},F.getInputValidationProps(),h],stateAttributesMapping:_})});var j=r();const M=v.forwardRef(function(e,t){return(0,j.jsx)(A,{ref:t,...e})});var N=t(a(),1),P={input:`_input_ut1oa_1`,"input--default":`_input--default_ut1oa_30`,"input--error":`_input--error_ut1oa_39`,"input--disabled":`_input--disabled_ut1oa_54`,"input--sm":`_input--sm_ut1oa_72`,"input--md":`_input--md_ut1oa_78`,"input--lg":`_input--lg_ut1oa_84`,"input--full-width":`_input--full-width_ut1oa_94`};const F=v.forwardRef(({variant:e=`default`,size:t=`md`,fullWidth:n=!1,className:r,disabled:i,...a},o)=>{let s=i||e===`disabled`,c=e===`error`?P[`input--error`]:e===`disabled`?P[`input--disabled`]:P[`input--default`],l=t===`sm`?P[`input--sm`]:t===`lg`?P[`input--lg`]:P[`input--md`],u=n?P[`input--full-width`]:void 0,d=s?P[`input--disabled`]:void 0;return(0,j.jsx)(M,{ref:o,disabled:s,className:(0,N.default)(P.input,c,l,u,d,r),...a})});F.displayName=`Input`,F.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:`Input variant
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Input size
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Whether the input should take full width`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text`},value:{required:!1,tsType:{name:`string`},description:`Input value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default value for uncontrolled input`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when the value changes`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled`},type:{required:!1,tsType:{name:`string`},description:`Input type
@default 'text'`}},composes:[`Omit`]};var{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Atomic/Input`,component:F,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`default`,`error`,`disabled`],description:`Input variant style`},size:{control:{type:`select`},options:[`sm`,`md`,`lg`],description:`Input size`},fullWidth:{control:{type:`boolean`},description:`Whether the input should take full width`},disabled:{control:{type:`boolean`},description:`Whether the input is disabled`},placeholder:{control:{type:`text`},description:`Placeholder text`},value:{control:{type:`text`},description:`Input value (controlled)`},defaultValue:{control:{type:`text`},description:`Default value (uncontrolled)`},type:{control:{type:`text`},description:`Input type`},onValueChange:{description:`Callback fired when the value changes`}},parameters:{controls:{expanded:!0}},args:{onValueChange:I()}};const R={args:{placeholder:`Enter text...`,variant:`default`}},z={args:{placeholder:`This field has an error`,variant:`error`,defaultValue:`Invalid input`}},B={args:{placeholder:`Disabled input`,variant:`disabled`,defaultValue:`Cannot edit`}},V={args:{placeholder:`Small input`,variant:`default`,size:`sm`}},H={args:{placeholder:`Medium input`,variant:`default`,size:`md`}},U={args:{placeholder:`Large input`,variant:`default`,size:`lg`}},W={args:{placeholder:`Full width input`,variant:`default`,fullWidth:!0}},G={render:()=>{let[e,t]=v.useState(``);return(0,j.jsx)(F,{value:e,onValueChange:t,placeholder:`Type something...`})}},K={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,j.jsx)(F,{type:`text`,placeholder:`Text input`}),(0,j.jsx)(F,{type:`email`,placeholder:`Email input`}),(0,j.jsx)(F,{type:`password`,placeholder:`Password input`}),(0,j.jsx)(F,{type:`number`,placeholder:`Number input`})]})},q={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,j.jsx)(F,{placeholder:`Default variant`,variant:`default`}),(0,j.jsx)(F,{placeholder:`Error variant`,variant:`error`}),(0,j.jsx)(F,{placeholder:`Disabled variant`,variant:`disabled`})]})},J={render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,j.jsx)(F,{placeholder:`Small input`,size:`sm`}),(0,j.jsx)(F,{placeholder:`Medium input`,size:`md`}),(0,j.jsx)(F,{placeholder:`Large input`,size:`lg`})]})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default'
  }
}`,...R.parameters?.docs?.source},description:{story:`Default input variant with standard styling.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This field has an error',
    variant: 'error',
    defaultValue: 'Invalid input'
  }
}`,...z.parameters?.docs?.source},description:{story:`Error variant indicates validation errors.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit'
  }
}`,...B.parameters?.docs?.source},description:{story:`Disabled input state.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm'
  }
}`,...V.parameters?.docs?.source},description:{story:`Small size input.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...H.parameters?.docs?.source},description:{story:`Medium size input (default).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...U.parameters?.docs?.source},description:{story:`Large size input.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true
  }
}`,...W.parameters?.docs?.source},description:{story:`Full width input.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onValueChange={setValue} placeholder="Type something..." />;
  }
}`,...G.parameters?.docs?.source},description:{story:`Controlled input example.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Different input types.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Disabled variant" variant="disabled" />
    </div>
}`,...q.parameters?.docs?.source},description:{story:`All variants displayed together for comparison.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Small input" size="sm" />
      <Input placeholder="Medium input" size="md" />
      <Input placeholder="Large input" size="lg" />
    </div>
}`,...J.parameters?.docs?.source},description:{story:`All sizes displayed together for comparison.`,...J.parameters?.docs?.description}}};const Y=[`Default`,`Error`,`Disabled`,`Small`,`Medium`,`Large`,`FullWidth`,`Controlled`,`InputTypes`,`AllVariants`,`AllSizes`];export{J as AllSizes,q as AllVariants,G as Controlled,R as Default,B as Disabled,z as Error,W as FullWidth,K as InputTypes,U as Large,H as Medium,V as Small,Y as __namedExportsOrder,L as default};