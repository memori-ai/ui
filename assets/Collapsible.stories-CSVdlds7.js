import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as b}from"./iframe-B9uOJsSL.js";import{C as s}from"./Collapsible-CAOhkwWP.js";import"./preload-helper-Ct5FWWRu.js";import"./index-dXCIleMP.js";import"./chevron-down-CaJWD5Ik.js";import"./createLucideIcon-VaSbAUOD.js";import"./useRenderElement-DmmzgYVq.js";import"./useControlled-_oS37XeA.js";import"./useBaseUiId-B_mqZa20.js";import"./useId-DebusY3o.js";import"./createBaseUIEventDetails-B2md9Uml.js";import"./useOpenChangeComplete-CsetHOUX.js";import"./index-t9fGC64O.js";import"./index-C29no7ld.js";import"./useTransitionStatus-DdKVSL9F.js";import"./useButton-Cfqxct3j.js";const E={title:"Components/Collapsible",component:s,tags:["autodocs"],argTypes:{defaultOpen:{control:{type:"boolean"},description:"Whether the collapsible is open by default (uncontrolled)"},open:{control:{type:"boolean"},description:"Whether the collapsible is open (controlled)"},disabled:{control:{type:"boolean"},description:"If true, the collapsible is disabled"},keepMounted:{control:{type:"boolean"},description:"Whether to keep the panel mounted when closed"},summary:{control:{type:"text"},description:"The content that appears in the trigger button"}},parameters:{controls:{expanded:!0},docs:{description:{component:"A collapsible component that allows users to expand and collapse content. Built on @base-ui/react with full accessibility support (WCAG 2.1 AA+)."}}}},r={args:{summary:"Click to expand",children:e.jsx("p",{children:"This is the collapsible content. It can contain any React elements."})}},t={args:{summary:"Click to collapse",defaultOpen:!0,children:e.jsx("p",{children:"This collapsible is open by default."})}},a={args:{summary:"Show more details",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This collapsible contains multiple elements:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"List item 1"}),e.jsx("li",{children:"List item 2"}),e.jsx("li",{children:"List item 3"})]}),e.jsx("p",{children:"And more content after the list."}),e.jsxs("figure",{children:[e.jsx("img",{src:"https://www.aisuru.com/images/aisuru/og-image.png",alt:"Placeholder",style:{maxWidth:"100%",height:"auto"}}),e.jsx("figcaption",{children:"Placeholder image"})]})]})}},o={render:h=>{const[l,u]=b.useState(!1);return e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>u(!l),style:{marginBottom:"1rem"},children:["Toggle from outside: ",l?"Close":"Open"]}),e.jsxs(s,{...h,open:l,onOpenChange:u,summary:"Controlled collapsible",children:[e.jsx("p",{children:"This collapsible is controlled by an external button."}),e.jsxs("p",{children:["Current state: ",l?"Open":"Closed"]})]})]})},args:{summary:"Controlled collapsible",children:e.jsx("p",{children:"This collapsible is controlled externally."})}},i={args:{summary:"Disabled collapsible",disabled:!0,children:e.jsx("p",{children:"This collapsible is disabled and cannot be toggled."})}},n={args:{summary:"Keep mounted (content stays in DOM)",keepMounted:!0,children:e.jsx("p",{children:"This collapsible keeps its content in the DOM even when closed. Check the DOM inspector to verify."})}},c={args:{summary:"Custom styled collapsible",className:"custom-collapsible",triggerClassName:"custom-trigger",panelClassName:"custom-panel",style:{border:"1px solid var(--memori-neutral)",borderRadius:"var(--memori-radius-box)",padding:"var(--memori-spacing-sm)"},children:e.jsxs("div",{children:[e.jsx("p",{children:"This collapsible has custom styling applied."}),e.jsx("p",{children:"You can customize the root, trigger, and panel separately."})]})}},p={args:{summary:"Multiple collapsibles example",children:e.jsx("p",{children:"See the full story for multiple collapsibles."})},render:()=>e.jsxs("div",{children:[e.jsx(s,{summary:"First collapsible",children:e.jsx("p",{children:"Content for the first collapsible."})}),e.jsx(s,{summary:"Second collapsible",children:e.jsx("p",{children:"Content for the second collapsible."})}),e.jsx(s,{summary:"Third collapsible",defaultOpen:!0,children:e.jsx("p",{children:"Content for the third collapsible (open by default)."})})]})},m={args:{summary:e.jsxs("span",{children:[e.jsx("strong",{children:"Bold summary"})," with ",e.jsx("em",{children:"italic text"})]}),children:e.jsx("p",{children:"The summary can be any React node, not just plain text. This allows for rich formatting and custom components."})}},d={args:{summary:"Accessible collapsible","aria-label":"Expand to see accessibility information",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Accessibility Features"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Proper ARIA attributes (aria-expanded, aria-controls)"}),e.jsx("li",{children:"Keyboard navigation support (Enter, Space)"}),e.jsx("li",{children:"Focus management with focus-visible"}),e.jsx("li",{children:"Screen reader announcements"}),e.jsx("li",{children:"WCAG 2.1 AA+ compliant"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Click to expand',
    children: <p>This is the collapsible content. It can contain any React elements.</p>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Click to collapse',
    defaultOpen: true,
    children: <p>This collapsible is open by default.</p>
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Show more details',
    children: <>
        <p>This collapsible contains multiple elements:</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>And more content after the list.</p>
        <figure>
          <img src="https://www.aisuru.com/images/aisuru/og-image.png" alt="Placeholder" style={{
          maxWidth: '100%',
          height: 'auto'
        }} />
          <figcaption>Placeholder image</figcaption>
        </figure>
      </>
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <div>
        <button onClick={() => setOpen(!open)} style={{
        marginBottom: '1rem'
      }}>
          Toggle from outside: {open ? 'Close' : 'Open'}
        </button>
        <Collapsible {...args} open={open} onOpenChange={setOpen} summary="Controlled collapsible">
          <p>This collapsible is controlled by an external button.</p>
          <p>Current state: {open ? 'Open' : 'Closed'}</p>
        </Collapsible>
      </div>;
  },
  args: {
    summary: 'Controlled collapsible',
    children: <p>This collapsible is controlled externally.</p>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Disabled collapsible',
    disabled: true,
    children: <p>This collapsible is disabled and cannot be toggled.</p>
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Keep mounted (content stays in DOM)',
    keepMounted: true,
    children: <p>
        This collapsible keeps its content in the DOM even when closed. Check
        the DOM inspector to verify.
      </p>
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Custom styled collapsible',
    className: 'custom-collapsible',
    triggerClassName: 'custom-trigger',
    panelClassName: 'custom-panel',
    style: {
      border: '1px solid var(--memori-neutral)',
      borderRadius: 'var(--memori-radius-box)',
      padding: 'var(--memori-spacing-sm)'
    },
    children: <div>
        <p>This collapsible has custom styling applied.</p>
        <p>You can customize the root, trigger, and panel separately.</p>
      </div>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Multiple collapsibles example',
    children: <p>See the full story for multiple collapsibles.</p>
  },
  render: () => <div>
      <Collapsible summary="First collapsible">
        <p>Content for the first collapsible.</p>
      </Collapsible>
      <Collapsible summary="Second collapsible">
        <p>Content for the second collapsible.</p>
      </Collapsible>
      <Collapsible summary="Third collapsible" defaultOpen>
        <p>Content for the third collapsible (open by default).</p>
      </Collapsible>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    summary: <span>
        <strong>Bold summary</strong> with <em>italic text</em>
      </span>,
    children: <p>
        The summary can be any React node, not just plain text. This allows for
        rich formatting and custom components.
      </p>
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Accessible collapsible',
    'aria-label': 'Expand to see accessibility information',
    children: <div>
        <h3>Accessibility Features</h3>
        <ul>
          <li>Proper ARIA attributes (aria-expanded, aria-controls)</li>
          <li>Keyboard navigation support (Enter, Space)</li>
          <li>Focus management with focus-visible</li>
          <li>Screen reader announcements</li>
          <li>WCAG 2.1 AA+ compliant</li>
        </ul>
      </div>
  }
}`,...d.parameters?.docs?.source}}};const N=["Default","DefaultOpen","WithComplexContent","Controlled","Disabled","KeepMounted","WithCustomStyling","MultipleCollapsibles","WithReactNodeSummary","AccessibilityExample"];export{d as AccessibilityExample,o as Controlled,r as Default,t as DefaultOpen,i as Disabled,n as KeepMounted,p as MultipleCollapsibles,a as WithComplexContent,c as WithCustomStyling,m as WithReactNodeSummary,N as __namedExportsOrder,E as default};
