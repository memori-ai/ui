import{j as r}from"./iframe-dIQ7bXS9.js";import{I as n}from"./InfoHint-BIjCY72V.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DAC9qRlk.js";import"./useTranslation-5eAe1hAT.js";import"./index-DDC5NtrN.js";import"./Tooltip-CVLHAyUe.js";import"./useRenderElement-BTl_khHM.js";import"./useBaseUiId-BlZ3QajR.js";import"./useId-DVSx0zRu.js";import"./index-CT9ohHEL.js";import"./index-C8WBCW8r.js";import"./useSyncedFloatingRootContext-DAZ8X_XL.js";import"./useStableCallback-C6i8wFRs.js";import"./useTransitionStatus-BLNyivaB.js";import"./useOpenChangeComplete-B8etkAr2.js";import"./useValueAsRef-CEEoYs_V.js";import"./useOnMount-CUD15mrL.js";import"./popupStateMapping-ChW93uMk.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-B3d9MW1C.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-2-_v_P1r.js";import"./event-BggRprRz.js";import"./useFocus-7CbF3XcO.js";import"./safePolygon-CTdWtRBU.js";import"./getDisabledMountTransitionStyles-BClALbS_.js";import"./DirectionContext-B2EhYFsY.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-DRkF51dy.js";import"./getCssDimensions-BtR2mgpY.js";import"./info-BQp5ggmu.js";import"./createLucideIcon-iXCOnvW_.js";const{expect:s,userEvent:a,within:p}=__STORYBOOK_MODULE_TEST__,V={title:"Overlay/InfoHint",component:n,tags:["autodocs"],args:{content:"Numero di volte che è stata posta questa domanda",ariaLabel:"Informazioni su Occorrenze"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}},size:{control:"number"}},parameters:{controls:{expanded:!0},docs:{description:{component:'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.'}}}},e={render:o=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:["Occorrenze",r.jsx(n,{...o})]})},t={render:e.render,play:async({canvasElement:o})=>{const i=p(o);await a.tab(),await s(i.getByRole("button",{name:"Informazioni su Occorrenze"})).toHaveFocus(),await a.keyboard("{Escape}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
