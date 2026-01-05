import{i as e,w as t}from"./iframe-By5WqCfY.js";import"./react-dom-atHMNWWm.js";import{t as n}from"./jsx-runtime-B9ysRbLC.js";import"./shim-CedCpIOF.js";import"./open-closed-CZIUqA1z.js";import"./portal-DilTC5Ie.js";import{t as r}from"./dialog-DbD4ZWLy.js";import"./floating-ui.utils.dom-TkEs6LFG.js";import{t as i}from"./transition-Chj0rySN.js";import{t as a}from"./classnames-uFSv7048.js";import{t as o}from"./Close-osy2xzd2.js";import"./useRenderElement-BuGGxkHf.js";import{n as s,t as c}from"./Button-DBq8ZCcZ.js";import"./Button-DIRJwf5Q.js";import{t as l}from"./useTranslation-BnHtSUgY.js";import{t as u}from"./Spin-ZBOwhFmy.js";var d=t(a(),1),f=t(e(),1),p=n(),m=({open:e=!1,onClose:t,className:n,title:a,description:c,children:m,footer:h,loading:g=!1,closable:_=!0,width:v=`100%`,widthMd:y=`100%`})=>{let{t:b}=l();return(0,p.jsx)(i,{appear:!0,show:e,as:f.Fragment,children:(0,p.jsxs)(r,{open:e,onClose:t,className:(0,d.default)(`memori-modal`,n),children:[(0,p.jsx)(i.Child,{as:f.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0`,enterTo:`opacity-100`,leave:`ease-in duration-200`,leaveFrom:`opacity-100`,leaveTo:`opacity-0`,children:(0,p.jsx)(`div`,{className:`memori-modal--backdrop`})}),(0,p.jsx)(`div`,{className:`memori-modal--container`,children:(0,p.jsx)(`div`,{className:`memori-modal--container-scrollable`,children:(0,p.jsx)(i.Child,{as:f.Fragment,enter:`ease-out duration-300`,enterFrom:`opacity-0 scale-95`,enterTo:`opacity-100 scale-100`,leave:`ease-in duration-200`,leaveFrom:`opacity-100 scale-100`,leaveTo:`opacity-0 scale-95`,children:(0,p.jsxs)(r.Panel,{className:`memori-modal--panel`,children:[(0,p.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
                    .memori-modal--panel {
                      --memori-modal--width: ${v};
                      --memori-modal--width-md: ${y};
                    }
                  `}}),_&&(0,p.jsx)(`div`,{className:`memori-modal--close`,children:(0,p.jsx)(s,{ghost:!0,padded:!0,shape:`circle`,icon:(0,p.jsx)(o,{}),title:b(`close`)||`Close`,onClick:()=>t(!1)})}),(0,p.jsxs)(u,{spinning:g,children:[a&&(0,p.jsx)(r.Title,{className:`memori-modal--title`,children:a}),c&&(0,p.jsx)(r.Description,{className:`memori-modal--description`,children:c}),m,h&&(0,p.jsx)(`div`,{className:`memori-modal--footer`,children:h})]})]})})})})]})})},h=m;m.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},description:{required:!1,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},children:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},footer:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},width:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'100%'`,computed:!1}},widthMd:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'100%'`,computed:!1}}}};var g={title:`UI/Modal`,component:h,tags:[`autodocs`],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},loading:{control:{type:`boolean`}},open:{control:{type:`boolean`}},className:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=f.useState(!!e.open||!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{onClick:()=>n(!0),children:`Click me`}),(0,p.jsx)(h,{...e,open:t,onClose:e.closable?()=>n(!1):()=>{},footer:e.footer,children:_})]})}},_=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,p.jsx)(`h3`,{children:`Suspendisse a sodales nulla, sed semper nisi.`}),(0,p.jsx)(`p`,{children:`Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.`}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,p.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,p.jsx)(`li`,{children:`Quisque in ultrices lectus.`})]}),(0,p.jsx)(`p`,{children:`Nulla at urna diam.`})]}),v=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{variant:`primary`,children:`OK`}),(0,p.jsx)(c,{children:`Cancel`})]}),y=(0,p.jsx)(c,{variant:`primary`,children:`OK`});const b={args:{open:!1,closable:!0,onClose:()=>{}}},x={args:{open:!0,closable:!0,onClose:()=>{}}},S={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`}},C={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`}},w={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,loading:!0}},T={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,footer:v}},E={args:{open:!0,closable:!1,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,footer:y}},D={args:{open:!0,closable:!0,onClose:()=>{},title:`Modal Title`,description:`Modal Description`,footer:v},render:e=>{let[t,n]=f.useState(!!e.open||!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{onClick:()=>n(!0),children:`Click me`}),(0,p.jsxs)(h,{...e,open:t,onClose:e.closable?()=>n(!1):()=>{},footer:e.footer,children:[_,_,_,_,_]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    onClose: () => {}
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {}
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: false,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const O=[`Default`,`Open`,`WithTitle`,`WithTitleAndDescription`,`Loading`,`WithFooter`,`NonClosable`,`WithALotOfContent`];export{b as Default,w as Loading,E as NonClosable,x as Open,D as WithALotOfContent,T as WithFooter,S as WithTitle,C as WithTitleAndDescription,O as __namedExportsOrder,g as default};