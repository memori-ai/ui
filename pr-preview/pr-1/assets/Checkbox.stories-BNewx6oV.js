import{i as e,w as t}from"./iframe-BXE0ypsu.js";import{t as n}from"./jsx-runtime-BKrrHgV7.js";import{t as r}from"./classnames-DhHzMZ_t.js";var i=t(r(),1),a=e(),o=n(),s=({label:e,className:t,disabled:n=!1,indeterminate:r=!1,checked:s,onChange:c,name:l,...u})=>{let d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{d.current&&(d.current.indeterminate=r)},[r]),(0,o.jsxs)(`label`,{className:(0,i.default)(`memori-checkbox`,t,{"memori-checkbox--disabled":n,"memori-checkbox--indeterminate":r}),children:[(0,o.jsxs)(`span`,{className:`memori-checkbox--input-wrapper`,children:[(0,o.jsx)(`input`,{ref:d,type:`checkbox`,...u,name:l,disabled:n,checked:s||r,className:`memori-checkbox--input`,onChange:c}),(0,o.jsx)(`span`,{className:`memori-checkbox--inner`})]}),!!e?.length&&(0,o.jsx)(`span`,{className:`memori-checkbox--text`,children:e})]})},c=s;s.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`string`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:``}}};var l={title:`UI/Checkbox`,component:c,tags:[`autodocs`],argTypes:{label:{control:{type:`text`}},className:{control:{type:`text`}},disabled:{control:{type:`boolean`}}},parameters:{controls:{expanded:!0}}};const u={args:{label:`Check me`}},d={args:{label:`Uncheck me`,checked:!0}},f={args:{label:`Do not check me`,disabled:!0}},p={args:{label:`Do not uncheck me`,checked:!0,disabled:!0}},m={args:{label:`Indeterminate`,checked:!0,indeterminate:!0}},h={args:{label:`Indeterminate`,checked:!1,indeterminate:!0,disabled:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Check me'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uncheck me',
    checked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do not check me',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do not uncheck me',
    checked: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    checked: true,
    indeterminate: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    checked: false,
    indeterminate: true,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`Indeterminate`,`DisabledIndeterminate`];export{d as Checked,u as Default,f as Disabled,p as DisabledChecked,h as DisabledIndeterminate,m as Indeterminate,g as __namedExportsOrder,l as default};