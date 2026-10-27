import{j as r}from"./iframe-CfppFBML.js";import{I as n}from"./InfoHint-zlrmukft.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DqrBYd1k.js";import"./useTranslation-LlCKG-af.js";import"./index-CvRqaRa1.js";import"./Tooltip-cJ15S0G5.js";import"./useRenderElement-CwgC88KG.js";import"./useBaseUiId-CkKruMly.js";import"./useId-ZQMZ-VaW.js";import"./index-Cy7wA9S6.js";import"./index-Bxrnq4hh.js";import"./useSyncedFloatingRootContext-NvlXDnBh.js";import"./useStableCallback-CS5fRckw.js";import"./useTransitionStatus-ptjEx5Ad.js";import"./useOpenChangeComplete-DNEC6Tk0.js";import"./useValueAsRef-D7_7nHQw.js";import"./useOnMount-oCGj1n5G.js";import"./popupStateMapping-DsLP6ZG0.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-Bjx5rkfr.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-B8Gm6GRf.js";import"./event-BggRprRz.js";import"./useFocus-BQ7BdTxR.js";import"./safePolygon-DHmfI474.js";import"./getDisabledMountTransitionStyles-BZBhRMIY.js";import"./DirectionContext-BsTSRZZT.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-lV3Nig6X.js";import"./getCssDimensions-C0b9aCwd.js";import"./info-tmg-7TUa.js";import"./createLucideIcon-DljGq0Ho.js";const{expect:s,userEvent:a,within:p}=__STORYBOOK_MODULE_TEST__,V={title:"Overlay/InfoHint",component:n,tags:["autodocs"],args:{content:"Numero di volte che è stata posta questa domanda",ariaLabel:"Informazioni su Occorrenze"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}},size:{control:"number"}},parameters:{controls:{expanded:!0},docs:{description:{component:'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.'}}}},e={render:o=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:["Occorrenze",r.jsx(n,{...o})]})},t={render:e.render,play:async({canvasElement:o})=>{const i=p(o);await a.tab(),await s(i.getByRole("button",{name:"Informazioni su Occorrenze"})).toHaveFocus(),await a.keyboard("{Escape}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
