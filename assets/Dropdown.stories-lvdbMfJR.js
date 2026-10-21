import{j as e,R as j,r as k}from"./iframe-DjI3B0i0.js";import{F as T}from"./decorators-DtpahO1u.js";import{D as o}from"./Dropdown-DnHkX4DM.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BGPjpOUk.js";import"./chevron-down-kPZ4jPjb.js";import"./createLucideIcon-BaObivHf.js";import"./index-I16Jd1FV.js";import"./index-CNOc7DI3.js";import"./useTimeout-BPL9ux8o.js";import"./useRenderElement-CVx4SfIX.js";import"./useOnMount-BoL-krPK.js";import"./useStableCallback-DU3AnZUs.js";import"./useId-CE3CDeIE.js";import"./useOpenChangeComplete-nuIEQKZP.js";import"./useValueAsRef-DkiTdh4z.js";import"./InternalBackdrop-R16uM_6v.js";import"./floating-ui.utils.dom-CHHzM94Q.js";import"./element-BBnl8QTn.js";import"./owner-CvMgaIeV.js";import"./popupStateMapping-BfhHkCBx.js";import"./FocusGuard-DbSRchLm.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-DC1sETH_.js";import"./event--scZCAOL.js";import"./index-BIbLIybz.js";import"./DirectionContext-FcQt2kqv.js";import"./useSyncedFloatingRootContext-GejH5Xj-.js";import"./useTransitionStatus-bSalB6Ru.js";import"./useRole-DOrcoQwm.js";import"./useListNavigation-BX_DiM9c.js";import"./useCompositeListItem-fBUeGxzI.js";import"./getPseudoElementBounds-DqmsQkU1.js";import"./useButton-B6Y2qI0d.js";import"./inertValue-eH9xuKED.js";import"./getDisabledMountTransitionStyles-i6d7-XUd.js";import"./ToolbarRootContext-DxB3T9do.js";import"./composite-BN9okjTu.js";import"./safePolygon-B1hXvy0J.js";import"./CompositeItem-DIdYOTTg.js";import"./useCompositeItem-C5w-IIKm.js";import"./useClick-Dqw5jTH-.js";import"./useFocus-6-22e9_-.js";const{expect:f,userEvent:x,within:C}=__STORYBOOK_MODULE_TEST__,we={title:"Azioni e navigazione/Dropdown",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown menu built on @base-ui/react Menu. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. Use Dropdown.Trigger to open the menu and Dropdown.Menu with Dropdown.Item for options."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},defaultOpen:{control:"boolean",description:"Initial open state (uncontrolled)"},disabled:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},s={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Actions"}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{onClick:()=>{},children:"Edit"}),e.jsx(o.Item,{onClick:()=>{},children:"Duplicate"}),e.jsx(o.Item,{onClick:()=>{},children:"Share"})]})]})},i={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"File"}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{onClick:()=>{},children:"New"}),e.jsx(o.Item,{onClick:()=>{},children:"Open"}),e.jsx(o.Item,{onClick:()=>{},children:"Save"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>{},children:"Export"}),e.jsx(o.Item,{onClick:()=>{},children:"Print"})]})]})},d={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Sort"}),e.jsxs(o.Menu,{children:[e.jsxs(o.Group,{children:[e.jsx(o.GroupLabel,{children:"Sort by"}),e.jsx(o.Item,{onClick:()=>{},children:"Name"}),e.jsx(o.Item,{onClick:()=>{},children:"Date"}),e.jsx(o.Item,{onClick:()=>{},children:"Size"})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{children:[e.jsx(o.GroupLabel,{children:"View"}),e.jsx(o.Item,{onClick:()=>{},children:"List"}),e.jsx(o.Item,{onClick:()=>{},children:"Grid"})]})]})]})},p={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Options"}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{onClick:()=>{},children:"Enabled action"}),e.jsx(o.Item,{disabled:!0,children:"Disabled action"}),e.jsx(o.Item,{onClick:()=>{},children:"Another action"})]})]})},a={render:n=>e.jsxs(o,{...n,disabled:!0,children:[e.jsx(o.Trigger,{children:"Disabled dropdown"}),e.jsx(o.Menu,{children:e.jsx(o.Item,{onClick:()=>{},children:"Item"})})]})},c={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Bottom (default)"}),e.jsxs(o.Menu,{placement:"bottom",align:"start",children:[e.jsx(o.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(o.Item,{onClick:()=>{},children:"Item 2"})]})]})},l={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Top"}),e.jsxs(o.Menu,{placement:"top",align:"start",children:[e.jsx(o.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(o.Item,{onClick:()=>{},children:"Item 2"})]})]})},m={render:function(t){const[r,h]=j.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(o,{...t,open:r,onOpenChange:h,children:[e.jsxs(o.Trigger,{children:["Controlled (",r?"open":"closed",")"]}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{onClick:()=>h(!1),children:"Close menu"}),e.jsx(o.Item,{onClick:()=>h(!1),children:"Another item"})]})]})})}},D={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Keep open on click"}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{closeOnClick:!1,onClick:()=>{},children:"Item (menu stays open)"}),e.jsx(o.Item,{onClick:()=>{},children:"Item (menu closes)"})]})]})},w={render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{showChevron:!1,"aria-label":"More options",children:"⋮"}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{onClick:()=>{},children:"Edit"}),e.jsx(o.Item,{onClick:()=>{},children:"Delete"})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,justifyContent:"center"},children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{children:"Left"}),e.jsxs(o.Menu,{placement:"left",align:"start",children:[e.jsx(o.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(o.Item,{onClick:()=>{},children:"Item 2"})]})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{children:"Right"}),e.jsxs(o.Menu,{placement:"right",align:"start",children:[e.jsx(o.Item,{onClick:()=>{},children:"Item 1"}),e.jsx(o.Item,{onClick:()=>{},children:"Item 2"})]})]})]})},g={parameters:{layout:"fullscreen"},render:()=>{const[n,t]=k.useState(!1);return e.jsx(T,{children:r=>e.jsxs(o,{open:n,onOpenChange:t,children:[e.jsx(o.Trigger,{children:"Open in surface"}),e.jsxs(o.Menu,{container:r,children:[e.jsx(o.Item,{onClick:()=>{},children:"Edit"}),e.jsx(o.Item,{onClick:()=>{},children:"Delete"})]})]})})}},I={parameters:{a11y:{test:"todo"}},render:n=>e.jsxs(o,{...n,children:[e.jsx(o.Trigger,{children:"Actions"}),e.jsxs(o.Menu,{children:[e.jsx(o.Item,{onClick:()=>{},children:"Edit"}),e.jsx(o.Item,{onClick:()=>{},children:"Delete"})]})]}),play:async({canvasElement:n})=>{const t=C(n),r=C(n.ownerDocument.body);await x.click(t.getByRole("button",{name:/actions/i})),await f(await r.findByRole("menu")).toBeInTheDocument(),await x.keyboard("{Escape}")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const ue=["Default","WithSeparator","WithGroups","WithDisabledItem","Disabled","PlacementBottom","PlacementTop","Controlled","ItemCloseOnClickFalse","TriggerWithoutChevron","PlacementLeftRight","InFixedSurface","OpenInteraction"];export{m as Controlled,s as Default,a as Disabled,g as InFixedSurface,D as ItemCloseOnClickFalse,I as OpenInteraction,c as PlacementBottom,u as PlacementLeftRight,l as PlacementTop,w as TriggerWithoutChevron,p as WithDisabledItem,d as WithGroups,i as WithSeparator,ue as __namedExportsOrder,we as default};
