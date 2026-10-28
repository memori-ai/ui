import{j as e,r as O}from"./iframe-ldhl-yys.js";import{F as I}from"./decorators-DJCJI2Q9.js";import{T as r}from"./Tooltip-CNFo1wYr.js";import{c as H}from"./createLucideIcon-DCH9r7pE.js";import{B as k}from"./Button-6FG1hzIj.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CMw0MgeV.js";import"./useRenderElement-DeH3yDN1.js";import"./useBaseUiId-C1idvx-D.js";import"./useId-B-CVskLf.js";import"./index-CmQ0_eun.js";import"./index-O2PdrO36.js";import"./useSyncedFloatingRootContext-DSN8tCqo.js";import"./useStableCallback-CeZu76Yj.js";import"./useTransitionStatus-CyJMXh_r.js";import"./useOpenChangeComplete-BryifO-P.js";import"./useValueAsRef-BYwa147I.js";import"./useOnMount-BjwUxIUM.js";import"./popupStateMapping-DWpNPy3a.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-s8u5paY1.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout--bIj-BXi.js";import"./event-BggRprRz.js";import"./index-5eNX3V5E.js";import"./useFocus-DRTQh7Re.js";import"./safePolygon-iHsiuzWu.js";import"./getDisabledMountTransitionStyles-H6tVDnCH.js";import"./DirectionContext-BX9K6zJ-.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-PyxdlcRG.js";import"./getCssDimensions-C6wVEyio.js";import"./useButton-BnENeNgJ.js";import"./loader-circle-CzfFWROa.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],B=H("circle-question-mark",P),{expect:w,fn:S,userEvent:C,within:j}=__STORYBOOK_MODULE_TEST__,T={paddingTop:"calc(var(--memori-spacing-5xl) * 2)"},ge={title:"Overlay/Tooltip",component:r,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","topLeft","topRight","bottomLeft","bottomRight"]},disabled:{control:"boolean"},arrow:{control:"boolean"},open:{control:"boolean"},visible:{control:"boolean"},enterDelay:{control:{type:"number",min:0,step:50}},leaveDelay:{control:{type:"number",min:0,step:50}},sideOffset:{control:{type:"number",min:0,step:1}},disableHoverablePopup:{control:"boolean"},onOpenChange:{action:"openChange"}},parameters:{controls:{expanded:!0}},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...T},children:e.jsx(r,{...t,onOpenChange:S()})})},s={args:{title:"Here is some tooltip content",children:e.jsx("span",{children:"Hover or focus me"})}},i={args:{title:"Saved to your library",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--memori-spacing-xs)"},children:[e.jsx(B,{"aria-hidden":!0,size:18,strokeWidth:2}),"Label"]})}},l={args:{title:e.jsxs("span",{children:["JSX content with a"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),children:e.jsx("span",{children:"Hover me"})}},c={args:{title:"Tooltip is disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},p={name:"Disabled button",args:{title:"Save is unavailable until the form is valid",enterDelay:0,leaveDelay:0,children:e.jsx(k,{disabled:!0,type:"button",children:"Save"})}},d={args:{title:"Opened via the `open` prop (try toggling in Controls)",children:e.jsx("span",{children:"Anchor"}),open:!0}},m={name:"Visible (legacy prop)",args:{title:"Uses deprecated `visible` → maps to `open`",children:e.jsx("span",{children:"Anchor"}),visible:!0}},u={args:{title:"Placement left",children:e.jsx("span",{children:"Hover me"}),placement:"left",open:!0},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...T},children:e.jsx(r,{...t,onOpenChange:S()})})},g={args:{title:"Placement right",children:e.jsx("span",{children:"Hover me"}),placement:"right",open:!0}},h={args:{title:"top-start",children:e.jsx("span",{children:"Hover me"}),placement:"top-start",open:!0},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...T},children:e.jsx(r,{...t,onOpenChange:S()})})},y={args:{title:"top-end",children:e.jsx("span",{children:"Hover me"}),placement:"top-end",open:!0}},v={args:{title:"Arrow hidden",children:e.jsx("span",{children:"Hover me"}),arrow:!1,open:!0}},f={args:{title:"enterDelay 200ms · leaveDelay 150ms",children:e.jsx("span",{children:"Hover me"}),enterDelay:200,leaveDelay:150}},x={parameters:{layout:"fullscreen"},args:{title:"Clipped tooltip — check wrap and collision inside the surface",children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"}),enterDelay:0,leaveDelay:0},render:()=>{const[t,n]=O.useState(!0);return e.jsx(I,{children:a=>e.jsx(r,{open:t,onOpenChange:n,container:a,title:"Clipped tooltip — check wrap and collision inside the surface",enterDelay:0,leaveDelay:0,children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"})})})}},b={args:{title:"Interactive tooltip",children:e.jsx("span",{tabIndex:0,children:"Focus me"}),enterDelay:0,leaveDelay:0},play:async({canvasElement:t})=>{const n=j(t),a=j(t.ownerDocument.body),o=n.getByText("Focus me");o.focus(),await C.hover(o),await w(await a.findByText("Interactive tooltip")).toBeInTheDocument()}},D={name:"Press to toggle (openOnPress)",args:{title:"Tap or click to toggle",openOnPress:!0,children:e.jsx("button",{type:"button",children:"Press me"})},render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...T},children:e.jsx(r,{...t})}),play:async({canvasElement:t})=>{const n=j(t),a=j(t.ownerDocument.body),o=n.getByRole("button",{name:"Press me"});await C.click(o),await w(await a.findByText("Tap or click to toggle")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  name: 'Disabled button',
  args: {
    title: 'Save is unavailable until the form is valid',
    enterDelay: 0,
    leaveDelay: 0,
    children: <Button disabled type="button">
        Save
      </Button>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Opened via the \`open\` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated \`visible\` → maps to \`open\`',
    children: <span>Anchor</span>,
    visible: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement right',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const he=["Default","WithIconTrigger","WithJSXContent","Disabled","DisabledButton","OpenControlled","VisibleLegacy","AlignLeft","AlignRight","AlignTopStart","AlignTopEnd","WithoutArrow","CustomDelays","InFixedSurface","OpenInteraction","PressToToggle"];export{u as AlignLeft,g as AlignRight,y as AlignTopEnd,h as AlignTopStart,f as CustomDelays,s as Default,c as Disabled,p as DisabledButton,x as InFixedSurface,d as OpenControlled,b as OpenInteraction,D as PressToToggle,m as VisibleLegacy,i as WithIconTrigger,l as WithJSXContent,v as WithoutArrow,he as __namedExportsOrder,ge as default};
