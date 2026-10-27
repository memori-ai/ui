import{j as r}from"./iframe-CvaKCvHw.js";import{I as n}from"./InfoHint-AEYEjZ_z.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D-Q26sh1.js";import"./useTranslation-DqTxMO2X.js";import"./index-DczL_6t1.js";import"./Tooltip-CmmvTpun.js";import"./useRenderElement-CcBESBd8.js";import"./useBaseUiId-D4BOOIaw.js";import"./useId-DXC1gtfb.js";import"./index-DfUhiCTo.js";import"./index-8zugb847.js";import"./useSyncedFloatingRootContext-DGHyN810.js";import"./useStableCallback-BrjHH0xH.js";import"./useTransitionStatus-D4qkeMj5.js";import"./useOpenChangeComplete-4nr-NP09.js";import"./useValueAsRef-DyirWA65.js";import"./useOnMount-CaNF8zDx.js";import"./popupStateMapping-DibymGU2.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-8QmlcaLF.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-Ce2UM54m.js";import"./event-BggRprRz.js";import"./useFocus-CoULbTxG.js";import"./safePolygon-SYIUKAmA.js";import"./getDisabledMountTransitionStyles-Cce0CkWB.js";import"./DirectionContext-Ifrw7vgt.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-XCI4CP25.js";import"./getCssDimensions-BGXPLv3i.js";import"./info-Dnt8MQ5N.js";import"./createLucideIcon-DwxI1SnN.js";const{expect:s,userEvent:a,within:p}=__STORYBOOK_MODULE_TEST__,V={title:"Overlay/InfoHint",component:n,tags:["autodocs"],args:{content:"Numero di volte che è stata posta questa domanda",ariaLabel:"Informazioni su Occorrenze"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}},size:{control:"number"}},parameters:{controls:{expanded:!0},docs:{description:{component:'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.'}}}},e={render:o=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:["Occorrenze",r.jsx(n,{...o})]})},t={render:e.render,play:async({canvasElement:o})=>{const i=p(o);await a.tab(),await s(i.getByRole("button",{name:"Informazioni su Occorrenze"})).toHaveFocus(),await a.keyboard("{Escape}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
