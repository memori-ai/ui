import{b as e,o as t}from"./iframe-Lykv21fv.js";import{t as n}from"./jsx-runtime-BjbrseIk.js";import{t as r}from"./compiler-runtime-opEaryQp.js";import{t as i}from"./classnames-Ccsu6dJt.js";import"./Loading-lNflzFeX.js";import"./Button-CzhZo3GH.js";import{t as a}from"./Button-DwnnxbOq.js";var o=e(i(),1),s=r(),c=e(t(),1),l=n(),u=e=>{let t=(0,s.c)(25),{open:n,onClose:r,children:i,className:a,trigger:u,placement:d}=e,f=n===void 0?!1:n,p=d===void 0?`bottom-right`:d,m=(0,c.useRef)(null),[h,g]=(0,c.useState)(f),_,v;t[0]===f?(_=t[1],v=t[2]):(_=()=>{g(f)},v=[f],t[0]=f,t[1]=_,t[2]=v),(0,c.useEffect)(_,v);let y,b;t[3]!==h||t[4]!==r?(y=()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&(g(!1),r?.())};return h&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},b=[h,r],t[3]=h,t[4]=r,t[5]=y,t[6]=b):(y=t[5],b=t[6]),(0,c.useEffect)(y,b);let x;t[7]===h?x=t[8]:(x=()=>{g(!h)},t[7]=h,t[8]=x);let S=x,C;t[9]===h?C=t[10]:(C=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),g(!h))},t[9]=h,t[10]=C);let w=C,T;t[11]===a?T=t[12]:(T=(0,o.default)(`memori-dropdown`,a),t[11]=a,t[12]=T);let E;t[13]!==S||t[14]!==w||t[15]!==u?(E=(0,l.jsx)(`div`,{className:`memori-dropdown--trigger`,onClick:S,onKeyDown:w,tabIndex:0,children:u}),t[13]=S,t[14]=w,t[15]=u,t[16]=E):E=t[16];let D;t[17]!==i||t[18]!==h||t[19]!==p?(D=h&&(0,l.jsx)(`div`,{className:(0,o.default)(`memori-dropdown--content`,`memori-dropdown--content--${p}`),children:i}),t[17]=i,t[18]=h,t[19]=p,t[20]=D):D=t[20];let O;return t[21]!==E||t[22]!==D||t[23]!==T?(O=(0,l.jsxs)(`div`,{className:T,ref:m,children:[E,D]}),t[21]=E,t[22]=D,t[23]=T,t[24]=O):O=t[24],O},d=u;u.__docgenInfo={description:``,methods:[],displayName:`Dropdown`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},trigger:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},placement:{required:!1,tsType:{name:`union`,raw:`'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'`,elements:[{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-right'`},{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-right'`}]},description:``,defaultValue:{value:`'bottom-right'`,computed:!1}}}};var f={title:`UI/Dropdown`,component:d,argTypes:{open:{control:{type:`boolean`}}},tags:[`autodocs`],parameters:{controls:{expanded:!0}}};const p={args:{open:!1,trigger:(0,l.jsx)(a,{children:`Open`})}},m={args:{open:!0,trigger:(0,l.jsx)(a,{children:`Open`})}},h={args:{className:`custom-dropdown`,trigger:(0,l.jsx)(a,{children:`Open`})}},g={args:{placement:`bottom-left`,trigger:(0,l.jsx)(a,{children:`Open`})}},_={args:{placement:`bottom-right`,trigger:(0,l.jsx)(a,{children:`Open`})}},v={args:{placement:`top-left`,trigger:(0,l.jsx)(a,{children:`Open`})}},y={args:{placement:`top-right`,trigger:(0,l.jsx)(a,{children:`Open`})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    trigger: <Button>Open</Button>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    trigger: <Button>Open</Button>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'custom-dropdown',
    trigger: <Button>Open</Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom-left',
    trigger: <Button>Open</Button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom-right',
    trigger: <Button>Open</Button>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top-left',
    trigger: <Button>Open</Button>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top-right',
    trigger: <Button>Open</Button>
  }
}`,...y.parameters?.docs?.source}}};const b=[`Default`,`Open`,`WithClassName`,`WithPlacementBottomLeft`,`WithPlacementBottomRight`,`WithPlacementTopLeft`,`WithPlacementTopRight`];export{p as Default,m as Open,h as WithClassName,g as WithPlacementBottomLeft,_ as WithPlacementBottomRight,v as WithPlacementTopLeft,y as WithPlacementTopRight,b as __namedExportsOrder,f as default};