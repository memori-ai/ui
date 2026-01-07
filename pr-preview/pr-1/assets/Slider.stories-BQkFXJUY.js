import{i as e,w as t}from"./iframe-Bi_xfY0J.js";import"./react-dom-DHKxwd74.js";import{t as n}from"./jsx-runtime-BiOnZeK0.js";import{t as r}from"./listbox-BV1XyiJ6.js";import"./open-closed-YCM9D4cj.js";import"./portal-lHEM2OH-.js";import"./floating-ui.utils.dom-CMQ-BUtD.js";import"./floating-ui.react-dom-332fqe4x.js";import{t as i}from"./classnames-Bq-rLKjT.js";var a=t(i(),1),o=t(e(),1),s=n(),c=({min:e=0,max:t=100,step:n=1,defaultValue:i=50,label:c,onChange:l,disabled:u=!1})=>{let[d,f]=(0,o.useState)(i),[p,m]=(0,o.useState)(!1),h=(0,o.useRef)(null),g=(d-e)/(t-e)*100,_=[];for(let n=e;n<=t;n+=(t-e)/4)_.push(Math.round(n));let v=r=>{if(!h.current)return d;let i=h.current.getBoundingClientRect(),a=r-i.left,o=i.width,s=Math.max(0,Math.min(100,a/o*100)),c=Math.round(s/100*(t-e)+e),l=Math.round(c/n)*n;return Math.min(Math.max(l,e),t)},y=e=>{if(u)return;m(!0);let t=v(e);f(t),l?.(t)},b=e=>{if(!p||u)return;let t=v(e);f(t),l?.(t)},x=()=>{m(!1)};return(0,o.useEffect)(()=>{let e=e=>{p&&(e.preventDefault(),b(e.touches[0]?.clientX??0))},t=e=>{b(e.clientX)},n=()=>{x()};return p&&(window.addEventListener(`touchmove`,e,{passive:!1}),window.addEventListener(`mousemove`,t),window.addEventListener(`touchend`,n),window.addEventListener(`mouseup`,n)),()=>{window.removeEventListener(`touchmove`,e),window.removeEventListener(`mousemove`,t),window.removeEventListener(`touchend`,n),window.removeEventListener(`mouseup`,n)}},[p]),(0,o.useEffect)(()=>{f(i)},[i]),(0,s.jsxs)(`div`,{className:(0,a.default)(`memori--slider-container`,{"memori--slider-disabled":u}),style:{"--percentage":`${g}%`},children:[(0,s.jsxs)(`div`,{className:`memori--slider-header`,children:[c&&(0,s.jsx)(`div`,{className:`memori--slider-label`,children:c}),(0,s.jsx)(`div`,{className:`memori--slider-value`,children:d})]}),(0,s.jsxs)(`div`,{ref:h,className:`memori--slider-track-container`,onMouseDown:e=>y(e.clientX),onTouchStart:e=>y(e.touches[0]?.clientX??0),children:[(0,s.jsx)(`div`,{className:`memori--slider-track`,children:(0,s.jsx)(`div`,{className:`memori--slider-track-fill`})}),(0,s.jsx)(`div`,{className:`memori--slider-marks`,children:_.map(e=>(0,s.jsxs)(`div`,{className:`memori--slider-mark`,children:[(0,s.jsx)(`div`,{className:`memori--slider-mark-line`}),(0,s.jsx)(`span`,{className:`memori--slider-mark-value`,children:e})]},e))}),(0,s.jsx)(r,{value:d,onChange:f,disabled:u,children:(0,s.jsx)(`div`,{className:`memori--slider-thumb`,role:`slider`,"aria-valuemin":e,"aria-valuemax":t,"aria-valuenow":d,tabIndex:u?-1:0})})]})]})},l=c;c.__docgenInfo={description:``,methods:[],displayName:`CustomSlider`,props:{min:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},defaultValue:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`50`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | React.ReactNode`,elements:[{name:`string`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var u={title:`UI/Slider`,component:l,tags:[`autodocs`],argTypes:{min:{control:{type:`number`}},max:{control:{type:`number`}},step:{control:{type:`number`}},defaultValue:{control:{type:`number`}},disabled:{control:{type:`boolean`}},label:{control:{type:`text`}}},parameters:{controls:{expanded:!0}}};const d={args:{min:0,max:100,step:1,defaultValue:50}},f={args:{min:0,max:100,step:10,defaultValue:50}},p={args:{min:0,max:100,step:1,defaultValue:50,label:`Test`}},m={args:{min:0,max:100,step:1,defaultValue:50,disabled:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 50
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    label: 'Test'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`WithStep`,`WithLabel`,`Disabled`];export{d as Default,m as Disabled,p as WithLabel,f as WithStep,h as __namedExportsOrder,u as default};