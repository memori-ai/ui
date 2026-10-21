import{R as v,j as e}from"./iframe-BXoPY9wl.js";import{c as y}from"./index-CWjFjZSg.js";import"./preload-helper-Ct5FWWRu.js";const t=v.forwardRef(({as:a="h2",size:m="lg",weight:c="semibold",color:i="default",ellipsis:u=!1,className:p,style:h,children:f,...g},x)=>e.jsx(a,{ref:x,className:y("memori-heading",`memori-heading--size-${m}`,`memori-heading--weight-${c}`,i!=="default"&&`memori-heading--color-${i}`,u&&"memori-heading--ellipsis",p),style:h,...g,children:f}));t.displayName="Heading";t.__docgenInfo={description:"In-content heading (card titles, sub-sections, panels).\n\nNot the page/module title: dashboard pages get their title from `Section`\n(which renders the `h1`). Use `Heading` below it, typically as `h2`/`h3`.",methods:[],displayName:"Heading",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"Heading level rendered in the DOM. Pick it for document outline, not for looks\n(use `size` for that).\n@default 'h2'",defaultValue:{value:"'h2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"}]},description:"Font size, mapped to the `--memori-text-size-*` scale.\n@default 'lg'",defaultValue:{value:"'lg'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight, mapped to the `--memori-text-weight-*` scale.\n@default 'semibold'",defaultValue:{value:"'semibold'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'danger'"}]},description:"Semantic text color. `muted` matches secondary copy (Section description).\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},ellipsis:{required:!1,tsType:{name:"boolean"},description:"If `true`, the text is clamped to a single line with a trailing ellipsis.\n@default false",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Heading content."}},composes:["Omit"]};const l=v.forwardRef(({as:a="span",size:m="sm",weight:c="normal",color:i="default",ellipsis:u=!1,className:p,style:h,children:f,...g},x)=>{const S=a;return e.jsx(S,{ref:x,className:y("memori-text",`memori-text--size-${m}`,`memori-text--weight-${c}`,i!=="default"&&`memori-text--color-${i}`,u&&"memori-text--ellipsis",p),style:h,...g,children:f})});l.displayName="Text";l.__docgenInfo={description:"Body copy, captions and inline text. For in-content headings use `Heading`;\nfor the page title use `Section`.",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"union",raw:"'span' | 'p' | 'div' | 'strong' | 'small' | 'label'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'div'"},{name:"literal",value:"'strong'"},{name:"literal",value:"'small'"},{name:"literal",value:"'label'"}]},description:`Element rendered in the DOM.
@default 'span'`,defaultValue:{value:"'span'",computed:!1}},htmlFor:{required:!1,tsType:{name:"string"},description:'Associates the text with a form control. Only meaningful with `as="label"`.'},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"}]},description:"Font size, mapped to the `--memori-text-size-*` scale.\n@default 'sm'",defaultValue:{value:"'sm'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight, mapped to the `--memori-text-weight-*` scale.\n@default 'normal'",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'danger'"}]},description:"Semantic text color. `muted` matches secondary copy (Section description).\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},ellipsis:{required:!1,tsType:{name:"boolean"},description:"If `true`, the text is clamped to a single line with a trailing ellipsis.\n@default false",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text content."}},composes:["Omit"]};const w=["xs","sm","md","lg","xl","2xl","3xl"],T=["normal","medium","semibold","bold"],b=["default","muted","danger"],q={title:"Contenuto/Typography",component:t,tags:["autodocs"],argTypes:{as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Heading level rendered in the DOM",table:{defaultValue:{summary:"h2"}}},size:{control:"select",options:w,description:"Font size from the --memori-text-size-* scale",table:{defaultValue:{summary:"lg"}}},weight:{control:"select",options:T,description:"Font weight from the --memori-text-weight-* scale",table:{defaultValue:{summary:"semibold"}}},color:{control:"select",options:b,description:"Semantic text color",table:{defaultValue:{summary:"default"}}},ellipsis:{control:"boolean",description:"Clamp to a single line with ellipsis"},children:{control:"text"},className:{control:"text"}},parameters:{controls:{expanded:!0},docs:{description:{component:"`Heading` and `Text` cover in-content typography. The page/module title is `Section`, not `Heading`."}}}},s={args:{children:"Agent settings"}},n={render:()=>e.jsx(l,{children:"Body copy rendered as an inline span."})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{children:w.map(a=>e.jsxs(t,{as:"h3",size:a,children:["Heading ",a]},a))}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:T.map(a=>e.jsxs(l,{size:"md",weight:a,children:["Text weight ",a]},a))}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:b.map(a=>e.jsxs(l,{color:a,children:["Text color ",a]},a))})]})},o={render:()=>e.jsxs("div",{style:{width:"220px"},children:[e.jsx(t,{as:"h3",ellipsis:!0,title:"A very long heading that does not fit in the available width",children:"A very long heading that does not fit in the available width"}),e.jsx(l,{as:"p",ellipsis:!0,color:"muted",children:"A long paragraph clamped to one line with a trailing ellipsis."})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{as:"h2",children:"Billing"}),e.jsx(l,{as:"p",color:"muted",children:"Use Heading inside content, below the page Section."}),e.jsx(l,{as:"p",color:"danger",children:"Your payment method has expired."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Agent settings'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Text>Body copy rendered as an inline span.</Text>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const R=["Default","TextDefault","AllVariants","Ellipsis","UnderSection"];export{r as AllVariants,s as Default,o as Ellipsis,n as TextDefault,d as UnderSection,R as __namedExportsOrder,q as default};
