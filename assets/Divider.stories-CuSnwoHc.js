import{R as m,j as e}from"./iframe-DjI3B0i0.js";import{c as u}from"./index-BGPjpOUk.js";import"./preload-helper-Ct5FWWRu.js";const r=m.forwardRef(({orientation:t="horizontal",label:n,className:d,style:c},p)=>{const l=t==="horizontal"&&n!=null;return e.jsx("div",{ref:p,role:"separator","aria-orientation":t,"aria-label":l&&(typeof n=="string"||typeof n=="number")?String(n):void 0,className:u("memori-divider",`memori-divider--${t}`,l&&"memori-divider--with-label",d),style:c,children:l&&e.jsx("span",{className:"memori-divider__label",children:n})})});r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Direction of the line. Vertical dividers sit inline between items
(e.g. inside a flex row) and stretch to the row height.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content centered between two lines. Only rendered when horizontal."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const x={title:"Contenuto/Divider",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Direction of the line",table:{defaultValue:{summary:"horizontal"}}},label:{control:"text",description:"Content centered between two lines (horizontal only)"},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"Thin separator between content blocks. Horizontal by default, optionally with a centered label; vertical for inline groups."}}}},a={render:t=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:0},children:"Above"}),e.jsx(r,{...t}),e.jsx("p",{style:{margin:0},children:"Below"})]})},i={args:{label:"or"},render:a.render},s={args:{orientation:"vertical"},render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{children:"Edit"}),e.jsx(r,{...t}),e.jsx("span",{children:"Duplicate"}),e.jsx(r,{...t}),e.jsx("span",{children:"Delete"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(r,{}),e.jsx(r,{label:"Section label"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Right"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <p style={{
      margin: 0
    }}>Above</p>
      <Divider {...args} />
      <p style={{
      margin: 0
    }}>Below</p>
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or'
  },
  render: Default.render
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
      <span>Edit</span>
      <Divider {...args} />
      <span>Duplicate</span>
      <Divider {...args} />
      <span>Delete</span>
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      <Divider />
      <Divider label="Section label" />
      <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const y=["Default","WithLabel","Vertical","AllVariants"];export{o as AllVariants,a as Default,s as Vertical,i as WithLabel,y as __namedExportsOrder,x as default};
