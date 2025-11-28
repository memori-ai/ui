import{b as e,o as t}from"./iframe-CXYWeVW0.js";import"./react-dom-CFxFOvNT.js";import{t as n}from"./jsx-runtime-CuAl8wXe.js";import{t as r}from"./compiler-runtime-C5xIBlqU.js";import"./open-closed-BqXZlMkw.js";import"./portal-B8mhYgUa.js";import{t as i}from"./dialog-_cJ28y19.js";import{t as a}from"./transition-r7muYy9O.js";import{t as o}from"./classnames-BeKuTon6.js";import{t as s}from"./Close-C6280G1q.js";import"./Loading-BOK1ZWAU.js";import{t as c}from"./Button-BrcLFT5c.js";import{t as l}from"./useTranslation-D91qJlMC.js";import{t as u}from"./Spin-BQAfxjAB.js";var d=e(o(),1),f=r(),p=e(t(),1),m=n(),h=e=>{let t=(0,f.c)(33),{open:n,onClose:r,className:o,title:h,description:g,children:_,footer:v,loading:y,closable:b,width:x,widthMd:S}=e,C=n===void 0?!1:n,w=y===void 0?!1:y,T=b===void 0?!0:b,E=x===void 0?`100%`:x,D=S===void 0?`100%`:S,{t:O}=l(),k;t[0]===o?k=t[1]:(k=(0,d.default)(`memori-modal`,o),t[0]=o,t[1]=k);let A;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,m.jsx)(a.Child,{as:p.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0`,enterTo:`opacity-100`,leave:`ease-in duration-200`,leaveFrom:`opacity-100`,leaveTo:`opacity-0`,children:(0,m.jsx)(`div`,{className:`memori-modal--backdrop`})}),t[2]=A):A=t[2];let j=`
                    .memori-modal--panel {
                      --memori-modal--width: ${E};
                      --memori-modal--width-md: ${D};
                    }
                  `,M;t[3]===j?M=t[4]:(M=(0,m.jsx)(`style`,{dangerouslySetInnerHTML:{__html:j}}),t[3]=j,t[4]=M);let N;t[5]!==T||t[6]!==r||t[7]!==O?(N=T&&(0,m.jsx)(`div`,{className:`memori-modal--close`,children:(0,m.jsx)(c,{ghost:!0,padded:!0,shape:`circle`,icon:(0,m.jsx)(s,{}),title:O(`close`)||`Close`,onClick:()=>r(!1)})}),t[5]=T,t[6]=r,t[7]=O,t[8]=N):N=t[8];let P;t[9]===h?P=t[10]:(P=h&&(0,m.jsx)(i.Title,{className:`memori-modal--title`,children:h}),t[9]=h,t[10]=P);let F;t[11]===g?F=t[12]:(F=g&&(0,m.jsx)(i.Description,{className:`memori-modal--description`,children:g}),t[11]=g,t[12]=F);let I;t[13]===v?I=t[14]:(I=v&&(0,m.jsx)(`div`,{className:`memori-modal--footer`,children:v}),t[13]=v,t[14]=I);let L;t[15]!==_||t[16]!==w||t[17]!==P||t[18]!==F||t[19]!==I?(L=(0,m.jsxs)(u,{spinning:w,children:[P,F,_,I]}),t[15]=_,t[16]=w,t[17]=P,t[18]=F,t[19]=I,t[20]=L):L=t[20];let R;t[21]!==N||t[22]!==L||t[23]!==M?(R=(0,m.jsx)(`div`,{className:`memori-modal--container`,children:(0,m.jsx)(`div`,{className:`memori-modal--container-scrollable`,children:(0,m.jsx)(a.Child,{as:p.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0 scale-95`,enterTo:`opacity-100 scale-100`,leave:`ease-in duration-200`,leaveFrom:`opacity-100 scale-100`,leaveTo:`opacity-0 scale-95`,children:(0,m.jsxs)(i.Panel,{className:`memori-modal--panel`,children:[M,N,L]})})})}),t[21]=N,t[22]=L,t[23]=M,t[24]=R):R=t[24];let z;t[25]!==r||t[26]!==C||t[27]!==R||t[28]!==k?(z=(0,m.jsxs)(i,{open:C,onClose:r,className:k,children:[A,R]}),t[25]=r,t[26]=C,t[27]=R,t[28]=k,t[29]=z):z=t[29];let B;return t[30]!==C||t[31]!==z?(B=(0,m.jsx)(a,{appear:!0,show:C,as:p.Fragment,children:z}),t[30]=C,t[31]=z,t[32]=B):B=t[32],B},g=h;h.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},description:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},children:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},footer:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},width:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'100%'`,computed:!1}},widthMd:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'100%'`,computed:!1}}}};var _={title:`UI/Modal`,component:g,tags:[`autodocs`],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},loading:{control:{type:`boolean`}},open:{control:{type:`boolean`}},className:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=p.useState(!!e.open||!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c,{onClick:()=>n(!0),children:`Click me`}),(0,m.jsx)(g,{...e,open:t,onClose:e.closable?()=>n(!1):()=>{},footer:e.footer,children:v})]})}},v=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,m.jsx)(`h3`,{children:`Suspendisse a sodales nulla, sed semper nisi.`}),(0,m.jsx)(`p`,{children:`Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.`}),(0,m.jsxs)(`ul`,{children:[(0,m.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,m.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,m.jsx)(`li`,{children:`Quisque in ultrices lectus.`})]}),(0,m.jsx)(`p`,{children:`Nulla at urna diam.`})]}),y=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c,{primary:!0,children:`OK`}),(0,m.jsx)(c,{children:`Cancel`})]}),b=(0,m.jsx)(c,{primary:!0,children:`OK`});const x={args:{open:!1,closable:!0,onClose:()=>{}}},S={args:{open:!0,closable:!0,onClose:()=>{}}},C={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`}},w={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`}},T={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,loading:!0}},E={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,footer:y}},D={args:{open:!0,closable:!1,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,footer:b}},O={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,footer:y},render:e=>{let[t,n]=p.useState(!!e.open||!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c,{onClick:()=>n(!0),children:`Click me`}),(0,m.jsxs)(g,{...e,open:t,onClose:e.closable?()=>n(!1):()=>{},footer:e.footer,children:[v,v,v,v,v]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    onClose: () => {}
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: false,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  },
  render: (args: Props) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Click me</Button>
        <Modal {...args} open={isOpen} onClose={args.closable ? () => setIsOpen(false) : () => {}} footer={args.footer}>
          {content}
          {content}
          {content}
          {content}
          {content}
        </Modal>
      </>;
  }
}`,...O.parameters?.docs?.source}}};const k=[`Default`,`Open`,`WithTitle`,`WithTitleAndDescription`,`Loading`,`WithFooter`,`NonClosable`,`WithALotOfContent`];export{x as Default,T as Loading,D as NonClosable,S as Open,O as WithALotOfContent,E as WithFooter,C as WithTitle,w as WithTitleAndDescription,k as __namedExportsOrder,_ as default};