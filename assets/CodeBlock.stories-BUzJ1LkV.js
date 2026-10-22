import{C as s}from"./CodeBlock-Ddk4QLyU.js";import"./iframe-DQnDAKDD.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./useTranslation-CPQkVxRz.js";import"./index-DfFO9_zg.js";import"./Button-Bpfv0ff0.js";import"./useButton-7PT9BvyD.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useStableCallback-D88_nEGo.js";import"./useRenderElement-cOdDho9S.js";import"./loader-circle-CSUD6ElO.js";import"./createLucideIcon-C4Q6ZgnJ.js";import"./check-CWQd9Y5N.js";import"./copy-CEuoB01o.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,i=`import Memori from '@memori.ai/memori-react'

<Memori
  memoriName="Layout Storybook"
  ownerUserName="demo"
  tenantID="aisuru.com"
/>`,M={title:"Contenuto/CodeBlock",component:s,tags:["autodocs"],args:{code:i,language:"tsx",onCopy:n()},argTypes:{code:{control:"text"},language:{control:"text"},copyable:{control:"boolean"},wrap:{control:"boolean"},maxHeight:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Monospace snippet with optional language label and copy button. Scrolls horizontally by default; `wrap` wraps long lines. The `<pre>` is focusable so keyboard users can scroll it."}}}},o={},e={args:{code:"typeMessage('Ciao mondo!', true, false)",language:void 0,copyable:!1}},a={args:{language:"JSON",wrap:!0,code:'{"status":"ok","sessionID":"5e1c2a6b-0f3e-4d0a-9a4e-1f2b3c4d5e6f","answer":"Ciao! Come posso aiutarti oggi con il tuo ordine?"}'}},r={args:{maxHeight:120,code:Array.from({length:20},(c,t)=>`line ${t+1}`).join(`
`)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    code: "typeMessage('Ciao mondo!', true, false)",
    language: undefined,
    copyable: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'JSON',
    wrap: true,
    code: '{"status":"ok","sessionID":"5e1c2a6b-0f3e-4d0a-9a4e-1f2b3c4d5e6f","answer":"Ciao! Come posso aiutarti oggi con il tuo ordine?"}'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    maxHeight: 120,
    code: Array.from({
      length: 20
    }, (_, i) => \`line \${i + 1}\`).join('\\n')
  }
}`,...r.parameters?.docs?.source}}};const O=["Default","Plain","Wrapped","MaxHeight"];export{o as Default,r as MaxHeight,e as Plain,a as Wrapped,O as __namedExportsOrder,M as default};
