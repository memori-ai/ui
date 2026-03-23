import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as g}from"./iframe-CbEK_EJX.js";import{D as e}from"./Dropdown-B7J5N5IQ.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DVR74M8E.js";import"./chevron-down-AW84GjcW.js";import"./createLucideIcon-COQIoYGc.js";import"./index-JPhY27D0.js";import"./index-BBbXCaXB.js";import"./element-CBJot1CC.js";import"./floating-ui.utils.dom-BTBrBOQX.js";import"./useOnMount-B9Z1vFbt.js";import"./useId-BLAdW_QV.js";import"./useOpenChangeComplete-upUSOkv9.js";import"./InternalBackdrop-DB5iZshX.js";import"./inertValue-BHeuJEMF.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-DBYPZbgU.js";import"./index-BDAiHyKS.js";import"./getDisabledMountTransitionStyles-D-GwVHIp.js";import"./useRole-CYqhQC_x.js";import"./useTransitionStatus-D8c7vBXt.js";import"./getPseudoElementBounds-BcM5u6g9.js";import"./useBaseUiId-BtXgg0XL.js";import"./useButton-Bzn5i0Km.js";import"./ToolbarRootContext-VlCVF-H6.js";import"./composite-DPnywRGh.js";const _={title:"Components/Dropdown",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown menu built on @base-ui/react Menu. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. Use Dropdown.Trigger to open the menu and Dropdown.Menu with Dropdown.Item for options."}}},argTypes:{open:{control:"boolean",description:"Controlled open state"},defaultOpen:{control:"boolean",description:"Initial open state (uncontrolled)"},disabled:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},n={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"Actions"}),o.jsxs(e.Menu,{children:[o.jsx(e.Item,{onClick:()=>{},children:"Edit"}),o.jsx(e.Item,{onClick:()=>{},children:"Duplicate"}),o.jsx(e.Item,{onClick:()=>{},children:"Share"})]})]})},t={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"File"}),o.jsxs(e.Menu,{children:[o.jsx(e.Item,{onClick:()=>{},children:"New"}),o.jsx(e.Item,{onClick:()=>{},children:"Open"}),o.jsx(e.Item,{onClick:()=>{},children:"Save"}),o.jsx(e.Separator,{}),o.jsx(e.Item,{onClick:()=>{},children:"Export"}),o.jsx(e.Item,{onClick:()=>{},children:"Print"})]})]})},s={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"Sort"}),o.jsxs(e.Menu,{children:[o.jsxs(e.Group,{children:[o.jsx(e.GroupLabel,{children:"Sort by"}),o.jsx(e.Item,{onClick:()=>{},children:"Name"}),o.jsx(e.Item,{onClick:()=>{},children:"Date"}),o.jsx(e.Item,{onClick:()=>{},children:"Size"})]}),o.jsx(e.Separator,{}),o.jsxs(e.Group,{children:[o.jsx(e.GroupLabel,{children:"View"}),o.jsx(e.Item,{onClick:()=>{},children:"List"}),o.jsx(e.Item,{onClick:()=>{},children:"Grid"})]})]})]})},d={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"Options"}),o.jsxs(e.Menu,{children:[o.jsx(e.Item,{onClick:()=>{},children:"Enabled action"}),o.jsx(e.Item,{disabled:!0,children:"Disabled action"}),o.jsx(e.Item,{onClick:()=>{},children:"Another action"})]})]})},p={render:r=>o.jsxs(e,{...r,disabled:!0,children:[o.jsx(e.Trigger,{children:"Disabled dropdown"}),o.jsx(e.Menu,{children:o.jsx(e.Item,{onClick:()=>{},children:"Item"})})]})},i={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"Bottom (default)"}),o.jsxs(e.Menu,{placement:"bottom",align:"start",children:[o.jsx(e.Item,{onClick:()=>{},children:"Item 1"}),o.jsx(e.Item,{onClick:()=>{},children:"Item 2"})]})]})},c={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"Top"}),o.jsxs(e.Menu,{placement:"top",align:"start",children:[o.jsx(e.Item,{onClick:()=>{},children:"Item 1"}),o.jsx(e.Item,{onClick:()=>{},children:"Item 2"})]})]})},a={render:function(u){const[w,D]=g.useState(!1);return o.jsx(o.Fragment,{children:o.jsxs(e,{...u,open:w,onOpenChange:D,children:[o.jsxs(e.Trigger,{children:["Controlled (",w?"open":"closed",")"]}),o.jsxs(e.Menu,{children:[o.jsx(e.Item,{onClick:()=>D(!1),children:"Close menu"}),o.jsx(e.Item,{onClick:()=>D(!1),children:"Another item"})]})]})})}},l={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{children:"Keep open on click"}),o.jsxs(e.Menu,{children:[o.jsx(e.Item,{closeOnClick:!1,onClick:()=>{},children:"Item (menu stays open)"}),o.jsx(e.Item,{onClick:()=>{},children:"Item (menu closes)"})]})]})},m={render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Trigger,{showChevron:!1,"aria-label":"More options",children:"⋮"}),o.jsxs(e.Menu,{children:[o.jsx(e.Item,{onClick:()=>{},children:"Edit"}),o.jsx(e.Item,{onClick:()=>{},children:"Delete"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args}>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Enabled action</Dropdown.Item>
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <Dropdown {...args} disabled>
      <Dropdown.Trigger>Disabled dropdown</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const U=["Default","WithSeparator","WithGroups","WithDisabledItem","Disabled","PlacementBottom","PlacementTop","Controlled","ItemCloseOnClickFalse","TriggerWithoutChevron"];export{a as Controlled,n as Default,p as Disabled,l as ItemCloseOnClickFalse,i as PlacementBottom,c as PlacementTop,m as TriggerWithoutChevron,d as WithDisabledItem,s as WithGroups,t as WithSeparator,U as __namedExportsOrder,_ as default};
