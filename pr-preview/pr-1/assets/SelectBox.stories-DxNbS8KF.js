import"./react-dom-DN1PZLdI.js";import"./jsx-runtime-s6AK7i7Z.js";import"./shim-i-E5V3v4.js";import"./floating-ui.utils.dom-D_LsV80C.js";import"./floating-ui.react-dom-YBwpNAjh.js";import"./classnames-D2mCmNFl.js";import"./createLucideIcon-BVDRrXjB.js";import"./useValueChanged-CDsrnUhw.js";import"./chevron-down-CpIgyJdb.js";import"./useRenderElement-CuQd9qAl.js";import"./useButton-BqLUJEwP.js";import"./LabelableContext-BYvh9jf9.js";import{t as e}from"./SelectBox-Bdr4C93v.js";import"./useId-C1w6mc0h.js";import"./useBaseUiId-Cyp_KzFH.js";import"./visuallyHidden-zUF6X9q9.js";import"./InternalBackdrop-JZp8IvP6.js";import"./useLabelableId-CkKcwdMQ.js";var t={title:`Components/SelectBox`,component:e,tags:[`autodocs`],argTypes:{onChange:{action:`changed`},disabled:{control:`boolean`},error:{control:`boolean`}}},n=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`}];const r={args:{label:`Favorite Fruit`,placeholder:`Pick a fruit`,options:n}},i={args:{label:`Favorite Fruit`,value:`banana`,options:n}},a={args:{label:`Disabled Select`,placeholder:`Cannot select`,options:n,disabled:!0}},o={args:{label:`Error Select`,options:n,error:!0}},s={args:{label:`Long List`,options:[...n,{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    options: options
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    value: 'banana',
    options: options
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select',
    options: options,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error Select',
    options: options,
    error: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Long List',
    options: [...options, {
      value: 'fig',
      label: 'Fig'
    }, {
      value: 'grape',
      label: 'Grape'
    }, {
      value: 'honeydew',
      label: 'Honeydew'
    }]
  }
}`,...s.parameters?.docs?.source}}};const c=[`Default`,`Preselected`,`Disabled`,`ErrorState`,`WithManyOptions`];export{r as Default,a as Disabled,o as ErrorState,i as Preselected,s as WithManyOptions,c as __namedExportsOrder,t as default};