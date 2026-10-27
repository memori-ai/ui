import{j as a}from"./iframe-CfppFBML.js";import{B as s}from"./Breadcrumbs-CwZx5hv-.js";import{A as i}from"./Avatar-eVcXVbol.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DqrBYd1k.js";import"./useTranslation-LlCKG-af.js";import"./index-CvRqaRa1.js";import"./chevron-right-BWhSY6lA.js";import"./createLucideIcon-DljGq0Ho.js";import"./useRenderElement-CwgC88KG.js";import"./useStableCallback-CS5fRckw.js";import"./useTimeout-B8Gm6GRf.js";import"./useOnMount-oCGj1n5G.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,x={title:"Azioni e navigazione/Breadcrumbs",component:s,tags:["autodocs"],args:{items:[{label:"I miei agenti",href:"#agents"},{label:"Supporto Clienti",href:"#agent"},{label:"Conoscenza"},{label:"Contenuti"}]},argTypes:{items:{control:"object"},separator:{control:!1},ariaLabel:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Path from the root to the current page. Items with `href` render links, items with only `onClick` render link-styled buttons, items with neither are plain text. The last item is the current page."}}}},e={},t={args:{items:[{label:"I miei agenti",onClick:o()},{label:"Supporto Clienti",onClick:o(),icon:a.jsx(i,{initials:"SC",size:20,shape:"square"})},{label:"Impostazioni"}]}},r={args:{separator:"/"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'I miei agenti',
      onClick: fn()
    }, {
      label: 'Supporto Clienti',
      onClick: fn(),
      icon: <Avatar initials="SC" size={20} shape="square" />
    }, {
      label: 'Impostazioni'
    }]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '/'
  }
}`,...r.parameters?.docs?.source}}};const I=["Default","WithIconsAndRouting","CustomSeparator"];export{r as CustomSeparator,e as Default,t as WithIconsAndRouting,I as __namedExportsOrder,x as default};
