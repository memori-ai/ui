import{j as e,r as k}from"./iframe-DvN1O8zr.js";import{F as P}from"./decorators-BRuLgI1M.js";import{T as r}from"./Tooltip-BdsJfq8Z.js";import{c as I}from"./createLucideIcon-spauhAJQ.js";import{B as n}from"./Button-DRT6abBc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./useRenderElement-C14Ha64R.js";import"./useBaseUiId-C6YQlm-N.js";import"./useId-CxFSyxB1.js";import"./index-Cvf4B1Iz.js";import"./index-GoqsI4IK.js";import"./useSyncedFloatingRootContext-B2zFtTgR.js";import"./useStableCallback-CElKwhMG.js";import"./useTransitionStatus-o5Ok2Zm5.js";import"./useOpenChangeComplete-CSERUBMO.js";import"./useValueAsRef-CQA32jHK.js";import"./useOnMount-a7LL2oC2.js";import"./popupStateMapping-C8STduq9.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-6CwoA7aF.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-qv1hDoHR.js";import"./event-BggRprRz.js";import"./index-ainZ7i9v.js";import"./useFocus-C-iPUaOo.js";import"./safePolygon-kGAKwU3T.js";import"./getDisabledMountTransitionStyles-1v6fVsC0.js";import"./DirectionContext-DBJJuJ3j.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-Bs4eA0x7.js";import"./getCssDimensions-oN1YxLOu.js";import"./useButton-CvJTrdXl.js";import"./loader-circle---oKdcgR.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],A=I("circle-question-mark",H),{expect:B,fn:w,userEvent:O,within:S}=__STORYBOOK_MODULE_TEST__,i={paddingTop:"calc(var(--memori-spacing-5xl) * 2)"},ge={title:"Overlay/Tooltip",component:r,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","topLeft","topRight","bottomLeft","bottomRight"]},disabled:{control:"boolean"},arrow:{control:"boolean"},open:{control:"boolean"},visible:{control:"boolean"},enterDelay:{control:{type:"number",min:0,step:50}},leaveDelay:{control:{type:"number",min:0,step:50}},sideOffset:{control:{type:"number",min:0,step:1}},disableHoverablePopup:{control:"boolean"},onOpenChange:{action:"openChange"}},parameters:{controls:{expanded:!0}},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...i},children:e.jsx(r,{...t,onOpenChange:w()})})},c={args:{title:"Here is some tooltip content",children:e.jsx("span",{children:"Hover or focus me"})}},p={args:{title:"Saved to your library",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--memori-spacing-xs)"},children:[e.jsx(A,{"aria-hidden":!0,size:18,strokeWidth:2}),"Label"]})}},d={args:{title:e.jsxs("span",{children:["JSX content with a"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),children:e.jsx("span",{children:"Hover me"})}},m={args:{title:"Tooltip is disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},u={name:"Disabled button",args:{title:"Save is unavailable until the form is valid",enterDelay:0,leaveDelay:0,children:e.jsx(n,{disabled:!0,type:"button",children:"Save"})}},h={args:{title:"Opened via the `open` prop (try toggling in Controls)",children:e.jsx("span",{children:"Anchor"}),open:!0}},g={name:"Visible (legacy prop)",args:{title:"Uses deprecated `visible` → maps to `open`",children:e.jsx("span",{children:"Anchor"}),visible:!0}},v={args:{title:"Placement left",children:e.jsx("span",{children:"Hover me"}),placement:"left",open:!0},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...i},children:e.jsx(r,{...t,onOpenChange:w()})})},y={args:{title:"Placement right",children:e.jsx("span",{children:"Hover me"}),placement:"right",open:!0}},f={args:{title:"top-start",children:e.jsx("span",{children:"Hover me"}),placement:"top-start",open:!0},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...i},children:e.jsx(r,{...t,onOpenChange:w()})})},b={args:{title:"top-end",children:e.jsx("span",{children:"Hover me"}),placement:"top-end",open:!0}},x={args:{title:"Arrow hidden",children:e.jsx("span",{children:"Hover me"}),arrow:!1,open:!0}},T={args:{title:"enterDelay 200ms · leaveDelay 150ms",children:e.jsx("span",{children:"Hover me"}),enterDelay:200,leaveDelay:150}},j={parameters:{layout:"fullscreen"},args:{title:"Clipped tooltip — check wrap and collision inside the surface",children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"}),enterDelay:0,leaveDelay:0},render:()=>{const[t,o]=k.useState(!0);return e.jsx(P,{children:a=>e.jsx(r,{open:t,onOpenChange:o,container:a,title:"Clipped tooltip — check wrap and collision inside the surface",enterDelay:0,leaveDelay:0,children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"})})})}},D={args:{title:"Interactive tooltip",children:e.jsx("span",{tabIndex:0,children:"Focus me"}),enterDelay:0,leaveDelay:0},play:async({canvasElement:t})=>{const o=S(t),a=S(t.ownerDocument.body),l=o.getByText("Focus me");l.focus(),await O.hover(l),await B(await a.findByText("Interactive tooltip")).toBeInTheDocument()}},C={name:"Press to toggle (openOnPress)",args:{title:"Tap or click to toggle",openOnPress:!0,children:e.jsx("button",{type:"button",children:"Press me"})},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...i},children:e.jsx(r,{...t})}),play:async({canvasElement:t})=>{const o=S(t),a=S(t.ownerDocument.body),l=o.getByRole("button",{name:"Press me"});await O.click(l),await B(await a.findByText("Tap or click to toggle")).toBeInTheDocument()}},s={name:"Touch behavior",args:{title:"Configure the provider first",children:null},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--memori-spacing-lg)",alignItems:"center",...i},children:[e.jsx(r,{title:"Configure the provider first",children:e.jsx(n,{disabled:!0,children:"Create MCP"})}),e.jsx(r,{title:"Configure the provider first (keyboard focusable)",children:e.jsx(n,{disabled:!0,focusableWhenDisabled:!0,children:"Create MCP"})}),e.jsx(r,{title:"Connected",children:e.jsx("span",{"aria-label":"Status",role:"img",style:{display:"inline-block",width:"0.75rem",height:"0.75rem",borderRadius:"50%",background:"var(--memori-success, green)"}})}),e.jsx(r,{title:"Edit (auto: no tooltip on tap)",children:e.jsx(n,{variant:"ghost",children:"Edit"})}),e.jsx(r,{title:"Delete (tap: action, then tooltip)",touchBehavior:"tap",children:e.jsx(n,{variant:"ghost",children:"Delete"})}),e.jsx(r,{title:"Archive (hold to read)",touchBehavior:"longPress",children:e.jsx(n,{variant:"ghost",children:"Archive"})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Here is some tooltip content',
    children: <span>Hover or focus me</span>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Saved to your library',
    children: <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--memori-spacing-xs)'
    }}>
        <HelpCircle aria-hidden size={18} strokeWidth={2} />
        Label
      </span>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: <span>
        JSX content with a{' '}
        <a href="https://memori.ai" rel="noopener noreferrer" target="_blank">
          link
        </a>
        .
      </span>,
    children: <span>Hover me</span>
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip is disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled button',
  args: {
    title: 'Save is unavailable until the form is valid',
    enterDelay: 0,
    leaveDelay: 0,
    children: <Button disabled type="button">
        Save
      </Button>
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Opened via the \`open\` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated \`visible\` → maps to \`open\`',
    children: <span>Anchor</span>,
    visible: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement left',
    children: <span>Hover me</span>,
    placement: 'left',
    open: true
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    ...demoPadding
  }}>
      <Tooltip {...args} onOpenChange={fn()} />
    </div>
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement right',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-start',
    children: <span>Hover me</span>,
    placement: 'top-start',
    open: true
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    ...demoPadding
  }}>
      <Tooltip {...args} onOpenChange={fn()} />
    </div>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    title: 'Clipped tooltip — check wrap and collision inside the surface',
    children: <span tabIndex={0}>Focus or hover me</span>,
    enterDelay: 0,
    leaveDelay: 0
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <FixedSurface>
        {surface => <Tooltip open={open} onOpenChange={setOpen} container={surface} title="Clipped tooltip — check wrap and collision inside the surface" enterDelay={0} leaveDelay={0}>
            <span tabIndex={0}>Focus or hover me</span>
          </Tooltip>}
      </FixedSurface>;
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Interactive tooltip',
    children: <span tabIndex={0}>Focus me</span>,
    enterDelay: 0,
    leaveDelay: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByText('Focus me');
    trigger.focus();
    await userEvent.hover(trigger);
    await expect(await body.findByText('Interactive tooltip')).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Press to toggle (openOnPress)',
  args: {
    title: 'Tap or click to toggle',
    openOnPress: true,
    children: <button type="button">Press me</button>
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-start',
    ...demoPadding
  }}>
      <Tooltip {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Press me'
    });
    await userEvent.click(trigger);
    await expect(await body.findByText('Tap or click to toggle')).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Touch behavior',
  args: {
    title: 'Configure the provider first',
    children: null
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--memori-spacing-lg)',
    alignItems: 'center',
    ...demoPadding
  }}>
      <Tooltip title="Configure the provider first">
        <Button disabled>Create MCP</Button>
      </Tooltip>
      <Tooltip title="Configure the provider first (keyboard focusable)">
        <Button disabled focusableWhenDisabled>
          Create MCP
        </Button>
      </Tooltip>
      <Tooltip title="Connected">
        <span aria-label="Status" role="img" style={{
        display: 'inline-block',
        width: '0.75rem',
        height: '0.75rem',
        borderRadius: '50%',
        background: 'var(--memori-success, green)'
      }} />
      </Tooltip>
      <Tooltip title="Edit (auto: no tooltip on tap)">
        <Button variant="ghost">Edit</Button>
      </Tooltip>
      <Tooltip title="Delete (tap: action, then tooltip)" touchBehavior="tap">
        <Button variant="ghost">Delete</Button>
      </Tooltip>
      <Tooltip title="Archive (hold to read)" touchBehavior="longPress">
        <Button variant="ghost">Archive</Button>
      </Tooltip>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Open on a phone or with touch emulation. Mouse and keyboard behave as in\nthe other stories; only a touch press differs per `touchBehavior`.",...s.parameters?.docs?.description}}};const ve=["Default","WithIconTrigger","WithJSXContent","Disabled","DisabledButton","OpenControlled","VisibleLegacy","AlignLeft","AlignRight","AlignTopStart","AlignTopEnd","WithoutArrow","CustomDelays","InFixedSurface","OpenInteraction","PressToToggle","TouchBehavior"];export{v as AlignLeft,y as AlignRight,b as AlignTopEnd,f as AlignTopStart,T as CustomDelays,c as Default,m as Disabled,u as DisabledButton,j as InFixedSurface,h as OpenControlled,D as OpenInteraction,C as PressToToggle,s as TouchBehavior,g as VisibleLegacy,p as WithIconTrigger,d as WithJSXContent,x as WithoutArrow,ve as __namedExportsOrder,ge as default};
