import{j as e,r as p}from"./iframe-DSyOqSDN.js";import{F as S}from"./decorators-CR5i3NPh.js";import{D as s}from"./Drawer-DuMiScRK.js";import{B as n}from"./Button-DT8v2nx0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-B-1qHPVX.js";import"./useTranslation-CisEzeXX.js";import"./index-DQXr03cW.js";import"./x-DXjbvytT.js";import"./createLucideIcon-BSu-WilA.js";import"./loader-circle-DsCLUwtP.js";import"./DialogRoot-CDSLXYx0.js";import"./useRenderElement-D1btaSxw.js";import"./popupStateMapping-CO8rG5Hk.js";import"./index-W9Uhmc6e.js";import"./index-CPWo8sl9.js";import"./useId-Cgn6PTeu.js";import"./FocusGuard-Cy6It9sP.js";import"./element-CHNw-0cK.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-1sq4ghKn.js";import"./useTimeout-Drji3j7z.js";import"./useOnMount-B1UIL2E3.js";import"./event-1uLbwa05.js";import"./useOpenChangeComplete-BwHnK81Y.js";import"./useButton-Yc5WbqZJ.js";import"./composite-C9OGADUP.js";import"./InternalBackdrop-D0i0FOgA.js";import"./owner-CvMgaIeV.js";import"./inertValue-6-tLnjer.js";import"./useSyncedFloatingRootContext-Dzzv-AEs.js";import"./useTransitionStatus-DJXo2RaG.js";import"./useRole-B0Tdoft7.js";const{expect:j,fn:w,userEvent:O,within:D}=__STORYBOOK_MODULE_TEST__,ae={title:"Overlay/Drawer",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Side panel with portal. Pass `container` to clip inside a widget surface (see InFixedSurface)."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},anchor:{control:"select",options:["left","right","top","bottom"],description:"Edge the drawer emerges from"},size:{control:"select",options:["sm","md","lg"],description:"Width (left/right) or height (top/bottom)"},loading:{control:"boolean",description:"Shows a loading state in the drawer body"},closable:{control:"boolean",description:"Whether the drawer can be closed via the close control"},title:{control:"text"},description:{control:"text"},theme:{control:"inline-radio",options:["light","dark"],description:"Theme stamped on the portal popup"},onOpenChange:{table:{disable:!0}},onClose:{table:{disable:!0}},container:{table:{disable:!0}},children:{control:!1},footer:{control:!1}},args:{title:"Drawer title",description:"Optional subtitle",anchor:"right",size:"md",closable:!0,loading:!1,onOpenChange:w(),onClose:w(),children:e.jsx("p",{children:"Drawer body content."})}};function i(t){const[o,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"primary",onClick:()=>r(!0),children:"Open drawer"}),e.jsx(s,{...t,open:o,onOpenChange:(a,g)=>{t.onOpenChange?.(a,g),r(a)}})]})}const l={render:t=>e.jsx(i,{...t})},c={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["sm","md","lg"].map(t=>e.jsx(i,{title:`Size ${t}`,size:t,anchor:"right",children:e.jsxs("p",{children:["Size ",t]})},t))})},d={render:()=>{const[t,o]=p.useState(!1),[r,a]=p.useState(!1),[g,f]=p.useState(!1),[b,y]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(i,{title:"Loading",loading:!0,children:e.jsx("p",{children:"Spinner in body"})}),e.jsx(i,{title:"Not closable",closable:!1,children:e.jsx("p",{children:"Close control hidden"})}),e.jsx(i,{title:"Long content",children:Array.from({length:40},(B,x)=>e.jsxs("p",{children:["Row ",x+1]},x))})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(n,{onClick:()=>a(!0),children:"Left"}),e.jsx(n,{onClick:()=>o(!0),children:"Right"}),e.jsx(n,{onClick:()=>f(!0),children:"Top"}),e.jsx(n,{onClick:()=>y(!0),children:"Bottom"})]}),e.jsx(s,{open:r,onOpenChange:a,anchor:"left",title:"Left Drawer",children:"Left content"}),e.jsx(s,{open:t,onOpenChange:o,anchor:"right",title:"Right Drawer",children:"Right content"}),e.jsx(s,{open:g,onOpenChange:f,anchor:"top",title:"Top Drawer",children:"Top content"}),e.jsx(s,{open:b,onOpenChange:y,anchor:"bottom",title:"Bottom Drawer",children:"Bottom content"})]})}},m={render:t=>e.jsx(i,{...t}),args:{footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Submit"})]})}},u={parameters:{layout:"fullscreen"},render:t=>{const[o,r]=p.useState(!0);return e.jsx(S,{children:a=>e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>r(!0),children:"Open in surface"}),e.jsx(s,{...t,open:o,onOpenChange:r,container:a,title:"Clipped drawer",children:e.jsx("p",{children:"Portal target is the fixed-height surface, not document.body."})})]})})}},h={render:t=>e.jsx(i,{...t}),play:async({canvasElement:t})=>{const o=D(t),r=D(t.ownerDocument.body);await O.click(o.getByRole("button",{name:/open drawer/i})),await j(await r.findByRole("dialog")).toBeInTheDocument(),await O.keyboard("{Escape}")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerPlayground {...args} />
}`,...l.parameters?.docs?.source},description:{story:"Happy path + controls.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <DrawerPlayground key={size} title={\`Size \${size}\`} size={size} anchor="right">
          <p>Size {size}</p>
        </DrawerPlayground>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Size matrix (no one-story-per-value).",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Loading, not closable, long content, anchors.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <DrawerPlayground {...args} />,
  args: {
    footer: <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Production-like clip surface — reproduces widget portal positioning bugs.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const se=["Default","AllVariants","States","Playground","InFixedSurface","OpenInteraction"];export{c as AllVariants,l as Default,u as InFixedSurface,h as OpenInteraction,m as Playground,d as States,se as __namedExportsOrder,ae as default};
