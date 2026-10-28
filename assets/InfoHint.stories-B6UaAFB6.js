import{j as r}from"./iframe-ldhl-yys.js";import{I as n}from"./InfoHint-DbqBLunL.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CMw0MgeV.js";import"./useTranslation-Xu6St0tX.js";import"./index-5eNX3V5E.js";import"./Tooltip-CNFo1wYr.js";import"./useRenderElement-DeH3yDN1.js";import"./useBaseUiId-C1idvx-D.js";import"./useId-B-CVskLf.js";import"./index-CmQ0_eun.js";import"./index-O2PdrO36.js";import"./useSyncedFloatingRootContext-DSN8tCqo.js";import"./useStableCallback-CeZu76Yj.js";import"./useTransitionStatus-CyJMXh_r.js";import"./useOpenChangeComplete-BryifO-P.js";import"./useValueAsRef-BYwa147I.js";import"./useOnMount-BjwUxIUM.js";import"./popupStateMapping-DWpNPy3a.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-s8u5paY1.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout--bIj-BXi.js";import"./event-BggRprRz.js";import"./useFocus-DRTQh7Re.js";import"./safePolygon-iHsiuzWu.js";import"./getDisabledMountTransitionStyles-H6tVDnCH.js";import"./DirectionContext-BX9K6zJ-.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-PyxdlcRG.js";import"./getCssDimensions-C6wVEyio.js";import"./info-qqwNXwqi.js";import"./createLucideIcon-DCH9r7pE.js";const{expect:s,userEvent:a,within:p}=__STORYBOOK_MODULE_TEST__,V={title:"Overlay/InfoHint",component:n,tags:["autodocs"],args:{content:"Numero di volte che è stata posta questa domanda",ariaLabel:"Informazioni su Occorrenze"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}},size:{control:"number"}},parameters:{controls:{expanded:!0},docs:{description:{component:'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.'}}}},e={render:o=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:["Occorrenze",r.jsx(n,{...o})]})},t={render:e.render,play:async({canvasElement:o})=>{const i=p(o);await a.tab(),await s(i.getByRole("button",{name:"Informazioni su Occorrenze"})).toHaveFocus(),await a.keyboard("{Escape}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4
  }}>
      Occorrenze
      <InfoHint {...args} />
    </span>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Informazioni su Occorrenze'
    })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
  }
}`,...t.parameters?.docs?.source}}};const Y=["Default","OpenOnFocus"];export{e as Default,t as OpenOnFocus,Y as __namedExportsOrder,V as default};
