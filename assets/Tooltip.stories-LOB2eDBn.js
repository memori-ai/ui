import{b as e,o as t}from"./iframe-Lykv21fv.js";import{t as n}from"./jsx-runtime-BjbrseIk.js";import{t as r}from"./compiler-runtime-opEaryQp.js";import{t as i}from"./classnames-Ccsu6dJt.js";var a=e(i(),1),o=r();t();var s=n(),c=e=>{let t=(0,o.c)(13),{content:n,className:r,align:i,disabled:c,visible:l,children:u}=e,d=i===void 0?`right`:i,f=c===void 0?!1:c,p=l===void 0?!1:l,m=`memori-tooltip--align-${d}`,h;t[0]!==r||t[1]!==f||t[2]!==m||t[3]!==p?(h=(0,a.default)(`memori-tooltip`,m,r,{"memori-tooltip--disabled":f,"memori-tooltip--visible":p}),t[0]=r,t[1]=f,t[2]=m,t[3]=p,t[4]=h):h=t[4];let g;t[5]===n?g=t[6]:(g=(0,s.jsx)(`div`,{className:`memori-tooltip--content`,children:n}),t[5]=n,t[6]=g);let _;t[7]===u?_=t[8]:(_=(0,s.jsx)(`div`,{className:`memori-tooltip--trigger`,children:u}),t[7]=u,t[8]=_);let v;return t[9]!==h||t[10]!==g||t[11]!==_?(v=(0,s.jsxs)(`div`,{className:h,children:[g,_]}),t[9]=h,t[10]=g,t[11]=_,t[12]=v):v=t[12],v},l=c;c.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``},align:{required:!1,tsType:{name:`union`,raw:`| 'left'
| 'right'
| 'topLeft'
| 'topRight'
| 'bottomLeft'
| 'bottomRight'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'topLeft'`},{name:`literal`,value:`'topRight'`},{name:`literal`,value:`'bottomLeft'`},{name:`literal`,value:`'bottomRight'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},visible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var u={title:`UI/Tooltip`,component:l,tags:[`autodocs`],argTypes:{disabled:{control:{type:`boolean`}}},parameters:{controls:{expanded:!0}},render:e=>(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-start`,paddingTop:`10rem`},children:(0,s.jsx)(l,{...e})})};const d={args:{content:`Here is some tooltip content`,children:(0,s.jsx)(`span`,{children:`Hover me`})}},f={args:{content:(0,s.jsxs)(`p`,{children:[`Here we have some JSX, useful for`,` `,(0,s.jsx)(`a`,{href:`https://memori.ai`,rel:`noopener noreferrer`,target:`_blank`,children:`links`}),`, for example.`]}),children:(0,s.jsx)(`span`,{children:`Hover me`})}},p={args:{content:`Here is some tooltip content but I am disabled`,children:(0,s.jsx)(`span`,{children:`Hover me`}),disabled:!0}},m={args:{content:`Here is some tooltip content displayed by default as I am controlled`,children:(0,s.jsx)(`span`,{children:`Hover me`}),visible:!0}},h={args:{content:`Here is some tooltip content`,children:(0,s.jsx)(`span`,{children:`Hover me`}),align:`left`,visible:!0},render:e=>(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,paddingTop:`10rem`},children:(0,s.jsx)(l,{...e})})},g={args:{content:`Here is some tooltip content`,children:(0,s.jsx)(`span`,{children:`Hover me`}),align:`right`,visible:!0}},_={args:{content:`Here is some tooltip content`,children:(0,s.jsx)(`span`,{children:`Hover me`}),align:`topLeft`,visible:!0},render:e=>(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,paddingTop:`10rem`},children:(0,s.jsx)(l,{...e})})},v={args:{content:`Here is some tooltip content`,children:(0,s.jsx)(`span`,{children:`Hover me`}),align:`topRight`,visible:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: <p>
        Here we have some JSX, useful for{' '}
        <a href="https://memori.ai" rel="noopener noreferrer" target="_blank">
          links
        </a>
        , for example.
      </p>,
    children: <span>Hover me</span>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content but I am disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content displayed by default as I am controlled',
    children: <span>Hover me</span>,
    visible: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'left',
    visible: true
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10rem'
  }}>
      <Tooltip {...args} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'right',
    visible: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topLeft',
    visible: true
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10rem'
  }}>
      <Tooltip {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topRight',
    visible: true
  }
}`,...v.parameters?.docs?.source}}};const y=[`Default`,`WithJSXContent`,`Disabled`,`VisibleControlled`,`AlignLeft`,`AlignRight`,`AlignTopLeft`,`AlignTopRight`];export{h as AlignLeft,g as AlignRight,_ as AlignTopLeft,v as AlignTopRight,d as Default,p as Disabled,m as VisibleControlled,f as WithJSXContent,y as __namedExportsOrder,u as default};