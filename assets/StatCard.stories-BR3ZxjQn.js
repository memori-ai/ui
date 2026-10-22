import{j as e}from"./iframe-DQnDAKDD.js";import{S as a}from"./StatCard-CHJya0Q_.js";import{M as s}from"./messages-square-BIiIsXI4.js";import"./preload-helper-Ct5FWWRu.js";import"./index-DmXSnq-J.js";import"./createLucideIcon-C4Q6ZgnJ.js";const m={title:"Contenuto/StatCard",component:a,tags:["autodocs"],args:{label:"Messaggi",value:"12.4k",delta:"+8% vs periodo prec.",trend:"up"},argTypes:{trend:{control:"select",options:["up","down","neutral"],table:{defaultValue:{summary:"neutral"}}},variant:{control:"select",options:["outlined","plain"],table:{defaultValue:{summary:"outlined"}}},label:{control:"text"},value:{control:"text"},delta:{control:"text"},icon:{control:!1}},parameters:{controls:{expanded:!0},docs:{description:{component:"One key figure with label and optional comparison. `trend` colors the delta and adds an arrow; keep the direction in the text too. Use `StatCard.Grid` for a responsive row."}}}},r={render:n=>e.jsx("div",{style:{maxWidth:260},children:e.jsx(a,{...n})})},t={render:()=>e.jsxs(a.Grid,{children:[e.jsx(a,{label:"Messaggi",value:"12.4k",delta:"+8% vs periodo prec.",trend:"up",icon:e.jsx(s,{size:14})}),e.jsx(a,{label:"Sessioni",value:"862",delta:"+3% vs periodo prec.",trend:"up"}),e.jsx(a,{label:"Token GenAI",value:"41k",delta:"−4% vs periodo prec.",trend:"down"}),e.jsx(a,{label:"Utenti unici",value:"318",delta:"Invariato"})]})},o={args:{variant:"plain",delta:void 0,label:"Token totali",value:"312"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 260
  }}>
      <StatCard {...args} />
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <StatCard.Grid>
      <StatCard label="Messaggi" value="12.4k" delta="+8% vs periodo prec." trend="up" icon={<MessagesSquare size={14} />} />
      <StatCard label="Sessioni" value="862" delta="+3% vs periodo prec." trend="up" />
      <StatCard label="Token GenAI" value="41k" delta="−4% vs periodo prec." trend="down" />
      <StatCard label="Utenti unici" value="318" delta="Invariato" />
    </StatCard.Grid>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    delta: undefined,
    label: 'Token totali',
    value: '312'
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","Grid","Plain"];export{r as Default,t as Grid,o as Plain,v as __namedExportsOrder,m as default};
