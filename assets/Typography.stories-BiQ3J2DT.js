import{R as T,j as e}from"./iframe-DjI3B0i0.js";import{c as b}from"./index-BGPjpOUk.js";import{T as t}from"./Text-I3foanHL.js";import"./preload-helper-Ct5FWWRu.js";const l=T.forwardRef(({as:a="h2",size:u="lg",weight:h="semibold",color:d="default",ellipsis:g=!1,className:x,style:f,children:y,...v},w)=>e.jsx(a,{ref:w,className:b("memori-heading",`memori-heading--size-${u}`,`memori-heading--weight-${h}`,d!=="default"&&`memori-heading--color-${d}`,g&&"memori-heading--ellipsis",x),style:f,...v,children:y}));l.displayName="Heading";l.__docgenInfo={description:"In-content heading (card titles, sub-sections, panels).\n\nNot the page/module title: dashboard pages get their title from `Section`\n(which renders the `h1`). Use `Heading` below it, typically as `h2`/`h3`.",methods:[],displayName:"Heading",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"Heading level rendered in the DOM. Pick it for document outline, not for looks\n(use `size` for that).\n@default 'h2'",defaultValue:{value:"'h2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"}]},description:"Font size, mapped to the `--memori-text-size-*` scale.\n@default 'lg'",defaultValue:{value:"'lg'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight, mapped to the `--memori-text-weight-*` scale.\n@default 'semibold'",defaultValue:{value:"'semibold'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'danger'"}]},description:"Semantic text color. `muted` matches secondary copy (Section description).\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},ellipsis:{required:!1,tsType:{name:"boolean"},description:"If `true`, the text is clamped to a single line with a trailing ellipsis.\n@default false",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Heading content."}},composes:["Omit"]};const c=["xs","sm","md","lg","xl","2xl","3xl"],m=["normal","medium","semibold","bold"],p=["default","muted","danger"],D={title:"Contenuto/Typography",component:l,tags:["autodocs"],argTypes:{as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Heading level rendered in the DOM",table:{defaultValue:{summary:"h2"}}},size:{control:"select",options:c,description:"Font size from the --memori-text-size-* scale",table:{defaultValue:{summary:"lg"}}},weight:{control:"select",options:m,description:"Font weight from the --memori-text-weight-* scale",table:{defaultValue:{summary:"semibold"}}},color:{control:"select",options:p,description:"Semantic text color",table:{defaultValue:{summary:"default"}}},ellipsis:{control:"boolean",description:"Clamp to a single line with ellipsis"},children:{control:"text"},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"`Heading` and `Text` cover in-content typography. The page/module title is `Section`, not `Heading`."}}}},i={args:{children:"Agent settings"}},s={render:()=>e.jsx(t,{children:"Body copy rendered as an inline span."})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{children:c.map(a=>e.jsxs(l,{as:"h3",size:a,children:["Heading ",a]},a))}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:m.map(a=>e.jsxs(t,{size:"md",weight:a,children:["Text weight ",a]},a))}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:p.map(a=>e.jsxs(t,{color:a,children:["Text color ",a]},a))})]})},r={render:()=>e.jsxs("div",{style:{width:"220px"},children:[e.jsx(l,{as:"h3",ellipsis:!0,title:"A very long heading that does not fit in the available width",children:"A very long heading that does not fit in the available width"}),e.jsx(t,{as:"p",ellipsis:!0,color:"muted",children:"A long paragraph clamped to one line with a trailing ellipsis."})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{as:"h2",children:"Billing"}),e.jsx(t,{as:"p",color:"muted",children:"Use Heading inside content, below the page Section."}),e.jsx(t,{as:"p",color:"danger",children:"Your payment method has expired."})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Agent settings'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Text>Body copy rendered as an inline span.</Text>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        {sizes.map(size => <Heading key={size} as="h3" size={size}>
            Heading {size}
          </Heading>)}
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        {weights.map(weight => <Text key={weight} size="md" weight={weight}>
            Text weight {weight}
          </Text>)}
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        {colors.map(color => <Text key={color} color={color}>
            Text color {color}
          </Text>)}
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '220px'
  }}>
      <Heading as="h3" ellipsis title="A very long heading that does not fit in the available width">
        A very long heading that does not fit in the available width
      </Heading>
      <Text as="p" ellipsis color="muted">
        A long paragraph clamped to one line with a trailing ellipsis.
      </Text>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Heading as="h2">Billing</Heading>
      <Text as="p" color="muted">
        Use Heading inside content, below the page Section.
      </Text>
      <Text as="p" color="danger">
        Your payment method has expired.
      </Text>
    </div>
}`,...o.parameters?.docs?.source}}};const A=["Default","TextDefault","AllVariants","Ellipsis","UnderSection"];export{n as AllVariants,i as Default,r as Ellipsis,s as TextDefault,o as UnderSection,A as __namedExportsOrder,D as default};
