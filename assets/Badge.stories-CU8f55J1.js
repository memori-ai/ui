import{r as R,j as e}from"./iframe-BXoPY9wl.js";import{c as b}from"./index-CWjFjZSg.js";import{B as S}from"./bell-Dt8F6q5o.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-KNAk1hxz.js";const a=R.forwardRef(({count:t,max:c=99,dot:i=!1,showZero:y=!1,status:l,text:u,children:m,className:p,style:h,"aria-label":f},g)=>{const j=i||l!=null,d=f?{role:"img","aria-label":f}:{"aria-hidden":j||void 0};if(l)return e.jsxs("span",{ref:g,className:b("memori-badge","memori-badge--status",`memori-badge--status-${l}`,p),style:h,children:[e.jsx("span",{className:"memori-badge__status-dot",...d}),u!=null&&e.jsx("span",{className:"memori-badge__status-text",children:u})]});const x=t===0&&!y,v=i&&!x,B=!i&&t!==void 0&&!x,N=m!=null;return e.jsxs("span",{ref:g,className:b("memori-badge",N?"memori-badge--anchored":"memori-badge--standalone",p),style:h,children:[m,v&&e.jsx("span",{className:"memori-badge__dot",...d}),B&&e.jsx("span",{className:"memori-badge__count",...d,children:t>c?`${c}+`:t})]})});a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{count:{required:!1,tsType:{name:"number"},description:"Number shown in the badge. `0` is hidden unless `showZero` is set."},max:{required:!1,tsType:{name:"number"},description:"Maximum count shown; higher values render as `{max}+`.\n@default 99",defaultValue:{value:"99",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:"If `true`, renders a small dot instead of the count.",defaultValue:{value:"false",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"If `true`, a `count` of `0` is shown.\n@default false",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'processing'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'processing'"}]},description:"Standalone status indicator: a colored dot with optional `text`.\nWhen set, `count` / `dot` / `children` are ignored."},text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text shown next to the status dot. Only used with `status`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Element the badge is anchored to (top-right corner)."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the indicator (e.g. “3 unread messages”).\nRequired for meaning when using `dot` or `status` without `text`."}}};const w=["default","success","warning","error","info","processing"],s=()=>e.jsx("span",{style:{display:"inline-flex",width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:"var(--memori-radius-md)",background:"var(--memori-secondary-background)",border:"1px solid var(--memori-border-color)"},children:e.jsx(S,{size:20,"aria-hidden":"true"})}),C={title:"Feedback/Badge",component:a,tags:["autodocs"],argTypes:{count:{control:"number",description:"Number shown in the badge"},max:{control:"number",description:"Maximum count shown before `{max}+`",table:{defaultValue:{summary:"99"}}},dot:{control:"boolean",description:"Renders a dot instead of the count"},showZero:{control:"boolean",description:"Shows a count of 0"},status:{control:"select",options:[void 0,...w],description:"Standalone status dot"},text:{control:"text",description:"Text next to the status dot"},"aria-label":{control:"text",description:"Accessible label for the indicator"},children:{control:!1},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Small count or dot anchored to the top-right of its children, or a standalone status dot with optional text."}}}},o={args:{count:5,"aria-label":"5 notifications",children:e.jsx(s,{})}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsx(a,{count:5,"aria-label":"5 notifications",children:e.jsx(s,{})}),e.jsx(a,{count:120,"aria-label":"120 notifications",children:e.jsx(s,{})}),e.jsx(a,{count:12,max:9,"aria-label":"12 notifications",children:e.jsx(s,{})}),e.jsx(a,{dot:!0,"aria-label":"New notifications",children:e.jsx(s,{})}),e.jsx(a,{count:0,children:e.jsx(s,{})}),e.jsx(a,{count:0,showZero:!0,"aria-label":"No notifications",children:e.jsx(s,{})}),e.jsx(a,{count:7})]})},r={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:w.map(t=>e.jsx(a,{status:t,text:t},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    'aria-label': '5 notifications',
    children: <Anchor />
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {statuses.map(status => <Badge key={status} status={status} text={status} />)}
    </div>
}`,...r.parameters?.docs?.source}}};const D=["Default","States","AllVariants"];export{r as AllVariants,o as Default,n as States,D as __namedExportsOrder,C as default};
