import{j as r}from"./iframe-DQnDAKDD.js";import{I as n}from"./InfoHint-wMhmzY_o.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./useTranslation-CPQkVxRz.js";import"./index-DfFO9_zg.js";import"./Tooltip-CMK0FsXL.js";import"./useRenderElement-cOdDho9S.js";import"./useBaseUiId-Du8KLZzD.js";import"./useId-De35mOlf.js";import"./index-BVVOsdlT.js";import"./index-BuiRabFg.js";import"./useSyncedFloatingRootContext-BmmciwiL.js";import"./useStableCallback-D88_nEGo.js";import"./useTransitionStatus-BW_pRtG3.js";import"./useOpenChangeComplete-Cqu1IpCR.js";import"./useValueAsRef-D3PBd9gO.js";import"./useOnMount-DPtsMZQG.js";import"./popupStateMapping-B0TvJO9U.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./FocusGuard-DIeoqZwj.js";import"./element-BGnTlyAk.js";import"./visuallyHidden-CbwUG2x5.js";import"./useTimeout-DTtOPXgK.js";import"./event-BggRprRz.js";import"./useFocus-D46AJ3n6.js";import"./safePolygon-BGTKGbRe.js";import"./getDisabledMountTransitionStyles-BplvcZau.js";import"./DirectionContext-C6MBq8M9.js";import"./owner-CvMgaIeV.js";import"./usePopupAutoResize-B12kbPxV.js";import"./getCssDimensions-qCEEuZvx.js";import"./info-iVYAJnMs.js";import"./createLucideIcon-C4Q6ZgnJ.js";const{expect:s,userEvent:a,within:p}=__STORYBOOK_MODULE_TEST__,V={title:"Overlay/InfoHint",component:n,tags:["autodocs"],args:{content:"Numero di volte che è stata posta questa domanda",ariaLabel:"Informazioni su Occorrenze"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}},size:{control:"number"}},parameters:{controls:{expanded:!0},docs:{description:{component:'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.'}}}},e={render:o=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:["Occorrenze",r.jsx(n,{...o})]})},t={render:e.render,play:async({canvasElement:o})=>{const i=p(o);await a.tab(),await s(i.getByRole("button",{name:"Informazioni su Occorrenze"})).toHaveFocus(),await a.keyboard("{Escape}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
