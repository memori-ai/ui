import{j as e,r as C}from"./iframe-CvaKCvHw.js";import{F as O}from"./decorators-B1x4eFss.js";import{T as r}from"./Tooltip-CmmvTpun.js";import{c as I}from"./createLucideIcon-DwxI1SnN.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D-Q26sh1.js";import"./useRenderElement-CcBESBd8.js";import"./useBaseUiId-D4BOOIaw.js";import"./useId-DXC1gtfb.js";import"./index-DfUhiCTo.js";import"./index-8zugb847.js";import"./useSyncedFloatingRootContext-DGHyN810.js";import"./useStableCallback-BrjHH0xH.js";import"./useTransitionStatus-D4qkeMj5.js";import"./useOpenChangeComplete-4nr-NP09.js";import"./useValueAsRef-DyirWA65.js";import"./useOnMount-CaNF8zDx.js";import"./popupStateMapping-DibymGU2.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-8QmlcaLF.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-Ce2UM54m.js";import"./event-BggRprRz.js";import"./index-DczL_6t1.js";import"./useFocus-CoULbTxG.js";import"./safePolygon-SYIUKAmA.js";import"./getDisabledMountTransitionStyles-Cce0CkWB.js";import"./DirectionContext-Ifrw7vgt.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-XCI4CP25.js";import"./getCssDimensions-BGXPLv3i.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],k=I("circle-question-mark",H),{expect:w,fn:D,userEvent:S,within:T}=__STORYBOOK_MODULE_TEST__,j={paddingTop:"calc(var(--memori-spacing-5xl) * 2)"},ce={title:"Overlay/Tooltip",component:r,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","topLeft","topRight","bottomLeft","bottomRight"]},disabled:{control:"boolean"},arrow:{control:"boolean"},open:{control:"boolean"},visible:{control:"boolean"},enterDelay:{control:{type:"number",min:0,step:50}},leaveDelay:{control:{type:"number",min:0,step:50}},sideOffset:{control:{type:"number",min:0,step:1}},disableHoverablePopup:{control:"boolean"},onOpenChange:{action:"openChange"}},parameters:{controls:{expanded:!0}},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...j},children:e.jsx(r,{...t,onOpenChange:D()})})},s={args:{title:"Here is some tooltip content",children:e.jsx("span",{children:"Hover or focus me"})}},i={args:{title:"Saved to your library",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--memori-spacing-xs)"},children:[e.jsx(k,{"aria-hidden":!0,size:18,strokeWidth:2}),"Label"]})}},l={args:{title:e.jsxs("span",{children:["JSX content with a"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),children:e.jsx("span",{children:"Hover me"})}},c={args:{title:"Tooltip is disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},p={args:{title:"Opened via the `open` prop (try toggling in Controls)",children:e.jsx("span",{children:"Anchor"}),open:!0}},d={name:"Visible (legacy prop)",args:{title:"Uses deprecated `visible` → maps to `open`",children:e.jsx("span",{children:"Anchor"}),visible:!0}},m={args:{title:"Placement left",children:e.jsx("span",{children:"Hover me"}),placement:"left",open:!0},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...j},children:e.jsx(r,{...t,onOpenChange:D()})})},g={args:{title:"Placement right",children:e.jsx("span",{children:"Hover me"}),placement:"right",open:!0}},u={args:{title:"top-start",children:e.jsx("span",{children:"Hover me"}),placement:"top-start",open:!0},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...j},children:e.jsx(r,{...t,onOpenChange:D()})})},h={args:{title:"top-end",children:e.jsx("span",{children:"Hover me"}),placement:"top-end",open:!0}},y={args:{title:"Arrow hidden",children:e.jsx("span",{children:"Hover me"}),arrow:!1,open:!0}},v={args:{title:"enterDelay 200ms · leaveDelay 150ms",children:e.jsx("span",{children:"Hover me"}),enterDelay:200,leaveDelay:150}},x={parameters:{layout:"fullscreen"},args:{title:"Clipped tooltip — check wrap and collision inside the surface",children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"}),enterDelay:0,leaveDelay:0},render:()=>{const[t,n]=C.useState(!0);return e.jsx(O,{children:o=>e.jsx(r,{open:t,onOpenChange:n,container:o,title:"Clipped tooltip — check wrap and collision inside the surface",enterDelay:0,leaveDelay:0,children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"})})})}},f={args:{title:"Interactive tooltip",children:e.jsx("span",{tabIndex:0,children:"Focus me"}),enterDelay:0,leaveDelay:0},play:async({canvasElement:t})=>{const n=T(t),o=T(t.ownerDocument.body),a=n.getByText("Focus me");a.focus(),await S.hover(a),await w(await o.findByText("Interactive tooltip")).toBeInTheDocument()}},b={name:"Press to toggle (openOnPress)",args:{title:"Tap or click to toggle",openOnPress:!0,children:e.jsx("button",{type:"button",children:"Press me"})},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...j},children:e.jsx(r,{...t})}),play:async({canvasElement:t})=>{const n=T(t),o=T(t.ownerDocument.body),a=n.getByRole("button",{name:"Press me"});await S.click(a),await w(await o.findByText("Tap or click to toggle")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Here is some tooltip content',
    children: <span>Hover or focus me</span>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip is disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Opened via the \`open\` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated \`visible\` → maps to \`open\`',
    children: <span>Anchor</span>,
    visible: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement right',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const pe=["Default","WithIconTrigger","WithJSXContent","Disabled","OpenControlled","VisibleLegacy","AlignLeft","AlignRight","AlignTopStart","AlignTopEnd","WithoutArrow","CustomDelays","InFixedSurface","OpenInteraction","PressToToggle"];export{m as AlignLeft,g as AlignRight,h as AlignTopEnd,u as AlignTopStart,v as CustomDelays,s as Default,c as Disabled,x as InFixedSurface,p as OpenControlled,f as OpenInteraction,b as PressToToggle,d as VisibleLegacy,i as WithIconTrigger,l as WithJSXContent,y as WithoutArrow,pe as __namedExportsOrder,ce as default};
