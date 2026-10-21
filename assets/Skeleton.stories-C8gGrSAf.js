import{R as w,j as e}from"./iframe-BXoPY9wl.js";import{c as d}from"./index-CWjFjZSg.js";import"./preload-helper-Ct5FWWRu.js";const x=t=>typeof t=="number"?`${t}px`:t,r=w.forwardRef(({variant:t="text",width:g,height:f,lines:y=1,className:m,style:p},h)=>{const l=x(g),a=x(f);if(t==="text"){const c=Math.max(1,Math.floor(y));return e.jsx("span",{ref:h,"aria-hidden":"true",className:d("memori-skeleton","memori-skeleton--text",m),style:{width:l,...p},children:Array.from({length:c},(b,u)=>e.jsx("span",{className:d("memori-skeleton__shape","memori-skeleton__line",c>1&&u===c-1&&"memori-skeleton__line--last"),style:a!=null?{height:a}:void 0},u))})}const v=t==="circle"?l??a:l,S=t==="circle"?a??l:a;return e.jsx("span",{ref:h,"aria-hidden":"true",className:d("memori-skeleton","memori-skeleton__shape",`memori-skeleton--${t}`,m),style:{width:v,height:S,...p}})});r.displayName="Skeleton";r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'rect' | 'circle'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'rect'"},{name:"literal",value:"'circle'"}]},description:`Shape of the placeholder.
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the placeholder. Numbers are pixels.\nFor `circle`, defaults to `height` when only that is set."},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height of the placeholder (per line for `text`). Numbers are pixels.\nFor `circle`, defaults to `width` when only that is set."},lines:{required:!1,tsType:{name:"number"},description:"Number of lines for the `text` variant. The last line is shorter when > 1.\n@default 1",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const N={title:"Feedback/Skeleton",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","rect","circle"],description:"Shape of the placeholder",table:{defaultValue:{summary:"text"}}},width:{control:"text",description:"Width (numbers are pixels)"},height:{control:"text",description:"Height, per line for text (numbers are pixels)"},lines:{control:{type:"number",min:1},description:"Number of lines for the text variant",table:{defaultValue:{summary:"1"}}},className:{control:"text",description:"Additional CSS class name"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Decorative loading placeholder (`aria-hidden`). Shimmers when motion is allowed, pulses opacity under `prefers-reduced-motion: reduce`. Announce loading on the container (e.g. `aria-busy`)."}}}},s={},i={render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--memori-spacing-lg)",maxWidth:"24rem"},children:[e.jsx(r,{variant:"text",lines:3}),e.jsx(r,{variant:"rect",height:120}),e.jsx(r,{variant:"circle",width:48})]})},n={args:{variant:"text",lines:4,width:320}},o={render:()=>e.jsxs("div",{"aria-busy":"true",style:{display:"flex",gap:"var(--memori-spacing-md)",alignItems:"center",maxWidth:"24rem"},children:[e.jsx(r,{variant:"circle"}),e.jsx("div",{style:{flex:1},children:e.jsx(r,{lines:2,height:12})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Single text line.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--memori-spacing-lg)',
    maxWidth: '24rem'
  }}>
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="rect" height={120} />
      <Skeleton variant="circle" width={48} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Text, rect and circle.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 4,
    width: 320
  }
}`,...n.parameters?.docs?.source},description:{story:"Multi-line paragraph placeholder.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" style={{
    display: 'flex',
    gap: 'var(--memori-spacing-md)',
    alignItems: 'center',
    maxWidth: '24rem'
  }}>
      <Skeleton variant="circle" />
      <div style={{
      flex: 1
    }}>
        <Skeleton lines={2} height={12} />
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Composed card-like placeholder.",...o.parameters?.docs?.description}}};const T=["Default","AllVariants","Paragraph","Composition"];export{i as AllVariants,o as Composition,s as Default,n as Paragraph,T as __namedExportsOrder,N as default};
