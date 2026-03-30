import{j as o,R as g}from"./iframe-r25K3dhI.js";import{D as r}from"./Dropdown-DhNBHfzZ.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D5Ob3FIU.js";import"./chevron-down-BI0mAMal.js";import"./createLucideIcon-DNxkPSIp.js";import"./index-Bw078IWv.js";import"./index-DG0XrCAo.js";import"./useTimeout-DPdNIhu_.js";import"./useRenderElement-No00WegA.js";import"./useOnMount-DGveSPuq.js";import"./useId-CUGjsjQ6.js";import"./useOpenChangeComplete-BdRGEo1L.js";import"./InternalBackdrop-BnDN1ez1.js";import"./element-HCgR3DQp.js";import"./owner-CvMgaIeV.js";import"./popupStateMapping-B9iV0EO9.js";import"./FocusGuard-DZgPr34Q.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-fVmVK3H2.js";import"./event-C5KS0zek.js";import"./index-BY-y2TQZ.js";import"./floating-ui.utils-UBj6O_7G.js";import"./useSyncedFloatingRootContext-DFSVtsn2.js";import"./useTransitionStatus-cWRHTfSI.js";import"./useRole-aUvKgIid.js";import"./useListNavigation-Cp7-ffx-.js";import"./composite-CIpbJHJA.js";import"./getPseudoElementBounds-_2P1zn7R.js";import"./useBaseUiId-Cx2MAyB3.js";import"./useButton-CMANLp7x.js";import"./inertValue-C30vMsgd.js";import"./getDisabledMountTransitionStyles-CZhoctbk.js";import"./ToolbarRootContext-CZ_aIS35.js";import"./composite-CQ9nSRS8.js";import"./safePolygon-CC6KFmIJ.js";import"./useCompositeItem-B6Mhzs_3.js";const oo={title:"Components/Dropdown",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown menu built on @base-ui/react Menu. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. Use Dropdown.Trigger to open the menu and Dropdown.Menu with Dropdown.Item for options."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},defaultOpen:{control:"boolean",description:"Initial open state (uncontrolled)"},disabled:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},n={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Actions"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"Edit"}),o.jsx(r.Item,{onClick:()=>{},children:"Duplicate"}),o.jsx(r.Item,{onClick:()=>{},children:"Share"})]})]})},t={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"File"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"New"}),o.jsx(r.Item,{onClick:()=>{},children:"Open"}),o.jsx(r.Item,{onClick:()=>{},children:"Save"}),o.jsx(r.Separator,{}),o.jsx(r.Item,{onClick:()=>{},children:"Export"}),o.jsx(r.Item,{onClick:()=>{},children:"Print"})]})]})},s={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Sort"}),o.jsxs(r.Menu,{children:[o.jsxs(r.Group,{children:[o.jsx(r.GroupLabel,{children:"Sort by"}),o.jsx(r.Item,{onClick:()=>{},children:"Name"}),o.jsx(r.Item,{onClick:()=>{},children:"Date"}),o.jsx(r.Item,{onClick:()=>{},children:"Size"})]}),o.jsx(r.Separator,{}),o.jsxs(r.Group,{children:[o.jsx(r.GroupLabel,{children:"View"}),o.jsx(r.Item,{onClick:()=>{},children:"List"}),o.jsx(r.Item,{onClick:()=>{},children:"Grid"})]})]})]})},p={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Options"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"Enabled action"}),o.jsx(r.Item,{disabled:!0,children:"Disabled action"}),o.jsx(r.Item,{onClick:()=>{},children:"Another action"})]})]})},d={render:e=>o.jsxs(r,{...e,disabled:!0,children:[o.jsx(r.Trigger,{children:"Disabled dropdown"}),o.jsx(r.Menu,{children:o.jsx(r.Item,{onClick:()=>{},children:"Item"})})]})},i={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Bottom (default)"}),o.jsxs(r.Menu,{placement:"bottom",align:"start",children:[o.jsx(r.Item,{onClick:()=>{},children:"Item 1"}),o.jsx(r.Item,{onClick:()=>{},children:"Item 2"})]})]})},c={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Top"}),o.jsxs(r.Menu,{placement:"top",align:"start",children:[o.jsx(r.Item,{onClick:()=>{},children:"Item 1"}),o.jsx(r.Item,{onClick:()=>{},children:"Item 2"})]})]})},a={render:function(u){const[w,D]=g.useState(!1);return o.jsx(o.Fragment,{children:o.jsxs(r,{...u,open:w,onOpenChange:D,children:[o.jsxs(r.Trigger,{children:["Controlled (",w?"open":"closed",")"]}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>D(!1),children:"Close menu"}),o.jsx(r.Item,{onClick:()=>D(!1),children:"Another item"})]})]})})}},l={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{children:"Keep open on click"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{closeOnClick:!1,onClick:()=>{},children:"Item (menu stays open)"}),o.jsx(r.Item,{onClick:()=>{},children:"Item (menu closes)"})]})]})},m={render:e=>o.jsxs(r,{...e,children:[o.jsx(r.Trigger,{showChevron:!1,"aria-label":"More options",children:"⋮"}),o.jsxs(r.Menu,{children:[o.jsx(r.Item,{onClick:()=>{},children:"Edit"}),o.jsx(r.Item,{onClick:()=>{},children:"Delete"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Enabled action</Dropdown.Item>
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ro=["Default","WithSeparator","WithGroups","WithDisabledItem","Disabled","PlacementBottom","PlacementTop","Controlled","ItemCloseOnClickFalse","TriggerWithoutChevron"];export{a as Controlled,n as Default,d as Disabled,l as ItemCloseOnClickFalse,i as PlacementBottom,c as PlacementTop,m as TriggerWithoutChevron,p as WithDisabledItem,s as WithGroups,t as WithSeparator,ro as __namedExportsOrder,oo as default};
