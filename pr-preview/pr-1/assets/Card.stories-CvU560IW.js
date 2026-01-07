import{i as e,w as t}from"./iframe-BzprLN2E.js";import{t as n}from"./jsx-runtime-DqxaB3QT.js";import{t as r}from"./classnames-RvC9G2Pp.js";import"./createLucideIcon-6Ki3NmCX.js";import{t as i}from"./Spin-DtfSI6XV.js";var a=t(r(),1),o=t(e(),1),s={card:`_card_tzi3l_5`,cover:`_cover_tzi3l_26`,body:`_body_tzi3l_38`,title:`_title_tzi3l_43`,description:`_description_tzi3l_51`,elevated:`_elevated_tzi3l_63`,outlined:`_outlined_tzi3l_71`,"padding-none":`_padding-none_tzi3l_87`,"padding-sm":`_padding-sm_tzi3l_91`,"padding-md":`_padding-md_tzi3l_95`,"padding-lg":`_padding-lg_tzi3l_99`,interactive:`_interactive_tzi3l_117`},c=n();const l=o.forwardRef(({children:e,className:t,style:n,variant:r=`elevated`,padding:o=`md`,component:l=`div`,focusable:u,onClick:d,title:f,description:p,cover:m,loading:h=!1,hoverable:g=!1,..._},v)=>{let y=!!d||u===!0||g===!0,b=y||u?0:void 0,x=(0,a.default)(s.card,s[r],y&&s.interactive,t),S=(0,a.default)(s.body,s[`padding-${o}`]);return(0,c.jsxs)(l,{ref:v,className:x,style:n,tabIndex:b,onClick:d,..._,children:[m&&(0,c.jsx)(`div`,{className:s.cover,children:m}),(0,c.jsx)(`div`,{className:S,children:(0,c.jsxs)(i,{spinning:h,children:[(f||p)&&(0,c.jsxs)(`div`,{className:s.header,children:[f&&(0,c.jsx)(`div`,{className:s.title,children:f}),p&&(0,c.jsx)(`div`,{className:s.description,children:p})]}),e]})})]})});l.displayName=`Card`;var u=l;l.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content of the card`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles`},variant:{required:!1,tsType:{name:`union`,raw:`'elevated' | 'outlined'`,elements:[{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'outlined'`}]},description:`Visual variant of the card
@default 'elevated'`,defaultValue:{value:`'elevated'`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`'none' | 'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Controls the padding inside the card body
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},component:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:`Polymorphic component prop: allows rendering the card as a different HTML element
@default 'div'`,defaultValue:{value:`'div'`,computed:!1}},focusable:{required:!1,tsType:{name:`boolean`},description:`If true, the card will be focusable and react to keyboard events (adds tabIndex=0)
automatically if onClick is provided.`},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Card title`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Card description`},cover:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Card cover image (rendered at the top, full width)`},loading:{required:!1,tsType:{name:`boolean`},description:`Whether to show a loading spinner`,defaultValue:{value:`false`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:`Use hover styles (lift effect)`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]};var d={title:`Components/Card`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`radio`,options:[`elevated`,`outlined`],description:`Visual style of the card`},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`],description:`Internal padding of the card`},style:{control:`object`},className:{control:`text`}}};const f={args:{children:(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{style:{margin:`0 0 8px 0`},children:`Card Title`}),(0,c.jsx)(`p`,{style:{margin:0,color:`var(--color-neutral-600)`},children:`This is a basic card component acting as a container for content.`})]}),variant:`elevated`,padding:`md`,style:{width:300}}},p={args:{...f.args,variant:`outlined`}},m={args:{...f.args,onClick:()=>alert(`Card clicked!`),hoverable:!0,style:{width:300}},render:e=>(0,c.jsxs)(u,{...e,children:[(0,c.jsx)(`h3`,{style:{margin:`0 0 8px 0`},children:`Interactive Card`}),(0,c.jsx)(`p`,{style:{margin:0,color:`var(--color-neutral-600)`},children:`Click me to trigger an action. I have hover states and focus rings.`})]})},h={render:e=>(0,c.jsxs)(u,{...e,padding:`none`,style:{width:300,overflow:`hidden`},children:[(0,c.jsx)(`div`,{style:{height:140,backgroundColor:`var(--color-secondary-200)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--color-secondary-700)`},children:`Image / Cover`}),(0,c.jsxs)(`div`,{style:{padding:`var(--spacing-md)`},children:[(0,c.jsx)(`h3`,{style:{margin:`0 0 8px 0`},children:`Card with Image`}),(0,c.jsx)(`p`,{style:{margin:0,color:`var(--color-neutral-600)`},children:`Example with no padding on the card itself, but custom padding in content.`})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Card Title</h3>
        <p style={{
        margin: 0,
        color: 'var(--color-neutral-600)'
      }}>
          This is a basic card component acting as a container for content.
        </p>
      </div>,
    variant: 'elevated',
    padding: 'md',
    style: {
      width: 300
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => alert('Card clicked!'),
    hoverable: true,
    style: {
      width: 300
    }
  },
  render: args => <Card {...args}>
      <h3 style={{
      margin: '0 0 8px 0'
    }}>Interactive Card</h3>
      <p style={{
      margin: 0,
      color: 'var(--color-neutral-600)'
    }}>
        Click me to trigger an action. I have hover states and focus rings.
      </p>
    </Card>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} padding="none" style={{
    width: 300,
    overflow: 'hidden'
  }}>
      <div style={{
      height: 140,
      backgroundColor: 'var(--color-secondary-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-secondary-700)'
    }}>
        Image / Cover
      </div>
      <div style={{
      padding: 'var(--spacing-md)'
    }}>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Card with Image</h3>
        <p style={{
        margin: 0,
        color: 'var(--color-neutral-600)'
      }}>
          Example with no padding on the card itself, but custom padding in
          content.
        </p>
      </div>
    </Card>
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`Outlined`,`Interactive`,`WithImage`];export{f as Default,m as Interactive,p as Outlined,h as WithImage,g as __namedExportsOrder,d as default};