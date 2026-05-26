import{j as e}from"./iframe-BMqfQgqn.js";import{T as h}from"./Tooltip-Cf87Px-6.js";import{c as f}from"./createLucideIcon-BmziOYk9.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DsNATcLx.js";import"./MemoriUIProvider-DNkiZJyR.js";import"./useRenderElement-BfLIbjiU.js";import"./element-BuhfI0wj.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-MOQ-bLLp.js";import"./index-DAw-S_l1.js";import"./index-DSXKMTY1.js";import"./useSyncedFloatingRootContext-CR8SlC4W.js";import"./useTransitionStatus-DuHQtbwI.js";import"./useOpenChangeComplete-K2daJa-U.js";import"./useOnMount--IuiD5k7.js";import"./popupStateMapping-DED2VfVP.js";import"./useId-wjbuEOn9.js";import"./useTimeout-BhtsOWeJ.js";import"./event-Byu5us_0.js";import"./index-CXqYn8fp.js";import"./useFocus-BdDVnmOu.js";import"./useBaseUiId-B0oSCpTs.js";import"./safePolygon-D1b0hbcs.js";import"./getDisabledMountTransitionStyles-1G6_0LW4.js";import"./floating-ui.utils-WQ052GDp.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-CbV8FMAU.js";import"./getCssDimensions-B2bjDbum.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],x=f("circle-question-mark",v),{fn:u}=__STORYBOOK_MODULE_TEST__,y={paddingTop:"calc(var(--memori-spacing-5xl) * 2)"},Y={title:"UI/Tooltip",component:h,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end","topLeft","topRight","bottomLeft","bottomRight"]},disabled:{control:"boolean"},arrow:{control:"boolean"},open:{control:"boolean"},visible:{control:"boolean"},enterDelay:{control:{type:"number",min:0,step:50}},leaveDelay:{control:{type:"number",min:0,step:50}},sideOffset:{control:{type:"number",min:0,step:1}},disableHoverablePopup:{control:"boolean"},onOpenChange:{action:"openChange"}},parameters:{controls:{expanded:!0}},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",...y},children:e.jsx(h,{...r,onOpenChange:u()})})},n={args:{title:"Here is some tooltip content",children:e.jsx("span",{children:"Hover or focus me"})}},t={args:{title:"Saved to your library",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"var(--memori-spacing-xs)"},children:[e.jsx(x,{"aria-hidden":!0,size:18,strokeWidth:2}),"Label"]})}},o={args:{title:e.jsxs("span",{children:["JSX content with a"," ",e.jsx("a",{href:"https://memori.ai",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),children:e.jsx("span",{children:"Hover me"})}},a={args:{title:"Tooltip is disabled",children:e.jsx("span",{children:"Hover me"}),disabled:!0}},s={args:{title:"Opened via the `open` prop (try toggling in Controls)",children:e.jsx("span",{children:"Anchor"}),open:!0}},i={name:"Visible (legacy prop)",args:{title:"Uses deprecated `visible` → maps to `open`",children:e.jsx("span",{children:"Anchor"}),visible:!0}},l={args:{title:"Placement left",children:e.jsx("span",{children:"Hover me"}),placement:"left",open:!0},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...y},children:e.jsx(h,{...r,onOpenChange:u()})})},p={args:{title:"Placement right (default)",children:e.jsx("span",{children:"Hover me"}),placement:"right",open:!0}},c={args:{title:"top-start",children:e.jsx("span",{children:"Hover me"}),placement:"top-start",open:!0},render:r=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",...y},children:e.jsx(h,{...r,onOpenChange:u()})})},d={args:{title:"top-end",children:e.jsx("span",{children:"Hover me"}),placement:"top-end",open:!0}},m={args:{title:"Arrow hidden",children:e.jsx("span",{children:"Hover me"}),arrow:!1,open:!0}},g={args:{title:"enterDelay 200ms · leaveDelay 150ms",children:e.jsx("span",{children:"Hover me"}),enterDelay:200,leaveDelay:150}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Here is some tooltip content',
    children: <span>Hover or focus me</span>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip is disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Opened via the \`open\` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated \`visible\` → maps to \`open\`',
    children: <span>Anchor</span>,
    visible: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Placement right (default)',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150
  }
}`,...g.parameters?.docs?.source}}};const F=["Default","WithIconTrigger","WithJSXContent","Disabled","OpenControlled","VisibleLegacy","AlignLeft","AlignRight","AlignTopStart","AlignTopEnd","WithoutArrow","CustomDelays"];export{l as AlignLeft,p as AlignRight,d as AlignTopEnd,c as AlignTopStart,g as CustomDelays,n as Default,a as Disabled,s as OpenControlled,i as VisibleLegacy,t as WithIconTrigger,o as WithJSXContent,m as WithoutArrow,F as __namedExportsOrder,Y as default};
