import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as M}from"./iframe-ByQU2BNT.js";import{M as x}from"./Modal-CouXILRD.js";import{B as t}from"./Button-Cr__w9JV.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Db0Da-SN.js";import"./Spin-tuif51ot.js";import"./loader-circle-4EonD_Mg.js";import"./createLucideIcon-DB9m5VVq.js";import"./x-B7eFoAs7.js";import"./DialogRoot-C1D74dls.js";import"./useRenderElement-Bm3UgFrF.js";import"./InternalBackdrop-Cy1toXRO.js";import"./useOpenChangeComplete-DG9VOwN5.js";import"./index-B2nbzJuQ.js";import"./index-DBuOMn_v.js";import"./useOnMount-BKXpaVxi.js";import"./visuallyHidden-CbwUG2x5.js";import"./element-CfyAZhWR.js";import"./inertValue-DjbkPP0Z.js";import"./createBaseUIEventDetails-DbQuAIGZ.js";import"./useId-Bf8mvrXM.js";import"./index-BtbkyIgn.js";import"./useButton-Be4eE8CD.js";import"./composite-DPnywRGh.js";import"./useRole-n_Hx_6h0.js";import"./useTransitionStatus-CRk8z9OI.js";import"./useBaseUiId-Dch4vH_m.js";const J={title:"Components/Modal",component:x,tags:[],argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},loading:{control:{type:"boolean"}},closable:{control:{type:"boolean"}},closeOnOverlayClick:{control:{type:"boolean"}},closeOnEsc:{control:{type:"boolean"}},size:{control:{type:"select"},options:["sm","md","lg","xl","full"]},centered:{control:{type:"boolean"}},animated:{control:{type:"boolean"}},className:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},render:n=>{const[o,r]=M.useState(!!n.open||!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Modal"}),e.jsx(x,{...n,open:o,onOpenChange:s=>{r(s),n.onOpenChange?.(s)}})]})}},a=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("h3",{children:"Suspendisse a sodales nulla, sed semper nisi."}),e.jsx("p",{children:"Proin tincidunt enim in felis aliquet, a ultricies purus bibendum."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Quisque in ultrices lectus."}),e.jsx("li",{children:"Quisque in ultrices lectus."}),e.jsx("li",{children:"Quisque in ultrices lectus."})]}),e.jsx("p",{children:"Nulla at urna diam."})]}),f=e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"OK"}),e.jsx(t,{children:"Cancel"})]}),b=e.jsx(t,{variant:"primary",children:"OK"}),l={args:{open:!1,closable:!0,onOpenChange:()=>{}}},i={args:{open:!0,closable:!0,onOpenChange:()=>{}}},p={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title"}},c={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description"}},d={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",loading:!0}},u={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",footer:f}},m={args:{open:!0,closable:!1,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",footer:b}},g={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",footer:f},render:n=>{const[o,r]=M.useState(!!n.open||!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Modal"}),e.jsxs(x,{...n,open:o,onOpenChange:s=>{r(s),n.onOpenChange?.(s)},children:[a,a,a,a,a]})]})}},h={render:()=>{const[n,o]=M.useState(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(t,{onClick:()=>o("sm"),children:"Small"}),e.jsx(t,{onClick:()=>o("md"),children:"Medium"}),e.jsx(t,{onClick:()=>o("lg"),children:"Large"}),e.jsx(t,{onClick:()=>o("xl"),children:"Extra Large"}),e.jsx(t,{onClick:()=>o("full"),children:"Full Width"})]}),n&&e.jsx(x,{open:!0,onOpenChange:()=>o(null),title:`${n.toUpperCase()} Modal`,size:n,children:e.jsxs("p",{children:["This is a ",n," sized modal."]})})]})}},C={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Custom Width Modal",width:"90%",widthMd:"600px",widthLg:"800px"}},O={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Lifecycle Callbacks",onAfterOpen:()=>{console.log("Modal opened!")},onAfterClose:()=>{console.log("Modal closed!")}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    onOpenChange: () => {}
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {}
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: false,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Custom Width Modal',
    width: '90%',
    widthMd: '600px',
    widthLg: '800px'
  }
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const X=["Default","Open","WithTitle","WithTitleAndDescription","Loading","WithFooter","NonClosable","WithALotOfContent","SizeVariants","CustomWidths","LifecycleCallbacks"];export{C as CustomWidths,l as Default,O as LifecycleCallbacks,d as Loading,m as NonClosable,i as Open,h as SizeVariants,g as WithALotOfContent,u as WithFooter,p as WithTitle,c as WithTitleAndDescription,X as __namedExportsOrder,J as default};
