import{i as e,w as t}from"./iframe-BzprLN2E.js";import"./react-dom-233ptJIc.js";import{t as n}from"./jsx-runtime-DqxaB3QT.js";import{d as r}from"./floating-ui.utils.dom-CMQ-BUtD.js";import{t as i}from"./classnames-RvC9G2Pp.js";import{a,d as o,f as s,t as c}from"./useRenderElement-a3bMExwF.js";import{a as l,i as u,n as d,o as f,t as p}from"./LabelableContext-BLb0_KHO.js";import{n as m,s as h}from"./useId-4HMKhcJa.js";import{t as g}from"./useBaseUiId-MLXKCGiE.js";function _(e={}){let{id:t,implicit:n=!1,controlRef:i}=e,{controlId:s,setControlId:c}=p(),l=g(t);return o(()=>{if(!(!n&&!t||c===a)){if(n){let e=i?.current;r(e)&&e.closest(`label`)!=null?c(t??null):c(s??l)}else t&&c(t);return()=>{t&&c(void 0)}}},[t,i,s,c,n,l]),s??l}var v=t(e());const y=v.forwardRef(function(e,t){let{render:n,className:r,id:i,name:a,value:g,disabled:y=!1,onValueChange:b,defaultValue:x,...S}=e,{state:C,name:w,disabled:T}=u(),E=T||y,D=w??a,O=v.useMemo(()=>({...C,disabled:E}),[C,E]),{setTouched:k,setDirty:A,validityData:j,setFocused:M,setFilled:N,validationMode:P,validation:F}=u(),{labelId:I}=p(),L=_({id:i});o(()=>{let e=g!=null;F.inputRef.current?.value||e&&g!==``?N(!0):e&&g===``&&N(!1)},[F.inputRef,N,g]);let[R,z]=f({controlled:g,default:x,name:`FieldControl`,state:`value`}),B=g!==void 0,V=s((e,t)=>{b?.(e,t),!t.isCanceled&&z(e)});return d({id:L,name:D,commit:F.commit,value:R,getValue:()=>F.inputRef.current?.value,controlRef:F.inputRef}),c(`input`,e,{ref:t,state:O,props:[{id:L,disabled:E,name:D,ref:F.inputRef,"aria-labelledby":I,...B?{value:R}:{defaultValue:x},onChange(e){let t=e.currentTarget.value;V(t,m(h,e.nativeEvent)),A(t!==j.initialValue),N(t!==``)},onFocus(){M(!0)},onBlur(e){k(!0),M(!1),P===`onBlur`&&F.commit(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(k(!0),F.commit(e.currentTarget.value))}},F.getInputValidationProps(),S],stateAttributesMapping:l})});var b=n();const x=v.forwardRef(function(e,t){return(0,b.jsx)(y,{ref:t,...e})});var S=t(i(),1),C={input:`_input_pyxvs_1`,"input--default":`_input--default_pyxvs_30`,"input--error":`_input--error_pyxvs_39`,"input--disabled":`_input--disabled_pyxvs_54`,"input--sm":`_input--sm_pyxvs_72`,"input--md":`_input--md_pyxvs_78`,"input--lg":`_input--lg_pyxvs_84`,"input--full-width":`_input--full-width_pyxvs_94`};const w=v.forwardRef(({variant:e=`default`,size:t=`md`,fullWidth:n=!1,className:r,disabled:i,...a},o)=>{let s=i||e===`disabled`,c=e===`error`?C[`input--error`]:e===`disabled`?C[`input--disabled`]:C[`input--default`],l=t===`sm`?C[`input--sm`]:t===`lg`?C[`input--lg`]:C[`input--md`],u=n?C[`input--full-width`]:void 0,d=s?C[`input--disabled`]:void 0;return(0,b.jsx)(x,{ref:o,disabled:s,className:(0,S.default)(C.input,c,l,u,d,r),...a})});w.displayName=`Input`,w.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:`Input variant
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Input size
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Whether the input should take full width`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text`},value:{required:!1,tsType:{name:`string`},description:`Input value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default value for uncontrolled input`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when the value changes`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled`},type:{required:!1,tsType:{name:`string`},description:`Input type
@default 'text'`}},composes:[`Omit`]};var{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Atomic/Input`,component:w,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`default`,`error`,`disabled`],description:`Input variant style`},size:{control:{type:`select`},options:[`sm`,`md`,`lg`],description:`Input size`},fullWidth:{control:{type:`boolean`},description:`Whether the input should take full width`},disabled:{control:{type:`boolean`},description:`Whether the input is disabled`},placeholder:{control:{type:`text`},description:`Placeholder text`},value:{control:{type:`text`},description:`Input value (controlled)`},defaultValue:{control:{type:`text`},description:`Default value (uncontrolled)`},type:{control:{type:`text`},description:`Input type`},onValueChange:{description:`Callback fired when the value changes`}},parameters:{controls:{expanded:!0}},args:{onValueChange:T()}};const D={args:{placeholder:`Enter text...`,variant:`default`}},O={args:{placeholder:`This field has an error`,variant:`error`,defaultValue:`Invalid input`}},k={args:{placeholder:`Disabled input`,variant:`disabled`,defaultValue:`Cannot edit`}},A={args:{placeholder:`Small input`,variant:`default`,size:`sm`}},j={args:{placeholder:`Medium input`,variant:`default`,size:`md`}},M={args:{placeholder:`Large input`,variant:`default`,size:`lg`}},N={args:{placeholder:`Full width input`,variant:`default`,fullWidth:!0}},P={render:()=>{let[e,t]=v.useState(``);return(0,b.jsx)(w,{value:e,onValueChange:t,placeholder:`Type something...`})}},F={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,b.jsx)(w,{type:`text`,placeholder:`Text input`}),(0,b.jsx)(w,{type:`email`,placeholder:`Email input`}),(0,b.jsx)(w,{type:`password`,placeholder:`Password input`}),(0,b.jsx)(w,{type:`number`,placeholder:`Number input`})]})},I={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,b.jsx)(w,{placeholder:`Default variant`,variant:`default`}),(0,b.jsx)(w,{placeholder:`Error variant`,variant:`error`}),(0,b.jsx)(w,{placeholder:`Disabled variant`,variant:`disabled`})]})},L={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,b.jsx)(w,{placeholder:`Small input`,size:`sm`}),(0,b.jsx)(w,{placeholder:`Medium input`,size:`md`}),(0,b.jsx)(w,{placeholder:`Large input`,size:`lg`})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default'
  }
}`,...D.parameters?.docs?.source},description:{story:`Default input variant with standard styling.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This field has an error',
    variant: 'error',
    defaultValue: 'Invalid input'
  }
}`,...O.parameters?.docs?.source},description:{story:`Error variant indicates validation errors.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit'
  }
}`,...k.parameters?.docs?.source},description:{story:`Disabled input state.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm'
  }
}`,...A.parameters?.docs?.source},description:{story:`Small size input.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...j.parameters?.docs?.source},description:{story:`Medium size input (default).`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...M.parameters?.docs?.source},description:{story:`Large size input.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true
  }
}`,...N.parameters?.docs?.source},description:{story:`Full width input.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onValueChange={setValue} placeholder="Type something..." />;
  }
}`,...P.parameters?.docs?.source},description:{story:`Controlled input example.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Different input types.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Disabled variant" variant="disabled" />
    </div>
}`,...I.parameters?.docs?.source},description:{story:`All variants displayed together for comparison.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Small input" size="sm" />
      <Input placeholder="Medium input" size="md" />
      <Input placeholder="Large input" size="lg" />
    </div>
}`,...L.parameters?.docs?.source},description:{story:`All sizes displayed together for comparison.`,...L.parameters?.docs?.description}}};const R=[`Default`,`Error`,`Disabled`,`Small`,`Medium`,`Large`,`FullWidth`,`Controlled`,`InputTypes`,`AllVariants`,`AllSizes`];export{L as AllSizes,I as AllVariants,P as Controlled,D as Default,k as Disabled,O as Error,N as FullWidth,F as InputTypes,M as Large,j as Medium,A as Small,R as __namedExportsOrder,E as default};