import{j as e}from"./iframe-DvN1O8zr.js";import{B as t}from"./Badge-CNqMdukA.js";import{B as c}from"./bell-D4SE5yyl.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D1Up17BF.js";import"./createLucideIcon-spauhAJQ.js";const i=["default","success","warning","error","info","processing"],o=()=>e.jsx("span",{style:{display:"inline-flex",width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:"var(--memori-radius-md)",background:"var(--memori-secondary-background)",border:"1px solid var(--memori-border-color)"},children:e.jsx(c,{size:20,"aria-hidden":"true"})}),h={title:"Feedback/Badge",component:t,tags:["autodocs"],argTypes:{count:{control:"number",description:"Number shown in the badge"},max:{control:"number",description:"Maximum count shown before `{max}+`",table:{defaultValue:{summary:"99"}}},dot:{control:"boolean",description:"Renders a dot instead of the count"},showZero:{control:"boolean",description:"Shows a count of 0"},status:{control:"select",options:[void 0,...i],description:"Standalone status dot"},text:{control:"text",description:"Text next to the status dot"},"aria-label":{control:"text",description:"Accessible label for the indicator"},children:{control:!1},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Small count or dot anchored to the top-right of its children, or a standalone status dot with optional text."}}}},a={args:{count:5,"aria-label":"5 notifications",children:e.jsx(o,{})}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsx(t,{count:5,"aria-label":"5 notifications",children:e.jsx(o,{})}),e.jsx(t,{count:120,"aria-label":"120 notifications",children:e.jsx(o,{})}),e.jsx(t,{count:12,max:9,"aria-label":"12 notifications",children:e.jsx(o,{})}),e.jsx(t,{dot:!0,"aria-label":"New notifications",children:e.jsx(o,{})}),e.jsx(t,{count:0,children:e.jsx(o,{})}),e.jsx(t,{count:0,showZero:!0,"aria-label":"No notifications",children:e.jsx(o,{})}),e.jsx(t,{count:7})]})},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(s=>e.jsx(t,{status:s,text:s},s))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    'aria-label': '5 notifications',
    children: <Anchor />
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>
      <Badge count={5} aria-label="5 notifications">
        <Anchor />
      </Badge>
      <Badge count={120} aria-label="120 notifications">
        <Anchor />
      </Badge>
      <Badge count={12} max={9} aria-label="12 notifications">
        <Anchor />
      </Badge>
      <Badge dot aria-label="New notifications">
        <Anchor />
      </Badge>
      <Badge count={0}>
        <Anchor />
      </Badge>
      <Badge count={0} showZero aria-label="No notifications">
        <Anchor />
      </Badge>
      <Badge count={7} />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {statuses.map(status => <Badge key={status} status={status} text={status} />)}
    </div>
}`,...n.parameters?.docs?.source}}};const g=["Default","States","AllVariants"];export{n as AllVariants,a as Default,r as States,g as __namedExportsOrder,h as default};
