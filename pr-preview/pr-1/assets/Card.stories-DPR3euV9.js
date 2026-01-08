import{i as e,w as t}from"./iframe-DMsFkDbs.js";import{t as n}from"./jsx-runtime-s6AK7i7Z.js";import{t as r}from"./classnames-D2mCmNFl.js";import{t as i}from"./Spin-DWQ9QyWR.js";var a=t(r(),1),o=t(e(),1),s=n();const c=o.forwardRef(({children:e,className:t,style:n,variant:r=`elevated`,padding:o=`md`,component:c=`div`,focusable:l,onClick:u,title:d,description:f,cover:p,loading:m=!1,hoverable:h=!1,...g},_)=>{let v=!!u||l===!0||h===!0,y=v||l?0:void 0,b=(0,a.default)(`memori-card`,r===`elevated`?`memori-card--elevated`:`memori-card--outlined`,v&&`memori-card--interactive`,t),x=(0,a.default)(`memori-card__body`,`memori-card__body--padding-${o}`);return(0,s.jsxs)(c,{ref:_,className:b,style:n,tabIndex:y,onClick:u,...g,children:[p&&(0,s.jsx)(`div`,{className:`memori-card__cover`,children:p}),(0,s.jsx)(`div`,{className:x,children:(0,s.jsxs)(i,{spinning:m,children:[(d||f)&&(0,s.jsxs)(`div`,{className:`memori-card__header`,children:[d&&(0,s.jsx)(`div`,{className:`memori-card__title`,children:d}),f&&(0,s.jsx)(`div`,{className:`memori-card__description`,children:f})]}),e]})})]})});c.displayName=`Card`;var l=c;c.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content of the card`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles`},variant:{required:!1,tsType:{name:`union`,raw:`'elevated' | 'outlined'`,elements:[{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'outlined'`}]},description:`Visual variant of the card
@default 'elevated'`,defaultValue:{value:`'elevated'`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`'none' | 'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Controls the padding inside the card body
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},component:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:`Polymorphic component prop: allows rendering the card as a different HTML element
@default 'div'`,defaultValue:{value:`'div'`,computed:!1}},focusable:{required:!1,tsType:{name:`boolean`},description:`If true, the card will be focusable and react to keyboard events (adds tabIndex=0)
automatically if onClick is provided.`},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Card title`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Card description`},cover:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Card cover image (rendered at the top, full width)`},loading:{required:!1,tsType:{name:`boolean`},description:`Whether to show a loading spinner`,defaultValue:{value:`false`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:`Use hover styles (lift effect)`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]};var u={title:`Components/Card`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`radio`,options:[`elevated`,`outlined`],description:`Visual style of the card`},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`],description:`Internal padding of the card`},style:{control:`object`},className:{control:`text`}}};const d={args:{children:(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{style:{margin:`0 0 8px 0`},children:`Card Title`}),(0,s.jsx)(`p`,{style:{margin:0,color:`var(--color-neutral-600)`},children:`This is a basic card component acting as a container for content.`})]}),variant:`elevated`,padding:`md`,style:{width:300}}},f={args:{...d.args,variant:`outlined`}},p={args:{...d.args,onClick:()=>alert(`Card clicked!`),hoverable:!0,style:{width:300}},render:e=>(0,s.jsxs)(l,{...e,children:[(0,s.jsx)(`h3`,{style:{margin:`0 0 8px 0`},children:`Interactive Card`}),(0,s.jsx)(`p`,{style:{margin:0,color:`var(--color-neutral-600)`},children:`Click me to trigger an action. I have hover states and focus rings.`})]})},m={render:e=>(0,s.jsxs)(l,{...e,padding:`none`,style:{width:300,overflow:`hidden`},children:[(0,s.jsx)(`div`,{style:{height:140,backgroundColor:`var(--color-secondary-200)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--color-secondary-700)`},children:`Image / Cover`}),(0,s.jsxs)(`div`,{style:{padding:`var(--spacing-md)`},children:[(0,s.jsx)(`h3`,{style:{margin:`0 0 8px 0`},children:`Card with Image`}),(0,s.jsx)(`p`,{style:{margin:0,color:`var(--color-neutral-600)`},children:`Example with no padding on the card itself, but custom padding in content.`})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'outlined'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`Outlined`,`Interactive`,`WithImage`];export{d as Default,p as Interactive,f as Outlined,m as WithImage,h as __namedExportsOrder,u as default};