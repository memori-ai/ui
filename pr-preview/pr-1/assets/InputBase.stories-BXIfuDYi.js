import{T as e,i as t}from"./iframe-DSvcdAkI.js";import{t as n}from"./react-dom-Oup_Jy8B.js";import{t as r}from"./jsx-runtime-y3CjJ_LJ.js";import{d as i}from"./floating-ui.utils.dom-TkEs6LFG.js";import{t as a}from"./classnames-B1z5kqwT.js";import{c as o,i as s,n as c,r as l,s as u,t as d}from"./useRenderElement-L3mjqnJb.js";let f=function(e){return e.disabled=`data-disabled`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});const p={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},m={valid(e){return e===null?null:e?{[f.valid]:``}:{[f.invalid]:``}}};var h=e(t());const g=h.createContext({invalid:void 0,name:void 0,validityData:{state:p,errors:[],error:``,value:``,initialValue:null},setValidityData:l,disabled:void 0,touched:!1,setTouched:l,dirty:!1,setDirty:l,filled:!1,setFilled:l,focused:!1,setFocused:l,validate:()=>null,validationMode:`onSubmit`,validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:{disabled:!1,valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},markedDirtyRef:{current:!1},validation:{getValidationProps:(e=c)=>e,getInputValidationProps:(e=c)=>e,inputRef:{current:null},commit:async()=>{}}});function _(e=!0){let t=h.useContext(g);if(t.setValidityData===l&&!e)throw Error(s(28));return t}const v=h.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:l,validationMode:`onSubmit`,submitAttemptedRef:{current:!1}});function y(){return h.useContext(v)}const b={...h};var x=0;function S(e,t=`mui`){let[n,r]=h.useState(e),i=e||n;return h.useEffect(()=>{n??(x+=1,r(`${t}-${x}`))},[n,t]),i}var C=b.useId;function w(e,t){if(C!==void 0){let n=C();return e??(t?`${t}-${n}`:n)}return S(e,t)}function T(e){return w(e,`base-ui`)}const E=h.createContext({controlId:void 0,setControlId:l,labelId:void 0,setLabelId:l,messageIds:[],setMessageIds:l,getDescriptionProps:e=>e});function D(){return h.useContext(E)}function O(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}function k({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=h.useRef(e!==void 0),[a,o]=h.useState(t);return[i?e:a,h.useCallback(e=>{i||o(e)},[])]}function A(e={}){let{id:t,implicit:n=!1,controlRef:r}=e,{controlId:a,setControlId:o}=D(),s=T(t);return u(()=>{if(!(!n&&!t||o===l)){if(n){let e=r?.current;i(e)&&e.closest(`label`)!=null?o(t??null):o(a??s)}else t&&o(t);return()=>{t&&o(void 0)}}},[t,r,a,o,n,s]),a??s}var j=e(n());function M(e){let{enabled:t=!0,value:n,id:r,name:i,controlRef:a,commit:s}=e,{formRef:c}=y(),{invalid:l,markedDirtyRef:d,validityData:f,setValidityData:p}=_(),m=o(e.getValue);u(()=>{if(!t)return;let e=n;e===void 0&&(e=m()),f.initialValue===null&&e!==null&&p(t=>({...t,initialValue:e}))},[t,p,n,f.initialValue,m]),u(()=>{!t||!r||c.current.fields.set(r,{getValue:m,name:i,controlRef:a,validityData:O(f,l),validate(){let e=n;e===void 0&&(e=m()),d.current=!0,j.flushSync(()=>s(e))}})},[s,a,t,c,m,r,l,d,i,f,n]),u(()=>{let e=c.current.fields;return()=>{r&&e.delete(r)}},[c,r])}function N(e,t,n,r){let i=!1,a=!1,o=r??c;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}const P=h.forwardRef(function(e,t){let{render:n,className:r,id:i,name:a,value:s,disabled:c=!1,onValueChange:l,defaultValue:f,...p}=e,{state:g,name:v,disabled:y}=_(),b=y||c,x=v??a,S=h.useMemo(()=>({...g,disabled:b}),[g,b]),{setTouched:C,setDirty:w,validityData:T,setFocused:E,setFilled:O,validationMode:j,validation:P}=_(),{labelId:F}=D(),I=A({id:i});u(()=>{let e=s!=null;P.inputRef.current?.value||e&&s!==``?O(!0):e&&s===``&&O(!1)},[P.inputRef,O,s]);let[L,R]=k({controlled:s,default:f,name:`FieldControl`,state:`value`}),z=s!==void 0,B=o((e,t)=>{l?.(e,t),!t.isCanceled&&R(e)});return M({id:I,name:x,commit:P.commit,value:L,getValue:()=>P.inputRef.current?.value,controlRef:P.inputRef}),d(`input`,e,{ref:t,state:S,props:[{id:I,disabled:b,name:x,ref:P.inputRef,"aria-labelledby":F,...z?{value:L}:{defaultValue:f},onChange(e){let t=e.currentTarget.value;B(t,N(`none`,e.nativeEvent)),w(t!==T.initialValue),O(t!==``)},onFocus(){E(!0)},onBlur(e){C(!0),E(!1),j===`onBlur`&&P.commit(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(C(!0),P.commit(e.currentTarget.value))}},P.getInputValidationProps(),p],stateAttributesMapping:m})});var F=r();const I=h.forwardRef(function(e,t){return(0,F.jsx)(P,{ref:t,...e})});var L=e(a(),1),R={input:`_input_ut1oa_1`,"input--default":`_input--default_ut1oa_30`,"input--error":`_input--error_ut1oa_39`,"input--disabled":`_input--disabled_ut1oa_54`,"input--sm":`_input--sm_ut1oa_72`,"input--md":`_input--md_ut1oa_78`,"input--lg":`_input--lg_ut1oa_84`,"input--full-width":`_input--full-width_ut1oa_94`};const z=h.forwardRef(({variant:e=`default`,size:t=`md`,fullWidth:n=!1,className:r,disabled:i,...a},o)=>{let s=i||e===`disabled`,c=e===`error`?R[`input--error`]:e===`disabled`?R[`input--disabled`]:R[`input--default`],l=t===`sm`?R[`input--sm`]:t===`lg`?R[`input--lg`]:R[`input--md`],u=n?R[`input--full-width`]:void 0,d=s?R[`input--disabled`]:void 0;return(0,F.jsx)(I,{ref:o,disabled:s,className:(0,L.default)(R.input,c,l,u,d,r),...a})});z.displayName=`InputBase`,z.__docgenInfo={description:``,methods:[],displayName:`InputBase`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:`Input variant
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Input size
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Whether the input should take full width`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text`},value:{required:!1,tsType:{name:`string`},description:`Input value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default value for uncontrolled input`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when the value changes`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled`},type:{required:!1,tsType:{name:`string`},description:`Input type
@default 'text'`}},composes:[`Omit`]};var{fn:B}=__STORYBOOK_MODULE_TEST__,V={title:`UI/InputBase`,component:z,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`default`,`error`,`disabled`],description:`Input variant style`},size:{control:{type:`select`},options:[`sm`,`md`,`lg`],description:`Input size`},fullWidth:{control:{type:`boolean`},description:`Whether the input should take full width`},disabled:{control:{type:`boolean`},description:`Whether the input is disabled`},placeholder:{control:{type:`text`},description:`Placeholder text`},value:{control:{type:`text`},description:`Input value (controlled)`},defaultValue:{control:{type:`text`},description:`Default value (uncontrolled)`},type:{control:{type:`text`},description:`Input type`},onValueChange:{description:`Callback fired when the value changes`}},parameters:{controls:{expanded:!0}},args:{onValueChange:B()}};const H={args:{placeholder:`Enter text...`,variant:`default`}},U={args:{placeholder:`This field has an error`,variant:`error`,defaultValue:`Invalid input`}},W={args:{placeholder:`Disabled input`,variant:`disabled`,defaultValue:`Cannot edit`}},G={args:{placeholder:`Small input`,variant:`default`,size:`sm`}},K={args:{placeholder:`Medium input`,variant:`default`,size:`md`}},q={args:{placeholder:`Large input`,variant:`default`,size:`lg`}},J={args:{placeholder:`Full width input`,variant:`default`,fullWidth:!0}},Y={render:()=>{let[e,t]=h.useState(``);return(0,F.jsx)(z,{value:e,onValueChange:t,placeholder:`Type something...`})}},X={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,F.jsx)(z,{type:`text`,placeholder:`Text input`}),(0,F.jsx)(z,{type:`email`,placeholder:`Email input`}),(0,F.jsx)(z,{type:`password`,placeholder:`Password input`}),(0,F.jsx)(z,{type:`number`,placeholder:`Number input`})]})},Z={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,F.jsx)(z,{placeholder:`Default variant`,variant:`default`}),(0,F.jsx)(z,{placeholder:`Error variant`,variant:`error`}),(0,F.jsx)(z,{placeholder:`Disabled variant`,variant:`disabled`})]})},Q={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,F.jsx)(z,{placeholder:`Small input`,size:`sm`}),(0,F.jsx)(z,{placeholder:`Medium input`,size:`md`}),(0,F.jsx)(z,{placeholder:`Large input`,size:`lg`})]})};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default'
  }
}`,...H.parameters?.docs?.source},description:{story:`Default input variant with standard styling.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This field has an error',
    variant: 'error',
    defaultValue: 'Invalid input'
  }
}`,...U.parameters?.docs?.source},description:{story:`Error variant indicates validation errors.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit'
  }
}`,...W.parameters?.docs?.source},description:{story:`Disabled input state.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm'
  }
}`,...G.parameters?.docs?.source},description:{story:`Small size input.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...K.parameters?.docs?.source},description:{story:`Medium size input (default).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...q.parameters?.docs?.source},description:{story:`Large size input.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true
  }
}`,...J.parameters?.docs?.source},description:{story:`Full width input.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <InputBase value={value} onValueChange={setValue} placeholder="Type something..." />;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Controlled input example.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <InputBase type="text" placeholder="Text input" />
      <InputBase type="email" placeholder="Email input" />
      <InputBase type="password" placeholder="Password input" />
      <InputBase type="number" placeholder="Number input" />
    </div>
}`,...X.parameters?.docs?.source},description:{story:`Different input types.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <InputBase placeholder="Default variant" variant="default" />
      <InputBase placeholder="Error variant" variant="error" />
      <InputBase placeholder="Disabled variant" variant="disabled" />
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`All variants displayed together for comparison.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <InputBase placeholder="Small input" size="sm" />
      <InputBase placeholder="Medium input" size="md" />
      <InputBase placeholder="Large input" size="lg" />
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`All sizes displayed together for comparison.`,...Q.parameters?.docs?.description}}};const $=[`Default`,`Error`,`Disabled`,`Small`,`Medium`,`Large`,`FullWidth`,`Controlled`,`InputTypes`,`AllVariants`,`AllSizes`];export{Q as AllSizes,Z as AllVariants,Y as Controlled,H as Default,W as Disabled,U as Error,J as FullWidth,X as InputTypes,q as Large,K as Medium,G as Small,$ as __namedExportsOrder,V as default};