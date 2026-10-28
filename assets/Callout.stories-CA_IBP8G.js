import{j as e}from"./iframe-DvN1O8zr.js";import{C as o}from"./Callout-BX6qK14k.js";import{B as i}from"./Button-DRT6abBc.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./createLucideIcon-spauhAJQ.js";import"./triangle-alert-C2lv_t3B.js";import"./circle-check-C9uPIOeU.js";import"./info-ByTr5ib1.js";import"./useButton-CvJTrdXl.js";import"./floating-ui.utils.dom-BsOq6spr.js";import"./useStableCallback-CElKwhMG.js";import"./useRenderElement-C14Ha64R.js";import"./loader-circle---oKdcgR.js";const x={title:"Feedback/Callout",component:o,tags:["autodocs"],args:{severity:"info",title:"Novità: Canali di messaggistica",children:"Collega Telegram e WhatsApp ai tuoi Agenti dalla sezione Integrazioni."},argTypes:{severity:{control:"select",options:["info","success","warning","error"],table:{defaultValue:{summary:"info"}}},title:{control:"text"},children:{control:"text"},action:{control:!1},icon:{control:!1}},parameters:{controls:{expanded:!0},docs:{description:{component:"Inline, persistent message in the page flow (notices, warnings, validation summaries). For transient notifications use `Alert` toasts."}}}},t={},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(o,{severity:"info",title:"Info",children:"Le domande senza risposta sono disponibili con l'IA generativa disattivata."}),e.jsx(o,{severity:"success",title:"Pubblicato",children:"L'agente è online."}),e.jsx(o,{severity:"warning",children:'Non conosco la parola "blendshape"'}),e.jsx(o,{severity:"error",title:"Connessione non riuscita",children:"Controlla l'URL del server MCP e riprova."})]})},r={args:{severity:"warning",title:void 0,children:'Non conosco la parola "blendshape"',action:e.jsx(i,{variant:"outline",size:"sm",children:"Insegnamela"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
