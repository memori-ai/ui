import{j as e,R as j,r as k}from"./iframe-CHNWyR0n.js";import{F as T}from"./decorators-CnOYVwpA.js";import{D as n}from"./Dropdown-BIJErApD.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BI3SRy18.js";import"./chevron-down-CLXQaDRd.js";import"./createLucideIcon-JC8tWaDJ.js";import"./index-DuFcvx_e.js";import"./index-D1YOZjuq.js";import"./useTimeout-BJg-2aRl.js";import"./useRenderElement-Bf9RoRic.js";import"./useOnMount-CEzZbo8a.js";import"./useId-BmGFZVKX.js";import"./useOpenChangeComplete-Dan-Rzxs.js";import"./InternalBackdrop-BBiXNcUf.js";import"./element-DoMtUONN.js";import"./owner-CvMgaIeV.js";import"./popupStateMapping-Do6tL8im.js";import"./FocusGuard-BI0EgEtI.js";import"./visuallyHidden-CbwUG2x5.js";import"./useBaseUiId-D6jFPYT3.js";import"./event-Cek0dqbQ.js";import"./index-CW1ZKE4g.js";import"./floating-ui.utils-DizDQBU0.js";import"./useSyncedFloatingRootContext-oTAJJ3GR.js";import"./useTransitionStatus-coEAfkD6.js";import"./useRole-B8x0NP87.js";import"./useListNavigation-sWWh3Izv.js";import"./composite-CQLyxpfO.js";import"./getPseudoElementBounds-9HRffhyL.js";import"./useButton-Cbt7_vkm.js";import"./inertValue-D-uQd_kC.js";import"./getDisabledMountTransitionStyles-BgD5RSLy.js";import"./ToolbarRootContext-CGxSn_IZ.js";import"./composite-BsL_nY1C.js";import"./safePolygon-BmyVaSZ0.js";import"./useCompositeItem-DR-HJIqm.js";import"./useClick-Dqjb3oFA.js";import"./useFocus-CCgicFit.js";const{expect:f,userEvent:x,within:C}=__STORYBOOK_MODULE_TEST__,ce={title:"Azioni e navigazione/Dropdown",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown menu built on @base-ui/react Menu. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. Use Dropdown.Trigger to open the menu and Dropdown.Menu with Dropdown.Item for options."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},defaultOpen:{control:"boolean",description:"Initial open state (uncontrolled)"},disabled:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},s={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Actions"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{onClick:()=>{},children:"Edit"}),e.jsx(n.Item,{onClick:()=>{},children:"Duplicate"}),e.jsx(n.Item,{onClick:()=>{},children:"Share"})]})]})},i={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"File"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{onClick:()=>{},children:"New"}),e.jsx(n.Item,{onClick:()=>{},children:"Open"}),e.jsx(n.Item,{onClick:()=>{},children:"Save"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onClick:()=>{},children:"Export"}),e.jsx(n.Item,{onClick:()=>{},children:"Print"})]})]})},d={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Sort"}),e.jsxs(n.Menu,{children:[e.jsxs(n.Group,{children:[e.jsx(n.GroupLabel,{children:"Sort by"}),e.jsx(n.Item,{onClick:()=>{},children:"Name"}),e.jsx(n.Item,{onClick:()=>{},children:"Date"}),e.jsx(n.Item,{onClick:()=>{},children:"Size"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Group,{children:[e.jsx(n.GroupLabel,{children:"View"}),e.jsx(n.Item,{onClick:()=>{},children:"List"}),e.jsx(n.Item,{onClick:()=>{},children:"Grid"})]})]})]})},p={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Options"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{onClick:()=>{},children:"Enabled action"}),e.jsx(n.Item,{disabled:!0,children:"Disabled action"}),e.jsx(n.Item,{onClick:()=>{},children:"Another action"})]})]})},a={render:o=>e.jsxs(n,{...o,disabled:!0,children:[e.jsx(n.Trigger,{children:"Disabled dropdown"}),e.jsx(n.Menu,{children:e.jsx(n.Item,{onClick:()=>{},children:"Item"})})]})},c={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Bottom (default)"}),e.jsxs(n.Menu,{placement:"bottom",align:"start",children:[e.jsx(n.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(n.Item,{onClick:()=>{},children:"Item 2"})]})]})},l={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Top"}),e.jsxs(n.Menu,{placement:"top",align:"start",children:[e.jsx(n.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(n.Item,{onClick:()=>{},children:"Item 2"})]})]})},m={render:function(t){const[r,h]=j.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(n,{...t,open:r,onOpenChange:h,children:[e.jsxs(n.Trigger,{children:["Controlled (",r?"open":"closed",")"]}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{onClick:()=>h(!1),children:"Close menu"}),e.jsx(n.Item,{onClick:()=>h(!1),children:"Another item"})]})]})})}},D={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Keep open on click"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{closeOnClick:!1,onClick:()=>{},children:"Item (menu stays open)"}),e.jsx(n.Item,{onClick:()=>{},children:"Item (menu closes)"})]})]})},w={render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{showChevron:!1,"aria-label":"More options",children:"⋮"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{onClick:()=>{},children:"Edit"}),e.jsx(n.Item,{onClick:()=>{},children:"Delete"})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,justifyContent:"center"},children:[e.jsxs(n,{children:[e.jsx(n.Trigger,{children:"Left"}),e.jsxs(n.Menu,{placement:"left",align:"start",children:[e.jsx(n.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(n.Item,{onClick:()=>{},children:"Item 2"})]})]}),e.jsxs(n,{children:[e.jsx(n.Trigger,{children:"Right"}),e.jsxs(n.Menu,{placement:"right",align:"start",children:[e.jsx(n.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(n.Item,{onClick:()=>{},children:"Item 2"})]})]})]})},g={parameters:{layout:"fullscreen"},render:()=>{const[o,t]=k.useState(!1);return e.jsx(T,{children:r=>e.jsxs(n,{open:o,onOpenChange:t,children:[e.jsx(n.Trigger,{children:"Open in surface"}),e.jsxs(n.Menu,{container:r,children:[e.jsx(n.Item,{onClick:()=>{},children:"Edit"}),e.jsx(n.Item,{onClick:()=>{},children:"Delete"})]})]})})}},I={parameters:{a11y:{test:"todo"}},render:o=>e.jsxs(n,{...o,children:[e.jsx(n.Trigger,{children:"Actions"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{onClick:()=>{},children:"Edit"}),e.jsx(n.Item,{onClick:()=>{},children:"Delete"})]})]}),play:async({canvasElement:o})=>{const t=C(o),r=C(o.ownerDocument.body);await x.click(t.getByRole("button",{name:/actions/i})),await f(await r.findByRole("menu")).toBeInTheDocument(),await x.keyboard("{Escape}")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Actions</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Duplicate</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Share</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>File</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>New</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Open</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Save</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={() => {}}>Export</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Print</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Sort</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Group>
          <Dropdown.GroupLabel>Sort by</Dropdown.GroupLabel>
          <Dropdown.Item onClick={() => {}}>Name</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Date</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Size</Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Group>
          <Dropdown.GroupLabel>View</Dropdown.GroupLabel>
          <Dropdown.Item onClick={() => {}}>List</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Grid</Dropdown.Item>
        </Dropdown.Group>
      </Dropdown.Menu>
    </Dropdown>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Enabled action</Dropdown.Item>
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args} disabled>
      <Dropdown.Trigger>Disabled dropdown</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Bottom (default)</Dropdown.Trigger>
      <Dropdown.Menu placement="bottom" align="start">
        <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Top</Dropdown.Trigger>
      <Dropdown.Menu placement="top" align="start">
        <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory(args: DropdownProps) {
    const [open, setOpen] = React.useState(false);
    return <>
        <Dropdown {...args} open={open} onOpenChange={setOpen}>
          <Dropdown.Trigger>
            Controlled ({open ? 'open' : 'closed'})
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setOpen(false)}>
              Close menu
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOpen(false)}>
              Another item
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>;
  }
}`,...m.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Keep open on click</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item closeOnClick={false} onClick={() => {}}>
          Item (menu stays open)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item (menu closes)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger showChevron={false} aria-label="More options">
        ⋮
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    justifyContent: 'center'
  }}>
      <Dropdown>
        <Dropdown.Trigger>Left</Dropdown.Trigger>
        <Dropdown.Menu placement="left" align="start">
          <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Trigger>Right</Dropdown.Trigger>
        <Dropdown.Menu placement="right" align="start">
          <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <FixedSurface>
        {surface => <Dropdown open={open} onOpenChange={setOpen}>
            <Dropdown.Trigger>Open in surface</Dropdown.Trigger>
            <Dropdown.Menu container={surface}>
              <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}
      </FixedSurface>;
  }
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    // Base UI menu focus guards trip axe aria-hidden-focus while open / closing.
    a11y: {
      test: 'todo'
    }
  },
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Actions</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /actions/i
    }));
    await expect(await body.findByRole('menu')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...I.parameters?.docs?.source}}};const le=["Default","WithSeparator","WithGroups","WithDisabledItem","Disabled","PlacementBottom","PlacementTop","Controlled","ItemCloseOnClickFalse","TriggerWithoutChevron","PlacementLeftRight","InFixedSurface","OpenInteraction"];export{m as Controlled,s as Default,a as Disabled,g as InFixedSurface,D as ItemCloseOnClickFalse,I as OpenInteraction,c as PlacementBottom,u as PlacementLeftRight,l as PlacementTop,w as TriggerWithoutChevron,p as WithDisabledItem,d as WithGroups,i as WithSeparator,le as __namedExportsOrder,ce as default};
