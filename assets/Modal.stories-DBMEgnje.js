import{j as e,R as M}from"./iframe-DSyOqSDN.js";import{M as i}from"./Modal-QTmE3odR.js";import{F as k}from"./decorators-CR5i3NPh.js";import{B as t}from"./Button-DT8v2nx0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B-1qHPVX.js";import"./Spin-CFG9TwRd.js";import"./loader-circle-DsCLUwtP.js";import"./createLucideIcon-BSu-WilA.js";import"./useStableId-CbEv1D-b.js";import"./useTranslation-CisEzeXX.js";import"./index-DQXr03cW.js";import"./x-DXjbvytT.js";import"./DialogRoot-CDSLXYx0.js";import"./useRenderElement-D1btaSxw.js";import"./popupStateMapping-CO8rG5Hk.js";import"./index-W9Uhmc6e.js";import"./index-CPWo8sl9.js";import"./useId-Cgn6PTeu.js";import"./FocusGuard-Cy6It9sP.js";import"./element-CHNw-0cK.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-1sq4ghKn.js";import"./useTimeout-Drji3j7z.js";import"./useOnMount-B1UIL2E3.js";import"./event-1uLbwa05.js";import"./useOpenChangeComplete-BwHnK81Y.js";import"./useButton-Yc5WbqZJ.js";import"./composite-C9OGADUP.js";import"./InternalBackdrop-D0i0FOgA.js";import"./owner-CvMgaIeV.js";import"./inertValue-6-tLnjer.js";import"./useSyncedFloatingRootContext-Dzzv-AEs.js";import"./useTransitionStatus-DJXo2RaG.js";import"./useRole-B0Tdoft7.js";const{expect:T,userEvent:S,within:y}=__STORYBOOK_MODULE_TEST__,ce={title:"Overlay/Modal",component:i,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},loading:{control:{type:"boolean"}},closable:{control:{type:"boolean"}},closeOnOverlayClick:{control:{type:"boolean"}},closeOnEsc:{control:{type:"boolean"}},size:{control:{type:"select"},options:["sm","md","lg","xl","full"]},centered:{control:{type:"boolean"}},animated:{control:{type:"boolean"}},className:{control:{type:"text"}}},parameters:{controls:{expanded:!0}},render:n=>{const[o,r]=M.useState(!!n.open||!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Modal"}),e.jsx(i,{...n,open:o,onOpenChange:a=>{r(a),n.onOpenChange?.(a)}})]})}},s=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("h3",{children:"Suspendisse a sodales nulla, sed semper nisi."}),e.jsx("p",{children:"Proin tincidunt enim in felis aliquet, a ultricies purus bibendum."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Quisque in ultrices lectus."}),e.jsx("li",{children:"Quisque in ultrices lectus."}),e.jsx("li",{children:"Quisque in ultrices lectus."})]}),e.jsx("p",{children:"Nulla at urna diam."})]}),j=e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"OK"}),e.jsx(t,{children:"Cancel"})]}),z=e.jsx(t,{variant:"primary",children:"OK"}),c={args:{open:!1,closable:!0,onOpenChange:()=>{}}},p={args:{open:!0,closable:!0,onOpenChange:()=>{},"aria-label":"Modal"}},d={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title"}},u={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description"}},m={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",loading:!0}},g={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",footer:j}},h={args:{open:!0,closable:!1,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",footer:z}},O={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Modal Title",description:"Modal Description",footer:j},render:n=>{const[o,r]=M.useState(!!n.open||!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),children:"Open Modal"}),e.jsxs(i,{...n,open:o,onOpenChange:a=>{r(a),n.onOpenChange?.(a)},children:[s,s,s,s,s]})]})}},x={render:()=>{const[n,o]=M.useState(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(t,{onClick:()=>o("sm"),children:"Small"}),e.jsx(t,{onClick:()=>o("md"),children:"Medium"}),e.jsx(t,{onClick:()=>o("lg"),children:"Large"}),e.jsx(t,{onClick:()=>o("xl"),children:"Extra Large"}),e.jsx(t,{onClick:()=>o("full"),children:"Full Width"})]}),n&&e.jsx(i,{open:!0,onOpenChange:()=>o(null),title:`${n.toUpperCase()} Modal`,size:n,children:e.jsxs("p",{children:["This is a ",n," sized modal."]})})]})}},C={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Custom Width Modal",width:"90%",widthMd:"600px",widthLg:"800px"}},f={args:{open:!0,closable:!0,onOpenChange:()=>{},title:"Lifecycle Callbacks",onAfterOpen:()=>{console.log("Modal opened!")},onAfterClose:()=>{console.log("Modal closed!")}}},l={parameters:{layout:"fullscreen"},render:()=>{const[n,o]=M.useState(!0);return e.jsx(k,{children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Open in surface"}),e.jsx(i,{open:n,onOpenChange:o,container:r,title:"Clipped modal",size:"sm",children:e.jsx("p",{children:"Portal mounts inside the fixed surface, not document.body."})})]})})}},b={args:{open:!1,closable:!0,title:"Interactive modal",children:e.jsx("p",{children:"Opened via play function."})},play:async({canvasElement:n})=>{const o=y(n),r=y(n.ownerDocument.body);await S.click(o.getByRole("button",{name:/open modal/i})),await T(await r.findByRole("dialog")).toBeInTheDocument(),await S.keyboard("{Escape}")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    onOpenChange: () => {}
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    'aria-label': 'Modal'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: false,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal
  }
}`,...h.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Custom Width Modal',
    width: '90%',
    widthMd: '600px',
    widthLg: '800px'
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <FixedSurface>
        {surface => <>
            <Button onClick={() => setOpen(true)}>Open in surface</Button>
            <Modal open={open} onOpenChange={setOpen} container={surface} title="Clipped modal" size="sm">
              <p>Portal mounts inside the fixed surface, not document.body.</p>
            </Modal>
          </>}
      </FixedSurface>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Portal clipped to a fixed-height surface (widget embed).",...l.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    closable: true,
    title: 'Interactive modal',
    children: <p>Opened via play function.</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open modal/i
    }));
    await expect(await body.findByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...b.parameters?.docs?.source}}};const pe=["Default","Open","WithTitle","WithTitleAndDescription","Loading","WithFooter","NonClosable","WithALotOfContent","SizeVariants","CustomWidths","LifecycleCallbacks","InFixedSurface","OpenInteraction"];export{C as CustomWidths,c as Default,l as InFixedSurface,f as LifecycleCallbacks,m as Loading,h as NonClosable,p as Open,b as OpenInteraction,x as SizeVariants,O as WithALotOfContent,g as WithFooter,d as WithTitle,u as WithTitleAndDescription,pe as __namedExportsOrder,ce as default};
