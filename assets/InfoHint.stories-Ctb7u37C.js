import{j as r}from"./iframe-welL_Y03.js";import{I as n}from"./InfoHint-CSMeYmkZ.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BFu-4PJz.js";import"./useTranslation-CzbaMplr.js";import"./index-D77dsTa6.js";import"./Tooltip-CXw6qUhD.js";import"./constants-3lpsu0Po.js";import"./index-BiXAPOqp.js";import"./useRenderElement-BsYNz85m.js";import"./useStableCallback-BmsFBrCP.js";import"./floating-ui.utils.dom-C95aRAwF.js";import"./shadowDom-C7-QBKxN.js";import"./constants-B1v3gF3O.js";import"./visuallyHidden-BI2aS7uD.js";import"./useBaseUiId-Bw28qrdv.js";import"./useId-CoJK8Gi1.js";import"./store-1PKoZ4Ak.js";import"./FloatingRootStore-CHZ76bOK.js";import"./useOpenChangeComplete-B8oq_RqC.js";import"./index-CLv6_fCs.js";import"./index-DrBWIv9O.js";import"./useOnMount-C-u17Km0.js";import"./addEventListener-C7Nm7Zds.js";import"./composite-9T5Ts5cl.js";import"./useTimeout-DlB3jOiB.js";import"./useTransitionStatus-nxPEYtLr.js";import"./useValueAsRef-e6pjvu4b.js";import"./safePolygon-EWRX4eGf.js";import"./useFocus-DczQjNJN.js";import"./usePositioner-Cr3lYg9a.js";import"./DirectionContext-B1YwdV18.js";import"./info-C-JGDOJT.js";import"./createLucideIcon-BOPdVp22.js";const{expect:s,userEvent:a,within:p}=__STORYBOOK_MODULE_TEST__,V={title:"Overlay/InfoHint",component:n,tags:["autodocs"],args:{content:"Numero di volte che è stata posta questa domanda",ariaLabel:"Informazioni su Occorrenze"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"top"}}},size:{control:"number"}},parameters:{controls:{expanded:!0},docs:{description:{component:'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.'}}}},e={render:o=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:["Occorrenze",r.jsx(n,{...o})]})},t={render:e.render,play:async({canvasElement:o})=>{const i=p(o);await a.tab(),await s(i.getByRole("button",{name:"Informazioni su Occorrenze"})).toHaveFocus(),await a.keyboard("{Escape}")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
