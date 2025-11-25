import{o as e,v as t,y as n}from"./iframe-BbBXljfT.js";import{t as r}from"./jsx-runtime-Dygd3pLa.js";var i=t((t=>{var n=e().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;t.c=function(e){return n.H.useMemoCache(e)}})),a=t(((e,t)=>{t.exports=i()}))();e();var o=r();const s=e=>{let t=(0,a.c)(16),n,r,i,s,c;t[0]===e?(n=t[1],r=t[2],i=t[3],s=t[4],c=t[5]):({primary:s,size:c,backgroundColor:n,label:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=s,t[5]=c);let l=s===void 0?!1:s,u=c===void 0?`medium`:c,d=l?`storybook-button--primary`:`storybook-button--secondary`,f=`storybook-button--${u}`,p;t[6]!==d||t[7]!==f?(p=[`storybook-button`,f,d],t[6]=d,t[7]=f,t[8]=p):p=t[8];let m=p.join(` `),h;t[9]===n?h=t[10]:(h={backgroundColor:n},t[9]=n,t[10]=h);let g;return t[11]!==r||t[12]!==i||t[13]!==m||t[14]!==h?(g=(0,o.jsx)(`button`,{type:`button`,className:m,style:h,...i,children:r}),t[11]=r,t[12]=i,t[13]=m,t[14]=h,t[15]=g):g=t[15],g};s.__docgenInfo={description:`Primary UI component for user interaction`,methods:[],displayName:`Button`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Is this the principal call to action on the page?`,defaultValue:{value:`false`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`What background color to use`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`How large should the button be?`,defaultValue:{value:`'medium'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Button contents`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click handler`}}};var{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Example/Button`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:c()}};const u={args:{primary:!0,label:`Button`}},d={args:{label:`Button`}},f={args:{size:`large`,label:`Button`}},p={args:{size:`small`,label:`Button`}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...p.parameters?.docs?.source}}};const m=[`Primary`,`Secondary`,`Large`,`Small`];export{f as Large,u as Primary,d as Secondary,p as Small,m as __namedExportsOrder,l as default};