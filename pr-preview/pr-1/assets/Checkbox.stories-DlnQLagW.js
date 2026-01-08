import{i as e,w as t}from"./iframe-DMsFkDbs.js";import"./react-dom-DN1PZLdI.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import"./floating-ui.utils.dom-D_LsV80C.js";import{t as r}from"./classnames-D2mCmNFl.js";import{t as i}from"./createLucideIcon-BVDRrXjB.js";import{n as a,t as o}from"./useValueChanged-CDsrnUhw.js";import{c as s,d as c,h as l,m as u,p as d,s as f,t as p,u as m}from"./useRenderElement-CuQd9qAl.js";import{t as h}from"./useButton-BqLUJEwP.js";import{a as g,i as _,n as ee,o as te,r as ne,t as re}from"./LabelableContext-BYvh9jf9.js";import{n as ie,u as ae}from"./useId-C1w6mc0h.js";import{t as oe}from"./useBaseUiId-Cyp_KzFH.js";import{a as se,n as ce,o as le,t as ue}from"./visuallyHidden-zUF6X9q9.js";var v=i(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]);let y=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});var b=t(e());function de(e){return b.useMemo(()=>({checked(t){return e.indeterminate?{}:t?{[y.checked]:``}:{[y.unchecked]:``}},...g}),[e.indeterminate])}const fe=b.createContext({disabled:!1});function pe(){return b.useContext(fe)}const x=b.createContext(void 0);function me(e=!0){let t=b.useContext(x);if(t===void 0&&!e)throw Error(c(3));return t}const he=b.createContext(void 0);function S(){let e=b.useContext(he);if(e===void 0)throw Error(c(14));return e}var C=n();const w=b.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i=!1,disabled:a=!1,id:c,indeterminate:g=!1,inputRef:se,name:ce,onCheckedChange:le,parent:v=!1,readOnly:y=!1,render:fe,required:x=!1,uncheckedValue:S,value:w,nativeButton:ge=!1,...T}=e,{clearErrors:E}=ne(),{disabled:_e,name:D,setDirty:O,setFilled:k,setFocused:A,setTouched:j,state:M,validationMode:N,validityData:P,shouldValidateOnChange:F,validation:I}=_(),L=pe(),{labelId:R,controlId:z,setControlId:B,getDescriptionProps:ve}=re(),V=me(),H=V?.parent,U=H&&V.allValues,W=_e||L.disabled||V?.disabled||a,G=D??ce,K=w??G,ye=oe(),be=oe(),q=z;U?q=v?be:`${H.id}-${K}`:c&&(q=c);let J={};U&&(v?J=V.parent.getParentProps():K&&(J=V.parent.getChildProps(K)));let xe=l(le),{checked:Se=n,indeterminate:Y=g,onCheckedChange:Ce,...we}=J,X=V?.value,Te=V?.setValue,Ee=V?.defaultValue,De=b.useRef(null),{getButtonProps:Oe,buttonRef:ke}=h({disabled:W,native:ge}),Z=V?.validation??I,[Q,Ae]=te({controlled:K&&X&&!v?X.includes(K):Se,default:K&&Ee&&!v?Ee.includes(K):i,name:`Checkbox`,state:`checked`});u(()=>{if(B!==s)return B(q),()=>{B(void 0)}},[q,V,B,v]),ee({enabled:!V,id:ye,commit:Z.commit,value:Q,controlRef:De,name:G,getValue:()=>Q});let $=b.useRef(null),je=m(se,$,Z.inputRef);u(()=>{$.current&&($.current.indeterminate=Y,Q&&k(!0))},[Q,Y,k]),o(Q,()=>{V&&!v||(E(G),k(Q),O(Q!==P.initialValue),F()?Z.commit(Q):Z.commit(Q,!0))});let Me=d({checked:Q,disabled:W,name:v?void 0:G,id:q??void 0,required:x,ref:je,style:ue,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,onChange(e){if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked,n=ie(ae,e.nativeEvent);Ce?.(t,n),xe(t,n),!n.isCanceled&&(Ae(t),K&&X&&Te&&!v&&Te(t?[...X,K]:X.filter(e=>e!==K),n))},onFocus(){De.current?.focus()}},w===void 0?f:{value:(V?Q&&w:w)||``},ve,V?Z.getValidationProps:Z.getInputValidationProps),Ne=U?!!Se:Q,Pe=U&&Y||g;b.useEffect(()=>{H&&K&&H.disabledStatesRef.current.set(K,W)},[H,W,K]);let Fe=b.useMemo(()=>({...M,checked:Ne,disabled:W,readOnly:y,required:x,indeterminate:Pe}),[M,Ne,W,y,x,Pe]),Ie=de(Fe),Le=p(`span`,e,{state:Fe,ref:[ke,De,t,V?.registerControlRef],props:[{id:ye,role:`checkbox`,"aria-checked":Y?`mixed`:Q,"aria-readonly":y||void 0,"aria-required":x||void 0,"aria-labelledby":R,"data-parent":v?``:void 0,onFocus(){A(!0)},onBlur(){let e=$.current;e&&(j(!0),A(!1),N===`onBlur`&&Z.commit(V?X:e.checked))},onClick(e){y||W||(e.preventDefault(),$.current?.click())}},ve,Z.getValidationProps,T,we,Oe],stateAttributesMapping:Ie});return(0,C.jsxs)(he.Provider,{value:Fe,children:[Le,!Q&&!V&&G&&!v&&S!==void 0&&(0,C.jsx)(`input`,{type:`hidden`,name:G,value:S}),(0,C.jsx)(`input`,{...Me})]})}),ge=b.forwardRef(function(e,t){let{render:n,className:r,keepMounted:i=!1,...a}=e,o=S(),s=o.checked||o.indeterminate,{transitionStatus:c,setMounted:l}=le(s),u=b.useRef(null),d=b.useMemo(()=>({...o,transitionStatus:c}),[o,c]);ce({open:s,ref:u,onComplete(){s||l(!1)}});let f=de(o),m=b.useMemo(()=>({...f,...se,...g}),[f]),h=i||s,_=p(`span`,e,{enabled:h,ref:[t,u],state:d,stateAttributesMapping:m,props:a});return h?_:null});var T=t(r(),1);const E=b.forwardRef(({checked:e,defaultChecked:t,indeterminate:n=!1,disabled:r=!1,required:i=!1,name:o,value:s,label:c,onChange:l,className:u,style:d,id:f,"aria-label":p,"aria-describedby":m,"aria-labelledby":h},g)=>{let _=e=>{l?.(e,{target:{checked:e},currentTarget:{checked:e}})},ee=n?!1:e;return(0,C.jsxs)(w,{checked:ee,defaultChecked:t,disabled:r,required:i,name:o,value:s,onCheckedChange:_,className:(0,T.default)(`memori-checkbox`,r&&`memori-checkbox--disabled`,u),style:d,id:f,"aria-label":p,"aria-describedby":m,"aria-labelledby":h,ref:g,children:[(0,C.jsx)(`span`,{className:(0,T.default)(`memori-checkbox__indicator`,e&&!n&&`memori-checkbox__indicator--checked`,n&&`memori-checkbox__indicator--indeterminate`),children:(0,C.jsx)(ge,{className:`memori-checkbox__icon-wrapper`,children:n?(0,C.jsx)(v,{className:`memori-checkbox__icon`,size:14,strokeWidth:3}):(0,C.jsx)(a,{className:`memori-checkbox__icon`,size:14,strokeWidth:3})})}),c&&(0,C.jsx)(`span`,{className:`memori-checkbox__label`,children:c})]})});E.displayName=`Checkbox`,E.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{checked:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox is checked."},defaultChecked:{required:!1,tsType:{name:`boolean`},description:`The default checked state. Use when the component is not controlled.`},indeterminate:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox appears in an indeterminate state.\nThis does not set the native input element to indeterminate due to\ninconsistent behavior across browsers. However, it does set a\n`data-indeterminate` attribute on the input.",defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox is disabled.",defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox is required.",defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:`The name attribute of the input element.`},value:{required:!1,tsType:{name:`string`},description:`The value attribute of the input element.`},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The label content for the checkbox.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  checked: boolean,
  event: React.ChangeEvent<HTMLInputElement>,
) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Callback fired when the state is changed.
@param checked The new checked state.
@param event The event source of the callback.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the root element.`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the root element.`},id:{required:!1,tsType:{name:`string`},description:`The id of the input element.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Defines a string value that labels the checkbox.`},"aria-describedby":{required:!1,tsType:{name:`string`},description:`Identifies the element (or elements) that describes the checkbox.`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:`Identifies the element (or elements) that labels the checkbox.`}}};var _e={title:`Atomic/Checkbox`,component:E,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`The label content for the checkbox`},checked:{control:`boolean`,description:`If true, the checkbox is checked`},defaultChecked:{control:`boolean`,description:`The default checked state (uncontrolled)`},indeterminate:{control:`boolean`,description:`If true, the checkbox appears in an indeterminate state`},disabled:{control:`boolean`,description:`If true, the checkbox is disabled`},required:{control:`boolean`,description:`If true, the checkbox is required`},name:{control:`text`,description:`The name attribute of the input element`},value:{control:`text`,description:`The value attribute of the input element`},className:{control:`text`,description:`Additional CSS class name`}},parameters:{controls:{expanded:!0},docs:{description:{component:`A fully accessible checkbox component built with @base-ui. Supports checked, unchecked, indeterminate, and disabled states with smooth animations.`}}}};const D={args:{label:`Accept terms and conditions`,defaultChecked:!1}},O={args:{label:`I agree to the terms`,defaultChecked:!0}},k={args:{label:`Subscribe to newsletter`,defaultChecked:!1}},A={args:{label:`Select all items`,indeterminate:!0}},j={args:{label:`This option is disabled`,disabled:!0}},M={args:{label:`This option is checked and disabled`,checked:!0,disabled:!0}},N={args:{label:`Partially selected (disabled)`,indeterminate:!0,disabled:!0}},P={args:{"aria-label":`Accept terms`}},F={args:{label:`I agree to the terms and conditions *`,required:!0}},I={args:{label:`Custom styled checkbox`,className:`my-custom-class`}},L={render:()=>{let[e,t]=(0,b.useState)(!1);return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,C.jsx)(E,{label:`Controlled checkbox`,checked:e,onChange:e=>t(e)}),(0,C.jsxs)(`div`,{style:{fontSize:`14px`,color:`#595959`},children:[`Current state: `,(0,C.jsx)(`strong`,{children:e?`Checked`:`Unchecked`})]}),(0,C.jsx)(`button`,{onClick:()=>t(!e),style:{padding:`8px 16px`,borderRadius:`8px`,border:`1px solid #d9d9d9`,background:`#fff`,cursor:`pointer`,fontSize:`14px`},children:`Toggle Checkbox`})]})}},R={render:()=>{let[e,t]=(0,b.useState)({option1:!1,option2:!0,option3:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))};return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,C.jsx)(`h3`,{style:{margin:`0 0 8px 0`,fontSize:`16px`,fontWeight:600},children:`Select your preferences`}),(0,C.jsx)(E,{label:`Email notifications`,checked:e.option1,onChange:n(`option1`)}),(0,C.jsx)(E,{label:`SMS notifications`,checked:e.option2,onChange:n(`option2`)}),(0,C.jsx)(E,{label:`Push notifications`,checked:e.option3,onChange:n(`option3`)})]})}},z={render:()=>{let[e,t]=(0,b.useState)({item1:!1,item2:!1,item3:!1}),n=Object.values(e).every(Boolean),r=Object.values(e).some(Boolean)&&!n,i=e=>{t({item1:e,item2:e,item3:e})},a=e=>n=>{t(t=>({...t,[e]:n}))};return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,C.jsx)(E,{label:`Select all`,checked:n,indeterminate:r,onChange:i}),(0,C.jsxs)(`div`,{style:{marginLeft:`24px`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,C.jsx)(E,{label:`Item 1`,checked:e.item1,onChange:a(`item1`)}),(0,C.jsx)(E,{label:`Item 2`,checked:e.item2,onChange:a(`item2`)}),(0,C.jsx)(E,{label:`Item 3`,checked:e.item3,onChange:a(`item3`)})]})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...D.parameters?.docs?.source},description:{story:`Default checkbox with a label.
Click to toggle the checkbox state.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    defaultChecked: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Checkbox in checked state.
Click to toggle the checkbox state.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    defaultChecked: false
  }
}`,...k.parameters?.docs?.source},description:{story:`Checkbox in unchecked state.
Click to toggle the checkbox state.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select all items',
    indeterminate: true
  }
}`,...A.parameters?.docs?.source},description:{story:`Indeterminate state - useful for "select all" scenarios`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This option is disabled',
    disabled: true
  }
}`,...j.parameters?.docs?.source},description:{story:`Disabled checkbox (unchecked)`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This option is checked and disabled',
    checked: true,
    disabled: true
  }
}`,...M.parameters?.docs?.source},description:{story:`Disabled checkbox (checked)`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Partially selected (disabled)',
    indeterminate: true,
    disabled: true
  }
}`,...N.parameters?.docs?.source},description:{story:`Disabled checkbox (indeterminate)`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Accept terms'
  }
}`,...P.parameters?.docs?.source},description:{story:`Checkbox without a label - requires aria-label for accessibility`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions *',
    required: true
  }
}`,...F.parameters?.docs?.source},description:{story:`Required checkbox for forms`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled checkbox',
    className: 'my-custom-class'
  }
}`,...I.parameters?.docs?.source},description:{story:`Checkbox with custom className`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Checkbox label="Controlled checkbox" checked={checked} onChange={newChecked => setChecked(newChecked)} />
        <div style={{
        fontSize: '14px',
        color: '#595959'
      }}>
          Current state: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
        </div>
        <button onClick={() => setChecked(!checked)} style={{
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid #d9d9d9',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
          Toggle Checkbox
        </button>
      </div>;
  }
}`,...L.parameters?.docs?.source},description:{story:`Interactive controlled checkbox example`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false
    });
    const handleChange = (key: keyof typeof selections) => (checked: boolean) => {
      setSelections(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '16px',
        fontWeight: 600
      }}>
          Select your preferences
        </h3>
        <Checkbox label="Email notifications" checked={selections.option1} onChange={handleChange('option1')} />
        <Checkbox label="SMS notifications" checked={selections.option2} onChange={handleChange('option2')} />
        <Checkbox label="Push notifications" checked={selections.option3} onChange={handleChange('option3')} />
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Multiple checkboxes in a group`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false
    });
    const allChecked = Object.values(items).every(Boolean);
    const someChecked = Object.values(items).some(Boolean) && !allChecked;
    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked
      });
    };
    const handleItemChange = (key: keyof typeof items) => (checked: boolean) => {
      setItems(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Checkbox label="Select all" checked={allChecked} indeterminate={someChecked} onChange={handleSelectAll} />
        <div style={{
        marginLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Checkbox label="Item 1" checked={items.item1} onChange={handleItemChange('item1')} />
          <Checkbox label="Item 2" checked={items.item2} onChange={handleItemChange('item2')} />
          <Checkbox label="Item 3" checked={items.item3} onChange={handleItemChange('item3')} />
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Select all with indeterminate state`,...z.parameters?.docs?.description}}};const B=[`Default`,`Checked`,`Unchecked`,`Indeterminate`,`Disabled`,`DisabledChecked`,`DisabledIndeterminate`,`WithoutLabel`,`Required`,`CustomClassName`,`ControlledCheckbox`,`CheckboxGroup`,`SelectAllPattern`];export{R as CheckboxGroup,O as Checked,L as ControlledCheckbox,I as CustomClassName,D as Default,j as Disabled,M as DisabledChecked,N as DisabledIndeterminate,A as Indeterminate,F as Required,z as SelectAllPattern,k as Unchecked,P as WithoutLabel,B as __namedExportsOrder,_e as default};