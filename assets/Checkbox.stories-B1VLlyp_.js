import{b as e,o as t}from"./iframe-Lykv21fv.js";import{t as n}from"./jsx-runtime-BjbrseIk.js";import{t as r}from"./compiler-runtime-opEaryQp.js";import{t as i}from"./classnames-Ccsu6dJt.js";var a=e(i(),1),o=r(),s=t(),c=n(),l=e=>{let t=(0,o.c)(31),n,r,i,l,u,d,f,p;t[0]===e?(n=t[1],r=t[2],i=t[3],l=t[4],u=t[5],d=t[6],f=t[7],p=t[8]):({label:i,className:r,disabled:f,indeterminate:p,checked:n,onChange:u,name:l,...d}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=l,t[5]=u,t[6]=d,t[7]=f,t[8]=p);let m=f===void 0?!1:f,h=p===void 0?!1:p,g=(0,s.useRef)(null),_,v;t[9]===h?(_=t[10],v=t[11]):(_=()=>{g.current&&(g.current.indeterminate=h)},v=[h],t[9]=h,t[10]=_,t[11]=v),(0,s.useEffect)(_,v);let y;t[12]!==r||t[13]!==m||t[14]!==h?(y=(0,a.default)(`memori-checkbox`,r,{"memori-checkbox--disabled":m,"memori-checkbox--indeterminate":h}),t[12]=r,t[13]=m,t[14]=h,t[15]=y):y=t[15];let b=n||h,x;t[16]!==m||t[17]!==l||t[18]!==u||t[19]!==d||t[20]!==b?(x=(0,c.jsx)(`input`,{ref:g,type:`checkbox`,...d,name:l,disabled:m,checked:b,className:`memori-checkbox--input`,onChange:u}),t[16]=m,t[17]=l,t[18]=u,t[19]=d,t[20]=b,t[21]=x):x=t[21];let S;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,c.jsx)(`span`,{className:`memori-checkbox--inner`}),t[22]=S):S=t[22];let C;t[23]===x?C=t[24]:(C=(0,c.jsxs)(`span`,{className:`memori-checkbox--input-wrapper`,children:[x,S]}),t[23]=x,t[24]=C);let w;t[25]===i?w=t[26]:(w=!!i?.length&&(0,c.jsx)(`span`,{className:`memori-checkbox--text`,children:i}),t[25]=i,t[26]=w);let T;return t[27]!==w||t[28]!==y||t[29]!==C?(T=(0,c.jsxs)(`label`,{className:y,children:[C,w]}),t[27]=w,t[28]=y,t[29]=C,t[30]=T):T=t[30],T},u=l;l.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`string`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:``}}};var d={title:`UI/Checkbox`,component:u,tags:[`autodocs`],argTypes:{label:{control:{type:`text`}},className:{control:{type:`text`}},disabled:{control:{type:`boolean`}}},parameters:{controls:{expanded:!0}}};const f={args:{label:`Check me`}},p={args:{label:`Uncheck me`,checked:!0}},m={args:{label:`Do not check me`,disabled:!0}},h={args:{label:`Do not uncheck me`,checked:!0,disabled:!0}},g={args:{label:`Indeterminate`,checked:!0,indeterminate:!0}},_={args:{label:`Indeterminate`,checked:!1,indeterminate:!0,disabled:!0}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Check me'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uncheck me',
    checked: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do not check me',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do not uncheck me',
    checked: true,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    checked: true,
    indeterminate: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    checked: false,
    indeterminate: true,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`Indeterminate`,`DisabledIndeterminate`];export{p as Checked,f as Default,m as Disabled,h as DisabledChecked,_ as DisabledIndeterminate,g as Indeterminate,v as __namedExportsOrder,d as default};