import{j as o,R as g}from"./iframe-FTALBTsX.js";import{D as r}from"./Dropdown-DySkqxIi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-7ho3N2pU.js";import"./chevron-down-DejJde06.js";import"./createLucideIcon-C1L5cuv0.js";import"./index-DyY6gtxY.js";import"./index-dC5wm7R4.js";import"./useTimeout-CRti7X34.js";import"./useRenderElement-a4eQVBeo.js";import"./useOnMount-D1r-mF9e.js";import"./useId-CKMJ5OpD.js";import"./useOpenChangeComplete-DtMFlPn3.js";import"./InternalBackdrop-B8gkHPg9.js";import"./element-CUwn0016.js";import"./owner-CvMgaIeV.js";import"./popupStateMapping-iccZUJX9.js";import"./FocusGuard-BgVb_Qfm.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-BpjHZ87m.js";import"./event-Ddt34eui.js";import"./index-DY_se7ls.js";import"./floating-ui.utils-CuswCWQo.js";import"./useSyncedFloatingRootContext-C7pTFqlI.js";import"./useTransitionStatus-BfhTAREj.js";import"./useRole-DD2EgxZP.js";import"./useListNavigation-C-8vgEne.js";import"./composite-CfFJCmEp.js";import"./getPseudoElementBounds-BC59-6Iy.js";import"./useBaseUiId-B1WQM7O1.js";import"./useButton-DiJFz0S5.js";import"./inertValue--8Y1F1cx.js";import"./getDisabledMountTransitionStyles-CEuuaZWY.js";import"./ToolbarRootContext-DM34CVHN.js";import"./composite-CxUmyzbs.js";import"./safePolygon-DSlVWi6r.js";import"./useCompositeItem-DTe9FT01.js";import"./useClick-Dwm0IHCj.js";import"./useFocus-BIlG3JtM.js";const eo={title:"Components/Dropdown",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown menu built on @base-ui/react Menu. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. Use Dropdown.Trigger to open the menu and Dropdown.Menu with Dropdown.Item for options."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},defaultOpen:{control:"boolean",description:"Initial open state (uncontrolled)"},disabled:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},n={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Actions"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"Edit"}),o.jsx(r.Item,{onClick:()=>{},children:"Duplicate"}),o.jsx(r.Item,{onClick:()=>{},children:"Share"})]})]})},t={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"File"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"New"}),o.jsx(r.Item,{onClick:()=>{},children:"Open"}),o.jsx(r.Item,{onClick:()=>{},children:"Save"}),o.jsx(r.Separator,{}),o.jsx(r.Item,{onClick:()=>{},children:"Export"}),o.jsx(r.Item,{onClick:()=>{},children:"Print"})]})]})},p={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Sort"}),o.jsxs(r.Menu,{children:[o.jsxs(r.Group,{children:[o.jsx(r.GroupLabel,{children:"Sort by"}),o.jsx(r.Item,{onClick:()=>{},children:"Name"}),o.jsx(r.Item,{onClick:()=>{},children:"Date"}),o.jsx(r.Item,{onClick:()=>{},children:"Size"})]}),o.jsx(r.Separator,{}),o.jsxs(r.Group,{children:[o.jsx(r.GroupLabel,{children:"View"}),o.jsx(r.Item,{onClick:()=>{},children:"List"}),o.jsx(r.Item,{onClick:()=>{},children:"Grid"})]})]})]})},s={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Options"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"Enabled action"}),o.jsx(r.Item,{disabled:!0,children:"Disabled action"}),o.jsx(r.Item,{onClick:()=>{},children:"Another action"})]})]})},d={render:e=>o.jsxs(r,{...e,disabled:!0,children:[o.jsx(r.Trigger,{children:"Disabled dropdown"}),o.jsx(r.Menu,{children:o.jsx(r.Item,{onClick:()=>{},children:"Item"})})]})},i={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Bottom (default)"}),o.jsxs(r.Menu,{placement:"bottom",align:"start",children:[o.jsx(r.Item,{onClick:()=>{},children:"Item 1"}),o.jsx(r.Item,{onClick:()=>{},children:"Item 2"})]})]})},c={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Top"}),o.jsxs(r.Menu,{placement:"top",align:"start",children:[o.jsx(r.Item,{onClick:()=>{},children:"Item 1"}),o.jsx(r.Item,{onClick:()=>{},children:"Item 2"})]})]})},a={render:function(u){const[w,D]=g.useState(!1);return o.jsx(o.Fragment,{children:o.jsxs(r,{...u,open:w,onOpenChange:D,children:[o.jsxs(r.Trigger,{children:["Controlled (",w?"open":"closed",")"]}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>D(!1),children:"Close menu"}),o.jsx(r.Item,{onClick:()=>D(!1),children:"Another item"})]})]})})}},l={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Keep open on click"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{closeOnClick:!1,onClick:()=>{},children:"Item (menu stays open)"}),o.jsx(r.Item,{onClick:()=>{},children:"Item (menu closes)"})]})]})},m={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{showChevron:!1,"aria-label":"More options",children:"⋮"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"Edit"}),o.jsx(r.Item,{onClick:()=>{},children:"Delete"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Actions</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Duplicate</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Share</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Enabled action</Dropdown.Item>
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args} disabled>
      <Dropdown.Trigger>Disabled dropdown</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Bottom (default)</Dropdown.Trigger>
      <Dropdown.Menu placement="bottom" align="start">
        <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Top</Dropdown.Trigger>
      <Dropdown.Menu placement="top" align="start">
        <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Keep open on click</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item closeOnClick={false} onClick={() => {}}>
          Item (menu stays open)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item (menu closes)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger showChevron={false} aria-label="More options">
        ⋮
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...m.parameters?.docs?.source}}};const no=["Default","WithSeparator","WithGroups","WithDisabledItem","Disabled","PlacementBottom","PlacementTop","Controlled","ItemCloseOnClickFalse","TriggerWithoutChevron"];export{a as Controlled,n as Default,d as Disabled,l as ItemCloseOnClickFalse,i as PlacementBottom,c as PlacementTop,m as TriggerWithoutChevron,s as WithDisabledItem,p as WithGroups,t as WithSeparator,no as __namedExportsOrder,eo as default};
