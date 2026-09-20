import{j as e,r as S}from"./iframe-Ci_ZrkHm.js";import{F as C}from"./decorators-YW8OpSvo.js";import{T as n}from"./Tooltip-CKb3jnXE.js";import{c as T}from"./createLucideIcon-CqLrMdl-.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BYxeM9Ge.js";import"./useRenderElement-Bee0-OFi.js";import"./useBaseUiId-CAb6mNwx.js";import"./useId-CJMVA-tA.js";import"./index-Dsj0DM1F.js";import"./index-CXpMfGQp.js";import"./useSyncedFloatingRootContext-B4ZqFD_1.js";import"./useTransitionStatus-Dx0HrvJV.js";import"./useOpenChangeComplete-zV7bFpD2.js";import"./useOnMount-CczKdE0M.js";import"./popupStateMapping-8V1If8eo.js";import"./FocusGuard-BgUHkoXW.js";import"./element-ijlxSx6-.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-BII1fCsQ.js";import"./event-C2DITEeS.js";import"./index-Ej_2y8o4.js";import"./useFocus-CF_i43-L.js";import"./safePolygon-C0oK55Sh.js";import"./getDisabledMountTransitionStyles-BycaIMIJ.js";import"./floating-ui.utils-CXOfbn6-.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-wDl6vgK_.js";import"./getCssDimensions-CGThCM-z.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],O=T("circle-question-mark",w),{expect:H,fn:x,userEvent:I,within:D}=__STORYBOOK_MODULE_TEST__,b={paddingTop:"calc(var(--memori-spacing-5xl) * 2)"},oe={title:"Overlay/Tooltip",component:n,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","topLeft","topRight","bottomLeft","bottomRight"]},disabled:{control:"boolean"},arrow:{control:"boolean"},open:{control:"boolean"},visible:{control:"boolean"},enterDelay:{control:{type:"number",min:0,step:50}},leaveDelay:{control:{type:"number",min:0,step:50}},sideOffset:{control:{type:"number",min:0,step:1}},disableHoverablePopup:{control:"boolean"},onOpenChange:{action:"openChange"}},parameters:{controls:{expanded:!0}},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...b},children:e.jsx(n,{...r,onOpenChange:x()})})},t={args:{title:"Here is some tooltip content",children:e.jsx("span",{children:"Hover or focus me"})}},a={args:{title:"Saved to your library",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--memori-spacing-xs)"},children:[e.jsx(O,{"aria-hidden":!0,size:18,strokeWidth:2}),"Label"]})}},o={args:{title:e.jsxs("span",{children:["JSX content with a"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),children:e.jsx("span",{children:"Hover me"})}},s={args:{title:"Tooltip is disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},i={args:{title:"Opened via the `open` prop (try toggling in Controls)",children:e.jsx("span",{children:"Anchor"}),open:!0}},l={name:"Visible (legacy prop)",args:{title:"Uses deprecated `visible` → maps to `open`",children:e.jsx("span",{children:"Anchor"}),visible:!0}},p={args:{title:"Placement left",children:e.jsx("span",{children:"Hover me"}),placement:"left",open:!0},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...b},children:e.jsx(n,{...r,onOpenChange:x()})})},c={args:{title:"Placement right (default)",children:e.jsx("span",{children:"Hover me"}),placement:"right",open:!0}},d={args:{title:"top-start",children:e.jsx("span",{children:"Hover me"}),placement:"top-start",open:!0},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...b},children:e.jsx(n,{...r,onOpenChange:x()})})},m={args:{title:"top-end",children:e.jsx("span",{children:"Hover me"}),placement:"top-end",open:!0}},u={args:{title:"Arrow hidden",children:e.jsx("span",{children:"Hover me"}),arrow:!1,open:!0}},h={args:{title:"enterDelay 200ms · leaveDelay 150ms",children:e.jsx("span",{children:"Hover me"}),enterDelay:200,leaveDelay:150}},g={parameters:{layout:"fullscreen"},args:{title:"Clipped tooltip — check wrap and collision inside the surface",children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"}),enterDelay:0,leaveDelay:0},render:()=>{const[r,f]=S.useState(!0);return e.jsx(C,{children:v=>e.jsx(n,{open:r,onOpenChange:f,container:v,title:"Clipped tooltip — check wrap and collision inside the surface",enterDelay:0,leaveDelay:0,children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"})})})}},y={args:{title:"Interactive tooltip",children:e.jsx("span",{tabIndex:0,children:"Focus me"}),enterDelay:0,leaveDelay:0},play:async({canvasElement:r})=>{const f=D(r),v=D(r.ownerDocument.body),j=f.getByText("Focus me");j.focus(),await I.hover(j),await H(await v.findByText("Interactive tooltip")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Here is some tooltip content',
    children: <span>Hover or focus me</span>
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip is disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Opened via the \`open\` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated \`visible\` → maps to \`open\`',
    children: <span>Anchor</span>,
    visible: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement right (default)',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const se=["Default","WithIconTrigger","WithJSXContent","Disabled","OpenControlled","VisibleLegacy","AlignLeft","AlignRight","AlignTopStart","AlignTopEnd","WithoutArrow","CustomDelays","InFixedSurface","OpenInteraction"];export{p as AlignLeft,c as AlignRight,m as AlignTopEnd,d as AlignTopStart,h as CustomDelays,t as Default,s as Disabled,g as InFixedSurface,i as OpenControlled,y as OpenInteraction,l as VisibleLegacy,a as WithIconTrigger,o as WithJSXContent,u as WithoutArrow,se as __namedExportsOrder,oe as default};
