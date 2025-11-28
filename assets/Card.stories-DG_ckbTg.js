import{b as e,o as t}from"./iframe-CXYWeVW0.js";import{t as n}from"./jsx-runtime-CuAl8wXe.js";import{t as r}from"./compiler-runtime-C5xIBlqU.js";import{t as i}from"./classnames-BeKuTon6.js";import"./Loading-BOK1ZWAU.js";import{t as a}from"./Button-BrcLFT5c.js";import{t as o}from"./Spin-BQAfxjAB.js";var s=e(i(),1),c=r();t();var l=n(),u=e=>{let t=(0,c.c)(31),{loading:n,className:r,title:i,description:a,cover:u,hoverable:d,children:f,onClick:p}=e,m=n===void 0?!1:n,h=d===void 0?!1:d,g;t[0]===p?g=t[1]:(g=e=>{(e.key===`Enter`||e.key===`Space`)&&p&&p()},t[0]=p,t[1]=g);let _=p?`button`:void 0,v=p?0:void 0,y=!!p,b;t[2]!==r||t[3]!==u||t[4]!==h||t[5]!==m||t[6]!==y?(b=(0,s.default)(`memori-card`,r,{"memori-card--loading":m,"memori-card--with-cover":u,"memori-card--hoverable":h,"memori-card--pointer":y}),t[2]=r,t[3]=u,t[4]=h,t[5]=m,t[6]=y,t[7]=b):b=t[7];let x;t[8]===u?x=t[9]:(x=u&&(0,l.jsx)(`div`,{className:`memori-card--cover`,children:u}),t[8]=u,t[9]=x);let S;t[10]===i?S=t[11]:(S=i&&(0,l.jsx)(`h3`,{className:`memori-card--title`,children:i}),t[10]=i,t[11]=S);let C;t[12]===a?C=t[13]:(C=a&&(0,l.jsx)(`p`,{className:`memori-card--description`,children:a}),t[12]=a,t[13]=C);let w;t[14]===f?w=t[15]:(w=(0,l.jsx)(`div`,{className:`memori-card--children`,children:f}),t[14]=f,t[15]=w);let T;t[16]!==C||t[17]!==w||t[18]!==S?(T=(0,l.jsxs)(`div`,{className:`memori-card--content`,children:[S,C,w]}),t[16]=C,t[17]=w,t[18]=S,t[19]=T):T=t[19];let E;t[20]!==m||t[21]!==T||t[22]!==x?(E=(0,l.jsxs)(o,{spinning:m,children:[x,T]}),t[20]=m,t[21]=T,t[22]=x,t[23]=E):E=t[23];let D;return t[24]!==p||t[25]!==E||t[26]!==g||t[27]!==_||t[28]!==v||t[29]!==b?(D=(0,l.jsx)(`div`,{onClick:p,onKeyDown:g,role:_,tabIndex:v,className:b,children:E}),t[24]=p,t[25]=E,t[26]=g,t[27]=_,t[28]=v,t[29]=b,t[30]=D):D=t[30],D},d=u;u.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},cover:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode | string`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`},{name:`string`}]},description:``},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};var f={title:`UI/Card`,component:d,tags:[`autodocs`],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},children:{control:{type:`text`}},className:{control:{type:`text`}},loading:{control:{type:`boolean`}}},parameters:{controls:{expanded:!0}}};const p={args:{title:`Card title`,loading:!1}},m={args:{title:`Card title`,description:`Card description`,loading:!1}},h={args:{title:`Card title`,description:`Card description`,loading:!0}},g={args:{title:`Card title`,description:`Card description`,cover:(0,l.jsx)(`img`,{src:`https://picsum.photos/200/300`,alt:`cover`}),loading:!1}},_={args:{title:`Card title`,description:`Card description`,children:(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{children:`Some text`}),(0,l.jsx)(a,{primary:!0,children:`Show more`})]}),loading:!1}},v={args:{title:`Card title`,description:`Card description`,loading:!1,hoverable:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    loading: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    cover: <img src="https://picsum.photos/200/300" alt="cover" />,
    loading: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    children: <div>
        <p>Some text</p>
        <Button primary>Show more</Button>
      </div>,
    loading: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: false,
    hoverable: true
  }
}`,...v.parameters?.docs?.source}}};const y=[`Default`,`WithTitleAndDescription`,`Loading`,`WithCover`,`WithChildren`,`Hoverable`];export{p as Default,v as Hoverable,h as Loading,_ as WithChildren,g as WithCover,m as WithTitleAndDescription,y as __namedExportsOrder,f as default};