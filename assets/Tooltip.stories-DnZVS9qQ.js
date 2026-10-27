import{r as i,j as e}from"./iframe-dIQ7bXS9.js";import{F as H}from"./decorators-ClLBLyzy.js";import{T as s}from"./Tooltip-CVLHAyUe.js";import{c as A}from"./createLucideIcon-iXCOnvW_.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";import"./useRenderElement-BTl_khHM.js";import"./useBaseUiId-BlZ3QajR.js";import"./useId-DVSx0zRu.js";import"./index-CT9ohHEL.js";import"./index-C8WBCW8r.js";import"./useSyncedFloatingRootContext-DAZ8X_XL.js";import"./useStableCallback-C6i8wFRs.js";import"./useTransitionStatus-BLNyivaB.js";import"./useOpenChangeComplete-B8etkAr2.js";import"./useValueAsRef-CEEoYs_V.js";import"./useOnMount-CUD15mrL.js";import"./popupStateMapping-ChW93uMk.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-B3d9MW1C.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-2-_v_P1r.js";import"./event-BggRprRz.js";import"./index-DDC5NtrN.js";import"./useFocus-7CbF3XcO.js";import"./safePolygon-CTdWtRBU.js";import"./getDisabledMountTransitionStyles-BClALbS_.js";import"./DirectionContext-B2EhYFsY.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-DRkF51dy.js";import"./getCssDimensions-BtR2mgpY.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],F=A("circle-question-mark",E);function R(r=!1){const[n,t]=i.useState(r),o=i.useRef(null),O=i.useCallback(a=>{a.stopPropagation(),t(I=>!I)},[]),k=i.useCallback(a=>{o.current=a},[]);return{open:n,setOpen:t,anchorRef:k,pressTriggerProps:{onPointerDown:a=>{a.stopPropagation()},onClick:O},positionerProps:{anchor:o,positionMethod:"fixed"},tooltipProps:{open:n,onOpenChange:t}}}const{expect:C,fn:w,userEvent:S,within:j}=__STORYBOOK_MODULE_TEST__,D={paddingTop:"calc(var(--memori-spacing-5xl) * 2)"},fe={title:"Overlay/Tooltip",component:s,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","topLeft","topRight","bottomLeft","bottomRight"]},disabled:{control:"boolean"},arrow:{control:"boolean"},open:{control:"boolean"},visible:{control:"boolean"},enterDelay:{control:{type:"number",min:0,step:50}},leaveDelay:{control:{type:"number",min:0,step:50}},sideOffset:{control:{type:"number",min:0,step:1}},disableHoverablePopup:{control:"boolean"},onOpenChange:{action:"openChange"}},parameters:{controls:{expanded:!0}},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...D},children:e.jsx(s,{...r,onOpenChange:w()})})},p={args:{title:"Here is some tooltip content",children:e.jsx("span",{children:"Hover or focus me"})}},l={args:{title:"Saved to your library",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--memori-spacing-xs)"},children:[e.jsx(F,{"aria-hidden":!0,size:18,strokeWidth:2}),"Label"]})}},c={args:{title:e.jsxs("span",{children:["JSX content with a"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),children:e.jsx("span",{children:"Hover me"})}},d={args:{title:"Tooltip is disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},m={args:{title:"Opened via the `open` prop (try toggling in Controls)",children:e.jsx("span",{children:"Anchor"}),open:!0}},g={name:"Visible (legacy prop)",args:{title:"Uses deprecated `visible` → maps to `open`",children:e.jsx("span",{children:"Anchor"}),visible:!0}},u={args:{title:"Placement left",children:e.jsx("span",{children:"Hover me"}),placement:"left",open:!0},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...D},children:e.jsx(s,{...r,onOpenChange:w()})})},h={args:{title:"Placement right",children:e.jsx("span",{children:"Hover me"}),placement:"right",open:!0}},y={args:{title:"top-start",children:e.jsx("span",{children:"Hover me"}),placement:"top-start",open:!0},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...D},children:e.jsx(s,{...r,onOpenChange:w()})})},f={args:{title:"top-end",children:e.jsx("span",{children:"Hover me"}),placement:"top-end",open:!0}},x={args:{title:"Arrow hidden",children:e.jsx("span",{children:"Hover me"}),arrow:!1,open:!0}},v={args:{title:"enterDelay 200ms · leaveDelay 150ms",children:e.jsx("span",{children:"Hover me"}),enterDelay:200,leaveDelay:150}},b={parameters:{layout:"fullscreen"},args:{title:"Clipped tooltip — check wrap and collision inside the surface",children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"}),enterDelay:0,leaveDelay:0},render:()=>{const[r,n]=i.useState(!0);return e.jsx(H,{children:t=>e.jsx(s,{open:r,onOpenChange:n,container:t,title:"Clipped tooltip — check wrap and collision inside the surface",enterDelay:0,leaveDelay:0,children:e.jsx("span",{tabIndex:0,children:"Focus or hover me"})})})}},T={args:{title:"Interactive tooltip",children:e.jsx("span",{tabIndex:0,children:"Focus me"}),enterDelay:0,leaveDelay:0},play:async({canvasElement:r})=>{const n=j(r),t=j(r.ownerDocument.body),o=n.getByText("Focus me");o.focus(),await S.hover(o),await C(await t.findByText("Interactive tooltip")).toBeInTheDocument()}},P={name:"Press to toggle (usePressTooltip)",args:{title:"Tap or click to toggle",children:e.jsx("span",{children:"Press me"})},render:()=>{const r=R();return e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...D},children:e.jsx(s,{content:"Tap or click to toggle",...r.tooltipProps,slotProps:{positioner:r.positionerProps},children:e.jsx("button",{ref:r.anchorRef,type:"button",...r.pressTriggerProps,children:"Press me"})})})},play:async({canvasElement:r})=>{const n=j(r),t=j(r.ownerDocument.body),o=n.getByRole("button",{name:"Press me"});await S.click(o),await C(await t.findByText("Tap or click to toggle")).toBeInTheDocument()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Here is some tooltip content',
    children: <span>Hover or focus me</span>
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip is disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Opened via the \`open\` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated \`visible\` → maps to \`open\`',
    children: <span>Anchor</span>,
    visible: true
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement right',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Press to toggle (usePressTooltip)',
  args: {
    title: 'Tap or click to toggle',
    children: <span>Press me</span>
  },
  render: () => {
    const press = usePressTooltip();
    return <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      ...demoPadding
    }}>
        <Tooltip content="Tap or click to toggle" {...press.tooltipProps} slotProps={{
        positioner: press.positionerProps
      }}>
          <button ref={press.anchorRef} type="button" {...press.pressTriggerProps}>
            Press me
          </button>
        </Tooltip>
      </div>;
  },
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
}`,...P.parameters?.docs?.source}}};const xe=["Default","WithIconTrigger","WithJSXContent","Disabled","OpenControlled","VisibleLegacy","AlignLeft","AlignRight","AlignTopStart","AlignTopEnd","WithoutArrow","CustomDelays","InFixedSurface","OpenInteraction","PressToToggle"];export{u as AlignLeft,h as AlignRight,f as AlignTopEnd,y as AlignTopStart,v as CustomDelays,p as Default,d as Disabled,b as InFixedSurface,m as OpenControlled,T as OpenInteraction,P as PressToToggle,g as VisibleLegacy,l as WithIconTrigger,c as WithJSXContent,x as WithoutArrow,xe as __namedExportsOrder,fe as default};
