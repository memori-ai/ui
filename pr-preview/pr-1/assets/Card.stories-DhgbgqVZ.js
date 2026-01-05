import{i as e,w as t}from"./iframe-By5WqCfY.js";import{t as n}from"./jsx-runtime-B9ysRbLC.js";import"./floating-ui.utils.dom-TkEs6LFG.js";import{t as r}from"./classnames-uFSv7048.js";import"./useRenderElement-BuGGxkHf.js";import{t as i}from"./Button-DBq8ZCcZ.js";import"./Button-DIRJwf5Q.js";import{t as a}from"./Spin-ZBOwhFmy.js";var o=t(r(),1);e();var s=n(),c=({loading:e=!1,className:t,title:n,description:r,cover:i,hoverable:c=!1,children:l,onClick:u})=>(0,s.jsx)(`div`,{onClick:u,onKeyDown:e=>{(e.key===`Enter`||e.key===`Space`)&&u&&u()},role:u?`button`:void 0,tabIndex:u?0:void 0,className:(0,o.default)(`memori-card`,t,{"memori-card--loading":e,"memori-card--with-cover":i,"memori-card--hoverable":c,"memori-card--pointer":!!u}),children:(0,s.jsxs)(a,{spinning:e,children:[i&&(0,s.jsx)(`div`,{className:`memori-card--cover`,children:i}),(0,s.jsxs)(`div`,{className:`memori-card--content`,children:[n&&(0,s.jsx)(`h3`,{className:`memori-card--title`,children:n}),r&&(0,s.jsx)(`p`,{className:`memori-card--description`,children:r}),(0,s.jsx)(`div`,{className:`memori-card--children`,children:l})]})]})}),l=c;c.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},cover:{required:!1,tsType:{name:`union`,raw:`JSX.Element | React.ReactNode | string`,elements:[{name:`JSX.Element`},{name:`ReactReactNode`,raw:`React.ReactNode`},{name:`string`}]},description:``},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};var u={title:`UI/Card`,component:l,tags:[`autodocs`],argTypes:{title:{control:{type:`text`}},description:{control:{type:`text`}},children:{control:{type:`text`}},className:{control:{type:`text`}},loading:{control:{type:`boolean`}}},parameters:{controls:{expanded:!0}}};const d={args:{title:`Card title`,loading:!1}},f={args:{title:`Card title`,description:`Card description`,loading:!1}},p={args:{title:`Card title`,description:`Card description`,loading:!0}},m={args:{title:`Card title`,description:`Card description`,cover:(0,s.jsx)(`img`,{src:`https://picsum.photos/200/300`,alt:`cover`}),loading:!1}},h={args:{title:`Card title`,description:`Card description`,children:(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{children:`Some text`}),(0,s.jsx)(i,{variant:`primary`,children:`Show more`})]}),loading:!1}},g={args:{title:`Card title`,description:`Card description`,loading:!1,hoverable:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    loading: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    cover: <img src="https://picsum.photos/200/300" alt="cover" />,
    loading: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    children: <div>
        <p>Some text</p>
        <Button variant="primary">Show more</Button>
      </div>,
    loading: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: false,
    hoverable: true
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`WithTitleAndDescription`,`Loading`,`WithCover`,`WithChildren`,`Hoverable`];export{d as Default,g as Hoverable,p as Loading,h as WithChildren,m as WithCover,f as WithTitleAndDescription,_ as __namedExportsOrder,u as default};