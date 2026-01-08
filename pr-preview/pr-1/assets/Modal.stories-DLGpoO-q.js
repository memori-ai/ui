import{i as e,w as t}from"./iframe-DMsFkDbs.js";import"./react-dom-DN1PZLdI.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import"./shim-i-E5V3v4.js";import"./floating-ui.utils.dom-D_LsV80C.js";import"./floating-ui.react-dom-YBwpNAjh.js";import"./classnames-D2mCmNFl.js";import"./createLucideIcon-BVDRrXjB.js";import{t as r}from"./Button-BsVlKylB.js";import"./x-DpNIEIdG.js";import"./useRenderElement-CuQd9qAl.js";import"./useButton-BqLUJEwP.js";import"./Button-CQeFHuBP.js";import"./Spin-DWQ9QyWR.js";import"./useId-C1w6mc0h.js";import"./useBaseUiId-Cyp_KzFH.js";import"./visuallyHidden-zUF6X9q9.js";import"./InternalBackdrop-JZp8IvP6.js";import"./DialogRoot-FhGhNymM.js";import{n as i}from"./Modal-BWsrIcxw.js";var a=t(e(),1),o=n(),s={title:`Components/Modal`,component:i,tags:[],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},loading:{control:{type:`boolean`}},closable:{control:{type:`boolean`}},closeOnOverlayClick:{control:{type:`boolean`}},closeOnEsc:{control:{type:`boolean`}},size:{control:{type:`select`},options:[`sm`,`md`,`lg`,`xl`,`full`]},centered:{control:{type:`boolean`}},animated:{control:{type:`boolean`}},className:{control:{type:`text`}}},parameters:{controls:{expanded:!0}},render:e=>{let[t,n]=a.useState(!!e.open||!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{onClick:()=>n(!0),children:`Open Modal`}),(0,o.jsx)(i,{...e,open:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)}})]})}},c=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,o.jsx)(`h3`,{children:`Suspendisse a sodales nulla, sed semper nisi.`}),(0,o.jsx)(`p`,{children:`Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.`}),(0,o.jsxs)(`ul`,{children:[(0,o.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,o.jsx)(`li`,{children:`Quisque in ultrices lectus.`}),(0,o.jsx)(`li`,{children:`Quisque in ultrices lectus.`})]}),(0,o.jsx)(`p`,{children:`Nulla at urna diam.`})]}),l=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{variant:`primary`,children:`OK`}),(0,o.jsx)(r,{children:`Cancel`})]}),u=(0,o.jsx)(r,{variant:`primary`,children:`OK`});const d={args:{open:!1,closable:!0,onOpenChange:()=>{}}},f={args:{open:!0,closable:!0,onOpenChange:()=>{}}},p={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`}},m={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`}},h={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,loading:!0}},g={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,footer:l}},_={args:{open:!0,closable:!1,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,footer:u}},v={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Modal Title`,description:`Modal Description`,footer:l},render:e=>{let[t,n]=a.useState(!!e.open||!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{onClick:()=>n(!0),children:`Open Modal`}),(0,o.jsxs)(i,{...e,open:t,onOpenChange:t=>{n(t),e.onOpenChange?.(t)},children:[c,c,c,c,c]})]})}},y={render:()=>{let[e,t]=a.useState(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,o.jsx)(r,{onClick:()=>t(`sm`),children:`Small`}),(0,o.jsx)(r,{onClick:()=>t(`md`),children:`Medium`}),(0,o.jsx)(r,{onClick:()=>t(`lg`),children:`Large`}),(0,o.jsx)(r,{onClick:()=>t(`xl`),children:`Extra Large`}),(0,o.jsx)(r,{onClick:()=>t(`full`),children:`Full Width`})]}),e&&(0,o.jsx)(i,{open:!0,onOpenChange:()=>t(null),title:`${e.toUpperCase()} Modal`,size:e,children:(0,o.jsxs)(`p`,{children:[`This is a `,e,` sized modal.`]})})]})}},b={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Custom Width Modal`,width:`90%`,widthMd:`600px`,widthLg:`800px`}},x={args:{open:!0,closable:!0,onOpenChange:()=>{},title:`Lifecycle Callbacks`,onAfterOpen:()=>{console.log(`Modal opened!`)},onAfterClose:()=>{console.log(`Modal closed!`)}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    onOpenChange: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: false,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} open={isOpen} onOpenChange={open => {
        setIsOpen(open);
        args.onOpenChange?.(open);
      }}>
          {content}
          {content}
          {content}
          {content}
          {content}
        </Modal>
      </>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = React.useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null);
    return <>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <Button onClick={() => setOpenSize('sm')}>Small</Button>
          <Button onClick={() => setOpenSize('md')}>Medium</Button>
          <Button onClick={() => setOpenSize('lg')}>Large</Button>
          <Button onClick={() => setOpenSize('xl')}>Extra Large</Button>
          <Button onClick={() => setOpenSize('full')}>Full Width</Button>
        </div>
        {openSize && <Modal open={true} onOpenChange={() => setOpenSize(null)} title={\`\${openSize.toUpperCase()} Modal\`} size={openSize}>
            <p>This is a {openSize} sized modal.</p>
          </Modal>}
      </>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Custom Width Modal',
    width: '90%',
    widthMd: '600px',
    widthLg: '800px'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Lifecycle Callbacks',
    onAfterOpen: () => {
      console.log('Modal opened!');
    },
    onAfterClose: () => {
      console.log('Modal closed!');
    }
  }
}`,...x.parameters?.docs?.source}}};const S=[`Default`,`Open`,`WithTitle`,`WithTitleAndDescription`,`Loading`,`WithFooter`,`NonClosable`,`WithALotOfContent`,`SizeVariants`,`CustomWidths`,`LifecycleCallbacks`];export{b as CustomWidths,d as Default,x as LifecycleCallbacks,h as Loading,_ as NonClosable,f as Open,y as SizeVariants,v as WithALotOfContent,g as WithFooter,p as WithTitle,m as WithTitleAndDescription,S as __namedExportsOrder,s as default};