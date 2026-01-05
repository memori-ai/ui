import{i as e,w as t}from"./iframe-D2QKfIa5.js";import{t as n}from"./jsx-runtime-BItSYGdv.js";import{t as r}from"./classnames-DfTMaiYv.js";var i=t(r(),1);e();var a=n(),o=({content:e,className:t,align:n=`right`,disabled:r=!1,visible:o=!1,children:s})=>(0,a.jsxs)(`div`,{className:(0,i.default)(`memori-tooltip`,`memori-tooltip--align-${n}`,t,{"memori-tooltip--disabled":r,"memori-tooltip--visible":o}),children:[(0,a.jsx)(`div`,{className:`memori-tooltip--content`,children:e}),(0,a.jsx)(`div`,{className:`memori-tooltip--trigger`,children:s})]}),s=o;o.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`union`,raw:`string | JSX.Element | React.ReactNode`,elements:[{name:`string`},{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``},align:{required:!1,tsType:{name:`union`,raw:`| 'left'
| 'right'
| 'topLeft'
| 'topRight'
| 'bottomLeft'
| 'bottomRight'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'topLeft'`},{name:`literal`,value:`'topRight'`},{name:`literal`,value:`'bottomLeft'`},{name:`literal`,value:`'bottomRight'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},visible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var c={title:`UI/Tooltip`,component:s,tags:[`autodocs`],argTypes:{disabled:{control:{type:`boolean`}}},parameters:{controls:{expanded:!0}},render:e=>(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-start`,paddingTop:`10rem`},children:(0,a.jsx)(s,{...e})})};const l={args:{content:`Here is some tooltip content`,children:(0,a.jsx)(`span`,{children:`Hover me`})}},u={args:{content:(0,a.jsxs)(`p`,{children:[`Here we have some JSX, useful for`,` `,(0,a.jsx)(`a`,{href:`https://memori.ai`,rel:`noopener noreferrer`,target:`_blank`,children:`links`}),`, for example.`]}),children:(0,a.jsx)(`span`,{children:`Hover me`})}},d={args:{content:`Here is some tooltip content but I am disabled`,children:(0,a.jsx)(`span`,{children:`Hover me`}),disabled:!0}},f={args:{content:`Here is some tooltip content displayed by default as I am controlled`,children:(0,a.jsx)(`span`,{children:`Hover me`}),visible:!0}},p={args:{content:`Here is some tooltip content`,children:(0,a.jsx)(`span`,{children:`Hover me`}),align:`left`,visible:!0},render:e=>(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,paddingTop:`10rem`},children:(0,a.jsx)(s,{...e})})},m={args:{content:`Here is some tooltip content`,children:(0,a.jsx)(`span`,{children:`Hover me`}),align:`right`,visible:!0}},h={args:{content:`Here is some tooltip content`,children:(0,a.jsx)(`span`,{children:`Hover me`}),align:`topLeft`,visible:!0},render:e=>(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,paddingTop:`10rem`},children:(0,a.jsx)(s,{...e})})},g={args:{content:`Here is some tooltip content`,children:(0,a.jsx)(`span`,{children:`Hover me`}),align:`topRight`,visible:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content but I am disabled',
    children: <span>Hover me</span>,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content displayed by default as I am controlled',
    children: <span>Hover me</span>,
    visible: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'right',
    visible: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topRight',
    visible: true
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`WithJSXContent`,`Disabled`,`VisibleControlled`,`AlignLeft`,`AlignRight`,`AlignTopLeft`,`AlignTopRight`];export{p as AlignLeft,m as AlignRight,h as AlignTopLeft,g as AlignTopRight,l as Default,d as Disabled,f as VisibleControlled,u as WithJSXContent,_ as __namedExportsOrder,c as default};