import{j as e}from"./iframe-DQnDAKDD.js";import{C as o}from"./Callout-Rej8XIm-.js";import{B as i}from"./Button-Bpfv0ff0.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./createLucideIcon-C4Q6ZgnJ.js";import"./triangle-alert-3H1jmGj_.js";import"./circle-check-Bubv_ZIq.js";import"./info-iVYAJnMs.js";import"./useButton-7PT9BvyD.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useStableCallback-D88_nEGo.js";import"./useRenderElement-cOdDho9S.js";import"./loader-circle-CSUD6ElO.js";const x={title:"Feedback/Callout",component:o,tags:["autodocs"],args:{severity:"info",title:"Novità: Canali di messaggistica",children:"Collega Telegram e WhatsApp ai tuoi Agenti dalla sezione Integrazioni."},argTypes:{severity:{control:"select",options:["info","success","warning","error"],table:{defaultValue:{summary:"info"}}},title:{control:"text"},children:{control:"text"},action:{control:!1},icon:{control:!1}},parameters:{controls:{expanded:!0},docs:{description:{component:"Inline, persistent message in the page flow (notices, warnings, validation summaries). For transient notifications use `Alert` toasts."}}}},t={},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(o,{severity:"info",title:"Info",children:"Le domande senza risposta sono disponibili con l'IA generativa disattivata."}),e.jsx(o,{severity:"success",title:"Pubblicato",children:"L'agente è online."}),e.jsx(o,{severity:"warning",children:'Non conosco la parola "blendshape"'}),e.jsx(o,{severity:"error",title:"Connessione non riuscita",children:"Controlla l'URL del server MCP e riprova."})]})},r={args:{severity:"warning",title:void 0,children:'Non conosco la parola "blendshape"',action:e.jsx(i,{variant:"outline",size:"sm",children:"Insegnamela"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <Callout severity="info" title="Info">
        Le domande senza risposta sono disponibili con l&apos;IA generativa
        disattivata.
      </Callout>
      <Callout severity="success" title="Pubblicato">
        L&apos;agente è online.
      </Callout>
      <Callout severity="warning">
        Non conosco la parola &quot;blendshape&quot;
      </Callout>
      <Callout severity="error" title="Connessione non riuscita">
        Controlla l&apos;URL del server MCP e riprova.
      </Callout>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: undefined,
    children: 'Non conosco la parola "blendshape"',
    action: <Button variant="outline" size="sm">
        Insegnamela
      </Button>
  }
}`,...r.parameters?.docs?.source}}};const b=["Default","AllVariants","WithAction"];export{a as AllVariants,t as Default,r as WithAction,b as __namedExportsOrder,x as default};
