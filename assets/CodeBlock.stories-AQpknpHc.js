import{C as s}from"./CodeBlock-GL0NVk5P.js";import"./iframe-DvN1O8zr.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./useTranslation-DeI4Z5iQ.js";import"./index-ainZ7i9v.js";import"./Button-DRT6abBc.js";import"./useButton-CvJTrdXl.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useStableCallback-CElKwhMG.js";import"./useRenderElement-C14Ha64R.js";import"./loader-circle---oKdcgR.js";import"./createLucideIcon-spauhAJQ.js";import"./check-D_hINgSS.js";import"./copy-DSjLJCc1.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,i=`import Memori from '@memori.ai/memori-react'

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
