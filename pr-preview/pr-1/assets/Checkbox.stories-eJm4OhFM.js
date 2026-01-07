import{i as e,w as t}from"./iframe-BzprLN2E.js";import"./react-dom-233ptJIc.js";import{t as n}from"./jsx-runtime-DqxaB3QT.js";import"./floating-ui.utils.dom-CMQ-BUtD.js";import{t as r}from"./classnames-RvC9G2Pp.js";import{t as i}from"./createLucideIcon-6Ki3NmCX.js";import{a,c as o,d as s,f as c,i as l,s as u,t as d,u as f}from"./useRenderElement-a3bMExwF.js";import{t as p}from"./useButton-BTbYci29.js";import{a as m,i as ee,n as h,o as te,r as ne,t as re}from"./LabelableContext-BLb0_KHO.js";import{n as ie,s as ae}from"./useId-4HMKhcJa.js";import{t as oe}from"./useBaseUiId-MLXKCGiE.js";import{a as g,n as se,o as ce,t as le}from"./visuallyHidden-BRI6DJan.js";var ue=i(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),_=i(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),v=t(e());function de(e,t){let n=v.useRef(e),r=c(t);s(()=>{n.current!==e&&r(n.current)},[e,r]),s(()=>{n.current=e},[e])}let y=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({});function fe(e){return v.useMemo(()=>({checked(t){return e.indeterminate?{}:t?{[y.checked]:``}:{[y.unchecked]:``}},...m}),[e.indeterminate])}const pe=v.createContext({disabled:!1});function me(){return v.useContext(pe)}const b=v.createContext(void 0);function he(e=!0){let t=v.useContext(b);if(t===void 0&&!e)throw Error(o(3));return t}const ge=v.createContext(void 0);function x(){let e=v.useContext(ge);if(e===void 0)throw Error(o(14));return e}var S=n();const C=v.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i=!1,disabled:o=!1,id:m,indeterminate:g=!1,inputRef:se,name:ce,onCheckedChange:ue,parent:_=!1,readOnly:y=!1,render:pe,required:b=!1,uncheckedValue:x,value:C,nativeButton:_e=!1,...w}=e,{clearErrors:T}=ne(),{disabled:E,name:ve,setDirty:D,setFilled:O,setFocused:k,setTouched:A,state:j,validationMode:M,validityData:N,shouldValidateOnChange:P,validation:F}=ee(),I=me(),{labelId:L,controlId:R,setControlId:z,getDescriptionProps:B}=re(),V=he(),H=V?.parent,U=H&&V.allValues,W=E||I.disabled||V?.disabled||o,G=ve??ce,K=C??G,ye=oe(),be=oe(),q=R;U?q=_?be:`${H.id}-${K}`:m&&(q=m);let J={};U&&(_?J=V.parent.getParentProps():K&&(J=V.parent.getChildProps(K)));let xe=c(ue),{checked:Se=n,indeterminate:Y=g,onCheckedChange:Ce,...we}=J,X=V?.value,Te=V?.setValue,Ee=V?.defaultValue,De=v.useRef(null),{getButtonProps:Oe,buttonRef:ke}=p({disabled:W,native:_e}),Z=V?.validation??F,[Q,Ae]=te({controlled:K&&X&&!_?X.includes(K):Se,default:K&&Ee&&!_?Ee.includes(K):i,name:`Checkbox`,state:`checked`});s(()=>{if(z!==a)return z(q),()=>{z(void 0)}},[q,V,z,_]),h({enabled:!V,id:ye,commit:Z.commit,value:Q,controlRef:De,name:G,getValue:()=>Q});let $=v.useRef(null),je=u(se,$,Z.inputRef);s(()=>{$.current&&($.current.indeterminate=Y,Q&&O(!0))},[Q,Y,O]),de(Q,()=>{V&&!_||(T(G),O(Q),D(Q!==N.initialValue),P()?Z.commit(Q):Z.commit(Q,!0))});let Me=f({checked:Q,disabled:W,name:_?void 0:G,id:q??void 0,required:b,ref:je,style:le,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,onChange(e){if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked,n=ie(ae,e.nativeEvent);Ce?.(t,n),xe(t,n),!n.isCanceled&&(Ae(t),K&&X&&Te&&!_&&Te(t?[...X,K]:X.filter(e=>e!==K),n))},onFocus(){De.current?.focus()}},C===void 0?l:{value:(V?Q&&C:C)||``},B,V?Z.getValidationProps:Z.getInputValidationProps),Ne=U?!!Se:Q,Pe=U&&Y||g;v.useEffect(()=>{H&&K&&H.disabledStatesRef.current.set(K,W)},[H,W,K]);let Fe=v.useMemo(()=>({...j,checked:Ne,disabled:W,readOnly:y,required:b,indeterminate:Pe}),[j,Ne,W,y,b,Pe]),Ie=fe(Fe),Le=d(`span`,e,{state:Fe,ref:[ke,De,t,V?.registerControlRef],props:[{id:ye,role:`checkbox`,"aria-checked":Y?`mixed`:Q,"aria-readonly":y||void 0,"aria-required":b||void 0,"aria-labelledby":L,"data-parent":_?``:void 0,onFocus(){k(!0)},onBlur(){let e=$.current;e&&(A(!0),k(!1),M===`onBlur`&&Z.commit(V?X:e.checked))},onClick(e){y||W||(e.preventDefault(),$.current?.click())}},B,Z.getValidationProps,w,we,Oe],stateAttributesMapping:Ie});return(0,S.jsxs)(ge.Provider,{value:Fe,children:[Le,!Q&&!V&&G&&!_&&x!==void 0&&(0,S.jsx)(`input`,{type:`hidden`,name:G,value:x}),(0,S.jsx)(`input`,{...Me})]})}),_e=v.forwardRef(function(e,t){let{render:n,className:r,keepMounted:i=!1,...a}=e,o=x(),s=o.checked||o.indeterminate,{transitionStatus:c,setMounted:l}=ce(s),u=v.useRef(null),f=v.useMemo(()=>({...o,transitionStatus:c}),[o,c]);se({open:s,ref:u,onComplete(){s||l(!1)}});let p=fe(o),ee=v.useMemo(()=>({...p,...g,...m}),[p]),h=i||s,te=d(`span`,e,{enabled:h,ref:[t,u],state:f,stateAttributesMapping:ee,props:a});return h?te:null});var w=t(r(),1),T={checkbox:`_checkbox_1rltn_7`,disabled:`_disabled_1rltn_22`,indicator:`_indicator_1rltn_27`,indicatorChecked:`_indicatorChecked_1rltn_42`,indicatorIndeterminate:`_indicatorIndeterminate_1rltn_48`,iconWrapper:`_iconWrapper_1rltn_54`,icon:`_icon_1rltn_54`,"checkmark-scale":`_checkmark-scale_1rltn_1`,label:`_label_1rltn_85`};const E=v.forwardRef(({checked:e,defaultChecked:t,indeterminate:n=!1,disabled:r=!1,required:i=!1,name:a,value:o,label:s,onChange:c,className:l,style:u,id:d,"aria-label":f,"aria-describedby":p,"aria-labelledby":m},ee)=>{let h=e=>{c?.(e,{target:{checked:e},currentTarget:{checked:e}})},te=n?!1:e;return(0,S.jsxs)(C,{checked:te,defaultChecked:t,disabled:r,required:i,name:a,value:o,onCheckedChange:h,className:(0,w.default)(T.checkbox,r&&T.disabled,l),style:u,id:d,"aria-label":f,"aria-describedby":p,"aria-labelledby":m,ref:ee,children:[(0,S.jsx)(`span`,{className:(0,w.default)(T.indicator,e&&!n&&T.indicatorChecked,n&&T.indicatorIndeterminate),children:(0,S.jsx)(_e,{className:T.iconWrapper,children:n?(0,S.jsx)(_,{className:T.icon,size:14,strokeWidth:3}):(0,S.jsx)(ue,{className:T.icon,size:14,strokeWidth:3})})}),s&&(0,S.jsx)(`span`,{className:T.label,children:s})]})});E.displayName=`Checkbox`,E.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{checked:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox is checked."},defaultChecked:{required:!1,tsType:{name:`boolean`},description:`The default checked state. Use when the component is not controlled.`},indeterminate:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox appears in an indeterminate state.\nThis does not set the native input element to indeterminate due to\ninconsistent behavior across browsers. However, it does set a\n`data-indeterminate` attribute on the input.",defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox is disabled.",defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:"If `true`, the checkbox is required.",defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:`The name attribute of the input element.`},value:{required:!1,tsType:{name:`string`},description:`The value attribute of the input element.`},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The label content for the checkbox.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  checked: boolean,
  event: React.ChangeEvent<HTMLInputElement>,
) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Callback fired when the state is changed.
@param checked The new checked state.
@param event The event source of the callback.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name for the root element.`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the root element.`},id:{required:!1,tsType:{name:`string`},description:`The id of the input element.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Defines a string value that labels the checkbox.`},"aria-describedby":{required:!1,tsType:{name:`string`},description:`Identifies the element (or elements) that describes the checkbox.`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:`Identifies the element (or elements) that labels the checkbox.`}}};var ve={title:`Atomic/Checkbox`,component:E,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`The label content for the checkbox`},checked:{control:`boolean`,description:`If true, the checkbox is checked`},defaultChecked:{control:`boolean`,description:`The default checked state (uncontrolled)`},indeterminate:{control:`boolean`,description:`If true, the checkbox appears in an indeterminate state`},disabled:{control:`boolean`,description:`If true, the checkbox is disabled`},required:{control:`boolean`,description:`If true, the checkbox is required`},name:{control:`text`,description:`The name attribute of the input element`},value:{control:`text`,description:`The value attribute of the input element`},className:{control:`text`,description:`Additional CSS class name`}},parameters:{controls:{expanded:!0},docs:{description:{component:`A fully accessible checkbox component built with @base-ui. Supports checked, unchecked, indeterminate, and disabled states with smooth animations.`}}}};const D={args:{label:`Accept terms and conditions`,defaultChecked:!1}},O={args:{label:`I agree to the terms`,defaultChecked:!0}},k={args:{label:`Subscribe to newsletter`,defaultChecked:!1}},A={args:{label:`Select all items`,indeterminate:!0}},j={args:{label:`This option is disabled`,disabled:!0}},M={args:{label:`This option is checked and disabled`,checked:!0,disabled:!0}},N={args:{label:`Partially selected (disabled)`,indeterminate:!0,disabled:!0}},P={args:{"aria-label":`Accept terms`}},F={args:{label:`I agree to the terms and conditions *`,required:!0}},I={args:{label:`Custom styled checkbox`,className:`my-custom-class`}},L={render:()=>{let[e,t]=(0,v.useState)(!1);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,S.jsx)(E,{label:`Controlled checkbox`,checked:e,onChange:e=>t(e)}),(0,S.jsxs)(`div`,{style:{fontSize:`14px`,color:`#595959`},children:[`Current state: `,(0,S.jsx)(`strong`,{children:e?`Checked`:`Unchecked`})]}),(0,S.jsx)(`button`,{onClick:()=>t(!e),style:{padding:`8px 16px`,borderRadius:`8px`,border:`1px solid #d9d9d9`,background:`#fff`,cursor:`pointer`,fontSize:`14px`},children:`Toggle Checkbox`})]})}},R={render:()=>{let[e,t]=(0,v.useState)({option1:!1,option2:!0,option3:!1}),n=e=>n=>{t(t=>({...t,[e]:n}))};return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,S.jsx)(`h3`,{style:{margin:`0 0 8px 0`,fontSize:`16px`,fontWeight:600},children:`Select your preferences`}),(0,S.jsx)(E,{label:`Email notifications`,checked:e.option1,onChange:n(`option1`)}),(0,S.jsx)(E,{label:`SMS notifications`,checked:e.option2,onChange:n(`option2`)}),(0,S.jsx)(E,{label:`Push notifications`,checked:e.option3,onChange:n(`option3`)})]})}},z={render:()=>{let[e,t]=(0,v.useState)({item1:!1,item2:!1,item3:!1}),n=Object.values(e).every(Boolean),r=Object.values(e).some(Boolean)&&!n,i=e=>{t({item1:e,item2:e,item3:e})},a=e=>n=>{t(t=>({...t,[e]:n}))};return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,S.jsx)(E,{label:`Select all`,checked:n,indeterminate:r,onChange:i}),(0,S.jsxs)(`div`,{style:{marginLeft:`24px`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,S.jsx)(E,{label:`Item 1`,checked:e.item1,onChange:a(`item1`)}),(0,S.jsx)(E,{label:`Item 2`,checked:e.item2,onChange:a(`item2`)}),(0,S.jsx)(E,{label:`Item 3`,checked:e.item3,onChange:a(`item3`)})]})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Select all with indeterminate state`,...z.parameters?.docs?.description}}};const B=[`Default`,`Checked`,`Unchecked`,`Indeterminate`,`Disabled`,`DisabledChecked`,`DisabledIndeterminate`,`WithoutLabel`,`Required`,`CustomClassName`,`ControlledCheckbox`,`CheckboxGroup`,`SelectAllPattern`];export{R as CheckboxGroup,O as Checked,L as ControlledCheckbox,I as CustomClassName,D as Default,j as Disabled,M as DisabledChecked,N as DisabledIndeterminate,A as Indeterminate,F as Required,z as SelectAllPattern,k as Unchecked,P as WithoutLabel,B as __namedExportsOrder,ve as default};