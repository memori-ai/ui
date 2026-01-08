import{i as e,w as t}from"./iframe-DMsFkDbs.js";import"./react-dom-DN1PZLdI.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import"./floating-ui.utils.dom-D_LsV80C.js";import{t as r}from"./classnames-D2mCmNFl.js";import{h as i,m as a,t as o}from"./useRenderElement-CuQd9qAl.js";import{a as s,i as c,n as l,o as u,t as d}from"./LabelableContext-BYvh9jf9.js";import{n as f,u as p}from"./useId-C1w6mc0h.js";import"./useBaseUiId-Cyp_KzFH.js";import{t as m}from"./useLabelableId-CkKcwdMQ.js";var h=t(e());const g=h.forwardRef(function(e,t){let{render:n,className:r,id:g,name:_,value:v,disabled:y=!1,onValueChange:b,defaultValue:x,...S}=e,{state:C,name:w,disabled:T}=c(),E=T||y,D=w??_,O=h.useMemo(()=>({...C,disabled:E}),[C,E]),{setTouched:k,setDirty:A,validityData:j,setFocused:M,setFilled:N,validationMode:P,validation:F}=c(),{labelId:I}=d(),L=m({id:g});a(()=>{let e=v!=null;F.inputRef.current?.value||e&&v!==``?N(!0):e&&v===``&&N(!1)},[F.inputRef,N,v]);let[R,z]=u({controlled:v,default:x,name:`FieldControl`,state:`value`}),B=v!==void 0,V=i((e,t)=>{b?.(e,t),!t.isCanceled&&z(e)});return l({id:L,name:D,commit:F.commit,value:R,getValue:()=>F.inputRef.current?.value,controlRef:F.inputRef}),o(`input`,e,{ref:t,state:O,props:[{id:L,disabled:E,name:D,ref:F.inputRef,"aria-labelledby":I,...B?{value:R}:{defaultValue:x},onChange(e){let t=e.currentTarget.value;V(t,f(p,e.nativeEvent)),A(t!==j.initialValue),N(t!==``)},onFocus(){M(!0)},onBlur(e){k(!0),M(!1),P===`onBlur`&&F.commit(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(k(!0),F.commit(e.currentTarget.value))}},F.getInputValidationProps(),S],stateAttributesMapping:s})});var _=n();const v=h.forwardRef(function(e,t){return(0,_.jsx)(g,{ref:t,...e})});var y=t(r(),1);const b=h.forwardRef(({variant:e=`default`,size:t=`md`,fullWidth:n=!1,className:r,disabled:i,...a},o)=>{let s=i||e===`disabled`;return(0,_.jsx)(v,{ref:o,disabled:s,className:(0,y.default)(`memori-input`,e===`error`?`memori-input--error`:e===`disabled`?`memori-input--disabled`:`memori-input--default`,t===`sm`?`memori-input--sm`:t===`lg`?`memori-input--lg`:`memori-input--md`,n?`memori-input--full-width`:void 0,s?`memori-input--disabled`:void 0,r),...a})});b.displayName=`Input`,b.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:`Input variant
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Input size
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Whether the input should take full width`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text`},value:{required:!1,tsType:{name:`string`},description:`Input value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default value for uncontrolled input`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when the value changes`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled`},type:{required:!1,tsType:{name:`string`},description:`Input type
@default 'text'`}},composes:[`Omit`]};var{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Atomic/Input`,component:b,tags:[`autodocs`],argTypes:{variant:{control:{type:`select`},options:[`default`,`error`,`disabled`],description:`Input variant style`},size:{control:{type:`select`},options:[`sm`,`md`,`lg`],description:`Input size`},fullWidth:{control:{type:`boolean`},description:`Whether the input should take full width`},disabled:{control:{type:`boolean`},description:`Whether the input is disabled`},placeholder:{control:{type:`text`},description:`Placeholder text`},value:{control:{type:`text`},description:`Input value (controlled)`},defaultValue:{control:{type:`text`},description:`Default value (uncontrolled)`},type:{control:{type:`text`},description:`Input type`},onValueChange:{description:`Callback fired when the value changes`}},parameters:{controls:{expanded:!0}},args:{onValueChange:x()}};const C={args:{placeholder:`Enter text...`,variant:`default`}},w={args:{placeholder:`This field has an error`,variant:`error`,defaultValue:`Invalid input`}},T={args:{placeholder:`Disabled input`,variant:`disabled`,defaultValue:`Cannot edit`}},E={args:{placeholder:`Small input`,variant:`default`,size:`sm`}},D={args:{placeholder:`Medium input`,variant:`default`,size:`md`}},O={args:{placeholder:`Large input`,variant:`default`,size:`lg`}},k={args:{placeholder:`Full width input`,variant:`default`,fullWidth:!0}},A={render:()=>{let[e,t]=h.useState(``);return(0,_.jsx)(b,{value:e,onValueChange:t,placeholder:`Type something...`})}},j={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,_.jsx)(b,{type:`text`,placeholder:`Text input`}),(0,_.jsx)(b,{type:`email`,placeholder:`Email input`}),(0,_.jsx)(b,{type:`password`,placeholder:`Password input`}),(0,_.jsx)(b,{type:`number`,placeholder:`Number input`})]})},M={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,_.jsx)(b,{placeholder:`Default variant`,variant:`default`}),(0,_.jsx)(b,{placeholder:`Error variant`,variant:`error`}),(0,_.jsx)(b,{placeholder:`Disabled variant`,variant:`disabled`})]})},N={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,_.jsx)(b,{placeholder:`Small input`,size:`sm`}),(0,_.jsx)(b,{placeholder:`Medium input`,size:`md`}),(0,_.jsx)(b,{placeholder:`Large input`,size:`lg`})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default'
  }
}`,...C.parameters?.docs?.source},description:{story:`Default input variant with standard styling.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This field has an error',
    variant: 'error',
    defaultValue: 'Invalid input'
  }
}`,...w.parameters?.docs?.source},description:{story:`Error variant indicates validation errors.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit'
  }
}`,...T.parameters?.docs?.source},description:{story:`Disabled input state.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm'
  }
}`,...E.parameters?.docs?.source},description:{story:`Small size input.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md'
  }
}`,...D.parameters?.docs?.source},description:{story:`Medium size input (default).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg'
  }
}`,...O.parameters?.docs?.source},description:{story:`Large size input.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Full width input.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <Input value={value} onValueChange={setValue} placeholder="Type something..." />;
  }
}`,...A.parameters?.docs?.source},description:{story:`Controlled input example.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Different input types.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Disabled variant" variant="disabled" />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`All variants displayed together for comparison.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input placeholder="Small input" size="sm" />
      <Input placeholder="Medium input" size="md" />
      <Input placeholder="Large input" size="lg" />
    </div>
}`,...N.parameters?.docs?.source},description:{story:`All sizes displayed together for comparison.`,...N.parameters?.docs?.description}}};const P=[`Default`,`Error`,`Disabled`,`Small`,`Medium`,`Large`,`FullWidth`,`Controlled`,`InputTypes`,`AllVariants`,`AllSizes`];export{N as AllSizes,M as AllVariants,A as Controlled,C as Default,T as Disabled,w as Error,k as FullWidth,j as InputTypes,O as Large,D as Medium,E as Small,P as __namedExportsOrder,S as default};