import{j as e,r as p}from"./iframe-NAmncnrC.js";import{F as j}from"./decorators-DWQLkBD6.js";import{D as s}from"./Drawer-DbUBwGAN.js";import{B as n}from"./Button-Col-RsjH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-5gX2znmI.js";import"./useTranslation-CEnC0Ne5.js";import"./index-H4rZQIxC.js";import"./x-DSQgUlsf.js";import"./createLucideIcon-Cf5hL4ec.js";import"./loader-circle-DbKmP6zb.js";import"./DialogRoot-CbImQwXO.js";import"./useRenderElement-MX4Ulavc.js";import"./popupStateMapping-CRQDLnQC.js";import"./index-Dkf7Uq27.js";import"./index-Bvi1x9vB.js";import"./useId-D2HAxcmJ.js";import"./FocusGuard-0sGrXLA7.js";import"./element-B7ClJFHA.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-D51YW1_H.js";import"./useTimeout-BjSQ_1Dx.js";import"./useOnMount-BGj4lc8s.js";import"./event-B05lmCIq.js";import"./useOpenChangeComplete-CJL2JLCj.js";import"./useButton-D_vBUC5-.js";import"./composite-DS4WNgs-.js";import"./InternalBackdrop-C0AXej4a.js";import"./owner-CvMgaIeV.js";import"./inertValue-107gnlkn.js";import"./useSyncedFloatingRootContext-D9h_1nVK.js";import"./useTransitionStatus-hyC1Scmw.js";import"./useRole-BHHyfVzW.js";const{expect:B,fn:O,userEvent:D,within:b}=__STORYBOOK_MODULE_TEST__,se={title:"Overlay/Drawer",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Side panel with portal. Pass `container` to clip inside a widget surface (see InFixedSurface)."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},anchor:{control:"select",options:["left","right","top","bottom"],description:"Edge the drawer emerges from"},size:{control:"select",options:["sm","md","lg"],description:"Width (left/right) or height (top/bottom)"},width:{control:"text",description:"Explicit size on the anchor axis. Overrides size. Example: 45rem or 55%"},widthMd:{control:"text"},widthLg:{control:"text"},loading:{control:"boolean",description:"Shows a loading state in the drawer body"},closable:{control:"boolean",description:"Whether the drawer can be closed via the close control"},title:{control:"text"},description:{control:"text"},theme:{control:"inline-radio",options:["light","dark"],description:"Theme stamped on the portal popup"},onOpenChange:{table:{disable:!0}},onClose:{table:{disable:!0}},container:{table:{disable:!0}},children:{control:!1},footer:{control:!1}},args:{title:"Drawer title",description:"Optional subtitle",anchor:"right",size:"md",closable:!0,loading:!1,onOpenChange:O(),onClose:O(),children:e.jsx("p",{children:"Drawer body content."})}};function i(t){const[o,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"primary",onClick:()=>r(!0),children:"Open drawer"}),e.jsx(s,{...t,open:o,onOpenChange:(a,f)=>{t.onOpenChange?.(a,f),r(a)}})]})}const c={render:t=>e.jsx(i,{...t})},l={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["sm","md","lg"].map(t=>e.jsx(i,{title:`Size ${t}`,size:t,anchor:"right",children:e.jsxs("p",{children:["Size ",t]})},t))})},d={render:()=>{const[t,o]=p.useState(!1),[r,a]=p.useState(!1),[f,x]=p.useState(!1),[S,w]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(i,{title:"Loading",loading:!0,children:e.jsx("p",{children:"Spinner in body"})}),e.jsx(i,{title:"Not closable",closable:!1,children:e.jsx("p",{children:"Close control hidden"})}),e.jsx(i,{title:"Long content",children:Array.from({length:40},(C,y)=>e.jsxs("p",{children:["Row ",y+1]},y))})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{onClick:()=>a(!0),children:"Left"}),e.jsx(n,{onClick:()=>o(!0),children:"Right"}),e.jsx(n,{onClick:()=>x(!0),children:"Top"}),e.jsx(n,{onClick:()=>w(!0),children:"Bottom"})]}),e.jsx(s,{open:r,onOpenChange:a,anchor:"left",title:"Left Drawer",children:"Left content"}),e.jsx(s,{open:t,onOpenChange:o,anchor:"right",title:"Right Drawer",children:"Right content"}),e.jsx(s,{open:f,onOpenChange:x,anchor:"top",title:"Top Drawer",children:"Top content"}),e.jsx(s,{open:S,onOpenChange:w,anchor:"bottom",title:"Bottom Drawer",children:"Bottom content"})]})}},u={render:t=>e.jsx(i,{...t}),args:{footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Submit"})]})}},m={parameters:{layout:"fullscreen"},render:t=>{const[o,r]=p.useState(!0);return e.jsx(j,{children:a=>e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open in surface"}),e.jsx(s,{...t,open:o,onOpenChange:r,container:a,title:"Clipped drawer",children:e.jsx("p",{children:"Portal target is the fixed-height surface, not document.body."})})]})})}},h={args:{open:!0,width:"45rem"}},g={render:t=>e.jsx(i,{...t}),play:async({canvasElement:t})=>{const o=b(t),r=b(t.ownerDocument.body);await D.click(o.getByRole("button",{name:/open drawer/i})),await B(await r.findByRole("dialog")).toBeInTheDocument(),await D.keyboard("{Escape}")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerPlayground {...args} />
}`,...c.parameters?.docs?.source},description:{story:"Happy path + controls.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <DrawerPlayground key={size} title={\`Size \${size}\`} size={size} anchor="right">
          <p>Size {size}</p>
        </DrawerPlayground>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Size matrix (no one-story-per-value).",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openRight, setOpenRight] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);
    const [openTop, setOpenTop] = useState(false);
    const [openBottom, setOpenBottom] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <DrawerPlayground title="Loading" loading>
            <p>Spinner in body</p>
          </DrawerPlayground>
          <DrawerPlayground title="Not closable" closable={false}>
            <p>Close control hidden</p>
          </DrawerPlayground>
          <DrawerPlayground title="Long content">
            {Array.from({
            length: 40
          }, (_, i) => <p key={i}>Row {i + 1}</p>)}
          </DrawerPlayground>
        </div>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button onClick={() => setOpenLeft(true)}>Left</Button>
          <Button onClick={() => setOpenRight(true)}>Right</Button>
          <Button onClick={() => setOpenTop(true)}>Top</Button>
          <Button onClick={() => setOpenBottom(true)}>Bottom</Button>
        </div>
        <Drawer open={openLeft} onOpenChange={setOpenLeft} anchor="left" title="Left Drawer">
          Left content
        </Drawer>
        <Drawer open={openRight} onOpenChange={setOpenRight} anchor="right" title="Right Drawer">
          Right content
        </Drawer>
        <Drawer open={openTop} onOpenChange={setOpenTop} anchor="top" title="Top Drawer">
          Top content
        </Drawer>
        <Drawer open={openBottom} onOpenChange={setOpenBottom} anchor="bottom" title="Bottom Drawer">
          Bottom content
        </Drawer>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Loading, not closable, long content, anchors.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerPlayground {...args} />,
  args: {
    footer: <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </>
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => {
    const [open, setOpen] = useState(true);
    return <FixedSurface>
        {surface => <>
            <Button onClick={() => setOpen(true)}>Open in surface</Button>
            <Drawer {...args} open={open} onOpenChange={setOpen} container={surface} title="Clipped drawer">
              <p>
                Portal target is the fixed-height surface, not document.body.
              </p>
            </Drawer>
          </>}
      </FixedSurface>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Production-like clip surface — reproduces widget portal positioning bugs.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    width: '45rem'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerPlayground {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /open drawer/i
    }));
    await expect(await body.findByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...g.parameters?.docs?.source}}};const ie=["Default","AllVariants","States","Playground","InFixedSurface","CustomWidth","OpenInteraction"];export{l as AllVariants,h as CustomWidth,c as Default,m as InFixedSurface,g as OpenInteraction,u as Playground,d as States,ie as __namedExportsOrder,se as default};
